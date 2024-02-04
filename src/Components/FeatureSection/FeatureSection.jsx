import styles from "./FeatureSection.module.css";
import Button from "../Button/Button";

const FeatureSection = () => {
  return (
    <>
      <div className={styles.featureSection}>
        <div className={styles.miniPic1}>
          <img src="images/Idea Validation.png" alt="Pic1" />
        </div>
        <div className={styles.firstCard}>
          <div className={styles.ftHeading}>
            <h1>Get to know the scope of your</h1>
            <h1>idea with AI</h1>
          </div>

          <div className={styles.ftPara}>
            <p>
              Our cutting-edge technology empowers you to
              <p>
                understand the scope of your vision, turning
                <p>concepts into actionable strategies for the</p>
                <p>unparalleled success.</p>
              </p>
            </p>
          </div>
        </div>

        {/* <div className={styles.miniPic1}>
          <img src="images/Idea Validation.png" alt="Pic1" />
        </div> */}
      </div>

      <div className={styles.featureSection}>
        <div className={styles.secondCard}>
          <div className={styles.ftHeading}>
            <h1>Charting Success, Blueprint</h1>
            <h1>to Business Brilliance</h1>
          </div>

          <div className={styles.ftPara}>
            <p>
              Transform visions into victories with our business
              <p>
                plan expertise.We craft roadmaps that navigate
                <p>challenges, turning your aspirations into success</p>
              </p>
              <p>your revenue. Reduce support operations by over</p>
              <p>30% fast deployment with our expert support</p>
            </p>
          </div>
        </div>
        <div className={styles.miniPic2}>
          <img src="images/Business Plan.png" alt="Pic2" />
        </div>
      </div>

      <div className={styles.featureSection}>
        <div className={styles.miniPic3}>
          <img src="images/Business Mentor.png" alt="Pic3" />
        </div>
        <div className={styles.thirdCard}>
          <div className={styles.ftHeading}>
            <h1>Your Business, Our Mentorship, </h1>
            <h1>Limitless Growth</h1>
          </div>

          <div className={styles.ftPara}>
            <p>
              Elevate your strategy, refine your vision, and conquer
              <p>
                challenges with personalized guidance, ensuring every
                <p>step is a step towards success.</p>
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.featureSection}>
        <div className={styles.secondCard}>
          <div className={styles.ftHeading}>
            <h1>Investor Scout, Guiding Path</h1>
            <h1>to Financial Growth</h1>
          </div>

          <div className={styles.ftPara}>
            <p>
              Navigating the financial landscape,plan expertise. We
              <p>
                craft roadmaps that navigate we scout opportunities
                <p>
                  {" "}
                  that align with your goals, making every investment a
                  <p> strategic move towards prosperity.</p>
                </p>
              </p>
            </p>
          </div>
        </div>
        <div className={styles.miniPic4}>
          <img src="images/Investor.png" alt="Pic2" />
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
