#!/usr/bin/env sh

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add gitee git@gitee.com:XG_GX/big-screen-web.git &&
git push -f gitee master &&
cd -;
