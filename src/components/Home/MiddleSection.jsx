import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FAQ from "./FAQ";

const MiddleSection = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const navigate = useNavigate(); // Initialize useNavigate

  const animationVariants = {
    hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
  };

  return (
    <div className="bg-gradient-to-b flex flex-col gap-20 py-16 from-sky-100 via-orange-100 to-amber-100 w-screen">
      {/* Donor Section */}
      <div
        ref={ref1}
        className={`flex justify-center items-center gap-10 xs:gap-4 xs:flex-wrap m-4 ${
          inView1 ? "animate__animated animate__fadeIn" : ""
        }`}
      >
        <motion.div
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animationVariants}
          className="flex flex-col justify-center items-center gap-1 max-w-[600px] p-6 xs:p-3"
        >
          <div className="w-full">
            <ReactTyped
              className="text-orange-600 font-poppins font-bold text-6xl sx:text-4xl xs:text-3xl"
              strings={["Are You a Donor?"]}
              typeSpeed={40}
              backSpeed={50}
            />
          </div>
          <p className="text-2xl xs:text-xl font-bold text-pretty font-barlow">
            Donors can now contribute from the comfort of their homes, ensuring
            seamless and transparent donations. Your contributions directly reach
            those in need, making a real impact.
          </p>
          <button
            onClick={() => navigate("/register/donor")} // Navigate to donor registration
            className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all"
          >
            Register as Donor
          </button>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <img
            className="max-h-[400px] min-w-[200px]"
            src="https://res.cloudinary.com/dd6sontgf/image/upload/v1713028790/ae32dca5f97ea99397563a4efc775dd3-removebg-preview_bs8khv.png"
            alt="Donor"
          />
        </motion.div>
      </div>

      {/* Needy Institution Section */}
      <div
        ref={ref2}
        className={`flex justify-center items-center gap-10 xs:gap-4 xs:flex-wrap-reverse m-4 ${
          inView2 ? "animate__animated animate__fadeIn" : ""
        }`}
      >
        <motion.div
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <img
            className="max-h-[400px] min-w-[200px]"
            src="https://res.cloudinary.com/dd6sontgf/image/upload/v1713028791/pngwing.com_1_c0tes9.png"
            alt="Needy Institution"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={animationVariants}
          className="flex flex-col justify-center items-center gap-1 max-w-[600px] p-6 xs:p-3"
        >
          <div className="w-full">
            <ReactTyped
              className="text-green-600 font-poppins font-bold text-6xl sx:text-4xl xs:text-3xl"
              strings={["Are You a Needy Institution?"]}
              typeSpeed={40}
              backSpeed={50}
            />
          </div>
          <p className="text-2xl xs:text-xl font-bold text-pretty font-barlow">
            Needy institutions can now raise requirements for groceries and
            essentials. Our platform ensures that your needs are met with
            transparency and efficiency.
          </p>
          <button
            onClick={() => navigate("/register/institution")} // Navigate to institution registration
            className="mt-6 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all"
          >
            Register as Institution
          </button>
        </motion.div>
      </div>

      {/* Supplier Section */}
      <div
        ref={ref3}
        className={`flex justify-center items-center gap-10 xs:gap-4 xs:flex-wrap m-4 ${
          inView3 ? "animate__animated animate__fadeIn" : ""
        }`}
      >
        <motion.div
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={animationVariants}
          className="flex flex-col justify-center items-center gap-1 max-w-[600px] p-6 xs:p-3"
        >
          <div className="w-full">
            <ReactTyped
              className="text-blue-600 font-poppins font-bold text-6xl sx:text-4xl xs:text-3xl"
              strings={[" Are You a Supplier ?"]}
              typeSpeed={40}
              backSpeed={50}
            />
          </div>
          <p className="text-2xl xs:text-xl font-bold text-pretty font-barlow">
            Suppliers can now connect with donors and institutions to provide
            essential items. Our platform ensures fair distribution and timely
            delivery.
          </p>
          <button
            onClick={() => navigate("/register/supplier")} // Navigate to supplier registration
            className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            Register as Supplier
          </button>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <img
            className="max-h-[400px] min-w-[200px]"
            src="https://res.cloudinary.com/dd6sontgf/image/upload/v1713028790/ae32dca5f97ea99397563a4efc775dd3-removebg-preview_bs8khv.png"
            alt="Supplier"
          />
        </motion.div>
      </div>
      <FAQ/>
    </div>
  );
};

export default MiddleSection;