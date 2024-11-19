import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import { DefaultLayout } from './components/Layout';
import { publicRoutes } from './routes';
import userApi from './api/userApi';
import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';

function App() {
  // //   const fetchUser = async () => {
  // //     // .data ở cuối để chỉ lấy data mà không có pagination
  // //     const userList = await userApi.getAll();
  // //     console.log(userList);
  // //   };

  // //   fetchUser();
  // // }, []);

  // Demo Notisnack

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return route.children ? (
            // Nếu có children, sử dụng `Route` cha
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            >
              {route.children.map((child, childIndex) => {
                const ChildPage = child.component;
                return <Route key={childIndex} path={child.path} element={<ChildPage />} />;
              })}
            </Route>
          ) : (
            // Nếu không có children, render bình thường
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
