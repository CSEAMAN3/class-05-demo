import React, { useState } from "react";

import Hero from "../../components/Hero/Hero";
import Yoyo from "../../components/Yoyo/Yoyo";

import { Helmet } from "react-helmet-async";

import data from "../../data.json";

export default function Home() {
  const myName = "Chris";
  // const footie = "Arsenal";
  const [footie, setfootie] = useState("Arsenal");
  const [show, setShow] = useState(false);

  function theName(name) {
    setfootie(name);
  }

  function display() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <Helmet>
        <title>My Website Yo Yo</title>
        <meta name="description" content="This is the homepage for my website." />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <Hero />
        <p>I really like {myName}</p>
        <Yoyo myName={myName} footie={footie} theName={theName} display={display} />
        <Yoyo myName={"Fred"} />
        <h2>this is the home page</h2>
        <p>We're looking at react router dom</p>
        {show && <p>Please someone help me I keep coughing</p>}
        <ul>
          {/* <li>{data[0].name}</li>
          <li>{data[1].name}</li>
          <li>{data[2].name}</li> */}
          {data.map((person, key) => {
            return <li key={person.id}>{person.name}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
