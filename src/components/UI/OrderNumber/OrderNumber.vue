<template>
    <div class="">
        <div class="modal-window" v-if="orderNumber === true">
            <btn-close  @click="$emit('closeForms', input)"/>
            <div class="model_order_number">
                Ваш заказ № 
                {{arrayAdminBasket[arrayAdminBasket.length - 1].orderNumber}}
            </div>
        </div>
    </div>
</template>

<script>
import BtnClose from '../BtnClose.vue'
    export default {
  components: { BtnClose },
        props: {
            orderNumber: {
                type: Boolean
            },
            arrayAdminBasket: {
                type: Array
            }
        }
    }
</script>

<style>
.modal_wrapper {
    width: 100%;
    height: 100%;
    left: 0;

    right: 0;
    bottom: 0;
    z-index: 100;
}

.modal-window {
    position: relative;
    width: 350px;
    height: 100px;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    z-index: 100;
}

.modal-window::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    
}

.model_order_number {
    width: 350px;
    padding: 25px;
    text-align: center;
}
</style>