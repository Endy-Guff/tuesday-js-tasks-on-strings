//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"

const repeatString = (w, n, r) =>{
  
  let result = w;
  
  for(let i = 1; i < n; i++){
    result += r + w; 
  }

  return result;
}

console.log(repeatString("yo", 3, ","));


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str, startStr) => {
  const w1 = str.toLowerCase().split('');
  const w2 = startStr.toLowerCase().split('');
  let result = Boolean;
  for(i = 0; i < startStr.length; i++){
    if(w1[i]===w2[i]){
      result = true;
    } else{
      result = false;
      break
    }
  }
  return result
}

console.log(checkStart("Incubator", "yo"));

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, n) =>{
  return str.slice(0, n) + '...';
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10));

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

const getMinLengthWord = (str) =>{
  let word;
  let wordLenght = [];
  let minLenght;
  if(str === Number || str === Boolean || str === undefined || str === ''){
    return null;
  } else{
    word = str.split(' ');
    word.forEach(i=>wordLenght.push(i.length))
  }
  minLenght =  Math.min(...wordLenght);
  for(let i = 0; i < word.length; i++){
    if(word[i].length === minLenght){
      return word[i]
    }
  }
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."));

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) =>{
  const wordArr = str.toLowerCase().split(' ');
  return wordArr.map(el=>el[0].toUpperCase() + el.slice(1))
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"));

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

const isIncludes = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      return false;
    }
  }
  return true;

}

console.log(isIncludes("Incubator", "Cut"))

  




