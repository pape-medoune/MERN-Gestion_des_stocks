import React from "react";
import me from "../assets/images/me.jpeg";
import issakha from '../assets/images/WhatsApp Image 2023-12-19 at 14.06.50.jpeg' 
import "./team.css";
import { DiGithubAlt } from "react-icons/di";
import { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import SideBar from "../components/Sidebar";
// import SideBar from "./components/Sidebar";
import sidebar_menu from "../constants/sidebar-menu";
import axios from "axios";
import { FaGithub,FaLinkedin } from "react-icons/fa6";

function Team() {
  let bigTitleSpan1 = useRef(null);
  let bigTitleSpan2 = useRef(null);
  let bigTitleSpan3 = useRef(null);
  let bigTitleSpan4 = useRef(null);
  let bigTitleSpan5 = useRef(null);
  let bigTitleSpan6 = useRef(null);
  let bigTitleSpan7 = useRef(null);
  let bigTitleSpan8 = useRef(null);
  let bigTitleSpan9 = useRef(null);
  let bigTitleSpan10 = useRef(null);
  let secondTitle = useRef(null);
  let subTitle = useRef(null);
  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);

  useEffect(() => {
    TweenMax.staggerFromTo(
      bigTitleSpan1,
      5,
      { delay: 0.1, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 0.1, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan2,
      5,
      { delay: 0.3, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 0.3, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan3,
      5,
      { delay: 0.5, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 0.5, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan4,
      5,
      { delay: 0.7, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 0.7, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan5,
      5,
      { delay: 0.9, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 0.9, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan6,
      5,
      { delay: 1.1, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 1.1, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan7,
      5,
      { delay: 1.3, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 1.3, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan8,
      5,
      { delay: 1.5, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 1.5, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan9,
      5,
      { delay: 1.7, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 1.7, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      bigTitleSpan10,
      5,
      { delay: 1.9, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 1.9, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );

    TweenMax.staggerFromTo(
      secondTitle,
      5,
      { delay: 2.1, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 2.1, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );

    TweenMax.staggerFromTo(
      subTitle,
      5,
      { delay: 2.3, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 2.3, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
    TweenMax.staggerFromTo(
      card1,
      5,
      { delay: 2.5, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 2.5, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );

    TweenMax.staggerFromTo(
      card2,
      5,
      { delay: 2.8, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 2.8, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );

    TweenMax.staggerFromTo(
      card3,
      5,
      { delay: 3.1, opacity: 0, y: -40, ease: Power3.easeOut },
      { delay: 3.1, opacity: 1, y: 5, ease: Power3.easeOut },
      0.5
    );
  }, []);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = getCookie("token");

        if (!token) {
          console.error("Token not found");
          return;
        }

        const response = await axios.get("http://localhost:4400/login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data;
        console.log("Authenticated user data:", userData);
      } catch (error) {
        console.error("Authentication failed:", error);
      }
    };

    checkAuthentication();
  }, []);

  function getCookie(name) {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));

    return cookieValue ? cookieValue.split("=")[1] : null;
  }
  return (
    <section className=" h-screen flex flex-row ">
      <SideBar menu={sidebar_menu} />
      <div class="flex flex-col w-full -mt-3 h-screen justify-between">
        <div className="flex justify-center text-[6.5vw]">
          <span ref={(El) => (bigTitleSpan1 = El)} className="slogan">
            S
          </span>
          <span ref={(El) => (bigTitleSpan2 = El)} className="slogan">
            A
          </span>
          <span ref={(El) => (bigTitleSpan3 = El)} className="slogan">
            M
          </span>
          <span ref={(El) => (bigTitleSpan4 = El)} className="slogan">
            A
          </span>
          <span ref={(El) => (bigTitleSpan5 = El)}>&nbsp;&nbsp;</span>
          <span ref={(El) => (bigTitleSpan6 = El)} className="slogan">
            S
          </span>
          <span ref={(El) => (bigTitleSpan7 = El)} className="slogan">
            T
          </span>
          <span ref={(El) => (bigTitleSpan8 = El)} className="slogan">
            O
          </span>
          <span ref={(El) => (bigTitleSpan9 = El)} className="slogan">
            C
          </span>
          <span ref={(El) => (bigTitleSpan10 = El)} className="slogan">
            K
          </span>
        </div>
        <div className="max-w-xl mx-auto sm:text-center">
          <h3
            ref={(El) => (secondTitle = El)}
            className="text-gray-800 text-3xl font-semibold sm:text-4xl"
          >
            Notre Equipe de devs
          </h3>
          <p ref={(El) => (subTitle = El)} className="text-gray-600 mt-3">
            Composition de notre équipe !
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4  ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  className="w-full bg-white shadow-lg hover:shadow-md  rounded-lg p-12 flex flex-col justify-center items-center"
                  ref={(El) => (card1 = El)}
                >
                  <div className="mb-8">
                    <img
                      className="object-center object-cover rounded-full h-36 w-36"
                      src={issakha}
                      alt="photo"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">
                      Issakha Cissé
                    </p>
                    <p className="text-base text-gray-400 font-normal">
                      Développeur full stack web et mobile
                    </p>

                    <p className="text-base flex flex-row gap-x-3 justify-center mt-1 items-center text-gray-400 font-normal">
                      <a href="https://github.com/cisse410">
                        <FaGithub size={35} />
                      </a>

                      <a href="https://linkedin.com/in/issakha-cisse">
                        <FaLinkedin  size={35} />
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="w-full bg-white shadow-lg hover:shadow-md  rounded-lg p-12 flex flex-col justify-center items-center"
                  ref={(El) => (card2 = El)}
                >
                  <div className="mb-8">
                    <img
                      className="object-center object-cover rounded-full h-36 w-36"
                      src={me}
                      alt="photo"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">
                      Mouhamedoune Fall
                    </p>
                    <p className="text-base text-gray-400 font-normal">
                      Développeur fullStack web et mobile Chez DIGITA
                    </p>

                    <p className="text-base flex flex-row gap-x-3 justify-center mt-1 items-center text-gray-400 font-normal">
                      <a href="https://github.com/pape-medoune">
                        <FaGithub size={35} />
                      </a>

                      <a href="https://linkedin.com/in/mouhamedoune-fall-99b79322b">
                        <FaLinkedin  size={35} />
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="w-full bg-white shadow-lg hover:shadow-md rounded-lg p-12 flex flex-col justify-center items-center"
                  ref={(El) => (card3 = El)}
                >
                  <div className="mb-8">
                    <img
                      className="object-center object-cover rounded-full h-36 w-36"
                      src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                      alt="photo"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">
                      Omar Boune K. Thiam
                    </p>
                    <p className="text-base text-gray-400 font-normal">
                      Developpeur Web
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
