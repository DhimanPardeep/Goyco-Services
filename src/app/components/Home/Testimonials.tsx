import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Testimonials() {
  return (
    <section className="clients py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Clients Say</h2>
          <p>Trusted by organizations across industries.</p>
        </div>

        <div className="clients-slider">
          <div className="clients-track">
            <div className="client-card">
              <Image
                src={`${basePath}/images/1.jpg`}
                className="client-img"
                alt="Client"
                height={90}
                width={90}
              ></Image>

              <div className="client-content">
                <h5>John Anderson</h5>
                <span className="client-role"> CEO, ABC Technologies </span>

                <a href="#" className="client-link">
                  {" "}
                  www.abctech.com{" "}
                </a>

                <p>
                  GOYCO delivered exceptional solutions and exceeded our
                  expectations. Their professionalism and technical expertise
                  were outstanding.
                </p>

                <div className="client-rating">★★★★★</div>
              </div>
            </div>

            <div className="client-card">
              <Image
                src={`${basePath}/images/2.jpg`}
                className="client-img"
                alt="Client"
                height={90}
                width={90}
              ></Image>

              <div className="client-content">
                <h5>Sarah Wilson</h5>
                <span className="client-role"> Director, Global Ventures </span>

                <a href="#" className="client-link">
                  {" "}
                  www.globalventures.com{" "}
                </a>

                <p>
                  The GOYCO team was responsive, innovative, and delivered
                  everything on time.
                </p>

                <div className="client-rating">★★★★★</div>
              </div>
            </div>
            <div className="client-card">
              <Image
                src={`${basePath}/images/2.jpg`}
                className="client-img"
                alt="Client"
                height={90}
                width={90}
              ></Image>

              <div className="client-content">
                <h5>Sarah Wilson</h5>
                <span className="client-role"> Director, Global Ventures </span>

                <a href="#" className="client-link">
                  {" "}
                  www.globalventures.com{" "}
                </a>

                <p>
                  The GOYCO team was responsive, innovative, and delivered
                  everything on time.
                </p>

                <div className="client-rating">★★★★★</div>
              </div>
            </div>
            <div className="client-card">
              <Image
                src={`${basePath}/images/2.jpg`}
                className="client-img"
                alt="Client"
                height={90}
                width={90}
              ></Image>

              <div className="client-content">
                <h5>Sarah Wilson</h5>
                <span className="client-role"> Director, Global Ventures </span>

                <a href="#" className="client-link">
                  {" "}
                  www.globalventures.com{" "}
                </a>

                <p>
                  The GOYCO team was responsive, innovative, and delivered
                  everything on time.
                </p>

                <div className="client-rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
