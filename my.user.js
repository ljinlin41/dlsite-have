// ==UserScript==
// @name         my
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.dlsite.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    // alert('hello world');

  // var fso = new ActiveXObject("Scripting.FileSystemObject");
  // console.log(fso);
    var list2 = ['RJ284644', 'RJ267126', 'RJ283093', 'RJ234821', 'RJ164219', 'RJ263247', 'RJ278635', 'RJ140665', 'RJ272253', 'RJ275914', 'RJ282348', 'RJ277307', 'RJ174314', 'RJ251051', 'RJ212316', 'RJ169816', 'RJ178087', 'RJ272689', 'RJ286139', 'RJ238869', 'RJ281697', 'RJ280955', 'RJ275745', 'RJ266222', 'RJ266712', 'RJ255618', 'RJ244131', 'RJ258173', 'RJ163806', 'RJ276682', 'RJ281302', 'RJ222369', 'RJ252117', 'RJ278625', 'RJ282134', 'RJ235236', 'RJ275549', 'RJ278963', 'RJ254101', 'RJ269057', 'RJ239850', 'RJ254495', 'RJ250233', 'RJ255109', 'RJ198067', 'RJ278264', 'RJ256421', 'RJ234791', 'RJ283845', 'RJ223803', 'RJ273919', 'RJ220635', 'RJ216068', 'RJ274721', 'RJ281324', 'RJ284985', 'RJ250582', 'RJ274127', 'RJ283176', 'RJ219182', 'RJ266554', 'RJ215157', 'RJ272844', 'RJ270464', 'RJ269753', 'RJ273500', 'RJ258284', 'RJ280715', 'RJ268320', 'RJ270008', 'RJ261695', 'RJ273812', 'RJ266872', 'RJ250469', 'RJ277697', 'RJ279843', 'RJ273326', 'RJ224113', 'RJ273518', 'RJ286303', 'RJ283074', 'RJ259857', 'RJ276342', 'RJ241102', 'RJ280756', 'RJ277473', 'RJ210420', 'RJ277424', 'RJ281466', 'RJ272766', 'RJ282003', 'RJ179846', 'RJ203826', 'RJ259152', 'RJ240262', 'RJ234506', 'RJ280571', 'RJ286480', 'RJ250637', 'RJ272849', 'RJ265627', 'RJ265279', 'RJ284307', 'RJ220980', 'RJ185155', 'RJ265002', 'RJ211017', 'RJ190794', 'RJ260211', 'RJ274356', 'RJ247836', 'RJ127012', 'RJ280495', 'RJ262563', 'RJ215163']

    console.log(list2.length)

    var list = document.getElementsByClassName("work_thumb_inner");
    for(var i=0; i<list.length; i++) {
      // console.log(list[i].href);
        for (var j=0; j<list2.length; j++) {
           if(list[i].href.indexOf(list2[j]) !== -1) {
             // console.log(list[i].href);
             var node = list[i].parentNode;
             // console.log(node);
             node.style.backgroundColor='green';
           }
        }
    }
})();