function checkAdminRole(req, res, next) {
  // Check if user role is admin
  if (req.user && req.user.roles.includes("admin")) {
    // User has admin role, allow access
    next();
  } else {
    // User does not have organization role, deny access
    res.status(403).json({ message: "Forbidden - Access denied" });
  }
}

function checkOrganizationRole(req, res, next) {
  // Check if user role is organization
  if (req.user && req.user.roles.includes("organization")) {
    // User has organization role, allow access
    next();
  } else {
    // User does not have organization role, deny access
    res.status(403).json({ message: "Forbidden - Access denied" });
  }
}

// Middleware to check if the user has the donor role
function checkDonorRole(req, res, next) {
  // Check if user role is donor
  if (req.user && req.user.roles.includes("donor")) {
    // User has donor role, allow access
    next();
  } else {
    // User does not have donor role, deny access
    res.status(403).json({ message: "Forbidden - Access denied" });
  }
}

export { checkAdminRole, checkOrganizationRole, checkDonorRole };