import * as yup from "yup"

export const passwordResetSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("This field is required"),
})