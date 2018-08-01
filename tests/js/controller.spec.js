import { sum } from '../../src/js/controller';

describe('Sum', () => {
  let actual;
  let expected;

  it('should return correct sum', () => {
    actual = 3;
    expected = sum(1, 2);
    expect(expected).to.equal(actual);
  });

  it('should not return incorrect sum', () => {
    actual = 4;
    expected = sum(1, 2);
    expect(expected).to.not.equal(actual);
  });
});
