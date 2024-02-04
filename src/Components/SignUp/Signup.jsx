import styles from "./SignUp.module.css";
import Button from "../Button/Button";

const Signup = () => {
  return (
    <>
      <div className={styles.signupContainer}>
        <div className={styles.signupcontent}>
          <div className={styles.mainHeadingsignup}>
            <h1>REGISTER NOW!</h1>
          </div>

          <div className={styles.paragraph}>
            <p>Let us know you and help build your future</p>{" "}
            <div className={styles.loginImage}>
              <img src="images/Signup picture.png" alt="Hero" />
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.contact_form}>
            <form>
              <img src="images/Logo 3.png" alt="Hero" height={80} width={100} />

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
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              </div>
              <Button className={styles.signUpBtn} text="Sign Up"></Button>
              <p>
                Already have an account?{" "}
                <a className={styles.aTag} href="">
                  Login
                </a>
              </p>
            </form>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
