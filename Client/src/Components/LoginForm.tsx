import React, { useState, useContext } from 'react'
import { UserContext } from '../Services/UserContext'
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Button,
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import { login } from '../Services/auth'
import * as yup from 'yup'
import { useAuth } from '../Services/AuthContext'

const LoginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
})

const LoginForm = (): any => {
  const auth = useAuth()

  const { setUser } = useContext(UserContext as any)

  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: LoginSchema,
  })

  const { isSubmitting } = formState

  const [submissionError, setSubmissionError] = useState({ message: '' })

  const onSubmit = async (data: any, e: any) => {
    try {
      const loginData = await login(data)
      setUser(loginData)
      auth.onLogin(loginData.data.data.api_token)
    } catch (err) {
      setSubmissionError(err.message)
    }
  }
  return (
    <Flex>
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input placeholder="email" name="email" id="email" ref={register} />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          placeholder="password"
          name="password"
          id="password"
          ref={register}
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
        <FormErrorMessage>{submissionError.message}</FormErrorMessage>
        <Button
          mt={4}
          variantColor="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </Flex>
  )
}

export default LoginForm
