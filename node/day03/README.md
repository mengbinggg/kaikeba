#### node中跨域解决方式：

##### 1. JSONP：
> 原理：script标签的src属性不存在跨域问题
- 实现步骤：
    1. 前端构造script标签请求指定URL，并指定回调函数callback的函数名fn
    2. 服务器处理请求，并返回函数名为fn的函数执行语句，参数为请求处理结果
    3. 前端执行该函数

##### 2. 代理服务器：
> 原理：服务器之间的请求没有跨域的问题
- 实现步骤：
    1. 首先访问同源服务器
    2. 该同源服务器转发请求到目标服务器
    3. 将得到的结果转发给前端

##### 3. CORS跨域资源共享：
> 原理：CORS是一个W3C标准，塔允许浏览器向跨域服务器发送XMLHTTPRequest请求
- 简单请求：请求方法为(get/post/head)，Content-Type为(application/x-www-form-urlencoded、multipart/form-data、text-plain)，没有自定义请求头
    1. 设置允许跨域的域名Access-Control-Allow-Origin（*代表任意域名）
- 预检请求(preflight request)：服务器对浏览器发送的请求进行检查
    1. 发送预检请求
    2. 设置允许跨域的域名Access-Control-Allow-Origin
    3. 设置允许跨域的header类型Access-Control-Allow-Headers
    4. 设置允许跨域的请求方式Access-Control-Allow-Methods
- 如果请求携带cookie，必须设置Access-Control-Allow-Credentials为true
