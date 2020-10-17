-- db 스키마 생성
CREATE SCHEMA `graphql_overview_db` DEFAULT CHARACTER SET utf8mb4 ;

-- 사용자 마스터 테이블 생성
CREATE TABLE `user_master` (
  `id` int  NOT NULL AUTO_INCREMENT COMMENT '사용자 유일식별자',
  `mobile_phone` varchar(13) NOT NULL COMMENT '모바일 전화번호',
  `user_name` varchar(255) DEFAULT NULL COMMENT '사용자 이름',
  `email` varchar(60) DEFAULT NULL COMMENT '이메일',
  `role` varchar(20) DEFAULT NULL COMMENT '사용자 권한',
  `del_yn` varchar(1) NOT NULL DEFAULT 'N' COMMENT '삭제여부',
  `mdf_id` int NOT NULL DEFAULT '0' COMMENT '변경자ID',
  `mdf_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '변경일시',
  `reg_id` int NOT NULL DEFAULT '0' COMMENT '등록자ID',
  `reg_dtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사용자_마스터';
