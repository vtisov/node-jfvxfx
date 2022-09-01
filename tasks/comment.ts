import { equal } from 'assert';

/**
 * Task
 *
 * Remove all comments like {{comment}} from the passed string
 * 1. Add a returning value type
 * 2. Complete the function
 */
function trim(value: string): string {
  // **** Your code goes here ****


  let current = "";
  let start = 0;
  let end = 0;
  for (let i = 1; i < value.length; i++) {
    while (value[i] != '{' && value[i - 1] != '{') {
      end = i;
      i++;
    }
    console.log("before", i, start, end);
    current += value.slice(start, end);
    while (value[i] != '}' && value[i - 1] != '}') {
      start = i + 2;
      i++;
    }
    console.log("after", i, start, end);    
  }
  return current;
}

// equal(trim(''), '');
equal(trim('{{ a comment and }}{not a comment}{{}}'), '{not a comment}');
// equal(trim('{{ a comment and }}{not a comment}'), '{not a comment}');
// equal(trim('Text with a {{}} {{comment}} text'), 'Text with a   text');
// equal(trim('Text {{comment1}} and {{comment2}} text'), 'Text  and  text');
// equal(trim('Text {{comment {} and}} and {{comment2}} text'), 'Text  and  text');
// equal(trim('Text {{comment}}'), 'Text ');

console.log('OK');
