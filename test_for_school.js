    function compare( a, b ){
        
        if( a < b ) return 1;
        if( a == b ) return 0;
        if( a > b ) return -1;
        
    }
    
    var data  = [100, 14, 57, 90, 4378, 99, 345];
    
    data.sort( compare );
    
    console.log( data[0] );
