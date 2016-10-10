var vue = new Vue({
    el: '#main',
    data: {
        name: '',
        no: '',
        start: '',
        end: '',
        com: '',
        com_shot: '',
    }
});

var params = location.href.split('?')[1]

if (params != null) {
    var arr = params.split('&');
    var i = 0
    for (; i < arr.length; i++) {
        kv = arr[i].split('=');
        vue.$set(kv[0], decodeURI(kv[1]));
    }
}

