import React from "react";
import "boxicons";

function Header() {
  return (
    <section>
      <header className="p-5 relative z-50 font-quicksand  text-white">
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="logo">
            <h1 className="text-2xl font-bold">Monu Shah</h1>
          </div>
          <ul className="flex items-center md:gap-6 gap-3 text-sm">
            <li>
              <a
                href="#about"
                className="hover:border-b-2 hover:border-sky-400 transition-all duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:border-b-2 hover:border-sky-400 transition-all duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:border-b-2 hover:border-sky-400 transition-all duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex items-center justify-around p-10 flex-wrap-reverse mt-20 gap-20 md:gap-0  md:h-[70vh]">
        <div className="left-content basis-[550px] flex items-center justify-center">
          <div>
            <p>
              I'm
              <span className="text-sky-500 text-3xl font-bold">
                {" "}
                Monu Shah
              </span>
            </p>
            <p className="text-lg ">
              A passionate
              <span className="text-sky-500 font-semibold">Web Developer</span>,
              crafting seamless digital experiences with a focus on
              <span className="text-sky-500"> user-centered design</span> and
              <span className="text-sky-500"> innovative solutions</span>.
            </p>

            <a
              href="#contact"
              className="mt-5 border-sky-600 border-2 px-5 py-1 rounded text-sky-500 font-bold inline-flex items-center "
            >
              About me
              <p className=" hover:translate-x-3 transition-transform ease-in-out ">
                <box-icon
                  name="arrow-back"
                  color="#0ea5e9"
                  rotate="180"
                ></box-icon>
              </p>
            </a>
          </div>
        </div>

        <div className="glowing-ring">
          <img
            className="image"
            src="/illustrate.png"
            alt="illustration"
          />
        </div>
      </main>
      <div className="links flex items-center justify-center gap-3 p-5">
        <div className="border border-white w-28 bottom-2"></div>
        <button>
          <box-icon type="logo" color="white" name="linkedin-square"></box-icon>
        </button>
        <a href="https://github.com/monushah108">
          <box-icon type="logo" color="white" name="github"></box-icon>
        </a>
        <button>
          <box-icon type="logo" color="white" name="instagram-alt"></box-icon>
        </button>
      </div>
    </section>
  );
}

export default Header;
