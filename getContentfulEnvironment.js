const contentfulManagement = require("contentful-management")
const { loadEnvConfig } = require("@next/env")

module.exports = function() {

  loadEnvConfig(process.env.PWD);
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CF_MANAGEMENT_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CF_SPACE_ID)
    .then(space => space.getEnvironment('master'))
}