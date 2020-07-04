import moment from 'moment';

export const getTimestamp: (...args: Array<string>) => Date = (
  ...args: Array<string>
) => {
  const [value, unit] = args;
  return moment()
    .subtract(value, unit as moment.unitOfTime.DurationConstructor)
    .toDate();
};
