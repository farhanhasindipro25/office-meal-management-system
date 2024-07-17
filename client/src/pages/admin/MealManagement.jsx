import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../../_libs/components/ui/Button";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMealsList } from "../../_libs/services/api/admin/meals/getMealsList";
import AddMealsModal from "./AddMealsModal";
import MealsListTable from "../../_libs/components/pages/Admin/MealsListTable";

export default function MealManagement() {
  const [openAddMealModal, setOpenAddMealModal] = useState(false);
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["/meals"],
    queryFn: () => getMealsList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;
  return (
    <div className="max-w-8xl mx-auto px-4 space-y-6 lg:py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900 text-xl">
          Scheduled Meals List
        </h2>
        <Button
          variant="primary"
          className="gap-2"
          onClick={() => setOpenAddMealModal(true)}
        >
          <PlusIcon className="w-4 h-4" />
          Add Meals
        </Button>
      </div>
      <AddMealsModal
        open={openAddMealModal}
        refetch={refetch}
        setOpen={setOpenAddMealModal}
      />
      <MealsListTable meals={data?.data?.meals} refetch={refetch} />
    </div>
  );
}
