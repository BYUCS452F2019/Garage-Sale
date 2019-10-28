const dbAccounts = require('../database/accounts')
const crypto = require('crypto')

const secret = process.env.secret || 'this is a terrible secret'

module.exports = function (dbClient) {
  const accounts = {}
  const db = dbAccounts(dbClient)

  accounts.changePassword = async function (email, oldPassword, newPassword) {
    const passed = await accounts.checkLogin(email, oldPassword)
    if (!passed) {
      const err = Error('Incorrect email or password')
      err.statusCode = 400
      throw err
    }
    const password = await encrypt(newPassword)
    return db.updatePassword(email, password)
  }

  accounts.checkLogin = async function (email, password) {
    const pass = await encrypt(password)
    return db.checkLogin(email, pass)
  }

  accounts.create = async function (email, password) {
    const user = await accounts.getUser(email)
    if (user) {
      const err = Error('Account already exists')
      err.statusCode = 400
      throw err
    }
    const encryptedPass = await encrypt(password)
    return db.createAccount(email, encryptedPass)
  }

  accounts.getUser = async function (email) {
    return db.getUser(email)
  }

  accounts.login = async function (email, password) {
    const loginOk = await accounts.checkLogin(email, password)
    if (!loginOk) return null
    await db.login(email)
    return db.getUser(email)
  }

  accounts.logout = async function (email) {
    return db.logout(email)
  }

  accounts.update = async function (email, name, phone) {
    return db.updateUser(email, name, phone)
  }

  return accounts
}

function encrypt (password) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, secret, 100000, 64, 'sha512', (err, derivedKey) => {
      if (err) return reject(err)
      resolve(derivedKey.toString('hex'))
    })
  })
}
