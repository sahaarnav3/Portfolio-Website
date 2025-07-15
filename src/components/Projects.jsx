import React from "react";
import './styles.css'

const Projects = () => {
  return (
    <section
      className="container bg-black text-white "
      style={{
        border: "1px solid black",
        position: "relative",
        top: "0px",
      }}
    >
      <h1 className="mt-5 pt-5 display-4 fw-semibold">Projects</h1>
      <p className="text-white-50 fs-4 mb-0">
        Building solutions that solve real-world problems
      </p>
      <span className="border-bottom px-5 border-success border-4"></span>
      <div className="row my-5 justify-content-between">
        <div
          className="card col-sm-3 p-0 text-white"
          style={{ width: "26.7rem", background: "#0a0a0a" }}
          id="card"
        >
          <img
            src="https://fastly.picsum.photos/id/408/600/400.jpg?hmac=pXcyt403m2oK4DktzFXGJCOxDqZa7eChZyUOso6t6s8"
            className="card-img-top img-fluid"
            alt="proj-img"
          />
          <div className="card-body px-4">
            <h3 className="card-title">
              <strong>Haat</strong>
            </h3>
            <p className="card-text text-white-50">
              A modern e-commerce platform with real-time inventory management,
              secure payment processing, and personalized recommendations.
            </p>
            <div className="mb-4">
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>React</strong>
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                {" "}
                <strong>Node.js</strong>{" "}
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>MongoDB</strong>
              </span>
            </div>
            <div>
              <a href="#" className="text-decoration-none text-white me-5">
                <img
                  src="https://cdn.hugeicons.com/icons/view-stroke-sharp.svg"
                  style={{ filter: "invert(1)" }}
                  alt="ico"
                  className="img-fluid"
                />{" "}
                Demo
              </a>
              <a href="#" className="text-decoration-none text-white me-5">
                <img
                  src="https://cdn.hugeicons.com/icons/source-code-solid-rounded.svg"
                  style={{ filter: "invert(1)" }}
                  alt="ico"
                  className="img-fluid"
                />{" "}
                Code
              </a>
            </div>
          </div>
        </div>
        <div
          className="card col-sm-3 p-0 text-white"
          style={{ width: "26.7rem", background: "#0a0a0a" }}
          id="card"
        >
          <img
            src="https://fastly.picsum.photos/id/824/600/400.jpg?hmac=6WVwERdWTrB0Ve2ENg9QvzYnQj5jMzp97aA_3a8mmmA"
            className="card-img-top img-fluid"
            alt="proj-img"
          />
          <div className="card-body px-4">
            <h3 className="card-title">
              <strong>Anvaya</strong>
            </h3>
            <p className="card-text text-white-50">
              An intuitive CRM system designed for lead management with pipeline visualization, automated follow-ups, and detailed analytics.
            </p>
            <div className="mb-4">
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>React</strong>
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                {" "}
                <strong>Node.js</strong>{" "}
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>MongoDB</strong>
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>Chart.js</strong>
              </span>
            </div>
            <div>
              <a href="#" className="text-decoration-none text-white me-5">
                <img
                  src="https://cdn.hugeicons.com/icons/view-stroke-sharp.svg"
                  style={{ filter: "invert(1)" }}
                  alt="ico"
                  className="img-fluid"
                />{" "}
                Demo
              </a>
              <a href="#" className="text-decoration-none text-white me-5">
                <img
                  src="https://cdn.hugeicons.com/icons/source-code-solid-rounded.svg"
                  style={{ filter: "invert(1)" }}
                  alt="ico"
                  className="img-fluid"
                />{" "}
                Code
              </a>
            </div>
          </div>
        </div>
        <div
          className="card col-sm-3 p-0 text-white"
          style={{ width: "26.7rem", background: "#0a0a0a" }}
          id="card"
        >
          <img
            src="https://fastly.picsum.photos/id/911/600/400.jpg?hmac=oQrY_NxZMPraprOrHDBCc3ppsgoEyy3k5oWrPsOb_3w"
            className="card-img-top img-fluid"
            alt="proj-img"
          />
          <div className="card-body px-4">
            <h3 className="card-title">
              <strong>Mitra</strong>
            </h3>
            <p className="card-text text-white-50">
              A collaborative project management tool inspired by Asana, featuring kanban boards, timeline views, and automated workflow.
            </p>
            <div className="mb-4">
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>React</strong>
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                {" "}
                <strong>Node.js</strong>{" "}
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>MongoDB</strong>
              </span>
              <span
                className="me-2 px-3 py-1 rounded-2"
                style={{ background: "#212529", fontSize: "12px" }}
              >
                <strong>Chart.js</strong>
              </span>
            </div>
            <div>
              <a href="#" className="text-decoration-none text-white me-5">
                <img
                  src="https://cdn.hugeicons.com/icons/view-stroke-sharp.svg"
                  style={{ filter: "invert(1)" }}
                  alt="ico"
                  className="img-fluid"
                />{" "}
                Demo
              </a>
              <a href="#" className="text-decoration-none text-white me-5">
                <img
                  src="https://cdn.hugeicons.com/icons/source-code-solid-rounded.svg"
                  style={{ filter: "invert(1)" }}
                  alt="ico"
                  className="img-fluid"
                />{" "}
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
