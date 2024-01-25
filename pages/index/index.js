// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    units: [
      {
        index: 0,
        hiddenClass: '',
        name: '主神',
        health: 50,
        max_health: 50,
        defend: 0,
        max_defend: 15,
        attack: 3,
        move: 2,
      },
      {
        index: 1,
        hiddenClass: '',
        name: '单位',
        health: 50,
        max_health: 50,
        defend: 0,
        max_defend: 15,
        attack: 3,
        move: 1,
      },
      {
        index: 2,
        hiddenClass: '',
        name: '单位',
        health: 50,
        max_health: 50,
        defend: 0,
        max_defend: 15,
        attack: 3,
        move: 1,
      },
    ],
    userInfo: {},
    hasUserInfo: false,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
  },

  resetUnitsDate: function() {
    wx.showModal({  
      title: '确认',  
      content: '确定要重置为初始值吗？',  
      success: (res) => {  
        if (res.confirm) {  
          const units = [
            {name:'主神',index:0,hiddenClass:'',health:50,max_health:50,attack:3,defend:0,move:2,max_defend:15,},
            {name:'单位',index:1,hiddenClass:'',health:50,max_health:50,attack:3,defend:0,move:1,max_defend:15,},
            {name:'单位',index:2,hiddenClass:'',health:50,max_health:50,attack:3,defend:0,move:1,max_defend:15,},
          ];
          this.setData({ units:units });
        } else if (res.cancel) {  
          // 用户点击了取消按钮，不执行任何操作  
          console.log('用户点击了取消按钮');  
        }
      }
    });
  },

  addUnit: function() {  
    const newUnit = {
      index: this.data.units.length,
      name: "单位",
      hiddenClass:'',
      health: 0,
      max_health: 0,
      defend: 0,
      max_defend: 0,
      attack: 0,
      move: 0,
    }; // 新生成的表格数据  
    const units = this.data.units;
    units.push(newUnit); // 将新表格添加到表格数组中  
    this.setData({ units }); // 更新数据，以触发界面更新  
  },

  deleteUnit: function(event) {
    var dataIndex = event.currentTarget.dataset.index;
    wx.showModal({  
      title: '确认',  
      content: '确定要删除该单位吗？',  
      success: (res) => {  
        if (res.confirm) {  
          const units = this.data.units;
          delete this.data.units[dataIndex];
          this.setData({ units:units.filter(item => item !== null)  });
        } else if (res.cancel) {  
          // 用户点击了取消按钮，不执行任何操作  
          console.log('用户点击了取消按钮');  
        }
      }
    });
  },

  hiddenInfo: function(event) {
    var dataIndex = event.currentTarget.dataset.index; 
    this.setData({  
      ['units['+dataIndex+'].hiddenClass']: this.data.units[dataIndex].hiddenClass === 'hidden' ? '' : 'hidden' // 切换遮挡状态  
    });  
  },

  inputUnitName: function(event) {
    var dataIndex = event.currentTarget.dataset.index;
    this.setData({
      ['units['+dataIndex+'].name']: this.data.units[dataIndex].name,
    });
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
    } else if (buttonId === 'max-defend-delete') {
      this.setData({
        ['units['+dataIndex+'].max_defend']: this.data.units[dataIndex].max_defend - 1,
      });
    } else if (buttonId === 'max-defend-add') {
      this.setData({
        ['units['+dataIndex+'].max_defend']: this.data.units[dataIndex].max_defend + 1,
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
      } else if (buttonId === 'max-defend-delete') {
        that.setData({
          ['units['+dataIndex+'].max_defend']: that.data.units[dataIndex].max_defend - 1,
        });
      } else if (buttonId === 'max-defend-add') {
        that.setData({
          ['units['+dataIndex+'].max_defend']: that.data.units[dataIndex].max_defend + 1,
        });
      }
    }, 50); // 设置间隔时间，可以根据需要调整  
      
    // 当长按结束时，清除定时器  
    setTimeout(function() {  
        clearInterval(timer);  
      }, 500); // 设置长按结束的时长，可以根据需要调整  
    },  


})
