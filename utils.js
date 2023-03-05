function organiseData(data, number) {
  return data
    .sort((a, b) => b.friendlyLevel - a.friendlyLevel)
    .splice(0, number);
}

module.exports = organiseData;
