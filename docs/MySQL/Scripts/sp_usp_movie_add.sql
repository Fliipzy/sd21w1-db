CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_movie_add`(
	IN title VARCHAR(80),
    IN description TEXT,
    IN release_date DATE,
    IN age_restriction_type INT UNSIGNED,
    IN length TIME,
    IN format_type INT UNSIGNED,
    IN creator_array LONGTEXT -- Example 'creator1,creator2,creator3'
)
BEGIN
	-- Declare variables
	DECLARE last_material_id INT UNSIGNED;
    
    -- Variables for iterating creator array
    DECLARE char_index INT UNSIGNED DEFAULT 0;
    DECLARE last_index INT UNSIGNED DEFAULT 1;
    DECLARE creator_value VARCHAR(45);
    DECLARE last_creator_id INT UNSIGNED;
    
    -- Declare continue handler for when sql exception is raised
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
		BEGIN
			ROLLBACK; -- If any sql exception is raised during the transaction we rollback
            RESIGNAL; -- Raise the exception again to caller
		END;
    
	-- Begin the transaction
	START TRANSACTION;
    
    -- Try to insert the new material row
    INSERT INTO material(title, description, release_date, material_type_id, material_age_type_id)
	VALUES(title, description, release_date, 2, age_restriction_type);
    
	-- Get last inserted id from material table and insert it into last_material_id
    SELECT id FROM material WHERE material.title = title LIMIT 1 INTO last_material_id;
    
    -- Try to insert the new movie row
    INSERT INTO movie(length, format_type_id, material_id)
	VALUES(length, format_type, last_material_id);
    
    -- Start iterating through creators
    
    -- Trim in case input has trailing or leading comma
    SET creator_array = TRIM(BOTH ',' FROM creator_array);
    
    SET char_index = LOCATE(',', creator_array);
    
    WHILE (char_index > 0) DO
		SET creator_value = SUBSTRING(creator_array, last_index, char_index - last_index);
        SET last_index = char_index + 1;
        SET char_index = LOCATE(',', creator_array, last_index);
        
        -- Insert creator value into creator table
        INSERT IGNORE INTO creator(name)
        VALUE (creator_value);
        
        -- Get id for last inserted creator row and pass it into last_creator_id variable
        SELECT id FROM creator WHERE name = creator_value LIMIT 1 INTO last_creator_id;
        
        -- Link creator and movie id in material__creator join table
        INSERT INTO material__creator (material_id, creator_id)
        VALUE (last_material_id, last_creator_id);
    END WHILE;
    
    SET creator_value = SUBSTRING(creator_array, last_index, LENGTH(creator_array));
    
    -- Insert last creator name without trailing comma
    INSERT IGNORE INTO creator(name) 
    VALUE (creator_value);
    
    -- Get id from the last creator row and pass it into last_creator_id variable
	SELECT id FROM creator WHERE name = creator_value LIMIT 1 INTO last_creator_id;
        
	INSERT INTO material__creator (material_id, creator_id)
	VALUE (last_material_id, last_creator_id);
    
    -- Finally commit changes and end procedure
    COMMIT;
    
END