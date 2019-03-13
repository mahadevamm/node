module.exports={
    GENERATE_PASSWORD:"select * from tbl_user where user_name = ?",
    VERIFY_LINK:"select user_name,user_id,role,link_id from tbl_user where user_name = ?",
    SAVE_PASSWORD:"update tbl_user set password = ? where user_name=?",
    LOGIN:"select * from tbl_user where user_name = ?",
    SET_RANDOM_LINK:"update tbl_user set link_id = ? where user_name = ?"
}