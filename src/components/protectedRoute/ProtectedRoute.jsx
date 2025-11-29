import { useAuthContext } from "../../context/AuthContext/useAuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <div>ProtectedRoute</div>;
};
