import { APIGatewayProxyHandler, APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const lambdaHandler: APIGatewayProxyHandler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): Promise<any> => {
  return {
    body: JSON.stringify(
      {
        message: 'Hello From NodeJS Typescript Template',
        input: event,
        context: context,
        callback: callback,
      },
      null,
      2,
    ),
  };
};
