function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

function opDebounce(func, timeout = 300,add = false){
    if (add){
        let timer;
        return (...args) => {
          if (!timer) {
            func.apply(this, args);
          }
          clearTimeout(timer);
          timer = setTimeout(() => {
            timer = undefined;
          }, timeout);
        };
    }else{
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };  }
}
