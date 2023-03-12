export default class CreateFamilyPool {
    constructor(poolName, exchange, minimumDeposit, maximumMembers){
        this.poolName = poolName;
        this.exchange = exchange;
        this.minimumDeposit = minimumDeposit;
        this.maximumMembers = maximumMembers;
    }

    toJson(familyPool){
        return {
            poolName: familyPool.poolName,
            exchange: familyPool.exchange,
            minimumDeposit: familyPool.depositValue,
            maximumMembers: familyPool.memberValue,
        }
    }
}