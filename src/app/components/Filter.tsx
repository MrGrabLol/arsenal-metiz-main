import { useState } from "react";
import TagSelector from "./shared/ui/TagSelector";

interface FilterProps {
  isOpen: boolean;
}

export default function Filter({ isOpen }: FilterProps) {
  const [active, setIsActive] = useState(0);
  const [packages, setPackages] = useState<string[]>(["К300"]);
  const [manufacturers, setManufacturers] = useState<string[]>(["Ферротрейд"]);
  const [stamps, setStamps] = useState<string[]>(["СВ-08Г2С-О"]);
  const [standards, setStandards] = useState<string[]>(["Гост123456"]);

  const allPackages = ["К100", "К200", "К300", "К400"];
  const allManufacturers = ["Ферротрейд", "Ижевск Сталь", "МеталлТрейд"];
  const allStamps = ["СВ-08Г2", "СВ-08Г2С-1", "СВ-08Г2С-2"];
  const allStandards = ["Гост123456", "Гост123457", "Гост123458"];

  return (
    <aside
      className={`w-full h-screen fixed inset-y-0 left-0 z-[60] lg:z-auto max-w-80 lg:h-[calc(100vh-300px)] lg:sticky lg:top-52 shrink-0 -translate-x-full lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-brand-whitish-200 text-xs lg:text-sm rounded-r-md overflow-auto smooth-200 px-6 pt-8 pb-32 lg:px-7.5 lg:pt-7.5`}
    >
      {/* Warehouse */}
      <div className="space-y-5">
        <p className="text-base lg:text-lg font-medium">Склад:</p>
        <div className="flex leading-4">
          <button
            onClick={() => setIsActive(0)}
            className={`border-y border border-r-transparent  border-brand-dark-gray/30 ${
              active === 0 ? "bg-white border-r !border-brand-brown" : ""
            } rounded-l-md hover:bg-white smooth-200 cursor-pointer p-2.5`}
          >
            Белорецк
          </button>
          <button
            onClick={() => setIsActive(1)}
            className={`border border-l-transparent border-brand-dark-gray/30  ${
              active === 1 ? "bg-white !border-brand-brown" : ""
            } rounded-r-md hover:bg-white smooth-200 cursor-pointer p-2.5`}
          >
            Матросово
          </button>
        </div>
      </div>
      {/* Cost */}
      <div className="space-y-5 mt-6">
        <p className="text-base lg:text-lg font-medium">Цена:</p>
        <div className="grid grid-cols-2 gap-2.5 leading-4">
          {/* From */}
          <input
            type="text"
            className="border border-brand-dark-gray/30 rounded-md outline-none focus:bg-white active:bg-white p-2.5"
            placeholder="от ..."
          />
          {/* To */}
          <input
            type="text"
            className="border border-brand-dark-gray/30 rounded-md outline-none focus:bg-white active:bg-white p-2.5"
            placeholder="до ..."
          />
        </div>
      </div>
      {/* Existance */}
      <div className="space-y-5 mt-6">
        <p className="text-base lg:text-lg font-medium">Отображать:</p>
        <div className="flex flex-col gap-2.5 leading-4">
          {/* All */}
          <input
            type="radio"
            name="1"
            id="all"
            className="hidden peer/all"
            defaultChecked
          />
          <label
            htmlFor="all"
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="size-3.75 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2">
              <span className="size-3 hidden bg-brand-brown rounded-2 smooth-200"></span>
            </div>
            <span>Все</span>
          </label>
          <input
            type="radio"
            name="1"
            id="exist"
            className="hidden peer/exist"
          />
          <label
            htmlFor="exist"
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="size-3.75 shrink-0 flex-center bg-white border border-brand-dark-gray/30 rounded-2">
              <span className="size-3 hidden bg-brand-brown rounded-2 smooth-200"></span>
            </div>
            <span>Только в наличии</span>
          </label>
        </div>
      </div>
      {/* Packaging */}
      <div className="space-y-5 mt-9">
        <p className="text-base lg:text-lg font-medium">Упаковки:</p>
        <TagSelector
          availableOptions={allPackages}
          selected={packages}
          onChange={setPackages}
        />
      </div>
      {/* Diameters */}
      <div className="space-y-5 mt-12">
        <p className="text-base lg:text-lg font-medium">Диаметр:</p>
        <div className="max-w-51.5 grid grid-cols-2 gap-2.5 leading-4">
          {/* From */}
          <input
            type="text"
            className="border border-brand-dark-gray/30 rounded-md outline-none focus:bg-white active:bg-white p-2.5"
            placeholder="от ..."
          />
          {/* To */}
          <input
            type="text"
            className="border border-brand-dark-gray/30 rounded-md outline-none focus:bg-white active:bg-white p-2.5"
            placeholder="до ..."
          />
        </div>
      </div>
      {/* Manufacturer */}
      <div className="space-y-5 mt-7">
        <p className="text-base lg:text-lg font-medium">Производитель:</p>
        <TagSelector
          availableOptions={allManufacturers}
          selected={manufacturers}
          onChange={setManufacturers}
        />
      </div>
      {/* Stamps */}
      <div className="space-y-5 mt-7">
        <p className="text-base lg:text-lg font-medium">Марки:</p>
        <TagSelector
          availableOptions={allStamps}
          selected={stamps}
          onChange={setStamps}
        />
      </div>
      {/* Standards */}
      <div className="space-y-5 mt-7">
        <p className="text-base lg:text-lg font-medium">Стандарты:</p>
        <TagSelector
          availableOptions={allStandards}
          selected={standards}
          onChange={setStandards}
        />
      </div>
    </aside>
  );
}
