export default function TitleCase(word) {
    let firstLetter = word.charAt(0).toUpperCase()
    let rest = ''
    let index = 1
    while (index < word.length) {
        rest += word[index].toLowerCase();
        index++
    }
    return firstLetter + rest
}