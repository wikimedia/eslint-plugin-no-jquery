'use strict'

const utils = require('./utils.js')

module.exports = utils.createCollectionMethodRule(
  'animate',
  'Prefer CSS transitions to $.animate'
)
