const checkWord = (word: string): void => {
    if(word.length === 0) {
        throw new Error('Word cannot be empty')
    }
    if(!/^[a-zA-Z]+$/.test(word)) {
        throw new Error(`"${word}" is not a word`);
    }
    if(word.length >= 50) {
        throw new Error(`Word cannot contain more than 50 characters`)
    }
};

export default checkWord;