import { useState } from 'react';

// Button-komponentti
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// StatisticLine-komponentti
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

// Statistics-komponentti
const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positivePercentage = all > 0 ? (good / all) * 100 : 0;

  if (all === 0) {
    return <p>Ei palautteita annettu</p>;
  }

  return (
    <div>
      <h2>Statistiikka</h2>
      <table>
        <tbody>
          <StatisticLine text="Hyvä" value={good} />
          <StatisticLine text="Neutraali" value={neutral} />
          <StatisticLine text="Huono" value={bad} />
          <StatisticLine text="Yhteensä" value={all} />
          <StatisticLine text="Keskiarvo" value={average.toFixed(2)} />
          <StatisticLine text="Positiivisia" value={`${positivePercentage.toFixed(2)} %`} />
        </tbody>
      </table>
    </div>
  );
};

// App-komponentti
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="Hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutraali" />
      <Button handleClick={() => setBad(bad + 1)} text="Huono" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
