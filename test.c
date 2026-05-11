#include <stdio.h>
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
}