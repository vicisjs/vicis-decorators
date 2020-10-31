/**
 * @name argsAsArray
 * @description Mark property or getter as serializable.
 * @param {Array.<any>|any=} firstArgument
 * @param {...any} restArguments
 * @returns {Function}
 */
export function argsAsArray(firstArgument, ...restArguments) {
  let args;
  if (firstArgument !== undefined) {
    if (Array.isArray(firstArgument)) {
      args = [...firstArgument];
    } else {
      args = [firstArgument];
    }
  } else {
    args = [];
  }
  if (restArguments.length) {
    args = args.concat(restArguments);
  }
  return args;
}
