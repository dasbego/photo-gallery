import Gallery from 'react-image-gallery';
import './App.css';

const images = [
  {
    original:
      'https://photo-gallery-dasbego.s3.us-east-1.amazonaws.com/Fotos%20Pre%20Boda%20Babies/00f07272-3ba7-47c8-bdaa-e90b9eb50372.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <Gallery items={images} />
    </div>
  );
}

export default App;
