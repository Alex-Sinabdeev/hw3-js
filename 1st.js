const tempC = Number.parseInt(prompt("Введите градусы по Цельсию"));
const a = ((9/5)*tempC)+32;
alert(`Ваша T по Цельсию ${tempC} , ваша Т по Фаренгейту ${a.toFixed(1)}`);