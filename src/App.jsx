import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Gallery showBullets lazyLoad={true} showThumbnails={false} />
    </div>
  );
}

export default App;
