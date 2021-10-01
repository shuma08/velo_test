import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Banner } from './components/banner';
import './App.css';

function App() {
  return (
      <div className="App">
          <Header />
          <Banner />
          <Sidebar />
      </div>
  );
}

export default App;