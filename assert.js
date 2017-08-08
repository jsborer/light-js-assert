/********************************************************
 * 
 *   LIGHT JS ASSERT ver 1.0.3
 *		
 *	 ASSERT(
 *	   'string*',   //string or null
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
      r = raw_arguments.length,
      iserror = function(raw_argument, assert_type) {
        var nostrict = false;
        if(assert_type.indexOf("*") > -1) {
          assert_type = assert_type.replace("*","");
          nostrict = true;
        }
      	return ((nostrict && typeof raw_argument !== "object" && raw_argument == undefined) ||
          (nostrict && typeof raw_argument !== "object" && assert_type !== "" && typeof raw_argument !== assert_type) ||
          (!nostrict && typeof raw_argument !== assert_type));
      }, raw_argument, raw_argument;
  
  for(var i = 0; i < l; i++) {
  	raw_argument = raw_arguments[i];
    assert_type = assert_types[i];
    
    if(assert_types[i] === '~') {
      for(var j = i + 1; j < l; j++) {
      	raw_argument = raw_arguments[ raw_arguments.length - (l - j) ];
        assert_type = assert_types[j];
        error = iserror(raw_argument, assert_type);
        if(error) break;
      }
      break;
    }
    
    error = iserror(raw_argument, assert_type);
    if(error) break;
    
  }
  if(error) {
    for(var i=0; i < r; i++) raw_arguments[i] = typeof raw_arguments[i];
    error_function('Invalid parameters. Expected [' + assert_types.join('],[') + '] given [' + raw_arguments.join('],[') + ']' );
  }
}
