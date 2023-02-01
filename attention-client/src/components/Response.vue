<template>
    <div class="response-body">
        <p class="text">
            {{text}} 
        </p>
    </div>
</template>

<script>
export default {
    name: 'response',
    props:{
        text: String,
    },

}
</script>

<style scoped>

.response-body{
    margin:0;
    width: 100%;
    height: auto;
    border-radius: 2vw;
    margin-top: 3vw;
    background-color: black;
}
.text {
    margin: 0;
    padding: 3vw 10px 3vw 10px;
    border-radius: 2vw;
    font-size: 1.3vw;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    color: #b5e853;
    border: solid 3px #b5e853;
}

@media only screen and (max-width: 600px) {
    .text {
        margin: 0;
        padding: 10vw 2vw 10vw 2vw;
        border-radius: 5vw;
        font-size: 6vw;
        border: solid 1px #b5e853;
    }
    .response-body{
        width: 100%;
        font-size: 7vw;
    }
}
</style>