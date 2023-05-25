import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Screen404 from "./components/Screen404/Screen404";
import ParticlesBg from "particles-bg";

// The returnClarifaiRequestOptions function sets up the options for the Clarifai API request, including the PAT (Personal Access Token), 
// USER_ID, APP_ID, MODEL_ID, and IMAGE_URL. It returns a requestOptions object that is used in the onButtonSubmit function.
const returnClarifaiRequestOptions = (imageURL) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "c98bfa9a1cca44ae8b1017beccc10634";
  // Specify the correct user_id/app_id pairings
  // Since you"re making inferences outside your app"s scope
  const USER_ID = "bbocko";
  const APP_ID = "my-first-application";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Authorization": "Key " + PAT
    },
    body: raw
  };

  return requestOptions;
}

function App() {
  // The ParticlesBg component is used to create a particle background on the app, with the number of particles varying based on the screen width.
  const screenWidth = window.innerWidth;
  let numParticles;

  if (screenWidth >= 1024) {
    numParticles = 50;
  } else if (screenWidth >= 640) {
    numParticles = 25;
  } else {
    numParticles = 10;
  }

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(response => response.json())
      .then(console.log);
  }, []);

  // The App component initializes the state variables input, imageURL, box and route using the useState hook.
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // The calculateFaceLocation function takes the Clarifai API response and calculates the location of the face in the image.
  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  // The displayFaceBox function sets the box state variable with the calculated face location. 
  const displayFaceBox = (box) => {
    setBox(box);
  }

  // The onInputChange function sets the input state variable with the input from the user, and the onButtonSubmit function sets the imageURL 
  // state variable with the input and makes a request to the Clarifai API.
  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    setImageURL(input);
    fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", returnClarifaiRequestOptions(input))
      .then(response => response.json())
      // If the response is successful, it passes the response to the calculateFaceLocation and displayFaceBox functions.
      .then(response => displayFaceBox(calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  // Add event handlers for route changes
  const onRouteChange = (route) => {
    setRoute(route);
    if (route === "home") {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
  }

  return (
    // The App component renders the SignInForm if route is set to "signin" or a RegisterForm if route is set to "register".
    // It renders Navigation, Logo, Rank, ImageLinkForm, and FaceRecognition components if route is set to "home".
    // It renders 404 page otherwise. 
    <div className="App">
      <ParticlesBg color="#B8B8B8" num={numParticles} type="cobweb" bg={true} />
      {route === "home" || route === "signin" || route === "register"
        ? <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
        : null}
      {route === "signin"
        ? <SignInForm onRouteChange={onRouteChange} />
        : route === "register"
          ? <RegisterForm onRouteChange={onRouteChange} />
          : route === "home"
            ? <div>
              <Rank />
              <Logo />
              {/* The ImageLinkForm component takes in the onInputChange and onButtonSubmit functions as props and renders a form for the user to input an image URL.  */}
              <ImageLinkForm
                onInputChange={onInputChange}
                onButtonSubmit={onButtonSubmit}
              />
              {/* The FaceRecognition component takes in the box and imageURL state variables as props and renders the image with a box around the detected face. */}
              <FaceRecognition box={box} imageURL={imageURL} />
            </div>
            : <Screen404 onRouteChange={onRouteChange} />
      }
    </div>
  )
}

export default App;