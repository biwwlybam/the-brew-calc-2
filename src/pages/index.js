import React from "react";
import "../styles/index.css";
import { Helmet } from "react-helmet"

import { Abv } from "/Users/biwwlybam/Desktop/Web-Dev/the-brew-calc/src/components/Abv/Abv";
import NavBar from "../components/NavBar/NavBar";

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