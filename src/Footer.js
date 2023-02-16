import { Github } from "react-bootstrap-icons"
import { Linkedin } from "react-bootstrap-icons"
import { Youtube } from "react-bootstrap-icons"
const Footer = () => {
  return (
    <footer>
      <h3>The Culture Kitchen</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad explicabo alias ipsa vitae. Nobis consequaturme voluptatibus culpa modi voluptas delectus odio soluta! Totam quas provident optio inventore.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad explicabo alias ipsa vitae. Nobis consequatur, totam minima maxime voluptatibus culpa modi voluptas delectus odio soluta! Totam quas provident optio inventore.</p>
      <ul className="socials">
        <li><a href=""><Github size={40}/> </a></li>
        <li><a href=""><Linkedin size={40}/> </a></li>
        <li><a href=""><Youtube size={40}/> </a></li>
      </ul>
    </footer>
  )
}

export default Footer