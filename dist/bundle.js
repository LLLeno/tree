(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _tree = __webpack_require__(/*! ./js/component/tree */ \"./js/component/tree.js\");\n\nvar _tree2 = _interopRequireDefault(_tree);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/** 把组件挂在到window对象 **/\nwindow.Tree = _tree2.default;\n\nexports.default = _tree2.default;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/component/tree.js":
/*!******************************!*\
  !*** ./js/component/tree.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction Tree(obj) {\n    var valueArr = Object.values(obj);\n    this.baseNode = valueArr[0];\n    this.treeData = valueArr[1];\n    this.dblclick = valueArr[2];\n}\n\n/*******************************\r\n* 递归遍历数组生成树状列表方法 *\r\n********************************/\nTree.prototype.initArrayTree = function (data) {\n    var tree = '<ul class=\"ulTree\" id=\"tree-container\">';\n    for (var i in data) {\n        if (data.hasOwnProperty(i)) {\n            tree += '<li id=' + data[i].id + ' class=\"liTree\" >' + data[i].title;\n            if (data[i].children) {\n                tree += this.initArrayTree(data[i].children);\n            }\n            tree += '</li>';\n        }\n    }\n    tree += '</ul>';\n    return tree;\n};\n\n/**********************************\r\n * 递归获取数组内元素的总长度方法 *\r\n **********************************/\nTree.prototype.getArrayLength = function (data) {\n    var arrLength = data.length;\n    for (var i in data) {\n        if (data.hasOwnProperty(i)) {\n            if (data[i].children) {\n                arrLength += this.getArrayLength(data[i].children);\n            }\n        }\n    }\n    return arrLength;\n};\n\n/*************************************************************\r\n * 递归获取元素的所有后代元素，转换为普通数组，此方法暂未用到*\r\n *************************************************************/\nTree.prototype.getChildNode = function (node) {\n    /** 先找到子结点 **/\n    var allLiNodes = [];\n    var nodeList = node.childNodes;\n    /** 把NodeList对象转换为Array对象 **/\n    for (var i = 0, len = nodeList.length; i < len; i++) {\n        allLiNodes.push(nodeList[i]);\n    }\n    for (var _i = 0; _i < nodeList.length; _i++) {\n        /**************************************************************************\r\n         * childNode获取到到的节点包含了各种类型的节点                            *\r\n         * 但是我们只需要元素节点  通过nodeType去判断当前的这个节点是不是元素节点 *\r\n         * ************************************************************************/\n        if (nodeList[_i].nodeType === 1) {\n            allLiNodes = allLiNodes.concat(this.getChildNode(nodeList[_i]));\n        }\n    }\n    return allLiNodes;\n};\n\n/**************************\r\n * 可操作树状列表生成方法 *\r\n **************************/\nTree.prototype.createTree = function () {\n    var data = this.treeData;\n    var node = this.baseNode;\n    var click = this.dblclick;\n\n    /** 消除单击双击冲突用到的定时器 **/\n    var TimeFn = null;\n\n    /** 获取数组元素总个数，设置maxHeight值时会用到 **/\n    var dataLength = this.getArrayLength(data);\n\n    /** 获取树状列表 **/\n    var treeBody = this.initArrayTree(data);\n\n    /** 使用DIV包裹起来 **/\n    node.innerHTML = '<div style=\"width: 180px; border: 1px solid black; height: auto\">' + treeBody + '</div>';\n\n    /** 通过class类添加通用样式样式 **/\n    document.styleSheets[0].addRule('.ulTree', 'background-color: white;margin: 0;');\n    document.styleSheets[0].addRule('.liTree', 'list-style-type: none;height:30px;line-height:30px;transition: all .3s ease 0s;');\n    document.styleSheets[0].addRule('.arrow', 'border:5px solid transparent; border-left:5px solid #000;margin-left:10px;overflow:hidden;height:0;width:0;display:inline-block;');\n    document.styleSheets[0].addRule('.arrow-expend', 'border:5px solid transparent; border-top:5px solid #000;margin-left:10px;overflow:hidden;height:0;width:0;display:inline-block;');\n\n    /** 循环添加组件中ul的样式 **/\n    var ul = document.getElementsByClassName('ulTree');\n    for (var i = 0; i < ul.length; i++) {\n        ul[i].style.cssText = i > 0 ? 'padding-left: 20px;' : '';\n    }\n\n    /** 箭头图标 **/\n    var arrow = '<span class=\"arrow\"></span>';\n\n    /** 循环添加组件中li标签的样式 **/\n    var li = document.getElementsByClassName('liTree');\n    /** 无法通过getElementsByClassName获得的对象动态修改className **/\n    /** 决定列表是否应该隐藏，当列表的父元素的父元素为最外层的DIV时不隐藏 **/\n    for (var _i2 = 0; _i2 < li.length; _i2++) {\n        li[_i2].style.cssText = li[_i2].parentNode.parentNode.nodeName === 'DIV' ? '' : 'max-height:0;overflow:hidden';\n        console.log(li[_i2].className);\n\n        /** 当列表元素可展开时添加箭头图标 **/\n        li[_i2].childNodes.length > 1 ? li[_i2].innerHTML = arrow + li[_i2].innerHTML : li[_i2].style.textIndent = '20px';\n    }\n\n    /*********************************************\r\n     *  监听li元素绑定鼠标移入事件，改变背景颜色 *\r\n     *********************************************/\n    node.addEventListener('mouseover', function (e) {\n        var target = e.target;\n        if (target.nodeName === \"LI\") {\n            e.target.style.backgroundColor = '#4D7FFF';\n        }\n    });\n\n    /********************************************\r\n     * 监听li元素绑定鼠标移出事件，改变背景颜色 *\r\n     ********************************************/\n    node.addEventListener('mouseout', function (e) {\n        var target = e.target;\n        if (target.nodeName === \"LI\") {\n            e.target.style.backgroundColor = '#ffffff';\n        }\n    });\n\n    /*****************************\r\n     *  处理树状列表的展开与隐藏 *\r\n     *****************************/\n    node.addEventListener('click', function (e) {\n        /** 每次点击清理定时器，消除与双击的冲突 **/\n        clearTimeout(TimeFn);\n        /** 200ms内鼠标不点击第二次时执行function **/\n        TimeFn = setTimeout(function () {\n            var target = e.target;\n            /** 保证仅点击的元素为li时才生效操作 **/\n            if (target.nodeName === 'LI') {\n                /** 保证仅点击的元素含有span子元素时才生效操作，改变箭头图标 **/\n                if (target.childNodes[0].nodeName === 'SPAN') {\n                    var _temp = target.childNodes[0];\n                    _temp.className = _temp.className === 'arrow' ? 'arrow-expend' : 'arrow';\n                }\n\n                /*****************************************************************************\r\n                 * 列表的隐藏与展开以及动画，展开/隐藏动画的原理是通过css过渡transition实现的，  *\r\n                 * 动态设定元素的maxHeight时实现过渡效果，当使用height:auto或max_height:auto *\r\n                 *  将无法实现动画，因为浏览器无法从auto值进行过渡                           *\r\n                 *****************************************************************************/\n                /** 不含有子元素时，不进行操作 **/\n                if (target.children.length === 0) {\n                    return false;\n                } else {\n                    var temp_node = target.childNodes[2];\n                    target.style.height = 'auto';\n                    for (var _i3 = 0; _i3 < temp_node.childNodes.length; _i3++) {\n                        var temp_style = temp_node.childNodes[_i3].style;\n                        temp_style.maxHeight = temp_style.maxHeight === '0px' ? 30 * (temp_node.childNodes.length + dataLength) + 'px' : '0px';\n                    }\n                }\n            }\n        }, 200);\n    });\n\n    /****************************\r\n     * 双击打印当前元素内容和id *\r\n     ****************************/\n    node.addEventListener('dblclick', function (e) {\n        clearTimeout(TimeFn);\n        var target = e.target;\n        /** 保证仅点击的元素为li时才生效操作 **/\n        if (target.nodeName === 'LI') {\n            /** 打印点击元素的内容和ID。当前元素存在两种情况，有span节点和无span节点，\r\n             * 有span节点时文本节点位于当前元素子节点的第二位，无span节点时则位于第一位 **/\n            var _data = target.childNodes[0].nodeName === 'SPAN' ? '{title:' + target.childNodes[1].textContent + ',id:' + target.id + '}' : '{title:' + target.childNodes[0].textContent + ',id:' + target.id + '}';\n            click('dblclick', _data);\n        }\n    });\n};\n\nexports.default = Tree;\n\n//# sourceURL=webpack:///./js/component/tree.js?");

/***/ })

/******/ });
});