import "./styles/Career.css";

const timelineEntries = [
  {
    role: "Early builder mindset",
    company: "Independent learning phase",
    year: "2023",
    description:
      "Started building a stronger foundation around frontend systems, product thinking, and how digital experiences can earn user trust instead of just demanding it.",
  },
  {
    role: "Web3 research and exploration",
    company: "Blockchain, privacy, and DeFi",
    year: "2024",
    description:
      "Moved deeper into blockchain design, privacy tech, and DeFi research to understand protocol behavior, trust models, and the product gaps that still need better interfaces.",
  },
  {
    role: "Product experiments",
    company: "ArcPay Treasury and SHELBY CONTROL ROOM",
    year: "2025",
    description:
      "Focused on concept-building through projects that combine interface design, monitoring workflows, treasury thinking, and operational clarity for high-trust systems.",
  },
  {
    role: "Web3 builder & researcher",
    company: "Current direction",
    year: "NOW",
    description:
      "Currently shaping a portfolio around decentralized product ideas, trust-first user experiences, and research-backed systems that feel modern, useful, and resilient.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My path <span>&</span>
          <br /> direction
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {timelineEntries.map((entry) => (
            <div className="career-info-box" key={`${entry.year}-${entry.role}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.role}</h4>
                  <h5>{entry.company}</h5>
                </div>
                <h3>{entry.year}</h3>
              </div>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
