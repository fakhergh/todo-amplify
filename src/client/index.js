import AWSAppSyncClient from "aws-appsync";
import Amplify, { Auth } from "aws-amplify";

import AppSyncConfig from "../aws-exports";

Amplify.configure(AppSyncConfig);

const client = new AWSAppSyncClient({
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  auth: {
    type: AppSyncConfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
});

export default client;
