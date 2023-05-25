import './button-box.scss'
const ButtonBox = ({ children, icon, icon_name, link }) => {
  return (
    <a href={link} target="_blank" className={`button-box ${icon_name}`}>
      {icon}
      <button className="button">{children} </button>
    </a>
  );
};
export default ButtonBox;
