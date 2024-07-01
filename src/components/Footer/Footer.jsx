import facebook from "../../assets/Images/facebook.svg";
import instagram from "../../assets/Images/instagram.svg";
import youtubeIcon from "../../assets/Images/youtube.svg";
import linkedin from "../../assets/Images/linkedin.svg";
import pinterest from "../../assets/Images/pinterest.svg";
import logo_white from "../../assets/Images/chinhhari_logo_white_1_x39@2x.png";
import whatsapp from "../../assets/Images/whatsapp.svg";
import "./Footer.css";
// import { Link } from "react-router-dom";

export default function Footer() {
  const footer_details = {
    reachOut: [
      {
        platform: "Instagram",
        icon: instagram,
        url: "https://www.instagram.com/chinhhari_arts_studio/",
      },
      {
        platform: "Facebook",
        icon: facebook,
        url: "https://www.facebook.com/chinhhariarts",
      },
      // {
      //   platform: "Linkedin",
      //   icon: linkedin,
      //   url: "https://www.linkedin.com/company/chinhhari-arts-studio/",
      // },
      {
        platform: "Whatsapp",
        icon: whatsapp,
        url: "/",
      },
      {
        platform: "Youtube",
        icon: youtubeIcon,
        url: "https://www.youtube.com/channel/UCePERq1tT2IFncOpLMGnCbQ",
      },
      {
        platform: "Pinterest",
        icon: pinterest,
        url: "https://in.pinterest.com/chinhhari_arts_studio/",
      },
    ],
    company: [
      {
        companyInfo: "About Us",
        link: "https://chinhhariarts.org/pages/about-us",
      },
      {
        companyInfo: "Contact",
        link: "https://chinhhariarts.org/pages/contact-us",
      },
      {
        companyInfo: "Collections",
        link: "https://chinhhariarts.org/collections",
      },
    ],
  };

  return (
    <>
      <footer>
        <section>
          <div>
            <img src={logo_white} alt="Brand Logo" />
          </div>
        </section>
        <section>
          <ul>
            {footer_details.company.map((e, index) => {
              return (
                <li key={index}>
                  <a href={e.link}>{e.companyInfo}</a>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <ul>
            {footer_details.reachOut.map((e, index) => {
              return (
                <li key={index}>
                  <a href={e.url}>
                    <img src={e.icon} alt={`${e.platform} Icon`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <p>© 2024 Chinhhari Arts</p>
      </footer>
    </>
  );
}
