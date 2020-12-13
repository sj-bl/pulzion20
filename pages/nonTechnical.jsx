import React from "react";
import Link from "next/link";
import Card from "../component/Card";

const NonTechnical = () => {
  React.useEffect(() => {
    window.document.title = "Non Technical Events | pulzion 2020";
  }, []);
  return (
    <section id="#hero" className="container">
      <h1 className="hero-title">Non Technical Events</h1>
      <div className="hero-link-container">
        <Link href="/">
          <a className="link">All</a>
        </Link>
        <Link href="/technical">
          <a className="link">Technical Events</a>
        </Link>
        <Link href="/nonTechnical">
          <a className="link link-active">Non Technical Events</a>
        </Link>
      </div>
      <div className="card-container">
        <Card
          key="1"
          moreInfo={
            "Just Coding is a competition where the participants will have to write correct and efficient codes for the given set of problem statements."
          }
        />
        <Card
          key="2"
          moreInfo={
            "Just Coding is a competition where the participants will have to write correct and efficient codes for the given set of problem statements."
          }
        />
        <Card
          key="3"
          moreInfo={
            "Just Coding is a competition where the participants will have to write correct and efficient codes for the given set of problem statements."
          }
        />
        <Card
          key="4"
          moreInfo={
            "Just Coding is a competition where the participants will have to write correct and efficient codes for the given set of problem statements."
          }
        />
      </div>
    </section>
  );
};

export default NonTechnical;
