// import { useQuery } from "@tanstack/react-query";
// import PasswordInputField from "../../_libs/components/ui/PasswordInputField";
// import TextInputField from "../../_libs/components/ui/TextInputField";
// import { getRolesList } from "../../_libs/services/api/admin/users/getRolesList";
// import Modal from "../../_libs/styles/ui/Modal";
// import Loader from "../../_libs/components/ui/Loader";
// import ServerError from "../../_libs/components/ui/ServerError";
// import SelectField from "../../_libs/components/ui/SelectField";
// import { generateRoleOptions } from "../../_libs/utils/generateRoleOptions";
// import Button from "../../_libs/components/ui/Button";
// import { useFormik } from "formik";
// import { EDIT_USER_SCHEMA } from "../../_libs/formik-schema/editUserSchema";
// import toast from "react-hot-toast";
// import FormikErrorBox from "../../_libs/components/errors/FormikErrorBox";
// import { patchUser } from "../../_libs/services/api/admin/users/patchUser";
// import { useState, useEffect } from "react";
// import DisabledButton from "../../_libs/components/ui/DisabledButton";

// export default function EditUserModal({ open, setOpen, user }) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const formik = useFormik({
//     initialValues: {
//       user_name: user.user_name,
//       employee_id: user.employee_id,
//       email: user.email,
//       phone: user.phone,
//       role_id: user.role_id,
//       gender: user.gender,
//       password: "",
//     },
//     validationSchema: EDIT_USER_SCHEMA,
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       try {
//         const result = await patchUser(user.id, values);
//         if (result.status === 200) {
//           toast.success("User updated successfully");
//           setOpen(false);
//         } else {
//           toast.error("Failed to update user");
//         }
//       } catch (error) {
//         toast.error("There was a problem updating the user. Please try again later!");
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//   });

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["/roles"],
//     queryFn: () => getRolesList(),
//   });

//   useEffect(() => {
//     if (user) {
//       formik.setValues({
//         user_name: user.user_name,
//         employee_id: user.employee_id,
//         email: user.email,
//         phone: user.phone,
//         role_id: user.role_id,
//         gender: user.gender,
//         password: "", // Ensure password field is properly initialized
//       });
//     }
//   }, [user]);

//   if (isLoading) return <Loader />;
//   if (isError) return <ServerError />;
  
//   const roleOptions = generateRoleOptions(data?.data?.roles || []);

//   const handleRoleChange = (selectedOption) => {
//     formik.setFieldValue("role_id", selectedOption.value);
//   };

//   return (
//     <Modal open={open} setOpen={setOpen}>
//       <h2 className="font-semibold text-gray-900 text-lg text-center border-b pb-4 border-gray-300">
//         Edit User
//       </h2>
//       <form className="space-y-4 pt-4" onSubmit={formik.handleSubmit}>
//         <SelectField
//           label="Select User Role *"
//           name="role_id"
//           id="role_id"
//           placeholder="Select a role..."
//           options={roleOptions}
//           onChange={handleRoleChange}
//           onBlur={formik.handleBlur}
//           value={roleOptions.find((el) => el.value === formik.values.role_id)}
//         />
//         <div className="flex flex-col items-center gap-4 md:flex-row">
//           <div className="w-full space-y-4 md:w-1/2">
//             <TextInputField
//               label="User Name *"
//               name="user_name"
//               id="user_name"
//               placeholder="Enter user name"
//               onChange={formik.handleChange}
//               value={formik.values.user_name}
//             />
//             <FormikErrorBox formik={formik} field="user_name" />
//           </div>
//           <div className="w-full space-y-4 md:w-1/2">
//             <TextInputField
//               label="Employee ID *"
//               name="employee_id"
//               id="employee_id"
//               placeholder="Enter employee id"
//               onChange={formik.handleChange}
//               value={formik.values.employee_id}
//             />
//             <FormikErrorBox formik={formik} field="employee_id" />
//           </div>
//         </div>
//         <div className="flex flex-col items-center gap-4 md:flex-row">
//           <div className="w-full space-y-4 md:w-1/2">
//             <TextInputField
//               label="Email *"
//               name="email"
//               id="email"
//               placeholder="e.g. name@example.com"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />
//             <FormikErrorBox formik={formik} field="email" />
//           </div>
//           <div className="w-full space-y-4 md:w-1/2">
//             <TextInputField
//               label="Phone *"
//               name="phone"
//               id="phone"
//               placeholder="Enter employee phone number"
//               onChange={formik.handleChange}
//               value={formik.values.phone}
//             />
//             <FormikErrorBox formik={formik} field="phone" />
//           </div>
//         </div>
//         <div className="flex flex-col items-center gap-4 md:flex-row">
//           <div className="w-full space-y-4 md:w-1/2">
//             <PasswordInputField
//               label="Password *"
//               name="password"
//               id="password"
//               placeholder="Enter a new password or leave blank"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//             />
//             <FormikErrorBox formik={formik} field="password" />
//           </div>
//           <div className="w-full space-y-4 md:w-1/2">
//             <TextInputField
//               label="Gender *"
//               name="gender"
//               id="gender"
//               placeholder="e.g. MALE, FEMALE, etc."
//               onChange={formik.handleChange}
//               value={formik.values.gender}
//             />
//             <FormikErrorBox formik={formik} field="gender" />
//           </div>
//         </div>
//         <div className="flex w-full items-center gap-4">
//           <Button
//             variant="secondary"
//             className="w-1/2 justify-center"
//             onClick={() => setOpen(false)}
//           >
//             Cancel
//           </Button>
//           {isSubmitting ? (
//             <DisabledButton
//               loading={isSubmitting}
//               variant="primary"
//               className="w-full justify-center"
//             >
//               {isSubmitting ? "Updating User" : "Update User"}
//             </DisabledButton>
//           ) : (
//             <Button
//               type="submit"
//               variant="primary"
//               className="w-1/2 justify-center"
//             >
//               Update User
//             </Button>
//           )}
//         </div>
//       </form>
//     </Modal>
//   );
// }
