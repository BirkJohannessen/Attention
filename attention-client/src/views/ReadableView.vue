<template>
    <div class="page">
        <div class="btn-container">
            <Response :text="Name"/>
            <Response :text="Text"/>
        </div>
    </div>
</template>

<script>
import Response from '../components/Response.vue';
export default {
    name: 'ReadableView',
    components:{
        Response,
    },
    props:{
        Text: String,
        Name: String,
    }
}
</script>