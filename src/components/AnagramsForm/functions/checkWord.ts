const checkWord = (word: string): void => {
    if(word.length === 0) {
        throw new Error('Word cannot be empty')
    }
    if(!/^[a-zA-Z]+$/.test(word)) {
        throw new Error(`"${word}" is not a word`);
    }
};

export default checkWord;