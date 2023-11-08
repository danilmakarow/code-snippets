// Empty vocabulary of actual object
class IPerson {
  getName() {}
}

class Villager extends IPerson {
  getName() {
    return "Village Person";
  }
}

class CityPerson extends IPerson {
  getName() {
    return "City Person";
  }
}

const PersonType = {
  Rural: "Rural",
  Urban: "Urban",
};

/**
 * Implementation of Factory - Used to create objects.
 */
class PersonFactory {
  getPerson(type) {
    switch (type) {
      case PersonType.Rural:
        return new Villager();
      case PersonType.Urban:
        return new CityPerson();
      default:
        throw new Error("Unsupported person type");
    }
  }
}

/* In the above code you can see the creation of one interface called IPerson 
and two implementations called Villager and CityPerson. Based on the type passed 
into the PersonFactory object, we are returning the original concrete object as the 
interface IPerson.

A factory method is just an addition to PersonFactory class. It creates the 
object of the class through interfaces but on the other hand, it also lets the subclass 
decide which class is instantiated.
*/


