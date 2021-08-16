//importing our scss
import './styles/App.scss';
//importing components
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          Test
        </div>
      </div>
    </div>
  );
}

export default App;
