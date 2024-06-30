import { lazy } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
const Table = lazy(() => import('../pages/Mytable'));
const PropertyInventory = lazy(() => import('../pages/PropertyInventory'));
const PropertyForm = lazy(() => import('../pages/PropertyInventoryForm'));
const Error404 = lazy(() => import('../pages/Error404'));
const PropertyMatching = lazy(() => import('../pages/PropertyMatching'));


const routes = [
    // dashboardz
    {
        path: '/',
        element: <Navigate to='/property-inventory' />,
        layout: 'default',
    },
    {
        path: '/property-inventory',
        element: <PropertyInventory />,
        layout: 'default',
    },
    {
        path: '/property-inventory/form',
        element: <PropertyForm/>,
        layout: 'default'
    },
    {
        path: '*',
        element: <Error404/>,
        layout: 'blank'
    },
    {
        path: '/property-matching',
        element: <PropertyMatching />,
        layout: 'default',
    },

];

export { routes };
