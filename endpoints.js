const organiseData = require("./utils");

function getCatsByFriendliness(
  data,
  { isChildFriendly = false, isDogFriendly = false, isStrangerFriendly = false }
) {
  const response = [];
  data.forEach(
    ({ child_friendly, dog_friendly, stranger_friendly, ...others }) => {
      const firstPass = isChildFriendly ? child_friendly : 0;
      const secondPass = isDogFriendly ? dog_friendly : 0;
      const thirdPass = isStrangerFriendly ? stranger_friendly : 0;

      const sum = firstPass + secondPass + thirdPass;

      sum === 0
        ? response.push({})
        : response.push({ friendlyLevel: sum, ...others });
    }
  );

  return organiseData(response, 5);
}

module.exports = getCatsByFriendliness;
