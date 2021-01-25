# Basics

## Word Tokenization

Word **Tokenization** also called as word segmentation is the process of dividing a string of written language into its component words. In English and many other languages using some form of Latin alphabet, space is a good approximation of a word divider.

However, we still can have problems if we only split by space to achieve the wanted results. Some English compound nouns are variably written and sometimes they contain a space. Mostly making use of a library to achieve the wanted results, is a good idea.

### For example:

> San Francisco is a beautiful city. 

In the above sentence we can clearly see that if we consider `San` and `Francisco` as two different words then it totally changes the meaning of the word. 


## Sentence Tokenization

Sentence **Tokenization** also called as sentence segmentation is the process of dividing a string of written language into its component sentences. The idea here looks very simple. In English and some other languages, we can split apart the sentences wherever we see a punctuation mark.
However, even in English, this problem is not trivial due to the use of full stop character for abbreviations. When processing plain text, tables of abbreviations that contain periods can help us to prevent incorrect assignment of sentence boundaries. In many cases, we make use of built-in libraries to do the job for us.

Sources: 

- https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html

## Stemming and Text Lemmatization
For many grammatical reasons, documents can contain different forms of a word such as drive, drives, driving. Also, sometimes we have related words with a similar meaning, such as nation, national, nationality.
>The goal of both stemming and lemmatization is to reduce inflectional forms and sometimes derivationally related forms of a word to a common base form.

### Example:
* Consults, Cousultant, Consultants, contsulting => Counsult
* Plays, Played, Playing => Play
* dog's, dog, dogs => dog

In the above examples we can see that all different grammatical forms of a word were converted to their base words this is basically what stemming and lemmatization do.<br>Stemming and lemmatization are special cases of normalization. However, they are different from each other. The major difference between them is that Lemmatization provides more meaningful words whereas in stemming the derived words may need not necessarily be meaningful. Hence the time taken to perform stemming is less than the time taken to perform lemmatization. Stemming is also easier to perform and runs faster. Also, the reduced “accuracy” may not matter for some applications.

>Stemming usually refers to a crude heuristic process that chops off the ends of words in the hope of achieving this goal correctly most of the time, and often includes the removal of derivational affixes.
>
>Lemmatization usually refers to doing things properly with the use of a vocabulary and morphological analysis of words, normally aiming to remove inflectional endings only and to return the base or dictionary form of a word, which is known as the lemma.

Sources: 

- https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html


## Stop Words







## Bag-of-Words







## Regex







## TF-IDF







---

Contributions made by our wonderful GitHub Contributors: [@pratik-99](https://github.com/pratik-99)
