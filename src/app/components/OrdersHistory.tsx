import OrderHistoryCard from "./shared/ui/OrderHistoryCard";

export default function OrdersHistory() {
  return (
    <div className="space-y-7.5">
      <div className="space-y-10 bg-brand-whitish-200 border border-brand-dark-gray/30 rounded-md p-6 lg:p-10 2xl:p-12.5">
        <h2>История заказов</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-7.5">
          <OrderHistoryCard />
          <OrderHistoryCard />
          <OrderHistoryCard />
          <OrderHistoryCard />
          <OrderHistoryCard />
          <OrderHistoryCard />
          <OrderHistoryCard />
          <OrderHistoryCard />
        </div>
      </div>
    </div>
  );
}
