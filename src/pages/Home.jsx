export default function Home() {
  return (
    <div>
      <div class="row gx-5" style={{fontFamily: "Gill Sans"}}>
      <div class="col-lg-6 mb-4" id="about" style={{paddingTop: "50px"}}>
        <header>Aileen Nguyen</header>
        <h1>Software Developer</h1>
        <h2>
          I’m a software developer based in Los Angeles. I started off as a designer and this is the beginning of my web development journey.  I’m passionate about
          creating accessible applications for everyone to use! Please check out some of my projects my clicking the tabs. 
        </h2>
      </div>
      <div class="col-lg-6 mb-4">
        <img
          class="profilepic"
          src="./images/profile.png"
          alt="Picture of Aileen in Black jacket with frozen waterfall in background"
        />
      </div>
    </div>
    </div>
  );
}
