// findTheNumberOfOddNumbers
const findTheNumberOfOddNumbers = (myArray) => {
  let numbers = 0;
  myArray.forEach((num) => {
    if (num % 2 !== 0) {
      numbers++;
    }
  });
  return numbers;
};

// getIndexOfFalseItem
const getIndexOfFalseItem = (myArray) => {
  const index = myArray.findIndex((item) => item === false);
  return index;
};

// filterNumbers
const filterNumbers = (myArray) => {
  const filterNumbers = myArray.filter((item) => typeof item === "number");
  return filterNumbers;
};

// generateEmailAddress
const generateEmailAddress = (myArray) => {
  let emailadress = myArray.map((item) => item.toLowerCase() + "@gmail.com");
  return emailadress;
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
