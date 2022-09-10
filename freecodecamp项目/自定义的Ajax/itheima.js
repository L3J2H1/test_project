function resolveData(data) {
    var arr = [];
    for (let k in data) {
        var str = k + '=' + data[k];
        arr.push(str);
    }

    return arr.join('&');
}

// var result = resolveData({ name: 'zs', age: 23 });
// console.log(result);

var xhr = new XMLHttpRequest();

function itheima(options) {


    var qs = resolveData(options.data);

    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs);
        xhr.send();
    } else if (options.method.toUpperCase() === "POST") {
        xhr.open(options.method, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
    }

}
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.response === 200) {
        var result = JSON.parse(xhr.responseText);
        options.success(result);
    }
}