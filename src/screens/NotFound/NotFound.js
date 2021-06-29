import { Link } from "react-router-dom";
import arrowBack from "../../images/arrow-back.svg";
import notfound from "../../images/notfound.svg";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";

const NotFound = () => {
  return (
    <>
      <Meta title="404 Page Not Found"></Meta>

      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <header className="flex-row just-cont-cntr">
          <Link to="/" className="arrow">
            <img src={arrowBack} alt=""></img>
          </Link>
          <div className="container">
            <nav>
              <div className="logo ">
                <Link to="/">
                  {" "}
                  <h1>TO BE</h1>
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main style={{ display: "grid", placeItems: "center", height: "50%" }}>
          <h2 style={{ textAlign: "center", color: "#220099" }}>
            Oops! some thing you are looking for is NOT FOUND
          </h2>
          <img
            src={notfound}
            alt="not found illustration"
            style={{ width: "19em" }}
          />
        </main>
        <footer style={{ marginTop: "auto", padding: "0" }}>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default NotFound;
