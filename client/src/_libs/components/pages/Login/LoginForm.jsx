import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import PasswordInputField from "../../ui/PasswordInputField";
import TextInputField from "../../ui/TextInputField";
import { useAdminLoginMutation } from "../../../services/redux/api/admin/adminApiSlice";
import { ADMIN_LOGIN_INITIAL_VALUES } from "../../../form-initial-values/adminLogin";
import { ADMIN_LOGIN_SCHEMA } from "../../../formik-schema/adminLoginSchema";
import { useState } from "react";
import GenericErrorBox from "../../errors/GenericErrorBox";
import FormikErrorBox from "../../errors/FormikErrorBox";

export default function LoginForm() {
  const [login, { isLoading, error }] = useAdminLoginMutation();
  const dispatch = useDispatch();
  const [backendErrors, setBackendErrors] = useState("");

  console.log("Login Error:", error || "No Error");
  const formik = useFormik({
    initialValues: ADMIN_LOGIN_INITIAL_VALUES,
    validationSchema: ADMIN_LOGIN_SCHEMA,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const user = {
          email: values.email,
          password: values.password,
        };
        const result = await login(user);
        console.log(result);
        if (result?.data?.status === 200) {
          dispatch(
            setClientLoginCredentials({
              user: user,
              accessToken: result.data.token,
            })
          );
          //   toast.success("You have logged in to your client portal!");
          //   router.push("/client");
        } else if (result?.error?.status === 400) {
          setBackendErrors(
            result?.error?.data?.message || "Login credentials are invalid!"
          );
          //   toast.error("Login credentials are invalid!");
        }
      } catch (error) {
        setBackendErrors(error.message);
        // toast.error("There was a problem logging in. Please try again later!");
        console.warn("Login failed", error.message);
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
        <Button
          variant="primary"
          onClick={formik.handleSubmit}
          className="w-full justify-center"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
