"use client";

import Link from "next/link";
import React, { useState } from "react";

interface CategoryData {
  subcategories: string[];
  nestedSubcategories?: Record<string, string[]>;
}

export default function MarketplaceLinks() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null);

  const categories: Record<string, CategoryData> = {
    "ПРОВОЛОКА": {
      subcategories: [
        "Легированная",
        "Высоколегированная", 
        "Наплавленная",
        "Медно-никелевые сплавы",
        "Электроэрозионная",
        "Микропроволока",
        "Коррозионностойкая",
        "Проволока из прецизионных сплавов с высоким электрическим сопротивлением",
        "Сварочная проволока AWS A5.9"
      ],
      nestedSubcategories: {
        "Медно-никелевые сплавы": [
          "Никелевая",
          "Медная", 
          "Медно-никелевая",
          "Бронзовая"
        ]
      }
    },
    "СВАРОЧНЫЕ МАТЕРИАЛЫ": {
      subcategories: [
        "Электроды",
        "Флюс"
      ]
    },
    "ПРИБОРЫ": {
      subcategories: []
    }
  };

  return (
    <div className="w-full hidden lg:flex font-oswald font-medium text-white leading-5 xl:text-xl/7 uppercase relative z-40">
      {Object.entries(categories).map(([category, data]) => (
        <div
          key={category}
          className="relative flex-1 bg-brand-dark-gray border border-brand-whitish/30 cursor-pointer smooth-200 py-1.5 xl:py-3.5"
          onMouseEnter={() => setHoveredCategory(category)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="w-full flex-center">
            {category}
          </div>
          
          {/* Dropdown for subcategories */}
          {hoveredCategory === category && data.subcategories.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-black border border-brand-whitish/30 z-50 shadow-2xl">
              {data.subcategories.map((subcategory) => (
                <div
                  key={subcategory}
                  className="relative group"
                  onMouseEnter={() => setHoveredSubcategory(subcategory)}
                  onMouseLeave={() => setHoveredSubcategory(null)}
                >
                  <Link
                    href={`/marketplace/catalog/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`flex items-center justify-between px-3 py-2.5 text-xs hover:shadow-[inset_0_0_0_1000px_rgba(75,85,99,0.8)] smooth-200 border-b border-brand-whitish/20 last:border-b-0 box-border ${
                      hoveredSubcategory === subcategory && data.nestedSubcategories && data.nestedSubcategories[subcategory] ? 'border-t border-brand-whitish/20' : ''
                    }`}
                  >
                    <span>{subcategory}</span>
                    {data.nestedSubcategories && data.nestedSubcategories[subcategory] && (
                      <svg 
                        width="10" 
                        height="10" 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        className="text-brand-whitish/60"
                      >
                        <path 
                          d="M4.5 3L7.5 6L4.5 9" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Nested dropdown for specific subcategories */}
                  {hoveredSubcategory === subcategory && 
                   data.nestedSubcategories && 
                   data.nestedSubcategories[subcategory] && (
                    <div className="absolute left-full top-0 w-full bg-black border border-brand-whitish/30 z-50 shadow-2xl">
                      {data.nestedSubcategories[subcategory].map((nestedSubcategory: string) => (
                        <Link
                          key={nestedSubcategory}
                          href={`/marketplace/catalog/${nestedSubcategory.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-2.5 text-xs hover:shadow-[inset_0_0_0_1000px_rgba(75,85,99,0.8)] smooth-200 border-b border-brand-whitish/20 last:border-b-0 box-border"
                        >
                          {nestedSubcategory}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
