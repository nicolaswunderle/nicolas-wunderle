import PropTypes from "prop-types";

const Tag = ({ tagName }) => {
  return (
    <button className="resume-btn cursor-default rounded-lg bg-light-bg-six pl-5 pr-5 pt-2 pb-2 text-text-primary dark:bg-dark-bg-two dark:text-main-text">
      {tagName}
    </button>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string,
};

export default Tag;
