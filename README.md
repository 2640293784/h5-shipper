# 项目简介



### 页面
- 首页
- 分类
- 购物车
- 个人中心


### API

- 首页
    + 轮播图(url,id,href)
    + 电影模块
    + 生日专区 (4个图片  url ,id)
    + 水果专区(同上)
- 分类
    + 分离类别菜单(id,name)
    + 产品列表接口 (img,name,id) ,字段需要(price,productType)
- 个人中心
    + 登录
    + 注册
    + 获取编号 (需要uid,可忽略)
    + 充值(cid,integral)      
    + 个人信息(含收货地址)
    + 收货地址 (增删改查,当前地址)
    
- 购物车
    + 加入购物车(产品详情)
    + 删改查
    + 提交 =====> 订单
- 订单
    + 订单列表
    + 订单详情
    + 确认收货


### Tables

1. users_tbl

|  id   | name  | phone | email  | addr_id  |
|  ----  | ----  |----  |----  |----  |
|  1   | zhangsan  | 123999444988 | 24562444@qq.com  | 1  |

 
2. addrs_tbl

|  id   | location  | checked | 
|  ----  | ----  |----  |
|  1   | 深圳市西乡街道  | true | 
|  2   | 深圳市西乡街道步行街  | false | 
 
 
3. products_tbl   

|  id   | type_id  | name | detail_id | 
|  ----  | ----  | ----  | ---- |
|  1   | 1  | 电视机 | 1 |
 
 
4. types_tbl

|  id   | name   | 
|  ----  | ---- |
|  1   | 生日专区  | 
|  2   | 数码专区  |
 
 
 
5. buy_carts_tbl 

|  id  | detail_id | nums | uid |
|  ----  | ----  |----  | ---- |
|  1   | 1  | 1  | 1 |
 
 

 
6. details_tbl

| id | title | img_url | size | unit | attr_name | attr_model | attr_l | attr_w | attr_h | attr_unit | attr_location | attr_send_time | rid |
|  ----  | ----  |----  | -----  | ---- | ----  |----  |----  | -----  | ------ |----  |----  |----  | -----  | 
|  1   | 生活/水壶  | img/a/b/2343.jpg | 122 | px | 大品牌 | AB_D | 44 | 33 | 55 | px | shenzhen | 2020-02-21 | 1 |
 
 

 7. related_tbl

|  id   | img_url   | 
|  ----  | ---- |
|  1   | img/a/b/2345657.jpg  | 
|  2   | img/a/b/2345322.jpg  | 

 

 8. orders_tbl 

|  id  | detail_id | nums | receive_status | uid |
|  ----  | ----  |----  | ---- | ---- |
|  1   | 1  | 1  | 1 | 1 |

9. dicts_tbl
 

 |  id  | type_code | value | label | description |
|  ----  | ----  |----  | ---- | ---- |
|  1   | orderStatus  | 1  | 未发货 | 订单状态 |
|  2   | orderStatus  | 2  | 已发货 | 订单状态 |
|  3   | orderStatus  | 3  | 已收货 | 订单状态 |