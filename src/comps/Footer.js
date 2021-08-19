import { FaGithub, FaInstagram, FaBriefcase } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
                <div id="icons-grid">
                       <a href="https://github.com/ChandanPk"> <span className="icons"><FaGithub /></span> </a>
                       <a href="https://www.instagram.com/chandan_paull/"> <span className="icons"> <FaInstagram /></span> </a>
                       <a href="https://chandankumar-portfolio.netlify.app/"> <span className="icons"> <FaBriefcase /></span> </a>
                </div>
                    <p id="copy-right">&copy; 2021 | chandan Kumar</p>
        </footer>
    );
}

export default Footer;