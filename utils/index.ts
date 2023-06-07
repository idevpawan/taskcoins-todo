export const formatAddress = (address: string) => {
  if (address.length < 10) {
    return address; // Return the address as is if it is less than 10 characters
  }

  const prefix = address.slice(0, 6);
  const suffix = address.slice(-6);
  return `${prefix}...${suffix}`;
};

export function getTimeAMPM(time: string) {
  const [hours, minutes] = time.split(":");
  let formattedTime;

  if (hours >= "12") {
    formattedTime = `${Number(hours) % 12}:${minutes} PM`;
  } else {
    formattedTime = `${hours}:${minutes} AM`;
  }

  return formattedTime;
}

export function loadTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos") as string) || [];
  return todos;
}

export function timeToEpoch(time: string) {
  const [hours, minutes] = time.split(":");
  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));
  return date.getTime().toString();
}
