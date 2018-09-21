# fluffy-potato
📝 Note taking app made using Serverless, Bulma and React on AWS

### Setup
##### Add a configuration file for the backend - `backend/src/config.js`
```
export default {
  s3: {
    REGION: "S3_UPLOADS_BUCKET_REGION",
    BUCKET: "S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "API_GATEWAY_REGION",
    URL: "API_GATEWAY_URL"
  },
  cognito: {
    REGION: "COGNITO_REGION",
    USER_POOL_ID: "COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "IDENTITY_POOL_ID"
  }
};
```
