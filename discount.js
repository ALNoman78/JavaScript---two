let price = 15000;
let memberShip = true;

if (price < 4900) {
  let discountPrice = (price * 10) / 100;
  let AvailablePrice = price - discountPrice;
  console.log("The after discounted", AvailablePrice);
} else if (price > 10000 && memberShip == true) {
  let discountedPrice = (price * 28) / 100;
  let afterDiscountedPrice = price - discountedPrice;
  console.log(
    "You are our Premium Member . After 28% Discounted price",
    afterDiscountedPrice.toFixed(3)
  );
} else {
  console.log("No discount available");
}
