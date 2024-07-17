import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import { ADD_ITEM_INITIAL_VALUES } from "../../_libs/form-initial-values/addItem";
import { ADD_ITEM_SCHEMA } from "../../_libs/formik-schema/addItemSchema";
import { postItem } from "../../_libs/services/api/admin/items/postItem";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import { getCategoriesList } from "../../_libs/services/api/admin/items/getCategories";
import { generateCategoryOptions } from "../../_libs/utils/generateCategoryOptions";
import Modal from "../../_libs/styles/ui/Modal";
import SelectField from "../../_libs/components/ui/SelectField";
import TextInputField from "../../_libs/components/ui/TextInputField";
import FormikErrorBox from "../../_libs/components/errors/FormikErrorBox";
import Button from "../../_libs/components/ui/Button";
import DisabledButton from "../../_libs/components/ui/DisabledButton";

export default function AddItemModal({ open, setOpen, refetch }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: ADD_ITEM_INITIAL_VALUES,
    validationSchema: ADD_ITEM_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const result = await postItem(values);
        if (result.status === 201) {
          refetch();
          resetForm();
          toast.success("Added new item");
          setOpen(false);
        }
      } catch (error) {
        toast.error(
          "There was a problem adding a new item. Please try again later!"
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["/categories"],
    queryFn: () => getCategoriesList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;
  const categoryOptions = generateCategoryOptions(data?.data?.categories || []);

  const handleCategoryChange = (selectedOption) => {
    formik.setFieldValue("category_id", selectedOption.value);
  };
  return (
    <Modal open={open} setOpen={setOpen}>
      <h2 className="font-semibold text-gray-900 text-lg text-center border-b pb-4 border-gray-300">
        Add New User
      </h2>
      <form className="space-y-4 pt-4" onSubmit={formik.handleSubmit}>
        <SelectField
          label="Select Category *"
          name="category_id"
          id="category_id"
          placeholder="Select a category..."
          options={categoryOptions}
          onChange={handleCategoryChange}
          onBlur={formik.handleBlur}
          value={categoryOptions.find(
            (el) => el.label === formik.values.category_id
          )}
        />
        <FormikErrorBox formik={formik} field="category_id" />
        <TextInputField
          label="Item Name *"
          name="name"
          id="name"
          placeholder="Enter user name"
          onChange={(e) => formik.setFieldValue("name", e.target.value)}
          value={formik.values.name}
        />
        <FormikErrorBox formik={formik} field="name" />
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
              {isSubmitting ? "Adding Item" : "Add Item"}
            </DisabledButton>
          ) : (
            <Button
              onClick={formik.handleSubmit}
              variant="primary"
              className="w-1/2 justify-center"
            >
              Add Item
            </Button>
          )}
        </div>
      </form>
    </Modal>
  );
}
