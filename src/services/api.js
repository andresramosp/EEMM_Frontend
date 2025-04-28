import axios from 'axios'
import { useAuthAzure } from '@/composables/useAuthAzure'
import { useAuthBbdd } from '@/composables/useAuthBddd'

const LOGIN_TYPE = import.meta.env.VITE_APP_LOGIN_TYPE // 'AZURE' o 'BBDDP'
const BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
})

// Añadir token automáticamente en cada request
api.interceptors.request.use((config) => {
  let token
  if (LOGIN_TYPE === 'AZURE') {
    token = localStorage.getItem('azure-token')
  } else if (LOGIN_TYPE === 'BBDDP') {
    token = localStorage.getItem('bd-token')
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// Manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.error_code !== 'invalid_credentials'
    ) {
      try {
        if (LOGIN_TYPE === 'AZURE') {
          const { logout } = useAuthAzure()
          await logout()
        } else if (LOGIN_TYPE === 'BBDDP') {
          const { logout } = useAuthBbdd()
          await logout()
        }
      } catch (logoutError) {
        console.error('Error al hacer logout automático:', logoutError)
      }
    }

    return Promise.reject(error)
  },
)

export { api }
