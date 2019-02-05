const app = new Vue({
  el: '#app',
  data: {
    text: '',
    pwd: ''
  }
});

window.onerror = function(e, url, line) {
  alert(e + ' Line: ' + line);
}
