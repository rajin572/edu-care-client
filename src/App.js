import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Course from './components/Course/Course';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseCheckOut from './components/CourseCheckOut/CourseCheckOut';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/course',
          loader: () => fetch('https://edu-care-server-beta.vercel.app/datas'),
          element:<Course></Course>
        },
        {
          path:'/courseDetails/:id',
          element:<CourseDetails></CourseDetails>,
          loader : ({params}) => fetch(`https://edu-care-server-beta.vercel.app/datas/${params.id}`)
        },
        {
          path:'/courseCheckOut/:id',
          element:<PrivateRoute><CourseCheckOut></CourseCheckOut></PrivateRoute>,
          loader : ({params}) => fetch(`https://edu-care-server-beta.vercel.app/datas/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
      ]
    },
    {
      path: '*',
      element: <div className='notFound'>
        <h1>Not Found 404</h1>
        <h2>You have enter the wrong route</h2>
        <p><Link to='/'>Click here</Link> to visit our home page and enjoy</p>
      </div>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
