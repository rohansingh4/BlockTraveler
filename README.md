# BlockTraveler
Caliper/Offchain/NFT


Network set up will 

5 organizations 
3 peer nodes
At least 2 endorsing peers per Organization 
Test for 5 million transactions per day by adding 100K nodes batch per round.
The smart contact should do basic validation of the input fields of the ticket


And additional validation like duplicate tickets ID

Json structure-

POST API {/traveler/ticket}: We created POST API to create traveler ticket
in blockchain and it is generated json response as below.
{
   "id": "string",
   "trip_id": "string",
   "status": "string",
   "revenue": 0,
   "rapid": 0,
   "cm": 0,
   "bus": 0,
   "refund": 0,
   "check_in": "string",
   "check_out": "string",
   "traveller_id": "string"
}

PUT API {/traveler/ticket/{id}}: We created PUT API to update existing
traveler ticket on the behalf of id and it is generated json response as
below.
{
   "id": "string",
   "trip_id": "string",
   "status": "string",
   "revenue": 0,
   "rapid": 0,
   "cm": 0,
   "bus": 0,
   "refund": 0,
   "check_in": "string",
   "check_out": "string",
   "traveller_id": "string"
}

