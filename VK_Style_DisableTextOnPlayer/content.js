// Убираем обработчик события по клавише Escape

// Получаем элемент аудиоплеера
var audioPlayer = document.querySelector('.top_audio_player');

// Проверяем, что элемент существует
if (audioPlayer) {
  // Устанавливаем значение прозрачности
  audioPlayer.style.opacity = '0'; // Можете настроить значение по своему усмотрению
}
