CREATE VIEW showUsersWithRoles AS SELECT u.id, u.username, r.role
FROM `user` AS u
INNER JOIN user__user_role as uur on u.id = uur.user_id
INNER JOIN user_role AS r on uur.user_role_id = r.id
ORDER BY u.username ASC;

