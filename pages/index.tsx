import type { NextPage } from "next";
import Icon from "../components/icon";

const Home: NextPage = () => {
  return (
    <div className="border-8 border-black my-4">
      <h1 className="text-6xl font-bold uppercase mt-2 text-center ">About</h1>
      <div className="font-mono border-8 border-black m-2 md:flex justify-between">
        <div className="basis-2/3 p-4">
          <h2 className="text-4xl font-sans font-bold">Mateusz Ostafil</h2>
          <h3 className="text-lg">
            Technology Evangelist / Trainer / Mentor / Leader @{" "}
            <a
              className="text-blue-700 underline"
              href="https://www.divante.com/"
              rel="noreferrer"
              target="_blank"
            >
              Divante
            </a>
          </h3>
          <p className="mt-3">Hello I&apos;m Mateusz, I learn, I teach.</p>
          <p className="mt-3">
            I consider myself to be a mediocre developer. However, IMHO I excel
            in knowledge sharing. That&apos;s why I decided to be a missing link
            between the tech and non-tech people. It turned out to work well.
            For instance, I&apos;ve helped ~150 people to become software
            developers from scratch. Now I teach more advanced programmers how
            to build eCommerce front ends using Angular and{" "}
            <a
              className="text-blue-700 underline"
              href="https://github.com/SAP/spartacus"
              rel="noreferrer"
              target="_blank"
            >
              SAP Spartacus Storefront
            </a>
            . Besides that, I enjoy leading my awesome team of developers @{" "}
            <a
              className="text-blue-700 underline"
              href="https://www.divante.com/career"
              rel="noreferrer"
              target="_blank"
            >
              Divante
            </a>
            .
          </p>
          <p className="mt-3">
            I like to call myself a technology agnostic. Throughout my career, I
            worked a little bit with electronics, then I moved on to writing SQL
            queries and building data warehouses. But I felt to be too far away
            from the end-user. So I went up the stack through the back end to
            the front end. I currently work with Angular, but I&apos;m also
            interested in other frameworks (I built this website using react +
            next.js + tailwind). My main points of interest nowadays are vanilla
            JS and performance.
          </p>
          <p className="mt-3">Feel free to contact me:</p>
          <p className="mt-3">
            <a href="https://github.com/mateuszo">
              <Icon type="github"></Icon>{" "}
              <span className="text-blue-700 underline">
                github.com/mateuszo
              </span>
            </a>
          </p>
          <p className="mt-3">
            <a href="https://www.linkedin.com/in/mostafil/">
              <Icon type="linkedin"></Icon>{" "}
              <span className="text-blue-700 underline">
                linkedin.com/in/mostafil/
              </span>
            </a>
          </p>
          <p className="mt-3">
            <a href="https://twitter.com/MateuszOstafil">
              <Icon type="twitter"></Icon>{" "}
              <span className="text-blue-700 underline">
                twitter.com/MateuszOstafil
              </span>
            </a>
          </p>
          <p className="mt-3">
            <Icon type="email"></Icon> mateusz.ostafil at gmail.com
          </p>
          <p className="mt-3">
            <Icon type="email"></Icon> mostafil at divante.com
          </p>
        </div>
        <div className="relative basis-1/3 max-w-sm m-auto md:m-0 self-end object-contain">
          <img className="grayscale" src="/me.webp" alt="Mateusz Ostafil"></img>
          <img
            className="absolute bottom-0 top-1 left-1 saturate-200 opacity-20"
            src="/me.webp"
            alt="Mateusz Ostafil"
          ></img>
          <img
            className="animate-shiver absolute bottom-0 left-2 hue-rotate-180 opacity-10"
            src="/me.webp"
            alt="Mateusz Ostafil"
          ></img>
          <img
            className="animate-shiver absolute bottom-2 -hue-rotate-60 opacity-10"
            src="/me.webp"
            alt="Mateusz Ostafil"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
