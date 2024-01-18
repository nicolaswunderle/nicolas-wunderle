import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";
import {
  FaTools,
  FaUser,
  FaExternalLinkAlt
} from "react-icons/fa";
import config from "../config/config.json";

const PortfolioCard = ({ details }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="rounded-lg bg-light-bg-three p-6 dark:bg-transparent dark:border-[2px] border-dark-border">
        <div className="overflow-hidden rounded-lg">
          <a href={details.data.link}>
            <img
              className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
              src={config.site.base + details.data.previewimg}
              alt="portfolio image"
              onClick={openModal}
            />
          </a>
        </div>
        <span className="pt-5 text-[14px] font-normal text-text-primary block dark:text-main-text">
          {details.data.category}
        </span>

        <h2
          className="font-medium cursor-pointer text-xl duration-300 transition hover:text-btn-primary dark:hover:text-btn-primary dark:text-white mt-2"
          onClick={openModal}
        >
          <a href={details.data.link}>{details.data.title}</a>
        </h2>
      </div>

      {showModal && (
        <Modal closeModal={closeModal}>
          <h2 className="text-modal-text dark:hover:text-btn-primary text-4xl text-center font-bold">
            {details.data.title}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 mb-6">
            <div className="space-y-2">
              <p className="dark:text-white flex items-center lg:mt-0 text-[15px] sm:text-lg">
                <span className="text-lg mr-3 hidden sm:block mb-[3px]">
                  <FaUser />
                </span>
                Client :&nbsp;{" "}
                <span className="font-medium">{details.data.client}</span>
              </p>
              {(details.data.apercu && details.data.linkapercu) && (
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                  <span className="text-lg mr-3 hidden sm:block mb-[3px]">
                    <FaExternalLinkAlt />
                  </span>
                  <span className="font-medium transition-all duration-300 ease-in-out hover:text-modal-text">
                    <a
                      href={details.data.linkapercu}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {details.data.apercu}
                    </a>
                  </span>
                </p>
              )}
            </div>
            {details.data.outils && (
              <div className="space-y-2">
                <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                  <span className="text-lg mr-3 hidden sm:block mb-[3px]">
                    <FaTools />
                  </span>
                  Outils :&nbsp;{details.data.outils}
                </p>
              </div>
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: details.body }}
            className="dark:text-white font-normal text-[15px] sm:text-sm mt-5 [&>p]:mb-3 [&>h3]:mt-6 [&>h3]:mb-4 [&>h3]:dark:text-white [&>h3]:sm:text-xl [&>h3]:font-medium [&>ol]:list-decimal [&>ul]:list-disc [&>ol]:pl-5 [&>ul]:pl-5 [&>ol>li]:mb-4 [&>ul>li]:mb-4"
          ></div>
          {details.data.img && (
            <div className="pr-3">
              <img
                className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                src={config.site.base + details.data.img}
                alt="portfolio image"
              />
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

PortfolioCard.propTypes = {
  details: PropTypes.object,
};

export default PortfolioCard;
