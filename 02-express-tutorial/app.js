const express = require('express'); // Importing Express
const path = require('path'); // Importing Path module
const { products } = require('./data'); // Importing products from data.js
const peopleRouter = require('./routes/people'); // Importing peopleRouter

const app = express(); // Creating an Express application

// Logger middleware function
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
    next(); // Call next() to pass control to the next middleware function or route handler
};

app.use(logger); // Using the logger middleware for all paths

app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data

app.use(express.static(path.join(__dirname, 'public'))); // Serving static files from the "public" directory

// Define a GET route for the URL /api/v1/test
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

// Define a GET route for the URL /api/v1/products
app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

// Define a GET route for retrieving a product by ID
app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); // Extract and parse the productID from the URL parameters
    const product = products.find((p) => p.id === idToFind); // Find the product with the matching ID

    if (product) {
        res.json(product); // Return the product as JSON
    } else {
        res.status(404).json({ message: 'That product was not found.' }); // Return a 404 if the product is not found
    }
});

// Define a GET route for the URL /api/v1/query
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query; // Extract search and limit from query parameters
    let filteredProducts = [...products]; // Copy of products array

    // Filter products based on the search parameter
    if (search) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.toLowerCase().startsWith(search.toLowerCase());
        });
    }

    // Limit the number of products returned
    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }

    // Return the filtered products as JSON
    res.json(filteredProducts);
});

// Use the people router for /api/v1/people path
app.use('/api/v1/people', peopleRouter);

// "Not found" handler
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

const PORT = process.env.PORT || 3000; // Define the port number

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
