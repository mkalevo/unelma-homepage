import logo from "./img/logo.jpg";
import puhdaskoti from "./img/puhdaskoti.jpg";

function Home(props) {
  return (
    <div className="home">
      <div className="brand">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Siivouspalvelu Unelma</h1>
      </div>
      <img src={puhdaskoti} alt="Puhdaskoti" />
    </div>
  );
}

export default Home;
