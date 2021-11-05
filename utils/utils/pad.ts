export function pad64(id: string | number): string {
  return (
    "0000000000000000000000000000000000000000000000000000000000000000" + id
  ).slice(-64);
}
