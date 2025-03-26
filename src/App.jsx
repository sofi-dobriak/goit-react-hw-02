import { useState } from 'react';
import './App.css';
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';

function App() {
    const [estim, setEstim] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

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

    const hasFeedback = estim.good > 0 || estim.bad > 0 || estim.neutral > 0;
    const totalFeedback = estim.good + estim.bad + estim.neutral;
    const totalPositivePercent = Math.round((estim.good / totalFeedback) * 100);

    return (
        <>
            <Description />
            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                hasFeedback={hasFeedback}
            />
            {hasFeedback ? (
                <Feedback
                    good={estim.good}
                    bad={estim.bad}
                    neutral={estim.neutral}
                    totalPositivePercent={totalPositivePercent}
                />
            ) : (
                <Notification />
            )}
        </>
    );
}

export default App;
