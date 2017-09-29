
Page({
  data: {
    count: 0,
    millisecond:0,
    result:0,
    moment:null
  },
  onLoad: function () {
    var self = this;
    wx.getStorage({
      key:'count',
      success: function(res){
        self.setData({
          count:res.data
        })
      }
    })
  },
  startMoment(){
    var self = this;
    self.data.result = 0;
    self.data.moment = setInterval(function(){
      self.setData({
        millisecond: self.data.millisecond + 1
      })
    },1)
  },
  stopMoment(){
    var self = this;
    console.log(self.data);
    clearInterval(self.data.moment);
    self.setData({
      result: self.data.millisecond/100
    })

    if(self.data.millisecond/100 ==1){
      wx.setStorage({
        key: 'count',
        data: self.data.count+1,
        success: function(res){
          // console.log('保存成功')
        }
      })
      self.setData({
        count:self.data.count+1
      })
    }
    self.data.millisecond = 0;
  }
})
