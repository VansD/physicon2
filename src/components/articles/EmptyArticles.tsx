import emptyImg from "../../../public/images/empty.svg"
import styles from "@/styles/articles/emptyArticles.module.scss"
import Image from 'next/image';
import { PropsWithChildren } from "react";

export const EmptyArticles: React.FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.container}>
        {children}
        <div className={styles.content}>
            <Image src={emptyImg} alt="Не найдено" priority={false}/>
            <h2>Ничего не найдено</h2>
        </div>
    </div>
}