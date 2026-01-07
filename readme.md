## Purge most frequent

This algorithm indentifies the "most popular" elements in a dataset and removes them entirely, handling ties for the highest frequency.

### The challenge

Given an array, remove all occurences of the element(s) that appear most often while preserving the original order of the remaining elements.

### Technical Strategy: The Two-Pass Approach

1.  **First Pass (count)**: create a **Frequency Map** (Object) to store the occurences of each element. This allows for O(1) lookup in the next step.

2.  **Identify Max**: Use `Math.max()` on the object to find the "High Score" for frequency.

3.  **Second Pass (Clean)**: Apply a `filter()` to the original array. For each item, check the frequency map; if it's count matches the high score, it is "purged."

### Key Code Snippet

```
// Step 1: Frequency Map
const freq = {};
arr.forEach(item => freq[item] = (freq[item] || 0) + 1);

// Step 2: High score
const maxFreq = Math.max(...Object.values(freq));

// Step 3: Filter
return arr.filter(item => freq[item] !== maxFreq);
```

### Lessons Learned

    - **Bracket Notation**: Mastered the difference between `obj.key` (literal) and `obj[key]` (dynamic) when working with variables in objects.

    - **Filter Logic**: Learned that `.filter()` is most powerful when combined with an external data source (the Frequency Map) to make decisions.

    - **Tie Handling**: By finding the `maxFreq` first, the algorithm naturally handles the scenarios where multiple different elements are tied for "most frequent."
