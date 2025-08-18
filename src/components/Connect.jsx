import React from "react";
import "./styles.css";

const TechStack = () => {
  return (
    <section
      className="container mb-5 bg-black text-white "
      id="contact"
      style={{
        border: "1px solid black",
        position: "relative",
        top: "0px",
      }}
    >
      <h1 className="mt-5 pt-5 display-4 fw-semibold">Connect</h1>
      <p className="text-white-50 fs-4 mb-0">
        Let's collaborate on something amazing together
      </p>
      <span className="border-bottom px-5 border-success border-4"></span>
      <div className="row my-5">
        <div className="col-12 col-md-6 mb-2">
          <div
            className="rounded"
            id="card"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="d-flex align-items-center p-4 pb-3">
              <img
                src="https://www.svgrepo.com/show/479480/email-14.svg"
                alt="Email 14 SVG File"
                className="me-3"
                width="40"
                height="40"
                style={{
                  filter:
                    "invert(42%) sepia(23%) saturate(1253%) hue-rotate(100deg) brightness(95%) contrast(94%)",
                }}
              />
              <h3 className="m-0">Email</h3>
            </div>
            <p className="text-white-50 fs-5 ps-4 pb-4">sahaarnav3@gmail.com</p>
          </div>
        </div>
        <a href="https://github.com/sahaarnav3" target="_blank" className="col-12 col-md-6 mb-2 text-decoration-none">
          <div
            className="rounded"
            id="card"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="d-flex align-items-center p-4 pb-3">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="ico"
                className="me-3"
                width="40"
                height="40"
                style={{
                  filter:
                    "invert(42%) sepia(23%) saturate(1253%) hue-rotate(100deg) brightness(95%) contrast(94%)",
                }}
              />
              <h3 className="m-0 text-white">Github</h3>
            </div>
            <p className="text-white-50 fs-5 ps-4 pb-4">Follow on GitHub</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sahaarnav3/" target="_blank" className="col-12 col-md-6 mb-2 text-decoration-none">
          <div
            className="rounded"
            id="card"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="d-flex align-items-center p-4 pb-3">
              <img
                src="https://www.svgrepo.com/show/447138/linkedin-fill.svg"
                alt="ico"
                className="me-3"
                width="40"
                height="40"
                style={{
                  filter:
                    "invert(42%) sepia(23%) saturate(1253%) hue-rotate(100deg) brightness(95%) contrast(94%)",
                }}
              />
              <h3 className="m-0 text-white">LinkedIn</h3>
            </div>
            <p className="text-white-50 fs-5 ps-4 pb-4">Connect On LinkedIn</p>
          </div>
        </a>
        <a href="https://x.com/sahaarnav3" target="_blank" className="col-12 col-md-6 mb-2 text-decoration-none">
          <div
            className="rounded"
            id="card"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="d-flex align-items-center p-4 pb-3">
              <img
                src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                alt="ico"
                className="me-3"
                width="40"
                height="40"
                style={{
                  filter:
                    "invert(42%) sepia(23%) saturate(1253%) hue-rotate(100deg) brightness(95%) contrast(94%)",
                }}
              />
              <h3 className="m-0 text-white">Twitter</h3>
            </div>
            <p className="text-white-50 fs-5 ps-4 pb-4">Follow on Twitter</p>
          </div>
        </a>
        
      </div>
    </section>
  );
};

export default TechStack;
