const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access Denied, No Token Provided' });
  }

  const token = authHeader.split(' ')[1]; // Extract token after "Bearer"
  
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach user to request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};