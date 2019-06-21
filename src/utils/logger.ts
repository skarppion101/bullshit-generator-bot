export function logMsg(msg: any) {
  // tslint:disable-next-line:no-console
  console.log(msg);
}

export function logError(err: Error) {
  // tslint:disable-next-line:no-console
  console.error(err.message);
  throw err;
}
