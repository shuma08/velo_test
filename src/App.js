import {Header} from './components/header';
import {Sidebar} from './components/sidebar';
import {TopImgContainer} from './components/top-img-container';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <TopImgContainer />
    </div>
  );
}

export default App;
