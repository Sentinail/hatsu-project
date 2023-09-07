import React from 'react'
import { SignUpContainer } from '../styled-components/SignUpContainer'
import { useThemeContext } from '../context/themeContext'
import { SignUpFormContainer } from '../styled-components/SignUpFormContainer'
import BlueButton from "../components/BlueButton"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUpSchema } from '../formValidationSchema/signUpSchema'
import { useAuth } from '../context/authContext'

const SignUpForm = () => {
  const { signUp } = useAuth()
  const { primaryColor, secondaryColor, tertiaryColor } = useThemeContext()
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: values => {
      signUp(values.email, values.password)
    },

    validationSchema: signUpSchema
  })

  return (
    <SignUpFormContainer onSubmit={formik.handleSubmit} $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
      <h1><span>Sign Up</span></h1>
      <div className="input_fields">
        <div className="input_field">
          <label htmlFor="user_name"> Username </label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.userName} type="text" name="userName" id="userName" />
          { (formik.errors.userName && formik.touched.userName) && <p className='error'> {formik.errors.userName} </p> }
        </div>
        
        <div className="input_field">
          <label htmlFor="email"> Email </label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" />
          { (formik.errors.email && formik.touched.email) && <p className='error'> {formik.errors.email} </p> }
        </div>

        <div className="input_field">
          <label htmlFor="password"> Password </label>
          <input autoComplete='' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
          { (formik.errors.password && formik.touched.password) && <p className='error'> {formik.errors.password} </p> }
        </div>

        <div className="input_field">
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input autoComplete='' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirmPassword} type="password" name="confirmPassword" id="confirmPassword" />
          { (formik.errors.confirmPassword && formik.touched.confirmPassword) && <p className='error'> {formik.errors.confirmPassword} </p> }
        </div>
      </div>
      <BlueButton type='submit' className='sign_up_button'> Sign Up </BlueButton>
      <Link to={"/sign-in"}> Already have an account? </Link>
    </SignUpFormContainer>
  )
}

const SignUp = () => {
  const { secondaryColor } = useThemeContext()

  return (
    <SignUpContainer $secondaryColor={secondaryColor}>
      <SignUpForm>

      </SignUpForm>
    </SignUpContainer>
  )
}

export default SignUp