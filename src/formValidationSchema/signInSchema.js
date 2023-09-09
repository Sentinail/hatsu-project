import * as yup from "yup"

export const signInSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("This field is required"),
    password: yup.string().required("This field is required"),
})