(function(z){
var $3 = function(a, b) {
  a.Ga && z.v(a.Ga, "u-hide", b);
};
var a4 = function(a) {
  return z.y(a, "replies");
};
var b4 = function(a) {
  var b = z.tv(a.className), c = "DIV" == a.tagName && z.jd(a, "graf--" + z.xv(14));
  return(!!c4[a.tagName] || c) && !!a.getAttribute("name") && 5 != b && 8 != b && 6 != b && 7 != b;
};
var d4 = function(a) {
  return z.q(new z.sd(a, !1, !0), function(a) {
    for (var c = [], d = 0;d < a.length;d++) {
      c[d] = a[d][1];
    }
    return c;
  });
};
var e4 = function(a) {
  return(0,z.K)(z.O(z.Fp(String(a.content))) + " —" + z.WQ(a) + " " + z.J(a.url));
};
var f4 = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.oj = b.getAttribute("name");
  this.highlight = c;
};
var g4 = function(a, b, c) {
  z.ft.call(this);
  this.$G = {};
  this.Mq = {};
  this.wG = {};
  this.xH = {};
  this.xk = null;
  this.ca = a;
  this.Le = a.get("request");
  this.za = a.get("modelStore");
  this.qa = b;
  this.zH = 0;
  this.Qq = c;
  this.KF = this.GG = !1;
  this.cf = null;
  this.Oa = "";
  this.$K = null;
};
var h4 = function(a, b) {
  var c = a.$G[b];
  c || (c = a.$G[b] = new z.wH, a.O("new_note_list", c, a));
  return c;
};
var i4 = function(a, b) {
  if (!b) {
    return!1;
  }
  var c = b.X();
  if (a.content == c.substring(a.startIndex, a.endIndex)) {
    return!0;
  }
  var d = new RegExp(z.Va(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], !0) : !1;
};
var j4 = function(a, b, c) {
  var d = b.ub(), e = h4(a, b.yc()), g = e ? e.indexOf(b) : -1, h = b.ui();
  b.Ze(c);
  "HIDDEN" == c ? a.za.remove(b) : b = z.UM(a.za, b);
  var k = e ? e.indexOf(b) : -1;
  return{pd:a.Le.put(z.XV.N({postId:a.qa, noteId:d}), {state:c}, {oa:!0}), GL:function() {
    b.Ze(h);
    -1 == k && (-1 == g ? e.add(b) : e.Om(b, g));
  }};
};
var k4 = function(a, b, c) {
  return a.Le.put(z.$V.N({postId:a.qa, noteId:c, replyId:b}), {state:"HIDDEN"}, {oa:!0});
};
var l4 = function(a, b, c) {
  b && b.forEach(function(a) {
    m4(this, a.anchor, a.count, a.userIds, c || {});
  }, a);
};
var m4 = function(a, b, c, d, e) {
  var g = z.S("currentUser.userId");
  e = d.map(function(a) {
    if (a != g) {
      return e[a];
    }
  }).filter(z.ac);
  b = a.Mq[b] = new z.ht({count:c, postId:a.qa, userIds:d || [], social:e, anchor:b});
  a.O("new_hearts_model", b, a);
  return b;
};
var n4 = function(a, b, c) {
  return z.q(a.Le.get(z.dW.N({postId:a.qa, anchor:b}, {pageNumber:c}), {oa:!0}), function(a) {
    return a.value;
  });
};
var o4 = function(a, b) {
  var c = z.R_(a, "title");
  c && b.call(void 0, c);
  (c = z.R_(a, "subtitle")) && b.call(void 0, c);
  a.querySelector(".postField--body") && z.hx(a.querySelector(".postField--body"), b4, z.dc(b, z.$b(!0)), void 0);
};
var p4 = function(a) {
  var b;
  b = String(a).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e");
  return z.Mo(a, z.Po) ? (0,z.K)(b, z.No(a)) : b;
};
var q4 = function(a, b, c) {
  z.vt.call(this);
  if (!a) {
    throw Error("Missing element for TemplateView");
  }
  this.Ga = a;
  this.Ec = b;
  this.Km = c;
  this.Iz = "list" + z.pa(this);
  this.Rq = "";
};
var r4 = function(a, b) {
  var c = !!b;
  if (a.Xa() && c) {
    for (var c = a.Gw(), d = 0;d < c.length;d++) {
      var e = a.pr(c[d]);
      a.O("after-draw", c[d], e);
    }
  }
};
var s4 = function(a, b) {
  var c = a.pm.call(null, b);
  return a.ph ? (a.ph[a.am] = c, c = z.xq(a.Km, a.ph), delete a.ph[a.am], String(c)) : String(z.xq(a.Km, c));
};
var t4 = function(a) {
  this.Zh = a;
};
var u4 = function(a, b, c) {
  o4(a.Zh, function(a) {
    var e = a.getAttribute("name");
    e && b.call(c, a, e);
  });
};
var v4 = function(a, b) {
  return z.re(a.Zh, b) ? a.Zh : null;
};
var w4 = function(a, b) {
  var c;
  c = v4(a, b);
  return(c = z.Yr(b, b4, c)) && c.getAttribute("name") || null;
};
var x4 = function(a, b, c) {
  (a = z.Qw(c, v4(a, c))) && z.v(b, "is-darkBackgrounded", z.jd(a, "is-darkBackgrounded"));
};
var y4 = function(a, b, c, d) {
  z.rH.call(this, a, b, "Leave a note", 400, d || null);
  this.qa = c;
};
var z4 = function(a, b, c) {
  a.ry = b;
  a.qF = c.text;
  a.sy = c.image;
};
var A4 = function(a, b, c, d) {
  a.Gz = b;
  a.Fz = c;
  a.vG = d;
};
var B4 = function(a, b, c) {
  return(0,z.K)('\x3cdiv class\x3d"paragraphControls u-noUserSelect' + (c.variants.enable_paragraph_recommends ? "paragraphControls--small" : "") + '"\x3e' + (c.variants.enable_paragraph_recommends ? C4(a, 0, c) : D4(a)) + "\x3c/div\x3e");
};
var D4 = function(a) {
  var b = '\x3cdiv class\x3d"notesMarker u-noUserSelect" data-action\x3d"select-anchor" data-action-value\x3d"' + z.P(a.oj) + '"\x3e' + E4({count:a.Ns}) + '\x3c/div\x3e\x3cspan class\x3d"notesMarker-text"\x3e', c = "" + z.O(z.TH(z.L(a, {wD:!0, type:"notes", fc:a.ZK, social:a.YK, Xa:a.aL, DK:!0}))), c = (0,z.Y)(c), b = b + (z.O(z.XH(z.L(a, {text:c, type:"notes"}))) + "\x3c/span\x3e");
  return(0,z.K)(b);
};
var C4 = function(a, b, c) {
  return(0,z.K)('\x3cdiv class\x3d"paragraphControls-block"\x3e' + F4(z.L(a, {type:"notes", fc:a.ZK, JL:a.Uw, social:a.YK, Xa:a.aL}), c) + F4(z.L(a, {type:"hearts", fc:a.Uw, JL:a.Ns, social:a.dW, Xa:a.eW}), c) + "\x3c/div\x3e");
};
var F4 = function(a, b) {
  var c = '\x3cdiv class\x3d"paragraphControls-buttonSet paragraphControls-buttonSet--' + z.P(a.type) + '"\x3e\x3cbutton class\x3d"button button--chromeless paragraphControls-item paragraphControls-item--icon ' + (a.Xa ? "is-active" : "") + '"' + (b.isAuthenticated ? 'data-action\x3d"' + ("notes" == a.type ? "select-anchor" : "recommend-anchor") + '" data-action-value\x3d"' + z.P(a.oj) + '"' : 'data-action\x3d"sign-in-prompt" data-requires-token\x3d"true" data-redirect\x3d"/_/recommend-graf/' + z.P(a.postId) + 
  "/" + z.P(a.oj) + '"') + "\x3e" + ("notes" == a.type ? '\x3cspan class\x3d"icon icon--notesHollow2"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"icon icon--heart"\x3e\x3c/span\x3e\x3cspan class\x3d"icon icon--heartThin"\x3e\x3c/span\x3e') + (a.fc || a.JL ? "" : '\x3cspan class\x3d"button-text"\x3e' + ("notes" == a.type ? "Comment" : "Recommend") + "\x3c/span\x3e") + "\x3c/button\x3e";
  if (a.fc) {
    c += '\x3cspan class\x3d"paragraphControls-item paragraphControls-item--count"\x3e\x3cspan class\x3d"paragraphControls-itemText paragraphControls-itemText--social"\x3e';
    if ("notes" == a.type) {
      var d = "" + z.O(z.TH(z.L(a, {wD:!0}))), d = (0,z.Y)(d), c = c + z.O(z.XH(z.L(a, {text:d})))
    } else {
      c += z.O(z.TH(a));
    }
    c += '\x3c/span\x3e\x3cspan class\x3d"paragraphControls-itemText paragraphControls-itemText--count"\x3e' + z.J(a.fc) + "\x3c/span\x3e\x3c/span\x3e";
  }
  return(0,z.K)(c + "\x3c/div\x3e");
};
var E4 = function(a) {
  return(0,z.K)("remove" == a.count ? '\x3cspan class\x3d"icon--notesMarker icon icon--notes"\x3e\x3c/span\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"icon--notesMarker icon icon--notesHollow"\x3e\x3c/span\x3e\x3cspan class\x3d"notesMarker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"icon--notesMarker icon icon--notes"\x3e\x3c/span\x3e\x3cspan class\x3d"notesMarker-count"\x3e' + z.J(a.count) + "\x3c/span\x3e");
};
var G4 = function(a, b, c) {
  return(0,z.K)('\x3cbutton class\x3d"button button--chromeless button--dismissNotes" data-action\x3d"dismiss-note"\x3e' + E4({count:"remove"}) + '\x3c/button\x3e\x3cdiv class\x3d"notesList ' + (c.variants.enable_paragraph_recommends ? "v-enableParagraphRecommends" : "") + '"\x3e\x3cdiv class\x3d"notesItems"\x3e\x3c/div\x3e\x3cdiv class\x3d"newNoteEditor" tabIndex\x3d"-1"\x3e\x3cbutton class\x3d"button button--chromeless button--addNotes"' + (c.isAuthenticated ? 'data-action\x3d"start-note"' : z.lp(z.vA(null))) + 
  'title\x3d"Leave a note"\x3e\x3cspan class\x3d"icon icon--addCircled icon--addNotes"\x3e\x3c/span\x3e\x3cspan class\x3d"notesAddText"\x3eLeave a note for \x3cspan class\x3d"js-notesPostCreator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notesAddCreatorText"\x3eLeave a note\x3c/span\x3e\x3c/button\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notesEditContainer is-notesEditMode"\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.O(z.RA({Xk:!0, user:c.currentUser}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + 
  z.J(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notesItemEditor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e\x3cbutton class\x3d"button button--chromeless button--primary button--withoutSeperator button--editNotesAction" data-action\x3d"save-note"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--editNotesAction" data-action\x3d"cancel-note"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"notesDisclaimer"\x3eThis note is only visible to the author, anyone @ mentioned, and collection editors (if any). The author or editors can choose to make it public.\x3c/div\x3e\x3c/div\x3e' : 
  "") + "\x3c/div\x3e\x3c/div\x3e");
};
var H4 = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : null;
  b = '\x3cdiv class\x3d"notesItem-inner"\x3e\x3cdiv class\x3d"notesItem-main"\x3e' + ('\x3cspan class\x3d"notesState-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notesControls"\x3e' + (a.Qk ? '\x3cul class\x3d"notesState notesState-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icon icon--notesStateDown"\x3e\x3c/span\x3e\x3c/li\x3e' + (a.uD ? "" : '\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  z.P(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--group"\x3e\x3c/span\x3ePublic\x3c/li\x3e') : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icon icon--group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icon icon--notesStateDown"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + z.P(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.VD.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  z.P(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notesState"\x3e\x3cli data-tooltip\x3d"This note is only visible to the author, anyone @ mentioned, and collection editors (if any). The author or editors can choose to make it public.."\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3cbutton data-action\x3d"show-note-permalink" data-action-value\x3d"' + 
  z.P(a.note.anchor) + "-" + z.P(a.note.noteId) + '" class\x3d"notesLink icon icon--link" data-tooltip\x3d"Click to update the address bar with this note’s shareable link"\x3e' : "") + '\x3c/div\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.O(z.RA({user:a.note.author}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + (d ? '\x3ca href\x3d"/@' + z.P(a.note.author.username) + '" title\x3d"Go to the profile of ' + z.P(a.note.author.name) + '"\x3e' + z.J(a.note.author.name) + "\x3c/a\x3e" : "\x3ci\x3eUnknown user\x3c/i\x3e") + 
  '\x3c/div\x3e\x3cdiv class\x3d"notesContent"\x3e' + p4(z.O(z.Mp(String(a.note.content)))) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + (d == c.currentUser.userId ? '\x3cbutton class\x3d"button button--chromeless button--notesTextAction" data-action\x3d"edit-note" data-action-value\x3d"' + z.P(a.note.noteId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--primary button--withoutSeperator button--editNotesAction" data-action\x3d"save-note" data-action-value\x3d"' + 
  z.P(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--editNotesAction" data-action\x3d"cancel-note" data-action-value\x3d"' + z.P(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--editNotesAction" data-action\x3d"delete-note" data-action-value\x3d"' + z.P(a.note.noteId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, g = Math.max(a.note.replies.length - a.Al, 0);
  if (e) {
    b += '\x3cdiv class\x3d"notesReplies ' + (0 < g ? "notesReplies--hidden" : "") + '"\x3e\x3cdiv class\x3d"notesReplies-inner"\x3e';
    if (0 < g) {
      b += '\x3cbutton data-action\x3d"show-hidden-note-replies" class\x3d"button button--chromeless button--hiddenNotesReplies"\x3eView ' + z.J(g) + " " + (a.Al ? "more" : "") + " " + (1 < g ? "replies" : "reply") + '\x3c/button\x3e\x3cdiv class\x3d"notesReplies-container"\x3e';
      for (var h = a.note.replies, k = h.length, l = 0;l < k;l++) {
        var n = h[l];
        b += l < g ? I4(z.L(a, {De:n}), c) : "";
      }
      b += "\x3c/div\x3e";
    }
    h = a.note.replies;
    k = h.length;
    for (l = 0;l < k;l++) {
      n = h[l], b += l >= g ? I4(z.L(a, {De:n}), c) : "";
    }
    b += "\x3c/div\x3e\x3c/div\x3e";
  }
  b += '\x3cdiv class\x3d"notesReplies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notesReply notesReply--creator is-notesEditMode"\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.O(z.PA({user:c.currentUser}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e\x3ca href\x3d"/@' + z.P(c.currentUser.username) + '" title\x3d"Go to the profile of ' + z.P(c.currentUser.name) + '"\x3e' + z.J(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notesReply-editor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e\x3cbutton class\x3d"button button--chromeless button--primary button--withoutSeperator button--editNotesAction" data-action\x3d"save-reply" data-action-value\x3d"' + 
  z.P(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--editNotesAction" data-action\x3d"cancel-reply" data-action-value\x3d"' + z.P(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e' : "") + '\x3cbutton class\x3d"button button--chromeless button--primary button--notesReplyLink"' + (c.isAuthenticated ? 'data-action\x3d"start-reply" data-action-value\x3d"' + z.P(a.note.noteId) + '"' : z.lp(z.vA(null))) + 'title\x3d"Leave a reply"\x3e' + 
  (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + z.J(a.note.author.name)) + "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e";
  return(0,z.K)(b);
};
var I4 = function(a, b) {
  return(0,z.K)('\x3cdiv class\x3d"notesReply"\x3e' + (a.Qk && (null == a.De.author ? null : a.De.author.userId) != b.currentUser.userId ? '\x3cdiv class\x3d"notesReply-hider" data-action\x3d"hide-reply" data-action-value\x3d"' + z.P(a.note.noteId) + "," + z.P(a.De.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + '\x3cdiv class\x3d"notesAvatar"\x3e' + z.O(z.PA({user:a.De.author}, b)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + 
  (a.De.author ? '\x3ca href\x3d"/@' + z.P(a.De.author.username) + '" title\x3d"Go to the profile of ' + z.P(a.De.author.name) + '"\x3e' + z.J(a.De.author.name) + "\x3c/a\x3e" : "\x3ci\x3eUnknown user\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notesContent"\x3e' + p4(z.O(z.Mp(String(a.De.content)))) + "\x3c/div\x3e" + (b.isAuthenticated ? a.De.author && a.De.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e\x3cbutton class\x3d"button button--chromeless button--notesTextAction" data-action\x3d"edit-reply" data-action-value\x3d"' + 
  z.P(a.note.noteId) + "," + z.P(a.De.replyId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--primary button--withoutSeperator button--editNotesAction" data-action\x3d"save-reply" data-action-value\x3d"' + z.P(a.De.replyId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--editNotesAction" data-action\x3d"cancel-reply" data-action-value\x3d"' + z.P(a.De.replyId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"button button--chromeless button--editNotesAction" data-action\x3d"delete-reply" data-action-value\x3d"' + 
  z.P(a.De.replyId) + '"\x3eDelete\x3c/button\x3e\x3c/div\x3e' : "" : "") + "\x3c/div\x3e");
};
z.IH = function(a, b, c) {
  a = a || {};
  return(0,z.K)('\x3cbutton class\x3d"button button--chromeless notesVote-mobileTapButton" data-action\x3d"enter-editor-mode"\x3e\x3cdiv class\x3d"u-muted notesVoteEditor--wrapper"\x3e\x3cdiv class\x3d"notesVoteEditor notesEditor"\x3e' + z.O(z.AH({yK:!0, hg:a.hg})) + '\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e\x3cspan class\x3d"button button--primary ' + (c.useragent.isMobile ? "" : " button--chromeless") + '" \x3e' + z.O((0,z.K)("Send")) + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e" + 
  (a.hg && 0 != a.hg ? "" : J4({BW:!0})) + "\x3c/button\x3e");
};
z.xI = function() {
  return(0,z.K)('\x3cbutton class\x3d"button button--chromeless notesVote-mobileTapButton" data-action\x3d"enter-editor-mode"\x3eTap to leave a recommend note.\x3c/button\x3e\x3cbutton class\x3d"button button--small button--chromeless button--circle noteVote-mobileExitButton" data-action\x3d"exit-editor-mode"\x3e\x3cspan class\x3d"icon icon--removeMedia"\x3e\x3c/span\x3e\x3c/button\x3e');
};
var J4 = function(a) {
  return(0,z.K)('\x3cdiv class\x3d"notesVoteSocialShare"\x3e\x3cspan class\x3d"notesVoteSocialShare-prompt"\x3e' + z.O((0,z.K)("Share this story")) + "\x3c/span\x3e" + K4(z.L(a, {title:(0,z.Y)("" + z.O(z.Lz())), action:"share-on-twitter", icon:"icon--twitter"})) + K4(z.L(a, {title:(0,z.Y)("" + z.O(z.Mz())), action:"share-on-facebook", icon:"icon--facebook"})) + K4(z.L(a, {title:(0,z.Y)("" + z.O(z.Nz())), action:"share-by-email", icon:"icon--email"})) + "\x3c/div\x3e");
};
z.SZ = function(a, b, c) {
  a = a || {};
  return(0,z.K)('\x3cbutton class\x3d"button button--small button--chromeless button--circle noteVote-mobileExitButton" data-action\x3d"exit-editor-mode"\x3e\x3cspan class\x3d"icon icon--removeMedia"\x3e\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"notesVoteEditor--wrapper js-notesVoteEditorWrapper"\x3e\x3cdiv class\x3d"js-notesVoteEditor notesVoteEditor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e\x3cbutton class\x3d"button button--primary ' + (c.useragent.isMobile ? 
  "" : " button--chromeless") + '" data-action\x3d"save-notes-vote"\x3e' + z.O((0,z.K)("Send")) + '\x3c/button\x3e\x3cbutton class\x3d"button' + (c.useragent.isMobile ? "" : " button--chromeless") + '" data-action\x3d"exit-editor-mode"\x3e' + z.O((0,z.K)("Skip")) + '\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"notesVote-message js-notesVoteMessage u-hide"\x3e' + (a.hg && 0 != a.hg ? z.O((0,z.K)("Your note will be shared with the author.")) : z.O((0,z.K)("Your note will be shared with the author and visible to your " + 
  z.J(c.productName) + " followers."))) + "\x3c/div\x3e" + (a.hg && 0 != a.hg ? "" : J4(null)));
};
var K4 = function(a) {
  var b = a.BW ? "span" : "button";
  a = "" + ("\x3c" + z.Dp(b) + ' class\x3d"button button--chromeless" title\x3d"' + z.P(a.title) + '" data-action\x3d"' + z.P(a.action) + '"\x3e\x3cspan class\x3d"icon ' + z.P(a.icon) + '"\x3e\x3c/span\x3e\x3c/' + z.Dp(b) + "\x3e");
  return(0,z.K)(a);
};
var L4 = function(a) {
  var b = "";
  if (10 < a.count) {
    b += '\x3cdiv class\x3d"slideIndicator-fraction"\x3e1 of ' + z.J(a.count) + "\x3c/div\x3e";
  } else {
    if (1 < a.count) {
      b += '\x3cul class\x3d"slideIndicators"\x3e';
      a = a.count;
      for (var c = 0;c < a;c++) {
        b += '\x3cli class\x3d"slideIndicator"\x3e\x3c/li\x3e';
      }
      b += "\x3c/ul\x3e";
    }
  }
  return(0,z.K)(b);
};
var M4 = function(a, b, c, d) {
  z.vt.call(this);
  this.ST = a;
  this.ya = b;
  this.If = c;
  this.qa = d;
  a = window.document.createElement("div");
  a.className = "notesMarkers";
  z.ge(a, this.ST);
  this.qm = a;
  this.oe = {};
  this.bo = this.zo = null;
};
var N4 = function(a, b) {
  var c = h4(a.ya, b), d = z.S("variants.enable_paragraph_recommends") ? a.ya.Mq[b] : null, e = c ? c.mb() : 0, g = 0, h = d ? d.get("count") : 0, k = d && ~d.get("userIds").indexOf(z.S("currentUser").userId), l = !1, n = {}, r = {};
  c.Qc(function(a) {
    var b = a.Yr();
    b && ((a = a4(a)) && a.forEach(function(a) {
      g++;
      a.author && (a.author.userId == z.S("currentUser").userId && (l = !0), a.author.social && a.author.social.isFollowing && (r[a.author.userId] = a.author), n[a.author.userId] = !0);
    }), n[b.userId] = !0, b.userId == z.S("currentUser").userId && (l = !0), b.social && b.social.isFollowing && (r[b.userId] = b));
  });
  return{postId:a.qa, oj:b, Ns:e + g, ZK:Object.keys(n).length, Uw:h, aL:l, YK:z.Ab(r), eW:k, dW:d && d.get("social")};
};
var O4 = function(a, b, c) {
  var d = a.If.get(b);
  if (d) {
    z.v(d, "is-notesSourceActive", c);
    var e = a.oe[b];
    e && (z.v(e, "is-active", c), c = z.Lg(d, "float"), e.style.left = "left" == c ? "0" : -1 * z.bh(d, "margin").right + "px", a = b ? z.R_(a.If.Zh, b) : null) && (b = z.tv(a.className), z.v(e, "is-notesSourceFloated", 2 == b || 4 == b), z.v(e, "u-hide", z.Wr(a, !1)), b = 3 == b, z.v(e, "is-notesSourceOutsetCenter", b), a = b || 7 == z.kx(a), z.v(e, "is-withoutSocialLine", a));
  }
};
var P4 = function(a) {
  var b = {};
  u4(a.If, function(a, d) {
    if (!(d in b)) {
      var e;
      e = z.h0(a, this.qm).y + z.ch(a).top;
      b[d] = e;
    }
  }, a);
  return b;
};
var Q4 = function(a) {
  var b = P4(a), c = {};
  u4(a.If, function(a, d) {
    if (!c[d]) {
      var h;
      if (this.oe[d]) {
        h = this.oe[d];
      } else {
        h = N4(this, d);
        var k = z.zq(B4, h);
        this.qm.appendChild(k);
        if (0 < h.Ns || 0 < h.Uw) {
          z.t(a, "is-withNotes"), z.t(k, "is-withNotes");
        }
        h = this.oe[d] = k;
      }
      h.style.top = b[d] + "px";
      O4(this, d, d == this.ya.Oa);
      c[d] = !0;
      x4(this.If, h, a);
    }
  }, a);
  for (var d in a.oe) {
    c[d] || (z.ie(a.oe[d]), delete a.oe[d]);
  }
};
var R4 = function(a, b) {
  if (a.ya.Lh()) {
    var c = b || a.ya.Oa, d = a.oe[c];
    d && (c = N4(a, c), z.S("variants.enable_paragraph_recommends") ? (z.yq(d, C4, c), z.v(d, "is-withNotes", 0 < c.Ns || 0 < c.Uw)) : (z.yq(d, D4, c), z.v(d, "is-withNotes", 0 < c.Ns)));
  }
};
var S4 = function(a, b, c, d, e) {
  z.rH.call(this, a, b, "Leave a reply", 200, d);
  this.qa = c;
  this.mv = e || null;
};
var T4 = function(a) {
  z.Ke.call(this);
  var b = z.mg();
  this.Ar = b && new U4(z.lh(b, !0), a);
  this.dz = b && new U4(z.lh(b, !1), a);
};
var U4 = function(a, b) {
  this.pe = a;
  this.tO = b;
  var c = z.gx(a.ia, b);
  this.sF = (this.Hf = c) && c.getAttribute("name");
  this.bH = c ? z.ps(a, c) : -1;
};
var V4 = function(a) {
  var b = window.document.body;
  return z.re(b, a.pe.ia) ? a.pe : a.Hf && z.re(b, a.Hf) ? z.qs(a.bH, a.Hf) : a.sF && (b = z.R_(a.tO, a.sF)) ? z.qs(a.bH, b) : null;
};
var W4 = function(a, b, c, d) {
  z.ft.call(this);
  this.Fx = a;
  this.screen = a.get("screen");
  this.ep = a.get("app");
  this.post = b;
  this.fI = b.clone();
  var e = b.ym;
  e && e.L("change", this.pG, this);
  this.Oc = {};
  this.kc = [];
  this.VB = a.get("butter-bar");
  this.Xm = a.get("dialog");
  this.Sh = c;
  e = c.querySelector(".notesSource");
  this.anchors = new t4(e);
  var g = z.Vd("div", "layoutSingleColumn notesPositionContainer");
  z.he(this.Sh, g, 0);
  this.FX = g;
  g = window.document.createElement("div");
  g.className = "notesContainer";
  z.yq(g, G4);
  this.FX.appendChild(g);
  this.Qe = g;
  this.Kr = c.querySelector(".postField--body");
  this.lc = this.Qe.querySelector(".notesList");
  this.Jl = z.es(e);
  this.isAuthenticated = !!z.S("isAuthenticated");
  this.currentUser = z.S("currentUser");
  this.postId = b.Ca();
  this.Qk = d;
  this.jD = "true" == this.Kr.contentEditable;
  this.data = new g4(a, this.postId, this.jD);
  this.data.L("new_note_list", this.fR, this);
  this.data.L("new_hearts_model", this.eR, this);
  if (this.Nm = a.get("voteWidget")) {
    a = this.Nm, b = this.data, a.Zq = b, a.Xa() && (b = b.load(), z.q(z.Wc(z.jI(a), b), a.nF, a));
  }
  this.Xc = new M4(this.Qe, this.data, this.anchors, this.postId);
  this.Xc.V();
  this.wb = new z.ut;
  this.Rr = z.q(this.data.load(), this.HD, this);
  z.Wv(this.Xc.qm).H("select-anchor", this.LD, this).H("recommend-anchor", this.oR, this).H("show-graf-recommends", this.rH, this);
  z.Wv(this.Qe).H("show-hidden-note-replies", this.iL, this).H("start-reply", this.OR, this).H("save-reply", this.xR, this).H("edit-reply", this.JQ, this).H("cancel-reply", this.pQ, this).H("delete-reply", this.BQ, this).H("approve-note", this.kQ, this).H("unapprove-note", this.WR, this).H("edit-note", this.IQ, this).H("save-note", this.wR, this).H("cancel-note", this.oQ, this).H("delete-note", this.AQ, this).H("hide-note", this.RQ, this);
  this.ep.L("historyUpdate", this.hH, this);
};
var X4 = function(a) {
  if (a.vd && a.vd.ts()) {
    return!0;
  }
  for (var b in a.Oc) {
    if (a.Oc[b].ts()) {
      return!0;
    }
  }
  return!1;
};
var Y4 = function(a) {
  var b = new z.Jc, c = a.Xm.open({title:(0,z.K)("Uh oh!"), bodyHtml:(0,z.K)("You have unsaved notes. Are you sure you want to abandon them?"), type:z.WZ});
  c ? (c.L(z.XK, b.hb.bind(b, !0)), c.L(z.YK, function() {
    this.DJ();
    b.cancel();
  }, a)) : b.cancel();
  return b;
};
var Z4 = function(a) {
  z.Oe(a.vd);
  a.vd = null;
  for (var b in a.Oc) {
    z.Oe(a.Oc[b]), delete a.Oc[b];
  }
};
var $4 = function(a, b, c) {
  var d = b.ui(), e = "PUBLIC" == c ? (0,z.K)("Note was made public.") : "HIDDEN" == c ? (0,z.K)("Note was dismissed.") : "NEW" == c ? (0,z.K)("Note was made private.") : "", g = j4(a.data, b, c);
  z.s(z.q(g.pd, function() {
    z.q(this.VB.V(e, {type:z.RM, qt:!0}), function() {
      g.GL();
      $4(this, b, d);
    }, this);
    a5(this, z.FX, b, {noteState:c, previousNoteState:d});
  }, a), function(a) {
    this.VB.V((0,z.K)("Could not change note state"), z.EI);
    g.GL();
    (400 > a.status || 499 < a.status) && $4(this, b, d);
  }, a);
  return g.pd;
};
var b5 = function(a, b) {
  var c = b.value;
  return c ? a.Oc[c] : a.vd;
};
var c5 = function(a, b) {
  var c = a.data.uj(a.anchors.get(b));
  return{text:c.X(), image:4 == c.type ? c.fd() : null};
};
var d5 = function(a, b) {
  var c = b || a.Eg, d = a.data.rd(c, a.data.Oa), e = a.lc.querySelector('[data-note-id\x3d"' + c + '"]');
  z.t(e, "is-showingNotesReplyCreator");
  var g = a.Oc["reply_" + c];
  g || (e = e.querySelector(".notesReply-editor"), g = new S4(a.Fx, e, a.postId, c), g.L("change", a.pj, a), g.L("cancel", function() {
    g.clear();
  }, a), g.L("save", function(a) {
    g.clear();
    a4(d).push(a);
    a5(this, z.GX, d, {replyId:a.Jc()});
    this.Oh.Xp(d);
  }, a), a.Oc["reply_" + c] = g);
  g.focus();
};
var a5 = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = c.ub();
  d.noteType = c.Hh() ? "highlight" : "paragraph";
  z.U(b, d);
};
var e5 = function(a, b, c) {
  var d = z.mg(), d = d && v4(a.anchors, z.rf(d)), e = c && d && new T4(d);
  z.q(f5(a, b && b.anchor || a.data.Oa), function() {
    if (b != this.li) {
      var a = this.li;
      a && g5(this, a, !1);
      b && g5(this, b, !0);
      this.li = b;
    }
    (a = e && e.restore()) && a.select();
  }, a);
};
var g5 = function(a, b, c) {
  var d = b.anchor, e = d ? z.R_(a.anchors.Zh, d) : null;
  if (e = a.data.uj(e)) {
    z.Nu(e, 4);
    if (c) {
      if (!i4(b, e)) {
        return;
      }
      z.Hu(e, z.Su(b.startIndex, b.endIndex, b.id));
    }
    b = a.anchors.get(d);
    a = {ue:!a.jD, isPublished:!!a.post.tj(), media:null, sections:!0, Cl:!1, Rk:!1, Vf:!1};
    a = z.Kx(new z.yx(z.tq, a), e, void 0);
    b.innerHTML = a;
  }
};
var h5 = function(a, b, c) {
  if (b != a.Eg) {
    c || z.KK(a.ep, "");
    (c = a.lc.querySelector(".is-activeNote")) && z.u(c, "is-activeNote");
    c = a.Eg = null;
    if (b && a.data.Oa) {
      var d = a.data.rd(b, a.data.Oa);
      d && (c = a.lc.querySelector('[data-note-id\x3d"' + b + '"]')) && (z.t(c, "is-activeNote"), a.Eg = b, b = (b = d.Hh()) ? a.data.sp(b) : null, e5(a, b || null));
    }
    z.v(a.lc, "notesItem--selected", !!c);
  }
};
var f5 = function(a, b) {
  var c = b != a.data.Oa;
  if (c && X4(a)) {
    return z.q(Y4(a), function() {
      Z4(this);
      return f5(this, b);
    }, a);
  }
  a.li && (g5(a, a.li, !1), a.li = null);
  if (!c) {
    return z.bd();
  }
  h5(a, null);
  a.data.Oa && O4(a.Xc, a.data.Oa, !1);
  Z4(a);
  z.Oe(a.Oh);
  a.Oh = null;
  z.t(a.lc, "is-hidingNotesEditor");
  a.data.Oa = b && a.Xc.oe[b] ? b : "";
  a.data.Oa ? a.Jr() : a.mC();
  a.pj();
  return z.bd();
};
var i5 = function() {
  var a = (window.document.location.hash ? window.document.location.hash.substr(1) : "").split("-"), b = a[1] || null, c = a[2] || null, d = a[3] || null, e = a[4] || null;
  return b || c ? {cC:c, anchor:a[0], highlight:(b || d && e) && {startIndex:Number(d), endIndex:Number(e), id:b}} : {};
};
var j5 = function(a, b) {
  if (a.isAuthenticated) {
    z.Oe(a.vd);
    var c = a.J(".notesItemEditor"), d = null, e = null;
    if ("string" == typeof b) {
      d = b;
    } else {
      if (b instanceof f4) {
        e = b.highlight, d = e.anchor;
      } else {
        throw Error("Missing assoc for note editor");
      }
    }
    c.innerHTML = "";
    a.vd = new y4(a.Fx, c, a.postId);
    z4(a.vd, d, c5(a, d));
    e && A4(a.vd, e.startIndex, e.endIndex, e.content);
    a.vd.L("change", a.pj, a);
    a.vd.L("save", a.GD, a);
    a.vd.L("cancel", function() {
      h4(this.data, d).mb() ? z.t(this.lc, "is-hidingNotesEditor") : f5(this, null);
      h5(this, null);
    }, a);
    z.u(a.lc, "is-hidingNotesEditor");
  }
};
var k5 = function(a, b, c, d, e, g) {
  W4.call(this, a, b, c, d);
  this.eB = z.Ev(a.get("screen"));
  this.Qq = g;
  this.Pa = a.get("dom-monitor");
  this.Pa.L("resize-end", this.Mu, this);
  this.Pa.L("inner-resize-end", this.Mu, this);
  this.Ld = a.get("element-tracker");
  this.Zo = a.get("twitter");
  z.Wv(this.Qe).H("hide-reply", this.SQ, this).H("start-note", this.NR, this).H("show-note-permalink", this.KR, this);
  e.L("update", this.uH, this);
  e.L("highlight", this.gH, this);
  e.L("twitter", this.fH, this);
  this.Kb = e;
  [this.anchors.Zh].forEach(function(a) {
    this.kc.push(z.T(a, "click", this.FR, this));
  }, this);
  this.kc.push(z.T(window.document.body, "click", this.qQ, this, !0));
};
var l5 = function(a) {
  if (a.vd) {
    var b = a.eB, c = b.scrollTop, d = b.scrollLeft;
    a.vd.focus();
    b.scrollTop = c;
    b.scrollLeft = d;
  }
};
var m5 = function(a, b) {
  for (var c = b ? 1 : -1, d = a.parentNode.childNodes, e = d.length, g = (0,z.gb)(d, a), h = z.Dy(a, 0), k = z.Mq(h), h = 1 != z.wn(h), l = a, g = g + c;0 <= g && g < e;g += c) {
    var n = d[g];
    if ("SECTION" === n.tagName) {
      var r = z.Dy(n, 0), w = z.Mq(r), r = 1 != z.wn(r);
      if (k != w || r || h) {
        break;
      } else {
        l = n;
      }
    }
  }
  return l;
};
var n5 = function(a) {
  var b = a.Kr.querySelectorAll(".js-is-spacedForNoteList"), c = !1;
  (0,z.wb)(b, function(a) {
    a.style.paddingBottom = "";
    a.style.paddingTop = "";
    z.u(a, "js-is-spacedForNoteList");
    c = !0;
  });
  c && (Q4(a.Xc), a.Ld.Tg());
};
var o5 = function(a, b) {
  e5(a, b.highlight);
  p5(a, {scroll:!0, Ni:!0});
  j5(a, b);
  a.vd && l5(a);
  a.O(z.Y3);
};
var q5 = function(a, b) {
  h4(a.data, b).mb() || (j5(a, b), a.vd && l5(a));
};
var r5 = function(a, b) {
  z.q(f5(a, b), function() {
    q5(this, b);
    n5(this);
    s5(this, {scroll:!0, Ni:!0});
    this.lc.style.top = Math.round(z.ds(this.Xc.oe[b])) + "px";
    this.pj();
  }, a);
};
var t5 = function(a, b, c) {
  if (!a.data.Oa) {
    return z.bd(!0);
  }
  n5(a);
  var d = z.ds(b);
  c && (d -= z.cs(c, a.lc).y);
  d = Math.round(d + z.ch(b).top);
  a.lc.style.top = d + "px";
  a.pj();
  if (1 > Math.abs(a.lc.offsetTop - d) || !(0,z.i2)()) {
    return z.bd(!0);
  }
  b = new z.Jc;
  z.Mr(a.lc, z.GR, b.hb.bind(b, a));
  return b;
};
var u5 = function(a, b, c) {
  var d = a.anchors.get(a.data.Oa);
  if (!a.isAuthenticated) {
    var e = a.data.Oa, e = a.li ? e + ("--highlight-" + a.li.startIndex + "-" + a.li.endIndex) : e + "--newNote";
    a.lc.querySelector(".button--addNotes").setAttribute("data-redirect", z.Fr() + "#" + e);
  }
  d && (e = d.querySelector(".markup--highlight"), a = t5(a, c.Ni && e ? e : d, b), c.scroll && z.q(a, function() {
    z.ls(b, z.TZ);
  }));
};
var p5 = function(a, b) {
  var c = a.lc.querySelector(".newNoteEditor");
  c && u5(a, c, b);
};
var v5 = function(a, b, c) {
  b = a.lc.querySelector('[data-note-id\x3d"' + b + '"]');
  u5(a, b, c);
};
var s5 = function(a, b) {
  if (a.data.Oa) {
    var c = h4(a.data, a.data.Oa), d = c.mb();
    (c = d ? c.Zk(0).ub() : null) ? (1 == d && h5(a, c), b.Ni = !1, v5(a, c, b)) : p5(a, b);
  }
};
var w5 = function(a, b) {
  return b == a.data.Oa ? z.q(f5(a, null), z.bD) : z.q(f5(a, b), z.$b(!!b));
};
var x5 = function(a, b, c) {
  var d = z.Fe(b.target, null, "notesItem");
  !d || b.relatedTarget && z.re(d, b.relatedTarget) || !(b = a.data.rd(d.getAttribute("data-note-id"), a.data.Oa)) || (d = null, c ? d = b.Hh() : a.Eg && (d = a.data.rd(a.Eg, a.data.Oa).Hh()), e5(a, d ? a.data.sp(d) : null, a.jD));
};
var y5 = function(a) {
  z.Ke.call(this);
  this.ca = a;
};
var z5 = function(a, b) {
  z.ft.call(this);
  this.ca = a;
  this.Mb = b;
  this.mq();
};
var A5 = function(a) {
  a = z.U_(a.Mb, "transform").match(/translate3d\(([^,]*)/);
  return(0,window.parseInt)(a ? a[1] : 0, 10);
};
var B5 = function(a, b, c, d) {
  var e = b != a.Cv;
  a.Cv = b;
  a.Hu = b * a.Dv;
  z.Jg(a.Mb, "transition-duration", c);
  z.Jg(a.Mb, "transform", "translate3d(" + a.Hu + "px,0,0)");
  if (e || d) {
    c = b = Math.abs(b);
    d = a.Mb.children;
    if (10 < d.length) {
      if (e = a.Mb.parentNode.getElementsByClassName("slideIndicator-fraction")[0]) {
        e.innerHTML = c + 1 + " of " + d.length;
      }
    } else {
      if (d = a.Mb.parentNode.getElementsByClassName("slideIndicators")[0]) {
        (e = d.getElementsByClassName("is-active")[0]) && z.u(e, "is-active"), (e = d.children[c]) && z.t(e, "is-active");
      }
    }
    a.O("slide", b, a);
  }
};
var C5 = function(a, b, c, d) {
  W4.call(this, a, b, c, d);
  this.aH = this.J(".notesItems");
  this.Uy = a.get("diagnostics");
  this.Mb = new z5(a, this.aH);
  this.Mb.L("slide", this.sH, this);
  this.Jf = this.Bv = null;
  z.Wv(this.Qe).H("dismiss-note", this.mA, this).H("toggle-note-dropdown", function(a) {
    z.nd(a.target, "is-open");
  });
  this.kc.push(z.T(this.Qe, "click", this.eH, this));
  this.kc.push(z.T(this.Kr, "click", this.eH, this));
  this.kc.push(z.T(this.Qe, "focusout", this.PQ, this));
};
var D5 = function(a, b) {
  if (a.li) {
    var c = a.Kr.querySelector(".markup--highlight"), d = a.lc.querySelector(".is-activeNote");
    if (d && c) {
      var d = window.innerHeight - d.offsetHeight + 20, e = c.offsetHeight, c = z.ds(c);
      e < d && (c -= (d - e) / 2);
      a.Jf && a.Jf.cancel();
      b ? a.Jf = new z.qM(a.Jl, "scrollTop", 200, Math.max(c, 0)) : z.as(a.Jl, 0, c);
    }
  }
};
var E5 = function(a, b) {
  a.Mb.enable();
  z.q(f5(a, b), function() {
    var a = h4(this.data, this.data.Oa).mb();
    this.Bv = z.zq(L4, {count:a});
    this.lc.appendChild(this.Bv);
    B5(this.Mb, 0, "0", !0);
  }, a);
};
var F5 = function(a) {
  z.Ke.call(this);
  this.ca = a;
};
z.kN.prototype.Xp = z.$(270, function(a) {
  var b = this.xo(a);
  this.O("before-clear", a, b);
  b.innerHTML = z.jN(this, a);
  this.O("after-draw", a, b);
});
z.kN.prototype.yE = z.$(269, function(a) {
  this.Rq = a;
  return this;
});
z.LJ.prototype.zE = z.$(268, function(a, b) {
  this.pm = a.bind(b);
  this.ox();
  return this;
});
z.rH.prototype.ts = z.$(258, function() {
  return this.km.trim() != this.Ka().trim();
});
z.fM.prototype.ts = z.$(257, function() {
  return this.km.trim() != this.Ka().trim();
});
z.Bl.prototype.dt = z.$(217, function(a) {
  return z.A(this, "highlight", a);
});
z.Bl.prototype.sp = z.$(216, function() {
  return z.y(this, "highlight");
});
z.Cj.prototype.Hh = z.$(166, function() {
  return z.y(this, "highlightId");
});
z.Bl.prototype.Hh = z.$(165, function() {
  return z.y(this, "highlightId");
});
z.Gl.prototype.Hh = z.$(164, function() {
  return z.y(this, "highlightId");
});
z.Cj.prototype.Og = z.$(163, function() {
  return z.y(this, "authorId");
});
z.Dj.prototype.Og = z.$(162, function() {
  return z.y(this, "authorId");
});
z.Sj.prototype.Og = z.$(161, function() {
  return z.y(this, "authorId");
});
z.Bl.prototype.Og = z.$(160, function() {
  return z.y(this, "authorId");
});
z.Dl.prototype.Og = z.$(159, function() {
  return z.y(this, "authorId");
});
z.gm.prototype.Og = z.$(158, function() {
  return z.y(this, "authorId");
});
z.dj.prototype.Ze = z.$(116, function(a) {
  return z.A(this, "state", a);
});
z.Cj.prototype.Ze = z.$(115, function(a) {
  return z.A(this, "state", a);
});
z.Dj.prototype.Ze = z.$(114, function(a) {
  return z.A(this, "state", a);
});
z.Qk.prototype.Ze = z.$(113, function(a) {
  return z.A(this, "state", a);
});
z.Sk.prototype.Ze = z.$(112, function(a) {
  return z.A(this, "state", a);
});
z.Bl.prototype.Ze = z.$(111, function(a) {
  return z.A(this, "state", a);
});
z.Dl.prototype.Ze = z.$(110, function(a) {
  return z.A(this, "state", a);
});
z.ei.prototype.Jc = z.$(95, function() {
  return z.y(this, "replyId");
});
z.Xi.prototype.Jc = z.$(94, function() {
  return z.y(this, "replyId");
});
z.Yi.prototype.Jc = z.$(93, function() {
  return z.y(this, "replyId");
});
z.zj.prototype.Jc = z.$(92, function() {
  return z.y(this, "replyId");
});
z.Dj.prototype.Jc = z.$(91, function() {
  return z.y(this, "replyId");
});
z.Ik.prototype.Jc = z.$(90, function() {
  return z.y(this, "replyId");
});
z.Kk.prototype.Jc = z.$(89, function() {
  return z.y(this, "replyId");
});
z.Dl.prototype.Jc = z.$(88, function() {
  return z.y(this, "replyId");
});
z.Hl.prototype.Jc = z.$(87, function() {
  return z.y(this, "replyId");
});
z.Dm.prototype.Jc = z.$(86, function() {
  return z.y(this, "replyId");
});
var c4 = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, H4:!0, FIGURE:!0, LI:!0};
z.p(g4, z.ft);
z.f = g4.prototype;
z.f.load = function() {
  if (!this.cf) {
    var a = [this.Le.get(z.VV.N({postId:this.qa}), {oa:!0, background:!0})];
    z.S("variants.enable_paragraph_recommends") && a.push(this.Le.get(z.bW.N({postId:this.qa}), {oa:!0, background:!0}));
    this.cf = z.s(z.q(d4(a), this.xS, this), z.$s);
  }
  return this.cf.Db();
};
z.f.Lh = function() {
  return this.KF;
};
z.f.xp = function() {
  return this.zH;
};
z.f.uD = function() {
  return this.GG;
};
z.f.uj = function(a) {
  var b = a && a.getAttribute("name");
  if (!b || !a) {
    return null;
  }
  var c = this.xH[b];
  return c && !this.Qq ? c : this.xH[b] = z.Iy(a);
};
z.f.sp = function(a) {
  return this.wG[a] || null;
};
z.f.rd = function(a, b) {
  return h4(this, b).np(a);
};
z.f.PC = function() {
  return h4(this, "vote");
};
z.f.KJ = function() {
  var a = z.S("currentUser.userId");
  return this.PC().find(function(b) {
    return b.Og() == a;
  });
};
z.f.dt = function(a, b) {
  this.wG[a] = b;
};
z.f.ey = function(a) {
  a = z.UM(this.za, a);
  h4(this, a.yc()).add(a);
};
z.f.ga = function() {
  return this.qa;
};
z.f.xS = function(a) {
  var b = a[0];
  a = a[1];
  var c = b.references.User;
  this.xk = c[b.post.creatorId];
  this.zH = b.post.visibility;
  this.GG = !!b.post.translationSourcePostId;
  var d = b.value;
  if (d) {
    for (var e = 0;e < d.length;e++) {
      var g = d[e];
      if ("HIDDEN" != g.state) {
        var h = g.replies, k = c;
        if (h) {
          for (var l = 0;l < h.length;l++) {
            var n = h[l], r = n.authorId || null;
            n.author = r && k[r] || null;
          }
        }
        h = g.anchor;
        k = g.authorId || null;
        g.author = k && c[k] || null;
        h = h4(this, h);
        g = z.Cl(g);
        h.add(z.UM(this.za, g));
      }
    }
  }
  if (b = b.highlights) {
    for (c = 0;c < b.length;c++) {
      this.dt(b[c].id, z.Th.kb(z.Fl, b[c]));
    }
  }
  a && l4(this, a.value, a.references.User);
  this.KF = !0;
};
z.f.W = function() {
  this.cf.cancel();
  g4.F.W.call(this);
};
z.p(q4, z.vt);
z.f = q4.prototype;
z.f.pm = function(a) {
  return a.qc();
};
z.f.ph = null;
z.f.am = null;
z.f.Wz = null;
z.f.Z = function() {
  return this.Ga;
};
z.f.S = function() {
  q4.F.S.call(this);
  z.wt(this, this.Ec, "change", this.yQ, this);
  z.wt(this, this.Ec, "add", this.XQ, this);
  z.wt(this, this.Ec, "remove", this.YQ, this);
  r4(this, !0);
};
z.f.na = function() {
  this.Ga.innerHTML = "";
  delete this.Ga;
  q4.F.na.call(this);
};
z.f.getData = function() {
  return this.Ec;
};
z.f.cq = function(a, b) {
  this.ph = a;
  this.am = b;
  this.Xa() && r4(this);
  return this;
};
z.f.zE = function(a, b) {
  this.pm = a.bind(b);
  r4(this);
  return this;
};
z.f.XQ = function(a, b) {
  if (this.Xa()) {
    for (var c = 0;c < a.length;c++) {
      var d = b.indexOf(a[c]), d = this.pr(a[c], d);
      this.O("after-draw", a[c], d);
    }
  }
};
z.f.YQ = function(a) {
  if (this.Xa()) {
    var b = this.xo(a);
    this.O("before-clear", a, b);
    this.O("destroy", a, b);
    z.ie(b);
  }
};
z.f.yQ = function(a) {
  for (var b = 0;b < a.length;b++) {
    this.Xp(a[b]);
  }
};
z.f.Gw = function() {
  return this.Ec.Gg();
};
z.f.yE = function(a) {
  this.Rq = a;
  return this;
};
z.f.Xp = function(a) {
  var b = this.xo(a);
  this.O("before-clear", a, b);
  b.innerHTML = s4(this, a);
  this.O("after-draw", a, b);
};
z.f.pr = function(a, b) {
  var c = window.document.createElement("div");
  c.className = this.Rq;
  c.id = this.Iq(a);
  c.innerHTML = s4(this, a);
  z.he(this.Ga, c, "undefined" != typeof b ? b : this.Ga.children.length);
  return c;
};
z.f.Iq = function(a) {
  var b = a.D(), c = a.C();
  if (!b || !c) {
    throw Error("Unable to generate id " + a);
  }
  return this.Iz + b + c;
};
z.f.xo = function(a) {
  return this.Ga.querySelector("#" + this.Iq(a));
};
t4.prototype.get = function(a) {
  return a ? z.R_(this.Zh, a) : null;
};
z.p(y4, z.rH);
z.f = y4.prototype;
z.f.ry = null;
z.f.qF = null;
z.f.sy = null;
z.f.Gz = null;
z.f.Fz = null;
z.f.vG = null;
z.f.HC = function() {
  return z.yH();
};
z.f.VC = function() {
  return z.zH();
};
z.f.$B = function() {
  return!!this.ub();
};
z.f.An = function(a) {
  var b = z.vq();
  return(new z.Bl({postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], highlight:a.highlight || null, highlightId:a.highlightId || null})).ct(b).Ll(b.xa());
};
z.f.TC = function() {
  return this.ub() ? "put" : "post";
};
z.f.Kw = function() {
  return this.ub() ? z.WV.N({postId:this.qa, noteId:this.ub()}) : z.UV.N({postId:this.qa});
};
z.f.UC = function(a) {
  a = {content:a};
  this.ry && (a.anchor = this.ry, a.anchorContent = this.qF, a.anchorImage = this.sy ? this.sy.qc() : null);
  null != this.Gz && null != this.Fz && (a.highlightStart = this.Gz, a.highlightEnd = this.Fz, a.highlightContent = this.vG);
  return a;
};
z.p(M4, z.vt);
M4.prototype.iQ = function(a) {
  if (a = w4(this.If, a.target)) {
    var b = a ? z.R_(this.If.Zh, a) : null, c = this.oe[a];
    !c || c === this.zo || !b || z.Wr(b, !1) || z.jd(b, "postField--insetLeftImage") || z.jd(b, "postField--outsetLeftImage") || (this.zo && z.u(this.zo, "is-highlighted"), z.t(c, "is-highlighted"), this.zo = c, z.Oe(this.bo), this.bo = new z.fR(b), this.bo.Id(c), this.bo.V(), this.bo.je("dismiss", function() {
      z.u(c, "is-highlighted");
      this.zo === c && (this.zo = null);
    }, this));
  }
};
M4.prototype.S = function() {
  M4.F.S.call(this);
  z.LW || [this.If.Zh].forEach(function(a) {
    this.sa(a, "mouseover", this.iQ);
  }, this);
};
M4.prototype.Ja = function() {
  z.Oe(this.bo);
  z.ie(this.qm);
  this.oe = this.qm = null;
  M4.F.Ja.call(this);
};
z.p(S4, z.rH);
z.f = S4.prototype;
z.f.HC = function() {
  return(0,z.K)("Are you sure you want to delete this reply?");
};
z.f.VC = function() {
  return(0,z.K)("Your reply is too long; do you want to abandon your changes?");
};
z.f.$B = function() {
  return!!this.mv;
};
z.f.An = function(a) {
  var b = z.vq();
  return(new z.Dl({postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt})).ct(b).Ll(b.xa());
};
z.f.TC = function() {
  return this.mv ? "put" : "post";
};
z.f.Kw = function() {
  return this.mv ? z.ZV.N({postId:this.qa, noteId:this.ub(), replyId:this.mv}) : z.YV.N({postId:this.qa, noteId:this.ub()});
};
z.f.UC = function(a) {
  return{content:a};
};
z.p(T4, z.kf);
T4.prototype.Zs = function() {
  if (!this.Ar) {
    return null;
  }
  var a = V4(this.Ar);
  if (!a) {
    return null;
  }
  var b = V4(this.dz);
  return b ? z.Xf(a.ia, a.offset, b.ia, b.offset) : null;
};
z.p(W4, z.ft);
z.f = W4.prototype;
z.f.vd = null;
z.f.Eg = null;
z.f.li = null;
z.f.Oh = null;
z.f.Al = 0;
z.f.W = function() {
  Z4(this);
  f5(this, null);
  var a = this.post.ym;
  a && a.eb("change", this.pG, this);
  this.ep.eb("historyUpdate", this.hH, this);
  this.YG && z.Nr(this.YG);
  z.Nr(this.kc);
  this.kc.length = 0;
  z.Zv(this.Xc.qm);
  z.Zv(this.Qe);
  z.ie(this.Qe);
  this.data.nc();
  this.Rr && this.Rr.cancel();
  z.Oe(this.Xc);
  z.Oe(this.wb);
  this.YG = this.Rr = this.data = this.Qe = this.anchors = this.Xc = null;
  W4.F.W.call(this);
};
z.f.pG = function() {
  if (z.S("variants.enable_recommend_notes") && this.fI.ln() != this.post.ln() && (this.fI = this.post.clone(), !this.post.ln())) {
    var a = this.data.KJ();
    a && (a5(this, z.EX, a), this.data.PC().remove(a));
  }
};
z.f.HD = function() {
};
z.f.KD = function() {
};
z.f.GD = function(a) {
  a.sp() && (this.data.dt(a.Hh(), a.sp()), a.dt(null));
  this.data.ey(a);
  a5(this, z.CX, a);
};
z.f.LD = function() {
};
z.f.fL = function() {
};
z.f.pj = function() {
};
z.f.DJ = function() {
};
z.f.oR = function(a) {
  var b = this.data.Mq[a.value], b = b && ~b.get("userIds").indexOf(this.currentUser.userId) ? -1 : 1, c = this.data;
  a = a.value;
  var d = this.currentUser, e = c.Mq[a];
  e || (e = m4(c, a, 0, [], {}));
  e.set("count", e.get("count") + b);
  0 < b ? (e.add("userIds", d.userId), c.Le.post(z.bW.N({postId:c.qa}), {anchor:a}, {oa:!0})) : (e.removeItem("userIds", e.get("userIds").indexOf(d.userId)), c.Le.Od(z.cW.N({postId:c.qa, anchor:a})));
};
z.f.rH = function(a) {
  var b = this.data.Mq[a.value].get("count");
  z.q(n4(this.data, a.value, a.target.getAttribute("data-page")), function(c) {
    if (c && c.length) {
      var d = this.Xm.qd(), e;
      d ? (e = d.J(".js-recommendList"), c = z.zq(z.kB, {users:c}), e.appendChild(c), c = d.Fd(".list-item"), e = d.J(".js-showMoreRecommends"), e.setAttribute("data-page", (0,window.parseInt)(e.getAttribute("data-page"), 10) + 1)) : (d = this.Xm.open({title:(0,z.K)("Recommends"), bodyHtml:z.xq(z.jB, {users:c, oj:a.value, page:1}), type:z.rI}), e = d.J(".js-showMoreRecommends"), z.Wv(d.Z()).H("show-more-recommends", this.rH, this));
      z.v(e, "u-hide", c.length >= b);
    }
  }, this);
};
z.f.yO = function(a) {
  return a.qc();
};
z.f.OR = function(a) {
  d5(this, a.value);
};
z.f.xR = function(a) {
  (a = this.Oc["reply_" + a.value]) && a.save();
};
z.f.pQ = function(a) {
  var b = this.Oc["reply_" + a.value];
  b && z.vH(b);
  (a = z.Fe(a.target, null, "notesItem")) && z.u(a, "is-showingNotesReplyCreator");
};
z.f.JQ = function(a) {
  function b() {
    var a = this.data.rd(d, this.data.Oa);
    this.Oh.Xp(a);
    z.u(g, "is-notesEditMode");
    z.Oe(h);
    delete this.Oc["reply_" + e];
  }
  var c = a.value.split(","), d = c[0], e = c[1], c = z.Fe(a.target, null, "notesItem"), g = z.Fe(a.target, null, "notesReply");
  z.t(g, "is-notesEditMode");
  z.u(c, "is-showingNotesReplyCreator");
  a = g.querySelector(".notesContent");
  var h = new S4(this.Fx, a, this.postId, d, e);
  h.L("save", function(a) {
    for (var c = this.data.rd(d, this.data.Oa), g = a4(c), h = 0;h < g.length;h++) {
      if (g[h].Jc() == e) {
        g[h] = a;
        break;
      }
    }
    a5(this, z.HX, c, {replyId:e});
    b.call(this);
  }, this);
  h.L("delete", function() {
    for (var a = this.data.rd(d, this.data.Oa), c = a4(a), g = 0;g < c.length;g++) {
      if (c[g].Jc() == e) {
        z.ib(c, g);
        break;
      }
    }
    a5(this, z.IX, a, {replyId:e});
    b.call(this);
  }, this);
  h.L("cancel", function() {
    b.call(this);
  }, this);
  h.L("change", this.pj, this);
  h.focus(!0);
  this.Oc["reply_" + e] = h;
};
z.f.BQ = function(a) {
  (a = this.Oc["reply_" + a.value]) && a.pC();
};
z.f.lQ = function(a) {
  a = a.ub();
  this.Oc[a] && (z.Oe(this.Oc[a]), delete this.Oc[a]);
  this.Oc["reply_" + a] && (z.Oe(this.Oc["reply_" + a]), delete this.Oc["reply_" + a]);
};
z.f.hQ = function(a, b) {
  z.u(b, "is-showingNotesReplyCreator");
  b.setAttribute("data-note-id", a.ub());
};
z.f.kQ = function(a) {
  z.s($4(this, this.data.rd(a.value, this.data.Oa), "PUBLIC"), z.ZK(this.Xm, (0,z.K)("Sorry, we couldn’t approve the note. Please try again later and make sure you are logged in.")));
};
z.f.WR = function(a) {
  z.s($4(this, this.data.rd(a.value, this.data.Oa), "NEW"), z.ZK(this.Xm, (0,z.K)("Sorry, we couldn’t unapprove the note. Please try again later and make sure you are logged in.")));
};
z.f.IQ = function(a) {
  function b() {
    z.u(d, "is-notesEditMode");
    z.Oe(g);
    delete this.Oc[c];
  }
  var c = a.value, d = z.Fe(a.target, null, "notesItem");
  z.t(d, "is-notesEditMode");
  z.u(d, "is-showingNotesReplyCreator");
  var e = d.querySelector(".notesContent"), g = new y4(this.Fx, e, this.postId, a.value);
  g.L("save", function(a) {
    this.data.ey(a);
    a5(this, z.DX, a);
    b.call(this);
  }, this);
  g.L("delete", function() {
    var a = h4(this.data, this.data.Oa), d = a.np(c);
    a5(this, z.EX, d);
    a.remove(d);
    b.call(this);
  }, this);
  g.L("cancel", function() {
    var a = this.data.rd(c, this.data.Oa);
    this.Oh.Xp(a);
    b.call(this);
  }, this);
  g.L("change", this.pj, this);
  g.focus(!0);
  this.Oc[c] = g;
};
z.f.wR = function(a) {
  (a = b5(this, a)) && a.save();
};
z.f.oQ = function(a) {
  (a = b5(this, a)) && z.vH(a);
};
z.f.AQ = function(a) {
  (a = b5(this, a)) && a.pC();
};
z.f.gR = function(a) {
  for (var b = 0;b < a.length;b++) {
    R4(this.Xc, a[b].yc());
  }
};
z.f.RQ = function(a) {
  a = a.value;
  this.Eg == a && (this.Eg = null);
  z.s($4(this, this.data.rd(a, this.data.Oa), "HIDDEN"), z.ZK(this.Xm, (0,z.K)("Sorry, we couldn’t hide the note. Please try again later and make sure you are logged in.")));
};
z.f.fR = function(a) {
  a.L("add", this.gR, this);
  a.L("change", this.fL, this);
  a.L("remove", this.KD, this);
};
z.f.eR = function(a) {
  a.L("change", this.QQ, this);
};
z.f.QQ = function(a, b) {
  R4(this.Xc, z.it(b, "anchor"));
};
z.f.J = function(a) {
  return this.Qe.querySelector(a);
};
z.f.Sn = function() {
  Q4(this.Xc);
  this.Xc.oe[this.data.Oa] || f5(this, null);
};
z.f.iL = function(a) {
  this.CE(a);
};
z.f.CE = function(a) {
  (a = z.Fe(a.target, null, "notesReplies")) && z.u(a, "notesReplies--hidden");
};
z.f.Jr = function() {
  var a = this.data.Oa, b = this.J(".notesItems"), a = h4(this.data, a);
  this.Oh = (new q4(b, a, H4)).yE("notesItem").zE(this.yO).cq({Qk:this.Qk, VD:this.data.xk, Al:this.Al, uD:this.data.uD()}, "note");
  this.Oh.L("before-clear", this.lQ, this);
  this.Oh.L("after-draw", this.hQ, this);
  this.Oh.V();
  O4(this.Xc, this.data.Oa, !0);
  z.t(this.screen.ea(), "is-notesListVisible");
  z.pt(z.BX);
};
z.f.mC = function() {
  z.KK(this.ep, "");
  z.u(this.screen.ea(), "is-notesListVisible");
};
z.f.getSelection = function() {
  var a = z.mg();
  if (!a || a.isCollapsed()) {
    return null;
  }
  var b = z.rf(a), c = v4(this.anchors, b);
  if (!c) {
    return null;
  }
  c = (b = z.Yr(b, b4, c)) && this.data.uj(b);
  if (!b) {
    return null;
  }
  var d = z.e0(a, b, !0), e = z.e0(a, b, !1);
  return-1 == d || -1 == e ? null : new f4(a, b, new z.Fl({anchor:b.getAttribute("name"), startIndex:d, endIndex:e, content:c.X().substring(d, e)}));
};
z.f.hH = function() {
  this.ew(i5());
};
z.p(k5, W4);
z.Y3 = "show";
z.f = k5.prototype;
z.f.Al = 3;
z.f.ek = !1;
z.f.Kb = null;
z.f.HD = function() {
  var a = (0,z.wo)();
  this.Rr = null;
  this.ek = !0;
  var b = i5();
  this.Sn();
  this.isAuthenticated && z.v(this.lc, "is-notesCreator", this.data.xk.userId === this.currentUser.userId);
  z.ye(this.J(".js-notesPostCreator"), this.data.xk.name);
  this.ew(b);
  this.kc.push(z.T(this.Qe, "mouseover", this.vQ, this));
  this.kc.push(z.T(this.Qe, "mouseout", this.uQ, this));
  this.kc.push(z.T(this.lc, "click", this.rQ, this));
  this.kc.push(z.T(this.Kr, z.GR, this.uA, this));
  z.qt("notes.renderMarkers", (0,z.wo)() - a);
};
z.f.ew = function(a) {
  if (a.anchor && this.Xc.oe[a.anchor]) {
    if ("highlight" == a.cC) {
      r5(this, a.anchor);
      var b = this.anchors.get(a.anchor), c = a.highlight.startIndex, d = a.highlight.endIndex, e = z.DE(b, c, b, d);
      e && (b = new f4(e, b, new z.Fl({anchor:a.anchor, startIndex:c, endIndex:d, content:e.X()})), o5(this, b));
    } else {
      a.highlight ? (z.q(f5(this, a.anchor), function() {
        q5(this, a.anchor);
      }, this), h5(this, a.highlight.id, !0), v5(this, a.highlight.id, {scroll:!0, Ni:!0}), "reply" == a.cC && d5(this)) : "newNote" == a.cC && r5(this, a.anchor);
    }
  }
};
z.f.GD = function(a) {
  k5.F.GD.call(this, a);
  this.vd.clear();
  h5(this, a.ub());
  z.t(this.lc, "is-hidingNotesEditor");
};
z.f.DJ = function() {
  var a = {scroll:!0, Ni:!0};
  if (this.vd) {
    p5(this, a), l5(this);
  } else {
    var b = z.zb(this.Oc), c = b && b.ub();
    c && (h5(this, c), v5(this, c, a), b.focus());
  }
};
z.f.Jr = function() {
  k5.F.Jr.call(this);
  x4(this.anchors, this.Qe, this.anchors.get(this.data.Oa));
};
z.f.pj = function() {
  n5(this);
  var a = (0,window.parseInt)(this.lc.style.top, 10);
  if (!(0,window.isNaN)(a)) {
    var b = this.data.Oa;
    if (b = b ? this.anchors.get(b) : null) {
      if (b = z.Qw(b, v4(this.anchors, b))) {
        var c = m5(b, !1), b = m5(b, !0), d = !1, e = z.ds(c);
        a < e && (d = e - a, c.style.paddingTop = z.ch(c).top + d + "px", this.lc.style.top = a + d + "px", z.t(c, "js-is-spacedForNoteList"), d = !0);
        a += this.lc.offsetHeight;
        c = z.ds(b) + b.offsetHeight;
        a > c && (a -= c, b.style.paddingBottom = z.ch(b).bottom + a + "px", z.t(b, "js-is-spacedForNoteList"), d = !0);
        d && (Q4(this.Xc), this.Ld.Tg());
      }
    }
  }
};
z.f.LD = function(a) {
  z.q(w5(this, a.value), function(a) {
    a && (this.data.Oa && h4(this.data, this.data.Oa).mb() || ((a = this.getSelection()) && a.highlight.anchor == this.data.Oa ? (e5(this, a.highlight), j5(this, a)) : j5(this, this.data.Oa), this.vd && l5(this), this.O(z.Y3)), s5(this, {scroll:!0, Ni:!0}));
  }, this);
};
z.f.KD = function(a) {
  R4(this.Xc, a.yc());
  a.ub() == this.Eg && e5(this, null);
};
z.f.CE = function(a) {
  z.u(z.Fe(a.target, null, "notesReplies"), "notesReplies--hidden");
  this.pj();
};
z.f.FR = function(a) {
  if (!this.Qq && !z.Fe(a.target, "A") && (z.LW || this.data.Oa)) {
    var b = this.getSelection();
    if (!b || b.oj != this.data.Oa) {
      if (this.data.Oa && 1E3 >= window.innerWidth) {
        return f5(this, null);
      }
      a = w4(this.anchors, a.target);
      z.q(w5(this, a), function(a) {
        a && (q5(this, this.data.Oa), s5(this, {scroll:!0, Ni:!0}));
      }, this);
    }
  }
};
z.f.Mu = function() {
  this.Sn();
};
z.f.qQ = function(a) {
  if (this.data.Oa) {
    var b = a.target;
    z.rs(b) || (b = z.Yr(b, function(a) {
      return a == this.lc || a == this.Xc.qm || a == this.Kb.Z() || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action");
    }.bind(this)), b || (1400 >= window.innerWidth && (a.stopPropagation(), a.preventDefault()), f5(this, null)));
  }
};
z.f.KR = function(a) {
  z.KK(this.ep, a.value);
};
z.f.vQ = function(a) {
  x5(this, a, !0);
};
z.f.uQ = function(a) {
  x5(this, a, !1);
};
z.f.uH = function() {
  if (!this.Qq) {
    var a = z.mg();
    if (!a || a.isCollapsed()) {
      z.x_(this.Kb);
    } else {
      var b = v4(this.anchors, z.rf(a)), c;
      if (c = b) {
        c = z.rf(a), c = z.Yr(c, b4, b);
      }
      c ? z.w_(this.Kb, z.f0(a)) : z.x_(this.Kb);
    }
  }
};
z.f.gH = function() {
  z.x_(this.Kb);
  var a = this.getSelection();
  a && o5(this, a);
  return!1;
};
z.f.fH = function() {
  z.x_(this.Kb);
  var a = z.mg();
  if (!a || a.isCollapsed()) {
    return!1;
  }
  this.Zo.Qj(this.post, a.X(), "highlight", e4);
  return!1;
};
z.f.SQ = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  z.s(z.q(k4(this.data, c, b), function() {
    for (var a = a4(this.data.rd(b, this.data.Oa)), e = 0;e < a.length;e++) {
      if (a[e].Jc() == c) {
        z.ib(a, e);
        break;
      }
    }
    a5(this, z.JX, this.data.rd(b, this.data.Oa), {replyId:c});
    this.VB.V((0,z.K)("The reply has been dismissed."), z.RM);
  }, this), z.ZK(this.Xm, (0,z.K)("Sorry, we couldn’t hide the reply. Please try again later and make sure you are logged in.")));
};
z.f.rQ = function(a) {
  a = a.target;
  var b = z.Fe(a, null, "notesItem");
  if (b) {
    var c = b.getAttribute("data-note-id");
    c == this.Eg ? z.Yr(a, function(a) {
      return!!a.getAttribute("data-action") || z.jd(a, "editable");
    }, b, !0) == b && h5(this, null) : (h5(this, c), v5(this, c, {scroll:!0, Ni:!0}));
  }
};
z.f.NR = function() {
  var a = this.getSelection();
  h5(this, null);
  a && e5(this, a.highlight);
  j5(this, a || this.data.Oa);
  this.vd && (a && p5(this, {scroll:!0, Ni:!0}), l5(this));
};
z.f.uA = function(a) {
  (a = a.target.getAttribute("name")) && a && z.R_(this.anchors.Zh, a) && O4(this.Xc, a, a == this.data.Oa);
};
z.f.Sn = function() {
  if (this.ek) {
    if (this.qf) {
      return z.Gs(Error("UpdatePositions called after dispose"));
    }
    k5.F.Sn.call(this);
    var a = {scroll:!1, Ni:!0};
    this.Eg ? v5(this, this.Eg, a) : s5(this, a);
  }
};
z.f.nX = function() {
  if (this.data.Oa) {
    var a = this.anchors.get(this.data.Oa);
    if (!a) {
      f5(this, null);
    } else {
      if (!this.Qq) {
        var b = z.mg();
        b && (b = z.rf(b), z.re(a, b) || f5(this, null));
      }
    }
  }
};
z.f.W = function() {
  this.Pa.eb("resize-end", this.Mu, this);
  this.Pa.eb("inner-resize-end", this.Mu, this);
  this.Kb.eb("update", this.uH, this);
  this.Kb.eb("highlight", this.gH, this);
  this.Kb.eb("twitter", this.fH, this);
  k5.F.W.call(this);
};
z.p(y5, z.Ke);
y5.prototype.fC = function(a, b, c, d, e, g) {
  return new k5(a.Na(), b, c, d, e, g);
};
z.p(z5, z.ft);
z.f = z5.prototype;
z.f.gr = 0;
z.f.zA = 0;
z.f.Vi = 0;
z.f.Ty = 0;
z.f.Hu = 0;
z.f.KG = 0;
z.f.Gm = 0;
z.f.XA = 1;
z.f.Dv = 0;
z.f.Cv = 0;
z.f.TH = 0;
z.f.hh = void 0;
z.f.Ra = [];
z.f.mq = function() {
  this.Ra.length || (this.Ra = [z.T(this.Mb, "touchstart", this.VR, this), z.T(this.Mb, "touchmove", this.tA, this), z.T(this.Mb, "touchend", this.UR, this)]);
};
z.f.VR = function(a) {
  var b = this.Mb.firstChild;
  this.Ty = this.Vi = 0;
  this.TH = b.offsetWidth * this.Mb.children.length;
  this.hh = void 0;
  this.Dv = this.Mb.offsetWidth;
  this.XA = 1;
  this.KG = -(this.Mb.children.length - 1);
  this.Gm = +new Date;
  this.gr = a.touches[0].pageX;
  this.zA = a.touches[0].pageY;
  z.Jg(this.Mb, "transition-duration", 0);
};
z.f.tA = function(a) {
  1 < a.touches.length || (this.Vi = a.touches[0].pageX - this.gr, this.Ty = a.touches[0].pageY - this.zA, this.gr = a.touches[0].pageX, this.zA = a.touches[0].pageY, "undefined" == typeof this.hh && (this.hh = Math.abs(this.Ty) > Math.abs(this.Vi)), this.hh || (this.Hu = this.Vi / this.XA + A5(this), a.preventDefault(), this.XA = 0 === this.Cv && 0 < this.Vi ? this.gr / this.Dv + 1.25 : this.Cv == this.KG && 0 > this.Vi ? Math.abs(this.gr) / this.Dv + 1.25 : 1, z.Jg(this.Mb, "transform", "translate3d(" + 
  this.Hu + "px,0,0)")));
};
z.f.UR = function() {
  if (!this.hh) {
    var a = 1E3 > +new Date - this.Gm && 15 < Math.abs(this.Vi) ? 0 > this.Vi ? -1 : 1 : 0, b = Math[a ? 0 > this.Vi ? "ceil" : "floor" : "round"](A5(this) / (this.TH / this.Mb.children.length)), b = Math.min(b + a, 0), b = Math.max(-(this.Mb.children.length - 1), b);
    B5(this, b, ".2s");
  }
};
z.f.disable = function() {
  z.Jg(this.Mb, "transition-duration", "0");
  z.Jg(this.Mb, "transform", "translate3d(0,0,0)");
  z.Nr(this.Ra);
  this.Ra = [];
};
z.f.enable = z5.prototype.mq;
z.p(C5, W4);
z.f = C5.prototype;
z.f.W = function() {
  this.aH = null;
  this.Mb && (this.Mb.disable(), this.Mb.eb("slide", this.sH, this), this.Mb = null);
  this.Jf && (this.Jf.cancel(), this.Jf = null);
  C5.F.W.call(this);
};
z.f.Jr = function() {
  C5.F.Jr.call(this);
  $3(this.Uy, !0);
};
z.f.mC = function() {
  $3(this.Uy, !1);
  C5.F.mC.call(this);
};
z.f.HD = function() {
  this.Rr = null;
  var a = (0,z.wo)(), b = i5();
  this.Sn();
  this.isAuthenticated && z.v(this.lc, "is-notesCreator", this.data.xk.userId === this.currentUser.userId);
  z.ye(this.J(".js-notesPostCreator"), this.data.xk.name);
  this.ew(b);
  z.qt("notes.renderMarkers", (0,z.wo)() - a);
};
z.f.ew = function(a) {
  a.anchor && this.Xc.oe[a.anchor] && E5(this, a.anchor);
};
z.f.fL = function() {
};
z.f.iL = function(a) {
  this.CE(a);
  z.t(this.Jl, "is-showingNotesReplies");
  this.Mb.disable();
  this.Oh.cq({Qk:this.Qk, VD:this.data.xk, Al:window.Infinity}, "note");
};
z.f.LD = function(a) {
  a = a.value;
  this.Xc.oe[a] && (a == this.data.Oa ? f5(this, null) : E5(this, a));
};
z.f.KD = function(a) {
  R4(this.Xc, a.yc());
  if (!this.data.Oa || !h4(this.data, this.data.Oa).mb()) {
    return this.mA();
  }
  B5(this.Mb, 0, "0");
};
z.f.PQ = function() {
  D5(this, !0);
};
z.f.eH = function(a) {
  this.data.Oa && !z.re(this.lc, a.target) && (a.stopPropagation(), this.mA());
};
z.f.sH = function(a) {
  if (a = h4(this.data, this.data.Oa).Zk(a)) {
    h5(this, a.ub());
    if (!a.Hh()) {
      a = a.yc();
      var b = this.anchors.get(a), b = z.Tr(b);
      e5(this, new z.Fl({anchor:a, startIndex:0, endIndex:b.length - 1, content:b}), !0);
    }
    D5(this, !0);
  }
};
z.f.mA = function() {
  z.jd(this.Jl, "is-showingNotesReplies") ? z.jd(this.Jl, "is-showingNotesReplies") && (z.t(this.lc.querySelector(".is-activeNote .notesReplies"), "notesReplies--hidden"), z.u(this.Jl, "is-showingNotesReplies"), this.Mb.enable(), B5(this.Mb, 0, "0", !0), D5(this, !1), this.Oh.cq({Qk:this.Qk, VD:this.data.xk, Al:this.Al}, "note")) : z.q(f5(this, null), function() {
    z.u(this.Jl, "is-showingNotesReplies");
    z.u(this.Jl, "is-newNoteEditorActivated");
    z.u(this.Qe, "is-showingNewNoteEditor");
    z.u(this.screen.ea(), "is-notesListVisible");
    $3(this.Uy, !1);
    this.Bv && z.ie(this.Bv);
    this.Mb.disable();
    this.Sn();
  }, this);
};
z.p(F5, z.Ke);
F5.prototype.fC = function(a, b, c, d, e) {
  if (e) {
    throw Error("Can not initialize mobile notes with menu");
  }
  return new C5(a.Na(), b, c, d);
};
var G5 = z.kK;
G5.Na().scope("screen").add("notes", y5).add("notes-mobile", F5);
z.D_(G5, "notes");
})(_mdm);
