// composables/useAuthAzure.js
import { ref, computed } from 'vue'
import { PublicClientApplication } from '@azure/msal-browser'
import ProfilesService from '@/services/ProfilesService'
import { useRoute } from 'vue-router'

const token = ref(localStorage.getItem('azure-token') || '')
const user = ref(null)
const isLogged = computed(() => !!token.value)

let msalInstance = null

export const useAuthAzure = () => {
  // Obtener perfil

  // Login con redirección de Azure
  const login = async () => {
    try {
      const msal = await getMsalInstance()

      await msal.loginRedirect({
        scopes: ['openid', 'profile', 'email'], // Puedes añadir más scopes si quieres
      })
    } catch (error) {
      console.error('Error durante el loginRedirect:', error)
    }
  }

  const autoLogin = async () => {
    const existingToken = localStorage.getItem('azure-token')

    if (!existingToken) {
      const msal = await getMsalInstance()
      const currentUrl = window.location.href
      const isReturningFromAzure = currentUrl.includes('id_token') || currentUrl.includes('code')

      if (!isReturningFromAzure) {
        await login()
      }
    }
  }

  // Logout
  const logout = async () => {
    localStorage.removeItem('azure-token')
    token.value = ''
    user.value = null

    const azureTenantId = import.meta.env.VITE_AZURE_TENANT_ID
    const logoutUrl = `https://login.microsoftonline.com/${azureTenantId}/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(window.location.origin)}`
    window.location.href = logoutUrl
  }

  // Inicializar MSAL
  const getMsalInstance = async () => {
    if (msalInstance) {
      return msalInstance
    }

    const azureClientId = import.meta.env.VITE_AZURE_CLIENT_ID
    const azureTenantId = import.meta.env.VITE_AZURE_TENANT_ID

    const msalConfig = {
      auth: {
        clientId: azureClientId,
        authority: `https://login.microsoftonline.com/${azureTenantId}`,
        redirectUri: window.location.origin,
      },
    }

    msalInstance = new PublicClientApplication(msalConfig)
    await msalInstance.initialize()
    return msalInstance
  }

  return {
    token,
    user,
    isLogged,
    login,
    autoLogin,
    logout,
    getMsalInstance,
  }
}
