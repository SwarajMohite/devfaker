class TextFaker {
  constructor() {
    this.chars = 'abcdefghijklmnopqrstuvwxyz';
    this.vowels = 'aeiou';
    this.consonants = 'bcdfghjklmnpqrstvwxyz';

    this.emojis = {
      smileys: ['😀', '😂', '😍', '😎', '😊', '😉', '😜'],
      celebrations: ['🎉', '🥳', '🎊', '🚀', '🌟', '🔥'],
      animals: ['🐱‍👤', '🐶', '🐼', '🦄', '🐢'],
      tech: ['💻', '📱', '🖥️', '📚', '🧠']
    };
  }

  _randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Generate a pronounceable word by alternating consonants and vowels (more natural)
  generateWord(length = 5) {
    let word = '';
    for (let i = 0; i < length; i++) {
      if (i % 2 === 0) {
        word += this._randomFromArray(this.consonants);
      } else {
        word += this._randomFromArray(this.vowels);
      }
    }
    return word;
  }

  // Generate a sentence with more natural word lengths and optional punctuation within sentence
  generateSentence(wordCount = 8) {
    let sentence = '';
    for (let i = 0; i < wordCount; i++) {
      const wordLength = Math.floor(Math.random() * 6) + 3; // 3 to 8 letters
      sentence += this.generateWord(wordLength);

      // Randomly add comma in sentence, but not last word
      if (i < wordCount - 1 && Math.random() < 0.15) {
        sentence += ', ';
      } else {
        sentence += ' ';
      }
    }
    sentence = sentence.trim();
    // Capitalize first letter and add period.
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
  }

  // Generate a paragraph with a given number of sentences
  generateParagraph(sentenceCount = 3) {
    let paragraph = '';
    for (let i = 0; i < sentenceCount; i++) {
      const wordsInSentence = Math.floor(Math.random() * 8) + 5; // 5 to 12 words
      paragraph += this.generateSentence(wordsInSentence) + ' ';
    }
    return paragraph.trim();
  }

  // Generate a title case string for headings or titles
  generateTitle(wordCount = 4) {
    let title = '';
    for (let i = 0; i < wordCount; i++) {
      const wordLength = Math.floor(Math.random() * 6) + 3;
      let word = this.generateWord(wordLength);
      word = word.charAt(0).toUpperCase() + word.slice(1);
      title += word + ' ';
    }
    return title.trim();
  }

  // Generate a random emoji from specified category or any if none specified
  generateEmoji(category = null) {
    if (category && this.emojis[category]) {
      return this._randomFromArray(this.emojis[category]);
    }
    // Pick from all emojis
    const allEmojis = Object.values(this.emojis).flat();
    return this._randomFromArray(allEmojis);
  }
}

export default TextFaker;
