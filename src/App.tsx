import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./MainPage";
import emailjs from "@emailjs/browser";

function App(): React.ReactElement {
  useEffect(() => {
    emailjs.init({ publicKey: "nkysHHR-G5zFYgiiN" });
  }, []);
  return <MainPage />;
}

export default App;
