<template>
  <div>
    <navbar></navbar>
    <div class="container">
        <router-view 
        :posts="posts"
        :basket="basket"

        @addPost="addPost"
        @increasePrice="increasePrice"
        @decreasePrice="decreasePrice"

        :arrayAdminBasket="arrayAdminBasket"
      >
      </router-view>
    </div>


  </div>
</template>

<script>
import Navbar from '@/components/UI/Navbar.vue'


  export default {
    components: {
        Navbar,
         
    },
    data(){
      return {
        posts: [
          {id: 1, title: '4 Сезона', price: 479, descriptionid: 'Колбаски, пепперони, халапеньо, чеснок, шампиньоны, огурцы, моцарелла, томаты, бекон, цыпленок, соус Барбекю, соус Рэнч, фирменный томатный соус.', img: 'https://joyspizza.ru/public/images/1658315421895-4seasons1.webp'},
          {id: 2, title: 'Капрезе', price: 729, descriptionid: 'соус, пармеджано и соус Песто.', img: 'https://joyspizza.ru/public/images/1658493408268-Capreze1.webp'},
          {id: 3, title: '4 Cыра', price: 50, descriptionid: 'сыр Пармезан, сыр Дор-Блю, сыр Фета моцарелла, фирменный томатный соус.', img:'https://joyspizza.ru/public/images/1647971392069-4sira1.jpg'},
          { id: 4,
            title: "9 Сыров",
            descriptionid: "фета, пармезан, чеддер, копченый сыр, сулугуни, мягкий сыр",
            img: "https://joyspizza.ru/public/images/1647971383298-9syrov1.jpg",
            price: 499
          },
          {
            id: 5,
            title: "Альфредо",
            descriptionid: "бекон, ветчина, томаты, шампиньоны, моцарелла, фирменный сливочно-шпинатный соус",
            img: "https://joyspizza.ru/public/images/1647971400153-Alfredo1.jpg",
            price: 460
          },
          {
            id: 6,
            title: "Барбекю Крим",
            descriptionid: "бекон, шампиньоны, томаты, кремчиз моцарелла, соус барбекю.",
            img: "https://joyspizza.ru/public/images/1647971463610-BarbekuKrim1.jpg",
            price: 460
          }
        ],
        arrayAdminBasket: [],
        basket: [],
      }
    },

    methods: {
      addPost(post){
        const indexPost = this.basket.findIndex(ar => ar.id === post.id)
        if(indexPost < 0){
          const newItem = {
            ...post,
            number: 1,
            pricePosts: post.price
          }
          this.basket.push(newItem)
        }
      },

      increasePrice(post){
        this.basket.filter(ar => ar.id === post.id ? ar.pricePosts += ar.price : ' ') 
        this.basket.filter(ar => ar.id === post.id ? ar.number ++ : ' ')  
      },
      decreasePrice(post){
        if(post.number > 0){
          this.basket = this.basket.filter(ar => ar.id === post.id ? ar.pricePosts -= ar.price : ' ')
          this.basket.filter(ar => ar.id === post.id ? ar.number -- : ' ')  
        } 
      },

    },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{ 
  background-color: rgb(230, 230, 230);
}

.container {
    margin: 0 auto;
    max-width: 1120px;
    padding: 15px;
}
</style>