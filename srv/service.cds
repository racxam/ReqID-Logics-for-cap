using {db }from '../db/schema';

service catservice {

    entity OfficeSrv as projection on db.Office;
    entity SeqTrackerSrv as projection on db.SeqTracker;
    

};