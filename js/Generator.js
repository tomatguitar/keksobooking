export default class Generator {
  result = [];

  generateRandElementPosition(num) {
    return Math.floor(Math.random() * num.length);
  }

  generateRandArrLen(arr) {
    const resultLength = this.generateRandElementPosition(arr);
    for (let i = 0; i <= resultLength; i++) {
      this.result.push(arr[i]);
    }
    this.result = [];
    return this.result;
  }

  generateRandArrElem(arr) {
    let rand = this.generateRandElementPosition(arr);
    return arr[rand];
  }

  generateRandVal(minVal, maxVal) {
    return Math.floor(minVal + Math.random() * (maxVal + 1 - minVal));
  }
}