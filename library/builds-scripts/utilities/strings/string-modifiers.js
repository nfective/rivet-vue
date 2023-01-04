let pattern = ""

const filePathNormalizer = (path) => {
    return path
              .replaceAll('\\', '/')
}

const fileNameFromPath = (path) => {
    const file_name_index = path.lastIndexOf('/') + 1

    const file_name = path.substring(file_name_index)

    return file_name
}

const pascalCaseToSpaces = (string) => string
    // Look for long acronyms and filter out the last letter
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    // Look for lower-case letters followed by upper-case letters
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // Look for lower-case letters followed by numbers
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    // Remove any white space left around the word
    .trim();

const pascalCaseToHyphens = (string) => string
    // Look for long acronyms and filter out the last letter
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1-$2')
    // Look for lower-case letters followed by upper-case letters
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    // Look for lower-case letters followed by numbers
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    // Remove any white space left around the word
    .trim()

const stringMatcher = (pattern, search_string, match_position, matches_array) => {
    // How many matches are in the string
    const matches = search_string.match(pattern)

    // No matches are found return
    if(matches === null) return matches_array

    // Get position of the nearest matching pattern. The match may not be at position 0
    const first_found_position = search_string.search(pattern)

    // Get the length of the first matching pattern
    const match_length = matches[0].length

    // Position of the match in the string
    // If any matches are found get the position of the pattern, skip that length and continue searching
    match_position = first_found_position + match_length + match_position

    // Position of the matches in the search_string
    matches_array.push(match_position)

    // The search string is the substring of search_string with the first_found_position and match_length as the starting modifiers
    return stringMatcher(pattern, search_string.substring(first_found_position + match_length), match_position, matches_array)
}

// It's not responsible for checking closing, thats the responsibility of the call method
// It's meant to find the most nested value
// The result is reversed by design so that when someone splices and reconcatentates the string
// they aren't modifying the preceding found positions 
const findValueOfPattern = (pattern, search_string) => {
    pattern = pattern

    const regex = new RegExp(pattern, 'g')

    return stringMatcher(regex, search_string, 0, []).reverse()
}

// Look for array character in string the end position and remove it
const trimEndingCharacters = (ending_characters = [], input_string) => {
    
    while(true)
    {
        let match_last_character = false

        const last_character = input_string.substring(input_string.length - 1)

        ending_characters.forEach(character => {
            if(last_character === character) match_last_character = true
        })

        if(match_last_character) input_string = input_string.substring(0, input_string.length - 1)
        if(match_last_character === false) break
    }

    return input_string
}

export {
    filePathNormalizer,
    fileNameFromPath,
    pascalCaseToSpaces,
    pascalCaseToHyphens,
    findValueOfPattern,
    trimEndingCharacters
}