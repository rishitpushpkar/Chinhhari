import InputField from "../components/InputField/InputField";
import "../styles/Enquiry.css";
import EnquiryCard from "../components/Card/EnquiryCard/EnquiryCard";

export default function Enquiry() {
  return (
    <div className="flex flex-col justify-between ">
      <div className=" h-[10vw] lg:h-[5vw] "></div>
      <div className="enquiryContainer">
        <section>
          <article>
            <h1>Enquiry Form</h1>
            <div>
              <InputField
                inputType="textfield"
                placeholder="Full Name"
                maxLength={10}
                minLength={10}
              />
            </div>
            <div>
              <InputField inputType="textfield" placeholder="Email" />
            </div>
            <div>
              <InputField
                inputType="textfield"
                placeholder="Mobile No."
                maxLength={10}
                minLength={10}
              />
            </div>
            <button className="submitEnquiryBtn">Submit Enquiry</button>
          </article>
        </section>

        <section>
          <EnquiryCard />
          <EnquiryCard />
          <EnquiryCard />
          <EnquiryCard />
          <EnquiryCard />
          <EnquiryCard />
        </section>
      </div>
    </div>
  );
}
