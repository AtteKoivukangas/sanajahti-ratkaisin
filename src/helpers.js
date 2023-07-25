export const calculateExecutionTime = (startTime, endTime) => {
  return ((endTime - startTime) / 1000).toFixed(3);
};
