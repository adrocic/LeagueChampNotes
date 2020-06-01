import axios from 'axios'

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

let authInterceptor: any = null

export function handleTokenChange(token: unknown): void {
  // remove existing interceptor (if any)
  if (authInterceptor !== null) {
    API.interceptors.request.eject(authInterceptor)
  }

  // Inject a new interceptor to set the auth header
  if (token) {
    authInterceptor = API.interceptors.request.use((config) => {
      config.headers = { ...config.headers, Authorization: 'Bearer ' + token }
      return config
    })
  } else {
    authInterceptor = null
  }
}

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => Promise.reject(error.response)
)

export default API
