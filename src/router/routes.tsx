import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const PropertyInventory = lazy(() => import('../pages/PropertyInventory'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <PropertyInventory />,
        layout: 'default',
    },

];

export { routes };
