<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { checkActivity } from './services/auto-load/AutoLoad';
  import { getItem } from './modules/feed/Feed';
  import { isLoading } from './modules/feed/store';
  import Feed from './components/feed/Feed.svelte';
  import Card from './components/card/Card.svelte';

  let cards: CardComponent.ICard[] = [];

  let isLoadingLocal = false;
  const loadingUnsubscribe = isLoading.subscribe(value => isLoadingLocal = value);

  const getData = async () => {
    const response = await getItem();
    checkActivity(getData);

    if (response) {
      // Сомнительный момент, но другого решения пока не нашел. Array.push не вызывает реактивности.
      cards = [...cards, response];
    }
  };

  const onFeedLoadMore = () => {
    getData();
  };

  onMount(getData);
  onDestroy(loadingUnsubscribe)
</script>

<div>
  <Feed
    loading={isLoadingLocal}
    on:load-more={onFeedLoadMore}
  >
    {#each cards as card (card.id)}
      <Card data={card} />
    {/each}
  </Feed>
</div>
