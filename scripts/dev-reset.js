#!/usr/bin/env node
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const devDistDir = path.join(root, ".next-dev");
const legacyDistDir = path.join(root, ".next");

function run(command, args, options = {}) {
  return spawnSync(command, args, { stdio: "inherit", shell: false, ...options });
}

// Best-effort kill stale Next processes.
spawnSync("pkill", ["-f", "next dev|next start"], { stdio: "ignore" });

// Give the OS a moment to release file handles.
spawnSync("sleep", ["1"], { stdio: "ignore" });

for (const target of [devDistDir, legacyDistDir]) {
  if (!fs.existsSync(target)) continue;
  try {
    fs.rmSync(target, { recursive: true, force: true, maxRetries: 20, retryDelay: 150 });
    console.log("Reset complete: cleaned", path.basename(target));
  } catch (error) {
    const backup = path.join(root, `${path.basename(target)}-stale-` + Date.now());
    fs.renameSync(target, backup);
    console.log("Moved stale cache to", path.basename(backup));
  }
}
console.log("Dev caches ready.");

const result = run("npm", ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", "3000"]);
process.exit(result.status ?? 1);
