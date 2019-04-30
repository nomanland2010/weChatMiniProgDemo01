//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: [1, 2, 3, 4, 5],
    view: 'MINA',
    shanghaiLongitude:121.48,
    shanghaiLatitude:31.23,
    userCurrentLongitude:-2,
    userCurrentLatitude:-2
  },

  tapName(event) {
    console.log(event)
  },

  // 此处有巨大坑，建议wxml里标签里的属性名为：data-全小写-全小写-...
  // 在.js文件中，则使用：首字母小写的驼峰命名法
  bindViewTap2(event) {
    // console.log(event)
    console.log(event.currentTarget.dataset.aB) // - 会转为驼峰写法
    // console.log(event.currentTarget.dataset.alphaBeta)// 大写会转为小写  // undefined
    console.log(event.currentTarget.dataset.alphabeta)// 大写会转为小写
    // console.log(event.currentTarget.dataset.cd)// 大写会转为小写  // undefined
    // console.log(event.currentTarget.dataset.CD)   // undefined
    console.log(event.currentTarget.dataset.cD)
    console.log(event.currentTarget.dataset.companyName)
  },



  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  mapTap: function(event)
  {
    console.log("上海经度：" + event.currentTarget.dataset.shanghaiLongitude)
    console.log("上海纬度：" + event.target.dataset.shanghaiLatitude)
  },

  getUsereCurrentLocationViewTapped: function(event)
  {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        let longitude = res.longitude // 经度
        let latitude = res.latitude // 纬度

        console.log("用户经度: " + longitude)
        console.log("用户纬度: " + latitude)

        this.setData({
          userCurrentLongitude: longitude,
          userCurrentLatitude: latitude
        })

        wx.pageScrollTo({
          scrollTop: 10000
        })
      },
      fail: () => {
        this.setData({
          userCurrentLongitude: -1,
          userCurrentLatitude: -1
        }) 

        wx.pageScrollTo({
          scrollTop: 10000
        })
      }

    })
  },


  scanTapped: function()
  {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})
