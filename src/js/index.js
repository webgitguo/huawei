$(function () {
  let search = window.location.search

  let arr = search.split("=")
  let username = arr[1].split("&")
  let uid = username[1]
  console.log(uid)
  if (username[0]) {
    $("#login").html(`<p>${username[0]} 欢迎你</p>`)
    $("#zhuce").html("退出")
  }

  let arr = ["手机", "智慧屏", "智能穿戴", "耳机音箱", "电脑", "平板", "智能路由", "配件", "生态产品", "家用电器", "美食酒饮", "增值服务/企业商用"]
  let obj = { srcImg: "img/navlist.png", name: "HuaWieMate系列" }
  function unScroll() {//禁用滚动条
    var top = $(document).scrollTop();
    $(document).on('scroll.unable', function (e) {
      $(document).scrollTop(top);
    })
  }
  function removeUnScroll() {//移除禁用滚动条
    $(document).unbind("scroll.unable");
  }

  $.each(arr, (i, n) => {
    $(".navTop").append(`<a href="" class="navTopn">
   <span>${n}</span>
   <svg class="icon youjiantou" aria-hidden="true">
     <use xlink:href="#icon-youjiantou"></use>
   </svg>
 </a>` )
  })
  /*  $(".navTop").on("hover", function (e) {
     console.log(e)
   }) */
  let str = `
   <div class="navTopr">
   <img src="${obj.srcImg}" alt="">
   <span>${obj.name}</span>
   </div>
   `
  $(".navTop").hover(
    function (e) {
      for (let i = 0; i < 14; i++) {
        $(".navTop1").css({ display: "block" }).append(str)
      }
    }
    , function (e) {
      for (let i = 0; i < 14; i++) {
        $(".navTop1").css({ display: "none" }).html("")
      }
    })
  $(".navTop1").hover(function () {
    for (let i = 0; i < 14; i++) {
      $(".navTop1").css({ display: "block" }).append(str)
    }
  }, function () {
    for (let i = 0; i < 14; i++) {
      $(".navTop1").css({ display: "none" }).html("")
    }
  })
  $("#sousuo").on("click", function () {

    $(".layui-rowNav1").css({ visibility: "hidden " })
    $(".navInp").fadeIn("slow").css({ display: "block" })
    unScroll()
  })
  $(".cuo").on("click", function () {
    $(".navInp").css({ display: "none" })
    $(".layui-rowNav1").css({ visibility: "visible " })
    removeUnScroll()
  })
  for (var i = 0; i < 7; i++) {
    let str1 = ` <a href="">
  <div class="contList">
    <svg class="icon qiye" aria-hidden="true">
      <use xlink:href="#icon-qiyegouruzhu"></use>
    </svg>
    <p>企业购</p>
  </div>
</a>`
    $(".layui-contList").append(str1)
  }
  for (var i = 0; i < 4; i++) {
    let str2 = `
<a href="#" class="rowContimg">
<div>
  <img src="img/cont.webp" alt="">
</div>
</a>
`
    $(".layui-rowCont1").append(str2)
  }
  for (var i = 0; i < 7; i++) {
    let str3 = `
  <a href="#" class="contImgLast">
              <img src="img/cont.png" alt="">
              <p><span>新品上市</span>MateBook 13s</p>
              <p>享3期免息</p>
              <p>￥6999</p>
            </a>
  `
    $(".layui-rowCont2").append(str3)
  }


  $(window).scroll(function () {
    let srocl = $(document).scrollTop()
    //console.log(srocl)
    if (srocl > 100) {
      $(".layui-rowNav11").css({
        display: "block",
        position: "fixed",
        "z-index": "1001",
        display: "flex",
        top: "0",
        height: "70px",
        width: "100%",
        backgroundColor: "#fff"
      })
      $("#sousuo1").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 0)
        $(".layui-rowNav1").css({ visibility: "hidden " })
        $(".navInp").fadeIn("slow").css({ display: "block" })
        if ($('html, body').scrollTop() == 0) {
          unScroll()
        }
      })
    } else if (srocl < 100) {
      $(".layui-rowNav11").css({ display: "none" })
    }

  })
  $(".layuiConttit>a").click(function (e) {
    $(e.target).css({ fontSize: "24px", color: "#000" }).siblings().css({ fontSize: "20px" })
  })

  function getData(num, id, uid) {//获取列表数据
    $.get({ url: `http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=8&pagenum=${num}`, data: { uid } }, (res) => {
      //console.log(res.data);
      let str = '';
      let data = res.data;
      for (let i = 0; i < data.length; i++) {
        //console.log(data[i].pid)
        let str = `
          <a href="list.html?id=${data[i].pid}" class="layuiImglist" >
                    <img src="img/${data[i].pimg}" alt="" />
                    <h4>${data[i].pname}</h4>
                    <p>${data[i].pdesc}</p>
                    <p>${data[i].pprice}</p>
                    <div>赠送积分</div>
                  </a>
          `
        $(id).append(str)
      }
    });
  }
  function clickEvent(num, id, id1, callback) {
    $(id1).click(function () {
      $(id).empty()
      getData(num, id, uid)
      callback = callback
      if (callback == "timer") {
        setTimeout(function () {//需要等数据加载之后才可以获取到属性
          $(`${id} .layuiImglist`).css({ width: "271px", height: "373px" })
        }, 100)
      }
    })
  }
  getData(9, "#layui-rowContd3", uid)
  clickEvent(9, "#layui-rowContd3", "#pho")
  /*   $("#pho").click(function () {
      $("#layui-rowContd3").empty()
      getData(9, "#layui-rowContd3")
    }) */
  clickEvent(7, "#layui-rowContd3", "#zhihui")
  /* $("#zhihui").click(function () {
    $("#layui-rowContd3").empty()
    getData(7, "#layui-rowContd3")
  }) */
  clickEvent(6, "#layui-rowContd3", "#ipad")
  /*  $("#ipad").click(function () {
     $("#layui-rowContd3").empty()
     getData(6, "#layui-rowContd3")
   }) */
  getData(8, "#layui-rowContd4", uid)
  clickEvent(5, "#layui-rowContd4", "#biao")
  /*  $("#biao").click(function () {
     $("#layui-rowContd4").empty()
     getData(5, "#layui-rowContd4")
   }) */
  clickEvent(4, "#layui-rowContd4", "#huan")
  /*  $("#huan").click(function () {
     $("#layui-rowContd4").empty()
     getData(4, "#layui-rowContd4")
   }) */
  clickEvent(8, "#layui-rowContd4", "#VR")
  /*  $("#VR").click(function () {
     $("#layui-rowContd4").empty()
     getData(8, "#layui-rowContd4")
   }) */
  getData(3, "#layui-rowContd5", uid)
  $("#shengtai").click(function () {
    $("#layui-rowContd5").empty()
    $("#layui-rowContd5").append(`<a href=""><img class="teshu" src="img/1.png" alt="" /></a>`)
    getData(3, "#layui-rowContd5", uid)
  })
  clickEvent(2, "#layui-rowContd5", "#jinghua", "timer")
  /* $("#jinghua").click(function () {
    $("#layui-rowContd5").empty()
    getData(2, "#layui-rowContd5")
    console.log($("#layui-rowContd5 .layuiImglist"))
    setTimeout(function () {//需要等数据加载之后才可以获取到属性
      $("#layui-rowContd5 .layuiImglist").css({ width: "271px", height: "373px" })
    }, 100)
  }) */
  clickEvent(1, "#layui-rowContd5", "#suo", "timer")
  /*   $("#suo").click(function () {
      $("#layui-rowContd5").empty()
      getData(1, "#layui-rowContd5")
      setTimeout(function () {
        $("#layui-rowContd5 .layuiImglist").css({ width: "271px", height: "373px" })
      }, 100)
    }) */
  getData(0, "#layui-rowContd6", uid)
  $("#meishi").click(function () {
    $("#layui-rowContd6").empty()
    $("#layui-rowContd6").append(`<a href=""><img class="teshu" src="img/2.png" alt="" /></a>`)
    getData(0, "#layui-rowContd6", uid)
  })
  clickEvent(1, "#layui-rowContd6", "#meijiu", "timer")
  clickEvent(2, "#layui-rowContd6", "#liangshi", "timer")
  $(window).scroll(function () {
    let srocl = $(document).scrollTop()
    // console.log(srocl)
    if (srocl > 200) {
      $(".floatTop").css({ display: "block" })
    } else if (srocl < 200) {
      $(".floatTop").css({ display: "none" })
    }
    $("floatTop").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 5000)

    })
  })
  $.get(`http://jx.xuzhixiang.top/ap/api/cart-list.php?id=${uid}`, (res) => {

    let data = res.data
    let str = ""
    for (let i = 0; i < data.length; i++) {
      str += `
      <dd>
        <input type="checkbox" class="ck">
        <img src="img/${data[i].pimg}" alt="">
        <span>${data[i].pname}</span>
        <span>￥${data[i].pprice}</span>
        <span>X${data[i].pnum}</span>
      
      </dd>
      `
    }
    $("#gouwuList").html(str)
    $(".num").text(data.length)
    if (data.length != 0) {
      $("#gouwuIcon").css({ display: "block" })
      $("#gouwuIcon").text(data.length)
    }

  })



})

