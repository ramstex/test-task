<script lang="ts">
  import Tag from '../tag/Tag.svelte';
  import Spinner from '../spinner/Spinner.svelte';

  export let data: CardComponent.ICard | null = null;
  let isImageLoaded = false;

  const detectLoading = (node: HTMLImageElement) => {
    if (node.complete) {
      isImageLoaded = true;
    } else {
      node.addEventListener('load', () => {
        isImageLoaded = true;
      })
    }
  }
</script>

<div class="card" data-testid="card">
  {#if data}
    <div class="card__header">
      <img
        class="card__image"
        src={data.image}
        alt={data.title}
        use:detectLoading
      />

      {#if !isImageLoaded}
        <div class="card__placeholder">
          <Spinner />
        </div>
      {/if}

      {#if data.label}
        <div class="card__label">{data.label}</div>
      {/if}
    </div>

    <div class="card__main">
      <p class="card__pretitle">{data.pretitle}</p>
      <p class="card__title">{data.title}</p>
      <p class="card__description">{data.description}</p>
    </div>

    <div class="card__tags">
      {#each data.tags as tag}
        <Tag>{tag}</Tag>
      {/each}
    </div>
  {/if}
</div>

<style lang="less">
.card {
  width: 100%;
  max-width: 500px;
  background-color: white;

  &__header {
    position: relative;
    padding-top: 100%;
  }

  &__image {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    background-color: #9f9f9f;
  }

  &__label {
    padding: 8px 12px;
    position: absolute;
    top: 8px;
    right: 8px;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &__main {
    padding: 16px 12px;
  }

  &__pretitle {
    margin-top: 0;
    margin-bottom: 8px;
    color: #9f9f9f;
    font-size: 12px;
    font-weight: 300;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: 600;
  }

  &__description {
    margin: 0;
    font-size: 16px;
  }

  &__tags {
    display: flex;
    gap: 8px;
    overflow: auto;
    padding: 0 12px 8px;
    margin-bottom: 16px;

    &::-webkit-scrollbar {
      padding: 0 12px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border: 1px solid white;
      border-radius: 8px;
      background: #850000;
    }
  }
}
</style>
