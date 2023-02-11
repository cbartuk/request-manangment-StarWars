import {Link} from "components/base";
import {faTwitter, faInstagram, faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h2>Follow Star Wars</h2>
            <nav className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <Link href="https://twitter.com" target="_blank" className="fs-3">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://twitter.com" target="_blank" className="fs-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://twitter.com" target="_blank" className="fs-3">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://twitter.com" target="_blank" className="fs-3">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
