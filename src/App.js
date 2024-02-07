//import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Demo />
      </div>
    </Provider>

  );
}

export default App;
