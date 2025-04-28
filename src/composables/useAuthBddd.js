// composables/useAuthBbdd.js o .ts

export const useAuthBbdd = () => {
  const login = async () => {}
  const logout = async () => {
    console.log('Logout BBDD ejecutado (falso)')
    localStorage.removeItem('bd-token')
  }

  return { login, logout }
}
