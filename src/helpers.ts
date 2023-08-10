export const calculateExecutionTime = (startTime: number, endTime: number) => {
  return ((endTime - startTime) / 1000).toFixed(3);
};

export const withTimeMeasurement = async <T>(cb: () => Promise<T>) => {
  const startTime = window.performance.now();
  const result = await cb();
  const endTime = window.performance.now();

  const executionTime = calculateExecutionTime(startTime, endTime);

  return [result, executionTime];
};
