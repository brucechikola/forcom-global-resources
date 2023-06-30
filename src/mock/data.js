import { IMG_PATH } from "constants"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export const expenseList = [
    {
        title: 'Electricity',
        value: 333.55
    },
    {
        title: 'Electricity',
        value: 333.55
    },
    {
        title: 'Electricity',
        value: 333.55
    },
    {
        title: 'Transport to Lusaka',
        value: 1255.58
    },
    {
        title: 'Tables & Chairs',
        value: 3455.55
    },
    {
        title: '5 Desktop Computers',
        value: 2555.58
    },
]

// areal chart data
export const summaryChart = {
    data: [45, 52, 38, 45, 19, 23, 2, 45, 52, 38, 45, 19, 23, 2],
    labels: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan"
    ]

}

// table data
export const employeeData = [
    { "id": 1, "avata": "img/others/avata1.webp", "first_name": "Somerset", "last_name": "Pimblotte", "email": "spimblotte0@illinois.edu", "gender": "Male", "status": "Active" },
    { "id": 2, "avata": "img/others/avata2.jpeg", "first_name": "Lindsey", "last_name": "Gerrens", "email": "lgerrens1@squarespace.com", "gender": "Female", "status": "Stand By" },
    { "id": 3, "avata": "img/others/avata3.jpeg", "first_name": "Tyson", "last_name": "Axelby", "email": "taxelby2@time.com", "gender": "Male", "status": "Active" },
    { "id": 4, "avata": "img/others/avata4.jpeg", "first_name": "Theo", "last_name": "Megroff", "email": "tmegroff3@elpais.com", "gender": "Male", "status": "Active" },
    { "id": 5, "avata": "img/others/avata3.jpeg", "first_name": "Gideon", "last_name": "Upchurch", "email": "gupchurch4@eventbrite.com", "gender": "Male", "status": "On Leave" },
    { "id": 6, "avata": "img/others/avata2.jpeg", "first_name": "Heriberto", "last_name": "O' Driscoll", "email": "hodriscoll5@mac.com", "gender": "Male", "status": "Fired" },
    { "id": 7, "avata": "img/others/avata4.jpeg", "first_name": "Marlena", "last_name": "Bellenger", "email": "mbellenger6@wix.com", "gender": "Female", "status": "Active" },
]


export const payrollData = [
    { "year": 2022, "month": "September", "gross": 83340.84, "net": 3223.19, "alloances": 2254.47, "deductions": 96.12 },
    { "year": 2022, "month": "October", "gross": 5544.29, "net": 3944.79, "alloances": 2215.23, "deductions": 38.57 },
    { "year": 2022, "month": "November", "gross": 9844.89, "net": 6822.32, "alloances": 2187.76, "deductions": 48.22 },
    { "year": 2022, "month": "December", "gross": 1843.59, "net": 729.56, "alloances": 1237.5, "deductions": 95.24 },
    { "year": 2023, "month": "January", "gross": 3598.57, "net": 247.97, "alloances": 2218.99, "deductions": 35.73 }
]

export const departmentData = [
    { "department": "Support", "total_employee": 26, "total_projects": 42, "total_expense": 1546.26, "total_income": 2569.16 },
    { "department": "Training", "total_employee": 18, "total_projects": 74, "total_expense": 1002.83, "total_income": 3847.14 },
    { "department": "Legal", "total_employee": 7, "total_projects": 89, "total_expense": 1642.44, "total_income": 3701.92 },
    { "department": "Sales", "total_employee": 13, "total_projects": 51, "total_expense": 1670.65, "total_income": 3736.58 },
    { "department": "Sales", "total_employee": 28, "total_projects": 94, "total_expense": 1476.74, "total_income": 2118.74 },
    { "department": "Human Resources", "total_employee": 30, "total_projects": 28, "total_expense": 1223.75, "total_income": 2665.73 }
]


export const mockModule = {
    "modules": [
        {
            "module_name": "Premium Accounting",
            "module": "Accounts",
            "sub_modules": [
                {
                    "module": "Assets",
                    "module_title": "Asset Management",
                    "module_price": 7500
                },
                {
                    "module": "Stock",
                    "module_title": "Stock Management",
                    "module_price": 4000
                }
            ],
            "module_price": "11500",
            "icon_title": "accounts"
        },
        {
            "module_name": "Asset Management",
            "module": "Assets",
            "sub_modules": [],
            "module_price": "2500",
            "icon_title": "assets"
        },
        {
            "module_name": "Full HR",
            "module": "HR",
            "sub_modules": [
                {
                    "module": "Payroll",
                    "module_title": "Payroll",
                    "module_price": 500
                }
            ],
            "module_price": "5500",
            "icon_title": "hr"
        }
    ],
    "common_settings": {
        "name": "Common Settings",
        "owner": "Administrator",
        "modified": "2022-11-14 02:42:09.118095",
        "modified_by": "Administrator",
        "docstatus": 0,
        "idx": "0",
        "price_per_user": 50,
        "tot_rate": 4,
        "total_number_of_free_users": 4,
        "discount": 0,
        "vat_rate": 16,
        "apply_discount_on_first_month": 0,
        "apply_vat": 0,
        "apply_discount_on_first_year": 1,
        "apply_discount_on_users": 1,
        "enable_recurrying_annual_discount": 0,
        "doctype": "Common Settings"
    }
}


