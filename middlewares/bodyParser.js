const express = require('express');

module.exports = {
  json: express.json(),
  urlencoded: express.urlencoded({ extended: false })
};