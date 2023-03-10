import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

import MainBody from './pages/Bodies';
import SingleBody from './pages/SingleBody';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/single" element={<SingleBody />}>
            <Route path=":itemId" element={<SingleBody />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
