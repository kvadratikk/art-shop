import { Routes, Route } from 'react-router-dom';

import Home from '../Sections/Home/Home';
import Error from '../Sections/Error/Error';
import Reviews from '../Sections/Reviews/Reviews';
import Details from '../Sections/Details/Details';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Main;
