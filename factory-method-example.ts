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
