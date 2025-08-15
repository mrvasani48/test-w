export function prepareSection(section) {
  const items = (section.items || []).map(item => ({
    ...item,
    quantity: item.quantity || "0",
    unit_cost: item.unit_cost || "0",
    total: item.total || "0"
  }));
  const total = items.reduce(
    (sum, item) => sum + (Number(item.total) || 0),
    0
  );
  return { ...section, items, total };
}