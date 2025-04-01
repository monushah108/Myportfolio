import "boxicons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";


export default function Projects() {
  return (
    <section className="my-15 p-2 md:p-10 font-nunito relative" id="projects">
      <p className="text-2xl my-20 text-center border-b-sky-400 border-b-2 w-fit m-auto">
        Projects
      </p>
      <div className="md:w-[800px] m-auto">
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card relative  bg-[#242429] rounded-lg w-[350px] flex items-center flex-col sm:w-[300px] md:w-[350px] m-auto">
            <img
              className="rounded-t-lg"
              src="/project-1.png"
              alt="card img"
            />
            <div className="space-y-4 p-5">
              <p className="text-xl">Blogger</p>
              <p className="text-sm">
              Blogger is a very optimized and user-friendly website. Anybody can read and post their blog on this website. It uses very smooth and responsive languages to create the site, including React for smoother functionality, Redux for state management, TailwindCSS for styling, and REST API for better clarity and interaction.
              </p>
              <a href="https://monushah108.github.io/DesiBlog/" rel="noopener noreferrer" className="text-sm border-b-2 border-sky-400" >
                Preview
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card relative  bg-[#242429] rounded-lg w-[350px] flex items-center flex-col sm:w-[300px] md:w-[350px] m-auto">
            <img
              className="rounded-t-lg"
              src="/project-2.png"
              alt="card img"
            />
            <div className="space-y-4 p-5">
              <p className="text-xl">Ecommerce</p>
              <p className="text-sm">
              E-commerce websites are easy to use and fast. Built with React for smooth performance, Redux Toolkit helps manage the state well, making everything update quickly. TailwindCSS is used for clean and responsive design. The site is optimized to work fast and efficiently, giving users a good shopping experience.
              </p>
              <a  href="https://taupe-rolypoly-a7b546.netlify.app/"  className="text-sm border-b-2 border-sky-400" rel="noopener noreferrer">
                Preview
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card relative  bg-[#242429] rounded-lg w-[350px] flex items-center flex-col sm:w-[300px] md:w-[350px] m-auto">
            <img
              className="rounded-t-lg"
              src="/project-3.png"
              alt="card img"
            />
            <div className="space-y-4 p-5">
              <p className="text-xl">Task Management</p>
              <p className="text-sm">
              A task management app helps us stay focused on work and allows us to schedule tasks. It is built using similar technologies like React for smooth performance, Redux Toolkit for managing the state, and TailwindCSS for a clean and responsive design. This makes it easy to organize and track tasks efficiently.
              </p>
              <a href="https://dreamy-muffin-443851.netlify.app/" className="text-sm border-b-2 border-sky-400"  rel="noopener noreferrer">
                Preview
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}


// religion is the opium of the people