import getNumberOfDays from "../../components/predictions/createprediction/datehelper";

export default class Predictions {
    constructor(id, pair, status, user_id, user, startingPrice, expectedPrice,more, days, expectedPriceMove, ending_at, signalComments, created_at, updated_at ){
        this.id = id;
        this.pair = pair;
        this.status = status;
        this.user_id = user_id;
        this.user = user;
        this.startingPrice = startingPrice;
        this.expectedPrice = expectedPrice;
        this.more = false;
        this.days = days;
        this.expectedPriceMove = expectedPriceMove;
        this.ending_at = ending_at;
        this.signalComments = signalComments;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    fromJson(json){
        return {
            id : json['id'] ? json['id'] : null,
            pair : json['pair'] ? json['pair'] : null,
            status : json['status'] ? json['status'] : null,
            user_id : json['user_id'] ? json['user_id'] : null,
            user : json['user'] ? json['user'] : null,
            startingPrice : json['startingPrice'] ? json['startingPrice'] : null,
            expectedPrice : json['expectedPrice'] ? json['expectedPrice'] : null,
            more : false,
            days : json['days'] ? json['days'] : null,
            expectedPriceMove : json['expectedPriceMove'] ? json['expectedPriceMove'] : null,
            ending_at : json['ending_at'] ? getNumberOfDays(json['ending_at']) : null,
            signalComments : json['signalComments'] ? json['signalComments'] : null,
            created_at : json['created_at'] ? json['created_at'] : null,
            updated_at : json['updated_at'] ? json['updated_at'] : null,

        }
    }

}

