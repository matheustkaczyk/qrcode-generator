import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

const Footer = () => {
  return (
    <footer>
      <p>Matheus Tkaczyk Ribeiro 27/05/2022</p>
      <div>
        <a href="https://www.linkedin.com/in/matheustkaczykribeiro/" target="_blank" rel="noopener noreferrer">]
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.github.com/matheustkaczyk" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
