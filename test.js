import DevFaker from './index.js'

const faker = new DevFaker('MyApp');

console.log(faker.user.generateEmail());
console.log(faker.name.generateFullName());
console.log(faker.address.generateFullAddress());
console.log(faker.date.generateDOB());
console.log(faker.tech.generateHexColor());
console.log(faker.text.generateSentence());
console.log(faker.job.generateJobTitle());
console.log(faker.user.generatePhoneNumber('+1'));