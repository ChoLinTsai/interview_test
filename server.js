const reverse = input => {
  let tempAry = []

  const loopObj = obj => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        tempAry.push(key)
        loopObj(obj[key])
      }

      if (typeof obj[key] === 'string') {
        tempAry.push(key)
        tempAry.push(obj[key])
      }
    })
  }

  loopObj(input)

  return tempAry.reduce((res, key, index) => {
    if (index === 0) {
      return `${key}`
    }
    return { [key]: res }
  }, {})
}

module.exports = reverse
