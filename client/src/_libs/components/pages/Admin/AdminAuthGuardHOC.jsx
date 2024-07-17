import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUsersToken,
  setCredentials,
} from "../../../services/redux/features/authSlice";
import { useNavigate } from "react-router-dom";

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

  return isLoading ? null : <>{children}</>;
}
