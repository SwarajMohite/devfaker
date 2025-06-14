class TechFaker {
  generateHexColor() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  }

  generateRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  generateHSLColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return `hsl(${h},${s}%,${l}%)`;
  }

  generateURL() {
    const protocols = ['http', 'https'];
    const domains = ['example.com', 'myapp.dev', 'mock.dev', 'fakesite.com', 'test.org'];
    const paths = ['', 'about', 'contact', 'products', 'services', 'blog', 'login', 'signup'];
    const protocol = protocols[Math.floor(Math.random() * protocols.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const path = paths[Math.floor(Math.random() * paths.length)];
    return `${protocol}://${domain}${path ? '/' + path : ''}`;
  }

  generateMACAddress() {
    const hexDigits = "0123456789ABCDEF";
    let mac = "";
    for (let i = 0; i < 6; i++) {
      mac += hexDigits.charAt(Math.floor(Math.random() * 16));
      mac += hexDigits.charAt(Math.floor(Math.random() * 16));
      if (i !== 5) mac += ":";
    }
    return mac;
  }

  generateIPv4() {
    return Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.');
  }
}

export default TechFaker;
