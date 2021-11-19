// import logo from './logo.svg';
import './App.css';

const element =  (
  <div>
    <div>This is JSX</div>
    <h1>여러줄가즈아</h1>
  </div>
);
function greeting(name){
  return `hello ${name}`;
}
function Greet(){
  return (
    <div>
      <h1>컴포넌트추가</h1>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          {element}
        </div>
        <div>{greeting('JH')}</div>
        <Greet
          className="asdf"
        />
        {/* <a
          className="App-link app-start"          
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;