import Button from "../../../ui/Button";

export default function UsersListTable({ users }) {
  return (
    <table className="w-full divide-y divide-gray-300 border rounded-lg shadow-md">
      <thead className="rounded-xl">
        <tr className="bg-white">
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Employee
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Gender
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700"
          >
            Phone
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-700 sm:pr-6 truncate"
          >
            Role
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-700 sm:pr-6"
          >
            Ban Status
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-700 sm:pr-6"
          >
            Date Added
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-700 sm:pr-6"
          >
            Date Updated
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-700 sm:pr-6"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users?.map((user) => (
          <tr key={user.id}>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {user.user_name || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {user.gender || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {user.email || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {user.phone || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 capitalize whitespace-nowrap">
              {user.role_name.replace("_", " ").toLowerCase() || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 capitalize whitespace-nowrap">
              {user.is_banned === true ? (
                <span className="text-red-500 font-semibold">Banned</span>
              ) : (
                <span className="text-green-600 font-semibold">Permitted</span>
              )}
            </td>
            <td className="p-4 text-sm text-gray-500 capitalize whitespace-nowrap">
              {user.role_name.replace("_", " ").toLowerCase() || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 capitalize whitespace-nowrap">
              {user.role_name.replace("_", " ").toLowerCase() || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 capitalize whitespace-nowrap">
              <Button
                variant="secondary"
                className="text-sm border-none shadow-none"
              >
                Ban
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
