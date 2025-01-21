import React from "react";
import Address from "../components/Address";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <>
    <div className="mx-6 lg:mx-[18rem]">
        <Introduction />
        <Address />
    </div>
      
    </>
  );
};

export default Home;
