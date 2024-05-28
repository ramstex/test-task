import Api from '../../services/api/Api';
import { isLoading } from './store';
import { get } from 'svelte/store';
import { Config } from '../../config';
import Preload from 'image-preload';

export const cardAdapter = (response: Feed.IItemResponse): CardComponent.ICard => {
  const tags = response.notes.split(', ');

  return {
    id: response.id,
    uid: response.uid,
    title: response.blend_name,
    pretitle: response.origin,
    description: response.variety,
    label: response.intensifier,
    image: Config.image,
    tags,
  };
};

const getItem = async (): Promise<CardComponent.ICard | null> => {
  if (get(isLoading)) {
    return null;
  }

  isLoading.set(true);
  const response = await Api.json<Feed.IItemResponse>(Config.endpoint);

  if (response) {
    const adaptedResponse = cardAdapter(response);
    // Изображение тянем через fetch, чтоб сработал 302 редирект, и картинки не повторялись
    const imageResponse = await Api.response(adaptedResponse.image);
    adaptedResponse.image = imageResponse?.url || adaptedResponse.image;

    // Не дожидаемся выполнения промиса, чтоб передать данные карточки в массив до загрузки картинки
    Preload([adaptedResponse.image], {
      onComplete() {
        isLoading.set(false);
      },
    })

    return adaptedResponse;
  }

  isLoading.set(false);

  return null;
};

export { getItem };
