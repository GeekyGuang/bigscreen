#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:TravisWongX/bigscreen.git &&
git push -uf origin master:gh-pages &&
cd -;
