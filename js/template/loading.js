//待所有元素加载完成后隐藏加载动画
$(window).on("load", function () {
    $(".loading").fadeOut("slow");
    setTimeout(function () { $(".loading").css("display", "none") }, 2000);
});

var html = `<div class="wrapper">
<div class="line line1">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line2">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line3">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line4">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line5">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line6">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line7">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line8">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line9">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line10">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
<div class="line line11">
    <span class="circle circle-top"></span>
    <div class="dotted">
        <span class="dot dot-top"></span>
        <span class="dot dot-middle-top"></span>
        <span class="dot dot-middle-bottom"></span>
        <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
</div>
</div>`;
var target = document.getElementById('loading');
target.innerHTML = html;