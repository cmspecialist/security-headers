const urls = require("../allow.json");

it('Can\'t contain subdomains (More than 3 slashes)', () => {
  urls.forEach(url => {
    try {
      expect((url.match(/\//g) || []).length).toBeLessThan(3);
    } catch {
      throw new Error(`URL: ${url}`);
    }
  });
});

it('Can\'t contain http or https', () => {
  urls.forEach(url => {
    expect(url).not.toMatch(/https:|http:/);
  });
});