#ifndef SMALLFUNCTION_H_
#define SMALLFUNCTION_H_

#include "std.h"
#include "GLOBALVARIABLE.h"

void FN_fgetsDelEndl();
char * FN_mergeString(char * a, char *b);
char * FN_STRTOK(char * target, char token);
int FN_charInString(char * target, char token);
int FN_nameToIdx(int idx , char * target);
char ** FN_splitDot(char * p);
char ** FN_splitDotWithoutComma(char * p);
char * FN_arr2String(int i,int val,int vallast);


char * FN_arr2String(int i, int val,int vallast){

    char * ns = FN_mergeString("[","");
    
    for(int j=val;j<=vallast;j++){
        ns = FN_mergeString(ns,"\".");
        ns = FN_mergeString(ns,file_folder);
        ns = FN_mergeString(ns,character[i].moving_src[j-1]+1);
        if(j < vallast) ns = FN_mergeString(ns,",");
        
        
    }
    ns = FN_mergeString(ns,"]");
    //printf("%s\n",ns);
    return ns;
}


int FN_nameToIdx(int idx , char * target){
    for(int i=0;i<character[idx].src_count;i++){

        if(!strcmp(character[idx].src_name[i],target)) return i;
    }
    return -1;
}



char ** FN_splitDot(char * p){

    char * target = calloc(strlen(p)+1,sizeof(char));
    strcpy(target,p);
    char **a = calloc(50,sizeof(char *));
    int n = 0;

    char * ff;
    while(strlen(target)){
        ff = FN_STRTOK(target,':');
        if(strlen(ff) < strlen(FN_STRTOK(target,'.'))){
            a[n] = calloc(strlen(ff)+1,sizeof(char));
            strcpy(a[n],ff);
            n += 1;
            target += strlen(ff) + 1;
            break;
        }
       
        else{
            ff = FN_STRTOK(target,'.');
            if(strlen(ff) != strlen(target)){
                a[n] = calloc(strlen(ff)+1,sizeof(char));
                strcpy(a[n],ff);
                n += 1;
                target += strlen(ff) + 1;
            }
            else break;
        }
        
        
    }
    
    while(strlen(target)){
        ff = FN_STRTOK(target,',');
        if(strlen(ff) == strlen(target))break;
       
        a[n] = calloc(strlen(ff)+1,sizeof(char));
        strcpy(a[n],ff);
        n += 1;
        target += strlen(ff) + 1;
        
        
    }
    //printf("%s",target);


    a[n] = calloc(strlen(target)+1,sizeof(char));
    strcpy(a[n],target);
    
    //free(target);
    free(ff);
    //for(int i=0;i<n+1;i++)printf("%s ",a[i]);
    
    return a;


}

char ** FN_splitDotWithoutComma(char * p){

    char * target = calloc(strlen(p)+1,sizeof(char));
    strcpy(target,p);
    char **a = calloc(50,sizeof(char *));
    int n = 0;

    char * ff;
    while(strlen(target)){
        ff = FN_STRTOK(target,':');
        if(strlen(ff) < strlen(FN_STRTOK(target,'.'))){
            a[n] = calloc(strlen(ff)+1,sizeof(char));
            strcpy(a[n],ff);
            n += 1;
            target += strlen(ff) + 1;
            break;
        }
       
        else{
            ff = FN_STRTOK(target,'.');
            if(strlen(ff) != strlen(target)){
                a[n] = calloc(strlen(ff)+1,sizeof(char));
                strcpy(a[n],ff);
                n += 1;
                target += strlen(ff) + 1;
            }
            else break;
        }
        
        
    }
    
    //printf("%s",target);


    a[n] = calloc(strlen(target)+1,sizeof(char));
    strcpy(a[n],target);
    
    //free(target);
    free(ff);
    //for(int i=0;i<n+1;i++)printf("%s ",a[i]);
    
    return a;


}

int FN_charInString(char * target, char token){

    for(int i=0;i<strlen(target);i++){
        if(target[i]==token) return 1;
    }
    return 0;

}

char * FN_STRTOK(char * target, char token){

    int size = 0;
    while(target[size]!=token && size < strlen(target))size += 1;
    
    char * n = calloc(size + 1,sizeof(char));
    for(int i=0;i<size;i++)n[i] = target[i];
    return n;

}

void FN_fgetsDelEndl(){
    while(in[strlen(in)-1] <= 32 && strlen(in))in[strlen(in)-1] = 0;
}

char * FN_mergeString(char * a, char *b){
    char * target = calloc(strlen(a) + strlen(b) + 1,sizeof(char));
    for(int i=0;i<strlen(a);i++)target[i] = a[i];
    for(int i=0;i<strlen(b);i++)target[i + strlen(a)] = b[i];
    return target;
}

#endif