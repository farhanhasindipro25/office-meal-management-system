import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import { postOrder } from "../../_libs/services/api/employee/postOrder";
import { getMealsList } from "../../_libs/services/api/admin/meals/getMealsList";
import { generateMealOptions } from "../../_libs/utils/generateMealOptions";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import SelectField from "../../_libs/components/ui/SelectField";
import FormikErrorBox from "../../_libs/components/errors/FormikErrorBox";
import Button from "../../_libs/components/ui/Button";
import DisabledButton from "../../_libs/components/ui/DisabledButton";
import DateSelectorInputField from "../../_libs/components/ui/DateSelectorInputField";
import CheckBoxInputField from "../../_libs/components/ui/CheckBoxInputField";

export default function AddOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      wants_meal: false,
      meal_id: null,
      date: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const result = await postOrder(values);
        if (result.status === 201) {
          resetForm();
          toast.success("Added new order");
        }
      } catch (error) {
        toast.error(
          "There was a problem adding a new order. Please try again later!"
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["/meals"],
    queryFn: () => getMealsList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;
  const mealOptions = generateMealOptions(data?.data?.meals || []);

  const handleMealChange = (selectedOption) => {
    formik.setFieldValue("meal_id", selectedOption.value);
  };

  const handleWantsMeal = (e) => {
    formik.setFieldValue("wants_meal", e.target.checked ? true : false);
  };
  return (
    <div className="w-full">
      <h2 className="font-semibold text-gray-900 text-lg text-center border-b pb-4 border-gray-300">
        Add New Order
      </h2>
      <form className="space-y-4 pt-4" onSubmit={formik.handleSubmit}>
        <CheckBoxInputField
          name="wants_meal"
          id="wants_meal"
          checked={formik.values.wants_meal === true ? true : false}
          onChange={handleWantsMeal}
          label="I want a meal"
        />
        <SelectField
          label="Select Meal "
          name="meal_id"
          id="meal_id"
          placeholder="Select a meal..."
          options={mealOptions}
          onChange={handleMealChange}
          onBlur={formik.handleBlur}
          value={mealOptions.find((el) => el.label === formik.values.meal_id)}
        />

        <DateSelectorInputField
          label="Date*"
          id="date"
          name="date"
          onChange={(e) => formik.setFieldValue("date", e.target.value)}
          value={formik.values.date}
        />
        <FormikErrorBox formik={formik} field="date" />
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
              {isSubmitting ? "Adding Order" : "Add Order"}
            </DisabledButton>
          ) : (
            <Button
              onClick={formik.handleSubmit}
              variant="primary"
              className="w-1/2 justify-center"
            >
              Add Order
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
