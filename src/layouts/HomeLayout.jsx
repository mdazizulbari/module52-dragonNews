import React from "react";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main"></section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
