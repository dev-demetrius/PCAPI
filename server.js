const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());

app.get("/stats", (req, res) => {
    const stats = {
        freeMemory: os.freemem(),
        totalMemory: os.totalmem(),
        cpuUsage: os.loadavg(),
        platform: os.platform(),
        uptime: os.uptime(),
    };
    res.json(stats);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
