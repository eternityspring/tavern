Page({
  data: {
    result: '什么',
    book : [
      {
        content: "面包 蛋糕 荷包蛋 烧饼 饽饽 油条 馄饨 火腿 面条 小笼包 玉米粥 肉包 山东煎饼 饺子 煎蛋 烧卖 生煎 锅贴 包子 酸奶 苹果 梨 香蕉 皮蛋瘦肉粥 蛋挞 南瓜粥 煎饼 玉米糊 泡面 粥 馒头 燕麦片 水煮蛋 米粉 豆浆 牛奶 花卷 豆腐脑 煎饼果子 小米粥 黑米糕 鸡蛋饼 牛奶布丁 水果沙拉 鸡蛋羹 南瓜馅饼 鸡蛋灌饼 奶香小馒头 汉堡包 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 驴肉火烧 粥 粢饭糕 蒸饺 白粥"
      },
      {
        content: "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉"
      },
      {
        content: "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉"
      }
    ],
    selectCount:0,
    randomShow:false,
    menuShow:false,
    randomData:[],
    top:[],
    left:[],
    opacity:[],
    windowWidth:0,
    windowHeight:0,
    randomFlag:null,
  },
  onLoad: function () {
    var self = this;
    var hour = (new Date).getHours();
    var bookIdx = 0;
    // 根据当前时间 选择不同食谱
    if(hour < 9 || hour >= 23){
      bookIdx = 0;
    }else if(hour<13){
      bookIdx = 1;
    }else{
      bookIdx = 2;
    }
    self.setData({
      randomData:this.data.book[bookIdx].content
    });
    self.getWindowsInfo(function (res) {
      self.setData({
        windowWidth:res.windowWidth,
        windowHeight:res.windowHeight
      })
    })
  },
  getWindowsInfo(callback){
    wx.getSystemInfo({
      success: function(res) {
        callback && callback(res)
      }
    })
  },
  setRandomData(width,height){
    var topTemp = [];
    var leftTemp = [];
    var opacityTemp = [];
    var self = this;
    for(let i=0;i<self.data.randomData.split(" ").length;i++){
      topTemp.push(Math.ceil(Math.random()*(height-50)))
      leftTemp.push(Math.ceil(Math.random()*width))
      opacityTemp.push(Math.random())
    }
    self.setData({
      top:topTemp
    })
    self.setData({
      left:leftTemp
    })
    self.setData({
      opacity:opacityTemp
    })
    // 选择次数增加
    self.setData({
      selectCount:self.data.selectCount+1
    })
    // 设置吃的结果
    let resultIndex = Math.floor(Math.random()*self.data.randomData.split(" ").length);
    self.setData({
      result:self.data.randomData.split(" ")[resultIndex]
    })
  },
  startRandom(){
    var self = this;
    if(self.data.randomFlag){
      clearInterval(self.random.randomFlag);
    }
    self.setData({
      randomFlag:setInterval(function () {
        self.setRandomData(self.data.windowWidth,self.data.windowHeight);
        if(!self.data.randomShow){
          // 显示数据风暴
          self.setData({
            randomShow:true,
          })
        }
      },250)
    })
  },
  stopRandom(){
    var self = this;
    if(self.data.randomFlag){
      clearInterval(self.data.randomFlag);
      self.setData({
        randomFlag:null
      })
    }
    // 隐藏数据风暴
    self.setData({
      randomShow:false,
    })
  },
  showMenu(){
    var self = this;
    self.setData({
      menuShow:true,
    })
  },
  hideMenu(){
    var self = this;
    self.setData({
      menuShow:false,
    })
  },
  setMenuData(e){
    var self = this;
    self.setData({
      randomData:e.detail.value.replace(/\s+/g,' '),
    })
  },
})
