import styles from "./Editprofile.module.css";
import Button from "../Button/Button";

const Editprofile = () => {
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

        <div className={styles.container}>
          <div className={styles.contact_form}>
            <form>
              <h1>Edit Profile</h1>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter Name" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="text" name="name" placeholder="Enter Email" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  flexDirection: "column",
                }}
              >
                <Button className={styles.loginBtn} text="Save Changes" />

                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              </div>
            </form>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
