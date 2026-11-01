
(function () {
  var FLOWER = [{"p":[[0.0,-0.1],[7.7,2.2],[23.5,5.3],[31.4,6.6],[39.5,7.1],[55.6,6.6],[63.6,5.3],[71.3,3.0],[93.7,-5.7],[100.8,-9.6],[110.7,-16.5],[116.9,-21.7],[122.5,-27.5],[135.2,-43.1],[139.8,-49.6],[139.0,-51.8],[135.2,-53.0],[115.5,-57.0],[103.5,-58.4],[91.4,-58.3],[83.3,-57.6],[75.4,-56.1],[67.8,-53.6],[45.4,-44.7],[38.5,-40.7],[28.7,-33.5],[22.6,-28.2],[17.1,-22.3],[4.4,-6.7]],"c":true,"f":[0.208,0.69,0.29],"w":7},{"p":[[-0.3,0.2],[-8.8,-13.4],[-19.0,-25.9],[-25.5,-30.7],[-39.2,-39.0],[-46.5,-42.6],[-54.1,-45.1],[-62.1,-46.4],[-82.2,-46.2],[-102.0,-42.7],[-103.4,-40.1],[-99.0,-33.1],[-91.2,-23.9],[-73.8,-7.2],[-66.8,-3.1],[-51.5,1.9],[-31.7,5.1],[-11.6,3.3]],"c":true,"f":[0.208,0.69,0.29],"w":7},{"p":[[-0.2,-0.1],[3.6,-11.6],[11.3,-30.4],[18.8,-57.8],[21.2,-69.7],[24.5,-97.9],[24.5,-106.0],[21.7,-142.4],[15.0,-178.2],[12.1,-190.0]],"c":false,"f":null,"w":8},{"p":[[12.0,-190.0],[5.9,-200.4],[0.5,-206.3],[-8.8,-213.9],[-12.2,-215.9],[-19.6,-218.9],[-27.4,-220.4],[-35.4,-220.3],[-43.4,-219.4],[-50.9,-216.6],[-61.8,-211.4],[-62.4,-208.4],[-60.3,-205.1],[-55.5,-198.7],[-47.3,-189.9],[-41.1,-184.9],[-29.9,-180.4],[-22.0,-179.2],[-10.1,-181.1],[5.0,-186.1]],"c":true,"f":[0.557,0.173,0.831],"w":7},{"p":[[11.8,-189.7],[15.2,-187.5],[18.9,-185.9],[38.0,-180.0],[46.0,-179.1],[50.0,-179.4],[53.9,-180.5],[64.7,-185.4],[68.2,-187.4],[74.5,-192.4],[79.9,-198.4],[84.1,-205.1],[86.1,-208.5],[85.5,-211.2],[78.6,-215.1],[67.3,-219.1],[59.4,-220.1],[51.4,-220.4],[43.5,-219.1],[36.1,-216.2],[29.5,-211.7],[18.5,-200.0],[13.7,-193.6]],"c":true,"f":[0.557,0.173,0.831],"w":7},{"p":[[12.3,-190.0],[12.4,-194.0],[11.0,-206.1],[9.2,-214.0],[2.8,-228.8],[-2.1,-235.3],[-11.6,-242.8],[-18.9,-246.4],[-30.7,-249.4],[-46.8,-250.8],[-48.8,-248.8],[-46.9,-228.7],[-40.8,-213.6],[-36.2,-207.0],[-26.7,-199.4],[-19.6,-195.5],[-15.9,-194.1],[-8.1,-191.9],[-0.1,-190.4],[8.0,-189.5]],"c":true,"f":[0.557,0.173,0.831],"w":7},{"p":[[12.0,-190.0],[28.1,-191.2],[40.0,-193.7],[50.9,-199.1],[57.3,-204.1],[59.9,-207.2],[64.3,-213.9],[69.7,-224.8],[72.2,-236.7],[73.0,-248.8],[70.8,-250.9],[50.7,-248.8],[39.3,-244.6],[32.2,-240.6],[29.0,-238.1],[26.2,-235.2],[21.5,-228.6],[15.9,-217.9],[13.6,-210.1],[12.2,-202.1],[11.7,-194.0]],"c":true,"f":[0.557,0.173,0.831],"w":7},{"p":[[11.8,-190.2],[17.6,-195.7],[22.7,-201.9],[27.0,-208.6],[30.7,-215.8],[33.6,-223.2],[34.5,-227.1],[36.0,-243.0],[34.5,-251.0],[25.9,-269.0],[16.4,-281.9],[13.5,-284.8],[10.4,-284.8],[7.5,-282.0],[2.6,-275.6],[-5.7,-262.0],[-9.3,-254.8],[-11.3,-247.0],[-11.8,-235.0],[-11.4,-231.0],[-9.5,-223.3],[-3.2,-208.5],[1.2,-201.9]],"c":true,"f":[0.557,0.173,0.831],"w":7},{"p":[[17.0,-190.0],[16.3,-187.4],[15.4,-186.3],[14.3,-185.6],[11.7,-185.0],[10.3,-185.3],[8.1,-186.8],[7.0,-189.3],[7.0,-190.7],[8.1,-193.2],[10.3,-194.7],[11.7,-195.0],[14.3,-194.4],[15.4,-193.7],[16.3,-192.6]],"c":true,"f":[0.0,0.0,0.0],"w":0}];
  var WORM = [{"p":[[17.1,6.4],[22.3,-6.2],[26.9,-19.1],[32.2,-39.0],[34.2,-52.6],[34.6,-59.5],[33.9,-73.2],[31.6,-86.7],[26.5,-106.6],[8.9,-158.4],[6.0,-164.6],[0.9,-169.3],[-5.6,-171.9],[-12.6,-171.9],[-19.1,-169.3],[-24.1,-164.4],[-27.0,-158.2],[-27.5,-151.4],[-23.8,-138.3],[-11.8,-106.2],[-7.5,-93.2],[-4.7,-79.8],[-3.9,-73.0],[-3.6,-66.1],[-4.2,-52.5],[-6.5,-39.0],[-10.4,-25.9],[-17.7,-6.7]],"c":false,"f":[1.0,1.0,1.0],"w":8},{"p":[[3.8,-156.4],[2.9,-153.3],[1.9,-152.1],[0.5,-151.1],[-2.6,-150.5],[-5.6,-151.5],[-6.8,-152.6],[-8.1,-155.6],[-7.7,-158.8],[-6.8,-160.2],[-5.6,-161.3],[-2.6,-162.3],[-1.0,-162.2],[1.9,-160.7],[2.9,-159.5]],"c":true,"f":[0.0,0.0,0.0],"w":0}];
  var BEETLE = [{"p":[[101.9,-16.9],[101.0,-11.2],[98.8,-6.1],[95.1,-1.9],[90.9,1.9],[85.6,4.2],[79.7,4.5],[74.2,3.0],[69.2,0.3],[65.2,-3.8],[60.6,-14.0],[60.0,-19.7],[61.9,-25.2],[64.7,-30.2],[68.9,-34.2],[74.3,-36.2],[79.8,-37.1],[85.4,-37.0],[90.9,-35.5],[95.5,-32.1],[99.5,-27.9],[101.9,-22.6]],"c":true,"f":[1.0,1.0,1.0],"w":6},{"p":[[65.2,-0.1],[64.2,-5.7],[61.9,-10.8],[58.9,-15.5],[51.9,-23.9],[47.8,-27.7],[43.2,-30.9],[33.2,-36.0],[22.6,-39.7],[11.4,-41.5],[-5.4,-42.3],[-11.1,-42.1],[-16.7,-41.3],[-22.1,-39.6],[-42.6,-30.8],[-47.5,-28.0],[-51.9,-24.6],[-59.4,-16.3],[-62.3,-11.4],[-64.1,-6.1],[-64.6,-0.2],[-36.7,0.8],[-14.3,-1.0],[30.7,0.4],[47.5,0.1],[58.8,0.7]],"c":true,"f":[1.0,1.0,1.0],"w":7},{"p":[[-0.3,-42.0],[0.0,0.0]],"c":false,"f":null,"w":5},{"p":[[91.0,-21.0],[89.7,-17.9],[86.5,-16.8],[84.4,-17.6],[82.6,-20.4],[83.5,-23.7],[86.5,-25.2],[89.7,-24.1]],"c":true,"f":[0.0,0.0,0.0],"w":0},{"p":[[-36.3,0.1],[-48.9,25.3]],"c":false,"f":null,"w":6},{"p":[[0.1,0.0],[0.1,25.2]],"c":false,"f":null,"w":6},{"p":[[36.5,-0.1],[49.1,25.1]],"c":false,"f":null,"w":6},{"p":[[92.2,-33.7],[111.8,-58.9]],"c":false,"f":null,"w":5}];
  var BFLY = [{"p":[[0.9,-47.7],[2.7,-52.9],[3.6,-58.4],[4.2,-96.8],[2.6,-107.8],[0.6,-113.1],[-2.3,-117.8],[-6.0,-122.0],[-21.9,-136.8],[-26.3,-140.0],[-36.0,-145.4],[-46.4,-149.2],[-73.1,-152.4],[-76.6,-142.5],[-77.6,-137.1],[-78.9,-126.1],[-78.9,-115.1],[-74.4,-93.7],[-70.5,-83.5],[-67.7,-78.9],[-60.8,-70.3],[-56.8,-66.5],[-52.3,-63.2],[-47.4,-60.6],[-26.7,-53.3],[-16.2,-50.3],[-5.5,-47.8]],"c":true,"f":[1.0,1.0,1.0],"w":7},{"p":[[0.8,-37.5],[-11.5,-55.9],[-28.9,-69.4],[-34.2,-70.8],[-45.3,-71.4],[-50.8,-70.8],[-56.1,-68.8],[-65.7,-63.4],[-74.9,-57.4],[-79.1,-54.0],[-68.2,-34.8],[-55.3,-24.3],[-50.5,-21.4],[-44.9,-20.5],[-34.1,-20.8],[-28.7,-21.4],[-18.4,-25.2],[-8.6,-30.2],[-3.7,-33.0]],"c":true,"f":[1.0,1.0,1.0],"w":7},{"p":[[-26.1,-100.5],[-27.2,-94.9],[-31.6,-91.5],[-36.8,-89.2],[-41.9,-91.6],[-46.7,-94.8],[-46.3,-106.0],[-42.6,-110.5],[-36.8,-109.9],[-30.9,-110.7],[-27.7,-105.8]],"c":true,"f":null,"w":5},{"p":[[-49.6,-130.0],[-51.8,-125.2],[-55.8,-121.1],[-61.3,-123.1],[-65.9,-126.8],[-61.7,-137.4],[-56.0,-137.7],[-51.0,-135.2]],"c":true,"f":null,"w":5},{"p":[[-35.5,-46.4],[-36.6,-40.6],[-42.2,-38.8],[-47.2,-40.1],[-51.7,-43.5],[-50.9,-49.1],[-47.3,-52.8],[-42.1,-54.9],[-37.4,-51.6]],"c":true,"f":null,"w":5},{"p":[[8.1,-34.5],[8.0,-23.4],[4.8,-7.2],[2.8,-2.2],[-1.2,0.0],[-4.4,-4.4],[-5.9,-9.8],[-7.7,-26.2],[-8.3,-42.7],[-5.6,-59.0],[-3.9,-64.2],[-1.1,-68.8],[3.2,-67.0],[5.3,-61.8],[6.2,-56.4]],"c":true,"f":[1.0,1.0,1.0],"w":6},{"p":[[-0.2,-69.4],[-19.0,-107.3]],"c":false,"f":null,"w":5},{"p":[[-0.1,-69.6],[16.2,-110.1]],"c":false,"f":null,"w":5},{"p":[[-14.9,-107.4],[-16.1,-104.4],[-18.1,-103.4],[-21.2,-104.0],[-22.9,-106.8],[-22.0,-109.9],[-19.2,-111.4],[-16.1,-110.3]],"c":true,"f":[0.0,0.0,0.0],"w":0},{"p":[[20.2,-110.1],[19.0,-107.1],[15.9,-106.0],[13.1,-107.5],[12.2,-110.6],[13.9,-113.4],[17.0,-114.0],[19.0,-113.0]],"c":true,"f":[0.0,0.0,0.0],"w":0}];
  var BLACK = [0, 0, 0], WHITE = [1, 1, 1];
  var GND_FN = 'function gnd(x){ return 1240 + 3 * Math.sin(2 * Math.PI * x / 420) + 1.5 * Math.sin(2 * Math.PI * x / 137 + 1); }\n';
  function gnd(x) { return 1240 + 3 * Math.sin(2 * Math.PI * x / 420) + 1.5 * Math.sin(2 * Math.PI * x / 137 + 1); }
  function has(a, v) { for (var i = 0; i < a.length; i++) if (a[i] == v) return true; return false; }
  function corr(x) { var acc = (x - 440) / 150 * 180 / Math.PI; return Math.round(acc / 360) * 360 - acc; }

  var comp = null, q;
  for (q = 1; q <= app.project.numItems; q++) { var it = app.project.item(q); if ((it instanceof CompItem) && it.name == "MUNDO") comp = it; }
  if (!comp) { alert("Nao achei a comp MUNDO. Rode antes o montar_mundo.jsx."); return; }
  function getLayer(n) { var l = null; try { l = comp.layer(n); } catch (e) { l = null; } return l ? l : null; }
  var names = ["CHAR", "CORPO", "CTRL", "WORLD", "CHAO"];
  for (q = 0; q < names.length; q++) { if (!getLayer(names[q])) { alert("Falta a camada " + names[q] + " na MUNDO."); return; } }
  var jaTem = (getLayer("FLOR") != null);
  if (jaTem) { alert("O bloco D ja foi aplicado (existe a camada FLOR). Use Ctrl+Z ou apague FLOR, MINHOCA, BESOURO e BORBOLETA antes de rodar de novo."); return; }

  var ch = comp.layer("CHAR"), co = comp.layer("CORPO"), ctrl = comp.layer("CTRL"), world = comp.layer("WORLD"), chao = comp.layer("CHAO");
  app.beginUndoGroup("Animar bloco D");

  function easeAt(prop, idx) {
    try {
      var vt = prop.propertyValueType, dims = 1;
      if (vt == PropertyValueType.TwoD) dims = 2; else if (vt == PropertyValueType.ThreeD) dims = 3;
      var e = []; for (var d = 0; d < dims; d++) e.push(new KeyframeEase(0, 33.33));
      prop.setTemporalEaseAtKey(idx, e, e);
    } catch (x) {}
  }
  // modos: hold | linear | ease | auto (stopFrames = frames que freiam)
  function setKeys(prop, arr, mode, stopFrames) {
    var i, t, idx;
    for (i = 0; i < arr.length; i++) prop.setValueAtTime(arr[i][0] / comp.frameRate, arr[i][1]);
    for (i = 0; i < arr.length; i++) {
      t = arr[i][0] / comp.frameRate; idx = prop.nearestKeyIndex(t);
      try {
        if (mode == "hold") prop.setInterpolationTypeAtKey(idx, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
        else if (mode == "linear") prop.setInterpolationTypeAtKey(idx, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
        else if (mode == "ease") { prop.setInterpolationTypeAtKey(idx, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER); easeAt(prop, idx); }
        else if (mode == "auto") {
          prop.setInterpolationTypeAtKey(idx, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
          if (stopFrames && has(stopFrames, arr[i][0])) easeAt(prop, idx);
          else { try { prop.setTemporalContinuousAtKey(idx, true); prop.setTemporalAutoBezierAtKey(idx, true); } catch (x2) {} }
        }
      } catch (x) {}
    }
  }
  function slider(name) { return ctrl.property("ADBE Effect Parade").property(name).property("ADBE Slider Control-0001"); }

  // ---------- desenho das formas
  function addGroup(layer, name, pts, closed, fillCol, strokeW) {
    var g = layer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group"); g.name = name;
    var gc = g.property("ADBE Vectors Group");
    var p = gc.addProperty("ADBE Vector Shape - Group");
    var s = new Shape(); s.vertices = pts; s.closed = closed; p.property("ADBE Vector Shape").setValue(s);
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
    try { g.moveTo(1); } catch (e) {}   // o ultimo desenhado fica por cima
    return g;
  }
  function build(layer, items) {
    for (var i = 0; i < items.length; i++) addGroup(layer, "f" + (i + 1), items[i].p, items[i].c, items[i].f, items[i].w);
  }
  function newLayer(name, pos, parent) {
    var l = comp.layers.addShape(); l.name = name;
    if (parent) l.parent = parent;
    l.transform.anchorPoint.setValue([0, 0]); l.transform.position.setValue(pos);
    return l;
  }

  // ---------- 1) trajetoria do personagem (emenda com o bloco C)
  var pos = ch.transform.position;
  var i335 = pos.nearestKeyIndex(335 / comp.frameRate);
  try { pos.setInterpolationTypeAtKey(i335, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER); pos.setTemporalContinuousAtKey(i335, true); pos.setTemporalAutoBezierAtKey(i335, true); } catch (e) {}
  var Y = 1086;
  setKeys(pos, [[376, [2470, Y]], [406, [2470, Y]], [466, [3117, Y]], [496, [3117, Y]], [530, [3460, Y]], [566, [3920, Y]], [606, [4210, Y]], [626, [4210, Y]], [640, [4300, Y]]],
          "auto", [376, 406, 466, 496, 606, 626]);

  // ---------- 2) angulo: boca para a frente nas paradas + cheirar a flor
  var s1 = corr(2470), s2 = corr(3117), s3 = corr(4210);
  setKeys(slider("Angulo_inicial"), [[335, 10], [376, s1], [380, s1 + 12], [386, s1], [392, s1 + 12], [398, s1], [406, s1], [466, s2], [496, s2], [566, s2], [606, s3], [626, s3]], "ease");

  // ---------- 3) olhos
  setKeys(slider("Emocao"), [[406, 0], [466, 1], [496, 3], [526, 4], [538, 3], [566, 2], [580, 0], [596, 1]], "hold");

  // ---------- 4) corpo: balancadas na minhoca e pouso da borboleta
  setKeys(co.transform.scale, [[474, [100, 100]], [478, [102, 95]], [483, [100, 100]], [488, [102, 95]], [493, [100, 100]], [612, [100, 100]], [614, [103, 95]], [620, [100, 100]]], "ease");
  setKeys(co.transform.position, [[474, [0, 0]], [478, [0, 7]], [483, [0, 0]], [488, [0, 7]], [493, [0, 0]], [612, [0, 0]], [614, [0, 7]], [620, [0, 0]]], "ease");

  // ---------- 5) flor
  var flor = newLayer("FLOR", [2730, gnd(2730) + 2], world);
  build(flor, FLOWER);
  try { flor.moveBefore(chao); } catch (e) {}
  setKeys(flor.transform.scale, [[338, [0, 0]], [350, [108, 108]], [358, [100, 100]]], "ease");
  setKeys(flor.transform.rotation, [[378, 0], [386, -7], [394, 0], [398, -7], [406, 0]], "ease");
  setKeys(flor.transform.opacity, [[436, 100], [466, 0]], "linear");

  // ---------- 6) minhoca
  var minhoca = newLayer("MINHOCA", [3357, gnd(3357) + 2], world);
  build(minhoca, WORM);
  try { minhoca.moveBefore(chao); } catch (e) {}
  setKeys(minhoca.transform.scale, [[440, [0, 0]], [452, [110, 110]], [458, [100, 100]]], "ease");
  setKeys(minhoca.transform.rotation, [[468, 0], [476, -12], [484, -3], [492, -12], [500, 0]], "ease");
  setKeys(minhoca.transform.opacity, [[516, 100], [546, 0]], "linear");

  // ---------- 7) besouro (preso a tela; passa por ele)
  var bes = newLayer("BESOURO", [-220, 1210], null);
  build(bes, BEETLE);
  try { bes.moveAfter(ctrl); } catch (e) {}
  setKeys(bes.transform.position, [[508, [-220, 1210]], [566, [1300, 1210]]], "linear");
  bes.transform.position.expression =
    GND_FN +
    'var wx = value[0] - thisComp.layer("WORLD").transform.position[0];\n' +
    '[value[0], gnd(wx) - 25 - 3 * Math.abs(Math.sin(time * 40))];';
  bes.transform.rotation.expression = '2 * Math.sin(time * 60);';

  // ---------- 8) borboleta (voa, pousa no topo da cabeca e vai junto)
  var bor = newLayer("BORBOLETA", [1180, 260], null);
  build(bor, BFLY);
  try { bor.moveAfter(ctrl); } catch (e) {}
  setKeys(bor.transform.position,
    [[566, [1180, 260]], [574, [950, 420]], [582, [760, 330]], [590, [610, 560]], [598, [500, 760]], [606, [470, 880]], [614, [440, 928]]], "auto", [614]);
  bor.transform.position.expression =
    'var f = timeToFrames(time);\n' +
    'var cx = thisComp.layer("CTRL").effect("Camera_X")(1);\n' +
    'var cy = thisComp.layer("CHAR").transform.position[1];\n' +
    '(f >= 614) ? [cx, cy - 158] : value;';
  bor.transform.scale.expression =
    'var f = timeToFrames(time);\n' +
    'var a = (f < 614) ? 28 : 12;\n' +
    'var s = 100 + a * Math.sin(time * ((f < 614) ? 42 : 10));\n[s, 100];';
  bor.transform.rotation.expression = '(timeToFrames(time) < 614) ? 6 * Math.sin(time * 6) : 0;';

  app.endUndoGroup();
  alert("Bloco D aplicado (frames 336-640).\nAperte 0 do teclado numerico para ver a previa.");
})();
