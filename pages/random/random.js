Page({
  data: {
    count: 0,
    result:0,
    minNum:0,
    maxNum:1000,
  },
  onLoad: function () {
    var self = this;
    wx.getStorage({
      key:'randomNum',
      success: function(res){
        self.setData({
          result:res.data
        })
      }
    })
  },
  randomNum(){
    var self = this;
    self.setData({
      result:self.data.minNum+Math.floor(Math.random()*(self.data.maxNum-self.data.minNum))
    })
    wx.setStorage({
      key: 'randomNum',
      data: self.data.result,
      success: function(res){
        // console.log('保存成功')
      }
    })
  }
})
