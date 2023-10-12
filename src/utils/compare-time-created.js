export const compareTimeCreated = (timeCreated) => {
  console.log(timeCreated);
  const createdDate = new Date(timeCreated);
  const dateNow = new Date();
  const timeDifference = createdDate - dateNow;

  //count
  const second = Math.floor(timeDifference / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);

  console.log(second);
  console.log(minute);
  console.log(hour);
  console.log(day);
  if (day < 0) {
    return Math.abs(day) + " " + "hari";
  } else if (hour < 0) {
    return Math.abs(hour) + " " + "jam";
  } else if (minute < 0) {
    return Math.abs(minute) + " " + "menit";
  } else if (second < 0) {
    return Math.abs(second) + " " + "detik";
  } else {
    return "Baru saja";
  }
};
