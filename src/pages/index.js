import React from "react";
import "../styles/index.css";
import { Helmet } from "react-helmet"

import NavBar from "../components/NavBar/NavBar";
import Abv from "../components/Abv/Abv";

export default function Home() {
  return (
    <div className="App">
      <Helmet>
        <html lang='en' />
        <meta charSet="utf-8" name='description' content='The Brew Calc' />
        <title>The Brew Calc</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <body>
        <div className="calculatorContainer">
          <div className="abvCalc">
            <Abv />
          </div>
        </div>
      </body>
    </div>   
  )
}