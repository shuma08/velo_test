import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Banner } from './components/banner';
import { PhotosContainer } from './photosContainer';
import { VideoContainer } from './videosContainer';
import './App.css';

function App() {
  return (
      <div className="App">
          <Header />
          <Banner />
          <Sidebar />
          <PhotosContainer />
          <VideoContainer />
      </div>
  );
}

export default App;