import * as yup from "yup"

export const signUpSchema = yup.object().shape({
    userName: yup.string().min(2, "Senpai, your user name is too short ☹️").max(15, "Senpai, your user name is too big ❤").required("This field is required"),
    email: yup.string().email("Please enter a valid email").required("This field is required"),
    password: yup.string().min(8, "length must be greater than 8").required("This field is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password didn't match").required("This field is required")
})