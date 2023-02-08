import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>Hello World</div>
        <div />
      </div>
    </Provider>

  );
}

export default App;
