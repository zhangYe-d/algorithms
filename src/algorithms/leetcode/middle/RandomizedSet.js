var RandomizedSet = function () {
  this.array = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.get(val) !== undefined) {
    return false;
  }

  this.map.set(val, this.array.length);
  this.array.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const index = this.map.get(val);
  if (index !== undefined) {
    this.map.delete(val);
    this.array[index] = this.array[this.array.length - 1];
    this.array.pop();
    this.map.set(this.array[index], index);
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.array.length);
  return this.array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
