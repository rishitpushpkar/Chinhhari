import facebook from "../../assets/Images/facebook.svg";
import instagram from "../../assets/Images/instagram.svg";
import youtubeIcon from "../../assets/Images/youtube.svg";
import linkedin from "../../assets/Images/linkedin.svg";
import pinterest from "../../assets/Images/pinterest.svg";
import logo_white from "../../assets/Images/chinhhari_logo_white_1_x39@2x.png";
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
      {
        platform: "Linkedin",
        icon: linkedin,
        url: "https://www.linkedin.com/company/chinhhari-arts-studio/",
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
      { companyInfo: "About Us", link: "/" },
      { companyInfo: "Contact Us", link: "/" },
      { companyInfo: "Collections", link: "/" },
      { companyInfo: "Custom made Design", link: "/" },
    ],
    customerPolicies: [
      { page: "Return Policy", link: "/" },
      { page: "Privacy Policy", link: "/" },
      { page: "Terms of Services", link: "/" },
      { page: "Shipping Details", link: "/" },
    ],
    contactUs: {
      supportMail: { text: "Support Mail", mail: "shopwhole@gmail.in" },
      telephone: { text: "Telephone", ph: 91045451813 },
      RegisteredAddress: {
        text: "REGISTERED ADDRESS",
        address: `Shopwhole Pvt. ltd.
      124,Block C, anan vihar, Phase 3,
      sitapur, UP - 122001`,
      },
    },
  };

  return (
    <>
      <footer>
        <section>
          <div>
            <img src={logo_white} alt="Brand Logo" />
          </div>
          <ul>
            {footer_details.reachOut.map((e, index) => {
              return (
                <li key={index}>
                  <a>
                    <img src={e.icon} alt={`${e.platform} Icon`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <strong>Company</strong>
          <ul>
            {footer_details.company.map((e, index) => {
              return (
                <li key={index}>
                  <a>{e.companyInfo}</a>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <strong>Customer Policies</strong>
          <ul>
            {footer_details.customerPolicies.map((e, index) => {
              return (
                <li key={index}>
                  <a>{e.page}</a>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <strong>Contact us</strong>
          <ul>
            <li>
              {`${footer_details.contactUs.supportMail.text}-${footer_details.contactUs.supportMail.mail}`}
            </li>
            <li>
              {`${footer_details.contactUs.telephone.text}-${footer_details.contactUs.telephone.ph}`}
            </li>
            <li>
              {`${footer_details.contactUs.RegisteredAddress.text}-${footer_details.contactUs.RegisteredAddress.address}`}
            </li>
          </ul>
        </section>

        <p>© 2024 Chinhhari Arts</p>
      </footer>
    </>
  );
}
