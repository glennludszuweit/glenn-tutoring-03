//Create a Person class that accepts 2 parameters (name and score).

//In this class create a function that will compare the scores of the Person intances.

//if the Person's score is lower than the other return 'this.name score is smaller than this.name'

//if the Person's score is higher than the other return 'this.name score is higher than this.name'

//if they have the same score return 'this.name score is equal to this.name'
class Person {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  compareScore(other) {
    if (this.score < other.score) {
      return `${other.name} score is higher than ${this.name}.`;
    } else if (this.score > other.score) {
      return `${other.name} score is smaller than ${this.name}.`;
    } else {
      return `${other.name} have the same score as ${this.name}.`;
    }
  }
}

let p1 = new Person('Samuel', 24);
let p2 = new Person('Joel', 36);
let p3 = new Person('Lily', 24);

p1.compareScore(p2);

p2.compareScore(p1);

p1.compareScore(p3);
