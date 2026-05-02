const axios = require("axios");
const path = require("path");

async function Log(level, pkg, message) {
    require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
    const token = process.env.TOKEN;
    try {
        const response = await axios.post(
            "http://20.207.122.201/evaluation-service/logs",
            {
                stack: "backend",
                level: level,
                package: pkg,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;
    } catch (error) {
        return error.response?.data || error.message;
    }
}

module.exports = Log;