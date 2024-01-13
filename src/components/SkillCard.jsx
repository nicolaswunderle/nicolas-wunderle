import PropTypes from "prop-types";

const SkillCard = ({ skill }) => {
  return (
    <div
      className={`flex gap-4 rounded-xl p-6 border-dark-border dark:border-2 ${skill.data.bgColor} dark:bg-transparent`}
    >
      <img
        className="w-10 h-10 object-contain block"
        src={skill.data.img}
        alt="icon"
      />
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
