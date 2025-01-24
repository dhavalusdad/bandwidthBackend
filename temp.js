// // const { Client, ApiController } = require('@bandwidth/voice');

// // const BW_USERNAME = "4d16c81d-403b-452c-9f22-c4dbc1923e67";
// // const BW_PASSWORD = "cqk9uju2XMZ@mrx4cdc";
// // const BW_ACCOUNT_ID = "5010502";
// // const BW_VOICE_APPLICATION_ID = "f9012e0f-96b0-42c1-a114-b9623f2aeb95";
// // const BW_NUMBER = "+19043001212";  // Your Bandwidth phone number
// // const USER_NUMBER = "+18024417136";  // Recipient's phone number
// // const YOUR_NUMBER = "+YOUR_PHONE_NUMBER";  // Your phone number
// // const VOICE_CALLBACK_URL = "https://336a-103-215-158-90.ngrok-free.app/test";  // Callback URL to monitor call status

// // const client = new Client({
// //   basicAuthUserName: BW_USERNAME,
// //   basicAuthPassword: BW_PASSWORD
// // });

// // console.log(client);

// // const controller = new ApiController(client);

// // const accountId = BW_ACCOUNT_ID;

// // const makeCall = async function() {
// //   try {
// //     // First call to yourself
// //     const response1 = await controller.createCall(accountId, {
// //       applicationId: BW_VOICE_APPLICATION_ID,
// //       to: YOUR_NUMBER,
// //       from: BW_NUMBER,
// //       answerFallbackUrl: VOICE_CALLBACK_URL,
// //       answerFallbackMethod: "POST",
// //       answerUrl: VOICE_CALLBACK_URL,  // URL to get notifications on call status
// //       answerMethod: 'POST',
// //       callTimeout: 30
// //     });

// //     console.log("Call to yourself initiated:", response1.body);
// //     const callId1 = response1.body.id;

// //     // Second call to the recipient
// //     const response2 = await controller.createCall(accountId, {
// //       applicationId: BW_VOICE_APPLICATION_ID,
// //       to: USER_NUMBER,
// //       from: BW_NUMBER,
// //       answerFallbackUrl: VOICE_CALLBACK_URL,
// //       answerFallbackMethod: "POST",
// //       answerUrl: VOICE_CALLBACK_URL,  // URL to get notifications on call status
// //       answerMethod: 'POST',
// //       callTimeout: 30
// //     });

// //     console.log("Call to recipient initiated:", response2.body);
// //     const callId2 = response2.body.id;

// //     // Bridge the two calls together
// //     const bridgeResponse = await controller.createBridge(accountId, {
// //       callIds: [callId1, callId2]
// //     });

// //     console.log("Calls bridged:", bridgeResponse.body);
// //   } catch (error) {
// //     console.error("Error initiating the call:", error);
// //   }
// // };

// // // makeCall();

// // const bridgeCalls = async function(callId1, callId2) {
// //   try {

// //     // First call BXML
// //     const speakSentence1 = new Bxml.SpeakSentence('Wait until the second call answers.');
// //     const pause = new Bxml.Pause({ duration: 60 });
// //     const response1 = new Bxml.Response([speakSentence1, pause]);

// //     console.log("First call BXML:", response1.toBxml());

// //     // Second call BXML
// //     const speakSentence2 = new Bxml.SpeakSentence('The bridge will start now.');
// //     const bridge = new Bxml.Bridge(callId1, {
// //       bridgeCompleteUrl: 'https://bridge.url/nextBXMLForSecondCall',
// //       bridgeTargetCompleteUrl: 'https://bridge.url/nextBXMLForFirstCall'
// //     });
// //     const response2 = new Bxml.Response([speakSentence2, bridge]);

// //     console.log("Second call BXML:", response2.toBxml());

// //     // Bridge the two calls together
// //     const bridgeResponse = await controller.createBridge(accountId, {
// //       callIds: [callId1, callId2]
// //     });

// //     console.log("Calls bridged:", bridgeResponse.body);
// //   } catch (error) {
// //     console.error("Error bridging the calls:", error);
// //   }
// // };

