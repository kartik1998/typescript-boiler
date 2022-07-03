export default class User {
  public readonly id;
  public name: String;
  public age: number;
  constructor(name: String, age: number, id: number) {
    this.age = age;
    this.name = name;
    this.id = id;
  }
}
