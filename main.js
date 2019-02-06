const app = new Vue({
  el: '#app',
  data: {
    text: '',
    pwd: '',
    show: ''
  },
  methods: {
    encrypt: function() {
      this.show = btoa(btoa(sjcl.encrypt(this.pwd, this.text)));
    }
  }
});

window.onerror = function(e, url, line) {
  alert(e + ' Line: ' + line);
}
