let quote =
  '"You don\'t have to be great to start, but you have to start to be great." '
let author = 'Zig Ziglar'

function typeWriter(letterIndex) {
  document.getElementById('typewriter').innerHTML += quote.charAt(letterIndex++)
  if (letterIndex < quote.length) {
    setTimeout(typeWriter, 60, letterIndex)
  } else {
    typeWriterAuthor(0)
  }
}

function typeWriterAuthor(letterIndex) {
  document.getElementById('typewriterAuthor').innerHTML += author.charAt(
    letterIndex++
  )
  if (letterIndex < author.length) {
    setTimeout(typeWriterAuthor, 60, letterIndex)
  }
}

let hangmanSentence = 'sometimes you win sometimes you learn'
document.getElementById('guessed').innerHTML = hangmanSentence.replace(
  /[a-z]/gi,
  '_'
)
let hangmanForm = document.getElementById('hangmanForm')

hangmanForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let attempts = document.getElementById('attempts').innerHTML
  let currentGuess = document.getElementById('guessed').innerHTML.toLowerCase()
  if (attempts == 0 || currentGuess == hangmanSentence) {
    document.getElementById('guess').disabled = true
    return false
  }
  document.getElementById('error').innerHTML = ''
  let enterALetter = document.getElementById('enterALetter').value.toLowerCase()
  document.getElementById('enterALetter').value = ''
  let wrongLetter = document.getElementById('wrong').innerHTML.toLowerCase()

  if (enterALetter.match(/[^a-z]/i)) {
    document.getElementById('error').innerHTML = 'Just letters !!!'
    return false
  }
  if (wrongLetter.indexOf(enterALetter) != -1) {
    return false
  }
  if (currentGuess.indexOf(enterALetter) != -1) {
    return false
  }

  if (hangmanSentence.indexOf(enterALetter) == -1) {
    document.getElementById('wrong').innerHTML += enterALetter.toUpperCase()
    document.getElementById('attempts').innerHTML = --attempts
  }
  if (attempts == 0) {
    document.getElementById('guessed').innerHTML = hangmanSentence.toUpperCase()
    finishGame('YOU LEARNED')

    console.log('aboutToLoop', enterALetter)
    return false
  }
  for (let i = 0; i < hangmanSentence.length; i++) {
    if (hangmanSentence[i] == enterALetter) {
      currentGuess =
        currentGuess.substring(0, i) +
        enterALetter +
        currentGuess.substring(i + 1)
    }
    document.getElementById('guessed').innerHTML = currentGuess.toUpperCase()
  }
  if (currentGuess == hangmanSentence) {
    document.getElementById('guessed').innerHTML = hangmanSentence.toUpperCase()
    finishGame('YOU WON')
  }
})

function finishGame(result) {
  document.getElementById('error').innerHTML = result
  document.getElementById('guessed').style.animation =
    'animate 3s ease'
  document.getElementById('guess').disabled = true
  document.getElementById('enterALetter').disabled = true
}


document.getElementById('yes').onclick = function () {
    document.getElementById('yes').style.display = 'none'
  
    document.getElementById('not').style.animation = 'animate 3s ease'
  }
  let not = document.getElementById('not')
  let LauraSinger = document.getElementById('LauraSinger')
  function show3() {
    LauraSinger.style.display = 'block'
    beforeIWas.style.display = 'none'
    
  }
  
  not.addEventListener('click', show3)
 


