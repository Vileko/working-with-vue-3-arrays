<template>
    <div class="order">
       <div class="form"> 
       
        <btn-close  @click="$emit('closeForms', input)"/>
            <form 
                class="order_block"
                @submit.prevent
            >
                <div>
                    Сумма заказа: 
                    <strong>{{basket.map(ar => x += ar.pricePosts, x=0).reverse()[0]}}</strong>
                </div>
                <input
                    class="input"
                    v-model="input.name"
                    type="text" 
                    placeholder="Имя"
                />
                <div v-if="getNameCheck === true">
                    Введите имя
                </div>
                
                <input  
                    class="input"
                    v-maska="'+7(###)### ## ##'"
                    v-model="input.number"
                    type="text" 
                    placeholder="Телефон"
                />
                <div v-if="getPhoneCheck === true">
                    Неверный номер
                </div>
                <btn-nav-bar
                    class="btnForm"         
                    @click="createForm"
                >
                    Оформить
                </btn-nav-bar>
                
            </form>
       </div>
    </div>
    
</template>

<script>
import BtnClose from './BtnClose.vue'
import BtnNavBar from './BtnNavBar.vue'

    export default {
        components: {
            BtnNavBar,
                BtnClose
        },
        props: {
            getNameCheck: {
                type: Boolean
            },
            getPhoneCheck: {
                type: Boolean
            },
            basket: {
                type: Array
            }
        },
        data(){
            return {
                input: {
                    name: '',
                    number: ''
                },
                
            }
        },
        methods: {
            createForm(){
                this.$emit('createForm', this.input)
            }
        },
    }
</script>

<style>
.order {
    max-width: 550px;
    padding: 8% 0 0;
    margin: auto;
}

.order::before{
    position: fixed;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgb(61, 61, 61);
    opacity: .5;
}

.order_block {
    display: flex;
    flex-direction: column;
}

.form {
    position: relative;
    width: 550px;
    position: fixed;
    border-radius: 8px;
    top: 80px;
    background: #FFFFFF;
    padding: 40px;
    text-align: center;
    box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin: 10px;
    z-index: 1;
}

.form .register-form {
    display: none;
}

.input {
    margin-top: 10px;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid black
}

.btnForm {
    width: 100px;
    padding: 10px;
}
</style>