const questionBlocks = document.querySelectorAll('.question-block')

// Add event listeners to each question block
questionBlocks.forEach((questionBlock) => {
  questionBlock.addEventListener('click', () => {
    // Toggle the visibility of the answer block
    const answerBlock = questionBlock.nextElementSibling
    answerBlock.classList.toggle('answer-visible')

    // Toggle the icon based on answer visibility
    const icon = questionBlock.querySelector('#icon-collapse')
    icon.src = answerBlock.classList.contains('answer-visible')
      ? 'assets/images/icon-minus.svg'
      : 'assets/images/icon-plus.svg'
  })
})
