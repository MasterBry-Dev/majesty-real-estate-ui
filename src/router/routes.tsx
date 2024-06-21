import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const PropertyInventory = lazy(() => import('../pages/PropertyInventory'));
const PropertyForm = lazy(() => import('../pages/PropertyInventoryForm'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <PropertyInventory />,
        layout: 'default',
    },
    {
        path: '/PropertyForm',
        element: <PropertyForm/>,
        layout: 'default'
    }

];

export { routes };
