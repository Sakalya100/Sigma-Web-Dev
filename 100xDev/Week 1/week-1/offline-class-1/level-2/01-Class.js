
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }

  static myType(){ // Stattic methods can be called without instantiating and directly on the class itself
    console.log("Animal");
  }
}


