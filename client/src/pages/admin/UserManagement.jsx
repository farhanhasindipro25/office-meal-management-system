import UsersDataList from "../../_libs/components/pages/Admin/user-management/UsersDataList";
import Button from "../../_libs/components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
export default function UserManagement() {
  return (
    <div className="max-w-8xl mx-auto px-4 space-y-6 lg:py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900 text-xl">Users List</h2>
        <Button variant="primary" className="gap-2">
          <PlusIcon className="w-4 h-4" />
          Add User
        </Button>
      </div>
      <UsersDataList />
    </div>
  );
}
