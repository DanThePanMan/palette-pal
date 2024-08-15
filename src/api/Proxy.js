// api/proxy.js

export default async function handler(req, res) {
    try {
        const response = await fetch("http://colormind.io/api/", {
            method: req.method,
            headers: req.headers,
            body: req.method === "POST" ? req.body : undefined,
        });

        if (!response.ok) {
            throw new Error("Failed to fetch from the API");
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
