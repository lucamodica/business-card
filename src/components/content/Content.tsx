import React from "react";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";
import './Content.css';
import { Info } from "./info/Info";

export function Content() {
  return (
    <main className="main">
      <Info />
      <Contact />
      <About />
    </main>
  );
}