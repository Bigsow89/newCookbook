import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <footer>
      <h3>The Culture Kitchen</h3>
      <p>More tasty recipes coming soon. Keep checking for more updates</p>
      <ul className="socials">
        <li>
          <a href="">
            <Github size={40} />{" "}
          </a>
        </li>
        <li>
          <a href="">
            <Linkedin size={40} />{" "}
          </a>
        </li>
        <li>
          <a href="">
            <Youtube size={40} />{" "}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
