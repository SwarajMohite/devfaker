# devfaker

[![npm version](https://img.shields.io/npm/v/devfaker)](https://www.npmjs.com/package/devfaker)  
[![License](https://img.shields.io/npm/l/devfaker)](LICENSE)

`devfaker` is a comprehensive JavaScript/Node.js library to generate realistic fake data for development, testing, and prototyping. It covers everything from usernames, emails, phone numbers, addresses, job titles, dates, colors, URLs, IP/MAC addresses, to random text and emojis.

---

## Features

- Generate random usernames, emails, passwords, phone numbers with country codes
- Generate realistic names (first, last, full)
- Generate full postal addresses (street, city, state, zip, country)
- Generate job titles and company names
- Generate dates (past, future, DOB) and formatted date/time strings
- Generate colors (hex, RGB, HSL)
- Generate URLs, MAC and IPv4 addresses
- Generate pronounceable words, sentences, paragraphs
- Generate random emojis from a curated list
- Uses modern JavaScript with ES Modules support

---

## Installation

```bash
npm install devfaker
````

or

```bash
yarn add devfaker
```

---

## Usage

```javascript
import DevFaker from 'devfaker';

const faker = new DevFaker('MyApp');

console.log(faker.generateUsername());        // e.g., 'kBc<AQdSk_'
console.log(faker.generateEmail());           // e.g., 'kBc12@mock.dev'
console.log(faker.generatePhoneNumber());     // e.g., '+911234567890'
console.log(faker.generateFullName());        // e.g., 'Priya Gupta'
console.log(faker.generateAddress());         // e.g., '123 Maple Ave, Mumbai, Maharashtra, 40001, India'
console.log(faker.generateJobTitle());        // e.g., 'Data Analyst'
console.log(faker.generateCompanyName());     // e.g., 'Innovatech'
console.log(faker.generateDOB());              // e.g., '1990-05-14'
console.log(faker.generateFormattedDate());   // e.g., '2025-06-14'
console.log(faker.generateHexColor());        // e.g., '#a1b2c3'
console.log(faker.generateIPv4());             // e.g., '192.168.1.1'
console.log(faker.generateSentence());        // e.g., 'Lonetuzo gepamu sevitov pixa...'
console.log(faker.generateEmoji());           // e.g., '🚀'
```

---

## API Reference

### `generateUsername(length = 10)`

Generates a random username with letters and special characters.

### `generateNumber(length = 10)`

Generates a numeric string of given length.

### `generateEmail(length = 10)`

Generates a random email with username and domain from common providers.

### `generatePassword(length = 12)`

Generates a random password including letters, digits, and symbols.

### `generatePhoneNumber(countryCode = '+91')`

Generates a phone number with country code.

### `generateFirstName()`

Returns a random first name.

### `generateLastName()`

Returns a random last name.

### `generateFullName()`

Returns a full name (first + last).

### `generateStreetAddress()`

Generates a random street address.

### `generateCity()`

Generates a random city.

### `generateState()`

Generates a random state.

### `generateZipCode()`

Generates a 5-digit zip code.

### `generateCountry()`

Generates a country name.

### `generateAddress()`

Generates full address string.

### `generateJobTitle()`

Generates a job title.

### `generateCompanyName()`

Generates a company name.

### `generatePastDate(daysBack = 365)`

Returns an ISO date string in the past within `daysBack`.

### `generateFutureDate(daysAhead = 365)`

Returns an ISO date string in the future within `daysAhead`.

### `generateDOB(minAge = 18, maxAge = 65)`

Returns a date of birth string for an age between `minAge` and `maxAge`.

### `generateAge(minAge = 18, maxAge = 65)`

Returns an age between `minAge` and `maxAge`.

### `generateFormattedDate(format = 'YYYY-MM-DD')`

Returns the current date formatted as specified. Supports:

* `YYYY-MM-DD` (default)
* `DD/MM/YYYY`
* `MM-DD-YYYY`
* `DD-MM-YYYY`
* `ISO`
* `RFC`
* `UNIX` (timestamp)

### `generateTime(format = 'HH:mm:ss')`

Returns current time formatted as specified. Supports:

* `HH:mm:ss` (default)
* `HH:mm`
* `HH:mm:ss.SSS`

### `generateDuration(minSeconds = 1, maxSeconds = 3600)`

Returns a random duration in seconds within given range.

### `generateHexColor()`

Returns a random hex color string.

### `generateRGBColor()`

Returns a random RGB color string.

### `generateHSLColor()`

Returns a random HSL color string.

### `generateURL()`

Generates a random URL.

### `generateMACAddress()`

Generates a random MAC address.

### `generateIPv4()`

Generates a random IPv4 address.

### `generateWord(length = 5)`

Generates a random pronounceable word.

### `generateSentence(wordCount = 8)`

Generates a random sentence.

### `generateParagraph(sentenceCount = 3)`

Generates a random paragraph.

### `generateEmoji()`

Generates a random emoji.

---

## License

MIT License © 2025 [@Swaraj Mohite](https://github.com/SwarajMohite/)

---

## Author

Swaraj Mohite — [Mail](swarajmohite16@gmail.com)


---
