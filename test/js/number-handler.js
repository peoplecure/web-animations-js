suite('number-handler', function() {
  test('parse numbers', function() {
    var tests = {
      '0': 0,
      '1234': 1234,
      '-40': -40,
      '+40': 40,
      '   -40   ': -40,
      '4.0': 4,
      '0.4': 0.4,
      '.1234': 0.1234,
      '12.34': 12.34,
      '+.1234': 0.1234,
      '+12.34': 12.34,
      '-.1234': -0.1234,
      '-12.34': -12.34,
    };
    for (var string in tests) {
      assert.equal(minifill.parseNumber(string), tests[string], 'Parsing "' + string + '"');
    }
  });
  test('invalid numbers fail to parse', function() {
    assert.isUndefined(minifill.parseNumber(''));
    assert.isUndefined(minifill.parseNumber('nine'));
    assert.isUndefined(minifill.parseNumber('1 2'));
    assert.isUndefined(minifill.parseNumber('+-0'));
    assert.isUndefined(minifill.parseNumber('50px'));
    assert.isUndefined(minifill.parseNumber('1.2.3'));
  });
  test('opacity clamping', function() {
    var interpolation = minifill.propertyInterpolation('opacity', '-1', '3');
    assert.equal(interpolation(0), '0');
    assert.equal(interpolation(0.25), '0');
    assert.equal(interpolation(0.375), '0.500');
    assert.equal(interpolation(0.5), '1');
    assert.equal(interpolation(0.75), '1');
    assert.equal(interpolation(1), '1');
  });
});
