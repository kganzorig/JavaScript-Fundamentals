const executeAfterDelay = (delay, callbackFunction) => {
    setTimeout(callbackFunction, delay * 1000);
}

const printHello = () => {
    console.log('Hello!');
  }
  
  executeAfterDelay(5, printHello);