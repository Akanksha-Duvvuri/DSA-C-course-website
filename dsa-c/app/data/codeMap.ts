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

void swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

// pivot and sort
int partition(int arr[], int start, int end){
    int idx = start - 1;
    int pivot = arr[end];

    for(int j = start; j < end; j++){
        if(arr[j] <= pivot){
            idx++;
            swap(&arr[j], &arr[idx]);
        }
    }

    idx++;
    swap(&arr[end], &arr[idx]);

    return idx;
}

void quick(int arr[], int start, int end){
    if(start < end){
        int pivotIdx = partition(arr, start, end);

        quick(arr, start, pivotIdx - 1);   // left half
        quick(arr, pivotIdx + 1, end);     // right half
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
        printf("memory allocation failed\n");
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
        head = tail = NULL;
    } else {
        tail->next = newnode;
        tail = newnode;
    }
}

void deleteatfront(){
    Node* temp = head;

    if(head == NULL) {
        printf("empty LL");
    }

    head = head->next;
    temp->next = NULL;
    free(temp);
}

void deleteatend(){
    Node* temp = head;

    while(temp->next->next != NULL) {
        temp = temp->next;
    }

    temp->next = NULL;
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
        printf("empty LL\n");
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
    printf("NULL\n");
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
        printf("memory allocation failed\n");
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
    printf("NULL\n");
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
        newnode->next = NULL;
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

    Node* temp = head;

    while(temp->next->next != NULL) {
        temp = temp->next;
    }

    tail->prev = NULL;
    temp->next = NULL;
    tail = temp;
}

void print() {
    Node* temp = head;

    while(temp != NULL) {
        printf("%d <--> ", temp->data);
        temp = temp->next;
    }

    printf("NULL\n");
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

struct Node{
    int data;
    struct Node* next;
};

struct Node* head = NULL;
struct Node* tail = NULL;

struct Node* createNode(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->data = val;
    newNode->next = NULL;

    return newNode;
}

void push_front(int val){
    struct Node* newNode = createNode(val);

    if(head == NULL){
        head = tail = newNode;
    }
    else{
        newNode->next = head;
        head = newNode;
    }
}

void print(struct Node* headNode){
    struct Node* temp = headNode;

    while(temp != NULL){
        printf("%d -> ", temp->data);
        temp = temp->next;
    }

    printf("NULL\n");
}

// Floyd's cycle finding algorithm
int isCycle(struct Node* headNode){
    struct Node* slow = headNode;
    struct Node* fast = headNode;

    while(fast != NULL && fast->next != NULL){
        slow = slow->next;
        fast = fast->next->next;

        if(slow == fast){
            printf("Cycle exists\n");
            return 1;
        }
    }

    printf("Cycle doesn't exist\n");
    return 0;
}

void removeCycle(struct Node* headNode){
    struct Node* slow = headNode;
    struct Node* fast = headNode;
    int cycleFound = 0;

    while(fast != NULL && fast->next != NULL){
        slow = slow->next;
        fast = fast->next->next;

        if(slow == fast){
            printf("Cycle exists\n");
            cycleFound = 1;
            break;
        }
    }

    if(cycleFound == 0){
        printf("Cycle doesn't exist\n");
        return;
    }

    slow = headNode;

    if(slow == fast){
        while(fast->next != slow){
            fast = fast->next;
        }

        fast->next = NULL;
    }
    else{
        struct Node* prev = fast;

        while(slow != fast){
            slow = slow->next;
            prev = fast;
            fast = fast->next;
        }

        prev->next = NULL;
    }
}

int main(){
    push_front(4);
    push_front(3);
    push_front(2);
    push_front(1);

    tail->next = head;

    removeCycle(head);
    print(head);

    return 0;
}`,


    'Representation of a single two-dimensional array':  `#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data;
    struct Node* next;
};

struct Node* head = NULL;
struct Node* tail = NULL;

void insert(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->data = val;
    newNode->next = NULL;

    if(head == NULL){
        head = tail = newNode;
    }
    else{
        tail->next = newNode;
        tail = newNode;
    }
}

void print(){
    struct Node* temp = head;

    while(temp != NULL){
        printf("%d -> ", temp->data);
        temp = temp->next;
    }

    printf("NULL\n");
}

