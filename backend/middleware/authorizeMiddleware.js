const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    try {
      if (!req.user || !req.user.role) {
        return res.status(401).json({ message: 'Authentication required' });
      }

      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({
          message: 'Access denied: insufficient permissions',
        });
      }

      next(); 
    } catch (error) {
      console.error('Authorization error:', error.message);
      return res.status(500).json({ message: 'Authorization failed' });
    }
  };
};

module.exports = { authorize };
