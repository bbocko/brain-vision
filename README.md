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
