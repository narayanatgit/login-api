const jwt = require('jsonwebtoken')
const { use } = require('../routes/userRoutes')

const generateToken = (user_id) =>
{
  return jwt.sign({ id: user_id }, 'nodejs', { expiresIn: '1d' })

}


module.exports = generateToken;