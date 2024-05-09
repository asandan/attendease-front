export const getSelectList = (items: Record<string, any>[]) => {
  return items.map(item => {
    const [value, label] = Object.values(item)
    return {
      value,
      label,
    }
  });
}