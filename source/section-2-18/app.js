let vm = Vue.createApp({
    data(){
        return {
            isPurple : false,
            selectedColor : '',
            size: 150,
            rotate: 0,
        };
    },
    computed:{
        circleClasses(){
            return { purple : this.isPurple };
        }
    },
    methods:{
        rotateClockwiseBy15(){
            this.rotate = (this.rotate + 15)%360;
        },
        rotateCounterClockwiseBy15(){
            this.rotate = (this.rotate - 15)%360;
        },
    }
}).mount('#app')