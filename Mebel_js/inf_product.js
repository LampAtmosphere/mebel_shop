// Пример товара (заглушка), вместо этого используйте запрос к вашей БД
const productData = {
    name: "Проперженный стул",
    category: "Стулья",
    price: "3450 ₽",
    discountPrice: "2999 ₽",
    purchaseLink: "http://example.com",
    description: "Стул с комфортной посадкой.",
    dimensions: {
        length: "800",
        width: "600",
        height: "1000",
        weight: "5000"
    },
    images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200"
    ],
    model: "название.glb",
    characteristics: {
        materials: "Дерево, ткань",
        color: "Коричневый",
        loadCapacity: "150 кг",
        manufacturer: "Производитель XYZ",
        warranty: "1 год",
        assembly: "Да",
    }
};

function loadProductInfo() {
    // Получаем ссылку на контейнер с информацией о товаре
    const productInfoContainer = document.getElementById('product-info');

    // Создаем HTML-код для информации о товаре
    productInfoContainer.innerHTML = `
        <div class="section">
            <h3>Название товара</h3>
            <input class="input" type="text" value="${productData.name}" />
        </div>
        <div class="section">
            <h3>Категория</h3>
            <input class="input" type="text" value="${productData.category}" />
        </div>
        <div class="section">
            <h3>Цена товара</h3>
            <input class="input" type="text" value="${productData.price}" />
        </div>
        <div class="section">
            <h3>Цена со скидкой</h3>
            <input class="input" type="text" value="${productData.discountPrice}" />
        </div>
        <div class="section">
            <h3>Ссылка на покупку</h3>
            <input class="input" type="text" value="${productData.purchaseLink}" />
        </div>
        <div class="section">
            <h3>Описание</h3>
            <textarea class="input" rows="4">${productData.description}</textarea>
        </div>
        <div class="section images-section">
            <h3>Изображения</h3>
            ${productData.images.map(src => `<div class="image-item"><img src="${src}" alt="Image" /></div>`).join('')}
        </div>
        <div class="section model-section">
            <h3>3D-модель</h3>
            <div class="model-item">${productData.model}</div>
        </div>
        <div class="section characteristics-section">
            <h3>Характеристики</h3>
            <div class="field">
                <label class="field-label">Материалы</label>
                <input class="input" type="text" value="${productData.characteristics.materials}" />
            </div>
            <div class="field">
                <label class="field-label">Цвет</label>
                <input class="input" type="text" value="${productData.characteristics.color}" />
            </div>
            <div class="field">
                <label class="field-label">Рабочая нагрузка</label>
                <input class="input" type="text" value="${productData.characteristics.loadCapacity}" />
            </div>
            <div class="field">
                <label class="field-label">Производитель</label>
                <input class="input" type="text" value="${productData.characteristics.manufacturer}" />
            </div>
            <div class="field">
                <label class="field-label">Гарантия</label>
                <input class="input" type="text" value="${productData.characteristics.warranty}" />
            </div>
            <div class="field">
                <label class="field-label">Нуждается в сборке</label>
                <input class="input" type="text" value="${productData.characteristics.assembly}" />
            </div>
        </div>
    `;
}

// Загружаем информацию о товаре при инициализации
loadProductInfo();
