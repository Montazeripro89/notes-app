export const formatDate = (
  timestamp: number
): string => {

  return new Intl.DateTimeFormat(
    "fa-IR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(
    new Date(timestamp)
  );
};


export const truncateText = (
  text: string,
  length: number = 100
): string => {

  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
};


export const isEmpty = (
  value: string
): boolean => {

  return value.trim().length === 0;
};