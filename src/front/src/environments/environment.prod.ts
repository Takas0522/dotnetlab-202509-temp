export const environment = {
  production: true,
  msalConfig: {
    clientId: '523297c9-38e0-41c4-8d81-40f9fc440da9', // Microsoft Entra IDアプリのクライアントID
    authority: 'https://login.microsoftonline.com/1c4e72e7-52a1-475f-b469-0d4fbf3eae2e', // または 'common'
    redirectUri: 'https://app-dotnetlab-202509-dwe4f9gmfha3d9gs.japaneast-01.azurewebsites.net',
    postLogoutRedirectUri: 'https://app-dotnetlab-202509-dwe4f9gmfha3d9gs.japaneast-01.azurewebsites.net'
  },
  apiConfig: {
    uri: 'https://app-202509dotnetlab-api-gncvdzdnaccfd8fx.japaneast-01.azurewebsites.net/api', // バックエンドAPIのURL
    scopes: ['api://523297c9-38e0-41c4-8d81-40f9fc440da9/access'] // カスタムAPIスコープ
  },
  applicationInsights: {
    connectionString: 'InstrumentationKey=643f176f-8bc5-423b-9399-48792b08d94a;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/;ApplicationId=2fb62830-4cd0-4f23-8840-4a499ba5d3cf' // Application Insightsの接続文字列をここに設定
  }
};
