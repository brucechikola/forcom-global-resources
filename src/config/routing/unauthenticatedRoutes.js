
import Home from "views/home"
import Impact from "views/impact"
export default [

    {
        element: <Home />,
        path: '/home',
        title: 'Home',
        isRoot: true,
        includeInNav: true,
        icon: '',
        roles: [],
        items: []
    },
    {
        element: '',
        path: '/news',
        title: 'News',
        isRoot: true,
        includeInNav: true,
        icon: '',
        roles: [],
        items: []
    },
    {
        element: <Impact />,
        path: '/impact',
        title: 'Impact',
        isRoot: false,
        includeInNav: true,
        icon: '',
        roles: [],
        items: []
    },
    {
        element: '',
        path: '/investors',
        title: 'Investors',
        isRoot: true,
        includeInNav: true,
        icon: '',
        roles: [],
        items: []
    },
    {
        element: '',
        path: '/crs',
        title: 'CRS',
        isRoot: true,
        includeInNav: true,
        icon: '',
        roles: [],
        items: []
    },

]