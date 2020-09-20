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
DROP TABLE IF EXISTS `users`;
CREATE TABLE `runoob_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `submission_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `runoob_tbl`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'admin', '123',NULL, '2017-04-12');
COMMIT;

-- ----------------------------
--  Table structure for `tcount_tbl`
-- ----------------------------
DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `groups`
-- ----------------------------
BEGIN;
INSERT INTO `groups` VALUES ('1', '组一');
COMMIT;

-- ----------------------------
--  Table structure for `tcount_tbl`
-- ----------------------------
DROP TABLE IF EXISTS `arts`;
CREATE TABLE `arts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `created_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `arts`
-- ----------------------------
BEGIN;
INSERT INTO `arts` VALUES ('1', '文章标题1','content1','1');
COMMIT;





DROP TABLE IF EXISTS `group_arts`;
CREATE TABLE `group_arts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `art_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `group_arts`
-- ----------------------------
BEGIN;
INSERT INTO `group_arts` VALUES ('1', '1','1');
COMMIT;



SET FOREIGN_KEY_CHECKS = 1;
