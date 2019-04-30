import {logError, logSentMsg} from "../src/utils/logger";

function dataParam(param: IData) {
  return param;
}

function promise() {
  subPromise2()
    .then(logSentMsg)
    .catch(logError);

  return subPromise1()
    .then(dataParam)
    .catch(logError);
}

function subPromise1(): Promise<IData> {
  return new Promise((resolve, reject) => {
    resolve({
      age: 123,
      name: "sds",
    });
    reject("");
  });
}

function subPromise2(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    resolve("123");
    reject(new Error());
  });
}

interface IData {
  name: string;
  age: number;
}

describe("Example test", () => {
  it("should pass", () => {
    return promise()
      .then((data) => {
        expect(data).toBe(String);
      });
  });
});
