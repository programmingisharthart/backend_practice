console.log(__dirname)

const timeInterval = setInterval(() => {
  console.log(__filename)
}, 1000);

setTimeout(() => {
  clearInterval(timeInterval)
}, 5000);