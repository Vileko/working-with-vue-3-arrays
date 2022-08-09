<template>
    <div class="flex_product_list">
        <div 
            class="product_list"
            v-for="post in posts" 
            :key="post.id"
        >
            <div>
                <img 
                    class="img"
                    :src="post.img"
                >
            </div>
            <div class="post">
                <div>
                    <div>
                        <h2>{{post.title}}</h2>
                    </div>
                    <div class="descriptionid">
                        {{post.descriptionid}}
                    </div>
                    
                </div>
                <div class="post_bottom">
                     <div>
                        {{post.price}} Рублей
                    </div>
                    <btn-nav-bar 
                        style="margin-top: 15px;"
                        @click="$emit('addPost', post)"
                    >
                        Купить
                    </btn-nav-bar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BtnNavBar from '../UI/BtnNavBar.vue'

    export default {
  components: { BtnNavBar },
        props: {
            posts: {
                type: Array
            }
        }
    }
</script>

<style scoped>
.flex_product_list {
   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.product_list {
    width: 300px;
    background-color: rgb(255, 255, 255);
    margin-top: 10px;
    transition: .4s;
    border-radius: 6px;
    
}
.product_list:hover {
    box-shadow: 1px 1px 50px rgb(97, 97, 97);
    background-color: rgb(238, 238, 238);
}

.descriptionid {
    margin-top: 10px;
    font-size: 14px;
    color: rgb(63, 63, 63)
}

.post {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    margin: 0;
    width: 300px;
    min-height: 250px;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.post_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.img {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    width: 300px;
}
</style>