document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#subjectSelect");

  const updateLabel = () => {
    select.classList.toggle("valid", !!select.value);
  };

  select.addEventListener("change", updateLabel);
  updateLabel();
});
