// components/self-swiper/self-swiper.js
var slideArray = [];


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pics:{
      type:Array,
      value:[
        'http://new-img2.ol-img.com/985x695/79/177/liWiyr0WQmve6.jpg',
        'http://img.sc115.com/hb/gx/12/881508194410039.jpg',
        'http://i3.download.fd.pchome.net/t_960x600/g1/M00/11/0D/ooYBAFX6D2yIad-LAACwJX4RBUMAACsQgBH2eAAALA9242.jpg'
      ],
      observer: function (newVal, oldVal){}
    },
    auto:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // initPics:[
    //   'http://new-img2.ol-img.com/985x695/79/177/liWiyr0WQmve6.jpg',
    //   'http://img.sc115.com/hb/gx/12/881508194410039.jpg',
    //         'http://i3.download.fd.pchome.net/t_960x600/g1/M00/11/0D/ooYBAFX6D2yIad-LAACwJX4RBUMAACsQgBH2eAAALA9242.jpg'
    // ],
    current:0,
    effect:"1",
    slideFlag:false,
  },

  attached:function(){
    if(this.data.auto == true){
      setInterval(()=>{
        this.switchNext();
      },3000)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switch:function(e){
      this.setData({
        current:e.currentTarget.dataset.idx
      })
    },
    switchNext:function(){
      this.setData({
        slideFlag:true
      })
      if(this.data.current < this.data.pics.length-1){
        var temp = this.data.current;
        temp++;
        this.setData({
          current:temp
        })
      }
      else{
        this.setData({
          current:0
        })
      }
    },
    slideStart:function(e){
      slideArray = [];
    },
    slide:function(e){
      slideArray.push(e.touches[0].pageX)
    },
    slideEnd:function(e){
      var diff = slideArray[slideArray.length - 1] - slideArray[0];
      if(diff < 0){
        if(this.data.current == 0){
          this.setData({
            current:this.data.pics.length-1
          })
        }
        else{
          var temp = this.data.current;
          temp--;
          this.setData({
            current:temp
          })
        }
      }
      else{
        if (this.data.current == this.data.pics.length - 1){
          this.setData({
            current: 0
          })
        }
        else{
          var temp = this.data.current;
          temp++;
          this.setData({
            current: temp
          })
        }
      }
    }
  }
})