export const pricingData = [
    {
        // "sn": 1,
        "module": "Full Accounting",
        "frequency": 'Annually',
        "users": 2,
        "amount": 746889.01
    },
    {
        // "sn": 2,
        "module": "HR",
        "frequency": 'Annually',
        "users": 2,
        "amount": 15899.56
    },
    {
        // "sn": 3,
        "module": "Payroll",
        "frequency": 'Annually',
        "users": 2,
        "amount": 535284.21
    },
    {
        // "sn": 4,
        "module": "Project Management",
        "frequency": 'Annually',
        "users": 2,
        "amount": 931446.62
    },
    {
        // "sn": 5,
        "module": "Stock Management",
        "frequency": 'Annually',
        "users": 2,
        "amount": 608089.93
    },
    {
        // "sn": 6,
        "module": "Assets Management",
        "frequency": 'Annually',
        "users": 2,
        "amount": 873420.45
    }
]



export const cvData = {
    full_names: 'John Esskay Doe',
    first_name: 'John',
    other_name: 'Esskay',
    last_name: 'Doe',
    profession: 'Software Engineer',
    email: 'johndoe@example.com',
    mobile: '+260 77697 5855',
    whatsapp: '+260 97711 7257',
    address: 'Lusaka',
    dp: `${IMG_PATH}avata.png`,
    blog_website: 'http://www.example.com',
    profile_description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Explicabo ut perspiciatis,
                          quas eos reprehenderit harum hic. Explicabo ut perspiciatis Explicabo ut perspiciatis Explicabo ut perspiciatis
                          Explicabo ut perspiciatis  Libero
                          `,
    skills: [
        {
            skill: 'JavaScript',
            level: 'advanced',
        },
        {
            skill: 'ReactJs',
            level: 'intermediate',
        },
        {
            skill: 'HTML',
            level: 'expert',
        },
        {
            skill: 'SQL',
            level: 'intermediate',
        }
    ],
    workExperience: [
        {
            company: 'Probase Group',
            post: 'Software Developer',
            from: '2021',
            to: '2022',
            workDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente'
        },
        {
            company: 'Forcom Global Resources',
            post: 'Senior Software Developer',
            from: '2019',
            to: '2021',
            workDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            company: 'META BOX',
            post: 'Sales Personel',
            from: '2017',
            to: '2020',
            workDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente'
        },
    ],
    education: [
        {
            school: 'John Doe University',
            achievement: 'Bachelor\'s Degree',
            from: '2010',
            to: '2015',
        },
        {
            school: 'Georgia International College',
            achievement: 'Diplona - Business Associate',
            from: '2009',
            to: '2010',
        },
        {
            school: 'Mkushi Day Secondary School',
            achievement: 'Grade 12 Certificate',
            from: '2005',
            to: '2009',
        },
        {
            school: 'Mkushi  Basic School',
            achievement: 'Grade 9 Certificate',
            from: '2005',
            to: '2009',
        },
    ],
    hobbies: [
        'Dancing',
        'Playing Music',
        'Cooking',
        'Travelling',
        'Watching Movies',
        'Driving'
    ],
    socialMedia: [
        {
            social: 'facebook',
            icon: <FaFacebook />,
            link: ''
        },
        {
            social: 'linkedin',
            icon: <FaLinkedin />,
            link: ''
        },
        {
            social: 'twitter',
            icon: <FaTwitter />,
            link: ''
        },
        {
            social: 'instagram',
            icon: <FaInstagram />,
            link: ''
        },
    ],
    achievements: [
        'Certification in Python Dev',
        'Prize for best developer of the year',
        'Best Developer Africa'
    ]
}


export const services = [
    {
        title: "Web Developer",
        icon: 'img/samples/template1.png',
    },
    {
        title: "React Native Developer",
        icon: 'img/samples/template2.png',
    },
    {
        title: "Backend Developer",
        icon: 'img/samples/template5.png',
    },
    {
        title: "Backend Developer",
        icon: 'img/samples/template4.png',
    },
];