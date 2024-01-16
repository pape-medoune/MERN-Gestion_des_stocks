import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/log.png";
import home from "../Home";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/home" },
    { title: "Nos produits", path: "/products" },
    { title: "About us", path: "/about" },
    { title: "Contact", path: "/login" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none shadow">
      <div className="items-center px-6 max-w-screen-x mx-auto md:flex md:px-6">
        <div className="flex items-center justify-between py-2 md:py-1 md:block">
          <Link to="/">
            <img
              className="rounded-full"
              src={Logo}
              width={60}
              alt="Logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-5 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <Link
                  to={item.path}
                  key={idx}
                  className="text-gray-700 font-bold uppercase hover:text-indigo-600"
                >
                  {/* <a to={item.path} className="block">{item.title}</a> */}
                  {item.title}
                </Link>
              );
            })}
            {/* <span className="hidden w-px h-6 bg-gray-300 md:block"></span> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
