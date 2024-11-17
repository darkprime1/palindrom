const input = document.getElementById("text-input");
const result = document.getElementById("result");
const button = document.getElementById("check-btn");
function palindromChecker(value) {
  const regex = /[@[\]{}(\)^~`&*:;"'.!,<>\\|#$%/+=-\s_]/g;
  return value.replace(regex, "").toLowerCase();
}
const regex = palindromChecker(input.value);

function finalDicision(input) {
  if (input === input.split("").reverse().join("")) {
    return `<span>is a Palindrome</span>`;
  } else {
    return `<span>is not a Palindrome</span>`;
  }
}

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please input a value");
  } else {
    return (result.innerHTML = `
      <span class="word">${input.value}</span> <span>${finalDicision(
      palindromChecker(input.value)
    )}</span>
    `);
  }
});
