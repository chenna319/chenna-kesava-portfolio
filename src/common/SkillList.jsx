const SkillList = (props) => {
  const { src, skill } = props;
  return (
    <span>
      <img src={src} alt={skill} />
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
