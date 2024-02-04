import styles from "./Login.module.css";
import Button from "../Button/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("")

  const pattern = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/)


  const submit = async () => {
    const validateEmail = pattern.test(email);

    if (!validateEmail){
      return alert("Please Enter a Valid Email!")
    }

    try {
      const userData = {
          email: email,
          password: password,
        };
        const response = await axios.post('http://localhost:8080/auth/login', userData);
        await setToken(response.data)
        console.log('Login Successful:', response.data);
      } catch (error) {
        console.error('Login Failed:', error.message || error.toString());
      }
  }

  const handleEmailChange = (val) => {
    setEmail(val.target.value)
  }

  const signup = () => {
    alert(token)
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.login_content}>
          <div className={styles.mainHeadinglogin}>
            <h1>WELCOME BACK!</h1>
          </div>

          <div className={styles.paragraph}>
            <p>Your Vision, Our Mission - Let's Connect!</p>{" "}
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
                <label>Email</label>
                <input type="text" name="email" placeholder="Enter Email" 
                value={email}
                onChange={handleEmailChange}
              />
              </div>
              <div className={styles.form_control}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={(val) => {setPassword(val.target.value)}}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  flexDirection: "column",
                }}
              >
                  <button className={styles.loginBtn} text="Login" onClick={submit}>Login</button>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    icon={<FcGoogle fontSize="25px" height={25} width={30} />}
                    className={styles.googleBtn}
                    text="Sign in with Google"
                  />
                </div>
              </div>
              <button className={styles.signUpBtn} text="Sign Up" onClick={signup}>Sign Up</button>
            </form>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
