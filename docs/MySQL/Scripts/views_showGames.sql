CREATE VIEW showGames AS SELECT m.id, m.title, m.description, m.release_date, mat.`name` AS Adult_Rating, group_concat(gc.console separator ', ') AS Consoles, c.`name` AS Studio
FROM material AS m 
INNER JOIN game AS g ON m.id = g.material_id
INNER JOIN material_age_type AS mat ON m.material_age_type_id = mat.id
Inner JOIN game_console_type AS gc ON g.game_console_type_id = gc.id
INNER JOIN material__creator AS mc ON m.id = mc.material_id
INNER JOIN creator AS c ON mc.creator_id = c.id
group by m.id;