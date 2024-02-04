import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footerBar}>
        <div className={styles.footerContent}>
          <div>
            <h3 className={styles.headings}>Tools to plan, fund,</h3>
            <h3 className={styles.headings}>& grow your business</h3>
          </div>

          <div>
            <p>© 2023 Palo Alto Software. All rights reserved.</p>
          </div>
          <div className={styles.socials}>
            <img src="images/Social Links.png" alt="Socials" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
