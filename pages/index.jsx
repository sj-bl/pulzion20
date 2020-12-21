import React from "react";
import Link from "next/link";
import Head from "next/head";
import Card from "../component/Card";
import { allEvents } from "../eventConfig";

const Index = () => {
  return (
    <>
      <Head>
        <title>ALL Events</title>
      </Head>
      <section id="#hero" className="container">
        <h1 className="hero-title">Events</h1>
        <div className="hero-link-container">
          <Link href="/">
            <a className="link link-active">All</a>
          </Link>
          <Link href="/technical">
            <a className="link">Technical Events</a>
          </Link>
          <Link href="/nonTechnical">
            <a className="link">Non Technical Events</a>
          </Link>
        </div>
        <div className="card-container">
          {allEvents.map((e, i) => (
            <Card key={i} {...e} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
