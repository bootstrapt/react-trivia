import TriviaCard from './components/TriviaCard';

const App = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        color: 'gray'
      }}
    >
      <h1>Trivia</h1>
      <TriviaCard></TriviaCard>
    </div>
  );
};

export default App;