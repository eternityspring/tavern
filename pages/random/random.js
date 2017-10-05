Page({
  data: {
    count: 0,
    result:0,
    minNum:0,
    maxNum:1000,
    settingShow:false,
  },
  onLoad: function () {
    var self = this;
    wx.getStorage({
      key:'randomNum',
      success: function(res){
        self.setData({
          result:res.data,
        })
      }
    })
    wx.getStorage({
      key:'randomMinNum',
      success: function(res){
        self.setData({
          minNum:res.data,
        })
      }
    })
    wx.getStorage({
      key:'randomMaxNum',
      success: function(res){
        self.setData({
          maxNum:res.data,
        })
      }
    })
  },
  randomNum(){
    var self = this;
    self.setData({
      result:self.data.minNum*1+Math.floor(Math.random()*(self.data.maxNum*1-self.data.minNum*1))
    })
    wx.setStorage({
      key: 'randomNum',
      data: self.data.result,
      success: function(res){
        // console.log('保存成功')
      }
    })
  },
  settingShow(){
    var self = this;
    self.setData({
      settingShow:true,
    })
  },
  settingHide(){
    var self = this;
    self.setData({
      settingShow:false,
    })
  },
  setMinValue(e){
    var self = this;
    self.setData({
      minNum:e.detail.value,
    })
    wx.setStorage({
      key: 'randomMinNum',
      data: self.data.minNum,
      success: function(res){
        // console.log('保存成功')
      }
    })
  },
  setMaxValue(e){
    var self = this;
    self.setData({
      maxNum:e.detail.value,
    })
    wx.setStorage({
      key: 'randomMaxNum',
      data: self.data.maxNum,
      success: function(res){
        // console.log('保存成功')
      }
    })
  },
  unSetting(){
    // 清除数据缓存
    wx.removeStorage({
      key: 'randomMinNum',
      success: function(res) {
      }
    })
    wx.removeStorage({
      key: 'randomMaxNum',
      success: function(res) {

      }
    })
    wx.removeStorage({
      key: 'randomNum',
      success: function(res) {
        wx.showModal({
          title: '提示',
          content: '重置成功',
          showCancel: false,
          success: function(res) {

          }
        })
      }
    })
    // 重置数据
    this.setData({
      count: 0,
      result:0,
      minNum:0,
      maxNum:1000,
    })
  },
})
