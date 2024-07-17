import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../../../../services/api/admin/users/getUsersList";
import UsersListTable from "./UsersListTable";

export default function UsersDataList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/users"],
    queryFn: () => getUsersList(),
  });
  if (isLoading) return "Loading...";
  if (isError) return "Error...";

  return (
    <div className="overflow-x-auto">
      <UsersListTable users={data?.data?.users} />
    </div>
  );
}
