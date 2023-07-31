import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div >
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
