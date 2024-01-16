import React from "react";
import axios from "axios";
import "./styles.css";
import { useState, useEffect } from "react";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashboardHeader({ btnText, onClick }) {
  const navigate = useNavigate();
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [nomproduit, setNomproduit] = useState();
  const [description, setDescription] = useState();
  const [prix, setPrix] = useState();
  const [image, setImage] = useState([]);
  const [element, setElement] = useState([]);

  const fetchElement = async () => {
    const response = await fetch("http://localhost:4400/display");
    const data = await response.json();

    setElement(data);
  };

  console.log(element);

  useEffect(() => {
    fetchElement();
  }, []);
  const toggleModalEdit = () => {
    setIsModalOpenEdit(!isModalOpenEdit);
  };

  const notify = () => {
    // Set to 3sec
    toast.success("Produit L'ajout fait avec succés", { autoClose: 4000 });
    // .then(()=>console.log("notify affiché successfully!"))
    // .catch((err)=>console.log("Erreur notify!"))
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const createElement = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nomproduit", nomproduit);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("image", image);
    axios
      .post("http://localhost:4400/add", formData)
      .then((response) => {
        console.log("Data inserted successfully" + response.data);
        setElement(response.data);
        toast.success('Le produit est ajouté avec succés');
      })
      .catch((err) => {
        console.error("Erreur lors de l'insertion" + err);
        toast.error("Erreur lors de l'insertion de votre produit !");
      });
  };
  return (
    <div className="dashbord-header-container"> 
      <button
        id="defaultModalButton"
        data-modal-toggle="defaultModal"
        className="block m-5 rounded-xl hover:bg-transparent hover:border hover:border-black ease-in-out hover:text-sky-950 transition delay-150  text-white font-bold bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 -rounded-lg text-sm px-5 py-2.5 text-center "
        type="button"
        onClick={toggleModal}
      >
        Ajouter produit
      </button>
      {isModalOpen && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen"
          onClick={toggleModal}
        >
          <div className="relative p-4 w-full max-w-2xl md:h-auto">
            <div
              className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ajouter Produit
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form
                action="#"
                onSubmit={notify}
                encType="multipart/form-data"
                method="POST"
              >
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nom Produit
                    </label>
                    <input
                      type="text"
                      name="nom"
                      id="name"
                      value={nomproduit}
                      onChange={(e) => {
                        setNomproduit(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Nom du produit"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="prix"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Prix
                    </label>
                    <input
                      type="text"
                      name="prix"
                      id="prix"
                      value={prix}
                      onChange={(e) => {
                        setPrix(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Prix de ce produit"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="Description"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Description"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      // value={image}
                      id="image"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      onChange={(e) => setImage(e.target.files[0])}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={createElement}
                >
                  <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Ajouter nouveau produit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default DashboardHeader;
