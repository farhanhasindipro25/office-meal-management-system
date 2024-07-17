import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../../../../services/api/admin/users/getUsersList";
import UsersListTable from "./UsersListTable";
import Loader from "../../../ui/Loader";
import ServerError from "../../../ui/ServerError";

export default function UsersDataList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/users"],
    queryFn: () => getUsersList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;

  return (
    <div className="overflow-x-auto">
      <UsersListTable users={data?.data?.users} />
    </div>
  );
}
