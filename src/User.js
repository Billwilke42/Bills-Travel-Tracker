class User {
    constructor(travelersData, destinationData, tripsData, date) {
        if (travelersData, destinationData, tripsData) {
            this.travelersData = travelersData;
            this.destinationData = destinationData;
            this.tripsData = tripsData;
            this.currentDate = date;
        }
    }

    totalExpenditureWithoutProfitForYear(tripData) {
        if (tripData instanceof Array) {
        let costFlights, costLodging;
        let totalSpent = tripData.reduce((total, trip) => {
            this.destinationData.forEach(destination => {
                if(trip.destinationID === destination.id && Number(trip.date.split('/')[0]) > 2019) {
                    costFlights = destination.estimatedFlightCostPerPerson * trip.travelers
                    costLodging = destination.estimatedLodgingCostPerDay * trip.duration
                } else {
                    return 0
                }
                total += costFlights + costLodging
            })
            return total
        }, 0)
        return totalSpent
        }
    }

    totalSpentAllTime(tripData) {
        if (tripData instanceof Array) {
            let costFlights, costLodging;
            let totalSpent = tripData.reduce((total, trip) => {
                this.destinationData.forEach(destination => {
                    if(trip.destinationID === destination.id) {
                        costFlights = destination.estimatedFlightCostPerPerson * trip.travelers
                        costLodging = destination.estimatedLodgingCostPerDay * trip.duration
                    } else {
                        return 0
                    }
                    total += costFlights + costLodging
                })
                return total
            }, 0)
            let margin = totalSpent * .10
            let total = totalSpent + margin
            return Math.floor(total)
        }
    } 

    searchForDestination(id) {
        let destination = this.destinationData.find(destination => destination.id === id)
        return destination.destination
    }

    agencyMargin(tripData) {
        const expenditure = this.totalExpenditureWithoutProfitForYear(tripData)
        const margin = expenditure * .10
        return Math.floor(margin)    
    }

    tripsRequested(tripData) {
        if (tripData instanceof Array) {
            let requestedTrips = tripData.filter(trip => trip.status === 'pending')
            return requestedTrips
        }
    }

    accumulatedTotal(tripData) {
        if(tripData instanceof Array) {
            const expenditure = this.totalExpenditureWithoutProfitForYear(tripData) 
            const margin = this.agencyMargin(tripData)
            const total = expenditure + margin
            return total
        }
    }
}

export default User;