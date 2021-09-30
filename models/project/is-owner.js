module.exports = function (user) {
  if (!user || !user.id) {
    return false;
  }

  if (this.owner && this.owner.toString() === user.id) {
    return true;
  }

  return false;
};
