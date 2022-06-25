/**
 * Format amount to currency format
 *
 * @param  {number} amount
 * @param  {string} currency
 * @param  {number} decimals
 * @param  {string} zone
 * @return {string}
 */
export const formatCurrency = (
  amount: number = 0,
  currency: string = "ARG",
  decimals: number = 0,
  zone?: string
) =>
  new Intl.NumberFormat((zone = zone || "es-AR"), {
    currency,
    style: "currency",
    minimumFractionDigits: decimals,
  }).format(amount);
