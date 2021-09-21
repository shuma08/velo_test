import { Header } from './components/header';
import { SidebarL } from './components/sidebarL';
import { SidebarR } from './components/sidebarR';
import { TopImgContainer } from './components/top-img-container';
import { MainContainer } from './components/main-container';
import './App.scss';

function App() {
return (
    <div className="App">
        <Header />
        <SidebarL />
        <main>
            <TopImgContainer />
            <MainContainer />
        </main>
        <SidebarR />
    </div>
  );
}

export default App;