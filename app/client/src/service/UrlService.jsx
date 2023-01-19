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
  randomUser(quantity) {
    return "https://randomuser.me/api/?results=" + quantity
  }
  catStatusCode(status_code) {
    return "https://http.cat/" + status_code
  }
}

export default UrlService
