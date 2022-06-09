import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

function App() {
  const [centerBox, setCenterBox] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageOne centerBox={centerBox} setCenterBox={setCenterBox} />
          }
        />
        <Route
          path="/pagetwo"
          element={<PageTwo setCenterBox={setCenterBox} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
