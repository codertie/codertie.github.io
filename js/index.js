Vue.component('vue-progress',{
  template: `<div>
              <div :style="fullBarStyle">
                <div :style="progressBarStyle"></div>
              </div>
            </div>`,
  props: ['value'],
  created() {
    this.progressBarStyle.width = `${this.value}%`;
  },
  data() { return {
    fullBarStyle: {
      width: '80%',
      height: '2px',
      backgroundColor: 'var(--dark-gray)',
    },
    progressBarStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--blue)',
    }
  }},
})
new Vue({
  el: '#resume',
  data: {
    msg: '',
    msgList: ['你好', '欢迎', '兴趣', '勤奋', '责任',],
    skillList: [{
      name: 'HTML 5',
      percentage: 70,
    },{
      name: 'CSS 3',
      percentage: 70,
    },{
      name: 'JavaScript ES 6',
      percentage: 60,
    },{
      name: 'Vue.js',
      percentage: 50,
    },{
      name: 'jQuery',
      percentage: 80,
    },{
      name: 'Photoshop',
      percentage: 70,
    },{
      name: 'Illustartor',
      percentage: 70,
    }],
    practiceList: [{
      title: '3D-Banner',
      href: 'pages/3dBanner.html',
    },{
      title: 'FMplayer',
      href: 'http://book.jirengu.com/jirengu-inc/jrg-vip9/members/%E8%B5%B5%E7%AB%A5/FMplayerJSONP.html',
    },{
      title: 'vue图片查看器',
      href: 'pages/viewer.html',
    },{
      title: '轮播',
      href: 'pages/carousel.html',
    },{
      title: '日期选择器',
      href: 'pages/canlendar.html',
    },{
      title: '弹窗',
      href: 'pages/dialog.html',
    },{
      title: '瀑布流',
      href: 'pages/waterfall.html',
    },{
      title: '懒加载',
      href: 'pages/lazyload.html',
    }]
  },
  mounted() {
    Vue.nextTick(() => {
      this.changeMsg()
    })
  },
  methods: {
    changeMsg() {
      const self = this;
      let num = 0;
      async function write(text) {
        for (let i = 0; i < text.length; i++) {
          await new Promise(r => {
            self.msg += text[i];
            setTimeout(r,500);
          })
        }
      }
      async function erase() {
        while(self.msg.length > 0) {
          await new Promise(r => {
            self.msg = self.msg.slice(0,self.msg.length - 1);
            setTimeout(r,300);
          })
        }
      }
      async function change() {
        while(true) {
          await write(self.msgList[num]);
          await new Promise(r => {
            setTimeout(r, 2000);
          });
          await erase();
          if(num === self.msgList.length - 1) {
            num = 0;
          } else {
            num += 1;
          }
        }
      }
      change();
    },
  }
})
