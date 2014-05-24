
var parse = require('css-parse');

module.exports.list = function (css) {
  var ast = parse(css);
  var stackingRuleName = [];

  ast.stylesheet.rules.forEach(function visit (rule) {
    if (rule.rules) rule.rules.forEach(visit);

    if (hasStackingContext(rule)) stackingRuleName.push(hasStackingContext(rule).toString());
  });

  return stackingRuleName;
};

module.exports.level = function (css) {
  var ast = parse(css);
  var z_val = [];

  ast.stylesheet.rules.forEach(function visit (rule) {
    if (rule.rules) rule.rules.forEach(visit);

    rule.declarations.forEach(function (declaration) {
      if (declaration.property === 'z-index') z_val.push(+declaration.value);
    });
  });

  return z_val;
};

function has (rule, property) {
  rule.declarations.forEach(function (declaration) {
    if (declaration.property === property) return true;
    else return false;
  });
}

function hasStackingContext (rule) {
  var z_val, position_val;
  rule.declarations.forEach(function (declaration) {
    if (declaration.property === 'z-index') z_val = declaration.value;
    if (declaration.property === 'position') position_val = declaration.value;
  });

  if ((position_val === 'fixed' || position_val === 'sticky')
  || ((position_val === 'relative' || position_val === 'absolute') && z_val !== 'auto' )) {
    return rule.selectors;
  }
  else return null;
}
