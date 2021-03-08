CREATE VIEW showBooks AS SELECT m.id, m.title, m.description, m.release_date, b.isbn13, b.pages, b.edition, group_concat(c.`name` separator ', ') AS Author
FROM material AS m
INNER JOIN book AS b ON m.id = b.material_id
INNER JOIN material__creator AS mc ON m.id = mc.material_id
INNER JOIN creator AS c ON mc.creator_id = c.id
group by m.id;