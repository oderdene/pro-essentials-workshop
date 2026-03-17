const func = () => {
  const random100 = `${(Math.random() * 100).toFixed(2)}%`;
  // Refactor this to be its own function
  const randomPercentage = random100;
  console.log(randomPercentage);
};
