import styles from "@/styles/common/alert.module.scss";

export type AlertProps = {
    message: string;
    type?: "error" | "warning" | "info"
}

export const Alert: React.FC<AlertProps> = ({ message, type }) => {
    let typeStyle = styles.info;
    switch (type) {
        case "error":
            typeStyle = styles.error
            break;
        case "warning":
            typeStyle = styles.warning
            break;
        case "info":
            typeStyle = styles.info
            break;
        default: typeStyle = styles.error;
        
    }

    return <div className={[styles.alert, typeStyle].join(" ")}>{message}</div>
}