// 获取云数据库实例
const db = wx.cloud.database()
const tabs = db.collection('tabs')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i_name:'',
    tabs:{
      name:''
    }
  },
  // 事件函数
  getInput_name(e){
    this.data.i_name = e.detail.value
  },
  submit() {
    let v_name = this.data.i_name
    tabs.add({
      data: {
        name: v_name
      },
      success: res => {
        // 新增成功
        wx.showToast({
          title: '提交成功',
          icon: 'success'
        })
        // 刷新页面数据
        this.dataRefresh()
      },
      fail: res => {
        // 新增失败
        wx.showToast({
          title: '提交失败',
          icon: 'none'
        })
      }
    })
  },
  // 刷新页面数据
  dataRefresh() {
    this.setData({
      i_name:'',
      tabs:[]
    })
  }
})