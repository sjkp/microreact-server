module.exports = function () {
  // update view count and last accessed time
  this.viewsCount += 1;
  this.accessedAt = new Date();
  return this;
};
