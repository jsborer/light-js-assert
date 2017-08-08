## LIGHT JS ASSERT - MIT License

It is very simple assert function.

## Usage

```
  
  function test(a, b, c, d, e, f, g, h, i) {
    ASSERT(
      'string',       // a. - first argument string
      'number',       // b. - second number
      'number',       // c. - number
      '*',            // d. - any required argument
      '~',            // e. f. g. - arguments no matter
      'string',       // h. - before last argument must be string
      'function',     // i. - last argument function
      arguments,                  // function arguments
      function(err){throw err});  // place where throws exception
  
    /* ... */
  
  }

  test('aaa', 1, 2, 'xxx', 0, 0, 0, 'sss', function(){});

```