import React from "react";

export default function About() {
  const skills = [
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Redux",
    "NPM",
    "Jest",
    "GitHub",
    "HTML"
  ];
  return (
    <section className="  p-[1em] md:p-[4em] my-10 font-nunito" id="about">
      <main className="grid  grid-cols-2 bg-[#31333b]  relative ">
        <div className="col-span-2 md:col-span-1 p-10">
          <div>
            <p className="text-2xl border-sky-400 border-b-2 mb-4 w-fit">
              About -
            </p>
            <p className="md:text-base text-sm">
              "I’m Monu Shah, a dedicated BCA student with a strong passion for
              front-end development. My interest in web development started back
              in my school days, and it has only grown stronger over time. I’ve
              been learning and refining my front-end development skills for the
              past 7 months. During this time, I’ve developed a deep
              understanding of building user-friendly, interactive websites. I’m
              constantly exploring new tools, technologies, and design trends to
              improve my skills, and I’m excited to continue growing in this
              field as I work towards building seamless digital experiences."
            </p>
          </div>
        </div>
        <div className="col-span-2 p-10 row-2">
          <p className="text-2xl border-sky-400 border-b-2 mb-5 w-fit">Skill</p>
          <div className="flex items-center flex-wrap gap-5 text-xs ">
            {skills.map((skill) => {
              return (
                <div>
                  <img className="w-10" src={`/${skill}.svg`} alt={skill} />
                  <p className="text-center">{skill}</p>
                </div>
              );
            })}
            
          </div>
        </div>

        <div className="md:block hidden rounded-full">
          <img src="/laptop.png" alt="" />
        </div>
      </main>
    </section>
  );
}
