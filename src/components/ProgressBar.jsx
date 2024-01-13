import PropTypes from "prop-types";

const ProgressBar = ({ details }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-light-title dark:text-main-text">
          {details.data.title}
        </span>
        <span className="font-semibold text-light-title dark:text-main-text">
          {details.data.percentage}%
        </span>
      </div>
      <div className="w-full bg-light-bg-four rounded-full h-1 dark:bg-dark-bg-two">
        <div
          className={`${details.data.bgColor} h-1 rounded-full`}
          style={{ width: `${details.data.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  details: PropTypes.object,
};

export default ProgressBar;
