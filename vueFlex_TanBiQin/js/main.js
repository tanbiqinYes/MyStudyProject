var app = new Vue({
  el: '#app',
  data: {
   checkedFlag:false,
   testList:[
		{
      grades:100,
      title:'关于宠物营养的随堂测试1',
      detail:'课程：我们一直在努力推动宠物营养前进',
      date:'2017年2月5日'
    },{
			grades:89,
			title:'关于宠物营养的随堂测试2',
			detail:'课程：我们一直在努力推动宠物营养前进',
			date:'2016年2月5日'
		},
		{
			grades:70,
			title:'关于宠物营养的随堂测试3',
			detail:'课程：如何促进猫星人的健康体重？',
			date:'2017年5月5日'
		},
		{
			grades:0,
			title:'关于宠物营养的随堂测试4',
			detail:'课程：如何促进猫星人的健康体重？',
			date:'2017年6月6日'
		},
	]
  },
  mounted: function () {
  	this.$nextTick(function(){
	     //this.selectOrderWay();
  	});
  },
  methods: {
  	selectOrderWay:function(checkedFlag){
      this.checkedFlag = true;
  		/*if(typeof item.checked == 'undefined'){
        Vue.set(item, "checked", true); //全局注册
        //this.$set(item, "checked", true); //局部注册
      }else{
          item.checked = !item.checked;
      }*/
  	}
  }
});