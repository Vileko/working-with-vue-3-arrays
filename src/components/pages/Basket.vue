<template>
    <div>
        <div class="box_content_pizza"> 
            <div v-if="basket.length > 0">
                <div>
                    Сумма заказа:
                    <strong>
                        {{basket.map(ar => x += ar.pricePosts, x=0).reverse()[0]}}
                    </strong>
                </div>
                <btn-nav-bar @click="this.activeForm = true">Оформить</btn-nav-bar>
            </div>
            <div v-else>
                Корзина пустая
            </div>
            <div 
                class="post"
                v-for="post in basket" 
                :key="post.id"
            >
                <img class="img" :src="post.img">
                <div class="post_content">
                    <div>
                        <h3>{{post.title}}</h3>
                    </div>
                    <div class="descriptionid">
                        {{post.descriptionid}}
                    </div>
                    <div>
                        <div>
                            {{post.number}} кол-во
                        </div>
                        <button @click="$emit('decreasePrice', post)">-</button>
                        {{post.pricePosts}} 
                        <button @click="$emit('increasePrice', post)">+</button>
                        Рублей
                    </div>
                </div>
            </div>
            <div 
                v-if="this.activeForm === true"
            >
                <form-post
                    @closeForms="closeForms"
                    @createForm="createForm"
                    :getPhoneCheck='getPhoneCheck'
                    :getNameCheck='getNameCheck'
                    :basket='basket'
                />
            </div>
            <div>
                <order-number
                    :orderNumber='orderNumber'
                    :arrayAdminBasket='arrayAdminBasket'
                    @closeForms="closeForms"
                />
            </div>
        </div>
    </div>
</template>

<script>

import FormPost from '../UI/FormPost.vue'
import BtnNavBar from '../UI/BtnNavBar.vue'
import OrderNumber from '../UI/OrderNumber/OrderNumber.vue'

    export default {
  components: { FormPost, BtnNavBar, OrderNumber },
        props: {
            basket: {
                type: Array
            },
            arrayAdminBasket: {
                type: Array,
            },
           
        },
        data(){
            return {
                activeForm: false,
                getNameCheck: false,
                getPhoneCheck: false,
                orderNumber: false
            }
        },

        methods: {
            createPost(post){
                this.readyFormArray.push(post)
                this.readyFormArray.push(this.basket)
            },
            createForm(input) {
                let newPhone = input.number.replace(/_/g, '').replace(/\s/g, '');
                if(newPhone.length < 14){
                    this.getPhoneCheck = true;
                } else {
                    this.getPhoneCheck = false;
                }
               
                if(input.name.length > 0){
                    this.getNameCheck = false;
                } else {
                    this.getNameCheck = true;
                }
            
                if(this.getNameCheck === false && this.getPhoneCheck === false) {
                    const newBasket = this.basket.map(ar => ar)
                    const newPost = {
                        name: input.name,
                        number: input.number,
                        basket: newBasket,
                        orderNumber: this.basket.length + Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
                    }
                    //добавление в Админ панель 
                    this.arrayAdminBasket.push(newPost)
                    //Очистка массива с корзины
                    this.basket.splice(0, this.basket.length)
                    this.activeForm = false;
                    this.orderNumber = true;
                }
            },
            closeForms(){
                this.activeForm = false;
                this.getNameCheck = false;
                this.getPhoneCheck = false;
                this.orderNumber = false;
            },

        },
        
    }
</script>

<style scoped>


.img {
    width: 300px;
}

.post {
    display: flex;
    background-color: #fff;
    margin-top: 15px;
    transition: .4s;
}

.post:hover {
    box-shadow: 1px 1px 50px rgb(97, 97, 97);
    background-color: rgb(238, 238, 238);
}

.post_content{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding: 15px;
}



</style>