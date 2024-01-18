import PropTypes from "prop-types";
import * as Icon from "react-icons/fa";

const SkillCard = ({ skill }) => {
  const ReactIcon = Icon[skill.data.icon];
 
  return (
    <div
      className={`flex gap-6 rounded-xl p-6 border-dark-border dark:border-2 ${skill.data.bgColor} dark:bg-transparent`}
    >
      <span className={`text-4xl ${skill.data.textColor}`}>
        <ReactIcon />
      </span>
      <div className="space-y-2">
        <h3 className="dark:text-white text-[22px] font-semibold">
          {skill.data.skill}
        </h3>
        <p className="leading-8 text-text-primary dark:text-main-text">
          {skill.data.about}
        </p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.object,
};

export default SkillCard;
