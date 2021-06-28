export default (number) => {
  const firstNumber = number.substring(0, 1);
  if (firstNumber == "0") {
    number = "62" + number.substring(1);
  } else if (firstNumber == "+") {
    number = number.substring(1);
  }
  return number + "@s.whatsapp.net";
};
