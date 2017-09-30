
Page({
  data: {
    result: '吃什么',
    book : [
      {
        breakfast: "面包 蛋糕 荷包蛋 烧饼 饽饽 油条 馄饨 火腿 面条 小笼包  玉米粥 肉包 山东煎饼 饺子 煎蛋 烧卖 生煎 锅贴 包子 酸奶 苹果 梨 香蕉 皮蛋瘦肉粥 蛋挞 南瓜粥 煎饼 玉米糊 泡面 粥 馒头 燕麦片 水煮蛋 米粉 豆浆 牛奶 花卷 豆腐脑 煎饼果子 小米粥 黑米糕 鸡蛋饼 牛奶布丁 水果沙拉 鸡蛋羹 南瓜馅饼 鸡蛋灌饼 奶香小馒头 汉堡包 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 驴肉火烧 粥 粢饭糕 蒸饺 白粥"
      },
      {
        lunch: "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉"
      },
      {
        dinner: "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉"
      }
    ],
    randomData:[],
    top:[],
    left:[],
    opacity:[],
    randomFlag:null
  },
  onLoad: function () {
    var self = this;
    self.setData({
      randomData:this.data.book[0].breakfast.split(" ")
    })
    self.setRandomData();

    console.log(this.data.top)
  },
  setRandomData(){
    var topTemp = [];
    var leftTemp = [];
    var opacityTemp = [];
    var self = this;
    wx.getSystemInfo({
      success: function(res) {
        for(let i=0;i<self.data.randomData.length;i++){
          topTemp.push(Math.ceil(Math.random()*res.windowWidth))
          leftTemp.push(Math.ceil(Math.random()*res.windowHeight))
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
      }
    })
  },
  startRandom(){
    var self = this;
    if(self.data.randomFlag){
      clearInterval(self.random.randomFlag);
    }
    self.data.randomFlag = setInterval(function () {
      self.setRandomData();
    },10)
  },
  stopRandom(){
    var self = this;
    if(self.data.randomFlag){
      clearInterval(self.data.randomFlag);
    }
  }
})
