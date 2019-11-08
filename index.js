#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
require('shelljs/global');
let currentPath=process.cwd();
let vueEslintConfigPath=process.env.PWD;
//console.log(process,vueEslintConfigPath);
console.log(currentPath)
console.log(__dirname)

let copyFiles=['.editorconfig','.eslintignore','.eslintrc.js'];


copyFiles.map(el=>{

  let sPath=path.join(__dirname,el);
  let cPath=path.join(currentPath,el);
  
  fs.copyFileSync(sPath,cPath);
  console.log('copying file ',sPath,cPath)
  
})

console.log('copy file end')

//var version = exec('node --version', {silent:true}).output;

console.log('npm i @vue/eslint-config-standard --save-dev');
// Async call to exec()
exec('npm i @vue/eslint-config-standard --save-dev', function(status, output) {
  console.log('Exit status:', status);
  console.log('Program output:', output);
});