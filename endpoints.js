const organiseData = require("./utils");

function getCatsByFriendliness(
  data,
  { isChildFriendly = false, isDogFriendly = false, isStrangerFriendly = false }
) {
  const response = [];
  data.forEach(
    ({ child_friendly, dog_friendly, stranger_friendly, ...others }) => {
      const firstPass = isChildFriendly === 'true' ? child_friendly : 0;
      const secondPass = isDogFriendly === 'true' ? dog_friendly : 0;
      const thirdPass = isStrangerFriendly === 'true' ? stranger_friendly : 0;

      const sum = firstPass + secondPass + thirdPass;

      response.push({ friendlyLevel: sum, ...others, child_friendly, dog_friendly, stranger_friendly });
    }
  );

  return organiseData(response, 5);
}

module.exports = getCatsByFriendliness;
