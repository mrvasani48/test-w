import React from "react";
import type { ItemProps, ItemType } from "../../types/type";

const Item: React.FC<ItemProps> = ({ items, onItemsChange }) => {
  const handleChange = (index: number, field: keyof ItemType, value: string | number) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };

    const qty = Number(updatedItems[index].quantity) || 0;
    const unitCost = Number(updatedItems[index].unit_cost) || 0;
    updatedItems[index].total = String(qty * unitCost);

    onItemsChange(updatedItems);
  };

  return (
    <div className="py-2">
      <table className="w-full border border-gray-300 text-sm table-fixed">
        <thead>
          <tr className="bg-gray-200 text-gray-900 font-semibold text-base">
            <th className="px-4 py-2 border border-gray-300 text-left w-28">Type</th>
            <th className="px-4 py-2 border border-gray-300 text-left w-60">Item Name</th>
            <th className="px-4 py-2 border border-gray-300 text-right w-16">QTY</th>
            <th className="px-4 py-2 border border-gray-300 text-right w-28">Unit Cost</th>
            <th className="px-4 py-2 border border-gray-300 text-left w-20">Unit</th>
            <th className="px-4 py-2 border border-gray-300 text-right w-28">Total</th>
            <th className="px-4 py-2 border border-gray-300 text-center w-16">Tax</th>
            <th className="px-4 py-2 border border-gray-300 text-left w-28">Cost Code</th>
            <th className="px-4 py-2 border border-gray-300 text-center w-12"></th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr
              key={item.item_id || index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-50 transition-colors`}
            >
              <td className="px-4 py-2 border border-gray-300">{item?.item_type_name}</td>
              <td className="px-4 py-2 border border-gray-300">{item?.subject}</td>
              <td className="px-4 py-2 border border-gray-300 text-right">
                <input
                  type="number"
                  min="0"
                  className="w-16 px-2 py-1 text-right rounded"
                  value={item?.quantity || 0}
                  onChange={e => handleChange(index, "quantity", e.target.value)}
                />
              </td>
              <td className="px-4 py-2 border border-gray-300 text-right">
                <input
                  type="number"
                  min="0"
                  className="w-24 px-2 py-1 text-right rounded"
                  value={Number(item.unit_cost || 0) / 100}
                  onChange={e => {
                    const cents = Math.round(Number(e.target.value) * 100);
                    handleChange(index, "unit_cost", cents);
                  }}
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">{item?.unit}</td>
              <td className="px-4 py-2 border border-gray-300 text-right font-medium">
                {(Number(item?.total || 0) / 100).toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                {item?.tax_rate && Number(item.tax_rate) > 0 ? "✔️" : ""}
              </td>
              <td className="px-4 py-2 border border-gray-300">{item?.cost_code}</td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <button
                  className="text-green-600 hover:text-green-800"
                  title="View"
                  type="button"
                >
                  👁️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Item);
