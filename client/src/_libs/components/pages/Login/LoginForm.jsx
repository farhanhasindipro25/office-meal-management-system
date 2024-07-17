import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import PasswordInputField from "../../ui/PasswordInputField";
import TextInputField from "../../ui/TextInputField";
import { LOGIN_INITIAL_VALUES } from "../../../form-initial-values/login";
import { LOGIN_SCHEMA } from "../../../formik-schema/loginSchema";
import { useState } from "react";
import GenericErrorBox from "../../errors/GenericErrorBox";
import FormikErrorBox from "../../errors/FormikErrorBox";

import DisabledButton from "../../ui/DisabledButton";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../../services/redux/api/authApiSlice";
import { setCredentials } from "../../../services/redux/features/authSlice";

export default function LoginForm() {
  const [login, { isLoading: login_loading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [backendErrors, setBackendErrors] = useState("");

  const formik = useFormik({
    initialValues: LOGIN_INITIAL_VALUES,
    validationSchema: LOGIN_SCHEMA,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const payload = {
          email: values.email,
          password: values.password,
        };
        const result = await login(payload);
        console.log(result);

        if (result?.data?.status === 201) {
          dispatch(
            setCredentials({
              token: result.data.data.tokens.accessToken,
              user: {
                user: payload,
                role: result.data.data.user.role_name,
              },
            })
          );
          if (result.data.data.user.role_name === "ADMIN") {
            toast.success("You have logged in as an admin!");
            navigate("/admin");
          } else if (result.data.data.user.role_name === "GENERAL_USER") {
            toast.success("You have logged in successfully!");
            navigate("/employee");
          }
        } else if (
          result?.error?.status === 403 &&
          result?.error?.data?.message ===
            "You are not allowed to login as you have been banned"
        ) {
          setBackendErrors(
            "You are not allowed to login as you have been banned"
          );
          toast.error("You are not allowed to login as you have been banned");
        } else if (
          result?.error?.status === 401 &&
          result?.error?.data?.message ===
            "Unauthorized: An account with this email does not exist."
        ) {
          setBackendErrors("An account with this email does not exist!");
          toast.error("An account with this email does not exist!");
        } else if (
          result?.error?.status === "401" &&
          result?.error?.data?.message === "Unauthorized: Incorrect Password."
        ) {
          setBackendErrors("Incorrect password!");
          toast.error("Incorrect Password");
        } else if (result?.error?.status === "FETCH_ERROR") {
          setBackendErrors(
            "The server ran into an issue. Please try again later"
          );
          toast.error("The server ran into an issue. Please try again later");
        }
      } catch (error) {
        console.log(error);
        toast.error("There was a problem logging in. Please try again later!");
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="w-full border space-y-6 border-gray-300 rounded-lg p-4">
      <h2 className="font-semibold text-gray-900 text-center">
        Office meal Management System
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {backendErrors ? (
          <GenericErrorBox backendErrors={backendErrors} />
        ) : null}
        <TextInputField
          label="Email *"
          id="email"
          name="email"
          placeholder="e.g. name@example.com"
          onChange={(e) => formik.setFieldValue("email", e.target.value)}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <FormikErrorBox formik={formik} field="email" />
        <PasswordInputField
          label="Password *"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => formik.setFieldValue("password", e.target.value)}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <FormikErrorBox formik={formik} field="password" />
        {!(formik.values.email && formik.values.password) || login_loading ? (
          <DisabledButton
            loading={login_loading.toString()}
            variant="primary"
            className="w-full justify-center"
          >
            {login_loading ? "Logging you in..." : "Login"}
          </DisabledButton>
        ) : (
          <Button
            variant="primary"
            type="submit"
            loading={login_loading.toString()}
            className="w-full justify-center"
          >
            Login
          </Button>
        )}
      </form>
    </div>
  );
}
