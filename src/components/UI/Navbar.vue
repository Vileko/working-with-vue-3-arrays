<template>
    <div>
        <div class="navbar__btns">
            <div class="nav_bar">
                <btn-nav-bar @click="$router.push('/')">Пицца</btn-nav-bar>
                <btn-nav-bar @click="$router.push('/basket')">Корзина</btn-nav-bar>
                <btn-nav-bar @click="$router.push('/admin')">Аднмин</btn-nav-bar>
            </div>
        </div>
    </div>
</template>

<script>
import BtnNavBar from '@/components/UI/BtnNavBar.vue'
    export default {
        components: {
            BtnNavBar
        },
        
    }
</script>

BtnNavBar
<style scoped>

.navbar__btns {
    background-color: #e41b47;
    width: 100%;
}

.nav_bar {
    display: flex;
    justify-content: center;
}
</style>