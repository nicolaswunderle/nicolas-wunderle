import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";

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
              src={details.data.img}
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
            {details.data.modal.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div className="space-y-2">
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                <i className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl" />
                Project :&nbsp;
                <span className="font-medium">
                  {details.data.modal.project}
                </span>
              </p>
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                Langages :&nbsp;
                <span className="font-medium">
                  {details.data.modal.languages}
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                Client :&nbsp;{" "}
                <span className="font-medium">{details.data.modal.client}</span>
              </p>
              <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                <i className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block" />
                Preview :&nbsp;
                <span className="font-medium transition-all duration-300 ease-in-out hover:text-modal-text">
                  <a
                    href={details.data.modal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {details.data.modal.preview}
                  </a>
                </span>
              </p>
            </div>
          </div>

          <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
            {details.data.modal.description}
          </p>
          <div className="pr-3">
            <img
              className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
              src={details.data.modal.img}
              alt="portfolio image"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

PortfolioCard.propTypes = {
  details: PropTypes.object,
};

export default PortfolioCard;
