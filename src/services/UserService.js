import { userServiceMockApi } from './__mocks__/UserServiceMocks'
import { api as realApi } from './api'

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === 'true'
const api = USE_MOCKS ? userServiceMockApi : realApi

const UserService = {
  async getProfiles() {
    const url = '/IngenSOM-admin-user/rest/permission/profilesList'
    return api.get(url)
  },

  async getMenuByProfiles(country = 'ES', profiles) {
    console.log('entra')
    let url = `/IngenSOM-admin-user/rest/permission/menu?country=${country}`
    if (profiles !== null) {
      profiles.forEach((profile) => {
        url += `&profilesList=${profile}`
      })
    }
    return api.get(url)
  },

  async getAllUsers() {
    const url = '/IngenSOM-UserManagement/rest/user/all'
    return api.get(url)
  },

  async getUserDetail(params) {
    const url = `/IngenSOM-UserManagement/rest/user/detail?userId=${params.userId}`
    return api.get(url)
  },

  async dismissUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/attUsersProfiles'
    return api.put(url, payload)
  },

  async operationUsers(payload) {
    const url = '/IngenSOM-admin-user/rest/mock/user/activate'
    return api.put(url, payload)
  },

  async updateUserProfile(payload) {
    const url = '/IngenSOM-UserManagement/rest/attUpdateProfileUser'
    return api.put(url, payload)
  },

  async updateUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/user'
    return api.put(url, payload)
  },

  async newUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/user'
    return api.post(url, payload)
  },

  async insertUser(payload) {
    const url = '/IngenSOM-UserManagement/rest/attInsertUser'
    return api.put(url, payload)
  },

  async insertUserProfile(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/profile?profileId=${payload.profileId}&startDate=${payload.startDate}&endDate=${payload.endDate}&userId=${payload.userId}`
    return api.put(url)
  },

  async deletetUserProfile(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/profile?profileId=${payload.profileId}&userId=${payload.userId}`
    return api.delete(url)
  },

  async unsubscribeUser(params) {
    const url = `/IngenSOM-UserManagement/rest/user/unsubscribe?date=${params.date}&userId=${params.userId}`
    return api.put(url)
  },

  async updatePassword(params) {
    const url = `/IngenSOM-UserManagement/rest/user/password?newPassword=${params.newPassword}&oldPassword=${params.oldPassword}&repeatNewPassword=${params.repeatNewPassword}&userId=${params.userId}`
    return api.put(url)
  },

  async enableDisable(params) {
    const url = `/IngenSOM-UserManagement/rest/user/enableDisable?enableDisable=${params.enableDisable}&userId=${params.userId}`
    return api.put(url)
  },

  async getUsersProfiles() {
    const url = '/IngenSOM-UserManagement/rest/profile'
    return api.get(url)
  },

  async getAllProfiles() {
    const url = '/IngenSOM-admin-user/rest/profile'
    return api.get(url)
  },

  async getUserProfile(idUser) {
    const url = `/IngenSOM-UserManagement/rest/user/profiles?userId=${idUser}`
    return api.get(url)
  },

  async getUserUpList(idUser) {
    const url = `/IngenSOM-UserManagement/rest/user/getUserUpList?userId=${idUser}`
    return api.get(url)
  },

  async postUfiUser(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/postUfiUser?ufiId=${payload.ufis}&userId=${payload.userId}`
    return api.post(url)
  },

  async deleteUfiUser(payload) {
    const url = `/IngenSOM-UserManagement/rest/user/deleteUfiUser?ufiId=${payload.ufis}&userId=${payload.userId}`
    return api.delete(url)
  },
}

export default UserService
