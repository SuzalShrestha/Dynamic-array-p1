class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length=0;
    this.capacity=defaultSize;
    this.data=new Array(defaultSize);

  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    this.length++;
    let arr=this.data;
    this.data=[val,...arr];
    
  }

}


module.exports = DynamicArray;