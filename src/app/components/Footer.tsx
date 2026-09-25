import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6">
            <div className="venture-logo">
              <Image
                src={`${basePath}/images/logo/Goyco1.png`}
                className="img-fluid"
                height={120}
                width={200}
                alt=""
              ></Image>
            </div>

            <p className="footer-desc mt-2 pt-3">
              We at Goyco are trying to build unique solutions for India. We are
              making different unique solutions in different categories in
              India.
            </p>

            <div className="footer-social">
              <a
                href="https://www.youtube.com/@goycoservicespvtltd"
                target="_blank"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/goyco-services-pvt-ltd"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/workyardchd" target="_blank">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://share.google/FjiD2N1Qgy0XP68XW" target="_blank">
                <i className="bi bi-geo-alt"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>

            <ul className="footer-links">
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
              <li>
                <a href="https://goyco.zohorecruit.in/careers" target="_blank">
                  Vacancy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Solutions</h5>

            <ul className="footer-links">
              <li>
                <a href="https://www.workyard.in" target="_blank">
                  WorkYard
                </a>
              </li>
              <li>
                <a href="https://neevspaces.com/" target="_blank">
                  NeevSpaces
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Contact Us</h5>

            <div className="footer-contact">
              <p>
                <i className="bi bi-geo-alt"></i>
                Chandigarh (India)
              </p>
              <p>
                <i className="bi bi-building"></i>H.O Plot No 337, Business &
                Indrustrial Park, Phase-2, Chandigarh (160002), India.
              </p>

              <ul className="list-unstyled m-0 p-0">
                <li>
                  <i className="bi bi-telephone me-2"></i> +91-9115758151
                </li>
                <li className="ps-4 ms-1">+91-7347359109</li>
              </ul>

              <ul className="list-unstyled mt-3">
                <li>
                  <i className="bi bi-envelope me-3"></i>hemant@goyco.org
                </li>
                <li className="ps-4 ms-2">cc: query@goyco.org</li>
              </ul>

              <p>
                <i className="bi bi-whatsapp"></i>
                +91-9115758151
              </p>
            </div>

            <form className="newsletter">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />

              <button className="btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p>© {new Date().getFullYear()} GOYCO. All Rights Reserved.</p>

          <div>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