// // // Example usage
// // makeCall().then(() => {
// //   bridgeCalls('c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d', 'c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d');
// // });

// const { CallsApi, Configuration, CallbackMethodEnum } = require("bandwidth-sdk");

// const BW_USERNAME = "4d16c81d-403b-452c-9f22-c4dbc1923e67";
// const BW_PASSWORD = "cqk9uju2XMZ@mrx4cdc";
// const BW_ACCOUNT_ID = "5010502";
// const BW_VOICE_APPLICATION_ID = "f9012e0f-96b0-42c1-a114-b9623f2aeb95";
// const BW_NUMBER = "+19043001212";
// const USER_NUMBER = "+18024417136";
// const BASE_CALLBACK_URL =
//   "https://9447-103-215-158-90.ngrok-free.app/call-answer";

// const config = new Configuration({
//   BW_USERNAME,
//   BW_PASSWORD,
// });

// const callsApi = new CallsApi(config);

// const callBody = {
//   applicationId: BW_VOICE_APPLICATION_ID,
//   to: USER_NUMBER,
//   from: BW_NUMBER,
//   displayName: "NodeJS SDK",
//   answerUrl: `${BASE_CALLBACK_URL}/callbacks/answer`,
//   answerMethod: CallbackMethodEnum.Post,
//   disconnectUrl: `${BASE_CALLBACK_URL}/callbacks/disconnect`,
//   disconnectMethod: CallbackMethodEnum.Get,
//   callTimeout: 30.0,
//   callbackTimeout: 15.0,
// };

// const makeCall = async () => {
//   try {
//     const response = await callsApi.createCall(BW_ACCOUNT_ID, callBody);
//     console.log("Call created:", response.body);
//     const callId = response.body.id;
//     return callId;
//   } catch (error) {
//     console.error("Error creating the call:", error);
//   }
// };

// makeCall()

// // const { status, data } = await callsApi.createCall(BW_ACCOUNT_ID, callBody);
// // console.log(status, data);

// const { Client, ApiController } = require('@bandwidth/voice');

// const BW_USERNAME = "4d16c81d-403b-452c-9f22-c4dbc1923e67";
// const BW_PASSWORD = "cqk9uju2XMZ@mrx4cdc";
// const BW_ACCOUNT_ID = "5010502";
// const BW_VOICE_APPLICATION_ID = "f9012e0f-96b0-42c1-a114-b9623f2aeb95";
// const BW_NUMBER = "+19043001212";  // Your Bandwidth phone number
// const USER_NUMBER = "+18024417136";  // Recipient's phone number
// const YOUR_NUMBER = "+YOUR_PHONE_NUMBER";  // Your phone number
// const VOICE_CALLBACK_URL = "https://336a-103-215-158-90.ngrok-free.app/test";  // Callback URL to monitor call status

// const client = new Client({
//   basicAuthUserName: BW_USERNAME,
//   basicAuthPassword: BW_PASSWORD
// });

// console.log(client);

// const controller = new ApiController(client);

// const accountId = BW_ACCOUNT_ID;

// const makeCall = async function() {
//   try {
//     // First call to yourself
//     const response1 = await controller.createCall(accountId, {
//       applicationId: BW_VOICE_APPLICATION_ID,
//       to: YOUR_NUMBER,
//       from: BW_NUMBER,
//       answerFallbackUrl: VOICE_CALLBACK_URL,
//       answerFallbackMethod: "POST",
//       answerUrl: VOICE_CALLBACK_URL,  // URL to get notifications on call status
//       answerMethod: 'POST',
//       callTimeout: 30
//     });

//     console.log("Call to yourself initiated:", response1.body);
//     const callId1 = response1.body.id;

//     // Second call to the recipient
//     const response2 = await controller.createCall(accountId, {
//       applicationId: BW_VOICE_APPLICATION_ID,
//       to: USER_NUMBER,
//       from: BW_NUMBER,
//       answerFallbackUrl: VOICE_CALLBACK_URL,
//       answerFallbackMethod: "POST",
//       answerUrl: VOICE_CALLBACK_URL,  // URL to get notifications on call status
//       answerMethod: 'POST',
//       callTimeout: 30
//     });

