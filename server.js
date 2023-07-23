const http = require("http");

const fetch = require("node-fetch");

async function getData() {
    const result = [];
    let stop = false;
    let page = 1;
    const size = 100;
    while (!stop) {
        await fetch(`https://urfu.ru/api/entrant/?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                result.push(...data.items);
                if (data.items.length === 0) {
                    stop = true;
                }
            });
        page++;
    }
    return result;
}

const server = http.createServer(async (req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Headers": "*",
    };

    if (req.method === "OPTIONS") {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (req.url === "/api" && req.method === "GET") {
        const result = await getData();
        res.writeHead(200, { ...headers, "Content-Type": "application/json" });
        res.write(JSON.stringify(result));
        res.end();
    }

    // If no route present
    else {
        res.writeHead(404, { ...headers, "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

const corsOptions = {
    origin: "*",
    methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
