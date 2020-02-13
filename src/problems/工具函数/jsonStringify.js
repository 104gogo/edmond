function jsonStringify(obj) {
  let type = typeof obj;
  if (type !== "object") {
      if (/string|undefined|function/.test(type)) {
          obj = '"' + obj + '"';
      }
      return String(obj);
  } else {
      let json = []
      let arr = Array.isArray(obj)
      for (let k in obj) {
          let v = obj[k];
          let type = typeof v;
          if (/string|undefined|function/.test(type)) {
              v = '"' + v + '"';
          } else if (type === "object") {
              v = jsonStringify(v);
          }
          json.push((arr ? "" : '"' + k + '":') + String(v));
      }
      return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
  }
}

jsonStringify({x : [{a: 1}]})