type Action<T = string> = {
  action: T;
};

const step1: Action<number> = {
  action: 0,
};
step1.action = 20;

const step2: Action<boolean> = {
  action: true,
};
step2.action = false;

console.log(step1);
console.log(step2);

const step3: Action = {
  action: "qualquer valor",
};

console.log(step3);

type NumberOrString = number | string;
interface ActionI<T extends NumberOrString = string, U = number> {
  action: T;
  timeStamp: U;
}

const step4: ActionI = {
  action: "delete",
  timeStamp: 123,
};

const historyActions: Array<ActionI> = [];

const addAction = <T extends ActionI & { id: number }>(obj: T) => {
  console.log("addAction");
  console.log(obj);
  const result = {
    ...obj,
    _id: obj.id + "-" + obj.timeStamp,
  };
  historyActions.push(result);
};

addAction({
  action: "delete",
  timeStamp: 123456789,
  teste: "ola",
  id: 123,
});
console.log(historyActions);

export default "teste";
