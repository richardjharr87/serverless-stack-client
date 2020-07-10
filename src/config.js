export default {

    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51H2QM5CvASW4DVNhE5VES1zZprqUzw7k4DnQWCkoE6IiO2o1UolVmu5MUODBq0Ep1zj0PSXlwrEyWpL5j8cKDluH003uPswbrU",
    s3: {
      REGION: "us-east-1",
      BUCKET: "richard-harrington-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://rfgocx61dl.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_8QBn2HKeN",
      APP_CLIENT_ID: "1d4gj9cii716250nrsasd649ve",
      IDENTITY_POOL_ID: "us-east-1:549e51fb-2a9f-428b-a295-9b17356e32f5"
    }
  };