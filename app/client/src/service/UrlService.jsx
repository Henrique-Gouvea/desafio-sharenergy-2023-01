const apiDomain = "http://localhost:3001/"

class UrlService {
  userUrl() {
    return apiDomain + "user/"
  }
  loginUserUrl() {
    return apiDomain + "user/auth"
  }
  userUrlId(id) {
    return apiDomain + "user/" + id
  }

  clientUrl() {
    return apiDomain + "client/"
  }
  clientUrlId(id) {
    return apiDomain + "client/" + id
  }
}

export default UrlService
