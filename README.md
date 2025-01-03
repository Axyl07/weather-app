# Weather App

This Weather App allows users to check the current weather conditions for any city worldwide. It provides real-time data including temperature, wind speed, and more.

## Features

- **Current Temperature**: Displays the current temperature in both Celsius and Fahrenheit.
- **Weather Conditions**: Shows a brief description of the current weather (e.g., clear sky, rain).
- **Wind**: Provides information on wind speed.
- **Search Functionality**: Allows users to search for weather information by city name.

## Built With

- **HTML/CSS**: For structuring and styling the application.
- **JavaScript**: For dynamic content and API interactions.
- **Webpack**: To bundle JavaScript modules.
- **Visual Crossing API**: For fetching real-time weather data.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Axyl07/weather-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd weather-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

### Usage

1. **Start the development server**:

   ```bash
   npm run start
   ```

2. **Open the application**:

   Navigate to `http://localhost:8080` in your web browser to view the app.

## Deployment

To deploy the application, follow these steps:

1. **Create a new branch for deployment** (if not already created):

   ```bash
   git branch gh-pages
   ```

2. **Merge the main branch into the deployment branch**:

   ```bash
   git checkout gh-pages
   git merge main --no-edit
   ```

3. **Build the application**:

   ```bash
   npm run build
   ```

4. **Push the deployment branch to GitHub**:

   ```bash
   git push origin gh-pages
   ```

The application will be available at `https://axyl07.github.io/weather-app/`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


## Acknowledgements

- [VisualCrossing](https://visualcrossing.com/) for providing the weather data API.
- [Webpack](https://webpack.js.org/) for module bundling.
