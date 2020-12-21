import React from "react";
import Link from "next/link";
import Head from "next/head";
import Card from "../component/Card";
import { nonTechnicalEvents } from "../eventConfig";

const NonTechnical = () => {
  React.useEffect(() => {
    window.document.title = "Non Technical Events | pulzion 2020";
  }, []);
  return (
    <>
      <Head>
        <title>Non Technical Events</title>
      </Head>
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
          {nonTechnicalEvents.map((e, i) => (
            <Card key={i} {...e} />
          ))}
        </div>
      </section>
    </>
  );
};

export default NonTechnical;
