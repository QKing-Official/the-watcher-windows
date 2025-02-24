import spawn from "cross-spawn";
import start from "./src/loop.js";

async function run() {
  const devProcess = spawn("npm", ["run", "dev"], { stdio: "inherit" });

  await start();

  devProcess.on("close", (code) => {
    console.log(`Dev process exited with code ${code}`);
  });

  devProcess.on("error", (error) => {
    console.error("Error running npm command:", error.message);
  });
}

run();
