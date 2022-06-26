import { formatCurrency } from "./formatterHelper";

describe("[formatCurrency] => ", () => {
  const amount = 206249;
  const currency = "ARS";

  it("price should be returned with the right currency format", () => {
    const priceFormatted = formatCurrency(amount, currency);
    expect(priceFormatted).toEqual("$ 206.249");
  });
  it("price should be returned the numbers of decimal digits set", () => {
    const decimal = 2;
    const priceFormatted = formatCurrency(amount, currency, decimal);
    expect(priceFormatted).toEqual("$ 206.249,00");
  });
});
