import IconBox from "../Icon_Box/IconBox";
import "./footer.scss";
import { BsInstagram, BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";

const icons = [
  {
    icon_name: "instagram",
    link: "https://www.instagram.com/",
    icon: <BsInstagram />,
  },
  {
    icon_name: "facebook",
    link: "https://www.facebook.com/",
    icon: <BsFacebook />,
  },
  {
    icon_name: "twitter",
    link: "https://www.twitter.com/",
    icon: <BsTwitter />,
  },
  {
    icon_name: "github",
    link: "https://www.github.com/",
    icon: <BsGithub />,
  },
];

const Footer = () => {
  return (
    <div className="social-media-icons">
      {icons &&
        icons.map((data, i) => {
          const { icon, icon_name: name, link: url } = data;
          return (
            <IconBox key={i} icon_name={name} link={url}>
              {icon}
            </IconBox>
          );
        })}
    </div>
  );
};

export default Footer;
