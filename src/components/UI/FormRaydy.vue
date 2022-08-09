<template>
    <div 
        class="form_raydy"
        v-for="form in arrayAdminBasket" 
        :key="form.id"
    >
        <div class="form_raydy_content">
            <div>
                <div>
                    Номер заказа <strong>{{form.orderNumber}}</strong>
                </div>
                <div>
                    Имя: <strong>{{form.name}}</strong>
                </div>
                <div>
                    Телефон: <strong>{{form.number}}</strong>
                </div>
            </div>
            <div 
                class="ready_form"
                v-for="basketForm in form.basket" :key="basketForm.id"
            >
                Пицца: <strong>{{basketForm.title}}</strong>
            </div>
        </div>
    </div>
</template>

<script> 

    export default {
        
        props: {
            arrayAdminBasket: {
                type: Array,
            }
        }
    }
</script>

<style scoped >
.form_raydy {
    width: 300px;
    background-color: rgb(255, 255, 255);
    margin-top: 10px;
    transition: .4s;
    border-radius: 6px;
    margin: 15px;
}

.form_client {
    display: flex;
    flex-direction: column;
}
.ready_form {
    width: 200px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;
    margin-top: 15px;
}

.form_raydy_content {
    padding: 25px;
}
</style>