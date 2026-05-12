# Movieflix Streaming Platform

## Live Demo
https://movieflix-prod.netlify.app

## Project Overview
**Movieflix Streaming Platform** is a web application that replicates core features of modern streaming platforms such as browsing, trailer playback, and watchlist management. Built with **React** and **TMDb API**.

## Key Features
- **Homepage**: Displays popular, top-rated, and upcoming titles.
- **Video Player**: Displays trailers via TMDb API.
- **Detail Modal**: View more details via a popup.
- **Personal List**: Add movies and TV shows to a watchlist.

## Live Features
- Real-time browsing of trending and popular movies via TMDb API
- Trailer playback for selected titles
- Personal watchlist with add/remove functionality
- Dynamic routing for movie detail pages

## Technologies and Tools
- **React** (Hooks, Components)
- **React Router** (Dynamic routing)
- **TMDb REST API** integration
- **Context API** for state management
- **CSS Modules** & **Material UI** for styling

## Project Structure
- **src/api/** — API calls to TMDb.
- **src/application/** — State management and context.
- **src/presentation/** — UI components (MovieCard, Modal, etc.).

## Motivation
This project was built to deepen my understanding of React ecosystem, API integration, and real-world application architecture similar to modern streaming platforms.

## Deployment
The project is deployed using Netlify with continuous deployment from the main branch.

## How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/StelianaDimitrova/Movieflix-Streaming-Platform.git

2. **Navigate to the project folder:**
   ```bash
   cd Movieflix-Streaming-Platform

3. **Install dependencies:**
   ```bash
   npm install

4. **Create an .env file:**
In the root directory, create a **.env** file and add your key:
   ```bash
   VITE_TMDB_API_KEY=your_api_key_here

5. **Run the development server:**
   ```bash
   npm run dev
