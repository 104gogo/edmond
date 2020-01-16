function _setinterval(callback,time){
  let timer = {}
  function run(){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      callback()
      run()
    },time)
  }
  run()
  return {
    clear(){
      clearTimeout(timer)
    }
  }
}

function _clearInterval(timer){
  timer.clear()
}

let callback = ()=>{
  console.count()
}

let timer = _setinterval(callback,2000)

setTimeout(function(){
  _clearInterval(timer)
},2000*10)