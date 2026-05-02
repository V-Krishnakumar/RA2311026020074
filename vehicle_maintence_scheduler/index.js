const axios = require("axios");

require("dotenv").config();
const token = process.env.TOKEN;

async function fetchData(url) {
    const res = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

function knapsack(tasks, hours) {
    const n = tasks.length;
    const dp = Array(n + 1).fill().map(() =>
        Array(hours + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
        const d = tasks[i - 1].Duration;
        const val = tasks[i - 1].Impact;

        for (let h = 0; h <= hours; h++) {
            if (d <= h) {
                dp[i][h] = Math.max(
                    val + dp[i - 1][h - d],
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
    const depots = await fetchData(
        "http://20.207.122.201/evaluation-service/depots"
    );

    const vehicles = await fetchData(
        "http://20.207.122.201/evaluation-service/vehicles"
    );

    for (const depot of depots.depots) {
        const best = knapsack(
            vehicles.vehicles,
            depot.MechanicHours
        );

        console.log(
            `Depot ${depot.ID} => Max Impact: ${best}`
        );
    }
}

main();