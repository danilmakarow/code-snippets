/*
Абстрактная фабрика (Abstract Factory) - это паттерн проектирования, который предоставляет 
интерфейс для создания семейств взаимосвязанных или взаимозависимых объектов без привязки 
к их конкретным классам. Этот паттерн позволяет создавать объекты, которые взаимодействуют 
друг с другом и соответствуют определенной тематике.

Пример использования абстрактной фабрики:
*/

// Абстрактные классы для создания кнопок и фреймов
abstract class Button {
  abstract render(): void;
}

abstract class Frame {
  abstract display(): void;
}

// Конкретные классы кнопок
class IOSButton extends Button {
  render() {
    console.log("Rendering an iOS button.");
  }
}

class AndroidButton extends Button {
  render() {
    console.log("Rendering an Android button.");
  }
}

// Конкретные классы фреймов
class IOSFrame extends Frame {
  display() {
    console.log("Displaying an iOS frame.");
  }
}

class AndroidFrame extends Frame {
  display() {
    console.log("Displaying an Android frame.");
  }
}

// Абстрактная фабрика для создания семейства кнопок и фреймов
abstract class GUIFactory {
  abstract createButton(): Button;
  abstract createFrame(): Frame;
}

// Конкретная фабрика для iOS
class IOSFactory extends GUIFactory {
  createButton() {
    return new IOSButton();
  }

  createFrame() {
    return new IOSFrame();
  }
}

// Конкретная фабрика для Android
class AndroidFactory extends GUIFactory {
  createButton() {
    return new AndroidButton();
  }

  createFrame() {
    return new AndroidFrame();
  }
}

// Использование абстрактной фабрики
function createUI(factory: GUIFactory) {
  const button = factory.createButton();
  const frame = factory.createFrame();

  return { button, frame };
}

// Создание iOS-стиля интерфейса
const iosFactory = new IOSFactory();
const iosUI = createUI(iosFactory);
iosUI.button.render();
iosUI.frame.display();

// Создание Android-стиля интерфейса
const androidFactory = new AndroidFactory();
const androidUI = createUI(androidFactory);
androidUI.button.render();
androidUI.frame.display();

/*
Этот пример иллюстрирует, как абстрактная фабрика позволяет создавать семейства объектов (кнопок и фреймов) для разных платформ (iOS и Android) без изменения основного кода.
*/
