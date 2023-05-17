import React, { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './NotificationMessage';
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleFeedbackClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const keys = { good, bad, neutral };
  const options = Object.keys(keys);
  const totalFeedback = good + bad + neutral;
  const positivePercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={options} handleClick={handleFeedbackClick} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage || 0}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedbackClick = state => {
//     this.setState(prevState => ({
//       [state]: prevState[state] + 1,
//     }));
//   };

//   totalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   positivePercentage = () => {
//     return Math.round((this.state.good / this.totalFeedback()) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.totalFeedback();

//     return (
//       <div className={css.container}>
//         <Section title="Please leave Feedback">
//           <FeedbackOptions
//             options={options}
//             handleClick={this.handleFeedbackClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.totalFeedback()}
//               positivePercentage={this.positivePercentage() || 0}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
