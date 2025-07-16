import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <section
      className="container bg-black text-white text-center pb-5"
      style={{
        border: "1px solid black",
        position: "relative",
        top: "0px",
      }}
    >
      <p>&copy; 2025 Arnav Saha • All rights reserved</p>
      <p>Built with ♥️ using Bootstrap and React.js</p>
      <p>Learning full stack development at <span style={{ color: "#198754"}}>neog.camp</span></p>
    </section>
  );
};

export default Footer;
