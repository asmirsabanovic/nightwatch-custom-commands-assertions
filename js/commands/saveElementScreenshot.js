'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _easyimage = require('easyimage');

var _easyimage2 = _interopRequireDefault(_easyimage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Take a screenshot of the requested element
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This command requires ImageMagick installed on the system and node-easyimage installed as a npm module. You can install node-easyimage with:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     npm install --production
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * And imagemagick with:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     #Centos
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     yum install ImageMagick
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     #OSX
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     brew install imagemagick --build-from-source
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     #Ubuntu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     apt-get install ImageMagick
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * h3 Examples:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     browser.saveElementScreenshot(".class", "screenshot-name.jpg");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author maxgalbu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {String} elementSelector - css/xpath selector for the element
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Function} fileName - file path where the screenshot is saved
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SaveElementScreenshotAction = function (_events$EventEmitter) {
	_inherits(SaveElementScreenshotAction, _events$EventEmitter);

	function SaveElementScreenshotAction() {
		_classCallCheck(this, SaveElementScreenshotAction);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveElementScreenshotAction).apply(this, arguments));
	}

	_createClass(SaveElementScreenshotAction, [{
		key: 'command',
		value: function command(elementSelector, fileName) {
			var _this2 = this;

			this.api.getElementSize(elementSelector, function (sizeResult) {
				return _this2.api.getLocation(elementSelector, function (locationResult) {
					return _this2.api.saveScreenshot(fileName, function () {
						return _this2.crop(fileName, sizeResult.value, locationResult.value);
					});
				});
			});

			return this;
		}
	}, {
		key: 'crop',
		value: function crop(fileName, size, location) {
			var _this3 = this;

			_easyimage2.default.crop({
				src: fileName,
				dst: fileName,
				cropwidth: size.width,
				cropheight: size.height,
				x: location.x,
				y: location.y,
				gravity: 'North-West'
			}).then(function (file) {
				return _this3.emit("complete");
			}, function (err) {
				return console.error(err), _this3.emit("complete");
			});
		}
	}]);

	return SaveElementScreenshotAction;
}(_events2.default.EventEmitter);

exports.default = SaveElementScreenshotAction;
module.exports = exports['default'];