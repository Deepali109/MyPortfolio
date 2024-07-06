// import { useState } from "react";
// import "./App.css";
// import Layout from "./components/Layout/Layout";
// import About from "./pages/about/About";
// import ScrollToTop from "react-scroll-to-top";
// function App() {
//   return (
//     <>
//       <Layout />

//       <ScrollToTop
//         smooth
//         color="black"
//         width="25"
//         height="25"
//         style={{
//           backgroundColor: "#F1F8E9",
//         }}
//       />
//     </>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "react-scroll-to-top";
import MernProject from "./pages/projects/MernProject";
import ReactProject from "./pages/projects/ReactProject";
import HtmlProject from "./pages/projects/HtmlProject";

function App() {
  return (
    <Router>
      {/* <Layout /> */}
      <ScrollToTop
        smooth
        color="black"
        width="25"
        height="25"
        style={{
          backgroundColor: "#F1F8E9",
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/mern-projects" element={<MernProject />} />
        <Route path="/react-projects" element={<ReactProject />} />
        <Route path="/html-projects" element={<HtmlProject />} />
      </Routes>
    </Router>
  );
}

export default App;
