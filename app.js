//实例化vue对象
new Vue({
  el:'#vue-app',
  data:{
    name:'KLO',
    job:'WebWork',
    website:'http://www.baidu.com',
    websiteTag:'<a href="http://www.baidu.com">url</a>',
    x:0,
    y:0,
    age:30
  },
  methods:{
    greet: function(time){
      return 'Good Morning!'+time+this.name+this.job;
    },
    add: function(val){
      this.age+=val;
    },
    subtract: function(val){
      this.age-=val;
    },
    updateXY: function(event){
     // console.log(event);
     this.x = event.offsetX;
     this.y = event.offsetY;
    },
    stop :function(event){
      event.stopPropagation();
    }
  }
});
