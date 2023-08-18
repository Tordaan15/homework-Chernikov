var tempcels;
var tempfar;
tempcels = +prompt("Введите значение температуры в градусах \
Цельсия: ");
tempfar = (9 / 5) * tempcels + 32;
        alert('Температура ' + tempcels + ' градусов по Цельсию в градусах \
по Фаренгейту равна: ' + Math.round(tempfar * 100) / 100);