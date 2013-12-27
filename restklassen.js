$(function() {
    'use strict';
    var $n, $a, $b,
        $res1, $res2, $res3, $res4, $res5, $res6, $res7,
        $calculate, $primtest;




    /*** Init functions ***/
    function init() {
        getGuiElements();
        $calculate.click(calculationAction);
    }

    function getGuiElements() {
        $n = $('.n');
        $a = $('.a');
        $b = $('.b');
        $res1 = $('.res1');
        $res2 = $('.res2');
        $res3 = $('.res3');
        $res4 = $('.res4');
        $res5 = $('.res5');
        $res6 = $('.res6');
        $res7 = $('.res7');
        $calculate = $('.calculate');
        $primtest = $('.primtest');
    }

    function calculationAction() {
        setPrimtest();
        setRes1();
        setRes2();
        setRes3();
        setRes4();
        setRes5();
        setRes6();
        setRes7();
    }




    /*** Getter of important values ***/
    function getN() { return parseInt($n.val()); }
    function getA() { return parseInt($a.val()); }
    function getB() { return parseInt($b.val()); }




    /*** Value calculations ***/
    function calculatePrimtest() {
        return Math.isPrim(getN());
    }
    function calculateRes1() {
        return Math.mod(getA(), getN());
    }
    function calculateRes2() {
        return Math.mod(getB(), getN());
    }
    function calculateRes3() {
        var n = getN(), a = getA(), b = getB(),
            aModN = Math.mod(a, n),
            bModN = Math.mod(b, n),
            res = Math.mod(aModN + bModN, n);
        return res;
    }
    function calculateRes4() {
        var n = getN(), a = getA(), b = getB(),
            aModN = Math.mod(a, n),
            bModN = Math.mod(b, n),
            res = Math.mod(aModN - bModN, n);
        return res;
    }
    function calculateRes5() {
        var n = getN(), a = getA(), b = getB(),
            aModN = Math.mod(a, n),
            bModN = Math.mod(b, n),
            res = Math.mod(aModN * bModN, n);
        return res;
    }
    function calculateRes6() {
        var n = getN(), a = getA(), b = getB(),
            res = Math.powMod(a, b, n);
        return res;
    }
    function calculateRes7() { // ggt
        return Math.advancedGgt(getA(), getN());
    }


    /*** Set values ***/
    function setPrimtest() { 
        $primtest.text(
            calculatePrimtest()? "is prim": "not prim"); 
    }
    function setRes1() { $res1.text(calculateRes1()); }
    function setRes2() { $res2.text(calculateRes2()); }
    function setRes3() { $res3.text(calculateRes3()); }
    function setRes4() { $res4.text(calculateRes4()); }
    function setRes5() { $res5.text(calculateRes5()); }
    function setRes6() { $res6.text(calculateRes6()); }
    function setRes7() {
        var result = calculateRes7(),
            text = result.ggt + " = " + getA() + "*(" +
                result.alpha + ") + " + getN() + "*(" +
                result.beta + ")";
        $res7.text(text); 
    }


    /*** Start it ***/
    init();
});
