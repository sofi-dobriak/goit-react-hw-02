import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, hasFeedback }) => {
    return (
        <>
            <ul className={styles.btnList}>
                <li>
                    <button onClick={() => updateFeedback('good')}>Good</button>
                </li>
                <li>
                    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
                </li>
                <li>
                    <button onClick={() => updateFeedback('bad')}>Bad</button>
                </li>
                <li>{hasFeedback && <button onClick={resetFeedback}>Reset</button>}</li>
            </ul>
        </>
    );
};

export default Options;
