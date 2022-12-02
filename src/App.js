import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Main/main';
import Latest from './components/Main/latest';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Slider />
        <Latest />
      </div>
    </div>
  );
}

export default App;
