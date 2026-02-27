import React from "react";
import "./landingPage.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      {/* section */}
      <section id="bg1">
        <div className="row pt-5">
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-6 box py-5 mt-5 text-center" id="bg12">
            <h3 className="fs-25 fw-bold">Designed to get hired.</h3>
            <h4 className="fs-5 mb-3">
              Your skills, your story, your next job - all in one.
            </h4>
            <Link to={"/resume-generator"}>
              <Button
                sx={{ backgroundColor: "blue" }}
                className="p-3 rounded-4"
                variant="contained"
              >
                Make your Resume
              </Button>
            </Link>
          </div>
          <div className="col-12 col-md-3"></div>
        </div>

        
      </section>

      {/* section-2 */}
      <section className="p-5">
        <h3 className="text-center">Tools</h3>
        <div className="row pt-5">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>
              Effortlessly manage and track your job applications in an
              organized manner.
            </p>
          </div>
          <div className="col-12 col-md-6 box " id="bg12">
            <img
              src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
              alt=""
              width={"70%"}
            />
          </div>
        </div>
      </section>

      {/* section -3*/}
      <section id="bg2"></section>

      {/* section-4 testimonial */}
      <section>
        <div className="row p-5">
          <h3 className="text-center my-3">Testimony</h3>
          <div className="col-12 col-md-6">
            <h4>Trusted by professionals worldwide.</h4>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers
              with a résumé that truly stands out.
            </p>
          </div>
          <div className="col-12 col-md-6">

            <div className="row">
              <div className="col-3"><img src="src\assets\people2.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people1.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people4.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people3.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
            </div>
            <div className="row my-3">
              <div className="col-3"><img src="src\assets\people4.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people3.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people1.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people2.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
            </div>
            <div className="row">
              <div className="col-3"><img src="src\assets\people3.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people2.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people4.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
              <div className="col-3"><img src="src\assets\people1.jpg" alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/></div>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
