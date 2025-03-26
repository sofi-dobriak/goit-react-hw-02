import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, hasFeedback }) => {
    return (
        <>
            <ul className={styles.btnList}>
                <li className={styles.btnItem}>
                    <button onClick={() => updateFeedback('good')} className={styles.btn}>
                        Good
                    </button>
                </li>
                <li className={styles.btnItem}>
                    <button onClick={() => updateFeedback('neutral')} className={styles.btn}>
                        Neutral
                    </button>
                </li>
                <li className={styles.btnItem}>
                    <button onClick={() => updateFeedback('bad')} className={styles.btn}>
                        Bad
                    </button>
                </li>
                {hasFeedback && (
                    <li>
                        <button onClick={resetFeedback}>Reset</button>
                    </li>
                )}
            </ul>
        </>
    );
};

export default Options;
