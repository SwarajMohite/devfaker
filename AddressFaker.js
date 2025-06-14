class AddressFaker {
  constructor() {
    this.streets = ['Main St', 'Broadway', 'Maple Ave', 'Elm St', 'Sunset Blvd', '2nd St', 'Pine St', 'Cedar Ave'];
    this.cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Nagpur'];
    this.states = ['California', 'Texas', 'New York', 'Maharashtra', 'Karnataka', 'Illinois', 'Gujarat', 'Tamil Nadu'];
    this.countries = ['USA', 'India', 'Canada', 'UK', 'Australia', 'Germany', 'France'];
  }

  generateStreetAddress() {
    const number = Math.floor(Math.random() * 9999) + 1;
    const street = this.streets[Math.floor(Math.random() * this.streets.length)];
    return `${number} ${street}`;
  }

  generateCity() {
    return this.cities[Math.floor(Math.random() * this.cities.length)];
  }

  generateState() {
    return this.states[Math.floor(Math.random() * this.states.length)];
  }

  generateZipCode() {
    return ('' + Math.floor(10000 + Math.random() * 90000));
  }

  generateCountry() {
    return this.countries[Math.floor(Math.random() * this.countries.length)];
  }

  generateFullAddress() {
    return `${this.generateStreetAddress()}, ${this.generateCity()}, ${this.generateState()} - ${this.generateZipCode()}, ${this.generateCountry()}`;
  }
}

export default AddressFaker;
