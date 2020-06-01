import React, { useState } from 'react'
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Button,
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const LoginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
})

const LoginForm = (): any => {
  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: LoginSchema,
  })
  const { isSubmitting } = formState
  const [submissionError, setSubmissionError] = useState({ message: '' })

  const onSubmit = (data: any, e: any) => {
    console.log('submit event: ', e)
    console.log(data)
    setSubmissionError(() => ({ message: 'wrong' }))
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
