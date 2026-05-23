#include <stdio.h>
#include <stdlib.h>

#define MAX 100

int storage[MAX];
int top = -1;

void push(int val){
    if(top >= MAX - 1){
        printf("Stack Overflow");
        return;
    }
    storage[++top] = val;
}

int pop(){
    if(top == -1){
        printf("Stack Underflow");
        return -1;
    }
    return storage[top--];
}

void insertAtBottom(int val){
    if(top == -1){
        storage[++top] = val;
        return;
    }
    int temp = storage[top--];
    insertAtBottom(val);
    storage[++top] = temp;
}

void reverse(){
    if(top == -1) return;
    int temp = storage[top--];
    reverse();
    insertAtBottom(temp);
}


void printStack(){
    if(top == -1) return; 

    int temp = storage[top--];

    printf("%d  ", temp);
    
    printStack();

    storage[++top] = temp;
}


int sum(){
    if(top == -1) return 0;

    int temp = storage[top--];

    int result = temp + sum();

    storage[++top] = temp;
    return result;
}


int search(int val){
    if(top == -1) return -1;

    int temp = storage[top--];

    int pos = search(val);

    storage[++top] = temp;

    if(temp == val) return top - (top);  
    return (pos == -1) ? -1 : pos + 1; ;
}

int main(){
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);

    printStack();

    printf("Sum = %d ", sum());

    int pos = search(30);
    if(pos != -1)
        printf("Found 30 at distance %d from top", pos);
    else
        printf("Not found");

    pop();
    pop();

    printStack();

    reverse();
    printf("After reversing:");
    printStack();

    return 0;
}