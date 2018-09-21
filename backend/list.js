import * as dynamoDbLib from "./libs/dynamodb-lib";
import { failure, success } from "./libs/response-lib";

export async function main(event, context, callback) {
  const params = {
    TableName: "fluffy-potato-notes",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    callback(null, success(result.Items));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}