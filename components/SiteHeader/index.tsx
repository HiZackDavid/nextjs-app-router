import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import styles from "./siteHeader.module.css";

const SiteHeader = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="" height={53} width={135} />
      <Link href="/">Home</Link>
      <Link href="/catalog">Catalog</Link>
    </div>
  );
};

export default SiteHeader;
