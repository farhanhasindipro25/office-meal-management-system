import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import { ADD_MEAL_INITIAL_VALUES } from "../../_libs/form-initial-values/addMeal";
import { ADD_MEALS_SCHEMA } from "../../_libs/formik-schema/addMealsSchema";
import { postMeal } from "../../_libs/services/api/admin/meals/postMeal";
import { getSchedulesList } from "../../_libs/services/api/admin/meals/getSchedulesList";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import { generateScheduleOptions } from "../../_libs/utils/generateScheduleOptions";
import Modal from "../../_libs/styles/ui/Modal";
import SelectField from "../../_libs/components/ui/SelectField";
import FormikErrorBox from "../../_libs/components/errors/FormikErrorBox";
import Button from "../../_libs/components/ui/Button";
import DisabledButton from "../../_libs/components/ui/DisabledButton";
import { getItemsList } from "../../_libs/services/api/admin/items/getItemsList";
import { generateItemOptions } from "../../_libs/utils/generateItemOptions";

export default function AddMealsModal({ open, setOpen, refetch }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: ADD_MEAL_INITIAL_VALUES,
    validationSchema: ADD_MEALS_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const result = await postMeal(values);
        if (result.status === 201) {
          refetch();
          resetForm();
          toast.success("Added new meal");
          setOpen(false);
        }
      } catch (error) {
        toast.error(
          "There was a problem adding a new meal. Please try again later!"
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["/schedules"],
    queryFn: () => getSchedulesList(),
  });
  const {
    data: itemsData,
    isLoading: itemsLoading,
    isError: itemsError,
  } = useQuery({
    queryKey: ["/items"],
    queryFn: () => getItemsList(),
  });
  if (isLoading || itemsLoading) return <Loader />;
  if (isError || itemsError) return <ServerError />;
  const scheduleOptions = generateScheduleOptions(data?.data?.schedules || []);

  const itemOptions = generateItemOptions(itemsData?.data?.items || []);

  const handleScheduleChange = (selectedOption) => {
    formik.setFieldValue("schedule_id", selectedOption.value);
  };
  const handleItemsChange = (selectedOption) => {
    formik.setFieldValue("item_id", selectedOption.value);
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <h2 className="font-semibold text-gray-900 text-lg text-center border-b pb-4 border-gray-300">
        Add New Meal
      </h2>
      <form className="space-y-4 pt-4" onSubmit={formik.handleSubmit}>
        <SelectField
          label="Choose Working Day *"
          name="schedule_id"
          id="schedule_id"
          placeholder="Select a working day..."
          options={scheduleOptions}
          onChange={handleScheduleChange}
          onBlur={formik.handleBlur}
          value={scheduleOptions.find(
            (el) => el.label === formik.values.schedule_id
          )}
        />
        <FormikErrorBox formik={formik} field="schedule_id" />
        <SelectField
          label="Choose Items *"
          name="item_id"
          id="item_id"
          placeholder="Select items..."
          options={itemOptions}
          onChange={handleItemsChange}
          onBlur={formik.handleBlur}
          value={itemOptions.find((el) => el.label === formik.values.item_id)}
        />
        <FormikErrorBox formik={formik} field="item_id" />

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
              {isSubmitting ? "Adding Meal" : "Add Meal"}
            </DisabledButton>
          ) : (
            <Button
              onClick={formik.handleSubmit}
              variant="primary"
              className="w-1/2 justify-center"
            >
              Add Meal
            </Button>
          )}
        </div>
      </form>
    </Modal>
  );
}
