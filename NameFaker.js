class NameFaker {
  constructor() {
    this.firstNamesMale = [
      'John', 'Alex', 'Chris', 'Raj', 'Swaraj', 'Akshay', 'David', 'Michael', 'James', 'Robert'
    ];
    this.firstNamesFemale = [
      'Jane', 'Emily', 'Katie', 'Priya', 'Harshada', 'Sophia', 'Olivia', 'Emma', 'Isabella', 'Mia'
    ];
    this.lastNames = [
      'Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Davis', 'Patel', 'Sharma', 'Mohite', 'Gupta', 'Kumar'
    ];
    this.middleNames = [
      'Lee', 'Ann', 'James', 'Grace', 'Ray', 'Marie', 'Paul', 'Lynn', 'Jane', 'John'
    ];
    this.titlesMale = ['Mr.', 'Dr.', 'Prof.'];
    this.titlesFemale = ['Ms.', 'Mrs.', 'Dr.', 'Prof.'];
  }

  _randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  generateFirstName(gender = 'any') {
    if (gender === 'male') {
      return this._randomFromArray(this.firstNamesMale);
    } else if (gender === 'female') {
      return this._randomFromArray(this.firstNamesFemale);
    }
    // gender = 'any'
    return this._randomFromArray([...this.firstNamesMale, ...this.firstNamesFemale]);
  }

  generateMiddleName(include = false) {
    if (!include) return '';
    return this._randomFromArray(this.middleNames);
  }

  generateLastName() {
    return this._randomFromArray(this.lastNames);
  }

  generateFullName(options = {}) {
    // options: { gender: 'male'|'female'|'any', includeMiddleName: boolean, includeTitle: boolean }
    const gender = options.gender || 'any';
    const includeMiddle = options.includeMiddleName || false;
    const includeTitle = options.includeTitle || false;

    const firstName = this.generateFirstName(gender);
    const middleName = this.generateMiddleName(includeMiddle);
    const lastName = this.generateLastName();

    let fullName = firstName;
    if (middleName) fullName += ` ${middleName}`;
    fullName += ` ${lastName}`;

    if (includeTitle) {
      const title = gender === 'male' ? this._randomFromArray(this.titlesMale) :
                    gender === 'female' ? this._randomFromArray(this.titlesFemale) :
                    this._randomFromArray([...this.titlesMale, ...this.titlesFemale]);
      fullName = `${title} ${fullName}`;
    }

    return fullName.trim();
  }

  generateInitials(includeMiddle = false) {
    const firstName = this.generateFirstName();
    const middleName = includeMiddle ? this.generateMiddleName(true) : '';
    const lastName = this.generateLastName();

    let initials = firstName.charAt(0).toUpperCase();
    if (middleName) initials += middleName.charAt(0).toUpperCase();
    initials += lastName.charAt(0).toUpperCase();

    return initials;
  }
}

export default NameFaker;
