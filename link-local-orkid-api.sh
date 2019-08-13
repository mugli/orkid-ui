#!/bin/bash

set -e;

cd ../orkid-api
npm link # create a global symlink to the local "orkid-api" project
cd ../orkid-ui
npm link orkid-api # create a symlink locally to global orkid-api symlink