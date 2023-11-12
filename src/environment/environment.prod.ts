export const host = 'http://localhost:3000/';
export const host2 = 'https://reqres.in';
export const environment = {
  author: {
    get: host + 'authorData'
  },
  category: {
    get: host + 'categoryData'
  },
  postBlock: {
    get: host + 'postBlock'
  },
  postBlockBusiness: {
    get: host + 'postBlockBusiness'
  },
  authorPost: {
    get: host + 'authorPost'
  },
  login: {
    get: host2 + '/api/login'
  },
  subscribers: {
    get: host + 'subscribers'
  },
  privacyPolicy: {
    get: host + 'privacyPolicy'
  },
  review: {
    get: host + 'review'
  },
  postData: {
    get: host + 'postData'
  }
}
