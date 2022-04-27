(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Jedi"] = factory();
	else
		root["Jedi"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(5)["default"];

var assertThisInitialized = __webpack_require__(10);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./src/theme.js



var theme_Theme = /*#__PURE__*/function () {
  function Theme() {
    classCallCheck_default()(this, Theme);
  }

  createClass_default()(Theme, [{
    key: "setAttributes",
    value: function setAttributes(element) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(attributes).forEach(function (key) {
        element.setAttribute(key, attributes[key]);
      });
    }
    /**
     * Adds an error message to the specified editor container.
     */

  }, {
    key: "addInputError",
    value: function addInputError(container, message) {
      var error = document.createElement('p');
      error.classList.add('jedi-error-message');
      error.textContent = message;
      container.appendChild(error);
    }
    /**
     * Removes any error message from the specified editor container.
     */

  }, {
    key: "removeInputError",
    value: function removeInputError(container) {
      var path = container.getAttribute('data-path');
      var selector = '[data-path="' + path + '"] > .jedi-error-message';
      var errors = container.querySelectorAll(selector);
      errors.forEach(function (error) {
        container.removeChild(error);
      });
    }
  }, {
    key: "getButton",
    value: function getButton(text) {
      var button = document.createElement('button');
      button.textContent = text;
      return button;
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return document.createElement('div');
    }
  }, {
    key: "getDebugContainer",
    value: function getDebugContainer() {
      return document.createElement('pre');
    }
  }, {
    key: "getLabel",
    value: function getLabel(labelText) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var label = document.createElement('label');
      label.textContent = labelText;
      this.setAttributes(label, attributes);
      return label;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = document.createElement('input');
      this.setAttributes(input, attributes);
      return input;
    }
  }, {
    key: "getRadioGroup",
    value: function getRadioGroup(optionValues, optionsLabels, radioGroupName) {
      var _this = this;

      var radioGroup = this.getContainer();
      optionValues.forEach(function (value, index) {
        var labelText = optionsLabels[index];

        var label = _this.getLabel(labelText, {
          "for": radioGroupName + '[' + value + ']'
        });

        var radio = _this.getInput({
          type: 'radio',
          value: value,
          id: radioGroupName + '[' + value + ']',
          name: radioGroupName
        });

        radioGroup.appendChild(label);
        radioGroup.appendChild(radio);
      });
      return radioGroup;
    }
  }, {
    key: "getSelect",
    value: function getSelect(optionValues, optionsLabels, selectId) {
      var select = document.createElement('select');
      select.setAttribute('id', selectId);
      optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = optionsLabels[index];
        select.appendChild(option);
      });
      return select;
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var output = document.createElement('output');
      this.setAttributes(output, attributes);
      return output;
    }
  }]);

  return Theme;
}();

/* harmony default export */ var theme = (theme_Theme);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils.js




var utils_Utils = /*#__PURE__*/function () {
  function Utils() {
    classCallCheck_default()(this, Utils);
  }

  createClass_default()(Utils, [{
    key: "clone",
    value: function clone(thing) {
      return JSON.parse(JSON.stringify(thing));
    }
  }, {
    key: "equal",
    value: function equal(a, b) {
      return JSON.stringify(a) === JSON.stringify(b);
    }
  }, {
    key: "different",
    value: function different(a, b) {
      return JSON.stringify(a) !== JSON.stringify(b);
    }
  }, {
    key: "isSet",
    value: function isSet(value) {
      return typeof value !== 'undefined';
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number';
    }
  }, {
    key: "isInteger",
    value: function isInteger(value) {
      return this.isNumber(value) && value === Math.floor(value);
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: "isBoolean",
    value: function isBoolean(value) {
      return typeof value === 'boolean';
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return Array.isArray(value);
    }
  }, {
    key: "isObject",
    value: function isObject(value) {
      return !this.isNull(value) && !this.isArray(value) && typeof_default()(value) === 'object';
    }
  }, {
    key: "isNull",
    value: function isNull(value) {
      return value === null;
    }
  }, {
    key: "getSchemaEnumTitles",
    value: function getSchemaEnumTitles(schema) {
      return schema && schema.options && schema.options.enumTitles && this.isArray(schema.options.enumTitles) ? schema.options.enumTitles : false;
    }
  }, {
    key: "getSchemaEnum",
    value: function getSchemaEnum(schema) {
      return schema && schema["enum"] && this.isArray(schema["enum"]) ? schema["enum"] : false;
    }
  }, {
    key: "getSchemaTitle",
    value: function getSchemaTitle(schema) {
      return schema && schema.title ? schema.title : '';
    }
  }, {
    key: "hasNumericType",
    value: function hasNumericType(schema) {
      return schema.type === 'number' || schema.type === 'integer';
    }
  }, {
    key: "hasFormatRadio",
    value: function hasFormatRadio(schema) {
      return schema.format && schema.format === 'radio';
    }
  }, {
    key: "hasFormatSelect",
    value: function hasFormatSelect(schema) {
      return schema.format && schema.format === 'select';
    }
  }]);

  return Utils;
}();

/* harmony default export */ var utils = (new utils_Utils());
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/editor.js




var editor_Editor = /*#__PURE__*/function () {
  function Editor(config) {
    classCallCheck_default()(this, Editor);

    this.jedi = config.jedi;
    this.schema = config.schema;
    this.value = config.value || undefined;
    this.path = config.path || 'root';
    this.parent = config.parent || null;
    this.container = null;
    this.debugContainer = null;
    this.childEditors = [];
    this.init();
  }
  /**
   * Starts the build pipeline of the editor
   */


  createClass_default()(Editor, [{
    key: "init",
    value: function init() {
      this.setContainer();
      this.build();
      this.setDefaultValue();
      this.showValidationErrors();
      this.register();
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return this.path.split('.').pop();
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getContainer();
      this.container.setAttribute('data-path', this.path);
      this.container.setAttribute('data-type', this.schema.type);

      if (this.jedi.debug) {
        this.debugContainer = this.jedi.theme.getDebugContainer();
        this.container.appendChild(this.debugContainer);
      }
    }
    /**
     * build the editor's user interface
     */

  }, {
    key: "build",
    value: function build() {}
    /**
     * Adds this editor instance in the jedi.editors object
     */

  }, {
    key: "register",
    value: function register() {
      this.jedi.registerEditor(this);
    }
    /**
     * Removes this editor instance from the jedi.editors object
     */

  }, {
    key: "unregister",
    value: function unregister() {
      this.jedi.unregisterEditor(this);
    }
    /**
     * If schema.default is not difen, sets an initial value based on it's type.
     * If enum is defined and schema.default is not defined set the first item of
     * the enum als the default value.
     */

  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      var value;
      if (this.schema.type === 'boolean') value = false;
      if (this.schema.type === 'number') value = 0.0;
      if (this.schema.type === 'integer') value = 0;
      if (this.schema.type === 'string') value = '';
      if (this.schema.type === 'object') value = {};
      if (this.schema.type === 'array') value = [];
      var defaulIsDefined = utils.isSet(this.schema["default"]);

      if (defaulIsDefined) {
        value = this.schema["default"];
      }

      this.setValue(value, false);
    }
    /**
     * Returns the current value of the editor
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     * Sanitize value
     */

  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }
    /**
     * Sets the editor value and calls refreshUI right after. The onChange method
     * will be called unless triggersChange is explicitly set to false. This is
     * useful for initial or default values.
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      newValue = this.sanitize(newValue);
      this.value = newValue;

      if (triggersChange) {
        this.onChange();
      }

      this.refreshUI();
      this.refreshDebug();
      this.showValidationErrors();
    }
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshUI",
    value: function refreshUI() {}
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshDebug",
    value: function refreshDebug() {
      if (this.jedi.debug) {
        this.debugContainer.textContent = JSON.stringify(this.getValue(), null, 2);
      }
    }
    /**
     * Shows validation messages in the editor container.
     */

  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      var _this = this;

      var errors = this.jedi.validator.validate(this.schema, this.getValue(), this.path);
      this.jedi.theme.removeInputError(this.container);
      errors.forEach(function (error) {
        _this.jedi.theme.addInputError(_this.container, error.message);
      });
    }
    /**
     * Fires when the value of the editor changes.
     */

  }, {
    key: "onChange",
    value: function onChange() {
      if (this.parent) {
        this.parent.onChildEditorChange();
      }
    }
    /**
     * Fires when the value of a child editor changes. This is relevant for Array
     * and Object editors.
     */

  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {}
    /**
     * Destroys the editor, and every reference that it is attached to it.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.unregister();
    }
  }]);

  return Editor;
}();

/* harmony default export */ var editor = (editor_Editor);
// CONCATENATED MODULE: ./src/editors/array.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var array_ArrayEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ArrayEditor, _Editor);

  var _super = _createSuper(ArrayEditor);

  function ArrayEditor() {
    classCallCheck_default()(this, ArrayEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ArrayEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText);
      this.container.appendChild(label); // addBtn

      var addBtn = this.jedi.theme.getButton('add');
      this.container.appendChild(addBtn);
      addBtn.addEventListener('click', function () {
        _this.addItem();
      });
    }
  }, {
    key: "createItemEditor",
    value: function createItemEditor() {
      var _this2 = this;

      var itemEditor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: this.schema.items,
        path: this.path + '.' + this.childEditors.length,
        parent: this
      });
      var itemIndex = Number(itemEditor.getKey());

      if (itemEditor.input) {
        itemEditor.input.addEventListener('change', function () {
          var value = utils.clone(_this2.getValue());
          value[itemIndex] = utils.clone(itemEditor.getValue());

          _this2.setValue(value);
        });
      }

      var deleteBtn = this.jedi.theme.getButton('delete');
      itemEditor.container.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', function () {
        var itemIndex = Number(itemEditor.path.split('.').pop());

        _this2.deleteItem(itemIndex);
      });

      if (this.childEditors.length !== 0) {
        var moveUpBtn = this.jedi.theme.getButton('move up');
        itemEditor.container.appendChild(moveUpBtn);
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      if (this.value.length - 1 !== itemIndex) {
        var moveDownBtn = this.jedi.theme.getButton('move down');
        itemEditor.container.appendChild(moveDownBtn);
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      return itemEditor;
    }
  }, {
    key: "move",
    value: function move(fromIndex, toIndex) {
      var value = utils.clone(this.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.setValue(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemEditor();
      var value = utils.clone(this.getValue());
      value.push(tempEditor.getValue());
      tempEditor.destroy();
      this.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      if (window.confirm('Confirm to delete')) {
        var currentValue = utils.clone(this.getValue());
        var newValue = currentValue.filter(function (item, index) {
          return index !== itemIndex;
        });
        this.setValue(newValue);
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this3 = this;

      this.childEditors.forEach(function (editor) {
        _this3.container.removeChild(editor.container);

        editor.destroy();
      });
      this.childEditors = [];
      this.getValue().forEach(function (value) {
        var itemEditor = _this3.createItemEditor();

        itemEditor.setValue(value, false);

        _this3.childEditors.push(itemEditor);
      });
      this.childEditors.forEach(function (editor) {
        _this3.container.appendChild(editor.container);
      });
    }
  }]);

  return ArrayEditor;
}(editor);

