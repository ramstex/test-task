<div class="tag">
  <slot />
</div>

<style lang="less">
  .tag {
    width: fit-content;
    padding: 8px 12px;
    border-radius: 4px;
    white-space: nowrap;
    color: white;
    background-color: #9f9f9f;

    // Использовал индексы для примера разной расцветки.
    // Других указаний на цвет нет в задании.
    &:nth-child(4n + 1) {
      background-color: #ff9544;
    }

    &:nth-child(4n + 2) {
      background-color: #653d24;
    }

    &:nth-child(4n + 3) {
      background-color: #cdd86d;
    }
  }
</style>
