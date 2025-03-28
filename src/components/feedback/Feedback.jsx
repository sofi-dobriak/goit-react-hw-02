import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalPositivePercent }) => {
    return (
        <>
            <ul className={styles.estimList}>
                <li className={styles.estimItem}>Good: {good}</li>
                <li className={styles.estimItem}>Neutral: {neutral}</li>
                <li className={styles.estimItem}>Bad: {bad}</li>
                <li className={styles.estimItem}>Positive: {totalPositivePercent}%</li>
            </ul>
        </>
    );
};

export default Feedback;
