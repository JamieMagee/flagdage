const flagDays = require('../Flagdage/flag-days');

describe('flag-days tests', () => {
  it('Should not be undefined or null', () => {
    expect(flagDays).not.toBeUndefined();
    expect(flagDays).not.toBeNull();
  });

  it('should have all properties set', () => {
    flagDays.forEach(value => {
      expect(value.date).not.toBeNull();
      expect(value.date).not.toBeUndefined();
      expect(value.name).not.toBeNull();
      expect(value.name).not.toBeUndefined();
      expect(value.emoji).not.toBeNull();
      expect(value.emoji).not.toBeUndefined();
    });
  });

  it('Should not have overlapping days', () => {
    flagDays.forEach(val1 => {
      flagDays.forEach(val2 => {
        if (val1 !== val2) {
          if (typeof val2.date.next === 'function') {
            expect(val1.matches(val2.date.next(1)[0])).not.toBeTruthy();
          } else {
            expect(val1.matches(val2.date)).not.toBeTruthy();
          }
        }
      });
    });
  });
});
