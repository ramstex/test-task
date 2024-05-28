<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Spinner from '../spinner/Spinner.svelte';

  export let loading: boolean = false;

  const dispatch = createEventDispatcher();
  const onClick = () => {
    dispatch('click');
  }
</script>

<button
  class="load-more"
  on:click={onClick}
>
  {#if loading}
    <Spinner />
  {:else}
    +
  {/if}
</button>

<style lang="less">
  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 100%;
    outline: none;
    cursor: pointer;
    font-size: 36px;
    color: white;
    background-color: #850000;
    transition: background-color .3s ease;

    &:hover {
      background-color: #a52222;
    }
  }
</style>
