const mysql = require('mysql2/promise');

// Set up MySQL connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'employee_management', // The database you created
    waitForConnections: true,
    connectionLimit: 10,  // Adjust the number of connections as needed
    queueLimit: 0
});

// Function to test connection
async function testConnection() {
    try {
        const connection = await db.getConnection();  // Try getting a connection from the pool
        console.log('Successfully connected to the database.');
        connection.release(); // Always release the connection after use
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
    }
}

testConnection();  // Call the function to check connection

module.exports = db;
