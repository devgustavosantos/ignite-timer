export const TASK = {
  nameLength: {
    min: 1,
    max: 100,
  },
  desiredTime: {
    multiple: 5,
    min: 5,
    max: 60,
  },
} as const;
