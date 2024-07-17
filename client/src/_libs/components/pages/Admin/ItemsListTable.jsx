import Button from "../../ui/Button";

export default function ItemsListTable({ items }) {
  return (
    <table className="w-full divide-y divide-gray-300 border rounded-lg shadow-md">
      <thead className="rounded-xl">
        <tr className="bg-white">
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Item Name
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Category
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {items?.map((item) => (
          <tr key={item.id}>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {item.name || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {item.category_name || "N/A"}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              <Button
                variant="secondary"
                className="text-sm border-none shadow-none"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
