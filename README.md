# React RoboFreinds App

This repository contains a React app developed as part of a Udemy course. The app displays a list of robots and allows users to search for specific robots. The app utilizes components such as Card, Cardlist, Searchbox, and Scroll.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App.js](#appjs)
  - [card.js](#cardjs)
  - [Cardlist.js](#cardlistjs)
  - [scroll.js](#scrolljs)
  - [searchbox.js](#searchboxjs)
  - [index.js](#indexjs)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

To run the app locally, please follow these steps:

1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Open a terminal and navigate to the project directory.
4. Run the following command to install the project dependencies:
- npm install
5. Once the installation is complete, you can start the app by running:
- npm start


6. This will start the app and open it in your default browser.

## Usage

Upon launching the app, you will see a list of robots along with a search box at the top. You can type in the search box to filter the robots based on their names. The robot cards will dynamically update as you type in the search box.

## Components

### App.js

This is the main component of the app. It manages the state of the robots and the search field. It fetches the robot data from a remote API and updates the state accordingly. It also renders the Cardlist, Searchbox, and Scroll components.

### card.js

This component represents an individual robot card. It displays the robot's name, email, and an image. The image URL is generated using the robohash.org API, which generates unique robot images based on the robot's ID.

### Cardlist.js

This component is responsible for rendering the list of robot cards. It receives an array of robots as a prop and maps over the array to create individual Card components for each robot.

### scroll.js

This component provides a scrollable container for the robot cards. It sets the CSS style properties to enable vertical scrolling and adds a border for visual separation.

### searchbox.js

This component displays a search box at the top of the app. It receives a callback function as a prop, which is triggered whenever the user types in the search box. The callback function updates the search field in the App component's state.

### index.js

This is the entry point of the app. It renders the App component and mounts it to the DOM. It also includes the necessary CSS imports and initializes the robot data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This app was developed as part of a React course on Udemy.


