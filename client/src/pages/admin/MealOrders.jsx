import { useQuery } from "@tanstack/react-query";
import OrdersListTable from "../../_libs/components/pages/Admin/OrdersListTable";
import Loader from "../../_libs/components/ui/Loader";
import ServerError from "../../_libs/components/ui/ServerError";
import { getOrdersList } from "../../_libs/services/api/admin/orders/getOrdersList";

export default function MealOrders() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/orders/all"],
    queryFn: () => getOrdersList(),
  });
  if (isLoading) return <Loader />;
  if (isError) return <ServerError />;
  return (
    <div className="max-w-8xl mx-auto px-4 space-y-6 lg:py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900 text-xl">Orders List</h2>
      </div>
      <div className="overflow-x-auto">
        <OrdersListTable orders={data?.data?.orders} />
      </div>
    </div>
  );
}
