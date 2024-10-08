import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layout/DefaultLayout';
import { History } from './pages/History';
import { Home } from './pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout />}
        >
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/history"
            element={<History />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
