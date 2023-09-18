
export const getNearestIndex = (
  currentPosition,
  sections,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sections[startIndex].ref.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sections[endIndex].ref.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(sections[nextNearest].ref.current.offsetTop - currentPosition);
    var b = Math.abs(sections[nextNearest + 1].ref.current.offsetTop - currentPosition);
    
    if (a < b) {
      return getNearestIndex(
        currentPosition,
        sections,
        startIndex,
        nextNearest
      );
    } else {
      return getNearestIndex(
        currentPosition,
        sections,
        nextNearest,
        endIndex
      );
    }
  }
};
