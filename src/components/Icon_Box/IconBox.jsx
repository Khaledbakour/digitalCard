import "./icon-box.scss";
const IconBox = ({ children, link, icon_name, index }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`icon-box ${icon_name}`}
      key={index}
    >
      {children}
    </a>
  );
};
export default IconBox;
