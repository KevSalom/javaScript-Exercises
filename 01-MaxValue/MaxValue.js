function MaxValue(prices) {
  if (prices.length < 2) {
    return 0; // No es posible obtener ganancia con menos de dos precios
  }

  let minPrice = prices[0]; // Precio mínimo inicial
  let maxProfit = 0; // Ganancia máxima inicial

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice; // Actualiza el precio mínimo si encontramos uno más bajo
    } else {
      const potentialProfit = currentPrice - minPrice;
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit; // Actualiza la ganancia máxima si encontramos una mejor
      }
    }
  }

  return maxProfit;
}

module.exports = MaxValue;

