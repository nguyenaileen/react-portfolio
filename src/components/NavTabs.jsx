import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs"style={{fontFamily: "Gill Sans"}}>
     <div id= "nav-header" style={{color: "#CC5500", paddingRight:"20px", paddingLeft:"20px", paddingTop:"10px"}}> Aileen Nguyen</div> 
     <li className="nav-item">
        <Link style={{color: "#808080"}}
          to="/"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
     
      <li className="nav-item">
        <Link style={{color: "#808080"}}
          to="/Work"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link style={{color: "#808080"}}
          to="/Resume"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link style={{color: "#808080"}}
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
