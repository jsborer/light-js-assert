/********************************************************
 * 
 *   LIGHT JS ASSERT ver 1.0.2
 *		
 *	 ASSERT(
 *	   'string',
 *     'object',
 *     'number',
 *     '*',				  //any ruquired value
 *     '~',				  //any value
 *     'function',  //last argument must be a function
 *     arguments,
 *     function(error) {
 *        //custom error function..
 *        console.error(error);
 *     }
 *	 );
 *
 ********************************************************/
function ASSERT() {
  var assert_types = [].slice.call(arguments),
      error_function = assert_types.pop(),
      raw_arguments = [].slice.call(assert_types.pop()),
      error = false,
      l = assert_types.length,
      r = raw_arguments.length;
  
  for(var i = 0; i < l; i++) {
    if(assert_types[i] === '~') {
      for(var j = i + 1; j < l; j++) {
        if(typeof raw_arguments[ raw_arguments.length - (l - j) ] != assert_types[j]) {
          error = true; break;
        }
      }
      break;
    } else if( (assert_types[i] === '*' && raw_arguments[i] == undefined) || (assert_types[i] != '*' && typeof raw_arguments[i] != assert_types[i]) ) {
      error = true; break;
    }
  }
  if(error) {
    for(var i=0; i < r; i++) raw_arguments[i] = typeof raw_arguments[i];
    error_function('Invalid parameters. Expected [' + assert_types.join('],[') + '] given [' + raw_arguments.join('],[') + ']' );
  }
}
