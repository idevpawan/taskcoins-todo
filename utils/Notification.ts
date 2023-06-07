export function scheduleNotification(todo: { text: string }) {
  const { text } = todo;

  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }

  if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        scheduleNotification(todo);
      }
    });
    return;
  }

  const notification = new Notification("TaskCoins Reminder", {
    body: text,
    icon: "",
  });

  setTimeout(() => {
    notification.close();
  }, 10000);
}
