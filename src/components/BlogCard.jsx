import PropTypes from "prop-types";
import Modal from "./Modal";
import { useState } from "react";
import config from "../config/config.json";

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
              src={config.site.base + blog.data.previewimg}
              alt="blog image"
              onClick={openModal}
            />
          </a>
        </div>
        <div className="flex mt-4 text-tiny text-text-primary dark:text-main-text">
          <span>{blog.data.date.toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}</span>
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
          <div className="pr-3">
            <img
              className="w-full md:h-[450px] object-cover rounded-xl"
              src={config.site.base + blog.data.img}
              alt="blog image"
            />
            <div className="flex mt-4 text-tiny text-black dark:text-white">
              <span>{blog.data.date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}</span>
              <span className="relative transform pl-6 after:absolute after:content-[''] after:left-2 after:top-1/2 after:h-1 after:w-1 after:traslate-y-[-50%] after:rounded-full after:bg-text-primary">
                {blog.data.category}
              </span>
            </div>
            <h2 className="dark:text-white sm:text-3xl mt-7 font-semibold">
              {blog.data.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: blog.body }}
              className="dark:text-white font-normal text-[15px] sm:text-sm mt-5 [&>p]:mb-3 [&>h3]:mt-6 [&>h3]:mb-4 [&>h3]:dark:text-white [&>h3]:sm:text-xl [&>h3]:font-medium [&>ol]:list-decimal [&>ul]:list-disc [&>ol]:pl-5 [&>ul]:pl-5 [&>ol>li]:mb-4 [&>ul>li]:mb-4"
            ></div>
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
