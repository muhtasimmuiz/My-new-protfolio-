import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-visual">
        <div className="about-orb about-orb-warm"></div>
        <div className="about-orb about-orb-cool"></div>
        <div className="about-avatar-shell">
          <div className="about-avatar-ring"></div>
          <div className="about-avatar-glow"></div>
          <img
            src="/images/about-avatar.png"
            alt="About section avatar"
            className="about-avatar-image"
          />
        </div>
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          MUHTASIM MUIZ is a Web3 builder and researcher exploring how
          blockchain, privacy tech, and DeFi can create stronger digital trust.
          I care about building products that feel modern, resilient, and
          genuinely useful in a decentralized world.
        </p>
      </div>
    </div>
  );
};

export default About;
