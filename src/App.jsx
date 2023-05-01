import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from "particles-bg";


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
  const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });
  const numParticles = isDesktop ? 50 : 10;

  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    setImageURL(input);
    fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", returnClarifaiRequestOptions(input))
      .then(response => response.json())
      .then(response => console.log(response));
  }

  return (
    <div className="App">
      <ParticlesBg color="#FFFFFF" num={numParticles} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageURL={imageURL} />
    </div>
  )
}

export default App