import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Toaster } from 'react-hot-toast';

function App() {

 

  return (
    <div >
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
      </Provider>
    </div>
  );
}

export default App;
