(function(z){
var f_ = function(a) {
  a.Xh && z.ie(a.Xh);
  a.Xh = null;
  a.Md && a.Md.close();
  a.Md = null;
};
var g_ = function(a, b, c) {
  z.OR.call(this, a);
  this.wo = b;
  this.Md = c;
  this.ua = new z.Jc;
};
var h_ = function(a) {
  z.Ke.call(this);
  this.ca = a;
  this.$ = a.get("dialog");
  this.ua = z.Vc(new z.Jc, function() {
    this.ua = null;
  }, this);
  this.Lq = !1;
  this.wo = "";
};
var i_ = function(a) {
  z.Ke.call(this);
  this.ca = a;
  this.ua = new z.Jc;
  a = window.document.createElement("input");
  a.type = "file";
  a.name = "uploadedFile";
  a.value = "";
  a.style.position = "absolute";
  a.style.left = "-9999px";
  a.style.top = "-9999px";
  this.gb = a;
  this.Lq = !1;
};
var j_ = function() {
  this.Ce = {};
  z.D.call(this, void 0);
};
var k_ = function(a, b, c) {
  return(0,z.K)('\x3cdiv class\x3d"highlightMenu-inner highlightMenu-media"\x3e\x3cul class\x3d"highlightMenu-buttons"\x3e\x3cli class\x3d"highlightMenu-button' + (a.Qm == a.Rh.cF ? " is-active" : "") + '"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"media-transform" data-action-value\x3d"' + z.P(a.Rh.cF) + '"\x3e\x3cspan class\x3d"icon icon--imageInsetLeft"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-button' + (a.Qm == a.Rh.iF ? " is-active" : "") + 
  '"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"media-transform" data-action-value\x3d"' + z.P(a.Rh.iF) + '"\x3e\x3cspan class\x3d"icon icon--imageOutsetLeft"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-button' + (a.Qm == a.Rh.bF ? " is-active" : "") + '"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"media-transform" data-action-value\x3d"' + z.P(a.Rh.bF) + '"\x3e\x3cspan class\x3d"icon icon--imageInsetCenter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' + 
  (a.YB ? '\x3cli class\x3d"highlightMenu-button' + (a.Qm == a.Rh.hF ? " is-active" : "") + '"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"media-transform" data-action-value\x3d"' + z.P(a.Rh.hF) + '"\x3e\x3cspan class\x3d"icon icon--imageOutsetCenter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + (c.variants.use_full_width_images && a.XB ? '\x3cli class\x3d"highlightMenu-button' + (a.Qm == a.Rh.vt ? " is-active" : "") + '"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"media-transform" data-action-value\x3d"' + 
  z.P(a.Rh.vt) + '"\x3e\x3cspan class\x3d"icon icon--imageFillWidth"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + (a.ZB ? '\x3cli class\x3d"highlightMenu-button' + (a.imageLayout == a.kF.YE ? " is-active" : "") + '"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"set-section-background-image" data-action-value\x3d"' + z.P(a.kF.YE) + '"\x3e\x3cspan class\x3d"icon icon--imageFullBleed"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + '\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"highlightMenu-arrowClip"\x3e\x3cspan class\x3d"highlightMenu-arrow"\x3e\x3c/span\x3e\x3c/div\x3e');
};
var l_ = function(a) {
  return(0,z.K)('\x3cdiv class\x3d"highlightMenu-inner"\x3e\x3cul class\x3d"highlightMenu-buttons"\x3e' + (a.EE ? '\x3cli class\x3d"highlightMenu-button highlightMenu-bold"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"bold"\x3e\x3cspan class\x3d"icon icon--bold"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-button highlightMenu-italic"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"italic"\x3e\x3cspan class\x3d"icon icon--italic"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : 
  "") + '\x3cli class\x3d"highlightMenu-button highlightMenu-anchor"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"link"\x3e\x3cspan class\x3d"icon icon--link"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' + (a.Sx ? '\x3cli class\x3d"highlightMenu-button highlightMenu-notes"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icon icon--notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + '\x3c/ul\x3e\x3cdiv class\x3d"highlightMenu-button highlightMenu-linkinput"\x3e\x3cinput class\x3d"highlightMenu-linkinputField" type\x3d"text" placeholder\x3d"Paste or type a link"\x3e\x3c/input\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"cancelLink"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"highlightMenu-arrowClip"\x3e\x3cspan class\x3d"highlightMenu-arrow"\x3e\x3c/span\x3e\x3c/div\x3e');
};
var m_ = function(a) {
  return(0,z.K)('\x3cdiv class\x3d"highlightMenu-inner"\x3e\x3cul class\x3d"highlightMenu-buttons"\x3e' + (a.EE ? '\x3cli class\x3d"highlightMenu-button highlightMenu-bold"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"bold"\x3e\x3cspan class\x3d"icon icon--bold"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-button highlightMenu-italic"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"italic"\x3e\x3cspan class\x3d"icon icon--italic"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : 
  "") + '\x3cli class\x3d"highlightMenu-button highlightMenu-h2"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"h2"\x3e\x3cspan class\x3d"icon icon--h1"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-button highlightMenu-h3"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"h3"\x3e\x3cspan class\x3d"icon icon--h2"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-button highlightMenu-h4"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"h4"\x3e\x3cspan class\x3d"icon icon--h3"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' + 
  (a.$X ? '\x3cli class\x3d"highlightMenu-button highlightMenu-center"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"center"\x3e\x3cspan class\x3d"icon icon--alignCenter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + '\x3cli class\x3d"highlightMenu-button highlightMenu-blockquote"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"blockquote"\x3e\x3cspan class\x3d"icon icon--blockquote"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-button highlightMenu-anchor"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"link"\x3e\x3cspan class\x3d"icon icon--link"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' + 
  (a.Sx ? '\x3cli class\x3d"highlightMenu-button highlightMenu-notes"\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icon icon--notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + '\x3c/ul\x3e\x3cdiv class\x3d"highlightMenu-button highlightMenu-linkinput"\x3e\x3cinput class\x3d"highlightMenu-linkinputField" type\x3d"text" placeholder\x3d"Paste or type a link"\x3e\x3c/input\x3e\x3cbutton class\x3d"button-highlightMenu" data-action\x3d"cancelLink"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"highlightMenu-arrowClip"\x3e\x3cspan class\x3d"highlightMenu-arrow"\x3e\x3c/span\x3e\x3c/div\x3e');
};
var n_ = function(a, b) {
  return a.Zb().filter(function(a) {
    return!!a.X() && !z.yu(a.g());
  }, a)[b];
};
var o_ = function(a) {
  return(0,z.K)('\x3cdiv class\x3d"ie9-dialog"\x3e\x3cform action\x3d"/_/iframe-upload" method\x3d"post" accept-charset\x3d"utf-8" enctype\x3d"multipart/form-data" target\x3d"' + z.P(a.PV) + '"\x3e\x3cp\x3e\x3cinput type\x3d"file" name\x3d"uploadedFile"\x3e\x3c/p\x3e\x3c/form\x3e\x3cdiv class\x3d"spinnerOverlay"\x3e\x3c/div\x3e\x3c/div\x3e');
};
z.$ = function(a, b) {
  return z.aa[a] = b;
};
var p_ = function(a) {
  z.SR(a);
  return a.xm.Db();
};
z.q_ = function(a) {
  z.SR(a);
  return a.kh.Db();
};
var r_ = function(a, b) {
  a.Ek = b;
  return a;
};
var s_ = function(a, b) {
  a.Qu = b;
  return a;
};
var t_ = function(a, b) {
  if (b in a.jk && a.jk[b] in a.lk) {
    return z.bd(a.lk[a.jk[b]]);
  }
  if (!a.Du[b]) {
    var c = z.GV.N({"*":[b]}, a.zO ? {frame:"true"} : void 0);
    a.Du[b] = z.q(z.Vc(a.R.get(c, {oa:!0}), function() {
      delete this.Du[b];
    }, a), function(a) {
      a = z.oH(a.value, a.references);
      a = z.KQ(this, a);
      this.jk[b] = z.it(a, "mediaResourceId");
      return a;
    }, a);
  }
  return a.Du[b].Db();
};
var u_ = function() {
  this.Ce = {};
  z.D.call(this, void 0);
};
z.v_ = function(a) {
  a = z.qQ(j_, a);
  a.collectionUserRelations = a.collectionUserRelations || [];
  return a;
};
z.w_ = function(a, b) {
  a.dy.cancel();
  var c = a.Ga;
  z.t(c, "highlightMenu--measure");
  var d = c.offsetWidth, e = b.left + b.width / 2 - d / 2, g = b.top + -6 - c.offsetHeight;
  e + d > window.document.body.clientWidth ? (e -= d / 2, z.od(c, "far-left", "far-right")) : 0 >= e ? (e += d / 2, z.od(c, "far-right", "far-left")) : z.md(c, ["far-left", "far-right"]);
  z.v(c, "is-flushTop", 0 > g);
  var g = Math.max(g, 0), d = 0, h = z.es(c);
  h && (d = z.fs(h).top);
  c.style.left = Math.round(e) + "px";
  c.style.top = Math.round(g + d) + "px";
  z.sh(c.offsetHeight);
  z.od(c, "highlightMenu--measure", "highlightMenu--active");
  a.Uv = !0;
  a.O("show");
};
z.x_ = function(a) {
  a.Uv && (z.md(a.Ga, ["highlightMenu--active", "highlightMenu--linkMode"]), a.Uv = !1, a.O("hide"));
};
var y_ = function(a, b) {
  var c = z.Fb(b);
  c.Rh = z.uv;
  c.kF = z.rV;
  z.yq(a.Ga, k_, c);
};
z.z_ = function(a, b) {
  var c = b ? z.Fb(b) : {EE:!0, MI:!1};
  z.Hb(c, {Sx:a.Et, $X:!c.MI});
  z.S("variants.editor_block_formatting") ? z.yq(a.Ga, l_, c) : z.yq(a.Ga, m_, c);
};
var A_ = function(a) {
  a = n_(a, 1);
  return(0,z.Ya)(z.yo(a && a.X() || "", 140));
};
var B_ = function(a) {
  a = n_(a, 0);
  return(0,z.Ya)(z.yo(a && a.X() || "", 100));
};
z.C_ = function(a, b, c) {
  return a.cw(b, function() {
    return c;
  });
};
z.D_ = function(a, b) {
  var c = a.wb[b];
  if (!c) {
    throw Error('Called finishLoading on "' + b + '", which looks like it was not in the process of loading.');
  }
  z.q(a.az[b] || z.bd(!0), function() {
    delete this.wb[b];
    delete this.az[b];
    this.lu[b] = !0;
    c.hb(!0);
  }, a);
};
var E_ = function(a, b) {
  for (var c = z.TD(a), d = 0;d < c.length;d++) {
    if (c[d].getName() === b) {
      return d;
    }
  }
  return-1;
};
var F_ = function(a, b) {
  var c = b.start, d = z.Cu(z.Z(a, c.Q), c.offset), c = z.Cu(z.Z(a, c.Q), c.offset + 1);
  if ("\n" == d || "" == d || "\n" == c || "" == c) {
    return null;
  }
  d = z.ks(z.iE(a, b));
  c = b.clone();
  c.start.offset++;
  c.collapse(!0);
  var c = z.iE(a, c), e = z.ks(c);
  if (null == d || null == e || d.y == e.y) {
    return null;
  }
  e.x = Math.min(z.js(c.ib()).left, e.x - 2);
  return e;
};
var G_ = function(a) {
  var b = a.U();
  a = z.KC(b);
  var c;
  if (c = a) {
    c = b.Z(), b = z.Qw(a.ib(), c), a = z.Qw(a.Pb(), c), c = b && b == a ? b : null;
  }
  return c;
};
z.H_ = function(a) {
  a.Py || (a.Py = new z.ht(z.S("currentUser")));
  return a.Py;
};
z.I_ = function(a) {
  return a.bc.xt ? a.bc : null;
};
var J_ = function() {
  this.NE = "";
  this.lN = K_;
};
var L_ = function(a) {
  return a instanceof J_ && a.constructor === J_ && a.lN === K_ ? a.NE : "type_error:Const";
};
var M_ = function(a) {
  return{count:a, ignore:(0,z.Ob)(this.Jb, function(a) {
    return a.get("id");
  })};
};
var N_ = function(a) {
  z.gM.call(this);
  this.Xs = a.get("request");
  this.pd = z.s(new z.Jc, z.Gs);
  this.Wi = 0;
};
var O_ = function(a, b) {
  var c = a.An(b);
  if (null != c && !Array.isArray(c)) {
    throw Error("Malformed processed response");
  }
  return c;
};
z.P_ = function(a) {
  return(0,z.K)(z.O(z.Gp(String(a.wordCount))) + " word" + (1 != a.wordCount ? "s" : ""));
};
var Q_ = function(a) {
  return z.Eh((new z.rl).Lc(a.Pg()).Nn(a.xe()).Mn(a.si()).Hi(a.al()).Gn(a.qj()));
};
z.R_ = function(a, b) {
  return a.querySelector('[name\x3d"' + b + '"]');
};
var S_ = function(a) {
  function b(a) {
    if (z.ha(a)) {
      (0,z.wb)(a, b);
    } else {
      if (!(a instanceof z.Ho)) {
        var g = null;
        a.hK && (g = a.ds());
        a = z.Ko(z.Ca(a.Yw ? a.jn() : String(a)), g);
      }
      d += z.Jo(a);
      a = a.ds();
      0 == c ? c = a : 0 != a && c != a && (c = null);
    }
  }
  var c = 0, d = "";
  (0,z.wb)(arguments, b);
  return z.Ko(d, c);
};
var T_ = function(a) {
  if (1 == a.nodeType) {
    return z.Sg(a);
  }
  var b = z.na(a.JJ), c = a;
  a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.Mg.targetTouches && a.Mg.targetTouches.length && (c = a.Mg.targetTouches[0]);
  return new z.Fd(c.clientX, c.clientY);
};
z.U_ = function(a, b) {
  var c = a.style[z.$a(b)];
  return "undefined" !== typeof c ? c : a.style[z.Kg(a, b)] || "";
};
z.V_ = function() {
  return(0,z.K)("The file you tried to upload is a type we don’t understand. Supported image formats are JPEG, PNG, and GIF. Supported audio formats are MP3, MP4, WEBM, and OGG.");
};
z.W_ = function() {
  var a = z.S("variants.max_upload_size_mb");
  return(0,z.K)("The image you are trying to upload is too big. Please resize it so that it is under " + z.J(a) + "MB.");
};
var X_ = function(a, b) {
  N_.call(this, a);
  this.Ie = b;
  this.lm = null;
  this.Cq = M_;
};
var Y_ = function(a) {
  var b = new z.yE;
  b.Yc = function(b) {
    var d = b.vf(a);
    -1 != d && (z.fE(b, d), z.ZD(b));
  };
  return b;
};
z.Z_ = function() {
  return(0,z.K)("Are you sure you want to leave? Unsaved changes may be lost.");
};
var $_ = function() {
  return(0,z.K)("Oops! We need a title to publish your story.");
};
var a0 = function() {
  var a = z.$O.N();
  return(0,z.K)('View or update your email in your \x3ca href\x3d"' + z.P(z.Q(a)) + '" class\x3d"link link--overlay"\x3eSettings\x3c/a\x3e.');
};
var b0 = function(a) {
  return(0,z.K)("Please enter " + z.J(a.JV) + ".");
};
var c0 = function(a) {
  return z.Wo("Editing " + a.title);
};
var d0 = function(a) {
  return(a = z.Sw(a)) && z.cb(a.childNodes, z.Zw);
};
z.e0 = function(a, b, c) {
  return z.ps(z.lh(a, c), b);
};
z.f0 = function(a) {
  a = a.bn().getBoundingClientRect();
  a = z.is(a);
  if ("mobile safari" == z.S("useragent.browser")) {
    var b = z.gs();
    a.top -= b.top;
    a.left -= b.left;
  }
  return a;
};
z.g0 = function(a) {
  return function(b) {
    b.stopPropagation();
    b.preventDefault();
    return a ? a.call(this, b) : !1;
  };
};
z.h0 = function(a, b) {
  var c = T_(a), d = T_(b);
  return new z.Fd(c.x - d.x, c.y - d.y);
};
z.i0 = function(a, b) {
  z.YG.call(this, a);
  this.Da(new z.ZG);
  this.Da(new z.FE(b));
  this.Da(new z.sH(!1));
  this.Da(new z.$G);
  this.Da(new z.uH(!1));
  this.kf = !0;
};
z.j0 = function(a, b) {
  z.ft.call(this);
  this.ca = a;
  this.Ya = a.get("listStore");
  this.Ab = a.get("modelRequest");
  this.za = a.get("modelStore");
  this.R = a.get("request");
  this.Kd = this.Nq = this.Lz = this.hu = this.qa = this.fa = null;
  this.Em = "saved";
  this.bB = null;
  this.jA = [];
  this.xA = this.yA = this.md = null;
  this.$l = {};
  this.ho = this.ef = this.Me = null;
  var c = b.value, d = !!c.Ca(), e = z.iu(c);
  d || (c.title = "", c.content.subtitle = "", c.content.caption = "", z.bn(e, []), e.Xg([]));
  var d = [], g = z.tq;
  z.nb(d, z.lu(e, c));
  c.coverless = !0;
  z.nb(d, z.mu(e, g, {DC:!0, zY:z.ju(c) && 1 != c.contentType, pW:!0}));
  this.jA = d;
  c.content.bodyModel = e.qc();
  this.yA = c.title;
  this.xA = c.content && c.content.subtitle;
  if (this.md) {
    throw Error("Can only init full post once");
  }
  e = z.St.kb(z.bm, c.content || {});
  d = z.Th.kb(z.An, c.content && c.content && c.content.postDisplay || {});
  c.coverless && (d || (d = new z.An), d.Ml(!0));
  c = (new z.zn).pc(c.title || "").$e(e.Cd()).Jn(e.$k()).Dc(Q_(e.Ic())).In(e.rj()).Oj(d);
  this.md = new z.Tt(c);
  z.GQ(this.za, b);
  this.fa = b.value;
  this.ef = b.importData;
  this.ho = b.collectionUserRelations;
  k0(this);
};
var l0 = function(a, b, c) {
  "merge-error" == a.Em || "editing" == b && "saved" != a.Em && "published" != a.Em || b == a.Em || (a.Em = b, c || a.O("save-state-change"));
};
z.m0 = function(a) {
  return(a = z.n0(a)) && z.Pl(a);
};
z.o0 = function(a) {
  var b = z.n0(a);
  return b ? z.po(b, a.Kd, b.zc().ye(), !1) : "";
};
var p0 = function(a, b) {
  var c = z.qQ(u_, b), d = a.fa, e = a.md.Of, g = e.bb();
  g && d.pc(g);
  g = new z.$m;
  e.Cd() && g.$e(e.Cd());
  e.$k() && g.Jn(e.$k());
  e.Ic() && g.Dc(e.Ic());
  e.rj() && g.In(e.rj());
  e.vj() && g.Oj(e.vj());
  d.ac(z.St.ve(g));
  !a.fa.Ca() && c.value.id && (a.fa.Lc(c.value.id), z.UM(a.za, a.fa));
  z.GQ(a.za, c);
  a.fa = c.value;
  k0(a);
};
var k0 = function(a) {
  a.qa = a.fa && a.fa.Ca() || a.qa;
  if (a.ga() && !a.Me && z.n0(a)) {
    var b = new X_(a.ca, z.uV.N({postId:a.ga()}));
    a.Me = b;
    a.Me.uE(a.eG.bind(a, b));
    var c = a.cv.bind(a);
    a.Me.An = c;
    a.Me.xE(a.eG(b, 50));
  }
  a.hu || (a.hu = a.hd(), a.Lz = z.q0(a), a.Nq = a.isPublished());
};
z.r0 = function(a) {
  var b = a.fa;
  return b ? b.hd() === a.hu && b.fn() === a.Lz : !0;
};
z.n0 = function(a) {
  return a.fa && a.fa.Ca() ? a.fa : null;
};
z.q0 = function(a) {
  return(a = z.n0(a)) ? a.fn() : -1;
};
z.s0 = function(a) {
  z.aD.call(this);
  this.tg = a;
};
var t0 = function(a) {
  var b = a.U().Z(), c = a.tg - z.Tr(b).length;
  b.setAttribute("data-chars-remaining", String(c));
  z.v(b, "display-char-count", c <= .25 * a.tg);
};
z.u0 = function(a, b, c) {
  z.Ke.call(this);
  this.Ks = a;
  this.iD = b;
  this.Jh = c;
  this.WB = (0,z.va)(this.zX, this);
};
var v0 = function() {
  z.aD.call(this);
  this.Uj = null;
  this.FS = new z.u0(this.EH, w0, this);
};
var x0 = function() {
  z.aD.call(this);
};
var y0 = function(a, b, c, d) {
  var e = a.getSelection(), g = e.clone();
  d ? z.yD(e).offset += b : e.isCollapsed() ? (e.start.offset += b, e.end.offset += b) : (c || (z.yD(e).offset += b), e.collapse(-1 === b));
  z0(a, e.start);
  z0(a, e.end);
  e.isCollapsed() ? e.start.Q != g.start.Q && z.Z(a, e.start.Q).Xe() ? z.aE(a, e.start.Q) : z.ZD(a) : z.ZD(a);
};
var z0 = function(a, b) {
  for (var c;0 > b.offset;) {
    b.Q--;
    b.Va(z.AD);
    if (0 > b.Q) {
      return b.Q = 0, b.offset = 0, !0;
    }
    c = z.Z(a, b.Q);
    z.Lu(c) ? b.offset++ : b.offset = c.X().length + b.offset + 1;
  }
  c = z.Z(a, b.Q);
  for (c = b.g() == z.bE ? 0 : c.X().length;b.offset > c;) {
    b.offset = b.offset - c - 1;
    b.Q++;
    var d = b.Q >= a.Za();
    d && (b.Q = a.Za() - 1);
    c = z.Z(a, b.Q);
    b.Va(c.Xe() ? z.bE : z.AD);
    c = z.Lu(c) ? 0 : c.X().length;
    if (d) {
      return b.offset = c, !0;
    }
  }
  return!1;
};
z.$L = function(a) {
  this.Q = a;
  this.source = "unknown";
  this.Ws = this.$s = this.jt = !1;
};
var A0 = function(a, b) {
  a.Q = b;
  return a;
};
var B0 = function(a, b) {
  a.jt = b;
  return a;
};
var C0 = function() {
  return(0,z.K)('\x3cul class\x3d"highlightMenu-stacked u-backgroundWhite js-formatMenu"\x3e\x3cli class\x3d"highlightMenu-stackedItem js-grafMenuHeader"\x3e\x3cdiv class\x3d"highlightMenu-indicators"\x3e\x3cdiv class\x3d"highlightMenu-indicator highlightMenu-indicator--h2"\x3e\x3c/div\x3e\x3cdiv class\x3d"highlightMenu-indicator highlightMenu-indicator--h3"\x3e\x3c/div\x3e\x3cdiv class\x3d"highlightMenu-indicator highlightMenu-indicator--h4"\x3e\x3c/div\x3e\x3c/div\x3e\x3cbutton class\x3d"button button--chromeless button--uppercase button--withIconTop" data-action\x3d"format-command" data-action-value\x3d"header"\x3e\x3cspan class\x3d"icon icon--tt"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-stackedItem js-grafMenuQuote"\x3e\x3cdiv class\x3d"highlightMenu-indicators"\x3e\x3cdiv class\x3d"highlightMenu-indicator highlightMenu-indicator--pq"\x3e\x3c/div\x3e\x3cdiv class\x3d"highlightMenu-indicator highlightMenu-indicator--bq"\x3e\x3c/div\x3e\x3c/div\x3e\x3cbutton class\x3d"button button--chromeless button--uppercase button--withIconTop" data-action\x3d"format-command" data-action-value\x3d"quote"\x3e\x3cspan class\x3d"icon icon--blockquote"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-stackedItem js-grafMenuCenter"\x3e\x3cbutton class\x3d"button button--chromeless button--uppercase button--withIconTop" data-action\x3d"format-command" data-action-value\x3d"center"\x3e\x3cspan class\x3d"icon icon--alignCenter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-stackedItem"\x3e\x3cbutton class\x3d"button button--chromeless button--uppercase button--withIconTop" data-action\x3d"insert-command" data-action-value\x3d"image"\x3e\x3cspan class\x3d"icon icon--addLogo"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-stackedItem"\x3e\x3cbutton class\x3d"button button--chromeless button--uppercase button--withIconTop" data-action\x3d"insert-command" data-action-value\x3d"embed"\x3e\x3cspan class\x3d"icon icon--embed"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"highlightMenu-stackedItem"\x3e\x3cbutton class\x3d"button button--chromeless button--uppercase button--withIconTop" data-action\x3d"insert-command" data-action-value\x3d"hr"\x3e\x3cspan class\x3d"icon icon--textUnder"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e');
};
var D0 = function() {
  z.vt.call(this);
  this.Sq = new z.Hd(0, 0);
  this.Id(z.zq(C0));
};
var E0 = function(a) {
  z.Wv(a.ea()).H("format-command", function(a) {
    this.O("format-command", a.value);
  }, a).H("insert-command", function(a) {
    this.O("insert-command", a.value);
  }, a);
};
var F0 = function(a) {
  z.aD.call(this);
  this.ca = a;
  this.Pa = a.get("dom-monitor");
  this.Tf = a.get("upload");
  this.va = a.get("screen");
  this.sb = new D0;
  this.Sq = null;
  this.CG = this.Sz = !1;
  this.dh = null;
  this.YN = {};
  this.Eu = (new z.$L(null)).Pj("grafFormatMenu");
  this.oh = [];
};
var G0 = function(a, b) {
  z.v(a.sb.ea(), "is-active", b);
  a.CG = b;
  if (a.CG) {
    var c = a.U().queryCommandValue(H0), d = c.P_6 || c.P_7, e = c.P_2 || c.P_3 || c.P_13, g = a.sb.J(".js-grafMenuHeader");
    a.lf(g, e);
    z.v(g, "is-h2Mode", c.P_2);
    z.v(g, "is-h3Mode", c.P_3);
    z.v(g, "is-h4Mode", c.P_13);
    e = a.sb.J(".js-grafMenuQuote");
    a.lf(e, d);
    z.v(e, "is-blockquoteMode", c.P_6);
    z.v(e, "is-pullquoteMode", c.P_7);
    a.lf(a.sb.J(".js-grafMenuCenter"), 2 == c.TOGGLE_ALIGNMENT);
  }
};
var I0 = function(a) {
  return a.U().Z().querySelectorAll(".defaultValue--prompt");
};
var J0 = function() {
  z.aD.call(this);
};
var K0 = function(a, b) {
  this.Pu = a;
  this.ih = b;
};
var L0 = function(a, b) {
  this.AA = a;
  this.ih = b;
};
var M0 = function(a) {
  z.aD.call(this);
  this.Bu = a.get("media-resource-frames");
  this.wb = new z.ut;
};
var N0 = function(a) {
  z.aD.call(this);
  this.Kb = a;
  this.DS = [a.L("hide", this.uP, this), a.L("update", this.yU, this), a.L("cancelLink", this.qq, this), a.L("h2", this.Gq, this), a.L("h3", this.Gq, this), a.L("h4", this.Gq, this), a.L("center", this.Gq, this), a.L("drop-cap", this.Gq, this), a.L("bold", this.Xt.bind(this, "M_1"), this), a.L("italic", this.Xt.bind(this, "M_2"), this), a.L("blockquote", this.Xt.bind(this, "CYCLE_BLOCKQUOTE"), this), a.L("link", this.Xt.bind(this, "M_3"), this)];
  this.Ga = this.Kb.Z();
  this.L = this.Kb.L.bind(this.Kb);
  this.gb = null;
  this.Ra = [];
  O0(this);
};
var O0 = function(a) {
  0 < a.Ra.length && (z.Nr(a.Ra), a.Ra = []);
  a.gb = a.Mc("input");
  a.gb && (a.Ra.push(z.T(a.gb, "keyup", a.$Q, a)), a.Ra.push(z.T(a.gb, "blur", a.mQ, a)));
};
var P0 = function(a) {
  var b = a.cj, c = (0,z.Ya)(a.gb.value);
  if (b && c) {
    c.match(/^[a-z]+:/i) || c.match(/^\//) || c.match(/^#/) || (c = "http://" + c);
    var d = a.U(), e = z.fD(d).yb(b.start.Q);
    e ? (Q0(a), z.zE(z.WF(e, function(a, d) {
      b.Xe() ? a.href = c : z.Hu(a, z.Ru(b.start.offset, b.end.offset, c, "", ""));
      d.start = d.end = b.end;
    }), d)) : a.qq();
  } else {
    a.qq();
  }
};
var Q0 = function(a) {
  a.cj = null;
  z.x_(a.Kb);
};
var R0 = function(a) {
  this.Wb = a;
};
var S0 = function() {
  z.aD.call(this);
};
var T0 = function(a, b) {
  this.dQ = a;
  this.Xz = b;
};
var U0 = function(a, b) {
  this.VH = a;
  this.vk = b;
  this.Sv = null;
};
var V0 = function(a, b, c) {
  this.dk = a.get("image");
  this.df = b;
  this.Bg = c;
};
var W0 = function(a) {
  var b = a.Bg.Ek || a.Bg.Qu;
  return b ? z.R_(a.df.Z(), b) : null;
};
var X0 = function(a) {
  var b = W0(a);
  return b ? a.Bg.Ek ? b.querySelector(".section-backgroundImage") : b.querySelector("img") : null;
};
var Y0 = function(a) {
  return(a = X0(a)) && a.getAttribute("data-delayed-src") || null;
};
var Z0 = function(a, b) {
  var c = X0(a);
  c && ("IMG" == c.tagName ? c.src = b : c.style.backgroundImage = "url(" + b + ")");
};
var $0 = function(a, b) {
  var c = X0(a), d = W0(a);
  if (c && d) {
    if (c = a.Bg.Ek) {
      if (d = z.fD(a.df), d = z.XD(d, E_(d, c))) {
        d = new U0((new z.ln).bq(b), d.Ba()), z.zE(d, a.df), a.df.dispatchEvent({type:"SECTION_CHANGE", FD:c, mx:c});
      }
    } else {
      d = z.WF(d, function(a) {
        a.Ln(b);
      }.bind(a), !0), z.zE(d, a.df);
    }
  }
};
var a1 = function(a) {
  this.AA = a;
};
var b1 = function(a, b) {
  this.kT = a;
  this.Xz = b;
};
var c1 = function(a) {
  z.aD.call(this);
  this.ca = a;
  this.xq = !1;
  this.Ra = [];
  a = this.sb = new z.tN;
  a.Ga = window.document.createElement("div");
  a.Ga.className = "highlightMenu";
  y_(a, {ZB:!1, YB:!1, XB:!1, Qm:null, imageLayout:null});
  z.wN(a);
};
var d1 = function(a) {
  a = z.fD(a.U());
  var b = a.getSelection();
  return b.Xe() ? a.yb(b.start.Q) : null;
};
var e1 = function(a) {
  var b = a.U().Z().querySelector(".is-mediaFocused");
  b && z.u(b, "is-mediaFocused");
  a.xq = !1;
};
var f1 = function(a) {
  var b = z.pr(3);
  return a >= b;
};
var g1 = function(a, b) {
  var c = z.js(b);
  c.top -= 10;
  z.w_(a.sb, c);
  var c = new z.Bg(c.top - a.sb.Z().offsetHeight - 20, 0, c.top, 0), d = z.es(b);
  z.ms(d, c);
};
var h1 = function() {
  z.aD.call(this);
};
var i1 = function() {
  z.aD.call(this);
};
var j1 = function(a) {
  this.uO = a;
};
var k1 = function(a, b) {
  this.vk = a;
  this.$T = b;
  this.lb = null;
};
var l1 = function(a, b) {
  z.OR.call(this, a);
  this.ca = a;
  this.Le = a.get("request");
  this.FU = b;
  this.ua = null;
  this.hy = !0;
};
var m1 = function() {
  return(0,z.K)('\x3cdiv class\x3d"inlineTooltip2 button-scalableGroup"\x3e\x3cbutton class\x3d"button button--small button--circle button--neutral button--inlineTooltipControl" data-action\x3d"inline-menu" title\x3d"Add an image, video, embed, or new part"\x3e\x3cspan class\x3d"icon icon--addMediaPlus"\x3e\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"inlineTooltip2-menu"\x3e\x3cbutton class\x3d"button button--small button--circle button--neutral button--scale u-transitionSeries" data-action\x3d"inline-menu-image" title\x3d"Add an image"\x3e\x3cspan class\x3d"icon icon--addMediaImage"\x3e\x3c/span\x3e\x3c/button\x3e\x3cbutton class\x3d"button button--small button--circle button--neutral button--scale u-transitionSeries" data-action\x3d"inline-menu-embed" data-action-value\x3d"' + 
  z.P((0,z.K)("Paste a YouTube, Vine, Vimeo, or other video link, and press Enter")) + '" title\x3d"Add a video"\x3e\x3cspan class\x3d"icon icon--addMediaVideo"\x3e\x3c/span\x3e\x3c/button\x3e\x3cbutton class\x3d"button button--small button--circle button--neutral button--scale u-transitionSeries" data-action\x3d"inline-menu-embed" data-action-value\x3d"' + z.P(n1()) + '" title\x3d"Add an embed"\x3e\x3cspan class\x3d"icon icon--addMediaEmbed"\x3e\x3c/span\x3e\x3c/button\x3e\x3cbutton class\x3d"button button--small button--circle button--neutral button--scale u-transitionSeries" data-action\x3d"inline-menu-hr" title\x3d"Add a new part"\x3e\x3cspan class\x3d"icon icon--addMediaPart"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e');
};
var n1 = function() {
  return(0,z.K)("Paste a link to embed content from another site (e.g. Twitter) and press Enter");
};
var o1 = function() {
  return(0,z.K)('\x3cdiv class\x3d"sectionControls"\x3e\x3cdiv class\x3d"sectionControls-opener"\x3e\x3cspan class\x3d"icon icon--more"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"control control-section"\x3e\x3cli class\x3d"control-item"\x3e\x3cbutton class\x3d"button button--chromeless" data-action\x3d"select-background-image" title\x3d"Select background image"\x3e\x3cspan class\x3d"icon icon--partImage"\x3e\x3c/span\x3e\x3cspan class\x3d"u-screenReaderText"\x3eSelect background image\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3cli class\x3d"control-item control-item--removeBackgroundImage"\x3e\x3cbutton class\x3d"button button--chromeless" data-action\x3d"remove-background-image" title\x3d"Remove background image"\x3e\x3cspan class\x3d"icon icon--x"\x3e\x3c/span\x3e\x3cspan class\x3d"u-screenReaderText"\x3eRemove background image\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e');
};
var p1 = function(a) {
  z.aD.call(this);
  this.ca = a;
  this.Tf = a.get("upload");
  this.Pa = a.get("dom-monitor");
  this.$ = a.get("dialog");
  this.Bu = a.get("media-resource-frames");
  this.Nc = z.zq(m1);
  this.pI = this.Nc.querySelector(".button--inlineTooltipControl");
  this.qI = new z.Hd(0, 0);
  this.Pz = !1;
  this.dh = null;
  this.kv = {};
  this.fi = (new z.$L(null)).Pj("tooltip");
  this.oh = [];
};
var q1 = function(a, b) {
  if (!z.S("variants.editor_block_formatting")) {
    var c = z.cD(a), d = G_(a);
    if (d && !c) {
      r1(a);
    } else {
      if (c && d) {
        var e = z.Rw(d), g = (0,z.gb)(e, c), h = 0 < g ? e[g - 1] : null, k = a.U(), l = z.KC(k), g = null;
        k.execCommand(z.IE.kq, c) ? g = c : h && l.isCollapsed() && 0 == z.e0(l, c, !0) && !z.yu(z.kx(c)) && k.execCommand(z.IE.kq, h) && (g = h);
        h = g && z.kx(g);
        if (g && h && (z.zu(h) || 1 == h || 7 == h) && !g.querySelector(".defaultValue--prompt")) {
          c = a.fm(g);
          k = z.Rw(k.Z());
          h = k.indexOf(g);
          if (b || h != a.fi.Q) {
            z.u(a.Nc, "is-active"), z.sh(a.Nc.offsetHeight), s1(a, !1);
          }
          h != a.dh && a.Yl();
          B0(A0(a.fi, k.indexOf(g)), e[0] == g);
          a.Nc.style.top = Math.round(c.top + c.height / 2 - a.qI.height / 2) + "px";
          a.Nc.style.left = Math.round(c.hE) + "px";
          z.v(a.Nc, "is-darkBackgrounded", z.jd(d, "is-darkBackgrounded"));
          z.t(a.Nc, "is-active");
        } else {
          c != g && null != a.dh && a.Yl(), r1(a);
        }
      }
    }
  }
};
var t1 = function(a, b) {
  u1(b.source);
  z.q(a.Tf.Dj(b.$s), a.oB.bind(a, b));
};
var r1 = function(a) {
  B0(A0(a.fi, null), !1);
  s1(a, !1);
  z.u(a.Nc, "is-active");
};
var u1 = function(a) {
  z.U(z.KX, {insertType:a});
};
var s1 = function(a, b) {
  b != a.Pz && (a.Pz = b, z.v(a.Nc, "is-scaled", b), a.pI.title = b ? "Close menu" : "Add an image, video, embed, or new part", b && a.U().ip());
};
var v1 = function(a, b, c, d) {
  var e = b.Q;
  a.dh = e;
  z.zE(z.VF(function(a) {
    c && z.WD(a, e, new z.wu("", 1, ""));
    var b = d, b = String(b), k = z.Z(a, e), l = a.yb(e);
    k.X() || ((k = l.querySelector(".defaultValue")) && z.ie(k), l.setAttribute("data-default-value", b), z.he(l, z.Vd("span", {className:"defaultValue defaultValue--prompt"}, b), 0));
    a.wd(e, 0);
  }, a), a.U());
};
var w1 = function(a, b) {
  z.zE(z.VF(function(a) {
    z.fE(a, b);
    z.ZD(a);
  }, a), a.U());
};
var x1 = function(a, b, c) {
  var d = b.Q;
  b = a.U();
  var e = z.kE(z.fD(b), d).Ba() == d;
  e || c || w1(a, d);
  z.zE(z.VF(function(a) {
    if (c) {
      e && (z.WD(a, d, new z.wu("", 1, "")), d = Math.max(1, d)), z.YD(a, d, new z.ln), a.wd(d - 1, 0);
    } else {
      if (0 == d || d == a.Za()) {
        z.WD(a, d, new z.wu("", 1, "")), d = Math.max(1, d);
      }
      z.YD(a, d, new z.ln);
      a.wd(d, 0);
    }
  }, a), b);
};
var y1 = function(a, b) {
  a.oh.push(b);
  z.Vc(z.q(b.start(), function(a) {
    z.zE(new j1(a.id), this.U());
  }, a), function() {
    z.hb(this.oh, b);
    z.Oe(b);
  }, a);
};
var z1 = function(a, b, c) {
  var d = A1(a, c), e;
  e = b.Q;
  if (b.$s) {
    e = new U0(z.nn(z.xn(new z.ln, 9), 4), e), z.zE(e, d.df), b = e.Sv.getName(), r_(d.Bg, b), d.df.dispatchEvent({type:"SECTION_CHANGE", FD:b, mx:b});
  } else {
    e = new k1(e, b.jt);
    z.zE(e, d.df);
    s_(d.Bg, e.XG);
    e = z.fD(d.df);
    var g = e.vf(W0(d));
    b.Ws && z.zE(Y_(e.yb(g + 1)), d.df);
    B0(A0(b, g + 1), !1).Ws = !1;
  }
  B1(a, c);
  a = z.s(z.q(z.q(c.start(), a.VT.bind(a, c)), a.xz.bind(a, c)), a.bP.bind(a, c));
  z.q(a.Db(), d.OK, d);
  return a;
};
var C1 = function(a, b) {
  var c = [], d;
  for (d = 0;d < b.length;d++) {
    var e;
    e = A1(a, b[d]);
    e = e.Bg.Ek ? null : X0(e) && W0(e);
    if (!e || !z.QR(b[d])) {
      return;
    }
    c.push(e);
  }
  for (d = 0;d < c.length;d++) {
    z.zE(z.WF(c[d], a.rT.bind(a, b[d], 0 == d ? 6 : 7)), a.U());
  }
};
var B1 = function(a, b) {
  z.QR(b) && z.q(z.Wc(z.q(p_(b), function() {
    this.xz(b);
  }, a), z.q_(b)), function(a) {
    Z0(A1(this, b), a);
  }, a);
};
var A1 = function(a, b) {
  return new V0(a.ca, a.U(), b.Bg);
};
var D1 = function(a, b) {
  var c;
  switch(b.Ww) {
    case 413:
      c = z.W_();
      break;
    case 415:
      c = z.V_();
      break;
    default:
      c = (0,z.K)("An error occurred while uploading the image, please try again."), z.$s(b);
  }
  a.$.error(c);
};
var E1 = function(a, b) {
  var c = a.U().Z(), d = c && c.offsetParent;
  if (!d) {
    return null;
  }
  var e = b.clientY - z.js(d).top, d = z.ix(c);
  d.length || (d = [c]);
  var c = F1(a, d, e), g = z.Rw(d[c]).map(a.fm, a);
  if (!g.length) {
    return null;
  }
  for (var g = [g[0].top].concat(g.map(function(a) {
    return a.bottom;
  })), e = G1(g, e), g = B0(new z.$L(null), 0 == e), h = 0;h < c;h++) {
    e += z.Rw(d[h]).length;
  }
  A0(g, e);
  return g;
};
var F1 = function(a, b, c) {
  a = b.map(a.fm, a);
  return H1(a.map(function(a) {
    return c >= a.top && c <= a.bottom ? 0 : Math.min(Math.abs(c - a.top), Math.abs(c - a.bottom));
  }));
};
var G1 = function(a, b) {
  return H1(a.map(function(a) {
    return Math.abs(b - a);
  }));
};
var H1 = function(a) {
  var b = -1, c = window.Infinity;
  a.forEach(function(a, e) {
    a < c && (b = e, c = a);
  });
  return b;
};
var I1 = function(a) {
  z.aD.call(this);
  this.ca = a;
  this.Pa = a.get("dom-monitor");
  this.bf = z.zq(o1);
  this.Uj = "";
};
var J1 = function(a) {
  return E_(z.fD(a.U()), a.Uj);
};
var K1 = function(a, b) {
  var c = z.Gy[b] || 1, d = new z.ln, c = z.A(d, "backgroundColor", c), d = z.xn(z.nn(c, 1), 1), c = a.U(), e = a.Hq(), d = new U0(d, e.Ba());
  z.zE(d, c);
  L1(a, d.Sv);
  M1(a);
};
var L1 = function(a, b) {
  var c = 1 != (z.yn(b) || 1);
  z.u(a.bf, "is-showingColorControls");
  z.v(a.bf, "is-showingRevertControls", c);
  a.AI();
};
var M1 = function(a) {
  z.hz(a.ca.get("screen"), a.bf);
  var b;
  b = z.fD(a.U()).Ac(J1(a));
  b = d0(b);
  a.bf.style.top = z.cs(b).y + "px";
};
var N1 = function(a, b, c, d) {
  z.YG.call(this, b);
  this.ca = a;
  this.Da(new z.EG);
  this.Da(new S0);
  this.Da(new v0);
  this.Da(new x0);
  z.S("variants.inline_editor_comments") && this.Da(new z.wG);
  this.Da(new z.FE(c));
  this.Da(new J0);
  this.Da(new M0(this.ca));
  this.Da(new h1);
  this.Da(new z.sH(!0));
  this.Da(new i1);
  this.Da(new z.uH(!0));
  d && this.Da(new N0(d));
  this.Cu = null;
  z.S("useragent.supportsFileAPI") && (this.Da(new c1(a), !0), this.Cu = new p1(a), this.Da(this.Cu, !0));
  this.Da(new I1(a));
  z.S("variants.editor_block_formatting") && this.Da(new F0(a));
};
z.O1 = function(a, b, c) {
  z.qw.call(this);
  this.ca = a;
  this.va = a.get("screen");
  this.pa = b;
  this.za = a.get("modelStore");
  this.Pa = a.get("dom-monitor");
  this.R = a.get("request");
  this.ra = a.get("app");
  this.$ = a.get("dialog");
  this.Ia = a.get("butter-bar");
  this.md = this.Eo = this.Wd = null;
  this.Gt = 0;
  this.oq = 5E3;
  this.Wu = null;
  this.OG = Math.round(1E4 * Math.random());
  this.sb = c;
  this.Wt = [];
  this.$n = [];
  a = this.ca;
  b = this.J(".postField--body");
  c = this.pa;
  var d;
  (d = !c.fa) || (c = c.fa, d = z.ju(c) && 1 != c.contentType);
  this.Ge = new N1(a, b, d ? "Title\nTell your story…" : "Write a new post…", this.sb);
  P1(this, this.Ge);
  a = this.J(".js-titleEditor");
  b = this.J(".js-subtitleEditor");
  this.mf = new z.i0(a, "Title");
  this.mf.Da(new z.dD(100, !1));
  this.mf.Da(new z.s0(100));
  P1(this, this.mf);
  this.yg = new z.i0(b, "Type an optional subtitle");
  this.yg.Da(new z.dD(140, !1));
  this.yg.Da(new z.s0(140));
  P1(this, this.yg);
  this.hj = !1;
  this.gI = this.lI = "";
  this.ju = !0;
  this.AP = !!this.pa.ga();
};
z.Q1 = function(a) {
  var b = z.n0(a.pa);
  return new z.aN(b || new z.Nl, a.md.Of.rj());
};
var R1 = function(a) {
  return(0,z.Yc)(a.$n, function(a) {
    return a.Kh();
  });
};
var P1 = function(a, b) {
  var c = b.L("change", a.LO.bind(a, b));
  a.$n.push(b);
  a.Wt.push([b, c]);
};
z.S1 = function(a) {
  a.Wd && (a.Wd.cancel(), a.Wd = null, l0(a.pa, "canceled"));
};
z.T1 = function(a) {
  if (R1(a) || a.Wd) {
    return!0;
  }
  U1(a);
  return!!a.md.Bp();
};
z.V1 = function(a) {
  if (a.hj) {
    var b = z.Q1(a), c = B_(b), b = A_(b);
    c != a.mf.Ka() && (a.mf.ac(c), a.lI = a.mf.Ka());
    b != a.yg.Ka() && (a.yg.ac(b), a.gI = a.yg.Ka());
  }
};
var U1 = function(a) {
  var b = z.fD(a.Ge.Aa);
  z.MD(b);
  var c = z.Ut(b.Fc).clone(), d = c.Zb(), e = z.Rw(b.$a.ea()), g = b.Za();
  if (g != e.length || g != d.length) {
    throw new z.OD("paragraph count");
  }
  var h;
  for (h = 0;h < g;h++) {
    var k = e[h];
    if (k != b.yb(h)) {
      throw new z.OD("paragraph element");
    }
    k = z.Eh(z.Iy(k).kb());
    if (!z.Eh(d[h]).Yb(k)) {
      throw new z.OD("paragraph model");
    }
  }
  if (b.qb()) {
    h = b.gl();
    d = z.ix(b.$a.ea());
    e = z.Cy(d);
    c = c.Eb();
    if (h != e.length || h != c.length) {
      throw new z.OD("section count");
    }
    for (h = 0;h < e.length;h++) {
      if (d[h] != b.Ac(h)) {
        throw new z.OD("section element");
      }
      g = z.Eh(c[h]);
      k = z.Eh(e[h]);
      if (!g.Yb(k)) {
        throw new z.OD("section model");
      }
    }
  }
  b.lp();
  if (b.Bp()) {
    b = b.bs(a.Gt);
    for (h = 0;h < b.length;h++) {
      z.Vt(a.md, b[h]);
    }
    a.Gt += b.length;
  }
  !a.hj || a.mf.Ka() == a.lI && a.yg.Ka() == a.gI || (a.hj = !1);
  z.V1(a);
  a.hj || (b = a.md.Of, h = a.mf.Ka(), h != b.bb() && z.Vt(a.md, z.Jt(4).Jd(h)), h = a.yg.Ka(), h != b.Cd() && z.Vt(a.md, z.Jt(5).Jd(h)));
};
z.W1 = function(a) {
  var b = "", b = a.hj ? B_(z.Q1(a)) : a.md ? a.md.Of.bb() : a.pa.yA;
  return(0,z.Ya)(b || "");
};
z.X1 = function(a) {
  var b = "", b = a.hj ? A_(z.Q1(a)) : a.md ? a.md.Of.Cd() : a.pa.xA;
  return(0,z.Ya)(b || "");
};
z.Y1 = function(a) {
  return String(z.xq(c0, {title:z.W1(a) || "Untitled"}));
};
var Z1 = function(a) {
  var b = [];
  a.Ge.Ka() || b.push(z.wM.body.englishName);
  0 === b.length ? b = "" : 1 === b.length ? b = "the " + b[0] : (a = b.pop(), b = "the " + b.join(", the ") + " and the " + a);
  return b;
};
z.$1 = function(a) {
  return a2(a) ? z.s(z.q(a.save(!0), a.CS, a), z.ZK(a.$, (0,z.K)("An error occurred, and we were unable to publish this story."))) : z.cd(Error("Post is invalid"));
};
var a2 = function(a) {
  if (!a.pa.ga() && !z.T1(a)) {
    return a.$.error((0,z.K)("You haven’t written anything yet, so there is nothing to publish!")), !1;
  }
  if (R1(a)) {
    return a.$.open({title:(0,z.K)("You can’t publish yet"), bodyHtml:(0,z.K)("We haven’t finished uploading your image."), type:z.$K}), !1;
  }
  var b = Z1(a);
  return b ? (a.$.open({title:(0,z.K)("You can’t publish yet."), bodyHtml:b0({JV:b}), type:z.$K}), !1) : z.S("currentUser.isVerified") ? z.W1(a) ? !0 : (b2(a), !1) : (a.$.open({title:(0,z.K)("Hold up! Publishing requires a verified email address"), bodyHtml:a0(), type:z.WZ, Wf:(0,z.K)("Resend verification")}).L(z.XK, function() {
    z.mP(this.ca, z.o0(this.pa));
  }, a), !1);
};
var b2 = function(a) {
  z.iR(a.ca.get("popover"));
  var b = a.J(".js-titleEditor"), c = a.J(".js-titleEditorInstructions");
  b && c && (b = new z.dK(b, {name:"shimmy-shake", duration:400}), z.W1(a) || (z.yq(c, $_), z.kd(c, ["is-visible", "u-danger"]), b.start()));
};
z.c2 = function(a, b) {
  z.qw.call(this);
  this.ca = a;
  this.pa = new z.j0(a, b);
  this.Gy = null;
};
z.d2 = function(a, b) {
  a.Gy = new z.O1(a.ca, a.pa, b);
  a.track(a.Gy);
  return a.Gy;
};
z.p(g_, z.OR);
z.f = g_.prototype;
z.f.Xh = null;
z.f.W = function() {
  this.ua.cd || this.ua.cancel();
  f_(this);
  this.ua = null;
  g_.F.W.call(this);
};
z.f.KE = function() {
  this.Md.L(z.jL, this.sQ, this);
  this.Xh = window.document.createElement("iframe");
  this.Xh.setAttribute("style", "position:absolute;top:-9999px;left:-9999px;");
  this.Xh.setAttribute("id", this.wo);
  this.Xh.setAttribute("name", this.wo);
  window.document.body.appendChild(this.Xh);
  z.T(this.Xh, "load", this.br, this);
  this.Md && (this.Md.J("form").submit(), z.t(this.Md.J(".js-overlayDialog"), "is-uploadingImage"));
  return this.ua.Db();
};
z.f.sQ = function() {
  this.ua.cd || this.ua.cancel();
  f_(this);
};
z.f.br = function() {
  var a = z.Tr(this.Xh.contentWindow.document.body);
  a && (this.ua.hb(a), f_(this));
};
z.p(h_, z.Ke);
h_.prototype.Md = null;
h_.prototype.W = function() {
  this.Md && this.Md.close();
  this.Md = null;
  this.ua && this.ua.cancel();
  this.ua = null;
  h_.F.W.call(this);
};
h_.prototype.Dj = z.m(293);
h_.prototype.kA = function(a) {
  a.preventDefault();
  a = [new g_(this.ca, this.wo, this.Md)];
  this.ua.hb(a);
};
z.p(i_, z.Ke);
i_.prototype.W = function() {
  this.ua && this.ua.cancel();
  this.ua = null;
  this.gb && (window.document.body.removeChild(this.gb), this.gb = null);
  i_.F.W.call(this);
};
i_.prototype.Dj = z.m(294);
i_.prototype.jH = z.m(295);
z.p(j_, z.Gn);
z.UR.prototype.Fl = z.$(296, function() {
  return z.q(this.Dj(!0), function(a) {
    return a[0];
  });
});
i_.prototype.jH = z.$(295, function() {
  if (this.gb && this.gb.files && this.gb.files.length) {
    var a = (z.S("variants.upload_multiple_files") ? z.mb(this.gb.files) : [this.gb.files[0]]).map(function(a) {
      return new z.TR(this.ca, a);
    }, this);
    this.ua.hb(a);
  } else {
    this.ua.cancel();
  }
});
i_.prototype.Dj = z.$(294, function(a) {
  if (this.Lq) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Lq = !0;
  z.S("variants.upload_multiple_files") && !a && (this.gb.multiple = !0);
  window.document.body.appendChild(this.gb);
  z.T(this.gb, "change", this.jH, this);
  this.gb.click();
  return z.Vc(this.ua, function() {
    z.Oe(this);
  }, this);
});
h_.prototype.Dj = z.$(293, function() {
  if (this.Lq) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Lq = !0;
  this.wo = "ie9_upload_frame_" + Math.floor(1E3 * Math.random());
  if (this.Md = this.$.open({title:(0,z.K)("Please choose an image"), bodyHtml:o_({PV:this.wo})})) {
    var a = this.Md.J('input[type\x3d"file"]');
    z.T(a, "change", this.kA, this);
  } else {
    this.ua.cancel();
  }
  return z.s(this.ua, function() {
    this.Md && this.Md.close();
    this.Md = null;
  });
});
z.UR.prototype.Dj = z.$(292, function(a) {
  return(z.NW ? new i_(this.ca) : new h_(this.ca)).Dj(a || !z.S("variants.upload_multiple_files"));
});
z.ZP.prototype.uE = z.$(272, function(a) {
  this.Cq = a;
  return this;
});
z.ZP.prototype.xE = z.$(271, function(a) {
  this.lm = a;
});
z.wH.prototype.Qc = z.$(263, function(a, b) {
  (0,z.wb)(this.Gb, a, b);
});
z.gM.prototype.Qc = z.$(262, function(a, b) {
  (0,z.wb)(this.Jb, a, b);
});
z.YG.prototype.Kh = z.$(256, function() {
  return!1;
});
z.Eu.prototype.Ln = z.$(254, function(a) {
  this.lb = a;
});
z.Tt.prototype.lp = z.$(253, function(a) {
  var b = z.bb(this.nd);
  b && !b.selection && this.cp(a);
});
z.JD.prototype.lp = z.$(252, function() {
  this.Fc.lp(this.getSelection());
});
z.Tt.prototype.Bp = z.$(251, function() {
  return this.nd.length > Math.max(0, this.iA);
});
z.JD.prototype.Bp = z.$(250, function() {
  return this.Fc.Bp();
});
z.Ao.prototype.jn = z.$(249, function() {
  return this.YD;
});
z.Eo.prototype.jn = z.$(248, function() {
  return this.Up;
});
z.Ho.prototype.jn = z.$(247, function() {
  return this.Up;
});
z.Gn.prototype.LC = z.$(246, function() {
  return z.y(this, "importData");
});
z.bm.prototype.Jn = z.$(243, function(a) {
  return z.A(this, "caption", a);
});
z.$m.prototype.Jn = z.$(242, function(a) {
  return z.A(this, "caption", a);
});
z.zn.prototype.Jn = z.$(241, function(a) {
  return z.A(this, "caption", a);
});
z.bm.prototype.$k = z.$(240, function() {
  return z.y(this, "caption");
});
z.$m.prototype.$k = z.$(239, function() {
  return z.y(this, "caption");
});
z.zn.prototype.$k = z.$(238, function() {
  return z.y(this, "caption");
});
z.Ql.prototype.$e = z.$(237, function(a) {
  return z.A(this, "subtitle", a);
});
z.Ul.prototype.$e = z.$(236, function(a) {
  return z.A(this, "subtitle", a);
});
z.Yl.prototype.$e = z.$(235, function(a) {
  return z.A(this, "subtitle", a);
});
z.am.prototype.$e = z.$(234, function(a) {
  return z.A(this, "subtitle", a);
});
z.bm.prototype.$e = z.$(233, function(a) {
  return z.A(this, "subtitle", a);
});
z.$m.prototype.$e = z.$(232, function(a) {
  return z.A(this, "subtitle", a);
});
z.zn.prototype.$e = z.$(231, function(a) {
  return z.A(this, "subtitle", a);
});
z.Ql.prototype.Cd = z.$(230, function() {
  return z.y(this, "subtitle");
});
z.Ul.prototype.Cd = z.$(229, function() {
  return z.y(this, "subtitle");
});
z.Yl.prototype.Cd = z.$(228, function() {
  return z.y(this, "subtitle");
});
z.am.prototype.Cd = z.$(227, function() {
  return z.y(this, "subtitle");
});
z.bm.prototype.Cd = z.$(226, function() {
  return z.y(this, "subtitle");
});
z.$m.prototype.Cd = z.$(225, function() {
  return z.y(this, "subtitle");
});
z.zn.prototype.Cd = z.$(224, function() {
  return z.y(this, "subtitle");
});
z.Kj.prototype.Hn = z.$(215, function(a) {
  return z.A(this, "baseVersion", a);
});
z.Vl.prototype.Hn = z.$(214, function(a) {
  return z.A(this, "baseVersion", a);
});
z.Zm.prototype.Hn = z.$(213, function(a) {
  return z.A(this, "baseVersion", a);
});
z.Kj.prototype.Gx = z.$(209, function(a) {
  return z.A(this, "delta", a);
});
z.Vl.prototype.Gx = z.$(208, function(a) {
  return z.A(this, "delta", a);
});
z.Kj.prototype.Ox = z.$(205, function(a) {
  return z.A(this, "savedAt", a);
});
z.Vl.prototype.Ox = z.$(204, function(a) {
  return z.A(this, "savedAt", a);
});
z.Ij.prototype.Pl = z.$(201, function(a) {
  return z.A(this, "rev", a);
});
z.Kj.prototype.Pl = z.$(200, function(a) {
  return z.A(this, "rev", a);
});
z.Vl.prototype.Pl = z.$(199, function(a) {
  return z.A(this, "rev", a);
});
z.Tm.prototype.Pl = z.$(198, function(a) {
  return z.A(this, "rev", a);
});
z.Ij.prototype.Rg = z.$(197, function() {
  return z.y(this, "rev");
});
z.Kj.prototype.Rg = z.$(196, function() {
  return z.y(this, "rev");
});
z.Vl.prototype.Rg = z.$(195, function() {
  return z.y(this, "rev");
});
z.Tm.prototype.Rg = z.$(194, function() {
  return z.y(this, "rev");
});
z.Fj.prototype.Kj = z.$(193, function(a) {
  return z.A(this, "contentType", a);
});
z.Nl.prototype.Kj = z.$(192, function(a) {
  return z.A(this, "contentType", a);
});
z.Yl.prototype.Kj = z.$(191, function(a) {
  return z.A(this, "contentType", a);
});
z.Zm.prototype.Kj = z.$(190, function(a) {
  return z.A(this, "contentType", a);
});
z.Fj.prototype.eq = z.$(189, function(a) {
  return z.A(this, "importedPublishedAt", a);
});
z.Nl.prototype.eq = z.$(188, function(a) {
  return z.A(this, "importedPublishedAt", a);
});
z.Zm.prototype.eq = z.$(187, function(a) {
  return z.A(this, "importedPublishedAt", a);
});
z.Fj.prototype.fq = z.$(186, function(a) {
  return z.A(this, "importedUrl", a);
});
z.Nl.prototype.fq = z.$(185, function(a) {
  return z.A(this, "importedUrl", a);
});
z.Zm.prototype.fq = z.$(184, function(a) {
  return z.A(this, "importedUrl", a);
});
z.Fj.prototype.Fw = z.$(183, function() {
  return z.y(this, "isTitleSynthesized");
});
z.Nl.prototype.Fw = z.$(182, function() {
  return z.y(this, "isTitleSynthesized");
});
z.Fj.prototype.gs = z.$(181, function() {
  return z.y(this, "inResponseToPostId");
});
z.Nl.prototype.gs = z.$(180, function() {
  return z.y(this, "inResponseToPostId");
});
z.Fj.prototype.fn = z.$(179, function() {
  return z.y(this, "latestRev");
});
z.Fk.prototype.fn = z.$(178, function() {
  return z.y(this, "latestRev");
});
z.Nl.prototype.fn = z.$(177, function() {
  return z.y(this, "latestRev");
});
z.Fj.prototype.Ii = z.$(171, function(a) {
  return z.A(this, "latestPublishedVersion", a);
});
z.Hj.prototype.Ii = z.$(170, function(a) {
  return z.A(this, "latestPublishedVersion", a);
});
z.Fk.prototype.Ii = z.$(169, function(a) {
  return z.A(this, "latestPublishedVersion", a);
});
z.Nl.prototype.Ii = z.$(168, function(a) {
  return z.A(this, "latestPublishedVersion", a);
});
z.Yl.prototype.Ii = z.$(167, function(a) {
  return z.A(this, "latestPublishedVersion", a);
});
z.vj.prototype.hd = z.$(157, function() {
  return z.y(this, "versionId");
});
z.wj.prototype.hd = z.$(156, function() {
  return z.y(this, "versionId");
});
z.xj.prototype.hd = z.$(155, function() {
  return z.y(this, "versionId");
});
z.yj.prototype.hd = z.$(154, function() {
  return z.y(this, "versionId");
});
z.Fj.prototype.hd = z.$(153, function() {
  return z.y(this, "versionId");
});
z.Ij.prototype.hd = z.$(152, function() {
  return z.y(this, "versionId");
});
z.Jj.prototype.hd = z.$(151, function() {
  return z.y(this, "versionId");
});
z.Nl.prototype.hd = z.$(150, function() {
  return z.y(this, "versionId");
});
z.Tm.prototype.hd = z.$(149, function() {
  return z.y(this, "versionId");
});
z.rj.prototype.ie = z.$(138, function(a) {
  return z.A(this, "visibility", a);
});
z.sj.prototype.ie = z.$(137, function(a) {
  return z.A(this, "visibility", a);
});
z.Fj.prototype.ie = z.$(136, function(a) {
  return z.A(this, "visibility", a);
});
z.nl.prototype.ie = z.$(135, function(a) {
  return z.A(this, "visibility", a);
});
z.Nl.prototype.ie = z.$(134, function(a) {
  return z.A(this, "visibility", a);
});
z.Yl.prototype.ie = z.$(133, function(a) {
  return z.A(this, "visibility", a);
});
z.pm.prototype.ie = z.$(132, function(a) {
  return z.A(this, "visibility", a);
});
z.Zm.prototype.ie = z.$(131, function(a) {
  return z.A(this, "visibility", a);
});
z.kj.prototype.Ef = z.$(125, function(a) {
  return z.A(this, "acceptedAt", a);
});
z.lj.prototype.Ef = z.$(124, function(a) {
  return z.A(this, "acceptedAt", a);
});
z.vj.prototype.Ef = z.$(123, function(a) {
  return z.A(this, "acceptedAt", a);
});
z.Fj.prototype.Ef = z.$(122, function(a) {
  return z.A(this, "acceptedAt", a);
});
z.Vj.prototype.Ef = z.$(121, function(a) {
  return z.A(this, "acceptedAt", a);
});
z.Nl.prototype.Ef = z.$(120, function(a) {
  return z.A(this, "acceptedAt", a);
});
z.om.prototype.Ef = z.$(119, function(a) {
  return z.A(this, "acceptedAt", a);
});
z.bj.prototype.gc = z.$(109, function(a) {
  return z.A(this, "slug", a);
});
z.gj.prototype.gc = z.$(108, function(a) {
  return z.A(this, "slug", a);
});
z.ij.prototype.gc = z.$(107, function(a) {
  return z.A(this, "slug", a);
});
z.Fj.prototype.gc = z.$(106, function(a) {
  return z.A(this, "slug", a);
});
z.Fk.prototype.gc = z.$(105, function(a) {
  return z.A(this, "slug", a);
});
z.Rk.prototype.gc = z.$(104, function(a) {
  return z.A(this, "slug", a);
});
z.Tk.prototype.gc = z.$(103, function(a) {
  return z.A(this, "slug", a);
});
z.Vk.prototype.gc = z.$(102, function(a) {
  return z.A(this, "slug", a);
});
z.Wk.prototype.gc = z.$(101, function(a) {
  return z.A(this, "slug", a);
});
z.Zk.prototype.gc = z.$(100, function(a) {
  return z.A(this, "slug", a);
});
z.Nl.prototype.gc = z.$(99, function(a) {
  return z.A(this, "slug", a);
});
z.Yl.prototype.gc = z.$(98, function(a) {
  return z.A(this, "slug", a);
});
z.pm.prototype.gc = z.$(97, function(a) {
  return z.A(this, "slug", a);
});
z.wm.prototype.gc = z.$(96, function(a) {
  return z.A(this, "slug", a);
});
z.Rh.prototype.Pg = z.$(79, function() {
  return z.y(this, "imageId");
});
z.Rj.prototype.Pg = z.$(78, function() {
  return z.y(this, "imageId");
});
z.fk.prototype.Pg = z.$(77, function() {
  return z.y(this, "imageId");
});
z.ql.prototype.Pg = z.$(76, function() {
  return z.y(this, "imageId");
});
z.tl.prototype.Pg = z.$(75, function() {
  return z.y(this, "imageId");
});
z.dm.prototype.Pg = z.$(74, function() {
  return z.y(this, "imageId");
});
z.Rh.prototype.aa = z.$(73, function(a) {
  return z.A(this, "userId", a);
});
z.Uh.prototype.aa = z.$(72, function(a) {
  return z.A(this, "userId", a);
});
z.Vh.prototype.aa = z.$(71, function(a) {
  return z.A(this, "userId", a);
});
z.ei.prototype.aa = z.$(70, function(a) {
  return z.A(this, "userId", a);
});
z.Wi.prototype.aa = z.$(69, function(a) {
  return z.A(this, "userId", a);
});
z.Xi.prototype.aa = z.$(68, function(a) {
  return z.A(this, "userId", a);
});
z.Yi.prototype.aa = z.$(67, function(a) {
  return z.A(this, "userId", a);
});
z.Zi.prototype.aa = z.$(66, function(a) {
  return z.A(this, "userId", a);
});
z.$i.prototype.aa = z.$(65, function(a) {
  return z.A(this, "userId", a);
});
z.ej.prototype.aa = z.$(64, function(a) {
  return z.A(this, "userId", a);
});
z.fj.prototype.aa = z.$(63, function(a) {
  return z.A(this, "userId", a);
});
z.nj.prototype.aa = z.$(62, function(a) {
  return z.A(this, "userId", a);
});
z.oj.prototype.aa = z.$(61, function(a) {
  return z.A(this, "userId", a);
});
z.pj.prototype.aa = z.$(60, function(a) {
  return z.A(this, "userId", a);
});
z.qj.prototype.aa = z.$(59, function(a) {
  return z.A(this, "userId", a);
});
z.yj.prototype.aa = z.$(58, function(a) {
  return z.A(this, "userId", a);
});
z.zj.prototype.aa = z.$(57, function(a) {
  return z.A(this, "userId", a);
});
z.Aj.prototype.aa = z.$(56, function(a) {
  return z.A(this, "userId", a);
});
z.Kj.prototype.aa = z.$(55, function(a) {
  return z.A(this, "userId", a);
});
z.Oj.prototype.aa = z.$(54, function(a) {
  return z.A(this, "userId", a);
});
z.Qj.prototype.aa = z.$(53, function(a) {
  return z.A(this, "userId", a);
});
z.Tj.prototype.aa = z.$(52, function(a) {
  return z.A(this, "userId", a);
});
z.Uj.prototype.aa = z.$(51, function(a) {
  return z.A(this, "userId", a);
});
z.ak.prototype.aa = z.$(50, function(a) {
  return z.A(this, "userId", a);
});
z.bk.prototype.aa = z.$(49, function(a) {
  return z.A(this, "userId", a);
});
z.fk.prototype.aa = z.$(48, function(a) {
  return z.A(this, "userId", a);
});
z.gk.prototype.aa = z.$(47, function(a) {
  return z.A(this, "userId", a);
});
z.hk.prototype.aa = z.$(46, function(a) {
  return z.A(this, "userId", a);
});
z.ik.prototype.aa = z.$(45, function(a) {
  return z.A(this, "userId", a);
});
z.jk.prototype.aa = z.$(44, function(a) {
  return z.A(this, "userId", a);
});
z.kk.prototype.aa = z.$(43, function(a) {
  return z.A(this, "userId", a);
});
z.lk.prototype.aa = z.$(42, function(a) {
  return z.A(this, "userId", a);
});
z.nk.prototype.aa = z.$(41, function(a) {
  return z.A(this, "userId", a);
});
z.ok.prototype.aa = z.$(40, function(a) {
  return z.A(this, "userId", a);
});
z.pk.prototype.aa = z.$(39, function(a) {
  return z.A(this, "userId", a);
});
z.qk.prototype.aa = z.$(38, function(a) {
  return z.A(this, "userId", a);
});
z.rk.prototype.aa = z.$(37, function(a) {
  return z.A(this, "userId", a);
});
z.sk.prototype.aa = z.$(36, function(a) {
  return z.A(this, "userId", a);
});
z.tk.prototype.aa = z.$(35, function(a) {
  return z.A(this, "userId", a);
});
z.uk.prototype.aa = z.$(34, function(a) {
  return z.A(this, "userId", a);
});
z.vk.prototype.aa = z.$(33, function(a) {
  return z.A(this, "userId", a);
});
z.wk.prototype.aa = z.$(32, function(a) {
  return z.A(this, "userId", a);
});
z.xk.prototype.aa = z.$(31, function(a) {
  return z.A(this, "userId", a);
});
z.yk.prototype.aa = z.$(30, function(a) {
  return z.A(this, "userId", a);
});
z.Ek.prototype.aa = z.$(29, function(a) {
  return z.A(this, "userId", a);
});
z.Mk.prototype.aa = z.$(28, function(a) {
  return z.A(this, "userId", a);
});
z.Xk.prototype.aa = z.$(27, function(a) {
  return z.A(this, "userId", a);
});
z.Vl.prototype.aa = z.$(26, function(a) {
  return z.A(this, "userId", a);
});
z.em.prototype.aa = z.$(25, function(a) {
  return z.A(this, "userId", a);
});
z.jm.prototype.aa = z.$(24, function(a) {
  return z.A(this, "userId", a);
});
z.lm.prototype.aa = z.$(23, function(a) {
  return z.A(this, "userId", a);
});
z.nm.prototype.aa = z.$(22, function(a) {
  return z.A(this, "userId", a);
});
z.vm.prototype.aa = z.$(21, function(a) {
  return z.A(this, "userId", a);
});
z.Dm.prototype.aa = z.$(20, function(a) {
  return z.A(this, "userId", a);
});
z.Gm.prototype.aa = z.$(19, function(a) {
  return z.A(this, "userId", a);
});
z.Hm.prototype.aa = z.$(18, function(a) {
  return z.A(this, "userId", a);
});
z.ao.prototype.aa = z.$(17, function(a) {
  return z.A(this, "userId", a);
});
z.p(u_, z.Hn);
var K_ = {};
J_.prototype.Yw = !0;
J_.prototype.jn = function() {
  return this.NE;
};
J_.prototype.toString = function() {
  return "Const{" + this.NE + "}";
};
var e2 = /^[-.%_!# a-zA-Z0-9]+$/;
z.p(N_, z.gM);
z.f = N_.prototype;
z.f.$f = !1;
z.f.ne = !0;
z.f.Hx = function() {
  this.ne = !1;
};
z.f.qn = function() {
  return this.$f && !this.pd.cd;
};
z.f.Un = function() {
  return this.$f ? this.qh(this.pd) : this.zC();
};
z.f.vw = function(a, b) {
  if (!this.ne) {
    return this.qh(this.pd);
  }
  this.Wi = Math.max(this.Wi, a + this.mb());
  this.qn() ? z.Oc(this.pd, this.em, this.bA.bind(this, !!b), this) : this.em(!!b);
  return this.qh(this.pd);
};
z.f.bA = function(a, b) {
  z.$s(b);
  return this.em(a);
};
z.f.em = function(a) {
  var b = this.mb();
  if (b >= this.Wi || !this.ne) {
    return z.bd(this);
  }
  b = this.Cq(this.Wi - b);
  a = this.ne ? this.Xs.send(this.$i, this.uq(b), b, {oa:!0, background:!!a}) : z.bd({});
  this.$f || a.rh(this.pd);
  this.$f = !0;
  this.pd = a;
  z.s(z.q(z.Vc(a, this.Ys, this), this.yS, this), this.Os, this);
  return this.qh(this.pd);
};
z.f.yS = function(a) {
  a = O_(this, a);
  (this.ne = 0 !== a.length) && a && this.re(a);
};
z.f.rh = function(a) {
  this.$f || this.pd.cd ? this.qn() && z.Wc(a, this.pd) : a.rh(this.pd);
  return a;
};
z.f.qh = function(a) {
  return z.q(a.Db(), function() {
    return this;
  }, this);
};
z.f.Os = function(a) {
  a instanceof z.Os || z.$s(a);
};
z.f.Ys = function() {
  this.pd = z.bd(this);
};
var f2 = /^[a-zA-Z0-9-]+$/;
z.p(X_, N_);
z.f = X_.prototype;
z.f.$i = "GET";
z.f.xE = function(a) {
  this.lm = a;
};
z.f.An = function(a) {
  return a;
};
z.f.vE = function(a) {
  this.$i = a.toUpperCase();
  return this;
};
z.f.uE = function(a) {
  this.Cq = a;
  return this;
};
z.f.uq = function(a) {
  var b = this.Ie;
  "GET" == this.$i && a && (b += -1 == b.indexOf("?") ? "?" : "\x26", b += z.Bi(a));
  return b;
};
z.f.zC = function() {
  var a = z.bd({});
  this.ne && (a = this.Xs.send(this.$i, this.uq(this.lm), this.lm, {oa:!0, background:!0}));
  z.Vc(z.s(z.q(a, this.wX, this), this.Os, this), this.Ys, this);
  this.pd = this.rh(a);
  this.$f = !0;
  return this.qh(this.pd);
};
z.f.wX = function(a) {
  a = O_(this, a);
  a = (0,z.Ob)(a, this.hC, this);
  this.update(a);
  return this;
};
var g2 = {"audio/mpeg":!0, "audio/mp3":!0, "audio/mp4":!0, "audio/webm":!0, "audio/ogg":!0}, h2 = {"image/jpeg":!0, "image/png":!0, "image/gif":!0, "image/tiff":!0};
z.D_(z.kK, "common-async");
z.p(z.i0, z.YG);
z.i0.prototype.Hp = z.cS;
z.i2 = function(a) {
  var b = !1, c;
  return function() {
    b || (c = a(), b = !0);
    return c;
  };
}(function() {
  if (z.zd) {
    return z.vd("10.0");
  }
  var a = window.document.createElement("div"), b = z.Ag(), c = {transition:"opacity 1s linear"};
  b && (c[b + "-transition"] = "opacity 1s linear");
  c = {style:c};
  if (!f2.test("div")) {
    throw Error("Invalid tag name \x3cdiv\x3e.");
  }
  if ("div" in z.HW) {
    throw Error("Tag name \x3cdiv\x3e is not allowed for SafeHtml.");
  }
  var d = null, b = "\x3cdiv";
  if (c) {
    for (var e in c) {
      if (!f2.test(e)) {
        throw Error('Invalid attribute name "' + e + '".');
      }
      var g = c[e];
      if (null != g) {
        if (g instanceof J_) {
          g = L_(g);
        } else {
          if ("style" == e.toLowerCase()) {
            if (!z.oa(g)) {
              throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
            }
            if (!(g instanceof z.Ao)) {
              var h = "", k = void 0;
              for (k in g) {
                if (!/^[-_a-zA-Z0-9]+$/.test(k)) {
                  throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                }
                var l = g[k];
                null != l && (l instanceof J_ ? l = L_(l) : e2.test(l) || (l = "zClosurez"), h += k + ":" + l + ";");
              }
              g = h ? z.Do(h) : z.FW;
            }
            g = z.Co(g);
          } else {
            if (/^on/i.test(e)) {
              throw Error('Attribute "' + e + '" requires goog.string.Const value, "' + g + '" given.');
            }
            if (g instanceof z.Eo) {
              g = z.Go(g);
            } else {
              if (e.toLowerCase() in z.GW) {
                throw Error('Attribute "' + e + '" requires goog.string.Const or goog.html.SafeUrl value, "' + g + '" given.');
              }
            }
          }
        }
        b += " " + e + '\x3d"' + z.Ca(String(g)) + '"';
      }
    }
  }
  e = void 0;
  z.ba(e) ? z.ha(e) || (e = [e]) : e = [];
  !0 === z.EW.div ? b += "\x3e" : (d = S_(e), b += "\x3e" + z.Jo(d) + "\x3c/div\x3e", d = d.ds());
  (c = c && c.dir) && (d = /^(ltr|rtl|auto)$/i.test(c) ? 0 : null);
  b = z.Ko(b, d);
  a.innerHTML = z.Jo(b);
  return "" != z.U_(a.firstChild, "transition");
});
z.p(z.j0, z.ft);
z.f = z.j0.prototype;
z.f.fs = function() {
  var a = z.n0(this);
  return a && a.fs() || null;
};
z.f.ga = function() {
  return this.qa;
};
z.f.hd = function() {
  return this.fa && this.fa.hd() || null;
};
z.f.ri = function() {
  var a = z.n0(this);
  return a ? a.ri() : "";
};
z.f.isPublished = function() {
  var a = z.n0(this);
  return!(!a || !a.tj());
};
z.f.eG = function(a, b) {
  var c = z.q0(this);
  a.mb() && (c = z.I_(a.Zk(a.mb() - 1)).Rg() - 1);
  var d = c, c = Math.max(-1, d - b), d = d - c;
  0 >= d && a.Hx();
  return{baseRev:c, count:d};
};
z.f.cv = function(a) {
  a = z.Th.kb(z.Wl, a);
  var b = z.nR(a.Jw());
  z.zQ(a, b);
  a = z.y(a, "postDeltas") || [];
  a.length && -1 != a[0].Rg() || this.Me.Hx();
  a.reverse();
  return a;
};
z.f.kM = z.m(297);
z.f.LC = function() {
  return this.ef;
};
z.f.xp = function() {
  return this.fa ? this.fa.visibility : null;
};
z.f.gs = function() {
  return this.fa ? this.fa.inResponseToPostId : null;
};
z.p(z.s0, z.aD);
z.s0.prototype.Qb = z.$b("CharCounterPlugin");
z.s0.prototype.enable = function(a) {
  z.s0.F.enable.call(this, a);
  this.Gh().sa(a, z.qC, this.rz);
};
z.s0.prototype.Sc = function(a) {
  z.lq(a) && window.getSelection().isCollapsed && t0(this);
  return!1;
};
z.s0.prototype.rz = function() {
  t0(this);
};
z.p(z.u0, z.Ke);
z.f = z.u0.prototype;
z.f.gq = !1;
z.f.Ps = 0;
z.f.Qn = null;
z.f.Ad = function() {
  this.Qn || this.Ps ? this.gq = !0 : this.kp();
};
z.f.stop = function() {
  this.Qn && (z.ea.clearTimeout(this.Qn), this.Qn = null, this.gq = !1);
};
z.f.pause = function() {
  this.Ps++;
};
z.f.Yp = z.m(266);
z.f.W = function() {
  z.u0.F.W.call(this);
  this.stop();
};
z.f.zX = function() {
  this.Qn = null;
  this.gq && !this.Ps && (this.gq = !1, this.kp());
};
z.f.kp = function() {
  this.Qn = z.eC(this.WB, this.iD);
  this.Ks.call(this.Jh);
};
z.p(v0, z.aD);
var w0 = 100;
z.f = v0.prototype;
z.f.Qb = z.$b("ActiveSectionPlugin");
z.f.kl = function() {
  this.FS.Ad();
  return!1;
};
z.f.queryCommandValue = function() {
  return this.EH();
};
z.f.aw = z.cS;
z.f.EH = function() {
  var a = this.Uj, b;
  b = (b = G_(this)) && b.getAttribute("name") || null;
  b !== a && (this.Uj = b, this.U().dispatchEvent({type:"SECTION_CHANGE", FD:a, mx:b}));
  return b;
};
z.f.eg = function(a) {
  return "ACTIVE_SECTION" === a;
};
z.f.Hq = function() {
  return G_(this);
};
z.p(x0, z.aD);
x0.prototype.Qb = z.$b("ArrowKeyPlugin");
x0.prototype.Sc = function(a) {
  if (a.altKey || (z.dw ? a.metaKey : a.ctrlKey)) {
    return!1;
  }
  var b;
  switch(a.keyCode) {
    case 39:
    ;
    case 37:
      b = z.fD(this.U());
      y0(b, 39 === a.keyCode ? 1 : -1, !0, a.shiftKey);
      a.preventDefault();
      break;
    case 40:
    ;
    case 38:
      b = z.fD(this.U());
      var c;
      c = b;
      var d = z.yD(b.getSelection()), e = 40 === a.keyCode, d = d.clone(), d = new z.tD(d, d, !1), g = z.yD(d), h = F_(c, d) || z.ks(z.iE(c, d));
      if (h) {
        for (var e = e ? 1 : -1, k = 0, l = null, n = null, r = null, w = null;;) {
          g.offset += e;
          k += e;
          if (z0(c, g)) {
            break;
          }
          w = z.iE(c, d);
          if ((w = z.ks(w)) && w.y != h.y) {
            if (null === l) {
              l = w.y, n = w, r = k, 1 == e && (w = d.clone(), w.start.offset--, w.collapse(!0), (w = F_(c, w)) && Math.abs(h.x - n.x) > Math.abs(h.x - w.x) && (n = w, r = k - 1));
            } else {
              if (l !== w.y) {
                -1 == e && (w = F_(c, d)) && Math.abs(h.x - n.x) > Math.abs(h.x - w.x) && (r = k);
                break;
              } else {
                if (Math.abs(h.x - n.x) > Math.abs(h.x - w.x)) {
                  n = w, r = k;
                } else {
                  break;
                }
              }
            }
          }
        }
        c = null === r ? k : r;
      } else {
        c = 0;
      }
      y0(b, c, !1, a.shiftKey);
      a.preventDefault();
  }
  return!1;
};
z.$L.prototype.Pj = function(a) {
  this.source = a;
  return this;
};
z.$L.prototype.clone = function() {
  var a = new z.$L(this.Q);
  a.source = this.source;
  a.jt = this.jt;
  a.$s = this.$s;
  a.Ws = this.Ws;
  return a;
};
z.p(D0, z.vt);
D0.prototype.S = function() {
  D0.F.S.call(this);
  var a = this.ea();
  a.style.visibility = "hidden";
  a.style.display = "block";
  this.Sq = new z.Hd(a.offsetWidth, a.offsetHeight);
  a.style.display = "";
  a.style.visibility = "";
  E0(this);
};
D0.prototype.na = function() {
  z.Zv(this.ea());
  D0.F.na.call(this);
};
D0.prototype.Mw = function() {
  return this.Sq;
};
z.p(F0, z.aD);
var j2 = z.Gb({c_:"graf-menu-hide"}), H0 = "P_1 P_2 P_3 P_13 P_6 P_7 TOGGLE_ALIGNMENT P_8".split(" ");
z.f = F0.prototype;
z.f.Qb = z.$b("GrafFormatPlugin");
z.f.enable = function(a) {
  F0.F.enable.call(this, a);
  var b = this.sb.ea();
  z.t(a.Z(), "blockFormatPlugin");
  z.hz(this.va, b);
  this.sb.V();
  this.Sq = this.sb.Mw();
  this.sb.L("format-command", this.lG, this);
  this.sb.L("insert-command", this.nG, this);
  this.Pa.L("resize-start", this.rG, this);
  this.Pa.L("resize-end", this.Rv, this);
  var c = this.Gh();
  c.sa(a, z.qC, this.wz);
  c.sa(b, "mouseenter", this.YO);
  c.sa(b, "mouseleave", z.nq(50, this.ZO, this));
};
z.f.YO = function() {
  this.Sz = !0;
};
z.f.ZO = function() {
  this.Sz = !1;
};
z.f.disable = function(a) {
  this.sb.eb("format-command", this.lG, this);
  this.sb.eb("insert-command", this.nG, this);
  this.Pa.eb("resize-start", this.rG, this);
  this.Pa.eb("resize-end", this.Rv, this);
  z.ie(this.sb.ea());
  var b = this.U().Z();
  b && z.u(b, "grafFormatPlugin");
  F0.F.disable.call(this, a);
};
z.f.W = function() {
  z.Oe(this.sb);
  F0.F.W.call(this);
};
z.f.kl = function() {
  this.Rv();
  return!1;
};
z.f.eg = function(a) {
  return a in j2;
};
z.f.execCommand = function(a) {
  "graf-menu-hide" == a && G0(this, !1);
};
z.f.Rv = function() {
  G0(this, !0);
  if (!this.Sz) {
    var a = z.cD(this), b = G_(this);
    if (a && b) {
      B0(A0(this.Eu, null), !1);
      var c = z.kx(a);
      if (z.yu(c)) {
        G0(this, !1), null != this.dh && this.Yl();
      } else {
        var d = this.U(), c = this.sb.ea(), e = this.fm(a);
        this.fm(b);
        a = z.Rw(d.Z()).indexOf(a);
        a != this.dh && this.Yl();
        b = Math.round(e.hE - 2 * this.Sq.width) + "px";
        c.style.top = e.top + "px";
        c.style.left = b;
        B0(A0(this.Eu, a), !0);
      }
    }
  }
};
z.f.lf = function(a, b) {
  a && z.v(a, "is-active", b);
};
z.f.fm = function(a) {
  var b = z.h0(a, this.U().Z().offsetParent), c = a.offsetHeight, d = null;
  "SECTION" === a.tagName && (a = d0(a)) && (d = a.offsetLeft);
  return{height:c, top:b.y, bottom:b.y + c, hE:b.x, y4:d};
};
z.f.rG = function() {
  G0(this, !1);
};
z.f.wz = function() {
  var a = z.cD(this);
  a && (a = this.fm(a), Math.abs(20 > a.top - this.YN.top) || this.Rv());
};
z.f.lG = function(a) {
  var b = null;
  if ("header" == a) {
    b = "CYCLE_HEADER";
  } else {
    if ("center" == a) {
      b = "TOGGLE_ALIGNMENT";
    } else {
      if ("quote" == a) {
        b = "CYCLE_BLOCKQUOTE";
      } else {
        if ("code-block" == a) {
          b = "P_8";
        } else {
          throw Error("Unrecognized format block type: " + a);
        }
      }
    }
  }
  this.U().execCommand(b);
};
z.f.uo = function() {
  var a = this.Eu.Q;
  if (null == a) {
    return G0(this, !1), !1;
  }
  if (z.Rw(this.U().Z())[a]) {
    return!0;
  }
  G0(this, !1);
  return!1;
};
z.f.nG = function(a) {
  if (this.uo()) {
    var b = null, c = this.Eu.clone();
    "image" == a ? (b = k2, this.U().execCommand(b, c)) : "embed" == a ? I0(this).length || (b = l2, this.dh = c.Q, this.U().execCommand(b, {Ls:c, AE:!0, message:n1()})) : "hr" == a && (b = m2, this.U().execCommand(b, {Ls:c, AE:!0}));
  }
};
z.f.Sc = function(a) {
  return 27 == a.keyCode && null != this.dh ? (this.Yl(), !0) : !1;
};
z.f.Yl = function() {
  for (var a = I0(this), b = 0;b < a.length;b++) {
    z.ie(a[b]);
  }
  this.dh = null;
};
z.p(J0, z.aD);
J0.prototype.Qb = z.$b("DisableLinksPlugin");
J0.prototype.enable = function(a) {
  J0.F.enable.call(this, a);
  this.Gh().sa(a.Ed, "click", this.uz);
};
J0.prototype.uz = function(a) {
  z.Fe(a.target, "A") && (a.preventDefault(), a.stopPropagation());
};
z.p(K0, z.yE);
K0.prototype.Yc = function(a) {
  var b = z.la(this.Pu), c = z.la(this.Pu) ? this.Pu : a.vf(this.Pu), d = b ? "" : z.Z(a, c).name, d = (new z.wu(d, 11, "")).kb(), e = z.Bh(new z.en, !0).Ji(z.it(this.ih, "mediaResourceId")).Kx(this.ih.wp("iframeWidth")).Jx(this.ih.wp("iframeHeight"));
  z.A(d, "iframe", e);
  b ? (z.WD(a, c, z.Du(d)), a.getSelection().Qz && z.aE(a, c)) : z.UD(a, c, z.Du(d));
  z.ZD(a);
};
z.p(L0, z.yE);
L0.prototype.Yc = function(a) {
  var b = a.vf(this.AA), c = z.Z(a, b), d = z.it(this.ih, "domain"), e = z.it(this.ih, "href"), g = this.ih.get("mediumPost"), h = z.it(this.ih, "title") || "Untitled";
  g && g.post && (h = g.post.title);
  var h = z.yo(h, 100), k = z.it(this.ih, "description") || "Edit description";
  g && g.post && g.post.virtuals && (k = g.post.virtuals.snippet);
  k = z.yo(k, 120);
  c.Nb = String(z.Wo("" + h + "\n" + ("" + k) + ("" + d)));
  c.Ub.length = 0;
  d = z.Tu(1, c.X().indexOf(h), c.X().indexOf(h) + h.length);
  k = z.Tu(2, c.X().indexOf(k), c.X().indexOf(k) + k.length);
  g = z.Ru(0, c.X().length, e, e, "");
  z.Hu(c, d);
  z.Hu(c, k);
  z.Hu(c, g);
  c = c.kb();
  c.Va(14);
  e = z.Bh(new z.fn, !0).Ji(z.it(this.ih, "mediaResourceId")).Px(z.it(this.ih, "thumbnailImageId")).Ph(e);
  z.A(c, "mixtapeMetadata", e);
  z.UD(a, b, z.Du(c));
  z.ZD(a);
};
z.p(M0, z.aD);
M0.prototype.Qb = z.$b("EnterPlugin");
M0.prototype.Sc = function(a) {
  if (!z.BE(a)) {
    return!1;
  }
  var b = this.U();
  if (!z.KC(b)) {
    return!1;
  }
  var c = new z.TL(a.shiftKey ? 2 : 13 == a.keyCode && (z.dw ? a.metaKey : a.ctrlKey) ? 3 : 1);
  z.zE(c, b);
  if (!a.shiftKey) {
    if (c = b = c.AH) {
      (c = z.Qw(b, this.U().Z())) ? (z.Dy(c, 0), c = !0) : c = !1;
    }
    c && (c = b.querySelector("a").href, b = b.getAttribute("name"), z.q(this.wb.track(t_(this.Bu, c)), this.CN.bind(this, b)));
  }
  a.preventDefault();
  return!0;
};
M0.prototype.CN = function(a) {
  var b = this.U(), c = (a = z.R_(b.Z(), a)) && z.Iy(a);
  if (c && z.Mu(c)) {
    var c = a.querySelector("a").href, d = this.Bu;
    c in d.jk && d.jk[c] in d.lk && (d = this.Bu, c = d.lk[d.jk[c]], z.it(c, "iframeSrc") || c.get("tweet") || c.get("gist") ? (z.U(z.MX, {insertType:"enterKey"}), z.zE(new K0(a, c), b)) : (d = c.get("title") || c.get("mediumPost"), !z.it(c, "iframeSrc") && d && (z.U(z.NX, {insertType:"enterKey"}), z.zE(new L0(a, c), b))));
  }
};
M0.prototype.W = function() {
  M0.F.W.call(this);
  z.Oe(this.wb);
};
z.p(N0, z.aD);
var n2 = "P_1 P_2 P_3 P_13 P_6 P_7 M_1 M_2 M_3 TOGGLE_ALIGNMENT".split(" ");
z.f = N0.prototype;
z.f.Qb = z.$b("HighlightMenuPlugin");
z.f.cj = null;
z.f.W = function() {
  this.Kb.qf || this.DS.forEach(this.Kb.Ul.bind(this.Kb));
  z.Nr(this.Ra);
  z.ie(this.Ga);
  this.Ga = null;
  N0.F.W.call(this);
};
z.f.eg = function(a) {
  return "link" == a;
};
z.f.execCommand = function() {
  var a = this.U(), b = z.KC(a);
  if (!b || this.cj) {
    return!0;
  }
  var c = z.fD(a), d = c.getSelection(), c = d.Xe() && d.isCollapsed() && 4 == z.Z(c, d.start.Q).type, e = z.zD(d) && d.start.Q == d.end.Q && !d.isCollapsed();
  if (!c && !e) {
    return!0;
  }
  this.cj = d.clone();
  e ? z.w_(this.Kb, z.f0(b)) : (b = z.js(b.ib()), b.top -= 10, z.w_(this.Kb, b));
  z.t(this.Ga, "highlightMenu--linkMode");
  var g = this.gb;
  g.value = "";
  (0,window.setTimeout)(function() {
    g.focus();
    z.LC(a);
  }, 10);
  return!0;
};
z.f.aD = function() {
  this.Kb.dy();
  return!1;
};
z.f.kl = function() {
  this.cj || this.Kb.dy();
  return!1;
};
z.f.Ap = function() {
  this.cj || z.x_(this.Kb);
};
z.f.uP = function() {
  this.cj = null;
};
z.f.yU = function() {
  var a = this.U(), b = z.KC(a), c = z.fD(a), d = z.Z(c, c.getSelection().start.Q), c = z.Z(c, c.getSelection().end.Q), d = 14 == d.type || 14 == c.type, c = b && z.re(a.Aa, z.rf(b));
  !b || b.isCollapsed() || !c || d || this.U().queryCommandValue("active-ime") ? z.x_(this.Kb) : z.w_(this.Kb, z.f0(b));
  a = a.queryCommandValue(n2);
  b = a.P_6 || a.P_7;
  z.z_(this.Kb, {EE:!a.P_2 && !a.P_3 && !a.P_13, MI:b});
  this.lf(".highlightMenu-bold", a.M_1 && !(a.P_2 || a.P_3 || a.P_13));
  this.lf(".highlightMenu-italic", a.M_2);
  this.lf(".highlightMenu-anchor", a.M_3);
  this.lf(".highlightMenu-h2", a.P_2);
  this.lf(".highlightMenu-h3", a.P_3);
  this.lf(".highlightMenu-h4", a.P_13);
  this.lf(".highlightMenu-center", 2 == a.TOGGLE_ALIGNMENT);
  if (d = this.Mc(".highlightMenu-blockquote")) {
    z.v(d, "is-active", b), z.v(d, "is-blockquoteMode", a.P_6), z.v(d, "is-pullquoteMode", a.P_7);
  }
  O0(this);
};
z.f.lf = function(a, b) {
  var c = this.Mc(a);
  c && z.v(c, "is-active", b);
};
z.f.mQ = function() {
  this.gb.value ? P0(this) : this.qq();
};
z.f.$Q = function(a) {
  13 == a.keyCode ? P0(this) : 27 == a.keyCode && this.qq();
};
z.f.qq = function() {
  if (this.cj) {
    var a = this.U();
    z.ND(z.fD(a), this.cj);
    z.LC(a);
  }
  Q0(this);
};
z.f.Gq = function(a) {
  var b = null;
  if ("h2" == a.af) {
    b = "P_2";
  } else {
    if ("h3" == a.af) {
      b = "P_3";
    } else {
      if ("h4" == a.af) {
        b = "P_13";
      } else {
        if ("center" == a.af) {
          b = "TOGGLE_ALIGNMENT";
        } else {
          if ("drop-cap" == a.af) {
            b = "SET_HAS_DROP_CAP";
          } else {
            if ("blockquote" == a.af) {
              b = "P_6";
            } else {
              throw Error("Unrecognized highlight block type: " + a.af);
            }
          }
        }
      }
    }
  }
  this.U().execCommand(b);
};
z.f.Xt = function(a) {
  this.U().execCommand(a);
};
z.f.Mc = function(a) {
  return this.Ga.querySelector(a);
};
z.p(R0, z.yE);
var o2 = /^(?:1[\.\)]|[\*\-\+])[ \x0A]?/;
R0.prototype.Yc = function(a) {
  var b = a.getSelection(), c = z.Z(a, b.start.Q), d = o2.exec(c.X())[0].length;
  c.type = this.Wb;
  z.Yu(c, 0, d);
  z.UD(a, b.start.Q);
  a.wd(b.start.Q, b.start.offset - d);
};
z.p(S0, z.aD);
S0.prototype.Qb = z.$b("ListCreationPlugin");
S0.prototype.Sc = function(a) {
  var b = 32 == a.keyCode, c = 13 == a.keyCode && !a.shiftKey;
  if (b || c) {
    var d = this.U(), e = z.KC(d);
    if (!e || !e.isCollapsed()) {
      return!1;
    }
    var g = z.cD(this);
    if (!g || 1 != z.kx(g)) {
      return!1;
    }
    var h = z.Iy(g), h = h ? h.X() : "", h = o2.exec(h), e = z.e0(e, g, !0);
    if (!h || !c && e != h[0].length) {
      return!1;
    }
    z.zE(new R0("1" == h[0].charAt(0) ? 10 : 9), d);
    a.preventDefault();
    return b;
  }
  return!1;
};
z.p(T0, z.yE);
T0.prototype.Yc = function(a) {
  var b;
  b = z.gE(a, this.dQ);
  if ((b = -1 == b ? null : z.Z(a, b)) && (4 == b.type || 11 == b.type || 14 == b.type)) {
    var c = this.Xz;
    5 == c && "the owls are not what they seem" == b.X() && (c = 8);
    b.layout = c;
    b = (0,z.gb)(a.pg, b);
    z.UD(a, b);
    z.aE(a, b);
  }
};
z.p(U0, z.yE);
U0.prototype.Yc = function(a) {
  var b = z.kE(a, this.vk), c = z.lE(a, b);
  z.Jh(b, function(a) {
    "startIndex" != a && z.Hh(this.VH, a) && z.A(b, a, z.Gh(this.VH, a));
  }, this);
  z.VD(a, this.vk);
  b = z.kE(a, this.vk);
  this.Sv = b.clone();
  z.wE(a, b) <= this.vk + 2 && z.UD(a, this.vk);
  b.Bd() && b.Bd().Ca() ? z.cE(a, c, !0) : a.wd(this.vk, 0);
};
V0.prototype.OK = function() {
  var a = Y0(this);
  return a ? z.q(this.dk.load(a), function() {
    Z0(this, a);
  }, this) : z.bd(!0);
};
z.p(a1, z.yE);
a1.prototype.Yc = function(a) {
  for (var b = a.vf(this.AA), c = z.kE(a, b), d = z.lE(a, c), e = z.TD(a), g = e[d].Ba(), d = d + 1 >= e.length ? a.Za() : e[d + 1].Ba(), e = [];g < d;g++) {
    e.push(z.Z(a, g));
  }
  c.Ba() + e.length > b + 1 && (g = z.St.clone(c), g.jb(""), z.YD(a, b + 1, g));
  c.Ba() < b && z.YD(a, b, new z.ln);
};
z.p(b1, z.yE);
b1.prototype.Yc = function(a) {
  var b = z.XD(a, this.kT), c = null, c = b.backgroundImage && b.backgroundImage.id ? new z.Eu(null, "", this.Xz, z.St.clone(b.backgroundImage)) : new z.wu(null, 1, ""), d = b.Ba();
  z.WD(a, d, c, !0);
  c = z.Z(a, d);
  z.VD(a, d, (new z.ln).jb(b.getName()));
  b = z.kE(a, d);
  b = z.wE(a, b);
  0 < d && !z.Lq(z.kE(a, d - 1)) && z.nE(a, d);
  for (b < a.Za() && !z.Lq(z.kE(a, b)) && z.nE(a, b);d < b;d++) {
    z.UD(a, d);
  }
  d = (0,z.gb)(a.pg, c);
  4 === c.type ? z.aE(a, d) : a.wd(d, 0);
};
z.p(c1, z.aD);
z.f = c1.prototype;
z.f.Qb = z.$b("MediaTransformPlugin");
z.f.enable = function(a) {
  c1.F.enable.call(this, a);
  a = a.Z();
  z.hz(this.ca.get("screen"), this.sb.Z());
  this.Ra = [z.T(a, "mousedown", this.Jq, this)];
  z.Rv("media-transform", this.uU, this);
  z.Rv("set-section-background-image", this.qT, this);
  this.sb.V();
};
z.f.disable = function(a) {
  z.Uv("media-transform");
  z.Uv("set-section-background-image");
  z.Nr(this.Ra);
  this.sb.Xa() && this.sb.Wa();
  c1.F.disable.call(this, a);
};
z.f.W = function() {
  this.sb.nc();
  c1.F.W.call(this);
};
z.f.Jq = function(a) {
  var b = a.target, c = b.tagName, d = this.U();
  if (z.$w(b) || z.ax(b)) {
    var e = z.Qw(b, d.Z()), b = d0(e), c = z.fD(d), e = c.ks(e);
    if (a.clientY < z.js(b).top) {
      z.cE(c, e);
    } else {
      for (var g = z.XD(c, e), b = c, e = g.Ba(), h = z.wE(c, g), g = [], k = e;k < h;k++) {
        g.push(c.yb(k));
      }
      a: {
        for (h = 0;h < g.length;h++) {
          k = z.Gg(z.js(g[h]));
          if (a.clientY < k.top) {
            g = Math.max(0, h - 1);
            break a;
          }
          if (a.clientY <= k.bottom) {
            g = Math.max(0, h);
            break a;
          }
        }
        g = g.length - 1;
      }
      for (var h = g + e, e = z.wD(h, -1), g = new z.tD(e, e, !1), h = z.Z(c, h), k = window.Infinity, l = 0, n = 0;n <= h.X().length;n++) {
        e.offset = n;
        var r = z.iE(c, g), r = z.ks(r), r = Math.pow(r.y - a.clientY, 2) + Math.pow(r.x - a.clientX, 2);
        r < k && (l = n, k = r);
      }
      e.offset = l;
      z.ND(b, g);
    }
    z.LC(d);
    a.preventDefault();
  } else {
    if ("FIGURE" === c || "IMG" === c || "IFRAME" === c || z.Vr(b)) {
      b = z.gx(b, this.U().Z()), c = z.fD(d), z.aE(c, c.vf(b)), z.LC(d), a.preventDefault();
    }
  }
};
z.f.Ap = function() {
  this.xq && e1(this);
  z.x_(this.sb);
  return!1;
};
z.f.kl = function() {
  var a = z.fD(this.U()), b = a.getSelection();
  this.xq && (e1(this), b.Xe() || z.BD(b) || z.x_(this.sb));
  if (b.Xe()) {
    var c = z.Z(a, b.start.Q), a = a.yb(b.start.Q);
    z.t(a, "is-mediaFocused");
    this.xq = !0;
    if (6 == c.layout || 7 == c.layout) {
      z.x_(this.sb);
    } else {
      var b = 0, d = c.type, e = 4 === d;
      e ? b = Number(c.fd() && c.fd().xe()) || 0 : 11 === d && (b = Number(c.tp() && c.tp().Dw()));
      y_(this.sb, {ZB:e && f1(b), YB:f1(b), XB:e && f1(b), Qm:c.layout, imageLayout:null});
      g1(this, a);
    }
  } else {
    z.BD(b) && (c = z.kE(a, b.start.Q), e = z.lE(a, c), d = a.Ac(e), e = a.Lw(e)) && (2 == z.wn(c) || 9 == z.wn(c) ? (a = 0, c.backgroundImage && (a = Number(c.backgroundImage.xe()) || 0), y_(this.sb, {ZB:!0, YB:f1(a), XB:f1(a), imageLayout:z.wn(c), Qm:null}), z.t(d, "is-mediaFocused"), g1(this, e), this.xq = !0) : (b.start.Va(z.AD), b.end.Va(z.AD), z.ZD(a)));
  }
  return!1;
};
z.f.uU = function(a) {
  var b = this.U(), c = z.fD(b);
  a = Number(a.value);
  var d, e = z.fD(this.U());
  d = e.getSelection();
  d = z.BD(d) ? z.lE(e, z.kE(e, d.start.Q)) : -1;
  var g = z.XD(c, d), e = c.Ac(d);
  -1 !== d && z.zE(new b1(d, a), b);
  if (d = d1(this)) {
    if (z.zE(new T0(d, a), b), c = d.getAttribute("name")) {
      b = new V0(this.ca, b, s_(new z.HR, c)), b.OK();
    }
  } else {
    if (g) {
      d = r_(new z.HR, g.getName());
      var h = g.Ba(), k = new k1(h, !0);
      k.Ln(g.backgroundImage && z.St.clone(g.backgroundImage));
      z.zE(k, b);
      g = z.Z(c, h);
      k = d1(this);
      z.zE(new T0(k, a), b);
      k = d1(this);
      z.tE(c, e, k);
      a = s_(new z.HR, k.getAttribute("name"));
      b.execCommand(p2, {GJ:d, hM:a});
      g.fd() && !g.fd().Ca() && z.aE(c, h);
    }
  }
};
z.f.qT = function(a) {
  var b = this.U(), c = d1(this);
  if (c) {
    var d = z.fD(b).vf(c);
    z.zE(new a1(c), b);
    var e = z.fD(b), g = z.Z(e, d), h = z.kE(e, d), h = z.lE(e, h);
    a = Number(a.value);
    "there is a man in a smiling bag" == g.X() && (a = 8);
    var k = 2 == a ? 2 : 3, g = z.xn(z.nn(new z.ln, k), a).bq(g.fd() && z.St.clone(g.fd()));
    z.zE(z.WF(c, function(a) {
      a.type = 1;
      a.metadata = null;
    }), b);
    g = new U0(g, d);
    z.zE(g, b);
    g = g.Sv;
    z.tE(e, c, e.Ac(h));
    c = s_(new z.HR, c.getAttribute("name"));
    h = r_(new z.HR, g.getName());
    b.execCommand(p2, {GJ:c, hM:h});
    g.Bd() && !g.Bd().Ca() && e.wd(d, 0);
  }
};
z.p(h1, z.$G);
h1.prototype.Qb = z.$b("PostSanitizationPlugin");
h1.prototype.sL = function(a) {
  var b = window.document.createElement("div");
  b.innerHTML = a;
  z.px(b, {ue:!1, isPublished:!1, media:null, sections:this.U().qb(), Cl:!1, Rk:!0, Vf:!0});
  return b.innerHTML;
};
h1.prototype.UI = function() {
  throw Error("Not supported");
};
z.p(i1, z.aD);
i1.prototype.Qb = z.$b("SectionPlugin");
i1.prototype.eg = function(a) {
  return "new-section" === a;
};
i1.prototype.BV = function(a, b) {
  var c = z.fD(this.U()), d = b || c.Za();
  z.WD(c, d, new z.wu("", 1, ""));
  z.YD(c, d, new z.ln);
  c.wd(d, 0);
};
z.p(j1, z.yE);
j1.prototype.Yc = function(a) {
  var b = a.getSelection(), c = b.start.Q, d = z.Z(a, c);
  z.Xu(d, "►", b.start.offset);
  z.Hu(d, z.Ru(b.start.offset, b.start.offset + 1, this.uO, "", "", 1));
  z.UD(a, c);
  z.ZD(a);
};
z.p(k1, z.yE);
k1.prototype.Ln = function(a) {
  this.lb = a;
};
k1.prototype.Yc = function(a) {
  var b = new z.Eu(null, "", 1, this.lb), c = this.vk;
  if (null != c) {
    z.WD(a, c, b, this.$T), z.aE(a, c);
  } else {
    var d = a.getSelection(), c = d.start.Q, e = z.Z(a, c);
    e.X() || 1 != e.type ? (d = e.split(d.start.offset), z.UD(a, c), z.WD(a, c + 1, b), z.WD(a, c + 2, d), z.aE(a, c + 1)) : (z.UD(a, c, b), z.aE(a, c));
  }
  this.XG = b.name;
};
z.p(l1, z.OR);
l1.prototype.W = function() {
  this.ua && !this.ua.cd && this.ua.cancel();
  this.ua = null;
  l1.F.W.call(this);
};
l1.prototype.KE = function() {
  this.ua = z.s(z.q(this.Le.post(z.AV.N(), {url:this.FU}, {oa:!0}), function(a) {
    return a.value.fileId;
  }), z.$s);
  return this.ua.Db();
};
var k2, p2, l2, m2, q2;
z.p(p1, z.aD);
k2 = "PICK_IMAGE";
z.aM = "SIDELOAD_IMAGE";
p2 = "UPDATE_IMAGE_CONTEXT";
l2 = "INSERT_EMBED";
m2 = "INSERT_HR";
q2 = z.Gb({X_:k2, x0:z.aM, a1:p2, k_:l2, l_:m2});
z.f = p1.prototype;
z.f.Ra = null;
z.f.Qb = z.$b("SmartMediaPlugin2");
z.f.enable = function(a) {
  p1.F.enable.call(this, a);
  var b = this.Gh();
  b.sa(a, z.qC, this.sz);
  b.sa(a, "beforetab", this.oz);
  a = a.Z();
  z.t(a, "smart-media-plugin");
  z.ge(this.Nc, a);
  this.Nc.style.visibility = "hidden";
  this.Nc.style.display = "block";
  this.qI = new z.Hd(this.Nc.offsetWidth, this.Nc.offsetHeight);
  this.Nc.style.display = "";
  this.Nc.style.visibility = "";
  this.Ra = [z.T(window.document.body, "dragenter", z.g0(z.fa)), z.T(window.document.body, "dragexit", z.g0(z.fa)), z.T(window.document.body, "dragover", z.g0(z.fa), this), z.T(window.document.body, "drop", z.g0(this.KO), this), z.T(this.Nc, "keydown", this.oP, this)];
  z.Rv("inline-menu", this.iH, this).H("inline-menu-image", this.WQ, this).H("inline-menu-embed", this.UQ, this).H("inline-menu-hr", this.VQ, this);
  this.Pa.L("resize-end", this.sz, this);
};
z.f.disable = function(a) {
  this.Pa.eb("resize-end", this.sz, this);
  z.Nr(this.Ra);
  z.Uv("inline-menu");
  z.Uv("inline-menu-image");
  z.Uv("inline-menu-embed");
  z.Uv("inline-menu-hr");
  var b = this.U().Z();
  b && z.u(b, "smart-media-plugin");
  p1.F.disable.call(this, a);
};
z.f.W = function() {
  z.Pe(this.oh);
  this.oh.length = 0;
  z.ie(this.Nc);
  p1.F.W.call(this);
};
z.f.oP = function(a) {
  if (27 == a.keyCode && null != this.fi.Q) {
    var b = this.fi.Q;
    a.preventDefault();
    a = this.U();
    a.Z().focus();
    z.fD(a).wd(b, 0);
    r1(this);
    z.LC(a);
  }
};
z.f.Sc = function(a) {
  return 27 == a.keyCode && null != this.dh ? (this.Yl(), !0) : !1;
};
z.f.kl = function() {
  q1(this, !0);
  return!1;
};
z.f.Kh = function() {
  return!!this.oh.length;
};
z.f.eg = function(a) {
  return a in q2;
};
z.f.execCommand = function(a, b) {
  if (a == k2) {
    t1(this, b);
  } else {
    if (a == z.aM) {
      var c = b.Ls, d = b.url;
      u1(c.source);
      this.oB(c, [new l1(this.ca, d)]);
    } else {
      if (a == p2) {
        for (var c = b.GJ, d = b.hM, e = 0;e < this.oh.length;e++) {
          var g = this.oh[e];
          g.Bg.Yb(c) && (g.Bg = d);
        }
      } else {
        a == l2 ? v1(this, b.Ls, b.AE, b.message) : a == m2 && x1(this, b.Ls, b.AE);
      }
    }
  }
};
z.f.Yl = function() {
  for (var a = this.U().Z().querySelectorAll(".defaultValue--prompt"), b = 0;b < a.length;b++) {
    z.ie(a[b]);
  }
  this.dh = null;
};
z.f.sz = function() {
  this.kv = {};
  q1(this);
};
z.f.oz = function(a) {
  null != this.fi.Q && (a.preventDefault(), this.iH(), this.Nc.querySelector(".inlineTooltip2-menu button").focus());
};
z.f.uo = function() {
  var a = this.fi.Q;
  if (null == a) {
    return r1(this), !1;
  }
  var b = this.U();
  if ((a = z.Rw(b.Z())[a]) && b.execCommand(z.IE.kq, a)) {
    return!0;
  }
  r1(this);
  return!1;
};
z.f.iH = function() {
  this.uo() && (s1(this, !this.Pz), this.pI.focus());
};
z.f.WQ = function() {
  if (this.uo()) {
    var a = this.fi.clone();
    a.Ws = !0;
    r1(this);
    t1(this, a);
  }
};
z.f.UQ = function(a) {
  if (this.uo()) {
    var b = this.fi.clone();
    z.t(this.Nc, "is-menuImmediatelyHidden");
    z.sh(this.Nc.offsetHeight);
    r1(this);
    z.u(this.Nc, "is-menuImmediatelyHidden");
    v1(this, b, !1, a.value);
  }
};
z.f.VQ = function() {
  if (this.uo()) {
    var a = this.fi.clone();
    r1(this);
    z.U(z.WL, {insertType:"tooltip"});
    x1(this, a, !1);
  }
};
z.f.KO = function(a) {
  var b = E1(this, a);
  if (b) {
    var c = a.dataTransfer.getData("application/json");
    (c = c ? JSON.parse(c) : null) ? (a = (new z.rl).Lc(c.id).Nn(c.originalWidth).Mn(c.originalHeight), b = new k1(b.Q, b.jt), b.Ln(a), z.zE(b, this.U())) : a.dataTransfer && a.dataTransfer.files && a.dataTransfer.files.length && (a = a.dataTransfer.files, (0,z.Xr)(a, function(a) {
      return!!h2[a.type];
    }) ? (u1("drop"), a = this.Tf.upload(a), this.oB(b.Pj("drop"), a)) : z.S("variants.enable_insert_audio") && 1 == a.length && g2[a[0].type] ? (z.U(z.LX, {insertType:"drop"}), y1(this, this.Tf.upload(a[0])[0])) : (b = Error("Invalid file format(s)"), b.Ww = 415, D1(this, b)));
  }
};
z.f.oB = function(a, b) {
  if (b.length) {
    this.oh = this.oh.concat(b);
    for (var c = z.fD(this.U()), d = [], e = [], g = null, h = 0;h < b.length;h++) {
      var k = b[h];
      d.push(z1(this, a, k));
      e.push(z.QR(k) ? z.q(p_(k), z.$b(k)) : z.bd(k));
      0 == h && (g = c.getSelection().clone());
    }
    g && z.ND(c, g);
    1 < e.length && z.q(new z.sd(e), function(a) {
      for (a = a.filter(function(a) {
        return!!a[0];
      }).map(function(a) {
        return a[1];
      });2 <= a.length;) {
        var b = a.length, b = 4 == b ? 2 : Math.min(3, b);
        C1(this, a.splice(0, b));
      }
    }, this);
    z.Vc(z.q(new z.sd(d), function(a) {
      a = a.filter(function(a) {
        return!a[0];
      }).map(function(a) {
        return a[1];
      });
      a.length && D1(this, a[0]);
    }, this), function() {
      for (var a = 0;a < b.length;a++) {
        z.hb(this.oh, b[a]);
      }
      z.Pe(b);
    }, this);
  }
};
z.f.rT = function(a, b, c) {
  c.Ln(a.getMetadata());
  c.layout = b;
};
z.f.VT = function(a) {
  var b = a.iz ? a.iz.Db() : null;
  b && z.q(b, function() {
    this.xz(a);
  }, this);
};
z.f.bP = function(a) {
  a = A1(this, a);
  var b = X0(a), c = W0(a);
  if (b && c) {
    if (b = a.Bg.Ek) {
      if (c = z.fD(a.df), c = z.XD(c, E_(c, b))) {
        z.zE(new U0(z.xn(z.nn(new z.ln, 1), 1), c.Ba()), a.df), a.df.dispatchEvent({type:"SECTION_CHANGE", FD:b, mx:b});
      }
    } else {
      z.zE(Y_(c), a.df);
    }
  }
};
z.f.xz = function(a) {
  $0(A1(this, a), a.getMetadata());
  return a;
};
z.f.fm = function(a) {
  var b = a.getAttribute("name");
  b || a !== this.U().Z() || (b = "@");
  if (!b) {
    return null;
  }
  if (!this.kv[b]) {
    var c = z.h0(a, this.U().Z().offsetParent);
    a = a.offsetHeight;
    this.kv[b] = {height:a, top:c.y, bottom:c.y + a, hE:c.x};
  }
  return this.kv[b];
};
z.p(I1, z.aD);
z.f = I1.prototype;
z.f.Qb = z.$b("SectionControlPlugin");
z.f.enable = function(a) {
  I1.F.enable.call(this, a);
  z.Wv(this.bf).H("select-background-image", this.CR, this).H("remove-background-image", this.pR, this).H("toggle-color-controls", this.TR, this).H("revert-section-style", this.sR, this).H("wash", this.fS, this);
  var b = this.Gh();
  b.sa(a, "SECTION_CHANGE", this.AR);
  b.sa(a, z.qC, this.AI);
  this.Pa.L("resize-end", this.zv, this);
};
z.f.disable = function(a) {
  this.Pa.eb("resize-end", this.zv, this);
  this.bf && z.Zv(this.bf);
  I1.F.disable.call(this, a);
};
z.f.W = function() {
  z.ie(this.bf);
  this.bf = null;
  I1.F.W.call(this);
};
z.f.AR = function(a) {
  this.Uj = a.mx;
  this.zv();
};
z.f.CR = function() {
  if (this.Uj) {
    var a = this.Hq().Ba(), a = (new z.$L(a)).Pj("section-controls");
    a.$s = !0;
    this.U().execCommand(k2, a);
  }
};
z.f.pR = function() {
  var a = this.Hq();
  a && z.zE(z.VF(function(b) {
    z.VD(b, a.Ba(), (new z.ln).jb(a.getName()));
    z.ZD(b);
  }, this), this.U());
};
z.f.TR = function() {
  z.nd(this.bf, "is-showingColorControls");
};
z.f.sR = function() {
  K1(this, z.By[1]);
};
z.f.fS = function(a) {
  this.Uj && K1(this, a.value);
};
z.f.Qw = function() {
  this.zv();
};
z.f.Ap = function() {
  z.ie(this.bf);
};
z.f.zv = function() {
  var a = this.Hq();
  a ? (L1(this, a), M1(this)) : z.ie(this.bf);
};
z.f.Hq = function() {
  return z.XD(z.fD(this.U()), J1(this));
};
z.f.AI = function() {
  if (this.Uj) {
    var a = G_(this);
    a && (z.v(this.bf, "is-showingRemoveBackgroundImage", z.jd(a, "is-imageBackgrounded")), z.v(this.bf, "is-overDarkContent", z.jd(a, "is-darkBackgrounded")));
  }
};
z.p(N1, z.YG);
N1.prototype.Kh = function() {
  return N1.F.Kh.call(this) || this.Cu && this.Cu.Kh();
};
N1.prototype.qb = z.cS;
N1.prototype.focus = function(a) {
  a ? N1.F.focus.call(this, a) : (this.Aa.focus(), a = z.fD(this.Aa), 2 != a.Za() || z.Z(a, 0).X() || z.Z(a, 1).X() ? a.wd(0, 0) : a.wd(1, 0), z.LC(this.Aa));
};
z.p(z.O1, z.qw);
z.f = z.O1.prototype;
z.f.S = function() {
  window.setTimeout(this.tF.bind(this), this.oq);
  z.O1.F.S.call(this);
  this.$n.forEach(function(a) {
    a.V();
  });
  this.vF = z.T(this.Ge.Aa.Z(), z.UC, this.DO, this);
  this.Ge.focus();
  this.O("title-changed", z.Y1(this));
  z.wt(this, this.Pa, "resize-end", this.Kq, this);
  this.Kq();
  this.md = this.pa.md;
  this.Gt = 0;
  var a = this.md.Of, b = z.n0(this.pa);
  (this.hj = !a.bb() && !a.Cd() || !!b && b.Fw()) ? (this.mf.ac(""), this.yg.ac(""), z.V1(this)) : (this.mf.ac(this.pa.yA || ""), this.yg.ac(this.pa.xA || ""));
};
z.f.na = function() {
  this.$n.forEach(function(a) {
    a.Wa();
  });
  this.vF && z.Nr(this.vF);
  z.O1.F.na.call(this);
};
z.f.Ja = function() {
  z.Wv(this.va.ea()).clear("focus-body-field");
  for (var a = 0;a < this.Wt.length;a++) {
    var b = this.Wt[a];
    b[0].qf || b[0].Ul(b[1]);
  }
  this.Wt.length = 0;
  z.Pe(this.$n);
  this.$n.length = 0;
  this.mf = this.Ge = this.yg = null;
  z.O1.F.Ja.call(this);
};
z.f.tF = function() {
  this.Xa() && (window.setTimeout(this.tF.bind(this), this.oq), z.s(this.save(), this.gO, this));
};
z.f.save = function(a) {
  var b = null, c = null;
  try {
    var d = new z.Zm, e = z.q0(this.pa), g = z.A(d, "baseRev", e).Hn(this.pa.ri()), h;
    U1(this);
    this.md.lp(z.vD(0, 0));
    for (var k = this.md, d = [], e = 0;e < k.nd.length;e++) {
      d.push(z.St.ve(k.nd[e].delta));
    }
    if (d.length) {
      var l = this.pa.jA;
      h = l.length ? l.map(z.St.ve, z.St).concat(d) : d;
    } else {
      h = d;
    }
    var n;
    n = z.A(g, "deltas", h);
    var r = this.pa.ga();
    r && n.Lc(r);
    b = n;
  } catch (w) {
    c = w;
  }
  this.Wu && (c = this.Wu);
  if (c) {
    return z.s(z.s(z.cd(c), this.qH, this), z.$s);
  }
  if (!z.y(b, "deltas").length) {
    return z.r0(this.pa) || l0(this.pa, "saved"), z.bd(null);
  }
  if (this.Wd && b.Yb(this.Eo)) {
    return this.Wd.Db();
  }
  z.S1(this);
  this.O("title-changed", z.Y1(this));
  l0(this.pa, "saving", a);
  this.Eo = b;
  c = !this.pa.ga();
  a = {logLockId:this.OG};
  if (c) {
    z.A(b, "deltas", []);
    b.Ml(!0);
    if (c = this.pa.LC()) {
      b.fq(c.importUrl), b.eq(c.originalPublishedAt);
    }
    b.ie(this.pa.xp() || 0);
    c = this.pa;
    b.Kj((c.fa ? c.fa.contentType : null) || 0);
    a = (c = this.pa.gs()) ? z.tV.N({postId:c}, a) : z.Rp.N({}, a);
    this.Wd = z.q(this.R.post(a, b, {dx:!0, oa:!0, background:!0}), this.wQ, this);
  } else {
    this.Wd = z.q(this.R.post(z.uV.N({postId:this.pa.ga()}, a), b, {dx:!0, oa:!0, gg:2, background:!0}), this.sA, this);
  }
  z.s(z.s(z.q(this.Wd, this.WS, this), this.qH, this), z.$s);
  return this.Wd.Db();
};
z.f.WS = function() {
  this.oq = 5E3;
};
z.f.gO = function() {
  this.oq = Math.min(6E4, 2 * this.oq);
};
z.f.DO = function() {
  this.ju || (this.Ge.Aa.Z().blur(), this.mf.focus());
};
z.f.sA = function(a) {
  if (!this.qf) {
    var b = this.pa.ri(), c = z.y(this.Eo, "deltas"), d = this.pa.jA;
    if (c.length) {
      var e = c.length - d.length;
      d.length = 0;
      this.md.nd.splice(0, e);
    }
    this.Eo = null;
    p0(this.pa, a);
    b = b || this.pa.ri();
    if (a = this.pa.Me) {
      d = [];
      for (e = 0;e < c.length;e++) {
        d.push((new z.Vl).Hn(b).Pl(z.q0(this.pa) - c.length + e + 1).Gx(c[e]).aa(z.S("currentUser.userId")).Ox((0,z.wo)()));
      }
      a.re(d);
    }
    this.Wd = null;
    l0(this.pa, "saved");
  }
};
z.f.wQ = function(a) {
  this.qf || (p0(this.pa, a), this.pa.Kd = null, this.O("post-created"), this.Wd = this.Eo = null, this.save());
};
z.f.qH = function(a) {
  if (410 == a.status) {
    return a = z.bd(!0), this.O("post-deleted", a), a;
  }
  if (401 == a.status) {
    return a = z.bd(!0), this.O("logged-out", a), a;
  }
  if (409 == a.status || 422 == a.status) {
    this.Wu || z.U(z.mX, {postId:this.pa.ga(), lockId:this.OG});
    this.Wu = a;
    var b = this.pa;
    b.bB = a;
    l0(b, "merge-error");
  } else {
    a instanceof z.ed || (b = this.pa, b.bB = a, l0(b, "error"));
  }
  this.Wd = this.Eo = null;
};
z.f.LO = function(a) {
  l0(this.pa, "editing");
  this.O("change", a);
};
z.f.J = function(a) {
  return this.va.J(a);
};
z.f.Kq = function() {
  var a = this.J(".postField--body");
  z.Uy(a);
  z.Sy(a);
};
z.f.CS = function() {
  var a = {title:z.W1(this), subtitle:z.X1(this)}, b = z.m0(this.pa), b = b ? b.id : null;
  a.latestRev = z.q0(this.pa);
  b && (a.collectionId = b);
  l0(this.pa, "publishing");
  b = z.MV.N({postId:this.pa.ga()});
  return z.q(this.R.post(b, a, {oa:!0}), this.nR, this);
};
z.f.nR = function(a) {
  p0(this.pa, a);
  var b = z.m0(this.pa);
  b && (this.pa.Kd = b.slug);
  this.pa.Nq || (a = a.value && a.value.slug) && (b = z.n0(this.pa)) && b.gc(a);
  l0(this.pa, "published");
  if (a = z.n0(this.pa)) {
    a.Ii(a.ri()), a.Ef(Date.now());
  }
};
z.f.NF = z.m(298);
z.f.So = z.m(299);
z.p(z.c2, z.qw);
z.c2.prototype.nb = function() {
  return this.pa;
};
})(_mdm);
