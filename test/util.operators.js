$(document).ready(function() {

  module("underscore.util.operators");

  test("add", function() {
    equal(_.add(1, 1), 2, '1 + 1 = 2');
    equal(_.add(3, 5), 8, '3 + 5 = 8');
    equal(_.add(1, 2, 3, 4), 10, 'adds multiple operands');
    equal(_.add([1, 2, 3, 4]), 10, 'adds multiple operands, when specified in an array');
  });

  test("sub", function() {
    equal(_.sub(1, 1), 0, '1 - 1 = 0');
    equal(_.sub(5, 3), 2, '5 - 3 = 2');
    equal(_.sub(10, 9, 8, 7), -14, 'subtracts multiple operands');
    equal(_.sub([10, 9, 8, 7]), -14, 'subtracts multiple operands, when specified in an array');
  });

  test("mul", function() {
    equal(_.mul(1, 1), 1, '1 * 1 = 1');
    equal(_.mul(5, 3), 15, '5 * 3 = 15');
    equal(_.mul(1, 2, 3, 4), 24, 'multiplies multiple operands');
    equal(_.mul([1, 2, 3, 4]), 24, 'multiplies multiple operands, when specified in an array');
  });

  test("div", function() {
    equal(_.div(1, 1), 1, '1 / 1 = 1');
    equal(_.div(15, 3), 5, '15 / 3 = 5');
    equal(_.div(15, 0), Infinity, '15 / 0 = Infinity');
    equal(_.div(24, 2, 2, 2), 3, 'divides multiple operands');
    equal(_.div([24, 2, 2, 2]), 3, 'divides multiple operands, when specified in an array');
  });

  test("mod", function() {
    equal(_.mod(3, 2), 1, '3 / 2 = 1');
    equal(_.mod(15, 3), 0, '15 / 3 = 0');
  });

  test("inc", function() {
    equal(_.inc(1), 2, '++1 = 2');
    equal(_.inc(15), 16, '++15 = 16');
  });

  test("dec", function() {
    equal(_.dec(2), 1, '--2 = 1');
    equal(_.dec(15), 14, '--15 = 15');
  });

  test("neg", function() {
    equal(_.neg(2), -2, 'opposite of 2');
    equal(_.neg(-2), 2, 'opposite of -2');
    equal(_.neg(true), -1, 'opposite of true');
  });

  test("eq", function() {
    equal(_.eq(1, 1), true, '1 == 1');
    equal(_.eq(1, true), true, '1 == true');
    equal(_.eq(1, false), false, '1 != false');
    equal(_.eq(1, '1'), true, '1 == "1"');
    equal(_.eq(1, 'one'), false, '1 != "one"');
    equal(_.eq(0, 0), true, '0 == 0');
    equal(_.eq(0, false), true, '0 == false');
    equal(_.eq(0, '0'), true, '0 == "0"');
    equal(_.eq({}, {}), false, '{} == {}');
    equal(false, false, 'failing placeholder');
    equal(_.eq(0, 0, 1), false, 'compares a list of arguments');
    equal(_.eq([0, 0, 1]), false, 'compares a list of arguments, when specified as an array');
  });
  test("seq", function() {
    equal(_.seq(1, 1), true, '1 === 1');
    equal(_.seq(1, '1'), false, '1 !== "1"');
    equal(_.seq(0, 0, 1), false, 'compares a list of arguments');
    equal(_.seq([0, 0, 1]), false, 'compares a list of arguments, when specified as an array');
  });
  test("neq", function() {
    equal(_.neq('a', 'b'), true, '"a" != "b"');
    equal(_.neq(1, '1'), false, '1 == "1"');
    equal(_.neq(0, 0, 1), true, 'compares a list of arguments');
    equal(_.neq([0, 0, 1]), true, 'compares a list of arguments, when specified as an array');
  });
  test("sneq", function() {
    equal(_.sneq('a', 'b'), true, '"a" !== "b"');
    equal(_.sneq(1, '1'), true, '1 !== "1"');
    equal(_.sneq(0, 0, 1), true, 'compares a list of arguments');
    equal(_.sneq([0, 0, 1]), true, 'compares a list of arguments, when specified as an array');
  });
  test("not", function() {
    equal(_.not(true), false, 'converts true to false');
    equal(_.not(false), true, 'converts false to true');
    equal(_.not('truthy'), false, 'converts truthy values to false');
    equal(_.not(null), true, 'converts falsy values to true');
  });
  test("gt", function() {
    equal(_.gt(3, 2), true, '3 > 2');
    equal(_.gt(1, 3), false, '1 > 3');
    equal(_.gt(1, 2, 1), false, 'compares a list of arguments');
    equal(_.gt([1, 2, 1]), false, 'compares a list of arguments, when specified as an array');
  });
  test("lt", function() {
    equal(_.lt(3, 2), false, '3 < 2');
    equal(_.lt(1, 3), true, '1 < 3');
    equal(_.lt(1, 2, 1), false, 'compares a list of arguments');
    equal(_.lt([1, 2, 1]), false, 'compares a list of arguments, when specified as an array');
  });
  test("gte", function() {
    equal(_.gte(3, 2), true, '3 >= 2');
    equal(_.gte(1, 3), false, '1 >= 3');
    equal(_.gte(3, 3), true, '3 >= 3');
    equal(_.gte(2, 3, 1), false, 'compares a list of arguments');
    equal(_.gte([2, 3, 1]), false, 'compares a list of arguments, when specified as an array');
  });
  test("lte", function() {
    equal(_.lte(3, 2), false, '3 <= 2');
    equal(_.lte(1, 3), true, '1 <= 3');
    equal(_.lte(3, 3), true, '3 <= 3');
    equal(_.lte(2, 2, 1), false, 'compares a list of arguments');
    equal(_.lte([2, 2, 1]), false, 'compares a list of arguments, when specified as an array');
  });
  test("bitwiseAnd", function() {
    equal(_.bitwiseAnd(1, 1), 1, '1 & 1');
    equal(_.bitwiseAnd(1, 0), 0, '1 & 0');
    equal(_.bitwiseAnd(1, 1, 0), 0, 'operates on multiple arguments');
    equal(_.bitwiseAnd([1, 1, 0]), 0, 'operates on multiple arguments, when specified as an array');
  });
  test("bitwiseOr", function() {
    equal(_.bitwiseOr(1, 1), 1, '1 | 1');
    equal(_.bitwiseOr(1, 0), 1, '1 | 0');
    equal(_.bitwiseOr(1, 1, 2), 3, 'operates on multiple arguments');
    equal(_.bitwiseOr([1, 1, 2]), 3, 'operates on multiple arguments, when specified as an array');
  });
  test("bitwiseXor", function() {
    equal(_.bitwiseXor(1, 1), 0, '1 ^ 1');
    equal(_.bitwiseXor(1, 2), 3, '1 ^ 2');
    equal(_.bitwiseXor(1, 2, 3), 0, 'operates on multiple arguments');
    equal(_.bitwiseXor([1, 2, 3]), 0, 'operates on multiple arguments, when specified as an array');
  });
  test("bitwiseNot", function() {
    equal(_.bitwiseNot(1), -2, '~1');
    equal(_.bitwiseNot(2), -3, '~2');
  });
  test("bitwiseLeft", function() {
    equal(_.bitwiseLeft(1, 1), 2, '1 << 1');
    equal(_.bitwiseLeft(1, 0), 1, '1 << 0');
    equal(_.bitwiseLeft(1, 1, 1), 4, 'operates on multiple arguments');
    equal(_.bitwiseLeft([1, 1, 1]), 4, 'operates on multiple arguments, when specified as an array');
  });
  test("bitwiseRight", function() {
    equal(_.bitwiseRight(1, 1), 0, '1 >> 1');
    equal(_.bitwiseRight(2, 1), 1, '2 >> 1');
    equal(_.bitwiseRight(3, 1, 1), 0, 'operates on multiple arguments');
    equal(_.bitwiseRight([3, 1, 1]), 0, 'operates on multiple arguments, when specified as an array');
  });
  test("bitwiseZ", function() {
    equal(_.bitwiseZ(-1, 1), 2147483647, '-1 >>> 1');
    equal(_.bitwiseZ(-1, 1, 1), 1073741823, 'operates on multiple arguments');
    equal(_.bitwiseZ([-1, 1, 1]), 1073741823, 'operates on multiple arguments, when specified as an array');
  });

});
