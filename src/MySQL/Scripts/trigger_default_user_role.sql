DELIMITER $$

CREATE TRIGGER after_insert_default_user_role
AFTER INSERT
on `user` FOR EACH ROW
BEGIN
-- SET @lastID = SELECT id FROM `user` ORDER BY id DESC LIMIT 1;

SELECT id INTO @myvar FROM `user` ORDER BY id DESC LIMIT 1;
	
	insert into user__user_role(user_id, user_role_id)
    VALUES (myvar, 1);

END$$
DELIMITER ;