import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    // password: yup.string().min(5).required("Password is required")
    type_of_registration: yup.string().required("This field is required!"),
    sector: yup.string().required("This field is required!"),
    organization: yup.string().required("This field is required!"),
    email_address: yup.string().required("This field is required!"),
    domain_name: yup.string().required("This field is required!"),
    country: yup.string().required("This field is required!"),
    town: yup.string().required("This field is required!"),
    address: yup.string().required("This field is required!"),
    tpin: yup.string().required("This field is required!"),
    registration_no: yup.string().required("This field is required!"),
    contact_no: yup.string().required("This field is required!"),
    // is_vat_registered: yup.string().required("This field is required!"),
    // vat_no: yup.string().required("This field is required!")
})