/* harmony default export */ var editors_array = (array_ArrayEditor);
// CONCATENATED MODULE: ./src/editors/boolean.js






function boolean_createSuper(Derived) { var hasNativeReflectConstruct = boolean_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_BooleanEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(BooleanEditor, _Editor);

  var _super = boolean_createSuper(BooleanEditor);

  function BooleanEditor() {
    classCallCheck_default()(this, BooleanEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      this.input = this.jedi.theme.getInput({
        type: 'checkbox',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.checked);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.checked = this.value;
    }
  }]);

  return BooleanEditor;
}(editor);

/* harmony default export */ var editors_boolean = (boolean_BooleanEditor);
// CONCATENATED MODULE: ./src/editors/boolean-enum-select.js






function boolean_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = boolean_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_enum_select_BooleanEnumSelectEditor = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanEnumSelectEditor, _BooleanEditor);

  var _super = boolean_enum_select_createSuper(BooleanEnumSelectEditor);

  function BooleanEnumSelectEditor() {
    classCallCheck_default()(this, BooleanEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = ['false', 'true'];
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        var value = _this.input.value === 'true';

        _this.setValue(value);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue() === true ? 'true' : 'false';
    }
  }]);

  return BooleanEnumSelectEditor;
}(editors_boolean);

/* harmony default export */ var boolean_enum_select = (boolean_enum_select_BooleanEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/boolean-enum-radio.js






function boolean_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = boolean_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_enum_radio_BooleanEnumRadioEditor = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanEnumRadioEditor, _BooleanEditor);

  var _super = boolean_enum_radio_createSuper(BooleanEnumRadioEditor);

  function BooleanEnumRadioEditor() {
    classCallCheck_default()(this, BooleanEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = ['false', 'true'];
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var value = radio.value === 'true';

          _this.setValue(value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radioGroupName = this.path;
      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      var value = this.getValue() === true ? 'true' : 'false';
      var radio = this.container.querySelector('[value="' + value + '"]');
      radioInputs.forEach(function (radio) {
        radio.removeAttribute('checked');
      });

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return BooleanEnumRadioEditor;
}(editors_boolean);

/* harmony default export */ var boolean_enum_radio = (boolean_enum_radio_BooleanEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/object.js






function object_createSuper(Derived) { var hasNativeReflectConstruct = object_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function object_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var object_ObjectEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ObjectEditor, _Editor);

  var _super = object_createSuper(ObjectEditor);

  function ObjectEditor() {
    classCallCheck_default()(this, ObjectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ObjectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText);
      this.container.appendChild(label); // child editors

      Object.keys(this.schema.properties).forEach(function (prop) {
        var schema = _this.schema.properties[prop];

        var editor = _this.jedi.createEditor({
          jedi: _this.jedi,
          schema: schema,
          path: _this.path + '.' + prop,
          parent: _this
        });

        _this.container.appendChild(editor.container);

        _this.childEditors.push(editor);
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this2 = this;

      this.value = {};
      this.childEditors.forEach(function (childEditor) {
        _this2.value[childEditor.getKey()] = childEditor.getValue();
      });
      return this.value;
    }
  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {
      var value = {};
      this.childEditors.forEach(function (childEditor) {
        value[childEditor.getKey()] = childEditor.getValue();
      });
      this.setValue(value);
    }
  }]);

  return ObjectEditor;
}(editor);

/* harmony default export */ var editors_object = (object_ObjectEditor);
// CONCATENATED MODULE: ./src/editors/string.js






function string_createSuper(Derived) { var hasNativeReflectConstruct = string_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_StringEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(StringEditor, _Editor);

  var _super = string_createSuper(StringEditor);

  function StringEditor() {
    classCallCheck_default()(this, StringEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var inputTypes = ['color', 'datetime-local', 'email', 'month', 'search', 'tel', 'text', 'time', 'url', 'week'];
      this.input = this.jedi.theme.getInput({
        type: inputTypes.includes(this.schema.format) ? this.schema.format : 'text',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue();
    }
  }]);

  return StringEditor;
}(editor);

/* harmony default export */ var editors_string = (string_StringEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-select.js






function string_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_enum_select_StringEnumSelectEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumSelectEditor, _StringEditor);

  var _super = string_enum_select_createSuper(StringEnumSelectEditor);

  function StringEnumSelectEditor() {
    classCallCheck_default()(this, StringEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }]);

  return StringEnumSelectEditor;
}(editors_string);

