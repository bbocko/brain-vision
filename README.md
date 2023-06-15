# Brain Vision
Brain Vision is a web application built with React and Vite that allows users to submit picture links for face recognition. The app utilizes the Clarifai face detection API to detect faces in the submitted pictures. Each successful detection increments the entry count for the user.

## Getting Started
To get started with this project, you can simply clone the repository:

```
git clone https://github.com/bbocko/brain-vision.git
```

After cloning the repository, you can install the required dependencies by running:

```
npm install
```

## Configuration

Before running the application, you need to provide some configuration settings.

Create a .env file in the project's root directory.

Open the .env file in a text editor and add the following environment variables:

```
REACT_APP_PAT=YOUR_PAT
REACT_APP_USER_ID=YOUR_USER_ID
REACT_APP_APP_ID=YOUR_APP_ID
```

Replace YOUR_PAT, YOUR_USER_ID, and YOUR_APP_ID with the actual values corresponding to your Clarifai API account.

- REACT_APP_PAT: Your Clarifai Personal Access Token (PAT). This can be found in the portal under Authentication.
- REACT_APP_USER_ID: Your user ID associated with your Clarifai account.
- REACT_APP_APP_ID: Your application ID for the Clarifai app you want to use.

These environmental variables are necessary for the app to interact with the Clarifai API and perform face detection. Save the .env file.

By providing the required environmental variables in the .env file, the app will be able to access and utilize the Clarifai API functionalities correctly.

## Usage
To run the application, you can use the following command:

```
npm run dev
```

This command will start the development server and automatically open the application in your default browser. If the browser doesn't open automatically, you can access the application by navigating to http://localhost:3000 in your browser.

Register a new user by clicking on the "Register" link and filling out the registration form. Alternatively, you can log in if you already have an account.

Once logged in, you will be redirected to the home screen. Enter a valid image URL in the input field and click the "Detect" button.

The application will use the Clarifai API to analyze the image and detect faces. If a face is found, the app will highlight it and increment the entry count. You can submit multiple image URLs to see the face detection in action.

To log out, click on the "Sign Out" link in the navigation bar.

## Built With
- React
- Vite
- Tailwind
- Clarifai API

## Backend Repository

The frontend of the Brain Vision app is connected to a separate backend repository. To run the app successfully, make sure you have set up and started the backend server.

You can find the backend repository at: [https://github.com/bbocko/brain-vision-api](https://github.com/bbocko/brain-vision-api)

## Contributing
Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.
