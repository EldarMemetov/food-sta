// Функция для добавления товара в корзину
function addToCart(item) {
  // Здесь вы можете написать логику добавления товара в корзину
  // Например, добавить товар в массив или выполнить другие действия
  console.log(`Товар ${item} добавлен в корзину`);
}

// Получаем все элементы с классом "gamburger-photo"
const productImages = document.querySelectorAll(".gamburger-photo");

// Добавляем обработчик события клика на каждое изображение товара
productImages.forEach((image) => {
  image.addEventListener("click", () => {
    // Получаем атрибут "alt" изображения, чтобы определить, какой товар добавить в корзину
    const itemName = image.getAttribute("alt");
    addToCart(itemName); // Вызываем функцию добавления в корзину
  });
});
