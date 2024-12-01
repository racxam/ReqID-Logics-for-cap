namespace db;
using { cuid } from '@sap/cds/common';

entity SeqTracker : cuid {
    REQID:String;
    lastSeq:Int16;
    
}
entity Office  {
    key REQID:String;
    Designation:String;
    Salary:Int32;
    Age:Int16;

    
}