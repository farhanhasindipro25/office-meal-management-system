import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUsersToken,
  setCredentials,
} from "../../../services/redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminAuthGuardHOC({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(selectCurrentUsersToken);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !token) {
      dispatch(setCredentials({ user: user, token: storedToken }));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [dispatch, navigate, token, user]);

  useEffect(() => {
    if (!isLoading && !token) {
      navigate("/");
    }
  }, [isLoading, token, navigate]);

  useEffect(() => {
    if (user && user.role_name === "GENERAL_USER") {
      navigate("/");
      toast.error("You do not have permission to access this resource");
    }
  }, [user, navigate]);

  return isLoading ? null : <>{children}</>;
}
