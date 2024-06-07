import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
     
      Want to keep up with my work? Connect with me on
          <a id="contact" href="https://www.linkedin.com/in/aileen-nguyen/"
            >💼 LinkedIn</a
          >, <a id="contact" href="https://github.com/nguyenaileen">💻 Github</a>,
          or drop an <a id="contact" href="mailto:aileenn@gmail.com">📧 Email</a>!


      </div>
    </footer>
  );
};

export default Footer;
