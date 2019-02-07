const app = new Vue({
  el: '#app',
  data: {
    text: '',
    pwd: '',
    show: ''
  },
  methods: {
    encrypt: function() {
      this.show = CryptoJS.AES.encrypt(this.text, this.pwd);
    },
    decrypt: function() {
      this.show = CryptoJS.AES.decrypt(this.text, this.pwd);
    }
  }
});

window.onerror = function(e, url, line) {
  alert(e + ' Line: ' + line);
}
