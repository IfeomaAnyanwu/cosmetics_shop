import ceoImg from "../images/ceo.JPG";

export default function ContactUs() {
  return (
    <div className="cat">
      <h1 className=" cat-heading "> NEED HELP?</h1>
      <div id="contact-us-page">
        <div id="contact-us-text">
          <p>
            You can also reach us on 08036007596 <br /> from Monday to Saturday
            (8am to 6pm)
          </p>
        </div>
        <div id="contact-us-img">
          <img src={ceoImg} alt="ceo" id="ceo-img" />
        </div>
      </div>
    </div>
  );
}
