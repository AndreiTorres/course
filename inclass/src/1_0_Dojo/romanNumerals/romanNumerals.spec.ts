import { romanNumbers } from './romanNumerals'

describe('Testing roman numerals conversion', () => {
  it('should return empty string if 0', () => {
    expect(romanNumbers(0)).toBe('')
  })

  it('should return I if 1', () => {
    expect(romanNumbers(1)).toBe('I');
  })

  it('should return V if 5', () => {
    expect(romanNumbers(5)).toBe('V');
  })

  it('should return X if 10', () => {
    expect(romanNumbers(10)).toBe('X');
  })

  it('should return L if 50', () => {
    expect(romanNumbers(50)).toBe('L');
  })

  it('should return C if 100', () => {
    expect(romanNumbers(100)).toBe('C');
  })

  it('should return D if 500', () => {
    expect(romanNumbers(500)).toBe('D');
  })

  it('should return CD if 400', () => {
    expect(romanNumbers(400)).toBe('CD');
  })

  it('should return M if 1000', () => {
    expect(romanNumbers(1000)).toBe('M');
  })

  it('should return CM if 900', () => {
    expect(romanNumbers(900)).toBe('CM');
  })

  it('should return IV if 4', () => {
    expect(romanNumbers(4)).toBe('IV');
  })

  it('should return IX if 9', () => {
    expect(romanNumbers(9)).toBe('IX');
  })

  it('should return XL if 40', () => {
    expect(romanNumbers(40)).toBe('XL');
  })

  it('should return XC if 90', () => {
    expect(romanNumbers(90)).toBe('XC');
  })

  it ('should return VIII if 8', () => {
    expect(romanNumbers(8)).toBe('VIII');
  })

  it('should return XIV if 14', () => {
    expect(romanNumbers(14)).toBe('XIV');
  })

  it('should return LXXII if 72', () => {
    expect(romanNumbers(72)).toBe('LXXII');
  })

  it('should return XCIX if 99', () => {
    expect(romanNumbers(99)).toBe('XCIX')
  })

  it('should return CXXII if 122', () => {
    expect(romanNumbers(122)).toBe('CXXII');
  })

  it('should return CCLXXX if 280', () => {
    expect(romanNumbers(280)).toBe('CCLXXX');
  })
})
