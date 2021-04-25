//Add 'reverse' to all strings
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content) {
  this.content = content

  this.processor = function processor(content) {
    return content.toLowerCase();
  }

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  //Return true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
    }
}

// String.prototype.palindrome = function palindrome() {
//   return new Phrase(this).palindrome();
// }

// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }
//
// TranslatedPhrase.prototype = new Phrase();
