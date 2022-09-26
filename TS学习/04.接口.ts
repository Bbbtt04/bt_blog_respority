interface LabelValue {
  label: string
}

function printLable(LableObj: LabelValue) {
  console.log(LableObj.label);
}
let myObj = {size: 10,label:'MYOBJ'}
printLable(myObj)
