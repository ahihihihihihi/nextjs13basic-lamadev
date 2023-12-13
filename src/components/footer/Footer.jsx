
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Nextjs14. All rights reserved.</div>
            <div className={styles.social}>
                <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Nextjs14 Facebook Account" />
                <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Nextjs14" />
                <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Nextjs14" />
                <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Nextjs14" />
            </div>
        </div>
    )
}

export default Footer;