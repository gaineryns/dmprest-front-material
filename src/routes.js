import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import AddProvision from './views/account/PrestaView';
import GetProvision from './views/account/PrestaView/GetProvision';
import HomeView from './views/home';
import PrestataireView from './views/prestataire';
import AnnonceView from './views/annonce';
import UserPrestLayout from './layouts/UserPrestLayout';

const routes = [
  {
    path: 'annonces',
    element: <MainLayout />,
    children: [
      { path: '/', element: <AnnonceView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'prestataires',
    element: <MainLayout />,
    children: [
      { path: '/', element: <PrestataireView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/user',
    element: <UserPrestLayout />,
    children: [
      { path: '/annonces', element: <AddProvision /> },
      { path: '/annonces/:id', element: <GetProvision /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
