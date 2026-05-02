const Log = require("./logger");

async function run() {
    const result = await Log(
        "info",
        "service",
        "Logging middleware initialized successfully"
    );

    console.log(result);
}

run();