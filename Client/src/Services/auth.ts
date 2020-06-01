import API from './API'
import { AxiosResponse } from 'axios'

type LoginParams = {
  username: string
  password: string
}

export const login = async ({
  username,
  password,
}: LoginParams): Promise<AxiosResponse<any>> => {
  return API.post('/auth/login', {
    username,
    password,
  })
}
