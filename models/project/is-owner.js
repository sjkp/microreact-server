module.exports = function (user) {
  if (!user || !user.id) {
    return false;
  }

  if (this.owner && this.owner.equals(user.id)) {
    return true;
  }

  return false;
};
