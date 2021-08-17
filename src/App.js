//importing our scss
import './styles/App.scss';
//importing components
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
//importing our pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
