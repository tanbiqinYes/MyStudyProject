var app = new Vue({
  el: '#app',
  data: {
   checkedFlag:0,
   gradeOrder:false,
   timeOrder:false,
   testList:[
		{
      grades:100,
      title:'关于宠物营养的随堂测试1',
      detail:'课程：我们一直在努力推动宠物营养前进',
      date:'2018年2月5日'
    },{
			grades:89,
			title:'关于宠物营养的随堂测试2',
			detail:'课程：我们一直在努力推动宠物营养前进',
			date:'2015年2月5日'
		},
		{
			grades:70,
			title:'关于宠物营养的随堂测试3',
			detail:'课程：如何促进猫星人的健康体重？',
			date:'2016年5月5日'
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
	     this.selectOrderWay();
  	});
  },
  methods: {
  	selectOrderWay:function(checkedFlag){
      this.checkedFlag = checkedFlag;
  		if (checkedFlag == 1) {
        var  gradeOrder = this.gradeOrder;
        this.timeOrder = false;  //去掉时间排序样式
        this.testList.sort(function(obj1,obj2){
          if (gradeOrder) {
            return obj1.grades - obj2.grades;
          }else{
            return obj2.grades - obj1.grades;
          }
        });
        this.gradeOrder = !this.gradeOrder;
      }else if (checkedFlag == 2) {
        var timeOrder = this.timeOrder;
        this.gradeOrder = false;  
        this.testList.sort(function(obj1,obj2){
          var date1 = ((obj1.date.replace(/年/, "/")).replace(/月/, "/")).replace(/日/, " "); //转换日期格式
          var date2 = ((obj2.date.replace(/年/, "/")).replace(/月/, "/")).replace(/日/, " ");
          if (timeOrder) {
            return date1 < date2 ? 1 : -1; 
          }else{
            return date1 > date2 ? 1 : -1; 
          }

        });
        this.timeOrder = !this.timeOrder;
      }else if (checkedFlag === 0) {
          this.gradeOrder = false;
          this.timeOrder = false;
      }
  	}
  }
});