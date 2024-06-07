import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
   <h4>Want to stay up-to-date with my work?</h4>
        <h4>
          Connect with me on
          <a id="contact" href="https://www.linkedin.com/in/aileen-nguyen/"
            >💼 LinkedIn</a
          >, <a id="contact" href="https://github.com/nguyenaileen">💻 Github</a>,
          or <a id="contact" href="https://stackoverflow.com/users/25460026/aileen-nguyen">📝 Stack Overflow</a>!
        </h4>
    </footer>
  );
};

export default Footer;
