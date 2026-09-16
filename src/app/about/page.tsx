import type { Metadata } from "next";
import Image from "next/image";
import Slider from "../components/Home/Slider";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata: Metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <Slider></Slider>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src={`${basePath}/images/banner/Goyco-1.jpg.jpeg`}
                  className="img-fluid rounded-4"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-title"> ABOUT US </span>

              <h2 className="fw-bold mb-4">
                SHORT BRIEFING OF WORKYARD CO-WORKING SPACES
              </h2>

              <p>
                WorkYard Coworking Spaces are Pocket Friendly Coworking Spaces
                focusing on providing the Value for Money experience. WorkYard
                Coworking Spaces were founded by our Founder i.e. Mr Hemant
                Goyal in 2019.
              </p>

              <p>
                WorkYard currently has 2 Premises operational, first one is in
                Business & Industrial Park (eka Industrial Area), Phase 2,
                Chandigarh (Since 2019) and second one is in Sector 5 (eka
                Peermuchalla), Zirakpur, SAS Nagar. We are currently Operational
                only in Chandigarh Tri-City.
              </p>

              <div className="row mt-5">
                <div className="col-6">
                  <div className="counter-card">
                    <h3>100+</h3>

                    <p>Projects</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="counter-card">
                    <h3>25+</h3>

                    <p>Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Mission & Vision</h2>

            <p className="text-muted">
              Building technology that empowers businesses.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card h-100">
                <div className="d-flex align-items-center">
                  <div className="icon-circle">
                    <i className="bi bi-bullseye"></i>
                  </div>

                  <h3 className="ps-3">Our Mission</h3>
                </div>

                <p className="mt-2">
                  Deliver innovative, scalable, and reliable software solutions
                  that simplify business operations while creating long-term
                  value for our clients.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mission-card h-100">
                <div className="d-flex align-items-center">
                  <div className="icon-circle">
                    <i className="bi bi-stars"></i>
                  </div>

                  <h3 className="ps-3">Our Vision</h3>
                </div>

                <p className="mt-2">
                  To become a globally trusted technology partner recognized for
                  innovation, excellence, and transforming businesses through
                  digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Our Team</span>
            <h2 className="fw-bold mt-2">Meet Our Leadership</h2>
            <p className="text-muted">
              Experienced professionals committed to innovation, excellence, and
              delivering exceptional value.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 offset-3 col-md-6">
              <div className="team-card">
                <div className="team-image">
                  <Image
                    height={90}
                    width={90}
                    src={`${basePath}/images/ceo.jpg`}
                    alt=""
                  ></Image>
                </div>

                <div className="team-content">
                  <h4>John Anderson</h4>

                  <span className="designation"> Chief Executive Officer </span>

                  <p>
                    Visionary leader driving innovation, strategy and long-term
                    business growth.
                  </p>

                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-image">
                  <Image
                    height={90}
                    width={90}
                    src={`${basePath}/images/ceo.jpg`}
                    alt=""
                  ></Image>
                </div>

                <div className="team-content">
                  <h4>John Anderson</h4>

                  <span className="designation"> Chief Executive Officer </span>

                  <p>
                    Visionary leader driving innovation, strategy and long-term
                    business growth.
                  </p>

                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
