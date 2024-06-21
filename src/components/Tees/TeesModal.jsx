import React, { useEffect, useState } from "react";
import Barier from "../../assets/icons/barrier.png";
import { Link } from "react-router-dom";
import TeesAppForm from "./TeesAppForm";

const TeesModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // state to handle the application form
  const [showform, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="inset-0  z-50  w-full bg-black bg-opacity-60 flex flex-col justify-center items-center fixed">
      <div className="bg-white w-[350px]  inset-0   z-50  h-[350px]   rounded-md flex flex-col justify-start items-center shadow-md   md:h-[400px] md:w-[500px]">
        <button
          onClick={onClose}
          className=" flex  ml-auto  mr-4  p-3 text-dark   text-xl"
        >
          close
        </button>

        <div className="flex flex-col gap-8 justify-center items-center p-2 ">
          <img src={Barier} alt="event-icon" className="w-[120px]  h-[120px]" />
          <h3 className="text-red font-bold text-center text-2xl font-fan ">
            Register For T<span className="text-dark">EE</span>S{" "}
            <span className="text-dark">2</span>02
            <span className="text-dark">4</span>
          </h3>
        </div>
        <button
          onClick={() => openForm()}
          className="hover-effect  bg-red p-3 text-white font-bold flex justify-center items-center tex-center  w-[200px]  h-[70px]   md:h-[40px] md:w-[120px]   hover:transition-all hover:ease-in-out hover:duration-1000 
            ease-in-out transition-all duration-1000  hover:text-white "
        >
            <p className="image-wrapper">
          Register
          </p>
        </button>
        
        {showform && <TeesAppForm onClose={() => closeForm((onClose))} />}
            
      </div>
    </div>
  );
};

export default TeesModal;
