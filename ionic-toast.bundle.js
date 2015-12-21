! function(t, n) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = n);
    else try {
        o.innerHTML = n
    } catch (i) {
        o.innerText = n
    }
}(document, ".ionic_toast {\r\n  color: #FFF;\r\n  cursor: default;\r\n  font-size: 1em;\r\n  display: none;\r\n  border-radius: 2px;\r\n  opacity: 1;\r\n  padding: 10px 25px;\r\n  margin: 10px;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  z-index: 9999;\r\n}\r\n\r\n.ionic_toast_top {\r\n  top: 0px;\r\n  background-color: rgba(0, 0, 0, 0.80);\r\n}\r\n\r\n.ionic_toast_middle {\r\n  top: 40%;\r\n}\r\n\r\n.ionic_toast_bottom {\r\n  bottom: 10px;\r\n  background-color: rgba(0, 0, 0, 0.80);\r\n}\r\n\r\n.ionic_toast_close {\r\n  border-radius: 2px;\r\n  color: #CCCCCC;\r\n  cursor: pointer;\r\n  display: none;\r\n  position: absolute;\r\n  right: 4px;\r\n  top: 4px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.toast_close_icon {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n.ionic_toast_sticky .ionic_toast_close {\r\n  display: block;\r\n}\r\n\r\n.ionic_toast_close:active {\r\n  background-color: #555555;}\r\n\r\n.ionic_toast_top_success{\r\n  top: 0px;\r\n  background-color: rgba(124, 190, 66, 0.80);\r\n}\r\n.ionic_toast_top_warning{\r\n  top: 0px;\r\n  background-color: rgba(243, 156, 18,0.80)\r\n}\r\n.ionic_toast_top_danger{\r\n  top: 0px;\r\n  background-color: rgba(208, 2, 27, 0.80);\r\n}"), angular.module("ionic-toast", ["ionic"]).run(["$templateCache", function(t) {
    var n = '<div class="ionic_toast" ng-class="ionicToast.toastClass" ng-style="ionicToast.toastStyle"><span class="ionic_toast_close" ng-click="hide()"><i class="ion-close-round toast_close_icon"></i></span><span ng-bind-html="ionicToast.toastMessage"></span></div>';
    t.put("ionic-toast/templates/ionic-toast.html", n)
}]).provider("ionicToast", function() {
    this.$get = ["$compile", "$document", "$interval", "$rootScope", "$templateCache", "$timeout", function(t, n, o, i, s, e) {
        var a, c = {
                toastClass: "",
                toastMessage: "",
                toastStyle: {
                    display: "none",
                    opacity: 0
                }
            },
            l = {
                top: "ionic_toast_top",
                middle: "ionic_toast_middle",
                bottom: "ionic_toast_bottom",
                top_success: "ionic_toast_top_success",
                top_danger: "ionic_toast_top_danger",
                top_warning: "ionic_toast_top_warning"
            },
            p = i.$new(),
            d = t(s.get("ionic-toast/templates/ionic-toast.html"))(p);
        p.ionicToast = c, n.find("body").append(d);
        var r = function(t, n, o) {
            p.ionicToast.toastStyle = {
                display: t,
                opacity: n
            }, p.ionicToast.toastStyle.opacity = n, o && o()
        };
        return p.hide = function() {
            r("none", 0, function() {
                i.$broadcast("ionicToastDismissed")
            })
        }, {
            show: function(t, n, o, i) {
                t && n && i && (e.cancel(a), i > 5e3 && (i = 5e3), angular.extend(p.ionicToast, {
                    toastClass: l[n] + " " + (o ? "ionic_toast_sticky" : ""),
                    toastMessage: t
                }), r("block", 1, function() {
                    o || (a = e(function() {
                        p.hide()
                    }, i))
                }))
            },
            hide: function() {
                p.hide()
            }
        }
    }]
});
