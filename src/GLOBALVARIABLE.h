#ifndef GB_H_
#define GB_H_

#include "std.h"

//character
//html id : name + src_name
typedef struct GB_STRUCT_CHARACTER{
    char *src[50];
    char *src_name[50];
    char *moving_src[50];
    int src_count;
    char * name;

}GB_CHARACTER;
GB_CHARACTER * character;
int character_count = 0;

//paths
char file_folder[1025];


//input
char in[3000];


//files
FILE * html;
FILE * js;
FILE * fnjs;
FILE * script;

#endif