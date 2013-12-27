(function(global) {
    'use strict';
    function mod(x, y) {
        var res = x % y;
        if (res < 0) {
            return res + y;
        }
        return res;
    }

    function powMod(x, y, n) {
        if (y === 1) {
            return mod(x, n);
        }
        if ((y % 2) === 0) {
            var tmp = powMod(x, y / 2, n);
            return mod(tmp * tmp, n);
        } else {
            var tmp = powMod(x, y - 1, n);
            return mod(tmp * x, n);
        }
    }

    function isPrim(x) {
        var threshold = Math.sqrt(x),
            currentTest;
        if (x === 2) return true;
        if (x < 2) return false;
        for (currentTest = 2; currentTest <= threshold; currentTest++) {
            if ((x % currentTest) === 0) {
                return false;
            }
        }
        return true;
    }

    function ggt(a, b) {
        if (!_.isNumber(a) || _.isNaN(a) ||
                !_.isNumber(b) || _.isNaN(b)) {
            return Number.NaN;
        }
        if ((a % b) == 0) {
            return b;
        }
        return ggt(b, a % b);
    }

    function advancedGgt(a, b, prePair, prePrePair) {
        if (!_.isNumber(a) || _.isNaN(a) ||
                !_.isNumber(b) || _.isNaN(b)) {
            return Number.NaN;
        }
        if (prePair === undefined) {
            prePair = {alpha: 0, beta: 1};
        }
        if (prePrePair === undefined) {
            prePrePair = {alpha: 1, beta: 0};
        }
        if ((a % b) == 0) {
            return {ggt: b,
                alpha: prePair.alpha,
                beta: prePair.beta
            };
        }
        var times = Math.floor(a / b),
            newPrePair = {
            alpha: prePair.alpha * -times + prePrePair.alpha,
            beta: prePair.beta * -times + prePrePair.beta
        };
        return advancedGgt(b, a % b, newPrePair, prePair);
    }

    Math.mod = mod;
    Math.powMod = powMod;
    Math.isPrim = isPrim;
    Math.ggt = ggt;
    Math.advancedGgt = advancedGgt;
})(window);
