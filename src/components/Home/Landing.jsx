
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen select-none bg-gradient-to-b gap-5 via-amber-100 from-orange-200 to-sky-100 relative h-screen overflow-hidden flex xs:flex-col-reverse justify-center items-center"
    >
      <div className="m-5">
        <motion.img
          className="min-w-[200px]"
          src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Donation"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.5 }}
        className="bg-white max-w-[55%] m-5 flex flex-col xs:max-w-max xs:w-5/6 overflow-hidden h-fit w-[700px] mr-10 rounded-xl p-6 xs:p-4 bg-opacity-70"
      >
        <motion.img
          initial={{ y: 100, opacity: 0, rotate: -60 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ delay: 0.6 }}
          className="max-w-[200px] xs:max-w-[120px]"
          src="https://res.cloudinary.com/dd6sontgf/image/upload/v1712747549/_Pngtree_law_and_justice_illustration_3718775-removebg-preview_krbxyh.png"
          alt="Logo"
        />
        <p className="text-pretty flex w-full flex-col font-poppins font-bold text-white text-4xl sx:text-3xl xs:text-xl">
          <span className="text-orange-500">DonorSync</span>
          <ReactTyped
            className="text-lime-600 text-5xl sx:text-4xl xs:text-2xl"
            strings={[
              "~Building Trust",
              "Delivering Hope",
              "~Smart Donations",
              "Smarter Impact",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </p>
        <p className="text-xl xs:text-base my-4 font-lora font-bold text-slate-500">
          Welcome to{" "}
          <span className="text-orange-600 text-3xl xs:text-xl">DonorSync</span>,
          a trusted platform that seamlessly connects donors, needy institutions,
          and suppliers to ensure transparent and impactful contributions.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Landing;



