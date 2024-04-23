#include "std.h"
#include "GLOBALVARIABLE.h"
#include "PROCESS.h"
#include "SCRIPT.h"
#include "SMALLFUNCTION.h"



int main(int argc,char *argv_input_path[]){

    
    strcpy(file_folder,argv_input_path[1]);
    
    PROCESS_getScript();
    PROCESS_checkScript_NULL();

    PROCESS_createOutputFile();
    PROCESS_writeInHTMLHeader();
    PROCESS_writeInBackGround();
    PROCESS_createDialogBox();

    PROCESS_playerControlFunctionWriteInFnJs();    
    PROCESS_contentAppearAnimationFunctionWriteInFnJs();
    PROCESS_characterMovingAnimationFunctionWriteInFnJs();


    SCRIPT_read();

    PROCESS_writeInScript();
    PROCESS_closeOutputFile();
    PROCESS_fnjsToJS();
    PROCESS_delTempJS();
}



