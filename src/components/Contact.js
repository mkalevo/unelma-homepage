import MailForm from "./MailForm";

function Contact(props) {
  return (
    <div className="contact">
        <h1><u>Yhteystiedot</u></h1>
        <p style={{margin:"10px", fontSize:"1.3rem"}}>Voit soittaa minulle suoraan alla näkyvään numeroon tai ottaa yhteyttä sähköpostin kautta!</p>
        <br />
    <div className="contact-divs">
      <div className="cont-left">
        <h2>Soita minulle:</h2>
        <h1 className="phone-number">
          <strong>040 123 123 32</strong>
        </h1>
        <p>Tmi: siivouspalvelu unelma</p>
        <p>Ollikkalankatu 36 A4, 24260 Salo</p>
        <p style={{fontSize:"1.3rem"}}><b>siivouspalveluunelma@gmail.com</b></p>
      </div>
      <div className="cont-line"></div>

      <div className="form">
        <MailForm />
      </div>
    </div>
    </div>
  );
}

export default Contact;
