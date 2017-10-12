
Page({
  data: {
    logs: [],
    randomNum:0,
    randomArray:[],
  },
  onLoad: function () {
    this.setData({
      randomNum:Math.floor((Math.random()*6)+1)
    })
    this.setRandomData();
  },
  random:function () {
    this.setData({
      randomNum:Math.floor((Math.random()*6)+1)
    })
  },
  setRandomData(){
    var tempArr = [];
    for(let i = 0;i<5;i++){
      tempArr.push(Math.floor((Math.random()*6)+1))
    }
    this.setData({
      randomArray:tempArr
    })
  }
})
