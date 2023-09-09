import React, { useContext } from 'react'
import { PasswordResetContainer } from '../styled-components/PasswordResetContainer'
import { themeContext, useThemeContext } from '../context/themeContext'
import { PasswordResetFormContainer } from '../styled-components/PasswordResetFormContainer'
import { useAuth } from '../context/authContext'
import { useFormik } from 'formik'
import { passwordResetSchema } from '../formValidationSchema/passwordResetSchema'
import BlueButton from '../components/BlueButton'
import { Link } from 'react-router-dom'

const PasswordResetForm = () => {
    const { resetPassword } = useAuth()
    const { primaryColor, secondaryColor, tertiaryColor } = useThemeContext()
    const formik = useFormik({
      initialValues: {
        email: "",
      },
  
      onSubmit: values => {
        resetPassword(values.email)
      },

      validationSchema: passwordResetSchema
    })
  
    return (
      <PasswordResetFormContainer onSubmit={formik.handleSubmit} $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
        <h1><span>Password Reset</span></h1>
        <div className="input_fields">
          <div className="input_field">
            <label htmlFor=""> Enter your email </label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id="email" />
            { (formik.errors.email && formik.touched.email) && <p className='error'> {formik.errors.email} </p> }
          </div>

        </div>
        <BlueButton className='sign_up_button'> Reset Password </BlueButton>
        <Link to={"/sign-in"}> Want to sign-in instead? </Link>
      </PasswordResetFormContainer>
    )
  }

const PasswordReset = () => {
    const { secondaryColor } = useContext(themeContext)

  return (
    <PasswordResetContainer $secondaryColor={secondaryColor}>
        <PasswordResetForm>

        </PasswordResetForm>
    </PasswordResetContainer>
  )
}

export default PasswordReset