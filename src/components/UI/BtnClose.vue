<template>
     <button>
        <div class="close"></div>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style>
.close{
    position: absolute;
    top: 0px;
    right: 15px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.close:before,
.close:after {
    content: "";
    position: absolute;
    top: 21px;
    left: 10px;
    width: 26px;
    height: 4px;
    background: #e62f57;
}

.close:before {
    webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.close:after {
    webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>