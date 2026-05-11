#include<stdio.h>
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
}