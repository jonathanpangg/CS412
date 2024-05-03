const Redis = require("ioredis");
const redis = new Redis(); // Connect to Redis server

// Function to fetch data from original source (e.g., database)
function fetchDataFromDatabase() {
    // Implement your data retrieval logic here
    return "Data from database";
}

// Function to retrieve data, first from cache, then from database
async function getData(key) {
    // Try to get data from cache
    const cachedData = await redis.get(key);

    if (cachedData) {
        console.log("Data fetched from cache");
        return cachedData;
    } else {
        // If data not found in cache, fetch from database
        const newData = fetchDataFromDatabase();
        // Store data in cache with a TTL (time-to-live) of 60 seconds
        redis.set(key, newData, "EX", 60);
        console.log("Data fetched from database and stored in cache");
        return newData;
    }
}

// Example usage
async function main() {
    const data1 = await getData("key1");
    console.log(data1);

    // Wait for a while to let the cache expire
    await new Promise(resolve => setTimeout(resolve, 70000));

    // Fetch data again
    const data2 = await getData("key1");
    console.log(data2);
}

main();