int main(){
    int arr[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for(int i = 0; i < 2; i++){
        for(int j = 0; j < 3; j++){
            insert(arr[i][j]);
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
    if(top == MAX - 1) { //full
        printf("stack overflow\n");
        return;
    }

    top++;
    stack[top] = data;
}

void pop(){
    if(top == -1) {
        printf("empty stack\n");
    }

    top--;
}

int peek(){
    if(top == -1) {
        printf("empty stack\n");
    }

    printf("%d", stack[top]);
}

void display() {
    if(top == -1) {
        printf("empty stack\n");
        return;
    }

    for(int i=top; i>=0; i--) {
        printf("%d\n", stack[i]);
    }
}

int main() {

    push(3);
    push(2);
    push(1);

    display();

    pop();
    printf("popped: \n");

    display();

    printf("stack top: ");
    peek();

    display();
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
        printf("memory allocation failed\n");
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
    Node* temp = top;

    top = top->next;
    free(temp);
}

int peek() {
    if(top == NULL) {
        printf("empty stack\n");
        return -1;
    }

    printf("%d\n", top->data);
}

void display() {
    Node* temp = top;

    while(temp != NULL) {
        printf("%d \n", temp->data);
        temp = temp->next;
    }

    printf("NULL\n");

}

int main() {

    push(3);
    push(2);
    push(1);

    display();

    pop();

    display();

    peek();

    display();

    return 0;
}`,

    'Infix to Postfix Conversion and Postfix expression evaluation': `#include <stdio.h>

char stack[100];
int top = -1;

void push(char x){
    stack[++top] = x;
}

char pop(){
    return stack[top--];
}

char peek(){
    return stack[top];
}

int priority(char x){
    if(x == '+' || x == '-'){
        return 1;
    }
    if(x == '*' || x == '/'){
        return 2;
    }
    return 0;
}

void infixToPostfix(char infix[], char postfix[]){
    int k = 0;

    for(int i = 0; infix[i] != '\0'; i++){

        if(infix[i] >= '0' && infix[i] <= '9'){
            postfix[k++] = infix[i];
        }
        else{
            while(top != -1 && priority(peek()) >= priority(infix[i])){
                postfix[k++] = pop();
            }

            push(infix[i]);
        }
    }

    while(top != -1){
        postfix[k++] = pop();
    }

    postfix[k] = '\0';
}

int main(){
    char infix[100] = "2+3*4";
    char postfix[100];

    infixToPostfix(infix, postfix);

    printf("Postfix = %s\n", postfix);

    return 0;
}`,

    'Recursion implementation': ``,
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

    return 0;
}`,
    'Queue using LL': `#include<stdio.h>
#include<stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* front = NULL;
Node* rear = NULL;


Node* createNode(int data) {
    Node* newnode = (Node*)malloc(sizeof(Node));

    if(newnode == NULL) {
        printf("Memory allocation failed");
        exit(1);
    }

    newnode->data = data;
    newnode->next = NULL;

    return newnode;
}

void enqueue(int data) {
    Node* newnode = createNode(data);

    if(rear == NULL) {
        rear = front = newnode;
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

void print() {
    Node* temp = front;

    while(temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }

    printf("NULL");
}

int main() {
    enqueue(1);
    enqueue(2);
    enqueue(3);

    print();

    dequeue();

    print();

    return 0;
}`,
    'Circular Queue: insertion and deletion operations':`//using Arrays

#include<stdio.h>
#include<stdlib.h>

#define MAX 10

int queue[MAX];
int rear = -1;
int front = -1;

int isFull() {
    return (rear + 1) % MAX == front; 
}

int isEmpty() {
    return front == -1;
}

void enqueue(int data){
    if(isFull()){
        printf("queue overflow\n");
        return;
    }

    if(front == -1){
        front = rear = 0;
    } else {
        rear = (rear + 1) % MAX; 
    }

    queue[rear] = data;
}

void dequeue() {
    if(isEmpty()) {
        printf("queue underflow");
        return;
    }

    if(front == rear) {
        front = rear = -1;
    } else {
        front = (front + 1) % MAX;
    }
}

void print() {
    if(isEmpty()) {
        printf("Queue is empty\n");
        return;
    }

    int i = front;

    while(1) {
        printf("%d ", queue[i]);
        if(i == rear) break;
        i = (i + 1) % MAX;
    }

    printf("\n");
}

int main() {

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

#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

int isEmpty(){
    return front == NULL;
}

void enqueue(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->data = val;

    if(front == NULL){
        front = rear = newNode;
        rear->next = front;
    }
    else{
        newNode->next = front;
        rear->next = newNode;
        rear = newNode;
    }
}

void dequeue(){
    if(isEmpty()){
        printf("Queue Underflow\n");
        return;
    }

    if(front == rear){
        free(front);
        front = rear = NULL;
    }
    else{
        struct Node* temp = front;
        front = front->next;
        rear->next = front;
        free(temp);
    }
}

void print(){
    if(isEmpty()){
        printf("Queue is empty\n");
        return;
    }

    struct Node* temp = front;

    do{
        printf("%d ", temp->data);
        temp = temp->next;
    }while(temp != front);

    printf("\n");
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
    
#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data;
    struct Node* prev;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

int isEmpty(){
    return front == NULL;
}

void insertFront(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->data = val;
    newNode->prev = NULL;
    newNode->next = front;

    if(isEmpty()){
        front = rear = newNode;
    }
    else{
        front->prev = newNode;
        front = newNode;
    }
}

void insertRear(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->data = val;
    newNode->next = NULL;
    newNode->prev = rear;

    if(isEmpty()){
        front = rear = newNode;
    }
    else{
        rear->next = newNode;
        rear = newNode;
    }
}

void deleteFront(){
    if(isEmpty()){
        printf("Deque Underflow");
        return;
    }

    struct Node* temp = front;

    if(front == rear){
        front = rear = NULL;
    }
    else{
        front = front->next;
        front->prev = NULL;
    }

    free(temp);
}

void deleteRear(){
    if(isEmpty()){
        printf("Deque Underflow");
        return;
    }

    struct Node* temp = rear;

    if(front == rear){
        front = rear = NULL;
    }
    else{
        rear = rear->prev;
        rear->next = NULL;
    }

    free(temp);
}

void print(){
    if(isEmpty()){
        printf("Deque is empty");
        return;
    }

    struct Node* temp = front;

    while(temp != NULL){
        printf("%d ", temp->data);
        temp = temp->next;
    }

    printf(" ");
}

int main(){
    insertRear(10);
    insertRear(20);
    insertFront(5);
    insertFront(2);

    print();

    deleteFront();
    deleteRear();

    print();

    insertRear(30);
    insertFront(1);

    print();

    return 0;
}`,
  },

  hashing: {
    'Hash Functions':`#include<stdio.h>
#include<stdlib.h>

//Hashing = directly jump to where data should be stored - CORE IDEA. Not searching the whole list
//table[index] = always points to the head of the list

#define SIZE 10

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* table[SIZE]; //array of LL, each index stores a LL head
 
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

//hash function - decides which index to go to
int hash(int key) {
    return key % SIZE;
}

void insert(int key) {
    int index = hash(key);

    Node* newnode = createnode(key); //data is the key

    //insert at beginning of LL in that index
    newnode->next = table[index];
    table[index] = newnode;
}

void search(int key) {
    int index = hash(key);

    Node* temp = table[index]; //first go to that index in the hash table

    while(temp != NULL){ //then traverse the LL to find the element required
        if(temp->data == key){
            printf("found the key at index: %d", index);
            return;
        } 
        temp = temp->next;
    }

    printf("not found");
}

void delete(int key){
    int index = key % SIZE;

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

    //first node
    if(prev == NULL){
        table[index] = temp->next;
    } else {
        prev->next = temp->next; //deleting temp
    }

    free(temp);
}

void display() {
    for(int i = 0; i< SIZE; i++){
        printf("[%d]: ", i);

        Node* temp = table[i];

        while(temp != NULL){
            printf("%d -> ", temp->data);
            temp = temp->next;
        }

        printf("NULL");
    }
}

int main() {
    //initialising the table
    for(int i = 0; i< SIZE; i++) {
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
    'Representation of Trees, Binary trees and its properties': `refer to the notes :)
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

}
