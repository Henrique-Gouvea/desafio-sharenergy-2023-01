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
    return apiDomain + "clients/"
  }
  clientUrlId(id) {
    return apiDomain + "clients/" + id
  }
  randomUser(quantity) {
    return "https://randomuser.me/api/?results=" + quantity
  }
  catStatusCode(status_code) {
    return "https://http.cat/" + status_code
  }
  randomDogApi() {
    return "https://random.dog/woof.json"
  }
}

export default UrlService
