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
                  src={`${basePath}/images/about/Goyco.JPG`}
                  className="img-fluid rounded-4"
                  alt=""
                />
              </div>
              <div className="row mt-5">
                <div className="col-6">
                  <div className="counter-card">
                    <h3>15+</h3>

                    <p>Experts Team</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="counter-card">
                    <h3>650+</h3>

                    <p>Served Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-title"> ABOUT US </span>
              <p>
                What started as WorkYard in 2019 has grown into a vision much
                bigger than where we began. WorkYard was born from a simple
                belief: entrepreneurs/entities/individuals deserve more than
                just a place to work. Our management had first-hand experience
                of the realities of work culture, hospitality and the challenges
                entrepreneurs face while building and running their businesses.
                This experience led to the idea of creating a space where
                entrepreneurs could find a vibrant work environment, essential
                amenities, hospitality and practical support — all under one
                roof. This vision became WorkYard, offering pocket-friendly and
                vibrant coworking spaces designed around the evolving needs of
                entrepreneurs and businesses.
              </p>

              <p>
                With our management&apos;s background in the service and
                hospitality industry, combined with the experience and insights
                gained through WorkYard, we began looking beyond coworking and
                exploring the wider requirements within the Real Estate Services
                (REAS) sector.
              </p>
              <p>
                This evolution led to the establishment of Goyco Services Pvt.
                Ltd., with a vision to build and bring together multiple
                solutions across the REAS industry. What began in our hometown
                is now expanding PAN India and building diverse real estate
                solutions specifically for the Indian market and its evolving
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Mission & Vision</h2>

            <p className="text-muted">REAS Mission & Vision</p>
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
                  To deliver warm, quality hospitality that every Indian
                  deserves.
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
                  To make comfortable, quality spaces accessible and affordable
                  for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="team-section py-5">
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
      </section> */}
    </>
  );
}
