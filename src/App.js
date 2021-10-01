import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { MainContainer } from './mainContainer';
import './App.scss';
import { Banner } from './components/banner';

function App() {
  return (
      <div className="App">
          <Header />
          <Banner />
          <Sidebar />
          <main>
              <MainContainer />
          </main>
      </div>
  );
}

export default App;