import './App.css';
import holbertonLogo from './holbertonLogo.jpg';
import utils from './utils.js';


const { getFullYear, getFooterCopy } = utils;

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
        <form id="login">
          <label id="emailLabel" htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email" />
          <label id="passLabel" htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            id="password" />
          <button className="okButton">OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  )
}

export default App;