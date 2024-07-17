import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../../_libs/components/ui/Button";
import AddItemModal from "./AddItemModal";
import { useState } from "react";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import { getItemsList } from "../../_libs/services/api/admin/items/getItemsList";
import { useQuery } from "@tanstack/react-query";
import ItemsListTable from "../../_libs/components/pages/Admin/ItemsListTable";

export default function ItemManagement() {
  const [openAddItemModal, setOpenAddItemModal] = useState(false);
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["/items"],
    queryFn: () => getItemsList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;
  return (
    <div className="max-w-8xl mx-auto px-4 space-y-6 lg:py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900 text-xl">Items List</h2>
        <Button
          variant="primary"
          className="gap-2"
          onClick={() => setOpenAddItemModal(true)}
        >
          <PlusIcon className="w-4 h-4" />
          Add Item
        </Button>
      </div>
      <AddItemModal
        open={openAddItemModal}
        refetch={refetch}
        setOpen={setOpenAddItemModal}
      />
      <ItemsListTable items={data?.data?.items} refetch={refetch} />
    </div>
  );
}
