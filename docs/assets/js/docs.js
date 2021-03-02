(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  /* eslint-disable no-undef */
  var prism = function prism() {
    [].forEach.call(document.querySelectorAll('pre code'), function (block) {
      // const html = Prism.highlight(block.innerHTML, Prism.languages.html, 'html')
      var html = block.innerHTML;
      var myArray = html.match(/^\s+/);
      var partten = new RegExp("^" + myArray[0].slice(1), 'mg');
      var className = block.parentNode.getAttribute('class').split('language-')[1];
      html = html.trim();
      html = html.replace(partten, '');
      html = Prism.highlight(html, Prism.languages[className], className);
      block.innerHTML = html;
    });
  };

  var clipBoard = function clipBoard() {
    // 코드 하이라이터 클립보드 기능 추가.
    var btnHtml = '<div class="bd-clipboard"><button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button></div>';
    [].forEach.call(document.querySelectorAll('figure.highlight, div.highlight'), function (element) {
      element.insertAdjacentHTML('beforebegin', btnHtml);
    });
    [].forEach.call(document.querySelectorAll('.btn-clipboard'), function (btn) {
      var tooltipBtn = new WBM.Tooltip(btn);
      btn.addEventListener('mouseleave', function () {
        tooltipBtn.hide();
      });
    });
    var clipboard = new ClipboardJS('.btn-clipboard', {
      target: function target(trigger) {
        return trigger.parentNode.nextElementSibling;
      }
    }); // console.log(clipboard)

    clipboard.on('success', function (e) {
      var tooltipBtn = WBM.Tooltip.getInstance(e.trigger);
      e.trigger.setAttribute('data-original-title', 'Copied');
      tooltipBtn.show();
      e.trigger.setAttribute('data-original-title', 'Copy to clipboard');
      e.clearSelection();
    });
  };

  window.loadCall = null;

  var getPage = function getPage(target) {
    var body = document.querySelector('#content');

    if (target.indexOf('#') !== -1) {
      target = target.split('#')[1];
    }

    $.ajax({
      url: target + ".html"
    }).done(function (data) {
      $(body).html(data); // body.style.height = `${body.getBoundingClientRect().height}px`

      prism();
      clipBoard();
      WBM.initialize();

      loadCall = function loadCall(fn) {
        fn();
      };
    });
  };

  var navi = function navi() {
    var naviEl = document.querySelector('.ly-nav');
    naviEl.addEventListener('click', function (e) {
      if (e.target.nodeName === 'A' && e.target.dataset.toggle) return;
      e.preventDefault();
      var el = e.target;
      var target = el.getAttribute('href');
      window.location.hash = target;
      getPage(target);
    });
  };

  var loadPage = function loadPage() {
    var hash = window.location.hash;
    if (!hash) return;
    getPage(hash);
  };

  var hashChange = function hashChange() {
    window.addEventListener('hashchange', function (e) {
      console.log(e);
      getPage(window.location.hash);
    }, false);
  };

  document.addEventListener('DOMContentLoaded', function () {
    loadPage();
    hashChange() // Pre 코드 치환 및 공백 처리
    ;
    [].forEach.call(document.querySelectorAll('pre code'), function (block) {
      var html = block.innerHTML;
      var myArray = html.match(/^\s+/);
      var partten = new RegExp("^" + myArray[0].slice(1), 'mg');
      console.log(myArray);
      html = html.trim();
      html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      html = html.replace(partten, '');
      block.innerHTML = html;
    });
    var toggleGroup = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]'));

    var collapseFunc = function collapseFunc() {
      var showMenu = function showMenu(target) {
        target.dataset.expanded = 'true';
        var collapse = target.nextElementSibling;
        collapse.className = 'collapsing';
        setTimeout(function () {
          collapse.style.height = collapse.children[0].clientHeight + 10 + "px";
        }, 100);
        collapse.addEventListener('transitionend', function (e) {
          e.target.className = 'collapse show';
        });
      };

      var hideMenu = function hideMenu(target) {
        target.dataset.expanded = 'false';
        var collapse = target.nextElementSibling;
        collapse.className = 'collapsing';
        setTimeout(function () {
          collapse.style.height = '0px';
        }, 100);
        collapse.addEventListener('transitionend', function (e) {
          e.target.className = 'collapse';
        });
      };

      var toggleMenu = function toggleMenu(target) {
        if (target.getAttribute('data-expanded') === 'true') {
          hideMenu(target);
        } else {
          showMenu(target);
        }
      };

      var start = function start() {
        toggleGroup.forEach(function (el) {
          if (el.getAttribute('data-expanded') === 'true') {
            showMenu(el);
          }
        });
      };

      toggleGroup.forEach(function (el) {
        el.addEventListener('click', function (e) {
          toggleMenu(e.currentTarget);
        });
      });
      start();
    };

    collapseFunc();
    navi();
  });

})));
//# sourceMappingURL=docs.js.map
