CREATE VIEW showMovies AS SELECT m.id, m.title, m.description, m.release_date, mo.length, ft.`name` AS `Format`, group_concat(c.`name` separator ', ')AS Director
FROM material AS m
INNER JOIN movie AS mo on m.id = mo.material_id
INNER JOIN movie_format_type AS ft ON mo.format_type_id = ft.id
INNER JOIN material__creator AS mc ON m.id = mc.material_id
INNER JOIN creator AS c ON mc.creator_id = c.id
group by m.id;