var extractDigit = function( a, bitMask, shiftRightAmount ) {
    var digit = (a & bitMask) >>> shiftRightAmount;	// extract the digit we are sorting based on
    return digit;
}

function radixSortLSD(_input_array) {
    var numberOfBins = 256;
    var Log2ofPowerOfTwoRadix = 8;
    var _output_array = new Array(_input_array.length);
    var count = new Array(numberOfBins);
    var _output_array_has_result = false;

    var bitMask = 255;
    var shiftRightAmount = 0;

    var startOfBin = new Array( numberOfBins );
    var endOfBin   = new Array( numberOfBins );
    
    while( bitMask != 0 )    // end processing digits when all the mask bits have been processed and shifted out, leaving no bits set in the bitMask
    {
        for (var i = 0; i < numberOfBins; i++ )
            count[ i ] = 0;
        for (var _current = 0; _current < _input_array.length; _current++ )    // Scan the array and count the number of times each digit value appears - i.e. size of each bin
            count[ extractDigit( _input_array[ _current ], bitMask, shiftRightAmount ) ]++;

        startOfBin[ 0 ] = endOfBin[ 0 ] = 0;
        for( var i = 1; i < numberOfBins; i++ )
            startOfBin[ i ] = endOfBin[ i ] = startOfBin[ i - 1 ] + count[ i - 1 ];
		
        for ( var _current = 0; _current < _input_array.length; _current++ )
            _output_array[ endOfBin[ extractDigit( _input_array[ _current ], bitMask, shiftRightAmount ) ]++ ] = _input_array[ _current ];
        
        bitMask <<= Log2ofPowerOfTwoRadix;
        shiftRightAmount += Log2ofPowerOfTwoRadix;
        _output_array_has_result = !_output_array_has_result;
        
        var tmp = _input_array, _input_array = _output_array, _output_array = tmp;    // swap input and output arrays
    }
    if ( _output_array_has_result )
        for ( var _current = 0; _current < _input_array.length; _current++ )    // copy from output array into the input array
            _input_array[ _current ] = _output_array[ _current ];
    
    return _input_array;
}
