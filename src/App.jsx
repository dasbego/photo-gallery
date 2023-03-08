import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';

const HOST_PATH =
  'https://photo-gallery-dasbego.s3.us-east-1.amazonaws.com/Fotos%20Pre%20Boda%20Babies/';

const images = [
  {
    original: '00f07272-3ba7-47c8-bdaa-e90b9eb50372.jpg',
    originalHeight: '200px',
  },
  {
    original: '36f39a89-4fff-455d-9562-7e4d85aa8cb5.jpg',
    originalHeight: '300px',
  },
].map((item) => ({ ...item, original: `${HOST_PATH}${item.original}` }));

function App() {
  return (
    <div className="App">
      <Gallery showNav lazyLoad={true} showThumbnails={false} items={images} />
    </div>
  );
}

export default App;
