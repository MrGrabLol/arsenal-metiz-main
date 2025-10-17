import LeaveRequest from "@/app/components/sections/LeaveRequest";
import ProductDetails from "@/app/components/sections/ProductDetails";

export default function page() {
  return (
    <div className="bg-brand-whitish-200">
      <div className="max-w-6xl mx-auto bg-white pt-30 lg:pt-44 pb-4 px-4">
        <ProductDetails />
        <LeaveRequest />
      </div>
    </div>
  );
}
