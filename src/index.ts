import App from './App.svelte';
import './style/style.less';

let root = document.getElementById('root');

if (!root) {
  root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
}

const TestApp = new App({
  target: root,
});

export default TestApp;
