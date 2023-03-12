import './index.scss';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
