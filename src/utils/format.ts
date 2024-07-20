/**
 * Format state val as "1.5K", etc.
 *
 * @param val Value to format
 */
export function formatStateVal(val: number) {
  if (val < 1000) {
    return val;
  } else if (val >= 1000 && val < 1_000_000) {
    return (val / 1000).toFixed() + "K";
  } else if (val >= 1_000_000) {
    return (val / 1_000_000).toFixed() + "M";
  }
}
