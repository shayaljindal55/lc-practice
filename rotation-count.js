const shiftedRotationalDiff = (first, second) => {
  // note: rotatedArr.split('') could not be used here as split doesn't work with unicode characters sybmols and Emojis
  const rotatedArr = [...second];

  for (let i = 0; i < rotatedArr.length; i++) {
    //  if 'first' and the joined 'rotataedArr' matches, return i
    if (first === rotatedArr.toString()) return i;

    // else rotate 'rotatedArr' by pushing the
    // first element of 'rotatedArr' to the end of it
    rotatedArr.push(rotatedArr.shift());
  }

  // if first and second strings does not match,
  // return -1 to indicate invalid inputs
  return -1;
};
