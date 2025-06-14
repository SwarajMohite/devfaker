import UserFaker from './UserFaker.js';
import NameFaker from './NameFaker.js';
import AddressFaker from './AddressFaker.js';
import DateFaker from './DateFaker.js';
import TechFaker from './TechFaker.js';
import TextFaker from './TextFaker.js';
import JobFaker from './JobFaker.js';

class DevFaker {
  constructor(prefix = 'MyApp') {
    this.user = new UserFaker(prefix);
    this.name = new NameFaker();
    this.address = new AddressFaker();
    this.date = new DateFaker();
    this.tech = new TechFaker();
    this.text = new TextFaker();
    this.job = new JobFaker();
  }
  generateUserProfile() {
  return {
    id: this.user.generateId(),             
    username: this.user.generateUsername(), 
    email: this.user.generateEmail(),       
    fullName: this.name.generateFullName(), 
    phone: this.user.generatePhoneNumber(), 
    address: this.address.generateAddress(),
    jobTitle: this.job.generateJobTitle(),  
    company: this.job.generateCompanyName(),
    dob: this.date.generateDOB(),            
  };
}

}

export default DevFaker;
