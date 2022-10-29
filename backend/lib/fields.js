const registerFields = [
    'email', 'password', 'username'
]

const loginFields = [
    'email', 'password',
]

const emailRegex = /[^@]+@[^@]+\.[^@]+/;

module.exports = {
    loginFields,
    registerFields,
    emailRegex
}