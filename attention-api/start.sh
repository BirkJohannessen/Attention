#!/bin/bash

cp ../attention-client/src/calls.json .
cp ../attention-client/src/advancedCalls.json .

kill $(lsof -t -i:4000)

npm start &