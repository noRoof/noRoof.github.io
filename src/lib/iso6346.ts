// Real ISO 6346 container numbers: owner code + category "U" + 6-digit serial + check digit.
const letterValues: Record<string, number> = (() => {
  const values: Record<string, number> = {};
  let v = 10;
  for (const ch of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    if (v % 11 === 0) v++; // multiples of 11 are skipped
    values[ch] = v++;
  }
  return values;
})();

export function containerCode(owner: string, serial: string): string {
  const prefix = `${owner.toUpperCase()}U`;
  const chars = (prefix + serial).split('');
  const sum = chars.reduce((acc, ch, i) => {
    const value = /\d/.test(ch) ? Number(ch) : letterValues[ch];
    return acc + value * 2 ** i;
  }, 0);
  const check = (sum % 11) % 10;
  return `${prefix} ${serial} ${check}`;
}
