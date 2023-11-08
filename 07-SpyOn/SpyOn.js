function spyOn(fn) {

  let count = 0
  let memoryCallWith = []
  let memoryReturned = []

  const spy = (...arg)=>{
    memoryCallWith = [...new Set([...memoryCallWith, ...arg])]
    count += 1;
    const value = fn(...arg);
    memoryReturned.push(value)
    return  value
  }

  spy.getCallCount = ()=>{
    return count
  }
  spy.wasCalledWith = (val)=>{
    return memoryCallWith.includes(val)
  }
  spy.returned = (val)=>{
    return memoryReturned.includes(val)
  }
  return spy
}



module.exports = spyOn;
