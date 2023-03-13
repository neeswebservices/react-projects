import React from "react";
import Feature from "../components/common/Feature";
import HeaderWithMenu from "../components/common/Header";
import Hero from "../components/common/Hero";

export const Home = () => {
  return (
    <div className="w-full">
      <HeaderWithMenu />
      <Hero/>
      <Feature/>
    </div>
  );
};
