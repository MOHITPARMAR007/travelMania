const authMiddleware = (req, res, next) => {
    // Check if user is authenticated (e.g., check session or token)
    if (req.isAuthenticated()) {
      return next(); // User is authenticated, proceed to next middleware/route handler
    } else {
      return res.status(401).json({ error: 'Unauthorized' }); // User is not authenticated
    }
  };
  
  module.exports = authMiddleware;
  