// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "toLocaleTimeString" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.7/S15.9.5.7_A1_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.propertyIsEnumerable('toLocaleTimeString')) {
  $ERROR('#1: The Date.prototype.toLocaleTimeString property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "toLocaleTimeString") {
    $ERROR('#2: The Date.prototype.toLocaleTimeString has the attribute DontEnum');
  }
}


