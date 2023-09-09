import React from 'react'
import { SignInContainer } from '../styled-components/SignInContainer'
import { useThemeContext } from '../context/themeContext'
import { SignInFormContainer } from '../styled-components/SignInFormContainer'
import BlueButton from "../components/BlueButton"
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { useFormik } from 'formik'
import { signInSchema } from '../formValidationSchema/signInSchema'

const SignInForm = () => {
    const { signIn } = useAuth()
    const { primaryColor, secondaryColor, tertiaryColor } = useThemeContext()
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
  
      onSubmit: values => {
        signIn(values.email, values.password)
      },

      validationSchema: signInSchema
    })
  
    return (
      <SignInFormContainer onSubmit={formik.handleSubmit} $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
        <h1><span>Sign In</span></h1>
        <div className="input_fields">
          <div className="input_field">
            <label htmlFor=""> Email </label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id="email" />
            { (formik.errors.email && formik.touched.email) && <p className='error'> {formik.errors.email} </p> }
          </div>
  
          <div className="input_field">
            <label htmlFor=""> Password </label>
            <input autoComplete='' onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" id="password" />
            { (formik.errors.password && formik.touched.password) && <p className='error'> {formik.errors.password} </p> }
          </div>
        </div>
        <BlueButton className='sign_up_button'> Sign In </BlueButton>
        <Link to={"/sign-up"}> Don't have an account? </Link>
        <Link to={"/password-reset"}> Forgot password? </Link>
      </SignInFormContainer>
    )
  }

const SignIn = () => {
    const { secondaryColor } = useThemeContext()


    return (
        <SignInContainer $secondaryColor={secondaryColor}>
            <SignInForm>
                
            </SignInForm>
        </SignInContainer>
    )
}

export default SignIn