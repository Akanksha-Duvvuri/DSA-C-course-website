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
    Deletion of tail      → O(n)  
    Search                → O(n)

Space Complexity: O(n)

No random access — to reach index i you must traverse from head.
Dynamic size — no need to declare size upfront unlike arrays - use memory allocation to do so


Reversing an LL- 

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

  stacks: {
    'Stack using Array': `A stack is a LIFO data structure — Last In First Out.
The last element pushed is the first one popped.

Implementation using a fixed-size array with a top pointer.

    top = -1  →  stack is empty
    top = n-1 →  stack is full

Operations:
    Push  →  increment top, add element at arr[top]
    Pop   →  return arr[top], decrement top
    Peek  →  return arr[top] without removing

Conditions:
    Overflow  →  pushing when top == n-1  (stack is full)
    Underflow →  popping when top == -1   (stack is empty)

Time Complexity:
    Push → O(1)
    Pop  → O(1)
    Peek → O(1)

Space Complexity: O(n)  — fixed array size declared upfront

Drawback: size must be known in advance, wastes memory if
underused, crashes if overflow not handled.`,

    'Stack using LL': `Dynamic implementation — no fixed size, grows and shrinks as needed.
New nodes are pushed and popped from the HEAD (not the tail).
Head of the LL = top of the stack.

    Push  →  create new node, point it to current head, update head
    Pop   →  save head data, move head to head->next, free old head

Why insert at head and not tail?
    Inserting/deleting at head is O(1).
    Inserting/deleting at tail requires traversal → O(n).

Operations:
    Push → O(1)
    Pop  → O(1)
    Peek → O(1)

Space Complexity: O(n)

Advantage over array: no overflow (limited only by heap memory),
no wasted space — each node allocated only when needed.`,
    'Infix to Postfix Conversion and Postfix expression evaluation': `Infix    →  operator is between operands    A + B
Prefix   →  operator is before operands     + A B
Postfix  →  operator is after operands      A B +

Why convert?
    Computers evaluate postfix easier — no need for brackets
    or precedence rules, just scan left to right.

Operator Precedence (high to low):
    ^          →  3  (right associative)
    * /        →  2
    + -        →  1

Algorithm:
    Scan expression left to right:

    1. Operand (A, B, 1, 2...)
           → directly add to output

    2. Opening bracket  (
           → push to stack

    3. Closing bracket  )
           → pop and output until ( is found
           → discard both brackets

    4. Operator (+, -, *, /, ^)
           → while stack is not empty AND
             top of stack has >= precedence AND
             top is not (
                 → pop and output
           → then push current operator

    5. End of expression
           → pop and output everything remaining in stack

─────────────────────────────────────────────
Dry Run:   A + B * C - D

Token   Stack       Output
A       []          A
+       [+]         A
B       [+]         A B
*       [+ *]       A B          (* has higher precedence than +)
C       [+ *]       A B C
-       [-]         A B C * +    (- has lower precedence, pop * and +)
D       [-]         A B C * + D
end     []          A B C * + D -

Result: A B C * + D -
─────────────────────────────────────────────

Time Complexity:  O(n)  - traverser through the entire array 
Space Complexity: O(n)  — stack can hold up to n operators`,
    'Recursion implementation': ``
  },

  queues : {
    'Queue using Array': `A queue is a FIFO data structure — First In First Out.
The first element enqueued is the first one dequeued.

Implementation using a fixed-size array with two pointers:
    front = -1  →  points to the first element
    rear  = -1  →  points to the last element

    Both front and rear = -1  →  queue is empty

Operations:
    Enqueue  →  increment rear, add element at arr[rear]
    Dequeue  →  return arr[front], increment front
    Peek     →  return arr[front] without removing

Conditions:
    Overflow   →  enqueue when rear == n-1   (queue is full)
    Underflow  →  dequeue when front == -1 or front > rear

Time Complexity:
    Enqueue → O(1)
    Dequeue → O(1)
    Peek    → O(1)

Space Complexity: O(n)

Drawback: once elements are dequeued, that space at the front
is wasted and cannot be reused — solved by Circular Queue.

Visual:
    front            rear
      ↓               ↓
    [ 1 | 2 | 3 | 4 | 5 ]
dequeue from front, enqueue at rear`,

    'Queue using LL': `Dynamic implementation — no fixed size.
Maintain both head (front) and tail (rear) pointers.

    Enqueue  →  add new node at tail
    Dequeue  →  remove node from head, move head forward

Why maintain a tail pointer?
    Without tail, every enqueue needs O(n) traversal to find end.
    With tail, enqueue is always O(1).

Operations:
    Enqueue → O(1)
    Dequeue → O(1)
    Peek    → O(1)

Space Complexity: O(n)

Advantage over array: no overflow, no wasted space,
size grows and shrinks dynamically.

Visual: 
    head                       tail
      ↓                         ↓
    [1|→] → [2|→] → [3|→] → [4|NULL]
dequeue from head, enqueue at tail`,

    'Circular Queue: insertion and deletion operations': `Solves the wasted space problem of linear array queue.
The rear wraps around to the front when it reaches the end.
Treats the array as a circle.

    front and rear move using modulo:
        rear  = (rear + 1) % n
        front = (front + 1) % n

Conditions:
    Empty  →  front == -1
    Full   →  (rear + 1) % n == front

Operations:
    Enqueue → O(1)
    Dequeue → O(1)

Space Complexity: O(n)  — no space wasted unlike linear queue

Visual (n=5):
    [  |  | 3 | 4 | 5 ]
           ↑         ↑
          front     rear

    after enqueue of 6:
    [ 6 |  | 3 | 4 | 5 ]
      ↑      ↑
     rear   front

    rear wrapped around to index 0.

Advantage: reuses freed space from dequeued elements.`,

    'Deque (Doubly ended queue)': `A deque allows insertion and deletion from BOTH ends.
It is a generalisation of both stack and queue.

Two types:
    Input Restricted Deque  →  insert only at rear, delete from both
    Output Restricted Deque →  delete only from front, insert at both

Operations:
    insertFront  →  add element at front
    insertRear   →  add element at rear
    deleteFront  →  remove element from front
    deleteRear   →  remove element from rear
    peekFront    →  view front element
    peekRear     →  view rear element

All operations → O(1)
Space Complexity: O(n)

Can be implemented using:
    Circular array  →  efficient, fixed size
    Doubly LL       →  dynamic, O(1) insert/delete at both ends
`
  },

  hashing: {
    'Hash Functions':`A hash function takes a key and converts it into an index in a fixed-size array called a hash table.

    hash(key) → index

Goal: distribute keys uniformly across the table to minimize collisions (two keys mapping to same index).

Common hash functions:

    Division Method (most common):
        index = key % tableSize
        tableSize should be a prime number for better distribution

    Multiplication Method:
        index = floor(n × (key × A % 1))
        A is a constant, usually 0.618 (golden ratio)

    Mid Square Method:
        square the key, extract middle digits as index


Time Complexity: O(1) average for insert, search, delete
Space Complexity: O(n)`,
    'Collision Handling: Chaining and Open Addressing': `A collision occurs when two different keys produce the same index.

    hash("abc") = 5
    hash("xyz") = 5   ← collision

Collisions are inevitable — by the pigeonhole principle,
if you have more keys than slots, collisions must occur.

Two main strategies to handle collisions:

    1. Chaining (Open Hashing)
           → each slot holds a linked list of all keys that map to it

    2. Open Addressing (Closed Hashing)
           → find another empty slot within the table itself
           → subtypes: linear probing, quadratic probing, double hashing

Choosing a strategy:
    Chaining     → better when load factor is high or unknown
    Open Address → better when load factor is low, cache friendly
    
 Each index in the hash table stores a linked list.
All keys that hash to the same index are stored in that list.

Visual:
    index 0 → [cat] → NULL
    index 1 → [dog] → [dig] → NULL
    index 2 → NULL
    index 3 → [rat] → NULL

Operations:
    Insert → hash(key) → go to index → insert at head of LL
    Search → hash(key) → go to index → traverse LL
    Delete → hash(key) → go to index → find and remove from LL

Time Complexity:
    Best/Average → O(1)   short chains, good hash function
    Worst        → O(n)   all keys hash to same index (one long chain)

Space Complexity: O(n + m)
    n = number of elements
    m = table size

Advantages:
    → Never overflows — LL grows as needed
    → Simple to implement
    → Works well with high load factor

Disadvantage:
    → Extra memory for LL pointers
    → Cache unfriendly — nodes scattered in memory   
    
 All elements stored inside the hash table itself.
No linked lists — when collision occurs, probe for next empty slot.

Load factor must stay below 1 (table can fill up).

Three probing strategies:

─────────────────────────────────────────
1. Linear Probing
    If index is taken, try index+1, index+2, index+3...
    
    next = (hash(key) + i) % tableSize     i = 1, 2, 3...

    Problem: Primary Clustering
        Long runs of filled slots form, making search slower.

─────────────────────────────────────────
2. Quadratic Probing
    If index is taken, try index+1², index+2², index+3²...

    next = (hash(key) + i²) % tableSize

    Reduces primary clustering but causes Secondary Clustering
    (keys with same hash follow same probe sequence).

─────────────────────────────────────────
3. Double Hashing
    Use a second hash function to determine step size.

    next = (hash1(key) + i × hash2(key)) % tableSize

    hash2(key) = prime - (key % prime)

    Best distribution — avoids both primary and secondary clustering.
    Most complex to implement.

─────────────────────────────────────────
Time Complexity:
    Average → O(1)    with low load factor
    Worst   → O(n)    table nearly full

Deletion is tricky in open addressing:
    Cannot just remove — breaks probe chains.
    Use a DELETED marker (tombstone) instead. `,

    'Hash Maps in C':`
A hash map is a data structure that stores key-value pairs.
Lets you insert, search and delete in O(1) average time.

Core idea:
    Instead of searching through an array one by one,
    run the key through a hash function which gives you
    the exact index to go to.

    key → hash(key) → index → value

    "name" → hash("name") → 3 → "John"

C has no built-in hash map — you implement it manually.

Time Complexity:
    Insert → O(1) average
    Search → O(1) average, O(n) worst
    Delete → O(1) average

Space Complexity: O(n)

─────────────────────────────────────────────────────
HOW IT WORKS

    Insert:
        hash(key) → get index → store value at that index

    Search:
        hash(key) → get index → return value at that index

    Delete:
        hash(key) → get index → remove value at that index

    All three operations go directly to the index — no loops.
    This is why average case is O(1).

─────────────────────────────────────────────────────
VS ARRAY

    Array   →  index is a number you provide manually
    HashMap →  index is computed from the key automatically

    Array:    arr[3] = "John"        you choose index 3
    HashMap:  map["name"] = "John"   hash function chooses index

VS LINKED LIST / LINEAR SEARCH / BINARY SEARCH 

    Linked List search  →  O(n)  traverse every node
    Binary Search       →  O(log n)  array must be sorted
    Hash Map search     →  O(1)  jump directly to index
`,
  },

  Trees: {
    'Representation of Trees, Binary trees and its properties': `TREE
    A hierarchical non-linear data structure.
    Consists of nodes connected by edges.
    Has one root node, no cycles.

Terminology:
    Root       →  topmost node, no parent
    Parent     →  node with children
    Child      →  node with a parent
    Leaf       →  node with no children
    Siblings   →  nodes with the same parent
    Height     →  longest path from root to a leaf
    Depth      →  distance of a node from the root
    Degree     →  number of children a node has
    Subtree    →  a node and all its descendants

─────────────────────────────────────────────────────
BINARY TREE
    A tree where every node has at most 2 children.
    Called left child and right child.

─────────────────────────────────────────────────────
TYPES OF BINARY TREES

    Full Binary Tree
        Every node has either 0 or 2 children.
        No node has exactly 1 child.

              1
            /   \\
           2     3
          / \\
         4   5

    Complete Binary Tree
        All levels are completely filled except possibly the last.
        Last level has all nodes as far left as possible.

              1
            /   \\
           2     3
          / \\  /
         4   5 6

    Perfect Binary Tree
        All internal nodes have exactly 2 children.
        All leaves are at the same level.

              1
            /   \\
           2     3
          / \\  / \\
         4   5 6   7

    Balanced Binary Tree
        Height of left and right subtree of every node
        differs by at most 1.
        Height = O(log n)
        Example: AVL Tree

    Degenerate (Skewed) Tree
        Every node has only one child.
        Essentially a linked list.
        Height = O(n)  →  worst case for BST

─────────────────────────────────────────────────────
PROPERTIES

    Max nodes at level i          →  2^i
    Max nodes in tree of height h →  2^(h+1) - 1
    Min height for n nodes        →  floor(log₂n)
    For full BT: leaves = internal nodes + 1`,
    'BT representation using Arrays': `A binary tree can be stored in a 1D array using index formulas.
Root is stored at index 1 (1-based indexing).

For a node at index i:
    Left child   →  2i
    Right child  →  2i + 1
    Parent       →  floor(i / 2)

Example:
          1          index 1
        /   \\
       2     3       index 2, 3
      / \\     \\
     4   5     6     index 4, 5, 6

    Array: [ _ | 1 | 2 | 3 | 4 | 5 | _ | 6 ]
              0   1   2   3   4   5   6   7

    Index 0 is unused (easier math with 1-based).
    Missing nodes stored as NULL or 0.

Advantage:
    → Simple, no pointers needed
    → Random access — reach any node in O(1)

Disadvantage:
    → Wastes space for skewed trees
      (a skewed tree of n nodes needs 2^n array size)
    → Fixed size — must know max nodes upfront
    → Best suited for Complete Binary Trees`, 

    'BT representation using LL': `Each node is a struct with data and two pointers.

    struct Node {
        int data;
        struct Node* left;
        struct Node* right;
    };

Creating a node:
    struct Node* newNode(int val) {
        struct Node* node = malloc(sizeof(struct Node));
        node->data  = val;
        node->left  = NULL;
        node->right = NULL;
        return node;
    }

Building a tree:
    struct Node* root = newNode(1);
    root->left        = newNode(2);
    root->right       = newNode(3);
    root->left->left  = newNode(4);
    root->left->right = newNode(5);

Visual:
         [1]
        /    \\
      [2]    [3]
      / \\
    [4] [5]

Advantage:
    → Dynamic size — grows as needed
    → No wasted space for sparse trees
    → Natural representation for unbalanced trees

Disadvantage:
    → Extra memory for two pointers per node
    → No random access — must traverse from root`, 
    'BT traversals': `Traversal = visiting every node exactly once in a specific order.

─────────────────────────────────────────────────────
Three recursive DFS traversals:

    Inorder   (Left → Root → Right)
    Preorder  (Root → Left → Right)
    Postorder (Left → Right → Root)

Tree used for dry run:
         1
        / \\
       2   3
      / \\
     4   5

─────────────────────────────────────────────────────
INORDER  (L → Root → R)
    Visit left subtree, then root, then right subtree.
    For a BST, inorder gives sorted output.

    void inorder(struct Node* root) {
        if(root == NULL) return;
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }

    Output: 4 2 5 1 3

─────────────────────────────────────────────────────
PREORDER  (Root → L → R)
    Visit root first, then left, then right.
    Used to copy or serialize a tree.

    void preorder(struct Node* root) {
        if(root == NULL) return;
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }

    Output: 1 2 4 5 3

─────────────────────────────────────────────────────
POSTORDER  (L → R → Root)
    Visit left, then right, then root.
    Used to delete a tree (children before parent).

    void postorder(struct Node* root) {
        if(root == NULL) return;
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }

    Output: 4 5 2 3 1

─────────────────────────────────────────────────────
LEVEL ORDER (BFS)
    Visit nodes level by level, left to right.
    Uses a Queue instead of recursion.

    Output: 1 2 3 4 5

    Algorithm:
        1. Enqueue root
        2. While queue is not empty:
               dequeue node → print it
               enqueue left child if exists
               enqueue right child if exists

─────────────────────────────────────────────────────
Time Complexity:  O(n)  — every node visited once
Space Complexity:
    DFS (recursive) → O(h)  call stack, h = height
    BFS (level order) → O(w) queue, w = max width`, 
    'Priority Queue: implementation': ``,
  },

  'tc-sc': {
    'Notes and PDFs':  `
Big O describes how the runtime or space of an algorithm
grows as the input size n increases.
It describes the WORST CASE behaviour.

Common complexities (fastest to slowest):
    O(1)       Constant   — doesn't depend on n
    O(log n)   Logarithmic — halves the problem each step
    O(n)       Linear      — one operation per element
    O(n log n) Linearithmic — divide and conquer
    O(n²)      Quadratic   — nested loops
    O(2^n)     Exponential — recursive subsets
    O(n!)      Factorial   — permutations

Rules:
    1. Drop constants     O(2n)    → O(n)
    2. Drop lower terms   O(n²+n)  → O(n²)
    3. Different inputs   O(a+b) stays O(a+b) — don't simplify

Visual growth:
    n=10:   O(1)=1, O(log n)=3, O(n)=10, O(n²)=100, O(2^n)=1024


Three ways to measure an algorithm's performance:

    Best Case    → Ω (Omega)   — most favourable input
    Worst Case   → O (Big O)   — most unfavourable input
    Average Case → Θ (Theta)   — expected over all inputs

Example — Linear Search on arr = [3, 1, 4, 1, 5]:

    Best Case    → O(1)   target is arr[0]
    Worst Case   → O(n)   target is last or not present
    Average Case → O(n/2) = O(n)

Example — Binary Search:

    Best Case    → O(1)      target is middle element
    Worst Case   → O(log n)  target not present
    Average Case → O(log n)

Note:
    When we say an algorithm is O(n) we usually mean worst case.
    Best case is rarely useful — you can't guarantee it.


A recurrence relation expresses the runtime of a recursive
algorithm in terms of smaller inputs.

General form:
    T(n) = aT(n/b) + f(n)

    a = number of recursive calls
    b = factor by which input is divided
    f(n) = work done outside recursion

Examples:

    Binary Search:
        T(n) = T(n/2) + O(1)
        one recursive call, halves input, O(1) work per call
        → T(n) = O(log n)

    Merge Sort:
        T(n) = 2T(n/2) + O(n)
        two recursive calls, halves input, O(n) to merge
        → T(n) = O(n log n)

    Naive Fibonacci:
        T(n) = T(n-1) + T(n-2) + O(1)
        → T(n) = O(2^n)

Solving methods:
    1. Substitution Method  — guess and verify by induction
    2. Recursion Tree       — draw out the calls, sum each level
    3. Master Theorem       — formula for divide and conquer


    A formula to directly solve recurrences of the form:
    T(n) = aT(n/b) + O(n^d)

    a = number of subproblems
    b = factor input is divided by
    d = exponent of work done per level

Three cases — compare a vs b^d:

    Case 1: a > b^d  →  T(n) = O(n^(log_b a))
            more work in recursive calls

    Case 2: a = b^d  →  T(n) = O(n^d log n)
            equal work at every level

    Case 3: a < b^d  →  T(n) = O(n^d)
            more work at the top level

─────────────────────────────────────────
Examples:

    Merge Sort: T(n) = 2T(n/2) + O(n)
        a=2, b=2, d=1
        b^d = 2^1 = 2
        a == b^d  →  Case 2
        T(n) = O(n log n)  ✓

    Binary Search: T(n) = T(n/2) + O(1)
        a=1, b=2, d=0
        b^d = 2^0 = 1
        a == b^d  →  Case 2
        T(n) = O(log n)  ✓

    Naive multiply: T(n) = 4T(n/2) + O(n)
        a=4, b=2, d=1
        b^d = 2^1 = 2
        a > b^d  →  Case 1
        T(n) = O(n^(log_2 4)) = O(n²)


Space complexity measures the total memory an algorithm uses
relative to input size n.

Two components:
    Auxiliary Space  →  extra space used by the algorithm
    Input Space      →  space taken by the input itself

Usually we care about auxiliary space.

─────────────────────────────────────────
Common cases:

    O(1) — Constant Space
        No extra memory regardless of input size.
        Examples: iterative binary search, bubble sort

    O(n) — Linear Space
        Extra space grows with input.
        Examples: storing a copy of array, hash map, recursion on LL

    O(log n) — Logarithmic Space
        Recursive call stack that halves each time.
        Examples: recursive binary search, merge sort stack frames

    O(n²) — Quadratic Space
        2D matrix or nested storage.
        Examples: adjacency matrix for graph of n nodes

─────────────────────────────────────────
Recursion and Stack Space:

    Every recursive call adds a frame to the call stack.
    Space used = depth of recursion × space per frame.

    Factorial(n):      depth = n      → O(n)
    Binary Search(n):  depth = log n  → O(log n)
    Merge Sort(n):     depth = log n  → O(log n) stack
                       + O(n) for temp arrays = O(n) total

─────────────────────────────────────────
Time vs Space tradeoff:

    Often you can trade one for the other.
    Example: memoization uses O(n) space to reduce
    exponential time to O(n).
    Sorting in-place saves space but may increase time.

`
  },
}