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
  amount: number,
  currency: string,
  decimals?: number,
  zone?: string
) =>
  new Intl.NumberFormat((zone = zone || "es-AR"), {
    currency,
    style: "currency",
    minimumFractionDigits: decimals,
  }).format(amount);
