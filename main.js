const button = document.querySelector("button");
const minInput = document.querySelector("#minInput");
const maxInput = document.querySelector("#maxInput");

button.addEventListener("click", () => {
  if (minInput.value === "" || maxInput.value === "") {
    alert("Digite os valores.");
    minInput.focus();
    return;
  }

  const minValue = Number(minInput.value);
  const maxValue = Number(maxInput.value);

  if (minValue < 0 || maxValue < 0) {
    alert("Somente valores acima de zero são permitidos.");
    minInput.focus();
    return;
  }

  if (!Number.isInteger(minValue) || !Number.isInteger(maxValue)) {
    alert("Somente valores inteiros são permitidos.");
    minInput.focus();
    return;
  }

  if (minValue >= maxValue) {
    alert("O valor máximo deve ser maior que o valor mínimo.");
    minInput.focus();
    return;
  }

  const numeroSorteado = Math.round(
    Math.random() * (maxValue - minValue) + minValue
  );

  alert(
    `Mín.: ${minValue}, Máx.: ${maxValue}, Número Sorteado: ${numeroSorteado}`
  );

  minInput.value = "";
  maxInput.value = "";
  minInput.focus();
});
