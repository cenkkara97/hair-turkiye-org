"use client";

import { Check, X, AlertTriangle } from "lucide-react";

interface ComparisonItem {
  feature: string;
  turkey: boolean | string;
  usa: boolean | string;
  uk: boolean | string;
  germany: boolean | string;
}

interface ComparisonTableProps {
  title: string;
  items: ComparisonItem[];
  className?: string;
}

const countries = [
  { key: "turkey", name: "Turkey", flag: "\uD83C\uDDF9\uD83C\uDDF7", accent: "bg-brand-gold" },
  { key: "usa", name: "USA", flag: "\uD83C\uDDFA\uD83C\uDDF8", accent: "bg-gray-500" },
  { key: "uk", name: "UK", flag: "\uD83C\uDDEC\uD83C\uDDE7", accent: "bg-gray-500" },
  { key: "germany", name: "Germany", flag: "\uD83C\uDDE9\uD83C\uDDEA", accent: "bg-gray-500" },
] as const;

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-5 text-green-600" />
    ) : (
      <X className="mx-auto size-5 text-red-500" />
    );
  }

  if (value.includes("[!]")) {
    return (
      <div className="flex items-center gap-2 text-amber-600">
        <AlertTriangle className="size-4" />
        <span className="text-sm">{value.replace("[!]", "").trim()}</span>
      </div>
    );
  }

  return <span className="text-sm font-medium">{value}</span>;
}

export function ComparisonTable({ title, items, className = "" }: ComparisonTableProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-data-panel-border bg-white ${className}`}>
      <div className="border-b border-data-panel-border bg-gradient-to-r from-brand-cream to-white px-6 py-4">
        <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-brand-navy">Feature</th>
              {countries.map((country) => (
                <th key={country.key} className="px-4 py-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-sm font-semibold text-brand-navy">{country.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <tr key={index} className="transition-colors hover:bg-gray-50/50">
                <td className="px-6 py-4 text-sm font-medium text-brand-navy">{item.feature}</td>
                {countries.map((country) => (
                  <td key={country.key} className="px-4 py-4 text-center">
                    <CellValue value={item[country.key as keyof ComparisonItem] as boolean | string} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
