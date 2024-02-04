import styles from "./Pioneers.module.css";
import Button from "../Button/Button";

const Pioneers = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <h2>Try AdiSoft Today</h2>
        <p>Totally risk-free. Consume free trial</p>
        <Button text="Sign Up" className={styles.knowBtn}></Button>
      </div>
    </div>
  );
};

export default Pioneers;
