#!/bin/bash

echo starting runnig tests ....
pwd
ls
echo "Parent dir contents ..."
ls ../
 npm test 
#npm test 

allure generate ./reports/allure-results --clean
#allure generate ./reports/allure-results --clean
allure open 
#allure open
echo "finisedh the tests"
exit 0
   



