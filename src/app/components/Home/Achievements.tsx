import Image from "next/image";
export default function Achievements() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Achievements & Expertise</h2>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <h3 className="fw-bold mb-4">Our Achievements</h3>

            <div className="row g-4">
              <div className="col-6">
                <div className="achievement-card">
                  <i className="bi bi-people"></i>
                  <h2>750+</h2>
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-6">
                <div className="achievement-card">
                  <i className="bi bi-box-seam"></i>
                  <h2>3+</h2>
                  <p>Unique Solutions</p>
                </div>
              </div>

              <div className="col-6">
                <div className="achievement-card">
                  <i className="bi bi-person-workspace"></i>
                  <h2>80+</h2>
                  <p>Channel Partners</p>
                </div>
              </div>

              <div className="col-6">
                <div className="achievement-card">
                  <i className="bi bi-globe"></i>
                  <h2>32+</h2>
                  <p>States & Uts we serve</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-1 d-none d-lg-flex justify-content-center">
            <div className="vertical-divider"></div>
          </div>

          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Our Expertise</h3>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="expertise-card">
                  <i className="bi bi-lightbulb"></i>
                  <h5>Innovation</h5>
                  <p>Creative ideas transformed into successful businesses.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="expertise-card">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h5>Business Growth</h5>
                  <p>Helping brands scale through strategic planning.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="expertise-card">
                  <i className="bi bi-stars"></i>
                  <h5>Premium Quality</h5>
                  <p>Maintaining the highest standards across every venture.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="expertise-card">
                  <i className="bi bi-shield-check"></i>
                  <h5>Trust & Integrity</h5>
                  <p>Building long-term relationships through reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
