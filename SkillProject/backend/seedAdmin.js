const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/adminModel'); // Make sure the path to the model is correct

// MongoDB connection
mongoose.connect("mongodb+srv://MohanManjhi:Mohan%40121@cluster0.1khns.mongodb.net/Company?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected for seeding'))
    .catch(err => console.log('MongoDB connection error:', err));

// Seed admin data
async function seedAdmin() {
    try {
        const hashedPassword = await bcrypt.hash('admin123', 10); // Change password as needed
        const admin = new Admin({
            email: 'admin@gmail.com',  // Change the email as needed
            password: hashedPassword
        });

        await admin.save();
        console.log('Admin user seeded successfully');
    } catch (err) {
        console.error('Error seeding admin data:', err);
    } finally {
        mongoose.connection.close();
    }
}

// Run the seed function
seedAdmin();
