<template>
    <button type="button" class="btnNavBar">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.btnNavBar {
    padding: 10px;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: .3s;
    margin: 15px 0 15px 0;
    background-color: #e41b47;
    font-size: 14px;
    border-radius: 8px;
}

.btnNavBar:hover {
    color: gold;
}

</style>