'use strict';

const { Contract } = require('fabric-contract-api');

class TravelerTicketContract extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const travelerticketcontract = [
            {
                id: 'ID',
                trip_id: 'TRIP_ID',
                status: 'BOOKED',
                revenue: "REVENUE",
                rapid: 'RAPID Y/N',
                cm: 'STANDARD',
                bus: 'BUS',
                refund: 'REFUND Y/N',
                check_in: 'Check_in DATE',
                check_out: 'Check_out DATE',
                traveler_id: 'TRAVELER_ID'
            },
        ];

        for (let i = 0; i < travelerticketcontract.length; i++) {
            travelerticketcontract[i].docType = 'travelerticketcontract';
            await ctx.stub.putState('TravelerTicketContract' + i, Buffer.from(JSON.stringify(travelerticketcontract[i])));
            console.info('Added <--> ', travelerticketcontract[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryTravelerTicketContract(ctx, travelerticketcontractNumber) {
        const travelerticketcontractAsBytes = await ctx.stub.getState(travelerticketcontractNumber);
        if (!travelerticketcontractAsBytes || travelerticketcontractAsBytes.length === 0) {
            throw new Error(`${travelerticketcontractNumber} does not exist`);
        }
        console.log(travelerticketcontractAsBytes.toString());
        return travelerticketcontractAsBytes.toString();
    }

    async createTravelerTicketContract(ctx, travelerticketcontractNumber, id, trip_id, status, revenue, rapid, cm, bus, refund, check_in, check_out, traveler_id) {
        console.info('============= START : Create TravelerTicketContract ===========');

        const travelerticketcontract = {
            id,
            trip_id,
            status,
            revenue,
            rapid,
            cm,
            bus,
            refund,
            check_in,
            check_out,
            traveler_id
        };

        await ctx.stub.putState(travelerticketcontractNumber, Buffer.from(JSON.stringify(travelerticketcontract)));
        console.info('============= END : Create TravelerTicketContract ===========');
    }

    async queryAllTravelerTicketContract(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }
}

module.exports = TravelerTicketContract;
