const axios = require("axios");
const path = require("path");
const Log = require("../logging middleware/logger");

require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

const token = process.env.TOKEN;

async function fetchData(url, label) {
    await Log("info", "service", `Fetching ${label}`);

    const res = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    await Log("info", "service", `${label} fetched successfully`);

    return res.data;
}

function knapsack(tasks, hours) {
    const n = tasks.length;

    const dp = Array(n + 1)
        .fill(null)
        .map(() => Array(hours + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let h = 0; h <= hours; h++) {
            if (duration <= h) {
                dp[i][h] = Math.max(
                    impact + dp[i - 1][h - duration],
                    dp[i - 1][h]
                );
            } else {
                dp[i][h] = dp[i - 1][h];
            }
        }
    }

    return dp[n][hours];
}

async function main() {
    try {
        await Log(
            "info",
            "service",
            "Vehicle scheduler execution started"
        );

        const depots = await fetchData(
            "http://20.207.122.201/evaluation-service/depots",
            "depots"
        );

        const vehicles = await fetchData(
            "http://20.207.122.201/evaluation-service/vehicles",
            "vehicles"
        );

        for (const depot of depots.depots) {
            await Log(
                "info",
                "service",
                `Running scheduler for Depot ${depot.ID}`
            );

            const best = knapsack(
                vehicles.vehicles,
                depot.MechanicHours
            );

            console.log(
                `Depot ${depot.ID} => Max Impact: ${best}`
            );

            await Log(
                "info",
                "service",
                `Depot ${depot.ID} max impact calculated as ${best}`
            );
        }

        await Log(
            "info",
            "service",
            "Vehicle scheduler execution completed"
        );
    } catch (error) {
        await Log(
            "error",
            "service",
            `Scheduler failed: ${error.message}`
        );

        console.log(error.message);
    }
}

main();