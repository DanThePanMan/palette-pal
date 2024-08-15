export default async function handler(req, res) {
    const apiUrl = "http://colormind.io/list/";

    const response = await fetch(apiUrl, {
        method: req.method, // Use the same HTTP method
        headers: {
            ...req.headers, // Forward all headers
            "Content-Type": "application/json", // Ensure JSON content type
        },
        body: req.method !== "GET" ? req.body : null, // Forward the request body if it's not a GET request
    });

    const data = await response.json();

    // Respond with the API's response
    res.status(response.status).json(data);
}
