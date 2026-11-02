
(function () {
  var FPS = 24;
  var EX = {"CHAR":"function gnd(x){ return 1240 + 3 * Math.sin(2 * Math.PI * x / 420) + 1.5 * Math.sin(2 * Math.PI * x / 137 + 1); }\nfunction sm(u){ u = Math.max(0, Math.min(1, u)); return u * u * (3 - 2 * u); }\nvar XS = 7500, XE = 8800, RIN = 300, ROUT = 300;\nfunction rr(x){ return sm(Math.min((x - XS) / RIN, (XE - x) / ROUT)); }\nfunction wv(x, t){ return Math.sin(2 * Math.PI * x / 240 - t * 3.2) + 0.35 * Math.sin(2 * Math.PI * x / 97 - t * 5.1 + 1.3); }\nfunction wy(x, t){ return gnd(x) + rr(x) * (-35 + 25 * wv(x, t)); }\nvar x = value[0];\nvar yG = gnd(x) - 154;\nvar yW = wy(x, time) - 6;\n[x, yG + (yW - yG) * rr(x)];","ONDA":"function gnd(x){ return 1240 + 3 * Math.sin(2 * Math.PI * x / 420) + 1.5 * Math.sin(2 * Math.PI * x / 137 + 1); }\nfunction sm(u){ u = Math.max(0, Math.min(1, u)); return u * u * (3 - 2 * u); }\nvar XS = 7500, XE = 8800, RIN = 300, ROUT = 300;\nfunction rr(x){ return sm(Math.min((x - XS) / RIN, (XE - x) / ROUT)); }\nfunction wv(x, t){ return Math.sin(2 * Math.PI * x / 240 - t * 3.2) + 0.35 * Math.sin(2 * Math.PI * x / 97 - t * 5.1 + 1.3); }\nfunction wy(x, t){ return gnd(x) + rr(x) * (-35 + 25 * wv(x, t)); }\nvar p = [];\nfor (var x = XS; x <= XE; x += 10) p.push([x, wy(x, time)]);\ncreatePath(p, [], [], false);","AGUA":"function gnd(x){ return 1240 + 3 * Math.sin(2 * Math.PI * x / 420) + 1.5 * Math.sin(2 * Math.PI * x / 137 + 1); }\nfunction sm(u){ u = Math.max(0, Math.min(1, u)); return u * u * (3 - 2 * u); }\nvar XS = 7500, XE = 8800, RIN = 300, ROUT = 300;\nfunction rr(x){ return sm(Math.min((x - XS) / RIN, (XE - x) / ROUT)); }\nfunction wv(x, t){ return Math.sin(2 * Math.PI * x / 240 - t * 3.2) + 0.35 * Math.sin(2 * Math.PI * x / 97 - t * 5.1 + 1.3); }\nfunction wy(x, t){ return gnd(x) + rr(x) * (-35 + 25 * wv(x, t)); }\nvar p = [];\nfor (var x = XS; x <= XE; x += 10) p.push([x, wy(x, time)]);\np.push([XE, 2300]); p.push([XS, 2300]);\ncreatePath(p, [], [], true);","L2":"function gnd(x){ return 1240 + 3 * Math.sin(2 * Math.PI * x / 420) + 1.5 * Math.sin(2 * Math.PI * x / 137 + 1); }\nfunction sm(u){ u = Math.max(0, Math.min(1, u)); return u * u * (3 - 2 * u); }\nvar XS = 7500, XE = 8800, RIN = 300, ROUT = 300;\nfunction rr(x){ return sm(Math.min((x - XS) / RIN, (XE - x) / ROUT)); }\nfunction wv(x, t){ return Math.sin(2 * Math.PI * x / 240 - t * 3.2) + 0.35 * Math.sin(2 * Math.PI * x / 97 - t * 5.1 + 1.3); }\nfunction wy(x, t){ return gnd(x) + rr(x) * (-35 + 25 * wv(x, t)); }\nvar p = [];\nfor (var x = 7850; x <= 8450; x += 12) p.push([x, wy(x, time) + 48 + 9 * Math.sin(2 * Math.PI * x / 180 - time * 2.7)]);\ncreatePath(p, [], [], false);","L3":"function gnd(x){ return 1240 + 3 * Math.sin(2 * Math.PI * x / 420) + 1.5 * Math.sin(2 * Math.PI * x / 137 + 1); }\nfunction sm(u){ u = Math.max(0, Math.min(1, u)); return u * u * (3 - 2 * u); }\nvar XS = 7500, XE = 8800, RIN = 300, ROUT = 300;\nfunction rr(x){ return sm(Math.min((x - XS) / RIN, (XE - x) / ROUT)); }\nfunction wv(x, t){ return Math.sin(2 * Math.PI * x / 240 - t * 3.2) + 0.35 * Math.sin(2 * Math.PI * x / 97 - t * 5.1 + 1.3); }\nfunction wy(x, t){ return gnd(x) + rr(x) * (-35 + 25 * wv(x, t)); }\nvar p = [];\nfor (var x = 8100; x <= 8650; x += 12) p.push([x, wy(x, time) + 100 + 8 * Math.sin(2 * Math.PI * x / 150 - time * 2.2 + 1)]);\ncreatePath(p, [], [], false);"};
  var BLACK = [0, 0, 0], WHITE = [1, 1, 1];
  function has(a, v) { for (var i = 0; i < a.length; i++) if (a[i] == v) return true; return false; }

  var comp = null, q;
  for (q = 1; q <= app.project.numItems; q++) { var it = app.project.item(q); if ((it instanceof CompItem) && it.name == "MUNDO") comp = it; }
  if (!comp) { alert("Nao achei a comp MUNDO. Rode antes o montar_mundo_v2.jsx."); return; }
  function getLayer(n) { var l = null; try { l = comp.layer(n); } catch (e) { l = null; } return l ? l : null; }
  var names = ["CHAR", "CORPO", "CTRL", "WORLD"];
  for (q = 0; q < names.length; q++) { if (!getLayer(names[q])) { alert("Falta a camada " + names[q] + " na MUNDO."); return; } }
  if (getLayer("MAR")) { alert("O bloco E ja foi aplicado (existe a camada MAR). Use Ctrl+Z ou apague a camada MAR antes de rodar de novo."); return; }
  var ch = getLayer("CHAR"), co = getLayer("CORPO"), ctrl = getLayer("CTRL"), world = getLayer("WORLD");

  app.beginUndoGroup("Animar bloco E (mar)");

  function easeAt(prop, idx) {
    try {
      var vt = prop.propertyValueType, dims = 1;
      if (vt == PropertyValueType.TwoD) dims = 2; else if (vt == PropertyValueType.ThreeD) dims = 3;
      var e = []; for (var d = 0; d < dims; d++) e.push(new KeyframeEase(0, 33.33));
      prop.setTemporalEaseAtKey(idx, e, e);
    } catch (x) {}
  }
  function setKeys(prop, arr, mode, stopFrames) {
    var i, t, idx;
    for (i = 0; i < arr.length; i++) prop.setValueAtTime(arr[i][0] / FPS, arr[i][1]);
    for (i = 0; i < arr.length; i++) {
      t = arr[i][0] / FPS; idx = prop.nearestKeyIndex(t);
      try {
        if (mode == "hold") prop.setInterpolationTypeAtKey(idx, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
        else if (mode == "auto") {
          prop.setInterpolationTypeAtKey(idx, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
          if (stopFrames && has(stopFrames, arr[i][0])) easeAt(prop, idx);
          else { try { prop.setTemporalContinuousAtKey(idx, true); prop.setTemporalAutoBezierAtKey(idx, true); } catch (x2) {} }
        }
      } catch (x) {}
    }
  }
  function slider(name) { return ctrl.property("ADBE Effect Parade").property(name).property("ADBE Slider Control-0001"); }

  // grupo cujo caminho vem de expressao (a onda muda a cada frame)
  function pathGroup(cont, name, expr, closed, fillCol, strokeW) {
    var g = cont.addProperty("ADBE Vector Group"); g.name = name;
    var gc = g.property("ADBE Vectors Group");
    var p = gc.addProperty("ADBE Vector Shape - Group");
    p.property("ADBE Vector Shape").expression = expr;
    var fl = null, st = null;
    if (fillCol) { fl = gc.addProperty("ADBE Vector Graphic - Fill"); fl.property("ADBE Vector Fill Color").setValue(fillCol); }
    if (strokeW > 0) {
      st = gc.addProperty("ADBE Vector Graphic - Stroke");
      st.property("ADBE Vector Stroke Color").setValue(BLACK);
      st.property("ADBE Vector Stroke Width").setValue(strokeW);
      st.property("ADBE Vector Stroke Line Cap").setValue(2);
      st.property("ADBE Vector Stroke Line Join").setValue(2);
    }
    try { p.moveTo(1); if (st) st.moveTo(2); } catch (e) {}
    try { g.moveTo(1); } catch (e) {}
    return cont.property(name);
  }

  // ---------- camada MAR (agua branca + onda + duas linhas menores), presa ao mundo
  var mar = comp.layers.addShape(); mar.name = "MAR";
  mar.parent = world; mar.transform.anchorPoint.setValue([0, 0]); mar.transform.position.setValue([0, 0]);
  var root = mar.property("ADBE Root Vectors Group");
  pathGroup(root, "agua", EX.AGUA, true, WHITE, 0);   // esconde a parte de baixo do corpo e do chao
  pathGroup(root, "linha 3", EX.L3, false, null, 8);
  pathGroup(root, "linha 2", EX.L2, false, null, 8);
  pathGroup(root, "onda", EX.ONDA, false, null, 9);   // por cima de tudo
  try { mar.moveBefore(co); } catch (e) {}              // acima do corpo, abaixo dos olhos

  // ---------- personagem: segue o chao fora do mar e boia nas ondas dentro dele
  ch.transform.position.expression = EX.CHAR;
  var Y = 1086;
  setKeys(ch.transform.position, [[955, [7580, Y]], [985, [7900, Y]], [1050, [8560, Y]], [1078, [8800, Y]]], "auto", []);
  setKeys(slider("Emocao"), [[1050, 0]], "hold");

  app.endUndoGroup();
  alert("Bloco E aplicado (frames 910-1078).\nAperte 0 do teclado numerico para ver a previa.");
})();
