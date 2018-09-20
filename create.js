import uuid from "uuid";
import AWS from "aws-sdk";
import { failure, success } from "./libs/response-lib";

AWS.config.update({ region: "eu-west-2" });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export function main(event, context, callback) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: "fluffy-potato-notes",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  dynamoDb.put(params, (error, data) => {
    // Set response headers to enable CORS
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };

    if (error) {
      callback(null, failure({ status: false }));
      return;
    }

    callback(null, success(params.Item));
  });
}