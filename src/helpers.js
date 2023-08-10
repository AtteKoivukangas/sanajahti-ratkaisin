export const calculateExecutionTime = (startTime, endTime) => {
  return ((endTime - startTime) / 1000).toFixed(3);
};

export const withTimeMeasurement = async (cb) => {
  const startTime = window.performance.now();
  const result = await cb();
  const endTime = window.performance.now();

  const executionTime = calculateExecutionTime(startTime, endTime);

  return [result, executionTime];
};
