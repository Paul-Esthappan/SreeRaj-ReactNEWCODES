import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import StateComponent from './Redux/StateComponent';
import UseCallbacl from './UseCallbacl';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <UseCallbacl/>
    },
    {
      path: 'about',
      element : <About/>
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
