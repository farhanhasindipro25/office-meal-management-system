import { useState } from "react";
import Button from "../../_libs/components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import AddUserModal from "./AddUserModal";
import { useQuery } from "@tanstack/react-query";
import UsersListTable from "../../_libs/components/pages/Admin/user-management/UsersListTable";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import { getUsersList } from "../../_libs/services/api/admin/users/getUsersList";

export default function UserManagement() {
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["/users"],
    queryFn: () => getUsersList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;
  return (
    <div className="max-w-8xl mx-auto px-4 space-y-6 lg:py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900 text-xl">Users List</h2>
        <Button
          variant="primary"
          className="gap-2"
          onClick={() => setOpenAddUserModal(true)}
        >
          <PlusIcon className="w-4 h-4" />
          Add User
        </Button>
      </div>
      <AddUserModal
        open={openAddUserModal}
        refetch={refetch}
        setOpen={setOpenAddUserModal}
      />
      <UsersListTable users={data?.data?.users} refetch={refetch} />
    </div>
  );
}
