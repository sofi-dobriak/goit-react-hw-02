import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';

function App() {
    const [estim, setEstim] = useState(
        () => JSON.parse(localStorage.getItem('estim-key')) ?? { good: 0, neutral: 0, bad: 0 }
    );

    const updateFeedback = feedbackType => {
        setEstim({
            ...estim,
            [feedbackType]: estim[feedbackType] + 1,
        });
    };

    const resetFeedback = () => {
        setEstim({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    useEffect(() => {
        localStorage.setItem('estim-key', JSON.stringify(estim));
    }, [estim]);

    const totalFeedback = estim.good + estim.neutral + estim.bad;
    const hasFeedback = totalFeedback > 0;
    const totalPositivePercent = Math.round((estim.good / totalFeedback) * 100);

    return (
        <>
            <Description />

            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                hasFeedback={hasFeedback}
            />

            {hasFeedback && <Feedback {...estim} totalPositivePercent={totalPositivePercent} />}
            {!hasFeedback && <Notification />}
        </>
    );
}

export default App;
