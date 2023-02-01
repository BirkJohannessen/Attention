<template>
    <div class="btn" @click="$emit('handleBtn')">
        <p class="text">
            {{ btnName }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props:{
        btnName:String,
    },
}
</script>

<style scoped>
    .btn{
        width: 100%;
        height: 5vw;
        margin-top: 1vw;
        background-color: black;
        cursor: pointer;
        border-radius: 1vw;
        color:#b5e853;
        border: solid 1px #b5e853;
    }
    .text{
        margin: 0;
        padding-top: 1.3em;
        font-size: 1.3vw;
        text-align: center;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
@media only screen and (max-width: 600px) {
    .btn{
        width: 100%;
        height: 20vw;
        margin-top: 6vw;
        cursor: pointer;
        border-radius: 5vw;
    }
    .text{
        padding-top: 0.9em;
        font-size: 7vw;
        text-align: center;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
}

</style>