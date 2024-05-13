import './App.css';
import holbertonLogo from './holbertonLogo.jpg';


function App() {
  return (
    <div>
      <header className="App-header" >
        <img className='App-logo' src={holbertonLogo} alt='logo' />
        <h1>School dashboard</h1>
      </header >
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </div>
      <div className="App-footer"> 
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  )
}

export default App;