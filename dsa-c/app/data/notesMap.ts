export const notesMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search':
`Checks every element one by one from left to right until the target is found or the array ends.
If it doesnt exist / cant be found -> return -1.
Index always starts at 0 and goes on to n-1.

Time Complexity:
    Best Case  → O(1)    target is the first element
    Worst Case → O(n)    target is last or not present
    Average    → O(n)

Space Complexity: O(1) — no extra space used

Works on both sorted and unsorted arrays.
Use when the array is small or unsorted.`,

    'Binary Search':
`Repeatedly divides the search space in half by comparing the target with the middle value.

Time Complexity:
    Best Case  → O(1)      target is the middle element
    Worst Case → O(log n)  keeps dividing so search space repeatedly becomes half
    Average    → O(log n)

Calculating TC:
    1. Check input size(n) vs number of operations
    2. Each iteration halves the array:

        1st itr  →  n
        2nd itr  →  n/2
        3rd itr  →  n/4
        ...
        kth itr  →  1

    n → n/2 → n/4 → n/8 → ... → 1

    After k iterations: n / 2^k = 1
    So 2^k = n
    Therefore k = log₂(n)

    Total = O(log n)   ignore constants in TC

Space Complexity:
    Iterative → O(1)
    Recursive → O(log n)   due to call stack

IMPORTANT: Array must be sorted before applying binary search.
Use mid = start + (end - start) / 2 to avoid integer overflow.`,
  },

  sorting: {
    'Bubble Sort' : `Repeatedly iterates over the array and compares adjacent elements to push the largest element to the end.

Time Complexity:
  Best Case  → O(n)     //already sorted - with optimisation 
  Worst Case → O(n^2)    //reverse array 
  Average    → O(n^2)    

Space Complexity: O(1) — no extra space used

Only use for small or nearly sorted arrays.
One of the simplest but least efficient sorting algorithms.
    `,

    'Selection Sort' : `Finds the minimum element from the unsorted portion and places it
at the beginning. Repeats for the remaining unsorted portion.

Time Complexity:
    Best Case  → O(n²)     //always scans the full unsorted portion
    Worst Case → O(n²)
    Average    → O(n²)

Space Complexity: O(1) — No extra space used

NOT stable — swapping can change relative order of equal elements.
Makes the minimum number of swaps — at most n-1 swaps total.
    `,
    'Insertion Sort' : `Builds the sorted array one element at a time by picking each element
and inserting it into its correct position.
Like sorting a hand of playing cards.

Time Complexity:
    Best Case  → O(n)      array is already sorted
    Worst Case → O(n²)     array is reversed
    Average    → O(n²)

Space Complexity: O(1) — No extra space used for sorting

Very efficient for small arrays and nearly sorted arrays.`,

    'Merge Sort' : `Divide and conquer algorithm.
Recursively splits the array in half until each half has one element,
then merges the halves back together in sorted order.

Time Complexity:
    Best Case  → O(n log n)
    Worst Case → O(n log n)
    Average    → O(n log n)

Calculating TC:
    Dividing  → log n levels of recursion (same as binary search)
    Merging   → O(n) work at each level to merge
    Total     → O(n) × O(log n) = O(n log n)

Space Complexity: O(n) — needs an auxiliary array for merging

Stable sort.
Guaranteed O(n log n) in all cases
    `,

    'Quick Sort' : `Divide and conquer algorithm.
Picks a pivot element - usually the last element of the array, partitions the array so all elements less than
the pivot go left and all greater go right, then recursively sorts both sides.

Time Complexity:
    Best Case  → O(n log n)   pivot always splits array in half
    Worst Case → O(n²)        pivot is always the smallest or largest element
    Average    → O(n log n)

Space Complexity:
    Average → O(log n)   due to recursive call stack
    Worst   → O(n)

Fastest in practice for most inputs despite same Big O as Merge Sort
Worst case avoided by random pivot selection`,
  },

  'linked-list': {
    'Singly Linked List : Insertion, deletion, reversing' : `A linear data structure where each element (node) contains data and a pointer to the next node. The last node points to NULL.

Structure:
    [data | next] → [data | next] → [data | next] → NULL
    head

Node in C:
    struct Node {
        int data;
        struct Node *next;
    };

Operations:
    Insertion at head     → O(1)
    Insertion at tail     → O(n)  traverse to end first
    Insertion at position → O(n)
    Deletion at head      → O(1)
    Deletion at position  → O(n)
    Search                → O(n)

Space Complexity: O(n)

No random access — to reach index i you must traverse from head.
Dynamic size — no need to declare size upfront unlike arrays - use memory allocation to do so

Change the direction of all next pointers so the list goes backwards.
Head becomes tail, tail becomes head.

Approach — three pointer technique:
    prev    = NULL
    current = head
    next    = NULL

    each iteration:
        1. save next = current→next
        2. reverse  current→next = prev
        3. move     prev = current
        4. move     current = next

    when current == NULL, prev is the new head

Time Complexity:  O(n)  — single pass
Space Complexity: O(1)  — only 3 pointers used

Visual:
    Before:  1 → 2 → 3 → 4 → NULL
    After:   NULL ← 1 ← 2 ← 3 ← 4
                                  ↑
                                 head
`,

    'concatenating two LL':  `Concatenating two linked lists means attaching the tail of the first list
to the head of the second list.

List 1:  1 → 2 → 3 → NULL
List 2:  4 → 5 → 6 → NULL

After:   1 → 2 → 3 → 4 → 5 → 6 → NULL

Approach:
    1. If list1 is NULL, return list2
    2. If list2 is NULL, return list1
    3. Traverse list1 until the last node (node where next == NULL)
    4. Set last node's next = head of list2

Time Complexity:  O(n)  — traverse list1 to find the tail
Space Complexity: O(1)  — no extra space, just pointer reassignment

Note:
    This modifies the original list1 — the tail now points to list2.
    If you need to keep list1 unchanged, make a deep copy first.
    After concatenation, list2 no longer exists as a separate list.`,

    'Doubly Linked List: Operations: insertion, deletion':  `Each node has two pointers — one to the next node and one to the previous node.

Structure:
    NULL ← [prev | data | next] ↔ [prev | data | next] ↔ [prev | data | next] → NULL
            head


Operations:
    Insertion at head     → O(1)
    Insertion at tail     → O(1)  if tail pointer is maintained
    Deletion at head      → O(1)
    Deletion at tail     → O(1)  if tail pointer is maintained
    Search                → O(n)

Space Complexity: O(n)

Can traverse in both directions — forward and backward.
Uses more memory than singly LL — extra pointer per node.
Easier deletion — no need to track previous node separately.
`,

    'Circular Linked List and its operations':  `Same as singly linked list except the last node points back to the head instead of NULL. Forms a circle.

Structure:
    head
     ↓
    [data | next] → [data | next] → [data | next]
         ↑___________________________________|

Operations:
    Same as Singly LL — O(n) for most operations

No NULL at the end — be careful with traversal, use a do-while loop
or check if next == head to avoid infinite loops.

// Use Floyd's cycle detecting algorithm - 

        Detects if a linked list has a cycle (a node whose next pointer points
        back to a previous node, creating a loop).

        Uses two pointers:
            slow → moves one step at a time
            fast → moves two steps at a time

        If there is a cycle, fast will eventually lap slow and they will meet.
        If there is no cycle, fast will reach NULL.

        Time Complexity:  O(n)
        Space Complexity: O(1)  — no extra data structures needed

        Also called the Tortoise and Hare algorithm.

        Finding the start of the cycle:
            Once slow and fast meet inside the cycle,
            reset slow to head.
            Move both slow and fast one step at a time.
            Where they meet again is the start of the cycle.

Used in:
    Round robin scheduling
    Circular buffers
    Music playlists (loop back to start)`,

    'Representation of a single two-dimensional array':  `Singly Linked List — inserting elements from a 2D array

This program creates a linked list by inserting all elements of a 2D array row by row using a tail pointer.


    head → points to the first node (used for traversal)
    tail → points to the last node (used for O(1) insertion)

    Without tail, every insertion would require traversing
    to the end → O(n). With tail it's always O(1).

─────────────────────────────────────────────────────

2D ARRAY TRAVERSAL

    Insertion order: 1 → 2 → 3 → 4 → 5 → 6

    Row 0: insert(1), insert(2), insert(3)
    Row 1: insert(4), insert(5), insert(6)

─────────────────────────────────────────────────────
PRINT FUNCTION

    Starts at head, traverses using temp pointer.
    Never move head directly — you'd lose the list.
    Always use a separate temp pointer for traversal.

    Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL

─────────────────────────────────────────────────────
MEMORY

    Each node is a separate allocation
    Should free each node after use to avoid memory leaks:


Time Complexity:  O(n)  — one pass to insert, one to print
Space Complexity: O(n)  — n nodes allocated on heap`
  },
}