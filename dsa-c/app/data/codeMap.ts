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

}