/* harmony default export */ var string_enum_select = (string_enum_select_StringEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-radio.js






function string_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_enum_radio_StringEnumRadioEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumRadioEditor, _StringEditor);

  var _super = string_enum_radio_createSuper(StringEnumRadioEditor);

  function StringEnumRadioEditor() {
    classCallCheck_default()(this, StringEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.setValue(radio.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radioGroupName = this.path;
      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');
      radioInputs.forEach(function (radio) {
        radio.removeAttribute('checked');
      });

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return StringEnumRadioEditor;
}(editors_string);

/* harmony default export */ var string_enum_radio = (string_enum_radio_StringEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/number.js






function number_createSuper(Derived) { var hasNativeReflectConstruct = number_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_NumberEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NumberEditor, _Editor);

  var _super = number_createSuper(NumberEditor);

  function NumberEditor() {
    classCallCheck_default()(this, NumberEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      this.input = this.jedi.theme.getInput({
        type: 'number',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Number(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue();
    }
  }]);

  return NumberEditor;
}(editor);

/* harmony default export */ var editors_number = (number_NumberEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-select.js






function number_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_enum_select_NumberEnumSelectEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumSelectEditor, _NumberEditor);

  var _super = number_enum_select_createSuper(NumberEnumSelectEditor);

  function NumberEnumSelectEditor() {
    classCallCheck_default()(this, NumberEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }]);

  return NumberEnumSelectEditor;
}(editors_number);

/* harmony default export */ var number_enum_select = (number_enum_select_NumberEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-radio.js






function number_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_enum_radio_NumberEnumRadioEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumRadioEditor, _NumberEditor);

  var _super = number_enum_radio_createSuper(NumberEnumRadioEditor);

  function NumberEnumRadioEditor() {
    classCallCheck_default()(this, NumberEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.setValue(radio.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radioGroupName = this.path;
      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');
      radioInputs.forEach(function (radio) {
        radio.removeAttribute('checked');
      });

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return NumberEnumRadioEditor;
}(editors_number);

/* harmony default export */ var number_enum_radio = (number_enum_radio_NumberEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/null.js






function null_createSuper(Derived) { var hasNativeReflectConstruct = null_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function null_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var null_NullEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NullEditor, _Editor);

  var _super = null_createSuper(NullEditor);

  function NullEditor() {
    classCallCheck_default()(this, NullEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NullEditor, [{
    key: "sanitize",
    value: function sanitize(value) {
      return null;
    }
  }]);

  return NullEditor;
}(editor);

/* harmony default export */ var editors_null = (null_NullEditor);
// CONCATENATED MODULE: ./src/resolver.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }















var resolver_Resolver = /*#__PURE__*/function () {
  function Resolver() {
    classCallCheck_default()(this, Resolver);

    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [function (schema) {
      var hasFormatRadio = utils.hasFormatRadio(schema);

      if (schema.type === 'boolean' && hasFormatRadio) {
        return boolean_enum_radio;
      }
    }, function (schema) {
      var hasFormatSelect = utils.hasFormatSelect(schema);

      if (schema.type === 'boolean' && hasFormatSelect) {
        return boolean_enum_select;
      }
    }, function (schema) {
      if (schema.type === 'boolean') {
        return editors_boolean;
      }
    }, function (schema) {
      if (schema.type === 'object') {
        return editors_object;
      }
    }, function (schema) {
      if (schema.type === 'array') {
        return editors_array;
      }
    }, function (schema) {
      var hasEnum = utils.getSchemaEnum(schema);
      var hasFormatRadio = utils.hasFormatRadio(schema);

      if (schema.type === 'string' && hasEnum && hasFormatRadio) {
        return string_enum_radio;
      }
    }, function (schema) {
      var hasEnum = utils.getSchemaEnum(schema);

      if (schema.type === 'string' && hasEnum) {
        return string_enum_select;
      }
    }, function (schema) {
      if (schema.type === 'string') {
        return editors_string;
      }
    }, function (schema) {
      var hasNumericType = utils.hasNumericType(schema);
      var hasEnum = utils.getSchemaEnum(schema);
      var hasFormatRadio = utils.hasFormatRadio(schema);

      if (hasNumericType && hasEnum && hasFormatRadio) {
        return number_enum_radio;
      }
    }, function (schema) {
      var hasNumericType = utils.hasNumericType(schema);
      var hasEnum = utils.getSchemaEnum(schema);

      if (hasNumericType && hasEnum) {
        return number_enum_select;
      }
    }, function (schema) {
      var hasNumericType = utils.hasNumericType(schema);

      if (hasNumericType) {
        return editors_number;
      }
    }, function (schema) {
      if (schema.type === 'null') {
        return editors_null;
      }
    }];
  }
  /**
   * Adds a resolver function
   */


  createClass_default()(Resolver, [{
    key: "addResolver",
    value: function addResolver(resolver) {
      this.resolvers.unshift(resolver);
    }
    /**
     * returns the first editor class that matches the passed schema.
     */

  }, {
    key: "resolve",
    value: function resolve(schema) {
      var _iterator = _createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var editorClass = resolver(schema);

          if (utils.isSet(editorClass)) {
            return editorClass;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Resolver;
}();

/* harmony default export */ var src_resolver = (resolver_Resolver);
// CONCATENATED MODULE: ./src/validator.js




var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = {
      type: function type(schema, value, path) {
        var types = {
          string: function string(value) {
            return utils.isString(value);
          },
          number: function number(value) {
            return utils.isNumber(value);
          },
          integer: function integer(value) {
            return utils.isInteger(value);
          },
          "boolean": function boolean(value) {
            return utils.isBoolean(value);
          },
          array: function array(value) {
            return utils.isArray(value);
          },
          object: function object(value) {
            return utils.isObject(value);
          },
          "null": function _null(value) {
            return utils.isNull(value);
          }
        };
        var valid = types[schema.type](value);

        if (!valid) {
          return {
            message: 'Must be of type ' + schema.type,
            path: path
          };
        }

        return false;
      },
      uniqueItems: function uniqueItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var uniqueItems = schema.uniqueItems;
        var hasUniqueItemsConstrain = utils.isSet(uniqueItems) && utils.isBoolean(uniqueItems);
        if (!hasUniqueItemsConstrain) return;
        var seen = {};
        var hasDuplicatedItems = false;

        for (var i = 0; i < value.length; i++) {
          var item = JSON.stringify(value[i]);

          if (seen[item]) {
            hasDuplicatedItems = true;
            break;
          }

          seen[item] = true;
        }

        var invalid = hasUniqueItemsConstrain && hasDuplicatedItems;

        if (invalid) {
          return {
            message: 'Must have unique items',
            path: path
          };
        }

        return false;
      },
      minItems: function minItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var minItems = schema.minItems;
        var hasMinItemsConstrain = utils.isSet(minItems) && utils.isNumber(minItems);
        if (!hasMinItemsConstrain) return;
        var invalid = hasMinItemsConstrain && value.length < minItems;

        if (invalid) {
          return {
            message: 'Must have at least ' + minItems + ' items',
            path: path
          };
        }

        return false;
      },
      maxItems: function maxItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var maxItems = schema.maxItems;
        var hasMaxItemsConstrain = utils.isSet(maxItems) && utils.isNumber(maxItems);
        if (!hasMaxItemsConstrain) return;
        var invalid = hasMaxItemsConstrain && value.length > maxItems;

        if (invalid) {
          return {
            message: 'Must have at most ' + maxItems + ' items',
            path: path
          };
        }

        return false;
      },
      minLength: function minLength(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var minLength = schema.minLength;
        var hasMinLengthConstrain = utils.isSet(minLength) && utils.isNumber(minLength);
        if (!hasMinLengthConstrain) return;
        var invalid = hasMinLengthConstrain && value.length < minLength;

        if (invalid) {
          return {
            message: 'Must be at least ' + minLength + ' characters long',
            path: path
          };
        }

        return false;
      },
      maxLength: function maxLength(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var maxLength = schema.maxLength;
        var hasMaxLengthConstrain = utils.isSet(maxLength) && utils.isNumber(maxLength);
        if (!hasMaxLengthConstrain) return;
        var invalid = hasMaxLengthConstrain && value.length > maxLength;

        if (invalid) {
          return {
            message: 'Must be at most ' + maxLength + ' characters long',
            path: path
          };
        }

        return false;
      },
      pattern: function pattern(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var pattern = schema.pattern;
        var hasPatternConstrain = utils.isSet(pattern) && utils.isString(pattern);
        if (!hasPatternConstrain) return;
        var regexp = new RegExp(pattern);
        var matchPattern = regexp.test(value);
        var invalid = hasPatternConstrain && !matchPattern;

        if (invalid) {
          return {
            message: 'Must be the pattern: ' + pattern,
            path: path
          };
        }

        return false;
      },
      minimum: function minimum(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var exclusiveMinimum = schema.exclusiveMinimum;
        var minimum = schema.minimum;
        var hasMinimumConstrain = utils.isSet(minimum) && utils.isNumber(minimum);
        if (!hasMinimumConstrain) return;
        var hasExclusiveMinimumConstrain = utils.isSet(exclusiveMinimum) && exclusiveMinimum === true;
        var finalMinimum = hasExclusiveMinimumConstrain ? minimum + 1 : minimum;
        var invalid = hasMinimumConstrain && value < finalMinimum;

        if (invalid) {
          return {
            message: 'Must be at least ' + finalMinimum,
            path: path
          };
        }

        return false;
      },
      maximum: function maximum(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var exclusiveMaximum = schema.exclusiveMaximum;
        var maximum = schema.maximum;
        var hasMaximumConstrain = utils.isSet(maximum) && utils.isNumber(maximum);
        if (!hasMaximumConstrain) return;
        var hasExclusiveMaximumConstrain = utils.isSet(exclusiveMaximum) && exclusiveMaximum === true;
        var finalMaximum = hasExclusiveMaximumConstrain ? maximum - 1 : maximum;
        var invalid = hasMaximumConstrain && value > finalMaximum;

        if (invalid) {
          return {
            message: 'Must be less than ' + finalMaximum,
            path: path
          };
        }

        return false;
      },
      multipleOf: function multipleOf(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var multipleOf = schema.multipleOf;
        var hasMultipleOfConstrain = utils.isSet(multipleOf) && utils.isNumber(multipleOf);
        if (!hasMultipleOfConstrain) return;
        var isMultipleOf = value / multipleOf === Math.floor(value / multipleOf);
        var invalid = hasMultipleOfConstrain && !isMultipleOf;

        if (invalid) {
          return {
            message: 'Must be multiple of ' + multipleOf,
            path: path
          };
        }

        return false;
      },
      "const": function _const(schema, value, path) {
        var _const = schema["const"];
        var hasConstConstrain = utils.isSet(_const);
        if (!hasConstConstrain) return;
        var valueIsNotEqualConst = JSON.stringify(value) !== JSON.stringify(_const);
        var invalid = hasConstConstrain && valueIsNotEqualConst;

        if (invalid) {
          return {
            message: 'Must have value: ' + _const,
            path: path
          };
        }

        return false;
      },
      "enum": function _enum(schema, value, path) {
        var _enum = schema["enum"];
        var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);
        if (!hasEnumConstrain) return;
        var valueNotInEnum = !_enum.some(function (e) {
          return JSON.stringify(value) === JSON.stringify(e);
        });
        var invalid = hasEnumConstrain && valueNotInEnum;

        if (invalid) {
          return {
            message: 'Value must be one of the enumerated values',
            path: path
          };
        }

        return false;
      }
    };
  }
  /**
   * Adds a validator function
   */


  createClass_default()(Validator, [{
    key: "addValidator",
    value: function addValidator(name, validator) {
      this.validators[name] = validator;
    }
    /**
     * Validates a value against it's schema
     */

  }, {
    key: "validate",
    value: function validate(schema, value, path) {
      var _this = this;

      var errors = [];
      Object.keys(this.validators).forEach(function (key) {
        var validator = _this.validators[key];
        var error = validator(schema, value, path);

        if (error) {
          errors.push(error);
        }
      });
      return errors;
    }
  }]);

  return Validator;
}();

/* harmony default export */ var validator = (validator_Validator);
// CONCATENATED MODULE: ./src/index.js








var src_Jedi = /*#__PURE__*/function () {
  function Jedi(config) {
    classCallCheck_default()(this, Jedi);

    this.theme = new theme();
    this.resolver = new src_resolver();
    this.validator = new validator();
    this.container = config.container;
    this.debug = config.debug || false;
    this.schema = config.schema;
    this.root = null;
    this.editors = {};
    this.logs = config.logs || false;
    this.init();
  }

  createClass_default()(Jedi, [{
    key: "log",
    value: function log() {
      if (this.logs) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
    /**
     * Adds an editor instance in the editors object
     */

  }, {
    key: "registerEditor",
    value: function registerEditor(editor) {
      this.editors[editor.path] = editor;
    }
    /**
     * Removes an editor instance from the editors object
     */

  }, {
    key: "unregisterEditor",
    value: function unregisterEditor(editor) {
      this.editors[editor.path] = null;
      delete this.editors[editor.path];
    }
    /**
     * Loads schemas recursively when "$ref" is set
     * @param schema
     * @return {Promise<unknown>}
     */

  }, {
    key: "resolveRefs",
    value: function resolveRefs(schema) {
      var _this = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(resolve) {
          var response, newSchema;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (schema.$ref) {
                    _context.next = 4;
                    break;
                  }

                  resolve(schema);
                  _context.next = 12;
                  break;

                case 4:
                  _this.log('resolving $ref', schema.$ref);

                  _context.next = 7;
                  return window.fetch(schema.$ref);

                case 7:
                  response = _context.sent;
                  _context.next = 10;
                  return response.json();

                case 10:
                  newSchema = _context.sent;
                  resolve(_this.resolveRefs(newSchema));

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolveRefs(this.schema);

              case 2:
                this.schema = _context2.sent;
                this.root = this.createEditor({
                  jedi: this,
                  schema: this.schema
                });
                this.container.appendChild(this.root.container);
                this.container.classList.add('jedi-loaded');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * Creates an editor instance based on the passed schema and config
     */

  }, {
    key: "createEditor",
    value: function createEditor(config) {
      var EditorClass = this.resolver.resolve(config.schema);
      var editor = new EditorClass(config);
      this.log('created editor', editor.path);
      return editor;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.root.getValue();
    }
  }, {
    key: "getEditor",
    value: function getEditor(path) {
      return this.editors[path];
    }
  }]);

  return Jedi;
}();

/* harmony default export */ var src = __webpack_exports__["default"] = (src_Jedi);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUaGVtZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJtZXNzYWdlIiwiZXJyb3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicGF0aCIsImdldEF0dHJpYnV0ZSIsInNlbGVjdG9yIiwiZXJyb3JzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwidGV4dCIsImJ1dHRvbiIsImxhYmVsVGV4dCIsImxhYmVsIiwic2V0QXR0cmlidXRlcyIsImlucHV0Iiwib3B0aW9uVmFsdWVzIiwib3B0aW9uc0xhYmVscyIsInJhZGlvR3JvdXBOYW1lIiwicmFkaW9Hcm91cCIsImdldENvbnRhaW5lciIsInZhbHVlIiwiaW5kZXgiLCJnZXRMYWJlbCIsInJhZGlvIiwiZ2V0SW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwic2VsZWN0SWQiLCJzZWxlY3QiLCJvcHRpb24iLCJvdXRwdXQiLCJVdGlscyIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYSIsImIiLCJpc051bWJlciIsIk1hdGgiLCJmbG9vciIsIkFycmF5IiwiaXNBcnJheSIsImlzTnVsbCIsInNjaGVtYSIsIm9wdGlvbnMiLCJlbnVtVGl0bGVzIiwidGl0bGUiLCJmb3JtYXQiLCJFZGl0b3IiLCJjb25maWciLCJqZWRpIiwidW5kZWZpbmVkIiwicGFyZW50IiwiZGVidWdDb250YWluZXIiLCJjaGlsZEVkaXRvcnMiLCJpbml0Iiwic2V0Q29udGFpbmVyIiwiYnVpbGQiLCJzZXREZWZhdWx0VmFsdWUiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInJlZ2lzdGVyIiwic3BsaXQiLCJwb3AiLCJ0aGVtZSIsImRlYnVnIiwiZ2V0RGVidWdDb250YWluZXIiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJkZWZhdWxJc0RlZmluZWQiLCJ1dGlscyIsImlzU2V0Iiwic2V0VmFsdWUiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJvbkNoYW5nZSIsInJlZnJlc2hVSSIsInJlZnJlc2hEZWJ1ZyIsImdldFZhbHVlIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsIm9uQ2hpbGRFZGl0b3JDaGFuZ2UiLCJ1bnJlZ2lzdGVyIiwiQXJyYXlFZGl0b3IiLCJnZXRTY2hlbWFUaXRsZSIsImFkZEJ0biIsImdldEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtIiwiaXRlbUVkaXRvciIsImNyZWF0ZUVkaXRvciIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZ2V0S2V5IiwiY2xvbmUiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUVkaXRvciIsInB1c2giLCJkZXN0cm95Iiwid2luZG93IiwiY29uZmlybSIsImN1cnJlbnRWYWx1ZSIsImZpbHRlciIsImVkaXRvciIsIkJvb2xlYW5FZGl0b3IiLCJjaGVja2VkIiwiQm9vbGVhbiIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2NoZW1hRW51bVRpdGxlcyIsImdldFNlbGVjdCIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJnZXRSYWRpb0dyb3VwIiwicmFkaW9JbnB1dHMiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwiT2JqZWN0RWRpdG9yIiwicHJvcGVydGllcyIsInByb3AiLCJjaGlsZEVkaXRvciIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJnZXRTY2hlbWFFbnVtIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bGxFZGl0b3IiLCJSZXNvbHZlciIsInJlc29sdmVycyIsImhhc0Zvcm1hdFJhZGlvIiwiaGFzRm9ybWF0U2VsZWN0IiwiaGFzRW51bSIsImhhc051bWVyaWNUeXBlIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwidHlwZXMiLCJzdHJpbmciLCJpc1N0cmluZyIsIm51bWJlciIsImludGVnZXIiLCJpc0ludGVnZXIiLCJpc0Jvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsImlzT2JqZWN0IiwidmFsaWQiLCJ1bmlxdWVJdGVtcyIsImlzQXJyYXlUeXBlIiwiaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4iLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsImludmFsaWQiLCJtaW5JdGVtcyIsImhhc01pbkl0ZW1zQ29uc3RyYWluIiwibWF4SXRlbXMiLCJoYXNNYXhJdGVtc0NvbnN0cmFpbiIsIm1pbkxlbmd0aCIsImlzU3RyaW5nVHlwZSIsImhhc01pbkxlbmd0aENvbnN0cmFpbiIsIm1heExlbmd0aCIsImhhc01heExlbmd0aENvbnN0cmFpbiIsInBhdHRlcm4iLCJoYXNQYXR0ZXJuQ29uc3RyYWluIiwicmVnZXhwIiwiUmVnRXhwIiwibWF0Y2hQYXR0ZXJuIiwidGVzdCIsIm1pbmltdW0iLCJpc051bWVyaWNUeXBlIiwiZXhjbHVzaXZlTWluaW11bSIsImhhc01pbmltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluIiwiZmluYWxNaW5pbXVtIiwibWF4aW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJoYXNNYXhpbXVtQ29uc3RyYWluIiwiaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiIsImZpbmFsTWF4aW11bSIsIm11bHRpcGxlT2YiLCJoYXNNdWx0aXBsZU9mQ29uc3RyYWluIiwiaXNNdWx0aXBsZU9mIiwiX2NvbnN0IiwiaGFzQ29uc3RDb25zdHJhaW4iLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsIl9lbnVtIiwiaGFzRW51bUNvbnN0cmFpbiIsInZhbHVlTm90SW5FbnVtIiwic29tZSIsImUiLCJKZWRpIiwicm9vdCIsImVkaXRvcnMiLCJsb2dzIiwiY29uc29sZSIsImxvZyIsImFyZ3VtZW50cyIsIlByb21pc2UiLCJyZXNvbHZlIiwiJHJlZiIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwibmV3U2NoZW1hIiwicmVzb2x2ZVJlZnMiLCJFZGl0b3JDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSw0Rzs7Ozs7O0FDbkJBO0FB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Q0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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Q0Usc0JBQWNtRCxNQUFkLEVBQXNCO0FBQ3BCLFVBQU0rSyxXQUFXLEdBQUcsS0FBSzNFLFFBQUwsQ0FBY29FLE9BQWQsQ0FBc0J4SyxNQUFNLENBQUNOLE1BQTdCLENBQXBCO0FBQ0EsVUFBTXlFLE1BQU0sR0FBRyxJQUFLNEcsV0FBTCxDQUFrQi9LLE1BQWxCLENBQWY7QUFDQSxXQUFLcUssR0FBTCxDQUFTLGdCQUFULEVBQTJCbEcsTUFBTSxDQUFDbkgsSUFBbEM7QUFDQSxhQUFPbUgsTUFBUDtBQUNEOzs7V0FFRCxvQkFBWTtBQUNWLGFBQU8sS0FBSzhGLElBQUwsQ0FBVXBJLFFBQVYsRUFBUDtBQUNEOzs7V0FFRCxtQkFBVzdFLElBQVgsRUFBaUI7QUFDZixhQUFPLEtBQUtrTixPQUFMLENBQWFsTixJQUFiLENBQVA7QUFDRDs7Ozs7O0FBR1lnTixpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3IsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lIHtcbiAgc2V0QXR0cmlidXRlcyAoZWxlbWVudCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBhZGRJbnB1dEVycm9yIChjb250YWluZXIsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW55IGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICByZW1vdmVJbnB1dEVycm9yIChjb250YWluZXIpIHtcbiAgICBjb25zdCBwYXRoID0gY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJylcbiAgICBjb25zdCBzZWxlY3RvciA9ICdbZGF0YS1wYXRoPVwiJyArIHBhdGggKyAnXCJdID4gLmplZGktZXJyb3ItbWVzc2FnZSdcbiAgICBjb25zdCBlcnJvcnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QnV0dG9uICh0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldERlYnVnQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJylcbiAgfVxuXG4gIGdldExhYmVsIChsYWJlbFRleHQsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGxhYmVsLCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0SW5wdXQgKGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhpbnB1dCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldFJhZGlvR3JvdXAgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5nZXRDb250YWluZXIoKVxuXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gb3B0aW9uc0xhYmVsc1tpbmRleF1cblxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgICBmb3I6IHJhZGlvR3JvdXBOYW1lICsgJ1snICsgdmFsdWUgKyAnXSdcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHJhZGlvR3JvdXBOYW1lICsgJ1snICsgdmFsdWUgKyAnXScsXG4gICAgICAgIG5hbWU6IHJhZGlvR3JvdXBOYW1lXG4gICAgICB9KVxuXG4gICAgICByYWRpb0dyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgcmFkaW9Hcm91cC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICB9KVxuICAgIHJldHVybiByYWRpb0dyb3VwXG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgc2VsZWN0SWQpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZWN0SWQpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldE91dHB1dCAoYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMob3V0cHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgVXRpbHMge1xuICBjbG9uZSAodGhpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG4gIH1cblxuICBlcXVhbCAoYSwgYikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgfVxuXG4gIGRpZmZlcmVudCAoYSwgYikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgfVxuXG4gIGlzU2V0ICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gIH1cblxuICBpc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgaXNJbnRlZ2VyICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgfVxuXG4gIGlzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICBpc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbCh2YWx1ZSkgJiYgIXRoaXMuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgaXNOdWxsICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxuICB9XG5cbiAgZ2V0U2NoZW1hRW51bVRpdGxlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIChzY2hlbWEgJiYgc2NoZW1hLm9wdGlvbnMgJiYgc2NoZW1hLm9wdGlvbnMuZW51bVRpdGxlcyAmJiB0aGlzLmlzQXJyYXkoc2NoZW1hLm9wdGlvbnMuZW51bVRpdGxlcykpID8gc2NoZW1hLm9wdGlvbnMuZW51bVRpdGxlcyA6IGZhbHNlXG4gIH1cblxuICBnZXRTY2hlbWFFbnVtIChzY2hlbWEpIHtcbiAgICByZXR1cm4gKHNjaGVtYSAmJiBzY2hlbWEuZW51bSAmJiB0aGlzLmlzQXJyYXkoc2NoZW1hLmVudW0pKSA/IHNjaGVtYS5lbnVtIDogZmFsc2VcbiAgfVxuXG4gIGdldFNjaGVtYVRpdGxlIChzY2hlbWEpIHtcbiAgICByZXR1cm4gKHNjaGVtYSAmJiBzY2hlbWEudGl0bGUpID8gc2NoZW1hLnRpdGxlIDogJydcbiAgfVxuXG4gIGhhc051bWVyaWNUeXBlIChzY2hlbWEpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgfVxuXG4gIGhhc0Zvcm1hdFJhZGlvIChzY2hlbWEpIHtcbiAgICByZXR1cm4gc2NoZW1hLmZvcm1hdCAmJiBzY2hlbWEuZm9ybWF0ID09PSAncmFkaW8nXG4gIH1cblxuICBoYXNGb3JtYXRTZWxlY3QgKHNjaGVtYSkge1xuICAgIHJldHVybiBzY2hlbWEuZm9ybWF0ICYmIHNjaGVtYS5mb3JtYXQgPT09ICdzZWxlY3QnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFV0aWxzKClcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5kZWJ1Z0NvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5yZWdpc3RlcigpXG4gIH1cblxuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5zY2hlbWEudHlwZSlcblxuICAgIGlmICh0aGlzLmplZGkuZGVidWcpIHtcbiAgICAgIHRoaXMuZGVidWdDb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RGVidWdDb250YWluZXIoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kZWJ1Z0NvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnVpbGQgdGhlIGVkaXRvcidzIHVzZXIgaW50ZXJmYWNlXG4gICAqL1xuICBidWlsZCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBzY2hlbWEuZGVmYXVsdCBpcyBub3QgZGlmZW4sIHNldHMgYW4gaW5pdGlhbCB2YWx1ZSBiYXNlZCBvbiBpdCdzIHR5cGUuXG4gICAqIElmIGVudW0gaXMgZGVmaW5lZCBhbmQgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRlZmluZWQgc2V0IHRoZSBmaXJzdCBpdGVtIG9mXG4gICAqIHRoZSBlbnVtIGFscyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG5cbiAgICBjb25zdCBkZWZhdWxJc0RlZmluZWQgPSB1dGlscy5pc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KVxuICAgIGlmIChkZWZhdWxJc0RlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICAgIH1cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIHVubGVzcyB0cmlnZ2Vyc0NoYW5nZSBpcyBleHBsaWNpdGx5IHNldCB0byBmYWxzZS4gVGhpcyBpc1xuICAgKiB1c2VmdWwgZm9yIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZXMuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgIHRoaXMucmVmcmVzaERlYnVnKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaERlYnVnICgpIHtcbiAgICBpZiAodGhpcy5qZWRpLmRlYnVnKSB7XG4gICAgICB0aGlzLmRlYnVnQ29udGFpbmVyLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpLCBudWxsLCAyKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEsIHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5wYXRoKVxuICAgIHRoaXMuamVkaS50aGVtZS5yZW1vdmVJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5qZWRpLnRoZW1lLmFkZElucHV0RXJyb3IodGhpcy5jb250YWluZXIsIGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5vbkNoaWxkRWRpdG9yQ2hhbmdlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgYSBjaGlsZCBlZGl0b3IgY2hhbmdlcy4gVGhpcyBpcyByZWxldmFudCBmb3IgQXJyYXlcbiAgICogYW5kIE9iamVjdCBlZGl0b3JzLlxuICAgKi9cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignYWRkJylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUVkaXRvciAoKSB7XG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGlmIChpdGVtRWRpdG9yLmlucHV0KSB7XG4gICAgICBpdGVtRWRpdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICAgIHZhbHVlW2l0ZW1JbmRleF0gPSB1dGlscy5jbG9uZShpdGVtRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2RlbGV0ZScpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgdXAnKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSBkb3duJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHRoaXMuZ2V0VmFsdWUoKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgICBpdGVtRWRpdG9yLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHV0aWxzLmdldFNjaGVtYUVudW1UaXRsZXModGhpcy5zY2hlbWEpIHx8IG9wdGlvblZhbHVlc1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB1dGlscy5nZXRTY2hlbWFUaXRsZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdXRpbHMuZ2V0U2NoZW1hRW51bVRpdGxlcyh0aGlzLnNjaGVtYSkgfHwgb3B0aW9uVmFsdWVzXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgICBjb25zdCByYWRpbyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyB2YWx1ZSArICdcIl0nKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXG4gICAgfSlcblxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gY2hpbGQgZWRpdG9yc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF1cbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBwcm9wLFxuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICB0aGlzLnZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2NvbG9yJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ21vbnRoJywgJ3NlYXJjaCcsICd0ZWwnLCAndGV4dCcsICd0aW1lJywgJ3VybCcsICd3ZWVrJ11cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHV0aWxzLmdldFNjaGVtYVRpdGxlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB1dGlscy5nZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB1dGlscy5nZXRTY2hlbWFFbnVtVGl0bGVzKHRoaXMuc2NoZW1hKSB8fCBvcHRpb25WYWx1ZXNcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB1dGlscy5nZXRTY2hlbWFUaXRsZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdXRpbHMuZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdXRpbHMuZ2V0U2NoZW1hRW51bVRpdGxlcyh0aGlzLnNjaGVtYSkgfHwgb3B0aW9uVmFsdWVzXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIGNvbnN0IHJhZGlvID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIHRoaXMuZ2V0VmFsdWUoKSArICdcIl0nKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXG4gICAgfSlcblxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB1dGlscy5nZXRTY2hlbWFUaXRsZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHV0aWxzLmdldFNjaGVtYVRpdGxlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB1dGlscy5nZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB1dGlscy5nZXRTY2hlbWFFbnVtVGl0bGVzKHRoaXMuc2NoZW1hKSB8fCBvcHRpb25WYWx1ZXNcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB1dGlscy5nZXRTY2hlbWFUaXRsZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdXRpbHMuZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdXRpbHMuZ2V0U2NoZW1hRW51bVRpdGxlcyh0aGlzLnNjaGVtYSkgfHwgb3B0aW9uVmFsdWVzXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIGNvbnN0IHJhZGlvID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIHRoaXMuZ2V0VmFsdWUoKSArICdcIl0nKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXG4gICAgfSlcblxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5oYXNGb3JtYXRSYWRpbyhzY2hlbWEpXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0U2VsZWN0ID0gdXRpbHMuaGFzRm9ybWF0U2VsZWN0KHNjaGVtYSlcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgaGFzRm9ybWF0U2VsZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0VudW0gPSB1dGlscy5nZXRTY2hlbWFFbnVtKHNjaGVtYSlcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5oYXNGb3JtYXRSYWRpbyhzY2hlbWEpXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgaGFzRW51bSAmJiBoYXNGb3JtYXRSYWRpbykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaGFzRW51bSA9IHV0aWxzLmdldFNjaGVtYUVudW0oc2NoZW1hKVxuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIGhhc0VudW0pIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBoYXNOdW1lcmljVHlwZSA9IHV0aWxzLmhhc051bWVyaWNUeXBlKHNjaGVtYSlcbiAgICAgICAgY29uc3QgaGFzRW51bSA9IHV0aWxzLmdldFNjaGVtYUVudW0oc2NoZW1hKVxuICAgICAgICBjb25zdCBoYXNGb3JtYXRSYWRpbyA9IHV0aWxzLmhhc0Zvcm1hdFJhZGlvKHNjaGVtYSlcbiAgICAgICAgaWYgKGhhc051bWVyaWNUeXBlICYmIGhhc0VudW0gJiYgaGFzRm9ybWF0UmFkaW8pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc051bWVyaWNUeXBlID0gdXRpbHMuaGFzTnVtZXJpY1R5cGUoc2NoZW1hKVxuICAgICAgICBjb25zdCBoYXNFbnVtID0gdXRpbHMuZ2V0U2NoZW1hRW51bShzY2hlbWEpXG4gICAgICAgIGlmIChoYXNOdW1lcmljVHlwZSAmJiBoYXNFbnVtKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaGFzTnVtZXJpY1R5cGUgPSB1dGlscy5oYXNOdW1lcmljVHlwZShzY2hlbWEpXG4gICAgICAgIGlmIChoYXNOdW1lcmljVHlwZSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICByZXR1cm4gTnVsbEVkaXRvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSByZXNvbHZlciBmdW5jdGlvblxuICAgKi9cbiAgYWRkUmVzb2x2ZXIgKHJlc29sdmVyKSB7XG4gICAgdGhpcy5yZXNvbHZlcnMudW5zaGlmdChyZXNvbHZlcilcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmaXJzdCBlZGl0b3IgY2xhc3MgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2NoZW1hLlxuICAgKi9cbiAgcmVzb2x2ZSAoc2NoZW1hKSB7XG4gICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgY29uc3QgZWRpdG9yQ2xhc3MgPSByZXNvbHZlcihzY2hlbWEpXG4gICAgICBpZiAodXRpbHMuaXNTZXQoZWRpdG9yQ2xhc3MpKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JDbGFzc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZXJyb3Igb2JqZWN0IGlmIHRoZSB0aGUgdmFsaWRhdGlvbiBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRvcnMgPSB7XG4gICAgICB0eXBlOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgICAgICBzdHJpbmc6IHZhbHVlID0+IHV0aWxzLmlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgICBudW1iZXI6IHZhbHVlID0+IHV0aWxzLmlzTnVtYmVyKHZhbHVlKSxcbiAgICAgICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiB1dGlscy5pc0ludGVnZXIodmFsdWUpLFxuICAgICAgICAgIGJvb2xlYW46IHZhbHVlID0+IHV0aWxzLmlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgICAgYXJyYXk6IHZhbHVlID0+IHV0aWxzLmlzQXJyYXkodmFsdWUpLFxuICAgICAgICAgIG9iamVjdDogdmFsdWUgPT4gdXRpbHMuaXNPYmplY3QodmFsdWUpLFxuICAgICAgICAgIG51bGw6IHZhbHVlID0+IHV0aWxzLmlzTnVsbCh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGVdKHZhbHVlKVxuXG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgdW5pcXVlSXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHVuaXF1ZUl0ZW1zID0gc2NoZW1hLnVuaXF1ZUl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQodW5pcXVlSXRlbXMpICYmIHV0aWxzLmlzQm9vbGVhbih1bmlxdWVJdGVtcylcbiAgICAgICAgaWYgKCFoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiAmJiBoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbkl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtaW5JdGVtcyA9IHNjaGVtYS5taW5JdGVtc1xuICAgICAgICBjb25zdCBoYXNNaW5JdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbkl0ZW1zKSAmJiB1dGlscy5pc051bWJlcihtaW5JdGVtcylcbiAgICAgICAgaWYgKCFoYXNNaW5JdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluSXRlbXNDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoIDwgbWluSXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgbWluSXRlbXMgKyAnIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtYXhJdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4SXRlbXMgPSBzY2hlbWEubWF4SXRlbXNcbiAgICAgICAgY29uc3QgaGFzTWF4SXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhJdGVtcykgJiYgdXRpbHMuaXNOdW1iZXIobWF4SXRlbXMpXG4gICAgICAgIGlmICghaGFzTWF4SXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heEl0ZW1zQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgbWF4SXRlbXMgKyAnIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5MZW5ndGg6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IHNjaGVtYS5taW5MZW5ndGhcbiAgICAgICAgY29uc3QgaGFzTWluTGVuZ3RoQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWluTGVuZ3RoKSAmJiB1dGlscy5pc051bWJlcihtaW5MZW5ndGgpXG4gICAgICAgIGlmICghaGFzTWluTGVuZ3RoQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5MZW5ndGhDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBtaW5MZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4TGVuZ3RoOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtYXhMZW5ndGggPSBzY2hlbWEubWF4TGVuZ3RoXG4gICAgICAgIGNvbnN0IGhhc01heExlbmd0aENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heExlbmd0aCkgJiYgdXRpbHMuaXNOdW1iZXIobWF4TGVuZ3RoKVxuICAgICAgICBpZiAoIWhhc01heExlbmd0aENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4TGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBtYXhMZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgcGF0dGVybjogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHNjaGVtYS5wYXR0ZXJuXG4gICAgICAgIGNvbnN0IGhhc1BhdHRlcm5Db25zdHJhaW4gPSB1dGlscy5pc1NldChwYXR0ZXJuKSAmJiB1dGlscy5pc1N0cmluZyhwYXR0ZXJuKVxuICAgICAgICBpZiAoIWhhc1BhdHRlcm5Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9IHJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc1BhdHRlcm5Db25zdHJhaW4gJiYgIW1hdGNoUGF0dGVybilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHBhdHRlcm4sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluaW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bVxuICAgICAgICBjb25zdCBtaW5pbXVtID0gc2NoZW1hLm1pbmltdW1cbiAgICAgICAgY29uc3QgaGFzTWluaW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbmltdW0pICYmIHV0aWxzLmlzTnVtYmVyKG1pbmltdW0pXG4gICAgICAgIGlmICghaGFzTWluaW11bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChleGNsdXNpdmVNaW5pbXVtKSAmJiBleGNsdXNpdmVNaW5pbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWluaW11bSA9IGhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4gPyBtaW5pbXVtICsgMSA6IG1pbmltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5pbXVtQ29uc3RyYWluICYmIHZhbHVlIDwgZmluYWxNaW5pbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBmaW5hbE1pbmltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4aW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICBjb25zdCBtYXhpbXVtID0gc2NoZW1hLm1heGltdW1cbiAgICAgICAgY29uc3QgaGFzTWF4aW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heGltdW0pICYmIHV0aWxzLmlzTnVtYmVyKG1heGltdW0pXG4gICAgICAgIGlmICghaGFzTWF4aW11bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChleGNsdXNpdmVNYXhpbXVtKSAmJiBleGNsdXNpdmVNYXhpbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWF4aW11bSA9IGhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4gPyBtYXhpbXVtIC0gMSA6IG1heGltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhpbXVtQ29uc3RyYWluICYmIHZhbHVlID4gZmluYWxNYXhpbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgZmluYWxNYXhpbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG11bHRpcGxlT2Y6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtdWx0aXBsZU9mID0gc2NoZW1hLm11bHRpcGxlT2ZcbiAgICAgICAgY29uc3QgaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG11bHRpcGxlT2YpICYmIHV0aWxzLmlzTnVtYmVyKG11bHRpcGxlT2YpXG4gICAgICAgIGlmICghaGFzTXVsdGlwbGVPZkNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIG11bHRpcGxlT2YgPT09IE1hdGguZmxvb3IodmFsdWUgLyBtdWx0aXBsZU9mKSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNdWx0aXBsZU9mQ29uc3RyYWluICYmICFpc011bHRpcGxlT2YpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIG11bHRpcGxlT2YsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgY29uc3Q6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9jb25zdCA9IHNjaGVtYS5jb25zdFxuICAgICAgICBjb25zdCBoYXNDb25zdENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9jb25zdClcbiAgICAgICAgaWYgKCFoYXNDb25zdENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoX2NvbnN0KSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNDb25zdENvbnN0cmFpbiAmJiB2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHZhbHVlOiAnICsgX2NvbnN0LFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGVudW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBpZiAoIWhhc0VudW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCB2YWx1ZU5vdEluRW51bSA9ICFfZW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNFbnVtQ29uc3RyYWluICYmIHZhbHVlTm90SW5FbnVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdWYWx1ZSBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRWYWxpZGF0b3IgKG5hbWUsIHZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9yc1tuYW1lXSA9IHZhbGlkYXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlIChzY2hlbWEsIHZhbHVlLCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cbiAgICBPYmplY3Qua2V5cyh0aGlzLnZhbGlkYXRvcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW2tleV1cbiAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdG9yKHNjaGVtYSwgdmFsdWUsIHBhdGgpXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRvcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKClcbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuICAgIHRoaXMuZGVidWcgPSBjb25maWcuZGVidWcgfHwgZmFsc2VcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmxvZ3MgPSBjb25maWcubG9ncyB8fCBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBsb2cgKCkge1xuICAgIGlmICh0aGlzLmxvZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3VtZW50cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgc2NoZW1hcyByZWN1cnNpdmVseSB3aGVuIFwiJHJlZlwiIGlzIHNldFxuICAgKiBAcGFyYW0gc2NoZW1hXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dW5rbm93bj59XG4gICAqL1xuICByZXNvbHZlUmVmcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGlmICghc2NoZW1hLiRyZWYpIHtcbiAgICAgICAgcmVzb2x2ZShzY2hlbWEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZygncmVzb2x2aW5nICRyZWYnLCBzY2hlbWEuJHJlZilcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goc2NoZW1hLiRyZWYpXG4gICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICByZXNvbHZlKHRoaXMucmVzb2x2ZVJlZnMobmV3U2NoZW1hKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgaW5pdCAoKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBhd2FpdCB0aGlzLnJlc29sdmVSZWZzKHRoaXMuc2NoZW1hKVxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1sb2FkZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgY29uc3QgRWRpdG9yQ2xhc3MgPSB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBlZGl0b3IgPSBuZXcgKEVkaXRvckNsYXNzKShjb25maWcpXG4gICAgdGhpcy5sb2coJ2NyZWF0ZWQgZWRpdG9yJywgZWRpdG9yLnBhdGgpXG4gICAgcmV0dXJuIGVkaXRvclxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=