#!/usr/bin/env sh

# abort on errors
set -e

#build
npm run build

# navigate into the build output directory
# echo

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# git push -f git@github.com:Bubbl33s/hp2-ec3.git main gh:pages
