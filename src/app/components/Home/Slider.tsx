import Image from "next/image";
import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Slider() {
  return (
    <section className="hero-slider">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src={`${basePath}/images/banner/Goyco-1.jpg.jpeg`}
              className="img-fluid hero-image w-100"
              style={{ objectFit: "cover" }}
              fill
              alt=""
            ></Image>
            <div
              className="carousel-item-content px-5"
              style={{ color: "#082b52" }}
            >
              <span className="hero-tag"> GOYCO !! </span>

              <h1>Building unique solutions for India.</h1>

              <p>
                We at Goyco are making different unique solutions in different
                categories for india.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary-custom">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
          {/* Slide 2  */}
          <div className="carousel-item">
            <Image
              src={`${basePath}/images/banner/Goyco-2.jpg.jpeg`}
              className="img-fluid hero-image w-100"
              style={{ objectFit: "cover" }}
              fill
              alt=""
            ></Image>

            <div
              className="carousel-item-content px-5"
              style={{ color: "#082b52" }}
            >
              <span className="hero-tag"> GOYCO !! </span>

              <h1>Building unique solutions for India.</h1>

              <p>
                We at Goyco are making different unique solutions in different
                categories for india.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary-custom">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <Image
              src={`${basePath}/images/banner/Goyco-3.jpg.jpeg`}
              className="img-fluid hero-image w-100"
              style={{ objectFit: "cover" }}
              alt=""
              fill
            ></Image>

            <div
              className="carousel-item-content px-5"
              style={{ color: "#082b52" }}
            >
              <span className="hero-tag"> GOYCO !! </span>

              <h1>Building unique solutions for India.</h1>

              <p>
                We at Goyco are making different unique solutions in different
                categories for india.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary-custom">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
