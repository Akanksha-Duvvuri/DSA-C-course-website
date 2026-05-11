export const codeMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search': `#include<stdio.h>

int linearSearch(int *arr, int n, int key){
    for(int i=0; i<n; i++){
      if(arr[i] == key){
        return i;
      }
    }
    return -1;
}

int main(){
    int arr[6] = {1, 4, 3, 9, 10};
    int n = sizeof(arr) / sizeof(int);

    printf("%d", linearSearch(arr, n, 9));

    return 0;
}`,

    'Binary Search': `#include<stdio.h>

int binarySearch(int *arr, int start, int end, int key){
    while(start <= end){
        int mid = start + (end - start) / 2;

        if(arr[mid] == key){
            return mid;
        } else if(key > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

int main(){
    int arr[7] = {1, 2, 18, 39, 54, 81, 109};
    int n = sizeof(arr) / sizeof(int);

    printf("%d", binarySearch(arr, 0, n-1, 18));

    return 0;
}`,

    'Jump Search': `// coming soon...`,
    'Interpolation Search': `// coming soon...`,
    'Exponential Search': `// coming soon...`,
  },

  

  sorting: {
    'Bubble Sort': `#include<stdio.h>

void bubbleSort(int *arr, int n) {
    for(int i=0; i<n-1; i++) {
        for(int j=0; j<n-i-1; j++) { 
            if(arr[j] > arr[j+1]){ 
                int temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

void printArr(int *arr, int n) {
    for(int i=0; i<n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int n = sizeof(arr) / sizeof(int);

    bubbleSort(arr, n);
    printArr(arr, n);

    return 0;
}
    `,
    'Selection Sort': `#include<stdio.h>

void selection(int *arr, int n) {
    for(int i=0; i<n-1; i++) {
        int minIdx = i;
        for(int j=1+i; j<n; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;  
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

void print(int *arr, int n) {
    for(int i=0; i<n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int n = sizeof(arr) / sizeof(arr[0]);


    selection(arr, n);
    print(arr, n);
    return 0;
}
    `,
    'Insertion Sort': `#include <stdio.h>

void print(int arr[], int n){
    for(int i = 0; i < n; i++){
        printf("%d ", arr[i]);
    }
}

void insertion(int arr[], int n){
    for(int i = 1; i < n; i++){
        int curr = arr[i];
        int prev = i - 1;

        while(prev >= 0 && arr[prev] > curr){
            arr[prev + 1] = arr[prev];
            prev--;
        }

        arr[prev + 1] = curr;
    }

    print(arr, n);
}

int main(){
    int arr[6] = {20, 3, 15, 2, 11, 50};
    int n = sizeof(arr) / sizeof(int);

    insertion(arr, n);

    return 0;
}
    `,
    'Merge Sort': `#include <stdio.h>

void print(int arr[], int n){
    for(int i = 0; i < n; i++){
        printf("%d ", arr[i]);
    }
}

void merge(int arr[], int start, int mid, int end){
    int size = end - start + 1;
    int tempArr[size];
    int i = start, j = mid + 1;
    int k = 0;

    while(i <= mid && j <= end){
        if(arr[i] <= arr[j]){
            tempArr[k++] = arr[i++];
        }else{
            tempArr[k++] = arr[j++];
        }
    }

    while(i <= mid){
        tempArr[k++] = arr[i++];
    }

    while(j <= end){
        tempArr[k++] = arr[j++];
    }

    for(int p = 0; p < size; p++){
        arr[start + p] = tempArr[p];
    }
}

void mergeSort(int arr[], int start, int end){
    if(start < end){
        int mid = start + (end - start) / 2;

        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);

        merge(arr, start, mid, end);
    }
}

int main(){
    int arr[6] = {12, 31, 35, 8, 32, 17};
    int n = sizeof(arr) / sizeof(int);

    mergeSort(arr, 0, n - 1);
    print(arr, n);

    return 0;
}`,
    'Quick Sort': `#include <stdio.h>

void print(int arr[], int n){
    for(int i = 0; i < n; i++){
        printf("%d ", arr[i]);
    }
}

int partition(int arr[], int start, int end){

    int idx = start - 1;
    int pivot = arr[end];

    for(int j = start; j < end; j++){

        if(arr[j] <= pivot){

            idx++;

            // swap arr[j] and arr[idx]
            int temp = arr[j];
            arr[j] = arr[idx];
            arr[idx] = temp;
        }
    }

    idx++;

    int temp = arr[end];
    arr[end] = arr[idx];
    arr[idx] = temp;

    return idx;
}

void quick(int arr[], int start, int end){

    if(start < end){

        int pivotIdx = partition(arr, start, end);

        quick(arr, start, pivotIdx - 1);
        quick(arr, pivotIdx + 1, end);
    }
}

int main(){

    int arr[6] = {12, 31, 35, 8, 32, 17};
    int n = sizeof(arr) / sizeof(int);

    quick(arr, 0, n - 1);
    print(arr, n);
    return 0;
}`,
    'Heap Sort': ``,
    'Radix Sort': ``,
  },

  'linked-list': {
    'Singly Linked List : Insertion, deletion, reversing': `#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* head = NULL;
Node* tail = NULL;

Node* createNode(int data) {
    Node* newnode = (Node*)malloc(sizeof(Node));

    if(newnode == NULL) {
        printf("memory allocation failed");
        exit(1);
    }

    newnode->data = data;
    newnode->next = NULL;

    return newnode;
}

void insertatfront(int data) {
    Node* newnode = createNode(data);

    if(head == NULL) {
        head = tail = newnode; 
    } else {
        newnode->next = head;
        head = newnode;
    }
}

void insertatend(int data) {
    Node* newnode = createNode(data);

    if(head == NULL) {
        head = tail = newnode;
    } else {
        tail->next = newnode;
        tail = newnode;
    }
}

void deleteatfront(){
    Node* temp = head;

    if(head == NULL) {
        printf("empty LL");
        return;
    }

    head = head->next;
    temp->next = NULL;
    free(temp);
}

void deleteatend(){
    if(head == NULL) return;

    if(head->next == NULL) {
        free(head);
        head = tail = NULL;
        return;
    }

    Node* temp = head;
    while(temp->next->next != NULL) {
        temp = temp->next;
    }

    free(temp->next);
    temp->next = NULL;
    tail = temp;  // ← update tail
}

void deleteatposition(int position) {
    Node* temp = head;

    for(int i=0; i<position-1; i++) {
        temp = temp->next;
    }

    temp->next = temp->next->next;
}

void insertatposition(int data, int position) {
    Node* newnode = createNode(data);
    Node* temp = head;

    if(head == NULL) {
        printf("empty LL");
        exit(1);
    }

    for(int i=0; i<position-1; i++) {
        temp = temp->next;
    }

    newnode->next = temp->next;
    temp->next = newnode;
}

void reverseLL(){
    Node* prev = NULL;
    Node* curr = head;
    Node* next = NULL;

    tail = head;

    while(curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    head = prev;
}

void printLL() {
    Node* temp = head;

    while(temp != NULL) {
        printf("%d  -->  ", temp->data);
        temp = temp->next;
    }
    printf("NULL");
}

int main() {

    insertatfront(5);
    insertatfront(3);
    insertatfront(2);

    printLL();

    insertatend(6);

    printLL();

    insertatposition(4, 2);

    printLL();

    deleteatend();

    printLL();

    deleteatfront();

    printLL();

    deleteatposition(2);

    printLL();

    reverseLL();

    printLL();
    return 0;
}
    `,
    'concatenating two LL':  `#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;


Node* head1 = NULL;
Node* tail1 = NULL;


Node* head2 = NULL;
Node* tail2 = NULL;


Node* createNode(int data) {
    Node* newnode = (Node*)malloc(sizeof(Node));

    if(newnode == NULL) {
        printf("memory allocation failed");
        exit(1);
    }

    newnode->data = data;
    newnode->next = NULL;

    return newnode;
}


void insertend1(int data) {
    Node* newnode = createNode(data);

    if(head1 == NULL) {
        head1 = tail1 = newnode;
    } else {
        tail1->next = newnode;
        tail1 = newnode;
    }
}

void insertend2(int data) {
    Node* newnode = createNode(data);

    if(head2 == NULL) {
        head2 = tail2 = newnode;
    } else {
        tail2->next = newnode;
        tail2 = newnode;
    }
}

void concat() { 
    if(head1 == NULL) {
        head1 = head2;
        tail1 = tail2;
        return;
    }

    tail1->next = head2;

    if(head2 != NULL) {
        tail1 = tail2;
    }
}

void print(Node* head) {
    Node* temp = head;

    while(temp != NULL) {
        printf("%d  -->  ", temp->data);
        temp = temp->next;
    }
    printf("NULL");
}

int main() {

    insertend1(1);
    insertend1(2);
    insertend1(3);

    print(head1);

    insertend2(4);
    insertend2(5);
    insertend2(6);

    print(head2);

    concat();

    print(head1);
    return 0;
}`,

    'Doubly Linked List: Operations: insertion, deletion':  `#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
} Node;

Node* head = NULL;
Node* tail = NULL;

Node* createnode(int data) {
    Node* newnode = (Node*)malloc(sizeof(Node));

    if(newnode == NULL) {
        printf("memory allocation failed");
        exit(1);
    }

    newnode->data = data;
    newnode->prev = NULL;
    newnode->next = NULL;

    return newnode;
}

void insertbeginning(int data) {
    Node* newnode = createnode(data);

    if(head == NULL) {
        head = tail = newnode;
    } else {
        newnode->next = head;
        head->prev = newnode; 
        head = newnode;
    }
}

void insertatend(int data) {
    Node* newnode = createnode(data);

    if(head == NULL) {
        head = tail = newnode;
    } else {
        tail->next = newnode;
        newnode->prev = tail;
        tail = newnode;
    }
}

void deleteatfront() {
    if(head == NULL) return;

    Node* temp = head;

    if(head == tail) {
        head = tail = NULL;
    } else {
        head = head->next;
        head->prev = NULL;
    }

    free(temp);
}

void deleteatend() {
    if(head == NULL) return;

    Node* temp = tail;

    if(head == tail) {
        head = tail = NULL;
    } else {
        tail = tail->prev;
        tail->next = NULL;
    }

    free(temp);
}

void print() {
    Node* temp = head;

    while(temp != NULL) {
        printf("%d <--> ", temp->data);
        temp = temp->next;
    }

    printf("NULL");
}

int main() {

    insertbeginning(3);
    insertbeginning(2);
    insertbeginning(1);
    
    print();

    insertatend(1);

    print();

    deleteatfront();

    print();

    deleteatend();
    
    print();
    return 0;
}`,

    'Circular Linked List and its operations':  `#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int data;
    struct Node* next;
} Node;

Node* head = NULL;
Node* tail = NULL;

Node* createNode(int data){
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void insertatbeg(int data){
    Node* newNode = createNode(data);
    if(head == NULL){
        head = tail = newNode;
    }
    else{
        newNode->next = head;
        head = newNode;
    }
}


void print(){
    Node* temp = head;
    while(temp != NULL){
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL");
}

int isCycle(){
    Node* slow = head;
    Node* fast = head;
    while(fast != NULL && fast->next != NULL){
        slow = slow->next;
        fast = fast->next->next;
        if(slow == fast){
            printf("Cycle exists");
            return 1;
        }
    }
    printf("Cycle doesn't exist");
    return 0;
}


void removeCycle(){
    Node* slow = head;
    Node* fast = head;
    int cycleFound = 0;

    while(fast != NULL && fast->next != NULL){
        slow = slow->next;
        fast = fast->next->next;
        if(slow == fast){
            printf("Cycle exists");
            cycleFound = 1;
            break;
        }
    }

    if(cycleFound == 0){
        printf("Cycle doesn't exist");
        return;
    }

    slow = head;

    if(slow == fast){
        while(fast->next != slow){
            fast = fast->next;
        }
        fast->next = NULL;
    }
    else{
        slow = head;                      
        while(slow->next != fast->next){   
            slow = slow->next;
            fast = fast->next;
        }
        fast->next = NULL;
    }
    printf("Cycle removed");
}

int main(){
    insertatbeg(4);
    insertatbeg(3);
    insertatbeg(2);
    insertatbeg(1);

    tail->next = head;   

    removeCycle();     
    print();             

    return 0;
}`,


    'Representation of a single two-dimensional array':  `#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* head = NULL;
Node* tail = NULL;

Node* createNode(int data){
    Node* newnode = (Node*)malloc(sizeof(Node));

    newnode->data = data;
    newnode->next = NULL;

    return newnode;
}

void insertatend(int data){
    Node* newnode = createNode(data);

    if(head == NULL){
        head = tail = newnode;
    }

    tail->next = newnode;
    tail = newnode;
}

void print(){
    if(head == NULL){
        printf("empty LL");
    }

    Node* temp = head;

    while(temp != NULL){
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL");
}

int main(){
    int arr[2][3] = {{1, 2, 3},{4, 5, 6}};

    for(int i=0; i<2; i++){
        for(int j=0; j<3; j++){
            insertatend(arr[i][j]);
        }
    }

    print();
    return 0;
}`
  },

  stacks : {
    'Stack using Array': `#include<stdio.h>
#include<stdlib.h>

#define MAX 100

int stack[MAX];
int top = -1;

void push(int data) {
    if(top == MAX - 1) { 
        printf("stack overflow");
        return;
    }

    top++;
    stack[top] = data;
}

void pop(){
    if(top == -1) {
        printf("empty stack");
        return;
    }

    top--;
}

int peek(){
    if(top == -1) {
        printf("empty stack");
        return -1
    }

   return stack[top];
}

void display() {
    if(top == -1) {
        printf("empty stack");
        return;
    }

    for(int i=top; i>=0; i--) {
        printf("%d", stack[i]);
    }
}

int main() {

    push(3);
    push(2);
    push(1);

    display();

    pop();
    printf("popped: ");

    display();

    printf("stack top: ");
    printf("%d", peek());

    return 0;
}`,

    'Stack using LL': `#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* top = NULL; 

Node* createnode(int data) {
    Node* newnode = (Node*)malloc(sizeof(Node));

    if(newnode == NULL) {
        printf("memory allocation failed");
        exit(1);
    }

    newnode->data = data;
    newnode->next = NULL;

    return newnode;
}

void push(int data) {
    Node* newnode = createnode(data);

    newnode->next = top;
    top = newnode;
}

void pop() {
    if(top == NULL) {
        printf("empty stack");
        return;
    }
    Node* temp = top;
    top = top->next;
    free(temp);
}

int peek() {
    if(top == NULL) {
        printf("empty stack");
        return -1;
    }

    return top->data;
}

void display() {
    Node* temp = top;

    while(temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }

    printf("NULL ");

}

int main() {

    push(3);
    push(2);
    push(1);

    display();

    pop();

    display();

    printf("%d", peek());

    display();

    return 0;
}`,

    'Infix to Postfix Conversion and Postfix expression evaluation': `#include <stdio.h>
#include <stdlib.h>

// Char stack for infix→postfix 
char cstack[100];
int ctop = -1;

void cpush(char x)  { cstack[++ctop] = x; }
char cpop()         { return cstack[ctop--]; }
char cpeek()        { return cstack[ctop]; }

// Int stack for postfix evaluation 
int istack[100];
int itop = -1;

void ipush(int x)   { istack[++itop] = x; }
int  ipop()         { return istack[itop--]; }



int priority(char x){
    if(x == '+' || x == '-') return 1;
    if(x == '*' || x == '/') return 2;
    return 0;
}

void infixToPostfix(char infix[], char postfix[]){
    int k = 0;
    ctop = -1;

    for(int i = 0; infix[i] != '\0'; i++){

        if(infix[i] >= '0' && infix[i] <= '9'){
            postfix[k++] = infix[i];
        }
        else if(infix[i] == '('){
            cpush(infix[i]);
        }
        else if(infix[i] == ')'){
            while(ctop != -1 && cpeek() != '('){
                postfix[k++] = cpop();
            }
            cpop(); // discard '('
        }
        else{
            while(ctop != -1 && cpeek() != '(' && priority(cpeek()) >= priority(infix[i])){
                postfix[k++] = cpop();
            }
            cpush(infix[i]);
        }
    }

    while(ctop != -1){
        postfix[k++] = cpop();
    }

    postfix[k] = '\0';
}

int evaluatePostfix(char postfix[]){
    itop = -1;

    for(int i = 0; postfix[i] != '\0'; i++){

        if(postfix[i] >= '0' && postfix[i] <= '9'){
            ipush(postfix[i] - '0');   // convert char to int
        }
        else{
            int b = ipop();            // right operand
            int a = ipop();            // left operand

            switch(postfix[i]){
                case '+': ipush(a + b); break;
                case '-': ipush(a - b); break;
                case '*': ipush(a * b); break;
                case '/': ipush(a / b); break;
            }
        }
    }

    return ipop(); // final result
}

int main(){
    char infix[100]   = "(2+3)*4";
    char postfix[100];

    infixToPostfix(infix, postfix);
    printf("Infix   = %s", infix);
    printf("Postfix = %s", postfix);
    printf("Result  = %d", evaluatePostfix(postfix));

    return 0;
}`,

    'Recursion implementation': `#include <stdio.h>
#include <stdlib.h>

#define MAX 100

int storage[MAX];   // backing array to hold values between calls
int top = -1;

// ─── Recursive Push 
void push(int val){
    if(top >= MAX - 1){
        printf("Stack Overflow");
        return;
    }
    storage[++top] = val;
    printf("Pushed: %d  (depth = %d)", val, top);
}

// ─── Recursive Pop 
int pop(){
    if(top == -1){
        printf("Stack Underflow!");
        return -1;
    }
    int val = storage[top--];
    printf("Popped: %d  (depth = %d)", val, top + 1);
    return val;
}

// ─── Recursive Insert at Bottom 
// Used internally by reverse()
void insertAtBottom(int val){
    if(top == -1){
        push(val);
        return;
    }
    int temp = pop();           // hold current top
    insertAtBottom(val);        // recurse deeper
    push(temp);                 // restore on way back up
}

// ─── Recursive Reverse 
void reverse(){
    if(top == -1) return;
    int temp = pop();           // take top element
    reverse();                  // reverse the rest
    insertAtBottom(temp);       // place it at the bottom
}

// ─── Recursive Print (top → bottom) 
void printStack(int index){
    if(index < 0){
        return;
    }
    if(index == top) 
    printf("| %3d        |", storage[index]);
    printStack(index - 1);
}

// ─── Recursive Search 
int search(int index, int val){
    if(index < 0)         return -1;   
    if(storage[index] == val) return top - index; // distance from top
    return search(index - 1, val);
}

// ─── Recursive Sum 
int sum(int index){
    if(index < 0) return 0;
    return storage[index] + sum(index - 1);
}

int main(){

    push(10);
    push(20);
    push(30);
    push(40);
    push(50);


    printStack(top);


    printf("Sum = %d", sum(top));


    int pos = search(top, 30);
    if(pos != -1)
        printf("Found 30 at distance %d from top", pos);
    else
        printf("Not found");


    pop();
    pop();


    printStack(top);


    reverse();
    printStack(top);

    return 0;
}`,
  },

   queues : {
    'Queue using Array': `#include<stdio.h>
#include<stdlib.h>

#define MAX 100

int queue[MAX];
int front = -1;
int rear = -1;

void enqueue(int data) {
    if(rear == MAX - 1) {
        printf("queue overflow");
        return;
    }

    if(front == -1) front = 0;

    queue[++rear] = data;
}

void dequeue() {
    if(front == -1 || front > rear) {
        printf("queue underflow");
        return;
    }

    front++;
}

int peek(){
    if(front == -1 || front > rear){
        printf("empty queue");
        return -1;
    }

    return queue[front];
}

void print() {
    if(front == -1 || front > rear) {
        printf("empty queue");
        return;
    }

    for(int i=front; i<= rear; i++) {
        printf("%d", queue[i]);
    }
    printf(" ");
}

int main() {

    enqueue(1);
    enqueue(2);
    enqueue(3);

    print();

    dequeue();
    
    print();

    printf("%d", peek());
    return 0;
}`,
    'Queue using LL': `#include<stdio.h>
#include<stdlib.h>

typedef struct Node{
    int data;
    struct Node* next;
} Node;

Node* front = NULL;
Node* rear = NULL;

Node* createnode(int data){
    Node* newnode = (Node*)malloc(sizeof(Node));

    newnode->data = data;
    newnode->next = NULL;

    return newnode;
}

void enqueue(int data){
    Node* newnode = createnode(data);

    if(rear == NULL){
        front = rear = newnode;
    } else {
        rear->next = newnode;
        rear = newnode;
    }
}

void dequeue(){
    if(front == NULL){
        printf("empty queue");
        return;
    }

    Node* temp = front;
    front = front->next;

    free(temp);
}

int peek(){
    if(front == NULL){
        printf("empty queue");
        return -1;
    }

    return front->data;
}

void print(){
    Node* temp = front;

    while(temp != NULL){
        printf("%d -> ", temp->data);
        temp = temp->next;
    }

    printf("NULL");
}

int main(){
    enqueue(1);
    enqueue(2);
    enqueue(3);

    print();

    dequeue();

    print();

    printf("%d", peek());
    return 0;
}`,
    'Circular Queue: insertion and deletion operations':`//using Arrays

#include<stdio.h>
#include<stdlib.h>

#define MAX 100

int queue[MAX];
int rear = -1;
int front = -1;

int isFull(){
    return (rear + 1) % MAX == front;
}

int isEmpty(){
    return front == -1;
}

void enqueue(int data){
    if(isFull()){
        printf("queue overflow");
        return;
    }

    if(front == -1){
        front = rear = 0;
    } else {
        rear = (rear + 1) % MAX;
    }

    queue[rear] = data;
}

void dequeue(){
    if(isEmpty()){
        printf("queue underflow");
        return;
    }

    if(front == rear){
        front = rear = -1;
        return;
    }

    front = (front + 1) % MAX;
}

void print(){
    if(isEmpty()){
        printf("empty queue");
        return;
    }

    int i = front;

    while(1) {
        printf("%d ", queue[i]);
        if(i == rear) break;
        i = (i + 1) % MAX;
    }

    printf(" ");
}

int main(){
    enqueue(1);
    enqueue(2);
    enqueue(3);
    enqueue(4);

    print();

    dequeue();
    dequeue();

    print();

    enqueue(5);
    enqueue(6);

    print();
    return 0;
}
    
// Using LL 

#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* front = NULL;
Node* rear = NULL;

Node* createNode(int data){
    Node* newnode = (Node*)malloc(sizeof(Node));

    newnode->data = data;
    newnode->next = NULL;
}

int isEmpty(){
    return front == NULL;
}

void enqueue(int data){
    Node* newnode = createNode(data);

    if(isEmpty()){
        front = rear = newnode;
        rear->next = front;
    } else {
        newnode->next = front;
        rear->next = newnode;
        rear = newnode;
    }
}

void dequeue(){
    if(isEmpty()){
        printf("empty queue");
        return;
    }

    Node* temp = front;
    front = front->next;
    rear->next = front;
    free(temp);
}

void print(){
     if(isEmpty()){
        printf("Queue is empty");
        return;
    }

    Node* temp = front;

    do{
        printf("%d ", temp->data);
        temp = temp->next;
    }while(temp != front);

    printf(" ");
}

int main(){
    enqueue(1);
    enqueue(2);
    enqueue(3);
    enqueue(4);

    print();

    dequeue();
    dequeue();

    print();

    enqueue(5);
    enqueue(6);

    print();
    return 0;
}`,
    'Deque (Doubly ended queue)': `//using doubly LL
    
#include<stdio.h>
#include<stdlib.h>

typedef struct Node{
    int data;
    struct Node* prev;
    struct Node* next;
}Node;

Node* front = NULL;
Node* rear = NULL;

Node* createNode(int data){
    Node* newnode = (Node*)malloc(sizeof(Node));

    newnode->data = data;
    newnode->next = NULL;
    newnode->prev = NULL;
}

int isEmpty(){
    return front == NULL;
}

void insertatbeg(int data){
    Node* newnode = createNode(data);

    if(isEmpty()){
        front = rear = newnode;
    }else {
        newnode->next = front;
        front->prev = newnode;
        front = newnode;
    }
}

void insertatend(int data){
    Node* newnode = createNode(data);

    if(isEmpty()){
        front = rear = newnode;
    } else {
        rear->next = newnode;
        newnode->prev = rear;
        rear = newnode;
    }
}

void deleteatbeg(){
    if(isEmpty()){
        printf("deque underflow");
        return;
    }

    Node* temp = front;

    if(front == rear){
        front = rear = NULL;
    } else {
        front = front->next;
        front->prev = NULL;
    }

    free(temp);
}

void deleteatend(){
    if(isEmpty()){
        printf("deque underflow");
        return;
    }

    Node* temp = rear;

    if(front == rear){
        front = rear =  NULL;
    } else {
        rear = rear->prev;
        rear->next = NULL;
    }

    free(temp);
}

void print(){
    if(isEmpty()){
        printf("empty deque");
        return;
    }

    Node* temp = front;

    while(temp != NULL){
        printf("%d ", temp->data);
        temp = temp->next;
    }

    printf("  ");
}

int main(){
    insertatend(10);
    insertatend(20);
    insertatbeg(5);
    insertatbeg(2);

    print();

    deleteatbeg();
    deleteatend();

    print();

    insertatend(30);
    insertatbeg(1);

    print();
    return 0;
}`,
  },

  hashing: {
    'Hash Functions':`//Chaining - using LL
#include<stdio.h>
#include<stdlib.h>

#define SIZE 10

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* table[SIZE];

Node* createnode(int data) {
    Node* newnode = (Node*)malloc(sizeof(Node));

    if(newnode == NULL) {
        printf("memory allocation failed");
        exit(1);
    }

    newnode->data = data;
    newnode->next = NULL;

    return newnode;
}

int hash(int key){
    return key % SIZE;
}

void insert(int key){
    int index = hash(key);

    Node* newnode = createnode(key);

    newnode->next = table[index];
    table[index] = newnode;
}

void search(int key){
    int index = hash(key);

    Node* temp = table[index];

    while(temp != NULL){
        if(temp->data == key){
            printf("found the key at the index: %d", index);
            return;
        }

        temp = temp->next;
    }

    printf("not found");
}

void delete(int key){
    int index = hash(key);

    Node* temp = table[index];
    Node* prev = NULL;

    while(temp != NULL && temp->data != key){
        prev = temp;
        temp = temp->next;
    }

    if(temp == NULL){
        printf("key not found");
        return;
    }

    if(prev == NULL){
        table[index] = temp->next;
    } else {
        prev->next = temp->next;
    }

    free(temp);
}

void display(){
    for(int i=0; i<SIZE; i++){
        printf("[%d]: ", i);

        Node* temp = table[i];

        while(temp != NULL){
            printf("%d -> ", temp->data);
            temp = temp->next;
        }

        printf("NULL");
    }
}

int main(){
    for(int i=0; i<SIZE; i++){
        table[i] = NULL;
    }


    insert(25);
    insert(35);
    insert(15);
    insert(7);

    display();

    search(35);
    search(100);

    return 0;
}`,

    'Collision Handling: Chaining and Open Addressing': `//Chaining
#include <stdio.h>
#include <stdlib.h>

#define SIZE 10

struct Node{
    int data;
    struct Node* next;
};

struct Node* table[SIZE];

int hash(int key){
    return key % SIZE;
}

void insert(int key){
    int index = hash(key);

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = key;
    newNode->next = table[index];

    table[index] = newNode;
}

void print(){
    for(int i = 0; i < SIZE; i++){
        struct Node* temp = table[i];

        printf("%d : ", i);

        while(temp != NULL){
            printf("%d -> ", temp->data);
            temp = temp->next;
        }

        printf("NULL");
    }
}

int main(){
    insert(10);
    insert(20);
    insert(15);
    insert(25);

    print();

    return 0;
}


─────────────────────────────────────────

//Open Addressing

a. Linear Probing 

#include <stdio.h>

#define SIZE 10

int hashTable[SIZE];

void init(){
    for(int i = 0; i < SIZE; i++){
        hashTable[i] = -1;
    }
}

int hash(int key){
    return key % SIZE;
}

void insert(int key){
    int index = hash(key);

    while(hashTable[index] != -1){
        index = (index + 1) % SIZE;
    }

    hashTable[index] = key;
}

void print(){
    for(int i = 0; i < SIZE; i++){
        printf("%d : %d", i, hashTable[i]);
    }
}

int main(){
    init();

    insert(10);
    insert(20);
    insert(15);
    insert(25);

    print();

    return 0;
}

─────────────────────────────────────────

b. Quadratic Probing

#include <stdio.h>

#define SIZE 10

int table[SIZE];

void init(){
    for(int i = 0; i < SIZE; i++){
        table[i] = -1;
    }
}

int hash(int key){
    return key % SIZE;
}

void insert(int key){
    int index = hash(key);
    int i = 0;

    while(table[(index + i * i) % SIZE] != -1){
        i++;
    }

    table[(index + i * i) % SIZE] = key;
}

void print(){
    for(int i = 0; i < SIZE; i++){
        printf("%d : %d", i, table[i]);
    }
}

int main(){
    init();

    insert(10);
    insert(20);
    insert(15);
    insert(25);

    print();

    return 0;
}
    
    
    `,

    'Hash Maps in C':`#include <stdio.h>

#define SIZE 10

struct Map{
    int key;
    int value;
};

struct Map table[SIZE];

void init(){
    for(int i = 0; i < SIZE; i++){
        table[i].key = -1;
    }
}

int hash(int key){
    return key % SIZE;
}

void insert(int key, int value){
    int index = hash(key);

    while(table[index].key != -1){
        index = (index + 1) % SIZE;
    }

    table[index].key = key;
    table[index].value = value;
}

int search(int key){
    int index = hash(key);

    while(table[index].key != -1){
        if(table[index].key == key){
            return table[index].value;
        }

        index = (index + 1) % SIZE;
    }

    return -1;
}

int main(){
    init();

    insert(1, 100);
    insert(2, 200);
    insert(12, 500);

    printf("Key 2 = %d", search(2));
    printf("Key 12 = %d", search(12));

    return 0;
}`,
  },

  Trees: {
    'Representation of Trees, Binary trees and its properties': `refer to the notes and PDFs
`,
    'BT representation using Arrays': `#include <stdio.h>

int tree[10];

int main(){
    tree[1] = 10;
    tree[2] = 20;
    tree[3] = 30;
    tree[4] = 40;
    tree[5] = 50;

    for(int i = 1; i <= 5; i++){
        printf("%d ", tree[i]);
    }

    return 0;
}`, 
    'BT representation using LL': `#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createNode(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->data = val;
    newNode->left = NULL;
    newNode->right = NULL;

    return newNode;
}

int main(){
    struct Node* root = createNode(10);

    root->left = createNode(20);
    root->right = createNode(30);

    root->left->left = createNode(40);
    root->left->right = createNode(50);

    printf("%d", root->data);

    return 0;
}`, 
    'BT traversals': `#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createNode(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->data = val;
    newNode->left = NULL;
    newNode->right = NULL;

    return newNode;
}

void preorder(struct Node* root){
    if(root != NULL){
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void inorder(struct Node* root){
    if(root != NULL){
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void postorder(struct Node* root){
    if(root != NULL){
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

int main(){
    struct Node* root = createNode(10);

    root->left = createNode(20);
    root->right = createNode(30);
    root->left->left = createNode(40);
    root->left->right = createNode(50);

    printf("Preorder: ");
    preorder(root);

    printf("Inorder: ");
    inorder(root);

    printf("Postorder: ");
    postorder(root);

    return 0;
}`, 
    'Priority Queue: implementation': ``,
  },

  'tc-sc': {
    'Notes and PDFs': `No code for this one. Refer to the notes and pdfs`
  }

}
