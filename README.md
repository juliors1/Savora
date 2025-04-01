# Savora Web Application

## Project Overview

The Savora Web Application is designed to help people learn how to cook, discover the healthiest options, and find the fastest ways to prepare meals based on their individual needs. The app will provide an easy-to-use interface where users can save, share, and explore recipes with nutritional data powered by the Spoonacular API. It is aimed at the general public, prioritizing simplicity and accessibility.

## Features

- **User Accounts & Profiles**: Users can create accounts and maintain personal profile pages where they can save their favorite recipes or discover new ones shared by others.  
- **Recipe Pages**: Each recipe comes with detailed instructions, a list of ingredients, and nutritional information. This will help users make informed decisions about their meals.  
- **Explore Page**: Users can search for specific recipes or explore new ones through a search bar. Additionally, a random recipe button will generate random meal ideas.  
- **Rating System**: Recipes will feature a 5-star rating system, allowing users to rate meals based on their personal preferences and experiences.  
- **Spoonacular API Integration**: Nutritional data and meal instructions are fetched from the Spoonacular API to ensure accurate and easy-to-read information.  

## Setup

Follow the steps below to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 14.x or above)  
- [MongoDB](https://www.mongodb.com/) (Local or Cloud Atlas)  
- [npm](https://www.npmjs.com/) (Node Package Manager)  

### Installation Steps

1. Clone the repository
   ```bash
   git clone https://github.com/your-repository-url
   cd savora-web-application
Install dependencies

For the backend (Node.js & Express):

cd backend
npm install
For the frontend (React):

cd frontend
npm install
Set up MongoDB

If you are using MongoDB locally, ensure the service is running. If you're using MongoDB Atlas, create a database and obtain the connection string.

Add the connection string to your config.js file or .env file in the backend directory.

Run the application

In the backend folder, run:


npm run dev

In the frontend folder, run:


npm run dev
The app should now be accessible at http://localhost:3000.

Team Members
Angel Antayhua-Reynoso: Backend Developer (Worked with Express and Node.js)

Michael Du: Database Manager (Managed MongoDB database)

Julio Rojas: Frontend Developer (Worked with React)

Ali Baduqail: Frontend Developer
