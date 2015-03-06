/**
*
*	VALIDATE: boolean-primitive-array
*
*
*	DESCRIPTION:
*		- Validates if a value is an array of boolean primitives.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// IS BOOLEAN ARRAY //

/**
* FUNCTION: isBooleanArray( value )
*	Validates if a value is an array of boolean primitives.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of boolean primitives
*/
function isBooleanArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( value[i] !== true && value[i] !== false ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isBooleanArray()


// EXPORTS //

module.exports = isBooleanArray;
