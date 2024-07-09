// LandingPage.js
import React from "react";
//import Image from "next/image";
import backgroundImage from "./pic.jpg";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card.tsx";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-end justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-yellow-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-5xl text-center font-bold text-white dark:text-white mb-8"
          >
            We serve incomparable delicacies
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-white max-w-sm mt-2 dark:text-neutral-300 text-xl text-center"
          >
            All the best restaurants with their top menu waiting for you,they
            can't wait for your order!!
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4"></CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              to="./Signup"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              to="./Signup"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Dashboard;
