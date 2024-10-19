// import {
//   GetSecretValueCommand,
//   SecretsManagerClient,
// } from '@aws-sdk/client-secrets-manager'
import { defaultConfig, runMigrations } from '@tn/db-helper'

// const client = new SecretsManagerClient()

export const handler = async () => {
  // const response = await client.send(
  //   new GetSecretValueCommand({
  //     SecretId: 'abc', //process.env.DB_ARN,
  //   }),
  // )
  // if (response.SecretString) {
  //   console.log(response.SecretString)
  // }
  // if (response.SecretBinary) {
  //   console.log(response.SecretBinary)
  // }

  runMigrations(defaultConfig, '')
}
