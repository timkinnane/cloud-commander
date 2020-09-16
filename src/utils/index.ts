/** List the methods on an object. */
export const getMethods = (obj: Record<string, any>): string[] => {
  const methods = []
  for (const key in obj) {
    if (
      typeof obj[key] === 'function' &&
      /^[a-z]/.test(key) &&
      key !== 'constructor'
    ) methods.push(key)
  }
  return methods
}
