const axios = require("axios");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrdjQ1NTNAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDcyOCwiaWF0IjoxNzc3Njk5ODI4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODYzZDM4OTAtMmI3OC00NzBmLTkxN2MtNjZkZGIyZDhiYjBhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidiBrcmlzaG5ha3VtYXIiLCJzdWIiOiJhMTQwMTczNy01ZGI4LTQ4MzQtOTRiMy01ZmJhOTRhZTgyZjAifSwiZW1haWwiOiJrdjQ1NTNAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJ2IGtyaXNobmFrdW1hciIsInJvbGxObyI6InJhMjMxMTAyNjAyMDA3NCIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6ImExNDAxNzM3LTVkYjgtNDgzNC05NGIzLTVmYmE5NGFlODJmMCIsImNsaWVudFNlY3JldCI6InlLRVhKVlBQR0dNdnBxa3IifQ.Wr97GIBnc1gAnfx5lP1lQNAYeGORkXPxYb4HjdBIUIo";

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