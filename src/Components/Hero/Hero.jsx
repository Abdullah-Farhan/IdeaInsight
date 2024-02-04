import styles from "./Hero.module.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.hero_content}>
          <div className={styles.mainHeading}>
            <h1>PITCH YOUR IDEA AND</h1>
            <h1>
              <span>MAKE IT A REALITY</span>
            </h1>
          </div>

          <div className={styles.paragraph}>
            <p>
              Become the entrepreneurs who plan, fund
              <p>and grow their companies.</p>{" "}
            </p>
          </div>

          <div className={styles.secondaryBtn}>
            <Button text="Start Now" className={styles.start_Btn}></Button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="images/Hero_Picture.png" alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
