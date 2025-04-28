import { api } from './api'

const ProfilesService = {
  async getPermissionsByProfile(idUser) {
    const url = `/IngenSOM-admin-user/rest/permission?profileId=${idUser}`
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getPermissionsByProfile')
    }
  },

  async updatePermissions(payload) {
    const url = '/IngenSOM-admin-user/rest/permission'
    const config = {
      params: {
        profileId: payload.profile,
      },
    }
    try {
      return await api.put(url, payload.data, config)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en updatePermissions')
    }
  },

  async insertNewProfile(payload) {
    const url = '/IngenSOM-admin-user/rest/profile'
    try {
      return await api.post(url, payload)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en insertNewProfile')
    }
  },
}

export default ProfilesService
