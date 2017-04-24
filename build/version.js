var fs = require('fs');
var version = require('../package.json').version;

function updateVersion(file, pattern) {
	var content = fs.readFileSync(file, 'utf8');
	var update = content.replace(pattern, '$1' + version + '$3');
	fs.writeFileSync(file, update, 'utf8');
}

//
// Javascript
//
// fs.writeFileSync('javascript/src/version.json', JSON.stringify(version), 'utf8');
updateVersion('javascript/src/version.js', /(export default ")(.*)(")/);

//
// Python
//
updateVersion('py/setup.py', /(version=')(.*)(')/);
updateVersion('py/setup.py', /(\/tarball\/)(.*)(')/);

//
// Dotnet
//
updateVersion('dotnet/Glance.Dom/Properties/AssemblyInfo.cs', /(AssemblyVersion\(")(.*)("\))/);
updateVersion('dotnet/Glance.Dom.Specs/Properties/AssemblyInfo.cs', /(AssemblyVersion\(")(.*)("\))/);
