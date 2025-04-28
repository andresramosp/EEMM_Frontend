import { api } from './api'

const UserService = {
  async getProfiles() {
    const url = '/IngenSOM-admin-user/rest/permission/profilesList'
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getProfiles')
    }
  },

  async getMenuByProfiles(country = 'ES', profiles) {
    return {
      data: await import('@/assets/navigation_backend.json').then((m) => m.default.data),
    }

    // let url = /IngenSOM-admin-user/rest/permission/menu?country=${country}
    // if (profiles !== null) {
    //   profiles.forEach((profile) => {
    //     url += &profilesList=${profile}
    //   })
    // }
    // try {
    //   return await api.get(url)
    // } catch (error) {
    //   throw new Error(error.response?.data?.detail || 'Error en getMenuByProfiles')
    // }
  },

  async getAllUsers() {
    const url = '/IngenSOM-UserManagement/rest/user/all'
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getAllUsers')
    }
  },

  async getUserDetail(params) {
    const url = `/IngenSOM-UserManagement/rest/user/detail?userId=${params.userId}`
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getUserDetail')
    }
  },

  async dismissUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/attUsersProfiles'
    try {
      return await api.put(url, payload)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en dismissUser')
    }
  },

  async operationUsers(payload) {
    const url = '/IngenSOM-admin-user/rest/mock/user/activate'
    try {
      return await api.put(url, payload)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en operationUsers')
    }
  },

  async updateUserProfile(payload) {
    const url = '/IngenSOM-UserManagement/rest/attUpdateProfileUser'
    try {
      return await api.put(url, payload)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en updateUserProfile')
    }
  },

  async updateUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/user'
    try {
      return await api.put(url, payload)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en updateUser')
    }
  },

  async newUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/user'
    try {
      return await api.post(url, payload)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en newUser')
    }
  },

  async insertUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/attInsertUser'
    try {
      return await api.put(url, payload)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en insertUser')
    }
  },

  async insertUserProfile(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/profile?profileId=${payload.profileId}&startDate=${payload.startDate}&endDate=${payload.endDate}&userId=${payload.userId}`
    try {
      return await api.put(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en insertUserProfile')
    }
  },

  async deletetUserProfile(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/profile?profileId=${payload.profileId}&userId=${payload.userId}`
    try {
      return await api.delete(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en deletetUserProfile')
    }
  },

  async unsubscribeUser(params) {
    const url = `/IngenSOM-UserManagement/rest/user/unsubscribe?date=${params.date}&userId=${params.userId}`
    try {
      return await api.put(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en unsubscribeUser')
    }
  },

  async updatePassword(params) {
    const url = `/IngenSOM-UserManagement/rest/user/password?newPassword=${params.newPassword}&oldPassword=${params.oldPassword}&repeatNewPassword=${params.repeatNewPassword}&userId=${params.userId}`
    try {
      return await api.put(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en updatePassword')
    }
  },

  async enableDisable(params) {
    const url = `/IngenSOM-UserManagement/rest/user/enableDisable?enableDisable=${params.enableDisable}&userId=${params.userId}`
    try {
      return await api.put(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en enableDisable')
    }
  },

  async getUsersProfiles() {
    const url = '/IngenSOM-UserManagement/rest/profile'
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getUsersProfiles')
    }
  },

  async getAllProfiles() {
    const url = '/IngenSOM-admin-user/rest/profile'
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getAllProfiles')
    }
  },

  async getUserProfile(idUser) {
    const url = `/IngenSOM-UserManagement/rest/user/profiles?userId=${idUser}`
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getUserProfile')
    }
  },

  async getUserUpList(idUser) {
    const url = `/IngenSOM-UserManagement/rest/user/getUserUpList?userId=${idUser}`
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en getUserUpList')
    }
  },

  async postUfiUser(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/postUfiUser?ufiId=${payload.ufis}&userId=${payload.userId}`
    try {
      return await api.post(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en postUfiUser')
    }
  },

  async deleteUfiUser(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/deleteUfiUser?ufiId=${payload.ufis}&userId=${payload.userId}`
    try {
      return await api.delete(url)
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Error en deleteUfiUser')
    }
  },
}

export default UserService
