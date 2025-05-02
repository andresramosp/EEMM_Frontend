export const userServiceMockApi = {
  get: async (url) => {
    // if (url.includes('/permission/profilesList')) {
    //   const data = await import('@/mocks/data/profilesList.json').then((m) => m.default)
    //   return { data }
    // }
    if (url.includes('/permission/menu')) {
      const data = await import('./data/navigation_backend.json').then((m) => m.default.data)

      return { data }
    }
    // if (url.includes('/user/all')) {
    //   const data = await import('@/mocks/data/allUsers.json').then((m) => m.default)
    //   return { data }
    // }
    // if (url.includes('/user/detail')) {
    //   const data = await import('@/mocks/data/userDetail.json').then((m) => m.default)
    //   return { data }
    // }
    return { data: { message: `Mocked GET for ${url}` } }
  },

  // post: async (url, payload) => {
  //   const data = await import('@/mocks/data/postResponse.json').then((m) => m.default)
  //   return { data, payload }
  // },

  // put: async (url, payload) => {
  //   const data = await import('@/mocks/data/putResponse.json').then((m) => m.default)
  //   return { data, payload }
  // },

  // delete: async (url) => {
  //   const data = await import('@/mocks/data/deleteResponse.json').then((m) => m.default)
  //   return { data }
  // },
}
