export const getColorByPercentage = (percentage: number) => {
  if (percentage >= 0.7 && percentage <= 1) return "text-green-400"
  if (percentage >= 0.4 && percentage < 0.7) return "text-yellow-400"
  if (percentage < 0.4) return "text-red-400"
  return "white";
}