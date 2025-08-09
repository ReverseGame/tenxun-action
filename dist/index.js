'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			var isInstance = false;
      try {
        isInstance = this instanceof a;
      } catch {}
			if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var src = {};

const tencent_cloud = require('@reverse_game/tencent_cloud');
const core = require('@actions/core');
async function run() {
  let action = core.getInput('action');
  if (action === 'create_image') {
    return await tencent_cloud.create_image(
      core.getInput('secret_id'),
      core.getInput('secret_key'),
      core.getInput('region'),
      core.getInput('instance_name_prefix')
    )
  } else if (action === 'get_ips') {
    return await tencent_cloud.get_ips(
      core.getInput('secret_id'),
      core.getInput('secret_key'),
      core.getInput('region'),
      core.getInput('instance_name_prefix')
    )
  } else if (action === 'create_image_sync_as') {
    return await tencent_cloud.create_image_sync_as(
      core.getInput('secret_id'),
      core.getInput('secret_key'),
      core.getInput('region'),
      core.getInput('instance_name_prefix'),
      core.getInput('launch_configuration_id')
    )
  }
}

var main = /*#__PURE__*/Object.freeze({
	__proto__: null,
	run: run
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(main);

/**
 * The entrypoint for the action. This file simply imports and runs the action's
 * main logic.
 */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	const { run } = require$$0;

	/* istanbul ignore next */
	run();
	return src;
}

var srcExports = requireSrc();
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

module.exports = index;
//# sourceMappingURL=index.js.map
