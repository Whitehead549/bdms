import React from "react";
import Address from "../components/Address";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <>
    <div className="lg:mx-[18rem] px-2 sm:px-6">
        <Introduction />
        <Address />
    </div>
      
    </>
  );
};

export default Home;
