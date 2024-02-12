let prices = [250, 645, 300, 900, 50];

for (let i=0; i<prices.length; i++){
    console.log(`value of ${i} = ${prices[i]}`);
    let offer = prices[i] / 10;
    prices[i] -= offer;
    console.log(`After offer = ${prices[i]}`);
}