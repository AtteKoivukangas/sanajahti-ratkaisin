import { calculateExecutionTime, withTimeMeasurement } from './helpers';

describe('calculateExecutionTime', () => {
  it('calculates execution time correctly', () => {
    const startTime = 1000;
    const endTime = 2000;

    const executionTime = calculateExecutionTime(startTime, endTime);
    expect(executionTime).toEqual('1.000');
  });

  it('returns 0 for equal start and end times', () => {
    const startTime = 1000;
    const endTime = 1000;

    const executionTime = calculateExecutionTime(startTime, endTime);
    expect(executionTime).toEqual('0.000');
  });

  it('calculates execution time with small values', () => {
    const startTime = 1;
    const endTime = 2;

    const executionTime = calculateExecutionTime(startTime, endTime);
    expect(executionTime).toEqual('0.001');
  });

  it('calculates execution time with large values', () => {
    const startTime = 1e9;
    const endTime = 2e9;

    const executionTime = calculateExecutionTime(startTime, endTime);
    expect(executionTime).toEqual('1000000.000');
  });
});

describe('withTimeMeasurement', () => {
  it('measures execution time for a callback', async () => {
    const fakeCallback = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return 'done';
    };

    const [result, executionTime] = await withTimeMeasurement(fakeCallback);

    expect(result).toEqual('done');
    expect(parseFloat(executionTime)).toBeGreaterThanOrEqual(0.1);
    expect(parseFloat(executionTime)).toBeLessThan(0.15);
  });
});