//     console.log("Call to recipient initiated:", response2.body);
//     const callId2 = response2.body.id;

//     // Bridge the two calls together
//     const bridgeResponse = await controller.createBridge(accountId, {
//       callIds: [callId1, callId2]
//     });

//     console.log("Calls bridged:", bridgeResponse.body);
//   } catch (error) {
//     console.error("Error initiating the call:", error);
//   }
// };

// // makeCall();

// const bridgeCalls = async function(callId1, callId2) {
//   try {

//     // First call BXML
//     const speakSentence1 = new Bxml.SpeakSentence('Wait until the second call answers.');
//     const pause = new Bxml.Pause({ duration: 60 });
//     const response1 = new Bxml.Response([speakSentence1, pause]);

//     console.log("First call BXML:", response1.toBxml());

//     // Second call BXML
//     const speakSentence2 = new Bxml.SpeakSentence('The bridge will start now.');
//     const bridge = new Bxml.Bridge(callId1, {
//       bridgeCompleteUrl: 'https://bridge.url/nextBXMLForSecondCall',
//       bridgeTargetCompleteUrl: 'https://bridge.url/nextBXMLForFirstCall'
//     });
//     const response2 = new Bxml.Response([speakSentence2, bridge]);

//     console.log("Second call BXML:", response2.toBxml());

//     // Bridge the two calls together
//     const bridgeResponse = await controller.createBridge(accountId, {
//       callIds: [callId1, callId2]
//     });

//     console.log("Calls bridged:", bridgeResponse.body);
//   } catch (error) {
//     console.error("Error bridging the calls:", error);
//   }
// };

// // Example usage
// makeCall().then(() => {
//   bridgeCalls('c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d', 'c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d');
// });

const {
  CallsApi,
  Configuration,
  CallbackMethodEnum,
} = require("bandwidth-sdk");
const axios = require("axios");

const BW_USERNAME = "4d16c81d-403b-452c-9f22-c4dbc1923e67";
const BW_PASSWORD = "cqk9uju2XMZ@mrx4cdc";
const BW_ACCOUNT_ID = "5010502";
const BW_VOICE_APPLICATION_ID = "f9012e0f-96b0-42c1-a114-b9623f2aeb95";
const BW_NUMBER = "+19043001212";
const USER_NUMBER = "+18024417136";
const BASE_CALLBACK_URL =
  "https://9447-103-215-158-90.ngrok-free.app/call-answer";

const BaseUrl = "https://voice.bandwidth.com/api/v2";
const config = new Configuration({
  BW_USERNAME,
  BW_PASSWORD,
});

const callsApi = new CallsApi(config);

const callBody = {
  applicationId: BW_VOICE_APPLICATION_ID,
  to: USER_NUMBER,
  from: BW_NUMBER,
  displayName: "NodeJS SDK",
  answerUrl: `${BASE_CALLBACK_URL}/callbacks/answer`,
  answerMethod: CallbackMethodEnum.Post,
  disconnectUrl: `${BASE_CALLBACK_URL}/callbacks/disconnect`,
  disconnectMethod: CallbackMethodEnum.Get,
  callTimeout: 30.0,
  callbackTimeout: 15.0,
};

const makeCall = async () => {
  try {
    // const response = await callsApi.createCall(BW_ACCOUNT_ID, callBody);
    // console.log("Call created:", response.body);
    // const callId = response.body.id;
    // return callId;

    const axiosResponse = await axios.post(
      `${BaseUrl}/accounts/${BW_ACCOUNT_ID}/calls`,
      {
        answerUrl: "https://bandwidthbackend.onrender.com/call-answer",
        applicationId: BW_VOICE_APPLICATION_ID,
        from: BW_NUMBER,
        to: USER_NUMBER,
        answerMethod: "POST",
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${BW_USERNAME}:${BW_PASSWORD}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Axios response:", axiosResponse.data);
    return axiosResponse;
  } catch (error) {
    console.error("Error creating the call:", error);
  }
};

makeCall();

// const { status, data } = await callsApi.createCall(BW_ACCOUNT_ID, callBody);
// console.log(status, data);
