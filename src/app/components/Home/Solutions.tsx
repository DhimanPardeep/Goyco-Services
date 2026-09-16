import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Solutions() {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Solutions</h2>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image">
                <Image
                  src={`${basePath}/images/ventture.png`}
                  className="img-fluid"
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>

              <h4>WORK YARD</h4>

              <p>Pocket friendly coworking spaces.</p>
              <a
                href="https://workyard.in"
                target="_blank"
                className="btn btn-visit"
              >
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image">
                <Image
                  src={`${basePath}/images/NEEVSPACESLOGO.jpeg`}
                  className="img-fluid"
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>

              <h4>NEEVSPACES</h4>

              <p></p>
              <a
                href="https://neevspaces.com/"
                target="_blank"
                className="btn btn-visit"
              >
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image">
                <Image
                  src={`${basePath}/images/ventture.png`}
                  className="img-fluid"
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>

              <h4>GOLPHOEN AGGREGATION Services</h4>

              <p>
                Aggregation services of all &ldquo;REAS&rdquo; Category
                permises.
              </p>
              <a
                href="https://golphoen.com"
                target="_blank"
                className="btn btn-visit"
              >
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="solution-card">
              <div className="solution-image">
                <Image
                  src={`${basePath}/images/ventture.png`}
                  className="img-fluid"
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>

              <h4>HANGOOL</h4>

              <p></p>
              <a
                href="https://workyard.in"
                target="_blank"
                className="btn btn-visit"
              >
                Visit Website
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
