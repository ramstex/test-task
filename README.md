NodeJS v20.12.2

npm v10.5.2

Связка [webpack + svelte](https://dev.to/sam_621/svelte-with-webpack-5-and-babel-1b03)

## Папки:

**src/components** - компоненты

**src/modules** - модули, работающие с разными контент-сущностями.
Сейчас там только модуль Feed

**src/services** - сервисы, обеспечивающие технический функционал.
Сервис Api отвечает за запросы к серверу, сервис AutoLoad -
за автоматические запросы при отсутствии активности пользователя.

## Тесты:

**Компонент Card** - протестировано отображение пустого блока,
когда данные не переданы

**Компонент LoadMore** - протестировано отображение компонента
с разными значениями пропса loading

**Модуль Feed** - протестирован адаптер ответа на запрос
к интерфейсу карточки

## Дополнительные фичи:

В сервисе AutoLoad рализовано отключение автозагрузки
при неактивной вкладке/окне браузера
