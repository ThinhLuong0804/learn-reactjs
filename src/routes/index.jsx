import HeaderOnly from '../components/Layout/HeaderOnly';
import ProductFeature from '../features/Product';
import ListPage from '../features/Product/pages/ListPage';

import AlbumPage from '../Pages/AlbumPage';
import CounterPage from '../Pages/CounterPage';
import FormRegister from '../Pages/FormRegister';
import HomePage from '../Pages/Home';

import TodoPage from '../Pages/TodoPage';

// Không đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/albums', component: AlbumPage },
  { path: '/todos', component: TodoPage },
  { path: '/form-register', component: FormRegister, layout: HeaderOnly },
  { path: '/counter', component: CounterPage },
  { path: '/products', component: ProductFeature, children: [{ path: '', component: ListPage }] },
];

// Đăng nhập mới truy cập được
const privateRoutes = [];

export { privateRoutes, publicRoutes };
