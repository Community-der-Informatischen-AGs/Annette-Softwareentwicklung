
// ! Das importieren von css modules
import styles from "./landing-section.module.css";
import logo from "./../../assets/images/logo.png";

export function LandingSection() {
  return <section className={styles.landingSection}>
    <article>
      <h1>
        <span>Entwickeln</span> 
        <span>für moderne</span> 
        <span>Zukunft</span>
      </h1>
      <p>Die Annette-Softwareentwicklung - CdIA</p>
    </article>
    <img src={logo} alt="Logo der Annette-Softwareentwicklungs-AG" />
  </section>
}