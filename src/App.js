import './App.css';
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout';
import { Missing } from './pages/Missing/Missing';
import { Register } from './pages/Registration/Register';
import { CreateRestaurant } from './pages/CreateRestaurant/CreateRestaurant';
import { RestaurantsInfo } from './pages/RestaurantsInfo/RestaurantsInfo';
import { Promotions } from './pages/Promotions/Promotions';
import { RequireAuth } from './components/ProtectedRoute/ProtectedRoute';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='register' element={<Register />} />


        <Route element={<RequireAuth />} >
          <Route path='create' element={<CreateRestaurant />} />
          <Route path='find' element={<RestaurantsInfo />} />
          <Route path='promotions' element={<Promotions />} />
        </Route>

        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}
