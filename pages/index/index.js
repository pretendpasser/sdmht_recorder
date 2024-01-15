// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    units: [
      {
        health: 50,
        max_health: 50,
        attack: 3,
        defend: 0,
        move: 1,
        max_move: 1,
      },
      {
        health: 50,
        max_health: 50,
        attack: 3,
        defend: 0,
        move: 1,
        max_move: 1,
      },
      {
        health: 50,
        max_health: 50,
        attack: 3,
        defend: 0,
        move: 1,
        max_move: 1,
      },
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  resetUnitsDate: function() {
    wx.showModal({  
      title: '确认',  
      content: '你确定要执行该操作吗？',  
      success: (res) => {  
        if (res.confirm) {  
          const units = [
            {health: 50,max_health: 50,attack: 3,defend: 0,move: 1,max_move: 1,},
            {health: 50,max_health: 50,attack: 3,defend: 0,move: 1,max_move: 1,},
            {health: 50,max_health: 50,attack: 3,defend: 0,move: 1,max_move: 1,},
          ];
          this.setData({ units:units });
        } else if (res.cancel) {  
          // 用户点击了取消按钮，不执行任何操作  
          console.log('用户点击了取消按钮');  
        }
      }
    });
  },

  addTable: function() {  
    const newUnit = {
      health: 0,
      max_health: 0,
      attack: 0,
      defend: 0,
      move: 0,
      max_move: 0,
    }; // 新生成的表格数据  
    const units = this.data.units;  
    units.push(newUnit); // 将新表格添加到表格数组中  
    this.setData({ units }); // 更新数据，以触发界面更新  
  },
  
  // 处理按钮点击事件
  handleButtonClick: function(event) {
    var buttonId = event.currentTarget.dataset.id;
    var dataIndex = event.currentTarget.dataset.index; 

    if (buttonId === 'health-delete') {
      this.setData({
        ['units['+dataIndex+'].health']: this.data.units[dataIndex].health - 1,
      });
    } else if (buttonId === 'health-add') {
      this.setData({
        ['units['+dataIndex+'].health']: this.data.units[dataIndex].health + 1,
      });
    } else if (buttonId === 'max-health-delete') {
      this.setData({
        ['units['+dataIndex+'].max_health']: this.data.units[dataIndex].max_health - 1,
      });
    } else if (buttonId === 'max-health-add') {
      this.setData({
        ['units['+dataIndex+'].max_health']: this.data.units[dataIndex].max_health + 1,
      });
    } else if (buttonId === 'attack-delete') {
      this.setData({
        ['units['+dataIndex+'].attack']: this.data.units[dataIndex].attack - 1,
      });
    } else if (buttonId === 'attack-add') {
      this.setData({
        ['units['+dataIndex+'].attack']: this.data.units[dataIndex].attack + 1,
      });
    } else if (buttonId === 'defend-delete') {
      this.setData({
        ['units['+dataIndex+'].defend']: this.data.units[dataIndex].defend - 1,
      });
    } else if (buttonId === 'defend-add') {
      this.setData({
        ['units['+dataIndex+'].defend']: this.data.units[dataIndex].defend + 1,
      });
    } else if (buttonId === 'move-delete') {
      this.setData({
        ['units['+dataIndex+'].move']: this.data.units[dataIndex].move - 1,
      });
    } else if (buttonId === 'move-add') {
      this.setData({
        ['units['+dataIndex+'].move']: this.data.units[dataIndex].move + 1,
      });
    } else if (buttonId === 'max-move-delete') {
      this.setData({
        ['units['+dataIndex+'].max_move']: this.data.units[dataIndex].max_move - 1,
      });
    } else if (buttonId === 'max-move-add') {
      this.setData({
        ['units['+dataIndex+'].max_move']: this.data.units[dataIndex].max_move + 1,
      });
    }
  },

  handleButtonPress: function(event) {
    var buttonId = event.currentTarget.dataset.id;
    var dataIndex = event.currentTarget.dataset.index; 
    var that = this;  
    var timer = setInterval(function() {  
      if (buttonId === 'health-delete') {
        that.setData({
          ['units['+dataIndex+'].health']: that.data.units[dataIndex].health - 1,
        });
      } else if (buttonId === 'health-add') {
        that.setData({
          ['units['+dataIndex+'].health']: that.data.units[dataIndex].health + 1,
        });
      } else if (buttonId === 'max-health-delete') {
        that.setData({
          ['units['+dataIndex+'].max_health']: that.data.units[dataIndex].max_health - 1,
        });
      } else if (buttonId === 'max-health-add') {
        that.setData({
          ['units['+dataIndex+'].max_health']: that.data.units[dataIndex].max_health + 1,
        });
      } else if (buttonId === 'attack-delete') {
        that.setData({
          ['units['+dataIndex+'].attack']: that.data.units[dataIndex].attack - 1,
        });
      } else if (buttonId === 'attack-add') {
        that.setData({
          ['units['+dataIndex+'].attack']: that.data.units[dataIndex].attack + 1,
        });
      } else if (buttonId === 'defend-delete') {
        that.setData({
          ['units['+dataIndex+'].defend']: that.data.units[dataIndex].defend - 1,
        });
      } else if (buttonId === 'defend-add') {
        that.setData({
          ['units['+dataIndex+'].defend']: that.data.units[dataIndex].defend + 1,
        });
      } else if (buttonId === 'move-delete') {
        that.setData({
          ['units['+dataIndex+'].move']: that.data.units[dataIndex].move - 1,
        });
      } else if (buttonId === 'move-add') {
        that.setData({
          ['units['+dataIndex+'].move']: that.data.units[dataIndex].move + 1,
        });
      } else if (buttonId === 'max-move-delete') {
        that.setData({
          ['units['+dataIndex+'].max_move']: that.data.units[dataIndex].max_move - 1,
        });
      } else if (buttonId === 'max-move-add') {
        that.setData({
          ['units['+dataIndex+'].max_move']: that.data.units[dataIndex].max_move + 1,
        });
      }
    }, 50); // 设置间隔时间，可以根据需要调整  
      
    // 当长按结束时，清除定时器  
    setTimeout(function() {  
        clearInterval(timer);  
      }, 500); // 设置长按结束的时长，可以根据需要调整  
    },  

})

