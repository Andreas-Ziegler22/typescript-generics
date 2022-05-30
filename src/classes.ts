// T = generic

class Person<T> {
  constructor(private name: T) {}
  setName(name: T): void {
    this.name = name;
  }
}

const daniel = new Person("Daniel");
daniel.setName("Daniel Da Silva");

class List<T> {
  private list: T[] = [];
  getFromList(index: number): T | null {
    const len = this.list.length;
    if (len === 0) return null;
    if (index > len || index < 0) return null;
    return this.list[index];
  }
  removeFromList(index: number): T | null {
    const element = this.getFromList(index);
    if (element !== null) {
      this.list.splice(index, 1);
      return element;
    }
    return null;
  }

  addToList(element: T): this {
    this.list.push(element);
    return this;
  }
}

class Animal<T> {
  constructor(private name: T) {}
  setName(name: T): void {
    this.name = name;
  }
}

const listPerson = new List<Person<string>>();
listPerson
  .addToList(daniel)
  .addToList(new Person("Maria"))
  .addToList(new Person("Jonas"));
//.addToList(new Animal("Loki"));

const listAnimal = new List<Animal<string>>();
listAnimal.addToList(new Animal("toto")).addToList(new Animal("Mingau"));

console.log(listPerson);
console.log(listPerson.removeFromList(1));
console.log(listPerson);
console.log(listAnimal);
console.log(listAnimal.removeFromList(0));
console.log(listAnimal);
