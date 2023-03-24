module.exports = {
  default: function uniq(list) {
    return Array.from(new Set(list));
  },
};
