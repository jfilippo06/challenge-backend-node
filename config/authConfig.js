require('dotenv').config()

module.exports = {
    secret: process.env.AUTH_SECRET,
    expired: process.env.AUTH_EXPIRED,
    rounds: process.env.AUTH_ROUNDS,
}