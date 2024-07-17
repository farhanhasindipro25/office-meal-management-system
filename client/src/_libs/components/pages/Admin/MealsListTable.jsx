export default function MealsListTable({ meals }) {
  return (
    <table className="w-full divide-y divide-gray-300 border rounded-lg shadow-md">
      <thead className="rounded-xl">
        <tr className="bg-white">
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Meal Items
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
          >
            Working Day
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {meals?.map((meal) => (
          <tr key={meal.id}>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {meal?.item_name}
            </td>
            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
              {meal?.working_day}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
