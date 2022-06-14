import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import Header from './componenets/Header/Header';
import Main from './componenets/Main/Main';

const App = () => {
  return (
    <Provider store={setupStore()}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Main />
      </Router>
    </Provider>
  );
};

export default App;
