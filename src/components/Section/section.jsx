import "./section.scss";
const Section = ({ children, title }) => {
  return (
    <section className="section">
      <h3 className="section-title"> {title} </h3>
      <p className="section-text"> {children} </p>
    </section>
  );
};
export default Section;
