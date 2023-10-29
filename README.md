# SWAPI Web App

## Overview

The SWAPI Web App is a React-based web application that provides information about various resources in the Star Wars universe. It allows users to explore different categories of data, view details of individual items, and track the popularity of viewed items. This README provides an overview of the app's features, structure, and requirements.

## Features

- **Resource Listing**: The app provides lists of different resources, such as people, films, starships, vehicles, species, and planets. Users can navigate between these categories and view a list of items within each category.

- **Resource Details**: By selecting an item from the list, users can access detailed information about a specific resource. The details are presented in a formatted JSON representation.

- **Popularity Tracking**: The app tracks the popularity of viewed items. Each time an item is viewed, it is counted as "popular."

## Requirements

### Technologies Used

- React: The app is built using the React library, which allows for efficient and dynamic rendering of user interfaces.

- React Router: React Router is used for managing the application's routing and enabling navigation between different views.

- Axios: Axios is used for making HTTP requests to the SWAPI (Star Wars API) to retrieve data.

### Project Structure

- `src/components`: This directory contains reusable components used throughout the app, including the Header, ResourceList, and ResourceDetail components.

- `src/api.js`: The API file contains functions to make HTTP requests to the SWAPI and retrieve resource data.

- `src/App.js`: The main application component responsible for routing and rendering different views.

- `src/Components/Cursor.js`: Component is responsible for animating and custom cursor.

- `src/hooks/`: Folder with some useCustom hooks with the responsible of return data, loading and error of api fetching.

- `src/utils/`: Some reuseable functions used in the project

### How to Run the App

1. Install the required dependencies:
  npm install
2. Start the development server:
  npm start

## Usage
- Browse through the available resources by clicking on the navigation links (e.g., People, Films, Starships).

- Select an item from the list to view its details or search by name.

- The app keeps track of viewed items and lists the most popular ones in the "Popular Items" section.

## Credits
- This app uses data from the Star Wars API (SWAPI).

- Built with love by Luis Murillo.