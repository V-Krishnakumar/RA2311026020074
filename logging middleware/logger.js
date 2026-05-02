const axios = require("axios");

async function Log(level, pkg, message) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrdjQ1NTNAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDcyOCwiaWF0IjoxNzc3Njk5ODI4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODYzZDM4OTAtMmI3OC00NzBmLTkxN2MtNjZkZGIyZDhiYjBhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidiBrcmlzaG5ha3VtYXIiLCJzdWIiOiJhMTQwMTczNy01ZGI4LTQ4MzQtOTRiMy01ZmJhOTRhZTgyZjAifSwiZW1haWwiOiJrdjQ1NTNAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJ2IGtyaXNobmFrdW1hciIsInJvbGxObyI6InJhMjMxMTAyNjAyMDA3NCIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6ImExNDAxNzM3LTVkYjgtNDgzNC05NGIzLTVmYmE5NGFlODJmMCIsImNsaWVudFNlY3JldCI6InlLRVhKVlBQR0dNdnBxa3IifQ.Wr97GIBnc1gAnfx5lP1lQNAYeGORkXPxYb4HjdBIUIo";

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