import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { MainContainer } from './mainContainer';
import './App.scss';

function App() {
  return (
      <div className="App">
          <Header />
          <Sidebar />
          <main>
              <MainContainer />
          </main>
      </div>
  );
}

export default App;