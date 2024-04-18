export const GetTime = (timeString: string) => {
  const now = new Date(timeString);
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
