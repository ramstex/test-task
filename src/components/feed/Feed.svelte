<script lang="ts">
  import LoadMore from '../load-more/LoadMore.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let loading: boolean = false;

  const onClickLoadMore = () => {
    if (!loading) {
      dispatch('load-more');
    }
  };
</script>

<div class="feed">
  <div class="feed__content">
    <slot />
  </div>

  <div class="feed__footer">
    <LoadMore on:click={onClickLoadMore} {loading} />
  </div>
</div>

<style lang="less">
  .feed {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;
      gap: 32px;
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
  }
</style>
