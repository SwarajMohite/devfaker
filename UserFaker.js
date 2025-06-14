import { randomUUID } from 'crypto';

class UserFaker {
  constructor(prefix = 'MyApp') {
    this.id = randomUUID();
    this.prefix = prefix;
  }

  generateUsername(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyz@#$_.<>ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let username = '';
    for (let i = 0; i < length; i++) {
      username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return username;
  }

  generateNumber(length = 10) {
    const chars = '0123456789';
    let number = '';
    for (let i = 0; i < length; i++) {
      number += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return number;
  }

  generateEmail(length = 10) {
    const providers = [
      "mail", "huhoo", "shotmail", "inlook", "example",
      "test", "fake", "email", "devmail", "tempmail",
      "myapp", "mock", "noreply", "demo", "fakemail", "nullbox"
    ];
    const tlds = [
      ".com", ".net", ".org", ".dev", ".co", ".io", ".app", ".ai",
      ".xyz", ".site", ".tech", ".online", ".cloud", ".studio",
      ".digital", ".space", ".tools", ".systems", ".email", ".pro",
      ".biz", ".world", ".live", ".company", ".shop", ".solutions"
    ];

    const username = this.generateUsername(length) + this.generateNumber(2);
    const domain = providers[Math.floor(Math.random() * providers.length)] + tlds[Math.floor(Math.random() * tlds.length)];
    return `${username}@${domain}`;
  }

  generatePassword(length = 12) {
    const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  generatePhoneNumber(countryCode = '+91') {
    const num = this.generateNumber(10);
    return `${countryCode}${num}`;
  }
}

export default UserFaker;
