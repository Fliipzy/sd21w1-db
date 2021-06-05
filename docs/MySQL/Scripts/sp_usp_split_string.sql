CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_split_string`(
	IN strarray LONGTEXT
)
BEGIN
    DECLARE c_index INT UNSIGNED DEFAULT 0;
    DECLARE l_index INT UNSIGNED DEFAULT 1;
    DECLARE value VARCHAR(45);
    
    -- Create temporary table to hold the words
    DROP TEMPORARY TABLE IF EXISTS word_splits;
    CREATE TEMPORARY TABLE word_splits (word VARCHAR(45));
    
    -- Trim in case input has trailing or leading comma
    SET strarray = TRIM(BOTH ',' FROM strarray);
    
    SET c_index = LOCATE(',', strarray);
    
    WHILE (c_index > 0) DO
		SET value = SUBSTRING(strarray, l_index, c_index - l_index);
        SET l_index = c_index + 1;
        SET c_index = LOCATE(',', strarray, l_index);
        
        INSERT INTO word_splits(word)
        VALUE (value);
    END WHILE;
    
    -- Insert last word without trailing comma
    INSERT INTO word_splits(word) 
    VALUE (SUBSTRING(strarray, l_index, LENGTH(strarray)));
    
    -- Return & Delete temporary table
    SELECT * FROM word_splits;
    DROP TEMPORARY TABLE word_splits;
END