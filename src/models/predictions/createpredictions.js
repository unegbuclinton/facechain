export default class CreatePredictions {
    constructor(pair, status, startingPrice, expectedPrice, days){
        this.pair = pair;
        this.status = 'active';
        this.startingPrice = startingPrice;
        this.expectedPrice = expectedPrice;
        this.days = days;
    }

    toJson(prediction){
      return {
        "pair": prediction.currencyPair,
        "status": 'active',
        "startingPrice": prediction.startPrice,
        "expectedPrice": prediction.endPrice,
        "days": prediction.days,
      }
    }
}

