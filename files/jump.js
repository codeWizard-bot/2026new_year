// 本地项目跳转逻辑
function jump1() {
    // 本地项目无需外部跳转
    console.log('本地项目初始化');
}

function jump2() {
    // 本地项目无需外部跳转
    console.log('页面加载完成');
}

window.onhashchange = function() {
    // 本地项目无需外部跳转
};

function hh() {
    // 本地项目无需修改历史状态
}

function jp() {
    // 本地项目无需外部跳转
}

window.onload = function() {
    // 本地项目初始化
    console.log('页面加载完成');
};

window.onpageshow = jump2;
