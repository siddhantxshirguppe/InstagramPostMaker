import logo from './logo.svg';
import './App.css';
import Header from './react-components/Header'
import Footer from './react-components/Footer'
import Instagram from './react-components/Instagram'
import InstaCharts from './react-components/InstaCharts'
function App() {
  return (
    <div className="App">

      <Header/>

      <div style={{ width: '50%', height: '50%', backgroundColor: 'white', float: 'left' }}> <Instagram /></div>

      <div style={{ width: '50%', height: '50%', backgroundColor: 'white', float: 'right' }}><InstaCharts/></div>

      <Footer/>

    </div>
  );
}

export default App;
