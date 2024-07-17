import { useQuery } from "@tanstack/react-query";
import PasswordInputField from "../../_libs/components/ui/PasswordInputField";
import TextInputField from "../../_libs/components/ui/TextInputField";
import { getRolesList } from "../../_libs/services/api/admin/users/getRolesList";
import Modal from "../../_libs/styles/ui/Modal";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import SelectField from "../../_libs/components/ui/SelectField";
import { generateRoleOptions } from "../../_libs/utils/generateRoleOptions";
import Button from "../../_libs/components/ui/Button";
import { useFormik } from "formik";
import { ADD_USER_INITIAL_VALUES } from "../../_libs/form-initial-values/addUser";
import { ADD_USER_SCHEMA } from "../../_libs/formik-schema/addUserSchema";
import toast from "react-hot-toast";
import FormikErrorBox from "../../_libs/components/errors/FormikErrorBox";
import { postUser } from "../../_libs/services/api/admin/users/postUser";
import { useState } from "react";
import DisabledButton from "../../_libs/components/ui/DisabledButton";

export default function AddUserModal(props) {
  const { open, setOpen } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: ADD_USER_INITIAL_VALUES,
    validationSchema: ADD_USER_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const result = await postUser(values);
        if (result.status === 201) {
          resetForm();
          toast.success("Added new user");
        } else if (result.status === 400) {
          toast.error("An account with this email already exists");
        }
      } catch (error) {
        toast.error(
          "There was a problem adding a new user. Please try again later!"
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["/roles"],
    queryFn: () => getRolesList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;
  const roleOptions = generateRoleOptions(data?.data?.roles || []);

  const handleRoleChange = (selectedOption) => {
    formik.setFieldValue("role_id", selectedOption.value);
  };
  return (
    <Modal open={open} setOpen={setOpen}>
      <h2 className="font-semibold text-gray-900 text-lg text-center border-b pb-4 border-gray-300">
        Add New User
      </h2>
      <form className="space-y-4 pt-4" onSubmit={formik.handleSubmit}>
        <SelectField
          label="Select User Role *"
          name="role_id"
          id="role_id"
          placeholder="Select a role..."
          options={roleOptions}
          onChange={handleRoleChange}
          onBlur={formik.handleBlur}
          value={roleOptions.find((el) => el.label === formik.values.role_id)}
        />
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="w-full space-y-4 md:w-1/2">
            <TextInputField
              label="User Name *"
              name="user_name"
              id="user_name"
              placeholder="Enter user name"
              onChange={(e) =>
                formik.setFieldValue("user_name", e.target.value)
              }
              value={formik.values.user_name}
            />
            <FormikErrorBox formik={formik} field="user_name" />
          </div>
          <div className="w-full space-y-4 md:w-1/2">
            <TextInputField
              label="Employee ID *"
              name="employee_id"
              id="employee_id"
              placeholder="Enter employee id"
              onChange={(e) =>
                formik.setFieldValue("employee_id", e.target.value)
              }
              value={formik.values.institution}
            />
            <FormikErrorBox formik={formik} field="employee_id" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="w-full space-y-4 md:w-1/2">
            <TextInputField
              label="Email *"
              name="email"
              id="email"
              placeholder="e.g. name@example.com"
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              value={formik.values.email}
            />
            <FormikErrorBox formik={formik} field="email" />
          </div>
          <div className="w-full space-y-4 md:w-1/2">
            <TextInputField
              label="Phone *"
              name="phone"
              id="phone"
              placeholder="Enter employee phone number"
              onChange={(e) => formik.setFieldValue("phone", e.target.value)}
              value={formik.values.phone}
            />
            <FormikErrorBox formik={formik} field="phone" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="w-full space-y-4 md:w-1/2">
            <PasswordInputField
              label="Password *"
              name="password"
              id="password"
              placeholder="Enter a password for the user"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
              value={formik.values.password}
            />
            <FormikErrorBox formik={formik} field="password" />
          </div>
          <div className="w-full space-y-4 md:w-1/2">
            <TextInputField
              label="Gender *"
              name="gender"
              id="gender"
              placeholder="e.g. MALE, FEMALE, etc."
              onChange={(e) => formik.setFieldValue("gender", e.target.value)}
              value={formik.values.gender}
            />
            <FormikErrorBox formik={formik} field="gender" />
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <Button
            variant="secondary"
            className="w-1/2 justify-center"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          {isSubmitting ? (
            <DisabledButton
              loading={isSubmitting}
              variant="primary"
              className="w-full justify-center"
            >
              {isSubmitting ? "Adding User" : "Add User"}
            </DisabledButton>
          ) : (
            <Button
              onClick={formik.handleSubmit}
              variant="primary"
              className="w-1/2 justify-center"
            >
              Add User
            </Button>
          )}
        </div>
      </form>
    </Modal>
  );
}
