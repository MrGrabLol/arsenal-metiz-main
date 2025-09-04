"use client";

import React, { useState } from "react";
import OrdersHistory from "@/app/components/OrdersHistory";
import Organization from "@/app/components/Organization";
import PersonalData from "@/app/components/PersonalData";
import Button from "@/app/components/shared/ui/Button";

export default function Page() {
  const [activeTab, setActiveTab] = useState<
    "personal" | "organization" | "orders"
  >("personal");

  return (
    <div className="max-w-secondary mx-auto px-4 pt-28 lg:pt-56.5 pb-12.5">
      {/* Tabs */}
      <div className="flex items-center md:gap-5 md:pl-3">
        <Button
          onClick={() => setActiveTab("personal")}
          variant={activeTab === "personal" ? "primary-rounded" : "white"}
          className={`!h-15 !text-xs md:!text-lg/4.5 border-b-0`}
        >
          Персональные данные
        </Button>
        <Button
          onClick={() => setActiveTab("organization")}
          variant={activeTab === "organization" ? "primary-rounded" : "white"}
          className={`!h-15 !text-xs md:!text-lg/4.5 border-b-0`}
        >
          Организация
        </Button>
        <Button
          onClick={() => setActiveTab("orders")}
          variant={activeTab === "orders" ? "primary-rounded" : "white"}
          className={`!h-15 !text-xs md:!text-lg/4.5 border-b-0`}
        >
          История заказов
        </Button>
      </div>

      {/* Tab Content */}
      <div className="-mt-1.5 md:-mt-1 relative z-10">
        {activeTab === "personal" && <PersonalData />}
        {activeTab === "organization" && <Organization />}
        {activeTab === "orders" && <OrdersHistory />}
      </div>
    </div>
  );
}
