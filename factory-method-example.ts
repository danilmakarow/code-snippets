// Without the Factory Method pattern

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  start() {
    console.log(`Starting the ${this.make} ${this.model}`);
  }
}

class Truck {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  start() {
    console.log(`Starting the ${this.make} ${this.model}`);
  }
}

const car = new Car("Toyota", "Camry");
car.start();

const truck = new Truck("Ford", "F-150");
truck.start();

/*
The problem with this approach is that you need 
to know the specific class (Car or Truck) when creating objects. 
If you want to introduce more types of vehicles, you'd have to modify the code and potentially 
add more constructors, making it less flexible and harder to maintain.
*/

// Using the Factory Method pattern

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  start() {
    console.log(`Starting the ${this.make} ${this.model}`);
  }
}

class CarFactory {
  createVehicle(make, model) {
    return new Vehicle(make, model);
  }
}

class TruckFactory {
  createVehicle(make, model) {
    return new Vehicle(make, model);
  }
}

const carFactory = new CarFactory();
const truckFactory = new TruckFactory();

const car = carFactory.createVehicle("Toyota", "Camry");
car.start();

const truck = truckFactory.createVehicle("Ford", "F-150");
truck.start();

/* 
In this refactored code, we've introduced the Factory Method pattern. 
Now, you can create different types of vehicles by using 
the appropriate factory (CarFactory or TruckFactory). This makes it easy to 
add new vehicle types without modifying the existing code, providing a more flexible and maintainable solution.
*/



