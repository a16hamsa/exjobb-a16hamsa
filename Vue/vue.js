<template>
</template>

var app = new Vue({
  el: "#app",
  data: {
      header: 'Hello Vue.js!',
      apartments: [],
      sortKey: 'name',
      reverse: false,
      search: '',
      columns: ['name', 'age'],
      currentSort:'name',
      currentSortDir:'asc',

      users: [
        {name: 'Rasmus', age: 21},
        {name: 'Jonathan', age: 22},
        {name: 'Julia', age: 26},
        {name: 'Linda', age: 24},
        {name: 'Lovisa', age: 25},
        {name: 'Hampus', age: 23},
        {name: 'Karl', age: 23},
        {name: 'Philip', age: 22},
        {name: 'Linus', age: 25},
      ],

      /*sales: [
        [{'Year': 2018, 'Month': 01, 'Sale': 512},
        {'Year': 2018, 'Month': 02, 'Sale': 1025}],
        [{'Year': 2017, 'Month': 01, 'Sale': 155},
        {'Year': 2017, 'Month': 03, 'Sale': 12}]
              ],
      brand: 'Hampus™',
      product: 'Socks',
      image: './Assets/Socks-green.jpg',
      altText: 'a pair of socks',
      onSale: true,
      description: 'A pair of warm, fuzzy socks',
      inventory: 8,
      details: ["80% clout", "20% cotton", "Gender-neutral"],
      variants: [
        {
          variantId: 0001,
          variantColor: "green",
          variantImage: './Assets/Socks-green.jpg'
        },
        {
          variantId: 0002,
          variantColor: "blue",
          variantImage: './Assets/Socks-blue.jpg'
        }
      ],
      cart: 0*/

  },
  computed: {
    sortedUsers:function() {
      return this.users.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }

    /*title() {
      return this.brand + ' ' + this.product
    }*/
  },

  methods: {

    getTestData() {

      axios.get('vue/testdata-array-apartments.json')
      .then((res) => {
        this.apartments = res.data;
      })
      .catch(e => { console.log('Error', e);})
    },

    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },

    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
      this.sortKey = sortKey;
    }
  },
    /*
    addToCart: function () {
      this.cart += 1
    },
    removeFromCart: function () {
      if (this.cart >= 1) {
        this.cart -= 1
      }
    },
    updateProduct: function (variantImage) {
      this.image = variantImage
    }*/
    mounted() {
      this.getTestData();
    /*  $.getJSON('vue/testdata-array-apartments.json', function(data) {
      this.jsonData = this.data;*/

    }
})
