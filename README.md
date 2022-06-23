# Charge_express
新能源汽车充电后端
author wu

```
//获取用户信息
http://www.sakura1470.xyz:4000/users 
```
```
//没有请求参数
//返回例子：
{
    "users": [
        {
            "_id": "6293622cc264e603d127d3ae",
            "username": "wuhongru",
            "password": "123456"
        },
        {
            "_id": "62b479b867bb4fa5fe221562",
            "username": "dear",
            "password": "123456789",
            "__v": 0
        }
    ]
}
```
```
//登录
http://www.sakura1470.xyz:4000/users/login
//两个query 一个username 一个password
```

```
//注册
http://www.sakura1470.xyz:4000/users/sign
//两个query 一个username 一个password
```
```
http://www.sakura1470.xyz:4000/charges
//充电桩列表
```
```
//返回值样例
{
    "places": [
        {
            "_id": "62b40b374634995aca6b091f",
            "latitude": "39.067063",
            "longitude": "117.106318",
            "status": "可用",
            "maxpower": "7kw",
            "price": "1.5h/h"
        },
        {
            "_id": "62b40b524634995aca6b0920",
            "latitude": "39.068462",
            "longitude": "117.106776",
            "status": "可用",
            "maxpower": "3.5kw",
            "price": "1h/h"
        },
        {
            "_id": "62b40b664634995aca6b0921",
            "latitude": "39.068944",
            "longitude": "117.105674",
            "status": "维修中",
            "maxpower": "7kw",
            "price": "1.5h/h"
        }
    ]
}
```



