// import React, { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home";
// import ContactUs from "./pages/ContactUs";
// import Investment from "./pages/Investment";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Business from "./pages/Business";
// import { ToastContainer } from "react-toastify";
// import { GridLoader } from "react-spinners";
// import TeesModal from "./components/Tees/TeesModal";

// function App() {
//   // Function to toggle tees modal open on page enter
//   const [isModalOpen, setModalOpen] = useState(false);

//   const closeModal = () => {
//     setModalOpen(false);
//     sessionStorage.setItem("modalClosed", "false");
//   };

//   useEffect(() => {
//     const isModalClosedInThisSession = sessionStorage.getItem("modalClosed");
//     if (!isModalClosedInThisSession) {
//       const timeout = setTimeout(() => {
//         setModalOpen(true);
//       }, 3000); // 10seconds
//       return () => {
//         clearTimeout(timeout);
//       };
//     }
//   }, []);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     simulateWebsiteLoading()
//       .then(() => {
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Loading error:", error);
//         setLoading(false);
//       });
//   }, []);

//   const simulateWebsiteLoading = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve();
//       }, 1500);
//     });
//   };

//   return (
//     <div className="App">
//       {loading ? (
//         <div className="loader-container flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 h-[100vh]">
//           <GridLoader
//             color={"red"}
//             loading={true}
//             size={30}
//             speedMultiplier={0.5}
//           />
//         </div>
//       ) : (
//         <>
//           <NavBar />
//           {/* Tees Modal component mount */}
//           {isModalOpen && <TeesModal onClose={closeModal} />}

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/investment" element={<Investment />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/business" element={<Business />} />
//           </Routes>

//           <section className="footer-section w-full ">
//             <Footer />
//           </section>
//           <ToastContainer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Investment from "./pages/Investment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Business from "./pages/Business";
import { ToastContainer } from "react-toastify";
import { GridLoader } from "react-spinners";
import TeesModal from "./components/Tees/TeesModal";
import Success from "./components/Tees/Success";

function App() {
  // Function to toggle tees modal open on page enter
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalOpen(true);
    }, 7000); // 7 minutes in milliseconds

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  const simulateWebsiteLoading = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 h-[100vh]">
          <GridLoader
            color={"red"}
            loading={true}
            size={30}
            speedMultiplier={0.5}
          />
        </div>
      ) : (
        <>
          <NavBar />
          {/* Tees Modal component mount */}
          {isModalOpen && <TeesModal onClose={closeModal} />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/business" element={<Business />} />
            <Route path="/success" element={<Success />} />
          </Routes>

          <section className="footer-section w-full ">
            <Footer />
          </section>
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
