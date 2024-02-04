import styles from "./Header.module.css";
import Button from "../Button/Button";
// import { IoMdMenu } from "react-icons/io";

const Header = () => {
  
  // const [showMenu, setShowMenu] = useState(false);

  // const handleMenuToggle = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <>
      <div className={styles.topBar}> </div>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <img
            className={styles.headerImage}
            src="images/Logo.png"
            alt="logo"
          />
        </div>

        <ul className={styles.navLinks}>
          <a href="#">About Us</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </ul>

        <div className={styles.header_btn}>
          <Button text="Sign Up" className={styles.signup_btn} />

          <Button text="Log in" className={styles.login_btn} />
        </div>

        {/* <div className="hamburger-icon" onClick={handleMenuToggle}>
          <IoMdMenu size={24} color="rgb(241, 244, 244);" />
        </div> */}
      </nav>
    </>
  );
};

export default Header;
