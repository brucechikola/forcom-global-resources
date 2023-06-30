import Dashboard from "views/mock/admin/dashboard";
import Department from "views/mock/admin/department";
import Employee from "views/mock/admin/employee";
import Payroll from "views/mock/admin/payroll";
import SalaryStructure from "views/mock/admin/salaryStructure";
import Settings from "views/mock/admin/settings";
import ApiTester from "views/mock/apiTester";
import Login from "views/mock/auth/login";
import SignUp from "views/mock/auth/signup";
import Home from "views/mock/home";
import { home, dept } from "./routeIcons";
export default {
    authenticated: [
        {
            element: <Dashboard />,
            path: '/dashboard',
            title: 'Dashboard',
            isRoot: true,
            icon: '',
            roles: ['admin'],
            items: []
        },
        {
            element: <Department />,
            path: '/departments',
            title: 'Departments',
            icon: '',
            roles: ['admin'],
            items: []
        },
        {
            element: <Employee />,
            path: '/employee',
            title: 'Employee',
            icon: '',
            roles: ['admin'],
            items: []
        },
        {
            element: <Payroll />,
            path: '/payroll',
            title: 'Payroll',
            isRoot: true,
            icon: '',
            roles: ['admin'],
            items: []
        },
        {
            element: <SalaryStructure />,
            path: '/salaryStructure',
            title: 'Salary Structure',
            icon: '',
            roles: ['admin'],
            items: []
        },
        {
            element: <Settings />,
            path: '/settings',
            title: 'Settings',
            icon: '',
            roles: ['admin'],
            items: []
        },
        {
            element: '',
            path: '/uiComponents',
            title: 'UI Components',
            icon: '',
            roles: [],
            items: []
        },
        {
            element: <ApiTester />,
            path: '/apiTester',
            title: 'API Tester',
            icon: '',
            roles: [],
            items: []
        },
    ],
    unauthenticated: [
        {
            element: <Home />,
            path: '/home',
            title: 'Home',
            isRoot: true,
            icon: '',
            roles: [],
            items: []
        },
        {
            element: <Login />,
            path: '/login',
            title: 'Login',
            icon: '',
            roles: [],
            items: []
        },
        {
            element: <SignUp />,
            path: '/signUp',
            title: 'SignUp',
            icon: '',
            roles: [],
            items: []
        },
    ]
}