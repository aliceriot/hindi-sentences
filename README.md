# Hindi sentences

This is just a quick script to sort a corpus of Hindi/English sentences by 'frequency'.

The original sentences come a [shared Anki deck
here](https://ankiweb.net/shared/info/707994711). I exported the deck to `.tsv`
(checked in here as `sentences.tsv`). Then I sorted them by 'frequency rank' by
counting up word frequencies in this corpus and assigning an average frequency
rank to each sentence. Then the sentences are sorted in descending order, so
the highest-scoring sentences (meaning sentences which have the more frequent
words) appear earlier.

The results are checked in as `sorted_sentences.tsv`. This should be suitable for
importing into Anki or for using in any other language learning software.
