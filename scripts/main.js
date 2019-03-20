"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function (g) {
  var U = {
    keyBy: function keyBy(a, f) {
      return a.reduce(function (prev, el) {
        var _f = f(el),
            _f2 = _slicedToArray(_f, 2),
            p = _f2[0],
            v = _f2[1];

        prev[p] = v;
        return prev;
      }, {});
    }
  };

  var mmul = function mmul(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  };

  var pmul = function pmul(p, m) {
    return [m[0] * p[0] + m[2] * p[1] + m[4], m[1] * p[0] + m[3] * p[1] + m[5]];
  };

  var pmulX = function pmulX(x, m) {
    return pmul([x, 0], m)[0];
  };

  var pmulY = function pmulY(y, m) {
    return pmul([0, y], m)[1];
  };

  var a2m = function a2m(m) {
    return 'matrix(' + m[0] + ',' + m[1] + ',' + m[2] + ',' + m[3] + ',' + m[4] + ',' + m[5] + ')';
  };

  var q = function q(cb) {
    return setTimeout(cb, 0);
  };

  var getNavigatorLanguage = function getNavigatorLanguage() {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
  };

  var ElementBuilder =
  /*#__PURE__*/
  function () {
    function ElementBuilder(el) {
      _classCallCheck(this, ElementBuilder);

      this._el = el;
    }

    _createClass(ElementBuilder, [{
      key: "attr",
      value: function attr(name, value) {
        this._el.setAttribute(name, value);

        return this;
      }
    }, {
      key: "textContent",
      value: function textContent(value) {
        this._el.textContent = value;
        return this;
      }
    }, {
      key: "innerText",
      value: function innerText(value) {
        this._el.innerText = value;
        return this;
      }
    }, {
      key: "style",
      value: function style(name, value) {
        this._el.style[name] = value;
        return this;
      }
    }, {
      key: "addClass",
      value: function addClass(c) {
        this._el.classList.add(c);

        return this;
      }
    }, {
      key: "removeClass",
      value: function removeClass(c) {
        this._el.classList.remove(c);

        return this;
      }
    }, {
      key: "appendTo",
      value: function appendTo(parent) {
        if (parent.el) parent.el.appendChild(this._el);else parent.appendChild(this._el);
        return this;
      }
    }, {
      key: "el",
      get: function get() {
        return this._el;
      }
    }]);

    return ElementBuilder;
  }();

  var createSVG = function createSVG(type) {
    return new ElementBuilder(document.createElementNS('http://www.w3.org/2000/svg', type));
  };

  var createEl = function createEl(type) {
    return new ElementBuilder(document.createElement(type));
  };

  var xStep = 20;

  function createChart(options) {
    var el = options.el,
        chartData = options.chartData;
    var sizes = options.sizes;
    sizes = sizes || {
      width: 500,
      height: 250
    };
    var colors = chartData.colors,
        columns = chartData.columns,
        names = chartData.names,
        types = chartData.types;
    var chartColumnsIds = Object.keys(types).filter(function (t) {
      return types[t] !== 'x';
    });
    var columnsMap = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var c = _step.value;
        columnsMap[c[0]] = c;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var xColumnId = Object.keys(types).find(function (t) {
      return types[t] === 'x';
    });
    var xColumn = columnsMap[xColumnId];
    var state = {
      disabled: U.keyBy(chartColumnsIds, function (id) {
        return [id, false];
      }),
      visibleRange: {
        from: 0,
        to: 100
      },
      aspectRatio: 2 / 1,
      elements: {
        linesElements: {}
      },
      transformY: function transformY(y) {
        return y;
      }
    };

    var getBounds = function getBounds(s) {
      // const ty = !!s;
      s = s || {
        disabled: {},
        visibleRange: {
          from: 0,
          to: 100
        }
      };
      var visibleLines = chartColumnsIds.filter(function (lid) {
        return !s.disabled[lid];
      }).map(function (lid) {
        return columnsMap[lid];
      });
      var visibleIndexRange = {
        from: 1 + (xColumn.length - 1) * s.visibleRange.from / 100,
        to: (xColumn.length - 1) * s.visibleRange.to / 100
      };
      var yMax = Math.max.apply(Math, _toConsumableArray(visibleLines.map(function (l) {
        return Math.max.apply(Math, _toConsumableArray(l.slice(visibleIndexRange.from, visibleIndexRange.to + 1)));
      }))); //let yMin = Math.min(...visibleLines.map(l => Math.min(...l.slice(visibleIndexRange.from, visibleIndexRange.to + 1))));

      var xSize = (xColumn.length - 2) * xStep;
      var xMin = xSize * s.visibleRange.from / 100;
      var xMax = xSize * s.visibleRange.to / 100; // if(ty) {
      //     const yMaxOld = yMax;
      //     yMax = translateY(yMin);
      //     yMin = translateY(yMaxOld);
      // }

      return [xMin, xMax, 0
      /*yMin*/
      , yMax];
    };

    var init = function init() {
      var fullBounds = getBounds(null);
      state.fullBounds = fullBounds;

      var _fullBounds = _slicedToArray(fullBounds, 4),
          yMin = _fullBounds[2],
          yMax = _fullBounds[3];

      state.sizes = sizes;
      var xAxisHeight = 20;
      var svgWidth = sizes.width;
      var svgHeight = sizes.height + xAxisHeight;
      var viewBox = [0, 0, svgWidth, svgHeight];

      state.transformY = function (y) {
        return -(y - yMin) + yMax;
      }
      /* -yMin  */
      ; // see method vertMatrix
      //TODO use same matrices for chart view port and axes!


      var svgEl = createSVG('svg').style('width', svgWidth).style('height', svgHeight).attr('viewBox', "".concat(viewBox[0], " ").concat(viewBox[1], " ").concat(viewBox[2], " ").concat(viewBox[3])).attr('zoom', 1);
      var bounds = fullBounds;
      var vm = vMatrix(bounds);
      var hm = hMatrix(bounds); // Y axis

      var yAxisG = createSVG('g').addClass('animate-transform').style('vector-effect', 'non-scaling-stroke').appendTo(svgEl);
      state.elements.hGridLinesG = yAxisG;
      var yAxis = new YAxis({
        containerEl: yAxisG.el
      });
      yAxis.updateRange(fullBounds, state, vm);
      state.yAxis = yAxis; //X axis

      var xAxisG = createSVG('g').addClass('animate-transform').appendTo(svgEl).attr('transform', 'translate(0, ' + (state.sizes.height + xAxisHeight * 0.8) + ')');
      state.elements.xAxisG = xAxisG;
      var xAxis = new XAxis({
        containerEl: xAxisG.el,
        xColumn: xColumn
      });
      xAxis.updateRange(fullBounds, state, hm);
      state.xAxis = xAxis;
      var columnIds = Object.keys(types);
      var lineElements = {};
      var linesGC = createSVG('g').addClass('animate-transform').attr('transform', a2m(vm)).appendTo(svgEl);
      var linesG = createSVG('g').attr('transform', a2m(hm)).appendTo(linesGC);

      for (var columnIndex = 0; columnIndex < columnIds.length; columnIndex++) {
        var lId = columnIds[columnIndex],
            t = types[lId],
            color = colors[lId],
            c = columnsMap[lId];

        if (t === 'line') {
          var d = '';

          for (var pIdx = 1; pIdx < c.length; pIdx++) {
            d += pIdx == 1 ? 'M' : 'L';
            d += (pIdx - 1) * xStep;
            d += ' ';
            d += state.transformY(c[pIdx]);
          }

          var p = createSVG('path').attr('d', d).style('stroke', color).style('stroke-width', '2px').style('vector-effect', 'non-scaling-stroke').style('fill', 'none').addClass('animate-opacity').appendTo(linesG);
          lineElements[lId] = p;
        }
      }

      state.elements.linesElements = lineElements;
      state.elements.linesGC = linesGC;
      state.elements.linesG = linesG;
      svgEl.appendTo(el); //const sliderEl = document.createElement('div');
      //sliderEl.classList.add('chart-slider');

      var sliderEl = createEl('input').attr('type', 'range').attr('min', '0').attr('max', '100').attr('step', '0.1').attr('value', '100').style('width', '100%').el;

      var onSliderChange = function onSliderChange(e) {
        var val = Math.max(e.target.value, 3); // 0 <= val <= 100

        setRange({
          from: 0,
          to: val
        });
      };

      sliderEl.onchange = onSliderChange;
      sliderEl.oninput = onSliderChange;
      el.appendChild(sliderEl);
      var toggleGroupEl = createEl('div').appendTo(el);
      var tg = new ToggleGroup({
        containerEl: toggleGroupEl.el,
        names: names
      });

      tg.onToogle = function (lId) {
        return toggleLine(lId);
      };
    };

    var vMatrix = function vMatrix(bounds) {
      var fbyMax = state.fullBounds[3];
      var yMax = bounds[3];
      var yScale = state.sizes.height / yMax;
      var m1 = [1, 0, 0, 1, 0, yMax * yScale],
          m2 = [1, 0, 0, yScale, 0, 0],
          m3 = [1, 0, 0, 1, 0, -fbyMax];
      var vt = mmul(m1, mmul(m2, m3));
      return vt;
    };

    var hMatrix = function hMatrix(bounds) {
      var _bounds = _slicedToArray(bounds, 2),
          xMin = _bounds[0],
          xMax = _bounds[1];

      var xScale = state.sizes.width / xMax;
      var dx = -xMin
      /*, dy = 0 /*-yMin*/
      ;
      var m = mmul([1, 0, 0, 1, dx, 0], [xScale, 0, 0, 1, 0, 0]);
      return m;
    };

    var toggleLine = function toggleLine(lId) {
      state.disabled[lId] = !state.disabled[lId];
      var lEl = state.elements.linesElements[lId];

      if (state.disabled[lId]) {
        lEl.addClass('disbled-line');
      } else {
        lEl.removeClass('disbled-line');
      }

      setRange(state.visibleRange, true);
    }; // const beautyfyBounds = (bounds) => {
    //     // find nearest netural number divided to six OR 10, 50, 100
    //     return bounds;
    // }


    var setRange = function setRange(range, force) {
      range = range || {
        from: 0,
        to: 100
      };
      if (state.visibleRange.from == range.from && state.visibleRange.to == range.to && !force) return;
      state.visibleRange = range;
      var newBounds = getBounds(state);
      var vm = vMatrix(newBounds);
      var hm = hMatrix(newBounds);
      state.elements.linesGC.attr('transform', a2m(vm));
      state.elements.linesG.attr('transform', a2m(hm));
      state.yAxis.updateRange(newBounds, state, vm);
      state.xAxis.updateRange(newBounds, state, hm);
    };

    init();
  }

  var XAxis =
  /*#__PURE__*/
  function () {
    function XAxis(options) {
      _classCallCheck(this, XAxis);

      this.el = new ElementBuilder(options.containerEl);
      this.xColumn = options.xColumn;
      this.elementsCache = {};
      this.currentRangeKey = null;
      this.currentBounds = null;
      this.textElements = [];
    }

    _createClass(XAxis, [{
      key: "init",
      value: function init(hm) {
        var _this = this;

        var xPoints = this.xColumn.slice(1);
        this.textElements = new Array(xPoints.length);
        var userLang = getNavigatorLanguage(); //const dateLabel = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        var dateLabel = {
          month: 'short',
          day: 'numeric'
        };

        this.getOrCreateTextEl = function (i) {
          if (_this.textElements[i]) return _this.textElements[i];
          var labelText = new Date(xPoints[i]).toLocaleDateString(userLang, dateLabel);
          var x = i * xStep;
          var tEl = createSVG('text').attr('x', '0').attr('y', '0').attr('transform', a2m([1, 0, 0, 1, pmulX(x, hm), 0])).textContent('' + labelText).addClass('chart-x-line-text').addClass('animate-opacity').appendTo(_this.el);
          var v = {
            el: tEl,
            x: x
          };
          _this.textElements[i] = v;
          return v;
        };
      }
    }, {
      key: "finPowerTwo",
      value: function finPowerTwo(n) {
        var v = 1;
        if (n <= v) return 1;

        for (var i = 0; i < 32; i++) {
          if (n <= (v = Math.pow(2, i))) return v;
        }

        return v;
      }
    }, {
      key: "updateRange",
      value: function updateRange(bounds, state, hm) {
        if (this.textElements.length === 0) {
          this.init(hm);
        } // todo check same xscale!
        // eval visible labels


        var maxLabelInViewPort = Math.trunc(state.sizes.width / this.getLabelWidth()); // todo some coef for padding

        var w = bounds[1] - bounds[0];
        var actualLabelInViewPort = w / xStep;
        var k = actualLabelInViewPort / maxLabelInViewPort;
        var visibleK = this.finPowerTwo(k);

        for (var i = 0; i < this.textElements.length; i++) {
          var visible = i % visibleK == 0
          /*&& i !== 0 && i !== this.textElements.length - 1*/
          ;
          var isLabelInsideBouds = bounds[0] <= i * xStep && i * xStep <= bounds[1];
          var elHolder = visible && isLabelInsideBouds ? this.getOrCreateTextEl(i) : this.textElements[i];

          if (elHolder) {
            elHolder.el.attr('opacity', visible ? 1 : 0);
            elHolder.el.attr('transform', a2m([1, 0, 0, 1, pmulX(elHolder.x, hm), 0]));
          }
        }

        this.currentHM = hm;
      }
    }, {
      key: "getLabelWidth",
      value: function getLabelWidth() {
        // todo create tmp label and get getBoundClientRect
        return 5.5 * 10;
      }
    }]);

    return XAxis;
  }();

  var YAxis =
  /*#__PURE__*/
  function () {
    function YAxis(options) {
      _classCallCheck(this, YAxis);

      this.el = new ElementBuilder(options.containerEl);
      this.elementsCache = {};
      this.currentRangeKey = null;
      this.currentBounds = null;
    }

    _createClass(YAxis, [{
      key: "updateRange",
      value: function updateRange(bounds, state, vm) {
        var _this2 = this;

        this.sizes = state.sizes;
        this.transformY = state.transformY;

        var _bounds2 = _slicedToArray(bounds, 4),
            yMin = _bounds2[2],
            yMax = _bounds2[3];

        var rKey = this.rangeToKey(yMin, yMax);
        if (this.currentRangeKey === rKey) return;
        var lc = 5;

        if (!this.currentRangeKey) {
          var newLines = this.calcYAxis(bounds, lc, vm);
          var gridElements = this.createYGridLines(newLines, function () {});
          this.elementsCache[rKey] = gridElements;
        } else {
          var prevBounds = this.currentBounds;
          {
            // move and hide lines
            var _gridElements = this.elementsCache[this.currentRangeKey]; //const newLines = this.calcYAxis(bounds, lc);

            var _newLines = this.calcYAxis(prevBounds, lc, vm);

            q(function () {
              _this2.updateYGridLines(_gridElements, _newLines, function (el) {
                return el.style('opacity', '0');
              }); //this.updateYGridLines(gridElements, newLines, () => {});

            }, 0);
          }
          {
            var _newLines2 = this.calcYAxis(bounds, lc, this.currentVM); // TODO get elements from cache!


            var _gridElements2 = this.elementsCache[this.rKey] || this.createYGridLines(_newLines2, function (el) {
              return el.style('opacity', '0');
            });

            var movedLines = this.calcYAxis(bounds, lc, vm);
            this.elementsCache[rKey] = _gridElements2;
            q(function () {
              _this2.updateYGridLines(_gridElements2, movedLines, function (el) {
                return el.style('opacity', '1');
              });
            }, 0);
          }
        }

        this.currentRangeKey = rKey;
        this.currentBounds = bounds;
        this.currentVM = vm;
      }
    }, {
      key: "rangeToKey",
      value: function rangeToKey(yMin, yMax) {
        return yMin + ':' + yMax;
      }
    }, {
      key: "prettyY",
      value: function prettyY(y) {
        return Math.round(y);
      }
    }, {
      key: "calcYAxis",
      value: function calcYAxis(bounds, lc, vm) {
        var _bounds3 = _slicedToArray(bounds, 4),
            yMin = _bounds3[2],
            yMax = _bounds3[3];

        var lines = [];

        for (var i = 0; i <= lc; i++) {
          var yPoint = (yMax - yMin) / (lc + 1) * i;
          yPoint = this.prettyY(yPoint);
          var y = pmulY(this.transformY(yPoint), vm);
          lines.push({
            y: y,
            yGraph: yPoint,
            text: yPoint
          });
        }

        return lines;
      }
    }, {
      key: "createYGridLines",
      value: function createYGridLines(lines, cb) {
        var hGridLines = [];
        var hGridTexts = [];
        var lc = lines.length;

        for (var i = 0; i < lc; i++) {
          var y = lines[i].y;
          var lEl = createSVG('path').style('fill', 'none').style('vector-effect', 'non-scaling-stroke').attr('d', 'M0 0 L' + this.sizes.width + ' 0').attr('transform', 'matrix(1,0,0,1,0,' + y + ')').addClass('chart-y-line').addClass('animate-transform-opacity').appendTo(this.el);
          hGridLines.push(lEl);
          cb(lEl);
          var tEl = createSVG('text').attr('x', '0').attr('y', '0').attr('transform', 'matrix(1,0,0,1,0,' + (y - 5) + ')').attr('font-family', 'sans-serif').attr('font-size', '10').attr('fill', 'gray').textContent('' + lines[i].text).addClass('chart-y-line-text').addClass('animate-transform-opacity').appendTo(this.el);
          hGridTexts.push(tEl);
          cb(tEl);
        }

        return {
          hGridLines: hGridLines,
          hGridTexts: hGridTexts
        };
      }
    }, {
      key: "updateYGridLines",
      value: function updateYGridLines(gridElements, lines, cb) {
        var hGridLines = gridElements.hGridLines,
            hGridTexts = gridElements.hGridTexts;
        var lc = lines.length;

        for (var i = 0; i < lc; i++) {
          var y = lines[i].y;
          hGridLines[i].attr('d', 'M0 0 L' + this.sizes.width + ' 0').attr('transform', 'matrix(1,0,0,1,0,' + y + ')');
          cb(hGridLines[i]);
          hGridTexts[i] //.textContent('' + lines[i].text)
          .attr('transform', 'matrix(1,0,0,1,0,' + (y - 5) + ')');
          cb(hGridTexts[i]);
        }
      }
    }]);

    return YAxis;
  }();

  var ToggleGroup =
  /*#__PURE__*/
  function () {
    function ToggleGroup(options) {
      _classCallCheck(this, ToggleGroup);

      var names = options.names;
      this.names = names;
      this.el = new ElementBuilder(options.containerEl);

      this.onToogle = function () {};

      this.init();
    }

    _createClass(ToggleGroup, [{
      key: "init",
      value: function init() {
        var _this3 = this;

        this.el.addClass('chart-toogle-buttons');

        var _arr2 = Object.keys(this.names);

        var _loop = function _loop() {
          var k = _arr2[_i2];
          var toggled = true;
          var n = _this3.names[k];
          var bEl = createEl('button').addClass('button').addClass('toggled').innerText(n).appendTo(_this3.el);

          bEl.el.onclick = function () {
            toggled = !toggled;

            if (toggled) {
              bEl.addClass('toggled');
            } else {
              bEl.removeClass('toggled');
            }

            _this3.onToogle(k);
          };
        };

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          _loop();
        }
      }
    }]);

    return ToggleGroup;
  }();

  g.createChart = createChart;
})(window);
"use strict";

/* eslint-disable */
console.log('Start ....');

function onDocumentReady(cb) {
  if (document.readyState !== 'loading') {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }
}

onDocumentReady(function () {
  fetch('scripts/data.json').then(function (r) {
    return r.json();
  }).then(function (data) {
    for (var i = 0; i < data.length; i++) {
      window.createChart({
        el: document.getElementById('chart' + i),
        chartData: data[i]
      });
    }
  });
});