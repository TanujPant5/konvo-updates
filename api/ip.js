export default function handler(req, res) {
  // Vercel provides the client's IP in this header
  const forwarded = req.headers["x-forwarded-for"];
  
  // If there are multiple IPs (proxies), the first one is the real user
  const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;

  // Return it in the format your app.js expects
  res.status(200).json({ ip: ip });
}