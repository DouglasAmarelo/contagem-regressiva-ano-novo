(function () {
  'use strict';

  // Variables
  const nextNewYear = new Date().getFullYear() + 1;
  const newYearTime = new Date(`January 01 ${nextNewYear} 00:00:00`);
  const $year = document.querySelector('.year');
  const $days = document.querySelector('.days');
  const $hours = document.querySelector('.hours');
  const $minutes = document.querySelector('.minutes');
  const $seconds = document.querySelector('.seconds');

  // Insert the Next Year into the DOM
  $year.innerHTML = nextNewYear;

  // Normalize time format to two digits
  const getTimeUnit = (time) => (time < 10 ? '0' + time : time);

  // Config the time variables
  const setTimeConfig = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime; // Diferença de tempo entre o novo ano e a data atual

    return {
      days: Math.floor(difference / 1000 / 60 / 60 / 24), // Milisegundos / Segundos / Minutos / Horas
      hours: Math.floor(difference / 1000 / 60 / 60) % 24, // Milisegundos / Segundos / Minutos % Horas já passadas
      minutes: Math.floor(difference / 1000 / 60) % 60, // Milisegundos / Segundos % Minutos já passados
      seconds: Math.floor(difference / 1000) % 60, // Milisegundos % Segundos já passados
    };
  };

  // Update the DOM with the time
  const updateCountDown = () => {
    const { days, hours, minutes, seconds } = setTimeConfig();

    $days.innerHTML = getTimeUnit(days);
    $hours.innerHTML = getTimeUnit(hours);
    $minutes.innerHTML = getTimeUnit(minutes);
    $seconds.innerHTML = getTimeUnit(seconds);
  };

  setInterval(updateCountDown, 1000);
})();
