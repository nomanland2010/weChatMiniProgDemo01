// pages/test3/test3.js\

const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:20,
    condition:true,
    array:[
      {message:"foo"},
      {message:"bar"},
      {message:"Dad"}
    ],
    objectArray:[
      { id: 5, uuid: 'uuid_5'},
      { id: 4, uuid: 'uuid_4' },
      { id: 3, uuid: 'uuid_3' },
      { id: 2, uuid: 'uuid_2' },
      { id: 1, uuid: 'uuid_1' },
      { id: 0, uuid: "uuid_0"}
    ],
    messageItem:{
        index: 0,
        message: 'this is a message from template',
        time: '2019-04-28'
    },
 
//  audio-data
poster:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=38b9957bc98065386fe7ac41f6b4ca21/8694a4c27d1ed21ba55e3ed0ae6eddc451da3f6b.jpg",
    name:"周杰伦同名专辑",
    author:"周杰伦",
    src:"C:\\Users\\Administrator\\iCloudDrive\\MyXcodeProjects\\06 Model\\Model by 纪盈鑫\\ISD1509\\Music Player by Teacher\\BaseProject\\ViewController\\Resources\\Musics.bundle\\Blue - All Rise.mp3",

// image-data
    anotherArray:[
      {
        mode:'scaleToFill',
        text:'scaleToFill:不保持纵横比缩放图片,使图片完全适应'
      },
      {
        mode:'aspectFit',
        text:"aspectFit:保持纵横比缩放图片,使图片的长边能完全显示出来"
      },
      {
        mode: 'aspectFill',
        text: "aspectFill:保持纵横比缩放图片,只保证短边能完全显示出来"
      },
      {
        mode:'top',
        text:'top:不缩放图片,只显示图片的顶部区域'
      },
      {
        mode:'bottom',
        text:'bottom:不缩放图片,只显示图片的底部区域'
      },
      {
        mode:'center',
        text:'center:不缩放图片,只显示图片的中间区域'
      },
      {
        mode: 'left', text:'left:不缩放图片,只显示图片的左边区域'
      },
      {
        mode:'right',
        text:'right:不缩放图片,只显示图片的右边区域'
      },
      {
        mode:'top left',
        text:'top left:不缩放图片,只显示图片的左上边区域'
      },
      {
        mode:'top right',
        text:'top right:不缩放图片,只显示图片的右上边区域'
      },
      {
        mode:'bottom left',
        text:'bottom left:不缩放图片,只显示图片的左下边区域'
      },
      {
        mode:'bottom right',
        text: 'bottom right:不缩放图片,只显示图片的右下边区域'
      }
    ],
    anotherSrc:"../images/haibao/haibao-5.jpg",
    imageError:function(e){
      console.log('image发生error时间，携带值为：', e.detail,errMsg)
    },

// video-data
    videoSrc:'',
    danmuList:[
      {
          text:"第1s出现的弹幕",
          color:'#ff0000',
          time:1
      },
      {
          text: "第3s出现的弹幕",
          color: '#ff00ff',
          time: 3
      }
    ]
  },
  inputValue: '',

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * video播放的相关的三个函数
   */
  bindInputBlur:function(e){
    this.inputValue = e.detail.value
  },

  bindButtonTap:function(){
    var that = this
    wx.chooseVideo({
      sourceType:['album', 'camera'],
      maxDuration:60,
      camera:['front', 'back'],
      success:function(res){
        that.setData({
          videoSrc: res.tempFilePath
        })
      }
    })
  },

  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color:util.getRandomColor()
    })
  }
})