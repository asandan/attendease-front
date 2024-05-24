export const getConditionalColor = (paintItems: ((criteria: any) => string) | undefined, criteria: string | undefined, additionalStyles = "") => {
  if(!criteria) return "";
  return paintItems ? `${additionalStyles} ${paintItems(criteria)}` : "";
}