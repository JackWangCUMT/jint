/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-339-4.js
 * @description Object.defineProperty - Updating indexed data property 'P' with attributes [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: false to an accessor property does not succeed, 'O' is an Arguments object (8.12.9 - step 9.a)
 */


function testcase() {
        var obj = (function () {
            return arguments;
        }());

        Object.defineProperty(obj, "0", {
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        });
        var propertyDefineCorrect = obj.hasOwnProperty("0");
        var desc1 = Object.getOwnPropertyDescriptor(obj, "0");

        function getFunc() {
            return 20;
        }
        try {
            Object.defineProperty(obj, "0", {
                get: getFunc
            });
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "0");
            return propertyDefineCorrect && desc1.value === 2010 && obj[0] === 2010 &&
                typeof desc2.get === "undefined" && e instanceof TypeError;
        }
    }
runTestCase(testcase);
