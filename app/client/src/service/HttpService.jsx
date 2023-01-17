import axios from "axios"

class HttpService {
  async get(url) {
    const auth =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZGVzYWZpb3NoYXJlbmVyZ3kiLCJpYXQiOjE2NzM4OTA5NzcsImV4cCI6MTY3NDMyMjk3N30.G4w7GkJM8G6l788gUlkJCXaExI-UP_iA4RgB3na5JKA"
    const options = {
      headers: {
        Authorization: auth,
      },
    }
    try {
      return await axios.get(url, options)
    } catch (error) {
      return error.response !== undefined ? error.response : error
    }
  }

  async post(url, data) {
    const auth =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZGVzYWZpb3NoYXJlbmVyZ3kiLCJpYXQiOjE2NzM4OTA5NzcsImV4cCI6MTY3NDMyMjk3N30.G4w7GkJM8G6l788gUlkJCXaExI-UP_iA4RgB3na5JKA"
    const options = {
      headers: {
        Authorization: auth,
      },
    }
    try {
      return await axios.post(url, data, options)
    } catch (error) {
      return error.response !== undefined ? error.response : error
    }
  }
}

export default HttpService
