export default function OrdersListTable({ orders }) {
  return (
    <table className="w-full divide-y divide-gray-300 border rounded-lg shadow-md">
      <thead className="rounded-xl">
        <tr className="bg-white">
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            User Name
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Role
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Date
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700"
          >
            Wants Meal
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-700 sm:pr-6 truncate"
          >
            Meal Items
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {orders?.map((order) => (
          <tr key={order.order_id}>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {order.user_name || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap capitalize">
              {order.role_name.replace("_", " ").toLowerCase() || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {order.date || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {order.wants_meal === true ? (
                <span className="font-medium">YES</span>
              ) : (
                <span className="font-medium">NO</span>
              )}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {order.item_names || "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
