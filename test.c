#include <stdio.h>
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
    printf("Infix   = %s\n", infix);
    printf("Postfix = %s\n", postfix);
    printf("Result  = %d\n", evaluatePostfix(postfix));

    return 0;
}