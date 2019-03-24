"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function (g) {
  //console.log = ()=> {};
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

  var mequals = function mequals(m1, m2) {
    return !!m1 && !!m2 && m1[0] === m2[0] && m1[1] === m2[1] && m1[2] === m2[2] && m1[3] === m2[3] && m1[4] === m2[4] && m1[5] === m2[5];
  };

  var minverse = function minverse(m) {
    var d = m[0] * m[3] - m[1] * m[2];
    return {
      0: m[3] / d,
      1: m[1] / -d,
      2: m[2] / -d,
      3: m[0] / d,
      4: (m[3] * m[4] - m[2] * m[5]) / -d,
      5: (m[1] * m[4] - m[0] * m[5]) / d
    };
  };

  var pmul = function pmul(p, m) {
    return [m[0] * p[0] + m[2] * p[1] + m[4], m[1] * p[0] + m[3] * p[1] + m[5]];
  };

  var pmulX = function pmulX(x, m) {
    return m[0] * x + m[4];
  };

  var pmulY = function pmulY(y, m) {
    return m[3] * y + m[5];
  };

  var maxSlice = function maxSlice(a, from, to) {
    return Math.max.apply(Math, _toConsumableArray(a.slice(from, to + 1)));
  };

  var a2m = function a2m(m) {
    return 'matrix(' + m[0] + ',' + m[1] + ',' + m[2] + ',' + m[3] + ',' + m[4] + ',' + m[5] + ')';
  };

  var q = function q(cb) {
    return setTimeout(cb, 0);
  }; // function throttle (cb, duration) {
  //     let wait = false;
  //     return function () {
  //         if (!wait) {
  //             cb.apply(null, arguments);
  //             wait = true;
  //             setTimeout(function () { wait = false; }, duration);
  //         }
  //     }
  // }    


  var getNavigatorLanguage = function getNavigatorLanguage() {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
  }; // const linear = (t) => t;


  var easeInQuad = function easeInQuad(t) {
    return t * t;
  };

  var animationsMap = {}; //let aIdSource = 0;

  var animateSteps = function animateSteps(options) {
    var key = options.key,
        range = options.range,
        duration = options.duration,
        ease = options.ease,
        step = options.step,
        onCancel = options.onCancel,
        onFinish = options.onFinish; //console.log('animateSteps', options);
    //const aId = ++aIdSource;

    ease = ease || easeInQuad;
    range = range || {
      from: 0,
      to: 1
    };
    duration = duration || 300; //console.log('animate/new' + '\t\t\t\t#' + aId );

    if (key && animationsMap[key]) {
      //console.log('animate/cancel' + '\t\t\t\t#' + aId );
      cancelAnimationFrame(animationsMap[key]);
      onCancel && onCancel();
      animationsMap[key] = undefined;
    } // TODO use performnce.now instead of new Date ???


    var startTime = new Date();

    var a = function a() {
      var p = (new Date() - startTime) / duration;
      if (p >= 1) p = 1; //console.log('\tanimate/if' + '\t\t\t#' + aId , p);

      var v = range.from + (range.to - range.from) * ease(p); //console.log('as/t\t\t\t\t\t\t\t\t\t', v, p, performance.now());

      if (p >= 1) {
        //console.log('\t\tanimate/finish' + '\t#' + aId , p);
        onFinish && onFinish(v);
      } else {
        //console.log('\t\tanimate/step' + '\t#' + aId , p);
        step(v);

        var _rId = requestAnimationFrame(a);

        if (key) animationsMap[key] = _rId;
      }
    };

    var rId = requestAnimationFrame(a);
    if (key) animationsMap[key] = rId;
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
      key: "on",
      value: function on(name, h) {
        this._el.addEventListener(name, h, false);

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
      key: "innerHTML",
      value: function innerHTML(value) {
        this._el.innerHTML = value;
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
      key: "do",
      value: function _do(cb) {
        if (cb) {
          cb(this);
        }

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

  var BehaviorSubject =
  /*#__PURE__*/
  function () {
    function BehaviorSubject(initialValue) {
      _classCallCheck(this, BehaviorSubject);

      this.value = initialValue;
      this.handlers = [];
    }

    _createClass(BehaviorSubject, [{
      key: "subscribe",
      value: function subscribe(h, skipCurrent) {
        !skipCurrent && h(this.value);
        this.handlers.push(h);
      }
    }, {
      key: "next",
      value: function next(v) {
        this.value = v;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var h = _step.value;
            h(v);
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
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.value;
      }
    }]);

    return BehaviorSubject;
  }();

  var bs = function bs(initialValue) {
    var subject = new BehaviorSubject(initialValue);

    var r = function r(h, skip) {
      subject.subscribe(h, skip);
    };

    r.next = function (v) {
      return subject.next(v);
    };

    r.subscribe = function (h, skip) {
      return subject.subscribe(h, skip);
    };

    r.getValue = function () {
      return subject.getValue();
    };

    return r;
  };

  var mapbs = function mapbs(source, mapFn) {
    var subject = bs(mapFn(source.getValue()));
    source.subscribe(function (v) {
      return subject.next(mapFn(v));
    }, true);
    return subject;
  };

  var optimizedSVGTransformations = false;

  var createSVG = function createSVG(type) {
    return new ElementBuilder(document.createElementNS('http://www.w3.org/2000/svg', type));
  };

  var createEl = function createEl(type) {
    return new ElementBuilder(document.createElement(type));
  };

  var xStep = 20;

  function createChart(options) {
    var _this = this;

    var el = options.el,
        chartData = options.chartData,
        title = options.title;
    var size = options.size;
    var columns = chartData.columns,
        names = chartData.names,
        types = chartData.types,
        colors = chartData.colors;
    var chartColumnsIds = Object.keys(types).filter(function (t) {
      return types[t] !== 'x';
    });
    var columnsMap = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var c = _step2.value;
        columnsMap[c[0]] = c;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
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
      elements: {
        linesElements: {}
      },
      transformY: function transformY(y) {
        return y;
      }
    }; // TODO remove duplicated method!

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
        return maxSlice(l, visibleIndexRange.from, visibleIndexRange.to + 1);
      })));
      var xSize = (xColumn.length - 2) * xStep;
      var xMin = xSize * s.visibleRange.from / 100;
      var xMax = xSize * s.visibleRange.to / 100;
      return [xMin, xMax, 0
      /*yMin*/
      , yMax];
    };

    var getSizeFromEl = function getSizeFromEl(el) {
      var isLandscape = window.innerHeight > window.innerWidth;
      var width = el.offsetWidth || 500;
      var aspectRatio = 1;

      if (window.innerHeight && window.innerWidth) {
        aspectRatio = window.innerHeight / window.innerWidth * 0.7;
      }

      return {
        width: width,
        height: isLandscape ? width : width * aspectRatio
      };
    };

    var xAxisHeight = 20;
    var viewPortPaddings = {
      left: 0,
      right: 0,
      top: 2,
      bottom: 2
    };

    var calcSizes = function calcSizes(size) {
      var viewPortSize = {
        width: size.width - viewPortPaddings.left - viewPortPaddings.right,
        height: size.height - viewPortPaddings.top - viewPortPaddings.bottom - xAxisHeight
      };
      var svgSize = {
        width: size.width,
        height: size.height
      };
      return {
        viewPortSize: viewPortSize,
        svgSize: svgSize
      };
    };

    var init = function init() {
      if (title) {
        createEl('div').addClass('title').innerText(title).appendTo(el);
      }

      var svgElC = createEl('div').addClass('chart-view-port').style('position', 'relative').appendTo(el);

      if (!size) {
        size = getSizeFromEl(el);
      }

      state.size = size;
      var initialSizes = calcSizes(size); // TODO remove sizes fields from state!

      state.viewPortSize = initialSizes.viewPortSize;
      state.svgSize = initialSizes.svgSize;
      var sizes$ = bs(initialSizes);
      var sizeViewPort$ = mapbs(sizes$, function (s) {
        return s.viewPortSize;
      });
      window.addEventListener('resize', function () {
        var updatedSizes = calcSizes(getSizeFromEl(el)); // console.log('resize', updatedSizes);

        sizes$.next(updatedSizes);
      });
      var fullBounds = getBounds(null);
      state.fullBounds = fullBounds;

      var _fullBounds = _slicedToArray(fullBounds, 4),
          yMin = _fullBounds[2],
          yMax = _fullBounds[3];

      state.transformY = function (y) {
        return -(y - yMin) + yMax;
      }
      /* -yMin  */
      ; // see method vertMatrix
      //TODO use same matrixes for chart view port and axes!


      var sizeSVG = function sizeSVG(svgElBuilder, s, p) {
        var w = s.width;
        var h = s.height;
        p = p || {
          left: 0,
          right: 0,
          top: 2,
          bottom: 2
        };
        var vb = [-p.left, -p.top, w - p.right, h - p.bottom];
        svgElBuilder.style('width', w).style('height', h).attr('viewBox', "".concat(vb[0], " ").concat(vb[1], " ").concat(vb[2], " ").concat(vb[3]));
        return svgElBuilder;
      };

      var viewPortBackdropEl = createEl('div').do(function (b) {
        sizes$(function (s) {
          b.style('width', s.viewPortSize.width + 'px').style('height', s.viewPortSize.height + 'px');
        });
      }).style('left', viewPortPaddings.left + 'px').style('top', viewPortPaddings.top + 'px').style('position', 'absolute').appendTo(svgElC);
      var svgEl = createSVG('svg').attr('zoom', 1);
      sizes$(function (s) {
        sizeSVG(svgEl, s.svgSize, viewPortPaddings);
      }); // Y axis

      var yAxisG = createSVG('g').addClass('animate-transform').style('vector-effect', 'non-scaling-stroke').appendTo(svgEl);
      state.elements.hGridLinesG = yAxisG; //X axis

      var xAxisG = createSVG('g').addClass('animate-transform').appendTo(svgEl);
      sizes$(function (s) {
        return xAxisG.attr('transform', 'translate(0, ' + (s.viewPortSize.height + xAxisHeight * 0.8) + ')');
      });
      state.elements.xAxisG = xAxisG;
      var initialRange = {
        from: 50,
        to: 75
      };
      var cvp = new ChartViewPort({
        containerEl: svgEl.el,
        chartData: chartData,
        size$: sizeViewPort$,
        range: initialRange
      });
      cvp.init();
      state.cvp = cvp;
      _this.viewPortEl = new ElementBuilder(options.viewPortEl);
      _this.viewPort = options.viewPort;
      var cph = new ChartsTooltip({
        viewPortEl: cvp.linesGC.el,
        hoverContainerEl: cvp.hoverContainerG.el,
        viewPort: cvp,
        viewPortBackdropEl: viewPortBackdropEl.el,
        size$: sizeViewPort$
      });
      cph.init();
      state.cph = cph;
      var xAxis = new XAxis({
        containerEl: xAxisG.el,
        xColumn: xColumn
      });
      state.xAxis = xAxis;
      var yAxis = new YAxis({
        containerGEl: yAxisG.el,
        containerDivEl: viewPortBackdropEl.el,
        viewPort: cvp,
        size$: sizeViewPort$
      });
      state.yAxis = yAxis;

      cvp.onChangeTransformations = function (_ref) {
        var bounds = _ref.bounds,
            vm = _ref.vm,
            hm = _ref.hm;
        xAxis.updateRange(bounds, state, hm);
        yAxis.updateRange(bounds, vm);
      };

      cvp.updateRange(initialRange, true);
      svgEl.appendTo(svgElC);
      var miniMapViewPortHeight = 30;
      var miniMapBlockEl = createEl('div').addClass('chart-range-selector').appendTo(el);
      sizes$(function (s) {
        return miniMapBlockEl.style('width', s.viewPortSize.width + 'px');
      });
      var miniMapEl = createSVG('svg').appendTo(miniMapBlockEl);
      var minimapPaddings = {
        left: 0,
        right: 0,
        top: 2,
        bottom: 2
      };
      var minimapSVGHeight = miniMapViewPortHeight + minimapPaddings.top + minimapPaddings.bottom;
      sizes$(function (s) {
        return sizeSVG(miniMapEl, {
          width: s.viewPortSize.width,
          height: minimapSVGHeight
        }, minimapPaddings);
      });
      var miniCVP = new ChartViewPort({
        containerEl: miniMapEl.el,
        chartData: chartData,
        size$: mapbs(sizeViewPort$, function (s) {
          return {
            width: s.width,
            height: miniMapViewPortHeight
          };
        }),
        strokeWidth: '1px',
        range: {
          from: 0,
          to: 100
        }
      });
      miniCVP.init();
      state.miniCVP = miniCVP;
      miniCVP.updateRange({
        from: 0,
        to: 100
      }, true);
      var minRangeWidth = Math.max(2 / (xColumn.length - 1) * 100, 1 / state.viewPortSize.width * 100, 5);
      var rangeSelector = new RangeSelector({
        range: initialRange,
        containerEl: miniMapBlockEl.el,
        minRangeWidth: minRangeWidth,
        width$: mapbs(sizeViewPort$, function (s) {
          return s.width;
        })
      });
      rangeSelector.init();

      rangeSelector.onRangeChanged = function (r) {
        cph.hide();
        cvp.updateRange(r);
      };

      var toggleGroupEl = createEl('div').appendTo(el);
      var tg = new ToggleGroup({
        containerEl: toggleGroupEl.el,
        names: names,
        colors: colors
      });

      tg.onToogle = function (lId) {
        cph.hide();
        toggleLine(lId);
      };

      el['__chart_state__'] = state;
    };

    var toggleLine = function toggleLine(lId) {
      state.cvp.toggleLine(lId);
      state.miniCVP.toggleLine(lId);
    }; // const beautyfyBounds = (bounds) => {
    //     // find nearest netural number divided to six OR 10, 50, 100
    //     return bounds;
    // }


    init();
  }

  var chartViewPortUidSource = 0;

  var ChartViewPort =
  /*#__PURE__*/
  function () {
    function ChartViewPort(options) {
      var _this2 = this;

      _classCallCheck(this, ChartViewPort);

      this.uid = ++chartViewPortUidSource;
      this.animationUidKey = 'chart-view-port-' + this.uid;
      this.el = new ElementBuilder(options.containerEl);
      this.chartData = options.chartData;
      this.size$ = options.size$;
      this.size$(function (s) {
        return _this2.updateSize(s);
      }, true);
      this.size = this.size$.getValue();
      this.strokeWidth = options.strokeWidth || 2;
      this.disabled = {};
      this.visibleRange = options.range || {
        from: 0,
        to: 100
      };
      if (!this.size$) throw new 'Expected options.size$'();

      this.onChangeTransformations = function () {};

      this.commitMarkupB = function () {
        return _this2.commitMarkup();
      };
    }

    _createClass(ChartViewPort, [{
      key: "init",
      value: function init() {
        var _this$chartData = this.chartData,
            colors = _this$chartData.colors,
            columns = _this$chartData.columns,
            types = _this$chartData.types,
            names = _this$chartData.names;
        var columnsMap = this.columnsMap = {};
        var colorsMap = this.colorsMap = {};
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = columns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _c = _step3.value;
            columnsMap[_c[0]] = _c;
            colorsMap[_c[0]] = colors[_c[0]];
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        this.chartColumnsIds = Object.keys(types).filter(function (t) {
          return types[t] !== 'x';
        });
        var columnIds = Object.keys(types);
        this.xColumnId = Object.keys(types).find(function (t) {
          return types[t] === 'x';
        });
        this.xColumn = columnsMap[this.xColumnId];
        this.fullBounds = this.getBounds({
          from: 0,
          to: 100
        });
        this.names = names;
        var linesElements = {};
        var linesGC = createSVG('g').appendTo(this.el);

        if (optimizedSVGTransformations) {
          linesGC.addClass('animate-transform');
        }

        var linesG = createSVG('g').appendTo(linesGC);
        var hoverContainerG = createSVG('g').appendTo(this.el);
        this.hoverContainerG = hoverContainerG;

        var _this$fullBounds = _slicedToArray(this.fullBounds, 4),
            yMin = _this$fullBounds[2],
            yMax = _this$fullBounds[3];

        var transformY = function transformY(y) {
          return -(y - yMin) + yMax;
        }
        /* -yMin  */
        ;

        this.transformY = transformY;

        for (var columnIndex = 0; columnIndex < columnIds.length; columnIndex++) {
          var lId = columnIds[columnIndex],
              t = types[lId],
              color = colors[lId],
              c = columnsMap[lId];

          if (t === 'line') {
            var d = '';

            if (optimizedSVGTransformations) {
              for (var pIdx = 1; pIdx < c.length; pIdx++) {
                d += pIdx == 1 ? 'M' : 'L';
                d += (pIdx - 1) * xStep;
                d += ' ';
                d += transformY(c[pIdx]);
              }
            }

            var p = createSVG('path').addClass('chart-line').attr('d', d).style('stroke', color).style('stroke-width', this.strokeWidth).style('vector-effect', 'non-scaling-stroke').style('fill', 'none').addClass('animate-opacity').appendTo(linesG);
            linesElements[lId] = p;
          }
        }

        this.linesElements = linesElements;
        this.linesGC = linesGC;
        this.linesG = linesG;
      }
    }, {
      key: "updateSize",
      value: function updateSize(s) {
        if (!s.width || !s.height) throw 'Excpected {width, height}';
        this.size = s;
        this.markupState = null;
        this.currentTransformations = null;
        this.updateRange(this.visibleRange, true);
      }
    }, {
      key: "vMatrix",
      value: function vMatrix(bounds) {
        var fbyMax = this.fullBounds[3];
        var yMax = bounds[3];
        var yScale = this.size.height / yMax;
        var m1 = [1, 0, 0, 1, 0, yMax * yScale],
            m2 = [1, 0, 0, yScale, 0, 0],
            m3 = [1, 0, 0, 1, 0, -fbyMax];
        var vt = mmul(m1, mmul(m2, m3));
        return vt;
      }
    }, {
      key: "hMatrix",
      value: function hMatrix(bounds) {
        var _bounds = _slicedToArray(bounds, 2),
            xMin = _bounds[0],
            xMax = _bounds[1];

        var xScale = this.size.width / (xMax - xMin);
        var m2 = [xScale, 0, 0, 1, 0, 0],
            m3 = [1, 0, 0, 1, -xMin, 0];
        var m = mmul(m2, m3);
        return m;
      }
    }, {
      key: "getAllLinesIds",
      value: function getAllLinesIds() {
        return this.chartColumnsIds;
      }
    }, {
      key: "getEnabledLinesIds",
      value: function getEnabledLinesIds() {
        var _this3 = this;

        return this.chartColumnsIds.filter(function (lid) {
          return !_this3.disabled[lid];
        });
      }
    }, {
      key: "getDisabledLinesIds",
      value: function getDisabledLinesIds() {
        var _this4 = this;

        return this.chartColumnsIds.filter(function (lid) {
          return _this4.disabled[lid];
        });
      }
    }, {
      key: "getEnabledLines",
      value: function getEnabledLines() {
        var _this5 = this;

        return this.getEnabledLinesIds().map(function (lid) {
          return _this5.columnsMap[lid];
        });
      }
    }, {
      key: "getBounds",
      value: function getBounds(range) {
        range = range || {
          from: 0,
          to: 100
        };
        var visibleLines = this.getEnabledLines();
        var visibleIndexRange = {
          from: 1 + (this.xColumn.length - 1) * range.from / 100,
          to: (this.xColumn.length - 1) * range.to / 100
        };
        var yMax = visibleLines.length > 0 ? Math.max.apply(Math, _toConsumableArray(visibleLines.map(function (l) {
          return maxSlice(l, visibleIndexRange.from, visibleIndexRange.to + 1);
        }))) : this.fullBounds[3]; //let yMin = Math.min(...visibleLines.map(l => Math.min(...l.slice(visibleIndexRange.from, visibleIndexRange.to + 1))));

        var xSize = (this.xColumn.length - 2) * xStep;
        var xMin = xSize * range.from / 100;
        var xMax = xSize * range.to / 100;
        return [xMin, xMax, 0
        /*yMin*/
        , yMax];
      }
    }, {
      key: "requestUpdate",
      value: function requestUpdate(u) {
        var _this6 = this;

        // if(this.lastUpdate) { 
        //     console.log('requestUpdate/cancelAnimationFrame'); 
        //     cancelAnimationFrame(this.lastUpdate); 
        //     this.lastUpdate = null;
        // }
        // TODO spawn render from setTimeout(1000/6), not raf
        this.lastUpdate = requestAnimationFrame(function () {
          //console.log('requestUpdate/update', performance.now()); 
          u();
          _this6.lastUpdate = null;
        });
      }
    }, {
      key: "requestCommit",
      value: function requestCommit(s) {
        //console.log('request yScale', s.yScale);
        this.markupState = s;
        this.requestUpdate(this.commitMarkupB);
      }
    }, {
      key: "updateRange",
      value: function updateRange(range, force) {
        var _this7 = this;

        range = range || {
          from: 0,
          to: 100
        };
        if (this.visibleRange.from == range.from && this.visibleRange.to == range.to && !force) return;
        this.visibleRange = range;
        var newBounds = this.getBounds(range);
        var vm = this.vMatrix(newBounds);
        var hm = this.hMatrix(newBounds);

        if (optimizedSVGTransformations) {
          this.linesGC.attr('transform', a2m(vm));
          this.linesG.attr('transform', a2m(hm));
        } else {
          var oldBounds = this.currentTransformations ? this.currentTransformations.bounds : null;

          var _newBounds = _slicedToArray(newBounds, 4),
              xMin = _newBounds[0],
              xMax = _newBounds[1],
              yMin = _newBounds[2],
              yMax = _newBounds[3];

          var xScale = this.size.width / (xMax - xMin);
          var yScale = this.size.height / yMax;

          if (!oldBounds || !this.markupState) {
            this.requestCommit({
              xMin: xMin,
              xMax: xMax,
              yMin: yMin,
              yMax: yMax,
              xScale: xScale,
              yScale: yScale
            });
          } else {
            if (this.currentTransformations.bounds[2] != newBounds[2] || this.currentTransformations.bounds[3] != newBounds[3]) {
              // TODO adapt duration to scale difference
              var duration = 200;
              animateSteps({
                key: this.animationUidKey,
                range: {
                  from: this.markupState.yScale,
                  to: yScale
                },
                duration: duration,
                step: function step(yScale) {
                  _this7.requestCommit(_objectSpread({}, _this7.markupState, {
                    yScale: yScale
                  }));
                },
                onFinish: function onFinish(yScale) {
                  _this7.requestCommit(_objectSpread({}, _this7.markupState, {
                    yScale: yScale
                  }));
                }
              });
            }

            this.requestCommit(_objectSpread({}, this.markupState, {
              xMin: xMin,
              xMax: xMax,
              xScale: xScale
            }));
          }
        } // todo merge hm & vm


        this.onChangeTransformations({
          bounds: newBounds,
          vm: vm,
          hm: hm
        });
        this.currentTransformations = {
          bounds: newBounds,
          vm: vm,
          hm: hm
        };
      }
    }, {
      key: "vMatrixByScale",
      value: function vMatrixByScale(yScale) {
        var fbyMax = this.fullBounds[3];
        var yMax = this.size.height / yScale;
        var m1 = [1, 0, 0, 1, 0, yMax * yScale],
            m2 = [1, 0, 0, yScale, 0, 0],
            m3 = [1, 0, 0, 1, 0, -fbyMax];
        var vt = mmul(m1, mmul(m2, m3));
        return vt;
      }
    }, {
      key: "commitMarkup",
      value: function commitMarkup() {
        var _this$markupState = this.markupState,
            xMin = _this$markupState.xMin,
            yScale = _this$markupState.yScale,
            xScale = _this$markupState.xScale;
        if (xMin === undefined) throw 'xMin';
        if (xScale === undefined) throw 'xScale';
        if (yScale === undefined) throw 'yScale'; //console.log('cimmit yScale', yScale);

        var commitedMarkeupState = this.commitedMarkupState;

        if (!commitedMarkeupState || yScale != commitedMarkeupState.yScale || xScale != commitedMarkeupState.xScale) {
          var vm = this.vMatrixByScale(yScale);
          var visibleLinesIds = this.getAllLinesIds();
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = visibleLinesIds[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var lId = _step4.value;
              // todo check lines opacity!
              var c = this.columnsMap[lId];
              var d = '';

              for (var pIdx = 1; pIdx < c.length; pIdx++) {
                d += pIdx == 1 ? 'M' : 'L';
                d += (pIdx - 1) * xStep * xScale;
                d += ' ';
                d += pmulY(this.transformY(c[pIdx]), vm);
              }

              this.linesElements[lId].attr('d', d);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }

        this.linesG.attr('transform', 'translate(' + -xMin * xScale + ', 0)');
        this.commitedMarkeupState = this.markupState;
      }
    }, {
      key: "toggleLine",
      value: function toggleLine(lId) {
        var disabled = !this.disabled[lId];
        var lEl = this.linesElements[lId];

        if (disabled) {
          lEl.addClass('disabled-line');
        } else {
          lEl.removeClass('disabled-line');
        } // if(optimizedSVGTransformations) {


        this.disabled[lId] = disabled;
        this.updateRange(this.visibleRange, true); // } else {
        //     animateSteps  todo
        // }
      }
    }]);

    return ChartViewPort;
  }();

  var ChartsTooltip =
  /*#__PURE__*/
  function () {
    function ChartsTooltip(options) {
      var _this8 = this;

      _classCallCheck(this, ChartsTooltip);

      this.viewPortEl = new ElementBuilder(options.viewPortEl);
      this.hoverContainerEl = new ElementBuilder(options.hoverContainerEl);
      this.viewPortBackdropEl = new ElementBuilder(options.viewPortBackdropEl);
      this.viewPort = options.viewPort;
      this.size$ = options.size$;
      this.size$(function () {
        return _this8.hide();
      }, true);
      this.isCreatedElements = false;
      this.circleElementsMap = {};
      this.circleElements = [];
    }

    _createClass(ChartsTooltip, [{
      key: "init",
      value: function init() {
        var _this9 = this;

        this.viewPortBackdropEl.on('click', function (e) {
          _this9.onViewPortClick(e);
        });
        this.viewPortBackdropEl.on('mousemove', function (e) {
          _this9.onViewPortClick(e);
        });

        this.checkPinterActivityToClose = function (e) {
          _this9.onSomePointerActivity(e);
        };
      }
    }, {
      key: "hide",
      value: function hide() {
        if (!this.opened) return;

        for (var i = 0; i < this.circleElements.length; i++) {
          this.circleElements[i].attr('display', 'none');
        }

        this.lineEl.attr('display', 'none');
        this.tooltipEl.style('display', 'none');
        this.opened = false;
        document.removeEventListener('mousemove', this.checkPinterActivityToClose);
        document.removeEventListener('mousedown', this.checkPinterActivityToClose);
      }
    }, {
      key: "createElements",
      value: function createElements() {
        var _this10 = this;

        this.tooltipEl = createEl('div').addClass('chart-tooltip').style('left', '0').style('top', '0').style('display', 'none').appendTo(this.viewPortBackdropEl);
        this.tooltipDateEl = createEl('div').addClass('chart-tooltip-date').appendTo(this.tooltipEl);
        this.tooltipValuesContainerEl = createEl('div').addClass('chart-tooltip-values').appendTo(this.tooltipEl);
        this.tooltipValuesBlocksElMap = {};
        this.tooltipValuesElMap = {};

        for (var i = 0; i < this.viewPort.chartColumnsIds.length; i++) {
          var lId = this.viewPort.chartColumnsIds[i];
          var vb = createEl('div').addClass('chart-tooltip-value-block').style('color', this.viewPort.colorsMap[lId]).appendTo(this.tooltipValuesContainerEl);
          this.tooltipValuesBlocksElMap[lId] = vb;
          this.tooltipValuesElMap[lId] = createEl('div').addClass('chart-tooltip-value').appendTo(vb);
          createEl('div').addClass('chart-tooltip-name').innerText(this.viewPort.names[lId]).appendTo(vb);
        }

        this.lineEl = createSVG('path').attr('display', 'none').addClass('chart-tooltip-line').appendTo(this.hoverContainerEl);
        this.size$(function (s) {
          return _this10.lineEl.attr('d', 'M0 0 L0 ' + s.height);
        });

        for (var _i2 = 0; _i2 < this.viewPort.chartColumnsIds.length; _i2++) {
          var _lId = this.viewPort.chartColumnsIds[_i2];
          var c = createSVG('circle').attr('display', 'none').attr('stroke', this.viewPort.colorsMap[_lId]).attr('cx', '0').attr('cy', '0').attr('r', '3').addClass('chart-tooltip-circle').appendTo(this.hoverContainerEl);
          this.circleElementsMap[_lId] = c;
          this.circleElements.push(c);
        }
      }
    }, {
      key: "onViewPortClick",
      value: function onViewPortClick(e) {
        if (!this.viewPort.currentTransformations) return;

        if (!this.isCreatedElements) {
          this.createElements();
          this.isCreatedElements = true;
        }

        if (e.target !== this.viewPortBackdropEl.el) return;
        var visibleLines = this.viewPort.getEnabledLinesIds();
        if (visibleLines.length == 0) return;
        this.opened = true;
        var hm = this.viewPort.currentTransformations.hm;
        var vm = this.viewPort.currentTransformations.vm;
        var ihm = minverse(hm);
        var translatedPoint = pmul([e.offsetX, e.offsetY], ihm);
        var tx = translatedPoint[0];
        var pIdx = Math.round(tx / xStep) + 1;
        var xPoint = (pIdx - 1) * xStep;
        var xValue = this.viewPort.xColumn[pIdx];
        var xDate = new Date(xValue);
        var m = mmul(vm, hm);

        for (var i = 0; i < visibleLines.length; i++) {
          var lId = visibleLines[i];
          var circleEl = this.circleElementsMap[lId];
          var y = this.viewPort.columnsMap[lId][pIdx];
          var yPoint = this.viewPort.transformY(y);

          var _translatedPoint = pmul([xPoint, yPoint], m);

          circleEl.attr('cx', _translatedPoint[0]);
          circleEl.attr('cy', _translatedPoint[1]);
          circleEl.attr('display', '');
          this.tooltipValuesElMap[lId].innerText('' + y);
          this.tooltipValuesBlocksElMap[lId].style('display', 'inline-block');
        }

        var disabledIds = this.viewPort.getDisabledLinesIds();
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = disabledIds[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _lId2 = _step5.value;

            this.tooltipValuesBlocksElMap[_lId2].style('display', 'none');
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        var userLang = getNavigatorLanguage();
        var dateLabel = {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        };
        this.tooltipDateEl.innerText(xDate.toLocaleDateString(userLang, dateLabel));
        this.tooltipEl.style('display', 'block');
        var baseX = pmulX(xPoint, m);
        var tooltipRect = this.tooltipEl.el.getBoundingClientRect();
        var tooltipWidth = tooltipRect.width;
        var tooltipPosX = limit(baseX - 10, 0, this.size$.getValue().width - tooltipWidth);
        this.tooltipEl.style('left', tooltipPosX + 'px');
        this.tooltipEl.style('top', 0 + 'px');
        this.lineEl.attr('display', 'block');
        this.lineEl.attr('transform', 'translate(' + pmulX(xPoint, m) + ', 0)');
        document.addEventListener('mousemove', this.checkPinterActivityToClose);
        document.addEventListener('mousedown', this.checkPinterActivityToClose);
      }
    }, {
      key: "onSomePointerActivity",
      value: function onSomePointerActivity(e) {
        if (!this.opened) return;
        var bdr = this.viewPortBackdropEl.el.getBoundingClientRect();

        if (!(e.clientX >= bdr.left && e.clientX <= bdr.right && e.clientY >= bdr.top && e.clientY <= bdr.bottom)) {
          this.hide();
        }
      }
    }]);

    return ChartsTooltip;
  }();

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
        var _this11 = this;

        var xPoints = this.xColumn.slice(1);
        this.textElements = new Array(xPoints.length);
        var userLang = getNavigatorLanguage(); //const dateLabel = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        var dateLabel = {
          month: 'short',
          day: 'numeric'
        };

        this.getOrCreateTextEl = function (i) {
          if (_this11.textElements[i]) return _this11.textElements[i];
          var labelText = new Date(xPoints[i]).toLocaleDateString(userLang, dateLabel);
          var x = i * xStep;
          var tEl = createSVG('text').attr('x', '0').attr('y', '0').attr('transform', a2m([1, 0, 0, 1, pmulX(x, hm), 0])).textContent('' + labelText).addClass('chart-x-line-text').addClass('animate-opacity').appendTo(_this11.el);
          var v = {
            el: tEl,
            x: x
          };
          _this11.textElements[i] = v;
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


        var maxLabelInViewPort = Math.trunc(state.viewPortSize.width / this.getLabelWidth()); // todo some coef for padding

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

      var c = optimizedSVGTransformations ? options.containerGEl : options.containerDivEl;
      this.el = new ElementBuilder(c);
      this.viewPort = options.viewPort;
      this.size$ = options.size$;
      this.elementsCache = {};
      this.currentRangeKey = null;
      this.currentBounds = null;
    }

    _createClass(YAxis, [{
      key: "updateRange",
      value: function updateRange(bounds, vm) {
        var _this12 = this;

        this.transformY = this.viewPort.transformY;

        var _bounds2 = _slicedToArray(bounds, 4),
            yMin = _bounds2[2],
            yMax = _bounds2[3];

        var rKey = this.rangeToKey(yMin, yMax);
        if (this.currentRangeKey === rKey && mequals(vm, this.currentVM)) return;
        this.forceUpdate = false;
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
              _this12.updateYGridLines(_gridElements, _newLines, function (el) {
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
              _this12.updateYGridLines(_gridElements2, movedLines, function (el) {
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

          if (optimizedSVGTransformations) {
            var lEl = createSVG('path').style('vector-effect', 'non-scaling-stroke').attr('d', 'M0 0 L' + this.size$.getValue().width + ' 0').attr('transform', 'matrix(1,0,0,1,0,' + y + ')').addClass('chart-y-line').addClass('animate-transform-opacity').appendTo(this.el);
            hGridLines.push(lEl);
            cb(lEl);
            var tEl = createSVG('text').attr('x', '0').attr('y', '0').attr('transform', 'matrix(1,0,0,1,0,' + (y - 5) + ')').attr('font-family', 'sans-serif').attr('font-size', '10').attr('fill', 'gray').textContent('' + lines[i].text).addClass('chart-y-line-text').addClass('animate-transform-opacity').appendTo(this.el);
            hGridTexts.push(tEl);
            cb(tEl);
          } else {
            var _lEl = createEl('div').style('top', y + 'px').addClass('chart-y-line').appendTo(this.el);

            hGridLines.push(_lEl);
            cb(_lEl);

            var _tEl = createEl('div').style('top', y + 'px').innerText('' + lines[i].text).addClass('chart-y-line-text').appendTo(this.el);

            hGridTexts.push(_tEl);
            cb(_tEl);
          }
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

          if (optimizedSVGTransformations) {
            hGridLines[i].attr('d', 'M0 0 L' + this.size$.getValue().width + ' 0').attr('transform', 'matrix(1,0,0,1,0,' + y + ')');
            cb(hGridLines[i]);
            hGridTexts[i] //.textContent('' + lines[i].text)
            .attr('transform', 'matrix(1,0,0,1,0,' + (y - 5) + ')');
            cb(hGridTexts[i]);
          } else {
            hGridLines[i].style('top', y + 'px');
            cb(hGridLines[i]);
            hGridTexts[i].style('top', y + 'px');
            cb(hGridTexts[i]);
          }
        }
      }
    }]);

    return YAxis;
  }();

  function dnd(e, ondnd, data) {
    var startEvent = e;

    var fireDndEvent = function fireDndEvent(mme, last) {
      var delta = {
        x: mme.clientX - startEvent.clientX,
        y: mme.clientY - startEvent.clientY
      };
      var dndEvent = {
        mme: mme,
        delta: delta,
        data: data,
        finished: last
      };
      ondnd(dndEvent);
    };

    var onMouseMove = function onMouseMove(mme) {
      if (finished) return;
      fireDndEvent(mme, false);
    };

    var onMouseUp = function onMouseUp(mme) {
      if (finished) return;
      fireDndEvent(mme, true);
      finish();
    };

    var finished = false;

    var finish = function finish() {
      finished = true;
      document.removeEventListener('pointermove', onMouseMove);
      document.removeEventListener('pointerup', onMouseUp);
    };

    document.addEventListener('pointermove', onMouseMove);
    document.addEventListener('pointerup', onMouseUp);
  }

  function limit(v, min, max) {
    if (v > max) return max;
    if (v < min) return min;
    return v;
  }

  var RangeSelector =
  /*#__PURE__*/
  function () {
    function RangeSelector(options) {
      var _this13 = this;

      _classCallCheck(this, RangeSelector);

      this.range = options.range || {
        from: 0,
        to: 100
      };
      this.width$ = options.width$;
      this.width$(function () {
        return _this13.positionByRange();
      }, true);
      this.minRangeWidth = options.minRangeWidth || 5;
      this.el = new ElementBuilder(options.containerEl);

      this.onRangeChanged = function () {};
    }

    _createClass(RangeSelector, [{
      key: "init",
      value: function init() {
        var _this14 = this;

        this.leftCurtainEl = createEl('div').addClass('left-curtain').appendTo(this.el);
        this.rightCurtainEl = createEl('div').addClass('right-curtain').appendTo(this.el);
        this.leftGripperEl = createEl('div').addClass('left-gripper').appendTo(this.el);
        this.rightGripperEl = createEl('div').addClass('right-gripper').appendTo(this.el);
        this.sliderEl = createEl('div').addClass('slider').appendTo(this.el);
        this.sliderEl.on('pointerdown', function (e) {
          return _this14.onSliderMouseDown(e);
        });
        this.leftGripperEl.on('pointerdown', function (e) {
          return _this14.onLeftGripperMouseDown(e);
        });
        this.rightGripperEl.on('pointerdown', function (e) {
          return _this14.onRightGripperMouseDown(e);
        });
        this.positionByRange();
      }
    }, {
      key: "raiseRangeChange",
      value: function raiseRangeChange() {
        this.range;
        var w = this.getWidth();
        var from = this.state.leftPos / w * 100;
        var to = this.state.rightPos / w * 100;
        this.onRangeChanged({
          from: from,
          to: to
        });
      }
    }, {
      key: "positionByRange",
      value: function positionByRange() {
        var w = this.getWidth();
        var leftPos = Math.round(w * this.range.from / 100);
        var rightPos = Math.round(w * this.range.to / 100);
        this.state = {
          leftPos: leftPos,
          rightPos: rightPos,
          w: w
        };
        this.updateElementsByState();
      }
    }, {
      key: "updateElementsByState",
      value: function updateElementsByState() {
        var leftPos = this.state.leftPos;
        var rightPos = this.state.rightPos;
        var w = this.state.w;
        var width = rightPos - leftPos;
        this.sliderEl.style('left', leftPos + 'px');
        this.sliderEl.style('width', width + 'px');
        this.leftGripperEl.style('left', leftPos + 'px');
        this.rightGripperEl.style('right', w - rightPos + 'px');
        this.leftCurtainEl.style('width', leftPos + 'px');
        this.rightCurtainEl.style('width', w - rightPos + 'px');
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        var w = this.width$.getValue();
        if (w) return w;
        return this.width = this.el.el.getBoundingClientRect().width;
      }
    }, {
      key: "cloneState",
      value: function cloneState() {
        return {
          leftPos: this.state.leftPos,
          rightPos: this.state.rightPos,
          w: this.state.w
        };
      }
    }, {
      key: "onSliderMouseDown",
      value: function onSliderMouseDown(e) {
        var _this15 = this;

        e.preventDefault();
        e.stopImmediatePropagation();
        var w = this.getWidth();
        var startState = this.cloneState();
        var minWidth = this.minRangeWidth / 100 * w;
        var sliderWidth = Math.max(startState.rightPos - startState.leftPos, minWidth);
        dnd(e, function (dndEvent) {
          var leftPos = limit(startState.leftPos + dndEvent.delta.x, 0, w - sliderWidth);
          var rightPos = leftPos + sliderWidth;
          _this15.state = _objectSpread({}, _this15.state, {
            leftPos: leftPos,
            rightPos: rightPos
          });

          _this15.updateElementsByState();

          _this15.raiseRangeChange();
        });
      }
    }, {
      key: "onLeftGripperMouseDown",
      value: function onLeftGripperMouseDown(e) {
        var _this16 = this;

        e.preventDefault();
        e.stopImmediatePropagation();
        var w = this.getWidth();
        var startState = this.cloneState();
        var minWidth = this.minRangeWidth / 100 * w;
        dnd(e, function (dndEvent) {
          var leftPos = limit(startState.leftPos + dndEvent.delta.x, 0, startState.rightPos - minWidth);
          _this16.state = _objectSpread({}, _this16.state, {
            leftPos: leftPos
          });

          _this16.updateElementsByState();

          _this16.raiseRangeChange();
        });
      }
    }, {
      key: "onRightGripperMouseDown",
      value: function onRightGripperMouseDown(e) {
        var _this17 = this;

        e.preventDefault();
        e.stopImmediatePropagation();
        var w = this.getWidth();
        var startState = this.cloneState();
        var minWidth = this.minRangeWidth / 100 * w;
        dnd(e, function (dndEvent) {
          var rightPos = limit(startState.rightPos + dndEvent.delta.x, startState.leftPos + minWidth, w);
          _this17.state = _objectSpread({}, _this17.state, {
            rightPos: rightPos
          });

          _this17.updateElementsByState();

          _this17.raiseRangeChange();
        });
      }
    }]);

    return RangeSelector;
  }();

  var checkmark = '<svg class="checkmark"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 45.701 45.7"	>' + '<g><g>' + '<path d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504' + 'c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0' + 'c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"/>' + '</g></g></svg>';

  var ToggleGroup =
  /*#__PURE__*/
  function () {
    function ToggleGroup(options) {
      _classCallCheck(this, ToggleGroup);

      var names = options.names,
          colors = options.colors;
      this.names = names;
      this.colors = colors;
      this.el = new ElementBuilder(options.containerEl);

      this.onToogle = function () {};

      this.init();
    }

    _createClass(ToggleGroup, [{
      key: "init",
      value: function init() {
        var _this18 = this;

        this.el.addClass('chart-toggle-buttons');

        var _arr2 = Object.keys(this.names);

        var _loop = function _loop() {
          var k = _arr2[_i3];
          var toggled = true;
          var n = _this18.names[k];
          var bEl = createEl('button').addClass('toggle-button').addClass('toggled').appendTo(_this18.el);
          var cfEl = createEl('div').addClass('circle-figure').innerHTML(checkmark).appendTo(bEl);
          cfEl.style('border-color', _this18.colors[k]).style('background-color', _this18.colors[k]);
          var span = createEl('span').appendTo(bEl);
          span.innerText(n);

          bEl.el.onclick = function () {
            toggled = !toggled;

            if (toggled) {
              cfEl.style('background-color', _this18.colors[k]);
              bEl.addClass('toggled');
            } else {
              cfEl.style('background-color', 'transparent');
              bEl.removeClass('toggled');
            }

            _this18.onToogle(k);
          };
        };

        for (var _i3 = 0; _i3 < _arr2.length; _i3++) {
          _loop();
        }
      }
    }]);

    return ToggleGroup;
  }();

  var createModeSwitcher = function createModeSwitcher() {
    var dayText = "Switch To Night Mode";
    var nightText = "Switch To Day Mode";
    var buttonEl = createEl('button').addClass('mode-switcher-button').innerText(dayText).appendTo(document.body);
    var night = false;
    var b = new ElementBuilder(document.body);
    buttonEl.on('click', function () {
      night = !night;

      if (night) {
        b.addClass('night');
        buttonEl.innerText(nightText);
      } else {
        b.removeClass('night');
        buttonEl.innerText(dayText);
      }
    });
  };

  g.createChart = createChart;
  g.createModeSwitcher = createModeSwitcher;
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
      var el = document.getElementById('chart' + i);
      var w = el.offsetWidth || 500;
      window.createChart({
        el: el,
        chartData: data[i],
        title: 'Chart #' + i
      });
    }

    window.createModeSwitcher();
  });
});