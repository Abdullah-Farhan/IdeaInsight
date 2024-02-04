import styles from "./Dashboard.module.css";
import Button from "../Button/Button";
const Dashboard = () => {
  return (
    <>
      <div className={styles.topBar}></div>

      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <img className={styles.logoImage} src="images/Logo.png" alt="logo" />

          <img
            className={styles.dashboardImage}
            src="images/Dashboard Links.png"
            alt="logo"
          />
        </div>
        <div className={styles.mainBody}>
          <div className={styles.content}>
            <h1>Hey, YOU! </h1>
            <span>Pave your path towards a successful future</span>

            <div>
              <img src="images/Dashboard Image.png" alt="" />
            </div>
            <Button text="Let's Go!" className={styles.start_btn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
