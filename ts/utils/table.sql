/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Server Version : 50621
 Source Host           : localhost
 Source Database       : RUNOOB

 Target Server Version : 50621
 File Encoding         : utf-8

 Date: 04/13/2017 14:25:12 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `runoob_tbl`
-- ----------------------------
DROP TABLE IF EXISTS `users_tbl`;
CREATE TABLE `users_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `addr_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `runoob_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `users_tbl` VALUES ('1', 'admin', '123',NULL,NULL,NULL);
COMMIT;

-- ----------------------------
--  Table structure for `tcount_tbl`
-- ----------------------------
DROP TABLE IF EXISTS `addrs_tbl`;
CREATE TABLE `addrs_tbl` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `uid` int(11) NOT NULL ,
    `provice_id` int(11) DEFAULT NULL ,
    `city_id` int(11) DEFAULT NULL ,
    `county_id` int(11) DEFAULT NULL ,
    `provice` varchar(50) DEFAULT NULL,
    `city` varchar(50) DEFAULT NULL,
    `county` varchar(50) DEFAULT NULL,
    `detail_locatoin` varchar(100) NOT NULL,
    `name` varchar(50) NOT NULL,
    `tel` varchar(22) NOT NULL,
    `checked` boolean DEFAULT false ,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `addrs_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `addrs_tbl` VALUES (0,1, 440000,440300,440306,'广东','深圳','宝安区','西乡街道','张三','123455666',true);
INSERT INTO `addrs_tbl` VALUES (0,1, 440000,440300,440304,'广东','深圳','龙岗','坂田','李四','123455666',false);
INSERT INTO `addrs_tbl` VALUES (0,1, 440000,440300,440304,'广东','深圳','龙岗','五和地铁站C出口100米','王五','123455666',false);
 
 
 
COMMIT;

-- ----------------------------
--  Table structure for `tcount_tbl`
-- ----------------------------
DROP TABLE IF EXISTS `products_tbl`;
CREATE TABLE `products_tbl` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `type_id` int(11) NOT NULL ,
    `name` varchar(100) NOT NULL,
    `detail_id` int(11) NOT NULL ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `products_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `products_tbl` VALUES ('1', 1,'电视机',1);
INSERT INTO `products_tbl` VALUES ('2', 2,'小电影',2);
COMMIT;





DROP TABLE IF EXISTS `types_tbl`;
CREATE TABLE `types_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `types_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `types_tbl` VALUES (0, '积分商场');
INSERT INTO `types_tbl` VALUES (0, '影音天地');
INSERT INTO `types_tbl` VALUES (0, '生日专区');
INSERT INTO `types_tbl` VALUES (0, '关爱健康');
INSERT INTO `types_tbl` VALUES (0, '应急甄选');
INSERT INTO `types_tbl` VALUES (0, '果园飘香');
INSERT INTO `types_tbl` VALUES (0, '轻松出行');
INSERT INTO `types_tbl` VALUES (0, '景点门票');
INSERT INTO `types_tbl` VALUES (0, '文玩空间');


COMMIT;


DROP TABLE IF EXISTS `buy_carts_tbl`;
CREATE TABLE `buy_carts_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `detail_id` int(11) NOT NULL,
  `nums` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `buy_carts_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `buy_carts_tbl` VALUES ('1', 1,1,1);
COMMIT;




DROP TABLE IF EXISTS `details_tbl`;
CREATE TABLE `details_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `img_url` varchar(100) NOT NULL,
  `size` int(11) NOT NULL,
  `unit` varchar(22) NOT NULL,
  `attr_name` varchar(22) NOT NULL,
  `attr_model` varchar(22) DEFAULT NULL,
  `attr_l` int(11) DEFAULT NULL,
  `attr_w` int(11) DEFAULT NULL,
  `attr_h` int(11) DEFAULT NULL,
  `attr_unit` varchar(22) DEFAULT NULL,
  `attr_location` varchar(50) DEFAULT NULL,
  `attr_send_time` varchar(22) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `details_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `details_tbl` VALUES ('2', '生活/水壶','img/a/b/ff.jpg',122,'px',
'大品牌','ABC_A',22,3,44,'m','shenzhen','2020-2-23',1);
COMMIT;



DROP TABLE IF EXISTS `related_tbl`;
CREATE TABLE `related_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `related_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `related_tbl` VALUES ('1', 'img/a/b/345.jpg');
COMMIT;


DROP TABLE IF EXISTS `orders_tbl`;
CREATE TABLE `orders_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `detail_id` int(11) NOT NULL,
  `nums` int(11) NOT NULL,
  `receive_status` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `orders_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `orders_tbl` VALUES ('1', 1,1,1);
COMMIT;




DROP TABLE IF EXISTS `dicts_tbl`;
CREATE TABLE `dicts_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_code` varchar(50) NOT NULL,
  `value` int(11) NOT NULL,
  `label` varchar(22) NOT NULL,
  `description` varchar(22) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `dicts_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `dicts_tbl` VALUES ('1','orderStatus',1,'未发货','订单状态');
INSERT INTO `dicts_tbl` VALUES ('2','orderStatus',2,'已发货','订单状态');
INSERT INTO `dicts_tbl` VALUES ('3','orderStatus',3,'以收货','订单状态');
COMMIT;






DROP TABLE IF EXISTS `intergrals_tbl`;
CREATE TABLE `intergrals_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `intergrals_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `intergrals_tbl` VALUES ('1','1',1);
COMMIT;






SET FOREIGN_KEY_CHECKS = 1;
