const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    ratings: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number }],
    averageRating: { type: Number, default: 0 },
    shared: { type: Boolean, default: false }, // New field for Explore page
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Add this field
});


// Method to calculate average rating
RecipeSchema.methods.calculateAverageRating = function() {
    if (this.ratings.length === 0) {
        this.averageRating = 0;
    } else {
        this.averageRating = this.ratings.reduce((sum, r) => sum + r.rating, 0) / this.ratings.length;
    }
};

module.exports = mongoose.model('Recipe', RecipeSchema);