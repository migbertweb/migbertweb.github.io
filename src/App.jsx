import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import avatar from "/avatar.jpg";
import code from "/code.png";
import design from "/design.png";
import consulting from "/consulting.png";
import web1 from "/web1.png";
import web2 from "/web2.png";
import web3 from "/web3.png";
import web4 from "/web4.png";
import web5 from "/web5.png";
import web6 from "/web6.png";
import { useEffect, useState } from "react";
import personalData from "./datos";
import Atropos from "atropos/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => prevTheme == "light" ? "dark" : "light");
  };

  return (
    <div>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-30">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="text-xl font-burtons">DevelopByMe</h1>
          <ul className="flex items-center">
            <li>
              {theme == "light"
                ? (
                  <BsFillMoonStarsFill
                    onClick={handleChangeTheme}
                    className="cursor-pointer text-2xl"
                  />
                )
                : (
                  <BsFillSunFill
                    onClick={handleChangeTheme}
                    className="cursor-pointer text-2xl"
                  />
                )}
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="/Curriculo.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <section className="min-h-screen">
          {personalData.map((data, key) => {
            return (
              <div className="text-center p-10" key={key}>
                <h2 className="text-5xl py-2 text-teal-600 font-medium  dark:text-teal-400 md:text-6xl">
                  {data.nombre}
                </h2>
                <h3 className="text-2xl py-2 dark:text-white  md:text-3xl">
                  {data.cargo}
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                  {data.resumen}
                </p>
              </div>
            );
          })}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/migbertyanezcana">
              <AiFillLinkedin className="sociallink" />
            </a>
            <a href="https://github.com/migbertweb">
              <AiFillGithub className="sociallink" />
            </a>
            <a href="https://www.instagram.com/migbertyanez">
              <AiFillInstagram className="sociallink" />
            </a>
          </div>
          <Atropos shadow={false}>
            <div className="relative mx-auto rounded-full w-80 h-80 mt-20 md:h-96 md:w-96 sm:w-48 sm:h-48">
              <img
                src={avatar}
                alt="avatar"
                className="w-80 h-80  md:h-96 md:w-96 sm:w-48 sm:h-48 rounded-full"
              />
            </div>
          </Atropos>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500">agencies</span>
              consulted for <span className="text-teal-500">startups</span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={design} className="h-48 w-48" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={code} className="h-48 w-48" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={consulting} className="h-48 w-48" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500">agencies</span>
              consulted for <span className="text-teal-500">startups</span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover h-auto max-w-full"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover h-auto max-w-full"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover h-auto max-w-full"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover h-auto max-w-full"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover h-auto max-w-full"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover h-auto max-w-full"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
