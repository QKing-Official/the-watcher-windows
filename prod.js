import { spawn, spawnSync } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

async function run() {
  const buildProcess = spawnSync(npmCommand, ["run", "build"], { stdio: "inherit", shell: true });
  
  if (buildProcess.error) {
    console.error("Error during the build process:", buildProcess.error.message);
    return;
  }

  const prodProcess = spawn(npmCommand, ["run", "start"], { stdio: "inherit", shell: true });

  try {
    const { default: start } = await import("./src/loop.js");
    await start();
  } catch (error) {
    console.error("Error during start function:", error);
    prodProcess.kill();
    return;
  }

  prodProcess.on("close", (code) => {
    console.log(`Production process exited with code ${code}`);
  });

  prodProcess.on("error", (error) => {
    console.error("Error running npm command:", error.message);
  });
}

run();
