
class Term {
    constructor(term = "", meaning = "", sysnonyms = [], antonyms = [], examples = [], examplesTrans = [], mastered = false) {
        this.term = term;
        this.meaning = meaning;
        this.synonyms = sysnonyms;
        this.antonyms = antonyms;
        this.examples = examples;
        this.examplesTrans = examplesTrans;
        this.mastered = mastered;
    }
}

export default Term