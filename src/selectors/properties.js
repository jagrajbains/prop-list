export default (properties, { text, sortBy }) => {
  return properties
    .filter(property => {
      const textMatch = property.title
        .toLowerCase()
        .includes(text.toLowerCase());
      return textMatch;
    }) // eslint-disable-next-line
    .sort(function(a, b) {
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy === "rating") {
        return a.rating < b.rating ? 1 : -1;
      }
    });
};
