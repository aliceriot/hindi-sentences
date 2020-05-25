const fs = require("fs")
const parse = require("csv-parse/lib/sync")
const stringify = require("csv-stringify/lib/sync")

const sentences = Object.entries(
  Object.fromEntries(
    parse(fs.readFileSync("sentences.tsv"), {
      delimiter: "\t"
    })
  )
)

const frequencyScores = {}

sentences.forEach(([hindi]) => {
  words = hindi.split(" ")

  words.forEach(word => {
    if (frequencyScores[word]) {
      frequencyScores[word]++
    } else {
      frequencyScores[word] = 1
    }
  })
})

const avg = xs => {
  const sum = xs.reduce((acc, x) => acc + x, 0)
  return sum / xs.length
}

const rankedSentences = sentences.map(([hindi, english]) => {
  const words = hindi.split(" ")

  const normalizedFrequencyScore = avg(words.map(word => frequencyScores[word]))

  return [hindi, english, normalizedFrequencyScore]
})

rankedSentences
  .sort((a, b) => {
    return a[2] - b[2]
  })
  .reverse()

const finalizedSentences = stringify(
  rankedSentences.map(([hindi, english]) => [hindi, english]),
  {
    delimiter: "\t"
  }
)

fs.writeFileSync("sorted_sentences.tsv", finalizedSentences)
