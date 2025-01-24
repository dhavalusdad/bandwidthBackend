// // server.js
// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());


// // app.post("/make-call", async (req, res) => {
// //   const { to, from } = req.body;
// //   try {
// //     const response = await axios.post(
// //       `https://voice.bandwidth.com/api/v2/accounts/${process.env.BANDWIDTH_ACCOUNT_ID}/calls`,
// //       {
// //         from,
// //         to,
// //         applicationId: process.env.BANDWIDTH_APPLICATION_ID,
// //         answerUrl: `https://0bf7-103-215-158-90.ngrok-free.app/call-answer`
// //       },
// //       {
// //         auth: {
// //           username: process.env.BANDWIDTH_API_USERNAME,
// //           password: process.env.BANDWIDTH_API_PASSWORD,
// //         },
// //       }
// //     );
// //     res.status(200).json({ message: "Call initiated successfully", data: response.data });
// //   } catch (error) {
// //     console.error("Error initiating call:", error);
// //     res.status(500).json({ message: "Failed to initiate call", error: error.response?.data });
// //   }
// // });

// app.get('/test', (req, res) => {
//   console.log(req.body);
//   res.json({ data: "test ok" });
// });

// // app.post('/ ',(req,res) => {
// //   console.log(req.body);
// //   res.json({
// //     data : "ok"
// //   })
// // })

// // app.post("/call-answer", (req, res) => {
// //   console.log("call-answer",req.body);
// //   const bxmlResponse = `
// //     <?xml version="1.0" encoding="UTF-8"?>
// //     <Response>
// //       <SpeakSentence>
// //         Call connected successfully. Please stay on the line.
// //       </SpeakSentence>
// //     </Response>
// //   `;
// //   res.set("Content-Type", "application/xml");
// //   res.send(bxmlResponse);
// // });

// // //transfer call 
// // app.post("/transfer-call", (req, res) => {
// //   console.log("transfer-call", req.body);
// //   const bxmlResponse = `
// //     <?xml version="1.0" encoding="UTF-8"?>
// //       <Response>
// //        <Transfer transferCallerId="+19043001212">
// //         <PhoneNumber>${req.body.phone}</PhoneNumber>
// //        </Transfer>
// //       </Response>
// //   `;
// //   res.set("Content-Type", "application/xml");
// //   res.send(bxmlResponse);
// // });


// // app.post('/initiate',(req,res) => {
// //   console.log(req.body);
// //   res.json({
// //     data : "initiate"
// //   })
// // })

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running successfully on Render!" });
});

// Example POST route
app.post("/api/data", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
