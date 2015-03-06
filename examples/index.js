'use strict';

var isBooleanArray = require( './../lib' );

console.log( isBooleanArray( [true,false,true] ) );
// returns true

console.log( isBooleanArray( [true,false,new Boolean( true )] ) );
// returns false

console.log( isBooleanArray( [] ) );
// returns false

console.log( isBooleanArray( ['a',1] ) );
// returns false
