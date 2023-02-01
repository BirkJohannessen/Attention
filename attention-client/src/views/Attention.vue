<template>
    <div class="page">
        <div class="btn-container" v-if="!pressed">
            <div v-for="call in calls" :key="call.name">
                <Button :btnName="call.name" @handleBtn="handleBtn(call)"/>
            </div>
            <div v-for="call in advancedCalls" :key="call.name">
                <Button :btnName="call.name" @handleBtn="handleAdvancedBtn(call)"/>
            </div>
        </div>
        <div class="btn-container" v-if="pressed">
            <Response :text="processedString"/>
            <Response v-if="activeResponse.content==undefined" :text="activeResponse"/>
            <Response  v-if="activeResponse.content!=undefined" :text="activeResponse.content"/>
        </div>
    </div>
</template>

<script>
import Calls from '../calls.json'
import Button from '../components/Button.vue'
import Response from '../components/Response.vue'
import AdvancedCalls from '../advancedCalls.json'
//import nodemailer from '../../node_modules/nodemailer'
export default {
    components:{
        Button,
        Response,
    },
    methods:{
        handleBtn(call) {
            this.activeResponse = call.response[this.randomFromList(call.response.length)];
            this.selectedcall=call;
            this.pressed=true;
            var btnName = call.name;
            fetch('https://attention.birkjohannessen.com:4000/notify', {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"content":btnName, "response": this.activeResponse})
            })
            .then(response => response.json())
            .then(response => response.response=="OK"?this.processedString="Message delivered":this.processedString="det funket ikke..")
        },
        handleAdvancedBtn(call) {
            this.activeResponse = call.response[this.randomFromList(call.response.length)];
            this.selectedcall=call;
            this.pressed=true;
            var btnName = call.name;
            fetch('https://attention.birkjohannessen.com:4000/notifyAdvanced', {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"content":btnName, "response": this.activeResponse.header, "path": "https://attention.birkjohannessen.com" + this.activeResponse.path})
            })
            .then(response => response.json())
            .then(response => response.response=="OK"?this.processedString="Message delivered":this.processedString="det funket ikke..")
        },
        randomFromList(length){
            var index = Math.floor((Math.random()*length));
            this.callsIndex = index;
            return index;
            
        }
    },
    name:'Attention',
    data(){
        return{
            processedString: "processing...",
            pressed:false,
            calls: Calls,
            activeResponse: "",
            selectedcall: {},
            advancedCalls: AdvancedCalls
        }
    },

}
</script>

<style>
.btn-container{
    width: 35vw;
    height: auto;
    display: flex;
    flex-direction: column;
    margin:auto;
}

.page{
    min-height: 100vh;
    width: auto;
    background-image: url('~@/assets/bkg.png');
    background-size: auto 100%;
}


@media only screen and (max-width: 600px) {
    .btn-container{
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin:auto;
    }
}
</style>
