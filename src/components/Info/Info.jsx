import "./info.scss";
import ProfileImage from "../../assets/profil-image.png";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import ButtonBox from "../Button_Box/ButtonBox";

const Info = () => {
  return (
    <div className="info">
      <img className="profile-image" src={ProfileImage} alt="profilbild" />
      <h4 className="name"> khaled Bakour</h4>
      <h5 className="job">frontend developer </h5>
      <a href="https://google.com/" target="_blank" className="website">my website</a>
      <div className="buttons-container">
        <ButtonBox
          link="https://mail.google.com/"
          icon_name="email"
          icon={<AiOutlineMail className="button-icon" />}
        >
          email
        </ButtonBox>
        <ButtonBox
          icon={<AiFillLinkedin className="button-icon" />}
          icon_name="linkedin"
          link="https://www.linkedin.com/"
        >
          linkedin
        </ButtonBox>
      </div>
    </div>
  );
};
export default Info;
