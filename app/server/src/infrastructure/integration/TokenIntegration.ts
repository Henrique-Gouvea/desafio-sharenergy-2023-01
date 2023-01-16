import TokenMiddleware from "../middleware/TokenMiddleware"
import TokenProvider from "../providers/tokenProvider"

const tokenProvider = new TokenProvider()
const tokenMiddleware = new TokenMiddleware(tokenProvider)

export default tokenMiddleware
