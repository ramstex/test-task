import { Config } from '../../config';

let timer: NodeJS.Timeout | undefined;
let enabled = false;

type CallbackCaller = (callback: (...args: unknown[]) => unknown) => void;

const enable: CallbackCaller = (callback) => {
  enabled = true;
  resetActivityTimer(callback);
}

const disable = () => {
  enabled = false;
  clearTimeout(timer);
}

const resetActivityTimer: CallbackCaller = (callback) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();

    resetActivityTimer(callback);
  }, Config.autoLoadDelay);
}

export const checkActivity: CallbackCaller = (callback) => {
  if (!enabled) {
    const eventsToListen = ['click', 'mousemove', 'touchstart', 'keypress'];

    eventsToListen.forEach(event => {
      window.addEventListener(event, () => {
        resetActivityTimer(callback)
      });
    });

    // Проверка на активность вкладки и окна браузера.
    window.addEventListener('focus', () => {
      enable(callback);
    });
    window.addEventListener('blur', () => {
      disable();
    });

    // Включаем автозагрузку, если документ активен
    if (document.hasFocus()) {
      enable(callback);
    }
  }
}
