
module.exports= async function(){
    const { OfficeSrv, SeqTrackerSrv }= this.entities;
    this.before('CREATE', OfficeSrv,(req,res)=>{
        console.log("Hello i am good");
        
    })
    this.on('CREATE', OfficeSrv,officeReqCreate);


    async function officeReqCreate(req,res) {
        const db = cds.tx(req);
        const result= await db.run(
            SELECT.one('MAX(lastSeq) AS lastSeq').from(SeqTrackerSrv)
        )
        const lastSeq= result.lastSeq;
        let BASE_REQID=R

        console.log(result);
        return result;
    }

}
