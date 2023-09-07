import * as yup from "yup"

export const signInSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("This field is required"),
    password: yup.string().min(8, "length must be greater than 8").required("This field is required"),
})