
module.exports = async function () {
    const { OfficeSrv, SeqTrackerSrv } = this.entities;
    this.before('CREATE', OfficeSrv, (req, res) => {
        console.log("Hello i am good");

    })
    this.on('CREATE', OfficeSrv, officeReqCreate);


    async function officeReqCreate(req, res) {
        const db = cds.tx(req);
        const result = await db.run(
            SELECT.one('MAX(lastSeq) AS lastSeq').from(SeqTrackerSrv)
        )
        const lastSeq = result.lastSeq;
        const ReqID = generateReqID(lastSeq);
        console.log("New ReqID is :"+ReqID);

        

        return {ReqID:ReqID};
    }

};
function generateReqID(lastSeq) {
    let base = "R"
    let maxlen = 8;

        let zeros = "0".repeat(maxlen - noOfDigit(lastSeq));
        let ReqID = base + zeros + (lastSeq+1);
        console.log(ReqID);

        return ReqID;
}

function noOfDigit(n) {
    return Math.floor(Math.log10(n)) + 1;
}




