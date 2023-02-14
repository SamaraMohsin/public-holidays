import styles from './panel.module.css';

export const Panel = ({children}) => {
    return <div className={styles.panel}>{children}</div>
}