
new Vue({
  el: '#app1',
  data: {
    username: '',
    email: '',
    twitter: '',
    codepen: ''
  },

  mounted () {

    this.username = (Cookies.get('username') !== 'undefined') && Cookies.get('username')
    this.email = (Cookies.get('email') !== 'undefined') && Cookies.get('email')
    this.twitter = (Cookies.get('twitter') !== 'undefined') && Cookies.get('twitter')
    this.codepen = (Cookies.get('codepen') !== 'undefined') && Cookies.get('codepen')

  },
  methods: {

    Save () {
      Cookies.set('username', this.username, { expires: 2 })
      Cookies.set('email', this.email, { expires: 2 })
      Cookies.set('twitter', this.twitter, { expires: 2 })
      Cookies.set('codepen', this.codepen, { expires: 2 })
    },

    Clear () {
      Cookies.remove('username')
      Cookies.remove('email')
      Cookies.remove('twitter')
      Cookies.remove('codepen')
      this.username = ''
      this.email = ''
      this.twitter = ''
      this.codepen = ''
    }

  }
})
