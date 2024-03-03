# Full Stack Song Management App

This is a full-stack web application for managing songs. It provides functionalities to create, list, update, and remove songs. Additionally, it offers statistics about the songs, artists, albums, genres, and more.

## Technologies Used

### Backend
- **Express.js**: Handles HTTP requests.
- **MongoDB**: Stores data.
- **Mongoose**: Interacts with MongoDB and models data.
- **Docker**: Packages the backend into a container.

### Frontend
- **React.js**: Builds the user interface.
- **Redux Toolkit**: Manages the state of the application.
- **Redux Saga**: Makes calls to the backend REST API.
- **TypeScript**: Used to write type-safe code.
- **Emotion and Styled System**: Styles the application.

## Installation

### Backend
1. Clone this repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install dependencies.
4. Run `docker-compose up` to start the backend server.

### Frontend
1. Navigate to the `frontend` directory.
2. Run `yarn install` to install dependencies.
3. Run `yarn start` to start the frontend development server.

## Usage

1. Once both the backend and frontend servers are running, open your web browser and navigate to `http://localhost:5000` to access the application.
2. Use the interface to manage songs, including adding, updating, and deleting songs.
3. Explore the statistics section to view various insights about the songs, artists, albums, genres, etc.