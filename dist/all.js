"use strict";function _defineProperty(n,i,t){return i in n?Object.defineProperty(n,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[i]=t,n}$(function(){var n=window.location.search.split("=");$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php?id=".concat(n[1]),function(n){console.log(n);for(var c=n.data,i="",t=0;t<c.length;t++)i+='\n      <li class="List" data-id="'.concat(c[t].pid,'">\n              <input type="checkbox" class="ck">\n              <img src="img/').concat(c[t].pimg,'">\n              <span>').concat(c[t].pname,'</span>\n              <span class="perPrice">￥').concat(c[t].pprice,'</span>\n              <span class="minus">-</span>\n              <input type="text" class="num" value="').concat(c[t].pnum,'" >\n              <span class="plus">+</span>\n              <span class="perTotalPrice">').concat(c[t].pprice*c[t].pnum,'</span>\n              <span class="del">删除</span>\n              </li>\n      ');$(".oul").append(i);for(var e=document.querySelectorAll(".num"),a=(document.querySelector(".oul"),0);a<c.length;a++)!function(a){var o=c[a].uid,n=c[a].pid;console.log(o),$(".minus").eq(a).click(function(){e[a].value--,$(".perTotalPrice").eq(a).text(c[a].pprice*e[a].value),$.get(" http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{uid:o,pid:n,pnum:e[a].value},function(n){console.log(n)})}),$(".plus").eq(a).click(function(){e[a].value++,$(".perTotalPrice").eq(a).text(c[a].pprice*e[a].value),$.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{uid:o,pid:n,pnum:e[a].value},function(n){console.log(n)})}),$(".del").eq(a).click(function(){console.log($(this)),$(".List").eq(a).empty(),$(".ck").eq(a).checked=!1,console.log($(".List"));var n=$(".List").eq(a).attr("data-id");$.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",{uid:o,pid:n},function(n){console.log(n)}),l();var i,t=0;for(i in c)t++;0==t&&($("#checkAll").get(0).checked=!1)})}(a);$("#checkAll").click(function(){for(var n=0;n<$(".ck").length;n++)$(".ck").get(n).checked=$("#checkAll").get(0).checked;l()});for(var o=0;o<$(".ck").length;o++)$(".ck").get(o).onclick=function(){for(var n=0,i=0;i<$(".ck").length;i++)$(".ck").get(i).checked&&n++;n==$(".ck").length?$("#checkAll").get(0).checked=!0:$("#checkAll").get(0).checked=!1,l()};function l(){for(var n=0,i=0;i<$(".ck").length;i++)$(".ck").get(i).checked&&(n+=parseInt($(".perTotalPrice").eq(i).text()));$("#totalPrice").text(n)}})}),$(function(){var n=window.location.search,i=68590;""!=n&&(t=n.split("=")[1].split("&"),i=t[1],console.log(t),t[0]&&($("#login").html("<p>".concat(t[0]," 欢迎你</p>")),$("#zhuce").html("退出"))),$("#zhuce").click(function(){"注册"==$("#zhuce").text()?location.href="register.html":($("#login").html("登录"),$("#zhuce").html("注册"),location.href="index.html")});var n="img/navlist.png",t="HuaWieMate系列";function a(){var i=$(document).scrollTop();$(document).on("scroll.unable",function(n){$(document).scrollTop(i)})}$.each(["手机","智慧屏","智能穿戴","耳机音箱","电脑","平板","智能路由","配件","生态产品","家用电器","美食酒饮","增值服务/企业商用"],function(n,i){$(".navTop").append('<a href="" class="navTopn">\n   <span>'.concat(i,'</span>\n   <svg class="icon youjiantou" aria-hidden="true">\n     <use xlink:href="#icon-youjiantou"></use>\n   </svg>\n </a>'))});var o='\n   <div class="navTopr">\n   <img src="'.concat(n,'" alt="">\n   <span>').concat(t,"</span>\n   </div>\n   ");$(".navTop").hover(function(n){for(var i=0;i<14;i++)$(".navTop1").css({display:"block"}).append(o)},function(n){for(var i=0;i<14;i++)$(".navTop1").css({display:"none"}).html("")}),$(".navTop1").hover(function(){for(var n=0;n<14;n++)$(".navTop1").css({display:"block"}).append(o)},function(){for(var n=0;n<14;n++)$(".navTop1").css({display:"none"}).html("")}),$("#sousuo").on("click",function(){$(".layui-rowNav1").css({visibility:"hidden "}),$(".navInp").fadeIn("slow").css({display:"block"}),a()}),$(".cuo").on("click",function(){$(".navInp").css({display:"none"}),$(".layui-rowNav1").css({visibility:"visible "}),$(document).unbind("scroll.unable")});for(var c=0;c<7;c++)$(".layui-contList").append(' <a href="">\n  <div class="contList">\n    <svg class="icon qiye" aria-hidden="true">\n      <use xlink:href="#icon-qiyegouruzhu"></use>\n    </svg>\n    <p>企业购</p>\n  </div>\n</a>');for(c=0;c<4;c++)$(".layui-rowCont1").append('\n<a href="#" class="rowContimg">\n<div>\n  <img src="img/cont.webp" alt="">\n</div>\n</a>\n');for(c=0;c<7;c++)$(".layui-rowCont2").append('\n  <a href="#" class="contImgLast">\n              <img src="img/cont.png" alt="">\n              <p><span>新品上市</span>MateBook 13s</p>\n              <p>享3期免息</p>\n              <p>￥6999</p>\n            </a>\n  ');function e(n,o){$.get({url:"http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=8&pagenum=".concat(n),data:{uid:68590}},function(n){for(var i=n.data,t=0;t<i.length;t++){var a='\n          <a href="list.html?id='.concat(i[t].pid,'" class="layuiImglist" >\n                    <img src="img/').concat(i[t].pimg,'" alt="" />\n                    <h4>').concat(i[t].pname,"</h4>\n                    <p>").concat(i[t].pdesc,"</p>\n                    <p>").concat(i[t].pprice,"</p>\n                    <div>赠送积分</div>\n                  </a>\n          ");$(o).append(a)}})}function l(n,i,t,a){$(t).click(function(){$(i).empty(),e(n,i),"timer"==a&&setTimeout(function(){$("".concat(i," .layuiImglist")).css({width:"271px",height:"373px"})},100)})}$(window).scroll(function(){var n,i=$(document).scrollTop();100<i?($(".layui-rowNav11").css((_defineProperty(n={display:"block",position:"fixed","z-index":"1001"},"display","flex"),_defineProperty(n,"top","0"),_defineProperty(n,"height","70px"),_defineProperty(n,"width","100%"),_defineProperty(n,"backgroundColor","#fff"),n)),$("#sousuo1").click(function(){$("html, body").animate({scrollTop:0},0),$(".layui-rowNav1").css({visibility:"hidden "}),$(".navInp").fadeIn("slow").css({display:"block"}),0==$("html, body").scrollTop()&&a()})):i<100&&$(".layui-rowNav11").css({display:"none"})}),$(".layuiConttit>a").click(function(n){$(n.target).css({fontSize:"24px",color:"#000"}).siblings().css({fontSize:"20px"})}),e(9,"#layui-rowContd3"),l(9,"#layui-rowContd3","#pho"),l(7,"#layui-rowContd3","#zhihui"),l(6,"#layui-rowContd3","#ipad"),e(8,"#layui-rowContd4"),l(5,"#layui-rowContd4","#biao"),l(4,"#layui-rowContd4","#huan"),l(8,"#layui-rowContd4","#VR"),e(3,"#layui-rowContd5"),$("#shengtai").click(function(){$("#layui-rowContd5").empty(),$("#layui-rowContd5").append('<a href=""><img class="teshu" src="img/1.png" alt="" /></a>'),e(3,"#layui-rowContd5")}),l(2,"#layui-rowContd5","#jinghua","timer"),l(1,"#layui-rowContd5","#suo","timer"),e(0,"#layui-rowContd6"),$("#meishi").click(function(){$("#layui-rowContd6").empty(),$("#layui-rowContd6").append('<a href=""><img class="teshu" src="img/2.png" alt="" /></a>'),e(0,"#layui-rowContd6")}),l(1,"#layui-rowContd6","#meijiu","timer"),l(2,"#layui-rowContd6","#liangshi","timer"),$(window).scroll(function(){var n=$(document).scrollTop();200<n?$(".floatTop").css({display:"block"}):n<200&&$(".floatTop").css({display:"none"}),$("floatTop").click(function(){$("html,body").animate({scrollTop:0},5e3)})}),$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php?id=".concat(i),function(n){for(var i=n.data,t="",a=0;a<i.length;a++)t+='\n      <dd>\n        <input type="checkbox" class="ck">\n        <img src="img/'.concat(i[a].pimg,'" alt="">\n        <span>').concat(i[a].pname,"</span>\n        <span>￥").concat(i[a].pprice,"</span>\n        <span>X").concat(i[a].pnum,"</span>\n      \n      </dd>\n      ");$("#gouwuList").html(t),$(".num").text(i.length),0!=i.length&&($("#gouwuIcon").css({display:"block"}),$("#gouwuIcon").text(i.length))}),$("#gouwuFloat").click(function(){location.href="car.html?uid=".concat(i)})}),$(function(){$("#messageLogin").click(function(){var n=$("#spanMessage").text();"短信验证码登录"==n?($("#divInp").html('\n      <div class="div-input">\n      <svg class=\'icon ren\' aria-hidden=\'true\'>\n          <use xlink:href=\'#icon-ren\'></use>\n          </svg>\n      <input type="text" placeholder="手机号码" maxlength="11">\n  </div>\n <div class="div-input">\n  <svg class=\'icon suo\' aria-hidden=\'true\'>\n      <use xlink:href=\'#icon-suo\'></use>\n      </svg>\n  <input type="text" placeholder="手机验证码">\n  <a href="#" class="inp-btn" id="inpBtn">获取验证码</a>\n </div>'),n=$("#spanMessage").text("账号密码登录")):"账号密码登录"==n&&($("#divInp").html("\n <div class=\"div-input\">\n <svg class='icon ren' aria-hidden='true'>\n      <use xlink:href='#icon-ren'></use>\n  </svg>\n  <input type=\"text\" placeholder=\"用户名/手机/邮箱\">\n  </div>\n  <div class=\"div-input\">\n      <svg class='icon suo' aria-hidden='true'>\n          <use xlink:href='#icon-suo'></use>\n      </svg>\n  <input type=\"password\" placeholder=\"密码\">\n  </div>"),n=$("#spanMessage").text("短信验证码登录")),$("#inpBtn").click(function(){var n=60;console.log(1);var i=setInterval(function(){0==n?($("#inpBtn").text("重新获取"),n=60,clearTimeout(i)):($("#inpBtn").text(n+"s后重新获取"),n--)},1e3)})}),$("#btnSubmit").click(function(){$.get("http://jx.xuzhixiang.top/ap/api/login.php",{username:$("#username").val(),password:$("#password").val()},function(n){alert(n.msg),document.cookie="id="+n.data.id,location.href="index.html?username=".concat(n.data.username,"&").concat(n.data.id),console.log(n)})})}),$(function(){var n=window.location.search.split("=")[1];$.get("http://jx.xuzhixiang.top/ap/api/detail.php?id=".concat(n),function(n){var i=n.data;console.log(i.pimg);n='\n  <img src="img/'.concat(i.pimg,'" alt="">\n  <div class="listDiv">\n  <h4>').concat(i.pname,"</h4>\n  <p>【优惠信息】：").concat(i.pdesc,"</p>\n  <p>价格：￥").concat(i.pprice,'</p>\n\n  <input type="text" id="inp" value="1">\n  <a href="javascript:void(0)" id="jia">+</a>\n  <a href="javascript:void(0)" id="jian">-</a>\n  <div class="shop">\n      <a href="javascript:void(0)" id="shopCar">加入购物车</a>\n      <a href="javascript:void(0)" id="shopOder">立即下单</a> \n      </div>\n  </div>\n  \n  ');$(".list1").append(n);var t=document.getElementById("inp");$("#jia").click(function(){t.value++}),$("#jian").click(function(){t.value--,0==t.value&&(t.value=1)}),$("#inp").change(function(){t.value<=1&&(t.value=1)});var a=i.uid,o=i.pid;$("#shopCar").click(function(){var n=t.value;location.href="car.html?uid=".concat(a),$.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{uid:a,pid:o,pnum:n},function(n){console.log(n)})})})}),$(function(){$("#inpBtn").click(function(){var n=60;console.log(1);var i=setInterval(function(){0==n?($("#inpBtn").text("重新获取"),n=60,clearTimeout(i)):($("#inpBtn").text(n+"s后重新获取"),n--)},1e3)}),$("#btnsubmit").click(function(){$.get("http://jx.xuzhixiang.top/ap/api/reg.php",{username:$("#username").val(),password:$("#password").val()},function(n){alert(n.msg),console.log(n),location.href="login.html"})})});