# Hindi sentences

This is just a quick script to sort a corpus of Hindi/English sentences by 'frequency'.

The original sentences come from a [shared Anki deck
here](https://ankiweb.net/shared/info/707994711). I exported the deck to `.tsv`
from Anki (checked in here as `sentences.tsv`). Then I sorted them by
'frequency rank' by counting up word frequencies in this corpus and assigning
an average frequency rank to each sentence. Then the sentences are sorted in
descending order, so the highest-scoring sentences (meaning sentences which
have the more frequent words) appear earlier.

I made no effort to do anything fancy with word counting, so for instance करता,
करती, and करना are all treated as separate words even though they are different
forms of the same verb. I think it works well enough without bothering to get that
complicated.

The results are checked in as `sorted_sentences.tsv`. This should be suitable for
importing into Anki or for using in any other language learning software.
