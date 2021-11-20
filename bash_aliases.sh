#!/usr/bin/env sh
alias expo='docker exec -it pcr-mobile-app expo'
alias yarn='docker exec -it pcr-mobile-app yarn'

# test prettier alias
alias prettier-check='docker exec -it pcr-mobile-app yarn prettier --check $(git diff --name-only HEAD origin/main | egrep -i "[a-z]\.(json|js|tsx)$")'
alias prettier-write='docker exec -it pcr-mobile-app yarn prettier --write $(git diff --name-only HEAD origin/main | egrep -i "[a-z]\.(json|js|tsx)$")'
