import styles from "@/styles/layout/footer.module.scss";
import footerLogo from "../../../public/images/logo_mono.svg";
import Image from 'next/image';

const Footer: React.FC = () => {
    return <footer>
        <div className={styles.container}>
            <div className={styles.block}>
                <Image src={footerLogo} alt="Логотип облако знаний" priority={true} />
            </div>
            <div className={styles.block}>
                <div>
                    <a href="tel:+74993220757" className={styles.phone}>+7 (499) 322-07-57</a>
                </div>
                <div>
                    <a href="mailto:info@oblakoz.ru" className={styles.email}>info@oblakoz.ru</a>
                </div>
                <p className={styles.smallText}>Контактный центр</p>
                <p style={{ marginTop: 30 }}>
                    МО, г. Долгопрудный,
                    <br />
                    Лихачевский проезд, 4, стр. 1
                </p>
            </div>
            <div className={styles.block}>
                <div>
                    <a href="tel:+74993220757" className={styles.phone}>+7 (499) 322-07-57</a>
                </div>
                <div>
                    <a href="mailto:info@oblakoz.ru" className={styles.email}>info@oblakoz.ru</a>
                </div>
                <p className={styles.smallText}>Отдел заботы о пользователях</p>
            </div>
            <div className={styles.block}>
                <nav>
                    <div>Следите за нами:</div>
                </nav>
            </div>
        </div>
        <div className={[styles.container, styles.containerPolicy].join(" ")}>
            <div className={styles.rules}>
                <span>
                    <a>Политика конфиденциальности</a>
                </span>
            </div>
            <div className={styles.rules}>
                <span>
                    <a>Правила пользования сервисом</a>
                </span>
            </div>
            <div className={styles.rules}></div>
            <div className={styles.rules}>
                <span>
                    <a>© ООО «Физикон Лаб», {new Date().getFullYear()}</a>
                </span>
            </div>
        </div>
    </footer>
}

export default Footer;