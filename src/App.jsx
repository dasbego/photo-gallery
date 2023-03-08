import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Gallery showBullets lazyLoad={true} showThumbnails />
    </div>
  );
}

export default App;
