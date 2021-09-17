import styles from "./Layout.module.css";

interface PropsInterface {
  message: string;
}

const Layout: React.FC<PropsInterface> = ({ children, message }) => {
  console.log(message, "Layout");
  return <div className={styles.container__min_hight + " container-lg bg-light"}>{children}</div>;
};

export default Layout;
