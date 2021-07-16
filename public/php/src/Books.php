<?php
namespace bookstore;

use bookstore\Database;

class Books extends Database {
    //protected $connection;

    public function __construct(){
        $db = parent::__construct();
        $this -> connection = $db -> getConnection();
    }

    public function getBooks(){
        $query = "SELECT * FROM book";
        $statement = $this -> connection -> prepare($query);
        if($statement -> execute() == false){
            echo "query or database error";
        }else{
            $result = $statement -> get_result();
            $books = array();
            while($row = $result -> fetch_assoc()){
                array_push($books, $row);
            }
        }
        return $books;

    }
}

?>