import { sum } from '../../src/js/controller';
import { expect } from 'chai';

describe('Sum', () => {
  let actual;
  let expected;

  it('should return correct sum', () => {
    actual = 3;
    expected = sum(1, 2);
    expect(expected).to.equal(actual);
  });
});
