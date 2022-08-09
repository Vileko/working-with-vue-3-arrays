<template>
    <div class="form_raydy">
        <form-raydy
            :arrayAdminBasket="arrayAdminBasket"
        />
    </div>
</template>

<script>
import FormRaydy from '../UI/FormRaydy.vue'
    export default {
  components: { FormRaydy },
    props: {
            arrayAdminBasket: {
                type: Array,
            }
        }
    }
</script>

<style  scoped>
.form_raydy {
    display: flex;
}

</style>