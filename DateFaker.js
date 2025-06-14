class DateFaker {
  generatePastDate(daysBack = 365) {
    const now = new Date();
    const past = new Date(now.getTime() - Math.random() * daysBack * 24 * 60 * 60 * 1000);
    return past.toISOString();
  }

  generateFutureDate(daysAhead = 365) {
    const now = new Date();
    const future = new Date(now.getTime() + Math.random() * daysAhead * 24 * 60 * 60 * 1000);
    return future.toISOString();
  }

  generateDOB(minAge = 18, maxAge = 65) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - (Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge);
    const month = ('0' + (Math.floor(Math.random() * 12) + 1)).slice(-2);
    const day = ('0' + (Math.floor(Math.random() * 28) + 1)).slice(-2);
    return `${birthYear}-${month}-${day}`;
  }

  generateAge(minAge = 18, maxAge = 65) {
    return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  }

  generateFormattedDate(format = 'YYYY-MM-DD') {
    const d = new Date();
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);

    if (format === 'YYYY-MM-DD') return `${year}-${month}-${day}`;
    if (format === 'DD/MM/YYYY') return `${day}/${month}/${year}`;
    if (format === 'MM-DD-YYYY') return `${month}-${day}-${year}`;
    if (format === 'DD-MM-YYYY') return `${day}-${month}-${year}`;
    if (format === 'ISO') return d.toISOString().split('T')[0];
    if (format === 'RFC') return d.toUTCString();
    if (format === 'UNIX') return Math.floor(d.getTime() / 1000);

    return d.toISOString();
  }

  generateTime(format = 'HH:mm:ss') {
    const d = new Date();
    const hours = ('0' + d.getHours()).slice(-2);
    const minutes = ('0' + d.getMinutes()).slice(-2);
    const seconds = ('0' + d.getSeconds()).slice(-2);

    if (format === 'HH:mm:ss') return `${hours}:${minutes}:${seconds}`;
    if (format === 'HH:mm') return `${hours}:${minutes}`;
    if (format === 'HH:mm:ss.SSS') {
      const ms = ('00' + d.getMilliseconds()).slice(-3);
      return `${hours}:${minutes}:${seconds}.${ms}`;
    }

    return `${hours}:${minutes}:${seconds}`;
  }

  generateDuration(minSeconds = 1, maxSeconds = 3600) {
    return Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
  }
}

export default DateFaker;
