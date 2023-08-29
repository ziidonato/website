export const dateToString = (date: Date | undefined): string | undefined => {
  return date
    ? date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      })
    : undefined;
};

export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomBoolean = (): boolean => {
  return Math.random() < 0.5;
};
