/**Есть две строки неограниченной длины, содержащие версии программ.
Версия программы – это строка из 4 чисел, разделенных точками. Числа целые положительные или ноль. Могут начинаться с нулей. Обработка должна определить, какая из версий старше (без использования встроенных функций).
Примеры версий:
∙     8.1.13.41
∙     8.1.009.125
@param arg1 - 
 */
version1 = '80.1.013.41.10';
version2 = '008.1.13.41.10';


/**
 * @version1 - version of the first programm;
 * @version2 - version of the second compared programm;
 */
function getOlderVersion(version1, version2) {

  let i = 0;
  let j = 0;

  let start1 = 0;
  let stop1 = 0;
  let start2 = 0;
  let stop2 = 0;

  while (i < version1.length && j < version2.length) {
    if (version1[i] !== '.') {

      i++;
      stop1++;
    }

    if (version2[j] !== '.') {
      stop2++;
      j++;
    }
    if (version1[i] === '.' && version2[j] === '.') {
// compare snippets between dots
      i++;
      j++;

      let snippet2 = '';
      let snippet = '';

      for (start1; start1 < stop1; ++start1) {

        snippet += version1[start1];


      }

      start1 = ++stop1;

      for (start2; start2 < stop2; start2++) {
        snippet2 += version2[start2];


      }

      //compare snippets
      if (Number(snippet) > Number(snippet2)) {
        return version2
      }
      if (Number(snippet) < Number(snippet2)) {
        return version1
      }

      start2 = ++stop2;

    }
  }

  let lastsnippet1 = ''; // snippet after the last dot
  for (start1; start1 < version1.length; ++start1) {
    lastsnippet1 += version1[start1];

  }

  let lastsnippet2 = ''; // snippet after the last dot
  for (start2; start2 < version2.length; ++start2) {

    lastsnippet2 += version2[start2];


  }
//compare snippets after the last dots
  if (Number(lastsnippet1) > Number(lastsnippet2)) {
    return version2
  }
  if (Number(lastsnippet1) < Number(lastsnippet2)) {
    return version1
  }
  else return ('equal');

}

getOlderVersion(version1, version2);