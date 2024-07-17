import AddOrderForm from "../admin/AddOrderForm";

export default function MyOrders() {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-6">
      <div className="flex w-full items-center justify-between">
        <AddOrderForm />
      </div>
    </div>
  );
}
