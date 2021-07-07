// Code your solution here
function findMatching(drivers, name) {
  let matches = drivers.filter(n => {
    return n.toLowerCase() === name.toLowerCase();
  })
  return matches;
}

function fuzzyMatch(drivers, letters) {
  let matches = drivers.filter(n => {
    return n.slice(0, letters.length) === letters;
  })
  return matches;
}

function matchName(drivers, name) {
  let matches = drivers.filter(n => {
    return n.name === name;
  })
  return matches;
}
