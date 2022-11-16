#!/bin/bash
nativefier 'https://vk.com/im' --name 'VK Trepadla' --inject ./trepadla.js --min-width 1280 --internal-urls ".*vk\.(com|ru)\/im.*" --strict-internal-urls --zoom 1.1 ./build 