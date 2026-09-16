"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <header className="site-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image
                className="goco-logo"
                src={`${basePath}/images/Goyco.png`}
                alt="Goyco"
                height={120}
                width={180}
              />
            </Link>

            <button
              className="navbar-toggler custom-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto align-items-lg-center">
                <li className="nav-item">
                  <Link
                    className={
                      pathname === "/"
                        ? "nav-link active text-uppercase"
                        : "nav-link text-uppercase"
                    }
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={
                      pathname === "/about"
                        ? "nav-link active text-uppercase"
                        : "nav-link text-uppercase"
                    }
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={
                      pathname === "#Solutions"
                        ? "nav-link active text-uppercase dropdown-toggle"
                        : "nav-link text-uppercase dropdown-toggle"
                    }
                    href="#Solutions"
                    data-bs-toggle="dropdown"
                  >
                    Solutions
                  </Link>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="https://workyard.in"
                        target="_blank"
                      >
                        Work Yard
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="https://workyard.in"
                        target="_blank"
                      >
                        Coho Clothing
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className={
                      pathname === "/contact"
                        ? "nav-link active text-uppercase"
                        : "nav-link text-uppercase"
                    }
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase"
                    href="https://goyco.zohorecruit.in/careers"
                    target="_blank"
                  >
                    Vacancy
                  </Link>
                </li>

                <li className="nav-item dropdown ms-lg-4">
                  <button
                    className="btn btn-login dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Login
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="https://workyard.in"
                        target="_blank"
                      >
                        Client Login
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="https://accounts.zoho.in/signin?servicename=ZohoOne&signupurl=https://www.zoho.com/one/signup.html"
                        target="_blank"
                      >
                        Employee Login
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        href="https://workyard.in"
                        target="_blank"
                      >
                        Vendor Login
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="offcanvas-header">
          <Link className="navbar-brand" href="/">
            <Image
              className="goco-logo"
              style={{ left: 0 }}
              src={`${basePath}/images/Goyco.png`}
              height={120}
              width={200}
              alt="Goyco"
            ></Image>
          </Link>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                {" "}
                Home{" "}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="about-us.html">
                {" "}
                About US{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle w-100"
                data-bs-toggle="dropdown"
                href="#"
              >
                Solutions
              </a>

              <ul className="dropdown-menu w-100 mt-0 border-0">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://workyard.in/"
                    target="_blank"
                  >
                    Work Yard
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="https://workyard.in/"
                    target="_blank"
                  >
                    Coho Clothing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact-us.html">
                {" "}
                Contact{" "}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://goyco.zohorecruit.in/careers"
                target="_blank"
              >
                Vacancy
              </a>
            </li>

            <li className="dropdown nav-item">
              <a
                className="nav-link dropdown-toggle w-100"
                data-bs-toggle="dropdown"
                href="#"
              >
                Login
              </a>

              <ul className="dropdown-menu w-100 mt-0 border-0">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://workyard.in"
                    target="_blank"
                  >
                    Client Login
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="https://accounts.zoho.in/signin?servicename=ZohoOne&signupurl=https://www.zoho.com/one/signup.html"
                    target="_blank"
                  >
                    Employee Login
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="https://workyard.in"
                    target="_blank"
                  >
                    Vendor Login
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
