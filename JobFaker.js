class JobFaker {
  constructor() {
    this.jobTitles = [
      'Software Engineer', 'Data Analyst', 'Product Manager', 'UX Designer', 
      'System Administrator', 'IT Consultant', 'Teacher', 'Full Stack Developer', 
      'DevOps Engineer', 'Quality Assurance Engineer', 'Business Analyst', 
      'Project Manager', 'Technical Lead', 'Data Scientist', 'Marketing Specialist'
    ];

    this.companyNames = [
      'Tech Solutions', 'Global Corp', 'Innovatech', 'DevWorks', 
      'Alpha Systems', 'BetaSoft', 'NextGen Labs', 'Cyberdyne Systems',
      'FutureTech', 'Quantum Dynamics', 'BlueWave Inc', 'Nexus Group'
    ];

    this.departments = [
      'Engineering', 'Marketing', 'Sales', 'Human Resources', 
      'Finance', 'Customer Support', 'Research and Development', 'Operations'
    ];

    this.seniorityLevels = [
      'Intern', 'Junior', 'Mid-level', 'Senior', 'Lead', 'Manager', 'Director', 'VP'
    ];
  }

  _randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  generateJobTitle(includeSeniority = false) {
    const title = this._randomFromArray(this.jobTitles);
    if (includeSeniority) {
      const seniority = this._randomFromArray(this.seniorityLevels);
      return `${seniority} ${title}`;
    }
    return title;
  }

  generateCompanyName() {
    return this._randomFromArray(this.companyNames);
  }

  generateDepartment() {
    return this._randomFromArray(this.departments);
  }

  generateSalary(min = 30000, max = 150000) {
    // Generates salary in USD, rounded to nearest 100
    const salary = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.round(salary / 100) * 100;
  }

  generateJobDescription() {
    const descriptions = [
      'Responsible for designing and implementing software solutions.',
      'Analyze data to provide actionable insights for business decisions.',
      'Lead product development from concept to launch.',
      'Design user-friendly interfaces and improve user experience.',
      'Maintain and monitor system performance and security.',
      'Consult with clients to identify technology needs and solutions.',
      'Teach and mentor students in technical subjects.',
      'Collaborate with cross-functional teams to deliver projects.'
    ];
    return this._randomFromArray(descriptions);
  }

  generateFullJobInfo(includeSeniority = false) {
    return {
      title: this.generateJobTitle(includeSeniority),
      company: this.generateCompanyName(),
      department: this.generateDepartment(),
      salaryUSD: this.generateSalary(),
      description: this.generateJobDescription()
    };
  }
}

export default JobFaker;
