//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  // Page 无onLaunch回调函数，只有App有
  onLaunch: function() {
    console.log("logs.js文件的page的onLaunch执行了！")
  },

  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log("logs.js文件的page的onLoad执行了！")
  }
})
