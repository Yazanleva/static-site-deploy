export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from serverless!",
    time: new Date().toISOString()
  });
}