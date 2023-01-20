import axios from "axios"

class HttpService {
  optionsHeader() {
    const auth =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZGVzYWZpb3NoYXJlbmVyZ3kiLCJpYXQiOjE2NzQyMjQyMjQsImV4cCI6MTY3NDY1NjIyNH0.VE2_p7noE4XLZAy21N0Z4UYfgcTl_YhuDxIccoDNVww"
    const options = {
      headers: {
        Authorization: auth,
      },
    }
    return options
  }

  async get(url) {
    const options = this.optionsHeader()
    try {
      return await axios.get(url, options)
    } catch (error) {
      return error.response !== undefined ? error.response : error
    }
  }

  async post(url, data) {
    const options = this.optionsHeader()
    try {
      return await axios.post(url, data, options)
    } catch (error) {
      return error.response !== undefined ? error.response : error
    }
  }

  async delete(url) {
    const options = this.optionsHeader()
    try {
      return await axios.delete(url, options)
    } catch (error) {
      return error.response !== undefined ? error.response : error
    }
  }

  async put(url) {
    const options = this.optionsHeader()
    try {
      return await axios.put(url, options)
    } catch (error) {
      return error.response !== undefined ? error.response : error
    }
  }

  async getAPIFetch(url) {
    const urlImage = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data
      })
      .catch((err) => {
        return err
      })
    return urlImage
  }
}

export default HttpService
