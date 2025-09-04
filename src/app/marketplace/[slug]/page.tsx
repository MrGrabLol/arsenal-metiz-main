import LeaveRequest from "@/app/components/sections/LeaveRequest";
import ProductDetails from "@/app/components/sections/ProductDetails";

export default function page() {
  return (
    <div className="bg-brand-whitish-200">
      <div className="max-w-[2056px] mx-auto bg-white pt-28 lg:pt-56.5 pb-12.5">
        <ProductDetails />
        <LeaveRequest />
      </div>
    </div>
  );
}
