import PropTypes from "prop-types";
import Modal from "./Modal";
import { useState } from "react";

const BlogCard = ({ blog }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="p-5 rounded-lg mb-2 h-full bg-light-bg-secondary dark:bg-transparent dark:border-dark-border dark:border-2">
        <div className="overflow-hidden rounded-lg">
          <a href={blog.data.link}>
            <img
              className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
              src={blog.data.img}
              alt="blog image"
              onClick={openModal}
            />
          </a>
        </div>
        <div className="flex mt-4 text-tiny text-text-primary dark:text-main-text">
          <span>{blog.data.date}</span>
          <span className="relative transform pl-6 after:absolute after:content-[''] after:left-2 after:top-1/2 after:h-1 after:w-1 after:traslate-y-[-50%] after:rounded-full after:bg-text-primary">
            {blog.data.category}
          </span>
        </div>
        <h3
          className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-btn-primary dark:hover:text-btn-primary"
          onClick={openModal}
        >
          <a href={blog.data.link}>{blog.data.title}</a>
        </h3>
      </div>
      {showModal && (
        <Modal closeModal={closeModal}>
          <div className="pr-3 pb-2">
            <img
              className="w-full md:h-[450px] object-cover rounded-xl mt-6"
              src={blog.data.modal.blogImg}
              alt="blog image"
            />
            <div className="flex mt-4 text-tiny text-black dark:text-white">
              <span>{blog.data.modal.date}</span>
              <span className="relative transform pl-6 after:absolute after:content-[''] after:left-2 after:top-1/2 after:h-1 after:w-1 after:traslate-y-[-50%] after:rounded-full after:bg-text-primary">
                Inspiration
              </span>
            </div>
            <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">
              {blog.data.modal.title}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: blog.body }}
              className="dark:text-white font-normal text-[15px] sm:text-sm my-4"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
  openModal: PropTypes.func,
};

export default BlogCard;
