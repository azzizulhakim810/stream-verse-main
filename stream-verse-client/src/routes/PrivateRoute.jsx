import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
