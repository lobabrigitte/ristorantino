<?php

/**
 * Handles Printing methods like print by CUPS, or print a file to a folder
 *
 * @author alejandro
 */
abstract class EnginesApp
{
    public static $name;
    
    
    public function __construct() {
        if ($this->name === null) {
                    $this->name = substr(get_class($this), 0, -13);
        }
        
    }
    
/**
 * Returns name of the printer engine 
 * @return string
 */    
    public static function name(){
        return $this->name;
    }
    
/**
 * Returns the description of the print engine
 * @return string
 */        
    public static function description();
    
    
/**
 * 
 * Do the print
 * 
 * var string $printerName
 *      Specifies the name or identifier of the destiny of the text
 * 
 * var string $textToPrint
 *      The text is going to be printed
 */    
    public static function send($printerName, $textToPrint, $hostname = '');
}

?>