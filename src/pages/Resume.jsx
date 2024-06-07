export default function Resume() {
  return (
    <div className=" " style={{fontFamily: "Gill Sans"}}>
      <ul>
        <header>Technical Skills</header>
        <li className="list"> HTML and CSS</li>
        <li className="list"> Javascript</li>
        <li className="list"> Bootstrap</li>
        <li className="list"> React</li>

      
      </ul>
      <p style={{ color: "#320A28", fontSize:"20px", paddingLeft:"40px" }}>
        {" "}
        <a href="https://docs.google.com/document/d/1AFjc94zBwKsRNg6tSVkhnudOnu4vrmTP/edit?usp=sharing&ouid=114911694152103495754&rtpof=true&sd=true">
          Click here for my resume!
        </a>
      </p>
    </div>
  );
}