(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={version:1,chapters:[{id:1,element:`rocks`,minBarksRange:[1,2]},{id:2,element:`mud`,minBarksRange:[2,3]},{id:3,element:`holes`,minBarksRange:[3,4]},{id:4,element:`black-sheep`,minBarksRange:[4,5]},{id:5,element:`wolves`,minBarksRange:[5,7]}],levels:[{id:1001,chapter:1,index:1,seed:1310038,width:6,height:6,rows:[`......`,`..#...`,`.....p`,`......`,`.....p`,`......`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:4,y:4}],minBarks:2,barkLimit:5,solution:[{x:2,y:4},{x:0,y:2}]},{id:1002,chapter:2,index:2,seed:2011131,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`......`,`..pm..`,`....#.`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:4,y:3}],minBarks:3,barkLimit:6,solution:[{x:4,y:0},{x:5,y:5},{x:4,y:5}]},{id:1003,chapter:3,index:3,seed:3010111,width:7,height:8,rows:[`.......`,`.......`,`.....#.`,`..m....`,`..p...o`,`.......`,`.......`,`.......`],wolves:[],dog:{x:6,y:3},sheep:[{id:0,kind:`white`,x:5,y:4}],minBarks:3,barkLimit:5,solution:[{x:5,y:5},{x:6,y:3},{x:2,y:0}]},{id:1004,chapter:3,index:4,seed:3311471,width:7,height:8,rows:[`.......`,`#......`,`...o...`,`.......`,`.......`,`...ppm.`,`.#.....`,`.......`],wolves:[],dog:{x:5,y:0},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`white`,x:5,y:4}],minBarks:4,barkLimit:6,solution:[{x:5,y:1},{x:6,y:5},{x:1,y:0},{x:0,y:5}]},{id:1005,chapter:3,index:5,seed:3010411,width:7,height:8,rows:[`....p..`,`.....m.`,`....o..`,`.......`,`......#`,`.......`,`.......`,`.......`],wolves:[],dog:{x:1,y:6},sheep:[{id:0,kind:`white`,x:4,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:5,y:5},{x:5,y:2},{x:6,y:0}]},{id:1006,chapter:5,index:6,seed:5510757,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`p.....`,`p.....`],wolves:[{x:0,y:0},{x:2,y:3}],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:3,y:4}],minBarks:5,barkLimit:6,solution:[{x:5,y:1},{x:1,y:0},{x:3,y:2},{x:0,y:1},{x:4,y:5}]},{id:1007,chapter:5,index:7,seed:5010088,width:8,height:8,rows:[`........`,`........`,`.....po.`,`.....p..`,`........`,`........`,`........`,`........`],wolves:[{x:7,y:4}],dog:{x:1,y:5},sheep:[{id:0,kind:`black`,x:6,y:1},{id:1,kind:`black`,x:7,y:2}],minBarks:5,barkLimit:6,solution:[{x:7,y:0},{x:3,y:1},{x:4,y:4},{x:6,y:3},{x:5,y:4}]},{id:1008,chapter:1,index:8,seed:1310093,width:5,height:5,rows:[`...p.`,`.....`,`...p.`,`.#...`,`.....`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:2,y:0},{id:1,kind:`white`,x:1,y:1}],minBarks:2,barkLimit:5,solution:[{x:1,y:0},{x:0,y:2}]},{id:1009,chapter:1,index:9,seed:1010209,width:6,height:6,rows:[`......`,`.p....`,`......`,`......`,`#.....`,`......`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:2,y:4}],minBarks:2,barkLimit:5,solution:[{x:3,y:4},{x:1,y:5}]},{id:1010,chapter:3,index:10,seed:3010349,width:7,height:7,rows:[`.p.....`,`.o.....`,`....#..`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:2,y:6},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:3,barkLimit:5,solution:[{x:0,y:2},{x:3,y:3},{x:4,y:0}]},{id:1011,chapter:3,index:11,seed:3010283,width:7,height:7,rows:[`.......`,`.......`,`.....#.`,`....m..`,`.......`,`....p.o`,`.......`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:5,y:5}],minBarks:3,barkLimit:5,solution:[{x:5,y:6},{x:6,y:3},{x:4,y:0}]},{id:1012,chapter:4,index:12,seed:4010234,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`..p.o..`,`..p....`,`..p....`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`black`,x:5,y:4},{id:1,kind:`white`,x:1,y:5},{id:2,kind:`white`,x:1,y:6}],minBarks:5,barkLimit:7,solution:[{x:0,y:6},{x:5,y:6},{x:0,y:5},{x:3,y:3},{x:0,y:4}]},{id:1013,chapter:5,index:13,seed:5510847,width:5,height:6,rows:[`.....`,`p....`,`p....`,`m....`,`.....`,`.....`],wolves:[{x:2,y:0}],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`black`,x:0,y:5}],minBarks:5,barkLimit:6,solution:[{x:0,y:0},{x:0,y:0},{x:3,y:2},{x:1,y:3},{x:2,y:1}]},{id:1014,chapter:5,index:14,seed:5011731,width:7,height:7,rows:[`.p.....`,`.p..m..`,`.......`,`.#.....`,`...#...`,`.......`,`.......`],wolves:[{x:6,y:2}],dog:{x:6,y:3},sheep:[{id:0,kind:`white`,x:5,y:3},{id:1,kind:`white`,x:5,y:4}],minBarks:6,barkLimit:7,solution:[{x:6,y:3},{x:2,y:4},{x:3,y:0},{x:6,y:4},{x:4,y:5},{x:5,y:1}]},{id:1015,chapter:1,index:15,seed:1310086,width:5,height:6,rows:[`.....`,`.....`,`#....`,`.....`,`.p.p.`,`.....`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`white`,x:3,y:3}],minBarks:2,barkLimit:5,solution:[{x:3,y:2},{x:1,y:0}]},{id:1016,chapter:2,index:16,seed:2010902,width:6,height:6,rows:[`......`,`......`,`......`,`.pm...`,`...#..`,`......`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:6,solution:[{x:3,y:0},{x:4,y:3},{x:3,y:3}]},{id:1017,chapter:3,index:17,seed:3010231,width:6,height:7,rows:[`......`,`p...m.`,`......`,`......`,`o....#`,`......`,`......`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:2,y:4}],minBarks:3,barkLimit:5,solution:[{x:1,y:4},{x:4,y:5},{x:5,y:1}]},{id:1018,chapter:3,index:18,seed:3010114,width:6,height:7,rows:[`..o...`,`.....#`,`..p.m.`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:4,y:0},{x:5,y:2}]},{id:1019,chapter:5,index:19,seed:5511571,width:6,height:6,rows:[`......`,`......`,`..pp..`,`......`,`......`,`......`],wolves:[{x:4,y:1},{x:0,y:4}],dog:{x:5,y:0},sheep:[{id:0,kind:`black`,x:0,y:1},{id:1,kind:`white`,x:1,y:2}],minBarks:5,barkLimit:6,solution:[{x:2,y:1},{x:0,y:2},{x:1,y:4},{x:4,y:3},{x:3,y:0}]},{id:1020,chapter:5,index:20,seed:5011913,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`m.....`,`pp....`,`.p....`],wolves:[{x:4,y:6}],dog:{x:5,y:3},sheep:[{id:0,kind:`white`,x:0,y:2},{id:1,kind:`white`,x:1,y:3},{id:2,kind:`white`,x:3,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:0,y:0},{x:1,y:0},{x:4,y:5},{x:2,y:0},{x:3,y:6}]},{id:1021,chapter:5,index:21,seed:5011683,width:7,height:8,rows:[`.......`,`.......`,`.......`,`.p.....`,`ppm....`,`.......`,`.......`,`.......`],wolves:[{x:0,y:7}],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:5,y:4},{id:2,kind:`white`,x:1,y:6}],minBarks:6,barkLimit:7,solution:[{x:1,y:0},{x:6,y:4},{x:3,y:4},{x:1,y:7},{x:2,y:5},{x:0,y:6}]},{id:1022,chapter:1,index:22,seed:1310001,width:6,height:6,rows:[`...#..`,`p.....`,`......`,`p.....`,`......`,`......`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:3,y:2},{id:1,kind:`white`,x:1,y:3}],minBarks:2,barkLimit:5,solution:[{x:3,y:3},{x:4,y:1}]},{id:1023,chapter:2,index:23,seed:2011574,width:7,height:7,rows:[`.....#.`,`..m....`,`..m..p.`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:1,y:1},sheep:[{id:0,kind:`white`,x:5,y:1}],minBarks:3,barkLimit:6,solution:[{x:6,y:1},{x:2,y:0},{x:0,y:2}]},{id:1024,chapter:4,index:24,seed:4510909,width:5,height:5,rows:[`..pp.`,`.....`,`..m..`,`.#...`,`.....`],wolves:[],dog:{x:3,y:2},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:3,y:3}],minBarks:4,barkLimit:6,solution:[{x:0,y:0},{x:4,y:3},{x:2,y:4},{x:2,y:3}]},{id:1025,chapter:3,index:25,seed:3010951,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`...m.o`,`......`,`....mp`],wolves:[],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:3,y:0},{x:0,y:6},{x:0,y:6}]},{id:1026,chapter:4,index:26,seed:4510625,width:5,height:5,rows:[`.....`,`.....`,`o.p..`,`..p..`,`.....`],wolves:[],dog:{x:1,y:1},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`black`,x:1,y:4}],minBarks:4,barkLimit:6,solution:[{x:1,y:0},{x:0,y:3},{x:1,y:1},{x:3,y:2}]},{id:1027,chapter:5,index:27,seed:5511058,width:5,height:6,rows:[`.....`,`pp...`,`.....`,`.....`,`.....`,`.....`],wolves:[{x:0,y:4}],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:3,y:3}],minBarks:5,barkLimit:6,solution:[{x:4,y:1},{x:4,y:3},{x:1,y:4},{x:2,y:2},{x:0,y:3}]},{id:1028,chapter:5,index:28,seed:5011109,width:7,height:7,rows:[`.......`,`.....o.`,`....pp.`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:2,y:4}],dog:{x:4,y:3},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`black`,x:0,y:4}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:4,y:1},{x:3,y:4},{x:6,y:3},{x:5,y:0},{x:4,y:3}]},{id:1029,chapter:1,index:29,seed:1010212,width:6,height:6,rows:[`......`,`..p...`,`......`,`...#..`,`......`,`......`],wolves:[],dog:{x:4,y:5},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:2,barkLimit:5,solution:[{x:0,y:3},{x:2,y:4}]},{id:1030,chapter:1,index:30,seed:1310025,width:6,height:6,rows:[`......`,`..p...`,`......`,`..p...`,`....#.`,`......`],wolves:[],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`white`,x:4,y:2}],minBarks:2,barkLimit:5,solution:[{x:4,y:1},{x:5,y:3}]},{id:1031,chapter:4,index:31,seed:4510109,width:5,height:6,rows:[`.pp..`,`.....`,`....#`,`.....`,`.....`,`.....`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:1,y:2}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:0,y:2},{x:3,y:3},{x:4,y:0}]},{id:1032,chapter:3,index:32,seed:3010296,width:7,height:8,rows:[`...p...`,`...o...`,`.......`,`.....m.`,`.....m.`,`.......`,`.......`,`.......`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:5,y:5},{x:5,y:4},{x:6,y:0}]},{id:1033,chapter:3,index:33,seed:3010380,width:6,height:6,rows:[`......`,`......`,`......`,`....op`,`...mm.`,`......`],wolves:[],dog:{x:3,y:2},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:0,y:4},{x:0,y:4},{x:5,y:5}]},{id:1034,chapter:5,index:34,seed:5510019,width:6,height:6,rows:[`......`,`....pp`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:5}],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:1},{x:0,y:4},{x:4,y:5},{x:0,y:2},{x:5,y:3}]},{id:1035,chapter:5,index:35,seed:5014888,width:7,height:8,rows:[`.......`,`ppp.m..`,`.......`,`m......`,`.......`,`.......`,`.....#.`,`.......`],wolves:[{x:2,y:4}],dog:{x:1,y:2},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:0,y:5},{id:2,kind:`white`,x:2,y:6}],minBarks:6,barkLimit:7,solution:[{x:2,y:0},{x:1,y:2},{x:0,y:6},{x:0,y:4},{x:4,y:7},{x:5,y:1}]},{id:1036,chapter:1,index:36,seed:1010033,width:6,height:6,rows:[`......`,`....p.`,`......`,`.....#`,`......`,`......`],wolves:[],dog:{x:5,y:1},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:0,y:3},{x:4,y:4}]},{id:1037,chapter:2,index:37,seed:2010040,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`..m...`,`.#....`,`..p...`],wolves:[],dog:{x:1,y:6},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:3,barkLimit:6,solution:[{x:1,y:0},{x:0,y:4},{x:2,y:0}]},{id:1038,chapter:4,index:38,seed:4510627,width:5,height:6,rows:[`.....`,`....#`,`..p..`,`..p..`,`.....`,`.....`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`black`,x:4,y:3},{id:1,kind:`white`,x:2,y:4}],minBarks:4,barkLimit:6,solution:[{x:2,y:5},{x:0,y:3},{x:3,y:1},{x:0,y:2}]},{id:1039,chapter:3,index:39,seed:3010098,width:6,height:7,rows:[`.#....`,`.....p`,`.....o`,`#..m..`,`......`,`......`,`......`],wolves:[],dog:{x:5,y:3},sheep:[{id:0,kind:`white`,x:4,y:3}],minBarks:4,barkLimit:6,solution:[{x:5,y:3},{x:4,y:3},{x:1,y:4},{x:0,y:1}]},{id:1040,chapter:4,index:40,seed:4510534,width:5,height:6,rows:[`.....`,`.....`,`.m...`,`.m...`,`.....`,`..pp.`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`black`,x:4,y:5}],minBarks:4,barkLimit:6,solution:[{x:1,y:0},{x:1,y:0},{x:1,y:0},{x:0,y:5}]},{id:1041,chapter:5,index:41,seed:5511067,width:5,height:6,rows:[`.....`,`.....`,`.....`,`.....`,`..pp.`,`.....`],wolves:[{x:0,y:2},{x:4,y:5}],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`black`,x:0,y:5}],minBarks:5,barkLimit:6,solution:[{x:0,y:4},{x:2,y:5},{x:1,y:0},{x:4,y:3},{x:3,y:5}]},{id:1042,chapter:5,index:42,seed:5510227,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`..p...`,`..p...`],wolves:[{x:0,y:5},{x:5,y:5}],dog:{x:1,y:1},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`white`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:1,y:0},{x:0,y:4},{x:5,y:4},{x:3,y:0},{x:4,y:5}]},{id:1043,chapter:1,index:43,seed:1010090,width:5,height:5,rows:[`.....`,`.....`,`...p.`,`....#`,`.....`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:0,y:3},{x:3,y:4}]},{id:1044,chapter:2,index:44,seed:2010880,width:6,height:6,rows:[`......`,`...#..`,`......`,`......`,`..m.p.`,`......`],wolves:[],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:3,barkLimit:6,solution:[{x:0,y:1},{x:2,y:0},{x:0,y:4}]},{id:1045,chapter:4,index:45,seed:4510145,width:5,height:6,rows:[`.....`,`...p.`,`...p.`,`.....`,`..m.#`,`.....`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:1,y:4}],minBarks:4,barkLimit:6,solution:[{x:4,y:0},{x:0,y:4},{x:0,y:4},{x:3,y:5}]},{id:1046,chapter:3,index:46,seed:3010492,width:7,height:8,rows:[`.......`,`......o`,`.......`,`.....#p`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:5,y:1}],minBarks:3,barkLimit:5,solution:[{x:5,y:0},{x:0,y:2},{x:6,y:0}]},{id:1047,chapter:4,index:47,seed:4010669,width:7,height:7,rows:[`.......`,`ppp....`,`.......`,`..#....`,`.......`,`.......`,`.......`],wolves:[],dog:{x:6,y:4},sheep:[{id:0,kind:`white`,x:0,y:3},{id:1,kind:`white`,x:1,y:5},{id:2,kind:`black`,x:2,y:6}],minBarks:5,barkLimit:7,solution:[{x:1,y:6},{x:0,y:6},{x:1,y:0},{x:3,y:2},{x:2,y:0}]},{id:1048,chapter:5,index:48,seed:5511835,width:6,height:6,rows:[`......`,`......`,`.p....`,`.p....`,`......`,`......`],wolves:[{x:5,y:4}],dog:{x:5,y:5},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`black`,x:5,y:2}],minBarks:5,barkLimit:6,solution:[{x:5,y:0},{x:0,y:1},{x:4,y:0},{x:5,y:3},{x:0,y:2}]},{id:1049,chapter:5,index:49,seed:5014809,width:7,height:7,rows:[`.......`,`.m.....`,`.......`,`.#.....`,`.......`,`.p.....`,`.p.....`],wolves:[{x:4,y:2}],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`black`,x:5,y:6}],minBarks:6,barkLimit:7,solution:[{x:5,y:1},{x:1,y:0},{x:0,y:2},{x:2,y:0},{x:5,y:6},{x:0,y:5}]},{id:1050,chapter:2,index:50,seed:2010109,width:6,height:7,rows:[`......`,`..p...`,`..m...`,`......`,`.#....`,`......`,`......`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:4,y:4}],minBarks:3,barkLimit:6,solution:[{x:5,y:4},{x:2,y:5},{x:2,y:3}]},{id:1051,chapter:2,index:51,seed:2012104,width:7,height:7,rows:[`.......`,`.......`,`.......`,`#..m...`,`.......`,`p..m...`,`.......`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:3,barkLimit:6,solution:[{x:1,y:3},{x:3,y:0},{x:4,y:5}]},{id:1052,chapter:3,index:52,seed:3010089,width:7,height:8,rows:[`..po...`,`.......`,`.......`,`..m..m.`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:5,y:1}],minBarks:3,barkLimit:5,solution:[{x:5,y:0},{x:6,y:3},{x:2,y:4}]},{id:1053,chapter:3,index:53,seed:3310015,width:6,height:7,rows:[`......`,`.....p`,`...mmp`,`.....o`,`......`,`......`,`......`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`white`,x:3,y:3}],minBarks:4,barkLimit:6,solution:[{x:0,y:1},{x:3,y:4},{x:0,y:2},{x:0,y:2}]},{id:1054,chapter:3,index:54,seed:3310710,width:7,height:8,rows:[`.......`,`.......`,`.....pp`,`.......`,`.......`,`......o`,`.......`,`.......`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:3,y:2},{id:1,kind:`white`,x:5,y:5}],minBarks:4,barkLimit:6,solution:[{x:0,y:2},{x:5,y:6},{x:0,y:3},{x:6,y:4}]},{id:1055,chapter:5,index:55,seed:5510961,width:5,height:6,rows:[`.....`,`..p..`,`..p..`,`.....`,`.....`,`.....`],wolves:[{x:0,y:2},{x:3,y:5}],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`black`,x:0,y:5}],minBarks:5,barkLimit:6,solution:[{x:2,y:5},{x:1,y:0},{x:4,y:3},{x:3,y:0},{x:0,y:1}]},{id:1056,chapter:5,index:56,seed:5310985,width:6,height:7,rows:[`.....p`,`.....p`,`.....p`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:6}],dog:{x:2,y:6},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:3,y:1},{id:2,kind:`white`,x:4,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:1},{x:4,y:0},{x:0,y:4},{x:4,y:6},{x:0,y:0},{x:5,y:5}]},{id:1057,chapter:1,index:57,seed:1010190,width:6,height:6,rows:[`......`,`......`,`.#....`,`....p.`,`......`,`......`],wolves:[],dog:{x:3,y:0},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:2,barkLimit:5,solution:[{x:1,y:5},{x:0,y:3}]},{id:1058,chapter:2,index:58,seed:2010938,width:6,height:7,rows:[`......`,`......`,`......`,`.....#`,`...pm.`,`......`,`......`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:3,barkLimit:6,solution:[{x:0,y:3},{x:4,y:0},{x:5,y:4}]},{id:1059,chapter:3,index:59,seed:3010236,width:7,height:7,rows:[`......o`,`..#....`,`...m..p`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:3,barkLimit:5,solution:[{x:5,y:1},{x:3,y:0},{x:0,y:2}]},{id:1060,chapter:4,index:60,seed:4510969,width:5,height:5,rows:[`.#...`,`.....`,`.pp..`,`.....`,`.....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`black`,x:3,y:1}],minBarks:4,barkLimit:6,solution:[{x:0,y:1},{x:2,y:0},{x:0,y:1},{x:1,y:3}]},{id:1061,chapter:5,index:61,seed:5511503,width:5,height:6,rows:[`..p..`,`..p..`,`.....`,`.....`,`.....`,`.....`],wolves:[{x:0,y:0}],dog:{x:3,y:2},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`black`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:4,y:1},{x:0,y:2},{x:3,y:3},{x:4,y:0},{x:0,y:1}]},{id:1062,chapter:5,index:62,seed:5510808,width:5,height:6,rows:[`.....`,`.....`,`.....`,`.....`,`.....`,`...pp`],wolves:[{x:4,y:2},{x:1,y:4}],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`white`,x:3,y:4}],minBarks:5,barkLimit:6,solution:[{x:2,y:0},{x:0,y:3},{x:3,y:0},{x:2,y:4},{x:4,y:3}]},{id:1063,chapter:5,index:63,seed:5010590,width:8,height:8,rows:[`........`,`.....m..`,`..m.....`,`........`,`..pp....`,`........`,`........`,`........`],wolves:[{x:2,y:0}],dog:{x:1,y:1},sheep:[{id:0,kind:`white`,x:6,y:1},{id:1,kind:`white`,x:3,y:3}],minBarks:6,barkLimit:7,solution:[{x:7,y:1},{x:6,y:1},{x:3,y:5},{x:4,y:2},{x:3,y:0},{x:2,y:1}]},{id:1064,chapter:2,index:64,seed:2010739,width:7,height:7,rows:[`.......`,`.m..#..`,`.......`,`.......`,`...p...`,`.......`,`.......`],wolves:[],dog:{x:1,y:2},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:3,barkLimit:6,solution:[{x:1,y:4},{x:0,y:1},{x:3,y:0}]},{id:1065,chapter:2,index:65,seed:2010117,width:7,height:7,rows:[`....#..`,`..p....`,`.......`,`.......`,`....m..`,`.......`,`.......`],wolves:[],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:4,y:5}],minBarks:3,barkLimit:6,solution:[{x:4,y:6},{x:4,y:5},{x:5,y:1}]},{id:1066,chapter:3,index:66,seed:3010392,width:7,height:8,rows:[`.......`,`.......`,`.mp....`,`.mo....`,`.m.....`,`.......`,`.......`,`.......`],wolves:[],dog:{x:1,y:7},sheep:[{id:0,kind:`white`,x:2,y:4}],minBarks:4,barkLimit:6,solution:[{x:3,y:4},{x:1,y:5},{x:1,y:4},{x:0,y:2}]},{id:1067,chapter:4,index:67,seed:4010802,width:6,height:6,rows:[`......`,`......`,`..p...`,`..p#..`,`......`,`......`],wolves:[],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:4,y:2},{id:1,kind:`black`,x:4,y:3}],minBarks:4,barkLimit:6,solution:[{x:5,y:2},{x:4,y:5},{x:1,y:4},{x:2,y:0}]},{id:1068,chapter:4,index:68,seed:4011260,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`pm....`,`p.....`,`......`],wolves:[],dog:{x:2,y:2},sheep:[{id:0,kind:`white`,x:3,y:5},{id:1,kind:`black`,x:0,y:6}],minBarks:4,barkLimit:6,solution:[{x:0,y:0},{x:4,y:5},{x:1,y:6},{x:2,y:4}]},{id:1069,chapter:5,index:69,seed:5011335,width:6,height:7,rows:[`......`,`..pm..`,`..p...`,`......`,`......`,`......`,`......`],wolves:[{x:1,y:3}],dog:{x:1,y:6},sheep:[{id:0,kind:`white`,x:2,y:4},{id:1,kind:`black`,x:4,y:5}],minBarks:5,barkLimit:6,solution:[{x:4,y:3},{x:0,y:4},{x:3,y:5},{x:4,y:1},{x:0,y:2}]},{id:1070,chapter:5,index:70,seed:5014520,width:8,height:8,rows:[`........`,`........`,`........`,`........`,`....p...`,`....p...`,`........`,`........`],wolves:[{x:5,y:3}],dog:{x:6,y:2},sheep:[{id:0,kind:`black`,x:5,y:5},{id:1,kind:`white`,x:2,y:6}],minBarks:6,barkLimit:7,solution:[{x:5,y:7},{x:0,y:6},{x:4,y:7},{x:0,y:6},{x:1,y:3},{x:5,y:4}]},{id:1071,chapter:1,index:71,seed:1010204,width:6,height:7,rows:[`......`,`.p....`,`......`,`#.....`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:0},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:2,barkLimit:5,solution:[{x:4,y:3},{x:1,y:4}]},{id:1072,chapter:2,index:72,seed:2011440,width:7,height:7,rows:[`.......`,`.......`,`..#....`,`....p..`,`..m....`,`.......`,`.......`],wolves:[],dog:{x:0,y:6},sheep:[{id:0,kind:`white`,x:2,y:5}],minBarks:3,barkLimit:6,solution:[{x:2,y:6},{x:2,y:5},{x:0,y:3}]},{id:1073,chapter:3,index:73,seed:3010712,width:6,height:6,rows:[`......`,`......`,`......`,`.pm...`,`..m...`,`.o....`],wolves:[],dog:{x:5,y:5},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:3,barkLimit:5,solution:[{x:0,y:4},{x:2,y:5},{x:3,y:3}]},{id:1074,chapter:3,index:74,seed:3010435,width:7,height:7,rows:[`.......`,`...mm..`,`..o....`,`..p....`,`....#..`,`.......`,`.......`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:4,barkLimit:6,solution:[{x:0,y:1},{x:0,y:1},{x:4,y:0},{x:5,y:3}]},{id:1075,chapter:4,index:75,seed:4010502,width:6,height:6,rows:[`..p...`,`..p...`,`.#....`,`......`,`......`,`......`],wolves:[],dog:{x:5,y:3},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:1,y:3}],minBarks:5,barkLimit:7,solution:[{x:4,y:4},{x:0,y:3},{x:3,y:4},{x:4,y:0},{x:0,y:1}]},{id:1076,chapter:5,index:76,seed:5013261,width:8,height:8,rows:[`........`,`........`,`........`,`........`,`........`,`pp......`,`........`,`........`],wolves:[{x:0,y:7}],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:2,y:6},{id:1,kind:`black`,x:5,y:6}],minBarks:6,barkLimit:7,solution:[{x:5,y:0},{x:1,y:1},{x:2,y:7},{x:3,y:2},{x:0,y:1},{x:1,y:6}]},{id:1077,chapter:5,index:77,seed:5511714,width:5,height:6,rows:[`.....`,`.....`,`....m`,`.....`,`....p`,`....p`],wolves:[{x:1,y:4}],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:2,y:2}],minBarks:5,barkLimit:6,solution:[{x:4,y:0},{x:0,y:2},{x:3,y:0},{x:4,y:0},{x:0,y:5}]},{id:1078,chapter:2,index:78,seed:2010196,width:6,height:7,rows:[`......`,`......`,`......`,`....#.`,`p.....`,`....m.`,`#.....`],wolves:[],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:6,solution:[{x:0,y:5},{x:4,y:6},{x:5,y:4}]},{id:1079,chapter:2,index:79,seed:2011305,width:6,height:6,rows:[`......`,`.p....`,`.m....`,`#.....`,`......`,`......`],wolves:[],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:6,solution:[{x:4,y:3},{x:1,y:4},{x:1,y:3}]},{id:1080,chapter:3,index:80,seed:3010351,width:6,height:6,rows:[`......`,`......`,`.m...p`,`#...o.`,`......`,`......`],wolves:[],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:3,barkLimit:5,solution:[{x:3,y:3},{x:1,y:4},{x:0,y:2}]},{id:1081,chapter:3,index:81,seed:3010585,width:6,height:7,rows:[`.....o`,`.#....`,`..m..p`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:3,barkLimit:5,solution:[{x:5,y:1},{x:2,y:0},{x:0,y:2}]},{id:1082,chapter:5,index:82,seed:5012809,width:8,height:8,rows:[`........`,`........`,`........`,`........`,`....pp..`,`........`,`........`,`........`],wolves:[{x:4,y:2}],dog:{x:7,y:5},sheep:[{id:0,kind:`black`,x:5,y:1},{id:1,kind:`black`,x:7,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:4},{x:7,y:1},{x:6,y:6},{x:3,y:5},{x:4,y:3}]},{id:1083,chapter:5,index:83,seed:5510318,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`..p...`,`..p...`],wolves:[{x:5,y:5}],dog:{x:0,y:3},sheep:[{id:0,kind:`black`,x:1,y:1},{id:1,kind:`white`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:1,y:5},{x:3,y:4},{x:5,y:4},{x:3,y:0},{x:4,y:5}]},{id:1084,chapter:5,index:84,seed:5311656,width:6,height:7,rows:[`...p..`,`...pp.`,`......`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:3}],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:1,y:5},{id:2,kind:`white`,x:3,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:1},{x:1,y:6},{x:0,y:0},{x:3,y:6},{x:0,y:2},{x:4,y:3}]},{id:1085,chapter:1,index:85,seed:1010287,width:6,height:6,rows:[`......`,`......`,`.....#`,`....p.`,`......`,`......`],wolves:[],dog:{x:4,y:5},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:2},{x:4,y:0}]},{id:1086,chapter:1,index:86,seed:1010083,width:6,height:7,rows:[`......`,`......`,`......`,`.....#`,`....p.`,`......`,`......`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:0,y:3},{x:4,y:0}]},{id:1087,chapter:4,index:87,seed:4510861,width:5,height:6,rows:[`.pp..`,`..m..`,`.....`,`.....`,`.....`,`.....`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:1,y:2}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:1,y:3},{x:0,y:1},{x:2,y:2}]},{id:1088,chapter:3,index:88,seed:3510004,width:5,height:5,rows:[`.....`,`...m.`,`p...o`,`.....`,`.....`],wolves:[],dog:{x:2,y:0},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:5,solution:[{x:3,y:3},{x:4,y:1},{x:0,y:0}]},{id:1089,chapter:3,index:89,seed:3011444,width:6,height:6,rows:[`p.....`,`po....`,`......`,`......`,`...#..`,`......`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:4,y:0},{id:1,kind:`white`,x:3,y:1}],minBarks:4,barkLimit:6,solution:[{x:5,y:0},{x:3,y:0},{x:4,y:3},{x:0,y:4}]},{id:1090,chapter:5,index:90,seed:5010072,width:8,height:8,rows:[`........`,`........`,`........`,`.p#.....`,`.p......`,`........`,`........`,`........`],wolves:[{x:0,y:1}],dog:{x:0,y:0},sheep:[{id:0,kind:`black`,x:0,y:3},{id:1,kind:`white`,x:1,y:5}],minBarks:5,barkLimit:6,solution:[{x:0,y:7},{x:4,y:6},{x:3,y:1},{x:0,y:2},{x:1,y:6}]},{id:1091,chapter:5,index:91,seed:5013226,width:7,height:7,rows:[`.......`,`..#.m..`,`...p...`,`...po..`,`.......`,`.......`,`.......`],wolves:[{x:6,y:5}],dog:{x:4,y:6},sheep:[{id:0,kind:`white`,x:5,y:1},{id:1,kind:`black`,x:6,y:3}],minBarks:6,barkLimit:7,solution:[{x:6,y:1},{x:5,y:1},{x:4,y:2},{x:5,y:5},{x:2,y:4},{x:3,y:0}]},{id:1092,chapter:1,index:92,seed:1310072,width:5,height:5,rows:[`....p`,`.....`,`....p`,`.#...`,`.....`],wolves:[],dog:{x:3,y:0},sheep:[{id:0,kind:`white`,x:2,y:0},{id:1,kind:`white`,x:1,y:1}],minBarks:2,barkLimit:5,solution:[{x:1,y:0},{x:0,y:2}]},{id:1093,chapter:2,index:93,seed:2010436,width:6,height:7,rows:[`......`,`.m....`,`..p...`,`.#....`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:6},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:3,barkLimit:6,solution:[{x:5,y:1},{x:1,y:0},{x:0,y:2}]},{id:1094,chapter:3,index:94,seed:3010744,width:6,height:7,rows:[`...o..`,`..m...`,`...p..`,`..#...`,`......`,`......`,`......`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:3,y:1}],minBarks:3,barkLimit:5,solution:[{x:4,y:1},{x:2,y:0},{x:0,y:2}]},{id:1095,chapter:3,index:95,seed:3012532,width:7,height:7,rows:[`.......`,`......p`,`.....op`,`.......`,`......m`,`....m..`,`.......`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:5,y:1},{id:1,kind:`white`,x:4,y:2}],minBarks:4,barkLimit:6,solution:[{x:4,y:1},{x:0,y:5},{x:6,y:6},{x:6,y:5}]},{id:1096,chapter:4,index:96,seed:4010292,width:6,height:6,rows:[`......`,`......`,`..p#..`,`..p...`,`..m...`,`......`],wolves:[],dog:{x:5,y:4},sheep:[{id:0,kind:`black`,x:1,y:2},{id:1,kind:`white`,x:1,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:1,y:0},{x:3,y:1},{x:2,y:5}]},{id:1097,chapter:5,index:97,seed:5013400,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`......`,`..mmp.`,`....p.`],wolves:[{x:3,y:3}],dog:{x:1,y:6},sheep:[{id:0,kind:`black`,x:3,y:0},{id:1,kind:`black`,x:3,y:6}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:1,y:6},{x:3,y:5},{x:5,y:5},{x:5,y:5},{x:5,y:6}]},{id:1098,chapter:5,index:98,seed:5310552,width:6,height:7,rows:[`......`,`......`,`......`,`.m....`,`...p..`,`..pp..`,`......`],wolves:[{x:0,y:5}],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`white`,x:1,y:4},{id:2,kind:`white`,x:4,y:5}],minBarks:6,barkLimit:7,solution:[{x:1,y:0},{x:0,y:4},{x:1,y:0},{x:0,y:4},{x:2,y:0},{x:5,y:5}]},{id:1099,chapter:2,index:99,seed:2011490,width:7,height:7,rows:[`.......`,`......#`,`.......`,`.....m.`,`.......`,`.....p.`,`.......`],wolves:[],dog:{x:3,y:0},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:3,barkLimit:6,solution:[{x:0,y:1},{x:5,y:0},{x:5,y:0}]},{id:1100,chapter:1,index:100,seed:1010282,width:5,height:5,rows:[`.....`,`.....`,`..p..`,`.#...`,`.....`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:2,barkLimit:5,solution:[{x:4,y:3},{x:2,y:4}]},{id:1101,chapter:3,index:101,seed:3010362,width:6,height:6,rows:[`......`,`......`,`.p.o..`,`......`,`.m....`,`....#.`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:4,y:2}],minBarks:3,barkLimit:5,solution:[{x:4,y:0},{x:5,y:4},{x:1,y:5}]},{id:1102,chapter:4,index:102,seed:4510074,width:5,height:5,rows:[`.....`,`.....`,`..p#.`,`..p..`,`.....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`black`,x:4,y:3}],minBarks:4,barkLimit:6,solution:[{x:4,y:0},{x:0,y:3},{x:1,y:1},{x:2,y:4}]},{id:1103,chapter:4,index:103,seed:4010419,width:6,height:6,rows:[`......`,`......`,`..pp..`,`..p...`,`......`,`...#..`],wolves:[],dog:{x:2,y:4},sheep:[{id:0,kind:`black`,x:2,y:0},{id:1,kind:`black`,x:1,y:3},{id:2,kind:`white`,x:3,y:4}],minBarks:5,barkLimit:7,solution:[{x:1,y:5},{x:4,y:4},{x:2,y:5},{x:4,y:4},{x:3,y:0}]},{id:1104,chapter:5,index:104,seed:5510628,width:6,height:6,rows:[`......`,`....pp`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:5}],dog:{x:4,y:2},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:5,y:0},{x:4,y:2},{x:4,y:5},{x:0,y:2},{x:5,y:3}]},{id:1105,chapter:5,index:105,seed:5011498,width:6,height:7,rows:[`......`,`......`,`.pp...`,`......`,`......`,`m.....`,`......`],wolves:[{x:0,y:1},{x:2,y:5}],dog:{x:3,y:6},sheep:[{id:0,kind:`black`,x:0,y:4},{id:1,kind:`black`,x:0,y:6}],minBarks:6,barkLimit:7,solution:[{x:0,y:2},{x:0,y:2},{x:3,y:3},{x:2,y:0},{x:2,y:4},{x:1,y:0}]},{id:1106,chapter:1,index:106,seed:1310045,width:5,height:5,rows:[`.....`,`..#..`,`....p`,`.....`,`....p`],wolves:[],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:3,y:4}],minBarks:2,barkLimit:5,solution:[{x:2,y:4},{x:0,y:2}]},{id:1107,chapter:1,index:107,seed:1010105,width:5,height:5,rows:[`...#.`,`..p..`,`.....`,`.....`,`.....`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:2,barkLimit:5,solution:[{x:3,y:3},{x:4,y:1}]},{id:1108,chapter:3,index:108,seed:3010133,width:6,height:7,rows:[`p.....`,`o.....`,`......`,`......`,`...m..`,`......`,`......`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:3,y:5}],minBarks:3,barkLimit:5,solution:[{x:3,y:6},{x:3,y:5},{x:4,y:0}]},{id:1109,chapter:3,index:109,seed:3010374,width:6,height:7,rows:[`......`,`p.o...`,`......`,`m.....`,`...m..`,`......`,`......`],wolves:[],dog:{x:4,y:6},sheep:[{id:0,kind:`white`,x:3,y:1}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:4,y:4},{x:0,y:5},{x:0,y:4}]},{id:1110,chapter:3,index:110,seed:3010934,width:6,height:6,rows:[`.#....`,`...#..`,`......`,`......`,`o.p...`,`..p...`],wolves:[],dog:{x:3,y:2},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`white`,x:4,y:5}],minBarks:4,barkLimit:6,solution:[{x:5,y:5},{x:1,y:5},{x:0,y:1},{x:2,y:0}]},{id:1111,chapter:5,index:111,seed:5512046,width:5,height:6,rows:[`.....`,`pp...`,`.....`,`.....`,`.....`,`.....`],wolves:[{x:0,y:5}],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`white`,x:2,y:4}],minBarks:5,barkLimit:6,solution:[{x:1,y:5},{x:3,y:4},{x:1,y:5},{x:2,y:2},{x:0,y:3}]},{id:1112,chapter:5,index:112,seed:5013827,width:7,height:7,rows:[`.mm.p..`,`....p..`,`.......`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:6,y:2},{x:3,y:3}],dog:{x:2,y:1},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`black`,x:5,y:6}],minBarks:6,barkLimit:7,solution:[{x:2,y:0},{x:3,y:0},{x:6,y:0},{x:0,y:6},{x:1,y:0},{x:5,y:1}]},{id:1113,chapter:1,index:113,seed:1010213,width:5,height:6,rows:[`.....`,`..#..`,`...p.`,`.....`,`.....`,`.....`],wolves:[],dog:{x:3,y:1},sheep:[{id:0,kind:`white`,x:2,y:4}],minBarks:2,barkLimit:5,solution:[{x:2,y:5},{x:0,y:2}]},{id:1114,chapter:2,index:114,seed:2011938,width:7,height:7,rows:[`.......`,`.......`,`.m.....`,`.......`,`..#....`,`p......`,`.......`],wolves:[],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:3,barkLimit:6,solution:[{x:1,y:5},{x:2,y:2},{x:0,y:0}]},{id:1115,chapter:3,index:115,seed:3510008,width:5,height:5,rows:[`.....`,`#....`,`..o..`,`..p..`,`.#...`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:3,barkLimit:5,solution:[{x:3,y:1},{x:1,y:0},{x:0,y:3}]},{id:1116,chapter:4,index:116,seed:4011788,width:6,height:7,rows:[`......`,`......`,`......`,`...o..`,`..pp..`,`......`,`......`],wolves:[],dog:{x:4,y:0},sheep:[{id:0,kind:`black`,x:2,y:0},{id:1,kind:`white`,x:2,y:5}],minBarks:4,barkLimit:6,solution:[{x:5,y:0},{x:2,y:6},{x:4,y:5},{x:0,y:4}]},{id:1117,chapter:5,index:117,seed:5510533,width:5,height:6,rows:[`.....`,`.....`,`.....`,`pp...`,`.....`,`.....`],wolves:[{x:1,y:0}],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`black`,x:1,y:5}],minBarks:5,barkLimit:6,solution:[{x:4,y:5},{x:3,y:0},{x:4,y:4},{x:0,y:5},{x:1,y:1}]},{id:1118,chapter:5,index:118,seed:5012143,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`.....p.`,`...m.pp`,`.....p.`],wolves:[{x:2,y:3}],dog:{x:2,y:0},sheep:[{id:0,kind:`black`,x:0,y:4},{id:1,kind:`white`,x:1,y:5},{id:2,kind:`white`,x:3,y:6},{id:3,kind:`black`,x:6,y:6}],minBarks:6,barkLimit:7,solution:[{x:0,y:5},{x:0,y:5},{x:0,y:6},{x:4,y:5},{x:3,y:0},{x:6,y:4}]},{id:1119,chapter:5,index:119,seed:5511401,width:6,height:6,rows:[`..p...`,`..p...`,`......`,`......`,`......`,`......`],wolves:[{x:3,y:2}],dog:{x:5,y:3},sheep:[{id:0,kind:`white`,x:1,y:0},{id:1,kind:`black`,x:5,y:0}],minBarks:5,barkLimit:6,solution:[{x:5,y:5},{x:0,y:0},{x:0,y:4},{x:1,y:0},{x:3,y:1}]},{id:1120,chapter:2,index:120,seed:2010316,width:6,height:6,rows:[`..#...`,`...m..`,`......`,`......`,`..pm..`,`......`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:3,barkLimit:6,solution:[{x:0,y:1},{x:3,y:0},{x:4,y:4}]},{id:1121,chapter:2,index:121,seed:2010490,width:7,height:7,rows:[`.......`,`.....#.`,`..p.m..`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:3,y:1}],minBarks:3,barkLimit:6,solution:[{x:0,y:1},{x:4,y:0},{x:5,y:2}]},{id:1122,chapter:3,index:122,seed:3010031,width:7,height:7,rows:[`.o.....`,`.....#.`,`.......`,`.......`,`.p.....`,`....#..`,`.......`],wolves:[],dog:{x:6,y:6},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:4,y:0},{x:5,y:4}]},{id:1123,chapter:3,index:123,seed:3012599,width:7,height:8,rows:[`.......`,`.......`,`.......`,`.......`,`.....m.`,`....o..`,`....m..`,`....pp.`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:4,y:4},{id:1,kind:`white`,x:5,y:5}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:5,y:0},{x:6,y:6},{x:4,y:0}]},{id:1124,chapter:4,index:124,seed:4510761,width:5,height:5,rows:[`..pp.`,`.m...`,`.m...`,`.....`,`.....`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:1,y:3}],minBarks:4,barkLimit:6,solution:[{x:1,y:4},{x:1,y:3},{x:1,y:2},{x:0,y:0}]},{id:1125,chapter:5,index:125,seed:5011130,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`......`,`..p...`,`..p...`],wolves:[{x:5,y:6}],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:4,y:3},{id:1,kind:`black`,x:1,y:5}],minBarks:5,barkLimit:6,solution:[{x:4,y:0},{x:3,y:5},{x:5,y:5},{x:3,y:0},{x:4,y:6}]},{id:1126,chapter:5,index:126,seed:5310084,width:7,height:7,rows:[`.......`,`.......`,`.......`,`..m....`,`..o....`,`.pp....`,`..p....`],wolves:[{x:4,y:2}],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`black`,x:0,y:5},{id:2,kind:`white`,x:3,y:6}],minBarks:6,barkLimit:7,solution:[{x:0,y:3},{x:0,y:3},{x:3,y:0},{x:4,y:6},{x:0,y:6},{x:4,y:5}]},{id:1127,chapter:2,index:127,seed:2010042,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`.mp...`,`#.....`,`......`],wolves:[],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:4,y:5}],minBarks:3,barkLimit:6,solution:[{x:5,y:5},{x:1,y:6},{x:0,y:4}]},{id:1128,chapter:2,index:128,seed:2011076,width:6,height:7,rows:[`......`,`......`,`......`,`.pm...`,`....#.`,`......`,`......`],wolves:[],dog:{x:1,y:2},sheep:[{id:0,kind:`white`,x:4,y:2}],minBarks:3,barkLimit:6,solution:[{x:4,y:0},{x:5,y:3},{x:3,y:3}]},{id:1129,chapter:3,index:129,seed:3010037,width:6,height:6,rows:[`......`,`......`,`...#..`,`.....p`,`...m..`,`.....o`],wolves:[],dog:{x:1,y:3},sheep:[{id:0,kind:`white`,x:4,y:4}],minBarks:3,barkLimit:5,solution:[{x:5,y:4},{x:3,y:5},{x:0,y:3}]},{id:1130,chapter:4,index:130,seed:4511013,width:5,height:6,rows:[`.pp..`,`.m...`,`.....`,`.....`,`.....`,`.....`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:2,y:2}],minBarks:4,barkLimit:6,solution:[{x:0,y:0},{x:2,y:3},{x:3,y:1},{x:1,y:2}]},{id:1131,chapter:3,index:131,seed:3010097,width:7,height:8,rows:[`.....p.`,`.......`,`.......`,`.m.....`,`.....o.`,`.m.....`,`.......`,`.......`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:5,y:5}],minBarks:4,barkLimit:6,solution:[{x:6,y:5},{x:1,y:6},{x:1,y:4},{x:0,y:0}]},{id:1132,chapter:5,index:132,seed:5511498,width:6,height:6,rows:[`...p..`,`...p..`,`......`,`......`,`......`,`......`],wolves:[{x:1,y:0}],dog:{x:0,y:0},sheep:[{id:0,kind:`black`,x:5,y:0},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:5,y:5},{x:0,y:4},{x:4,y:5},{x:5,y:0},{x:0,y:1}]},{id:1133,chapter:5,index:133,seed:5013743,width:7,height:7,rows:[`...p...`,`..mp...`,`.......`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:3,y:4}],dog:{x:4,y:6},sheep:[{id:0,kind:`black`,x:0,y:1},{id:1,kind:`white`,x:2,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:6},{x:3,y:5},{x:1,y:6},{x:0,y:0},{x:4,y:1},{x:4,y:1}]},{id:1134,chapter:1,index:134,seed:1310031,width:5,height:5,rows:[`..p.p`,`.....`,`.....`,`.#...`,`.....`],wolves:[],dog:{x:2,y:2},sheep:[{id:0,kind:`white`,x:4,y:2},{id:1,kind:`white`,x:3,y:3}],minBarks:2,barkLimit:5,solution:[{x:4,y:3},{x:2,y:4}]},{id:1135,chapter:2,index:135,seed:2011472,width:6,height:7,rows:[`..#...`,`...p..`,`......`,`......`,`..m...`,`......`,`......`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:3,barkLimit:6,solution:[{x:0,y:4},{x:2,y:5},{x:0,y:1}]},{id:1136,chapter:3,index:136,seed:3010586,width:6,height:7,rows:[`......`,`......`,`......`,`....op`,`......`,`...#..`,`......`],wolves:[],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:5,solution:[{x:3,y:0},{x:0,y:4},{x:5,y:5}]},{id:1137,chapter:3,index:137,seed:3510007,width:5,height:5,rows:[`.....`,`...#.`,`.#...`,`..p.o`,`.....`],wolves:[],dog:{x:2,y:2},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:5,solution:[{x:3,y:4},{x:4,y:2},{x:2,y:0}]},{id:1138,chapter:4,index:138,seed:4010324,width:7,height:7,rows:[`.......`,`.......`,`....p..`,`....p.o`,`.......`,`.......`,`.......`],wolves:[],dog:{x:4,y:0},sheep:[{id:0,kind:`black`,x:4,y:1},{id:1,kind:`white`,x:5,y:3}],minBarks:5,barkLimit:7,solution:[{x:6,y:1},{x:5,y:4},{x:6,y:2},{x:5,y:4},{x:0,y:3}]},{id:1139,chapter:5,index:139,seed:5013460,width:8,height:8,rows:[`........`,`........`,`........`,`....pp..`,`........`,`........`,`........`,`........`],wolves:[{x:6,y:4}],dog:{x:7,y:4},sheep:[{id:0,kind:`black`,x:3,y:3},{id:1,kind:`white`,x:6,y:6}],minBarks:6,barkLimit:7,solution:[{x:3,y:7},{x:7,y:6},{x:3,y:0},{x:6,y:1},{x:5,y:4},{x:4,y:7}]},{id:1140,chapter:5,index:140,seed:5013914,width:6,height:7,rows:[`......`,`......`,`#...m.`,`.pp#..`,`......`,`......`,`......`],wolves:[{x:5,y:4}],dog:{x:5,y:0},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:4,y:3}],minBarks:6,barkLimit:7,solution:[{x:4,y:0},{x:5,y:2},{x:4,y:4},{x:5,y:2},{x:1,y:0},{x:2,y:0}]},{id:1141,chapter:1,index:141,seed:1310036,width:6,height:6,rows:[`.#....`,`...p..`,`......`,`...p..`,`......`,`......`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:1,y:3},{x:0,y:1}]},{id:1142,chapter:2,index:142,seed:2011736,width:6,height:6,rows:[`......`,`......`,`......`,`..m...`,`.#p...`,`......`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:3,barkLimit:6,solution:[{x:1,y:0},{x:0,y:3},{x:2,y:0}]},{id:1143,chapter:3,index:143,seed:3010258,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`o...p..`,`....m..`,`.#.....`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:3,barkLimit:5,solution:[{x:1,y:0},{x:0,y:5},{x:4,y:6}]},{id:1144,chapter:3,index:144,seed:3010100,width:7,height:7,rows:[`.......`,`...#...`,`.......`,`.......`,`....mo.`,`....m..`,`....p..`],wolves:[],dog:{x:6,y:5},sheep:[{id:0,kind:`white`,x:5,y:1}],minBarks:4,barkLimit:6,solution:[{x:6,y:1},{x:4,y:0},{x:4,y:0},{x:4,y:0}]},{id:1145,chapter:4,index:145,seed:4510302,width:5,height:6,rows:[`.....`,`.....`,`...#.`,`.....`,`...pp`,`.....`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`black`,x:4,y:1},{id:1,kind:`white`,x:4,y:3}],minBarks:4,barkLimit:6,solution:[{x:4,y:0},{x:4,y:5},{x:2,y:3},{x:3,y:5}]},{id:1146,chapter:5,index:146,seed:5512344,width:6,height:6,rows:[`.p....`,`.p....`,`......`,`......`,`......`,`......`],wolves:[{x:4,y:0}],dog:{x:3,y:0},sheep:[{id:0,kind:`black`,x:2,y:1},{id:1,kind:`white`,x:3,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:1},{x:3,y:5},{x:4,y:1},{x:2,y:2},{x:3,y:0}]},{id:1147,chapter:5,index:147,seed:5011648,width:8,height:8,rows:[`........`,`........`,`........`,`........`,`.mop....`,`...p....`,`........`,`........`],wolves:[{x:3,y:2}],dog:{x:1,y:5},sheep:[{id:0,kind:`black`,x:1,y:1},{id:1,kind:`white`,x:3,y:6}],minBarks:6,barkLimit:7,solution:[{x:1,y:5},{x:1,y:7},{x:3,y:7},{x:5,y:6},{x:4,y:3},{x:0,y:4}]},{id:1148,chapter:1,index:148,seed:1010285,width:6,height:6,rows:[`......`,`......`,`......`,`#.....`,`.p....`,`......`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:4,y:3}],minBarks:2,barkLimit:5,solution:[{x:5,y:3},{x:1,y:0}]},{id:1149,chapter:2,index:149,seed:2012099,width:7,height:7,rows:[`.......`,`...m...`,`..p....`,`...#...`,`.......`,`.......`,`.......`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:5,y:1}],minBarks:3,barkLimit:6,solution:[{x:6,y:1},{x:3,y:0},{x:4,y:2}]},{id:1150,chapter:3,index:150,seed:3010019,width:7,height:7,rows:[`.....p.`,`.......`,`.......`,`.......`,`.......`,`..m....`,`.o.....`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:5,solution:[{x:0,y:5},{x:2,y:6},{x:0,y:0}]},{id:1151,chapter:3,index:151,seed:3510005,width:5,height:5,rows:[`p....`,`o..m.`,`.....`,`.....`,`.....`],wolves:[],dog:{x:1,y:2},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:5,solution:[{x:3,y:3},{x:3,y:2},{x:4,y:0}]},{id:1152,chapter:3,index:152,seed:3010393,width:7,height:8,rows:[`.......`,`...#...`,`.p.....`,`.o.....`,`..mm...`,`.......`,`.......`,`.......`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:0,y:4},{x:3,y:5},{x:4,y:2}]},{id:1153,chapter:5,index:153,seed:5013201,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`.......`,`......p`,`......p`],wolves:[{x:0,y:6}],dog:{x:2,y:0},sheep:[{id:0,kind:`white`,x:6,y:3},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:1,y:0},{x:6,y:0},{x:0,y:5},{x:5,y:0},{x:1,y:6}]},{id:1154,chapter:5,index:154,seed:5013875,width:8,height:8,rows:[`........`,`..p.....`,`..p.....`,`........`,`........`,`........`,`........`,`........`],wolves:[{x:4,y:0},{x:6,y:3}],dog:{x:1,y:6},sheep:[{id:0,kind:`black`,x:6,y:0},{id:1,kind:`black`,x:2,y:6}],minBarks:6,barkLimit:7,solution:[{x:6,y:2},{x:0,y:6},{x:1,y:0},{x:3,y:1},{x:5,y:3},{x:0,y:2}]},{id:1155,chapter:1,index:155,seed:1010254,width:5,height:5,rows:[`.....`,`...#.`,`.p...`,`.....`,`.....`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:2,barkLimit:5,solution:[{x:3,y:4},{x:4,y:2}]},{id:1156,chapter:2,index:156,seed:2011926,width:7,height:7,rows:[`.....#.`,`.#.....`,`..m..p.`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:6,y:0},sheep:[{id:0,kind:`white`,x:5,y:1}],minBarks:3,barkLimit:6,solution:[{x:6,y:1},{x:2,y:0},{x:0,y:2}]},{id:1157,chapter:3,index:157,seed:3510010,width:5,height:5,rows:[`..p..`,`..o..`,`....#`,`.....`,`.....`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:2,y:2}],minBarks:3,barkLimit:5,solution:[{x:0,y:2},{x:3,y:3},{x:4,y:0}]},{id:1158,chapter:3,index:158,seed:3010004,width:7,height:7,rows:[`.......`,`.......`,`.......`,`p..m.m.`,`....o..`,`.......`,`.......`],wolves:[],dog:{x:3,y:0},sheep:[{id:0,kind:`white`,x:5,y:4}],minBarks:3,barkLimit:5,solution:[{x:5,y:5},{x:6,y:3},{x:4,y:3}]},{id:1159,chapter:5,index:159,seed:5511342,width:6,height:6,rows:[`...p..`,`...p..`,`......`,`......`,`......`,`......`],wolves:[{x:0,y:0}],dog:{x:1,y:4},sheep:[{id:0,kind:`black`,x:2,y:1},{id:1,kind:`white`,x:1,y:2}],minBarks:5,barkLimit:6,solution:[{x:4,y:1},{x:1,y:3},{x:0,y:1},{x:2,y:2},{x:1,y:0}]},{id:1160,chapter:5,index:160,seed:5511602,width:5,height:6,rows:[`.....`,`.....`,`.....`,`...m.`,`p....`,`p....`],wolves:[{x:1,y:2}],dog:{x:1,y:1},sheep:[{id:0,kind:`white`,x:3,y:2},{id:1,kind:`white`,x:2,y:5}],minBarks:5,barkLimit:6,solution:[{x:3,y:0},{x:4,y:3},{x:2,y:0},{x:3,y:4},{x:3,y:5}]},{id:1161,chapter:5,index:161,seed:5012650,width:8,height:8,rows:[`........`,`........`,`.....pp.`,`........`,`........`,`........`,`........`,`........`],wolves:[{x:4,y:0},{x:0,y:3}],dog:{x:7,y:7},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`black`,x:0,y:1}],minBarks:6,barkLimit:7,solution:[{x:3,y:0},{x:3,y:1},{x:2,y:4},{x:7,y:2},{x:7,y:3},{x:6,y:0}]},{id:1162,chapter:1,index:162,seed:131e4,width:5,height:6,rows:[`....p`,`.....`,`....p`,`.#...`,`.....`,`.....`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:3,y:0},{id:1,kind:`white`,x:1,y:1}],minBarks:2,barkLimit:5,solution:[{x:1,y:0},{x:0,y:2}]},{id:1163,chapter:1,index:163,seed:1310021,width:5,height:5,rows:[`.....`,`...#.`,`p....`,`.....`,`p....`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`white`,x:3,y:3},{id:1,kind:`white`,x:1,y:4}],minBarks:2,barkLimit:5,solution:[{x:3,y:4},{x:4,y:2}]},{id:1164,chapter:4,index:164,seed:4510084,width:5,height:6,rows:[`.....`,`.....`,`.....`,`.....`,`.#.p.`,`...p.`],wolves:[],dog:{x:4,y:5},sheep:[{id:0,kind:`black`,x:0,y:5},{id:1,kind:`white`,x:2,y:5}],minBarks:4,barkLimit:6,solution:[{x:1,y:5},{x:4,y:5},{x:2,y:3},{x:4,y:4}]},{id:1165,chapter:3,index:165,seed:3012737,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`.......`,`....p..`,`..o.p..`],wolves:[],dog:{x:6,y:6},sheep:[{id:0,kind:`white`,x:4,y:4},{id:1,kind:`white`,x:2,y:5}],minBarks:4,barkLimit:6,solution:[{x:4,y:0},{x:0,y:5},{x:3,y:0},{x:0,y:6}]},{id:1166,chapter:4,index:166,seed:4511121,width:5,height:5,rows:[`..pp.`,`...m.`,`.....`,`.....`,`.....`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:2,y:2}],minBarks:4,barkLimit:6,solution:[{x:4,y:0},{x:2,y:3},{x:0,y:1},{x:3,y:2}]},{id:1167,chapter:5,index:167,seed:5014907,width:6,height:7,rows:[`......`,`...m..`,`......`,`..p...`,`..p...`,`......`,`......`],wolves:[{x:4,y:4}],dog:{x:5,y:5},sheep:[{id:0,kind:`black`,x:4,y:1},{id:1,kind:`white`,x:1,y:3}],minBarks:5,barkLimit:6,solution:[{x:0,y:1},{x:0,y:1},{x:0,y:3},{x:1,y:5},{x:3,y:4}]},{id:1168,chapter:5,index:168,seed:5012537,width:7,height:7,rows:[`.......`,`....m..`,`...pp..`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:2,y:3}],dog:{x:4,y:5},sheep:[{id:0,kind:`white`,x:5,y:2},{id:1,kind:`black`,x:4,y:6}],minBarks:6,barkLimit:7,solution:[{x:6,y:2},{x:6,y:6},{x:5,y:0},{x:0,y:1},{x:2,y:1},{x:3,y:3}]},{id:1169,chapter:2,index:169,seed:2011447,width:7,height:7,rows:[`.......`,`.......`,`.m.m...`,`.......`,`.......`,`.p..#..`,`.......`],wolves:[],dog:{x:6,y:2},sheep:[{id:0,kind:`white`,x:3,y:5}],minBarks:3,barkLimit:6,solution:[{x:3,y:6},{x:4,y:2},{x:1,y:0}]},{id:1170,chapter:2,index:170,seed:2011437,width:6,height:7,rows:[`......`,`......`,`..#.m.`,`......`,`......`,`...p.#`,`......`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:4,y:5}],minBarks:3,barkLimit:6,solution:[{x:4,y:6},{x:5,y:2},{x:3,y:0}]},{id:1171,chapter:4,index:171,seed:4510760,width:5,height:5,rows:[`.....`,`.....`,`.....`,`..pp.`,`..o..`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`black`,x:2,y:2},{id:1,kind:`white`,x:3,y:2}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:0,y:2},{x:1,y:4},{x:4,y:3}]},{id:1172,chapter:3,index:172,seed:3010292,width:6,height:6,rows:[`......`,`...#..`,`.m....`,`......`,`.po...`,`.p....`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:3,y:4},{id:1,kind:`white`,x:4,y:5}],minBarks:4,barkLimit:6,solution:[{x:5,y:5},{x:3,y:5},{x:4,y:2},{x:1,y:0}]},{id:1173,chapter:4,index:173,seed:4011481,width:6,height:6,rows:[`......`,`......`,`......`,`..pm..`,`.ppm..`,`......`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`white`,x:3,y:2},{id:2,kind:`black`,x:0,y:4}],minBarks:5,barkLimit:7,solution:[{x:3,y:0},{x:3,y:0},{x:4,y:4},{x:1,y:0},{x:0,y:3}]},{id:1174,chapter:5,index:174,seed:5010576,width:6,height:7,rows:[`......`,`......`,`......`,`..m.p.`,`...op.`,`......`,`......`],wolves:[{x:0,y:6}],dog:{x:4,y:0},sheep:[{id:0,kind:`black`,x:0,y:1},{id:1,kind:`white`,x:2,y:4}],minBarks:6,barkLimit:7,solution:[{x:2,y:5},{x:0,y:3},{x:2,y:2},{x:1,y:6},{x:5,y:5},{x:4,y:0}]},{id:1175,chapter:5,index:175,seed:5013371,width:8,height:8,rows:[`........`,`........`,`........`,`........`,`........`,`........`,`........`,`ppp.....`],wolves:[{x:4,y:4}],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:0,y:2},{id:1,kind:`white`,x:3,y:2},{id:2,kind:`white`,x:1,y:5}],minBarks:6,barkLimit:7,solution:[{x:4,y:2},{x:0,y:0},{x:0,y:5},{x:1,y:0},{x:3,y:0},{x:4,y:7}]},{id:1176,chapter:2,index:176,seed:2011021,width:6,height:6,rows:[`......`,`......`,`..#.m.`,`......`,`...p..`,`......`],wolves:[],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:4,y:3}],minBarks:3,barkLimit:6,solution:[{x:4,y:4},{x:5,y:2},{x:3,y:0}]},{id:1177,chapter:2,index:177,seed:2011540,width:6,height:6,rows:[`......`,`.p....`,`......`,`#.m...`,`......`,`......`],wolves:[],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:4,y:3}],minBarks:3,barkLimit:6,solution:[{x:5,y:3},{x:3,y:3},{x:1,y:4}]},{id:1178,chapter:4,index:178,seed:4510241,width:5,height:6,rows:[`.....`,`.....`,`...p.`,`...p.`,`.....`,`.....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`black`,x:2,y:4}],minBarks:4,barkLimit:6,solution:[{x:2,y:0},{x:0,y:3},{x:2,y:1},{x:4,y:2}]},{id:1179,chapter:3,index:179,seed:3011505,width:6,height:7,rows:[`....o.`,`.m....`,`....pp`,`.#....`,`......`,`......`,`......`],wolves:[],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:5,y:3}],minBarks:4,barkLimit:6,solution:[{x:5,y:4},{x:5,y:1},{x:1,y:0},{x:0,y:2}]},{id:1180,chapter:3,index:180,seed:3010327,width:6,height:7,rows:[`......`,`......`,`....op`,`.....m`,`......`,`...#..`,`......`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:0,y:4},{x:5,y:5},{x:5,y:4}]},{id:1181,chapter:5,index:181,seed:5511439,width:6,height:6,rows:[`.p....`,`.p....`,`......`,`......`,`......`,`......`],wolves:[{x:4,y:0}],dog:{x:0,y:2},sheep:[{id:0,kind:`black`,x:0,y:1},{id:1,kind:`white`,x:3,y:2}],minBarks:5,barkLimit:6,solution:[{x:2,y:1},{x:3,y:3},{x:4,y:1},{x:2,y:2},{x:3,y:0}]},{id:1182,chapter:5,index:182,seed:5511420,width:5,height:6,rows:[`.....`,`pp...`,`.....`,`..m..`,`.....`,`.....`],wolves:[{x:3,y:1}],dog:{x:3,y:2},sheep:[{id:0,kind:`white`,x:0,y:2},{id:1,kind:`white`,x:3,y:3}],minBarks:5,barkLimit:6,solution:[{x:4,y:3},{x:2,y:4},{x:3,y:2},{x:0,y:3},{x:1,y:3}]},{id:1183,chapter:1,index:183,seed:1310035,width:5,height:5,rows:[`p.p..`,`.....`,`...#.`,`.....`,`.....`],wolves:[],dog:{x:1,y:3},sheep:[{id:0,kind:`white`,x:0,y:1},{id:1,kind:`white`,x:1,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:2},{x:2,y:3}]},{id:1184,chapter:2,index:184,seed:2010544,width:6,height:6,rows:[`......`,`...m..`,`.#.m..`,`......`,`......`,`...p..`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:3,barkLimit:6,solution:[{x:0,y:1},{x:3,y:0},{x:3,y:0}]},{id:1185,chapter:3,index:185,seed:3010410,width:7,height:8,rows:[`.......`,`.......`,`.mm....`,`o.p....`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:3,barkLimit:5,solution:[{x:1,y:4},{x:0,y:2},{x:2,y:0}]},{id:1186,chapter:4,index:186,seed:4510137,width:5,height:5,rows:[`.pp..`,`..m..`,`.....`,`.....`,`.....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:1,y:2}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:1,y:3},{x:0,y:1},{x:2,y:2}]},{id:1187,chapter:5,index:187,seed:5512051,width:6,height:6,rows:[`......`,`......`,`...p..`,`...p..`,`......`,`......`],wolves:[{x:5,y:2},{x:1,y:5}],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`black`,x:5,y:5}],minBarks:5,barkLimit:6,solution:[{x:0,y:3},{x:5,y:3},{x:0,y:4},{x:2,y:1},{x:4,y:2}]},{id:1188,chapter:5,index:188,seed:5014450,width:6,height:7,rows:[`......`,`......`,`..m...`,`...#..`,`p.....`,`p..m..`,`..#...`],wolves:[{x:0,y:2}],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:4,y:5}],minBarks:5,barkLimit:6,solution:[{x:2,y:0},{x:2,y:0},{x:5,y:5},{x:3,y:6},{x:4,y:4}]},{id:1189,chapter:5,index:189,seed:5010210,width:7,height:8,rows:[`.......`,`..pp...`,`.......`,`.......`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:4,y:0},{x:6,y:3}],dog:{x:2,y:5},sheep:[{id:0,kind:`black`,x:6,y:0},{id:1,kind:`black`,x:0,y:6}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:6,y:2},{x:4,y:1},{x:5,y:3},{x:2,y:2},{x:3,y:0}]},{id:1190,chapter:1,index:190,seed:1010309,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`......`,`..p...`,`...#..`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:2,barkLimit:5,solution:[{x:3,y:0},{x:4,y:5}]},{id:1191,chapter:2,index:191,seed:2010442,width:6,height:6,rows:[`.#.p..`,`......`,`..mm..`,`......`,`......`,`......`],wolves:[],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:3,barkLimit:6,solution:[{x:2,y:0},{x:0,y:2},{x:3,y:3}]},{id:1192,chapter:3,index:192,seed:3311769,width:6,height:6,rows:[`......`,`#.....`,`..o...`,`......`,`..pp..`,`.#....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:5,solution:[{x:3,y:1},{x:1,y:0},{x:0,y:4}]},{id:1193,chapter:3,index:193,seed:3010360,width:6,height:6,rows:[`...#..`,`....m.`,`......`,`....op`,`......`,`......`],wolves:[],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:4,barkLimit:6,solution:[{x:3,y:4},{x:0,y:1},{x:0,y:1},{x:5,y:0}]},{id:1194,chapter:4,index:194,seed:4010015,width:7,height:7,rows:[`.......`,`.......`,`.......`,`..#....`,`.......`,`.pp....`,`.......`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:2,y:4},{id:1,kind:`black`,x:0,y:6}],minBarks:5,barkLimit:7,solution:[{x:0,y:3},{x:3,y:4},{x:1,y:0},{x:3,y:4},{x:2,y:6}]},{id:1195,chapter:5,index:195,seed:5014491,width:6,height:7,rows:[`......`,`.o....`,`......`,`..p...`,`..p...`,`......`,`......`],wolves:[{x:3,y:5}],dog:{x:0,y:3},sheep:[{id:0,kind:`black`,x:3,y:1},{id:1,kind:`white`,x:3,y:3}],minBarks:5,barkLimit:6,solution:[{x:5,y:1},{x:4,y:3},{x:0,y:2},{x:1,y:5},{x:3,y:4}]},{id:1196,chapter:5,index:196,seed:5511897,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`..p...`,`..p...`],wolves:[{x:0,y:5},{x:5,y:5}],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`white`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:1,y:0},{x:0,y:4},{x:5,y:4},{x:3,y:0},{x:4,y:5}]},{id:1197,chapter:1,index:197,seed:1310083,width:5,height:6,rows:[`.p.p.`,`.....`,`....#`,`.....`,`.....`,`.....`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:2,y:2}],minBarks:2,barkLimit:5,solution:[{x:1,y:2},{x:3,y:3}]},{id:1198,chapter:2,index:198,seed:2010816,width:6,height:7,rows:[`......`,`....mp`,`......`,`.....#`,`......`,`......`,`......`],wolves:[],dog:{x:5,y:6},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:6,solution:[{x:0,y:3},{x:4,y:4},{x:0,y:1}]},{id:1199,chapter:3,index:199,seed:3010578,width:7,height:8,rows:[`.......`,`.......`,`.......`,`p.m.m..`,`.......`,`o......`,`.......`,`.......`],wolves:[],dog:{x:5,y:7},sheep:[{id:0,kind:`white`,x:4,y:6}],minBarks:3,barkLimit:5,solution:[{x:4,y:7},{x:5,y:3},{x:3,y:3}]},{id:1200,chapter:4,index:200,seed:4011393,width:7,height:7,rows:[`.......`,`.......`,`.......`,`....pp.`,`.......`,`.......`,`.......`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:3,y:4},{id:1,kind:`black`,x:6,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:5,y:5},{x:3,y:4},{x:4,y:0}]},{id:1201,chapter:4,index:201,seed:4510386,width:5,height:5,rows:[`.....`,`.#...`,`.....`,`.pp#.`,`.....`],wolves:[],dog:{x:1,y:2},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:2,y:1}],minBarks:4,barkLimit:6,solution:[{x:0,y:3},{x:2,y:0},{x:2,y:2},{x:1,y:4}]},{id:1202,chapter:5,index:202,seed:5512032,width:5,height:6,rows:[`.....`,`pp...`,`.....`,`.....`,`.....`,`.....`],wolves:[{x:0,y:5}],dog:{x:2,y:1},sheep:[{id:0,kind:`black`,x:3,y:0},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:0},{x:1,y:2},{x:1,y:5},{x:2,y:2},{x:0,y:3}]},{id:1203,chapter:5,index:203,seed:5012435,width:8,height:8,rows:[`........`,`#.......`,`........`,`.m......`,`.pp.....`,`........`,`........`,`........`],wolves:[{x:3,y:3}],dog:{x:7,y:0},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`black`,x:4,y:4}],minBarks:6,barkLimit:7,solution:[{x:3,y:1},{x:1,y:0},{x:1,y:0},{x:4,y:6},{x:1,y:5},{x:2,y:0}]},{id:1204,chapter:1,index:204,seed:1010012,width:5,height:6,rows:[`.....`,`...p.`,`.....`,`.....`,`....#`,`.....`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:2,barkLimit:5,solution:[{x:0,y:4},{x:3,y:5}]},{id:1205,chapter:2,index:205,seed:2010659,width:6,height:6,rows:[`......`,`#.m...`,`.p....`,`......`,`......`,`......`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:3,y:1}],minBarks:3,barkLimit:6,solution:[{x:4,y:1},{x:3,y:1},{x:1,y:0}]},{id:1206,chapter:3,index:206,seed:3311285,width:7,height:8,rows:[`.......`,`.......`,`.......`,`....mm.`,`.......`,`.......`,`....p.o`,`....p..`],wolves:[],dog:{x:3,y:1},sheep:[{id:0,kind:`white`,x:5,y:6},{id:1,kind:`white`,x:2,y:7}],minBarks:4,barkLimit:6,solution:[{x:0,y:7},{x:5,y:7},{x:6,y:3},{x:4,y:0}]},{id:1207,chapter:4,index:207,seed:4510575,width:5,height:6,rows:[`.pp..`,`..m..`,`.....`,`.....`,`.....`,`.....`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:1,y:3}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:1,y:4},{x:0,y:1},{x:2,y:2}]},{id:1208,chapter:5,index:208,seed:5012078,width:6,height:7,rows:[`...#..`,`...pp.`,`......`,`......`,`......`,`......`,`......`],wolves:[{x:1,y:4}],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:4,y:3},{id:1,kind:`black`,x:3,y:5}],minBarks:5,barkLimit:6,solution:[{x:3,y:2},{x:4,y:4},{x:0,y:3},{x:2,y:0},{x:5,y:1}]},{id:1209,chapter:5,index:209,seed:5511272,width:5,height:6,rows:[`..#..`,`.....`,`.....`,`...pp`,`.....`,`.....`],wolves:[{x:3,y:5}],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`white`,x:2,y:4}],minBarks:5,barkLimit:6,solution:[{x:2,y:1},{x:0,y:3},{x:2,y:5},{x:0,y:1},{x:4,y:0}]},{id:1210,chapter:5,index:210,seed:5011642,width:7,height:7,rows:[`.......`,`.......`,`..#....`,`......p`,`..m.m.p`,`.......`,`.......`],wolves:[{x:3,y:6}],dog:{x:1,y:3},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`white`,x:1,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:4},{x:0,y:5},{x:2,y:6},{x:0,y:3},{x:0,y:4},{x:0,y:4}]},{id:1211,chapter:1,index:211,seed:1010045,width:5,height:6,rows:[`.....`,`.....`,`...#.`,`..p..`,`.....`,`.....`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:2},{x:2,y:0}]},{id:1212,chapter:1,index:212,seed:1010158,width:5,height:6,rows:[`..#..`,`.p...`,`.....`,`.....`,`.....`,`.....`],wolves:[],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:2,y:4},{x:3,y:1}]},{id:1213,chapter:3,index:213,seed:3311714,width:7,height:8,rows:[`.......`,`.......`,`.......`,`.......`,`..m....`,`.......`,`.....o.`,`.....pp`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:5,y:4},{id:1,kind:`white`,x:6,y:5}],minBarks:3,barkLimit:5,solution:[{x:6,y:4},{x:2,y:0},{x:0,y:7}]},{id:1214,chapter:3,index:214,seed:3010520,width:7,height:8,rows:[`..o....`,`......#`,`..p..m.`,`.......`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:6,y:5},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:5,y:0},{x:6,y:2}]},{id:1215,chapter:3,index:215,seed:3010451,width:7,height:7,rows:[`.......`,`o..p...`,`.......`,`...m...`,`.m.m...`,`.......`,`.......`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:4,barkLimit:6,solution:[{x:1,y:0},{x:0,y:4},{x:3,y:5},{x:3,y:4}]},{id:1216,chapter:5,index:216,seed:5010720,width:6,height:7,rows:[`......`,`......`,`......`,`.o....`,`......`,`.pp...`,`......`],wolves:[{x:5,y:5}],dog:{x:3,y:1},sheep:[{id:0,kind:`black`,x:0,y:2},{id:1,kind:`white`,x:4,y:3}],minBarks:6,barkLimit:7,solution:[{x:4,y:0},{x:0,y:5},{x:2,y:4},{x:5,y:4},{x:2,y:0},{x:1,y:6}]},{id:1217,chapter:5,index:217,seed:5014425,width:7,height:8,rows:[`.......`,`.......`,`.......`,`.......`,`.#p....`,`..p....`,`.......`,`.......`],wolves:[{x:6,y:4},{x:4,y:7}],dog:{x:1,y:7},sheep:[{id:0,kind:`black`,x:0,y:4},{id:1,kind:`black`,x:6,y:7}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:3,y:1},{x:6,y:5},{x:2,y:6},{x:5,y:0},{x:0,y:5}]},{id:1218,chapter:1,index:218,seed:1310037,width:6,height:6,rows:[`......`,`......`,`......`,`....#.`,`......`,`.p.p..`],wolves:[],dog:{x:5,y:1},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:1,y:4}],minBarks:2,barkLimit:5,solution:[{x:1,y:3},{x:3,y:0}]},{id:1219,chapter:2,index:219,seed:2011360,width:6,height:6,rows:[`.p....`,`......`,`......`,`......`,`...m..`,`....#.`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:4,y:4}],minBarks:3,barkLimit:6,solution:[{x:5,y:4},{x:3,y:5},{x:4,y:0}]},{id:1220,chapter:3,index:220,seed:3010355,width:7,height:8,rows:[`...p...`,`.......`,`...o...`,`.#.....`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:5,solution:[{x:4,y:3},{x:2,y:4},{x:0,y:0}]},{id:1221,chapter:3,index:221,seed:3010464,width:7,height:7,rows:[`.......`,`.......`,`.......`,`...m...`,`m......`,`po.....`,`.......`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:3,y:5}],minBarks:4,barkLimit:6,solution:[{x:3,y:6},{x:4,y:3},{x:0,y:0},{x:0,y:0}]},{id:1222,chapter:4,index:222,seed:4510066,width:5,height:6,rows:[`.....`,`..mm.`,`....p`,`....p`,`.....`,`.....`],wolves:[],dog:{x:3,y:5},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`black`,x:4,y:5}],minBarks:4,barkLimit:6,solution:[{x:0,y:1},{x:0,y:1},{x:0,y:1},{x:4,y:0}]},{id:1223,chapter:5,index:223,seed:5014386,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`o.....`,`.p....`,`.p....`],wolves:[{x:2,y:3}],dog:{x:5,y:3},sheep:[{id:0,kind:`black`,x:0,y:2},{id:1,kind:`white`,x:4,y:6}],minBarks:5,barkLimit:6,solution:[{x:0,y:0},{x:5,y:1},{x:5,y:6},{x:4,y:6},{x:0,y:5}]},{id:1224,chapter:5,index:224,seed:5014156,width:6,height:7,rows:[`......`,`......`,`...pp.`,`..#...`,`......`,`......`,`......`],wolves:[{x:5,y:1}],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`black`,x:3,y:1}],minBarks:6,barkLimit:7,solution:[{x:2,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:5},{x:5,y:4},{x:4,y:0}]},{id:1225,chapter:2,index:225,seed:2010058,width:6,height:6,rows:[`......`,`......`,`......`,`.m.#..`,`#.p...`,`......`],wolves:[],dog:{x:5,y:0},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:3,barkLimit:6,solution:[{x:1,y:5},{x:0,y:3},{x:2,y:0}]},{id:1226,chapter:2,index:226,seed:2011651,width:7,height:7,rows:[`.......`,`..p....`,`.......`,`..m....`,`.#.....`,`.......`,`.......`],wolves:[],dog:{x:6,y:2},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:3,barkLimit:6,solution:[{x:4,y:4},{x:2,y:5},{x:2,y:4}]},{id:1227,chapter:3,index:227,seed:3010688,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`....op`,`......`,`...#..`],wolves:[],dog:{x:4,y:5},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:3,barkLimit:5,solution:[{x:3,y:0},{x:0,y:5},{x:5,y:6}]},{id:1228,chapter:3,index:228,seed:3010537,width:7,height:8,rows:[`.......`,`.......`,`.m.#...`,`o.p....`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:0,y:1},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:3,barkLimit:5,solution:[{x:1,y:4},{x:0,y:2},{x:2,y:0}]},{id:1229,chapter:3,index:229,seed:3310091,width:7,height:7,rows:[`..#....`,`.....pp`,`.....o.`,`.......`,`.......`,`.#.....`,`.......`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:5,y:3},{id:1,kind:`white`,x:5,y:5}],minBarks:4,barkLimit:6,solution:[{x:0,y:3},{x:6,y:5},{x:2,y:6},{x:0,y:1}]},{id:1230,chapter:5,index:230,seed:5310473,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`..pp..`,`..p...`],wolves:[{x:5,y:4}],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:4,y:2},{id:1,kind:`black`,x:0,y:5},{id:2,kind:`white`,x:4,y:5}],minBarks:6,barkLimit:7,solution:[{x:5,y:5},{x:1,y:1},{x:5,y:2},{x:2,y:0},{x:4,y:2},{x:3,y:5}]},{id:1231,chapter:5,index:231,seed:5011847,width:7,height:8,rows:[`..o....`,`.....#.`,`.......`,`...p...`,`...pm..`,`.......`,`.......`,`.......`],wolves:[{x:1,y:3}],dog:{x:1,y:2},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:3,y:1}],minBarks:6,barkLimit:7,solution:[{x:0,y:1},{x:0,y:2},{x:4,y:0},{x:5,y:4},{x:4,y:1},{x:3,y:5}]},{id:1232,chapter:1,index:232,seed:1310018,width:5,height:5,rows:[`p....`,`.....`,`p....`,`...#.`,`.....`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:2,y:0},{id:1,kind:`white`,x:3,y:1}],minBarks:2,barkLimit:5,solution:[{x:3,y:0},{x:4,y:2}]},{id:1233,chapter:2,index:233,seed:2010891,width:6,height:6,rows:[`......`,`...p.#`,`...m..`,`....#.`,`......`,`......`],wolves:[],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:3,barkLimit:6,solution:[{x:4,y:0},{x:5,y:2},{x:3,y:3}]},{id:1234,chapter:3,index:234,seed:3510012,width:5,height:5,rows:[`.....`,`.....`,`.#.m.`,`..p.o`,`.....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:5,solution:[{x:3,y:4},{x:4,y:2},{x:2,y:0}]},{id:1235,chapter:4,index:235,seed:4510284,width:5,height:5,rows:[`.....`,`...m.`,`.....`,`pp...`,`.....`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:3,y:3},{id:1,kind:`black`,x:1,y:4}],minBarks:4,barkLimit:6,solution:[{x:1,y:0},{x:3,y:4},{x:4,y:1},{x:0,y:0}]},{id:1236,chapter:4,index:236,seed:4511177,width:5,height:5,rows:[`.....`,`.....`,`..pp.`,`.....`,`.....`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`black`,x:4,y:3}],minBarks:4,barkLimit:6,solution:[{x:0,y:3},{x:3,y:4},{x:1,y:3},{x:2,y:0}]},{id:1237,chapter:5,index:237,seed:5512082,width:6,height:6,rows:[`......`,`......`,`..pp..`,`......`,`......`,`......`],wolves:[{x:1,y:5}],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:4,y:3},{id:1,kind:`black`,x:3,y:5}],minBarks:5,barkLimit:6,solution:[{x:5,y:5},{x:4,y:0},{x:5,y:4},{x:2,y:5},{x:3,y:0}]},{id:1238,chapter:5,index:238,seed:5010047,width:6,height:7,rows:[`......`,`...m..`,`p..m..`,`p.....`,`......`,`..m...`,`......`],wolves:[{x:0,y:0}],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:4,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:1},{x:3,y:0},{x:5,y:2},{x:5,y:5},{x:3,y:5},{x:0,y:6}]},{id:1239,chapter:1,index:239,seed:1010110,width:6,height:6,rows:[`......`,`...p..`,`......`,`......`,`....#.`,`......`],wolves:[],dog:{x:5,y:1},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:2,barkLimit:5,solution:[{x:0,y:4},{x:3,y:5}]},{id:1240,chapter:2,index:240,seed:2010913,width:6,height:7,rows:[`......`,`......`,`...m..`,`p.....`,`......`,`#.....`,`......`],wolves:[],dog:{x:2,y:2},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:3,barkLimit:6,solution:[{x:3,y:5},{x:4,y:2},{x:0,y:0}]},{id:1241,chapter:3,index:241,seed:3310005,width:7,height:8,rows:[`.......`,`.......`,`.......`,`.......`,`..m....`,`....o..`,`.......`,`....pp.`],wolves:[],dog:{x:6,y:1},sheep:[{id:0,kind:`white`,x:4,y:4},{id:1,kind:`white`,x:5,y:6}],minBarks:3,barkLimit:5,solution:[{x:5,y:4},{x:2,y:0},{x:0,y:7}]},{id:1242,chapter:3,index:242,seed:3010810,width:7,height:7,rows:[`.......`,`.....op`,`......m`,`.......`,`....#..`,`.......`,`.......`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:4,barkLimit:6,solution:[{x:4,y:0},{x:0,y:3},{x:6,y:4},{x:6,y:3}]},{id:1243,chapter:4,index:243,seed:4010192,width:6,height:6,rows:[`..p...`,`..p.#.`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:3,y:1}],minBarks:5,barkLimit:7,solution:[{x:3,y:2},{x:5,y:0},{x:0,y:0},{x:3,y:2},{x:0,y:1}]},{id:1244,chapter:5,index:244,seed:5013580,width:7,height:8,rows:[`...m.pp`,`.......`,`.......`,`.m.....`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:3,y:4}],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`white`,x:1,y:4}],minBarks:6,barkLimit:7,solution:[{x:0,y:1},{x:6,y:2},{x:1,y:5},{x:1,y:4},{x:0,y:0},{x:0,y:0}]},{id:1245,chapter:5,index:245,seed:5311454,width:6,height:6,rows:[`pp....`,`.p....`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:0}],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:0,y:2},{id:1,kind:`white`,x:4,y:3},{id:2,kind:`white`,x:1,y:4}],minBarks:6,barkLimit:7,solution:[{x:0,y:5},{x:1,y:5},{x:4,y:4},{x:5,y:1},{x:2,y:2},{x:3,y:0}]},{id:1246,chapter:1,index:246,seed:1310077,width:5,height:6,rows:[`.....`,`.....`,`.#...`,`...p.`,`.....`,`...p.`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`white`,x:2,y:5}],minBarks:2,barkLimit:5,solution:[{x:1,y:5},{x:0,y:3}]},{id:1247,chapter:2,index:247,seed:2011863,width:6,height:6,rows:[`...p..`,`......`,`....m.`,`...#..`,`......`,`......`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:6,solution:[{x:0,y:2},{x:4,y:3},{x:5,y:0}]},{id:1248,chapter:3,index:248,seed:3510003,width:5,height:5,rows:[`p..o.`,`m....`,`.....`,`.....`,`.....`],wolves:[],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:5,solution:[{x:4,y:2},{x:0,y:3},{x:0,y:2}]},{id:1249,chapter:4,index:249,seed:4011642,width:6,height:6,rows:[`......`,`.....p`,`....mp`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`black`,x:5,y:0},{id:1,kind:`white`,x:3,y:1}],minBarks:4,barkLimit:6,solution:[{x:5,y:3},{x:0,y:1},{x:4,y:0},{x:0,y:2}]},{id:1250,chapter:3,index:250,seed:3310469,width:6,height:7,rows:[`......`,`....pp`,`......`,`.....o`,`......`,`......`,`......`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`white`,x:4,y:3}],minBarks:4,barkLimit:6,solution:[{x:0,y:1},{x:4,y:4},{x:0,y:2},{x:5,y:4}]},{id:1251,chapter:5,index:251,seed:5510136,width:5,height:6,rows:[`....p`,`....p`,`.....`,`.....`,`.....`,`.....`],wolves:[{x:0,y:0}],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:1},{x:1,y:5},{x:0,y:1},{x:3,y:2},{x:1,y:0}]},{id:1252,chapter:5,index:252,seed:5510664,width:6,height:6,rows:[`......`,`......`,`..pp..`,`......`,`......`,`......`],wolves:[{x:1,y:3}],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:4,y:2},{id:1,kind:`black`,x:1,y:5}],minBarks:5,barkLimit:6,solution:[{x:5,y:2},{x:5,y:5},{x:4,y:0},{x:1,y:1},{x:2,y:3}]},{id:1253,chapter:1,index:253,seed:1010225,width:6,height:7,rows:[`......`,`.p....`,`#.....`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:1,y:3},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:2,barkLimit:5,solution:[{x:4,y:2},{x:1,y:3}]},{id:1254,chapter:1,index:254,seed:1010052,width:5,height:6,rows:[`.....`,`.....`,`..p..`,`.....`,`...#.`,`.....`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:2,barkLimit:5,solution:[{x:0,y:4},{x:2,y:5}]},{id:1255,chapter:3,index:255,seed:3311532,width:6,height:7,rows:[`......`,`...m..`,`......`,`......`,`....o.`,`...mpp`,`......`],wolves:[],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:5,y:3}],minBarks:3,barkLimit:5,solution:[{x:5,y:1},{x:3,y:0},{x:0,y:5}]},{id:1256,chapter:3,index:256,seed:3010016,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`...p..o`,`...mmm.`,`.......`],wolves:[],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:5,y:4}],minBarks:4,barkLimit:6,solution:[{x:5,y:0},{x:6,y:5},{x:5,y:5},{x:3,y:6}]},{id:1257,chapter:5,index:257,seed:5510864,width:5,height:6,rows:[`.....`,`pp...`,`.....`,`.....`,`.....`,`.....`],wolves:[{x:0,y:4}],dog:{x:2,y:1},sheep:[{id:0,kind:`black`,x:2,y:0},{id:1,kind:`white`,x:1,y:3}],minBarks:5,barkLimit:6,solution:[{x:0,y:0},{x:1,y:2},{x:1,y:4},{x:2,y:2},{x:0,y:3}]},{id:1258,chapter:5,index:258,seed:5010474,width:6,height:7,rows:[`......`,`.m....`,`......`,`.m....`,`.pp...`,`......`,`......`],wolves:[{x:3,y:3}],dog:{x:5,y:1},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`black`,x:5,y:4}],minBarks:6,barkLimit:7,solution:[{x:3,y:1},{x:1,y:0},{x:1,y:0},{x:5,y:6},{x:1,y:5},{x:2,y:0}]},{id:1259,chapter:5,index:259,seed:5010583,width:7,height:7,rows:[`.......`,`.......`,`.......`,`...#...`,`.......`,`....p..`,`....p..`],wolves:[{x:1,y:6}],dog:{x:0,y:1},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`black`,x:5,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:3},{x:2,y:0},{x:3,y:5},{x:0,y:5},{x:3,y:4},{x:2,y:6}]},{id:1260,chapter:2,index:260,seed:2010439,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`.m.....`,`p.#....`,`.......`],wolves:[],dog:{x:6,y:1},sheep:[{id:0,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:6,solution:[{x:1,y:6},{x:2,y:4},{x:0,y:0}]},{id:1261,chapter:2,index:261,seed:2010867,width:6,height:7,rows:[`..#...`,`.m....`,`..p...`,`.#....`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:5},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:3,barkLimit:6,solution:[{x:3,y:1},{x:1,y:0},{x:0,y:2}]},{id:1262,chapter:3,index:262,seed:3010650,width:6,height:7,rows:[`......`,`...m..`,`p.o...`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:5,solution:[{x:3,y:3},{x:4,y:1},{x:0,y:0}]},{id:1263,chapter:4,index:263,seed:4510830,width:5,height:5,rows:[`..pp.`,`..m..`,`.....`,`.....`,`.....`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:3,y:3}],minBarks:4,barkLimit:6,solution:[{x:0,y:0},{x:3,y:4},{x:4,y:1},{x:2,y:2}]},{id:1264,chapter:4,index:264,seed:4010613,width:6,height:7,rows:[`......`,`.p....`,`.p.m..`,`...m..`,`...m..`,`......`,`......`],wolves:[],dog:{x:5,y:4},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:3,y:5}],minBarks:5,barkLimit:7,solution:[{x:3,y:6},{x:3,y:5},{x:3,y:4},{x:4,y:2},{x:0,y:1}]},{id:1265,chapter:5,index:265,seed:5010782,width:7,height:8,rows:[`.......`,`pppp...`,`.m.....`,`.......`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:4,y:3}],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:1,y:4},{id:2,kind:`white`,x:0,y:5},{id:3,kind:`white`,x:1,y:6}],minBarks:6,barkLimit:7,solution:[{x:2,y:5},{x:0,y:7},{x:1,y:7},{x:1,y:4},{x:0,y:2},{x:3,y:3}]},{id:1266,chapter:5,index:266,seed:5014545,width:7,height:7,rows:[`..p....`,`..p....`,`.......`,`.o.....`,`.......`,`.......`,`.......`],wolves:[{x:4,y:5}],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:5,y:0},{id:1,kind:`black`,x:1,y:5}],minBarks:6,barkLimit:7,solution:[{x:6,y:0},{x:3,y:5},{x:2,y:2},{x:4,y:3},{x:3,y:0},{x:0,y:1}]},{id:1267,chapter:1,index:267,seed:1010067,width:5,height:6,rows:[`..#..`,`.p...`,`.....`,`.....`,`.....`,`.....`],wolves:[],dog:{x:4,y:5},sheep:[{id:0,kind:`white`,x:2,y:2}],minBarks:2,barkLimit:5,solution:[{x:2,y:3},{x:3,y:1}]},{id:1268,chapter:2,index:268,seed:2010896,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`.m...p`,`.m....`,`.....#`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:4,y:5}],minBarks:3,barkLimit:6,solution:[{x:5,y:5},{x:1,y:6},{x:0,y:4}]},{id:1269,chapter:3,index:269,seed:3010309,width:7,height:7,rows:[`..p....`,`..o....`,`.m.....`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:6,y:2},sheep:[{id:0,kind:`white`,x:2,y:2}],minBarks:3,barkLimit:5,solution:[{x:3,y:2},{x:1,y:3},{x:0,y:0}]},{id:1270,chapter:3,index:270,seed:3010148,width:7,height:7,rows:[`.......`,`.......`,`.......`,`..#....`,`.....p.`,`.#.....`,`.....o.`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:5,y:5}],minBarks:3,barkLimit:5,solution:[{x:6,y:5},{x:2,y:6},{x:0,y:4}]},{id:1271,chapter:4,index:271,seed:4510037,width:5,height:6,rows:[`.....`,`#....`,`.....`,`.m...`,`.....`,`.pp..`],wolves:[],dog:{x:3,y:2},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`black`,x:4,y:5}],minBarks:4,barkLimit:6,solution:[{x:0,y:5},{x:4,y:1},{x:1,y:0},{x:1,y:0}]},{id:1272,chapter:5,index:272,seed:5010603,width:7,height:8,rows:[`.......`,`.......`,`.......`,`......p`,`.m..m.p`,`.......`,`.......`,`.......`],wolves:[{x:6,y:7}],dog:{x:5,y:0},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`white`,x:1,y:6}],minBarks:5,barkLimit:6,solution:[{x:0,y:2},{x:6,y:0},{x:1,y:7},{x:0,y:4},{x:0,y:4}]},{id:1273,chapter:5,index:273,seed:5510478,width:6,height:6,rows:[`......`,`pp....`,`......`,`......`,`......`,`......`],wolves:[{x:2,y:0}],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`black`,x:0,y:5}],minBarks:5,barkLimit:6,solution:[{x:4,y:5},{x:3,y:0},{x:4,y:4},{x:0,y:5},{x:1,y:0}]},{id:1274,chapter:1,index:274,seed:1010001,width:6,height:7,rows:[`......`,`......`,`......`,`....p.`,`......`,`.....#`,`......`],wolves:[],dog:{x:1,y:3},sheep:[{id:0,kind:`white`,x:2,y:5}],minBarks:2,barkLimit:5,solution:[{x:0,y:5},{x:4,y:6}]},{id:1275,chapter:2,index:275,seed:2012022,width:7,height:7,rows:[`.#.....`,`...p...`,`.m.....`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:3,y:5},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:3,barkLimit:6,solution:[{x:1,y:4},{x:1,y:3},{x:0,y:1}]},{id:1276,chapter:3,index:276,seed:3010297,width:6,height:7,rows:[`......`,`......`,`......`,`..#...`,`...mmp`,`...o..`,`......`],wolves:[],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:2,y:5}],minBarks:4,barkLimit:6,solution:[{x:2,y:6},{x:0,y:4},{x:0,y:4},{x:0,y:4}]},{id:1277,chapter:4,index:277,seed:4511070,width:5,height:6,rows:[`.....`,`.....`,`.....`,`.....`,`..m..`,`.pp..`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`black`,x:0,y:5}],minBarks:4,barkLimit:6,solution:[{x:3,y:5},{x:1,y:0},{x:0,y:4},{x:2,y:0}]},{id:1278,chapter:5,index:278,seed:5511262,width:5,height:6,rows:[`.....`,`#....`,`.....`,`.....`,`.mp..`,`..p..`],wolves:[{x:4,y:5}],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:3,y:2}],minBarks:5,barkLimit:6,solution:[{x:3,y:1},{x:1,y:0},{x:1,y:0},{x:4,y:4},{x:0,y:5}]},{id:1279,chapter:5,index:279,seed:5511112,width:6,height:6,rows:[`..p...`,`..p...`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:0}],dog:{x:0,y:1},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`black`,x:1,y:5}],minBarks:5,barkLimit:6,solution:[{x:1,y:0},{x:3,y:1},{x:5,y:1},{x:3,y:2},{x:4,y:0}]},{id:1280,chapter:5,index:280,seed:5014190,width:7,height:8,rows:[`.......`,`.......`,`.......`,`.......`,`.....pp`,`.......`,`.......`,`.......`],wolves:[{x:1,y:2},{x:3,y:5}],dog:{x:3,y:7},sheep:[{id:0,kind:`white`,x:5,y:2},{id:1,kind:`black`,x:0,y:3}],minBarks:6,barkLimit:7,solution:[{x:0,y:5},{x:3,y:4},{x:2,y:2},{x:6,y:0},{x:6,y:3},{x:5,y:5}]},{id:1281,chapter:1,index:281,seed:1010228,width:6,height:6,rows:[`...#..`,`..p...`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:2,barkLimit:5,solution:[{x:3,y:3},{x:4,y:1}]},{id:1282,chapter:1,index:282,seed:1010032,width:6,height:7,rows:[`......`,`......`,`..p...`,`......`,`.#....`,`......`,`......`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:2,barkLimit:5,solution:[{x:4,y:4},{x:2,y:5}]},{id:1283,chapter:3,index:283,seed:3010305,width:6,height:6,rows:[`......`,`......`,`......`,`.m.p..`,`#.....`,`...o..`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:3,barkLimit:5,solution:[{x:4,y:4},{x:1,y:5},{x:0,y:3}]},{id:1284,chapter:3,index:284,seed:3010350,width:7,height:7,rows:[`....o..`,`.....m.`,`....pm.`,`.......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:1,y:1},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:5,y:0},{x:6,y:2}]},{id:1285,chapter:4,index:285,seed:4310829,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`...p..`,`...p..`,`...p..`],wolves:[],dog:{x:3,y:2},sheep:[{id:0,kind:`white`,x:4,y:3},{id:1,kind:`white`,x:2,y:6},{id:2,kind:`black`,x:5,y:6}],minBarks:5,barkLimit:7,solution:[{x:0,y:6},{x:4,y:0},{x:5,y:5},{x:4,y:3},{x:0,y:4}]},{id:1286,chapter:5,index:286,seed:5512459,width:5,height:6,rows:[`.....`,`.#.pp`,`.....`,`.....`,`.....`,`.....`],wolves:[{x:4,y:4}],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`black`,x:3,y:5}],minBarks:5,barkLimit:6,solution:[{x:1,y:5},{x:0,y:2},{x:2,y:2},{x:4,y:3},{x:3,y:0}]},{id:1287,chapter:5,index:287,seed:5013942,width:8,height:8,rows:[`........`,`........`,`........`,`..p.....`,`..p.....`,`.....o..`,`..m.....`,`........`],wolves:[{x:5,y:1},{x:5,y:3}],dog:{x:1,y:6},sheep:[{id:0,kind:`black`,x:7,y:3},{id:1,kind:`white`,x:3,y:6}],minBarks:6,barkLimit:7,solution:[{x:4,y:6},{x:2,y:7},{x:7,y:7},{x:2,y:6},{x:3,y:2},{x:0,y:3}]},{id:1288,chapter:1,index:288,seed:1310065,width:5,height:6,rows:[`.....`,`....#`,`.....`,`.....`,`.p.p.`,`.....`],wolves:[],dog:{x:3,y:2},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:1,y:2}],minBarks:2,barkLimit:5,solution:[{x:1,y:1},{x:3,y:0}]},{id:1289,chapter:1,index:289,seed:1010323,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`...p..`,`.#....`,`......`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:2,barkLimit:5,solution:[{x:1,y:0},{x:0,y:4}]},{id:1290,chapter:3,index:290,seed:3010730,width:6,height:6,rows:[`......`,`......`,`......`,`.o.m..`,`p..m..`,`......`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:3,barkLimit:5,solution:[{x:0,y:3},{x:3,y:0},{x:4,y:4}]},{id:1291,chapter:3,index:291,seed:3010007,width:6,height:6,rows:[`..p...`,`......`,`......`,`.mo...`,`#.....`,`......`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:2,y:4}],minBarks:4,barkLimit:6,solution:[{x:3,y:4},{x:1,y:5},{x:1,y:4},{x:0,y:0}]},{id:1292,chapter:5,index:292,seed:5010694,width:7,height:8,rows:[`..pp...`,`..m....`,`.......`,`.......`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:6,y:0}],dog:{x:4,y:6},sheep:[{id:0,kind:`white`,x:5,y:1},{id:1,kind:`white`,x:2,y:3}],minBarks:5,barkLimit:6,solution:[{x:2,y:4},{x:0,y:1},{x:6,y:1},{x:2,y:2},{x:3,y:2}]},{id:1293,chapter:5,index:293,seed:5512066,width:5,height:6,rows:[`...pp`,`....m`,`.....`,`.....`,`..m..`,`.....`],wolves:[{x:1,y:2}],dog:{x:2,y:2},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`white`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:4},{x:0,y:4},{x:3,y:5},{x:4,y:5},{x:4,y:2}]},{id:1294,chapter:5,index:294,seed:5013186,width:7,height:7,rows:[`.......`,`pp.....`,`..#....`,`.......`,`...o...`,`.......`,`.......`],wolves:[{x:0,y:4}],dog:{x:1,y:3},sheep:[{id:0,kind:`black`,x:0,y:2},{id:1,kind:`black`,x:2,y:4}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:2,y:6},{x:5,y:5},{x:4,y:2},{x:0,y:3},{x:1,y:0}]},{id:1295,chapter:1,index:295,seed:1310096,width:5,height:6,rows:[`.....`,`.....`,`.....`,`...#.`,`.....`,`p.p..`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`white`,x:0,y:4}],minBarks:2,barkLimit:5,solution:[{x:0,y:3},{x:2,y:0}]},{id:1296,chapter:2,index:296,seed:2010425,width:6,height:7,rows:[`......`,`......`,`....#.`,`.p....`,`....m.`,`......`,`......`],wolves:[],dog:{x:5,y:3},sheep:[{id:0,kind:`white`,x:4,y:5}],minBarks:3,barkLimit:6,solution:[{x:4,y:6},{x:4,y:5},{x:5,y:3}]},{id:1297,chapter:3,index:297,seed:3010342,width:6,height:7,rows:[`...p..`,`......`,`...o..`,`....m.`,`......`,`......`,`......`],wolves:[],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:5,solution:[{x:0,y:3},{x:4,y:4},{x:5,y:0}]},{id:1298,chapter:4,index:298,seed:4511150,width:5,height:5,rows:[`.....`,`.....`,`...pp`,`..m..`,`.....`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`black`,x:2,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:3},{x:0,y:3},{x:4,y:4},{x:3,y:0}]},{id:1299,chapter:4,index:299,seed:4310332,width:6,height:6,rows:[`......`,`......`,`......`,`...p.#`,`..pp..`,`......`],wolves:[],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:4,y:3},{id:2,kind:`black`,x:3,y:5}],minBarks:5,barkLimit:7,solution:[{x:5,y:5},{x:4,y:0},{x:0,y:5},{x:1,y:3},{x:5,y:4}]},{id:1300,chapter:5,index:300,seed:5011329,width:6,height:7,rows:[`......`,`......`,`..pp..`,`.o....`,`......`,`......`,`......`],wolves:[{x:3,y:5}],dog:{x:4,y:5},sheep:[{id:0,kind:`white`,x:4,y:2},{id:1,kind:`black`,x:3,y:3}],minBarks:5,barkLimit:6,solution:[{x:5,y:2},{x:5,y:3},{x:4,y:0},{x:1,y:1},{x:2,y:3}]},{id:1301,chapter:5,index:301,seed:5010657,width:8,height:8,rows:[`........`,`........`,`..m.m...`,`.....#..`,`........`,`........`,`........`,`...pp...`],wolves:[{x:2,y:5}],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:1,y:3}],minBarks:6,barkLimit:7,solution:[{x:2,y:0},{x:0,y:2},{x:0,y:3},{x:4,y:0},{x:5,y:6},{x:3,y:0}]},{id:1302,chapter:1,index:302,seed:1310017,width:5,height:6,rows:[`.....`,`.....`,`....p`,`.....`,`....p`,`..#..`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:3,y:2},{id:1,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:2,y:2},{x:0,y:4}]},{id:1303,chapter:2,index:303,seed:2010380,width:7,height:7,rows:[`.......`,`p...m..`,`....m..`,`#......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:3,barkLimit:6,solution:[{x:0,y:2},{x:4,y:3},{x:5,y:1}]},{id:1304,chapter:3,index:304,seed:3012188,width:6,height:7,rows:[`pp....`,`.o....`,`......`,`......`,`......`,`....#.`,`......`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:0,y:4},{id:1,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:5,solution:[{x:0,y:5},{x:3,y:6},{x:4,y:0}]},{id:1305,chapter:3,index:305,seed:3010165,width:6,height:7,rows:[`......`,`......`,`....m.`,`.o....`,`......`,`.p.mm.`,`......`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:4,barkLimit:6,solution:[{x:0,y:2},{x:4,y:0},{x:5,y:5},{x:4,y:5}]},{id:1306,chapter:5,index:306,seed:5510037,width:6,height:6,rows:[`....p.`,`....p.`,`......`,`......`,`......`,`......`],wolves:[{x:0,y:0}],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:4,y:2},{id:1,kind:`white`,x:1,y:3}],minBarks:5,barkLimit:6,solution:[{x:1,y:4},{x:4,y:3},{x:0,y:1},{x:3,y:2},{x:1,y:0}]},{id:1307,chapter:5,index:307,seed:5014992,width:7,height:8,rows:[`.......`,`.......`,`.......`,`..pp...`,`...o...`,`.......`,`.......`,`.......`],wolves:[{x:5,y:5}],dog:{x:0,y:6},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`black`,x:3,y:5}],minBarks:5,barkLimit:6,solution:[{x:0,y:3},{x:0,y:5},{x:1,y:0},{x:4,y:1},{x:3,y:5}]},{id:1308,chapter:5,index:308,seed:5310747,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`...mp.`,`....pp`],wolves:[{x:5,y:0}],dog:{x:3,y:0},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:1,y:4},{id:2,kind:`white`,x:3,y:5}],minBarks:6,barkLimit:7,solution:[{x:0,y:4},{x:0,y:4},{x:4,y:0},{x:0,y:3},{x:5,y:1},{x:0,y:5}]},{id:1309,chapter:1,index:309,seed:1010086,width:5,height:5,rows:[`.....`,`..#..`,`.p...`,`.....`,`.....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:2,y:4},{x:3,y:2}]},{id:1310,chapter:2,index:310,seed:2012187,width:6,height:6,rows:[`......`,`......`,`..#.m.`,`...p..`,`......`,`......`],wolves:[],dog:{x:3,y:5},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:3,barkLimit:6,solution:[{x:4,y:0},{x:5,y:2},{x:3,y:0}]},{id:1311,chapter:3,index:311,seed:3010248,width:6,height:6,rows:[`.o....`,`...#..`,`......`,`......`,`.p....`,`..#...`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:2,y:0},{x:3,y:4}]},{id:1312,chapter:4,index:312,seed:4010401,width:6,height:7,rows:[`......`,`......`,`..pp..`,`......`,`..m...`,`..m...`,`......`],wolves:[],dog:{x:1,y:6},sheep:[{id:0,kind:`black`,x:5,y:2},{id:1,kind:`white`,x:4,y:5}],minBarks:4,barkLimit:6,solution:[{x:0,y:2},{x:5,y:5},{x:2,y:6},{x:2,y:5}]},{id:1313,chapter:4,index:313,seed:4010531,width:6,height:7,rows:[`......`,`......`,`..p...`,`#.p...`,`......`,`......`,`......`],wolves:[],dog:{x:4,y:5},sheep:[{id:0,kind:`black`,x:0,y:1},{id:1,kind:`white`,x:1,y:3}],minBarks:5,barkLimit:7,solution:[{x:2,y:1},{x:1,y:4},{x:0,y:2},{x:1,y:4},{x:3,y:3}]},{id:1314,chapter:5,index:314,seed:5511818,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`.p....`,`.p....`],wolves:[{x:5,y:5}],dog:{x:3,y:2},sheep:[{id:0,kind:`black`,x:3,y:1},{id:1,kind:`white`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:3,y:5},{x:0,y:4},{x:5,y:4},{x:2,y:0},{x:3,y:5}]},{id:1315,chapter:5,index:315,seed:5511260,width:6,height:6,rows:[`......`,`......`,`......`,`....pp`,`......`,`......`],wolves:[{x:5,y:0}],dog:{x:5,y:1},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:4,y:1}],minBarks:5,barkLimit:6,solution:[{x:4,y:0},{x:0,y:1},{x:4,y:0},{x:0,y:2},{x:5,y:1}]},{id:1316,chapter:2,index:316,seed:2010111,width:6,height:6,rows:[`......`,`.m..p.`,`....#.`,`......`,`#.....`,`......`],wolves:[],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:4,y:4}],minBarks:3,barkLimit:6,solution:[{x:5,y:4},{x:1,y:5},{x:0,y:1}]},{id:1317,chapter:2,index:317,seed:2012160,width:7,height:7,rows:[`.#p....`,`.......`,`.......`,`.......`,`..m....`,`..m....`,`.......`],wolves:[],dog:{x:5,y:1},sheep:[{id:0,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:6,solution:[{x:0,y:5},{x:2,y:6},{x:2,y:5}]},{id:1318,chapter:3,index:318,seed:3010135,width:6,height:6,rows:[`......`,`......`,`......`,`.mp...`,`#.....`,`..o...`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:2,y:4}],minBarks:3,barkLimit:5,solution:[{x:3,y:4},{x:1,y:5},{x:0,y:3}]},{id:1319,chapter:3,index:319,seed:3010199,width:7,height:8,rows:[`...p...`,`.......`,`...o...`,`.....m.`,`.....m.`,`.......`,`.......`,`.......`],wolves:[],dog:{x:1,y:7},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:5,y:5},{x:5,y:4},{x:6,y:0}]},{id:1320,chapter:5,index:320,seed:5510632,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`......`,`pp....`],wolves:[{x:1,y:0},{x:3,y:5}],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:0,y:4}],minBarks:5,barkLimit:6,solution:[{x:5,y:1},{x:2,y:0},{x:3,y:4},{x:0,y:0},{x:1,y:1}]},{id:1321,chapter:5,index:321,seed:5510438,width:6,height:6,rows:[`......`,`....#.`,`......`,`......`,`......`,`....pp`],wolves:[{x:2,y:5}],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:5,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:1},{x:3,y:0},{x:0,y:4},{x:5,y:0},{x:4,y:2}]},{id:1322,chapter:5,index:322,seed:5511900,width:6,height:6,rows:[`....pp`,`......`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:4}],dog:{x:0,y:1},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:4,y:3}],minBarks:5,barkLimit:6,solution:[{x:2,y:4},{x:0,y:0},{x:4,y:4},{x:0,y:1},{x:5,y:2}]},{id:1323,chapter:2,index:323,seed:2010067,width:6,height:7,rows:[`....#.`,`...p..`,`....m.`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:4,y:4}],minBarks:3,barkLimit:6,solution:[{x:4,y:5},{x:4,y:3},{x:5,y:1}]},{id:1324,chapter:2,index:324,seed:2011480,width:6,height:6,rows:[`......`,`....p.`,`..m..#`,`......`,`......`,`......`],wolves:[],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:3,barkLimit:6,solution:[{x:0,y:2},{x:0,y:2},{x:4,y:3}]},{id:1325,chapter:4,index:325,seed:4510325,width:5,height:5,rows:[`.....`,`.....`,`..pp.`,`..#..`,`.....`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`black`,x:3,y:4}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:3,y:0},{x:1,y:1},{x:4,y:2}]},{id:1326,chapter:3,index:326,seed:3010509,width:6,height:6,rows:[`......`,`#.....`,`.....o`,`......`,`.#...p`,`......`],wolves:[],dog:{x:4,y:5},sheep:[{id:0,kind:`white`,x:4,y:1}],minBarks:4,barkLimit:6,solution:[{x:5,y:1},{x:1,y:0},{x:0,y:3},{x:5,y:0}]},{id:1327,chapter:4,index:327,seed:4010047,width:6,height:6,rows:[`..o...`,`......`,`......`,`..pp..`,`...p..`,`......`],wolves:[],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`black`,x:4,y:3},{id:2,kind:`black`,x:3,y:5}],minBarks:5,barkLimit:7,solution:[{x:4,y:0},{x:0,y:1},{x:3,y:0},{x:1,y:1},{x:2,y:4}]},{id:1328,chapter:5,index:328,seed:5511664,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`p.....`,`p.....`],wolves:[{x:3,y:5}],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:3,y:2},{id:1,kind:`white`,x:2,y:4}],minBarks:5,barkLimit:6,solution:[{x:4,y:2},{x:0,y:0},{x:3,y:4},{x:1,y:0},{x:2,y:5}]},{id:1329,chapter:5,index:329,seed:5511747,width:6,height:6,rows:[`......`,`......`,`......`,`......`,`..p...`,`..p...`],wolves:[{x:0,y:5},{x:5,y:5}],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:4,y:0},{x:0,y:4},{x:5,y:4},{x:3,y:0},{x:4,y:5}]},{id:1330,chapter:1,index:330,seed:1310023,width:6,height:6,rows:[`......`,`..p.p.`,`......`,`......`,`.#....`,`......`],wolves:[],dog:{x:2,y:5},sheep:[{id:0,kind:`white`,x:4,y:3},{id:1,kind:`white`,x:3,y:4}],minBarks:2,barkLimit:5,solution:[{x:4,y:4},{x:2,y:5}]},{id:1331,chapter:1,index:331,seed:1010133,width:5,height:5,rows:[`.....`,`.....`,`..p..`,`...#.`,`.....`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:2,barkLimit:5,solution:[{x:0,y:3},{x:2,y:4}]},{id:1332,chapter:4,index:332,seed:4511057,width:5,height:5,rows:[`.....`,`.....`,`.....`,`.p...`,`.p...`],wolves:[],dog:{x:4,y:2},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`black`,x:4,y:1}],minBarks:4,barkLimit:6,solution:[{x:0,y:1},{x:3,y:0},{x:4,y:4},{x:0,y:3}]},{id:1333,chapter:3,index:333,seed:3010423,width:6,height:6,rows:[`......`,`..m.m.`,`p.o...`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:1},sheep:[{id:0,kind:`white`,x:4,y:2}],minBarks:4,barkLimit:6,solution:[{x:4,y:3},{x:5,y:1},{x:3,y:1},{x:0,y:0}]},{id:1334,chapter:3,index:334,seed:3011871,width:6,height:7,rows:[`....pp`,`......`,`.....o`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:2,y:0},{id:1,kind:`white`,x:4,y:2}],minBarks:4,barkLimit:6,solution:[{x:0,y:0},{x:4,y:3},{x:0,y:1},{x:5,y:3}]},{id:1335,chapter:5,index:335,seed:5510728,width:5,height:6,rows:[`...p.`,`...p.`,`.....`,`.m...`,`.....`,`.....`],wolves:[{x:3,y:4}],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:2,y:0},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:1,y:5},{x:0,y:3},{x:2,y:4},{x:0,y:0},{x:0,y:1}]},{id:1336,chapter:5,index:336,seed:5010211,width:7,height:8,rows:[`.......`,`.#.....`,`.......`,`.....pp`,`.......`,`.......`,`m....#.`,`.......`],wolves:[{x:3,y:5}],dog:{x:4,y:6},sheep:[{id:0,kind:`white`,x:5,y:1},{id:1,kind:`black`,x:0,y:7}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:0,y:1},{x:2,y:1},{x:6,y:0},{x:6,y:2},{x:5,y:4}]},{id:1337,chapter:1,index:337,seed:1310028,width:6,height:6,rows:[`......`,`.p.p..`,`......`,`....#.`,`......`,`......`],wolves:[],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:1,y:3},{x:3,y:4}]},{id:1338,chapter:2,index:338,seed:2011126,width:6,height:7,rows:[`......`,`......`,`......`,`.mm...`,`......`,`......`,`#.p...`],wolves:[],dog:{x:4,y:0},sheep:[{id:0,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:6,solution:[{x:1,y:6},{x:0,y:3},{x:2,y:0}]},{id:1339,chapter:3,index:339,seed:3010639,width:7,height:8,rows:[`.......`,`.......`,`.mp....`,`..o....`,`#......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:2,y:4}],minBarks:3,barkLimit:5,solution:[{x:3,y:4},{x:1,y:5},{x:0,y:2}]},{id:1340,chapter:3,index:340,seed:351e4,width:5,height:5,rows:[`.#...`,`...#.`,`.....`,`o.p..`,`.....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:3,barkLimit:5,solution:[{x:1,y:4},{x:0,y:1},{x:2,y:0}]},{id:1341,chapter:4,index:341,seed:4510169,width:5,height:6,rows:[`.....`,`.....`,`....p`,`....p`,`..m..`,`.#...`],wolves:[],dog:{x:1,y:1},sheep:[{id:0,kind:`black`,x:4,y:0},{id:1,kind:`white`,x:1,y:2}],minBarks:4,barkLimit:6,solution:[{x:1,y:1},{x:0,y:4},{x:0,y:4},{x:4,y:5}]},{id:1342,chapter:5,index:342,seed:5311724,width:6,height:6,rows:[`......`,`.....#`,`......`,`......`,`...p..`,`...pp.`],wolves:[{x:0,y:5}],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`white`,x:1,y:3},{id:2,kind:`white`,x:3,y:3}],minBarks:6,barkLimit:7,solution:[{x:1,y:1},{x:3,y:0},{x:4,y:0},{x:0,y:4},{x:2,y:0},{x:1,y:5}]},{id:1343,chapter:5,index:343,seed:5013116,width:7,height:8,rows:[`.......`,`.......`,`.......`,`.......`,`.......`,`.......`,`...p...`,`...pp..`],wolves:[{x:1,y:3}],dog:{x:2,y:4},sheep:[{id:0,kind:`black`,x:0,y:2},{id:1,kind:`white`,x:4,y:4},{id:2,kind:`white`,x:2,y:7}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:4,y:0},{x:6,y:1},{x:0,y:7},{x:5,y:7},{x:0,y:6}]},{id:1344,chapter:1,index:344,seed:1010264,width:5,height:6,rows:[`.....`,`...p.`,`.....`,`....#`,`.....`,`.....`],wolves:[],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:0,y:3},{x:3,y:4}]},{id:1345,chapter:1,index:345,seed:1010244,width:5,height:6,rows:[`.....`,`.....`,`.....`,`.....`,`..p..`,`.#...`],wolves:[],dog:{x:0,y:5},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:2,barkLimit:5,solution:[{x:1,y:0},{x:0,y:4}]},{id:1346,chapter:3,index:346,seed:3010572,width:6,height:6,rows:[`......`,`...mmp`,`......`,`......`,`.....o`,`......`],wolves:[],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:3,barkLimit:5,solution:[{x:3,y:5},{x:0,y:1},{x:0,y:1}]},{id:1347,chapter:4,index:347,seed:4510163,width:5,height:5,rows:[`.....`,`..p..`,`.op..`,`.....`,`.....`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`black`,x:0,y:1},{id:1,kind:`white`,x:3,y:1}],minBarks:4,barkLimit:6,solution:[{x:0,y:4},{x:4,y:1},{x:3,y:3},{x:2,y:0}]},{id:1348,chapter:3,index:348,seed:3010524,width:6,height:6,rows:[`......`,`......`,`.....m`,`.....m`,`......`,`....op`],wolves:[],dog:{x:3,y:5},sheep:[{id:0,kind:`white`,x:3,y:1}],minBarks:4,barkLimit:6,solution:[{x:0,y:1},{x:5,y:0},{x:5,y:0},{x:5,y:0}]},{id:1349,chapter:5,index:349,seed:5013588,width:7,height:7,rows:[`.......`,`..m...p`,`...o..p`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:3,y:5}],dog:{x:1,y:6},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`white`,x:2,y:4}],minBarks:5,barkLimit:6,solution:[{x:2,y:0},{x:0,y:3},{x:2,y:5},{x:0,y:1},{x:6,y:4}]},{id:1350,chapter:5,index:350,seed:5012779,width:7,height:8,rows:[`.......`,`.....#.`,`.......`,`.....p.`,`.....p.`,`.......`,`......m`,`.......`],wolves:[{x:3,y:3},{x:4,y:7}],dog:{x:2,y:1},sheep:[{id:0,kind:`black`,x:5,y:0},{id:1,kind:`black`,x:6,y:7}],minBarks:6,barkLimit:7,solution:[{x:0,y:0},{x:1,y:6},{x:6,y:5},{x:5,y:2},{x:6,y:2},{x:4,y:3}]},{id:1351,chapter:2,index:351,seed:2010904,width:6,height:7,rows:[`......`,`......`,`.m....`,`..p...`,`.#....`,`......`,`......`],wolves:[],dog:{x:2,y:0},sheep:[{id:0,kind:`white`,x:3,y:2}],minBarks:3,barkLimit:6,solution:[{x:4,y:2},{x:1,y:0},{x:0,y:3}]},{id:1352,chapter:2,index:352,seed:2012408,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.m.....`,`..p....`,`.#.....`,`.......`],wolves:[],dog:{x:2,y:0},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:3,barkLimit:6,solution:[{x:1,y:0},{x:1,y:0},{x:0,y:4}]},{id:1353,chapter:3,index:353,seed:3510011,width:5,height:5,rows:[`.o...`,`..m..`,`.pm..`,`.....`,`.....`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:2,y:0},{x:3,y:2}]},{id:1354,chapter:3,index:354,seed:3310632,width:6,height:7,rows:[`p.....`,`p.o...`,`m.....`,`......`,`......`,`......`,`...#..`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:2,y:0},{id:1,kind:`white`,x:3,y:1}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:4,y:5},{x:0,y:6},{x:0,y:3}]},{id:1355,chapter:4,index:355,seed:4510098,width:5,height:6,rows:[`.....`,`.....`,`..#..`,`.pp..`,`.....`,`.....`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`black`,x:1,y:0},{id:1,kind:`white`,x:1,y:4}],minBarks:4,barkLimit:6,solution:[{x:4,y:0},{x:1,y:5},{x:3,y:4},{x:0,y:3}]},{id:1356,chapter:5,index:356,seed:5014796,width:8,height:8,rows:[`........`,`........`,`.....#..`,`......pp`,`..#.....`,`........`,`........`,`........`],wolves:[{x:7,y:6}],dog:{x:5,y:0},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`white`,x:6,y:5}],minBarks:5,barkLimit:6,solution:[{x:2,y:0},{x:0,y:3},{x:6,y:6},{x:3,y:4},{x:7,y:5}]},{id:1357,chapter:5,index:357,seed:5511868,width:6,height:6,rows:[`......`,`......`,`......`,`pp....`,`......`,`......`],wolves:[{x:0,y:0}],dog:{x:3,y:0},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`black`,x:5,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:4},{x:1,y:2},{x:1,y:0},{x:2,y:2},{x:0,y:1}]},{id:1358,chapter:1,index:358,seed:1010217,width:6,height:7,rows:[`......`,`......`,`......`,`.p....`,`....#.`,`......`,`......`],wolves:[],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:4,y:2}],minBarks:2,barkLimit:5,solution:[{x:4,y:0},{x:5,y:3}]},{id:1359,chapter:1,index:359,seed:1010017,width:5,height:5,rows:[`.....`,`.....`,`..p..`,`...#.`,`.....`],wolves:[],dog:{x:1,y:3},sheep:[{id:0,kind:`white`,x:3,y:1}],minBarks:2,barkLimit:5,solution:[{x:3,y:0},{x:4,y:2}]},{id:1360,chapter:3,index:360,seed:3010701,width:6,height:6,rows:[`......`,`......`,`......`,`.m.m.p`,`...o..`,`......`],wolves:[],dog:{x:5,y:5},sheep:[{id:0,kind:`white`,x:1,y:4}],minBarks:3,barkLimit:5,solution:[{x:1,y:5},{x:0,y:3},{x:0,y:3}]},{id:1361,chapter:4,index:361,seed:4511035,width:5,height:6,rows:[`.....`,`.....`,`...p.`,`...p.`,`.#...`,`.....`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`black`,x:1,y:2}],minBarks:4,barkLimit:6,solution:[{x:3,y:0},{x:4,y:2},{x:2,y:4},{x:4,y:3}]},{id:1362,chapter:5,index:362,seed:5512498,width:5,height:6,rows:[`.....`,`.....`,`...p.`,`...p.`,`.....`,`.....`],wolves:[{x:3,y:0}],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`black`,x:3,y:5}],minBarks:5,barkLimit:6,solution:[{x:1,y:5},{x:2,y:2},{x:2,y:0},{x:0,y:2},{x:4,y:3}]},{id:1363,chapter:5,index:363,seed:5010602,width:7,height:8,rows:[`pm.....`,`p......`,`.......`,`.......`,`.......`,`.......`,`..m....`,`.......`],wolves:[{x:0,y:7}],dog:{x:6,y:3},sheep:[{id:0,kind:`white`,x:4,y:0},{id:1,kind:`white`,x:3,y:6}],minBarks:6,barkLimit:7,solution:[{x:5,y:0},{x:4,y:6},{x:3,y:6},{x:1,y:7},{x:2,y:0},{x:2,y:1}]},{id:1364,chapter:5,index:364,seed:5512339,width:6,height:6,rows:[`..p...`,`..p...`,`......`,`......`,`......`,`......`],wolves:[{x:5,y:0}],dog:{x:3,y:4},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`black`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:1,y:0},{x:3,y:1},{x:5,y:1},{x:3,y:2},{x:4,y:0}]}]},t={version:1,chapters:[{id:1,element:`rocks`,minBarksRange:[1,2]},{id:2,element:`mud`,minBarksRange:[2,3]},{id:3,element:`holes`,minBarksRange:[3,4]},{id:4,element:`black-sheep`,minBarksRange:[4,5]},{id:5,element:`wolves`,minBarksRange:[5,7]}],levels:[{id:1,chapter:1,index:1,seed:19e5,width:5,height:5,rows:[`.....`,`.....`,`.....`,`..p..`,`.....`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:1,y:3}],minBarks:1,barkLimit:4,solution:[{x:0,y:3}]},{id:2,chapter:1,index:2,seed:1500002,width:5,height:5,rows:[`.....`,`....#`,`...p.`,`.....`,`.....`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:2,barkLimit:5,solution:[{x:0,y:1},{x:3,y:0}]},{id:3,chapter:1,index:3,seed:1500006,width:5,height:5,rows:[`.....`,`...#.`,`..p..`,`.....`,`.....`],wolves:[],dog:{x:0,y:2},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:2,barkLimit:5,solution:[{x:3,y:4},{x:4,y:2}]},{id:4,chapter:1,index:4,seed:1000026,width:5,height:6,rows:[`.....`,`...p.`,`....#`,`.....`,`.....`,`.....`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:2,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:2},{x:3,y:3}]},{id:5,chapter:1,index:5,seed:1000004,width:6,height:6,rows:[`......`,`......`,`.p....`,`......`,`#.....`,`......`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:3,y:4}],minBarks:2,barkLimit:5,solution:[{x:4,y:4},{x:1,y:5}]},{id:6,chapter:1,index:6,seed:1000014,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`...p..`,`..#...`,`......`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:2,barkLimit:5,solution:[{x:2,y:0},{x:0,y:4}]},{id:7,chapter:1,index:7,seed:13e5,width:5,height:5,rows:[`.....`,`...#.`,`.....`,`p.p..`,`.....`],wolves:[],dog:{x:1,y:3},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:0,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:1},{x:2,y:0}]},{id:8,chapter:1,index:8,seed:1300030,width:5,height:5,rows:[`.#...`,`....p`,`.....`,`....p`,`.....`],wolves:[],dog:{x:3,y:1},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`white`,x:2,y:3}],minBarks:2,barkLimit:5,solution:[{x:1,y:3},{x:0,y:1}]},{id:9,chapter:1,index:9,seed:1300013,width:5,height:6,rows:[`.....`,`.....`,`.#...`,`.....`,`.....`,`..p.p`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:3,y:2},{id:1,kind:`white`,x:4,y:4}],minBarks:2,barkLimit:5,solution:[{x:4,y:2},{x:2,y:0}]},{id:10,chapter:1,index:10,seed:1300019,width:5,height:6,rows:[`.....`,`.p.p.`,`.....`,`.....`,`#....`,`.....`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:3,y:3},{id:1,kind:`white`,x:2,y:4}],minBarks:2,barkLimit:5,solution:[{x:3,y:4},{x:1,y:5}]},{id:11,chapter:1,index:11,seed:1300006,width:6,height:6,rows:[`p.p...`,`......`,`...#..`,`......`,`......`,`......`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:0,y:1},{id:1,kind:`white`,x:1,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:2},{x:2,y:3}]},{id:12,chapter:1,index:12,seed:1300018,width:6,height:6,rows:[`......`,`..#...`,`......`,`...p.p`,`......`,`......`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:5,y:2}],minBarks:2,barkLimit:5,solution:[{x:5,y:1},{x:3,y:0}]},{id:13,chapter:2,index:1,seed:25e5,width:5,height:5,rows:[`.....`,`..p..`,`..m..`,`.....`,`.....`],wolves:[],dog:{x:0,y:0},sheep:[{id:0,kind:`white`,x:1,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:2},{x:2,y:3}]},{id:14,chapter:2,index:2,seed:2500001,width:5,height:5,rows:[`.....`,`.....`,`.....`,`..mp.`,`.....`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:2,barkLimit:5,solution:[{x:2,y:0},{x:0,y:3}]},{id:15,chapter:2,index:3,seed:2500004,width:5,height:5,rows:[`.....`,`..mp.`,`.....`,`.....`,`.....`],wolves:[],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:1,y:1}],minBarks:2,barkLimit:5,solution:[{x:0,y:1},{x:0,y:1}]},{id:16,chapter:2,index:4,seed:2000060,width:6,height:6,rows:[`......`,`......`,`...mp.`,`......`,`......`,`......`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:2,y:2}],minBarks:2,barkLimit:5,solution:[{x:0,y:2},{x:0,y:2}]},{id:17,chapter:2,index:5,seed:2000014,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`...m..`,`...p..`,`......`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:4,y:4}],minBarks:2,barkLimit:5,solution:[{x:5,y:4},{x:3,y:0}]},{id:18,chapter:2,index:6,seed:2000031,width:7,height:7,rows:[`.......`,`.......`,`p......`,`m......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:0,y:5}],minBarks:2,barkLimit:5,solution:[{x:0,y:6},{x:0,y:4}]},{id:19,chapter:2,index:7,seed:2300375,width:6,height:6,rows:[`......`,`..ppm.`,`......`,`......`,`......`,`......`],wolves:[],dog:{x:0,y:1},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:4,y:4}],minBarks:3,barkLimit:6,solution:[{x:0,y:1},{x:4,y:5},{x:5,y:1}]},{id:20,chapter:2,index:8,seed:2300692,width:6,height:6,rows:[`......`,`......`,`......`,`...m..`,`..pp..`,`......`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:4,y:3}],minBarks:3,barkLimit:6,solution:[{x:2,y:0},{x:5,y:3},{x:3,y:0}]},{id:21,chapter:2,index:9,seed:2300406,width:6,height:7,rows:[`......`,`....m.`,`....p.`,`....p.`,`......`,`......`,`......`],wolves:[],dog:{x:5,y:2},sheep:[{id:0,kind:`white`,x:3,y:1},{id:1,kind:`white`,x:4,y:4}],minBarks:3,barkLimit:6,solution:[{x:4,y:5},{x:0,y:1},{x:4,y:0}]},{id:22,chapter:2,index:10,seed:2300449,width:6,height:7,rows:[`......`,`......`,`.pp...`,`..m...`,`......`,`......`,`......`],wolves:[],dog:{x:2,y:1},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:6,solution:[{x:1,y:4},{x:4,y:3},{x:2,y:4}]},{id:23,chapter:2,index:11,seed:2300279,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`..ppm..`,`.......`,`.......`],wolves:[],dog:{x:1,y:1},sheep:[{id:0,kind:`white`,x:1,y:4},{id:1,kind:`white`,x:4,y:5}],minBarks:3,barkLimit:6,solution:[{x:0,y:4},{x:4,y:6},{x:5,y:4}]},{id:24,chapter:2,index:12,seed:2300342,width:7,height:7,rows:[`.......`,`.....m.`,`.......`,`.....p.`,`.....p.`,`.......`,`.......`],wolves:[],dog:{x:1,y:0},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:5,y:5}],minBarks:3,barkLimit:6,solution:[{x:5,y:6},{x:0,y:1},{x:5,y:0}]},{id:25,chapter:3,index:1,seed:35e5,width:5,height:5,rows:[`.....`,`.....`,`.....`,`...m.`,`...op`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:2,y:3}],minBarks:3,barkLimit:5,solution:[{x:0,y:3},{x:0,y:3},{x:4,y:0}]},{id:26,chapter:3,index:2,seed:3500002,width:5,height:5,rows:[`..o..`,`....#`,`..p..`,`...#.`,`.....`],wolves:[],dog:{x:4,y:3},sheep:[{id:0,kind:`white`,x:2,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:3,y:0},{x:4,y:2}]},{id:27,chapter:3,index:3,seed:3500005,width:5,height:5,rows:[`.....`,`...mp`,`...mo`,`.....`,`.....`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:5,solution:[{x:3,y:4},{x:3,y:3},{x:0,y:1}]},{id:28,chapter:3,index:4,seed:3000044,width:6,height:6,rows:[`...o..`,`....m.`,`......`,`......`,`......`,`...p..`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:3,y:1}],minBarks:3,barkLimit:5,solution:[{x:0,y:1},{x:4,y:0},{x:5,y:5}]},{id:29,chapter:3,index:5,seed:3000032,width:6,height:7,rows:[`......`,`......`,`...m..`,`....op`,`......`,`......`,`......`],wolves:[],dog:{x:2,y:3},sheep:[{id:0,kind:`white`,x:3,y:3}],minBarks:3,barkLimit:5,solution:[{x:3,y:4},{x:0,y:2},{x:5,y:0}]},{id:30,chapter:3,index:6,seed:3000063,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`.m...m.`,`.......`,`....op.`],wolves:[],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:5,solution:[{x:1,y:6},{x:0,y:4},{x:5,y:0}]},{id:31,chapter:3,index:7,seed:3301825,width:7,height:7,rows:[`.......`,`.......`,`..#....`,`pp.....`,`.......`,`..m....`,`.o.....`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`white`,x:0,y:4},{id:1,kind:`white`,x:1,y:5}],minBarks:3,barkLimit:5,solution:[{x:0,y:5},{x:2,y:6},{x:3,y:3}]},{id:32,chapter:3,index:8,seed:3301672,width:6,height:6,rows:[`..#...`,`.p....`,`.p...o`,`.m....`,`....#.`,`......`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`white`,x:4,y:2}],minBarks:4,barkLimit:6,solution:[{x:2,y:3},{x:4,y:1},{x:5,y:3},{x:1,y:4}]},{id:33,chapter:3,index:9,seed:3300886,width:7,height:7,rows:[`.......`,`.......`,`.ppm...`,`.......`,`.m.....`,`....#..`,`..o....`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:2,y:4},{id:1,kind:`white`,x:2,y:5}],minBarks:4,barkLimit:6,solution:[{x:3,y:4},{x:1,y:5},{x:3,y:6},{x:4,y:2}]},{id:34,chapter:3,index:10,seed:3301211,width:7,height:7,rows:[`.......`,`....#..`,`.....pp`,`.....o.`,`...#...`,`.......`,`.......`],wolves:[],dog:{x:3,y:6},sheep:[{id:0,kind:`white`,x:6,y:1},{id:1,kind:`white`,x:5,y:4}],minBarks:4,barkLimit:6,solution:[{x:6,y:0},{x:6,y:4},{x:4,y:5},{x:0,y:2}]},{id:35,chapter:3,index:11,seed:3300551,width:7,height:8,rows:[`.pp....`,`..o.m..`,`.......`,`.......`,`.......`,`.......`,`.....#.`,`.......`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`white`,x:1,y:5},{id:1,kind:`white`,x:2,y:6}],minBarks:4,barkLimit:6,solution:[{x:1,y:6},{x:4,y:7},{x:4,y:2},{x:5,y:0}]},{id:36,chapter:3,index:12,seed:3301594,width:7,height:8,rows:[`.......`,`.......`,`o......`,`.......`,`pp.....`,`.......`,`.......`,`.......`],wolves:[],dog:{x:6,y:6},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:3,y:4}],minBarks:4,barkLimit:6,solution:[{x:4,y:4},{x:1,y:0},{x:2,y:3},{x:0,y:0}]},{id:37,chapter:4,index:1,seed:4500014,width:5,height:5,rows:[`.....`,`.....`,`.p...`,`.p.#.`,`.....`],wolves:[],dog:{x:0,y:3},sheep:[{id:0,kind:`black`,x:2,y:1},{id:1,kind:`white`,x:2,y:3}],minBarks:4,barkLimit:6,solution:[{x:2,y:4},{x:3,y:2},{x:2,y:4},{x:0,y:3}]},{id:38,chapter:4,index:2,seed:4500081,width:5,height:6,rows:[`.....`,`.....`,`...m.`,`...m.`,`.....`,`..pp.`],wolves:[],dog:{x:4,y:4},sheep:[{id:0,kind:`white`,x:1,y:2},{id:1,kind:`black`,x:0,y:5}],minBarks:4,barkLimit:6,solution:[{x:4,y:5},{x:0,y:2},{x:3,y:0},{x:3,y:0}]},{id:39,chapter:4,index:3,seed:4500031,width:5,height:5,rows:[`..o..`,`.....`,`.pp..`,`...#.`,`.....`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`black`,x:3,y:0},{id:1,kind:`white`,x:1,y:1}],minBarks:4,barkLimit:6,solution:[{x:3,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:3}]},{id:40,chapter:4,index:4,seed:4001035,width:6,height:6,rows:[`......`,`p.....`,`pm....`,`......`,`......`,`......`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`black`,x:0,y:0},{id:1,kind:`white`,x:2,y:1}],minBarks:4,barkLimit:6,solution:[{x:0,y:3},{x:3,y:1},{x:1,y:0},{x:2,y:2}]},{id:41,chapter:4,index:5,seed:4001612,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`..o...`,`...p..`,`...p..`],wolves:[],dog:{x:3,y:4},sheep:[{id:0,kind:`black`,x:2,y:6},{id:1,kind:`white`,x:4,y:6}],minBarks:4,barkLimit:6,solution:[{x:5,y:6},{x:0,y:6},{x:1,y:4},{x:4,y:5}]},{id:42,chapter:4,index:6,seed:4001015,width:7,height:7,rows:[`.......`,`.......`,`....#..`,`....p..`,`....p..`,`.......`,`..#....`],wolves:[],dog:{x:3,y:5},sheep:[{id:0,kind:`black`,x:6,y:3},{id:1,kind:`black`,x:4,y:6}],minBarks:4,barkLimit:6,solution:[{x:0,y:3},{x:6,y:6},{x:5,y:3},{x:0,y:4}]},{id:43,chapter:4,index:7,seed:4300613,width:6,height:6,rows:[`......`,`......`,`....pp`,`...m.p`,`......`,`......`],wolves:[],dog:{x:4,y:1},sheep:[{id:0,kind:`white`,x:5,y:1},{id:1,kind:`white`,x:2,y:3},{id:2,kind:`black`,x:5,y:5}],minBarks:4,barkLimit:6,solution:[{x:5,y:0},{x:0,y:3},{x:0,y:3},{x:4,y:4}]},{id:44,chapter:4,index:8,seed:4300939,width:7,height:7,rows:[`.......`,`.......`,`.......`,`...po..`,`..pp...`,`.......`,`.......`],wolves:[],dog:{x:1,y:5},sheep:[{id:0,kind:`white`,x:2,y:2},{id:1,kind:`black`,x:5,y:3},{id:2,kind:`white`,x:5,y:4}],minBarks:4,barkLimit:6,solution:[{x:6,y:4},{x:5,y:0},{x:2,y:1},{x:3,y:5}]},{id:45,chapter:4,index:9,seed:4301027,width:6,height:6,rows:[`......`,`..pp..`,`.mp...`,`......`,`......`,`......`],wolves:[],dog:{x:0,y:1},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:4,y:1},{id:2,kind:`black`,x:1,y:3}],minBarks:5,barkLimit:7,solution:[{x:1,y:0},{x:0,y:2},{x:1,y:0},{x:1,y:0},{x:5,y:1}]},{id:46,chapter:4,index:10,seed:4301612,width:6,height:6,rows:[`......`,`...#..`,`......`,`...ppp`,`......`,`......`],wolves:[],dog:{x:3,y:5},sheep:[{id:0,kind:`black`,x:3,y:0},{id:1,kind:`white`,x:4,y:4},{id:2,kind:`white`,x:5,y:4}],minBarks:5,barkLimit:7,solution:[{x:5,y:5},{x:5,y:0},{x:4,y:5},{x:2,y:2},{x:3,y:4}]},{id:47,chapter:4,index:11,seed:4300783,width:7,height:7,rows:[`.......`,`.......`,`.......`,`.......`,`.......`,`..pp...`,`..p....`],wolves:[],dog:{x:1,y:4},sheep:[{id:0,kind:`black`,x:3,y:0},{id:1,kind:`white`,x:4,y:1},{id:2,kind:`white`,x:4,y:6}],minBarks:5,barkLimit:7,solution:[{x:4,y:0},{x:0,y:0},{x:5,y:6},{x:1,y:6},{x:5,y:5}]},{id:48,chapter:4,index:12,seed:4302450,width:7,height:7,rows:[`.......`,`..m....`,`pp.....`,`p......`,`.......`,`.......`,`.......`],wolves:[],dog:{x:4,y:0},sheep:[{id:0,kind:`black`,x:2,y:0},{id:1,kind:`white`,x:4,y:1},{id:2,kind:`white`,x:0,y:4}],minBarks:5,barkLimit:7,solution:[{x:5,y:1},{x:0,y:5},{x:3,y:1},{x:0,y:0},{x:1,y:3}]},{id:49,chapter:5,index:1,seed:5500004,width:6,height:6,rows:[`......`,`......`,`pp....`,`......`,`......`,`......`],wolves:[{x:0,y:0},{x:0,y:5}],dog:{x:5,y:0},sheep:[{id:0,kind:`white`,x:2,y:1},{id:1,kind:`white`,x:1,y:4}],minBarks:5,barkLimit:6,solution:[{x:3,y:1},{x:1,y:0},{x:1,y:5},{x:2,y:3},{x:0,y:4}]},{id:50,chapter:5,index:2,seed:5500088,width:5,height:6,rows:[`.....`,`.....`,`.....`,`..p..`,`..p..`,`.....`],wolves:[{x:0,y:1},{x:4,y:4}],dog:{x:0,y:5},sheep:[{id:0,kind:`black`,x:2,y:1},{id:1,kind:`white`,x:3,y:3}],minBarks:5,barkLimit:6,solution:[{x:4,y:3},{x:2,y:5},{x:0,y:2},{x:1,y:5},{x:3,y:4}]},{id:51,chapter:5,index:3,seed:5500161,width:6,height:6,rows:[`......`,`......`,`...p..`,`...p..`,`......`,`......`],wolves:[{x:0,y:1}],dog:{x:1,y:5},sheep:[{id:0,kind:`black`,x:0,y:3},{id:1,kind:`white`,x:2,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:5},{x:3,y:4},{x:1,y:5},{x:0,y:2},{x:4,y:3}]},{id:52,chapter:5,index:4,seed:5002010,width:7,height:7,rows:[`.......`,`......p`,`......p`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:4,y:0}],dog:{x:0,y:4},sheep:[{id:0,kind:`white`,x:4,y:2},{id:1,kind:`white`,x:4,y:4}],minBarks:5,barkLimit:6,solution:[{x:0,y:2},{x:4,y:5},{x:0,y:2},{x:5,y:3},{x:0,y:1}]},{id:53,chapter:5,index:5,seed:5001295,width:7,height:8,rows:[`pp.....`,`.......`,`.......`,`.......`,`.......`,`.......`,`.......`,`.......`],wolves:[{x:0,y:4}],dog:{x:2,y:0},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`white`,x:3,y:5}],minBarks:5,barkLimit:6,solution:[{x:3,y:6},{x:4,y:0},{x:1,y:4},{x:2,y:1},{x:0,y:2}]},{id:54,chapter:5,index:6,seed:5001149,width:8,height:8,rows:[`........`,`........`,`........`,`........`,`........`,`........`,`...pp...`,`..#.....`],wolves:[{x:5,y:4}],dog:{x:3,y:3},sheep:[{id:0,kind:`white`,x:2,y:3},{id:1,kind:`white`,x:3,y:4}],minBarks:5,barkLimit:6,solution:[{x:2,y:0},{x:0,y:6},{x:3,y:0},{x:0,y:5},{x:4,y:0}]},{id:55,chapter:5,index:7,seed:5304134,width:6,height:6,rows:[`...ppp`,`......`,`......`,`......`,`......`,`......`],wolves:[{x:1,y:1}],dog:{x:5,y:4},sheep:[{id:0,kind:`white`,x:5,y:3},{id:1,kind:`white`,x:1,y:4},{id:2,kind:`white`,x:4,y:4}],minBarks:6,barkLimit:7,solution:[{x:1,y:5},{x:0,y:3},{x:4,y:5},{x:5,y:4},{x:5,y:1},{x:3,y:2}]},{id:56,chapter:5,index:8,seed:5303497,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`......`,`...mpp`,`....p.`],wolves:[{x:2,y:3}],dog:{x:2,y:4},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`white`,x:5,y:2},{id:2,kind:`white`,x:4,y:3}],minBarks:6,barkLimit:7,solution:[{x:4,y:0},{x:5,y:0},{x:5,y:4},{x:3,y:0},{x:3,y:0},{x:0,y:6}]},{id:57,chapter:5,index:9,seed:5302106,width:7,height:7,rows:[`.......`,`.......`,`.....p.`,`...m.pp`,`.......`,`.......`,`.......`],wolves:[{x:3,y:1}],dog:{x:6,y:6},sheep:[{id:0,kind:`white`,x:1,y:3},{id:1,kind:`white`,x:3,y:4},{id:2,kind:`white`,x:5,y:4}],minBarks:6,barkLimit:7,solution:[{x:3,y:5},{x:0,y:3},{x:0,y:3},{x:4,y:4},{x:0,y:2},{x:6,y:5}]},{id:58,chapter:5,index:10,seed:5302951,width:6,height:6,rows:[`......`,`...p..`,`..pp..`,`......`,`...m..`,`......`],wolves:[{x:5,y:1}],dog:{x:1,y:3},sheep:[{id:0,kind:`black`,x:4,y:2},{id:1,kind:`white`,x:2,y:4},{id:2,kind:`white`,x:4,y:4}],minBarks:7,barkLimit:8,solution:[{x:2,y:5},{x:5,y:4},{x:3,y:5},{x:4,y:4},{x:0,y:3},{x:1,y:0},{x:4,y:1}]},{id:59,chapter:5,index:11,seed:5305304,width:6,height:7,rows:[`......`,`......`,`......`,`......`,`..p...`,`..pp..`,`......`],wolves:[{x:3,y:0}],dog:{x:1,y:2},sheep:[{id:0,kind:`white`,x:4,y:1},{id:1,kind:`black`,x:1,y:4},{id:2,kind:`white`,x:1,y:5}],minBarks:7,barkLimit:8,solution:[{x:0,y:5},{x:1,y:2},{x:5,y:3},{x:4,y:6},{x:4,y:0},{x:5,y:4},{x:0,y:5}]},{id:60,chapter:5,index:12,seed:5301432,width:7,height:7,rows:[`.......`,`......#`,`.......`,`.......`,`p......`,`p......`,`p......`],wolves:[{x:6,y:5}],dog:{x:0,y:1},sheep:[{id:0,kind:`white`,x:1,y:1},{id:1,kind:`white`,x:3,y:4},{id:2,kind:`white`,x:4,y:6}],minBarks:7,barkLimit:8,solution:[{x:0,y:1},{x:5,y:0},{x:1,y:4},{x:4,y:0},{x:6,y:4},{x:5,y:5},{x:5,y:6}]}]};function n(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function r(e,t){return e.t0+t/e.rate}function i(e,t){return Math.min(t*e.rate,e.ctx.sampleRate*.45)}function a(e,t,n){typeof n==`number`?t.value=i(e,n):(t.value=i(e,n[0][1]),n.forEach(([n,a],o)=>{o===0?t.setValueAtTime(i(e,a),r(e,n)):t.exponentialRampToValueAtTime(i(e,a),r(e,n))}))}function o(e,t,n){let i=n[0][1];t.value=i,n.forEach(([n,a],o)=>{let s=r(e,n);o===0?t.setValueAtTime(a,s):a>0&&a<i?t.exponentialRampToValueAtTime(a,s):t.linearRampToValueAtTime(a,s),i=a})}function s(e,t,n){let i=r(e,n);t.stop(i),e.sources.push(t),i>e.end&&(e.end=i)}function c(e,t,n,i,o){let c=e.ctx.createOscillator();return typeof t==`string`?c.type=t:c.setPeriodicWave(t),a(e,c.frequency,n),c.start(r(e,i)),s(e,c,o),c}function l(e,t,n){let i=_(e.ctx),a=e.ctx.createBufferSource();return a.buffer=i,a.loop=!0,a.start(r(e,t),e.rng()*i.duration*.9),s(e,a,n),a}function u(e,t){let n=e.ctx.createGain();return n.gain.value=t,n}function d(e,t){let n=e.ctx.createGain();return o(e,n.gain,t),n}function f(e,t,n,r=.7){let i=e.ctx.createBiquadFilter();return i.type=t,i.Q.value=r,a(e,i.frequency,n),i}function p(e,t,n,r,i,a){c(e,`sine`,n,i,a).connect(u(e,r)).connect(t)}function m(e,t){let{amp:n}=t,r=c(e,t.wave??`sine`,t.freq,n[0][0],n[n.length-1][0]);return r.connect(d(e,n)).connect(t.to??e.out),r}function h(e,t){let{amp:n}=t,r=l(e,n[0][0],n[n.length-1][0]);t.filter&&(r=r.connect(f(e,t.filter.type,t.filter.freq,t.filter.q))),r.connect(d(e,n)).connect(t.to??e.out)}var g=new WeakMap;function _(e){let t=g.get(e);if(!t){t=e.createBuffer(1,Math.round(e.sampleRate*1.5),e.sampleRate);let r=t.getChannelData(0),i=n(47660);for(let e=0;e<r.length;e++)r[e]=i()*2-1;g.set(e,t)}return t}var v=new WeakMap;function y(e){let t=v.get(e);if(!t){let n=new Float32Array(41),r=new Float32Array(41);for(let e=1;e<=40;e++)n[e]=2/(e*Math.PI)*Math.sin(e*Math.PI*.18);t=e.createPeriodicWave(n,r),v.set(e,t)}return t}var b=523.25,x=659.25,S=783.99,C=1046.5,w=1318.51,T=1567.98,E=1760,D=2093;function O(e,t,n,r,i,a,o=`sine`){m(e,{wave:o,freq:[[t,n],[t+i,r]],amp:[[t,0],[t+.002,a],[t+i,a*.001],[t+i+.004,0]]})}function k(e,t,n,r,i,a,o,s){h(e,{filter:{type:n,freq:r,q:i},amp:[[t,0],[t+a,s],[t+o,s*.001],[t+o+.004,0]]})}function A(e,t,n,r,i,a=`sine`){m(e,{wave:a,freq:n,amp:[[t,0],[t+.003,i],[t+r,i*.001],[t+r+.004,0]]}),m(e,{freq:n*3.01,amp:[[t,0],[t+.002,i*.2],[t+r*.35,i*2e-4],[t+r*.35+.004,0]]})}function j(e,t,n,r,i){m(e,{freq:n,amp:[[t,0],[t+.004,i],[t+r,i*.001],[t+r+.004,0]]}),m(e,{wave:`triangle`,freq:n*4,amp:[[t,0],[t+.001,i*.3],[t+.03,i*3e-4],[t+.034,0]]})}function M(e){O(e,0,700,360,.045,.8),k(e,0,`bandpass`,2800,.8,.001,.022,.6)}function N(e){m(e,{freq:[[0,420],[.05,640]],amp:[[0,0],[.006,.7],[.06,7e-4],[.066,0]]}),k(e,0,`highpass`,4e3,.7,.001,.014,.25)}function P(e){m(e,{wave:`triangle`,freq:[[0,520],[.1,240]],amp:[[0,0],[.004,.7],[.1,7e-4],[.106,0]]}),k(e,0,`lowpass`,1200,.7,.002,.03,.3)}function ee(e){h(e,{filter:{type:`bandpass`,freq:[[0,2600],[.095,800]],q:1.4},amp:[[0,0],[.088,.9],[.097,0]]}),O(e,.092,480,300,.035,.6)}function F(e){A(e,0,w,.085,.6),A(e,.045,E,.088,.7)}function te(e){A(e,0,C,.06,.5,`triangle`),A(e,.028,w,.06,.55,`triangle`),A(e,.056,T,.06,.6,`triangle`),A(e,.084,D,.05,.7,`triangle`),k(e,.084,`highpass`,6e3,.7,.002,.045,.15)}function ne(e){h(e,{filter:{type:`bandpass`,freq:[[0,500],[.1,2600]],q:1.6},amp:[[0,0],[.06,.8],[.11,8e-4],[.115,0]]}),m(e,{freq:[[0,200],[.09,520]],amp:[[0,0],[.01,.45],[.1,5e-4],[.105,0]]})}function re(e){O(e,0,180,55,.11,1),k(e,0,`lowpass`,900,.7,.001,.05,.7),k(e,0,`bandpass`,2200,1,5e-4,.01,.3)}function ie(e){let t=d(e,[[0,0],[.006,1],[.045,.75],[.115,.001],[.12,0]]);t.connect(f(e,`lowpass`,2400)).connect(e.out);let n=u(e,1);n.connect(f(e,`bandpass`,[[0,320],[.025,560],[.115,420]],3)).connect(t),n.connect(f(e,`bandpass`,[[0,750],[.025,1150],[.115,880]],4)).connect(u(e,.6)).connect(t),c(e,`sawtooth`,[[0,300],[.012,400],[.115,170]],0,.12).connect(n),l(e,0,.12).connect(u(e,.15)).connect(n),O(e,0,170,70,.07,.6),k(e,.085,`highpass`,2800,.7,.012,.04,.05)}function ae(e){m(e,{freq:[[0,850],[.035,1650],[.07,1400]],amp:[[0,0],[.004,.7],[.07,7e-4],[.075,0]]}),k(e,0,`highpass`,4500,.7,.001,.012,.3)}function oe(e){O(e,0,540,300,.042,.8,`triangle`),k(e,0,`bandpass`,3200,1.2,.001,.018,.45)}function I(e){O(e,0,300,180,.05,.8),k(e,0,`lowpass`,1600,.7,.001,.028,.45),O(e,.05,250,190,.035,.3)}function L(e){O(e,0,270,200,.07,.8,`triangle`),O(e,0,410,340,.045,.4),k(e,0,`bandpass`,850,2.2,.001,.03,.6)}function se(e){let t=d(e,[[0,0],[.012,1],[.09,.8],[.13,.001],[.135,0]]);t.connect(e.out);let n=u(e,.65);n.connect(t),p(e,n.gain,24,.35,0,.135);let r=c(e,y(e.ctx),[[0,330],[.03,370],[.135,300]],0,.135);p(e,r.detune,24,30,0,.135);for(let[t,i,a]of[[800,2.5,1],[1900,4,.7],[3100,5,.3]])r.connect(f(e,`bandpass`,t,i)).connect(u(e,a)).connect(n);r.connect(u(e,.12)).connect(n)}function ce(e){h(e,{filter:{type:`bandpass`,freq:[[0,1200],[.1,260]],q:5},amp:[[0,0],[.008,1],[.11,.001],[.115,0]]}),O(e,0,170,75,.08,.7),m(e,{freq:[[.095,260],[.125,480]],amp:[[.095,0],[.1,.35],[.13,4e-4],[.134,0]]})}function le(e){O(e,0,150,95,.045,.35),j(e,0,x,.075,.6),j(e,.05,b,.083,.7)}function ue(e){let t=u(e,.6);t.connect(e.out),p(e,t.gain,[[0,11],[.75,19]],.4,0,.8),p(e,m(e,{freq:[[0,1250],[.75,190]],amp:[[0,0],[.03,.8],[.5,.45],[.78,.001],[.79,0]],to:t}).detune,9,45,0,.79),h(e,{filter:{type:`bandpass`,freq:[[0,3200],[.75,700]],q:1.2},amp:[[0,0],[.05,.5],[.75,.001],[.76,0]],to:t}),O(e,.83,140,60,.07,.4),k(e,.83,`lowpass`,500,.7,.002,.05,.3)}function de(e){h(e,{filter:{type:`bandpass`,freq:[[0,500],[.24,2800],[.44,1100]],q:.9},amp:[[0,0],[.18,.9],[.34,.45],[.46,.001],[.47,0]]}),h(e,{filter:{type:`highpass`,freq:5e3},amp:[[0,0],[.2,.25],[.44,3e-4],[.45,0]]});for(let t=0;t<7;t++)k(e,.04+e.rng()*.36,`bandpass`,3500+e.rng()*3500,3,5e-4,.006+e.rng()*.006,.25+e.rng()*.3);O(e,.43,130,60,.08,.6),k(e,.43,`lowpass`,800,.7,.002,.07,.6)}function fe(e){h(e,{filter:{type:`bandpass`,freq:[[0,700],[.08,3400]],q:2},amp:[[0,0],[.06,.7],[.085,7e-4],[.09,0]]}),m(e,{freq:[[.075,420],[.105,760]],amp:[[.075,0],[.079,.6],[.115,6e-4],[.12,0]]}),k(e,.075,`bandpass`,3e3,1,5e-4,.012,.35)}function pe(e){O(e,0,130,46,.12,1),k(e,0,`lowpass`,1500,.7,5e-4,.06,.9),k(e,0,`bandpass`,3200,1,5e-4,.007,.45),m(e,{freq:88,amp:[[0,0],[.004,.3],[.125,3e-4],[.13,0]]})}function me(e){h(e,{filter:{type:`highpass`,freq:6e3},amp:[[0,0],[.01,.15],[.13,2e-4],[.134,0]]});for(let t=0;t<9;t++){let n=t===0?0:e.rng()*.1;if(k(e,n,`bandpass`,2500+e.rng()*5e3,4,5e-4,.008+e.rng()*.012,.3+e.rng()*.4),t%2==0){let t=1800+e.rng()*2400;O(e,n,t,t*.8,.02,.25)}}}function he(e){let t=(t,n,r,i)=>{m(e,{wave:`triangle`,freq:n,amp:[[t,0],[t+.004,i],[t+r,i*.001],[t+r+.004,0]]}),m(e,{freq:n*2,amp:[[t,0],[t+.003,i*.3],[t+r*.5,i*3e-4],[t+r*.5+.004,0]]}),k(e,t,`bandpass`,3e3,1,5e-4,.008,i*.3)};[b,x,S,C].forEach((e,n)=>t(n*.085,e,.16,.6)),[C,w,T].forEach(e=>t(.36,e,.7,.4));for(let t=0;t<6;t++)k(e,.38+e.rng()*.4,`bandpass`,5e3+e.rng()*3e3,5,5e-4,.015,.12)}function ge(e){let t=[[0,293.66,.19],[.21,277.18,.19],[.42,261.63,.19],[.63,246.94,.55]],n=y(e.ctx);t.forEach(([r,i,a],o)=>{let s=o===t.length-1,l=d(e,[[r,0],[r+.015,.9],[r+a*.7,.65],[r+a,.001],[r+a+.005,0]]);l.connect(e.out);let m=c(e,n,s?[[r,i],[r+.2,i],[r+a,i*.8]]:i,r,r+a+.005);s&&p(e,m.detune,6.5,40,r+.1,r+a+.005),m.connect(f(e,`bandpass`,[[r,450],[r+a*.35,1500],[r+a,550]],2.2)).connect(l),m.connect(u(e,.15)).connect(l)})}var _e={tap:{level:.315,jitter:30,priority:1,length:.05,build:M},preview:{level:.286,jitter:30,priority:0,length:.07,build:N},cancel:{level:.304,jitter:30,priority:1,length:.11,build:P},undo:{level:.461,jitter:30,priority:1,length:.135,build:ee},hint:{level:.298,jitter:15,priority:1,length:.14,build:F},"ad-reward":{level:.483,jitter:15,priority:1,length:.14,build:te},leap:{level:.419,jitter:40,priority:1,length:.12,build:ne},land:{level:.265,jitter:40,priority:1,length:.12,build:re},woof:{level:.468,jitter:50,priority:2,length:.13,build:ie},startle:{level:.203,jitter:80,priority:0,length:.08,build:ae},hop:{level:.209,jitter:70,priority:0,length:.05,build:oe},stop:{level:.191,jitter:60,priority:0,length:.09,build:I},bump:{level:.252,jitter:60,priority:1,length:.08,build:L},baa:{level:.536,jitter:100,priority:1,length:.14,build:se},mud:{level:.444,jitter:60,priority:1,length:.14,build:ce},penned:{level:.476,jitter:20,priority:1,length:.14,build:le},fall:{level:.333,jitter:40,priority:2,length:.91,build:ue},"page-turn":{level:.407,jitter:50,priority:2,length:.52,build:de},"fold-up":{level:.429,jitter:70,priority:1,length:.125,build:fe},stamp:{level:.358,jitter:40,priority:2,length:.135,build:pe},confetti:{level:.577,jitter:60,priority:1,length:.14,build:me},win:{level:.42,jitter:15,priority:2,length:1.07,build:he},lose:{level:.582,jitter:30,priority:2,length:1.19,build:ge}};Object.keys(_e);var ve=.25,ye=.04,be=.006,R=.005,xe=.25,z=.4,Se=25,B=-6.02;function Ce(e=4097){let t=new Float32Array(e);for(let n=0;n<e;n++)t[n]=Math.abs(n/(e-1)*2-1);return t}function V(e=4097){let t=new Float32Array(e);for(let n=0;n<e;n++){let r=(n/(e-1)*2-1)/xe;t[n]=r>.4?z/r-1:0}return t}var H=.7;H+.22000000000000008*Math.tanh(.30000000000000004/.22000000000000008);function we(e=4097){let t=new Float32Array(e),n=.22000000000000008;for(let r=0;r<e;r++){let i=r/(e-1)*2-1,a=Math.abs(i),o=a<=H?a:H+n*Math.tanh((a-H)/n);t[r]=Math.sign(i)*o}return t}function Te(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function Ee(e,t,n){return Math.min(n,Math.max(t,e))}function De(e,t={}){let n=t.rng??Math.random,r=e.createGain(),i=e.createDelay(.05);i.delayTime.value=R;let a=e.createGain();a.gain.value=1;let o=e.createWaveShaper();o.curve=we(),o.oversample=`none`,r.connect(i).connect(a).connect(o).connect(e.destination);let s=e.createGain();s.gain.value=xe;let c=e.createWaveShaper();c.curve=Ce();let l=e.createBiquadFilter();l.type=`lowpass`,l.frequency.value=Se,l.Q.value=B;let u=e.createWaveShaper();u.curve=V(),r.connect(s).connect(c).connect(l).connect(u).connect(a.gain);let d=new Map,f=[];function p(e){f=f.filter(t=>t.end+.05>e||(t.gain.disconnect(),!1))}function m(t,n){let r=Math.max(n,e.currentTime);t.gain.gain.setValueAtTime(t.level,r),t.gain.gain.linearRampToValueAtTime(0,r+be);for(let e of t.sources)e.stop(r+be);t.cut=!0,t.end=r+be}function h(e,t,n,r){let i=()=>f.filter(e=>!e.cut&&e.start<r&&e.end>n),a=(e,t)=>t.start<e.start?t:e,o=i().filter(t=>t.name===e);o.length>=6&&m(o.reduce(a),n);let s=i();if(s.length>=16){let e=s.reduce((e,t)=>t.priority<e.priority||t.priority===e.priority&&t.start<e.start?t:e);if(e.priority>t)return!1;m(e,n)}return!0}function g(t,i={}){let a=_e[t];if(!a)return;let o=e.currentTime;p(o);let s=o+Ee(Te(i.delay,0),0,10),c=2**((n()*2-1)*a.jitter/1200),l=Ee(Te(i.pitch,1),ve,4)*c,u=d.get(t),m=s+(u?u.duration:a.length)/l;if(!h(t,a.priority,s,m))return;let g=f.filter(e=>!e.cut&&e.name===t&&Math.abs(e.start-s)<ye).length,_=Ee(Te(i.gain,1),0,1)*(u?1:a.level)/Math.sqrt(1+g),v=e.createGain();v.gain.value=_,v.connect(r);let y={ctx:e,out:v,t0:s,rate:l,rng:n,sources:[],end:s};try{if(u){let t=e.createBufferSource();t.buffer=u,t.playbackRate.value=l,t.connect(v),t.start(s),y.sources.push(t),y.end=m}else a.build(y)}catch(e){for(let e of y.sources)try{e.stop()}catch{}throw v.disconnect(),e}f.push({name:t,priority:a.priority,start:s,end:y.end,level:_,gain:v,sources:y.sources,cut:!1})}function _(){let t=e.currentTime;for(let e of f)e.cut||m(e,t)}return{play:g,setSample(e,t){t?d.set(e,t):d.delete(e)},stopAll:_,voiceCount(){let t=e.currentTime;return f.filter(e=>!e.cut&&e.end>t).length},output:o,dispose(){_(),o.disconnect()}}}var Oe=500,ke=[`pointerdown`,`pointerup`,`touchend`,`keydown`];function Ae(){let e=globalThis;return e.AudioContext??e.webkitAudioContext??null}async function je(e){let t=await fetch(e);if(!t.ok)throw Error(`Bark audio: ${e} answered ${t.status}`);return t.arrayBuffer()}function Me(){return typeof performance<`u`?performance.now():Date.now()}function Ne(e,t){return new Promise((n,r)=>{e.decodeAudioData(t.slice(0),n,r)?.catch(()=>{})})}function Pe(){}function Fe(e={}){let t=e.contextConstructor??Ae,n=e.fetchBytes??je,r=e.now??Me,i=e.document===void 0?typeof document<`u`?document:null:e.document,a=!0,o=!1,s=null,c=null,l=-1/0,u=new Map,d=new Map;function f(){if(s&&a&&!o&&s.state!==`running`){l=r();try{s.resume().catch(Pe)}catch{}}}function p(){f()}function m(){if(i){for(let e of ke)i.addEventListener(e,p,{capture:!0,passive:!0});i.addEventListener(`visibilitychange`,p)}}function h(){if(i){for(let e of ke)i.removeEventListener(e,p,{capture:!0});i.removeEventListener(`visibilitychange`,p)}}function g(){let n=t();if(!n)return;let r=new n({latencyHint:`interactive`});try{c=De(r,{rng:e.random})}catch(e){throw r.close().catch(Pe),e}s=r,m();for(let[e,t]of u){let n=d.get(e);Ne(r,t).then(t=>{!o&&d.get(e)===n&&c?.setSample(e,t)},()=>console.warn(`Bark audio: the file for "${e}" could not be decoded; the synthesised sound stays.`))}u.clear(),e.onReady?.(r,c)}return{unlock(){if(!o)try{if(s||g(),!s)return;a?f():s.suspend().catch(Pe)}catch{}},play(e,t){try{if(!a||o||!s||!c||s.state!==`running`&&r()-l>Oe)return;c.play(e,t)}catch{}},setEnabled(e){if(a=!!e,s&&!o)try{a?f():(c?.stopAll(),s.suspend().catch(Pe))}catch{}},isEnabled(){return a},async useSample(e,r){if(o||!(e in _e)||!t())return;let i=(d.get(e)??0)+1;d.set(e,i);let a=await n(r);if(!(o||d.get(e)!==i)){if(s&&c){let t=await Ne(s,a);!o&&d.get(e)===i&&c.setSample(e,t)}else u.set(e,a)}},dispose(){if(!o){o=!0,h(),u.clear();try{c?.dispose(),s?.close().catch(Pe)}catch{}c=null,s=null}}}}function Ie(){return Fe()}var Le=[0,1,0,-1],Re=[-1,0,1,0],ze=[`up`,`right`,`down`,`left`];function Be(e){return e===`.`?0:e===`m`?1:e===`p`?2:e===`o`?3:e===`#`?4:-1}function Ve(e,t,n,r){return n>=0&&n<e&&r>=0&&r<t}function He(e,t){return Math.floor(t.x)!==t.x||Math.floor(t.y)!==t.y?!1:Ve(e.width,e.height,t.x,t.y)}function Ue(e,t){let n=t%e.width;return{x:n,y:(t-n)/e.width}}function We(e,t,n,r){let i=e*t,a=[],o=[],s=[];for(let e=0;e<i;e++)a.push(n[e]),o.push(!1),s.push(!1);for(let n=0;n<r.length;n++){let i=r[n],a=i%e,c=(i-a)/e;o[i]=!0;for(let n=0;n<4;n++){let r=a+Le[n],i=c+Re[n];Ve(e,t,r,i)&&(s[i*e+r]=!0)}}return{width:e,height:t,cellCount:i,tiles:a,wolf:o,fear:s}}function Ge(e){let t=e.width,n=e.height;if(e.rows.length!==n)throw Error(`Level `+e.id+`: expected `+n+` rows, found `+e.rows.length);let r=[];for(let i=0;i<n;i++){let n=e.rows[i];if(n.length!==t)throw Error(`Level `+e.id+`: row `+i+` is not `+t+` tiles wide`);for(let a=0;a<t;a++){let t=Be(n.charAt(a));if(t<0)throw Error(`Level `+e.id+`: unknown tile "`+n.charAt(a)+`" at `+a+`,`+i);r.push(t)}}let i=[];for(let r=0;r<e.wolves.length;r++){let a=e.wolves[r];if(!Ve(t,n,a.x,a.y))throw Error(`Level `+e.id+`: wolf `+r+` is off the board`);i.push(a.y*t+a.x)}return We(t,n,r,i)}function Ke(){return{sheep:[],dir:[],distance:[]}}function qe(e,t,n,r){let i=Le[n],a=Re[n],o=t%e.width,s=(t-o)/e.width;for(o+=i,s+=a;o>=0&&o<e.width&&s>=0&&s<e.height;){let t=s*e.width+o;if(e.tiles[t]===4)return 1;if(e.wolf[t])return 2;r.push(t),o+=i,s+=a}return 0}function Je(e,t,n,r,i,a){return e===r?t===i?n<a:e===0?t>i:t<i:e===0}function Ye(e,t,n,r,i,a){let o=0,s=t%e.width,c=(t-s)/e.width;for(let t=0;t<4;t++){let l=Le[t],u=Re[t],d=s+l,f=c+u,p=1;for(;d>=0&&d<e.width&&f>=0&&f<e.height;){let s=f*e.width+d;if(e.tiles[s]===4||e.wolf[s])break;let c=i[s];if(c>=0&&r[c]===0){let e=o;for(;e>0&&Je(n[c],p,t,n[a.sheep[e-1]],a.distance[e-1],a.dir[e-1]);)a.sheep[e]=a.sheep[e-1],a.dir[e]=a.dir[e-1],a.distance[e]=a.distance[e-1],e--;a.sheep[e]=c,a.dir[e]=t,a.distance[e]=p,o++}d+=l,f+=u,p++}}return o}function Xe(e,t,n,r,i,a,o,s){let c=Ye(e,t,r,i,a,o),l=e.width,u=e.height,d=0;for(let f=0;f<c;f++){let c=o.sheep[f],p=o.dir[f],m=r[c]===0?p:(p+2)%4,h=Le[m],g=Re[m],_=n[c],v=_%l,y=(_-v)/l,b=-1,x=-1,S=s===null?null:[];for(a[_]=-1;b<0;){let n=v+h,r=y+g;if(n<0||n>=l||r<0||r>=u)b=0;else{let o=r*l+n,s=e.tiles[o];s===4?b=1:e.wolf[o]?b=2:o===t?b=4:a[o]>=0?(b=5,x=a[o]):e.fear[o]?b=3:(v=n,y=r,S!==null&&S.push(o),s===3?(b=8,i[c]=2,d++):s===2?(b=7,i[c]=1):s===1&&(b=6))}}let C=y*l+v;n[c]=C,i[c]!==2&&(a[C]=c),s!==null&&S!==null&&s.push({sheep:c,dir:m,distance:o.distance[f],from:_,path:S,stop:b,blocker:x})}return d}function Ze(e){return e===`white`?0:1}function Qe(e){return e===`penned`?1:e===`fallen`?2:0}function $e(e){return e===1?`penned`:e===2?`fallen`:`free`}function et(e){return e===0?`edge`:e===1?`rock`:e===2?`wolf`:e===3?`wolf-fear`:e===4?`dog`:e===5?`sheep`:e===6?`mud`:e===7?`pen`:`hole`}function tt(e){return e===1?`rock`:e===2?`wolf`:`edge`}function nt(e,t){let n=[];for(let t=0;t<e.cellCount;t++)n.push(-1);for(let r=0;r<t.sheep.length;r++){let i=t.sheep[r];i.status!==`fallen`&&(n[i.y*e.width+i.x]=r)}return n}function rt(e,t,n){let r=e.tiles[n];return r!==0&&r!==1||e.wolf[n]?!1:t[n]<0}function it(e,t){let n=[];for(let r=0;r<4;r++){let i=[],a=qe(e,t,r,i),o=[];for(let t=0;t<i.length;t++)o.push(Ue(e,i[t]));n.push({dir:ze[r],cells:o,stoppedBy:tt(a)})}return n}function at(e){let t=Ge(e),n=[],r=0;for(let i=0;i<e.sheep.length;i++){let a=e.sheep[i],o=t.tiles[a.y*t.width+a.x]===2;o&&r++,n.push({id:a.id,kind:a.kind,x:a.x,y:a.y,status:o?`penned`:`free`})}let i=`playing`;return r===e.sheep.length?i=`won`:e.barkLimit<=0&&(i=`lost-barks`),{dog:{x:e.dog.x,y:e.dog.y},sheep:n,barksUsed:0,barkLimit:e.barkLimit,outcome:i}}function ot(e,t,n){if(t.outcome!==`playing`||!He(e,n))return!1;let r=Ge(e);return rt(r,nt(r,t),n.y*r.width+n.x)}function st(e,t){let n=[];if(t.outcome!==`playing`)return n;let r=Ge(e),i=nt(r,t);for(let e=0;e<r.cellCount;e++)rt(r,i,e)&&n.push(Ue(r,e));return n}function ct(e,t,n){if(t.outcome!==`playing`||!He(e,n))return{legal:!1,rays:[],reacting:[]};let r=Ge(e),i=nt(r,t),a=n.y*r.width+n.x;if(!rt(r,i,a))return{legal:!1,rays:[],reacting:[]};let o=[],s=[];for(let e=0;e<t.sheep.length;e++)o.push(Ze(t.sheep[e].kind)),s.push(Qe(t.sheep[e].status));let c=Ke(),l=Ye(r,a,o,s,i,c),u=[];for(let e=0;e<l;e++)u.push(t.sheep[c.sheep[e]].id);return{legal:!0,rays:it(r,a),reacting:u}}function lt(e,t,n){if(t.outcome!==`playing`)throw Error(`The level is over (`+t.outcome+`): no more barks`);if(!He(e,n))throw Error(`The dog cannot jump to `+n.x+`,`+n.y+`: outside the board`);let r=Ge(e),i=nt(r,t),a=n.y*r.width+n.x;if(!rt(r,i,a))throw Error(`The dog cannot jump to `+n.x+`,`+n.y);let o=[],s=[],c=[];for(let e=0;e<t.sheep.length;e++){let n=t.sheep[e];o.push(n.y*r.width+n.x),s.push(Ze(n.kind)),c.push(Qe(n.status))}let l=[],u=Xe(r,a,o,s,c,i,Ke(),l),d=[],f=0;for(let e=0;e<t.sheep.length;e++){let n=t.sheep[e],i=Ue(r,o[e]);c[e]===1&&f++,d.push({id:n.id,kind:n.kind,x:i.x,y:i.y,status:$e(c[e])})}let p=t.barksUsed+1,m=`playing`;u>0?m=`lost-fell`:f===d.length?m=`won`:p>=t.barkLimit&&(m=`lost-barks`);let h={x:n.x,y:n.y},g=[];g.push({type:`dog-jump`,from:{x:t.dog.x,y:t.dog.y},to:h}),g.push({type:`bark`,at:h,rays:it(r,a)});for(let e=0;e<l.length;e++){let n=l[e],i=[];for(let e=0;e<n.path.length;e++)i.push(Ue(r,n.path[e]));let a=t.sheep[n.sheep];n.blocker>=0?g.push({type:`sheep-run`,id:a.id,kind:a.kind,dir:ze[n.dir],distance:n.distance,from:Ue(r,n.from),path:i,stop:et(n.stop),blockerId:t.sheep[n.blocker].id}):g.push({type:`sheep-run`,id:a.id,kind:a.kind,dir:ze[n.dir],distance:n.distance,from:Ue(r,n.from),path:i,stop:et(n.stop)})}return m!==`playing`&&g.push({type:`outcome`,outcome:m}),{state:{dog:h,sheep:d,barksUsed:p,barkLimit:t.barkLimit,outcome:m},events:g}}function ut(e){return{dog:e.dog,sheep:e.sheep,barksUsed:e.barksUsed,barkLimit:e.barkLimit+1,outcome:e.outcome===`lost-barks`?`playing`:e.outcome}}function dt(e,t){return t<=e.minBarks?3:t===e.minBarks+1?2:1}var ft=1e6;function pt(e,t,n){for(let r=1;r<n;r++){let n=e[r],i=t[r],a=r;for(;a>0&&(t[a-1]>i||t[a-1]===i&&e[a-1]>n);)e[a]=e[a-1],t[a]=t[a-1],a--;e[a]=n,t[a]=i}}function mt(e,t,n,r){let i=t.length,a=e.cellCount,o=1;for(let e=0;e<i;e++)o*=a;if(o>9007199254740991)throw Error(`Too many sheep for this board size: the solver cannot number its states`);let s=[],c=[];for(let e=0;e<i;e++)s.push(n[e]),c.push(t[e]);pt(c,s,i);let l=[],u=[],d=[],f=[],p=[],m=[],h=new Map,g=[],_=[];for(let e=0;e<a;e++)g.push(-1),_.push(-1);let v=[],y=[],b=[],x=[];for(let e=0;e<i;e++)v.push(0),y.push(0),b.push(0),x.push(0);let S=Ke(),C=0,w=0;for(let t=0;t<i;t++)C=C*a+c[t],e.tiles[c[t]]===2&&w++,l.push(c[t]);u.push(0),d.push(-1),f.push(-1),p.push(1),m.push(-1),h.set(C,0);let T=-1,E=-1,D=[];w===i&&(T=0,E=0,D.push(0));let O=!1,k=0,A=T===0&&!r.exhaustive;for(;!A&&k<u.length;){let t=k;k++;let n=u[t];if(T>=0&&n>=T&&!r.exhaustive)break;if(r.maxDepth>0&&n>=r.maxDepth){O=!0;break}let o=0;for(let n=0;n<i;n++){let r=l[t*i+n];v[n]=r,e.tiles[r]===2?(y[n]=1,o++):y[n]=0,g[r]=n}if(o<i){for(let n=0;n<i;n++){if(y[n]!==0)continue;let r=v[n]%e.width,i=(v[n]-r)/e.width;for(let n=0;n<4;n++){let a=Le[n],o=Re[n],s=r+a,c=i+o;for(;s>=0&&s<e.width&&c>=0&&c<e.height;){let n=c*e.width+s,r=e.tiles[n];if(r===4||e.wolf[n])break;(r===0||r===1)&&g[n]<0&&(_[n]=t),s+=a,c+=o}}}for(let o=0;o<a&&!A;o++){if(_[o]!==t)continue;for(let e=0;e<i;e++)b[e]=v[e],x[e]=y[e];let c=Xe(e,o,b,s,x,g,S,null);for(let e=0;e<i;e++)g[b[e]]===e&&(g[b[e]]=-1);for(let e=0;e<i;e++)g[v[e]]=e;if(c>0)continue;let C=0;for(let e=0;e<i;e++)x[e]===1&&C++;pt(b,s,i);let w=0;for(let e=0;e<i;e++)w=w*a+b[e];let k=h.get(w);if(k===void 0){let e=u.length;for(let e=0;e<i;e++)l.push(b[e]);u.push(n+1),d.push(t),f.push(o),p.push(p[t]),m.push(t),h.set(w,e),C===i&&(T<0&&(T=n+1,E=e),n+1===T&&D.push(e),!r.countSolutions&&!r.exhaustive&&(A=!0)),r.maxStates>0&&u.length>=r.maxStates&&!A&&(O=!0,A=!0)}else if(u[k]===n+1&&m[k]!==t){m[k]=t;let e=p[k]+p[t];e>1e6&&(e=ft),p[k]=e}}}for(let e=0;e<i;e++)g[v[e]]=-1}let j=[],M=0;if(E>=0){let e=E;for(;d[e]>=0;)j.push(f[e]),e=d[e];j.reverse();for(let e=0;e<D.length;e++)M+=p[D[e]],M>1e6&&(M=ft)}return{minBarks:T,solution:j,solutionCount:M,states:u.length,gaveUp:O}}function ht(e,t,n){let r=Ge(e),i=[],a=[];for(let e=0;e<t.sheep.length;e++){let n=t.sheep[e];if(n.status===`fallen`)return null;i.push(n.y*r.width+n.x),a.push(Ze(n.kind))}return mt(r,i,a,n)}var gt={countSolutions:!1,exhaustive:!1,maxStates:0,maxDepth:0};function _t(e,t){let n=ht(e,t===void 0?at(e):t,gt);if(n===null||n.minBarks<0)return null;let r=Ge(e),i=[];for(let e=0;e<n.solution.length;e++)i.push(Ue(r,n.solution[e]));return{minBarks:n.minBarks,solution:i}}var vt=at,yt=ot,bt=st,xt=ct,St=lt,Ct=ut,wt=dt,Tt=_t,Et=1e3,Dt=1001,Ot=1002,kt=1003,At=1004,jt=1005,Mt=1006,Nt=1007,Pt=1008,Ft=1009,It=1010,Lt=1011,Rt=1012,zt=1013,Bt=1014,Vt=1015,Ht=1016,Ut=1017,Wt=1018,Gt=1020,Kt=35902,qt=35899,Jt=1021,Yt=1022,Xt=1023,Zt=1026,Qt=1027,$t=1028,en=1029,tn=1030,nn=1031,rn=1033,an=33776,on=33777,sn=33778,cn=33779,ln=35840,un=35841,dn=35842,fn=35843,pn=36196,mn=37492,hn=37496,gn=37488,_n=37489,vn=37490,yn=37491,bn=37808,xn=37809,Sn=37810,Cn=37811,wn=37812,Tn=37813,En=37814,Dn=37815,On=37816,kn=37817,An=37818,jn=37819,Mn=37820,Nn=37821,Pn=36492,Fn=36494,In=36495,Ln=36283,Rn=36284,zn=36285,Bn=36286,Vn=2300,Hn=2301,Un=2302,Wn=2303,Gn=2400,Kn=2401,qn=2402,Jn=3200,Yn=`srgb`,Xn=`srgb-linear`,Zn=`linear`,Qn=`srgb`,$n=7680,er=35044,tr=35048,nr=2e3;function rr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ir(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ar(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function or(){let e=ar(`canvas`);return e.style.display=`block`,e}var sr={};function cr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function lr(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=lr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=lr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ur(...e){let t=e.join(` `);t in sr||(sr[t]=!0,U(...e))}function dr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var fr={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},mr=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),hr=Math.PI/180,gr=180/Math.PI;function _r(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mr[e&255]+mr[e>>8&255]+mr[e>>16&255]+mr[e>>24&255]+`-`+mr[t&255]+mr[t>>8&255]+`-`+mr[t>>16&15|64]+mr[t>>24&255]+`-`+mr[n&63|128]+mr[n>>8&255]+`-`+mr[n>>16&255]+mr[n>>24&255]+mr[r&255]+mr[r>>8&255]+mr[r>>16&255]+mr[r>>24&255]).toLowerCase()}function vr(e,t,n){return Math.max(t,Math.min(n,e))}function yr(e,t){return(e%t+t)%t}function br(e,t,n){return(1-n)*e+n*t}function xr(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Sr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cr(e,t){if(t.constructor===Float32Array)return e;let n=Sr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function wr(e,t){if(t.constructor===Float32Array)return e;let n=Sr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var G=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vr(this.x,e.x,t.x),this.y=vr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vr(this.x,e,t),this.y=vr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vr(this.x,e.x,t.x),this.y=vr(this.y,e.y,t.y),this.z=vr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vr(this.x,e,t),this.y=vr(this.y,e,t),this.z=vr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Er=new K,Dr=new Tr,q=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ur(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Or.makeScale(e,t)),this}rotate(e){return ur(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Or.makeRotation(-e)),this}translate(e,t){return ur(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Or=new q,kr=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ar=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jr(){let e={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Mr(e.r),e.g=Mr(e.g),e.b=Mr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Nr(e.r),e.g=Nr(e.g),e.b=Nr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Zn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xn]:{primaries:t,whitePoint:r,transfer:Zn,toXYZ:kr,fromXYZ:Ar,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:r,transfer:Qn,toXYZ:kr,fromXYZ:Ar,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),e}var J=jr();function Mr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Nr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Pr,Fr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=ar(`canvas`)),Pr.width=e.width,Pr.height=e.height;let t=Pr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ar(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Mr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Mr(t[e]/255)*255):t[e]=Mr(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ir=0,Lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Rr(r[t].image)):e.push(Rr(r[t]))}else e=Rr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Rr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Fr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var zr=0,Br=new K,Vr=class e extends pr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Dt,i=Dt,a=Mt,o=Pt,s=Xt,c=Ft,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=_r(),this.name=``,this.source=new Lr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Br).x}get height(){return this.source.getSize(Br).y}get depth(){return this.source.getSize(Br).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Et:e.x-=Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Ot:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Et:e.y-=Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Ot:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vr.DEFAULT_IMAGE=null,Vr.DEFAULT_MAPPING=300,Vr.DEFAULT_ANISOTROPY=1;var Hr=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vr(this.x,e.x,t.x),this.y=vr(this.y,e.y,t.y),this.z=vr(this.z,e.z,t.z),this.w=vr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vr(this.x,e,t),this.y=vr(this.y,e,t),this.z=vr(this.z,e,t),this.w=vr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ur=class extends pr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Hr(0,0,e,t),this.scissorTest=!1,this.viewport=new Hr(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Vr({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wr=class extends Ur{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gr=class extends Vr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Kr=class extends Vr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},qr=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),i=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xr,e,Zr)}lookAt(e,t,n){let r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Qr.crossVectors(n,ei),Qr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Qr.crossVectors(n,ei)),Qr.normalize(),$r.crossVectors(ei,Qr),r[0]=Qr.x,r[4]=$r.x,r[8]=ei.x,r[1]=Qr.y,r[5]=$r.y,r[9]=ei.y,r[2]=Qr.z,r[6]=$r.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Jr.set(r[0],r[1],r[2]).length(),o=Jr.set(r[4],r[5],r[6]).length(),s=Jr.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Yr.copy(this);let c=1/a,l=1/o,u=1/s;return Yr.elements[0]*=c,Yr.elements[1]*=c,Yr.elements[2]*=c,Yr.elements[4]*=l,Yr.elements[5]*=l,Yr.elements[6]*=l,Yr.elements[8]*=u,Yr.elements[9]*=u,Yr.elements[10]*=u,t.setFromRotationMatrix(Yr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=nr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=nr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jr=new K,Yr=new qr,Xr=new K(0,0,0),Zr=new K(1,1,1),Qr=new K,$r=new K,ei=new K,ti=new qr,ni=new Tr,ri=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(vr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-vr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(vr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-vr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(vr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-vr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ti.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ti,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ni.setFromEuler(this),this.setFromQuaternion(ni,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER=`XYZ`;var ii=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ai=0,oi=new K,si=new Tr,ci=new qr,li=new K,ui=new K,di=new K,fi=new Tr,pi=new K(1,0,0),mi=new K(0,1,0),hi=new K(0,0,1),gi={type:`added`},_i={type:`removed`},vi={type:`childadded`,child:null},yi={type:`childremoved`,child:null},bi=class e extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ai++}),this.uuid=_r(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new ri,r=new Tr,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qr},normalMatrix:{value:new q}}),this.matrix=new qr,this.matrixWorld=new qr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ii,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(pi,e)}rotateY(e){return this.rotateOnAxis(mi,e)}rotateZ(e){return this.rotateOnAxis(hi,e)}translateOnAxis(e,t){return oi.copy(e).applyQuaternion(this.quaternion),this.position.add(oi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pi,e)}translateY(e){return this.translateOnAxis(mi,e)}translateZ(e){return this.translateOnAxis(hi,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?li.copy(e):li.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ui,li,this.up):ci.lookAt(li,ui,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),si.setFromRotationMatrix(ci),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gi),vi.child=e,this.dispatchEvent(vi),vi.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_i),yi.child=e,this.dispatchEvent(yi),yi.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gi),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,e,di),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,fi,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};bi.DEFAULT_UP=new K(0,1,0),bi.DEFAULT_MATRIX_AUTO_UPDATE=!0,bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=class extends bi{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Si={type:`move`},Ci=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Si)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ei={h:0,s:0,l:0};function Di(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Oi=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=n,J.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=J.workingColorSpace){if(e=yr(e,1),t=vr(t,0,1),n=vr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Di(i,r,e+1/3),this.g=Di(i,r,e),this.b=Di(i,r,e-1/3)}return J.colorSpaceToWorking(this,r),this}setStyle(e,t=Yn){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){let n=wi[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return J.workingToColorSpace(ki.copy(this),e),Math.round(vr(ki.r*255,0,255))*65536+Math.round(vr(ki.g*255,0,255))*256+Math.round(vr(ki.b*255,0,255))}getHexString(e=Yn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){J.workingToColorSpace(ki.copy(this),t);let n=ki.r,r=ki.g,i=ki.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=J.workingColorSpace){return J.workingToColorSpace(ki.copy(this),t),e.r=ki.r,e.g=ki.g,e.b=ki.b,e}getStyle(e=Yn){J.workingToColorSpace(ki.copy(this),e);let t=ki.r,n=ki.g,r=ki.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Ei);let n=br(Ti.h,Ei.h,t),r=br(Ti.s,Ei.s,t),i=br(Ti.l,Ei.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ki=new Oi;Oi.NAMES=wi;var Ai=class extends bi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ji=new K,Mi=new K,Ni=new K,Pi=new K,Fi=new K,Ii=new K,Li=new K,Ri=new K,zi=new K,Bi=new K,Vi=new Hr,Hi=new Hr,Ui=new Hr,Wi=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ji.subVectors(e,t),r.cross(ji);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ji.subVectors(r,t),Mi.subVectors(n,t),Ni.subVectors(e,t);let a=ji.dot(ji),o=ji.dot(Mi),s=ji.dot(Ni),c=Mi.dot(Mi),l=Mi.dot(Ni),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pi)!==null&&Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Pi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Pi.x),s.addScaledVector(a,Pi.y),s.addScaledVector(o,Pi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Vi.setScalar(0),Hi.setScalar(0),Ui.setScalar(0),Vi.fromBufferAttribute(e,t),Hi.fromBufferAttribute(e,n),Ui.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vi,i.x),a.addScaledVector(Hi,i.y),a.addScaledVector(Ui,i.z),a}static isFrontFacing(e,t,n,r){return ji.subVectors(n,t),Mi.subVectors(e,t),ji.cross(Mi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ji.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Fi.subVectors(r,n),Ii.subVectors(i,n),Ri.subVectors(e,n);let s=Fi.dot(Ri),c=Ii.dot(Ri);if(s<=0&&c<=0)return t.copy(n);zi.subVectors(e,r);let l=Fi.dot(zi),u=Ii.dot(zi);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Fi,a);Bi.subVectors(e,i);let f=Fi.dot(Bi),p=Ii.dot(Bi);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ii,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Li.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Li,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Fi,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gi=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,qi):qi.fromBufferAttribute(r,t),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),na.subVectors(this.max,ta),Yi.subVectors(e.a,ta),Xi.subVectors(e.b,ta),Zi.subVectors(e.c,ta),Qi.subVectors(Xi,Yi),$i.subVectors(Zi,Xi),ea.subVectors(Yi,Zi);let t=[0,-Qi.z,Qi.y,0,-$i.z,$i.y,0,-ea.z,ea.y,Qi.z,0,-Qi.x,$i.z,0,-$i.x,ea.z,0,-ea.x,-Qi.y,Qi.x,0,-$i.y,$i.x,0,-ea.y,ea.x,0];return!aa(t,Yi,Xi,Zi,na)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,Yi,Xi,Zi,na))?!1:(ra.crossVectors(Qi,$i),t=[ra.x,ra.y,ra.z],aa(t,Yi,Xi,Zi,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new K,new K,new K,new K,new K,new K,new K,new K],qi=new K,Ji=new Gi,Yi=new K,Xi=new K,Zi=new K,Qi=new K,$i=new K,ea=new K,ta=new K,na=new K,ra=new K,ia=new K;function aa(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ia.fromArray(e,a);let o=i.x*Math.abs(ia.x)+i.y*Math.abs(ia.y)+i.z*Math.abs(ia.z),s=t.dot(ia),c=n.dot(ia),l=r.dot(ia);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var oa=new K,sa=new G,ca=0,la=class extends pr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ca++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=er,this.updateRanges=[],this.gpuType=Vt,this.version=0,this._normalizationScale=e===void 0?void 0:Sr(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXYZ(t,oa.x,oa.y,oa.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix4(e),this.setXYZ(t,oa.x,oa.y,oa.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyNormalMatrix(e),this.setXYZ(t,oa.x,oa.y,oa.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.transformDirection(e),this.setXYZ(t,oa.x,oa.y,oa.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Cr(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?wr(e,this.array):Math.round(e*t)}},ua=class extends la{constructor(e,t,n){super(new Uint16Array(e),t,n)}},da=class extends la{constructor(e,t,n){super(new Uint32Array(e),t,n)}},fa=class extends la{constructor(e,t,n){super(new Float32Array(e),t,n)}},pa=new Gi,ma=new K,ha=new K,ga=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?pa.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ma,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(ha)),this.expandByPoint(ma.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_a=0,va=new qr,ya=new bi,ba=new K,xa=new Gi,Sa=new Gi,Ca=new K,wa=class e extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_a++}),this.uuid=_r(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(rr(e)?da:ua)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return va.makeRotationFromQuaternion(e),this.applyMatrix4(va),this}rotateX(e){return va.makeRotationX(e),this.applyMatrix4(va),this}rotateY(e){return va.makeRotationY(e),this.applyMatrix4(va),this}rotateZ(e){return va.makeRotationZ(e),this.applyMatrix4(va),this}translate(e,t,n){return va.makeTranslation(e,t,n),this.applyMatrix4(va),this}scale(e,t,n){return va.makeScale(e,t,n),this.applyMatrix4(va),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ba).negate(),this.translate(ba.x,ba.y,ba.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new fa(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xa.setFromBufferAttribute(n),this.morphTargetsRelative?(Ca.addVectors(this.boundingBox.min,xa.min),this.boundingBox.expandByPoint(Ca),Ca.addVectors(this.boundingBox.max,xa.max),this.boundingBox.expandByPoint(Ca)):(this.boundingBox.expandByPoint(xa.min),this.boundingBox.expandByPoint(xa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(xa.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Sa.setFromBufferAttribute(n),this.morphTargetsRelative?(Ca.addVectors(xa.min,Sa.min),xa.expandByPoint(Ca),Ca.addVectors(xa.max,Sa.max),xa.expandByPoint(Ca)):(xa.expandByPoint(Sa.min),xa.expandByPoint(Sa.max))}xa.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ca.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ca));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ca.fromBufferAttribute(a,t),o&&(ba.fromBufferAttribute(e,t),Ca.add(ba)),r=Math.max(r,n.distanceToSquared(Ca))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new la(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new la(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ca.fromBufferAttribute(e,t),Ca.normalize(),e.setXYZ(t,Ca.x,Ca.y,Ca.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new la(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ta=new K,Ea=new K,Da=new q,Oa=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ta.subVectors(n,t).cross(Ea.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ta),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Da.getNormalMatrix(e),r=this.coplanarPoint(Ta).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ka=0,Aa=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ka++}),this.uuid=_r(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oi(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oi().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Oa().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ja=new K,Ma=new K,Na=new K,Pa=new K,Fa=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ja)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ja.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ja.copy(this.origin).addScaledVector(this.direction,t),ja.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ma.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(Ma);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Na),o=Pa.dot(this.direction),s=-Pa.dot(Na),c=Pa.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ma).addScaledVector(Na,d),f}intersectSphere(e,t){if(e.radius<0)return null;ja.subVectors(e.center,this.origin);let n=ja.dot(this.direction),r=ja.dot(ja)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ja)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,te=T-P*D,ne=E-ee*D,re=O-P*A,ie=k-ee*A,ae=j-P*N,oe=M-ee*N,I=ae*ie-oe*re,L=te*oe-ne*ae,se=re*ne-ie*te;if(r){if(I<0||L<0||se<0)return null}else if((I<0||L<0||se<0)&&(I>0||L>0||se>0))return null;let ce=I+L+se;if(ce===0)return null;let le=F*(I*D+L*A+se*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ia=class extends Aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Oi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},La=new qr,Ra=new Fa,za=new ga,Ba=new K,Va=new K,Ha=new K,Ua=new K,Wa=new K,Ga=new K,Ka=new K,qa=new K,Ja=class extends bi{constructor(e=new wa,t=new Ia){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ga.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Wa.fromBufferAttribute(s,e),a?Ga.addScaledVector(Wa,r):Ga.addScaledVector(Wa.sub(t),r))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),Ra.copy(e.ray).recast(e.near),za.containsPoint(Ra.origin)===!1&&(Ra.intersectSphere(za,Ba)===null||Ra.origin.distanceToSquared(Ba)>(e.far-e.near)**2)||(La.copy(i).invert(),Ra.copy(e.ray).applyMatrix4(La),(n.boundingBox===null||Ra.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ra)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Xa(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Xa(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Xa(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Xa(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ya(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;qa.copy(s),qa.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(qa);return l<n.near||l>n.far?null:{distance:l,point:qa.clone(),object:e}}function Xa(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Va),e.getVertexPosition(c,Ha),e.getVertexPosition(l,Ua);let u=Ya(e,t,n,r,Va,Ha,Ua,Ka);if(u){let e=new K;Wi.getBarycoord(Ka,Va,Ha,Ua,e),i&&(u.uv=Wi.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Wi.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Wi.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Wi.getNormal(Va,Ha,Ua,t.normal),u.face=t,u.barycoord=e}return u}var Za=class extends Vr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=kt,l=kt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qa=class extends la{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$a=new qr,eo=new qr,to=[],no=new Gi,ro=new qr,io=new Ja,ao=new ga,oo=class extends Ja{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ro)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$a),no.copy(e.boundingBox).applyMatrix4($a),this.boundingBox.union(no)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ga),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$a),ao.copy(e.boundingSphere).applyMatrix4($a),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,$a),eo.multiplyMatrices(n,$a),io.matrixWorld=eo,io.raycast(e,to);for(let e=0,n=to.length;e<n;e++){let n=to[e];n.instanceId=i,n.object=this,t.push(n)}to.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Za(new Float32Array(r*this.count),r,this.count,$t,Vt));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},so=new ga,co=new G(.5,.5),lo=new K,uo=class{constructor(e=new Oa,t=new Oa,n=new Oa,r=new Oa,i=new Oa,a=new Oa){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476+co.distanceTo(e.center),so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fo=new qr,po=class e{constructor(){this.coordinateSystem=nr,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];fo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new uo),n[e].setFromProjectionMatrix(fo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new uo),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},mo=class extends Vr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ho=class extends Vr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},go=class extends Vr{constructor(e,t,n=Bt,r,i,a,o=kt,s=kt,c,l=Zt,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_o=class extends go{constructor(e,t=Bt,n=301,r,i,a=kt,o=kt,s,c=Zt){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},vo=class extends Vr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yo=class e extends wa{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new fa(c,3)),this.setAttribute(`normal`,new fa(l,3)),this.setAttribute(`uv`,new fa(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},bo=class e extends wa{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new fa(a,3)),this.setAttribute(`normal`,new fa(o,3)),this.setAttribute(`uv`,new fa(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xo=class e extends wa{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new fa(p,3)),this.setAttribute(`normal`,new fa(m,3)),this.setAttribute(`uv`,new fa(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function So(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(wo(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(wo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Co(e){let t={};for(let n=0;n<e.length;n++){let r=So(e[n]);for(let e in r)t[e]=r[e]}return t}function wo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function To(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Eo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:J.workingColorSpace}var Do={clone:So,merge:Co},Oo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ko=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ao=class extends Aa{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oo,this.fragmentShader=ko,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=To(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Oi().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Hr().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new qr().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jo=class extends Ao{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Mo=class extends Aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Jn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends Aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Po(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Fo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Io=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Lo=class extends Io{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gn,endingEnd:Gn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kn:i=e,o=2*t-n;break;case qn:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Kn:a=e,s=2*n-t;break;case qn:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ro=class extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},zo=class extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends Io{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Uo(n,t,g,y,r);i[p]=Vo(x,o,_,b,m)}return i}};function Vo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ho(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Uo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Vo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ho(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Wo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Fo(e.settings)&&(n.settings={inTangents:Po(e.settings.inTangents,Array),outTangents:Po(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vn:t=this.InterpolantFactoryMethodDiscrete;break;case Hn:t=this.InterpolantFactoryMethodLinear;break;case Un:t=this.InterpolantFactoryMethodSmooth;break;case Wn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vn;case this.InterpolantFactoryMethodLinear:return Hn;case this.InterpolantFactoryMethodSmooth:return Un;case this.InterpolantFactoryMethodBezier:return Wn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Fo(this.settings)&&(Go(this.settings.inTangents,e),Go(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Fo(this.settings)&&(Ko(this.settings.inTangents,e),Ko(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ir(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Un,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Fo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Go(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ko(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Wo.prototype.ValueTypeName=``,Wo.prototype.TimeBufferType=Float32Array,Wo.prototype.ValueBufferType=Float32Array,Wo.prototype.DefaultInterpolation=Hn;var qo=class extends Wo{constructor(e,t,n){super(e,t,n)}};qo.prototype.ValueTypeName=`bool`,qo.prototype.ValueBufferType=Array,qo.prototype.DefaultInterpolation=Vn,qo.prototype.InterpolantFactoryMethodLinear=void 0,qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}};Jo.prototype.ValueTypeName=`color`;var Yo=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}};Yo.prototype.ValueTypeName=`number`;var Xo=class extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Tr.slerpFlat(i,0,a,c-o,a,c,s);return i}},Zo=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};Zo.prototype.ValueTypeName=`quaternion`,Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends Wo{constructor(e,t,n){super(e,t,n)}};Qo.prototype.ValueTypeName=`string`,Qo.prototype.ValueBufferType=Array,Qo.prototype.DefaultInterpolation=Vn,Qo.prototype.InterpolantFactoryMethodLinear=void 0,Qo.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends Wo{constructor(e,t,n,r){super(e,t,n,r)}};$o.prototype.ValueTypeName=`vector`;var es=new K,ts=new Tr,ns=new K,rs=class extends bi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new qr,this.projectionMatrix=new qr,this.projectionMatrixInverse=new qr,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(es,ts,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(es,ts,ns.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(es,ts,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(es,ts,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new K,as=new G,os=new G,ss=class extends rs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,as,os),t.subVectors(os,as)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cs=class extends rs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ls=-90,us=1,ds=class extends bi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ss(ls,us,e,t);r.layers=this.layers,this.add(r);let i=new ss(ls,us,e,t);i.layers=this.layers,this.add(i);let a=new ss(ls,us,e,t);a.layers=this.layers,this.add(a);let o=new ss(ls,us,e,t);o.layers=this.layers,this.add(o);let s=new ss(ls,us,e,t);s.layers=this.layers,this.add(s);let c=new ss(ls,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fs=class extends ss{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ps=`\\[\\]\\.:\\/`,ms=RegExp(`[\\[\\]\\.:\\/]`,`g`),hs=`[^\\[\\]\\.:\\/]`,gs=`[^`+ps.replace(`\\.`,``)+`]`,_s=`((?:WC+[\\/:])*)`.replace(`WC`,hs),vs=`(WCOD+)?`.replace(`WCOD`,gs),ys=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,hs),bs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,hs),xs=RegExp(`^`+_s+vs+ys+bs+`$`),Ss=[`material`,`materials`,`bones`,`map`],Cs=class{constructor(e,t,n){let r=n||ws.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ws=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ms,``)}static parseTrackName(e){let t=xs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ss.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ws.Composite=Cs,ws.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ws.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ws.prototype.GetterByBindingType=[ws.prototype._getValue_direct,ws.prototype._getValue_array,ws.prototype._getValue_arrayElement,ws.prototype._getValue_toArray],ws.prototype.SetterByBindingTypeAndVersioning=[[ws.prototype._setValue_direct,ws.prototype._setValue_direct_setNeedsUpdate,ws.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ws.prototype._setValue_array,ws.prototype._setValue_array_setNeedsUpdate,ws.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ws.prototype._setValue_arrayElement,ws.prototype._setValue_arrayElement_setNeedsUpdate,ws.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ws.prototype._setValue_fromArray,ws.prototype._setValue_fromArray_setNeedsUpdate,ws.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ts=new qr,Es=class{constructor(e,t,n=0,r=1/0){this.ray=new Fa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ii,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ts.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ts),this}intersectObject(e,t=!0,n=[]){return Os(e,this,n,t),n.sort(Ds),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Os(e[r],this,n,t);return n.sort(Ds),n}};function Ds(e,t){return e.distance-t.distance}function Os(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Os(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ks(e,t,n,r){let i=As(r);switch(n){case Jt:return e*t;case $t:return e*t/i.components*i.byteLength;case en:return e*t/i.components*i.byteLength;case tn:return e*t*2/i.components*i.byteLength;case nn:return e*t*2/i.components*i.byteLength;case Yt:return e*t*3/i.components*i.byteLength;case Xt:return e*t*4/i.components*i.byteLength;case rn:return e*t*4/i.components*i.byteLength;case an:case on:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sn:case cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case un:case fn:return Math.max(e,16)*Math.max(t,8)/4;case ln:case dn:return Math.max(e,8)*Math.max(t,8)/2;case pn:case mn:case gn:case _n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hn:case vn:case yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Sn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Cn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case wn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Tn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case En:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Dn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case On:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case kn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case An:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case jn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Mn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Nn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pn:case Fn:case In:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ln:case Rn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case zn:case Bn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function As(e){switch(e){case Ft:case It:return{byteLength:1,components:1};case Rt:case Lt:case Ht:return{byteLength:2,components:1};case Ut:case Wt:return{byteLength:2,components:4};case Bt:case zt:case Vt:return{byteLength:4,components:1};case Kt:case qt:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function js(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ms(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new Oi(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oi(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oi(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Oi(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Ns={basic:{uniforms:Co([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Co([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Oi(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Co([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Oi(0)},specular:{value:new Oi(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Co([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new Oi(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Co([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new Oi(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Co([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Co([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Co([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Co([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Co([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Co([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Co([X.common,X.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Co([X.lights,X.fog,{color:{value:new Oi(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Ns.physical={uniforms:Co([Ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Oi(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Oi(0)},specularColor:{value:new Oi(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Ps={r:0,b:0,g:0},Fs=new qr,Is=new q;Is.set(-1,0,0,0,1,0,0,0,1);function Ls(e,t,n,r,i,a){let o=new Oi(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Ja(new yo(1,1,1),new Ao({name:`BackgroundCubeMaterial`,uniforms:So(Ns.backgroundCube.uniforms),vertexShader:Ns.backgroundCube.vertexShader,fragmentShader:Ns.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Is),l.material.toneMapped=J.getTransfer(i.colorSpace)!==Qn,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ja(new xo(2,2),new Ao({name:`BackgroundMaterial`,uniforms:So(Ns.background.uniforms),vertexShader:Ns.background.vertexShader,fragmentShader:Ns.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=J.getTransfer(i.colorSpace)!==Qn,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ps,Eo(e)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Rs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&U(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Vs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Oa,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Hs=class extends Wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new mo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yo(5,5,5),i=new Ao({name:`CubemapFromEquirect`,uniforms:So(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ja(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Mt),new ds(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Us=256,Ws=3,Gs=20,Ks=256,qs=16,Js=3,Ys=new K,Xs=new Oi,Zs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ds(1,10,null),this._boxMesh=new Ja(new yo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ys}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Xs));let h=new ds(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Us,xr(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Us:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Qs(e,!1,!1),n=Math.log2(e)-Ws;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Qs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ec(),this._integrationMaterial=tc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/qs);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Js)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Ks*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=nc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Qs(e,t,n){return new Hs(e,{minFilter:Pt,generateMipmaps:t,type:Ht,colorSpace:Xn,depthBuffer:n})}function $s(e,t,n){return new Ao({name:e,uniforms:t,vertexShader:Y.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function ec(){return $s(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ks}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tc(){return $s(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qs}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nc(){return $s(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gs}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rc(){return $s(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ic(){return $s(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ac(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Hs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Zs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Zs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function oc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ur(`WebGLRenderer: `+e+` extension not supported.`),t}}}function sc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?da:ua)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function cc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function lc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function uc(e,t,n){let r=new WeakMap,i=new Hr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Gr(h,p,m,u);g.type=Vt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function dc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var fc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function pc(e,t,n,r,i,a){let o=new Wr(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new wa;u.setAttribute(`position`,new fa([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new fa([0,2,0,0,2,0],2));let d=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ja(u,d),p=new cs(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Wr(t,n,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),c=new Wr(t,n,{type:Ht,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new go(t,n),a===!0&&(l.format=Qt,l.type=Gt)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},J.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=fc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var mc=new Vr,hc=new go(1,1),gc=new _o(1),_c=new Gr,vc=new Kr,yc=new mo,bc=[],xc=[],Sc=new Float32Array(16),Cc=new Float32Array(9),wc=new Float32Array(4);function Tc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=bc[i];if(a===void 0&&(a=new Float32Array(i),bc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ec(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Dc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Oc(e,t){let n=xc[t];n===void 0&&(n=new Int32Array(t),xc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function kc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2fv(this.addr,t),Dc(n,t)}}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ec(n,t))return;e.uniform3fv(this.addr,t),Dc(n,t)}}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4fv(this.addr,t),Dc(n,t)}}function Nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;wc.set(r),e.uniformMatrix2fv(this.addr,!1,wc),Dc(n,r)}}function Pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;Cc.set(r),e.uniformMatrix3fv(this.addr,!1,Cc),Dc(n,r)}}function Fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;Sc.set(r),e.uniformMatrix4fv(this.addr,!1,Sc),Dc(n,r)}}function Ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2iv(this.addr,t),Dc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ec(n,t))return;e.uniform3iv(this.addr,t),Dc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4iv(this.addr,t),Dc(n,t)}}function Bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2uiv(this.addr,t),Dc(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ec(n,t))return;e.uniform3uiv(this.addr,t),Dc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4uiv(this.addr,t),Dc(n,t)}}function Wc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Wc(hc):mc,n.setTexture2D(t||a,i)}function Kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||vc,i)}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Wc(gc):yc,n.setTextureCube(t||a,i)}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||_c,i)}function Yc(e){switch(e){case 5126:return kc;case 35664:return Ac;case 35665:return jc;case 35666:return Mc;case 35674:return Nc;case 35675:return Pc;case 35676:return Fc;case 5124:case 35670:return Ic;case 35667:case 35671:return Lc;case 35668:case 35672:return Rc;case 35669:case 35673:return zc;case 5125:return Bc;case 36294:return Vc;case 36295:return Hc;case 36296:return Uc;case 35678:case 36198:case 36298:case 36306:case 35682:return Gc;case 35679:case 36299:case 36307:return Kc;case 35680:case 36300:case 36308:case 36293:return qc;case 36289:case 36303:case 36311:case 36292:return Jc}}function Xc(e,t){e.uniform1fv(this.addr,t)}function Zc(e,t){let n=Tc(t,this.size,2);e.uniform2fv(this.addr,n)}function Qc(e,t){let n=Tc(t,this.size,3);e.uniform3fv(this.addr,n)}function $c(e,t){let n=Tc(t,this.size,4);e.uniform4fv(this.addr,n)}function el(e,t){let n=Tc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function tl(e,t){let n=Tc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function nl(e,t){let n=Tc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function rl(e,t){e.uniform1iv(this.addr,t)}function il(e,t){e.uniform2iv(this.addr,t)}function al(e,t){e.uniform3iv(this.addr,t)}function ol(e,t){e.uniform4iv(this.addr,t)}function sl(e,t){e.uniform1uiv(this.addr,t)}function cl(e,t){e.uniform2uiv(this.addr,t)}function ll(e,t){e.uniform3uiv(this.addr,t)}function ul(e,t){e.uniform4uiv(this.addr,t)}function dl(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Wc(hc):mc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function fl(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||vc,a[e])}function pl(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Wc(gc):yc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function ml(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||_c,a[e])}function hl(e){switch(e){case 5126:return Xc;case 35664:return Zc;case 35665:return Qc;case 35666:return $c;case 35674:return el;case 35675:return tl;case 35676:return nl;case 5124:case 35670:return rl;case 35667:case 35671:return il;case 35668:case 35672:return al;case 35669:case 35673:return ol;case 5125:return sl;case 36294:return cl;case 36295:return ll;case 36296:return ul;case 35678:case 36198:case 36298:case 36306:case 35682:return dl;case 35679:case 36299:case 36307:return fl;case 35680:case 36300:case 36308:case 36293:return pl;case 36289:case 36303:case 36311:case 36292:return ml}}var gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yc(t.type)}},_l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hl(t.type)}},vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function bl(e,t){e.seq.push(t),e.map[t.id]=t}function xl(e,t,n){let r=e.name,i=r.length;for(yl.lastIndex=0;;){let a=yl.exec(r),o=yl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){bl(n,l===void 0?new gl(s,e,t):new _l(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new vl(s),bl(n,e)),n=e}}}var Sl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);xl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Cl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var wl=37297,Tl=0;function El(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Dl=new q;function Ol(e){J._getMatrix(Dl,J.workingColorSpace,e);let t=`mat3( ${Dl.elements.map(e=>e.toFixed(4))} )`;switch(J.getTransfer(e)){case Zn:return[t,`LinearTransferOETF`];case Qn:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function kl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+El(e.getShaderSource(t),r)}return i}function Al(e,t){let n=Ol(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var jl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ml(e,t){let n=jl[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Nl=new K;function Pl(){return J.getLuminanceCoefficients(Nl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Nl.x.toFixed(4)}, ${Nl.y.toFixed(4)}, ${Nl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Fl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Rl).join(`
`)}function Il(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ll(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Rl(e){return e!==``}function zl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(e){return e.replace(Vl,Ul)}function Ul(e,t){let n=Y[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Hl(n)}var Wl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(e){return e.replace(Wl,Kl)}function Kl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ql(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Jl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Yl(e){return Jl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Xl={302:`ENVMAP_MODE_REFRACTION`};function Zl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Xl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ql={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function $l(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ql[e.combine]||`ENVMAP_BLENDING_NONE`}function eu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Yl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Zl(n),d=$l(n),f=Fl(n),p=Il(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Rl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Rl).join(`
`),g.length>0&&(g+=`
`)):(h=[ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Rl).join(`
`),g=[ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Ml(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Al(`linearToOutputTexel`,n.outputColorSpace),Pl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Rl).join(`
`)),o=Hl(o),o=zl(o,n),o=Bl(o,n),s=Hl(s),s=zl(s,n),s=Bl(s,n),o=Gl(o),s=Gl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Cl(i,i.VERTEX_SHADER,v),x=Cl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=kl(i,b,`vertex`),n=kl(i,x,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Sl(i,m),w=Ll(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,wl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Tl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var tu=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ru(e),t.set(e,n)),n}},ru=class{constructor(e){this.id=tu++,this.code=e,this.usedTimes=0}};function iu(e){return e===1030||e===37490||e===36285}function au(e,t,n,r,i,a){let o=new ii,s=new nu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Ns[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,ee=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,I=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.diffuseRoughness>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ce&&!!i.anisotropyMap,_e=le&&!!i.clearcoatMap,ve=le&&!!i.clearcoatNormalMap,ye=le&&!!i.clearcoatRoughnessMap,be=ue&&!!i.diffuseRoughnessMap,R=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,z=me&&!!i.sheenColorMap,Se=me&&!!i.sheenRoughnessMap,B=!!i.specularMap,Ce=!!i.specularColorMap,V=!!i.specularIntensityMap,H=he&&!!i.transmissionMap,we=he&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Me={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:J.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ee,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?je.length-1:null,envMapSize:te?je[0].width:null,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:I,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&iu(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:ge,clearcoat:le,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,diffuseRoughness:ue,diffuseRoughnessMap:be,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:R,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:z,sheenRoughnessMap:Se,specularMap:B,specularColorMap:Ce,specularIntensityMap:V,transmission:he,transmissionMap:H,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:ne&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:ie&&p(i.bumpMap.channel),normalMapUv:ae&&p(i.normalMap.channel),displacementMapUv:oe&&p(i.displacementMap.channel),emissiveMapUv:I&&p(i.emissiveMap.channel),metalnessMapUv:L&&p(i.metalnessMap.channel),roughnessMapUv:se&&p(i.roughnessMap.channel),anisotropyMapUv:ge&&p(i.anisotropyMap.channel),clearcoatMapUv:_e&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:R&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:z&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(i.sheenRoughnessMap.channel),specularMapUv:B&&p(i.specularMap.channel),specularColorMapUv:Ce&&p(i.specularColorMap.channel),specularIntensityMapUv:V&&p(i.specularIntensityMap.channel),transmissionMapUv:H&&p(i.transmissionMap.channel),thicknessMapUv:we&&p(i.thicknessMap.channel),alphaMapUv:Ee&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||ce),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Ee),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&J.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:I&&i.emissiveMap.isVideoTexture===!0&&J.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ns[t];n=Do.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new eu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function su(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||su),r.length>1&&r.sort(t||cu),i.length>1&&i.sort(t||cu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function uu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new lu,e.set(t,[i])):n>=r.length?(i=new lu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function du(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new Oi};break;case`SpotLight`:n={position:new K,direction:new K,color:new Oi,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Oi,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Oi,groundColor:new Oi};break;case`RectAreaLight`:n={color:new Oi,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pu=0;function mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hu(e){let t=new du,n=fu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new qr,o=new qr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(mu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=pu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function gu(e){let t=new hu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function _u(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gu(e),t.set(n,[a])):r>=i.length?(a=new gu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bu=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],xu=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Su=new qr,Cu=new K,wu=new K;function Tu(e,t,n){let r=new uo,i=new G,a=new G,o=new Hr,s=new Mo,c=new No,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ao({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:vu,fragmentShader:yu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new wa;m.setAttribute(`position`,new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ja(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Wr(i.x,i.y,{format:tn,type:Ht,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new go(i.x,i.y,Vt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Zt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=kt,d.map.depthTexture.magFilter=kt}else l.isPointLight?(d.map=new Hs(i.x),d.map.depthTexture=new _o(i.x,Bt)):(d.map=new Wr(i.x,i.y),d.map.depthTexture=new go(i.x,i.y,Bt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Zt,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Mt,d.map.depthTexture.magFilter=Mt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=kt,d.map.depthTexture.magFilter=kt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Cu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Cu),wu.copy(e.position),wu.add(bu[t]),e.up.copy(xu[t]),e.lookAt(wu),e.updateMatrixWorld(),n.makeTranslation(-Cu.x,-Cu.y,-Cu.z),Su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Su,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Wr(i.x,i.y,{format:tn,type:Ht}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Eu(e,t){function n(){let t=!1,n=new Hr,r=null,i=new Hr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=fr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Oi(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Hr().fromArray(ne),ae=new Hr().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let I={};I[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),I[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),I[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function R(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||I[t]),i.type=t,i.texture=n)}function xe(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function z(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function B(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function H(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(t){return d[t]===void 0?e.getParameter(t):d[t]}function ke(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ae(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function je(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ne(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Oi(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:R,unbindTexture:xe,compressedTexImage2D:z,compressedTexImage3D:Se,texImage2D:Ee,texImage3D:De,pixelStorei:ke,getParameter:Oe,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:Te,texSubImage2D:B,texSubImage3D:Ce,compressedTexSubImage2D:V,compressedTexSubImage3D:H,scissor:Ae,viewport:je,reset:Pe}}function Du(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new G,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):ar(`canvas`)}function v(e,t,n){let r=1,i=we(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Zn:J.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),P(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function P(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ee=0;function F(){ee=0}function te(){return ee}function ne(e){ee=e}function re(){let e=ee;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ee+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ae(t,i){let a=r.get(t);if(t.isVideoTexture&&V(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function I(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[Et]:e.REPEAT,[Dt]:e.CLAMP_TO_EDGE,[Ot]:e.MIRRORED_REPEAT},ce={[kt]:e.NEAREST,[At]:e.NEAREST_MIPMAP_NEAREST,[jt]:e.NEAREST_MIPMAP_LINEAR,[Mt]:e.LINEAR,[Nt]:e.LINEAR_MIPMAP_NEAREST,[Pt]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function de(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ie(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=de(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=H(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ue(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Qt,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&pe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=ks(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ks(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=we(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=we(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=de(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=H(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);ue(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Qt,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=we(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,B(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,B(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,B(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,B(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,B(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?L(i.depthTexture,0):ae(i.depthTexture,0);let u=c.__webglTexture,d=B(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ye(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ve(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?ve(i.__webglFramebuffer[0],t,0):ve(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,i){let a=r.get(t);n!==void 0&&ge(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ye(t)}function R(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ce(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=B(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ge(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ue(c,a),ge(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ge(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&ye(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let z=[];function Se(t){if(t.samples>0){if(Ce(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(z.length=0,z.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&z.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function B(e){return Math.min(i.maxSamples,e.samples)}function Ce(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function V(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function H(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(J.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function we(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=F,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=oe,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=be,this.setupRenderTarget=R,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ce,this.dispose=j}function Ou(e,t){function n(n,r=``){let i,a=J.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ku=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Au=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ao({vertexShader:ku,fragmentShader:Au,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ja(new xo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends pr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ju,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new G,C=null,w=null,T=new ss;T.viewport=new Hr;let E=new ss;E.viewport=new Hr;let D=[T,E],O=new fs,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ci,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ci,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ci,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Qt:Zt,a=_.stencil?Gt:Bt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wr(d.textureWidth,d.textureHeight,{format:Xt,type:Ft,depthTexture:new go(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wr(f.framebufferWidth,f.framebufferHeight,{format:Xt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;P(O,i);for(let e=0;e<a.length;e++)P(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ee(e,O,i)};function ee(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=gr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let F=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ss,o.layers.enable(n),o.viewport=new Hr,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new vo,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new js;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},Nu=new qr,Pu=new q;Pu.set(-1,0,0,0,1,0,0,0,1);function Fu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Eo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Nu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Iu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Lu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ru=null;function zu(){return Ru===null&&(Ru=new Za(Lu,16,16,tn,Ht),Ru.name=`DFG_LUT`,Ru.minFilter=Mt,Ru.magFilter=Mt,Ru.wrapS=Dt,Ru.wrapT=Dt,Ru.generateMipmaps=!1,Ru.needsUpdate=!0),Ru}var Bu=class{constructor(e={}){let{canvas:t=or(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ft}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([rn,nn,en]),g=new Set([Ft,Bt,Rt,Gt,Ut,Wt]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Yn;let j=0,M=0,N=null,P=-1,ee=null,F=new Hr,te=new Hr,ne=null,re=new Oi(0),ie=0,ae=t.width,oe=t.height,I=1,L=null,se=null,ce=new Hr(0,0,ae,oe),le=new Hr(0,0,ae,oe),ue=!1,de=new uo,fe=new po,pe=!1,me=!1,he=new qr,ge=new K,_e=new Hr,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function be(){return N===null?I:1}let R=n;function xe(e,n){return t.getContext(e,n)}let z,Se,B,Ce,V,H,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Ue,!1),t.addEventListener(`webglcontextrestored`,We,!1),t.addEventListener(`webglcontextcreationerror`,Ge,!1),R===null){let t=`webgl2`;if(R=xe(t,e),R===null)throw xe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ve()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ue,!1),t.removeEventListener(`webglcontextrestored`,We,!1),t.removeEventListener(`webglcontextcreationerror`,Ge,!1),W(`WebGLRenderer: `+e.message),e}function Ve(){z=new oc(R),z.init(),Re=new Ou(R,z),Se=new Bs(R,z,e,Re),B=new Eu(R,z),Se.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),O=R.createFramebuffer(),k=R.createFramebuffer(),A=R.createFramebuffer(),Ce=new lc(R),V=new ou,H=new Du(R,z,B,V,Se,Re,Ce),we=new ac(T),Te=new Ms(R),ze=new Rs(R,Te),Ee=new sc(R,Te,Ce,ze),De=new dc(R,Ee,Te,ze,Ce),Fe=new uc(R,Se,H),Me=new Vs(V),Oe=new au(T,we,z,Se,ze,Me),ke=new Fu(T,V),Ae=new uu,je=new _u(z),Pe=new Ls(T,we,B,De,p,s),Ne=new Tu(T,De,Se),Be=new Iu(R,Ce,Se,B),Ie=new zs(R,z,Ce),Le=new cc(R,z,Ce),Ce.programs=Oe.programs,T.capabilities=Se,T.extensions=z,T.properties=V,T.renderLists=Ae,T.shadowMap=Ne,T.state=B,T.info=Ce}m!==1009&&(w=new pc(m,t.width,t.height,o,r,i));let He=new Mu(T,R);this.xr=He,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=z.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=z.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(e){e!==void 0&&(I=e,this.setSize(ae,oe,!1))},this.getSize=function(e){return e.set(ae,oe)},this.setSize=function(e,n,r=!0){He.isPresenting?U(`WebGLRenderer: Can't change size while VR device is presenting.`):(ae=e,oe=n,t.width=Math.floor(e*I),t.height=Math.floor(n*I),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ae*I,oe*I).floor()},this.setDrawingBufferSize=function(e,n,r){ae=e,oe=n,I=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(F)},this.getViewport=function(e){return e.copy(ce)},this.setViewport=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),B.viewport(F.copy(ce).multiplyScalar(be()).round())},this.getScissor=function(e){return e.copy(le)},this.setScissor=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),B.scissor(te.copy(le).multiplyScalar(be()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(e){B.setScissorTest(ue=e)},this.setOpaqueSort=function(e){L=e},this.setTransparentSort=function(e){se=e},this.getClearColor=function(e){return e.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Pe.getClearColor(),r=Pe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,R.clearBufferiv(R.COLOR,0,v))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ue,!1),t.removeEventListener(`webglcontextrestored`,We,!1),t.removeEventListener(`webglcontextcreationerror`,Ge,!1),Pe.dispose(),Ae.dispose(),je.dispose(),H.dispose(),V.dispose(),we.dispose(),De.dispose(),Ee.dispose(),ze.dispose(),Be.dispose(),Oe.dispose(),He.dispose(),He.removeEventListener(`sessionstart`,Qe),He.removeEventListener(`sessionend`,$e),et.stop()};function Ue(e){e.preventDefault(),cr(`WebGLRenderer: Context Lost.`),E=!0}function We(){cr(`WebGLRenderer: Context Restored.`),E=!1;let e=Ce.autoReset,t=Ne.enabled,n=Ne.autoUpdate,r=Ne.needsUpdate,i=Ne.type;Ve(),Ce.autoReset=e,Ne.enabled=t,Ne.autoUpdate=n,Ne.needsUpdate=r,Ne.type=i}function Ge(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ke(e){let t=e.target;t.removeEventListener(`dispose`,Ke),qe(t)}function qe(e){Je(e),V.remove(e)}function Je(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ve);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=dt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ee.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ze.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=Te.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*be()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*be()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(z.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Te.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),pe===!0&&Me.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,st(e,t,r),e.side=0,e.needsUpdate=!0,st(e,t,r),e.side=2):st(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=je.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),me=this.localClippingEnabled,pe=Me.init(this.clippingPlanes,me),pe===!0&&Me.setGlobalState(this.clippingPlanes,t),D!==null&&Ne.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ye(o,n,t,e),r.add(o)}else Ye(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}z.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Xe=null;function Ze(e){Xe&&Xe(e)}function Qe(){et.stop()}function $e(){et.start()}let et=new js;et.setAnimationLoop(Ze),typeof self<`u`&&et.setContext(self),this.setAnimationLoop=function(e){Xe=e,He.setAnimationLoop(e),e===null?et.stop():et.start()},He.addEventListener(`sessionstart`,Qe),He.addEventListener(`sessionend`,$e),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=He.enabled===!0&&He.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(t),t=He.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=je.get(e,C.length),x.init(t),x.state.textureUnits=H.getTextureUnits(),C.push(x),he.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?fe.setFromArrayCamera(t):de.setFromProjectionMatrix(he,nr,t.reversedDepth),me=this.localClippingEnabled,pe=Me.init(this.clippingPlanes,me),b=Ae.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,He.enabled===!0&&He.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&tt(e,t,-1/0,T.sortObjects)}tt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(L,se),ye=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ye&&Pe.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),pe===!0&&Me.beginShadows();let i=x.state.shadowsArray;if(Ne.render(i,e,t),pe===!0&&Me.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];rt(n,r,e,a)}ye&&Pe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];nt(b,e,n,n.viewport)}}else r.length>0&&rt(n,r,e,t),ye&&Pe.render(e),nt(b,e,t)}N!==null&&M===0&&(H.updateMultisampleRenderTarget(N),H.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),ze.resetDefaultState(),P=-1,ee=null,C.pop(),C.length>0?(x=C[C.length-1],H.setTextureUnits(x.state.textureUnits),pe===!0&&Me.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?fe:de;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&_e.setFromMatrixPosition(e.matrixWorld).applyMatrix4(he);let i=De.update(e),a=e.material;a.visible&&b.push(e,i,a,n,_e.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?fe:de;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=De.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),_e.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),_e.copy(e.boundingSphere.center)),_e.applyMatrix4(e.matrixWorld).applyMatrix4(he)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,_e.z,s,t)}}else a.visible&&b.push(e,i,a,n,_e.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)tt(i[e],t,n,r)}function nt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),pe===!0&&Me.setGlobalState(T.clippingPlanes,n),r&&B.viewport(F.copy(r)),i.length>0&&it(i,t,n),a.length>0&&it(a,t,n),o.length>0&&it(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function rt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=z.has(`EXT_color_buffer_half_float`)||z.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Wr(1,1,{generateMipmaps:!0,type:e?Ht:Ft,minFilter:Pt,samples:Math.max(4,Se.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||F;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(re),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),ye&&Pe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),pe===!0&&Me.setGlobalState(T.clippingPlanes,r),it(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),z.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,at(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(re,ie),d!==void 0&&(r.viewport=d),T.toneMapping=u}function it(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&at(o,t,n,s,l,c)}}function at(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ot(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function st(e,t,n){t.isScene!==!0&&(t=ve);let r=V.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=we.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ke),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ut(e,s),d}else s.uniforms=Oe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Oe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Me.uniform),ut(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=ot(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function ct(e,t,n,r,i){let a=V.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=st(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function lt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Sl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ut(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function dt(e,t,n,r,i){t.isScene!==!0&&(t=ve),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:J.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=we.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),b=x.state.lights;if(pe===!0&&(me===!0||e!==ee)){let t=e===ee&&r.id===P;Me.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Me.numPlanes||v.numIntersection!==Me.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===ot(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?ct(r,t,i,s,h):st(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(B.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==P&&(P=r.id,O=!0),E||ee!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(R,`projectionMatrix`,e.projectionMatrix),A.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(R,ge.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&A.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ee!==e&&(ee=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(R,`sunShadowMap`,b.state.sunShadowMap,H),b.state.directionalShadowMap.length>0&&A.setValue(R,`directionalShadowMap`,b.state.directionalShadowMap,H),b.state.spotShadowMap.length>0&&A.setValue(R,`spotShadowMap`,b.state.spotShadowMap,H),b.state.pointShadowMap.length>0&&A.setValue(R,`pointShadowMap`,b.state.pointShadowMap,H)),i.isSkinnedMesh){A.setOptional(R,i,`bindMatrix`),A.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(R,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(A.setOptional(R,i,`batchingTexture`),A.setValue(R,`batchingTexture`,i._matricesTexture,H),A.setOptional(R,i,`batchingIdTexture`),A.setValue(R,`batchingIdTexture`,i._indirectTexture,H),A.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(R,`batchingColorTexture`,i._colorsTexture,H));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Fe.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=zu()),O){if(A.setValue(R,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ft(j,k),a&&r.fog===!0&&ke.refreshFogUniforms(j,a),ke.refreshMaterialUniforms(j,r,I,oe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Sl.upload(R,lt(v),j,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Sl.upload(R,lt(v),j,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(R,`center`,i.center),A.setValue(R,`modelViewMatrix`,i.modelViewMatrix),A.setValue(R,`normalMatrix`,i.normalMatrix),A.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Be.update(n,w),Be.bind(n,w)}}return w}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest,B.viewport(F),B.scissor(te),B.setScissorTest(ne),P=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest}else F.copy(ce).multiplyScalar(I).floor(),te.copy(le).multiplyScalar(I).floor(),ne=ue;if(n!==0&&(r=O),B.bindFramebuffer(R.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(F),B.scissor(te),B.setScissorTest(ne),i){let r=V.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}P=-1};function mt(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Se.textureFormatReadable(e.format),t.__typeReadable=Se.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=mt(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Re.convert(c),Re.convert(l),a)}finally{let e=N===null?null:V.get(N).__webglFramebuffer;B.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Re.convert(l),Re.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=N===null?null:V.get(N).__webglFramebuffer;B.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await dr(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Re.convert(t.format),_=Re.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=R.TEXTURE_2D),B.activeTexture(R.TEXTURE0),B.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(R.UNPACK_ROW_LENGTH),b=B.getParameter(R.UNPACK_IMAGE_HEIGHT),x=B.getParameter(R.UNPACK_SKIP_PIXELS),S=B.getParameter(R.UNPACK_SKIP_ROWS),C=B.getParameter(R.UNPACK_SKIP_IMAGES);B.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(R.UNPACK_SKIP_PIXELS,l),B.pixelStorei(R.UNPACK_SKIP_ROWS,u),B.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);B.bindFramebuffer(R.READ_FRAMEBUFFER,null),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(R.READ_FRAMEBUFFER,k),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);B.bindFramebuffer(R.READ_FRAMEBUFFER,null),B.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(R.UNPACK_ROW_LENGTH,y),B.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(R.UNPACK_SKIP_PIXELS,x),B.pixelStorei(R.UNPACK_SKIP_ROWS,S),B.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,B.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J._getDrawingBufferColorSpace(e),t.unpackColorSpace=J._getUnpackColorSpace()}},Vu=new URL(`book-base-DpADOS2M.webp`,import.meta.url).href,Hu=new URL(`btn-round-D47H8jdk.webp`,import.meta.url).href,Uu=new URL(`btn-wide-C3WGyCWG.webp`,import.meta.url).href,Wu=new URL(`calendar-cell-DyZNd3id.webp`,import.meta.url).href,Gu=new URL(`desk-COx-B8MU.webp`,import.meta.url).href,Ku=new URL(`dog-alarm-AtKVC2hO.webp`,import.meta.url).href,qu=new URL(`dog-content-5cXhWF3a.webp`,import.meta.url).href,Ju=new URL(`dog-idle-CEebauWW.webp`,import.meta.url).href,Yu=new URL(`fence-post-Cj2SY4P6.webp`,import.meta.url).href,Xu=new URL(`fence-segment-Ct5IUz7P.webp`,import.meta.url).href,Zu=new URL(`ghost-finger-DhuyQT9K.webp`,import.meta.url).href,Qu=new URL(`halftone-Czt3TqJW.webp`,import.meta.url).href,$u=new URL(`hole-DmGJrdBk.webp`,import.meta.url).href,ed=new URL(`home-cloud-Cp-zQwNl.webp`,import.meta.url).href,td=new URL(`home-dog-CZT961au.webp`,import.meta.url).href,nd=new URL(`home-plate-CGRQyjGy.webp`,import.meta.url).href,rd=new URL(`home-sheep-1-VbuRPsRQ.webp`,import.meta.url).href,id=new URL(`home-sheep-2-BGRqgrjM.webp`,import.meta.url).href,ad=new URL(`home-sheep-3-vuwAFD3z.webp`,import.meta.url).href,od=new URL(`home-sheep-4-BpZ3KwNl.webp`,import.meta.url).href,sd=new URL(`home-sun-D1rROk23.webp`,import.meta.url).href,cd=new URL(`icon-back-BzKb0Nq1.webp`,import.meta.url).href,ld=new URL(`icon-bark-BBYAPvyU.webp`,import.meta.url).href,ud=new URL(`icon-continue-CPxqRw0D.webp`,import.meta.url).href,dd=new URL(`icon-credits-DKF6A07N.webp`,import.meta.url).href,fd=new URL(`icon-daily-CMPlzm7k.webp`,import.meta.url).href,pd=new URL(`icon-flame-COdRjymL.webp`,import.meta.url).href,md=new URL(`icon-haptics-qnm7MpxW.webp`,import.meta.url).href,hd=new URL(`icon-hint-Dqk2Q98w.webp`,import.meta.url).href,gd=new URL(`icon-lock-dJhsrfen.webp`,import.meta.url).href,_d=new URL(`icon-motion-BbkR2k76.webp`,import.meta.url).href,vd=new URL(`icon-next-DOtQFqz4.webp`,import.meta.url).href,yd=new URL(`icon-play-CvoB5RX3.webp`,import.meta.url).href,bd=new URL(`icon-restart-CsLFDOVF.webp`,import.meta.url).href,xd=new URL(`icon-settings-aL--xOgj.webp`,import.meta.url).href,Sd=new URL(`icon-sound-off-bzJ_-bc8.webp`,import.meta.url).href,Cd=new URL(`icon-sound-on-DAX3apS1.webp`,import.meta.url).href,wd=new URL(`icon-stickers-DVY45fCZ.webp`,import.meta.url).href,Td=new URL(`icon-token-BVp0O9I4.webp`,import.meta.url).href,Ed=new URL(`icon-undo-CTK6kvYq.webp`,import.meta.url).href,Dd=new URL(`logo-Cj9BKf5L.webp`,import.meta.url).href,Od=new URL(`page-CuBXDdXG.webp`,import.meta.url).href,kd=new URL(`panel-CmIi7c9I.webp`,import.meta.url).href,Ad=new URL(`paper-grain-SuaKd8Qj.webp`,import.meta.url).href,jd=new URL(`paw-hollow-CqIKT6tn.webp`,import.meta.url).href,Md=new URL(`paw-stamp-CLvYOmkE.webp`,import.meta.url).href,Nd=new URL(`rock-1-8W3g9hv7.webp`,import.meta.url).href,Pd=new URL(`rock-2-DVTa6zJ6.webp`,import.meta.url).href,Fd=new URL(`rock-3-dRGc65QY.webp`,import.meta.url).href,Id=new URL(`sheep-black-alarm-C5lrV56p.webp`,import.meta.url).href,Ld=new URL(`sheep-black-content-BXY3iFcH.webp`,import.meta.url).href,Rd=new URL(`sheep-black-idle-EW4AP90h.webp`,import.meta.url).href,zd=new URL(`sheep-white-alarm-B2juGPFk.webp`,import.meta.url).href,Bd=new URL(`sheep-white-content-BWkkZxro.webp`,import.meta.url).href,Vd=new URL(`sheep-white-idle-CVTpLwCg.webp`,import.meta.url).href,Hd=new URL(`stamp-ring-CSFIyllw.webp`,import.meta.url).href,Ud=new URL(`star-empty-DufiB1Vd.webp`,import.meta.url).href,Wd=new URL(`star-full-CpeZ2ayc.webp`,import.meta.url).href,Gd=new URL(`sticker-01-OnzRFGgR.webp`,import.meta.url).href,Kd=new URL(`sticker-02-D2DYM27t.webp`,import.meta.url).href,qd=new URL(`sticker-03-DQ1m8jgf.webp`,import.meta.url).href,Jd=new URL(`sticker-04-CPHR5eax.webp`,import.meta.url).href,Yd=new URL(`sticker-05-CKDjYC9P.webp`,import.meta.url).href,Xd=new URL(`sticker-06-D_4TQcmi.webp`,import.meta.url).href,Zd=new URL(`sticker-07-DeSkgDjI.webp`,import.meta.url).href,Qd=new URL(`sticker-08-PQT4Phm1.webp`,import.meta.url).href,$d=new URL(`sticker-09-CKnW-R-H.webp`,import.meta.url).href,ef=new URL(`sticker-10-C0DkuzC8.webp`,import.meta.url).href,tf=new URL(`sticker-11-CU1ssMMM.webp`,import.meta.url).href,nf=new URL(`sticker-12-Kzeylc3r.webp`,import.meta.url).href,rf=new URL(`sticker-13-CB4nY1b4.webp`,import.meta.url).href,af=new URL(`sticker-14-BGh-mJb6.webp`,import.meta.url).href,of=new URL(`sticker-15-gTCM-qq1.webp`,import.meta.url).href,sf=new URL(`sticker-16-Cx4FqB36.webp`,import.meta.url).href,cf=new URL(`sticker-17-BgCh7iEQ.webp`,import.meta.url).href,lf=new URL(`sticker-18-BWtALN_v.webp`,import.meta.url).href,uf=new URL(`sticker-19-CJQYnHmw.webp`,import.meta.url).href,df=new URL(`sticker-20-XP4L0PDm.webp`,import.meta.url).href,ff=new URL(`sticker-21-aFU1Pqto.webp`,import.meta.url).href,pf=new URL(`sticker-22-HIejNrn0.webp`,import.meta.url).href,mf=new URL(`sticker-23-fFVv6eW9.webp`,import.meta.url).href,hf=new URL(`sticker-24-CjFQ8NfH.webp`,import.meta.url).href,gf=new URL(`sticker-25-CFDZCqDP.webp`,import.meta.url).href,_f=new URL(`sticker-26-DpU1bvYd.webp`,import.meta.url).href,vf=new URL(`sticker-27-CxBhCR7_.webp`,import.meta.url).href,yf=new URL(`sticker-28-C7Zbft7D.webp`,import.meta.url).href,bf=new URL(`sticker-29-CCukXKDk.webp`,import.meta.url).href,xf=new URL(`sticker-30-CusUPp_e.webp`,import.meta.url).href,Sf=new URL(`sticker-31-BtQ1mR7Y.webp`,import.meta.url).href,Cf=new URL(`sticker-32-DwxWyK2N.webp`,import.meta.url).href,wf=new URL(`sticker-33-BvEjmLTU.webp`,import.meta.url).href,Tf=new URL(`sticker-34-o29hesrv.webp`,import.meta.url).href,Ef=new URL(`sticker-35-C22bBuOe.webp`,import.meta.url).href,Df=new URL(`sticker-36-8VFdyNX0.webp`,import.meta.url).href,Of=new URL(`sticker-37-WI0IjXz4.webp`,import.meta.url).href,kf=new URL(`sticker-38-CEv6l41L.webp`,import.meta.url).href,Af=new URL(`sticker-39-CzXQAzsr.webp`,import.meta.url).href,jf=new URL(`sticker-40-CDCuHljK.webp`,import.meta.url).href,Mf=new URL(`sticker-41-OPJdO9v7.webp`,import.meta.url).href,Nf=new URL(`sticker-42-DbENlZHH.webp`,import.meta.url).href,Pf=new URL(`sticker-43-BfWmVAQv.webp`,import.meta.url).href,Ff=new URL(`sticker-44-F69EuzQu.webp`,import.meta.url).href,If=new URL(`sticker-45-BOld6QLC.webp`,import.meta.url).href,Lf=new URL(`sticker-46-CiG4Fqy0.webp`,import.meta.url).href,Rf=new URL(`sticker-47-uOA_Qpls.webp`,import.meta.url).href,zf=new URL(`sticker-48-BOibNiNm.webp`,import.meta.url).href,Bf=new URL(`sticker-49-D58YAT_W.webp`,import.meta.url).href,Vf=new URL(`sticker-50-BvFWxRb_.webp`,import.meta.url).href,Hf=new URL(`sticker-51-DhDlomVr.webp`,import.meta.url).href,Uf=new URL(`sticker-52-BrS18pjn.webp`,import.meta.url).href,Wf=new URL(`sticker-53-DKLmIBjB.webp`,import.meta.url).href,Gf=new URL(`sticker-54-Ccr-NIhA.webp`,import.meta.url).href,Kf=new URL(`sticker-55-CjtgPmJQ.webp`,import.meta.url).href,qf=new URL(`sticker-56-CMsMrzi1.webp`,import.meta.url).href,Jf=new URL(`sticker-57-Dq8WIk1i.webp`,import.meta.url).href,Yf=new URL(`sticker-58-ABb96pXM.webp`,import.meta.url).href,Xf=new URL(`sticker-59-BZNN1-Y_.webp`,import.meta.url).href,Zf=new URL(`sticker-60-tIy1RMCq.webp`,import.meta.url).href,Qf=new URL(`sticker-slot-DC3jJpDf.webp`,import.meta.url).href,$f=new URL(`tile-grass-QIeEcD1O.webp`,import.meta.url).href,ep=new URL(`tile-mud-Doetpm6A.webp`,import.meta.url).href,tp=new URL(`tile-pen-AvImfhfG.webp`,import.meta.url).href,np=new URL(`wolf-C5Edfesn.webp`,import.meta.url).href,rp=new URL(`woof-burst-DLjCXiad.webp`,import.meta.url).href,ip={version:1,about:`Fixed list of web art exports. The art session produces exactly these files under art/web/; the web session loads exactly these paths. Sizes are the exported pixel size. 'alpha' files have a transparent background. 'anchor' is the point that sits on the placement position, as a fraction of the image from its top-left corner (so [0.5, 1] is bottom-centre). High-resolution originals go to art/source/<id>.png with art/source/manifest.json recording the prompt, references and processing for each.`,palette:{paper:`#F5ECD7`,navy:`#22304F`,coral:`#F2674A`,teal:`#2E9E8F`,sunflower:`#F6C445`},conventions:{standing:`A flat paper cut-out with a white die-cut border, drawn front-on in three-quarter view and facing right; the game mirrors it for leftward motion. The image holds the cut-out only: no folded tab, no shadow, no ground. The game adds the tab and the shadow.`,tile:`One board tile seen from straight above, edge to edge with no border, printed-page look, so that neighbouring tiles join without a visible seam.`,text:`No lettering in any image except 'logo'.`,sticker:`A single sticker on its own: a flat illustration with a white die-cut border, drawn front-on, no lettering, transparent outside the border.`},priority:[`1 style sheet (art/source/style-sheet.png, not exported to web)`,`2 dog and white sheep poses, tile-grass, tile-pen, rocks, fence`,`3 black sheep poses, wolf, tile-mud, hole`,`4 page, book-base, desk`,`5 stars, buttons, panel, icons, ghost-finger`,`6 woof-burst, paper-grain, halftone`,`7 title-page, logo, app icon`,`8 Phase 5: the new icons, paw stamps, sticker slot, calendar cell, stamp ring, then the five 12-sticker sheets (sticker-01 to sticker-60)`,`9 Phase 5 Home layers: home-plate, then home-sun, home-cloud, home-dog, home-sheep-1 to home-sheep-4, cut from title-page`],assets:[{id:`dog-idle`,file:`art/web/dog-idle.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Coral sheepdog, sitting or standing alert. The hottest colour on the page.`},{id:`dog-alarm`,file:`art/web/dog-alarm.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Same dog mid-bark: mouth open, ears up. Used for the leap and the bark.`},{id:`dog-content`,file:`art/web/dog-content.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Same dog pleased with itself. Used on a win.`},{id:`sheep-white-idle`,file:`art/web/sheep-white-idle.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Bare paper with navy linework.`},{id:`sheep-white-alarm`,file:`art/web/sheep-white-alarm.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Startled or running: wide eyes, legs splayed.`},{id:`sheep-white-content`,file:`art/web/sheep-white-content.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Relaxed in the pen: eyes closed or chewing.`},{id:`sheep-black-idle`,file:`art/web/sheep-black-idle.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Solid navy, same shapes as the white sheep.`},{id:`sheep-black-alarm`,file:`art/web/sheep-black-alarm.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Startled or running.`},{id:`sheep-black-content`,file:`art/web/sheep-black-content.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Relaxed in the pen.`},{id:`wolf`,file:`art/web/wolf.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`One still. Wolves never move.`},{id:`rock-1`,file:`art/web/rock-1.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Rock variant.`},{id:`rock-2`,file:`art/web/rock-2.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Rock variant.`},{id:`rock-3`,file:`art/web/rock-3.webp`,width:256,height:256,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Rock variant.`},{id:`fence-segment`,file:`art/web/fence-segment.webp`,width:256,height:128,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Sunflower pen fence spanning one tile edge, rails running the full width so segments join.`},{id:`fence-post`,file:`art/web/fence-post.webp`,width:64,height:128,alpha:!0,anchor:[.5,1],kind:`standing`,notes:`Corner post for the fence.`},{id:`tile-grass`,file:`art/web/tile-grass.webp`,width:256,height:256,alpha:!1,anchor:[.5,.5],kind:`tile`,notes:`Teal grass.`},{id:`tile-mud`,file:`art/web/tile-mud.webp`,width:256,height:256,alpha:!1,anchor:[.5,.5],kind:`tile`,notes:`Mud, clearly different from grass at a glance, within the five inks.`},{id:`tile-pen`,file:`art/web/tile-pen.webp`,width:256,height:256,alpha:!1,anchor:[.5,.5],kind:`tile`,notes:`Sunflower pen floor.`},{id:`hole`,file:`art/web/hole.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`overlay`,notes:`Torn-paper hole seen from above, laid over a tile; the torn edge shows paper thickness, the inside is dark navy.`},{id:`page`,file:`art/web/page.webp`,width:896,height:1216,alpha:!1,anchor:[.5,.5],kind:`surface`,notes:`One blank right-hand page of the book, cream paper seen from straight above, edge to edge. The board is drawn on it and it is the sheet that turns.`},{id:`book-base`,file:`art/web/book-base.webp`,width:1024,height:1408,alpha:!0,anchor:[.5,.5],kind:`surface`,notes:`The open book under the page, from straight above: cover edge and the stack of page edges showing on the right and bottom, spine along the left side. Centre may be plain; the page covers it.`},{id:`desk`,file:`art/web/desk.webp`,width:1080,height:1920,alpha:!1,anchor:[.5,.5],kind:`surface`,notes:`Desk top from straight above, portrait. Quiet in the middle where the book lies; a few printed desk objects near the edges are welcome.`},{id:`title-page`,file:`art/web/title-page.webp`,width:1080,height:1920,alpha:!1,anchor:[.5,.5],kind:`surface`,notes:`Title illustration, portrait, with clear space in the upper third for the logo and in the lower third for a button. No lettering. Phase 5: Home draws the home-* layers instead; the web game no longer loads this file.`},{id:`logo`,file:`art/web/logo.webp`,width:1024,height:512,alpha:!0,anchor:[.5,.5],kind:`ui`,optional:!0,notes:`The word Bark! in chunky linocut lettering. Keep it only if the spelling is exactly right; otherwise leave it out and the game sets the title in its display font.`},{id:`star-full`,file:`art/web/star-full.webp`,width:192,height:192,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Sunflower star that reads as a rubber stamp impression.`},{id:`star-empty`,file:`art/web/star-empty.webp`,width:192,height:192,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`The same star as an unfilled outline.`},{id:`btn-round`,file:`art/web/btn-round.webp`,width:192,height:192,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Blank round paper button; an icon is drawn on top by the game.`},{id:`btn-wide`,file:`art/web/btn-wide.webp`,width:512,height:160,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Blank wide paper button; the label is set in the display font by the game.`},{id:`panel`,file:`art/web/panel.webp`,width:768,height:768,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Blank paper card with a die-cut border for the win, lose, settings and ad panels.`},{id:`icon-undo`,file:`art/web/icon-undo.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Navy, chunky.`},{id:`icon-restart`,file:`art/web/icon-restart.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Navy, chunky.`},{id:`icon-hint`,file:`art/web/icon-hint.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Light bulb.`},{id:`icon-settings`,file:`art/web/icon-settings.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Cog.`},{id:`icon-sound-on`,file:`art/web/icon-sound-on.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Speaker with waves.`},{id:`icon-sound-off`,file:`art/web/icon-sound-off.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Speaker crossed out.`},{id:`icon-next`,file:`art/web/icon-next.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Arrow pointing right.`},{id:`icon-play`,file:`art/web/icon-play.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Play triangle.`},{id:`icon-back`,file:`art/web/icon-back.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Arrow pointing left.`},{id:`icon-lock`,file:`art/web/icon-lock.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Padlock for locked levels.`},{id:`icon-bark`,file:`art/web/icon-bark.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Small bark burst shown beside the barks-left number.`},{id:`ghost-finger`,file:`art/web/ghost-finger.webp`,width:256,height:256,alpha:!0,anchor:[.5,.06],kind:`ui`,notes:`Paper cut-out hand pointing straight up, fingertip at the top centre.`},{id:`woof-burst`,file:`art/web/woof-burst.webp`,width:512,height:512,alpha:!0,anchor:[.5,.5],kind:`fx`,notes:`Spiky comic burst shape with an empty middle; the game sets WOOF! in its display font on top.`},{id:`paper-grain`,file:`art/web/paper-grain.webp`,width:512,height:512,alpha:!1,anchor:[.5,.5],kind:`texture`,notes:`Seamlessly tiling paper grain, greyscale around mid-grey, for an overlay over the whole frame.`},{id:`halftone`,file:`art/web/halftone.webp`,width:512,height:512,alpha:!1,anchor:[.5,.5],kind:`texture`,notes:`Seamlessly tiling halftone dot screen, black dots on white.`},{id:`icon-512`,file:`art/web/icon-512.png`,width:512,height:512,alpha:!1,anchor:[.5,.5],kind:`app-icon`,notes:`App icon: the coral dog's head on cream. Original at art/source/app-icon.png, 1024 square.`},{id:`icon-192`,file:`art/web/icon-192.png`,width:192,height:192,alpha:!1,anchor:[.5,.5],kind:`app-icon`,notes:`The same icon, smaller.`},{id:`icon-continue`,file:`art/web/icon-continue.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A play triangle with a small curved arrow behind it: carry on where you left off.`},{id:`icon-daily`,file:`art/web/icon-daily.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A tear-off desk calendar page with a paw print on it, no numbers or letters.`},{id:`icon-stickers`,file:`art/web/icon-stickers.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A small open sticker album with one peeling sticker corner.`},{id:`icon-flame`,file:`art/web/icon-flame.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A chunky coral flame for the daily streak.`},{id:`icon-token`,file:`art/web/icon-token.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A dog biscuit (bone-shaped) with a small light-bulb notch: one hint token.`},{id:`icon-haptics`,file:`art/web/icon-haptics.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A phone outline with short vibration lines on both sides.`},{id:`icon-motion`,file:`art/web/icon-motion.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A snail: the reduced-motion setting.`},{id:`icon-credits`,file:`art/web/icon-credits.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`icon`,notes:`Phase 5. A rolled scroll with a ribbon: the credits page.`},{id:`paw-stamp`,file:`art/web/paw-stamp.webp`,width:192,height:192,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Phase 5. A solid coral paw print that reads as a rubber stamp impression, like star-full: a daily solved.`},{id:`paw-hollow`,file:`art/web/paw-hollow.webp`,width:192,height:192,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Phase 5. The same paw as an outline stamp with an empty middle: a day covered by the streak's free miss.`},{id:`sticker-slot`,file:`art/web/sticker-slot.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Phase 5. An empty sticker place on the album page: a soft dashed die-cut outline, faintly printed, transparent inside.`},{id:`calendar-cell`,file:`art/web/calendar-cell.webp`,width:128,height:128,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Phase 5. One square day cell of a printed calendar grid, cream paper with a thin navy rule; the game sets the day number in its font.`},{id:`stamp-ring`,file:`art/web/stamp-ring.webp`,width:384,height:384,alpha:!0,anchor:[.5,.5],kind:`ui`,notes:`Phase 5. A round rubber-stamp ring with an empty middle, slightly uneven ink; the game sets CHAPTER COMPLETE in its font on top.`},{id:`sticker-01`,file:`art/web/sticker-01.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 1, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-02`,file:`art/web/sticker-02.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 2, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-03`,file:`art/web/sticker-03.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 3, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-04`,file:`art/web/sticker-04.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 4, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-05`,file:`art/web/sticker-05.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 5, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-06`,file:`art/web/sticker-06.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 6, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-07`,file:`art/web/sticker-07.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 7, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-08`,file:`art/web/sticker-08.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 8, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-09`,file:`art/web/sticker-09.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 9, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-10`,file:`art/web/sticker-10.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 10, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-11`,file:`art/web/sticker-11.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 11, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-12`,file:`art/web/sticker-12.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 12, chapter 1 theme (rocks and meadow): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-13`,file:`art/web/sticker-13.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 13, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-14`,file:`art/web/sticker-14.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 14, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-15`,file:`art/web/sticker-15.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 15, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-16`,file:`art/web/sticker-16.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 16, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-17`,file:`art/web/sticker-17.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 17, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-18`,file:`art/web/sticker-18.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 18, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-19`,file:`art/web/sticker-19.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 19, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-20`,file:`art/web/sticker-20.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 20, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-21`,file:`art/web/sticker-21.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 21, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-22`,file:`art/web/sticker-22.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 22, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-23`,file:`art/web/sticker-23.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 23, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-24`,file:`art/web/sticker-24.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 24, chapter 2 theme (mud and rain): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-25`,file:`art/web/sticker-25.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 25, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-26`,file:`art/web/sticker-26.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 26, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-27`,file:`art/web/sticker-27.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 27, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-28`,file:`art/web/sticker-28.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 28, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-29`,file:`art/web/sticker-29.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 29, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-30`,file:`art/web/sticker-30.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 30, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-31`,file:`art/web/sticker-31.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 31, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-32`,file:`art/web/sticker-32.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 32, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-33`,file:`art/web/sticker-33.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 33, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-34`,file:`art/web/sticker-34.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 34, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-35`,file:`art/web/sticker-35.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 35, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-36`,file:`art/web/sticker-36.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 36, chapter 3 theme (holes and burrows): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-37`,file:`art/web/sticker-37.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 37, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-38`,file:`art/web/sticker-38.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 38, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-39`,file:`art/web/sticker-39.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 39, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-40`,file:`art/web/sticker-40.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 40, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-41`,file:`art/web/sticker-41.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 41, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-42`,file:`art/web/sticker-42.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 42, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-43`,file:`art/web/sticker-43.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 43, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-44`,file:`art/web/sticker-44.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 44, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-45`,file:`art/web/sticker-45.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 45, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-46`,file:`art/web/sticker-46.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 46, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-47`,file:`art/web/sticker-47.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 47, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-48`,file:`art/web/sticker-48.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 48, chapter 4 theme (black sheep and night): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-49`,file:`art/web/sticker-49.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 49, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-50`,file:`art/web/sticker-50.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 50, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-51`,file:`art/web/sticker-51.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 51, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-52`,file:`art/web/sticker-52.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 52, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-53`,file:`art/web/sticker-53.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 53, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-54`,file:`art/web/sticker-54.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 54, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-55`,file:`art/web/sticker-55.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 55, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-56`,file:`art/web/sticker-56.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 56, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-57`,file:`art/web/sticker-57.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 57, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-58`,file:`art/web/sticker-58.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 58, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-59`,file:`art/web/sticker-59.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 59, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`sticker-60`,file:`art/web/sticker-60.webp`,width:256,height:256,alpha:!0,anchor:[.5,.5],kind:`sticker`,notes:`Phase 5. Sticker for level 60, chapter 5 theme (wolves and the forest): one cut-out sticker with a white die-cut border, no lettering. Made on a 12-sticker sheet per chapter and sliced.`},{id:`home-plate`,file:`art/web/home-plate.webp`,width:1080,height:1920,alpha:!1,anchor:[.5,.5],kind:`home-layer`,notes:`Phase 5 Home. title-page with the dog, the four sheep, the cloud and the sun removed and the scene behind them restored: sky, sun-free corner, fence, field, grass marks. Opaque.`},{id:`home-sun`,file:`art/web/home-sun.webp`,width:1080,height:1920,alpha:!0,anchor:[.8554,.0719],kind:`home-layer`,notes:`Phase 5 Home. The sun from title-page (disc and rays) on its own. Full 1080x1920 canvas, aligned with title-page; transparent except this figure. 'anchor' is the figure's pivot (its feet, or its centre for the sun and cloud), as a fraction of the canvas, set by the art session.`},{id:`home-cloud`,file:`art/web/home-cloud.webp`,width:1080,height:1920,alpha:!0,anchor:[.788,.3354],kind:`home-layer`,notes:`Phase 5 Home. The cloud from title-page on its own. Full 1080x1920 canvas, aligned with title-page; transparent except this figure. 'anchor' is the figure's pivot (its feet, or its centre for the sun and cloud), as a fraction of the canvas, set by the art session.`},{id:`home-dog`,file:`art/web/home-dog.webp`,width:1080,height:1920,alpha:!0,anchor:[.2181,.6672],kind:`home-layer`,notes:`Phase 5 Home. The leaping coral dog from title-page on its own, with its own cut-out shadow if the painting has one. Full 1080x1920 canvas, aligned with title-page; transparent except this figure. 'anchor' is the figure's pivot (its feet, or its centre for the sun and cloud), as a fraction of the canvas, set by the art session.`},{id:`home-sheep-1`,file:`art/web/home-sheep-1.webp`,width:1080,height:1920,alpha:!0,anchor:[.5606,.6099],kind:`home-layer`,notes:`Phase 5 Home. The white sheep nearest the dog (top middle in title-page). Full 1080x1920 canvas, aligned with title-page; transparent except this figure. 'anchor' is the figure's pivot (its feet, or its centre for the sun and cloud), as a fraction of the canvas, set by the art session.`},{id:`home-sheep-2`,file:`art/web/home-sheep-2.webp`,width:1080,height:1920,alpha:!0,anchor:[.8282,.6198],kind:`home-layer`,notes:`Phase 5 Home. The white sheep at the top right of the flock. Full 1080x1920 canvas, aligned with title-page; transparent except this figure. 'anchor' is the figure's pivot (its feet, or its centre for the sun and cloud), as a fraction of the canvas, set by the art session.`},{id:`home-sheep-3`,file:`art/web/home-sheep-3.webp`,width:1080,height:1920,alpha:!0,anchor:[.3824,.7557],kind:`home-layer`,notes:`Phase 5 Home. The white sheep at the bottom left of the flock. Full 1080x1920 canvas, aligned with title-page; transparent except this figure. 'anchor' is the figure's pivot (its feet, or its centre for the sun and cloud), as a fraction of the canvas, set by the art session.`},{id:`home-sheep-4`,file:`art/web/home-sheep-4.webp`,width:1080,height:1920,alpha:!0,anchor:[.7157,.7573],kind:`home-layer`,notes:`Phase 5 Home. The black sheep at the bottom right of the flock. Full 1080x1920 canvas, aligned with title-page; transparent except this figure. 'anchor' is the figure's pivot (its feet, or its centre for the sun and cloud), as a fraction of the canvas, set by the art session.`}]},ap=Object.assign({"../../art/web/book-base.webp":Vu,"../../art/web/btn-round.webp":Hu,"../../art/web/btn-wide.webp":Uu,"../../art/web/calendar-cell.webp":Wu,"../../art/web/desk.webp":Gu,"../../art/web/dog-alarm.webp":Ku,"../../art/web/dog-content.webp":qu,"../../art/web/dog-idle.webp":Ju,"../../art/web/fence-post.webp":Yu,"../../art/web/fence-segment.webp":Xu,"../../art/web/ghost-finger.webp":Zu,"../../art/web/halftone.webp":Qu,"../../art/web/hole.webp":$u,"../../art/web/home-cloud.webp":ed,"../../art/web/home-dog.webp":td,"../../art/web/home-plate.webp":nd,"../../art/web/home-sheep-1.webp":rd,"../../art/web/home-sheep-2.webp":id,"../../art/web/home-sheep-3.webp":ad,"../../art/web/home-sheep-4.webp":od,"../../art/web/home-sun.webp":sd,"../../art/web/icon-back.webp":cd,"../../art/web/icon-bark.webp":ld,"../../art/web/icon-continue.webp":ud,"../../art/web/icon-credits.webp":dd,"../../art/web/icon-daily.webp":fd,"../../art/web/icon-flame.webp":pd,"../../art/web/icon-haptics.webp":md,"../../art/web/icon-hint.webp":hd,"../../art/web/icon-lock.webp":gd,"../../art/web/icon-motion.webp":_d,"../../art/web/icon-next.webp":vd,"../../art/web/icon-play.webp":yd,"../../art/web/icon-restart.webp":bd,"../../art/web/icon-settings.webp":xd,"../../art/web/icon-sound-off.webp":Sd,"../../art/web/icon-sound-on.webp":Cd,"../../art/web/icon-stickers.webp":wd,"../../art/web/icon-token.webp":Td,"../../art/web/icon-undo.webp":Ed,"../../art/web/logo.webp":Dd,"../../art/web/page.webp":Od,"../../art/web/panel.webp":kd,"../../art/web/paper-grain.webp":Ad,"../../art/web/paw-hollow.webp":jd,"../../art/web/paw-stamp.webp":Md,"../../art/web/rock-1.webp":Nd,"../../art/web/rock-2.webp":Pd,"../../art/web/rock-3.webp":Fd,"../../art/web/sheep-black-alarm.webp":Id,"../../art/web/sheep-black-content.webp":Ld,"../../art/web/sheep-black-idle.webp":Rd,"../../art/web/sheep-white-alarm.webp":zd,"../../art/web/sheep-white-content.webp":Bd,"../../art/web/sheep-white-idle.webp":Vd,"../../art/web/stamp-ring.webp":Hd,"../../art/web/star-empty.webp":Ud,"../../art/web/star-full.webp":Wd,"../../art/web/sticker-01.webp":Gd,"../../art/web/sticker-02.webp":Kd,"../../art/web/sticker-03.webp":qd,"../../art/web/sticker-04.webp":Jd,"../../art/web/sticker-05.webp":Yd,"../../art/web/sticker-06.webp":Xd,"../../art/web/sticker-07.webp":Zd,"../../art/web/sticker-08.webp":Qd,"../../art/web/sticker-09.webp":$d,"../../art/web/sticker-10.webp":ef,"../../art/web/sticker-11.webp":tf,"../../art/web/sticker-12.webp":nf,"../../art/web/sticker-13.webp":rf,"../../art/web/sticker-14.webp":af,"../../art/web/sticker-15.webp":of,"../../art/web/sticker-16.webp":sf,"../../art/web/sticker-17.webp":cf,"../../art/web/sticker-18.webp":lf,"../../art/web/sticker-19.webp":uf,"../../art/web/sticker-20.webp":df,"../../art/web/sticker-21.webp":ff,"../../art/web/sticker-22.webp":pf,"../../art/web/sticker-23.webp":mf,"../../art/web/sticker-24.webp":hf,"../../art/web/sticker-25.webp":gf,"../../art/web/sticker-26.webp":_f,"../../art/web/sticker-27.webp":vf,"../../art/web/sticker-28.webp":yf,"../../art/web/sticker-29.webp":bf,"../../art/web/sticker-30.webp":xf,"../../art/web/sticker-31.webp":Sf,"../../art/web/sticker-32.webp":Cf,"../../art/web/sticker-33.webp":wf,"../../art/web/sticker-34.webp":Tf,"../../art/web/sticker-35.webp":Ef,"../../art/web/sticker-36.webp":Df,"../../art/web/sticker-37.webp":Of,"../../art/web/sticker-38.webp":kf,"../../art/web/sticker-39.webp":Af,"../../art/web/sticker-40.webp":jf,"../../art/web/sticker-41.webp":Mf,"../../art/web/sticker-42.webp":Nf,"../../art/web/sticker-43.webp":Pf,"../../art/web/sticker-44.webp":Ff,"../../art/web/sticker-45.webp":If,"../../art/web/sticker-46.webp":Lf,"../../art/web/sticker-47.webp":Rf,"../../art/web/sticker-48.webp":zf,"../../art/web/sticker-49.webp":Bf,"../../art/web/sticker-50.webp":Vf,"../../art/web/sticker-51.webp":Hf,"../../art/web/sticker-52.webp":Uf,"../../art/web/sticker-53.webp":Wf,"../../art/web/sticker-54.webp":Gf,"../../art/web/sticker-55.webp":Kf,"../../art/web/sticker-56.webp":qf,"../../art/web/sticker-57.webp":Jf,"../../art/web/sticker-58.webp":Yf,"../../art/web/sticker-59.webp":Xf,"../../art/web/sticker-60.webp":Zf,"../../art/web/sticker-slot.webp":Qf,"../../art/web/tile-grass.webp":$f,"../../art/web/tile-mud.webp":ep,"../../art/web/tile-pen.webp":tp,"../../art/web/wolf.webp":np,"../../art/web/woof-burst.webp":rp});function op(e){return`sticker-${String(e).padStart(2,`0`)}`}var sp=`#FF00FF`,cp=ip.palette,lp=new Map;for(let e of ip.assets){let t=e.file;lp.set(e.id,{id:e.id,file:t,width:e.width,height:e.height,alpha:e.alpha,anchor:e.anchor,kind:e.kind,optional:e.optional===!0,url:ap[`../../${t}`]??null})}var up=new Set([`title-page`,`icon-512`,`icon-192`]),dp=[...lp.keys()].filter(e=>!up.has(e));function fp(e){let t=lp.get(e);if(!t)throw Error(`asset-contract.json has no asset "${e}"`);return t}function pp(e){return fp(e).url!==null}var mp={missing:dp.filter(e=>fp(e).url===null),wrongSize:[]},hp=typeof location<`u`&&new URLSearchParams(location.search).has(`labelMissing`),gp=new Map,_p=new Map;function vp(e){let t=_p.get(e);if(t)return t;let n=fp(e);t=document.createElement(`canvas`),t.width=n.width,t.height=n.height;let r=t.getContext(`2d`);if(r.fillStyle=sp,r.fillRect(0,0,t.width,t.height),hp){let n=dp.indexOf(e);r.fillStyle=`hsl(${285+n*23%70}, 100%, ${38+n*37%34}%)`,r.fillRect(0,0,t.width,t.height),r.fillStyle=`#fff`,r.font=`${Math.max(12,Math.round(t.width/9))}px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,t.width/2,t.height/2)}return _p.set(e,t),t}async function yp(e=dp,t){let n=e.filter(e=>fp(e).url!==null&&!gp.has(e)),r=0;t?.(0,n.length);let i=()=>{r++,t?.(r,n.length)};await Promise.all(n.map(async e=>{try{await bp(e)}finally{i()}}))}async function bp(e){let t=fp(e);if(!t.url||gp.has(e))return;let n=new Image;n.decoding=`async`,n.src=t.url;try{await n.decode()}catch{mp.missing.includes(e)||mp.missing.push(e);return}(n.naturalWidth!==t.width||n.naturalHeight!==t.height)&&mp.wrongSize.push({id:e,expected:`${t.width}x${t.height}`,actual:`${n.naturalWidth}x${n.naturalHeight}`}),gp.set(e,n)}function xp(e){return gp.has(e)}function Sp(e){return gp.get(e)??vp(e)}function Cp(e,t=``){let n=fp(e),r;if(n.url&&(gp.has(e)||!mp.missing.includes(e))){let e=document.createElement(`img`);e.src=n.url,e.alt=``,e.draggable=!1,r=e}else r=document.createElement(`div`),r.style.background=hp?`url(${vp(e).toDataURL()}) center / 100% 100%`:sp;return r.className=`asset asset-${e}${t?` ${t}`:``}`,r.dataset.asset=e,r.style.aspectRatio=`${n.width} / ${n.height}`,r}var wp={desk:0,book:1,sheet:2,ink:10,shadow:20,tab:21,cutout:30,air:60},Tp={ink:.006,shadow:.012,tab:.018},Z={turn:`turn`,settle:`settle`,preview:`preview`,fx:`fx`,page:`page`,celebrate:`celebrate`},Ep=new URL(`BowlbyOne-Regular-DCmb-ne3.ttf`,import.meta.url).href,Dp=`Bark Display`,Op=null;function kp(){return Op??=(async()=>{let e=new FontFace(Dp,`url("${Ep}") format("truetype")`,{weight:`400`,style:`normal`,display:`block`});document.fonts.add(e),await e.load(),await document.fonts.load(`32px "${Dp}"`)})(),Op}function Ap(e){return`${Math.round(e)}px "${Dp}"`}var jp=new Map;function Mp(e,t={}){let n=`${e}|${t.repeat?`r`:`c`}`,r=jp.get(n);return r||(r=new Vr(Sp(e)),r.colorSpace=``,r.wrapS=r.wrapT=t.repeat?Et:Dt,r.minFilter=Pt,r.magFilter=Mt,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,jp.set(n,r),r)}function Np(e){let t=fp(e);return t.width/t.height}var Pp=1.70158,Fp=Pp*1.525,Ip=2.70158;function Lp(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}var Rp={linear:e=>e,quadIn:e=>e*e,quadOut:e=>1-(1-e)*(1-e),quadInOut:e=>e<.5?2*e*e:1-(-2*e+2)**2/2,cubicIn:e=>e*e*e,cubicOut:e=>1-(1-e)**3,cubicInOut:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,quartOut:e=>1-(1-e)**4,sineInOut:e=>-(Math.cos(Math.PI*e)-1)/2,backIn:e=>Ip*e*e*e-Pp*e*e,backOut:e=>1+Ip*(e-1)**3+Pp*(e-1)**2,backInOut:e=>e<.5?(2*e)**2*(7.189819*e-Fp)/2:((2*e-2)**2*(3.5949095*(e*2-2)+Fp)+2)/2,elasticOut:e=>e===0||e===1?e:2**(-10*e)*Math.sin((e*10-.75)*(2*Math.PI/3))+1,bounceOut:Lp};function zp(e){let t=Rp[e];if(!t)throw Error(`tuning.json names an unknown easing: ${e}`);return t}function Bp(e){switch(e){case`linear`:return`linear`;case`quadIn`:return`cubic-bezier(0.11, 0, 0.5, 0)`;case`quadOut`:return`cubic-bezier(0.5, 1, 0.89, 1)`;case`quadInOut`:return`cubic-bezier(0.45, 0, 0.55, 1)`;case`cubicIn`:return`cubic-bezier(0.32, 0, 0.67, 0)`;case`cubicOut`:return`cubic-bezier(0.33, 1, 0.68, 1)`;case`cubicInOut`:return`cubic-bezier(0.65, 0, 0.35, 1)`;case`quartOut`:return`cubic-bezier(0.25, 1, 0.5, 1)`;case`sineInOut`:return`cubic-bezier(0.37, 0, 0.63, 1)`;case`backIn`:return`cubic-bezier(0.36, 0, 0.66, -0.56)`;case`backOut`:case`elasticOut`:case`bounceOut`:return`cubic-bezier(0.34, 1.56, 0.64, 1)`;case`backInOut`:return`cubic-bezier(0.68, -0.6, 0.32, 1.6)`;default:throw Error(`tuning.json names an unknown easing: ${e}`)}}var Vp=e=>e<0?0:e>1?1:e,Hp=(e,t,n)=>e+(t-e)*n;function Up(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return{next:n,range:(e,t)=>e+(t-e)*n(),int:e=>Math.floor(n()*e),pick:e=>e[Math.floor(n()*e.length)]}}function Wp(e,t,n){let r=(e^Math.imul(t+374761393,668265263)^Math.imul(n+1274126177,2246822519))>>>0;return r=Math.imul(r^r>>>13,1274126177)>>>0,((r^r>>>16)>>>0)/4294967296}var Gp=256,Kp=Gp*4,qp=18,Jp=15*Math.PI/180,Yp=13,Xp={dot:0,star:1,scrapA:2,scrapB:3,blob:4,ringA:5,ringB:6,ringC:7,bar:8,cross:9,ringThick:10,tick:11},Zp=[Xp.ringA,Xp.ringB,Xp.ringC];function Qp(e){let t=e%4,n=Math.floor(e/4);return[t/4,1-(n+1)/4]}function $p(e,t,n){let r=e.range(0,Math.PI*2),i=e.range(0,Math.PI*2),a=e.range(.4,1)*n,o=e.range(.2,.6)*n,s=[];for(let c=0;c<t;c++){let l=c/t*Math.PI*2;s.push(1+a*Math.sin(2*l+r)+o*Math.sin(3*l+i)+e.range(-.25,.25)*n)}return s}function em(e,t){e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);e.closePath()}function tm(e,t,n,r,i=!1){return(a,o)=>{let s=r.length,c=[];for(let a=0;a<s;a++){let l=i?s-1-a:a,u=l/s*Math.PI*2,d=Math.max(1,n*r[l]+(i?o:-o));c.push([e+Math.cos(u)*d,t+Math.sin(u)*d])}em(a,c)}}function nm(e,t,n,r,i,a){let o=tm(e,t,n,$p(i,48,a)),s=tm(e,t,r,$p(i,48,a*1.4),!0);return(e,t)=>{o(e,t),s(e,t)}}function rm(e,t,n,r,i,a){let o=()=>a.range(-.12,.12)*r,s=[[-n/2+o(),-r/2+o()],[n/2+o(),-r/2*a.range(.75,1.1)+o()],[n/2+o(),r/2*a.range(.75,1.1)+o()],[-n/2+o(),r/2+o()]],c=Math.cos(i),l=Math.sin(i);return(n,r)=>{em(n,s.map(([n,i])=>{let a=n-Math.sign(n)*r,o=i-Math.sign(i)*r;return[e+a*c-o*l,t+a*l+o*c]}))}}function im(e,t,n,r){let i=[];for(let e=0;e<10;e++)i.push((e%2?.48:1)*r.range(.9,1.06));let a=r.range(-.15,.15)-Math.PI/2;return(r,o)=>{let s=[];for(let r=0;r<10;r++){let c=a+r/10*Math.PI*2,l=Math.max(1,n*i[r]-o*(r%2?1:1.9));s.push([e+Math.cos(c)*l,t+Math.sin(c)*l])}em(r,s)}}function am(e,t,n,r){let i=5+r.int(3),a=[];for(let e=0;e<i;e++)a.push({t:e/i*Math.PI*2+r.range(-.3,.3),r:n*r.range(.62,1)});return(n,r)=>{em(n,a.map(({t:n,r:i})=>[e+Math.cos(n)*Math.max(1,i-r),t+Math.sin(n)*Math.max(1,i-r)]))}}function om(...e){return(t,n)=>{for(let r of e)r(t,n)}}var sm=null;function cm(){if(sm)return sm;let e=document.createElement(`canvas`);e.width=e.height=Kp;let t=e.getContext(`2d`,{willReadFrequently:!0});t.fillStyle=`#000`,t.fillRect(0,0,Kp,Kp);let n=Up(47692),r=Gp/2,i=Gp*.44,a=new Map;a.set(Xp.dot,{path:tm(r,r,i,$p(n,40,.05)),evenOdd:!1}),a.set(Xp.star,{path:im(r,134.7584,i,n),evenOdd:!1}),a.set(Xp.scrapA,{path:am(r,r,i,n),evenOdd:!1}),a.set(Xp.scrapB,{path:am(r,r,i,n),evenOdd:!1}),a.set(Xp.blob,{path:om(tm(r,139.264,i*.82,$p(n,40,.16)),tm(r-i*.45,r-i*.5,i*.34,$p(n,24,.1)),tm(189.952,r-i*.38,i*.22,$p(n,24,.1))),evenOdd:!1}),a.set(Xp.ringA,{path:nm(r,r,i,i*.7,n,.05),evenOdd:!0}),a.set(Xp.ringB,{path:nm(r,r,i,i*.74,n,.06),evenOdd:!0}),a.set(Xp.ringC,{path:nm(r,r,i,i*.68,n,.05),evenOdd:!0}),a.set(Xp.bar,{path:rm(r,r,i*1.8,i*.42,n.range(-.04,.04),n),evenOdd:!1}),a.set(Xp.cross,{path:om(rm(r,r,i*1.9,i*.5,Math.PI/4+n.range(-.05,.05),n),rm(r,r,i*1.9,i*.5,-Math.PI/4+n.range(-.05,.05),n)),evenOdd:!1}),a.set(Xp.ringThick,{path:nm(r,r,i,i*.6,n,.04),evenOdd:!0}),a.set(Xp.tick,{path:rm(r,r,i*.5,i*1.7,n.range(-.05,.05),n),evenOdd:!1}),t.globalCompositeOperation=`lighter`;for(let[e,{path:n,evenOdd:r}]of a){let i=e%4*Gp,a=Math.floor(e/4)*Gp;t.save(),t.translate(i,a),t.beginPath(),t.rect(0,0,Gp,Gp),t.clip(),t.fillStyle=`#ff0000`,t.beginPath(),n(t,0),t.fill(r?`evenodd`:`nonzero`),t.fillStyle=`#00ff00`,t.beginPath(),n(t,Yp),t.fill(r?`evenodd`:`nonzero`),t.restore()}t.globalCompositeOperation=`source-over`;let o=t.getImageData(0,0,Kp,Kp),s=o.data,c=Math.cos(Jp),l=Math.sin(Jp),u=qp*Math.SQRT1_2;for(let e=0;e<Kp;e++)for(let t=0;t<Kp;t++){let n=(t*c+e*l)/qp,r=(-t*l+e*c)/qp,i=(n-Math.round(n))*qp,a=(r-Math.round(r))*qp,o=Math.min(.996,Math.sqrt(i*i+a*a)/u),d=(e*Kp+t)*4;s[d+2]=Math.round(o*255),s[d+3]=255}t.putImageData(o,0,0);let d=new ho(e);return d.colorSpace=``,d.wrapS=d.wrapT=Dt,d.minFilter=Pt,d.magFilter=Mt,d.generateMipmaps=!0,d.anisotropy=4,d.premultiplyAlpha=!1,d.needsUpdate=!0,sm=d,d}var lm=`
attribute float aPrint;
attribute vec2 aCell;
attribute vec3 aInk;
attribute float aRim;
varying vec2 vUv;
varying float vPrint;
varying vec3 vInk;
varying float vRim;
uniform float uCell;
void main() {
  vUv = uv * uCell + aCell;
  vPrint = aPrint;
  vInk = aInk;
  vRim = aRim;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`,um=`
uniform sampler2D map;
uniform vec3 uRim;
varying vec2 vUv;
varying float vPrint;
varying vec3 vInk;
varying float vRim;
void main() {
  vec4 t = texture2D(map, vUv);
  // Erode into the dot screen: at print 1 every dot has grown into its neighbours.
  float screen = clamp((vPrint * 1.1 - 0.05 - t.b) * 12.0 + 0.5, 0.0, 1.0);
  float a = t.r * screen;
  if (a < 0.02) discard;
  vec3 c = mix(vInk, uRim, vRim * (1.0 - t.g));
  gl_FragColor = vec4(c, a);
  #include <colorspace_fragment>
}
`,dm=new Float32Array(32);for(let e=0;e<16;e++){let[t,n]=Qp(e);dm[e*2]=t,dm[e*2+1]=n}var fm=null;function pm(e){return fm||(fm=new Ao({vertexShader:lm,fragmentShader:um,uniforms:{map:{value:cm()},uCell:{value:1/4},uRim:{value:new Oi(e)}},transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,side:2}),fm)}var mm=class{mesh;capacity;print;cell;ink;rim;attrs;n=0;constructor(e,t,n){this.capacity=e;let r=new xo(1,1);this.print=new Float32Array(e),this.cell=new Float32Array(e*2),this.ink=new Float32Array(e*3),this.rim=new Float32Array(e);let i=(e,t)=>{let n=new Qa(e,t);return n.setUsage(tr),n};this.attrs=[i(this.print,1),i(this.cell,2),i(this.ink,3),i(this.rim,1)],r.setAttribute(`aPrint`,this.attrs[0]),r.setAttribute(`aCell`,this.attrs[1]),r.setAttribute(`aInk`,this.attrs[2]),r.setAttribute(`aRim`,this.attrs[3]),this.mesh=new oo(r,t,e),this.mesh.instanceMatrix.setUsage(tr),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.count=0}begin(){this.n=0}push(e,t,n,r,i=0){let a=this.n;a>=this.capacity||r<=0||(this.mesh.setMatrixAt(a,e),this.cell[a*2]=dm[t*2],this.cell[a*2+1]=dm[t*2+1],this.ink[a*3]=n.r,this.ink[a*3+1]=n.g,this.ink[a*3+2]=n.b,this.print[a]=r>1?1:r,this.rim[a]=i,this.n=a+1)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0;for(let e of this.attrs)e.needsUpdate=!0}dispose(){this.mesh.geometry.dispose()}},hm={up:0,right:1,down:0,left:-1},gm={up:-1,right:0,down:1,left:0},_m=640,vm=256,ym=320,bm=Math.PI/180,xm=Math.PI*2;function Sm(e){return new Oi().setHex(parseInt(e.slice(1),16),Xn)}function Cm(e){let{timeline:t,camera:n}=e,r=e.tuning,i={paper:Sm(cp.paper),navy:Sm(cp.navy),coral:Sm(cp.coral),teal:Sm(cp.teal),sunflower:Sm(cp.sunflower)},a=[i.coral,i.teal,i.sunflower,i.navy,i.paper],o=new xi;o.name=`fx`;let s=pm(cp.navy),c=new mm(_m,s,wp.ink+1),l=new mm(vm,s,wp.air);c.mesh.name=`fx-ink`,l.mesh.name=`fx-air`,o.add(c.mesh,l.mesh);let u=Up(45223),d=null,f=.01,p=1,m=0,h=new qr,g=new K,_=new K,v=new Tr,y=new Tr,b=new Tr,x=new Tr,S=new Tr,C=new K(1,0,0),w=new K(0,1,0),T=new K(0,0,1),E=new Tr().setFromAxisAngle(C,-Math.PI/2);function D(e,t,n,r,i,a){return y.setFromAxisAngle(w,a),v.multiplyQuaternions(y,E),g.set(e,n,t),_.set(r,i,1),h.compose(g,v,_)}function O(e,t,n,r,i,a){return b.setFromAxisAngle(T,a),v.multiplyQuaternions(x,b),g.set(e,n,t),_.set(r,i,1),h.compose(g,v,_)}let k=[];function A(e,n,r,i){let a=k.find(e=>!e.on);a||(a={on:!1,t0:0,x:0,y:0,base:1,cell:Xp.ringA,yaw:0},k.push(a)),a.on=!0,a.t0=t.now+i,a.x=e,a.y=n,a.base=r,a.cell=u.pick(Zp),a.yaw=u.range(0,xm)}let j=new xo(1,1),M=new xo(1,1).rotateX(-Math.PI/2),N=null,P=[];function ee(){if(N)return N;let e=Sp(`woof-burst`),t=e.width,n=e.height,i=document.createElement(`canvas`);i.width=t,i.height=n;let a=i.getContext(`2d`);a.drawImage(e,0,0,t,n);let o=`WOOF!`;a.font=Ap(100),a.font=Ap(100*r.bark.burstTextWidth*t/Math.max(1,a.measureText(o).width)),a.textAlign=`center`,a.textBaseline=`middle`;let s=r.bark.burstTextMisregister*t;a.fillStyle=cp.coral,a.fillText(o,t/2+s,n/2+s*.6),a.fillStyle=cp.navy,a.fillText(o,t/2,n/2);let c=new ho(i);return c.colorSpace=``,c.minFilter=Pt,c.magFilter=Mt,c.generateMipmaps=!0,c.anisotropy=4,c.needsUpdate=!0,N=c,c}function F(){let e=P.find(e=>!e.on);if(e)return e;let t=new Ia({map:ee(),transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,side:2}),n=new Ja(j,t);n.name=`fx-woof`,n.matrixAutoUpdate=!1,n.renderOrder=wp.air+1,n.frustumCulled=!1,n.visible=!1,o.add(n);let r={on:!1,t0:0,x:0,y:0,tilt:0,mesh:n,mat:t};return P.push(r),r}let te=[];for(let e=0;e<ym;e++)te.push({on:!1,t0:0,life:1,fadeAt:0,fadeMs:1,fadeEase:`linear`,motion:0,x:0,y:0,h:0,vx:0,vy:0,vh:0,gravity:0,drag:0,swayAmp:0,swayHz:0,swayPhase:0,size:.1,cell:Xp.dot,color:i.coral,rim:0,roll:0,rollRate:0,flip:0,flipRate:0,landed:!1,yaw:0});let ne=0;function re(){for(let e=0;e<te.length;e++){let t=te[(ne+e)%te.length];if(!t.on)return ne=(ne+e+1)%te.length,t}let e=te[ne];return ne=(ne+1)%te.length,e}function ie(e,n,r,i,a,o,s){e.on=!0,e.t0=t.now,e.x=n,e.y=r,e.h=i,e.vx=Math.cos(a)*o,e.vy=Math.sin(a)*o,e.vh=s,e.landed=!1,e.motion=0,e.swayAmp=0,e.roll=u.range(0,xm),e.yaw=u.range(0,xm),e.flip=u.range(0,xm),e.rim=0}let ae=[];function oe(e){let t=ae[e];if(t)return t;let n=new Ia({map:Mp(`star-empty`),transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1}),r=new Ja(M,n);return r.name=`fx-star-${e}`,r.renderOrder=wp.ink,r.frustumCulled=!1,r.visible=!1,o.add(r),t={t0:0,on:!1,x:0,y:0,tilt:0,mesh:r,mat:n},ae[e]=t,t}let I={on:!1,legal:!0,x:0,y:0,rays:[],shownAt:0,laidAt:0,refusedAt:-1e9},L={on:!1,x:0,y:0,t0:0};function se(e){if(!L.on)return;let t=r.fx,n=(e-L.t0)/1e3,a=t.hintTiles*(1+t.hintPulseAmount*Math.sin(xm*r.ui.hintPulseHz*n));c.push(D(L.x,L.y,f,a,a,.3),Xp.dot,i.sunflower,t.hintPrint),c.push(D(L.x,L.y,f,a,a,1.1),Xp.ringThick,i.navy,1)}function ce(e){if(!I.on)return;let t=r.input,n=e-I.shownAt,a=zp(t.previewInEase)(Vp(n/Math.max(1,t.previewInMs)));if(!I.legal){let n=e-I.refusedAt,r=0;if(n<t.illegalShakeMs){let e=n/t.illegalShakeMs;r=t.illegalShakeTiles*Math.sin(e*Math.PI*4)*(1-e)}let o=t.illegalMarkTiles*a;c.push(D(I.x+r,I.y,f,o,o,.08),Xp.cross,i.navy,1);return}let o=1+t.previewBreatheAmount*Math.sin(xm*t.previewBreatheHz*n/1e3),s=t.previewMarkerTiles*a*o;c.push(D(I.x,I.y,f,s,s,.4),Xp.ringThick,i.coral,1);let l=e-I.laidAt,u=Math.floor(l/Math.max(1,t.previewRayStepMs))+1,d=1/Math.max(1,t.previewDotsPerTile),p=n/1e3*t.previewFlowHz%1,m=Math.max(.01,t.previewDotTaperTiles),h=.5;for(let e of I.rays){let n=hm[e.dir],r=gm[e.dir],a=e.cells.length,o=a+.5,s=Math.min(o,u-1+.5+1);for(let e=0;;e++){let a=h+(e+p)*d;if(a>=s)break;let l=Math.min(1,(a-h)/m,(o-a)/m);if(l<=.08)continue;let u=t.previewDotTiles*l;c.push(D(I.x+n*a,I.y+r*a,f,u,u,e*1.7),Xp.dot,i.coral,1)}if(e.stoppedBy!==`edge`&&u>a){let e=o-.06,a=t.previewStopTiles,s=n===0?0:Math.PI/2;c.push(D(I.x+n*e,I.y+r*e,f,a,a,s),Xp.bar,i.coral,1)}}}function le(e){let t=r.bark,n=zp(t.ringGrowEase),a=zp(t.ringFadeEase);for(let r of k){if(!r.on)continue;let o=e-r.t0;if(o<0)continue;let s=o/Math.max(1,t.ringLifeMs);if(s>=1){r.on=!1;continue}let l=r.base*(t.ringStartScale+t.ringGrow*n(s));c.push(D(r.x,r.y,f,l,l,r.yaw),r.cell,i.coral,1-a(s))}}function ue(e,t){for(let n of te){if(!n.on)continue;let r=t-n.t0;if(r>=n.life){n.on=!1;continue}let i=1-zp(n.fadeEase)(Vp((r-n.fadeAt)/Math.max(1,n.fadeMs)));if(n.roll+=n.rollRate*e,n.flip+=n.flipRate*e,n.motion===1){let t=Math.exp(-n.drag*e);n.vx*=t,n.vy*=t,n.x+=n.vx*e,n.y+=n.vy*e,n.h+=n.vh*e;let a=n.swayAmp*Math.sin(xm*n.swayHz*(r/1e3)+n.swayPhase),o=Math.max(.2,Math.abs(Math.cos(n.flip)));l.push(O(n.x+a,n.y,n.h,n.size*o,n.size,n.roll+a),n.cell,n.color,i,n.rim)}else{if(!n.landed){let t=Math.exp(-n.drag*e);n.vx*=t,n.vy*=t,n.vh=n.vh*t-n.gravity*e,n.x+=n.vx*e,n.y+=n.vy*e,n.h+=n.vh*e,n.h<=0&&n.vh<0&&(n.h=0,n.landed=!0)}if(n.landed)c.push(D(n.x,n.y,f,n.size,n.size,n.yaw),n.cell,n.color,i,n.rim);else{let e=Math.max(.15,Math.abs(Math.cos(n.flip)));l.push(O(n.x,n.y,n.h+n.size*.5,n.size*e,n.size,n.roll),n.cell,n.color,i,n.rim)}}}}function de(e){let t=r.bark;for(let n of P){if(!n.on)continue;let r=e-n.t0;if(r<0){n.mesh.visible=!1;continue}let i,a=1;if(r<t.burstInMs)i=zp(t.burstInEase)(r/Math.max(1,t.burstInMs));else if(r<t.burstInMs+t.burstHoldMs)i=1;else{let e=(r-t.burstInMs-t.burstHoldMs)/Math.max(1,t.burstOutMs);if(e>=1){n.on=!1,n.mesh.visible=!1;continue}let o=zp(t.burstOutEase)(e);i=Hp(1,t.burstOutScale,o),a=1-o}let o=t.burstScaleTiles*Math.max(.001,i);n.mesh.matrix.copy(O(n.x,n.y,t.burstRiseTiles,o,o,n.tilt)),n.mesh.matrixWorldNeedsUpdate=!0,n.mat.opacity=a,n.mesh.visible=!0}}function fe(e,t){let n=r.celebrate;for(let r of ae){if(!r.on){r.mesh.visible=!1;continue}let i=e-r.t0;if(i<0){r.mesh.visible=!1;continue}let a=Vp(i/Math.max(1,n.stampMs)),o=zp(n.stampEase)(a),s=t*Hp(n.stampFromScale,1,o);r.mesh.position.set(r.x,f,r.y),r.mesh.rotation.set(0,r.tilt,0),r.mesh.scale.set(s,1,s),r.mat.opacity=Vp(a/Math.max(.001,n.stampInkInPart)),r.mesh.visible=!0}}function pe(){return d?r.celebrate.stampSizePage*d.layout.pageW/p:1}let me={setBoard(e){me.clear(),o.removeFromParent(),d=e,e&&(p=e.layout.tile,f=Tp.ink/p,u=Up((e.level.seed^24301)>>>0),e.tileSpace.add(o))},showPreview(e,n,r){let i=t.now,a=!I.on||I.x!==e.x||I.y!==e.y||I.legal!==r;I.on||(I.shownAt=i),I.rays=n,a&&(I.on=!0,I.x=e.x,I.y=e.y,I.legal=r,I.laidAt=i,r||(I.refusedAt=i))},hidePreview(){I.on=!1,I.rays=[]},bark(e,n){if(!d)return;let i=r.bark,a=F();a.on=!0,a.t0=t.now,a.x=e.x,a.y=e.y,a.tilt=u.range(-i.burstTiltDeg,i.burstTiltDeg)*bm,A(e.x,e.y,i.dogRingScale,0);for(let e of n){let t=Math.min(e.cells.length,i.ringsPerRayMax);for(let n=0;n<t;n++){let t=e.cells[n];A(t.x,t.y,1,i.ringStepMs*(n+1))}}},puff(e,t,n){if(!d)return;let a=r.fx;if(n===`hole`){for(let n=0;n<a.puffHoleCount;n++){let n=re(),r=u.range(0,xm);ie(n,e+Math.cos(r)*.2,t+Math.sin(r)*.2,.05,r,u.range(.1,.4)*a.puffSpeed,0),n.motion=1,n.vh=a.puffHoleRise*u.range(.6,1.3),n.drag=2,n.gravity=0,n.swayAmp=a.puffHoleSwayTiles*u.range(.6,1.2),n.swayHz=a.puffHoleSwayHz*u.range(.8,1.25),n.swayPhase=u.range(0,xm),n.size=a.puffSizeTiles*u.range(.8,1.25),n.cell=u.next()<.5?Xp.scrapA:Xp.scrapB,n.color=i.paper,n.rim=1,n.rollRate=u.range(-6,6),n.flipRate=u.range(4,9),n.life=a.puffHoleLifeMs*u.range(.8,1),n.fadeAt=0,n.fadeMs=n.life,n.fadeEase=a.puffFadeEase}return}let o=n===`mud`,s=o?a.puffMudCount:a.puffDustCount,c=u.range(0,xm);for(let n=0;n<s;n++){let r=re(),l=c+n/s*xm+u.range(-.3,.3);if(ie(r,e+Math.cos(l)*.15,t+Math.sin(l)*.15,.02,l,a.puffSpeed*u.range(.6,1.2),(o?a.puffMudUp:a.puffUp)*u.range(.7,1.15)),r.gravity=a.puffGravity,r.drag=1.5,o)r.size=a.puffMudSizeTiles*u.range(.7,1.2),r.cell=Xp.blob,r.color=i.navy;else{r.size=a.puffSizeTiles*u.range(.7,1.2),r.cell=u.next()<.5?Xp.scrapA:Xp.scrapB;let e=n%2==0;r.color=e?i.paper:i.navy,r.rim=+!!e}r.rollRate=u.range(-9,9),r.flipRate=u.range(2,6),r.life=a.puffLifeMs*u.range(.85,1.15),r.fadeAt=0,r.fadeMs=r.life,r.fadeEase=a.puffFadeEase}},confetti(e,t){if(!d)return;let n=r.celebrate;for(let r=0;r<n.confettiCount;r++){let o=re(),s=u.range(0,xm),c=n.confettiSpeed*n.confettiSpread*Math.sqrt(u.next());ie(o,e+u.range(-.15,.15),t+u.range(-.15,.15),n.confettiLiftTiles,s,c,n.confettiSpeed*u.range(.7,1.05)),o.gravity=n.confettiGravity,o.drag=n.confettiDrag;let l=u.next()<n.confettiStarShare;o.cell=l?Xp.star:Xp.dot,o.size=n.confettiSizeTiles*u.range(.8,1.2)*(l?1.5:1),o.color=a[r%a.length],o.rim=+(o.color===i.paper);let d=xm*n.confettiSpinHz;o.rollRate=d*u.range(.4,1.2)*(u.next()<.5?-1:1),o.flipRate=d*u.range(.5,1.5),o.life=n.confettiLifeMs*u.range(.9,1),o.fadeMs=Math.min(n.confettiFadeMs,o.life),o.fadeAt=o.life-o.fadeMs,o.fadeEase=`linear`}},stampStars(e,n){if(!d)return Promise.resolve();let i=r.celebrate,a=m,o=pe(),s=(d.layout.cols-1)/2,c=-.5+d.layout.rows*i.stampRowFrac;return new Promise(r=>{for(let l=0;l<3;l++){let d=oe(l),f=i.stampDelayMs+l*i.stampStaggerMs;d.on=!0,d.t0=t.now+f,d.x=s+(l-1)*o*i.stampSpacing,d.y=c,d.tilt=u.range(-i.stampTiltDeg,i.stampTiltDeg)*bm,d.mat.map=Mp(l<e?`star-full`:`star-empty`),d.mesh.visible=!1;let p=d.x,h=d.y;t.at(f+i.stampMs,()=>{a===m&&(A(p,h,o*i.stampRingScale,0),n?.(l),l===2&&r())},Z.fx)}})},showHint(e){e?(L.on&&L.x===e.x&&L.y===e.y||(L.t0=t.now),L.on=!0,L.x=e.x,L.y=e.y):L.on=!1},get hintShown(){return L.on&&d?{x:L.x,y:L.y}:null},clear(){m++,I.on=!1,I.rays=[],L.on=!1;for(let e of k)e.on=!1;for(let e of te)e.on=!1;for(let e of P)e.on=!1,e.mesh.visible=!1;for(let e of ae)e.on=!1,e.mesh.visible=!1;c.begin(),c.end(),l.begin(),l.end()},update(e,t){d&&(o.updateWorldMatrix(!0,!1),n.updateMatrixWorld(),o.getWorldQuaternion(S),n.getWorldQuaternion(x),x.premultiply(S.invert()),c.begin(),l.begin(),se(t),le(t),ue(Math.min(e,100)/1e3,t),ce(t),c.end(),l.end(),de(t),fe(t,pe()))}};return me}function wm(e,t){let n=t.sheep,r=e.path.length,i=e.stop===`pen`&&r>0,a=i?r-1:r,o=n.stepMs;return a>0&&a*o>n.runMaxMs&&(o=Math.max(n.runMaxMs/a,n.runMinStepMs)),{stepMs:o,regular:a,penMs:i?n.penStepMs:0}}function Tm(e,t){let n=[],r=[],i=0;for(let a=0;a<e.path.length;a++){let o=a===e.path.length-1&&e.stop===`pen`?t:e.stepMs;n.push(i),r.push(o),i+=o}return{starts:n,durs:r,total:i}}var Em=(e,t)=>e.x===t.x&&e.y===t.y;function Dm(e,t,n={}){let r=null,i=null,a=[],o=null,s=[],c=[];for(let t of e)switch(t.type){case`dog-jump`:r=t.from,i=t.to;break;case`bark`:a=t.rays,i===null&&(i=t.at),r===null&&(r=t.at);break;case`sheep-run`:s.push(t);break;case`outcome`:o=t.outcome;break;default:{let e=String(t.type);c.includes(e)||c.push(e)}}let l=r??i??{x:0,y:0},u=i??l,d=Em(l,u),f=t.dog,p=t.sheep,m=n.prewound?0:f.crouchMs,h=m+(d?f.inPlaceHopMs:f.leapMs),g=[];for(let e=0;e<s.length;e++){let n=s[e],{stepMs:r,regular:i,penMs:a}=wm(n,t),o=h+t.bark.ringStepMs*n.distance+p.staggerMs*e,c=o+p.startleMs,l=i*r+a;if(n.stop===`sheep`&&n.blockerId!==void 0){let e=g.find(e=>e.id===n.blockerId);e&&(c=Math.max(c,e.arriveAt+p.bumpGapMs-l))}let u=Tm({path:n.path,stop:n.stop,stepMs:r},p.penStepMs);for(let e=0;e<n.path.length;e++){let t=n.path[e];for(let n of g){if(n.path.length===0||!Em(n.from,t))continue;let r=Tm(n,p.penStepMs).durs[0],i=n.runAt+r,a=u.starts[e]+.5*u.durs[e];c=Math.max(c,i-a)}}g.push({id:n.id,kind:n.kind,dir:n.dir,distance:n.distance,from:n.from,path:n.path,stop:n.stop,blockerId:n.blockerId??null,startleAt:o,runAt:c,stepMs:r,arriveAt:c+l})}let _=h;for(let e of g)_=Math.max(_,e.arriveAt);return{dogFrom:l,dogTo:u,inPlace:d,leapAt:m,barkAt:h,rays:a,sheep:g,outcome:o,inputAt:_+t.turn.inputTailMs,unknownEvents:c}}var Om={up:{x:0,y:-1},right:{x:1,y:0},down:{x:0,y:1},left:{x:-1,y:0}},km=e=>Math.sin(Math.PI*Vp(e));function Am(e){let{timeline:t,fx:n,audio:r,haptics:i}=e,a=e.tuning,o=null,s=Up(1),c=!1,l=0,u={x:0,y:0},d=!1,f=new Map,p=new Set,m=new Set;function h(e){let t=f.get(e);return t||(t={gen:0,handles:new Set},f.set(e,t)),t}function g(e){let t=h(e);for(let e of t.handles)e.cancel();return t.handles.clear(),++t.gen}function _(e){return h(e).gen}function v(e,n,r,i,a,o,s){let c=h(e);if(c.gen!==n)return;let l=t.tween({delay:Math.max(0,i),dur:a,tag:r,update:e=>{c.gen===n&&o(e)},done:()=>{c.handles.delete(l),c.gen===n&&s?.()}});c.handles.add(l)}function y(e,n,r,i,a){let o=h(e);if(o.gen!==n)return;let s=t.at(Math.max(0,i),()=>{o.handles.delete(s),o.gen===n&&a()},r);o.handles.add(s)}function b(e,t,n,r,i,a,o){let s=0;v(e,_(e),t,n,r,t=>{let n=t>=1?0:o(t);e.x+=i*(n-s),e.y+=a*(n-s),s=n})}function x(e,n,r){let i=l;t.at(Math.max(0,e),()=>{l===i&&r()},n)}function S(e,t,n){let r=o?.level.rows[t];return r!==void 0&&r.charAt(e)===n}function C(){let e=0,t=0,n=0,r=o?.level.rows??[];for(let i=0;i<r.length;i++){let a=r[i];for(let r=0;r<a.length;r++)a.charAt(r)===`p`&&(e+=r,t+=i,n++)}return n>0?{x:e/n,y:t/n}:u}function w(e,t){return t===`right`?1:t===`left`?-1:e.facing}function T(e,t){return t?.sheep[e]?.status===`penned`?`content`:`idle`}function E(e,t=1,n=1){r.play(e,{pitch:t,gain:n})}function D(e,t){if(!o)return;let n=o.dog,r=a.dog,i=g(n),s=e.dogFrom,c=e.dogTo;n.x=s.x,n.y=s.y,n.hop=0,n.tilt=0,n.idle=0,n.fold=1,n.alpha=1,n.scale=1;let l=c.x-s.x;l!==0&&(n.facing=l>0?1:-1);let u=n.facing,f=n.squash;if(!t){let e=n.squash,t=zp(`quadOut`);v(n,i,Z.turn,0,r.crouchMs,i=>{n.squash=Hp(e,r.crouchSquash,t(i))}),f=r.crouchSquash}d=!1;let p=e.barkAt-e.leapAt,m=Math.hypot(c.x-s.x,c.y-s.y),h=e.inPlace?r.inPlaceHopHeight:Math.min(r.leapHeightBase+r.leapHeightPerTile*m,r.leapHeightMax),_=e.inPlace?0:r.leapSpinDeg*u,b=zp(r.leapEase);y(n,i,Z.turn,e.leapAt,()=>{n.pose=`alarm`,E(`leap`)}),v(n,i,Z.turn,e.leapAt,p,e=>{let t=b(e);n.x=Hp(s.x,c.x,t),n.y=Hp(s.y,c.y,t),n.hop=h*4*e*(1-e),n.squash=e<.2?Hp(f,r.leapStretch,e/.2):r.leapStretch*(1-((e-.2)/.8)**2),n.tilt=_*km(e)},()=>{n.x=c.x,n.y=c.y,n.hop=0,n.squash=0,n.tilt=0,n.punchSquash(r.landSquash),n.kickWobble(r.landKickDeg*u)}),v(n,i,Z.turn,e.barkAt,r.barkMs,e=>{n.squash=r.barkStretch*km(e),n.tilt=r.barkLungeDeg*u*km(e)}),e.outcome===null&&y(n,i,Z.turn,e.barkAt+r.idleAfterMs,()=>{n.pose=`idle`,n.idle=1})}function O(e,t){if(!o)return;let n=o.sheep[e.id];if(!n)return;let r=a.sheep,i=g(n),c=n.sink;n.x=e.from.x,n.y=e.from.y,n.hop=0,n.squash=0,n.tilt=0,n.scale=1,n.alpha=1,n.tremble=0,n.idle=0,n.pose=`alarm`,(e.dir===`left`||e.dir===`right`)&&(n.facing=e.dir===`right`?1:-1);let l=w(n,e.dir),u=Om[e.dir];E(`startle`,s.range(.94,1.08)),v(n,i,Z.turn,0,r.startleMs,e=>{n.hop=r.startleHop*km(e),n.squash=r.startleStretch*km(e)});let d=e.runAt-e.startleAt,f=e.arriveAt-e.startleAt,m=e.path.length>0?e.path[e.path.length-1]:e.from;if(e.path.length===0){v(n,i,Z.turn,d,r.blockedMs,e=>{n.hop=r.blockedHop*km(e),n.squash=r.runStretch*km(e)},()=>{n.hop=0,n.squash=0,n.punchSquash(r.landSquash)}),y(n,i,Z.turn,d+r.blockedMs*.5,()=>j(e,n,m,u,l,0)),y(n,i,Z.turn,d+r.blockedMs+r.alarmHoldMs,()=>{n.pose=T(e.id,t),n.idle=1});return}let h=Tm(e,r.penStepMs),_=e.stop===`pen`?e.path.length-1:-1,b=zp(`sineInOut`);v(n,i,Z.turn,d,h.total,t=>{let i=t*h.total,a=0;for(;a<e.path.length-1&&i>=h.starts[a+1];)a++;let o=Vp((i-h.starts[a])/h.durs[a]),s=a===0?e.from:e.path[a-1],u=e.path[a];n.x=Hp(s.x,u.x,b(o)),n.y=Hp(s.y,u.y,b(o)),n.hop=(a===_?r.penHop:r.hopHeight)*km(o),n.squash=r.runStretch*km(o),n.tilt=l*r.runTiltDeg,c>0&&(n.sink=a===0?c*(1-o):0)},()=>{n.x=m.x,n.y=m.y,n.hop=0,n.squash=0,n.tilt=0,n.sink=0});for(let t=0;t<e.path.length-1;t++)y(n,i,Z.turn,d+h.starts[t+1],()=>{n.punchSquash(r.landSquash*.5),E(`hop`,1+t*r.hopPitchStep,.8)});if(_>=0){let t=_===0?e.from:e.path[_-1],n=o.fenceBetween(t.x,t.y,m.x,m.y);if(n){let e=d+h.starts[_],t=h.durs[_]*.5,i=g(n);p.add(n);let o=zp(a.sheep.fenceFlapEase),s=zp(`quadOut`);v(n,i,Z.turn,e,t,e=>{n.fold=1-s(e)}),v(n,i,Z.turn,e+t,r.fenceFlapMs,e=>{n.fold=o(e)},()=>{n.fold=1})}}y(n,i,Z.turn,f,()=>k(e,n,m,u,l,t))}function k(e,t,r,o,c,l){let u=a.sheep,d=_(t);switch(E(`hop`,1+(e.path.length-1)*u.hopPitchStep,.8),e.stop){case`mud`:{t.punchSquash(u.mudSquash),t.kickWobble(u.mudKickDeg*c);let i=zp(`quadOut`);v(t,d,Z.turn,0,u.overshootMs,e=>{t.sink=u.mudSink*i(e)}),E(`mud`),n.puff(r.x,r.y,`mud`),A(t,e,l,u.overshootMs+u.alarmHoldMs);return}case`pen`:t.punchSquash(u.penSquash),t.pose=`content`,E(`penned`),i.buzz(`pen`),y(t,d,Z.turn,u.penBaaDelayMs,()=>E(`baa`,s.range(.95,1.12))),v(t,d,Z.turn,0,u.penRelaxMs,e=>{t.squash=u.penRelaxSquash*km(e),t.tilt=u.penSwayDeg*Math.sin(2*Math.PI*e)},()=>{t.squash=0,t.tilt=0,t.idle=1});return;case`hole`:N(e,t,r,c,l);return;default:j(e,t,r,o,c,1),A(t,e,l,Math.max(u.overshootMs,e.stop===`wolf`||e.stop===`wolf-fear`?u.wolfFearTrembleMs:0)+u.alarmHoldMs)}}function A(e,t,n,r){y(e,_(e),Z.turn,r,()=>{e.pose=T(t.id,n),e.idle=1})}function j(e,t,r,s,c,l){if(!o)return;let u=a.sheep,d={x:r.x+s.x,y:r.y+s.y};if(e.stop===`wolf`||e.stop===`wolf-fear`){b(t,Z.turn,0,u.overshootMs,s.x,s.y,e=>-u.wolfFearRecoil*km(e)),t.kickWobble(-u.stopKickDeg*c),t.tremble=1,y(t,_(t),Z.turn,u.wolfFearTrembleMs,()=>{t.tremble=0}),E(`stop`),E(`baa`,u.fearBaaPitch);let n=e.stop===`wolf`?o.wolfAt(d.x,d.y):M(d,r);if(n){let e=r.x-n.x,t=r.y-n.y,i=Math.hypot(e,t)||1;b(n,Z.turn,0,u.wolfLungeMs,e/i,t/i,e=>u.wolfLungeTiles*km(e)),n.kickWobble(u.bumpKickDeg*(e>=0?1:-1))}}else{if(l>0){let e=zp(u.overshootEase),i=zp(`quadOut`);b(t,Z.turn,0,u.overshootMs,s.x,s.y,t=>t<.35?u.overshoot*i(t/.35):u.overshoot*(1-e((t-.35)/.65))),t.kickWobble(u.stopKickDeg*c),n.puff(r.x,r.y,`dust`)}if(e.stop===`sheep`){let t=e.blockerId===null?void 0:o.sheep[e.blockerId];t&&(b(t,Z.turn,0,u.overshootMs,s.x,s.y,e=>u.bumpJostle*km(e)),t.kickWobble(u.bumpKickDeg*c)),E(`bump`),i.buzz(`bump`)}else e.stop===`dog`&&o.dog.kickWobble(u.bumpKickDeg*c),e.stop===`rock`&&o.rockAt(d.x,d.y)?.kickWobble(u.bumpKickDeg*c),E(l>0?`stop`:`bump`)}}function M(e,t){if(!o)return null;let n=null,r=1/0;for(let i of Object.values(Om)){let a=o.wolfAt(e.x+i.x,e.y+i.y);if(!a)continue;let s=Math.hypot(a.x-t.x,a.y-t.y);s<r&&(r=s,n=a)}return n}function N(e,t,r,o,s){let c=a.fall,l=_(t);v(t,l,Z.turn,0,c.teeterMs,e=>{t.tilt=c.teeterDeg*o*Math.sin(Math.PI*1.5*e)*(1-.4*e)});let u=c.teeterDeg*o*Math.sin(Math.PI*1.5)*.6;y(t,l,Z.turn,c.teeterMs,()=>{E(`fall`),i.buzz(`fall`),n.puff(r.x,r.y,`hole`),F(e.id,s)});let d=zp(c.flutterEase),f=c.flutterMs/1e3;v(t,l,Z.turn,c.teeterMs,c.flutterMs,e=>{let n=d(e),i=c.flutterSwayTiles*Math.sin(2*Math.PI*c.flutterSwayHz*f*e)*(1-.5*n);t.x=r.x+i,t.y=r.y,t.tilt=u+c.flutterSpinDeg*o*n,t.scale=Hp(1,c.flutterEndScale,n),t.sink=c.flutterSink*n,t.alpha=1-Vp((e-.55)/.45)},()=>{t.x=r.x,t.y=r.y,t.hop=0,t.squash=0,t.tilt=0,t.scale=1,t.sink=0,t.alpha=0,t.tremble=0,t.idle=1,t.pose=`idle`})}let P=new Map,ee=0;function F(e,n){if(!o)return;let r=a.fall,i=t.now-ee;o.dog.pose=`alarm`;for(let t of o.sheep){if(t.id===e||t.alpha<.5)continue;let o=P.get(t.id);if(o!==void 0&&!(o.arriveAt+a.sheep.overshootMs<=i||o.startleAt>=i+r.othersGaspMs))continue;let s=_(t);t.pose=`alarm`,v(t,s,Z.turn,0,r.othersGaspMs,e=>{t.hop=r.gaspHop*km(e)},()=>{t.hop=0}),y(t,s,Z.turn,r.othersGaspMs+a.sheep.alarmHoldMs,()=>{t.pose=T(t.id,n)})}}function te(e){switch(e.stop){case`hole`:return e.arriveAt+a.fall.teeterMs+a.fall.flutterMs;case`pen`:return e.arriveAt;default:return e.arriveAt+a.sheep.overshootMs}}function ne(e,t,n){if(!o||e.outcome===null)return;let r=e.outcome,i=e.barkAt+a.dog.barkMs;for(let t of e.sheep)i=Math.max(i,te(t));if(r===`won`){let r=e.barkAt;for(let t of e.sheep)r=Math.max(r,t.arriveAt);let i=r+a.celebrate.delayMs;x(i,Z.celebrate,()=>re(n.stars??1)),x(i+a.celebrate.panelDelayMs,Z.celebrate,()=>t.onOutcome?.(`won`));return}x(i+a.lose.dogFlopDelayMs,Z.celebrate,()=>ie());let s=r===`lost-fell`?a.fall.panelDelayMs:a.lose.panelDelayMs;x(i+s,Z.celebrate,()=>t.onOutcome?.(r))}function re(t){if(!o)return;let r=a.celebrate,s=l,c=C();n.confetti(c.x,c.y),E(`confetti`),E(`win`),i.buzz(`win`),n.stampStars(t,()=>{l===s&&(E(`stamp`),i.buzz(`stamp`),e.shake(r.stampShakeTiles,r.shakeMs))}),[o.dog,...o.sheep.filter(e=>e.alpha>.5)].forEach((e,t)=>{let n=_(e);e.pose=`content`,v(e,n,Z.celebrate,t*r.hopStaggerMs,r.hopMs,t=>{e.hop=r.hopHeight*km(t)},()=>{e.hop=0,e.punchSquash(a.sheep.landSquash),e.idle=1})})}function ie(){if(!o)return;let e=a.lose,t=o.dog,n=_(t),r=t.fold,c=t.tilt,l=-t.facing*e.dogFlopTiltDeg;p.add(t),t.pose=`alarm`,t.idle=0,E(`lose`),i.buzz(`lose`),v(t,n,Z.celebrate,0,e.dogFlopMs,n=>{let i=zp(e.dogFlopEase)(n);t.fold=Hp(r,e.dogFlopFold,i),t.tilt=Hp(c,l,i)});let u=o.sheep.filter(e=>e.alpha>.5);for(let t=0;t<Math.min(e.baaCount,u.length);t++){let n=s.pick(u);y(n,_(n),Z.celebrate,e.baaStaggerMs*(t+1),()=>{E(`baa`,e.baaPitch*s.range(.92,1.08)),n.punchSquash(a.sheep.landSquash*.5)})}}function ae(){l++,c=!1,d=!1,t.cancel(Z.turn),t.cancel(Z.settle),t.cancel(Z.preview),t.cancel(Z.celebrate);for(let e of f.values()){for(let t of e.handles)t.cancel();e.handles.clear(),e.gen++}P=new Map;for(let e of m)e();m.clear()}function oe(e){if(o){o.snapTo(e);for(let e of p)e.fold=1;p.clear(),o.dog.fold=1;for(let t of e.sheep){let e=o.sheep[t.id];e&&t.status===`free`&&S(t.x,t.y,`m`)&&(e.sink=a.sheep.mudSink)}u=e.dog}}function I(e,r){ae(),n.clear();let i=o;if(!i)return Promise.resolve();if(r===`snap`)return oe(e),Promise.resolve();let s=l;return c=!0,new Promise(n=>{m.add(n);let o=()=>{m.delete(n),oe(e),l===s&&(c=!1),n()},u=[i.dog,...i.sheep];if(r===`restart`){let n=a.turn.restartFold,r=!1;for(let e of u)p.add(e);t.tween({dur:a.page.restartFlapMs,tag:Z.settle,update:t=>{let a=t<.5?Hp(1,n,t*2):Hp(n,1,(t-.5)*2);t>=.5&&!r&&(r=!0,i.snapTo(e));for(let e of u)e.fold=a},done:o});return}let d=u.map(e=>({x:e.x,y:e.y,sink:e.sink,squash:e.squash,tilt:e.tilt,alpha:e.alpha,scale:e.scale,fold:e.fold,hop:e.hop})),f=u.map(t=>{if(t===i.dog)return{x:e.dog.x,y:e.dog.y,alpha:1,sink:0};let n=e.sheep[t.id],r=n?.x??t.x,o=n?.y??t.y;return{x:r,y:o,alpha:n?.status===`fallen`?0:1,sink:n?.status===`free`&&S(r,o,`m`)?a.sheep.mudSink:0}});u.forEach((t,n)=>{t.resetSprings(),t.tremble=0,t.idle=0,t.pose=t===i.dog?`idle`:T(t.id,e);let r=d[n];r&&r.fold<1&&p.add(t)}),t.tween({dur:a.page.undoMs,ease:a.page.undoEase,tag:Z.settle,update:e=>{u.forEach((t,n)=>{let r=d[n],i=f[n];if(!r||!i)return;let o=Math.hypot(i.x-r.x,i.y-r.y)>.001;t.x=Hp(r.x,i.x,e),t.y=Hp(r.y,i.y,e),t.hop=Hp(r.hop,0,e)+(o?a.turn.undoHop*km(e):0),t.sink=Hp(r.sink,i.sink,e),t.squash=Hp(r.squash,0,e),t.tilt=Hp(r.tilt,0,e),t.alpha=Hp(r.alpha,i.alpha,e),t.scale=Hp(r.scale,1,e),t.fold=Hp(r.fold,1,e)})},done:o})})}function L(){if(!o||!d){d=!1;return}d=!1;let e=o.dog,t=g(e),n=e.squash;v(e,t,Z.preview,0,a.input.dogWindupMs,t=>{e.squash=Hp(n,0,t)},()=>{e.pose=`idle`,e.idle=1})}return{setBoard(e){ae(),f.clear(),p.clear(),o=e,e&&(s=Up(e.level.seed),u={x:Math.round(e.dog.x),y:Math.round(e.dog.y)})},playTurn(r,d,f={}){let p=f.prewound??!1,m=Dm(r.events,a,{prewound:p});l++;let h=l;t.cancel(Z.preview),c=!0,ee=t.now,P=new Map(m.sheep.map(e=>[e.id,e]));let g=o;if(g){for(let e of g.sheep)e.tremble=0;D(m,p),x(m.barkAt,Z.turn,()=>{n.bark(m.dogTo,m.rays),n.puff(m.dogTo.x,m.dogTo.y,`dust`),E(`land`),E(`woof`,s.range(.96,1.06)),i.buzz(`bark`),e.shake(a.bark.shakeTiles,a.bark.shakeMs)});for(let e of m.sheep)x(e.startleAt,Z.turn,()=>O(e,r.state));ne(m,d,f)}return u=m.dogTo,t.at(m.inputAt,()=>{l===h&&(c=!1,d.onInput())},Z.turn),m},get busy(){return c},cancel(){ae()},settle:I,setPreview(e){if(!o)return;if(!e){for(let e of o.sheep)e.tremble=0;L();return}let t=new Set(e.reacting);for(let e of o.sheep)e.tremble=+!!t.has(e.id);if(!e.legal){L();return}let n=o.dog,r=g(n);n.x=u.x,n.y=u.y,n.hop=0,n.tilt=0,n.idle=0,n.pose=`alarm`;let i=e.target.x-u.x;i!==0&&(n.facing=i>0?1:-1);let s=n.squash,c=zp(`quadOut`);d=!0,v(n,r,Z.preview,0,a.input.dogWindupMs,e=>{n.squash=Hp(s,a.input.dogWindupSquash,c(e))})},rescue(e){ae(),n.clear();let r=o;if(!r)return Promise.resolve();let i=a.fall,s=r.sheep.filter(t=>t.alpha<.5&&e.sheep[t.id]?.status!==`fallen`);return s.length===0?I(e,`undo`):(c=!0,new Promise(n=>{m.add(n);let r=zp(`quadOut`);for(let e of s)e.pose=`alarm`,e.idle=0;E(`fall`,1.4),t.tween({dur:i.rescueMs,tag:Z.settle,update:e=>{let t=r(e);for(let n of s)n.alpha=Vp(t*2),n.scale=Hp(i.flutterEndScale,1,t),n.sink=Hp(i.flutterSink,0,t),n.hop=i.rescueHop*km(e),n.tilt=i.flutterSpinDeg*(1-t)*n.facing},done:()=>{m.delete(n);for(let e of s)e.hop=0,e.tilt=0,e.punchSquash(a.sheep.landSquash);E(`baa`,1.15),I(e,`undo`).then(n)}})}))}}}var jm=class{level;history;extraUsed=!1;constructor(e){this.level=e,this.history=[vt(e)]}get state(){return this.history[this.history.length-1]}get barksLeft(){return this.state.barkLimit-this.state.barksUsed}get canUndo(){return this.history.length>1}get canExtraBark(){let e=this.state.outcome;if(this.extraUsed||e!==`lost-fell`&&e!==`lost-barks`)return!1;if(this.extraHope?.from!==this.state){let t=e===`lost-fell`?this.history[this.history.length-2]:this.state;this.extraHope={from:this.state,ok:t!==void 0&&this.verdict(Ct(t))===`winnable`}}return this.extraHope.ok}extraHope=null;preview(e){return xt(this.level,this.state,e)}commit(e){if(!yt(this.level,this.state,e))return null;let t=St(this.level,this.state,e);return this.history.push(t.state),t}undo(){return this.history.length<=1?null:(this.history.pop(),this.state)}restart(){return this.history=[vt(this.level)],this.extraUsed=!1,this.state}grantExtraBark(){return this.canExtraBark?(this.state.outcome===`lost-fell`&&this.history.pop(),this.history=this.history.map(e=>Ct(e)),this.extraUsed=!0,this.state):null}hint(){let e=this.state;return e.outcome===`playing`?this.solved(e)?.solution[0]??null:null}nextWinningTile(){let e=this.standing();return e===`winnable`||e===`savable`?this.hint():null}standing(){let e=this.verdict();return e===`short`?!this.extraUsed&&this.minBarksLeft()===this.barksLeft+1?`savable`:`short`:e}verdict(e=this.state){if(e.outcome!==`playing`)return null;let t=this.solved(e);return t?t.minBarks<=e.barkLimit-e.barksUsed?`winnable`:`short`:`dead`}get oneBarkShort(){return this.state.outcome===`lost-barks`&&this.verdict(Ct(this.state))===`winnable`}minBarksLeft(){return this.solved(this.state)?.minBarks??-1}rewindSteps(){for(let e=this.history.length-1;e>=0;e--)if(this.verdict(this.history[e])===`winnable`)return this.history.length-1-e;return this.history.length-1}rewind(){let e=this.rewindSteps();return e<=0?null:(this.history.length-=e,this.state)}solved(e){if(this.solveCache.has(e))return this.solveCache.get(e)??null;let t=Tt(this.level,e);return this.solveCache.set(e,t),t}solveCache=new WeakMap;stars(){return wt(this.level,this.state.barksUsed)}},Mm=class{host;rank=-1;phase=`off`;t0=0;waitUntil=0;tile=null;previewing=!1;constructor(e){this.host=e}get active(){return this.rank>=0}begin(e){this.hide(),this.rank=e>=1&&e<=3?e-1:-1,this.rank<0?this.phase=`off`:this.waitFor(this.host.tuning.tutorial.firstDelayMs[this.rank]??0)}stop(){this.hide(),this.rank=-1,this.phase=`off`}interrupt(){this.rank<0||(this.hide(),this.waitFor(this.host.tuning.tutorial.repeatDelayMs[this.rank]??0))}update(){if(this.phase===`off`)return;let{host:e}=this,t=e.tuning.tutorial,n=e.timeline.now;if(this.phase===`wait`){if(n<this.waitUntil||!e.canShow()||(this.tile=e.hintTile(),!this.tile&&!e.undoClient()))return;this.enter(`approach`);return}if(!e.canShow()){this.interrupt();return}let r=this.tile?e.tileClient(this.tile):e.undoClient();if(!r){this.interrupt();return}let i={x:r.x+t.restOffsetPx*e.unit(),y:r.y+t.restOffsetPx*e.unit()},a=n-this.t0;switch(this.phase){case`approach`:{let n=zp(t.approachEase)(Vp(a/t.approachMs));e.setFinger({x:Hp(i.x,r.x,n),y:Hp(i.y,r.y,n),pressed:!1,alpha:n}),a>=t.approachMs&&(this.tile&&(e.demoPreview(this.tile),this.previewing=!0),this.enter(`press`));break}case`press`:e.setFinger({...r,pressed:!0,alpha:1}),a>=t.pressMs&&this.enter(`hold`);break;case`hold`:e.setFinger({...r,pressed:!0,alpha:1}),a>=t.holdMs&&(this.endPreview(),this.enter(`release`));break;case`release`:e.setFinger({...r,pressed:!1,alpha:1}),a>=t.releaseMs&&this.enter(`away`);break;case`away`:{let n=zp(t.approachEase)(Vp(a/t.approachMs));e.setFinger({x:Hp(r.x,i.x,n),y:Hp(r.y,i.y,n),pressed:!1,alpha:1-n}),a>=t.approachMs&&(e.setFinger(null),this.waitFor(t.repeatDelayMs[this.rank]??0));break}}}enter(e){this.phase=e,this.t0=this.host.timeline.now}waitFor(e){this.phase=`wait`,this.waitUntil=this.host.timeline.now+e}endPreview(){this.previewing&&(this.previewing=!1,this.host.demoPreview(null))}hide(){this.endPreview(),this.host.setFinger(null)}};function Nm(){return typeof navigator<`u`&&typeof navigator.vibrate==`function`}var Pm=200;function Fm(e,t=()=>!0){let n=typeof navigator>`u`?null:navigator,r=n!==null&&typeof n.vibrate==`function`,i=!1,a=[];return{buzz(o){if(i&&t()&&(a.push(o),a.length>Pm&&a.shift(),r))try{let t=e.haptics[o];n.vibrate(typeof t==`number`?t:[...t])}catch{}},unlock(){i=!0},cancel(){if(r)try{n.vibrate(0)}catch{}},log:a}}var Im=1e3/120,Lm=class{stiffness;damping;x=0;v=0;carry=0;constructor(e,t){this.stiffness=e,this.damping=t}punch(e){this.x+=e}kick(e){this.v+=e*Math.sqrt(this.stiffness)}reset(){this.x=0,this.v=0,this.carry=0}get atRest(){return Math.abs(this.x)<1e-4&&Math.abs(this.v)<.001}step(e){if(this.atRest){this.x=0,this.v=0,this.carry=0;return}this.carry+=Math.min(e,100);let t=Im/1e3;for(;this.carry>=Im;)this.carry-=Im,this.v+=(-this.stiffness*this.x-this.damping*this.v)*t,this.x+=this.v*t}};function Rm(e){let t=parseInt(e.slice(1),16);return new K((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)}function zm(e,t,n){let r=e.scene.shadow,i=n!==void 0||xp(`halftone`);return{uPageFromWorld:{value:new qr},uWorldFromPage:{value:new qr},uDir:{value:new G(r.dirX,r.dirZ)},uLift:{value:Tp.shadow/t},uTile:{value:t},uColor:{value:Rm(cp.navy)},uStrength:{value:r.strength},uBlur:{value:new G(r.blurNear,r.blurFar)},uDots:{value:n??(i?Mp(`halftone`,{repeat:!0}):null)},uDotScale:{value:r.halftoneScale},uDotMix:{value:r.halftone},dots:i}}var Bm=`
uniform mat4 uPageFromWorld;
uniform mat4 uWorldFromPage;
uniform vec2 uDir;
uniform float uLift;
uniform float uTile;
varying vec2 vUv;
varying vec2 vPage;
void main() {
  vUv = uv;
  vec4 p = uPageFromWorld * (modelMatrix * vec4(position, 1.0));
  float h = max(p.y, 0.0);
  p.xz += uDir * h;
  p.y = uLift;
  vPage = p.xz * uTile;
  gl_Position = projectionMatrix * viewMatrix * (uWorldFromPage * p);
}
`,Vm=`
uniform sampler2D uMap;
uniform vec3 uColor;
uniform float uStrength;
uniform float uAlpha;
uniform vec2 uBlur;
uniform float uAspect;
#ifdef USE_DOTS
uniform sampler2D uDots;
uniform float uDotScale;
uniform float uDotMix;
#endif
varying vec2 vUv;
varying vec2 vPage;
float tap(vec2 o) { return texture2D(uMap, vUv + o).a; }
void main() {
  // Radius as a fraction of the cut-out's height, kept round on wide art.
  float r = mix(uBlur.x, uBlur.y, clamp(vUv.y, 0.0, 1.0));
  vec2 dx = vec2(r / uAspect, 0.0);
  vec2 dy = vec2(0.0, r);
  vec2 e = (dx + dy) * 0.7071;
  vec2 f = (dx - dy) * 0.7071;
  float a = 0.2 * tap(vec2(0.0))
          + 0.12 * (tap(dx) + tap(-dx) + tap(dy) + tap(-dy))
          + 0.08 * (tap(e) + tap(-e) + tap(f) + tap(-f));
#ifdef USE_DOTS
  // Screen the soft alpha: ink where it beats the dot field (dots dark, paper white).
  float t = texture2D(uDots, vPage / uDotScale).r;
  float w = fwidth(t) + 0.04;
  a = mix(a, smoothstep(t - w, t + w, a), uDotMix);
#endif
  float ink = a * uStrength * uAlpha;
  if (ink < 0.003) discard;
  gl_FragColor = vec4(uColor, ink);
}
`;function Hm(e,t,n){let r={uMap:{value:t},uAlpha:{value:1},uAspect:{value:n}};return{material:new Ao({uniforms:{...r,uPageFromWorld:e.uPageFromWorld,uWorldFromPage:e.uWorldFromPage,uDir:e.uDir,uLift:e.uLift,uTile:e.uTile,uColor:e.uColor,uStrength:e.uStrength,uBlur:e.uBlur,...e.dots?{uDots:e.uDots,uDotScale:e.uDotScale,uDotMix:e.uDotMix}:{}},defines:e.dots?{USE_DOTS:``}:{},vertexShader:Bm,fragmentShader:Vm,transparent:!0,depthWrite:!1,depthTest:!0,side:2}),uniforms:r}}function Um(e){e.renderOrder=wp.shadow,e.frustumCulled=!1}var Wm=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gm=`
uniform vec3 uCard;
uniform vec3 uInk;
uniform float uCrease;
uniform float uAlpha;
varying vec2 vUv;
void main() {
  vec2 fw = max(fwidth(vUv), vec2(1e-5));
  vec2 d = min(vUv, 1.0 - vUv) / fw;
  float edge = 1.0 - smoothstep(0.5, 1.5, min(d.x, d.y));
  float fold = 1.0 - smoothstep(1.0, 2.5, (1.0 - vUv.y) / fw.y);
  float ink = max(0.5 * edge, fold) * uCrease;
  gl_FragColor = vec4(mix(uCard, uInk, ink), uAlpha);
}
`,Km=cp.paper;function qm(e){let t={uAlpha:{value:1}};return{material:new Ao({uniforms:{...t,uCard:{value:Rm(Km)},uInk:{value:Rm(cp.navy)},uCrease:{value:e.scene.cutout.tabCrease}},vertexShader:Wm,fragmentShader:Gm,transparent:!0,depthWrite:!1,depthTest:!0,side:2}),uniforms:t}}function Jm(){let e=new xo(1,1);return e.rotateX(-Math.PI/2),e.translate(0,0,.5),e}var Ym=Math.PI/180,Xm=Math.PI*2,Zm=.9;function Qm(e,t){let[n,r]=fp(t).anchor,i=`${n},${r}`,a=e.geometries.get(i);return a||(a=new xo(1,1),a.translate(.5-n,r-.5,0),e.geometries.set(i,a)),a}function $m(e){return e<0?0:e>1?1:e}var eh=class{kind;id;sheepKind;x=0;y=0;hop=0;sink=0;squash=0;tilt=0;fold=1;facing;alpha=1;scale=1;tremble=0;idle=1;pose=`idle`;spec;root=new bi;lean=new bi;turn=new bi;sprite;shadow;tab;kit;squashSpring;wobbleSpring;spriteMat;shadowMat;shadowU;tabMat;tabU;shownAsset;constructor(e,t,n){this.kit=e,this.spec=t,this.kind=t.kind,this.id=t.id,this.sheepKind=t.sheepKind,this.facing=t.homeFacing;let r=e.T.springs;this.squashSpring=new Lm(r.squash.stiffness,r.squash.damping),this.wobbleSpring=new Lm(r.wobble.stiffness,r.wobble.damping),this.shownAsset=this.currentAsset();let i=Mp(this.shownAsset),a=Qm(e,this.shownAsset);this.spriteMat=new Ia({map:i,transparent:!0,depthWrite:!1,depthTest:!0,side:2,alphaTest:e.T.scene.cutout.alphaTest,toneMapped:!1}),this.sprite=new Ja(a,this.spriteMat),this.sprite.renderOrder=wp.cutout;let o=Hm(e.shadow,i,Np(this.shownAsset));if(this.shadowMat=o.material,this.shadowU=o.uniforms,this.shadow=new Ja(a,this.shadowMat),Um(this.shadow),this.root.add(this.lean),this.lean.add(this.turn),this.turn.add(this.sprite,this.shadow),n.add(this.root),t.tabWidth>0){let t=qm(e.T);this.tabMat=t.material,this.tabU=t.uniforms,this.tab=new Ja(e.tabGeometry,this.tabMat),this.tab.renderOrder=wp.tab,n.add(this.tab)}else this.tabMat=null,this.tabU=null,this.tab=null}punchSquash(e){this.squashSpring.punch(e)}kickWobble(e){this.wobbleSpring.kick(e)}resetSprings(){this.squashSpring.reset(),this.wobbleSpring.reset()}currentAsset(){let e=this.spec.stills;return typeof e==`string`?e:e[this.pose]}rest(){this.hop=0,this.sink=0,this.squash=0,this.tilt=0,this.scale=1,this.tremble=0,this.idle=1,this.facing=this.spec.homeFacing,this.resetSprings()}step(e){this.squashSpring.step(e),this.wobbleSpring.step(e)}apply(e){let t=this.kit.T,n=t.scene.cutout,r=t.scene.idle,i=t.input,a=this.spec,o=e/1e3,s=this.squash+this.squashSpring.x,c=this.tilt+this.wobbleSpring.x,l=0,u=this.idle*a.idleAmp;if(u>0&&(s+=u*r.bobSquash*Math.sin(Xm*r.bobHz*o+a.phaseBob),c+=u*r.swayDeg*Math.sin(Xm*r.swayHz*o+a.phaseSway)),this.tremble>0){let e=Xm*i.trembleHz*o+a.phaseBob;c+=this.tremble*i.trembleDeg*Math.sin(e),l+=this.tremble*i.trembleLift*Math.abs(Math.cos(e))}s=Math.max(-.9,Math.min(Zm,s));let d=this.alpha>0;this.root.visible=d;let f=$m(this.fold),p=(1-f)*(Tp.tab/this.kit.tile),m=this.y+a.baseOffset+a.sortNudge;this.root.position.set(this.x,this.hop-this.sink+l+p,m);let h=90-this.fold*(90-n.leanBackDeg);this.lean.rotation.x=-h*Ym,this.turn.rotation.z=-c*Ym;let g=a.w*(1-n.squashWidth*s)*this.scale*this.facing,_=a.h*(1+s)*this.scale;this.sprite.scale.set(g,_,1),this.shadow.scale.set(g,_,1);let v=this.currentAsset();if(v!==this.shownAsset){this.shownAsset=v;let e=Mp(v);this.spriteMat.map=e,this.shadowU.uMap.value=e}let y=$m(this.alpha);this.spriteMat.opacity=y,this.spriteMat.alphaTest=n.alphaTest*Math.max(y,.01);let b=$m(1-t.scene.shadow.hopFade*Math.max(this.hop,0));this.shadowU.uAlpha.value=y*f*b,this.shadow.visible=d&&this.shadowU.uAlpha.value>0;let x=this.tab;if(x&&this.tabU){let e=f*$m(1-Math.max(this.hop,0)/n.tabHop);x.visible=d&&e>0,x.position.set(this.x,Tp.tab/this.kit.tile,m),x.scale.set(a.tabWidth*this.scale,1,n.tabDepth*this.scale*e),this.tabU.uAlpha.value=y}}flat(e,t){if(this.alpha<=0)return null;let n=this.kit.tile;return{asset:this.currentAsset(),x:e+this.x*n,z:t+(this.y+this.spec.baseOffset)*n,w:this.spec.w*this.scale*n,h:this.spec.h*this.scale*n,mirrored:this.facing===-1}}dispose(){this.root.removeFromParent(),this.tab?.removeFromParent(),this.spriteMat.dispose(),this.shadowMat.dispose(),this.tabMat?.dispose()}},th=896/1216;function nh(e){let t=e.scene.page.widthUnits;return{w:t,h:t/th}}function rh(e,t){let{w:n,h:r}=nh(t),i=t.scene.page,a=n-2*i.marginSide,o=r-i.headerUnits-i.footerUnits,s=Math.min(a/e.width,o/e.height,i.maxTile),c=s*e.width,l=s*e.height,u=(n-c)/2,d=-r/2+i.headerUnits+(o-l)/2;return{pageW:n,pageH:r,cols:e.width,rows:e.height,tile:s,boardX:u+s/2,boardZ:d+s/2}}function ih(e,t){return e.boardX+t*e.tile}function ah(e,t){return e.boardZ+t*e.tile}function oh(e,t,n){return{x:(t-e.boardX)/e.tile,y:(n-e.boardZ)/e.tile}}function sh(e,t,n){let r=oh(e,t,n),i=Math.round(r.x),a=Math.round(r.y);return i>=0&&a>=0&&i<e.cols&&a<e.rows?{x:i,y:a}:null}var ch=.001,lh={dog:1,sheep:2,wolf:3,rock:4,fence:5,post:6};function uh(e,t,n){return t<0||n<0||t>=e.width||n>=e.height?!1:e.rows[n]?.[t]===`p`}function dh(e,t,n){let r=n,i=r.scene.cutout,a=rh(e,r),o=new xi;o.name=`board`;let s=new xi;s.name=`tileSpace`,s.position.set(a.boardX,0,a.boardZ),s.scale.setScalar(a.tile),o.add(s);let c={T:r,tile:a.tile,shadow:zm(r,a.tile),tabGeometry:Jm(),geometries:new Map},l=(t,n,r)=>Wp(e.seed+r,lh[t],n)*Math.PI*2,u=(t,n)=>Wp(e.seed,lh[t]+16,n)<.5?1:-1,d=(e,t,n,r,a={})=>{let o={kind:e,id:t,sheepKind:null,stills:n,w:r.w,h:r.h,baseOffset:i.baseOffset,tabWidth:Math.min(i.tabWidth,r.w),idleAmp:0,phaseBob:l(e,t,0),phaseSway:l(e,t,1),homeFacing:1,sortNudge:0,...a};return new eh(c,o,s)},f=(e,t)=>({w:t*Np(e),h:t}),p=d(`dog`,0,{idle:`dog-idle`,alarm:`dog-alarm`,content:`dog-content`},f(`dog-idle`,i.spriteTiles),{idleAmp:1}),m=e.sheep.map(e=>{let t=e.kind;return d(`sheep`,e.id,{idle:`sheep-${t}-idle`,alarm:`sheep-${t}-alarm`,content:`sheep-${t}-content`},f(`sheep-${t}-idle`,i.spriteTiles),{sheepKind:t,idleAmp:1,homeFacing:u(`sheep`,e.id)})});m.sort((e,t)=>e.id-t.id);let h=e.wolves.map(e=>({x:e.x,y:e.y})),g=h.map((e,t)=>d(`wolf`,t,`wolf`,f(`wolf`,i.wolfTiles),{idleAmp:r.scene.idle.wolfScale,homeFacing:u(`wolf`,t)})),_=[],v=[],y=[`rock-1`,`rock-2`,`rock-3`];for(let t=0;t<e.height;t++)for(let n=0;n<e.width;n++){if(e.rows[t]?.[n]!==`#`)continue;let r=y[Math.floor(Wp(e.seed,n,t)*y.length)];v.push(d(`rock`,v.length,r,f(r,i.rockTiles),{homeFacing:u(`rock`,v.length)})),_.push({x:n,y:t})}let b=i.fenceTiles/Np(`fence-segment`),x={w:i.fenceTiles,h:b},S={w:b*Np(`fence-post`),h:b},C=[],w=new Map,T=[],E=new Map;for(let t=0;t<e.height;t++)for(let n=0;n<e.width;n++)if(uh(e,n,t))for(let r of[-1,1]){if(uh(e,n,t+r))continue;let i=2*t+r,a=d(`fence`,C.length,`fence-segment`,x,{baseOffset:0});C.push({x:n,y:i/2}),T.push(a),w.set(`${n}|${i}`,a);let o=E.get(i);o||E.set(i,o=[]),o.push(n)}let D=[],O=new Set,k=(e,t)=>{let n=`${e}|${t}`;O.has(n)||(O.add(n),T.push(d(`post`,D.length,`fence-post`,S,{baseOffset:0,sortNudge:ch,tabWidth:Math.min(i.tabWidth,S.w)})),D.push({x:e,y:t}))};for(let[e,t]of E){t.sort((e,t)=>e-t);let n=t[0];for(let r=1;r<=t.length;r++){let i=t[r],a=t[r-1];(i===void 0||i!==a+1)&&(k(n-.5,e/2),k(a+.5,e/2),i!==void 0&&(n=i))}}let A=[...C,...D],j=[p,...m,...g,...v,...T],M=e=>{for(let e of j)e.rest();p.x=e.dog.x,p.y=e.dog.y,p.pose=`idle`,p.alpha=1;for(let t of e.sheep){let e=m[t.id];e&&(e.x=t.x,e.y=t.y,e.pose=t.status===`penned`?`content`:`idle`,e.alpha=t.status===`fallen`?0:1)}let t=(e,t)=>{e.forEach((e,n)=>{let r=t[n];e.x=r.x,e.y=r.y,e.pose=`idle`,e.alpha=1})};t(g,h),t(v,_),t(T,A)};M(t);let N=(e,t,n)=>{for(let r of e)if(Math.round(r.x)===t&&Math.round(r.y)===n)return r;return null},P={level:e,layout:a,group:o,tileSpace:s,dog:p,sheep:m,wolves:g,rocks:v,fences:T,pieces:j,wolfAt:(e,t)=>N(g,e,t),rockAt:(e,t)=>N(v,e,t),fenceBetween(e,t,n,r){return e!==n||Math.abs(t-r)!==1?null:w.get(`${e}|${t+r}`)??null},snapTo:M,update(e,t){s.updateWorldMatrix(!0,!1),c.shadow.uWorldFromPage.value.copy(s.matrixWorld),c.shadow.uPageFromWorld.value.copy(s.matrixWorld).invert();for(let n of j)n.step(e),n.apply(t)},flatSprites(){let e=[];for(let t of j){let n=t.flat(a.boardX,a.boardZ);n&&e.push(n)}return e},dispose(){for(let e of j)e.dispose();c.tabGeometry.dispose();for(let e of c.geometries.values())e.dispose();c.geometries.clear(),o.removeFromParent()}};return P.update(0,0),P}var fh=-.06,ph=-.03,mh=-.008,hh=.03,gh=.004,_h=48;function vh(e,t,n,r,i,a=0,o=1){let s=new wa;return s.setAttribute(`position`,new fa([e,i,n,e,i,r,t,i,n,t,i,r],3)),s.setAttribute(`uv`,new fa([a,1,a,0,o,1,o,0],2)),s.setIndex([0,1,2,2,1,3]),s.computeBoundingSphere(),s}function yh(e,t,n=1){return new Ia({map:e,transparent:t,depthWrite:!t,depthTest:!0,side:2,color:new Oi(n,n,n)})}function bh(e){let t=nh(e),n=new xi;n.name=`book`;let r=yh(Mp(`desk`),!1),i=new Ja(vh(-.5,.5,-.5,.5,0),r);i.position.y=fh,i.renderOrder=wp.desk,i.name=`desk`,n.add(i);let a=fp(`book-base`),o=t.w*a.width/fp(`page`).width,s=o*a.height/a.width,c=-e.scene.book.pageInsetLeft*o,l=-t.h/2-e.scene.book.pageInsetTop*s,u=Mp(`book-base`),d=new Ja(vh(c,c+o,l,l+s,ph),yh(u,a.alpha)),f=new Ja(vh(-c-o,-c,l,l+s,ph,1,0),yh(u,a.alpha));d.renderOrder=f.renderOrder=wp.book,d.name=`book-base-right`,f.name=`book-base-left`,n.add(d,f);let p=new Ja(vh(-t.w,0,-t.h/2,t.h/2,mh,1,0),yh(Mp(`page`),!1,1-e.scene.page.leftPageDarken));p.renderOrder=wp.book,p.name=`left-page`,n.add(p);let m=fp(`desk`),h=m.width/m.height,g=new Es,_=new Oa(new K(0,1,0),.06),v=new K,y=new G;return{group:n,fitDesk(e,t){e.updateMatrixWorld();let n=1/0,r=-1/0,a=1/0,o=-1/0;for(let[t,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])y.set(t,i),g.setFromCamera(y,e),g.ray.intersectPlane(_,v)||g.ray.at(e.far,v),n=Math.min(n,v.x),r=Math.max(r,v.x),a=Math.min(a,v.z),o=Math.max(o,v.z);let s=(r-n)*(1+t),c=(o-a)*(1+t);s/c>h?c=s/h:s=c*h,i.scale.set(s,1,c),i.position.x=(n+r)/2,i.position.z=(a+o)/2}}}var xh=`
attribute float aTheta;
varying vec2 vUv;
varying float vTheta;
void main() {
  vUv = uv;
  vTheta = aTheta;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Sh=`
uniform sampler2D uFront;
uniform sampler2D uBack;
uniform float uBackTint;
uniform float uLiftShade;
varying vec2 vUv;
varying float vTheta;
void main() {
  vec3 c = gl_FrontFacing ? texture2D(uFront, vUv).rgb : texture2D(uBack, vUv).rgb * uBackTint;
  c *= 1.0 - uLiftShade * sin(vTheta);
  gl_FragColor = vec4(c, 1.0);
}
`,Ch=class{mesh;canvas;ctx;texture;size;angle=0;pos;theta;px=new Float32Array(49);py=new Float32Array(49);curl;constructor(e,t){this.size=nh(e),this.curl=e.page.curlRad;let n=fp(`page`);this.canvas=document.createElement(`canvas`),this.canvas.width=Math.round(n.width*e.scene.page.printScale),this.canvas.height=Math.round(n.height*e.scene.page.printScale),this.ctx=this.canvas.getContext(`2d`),this.texture=new ho(this.canvas),this.texture.colorSpace=``,this.texture.minFilter=Pt,this.texture.magFilter=Mt,this.texture.generateMipmaps=!0,this.texture.anisotropy=t;let r=_h,i=new Float32Array(294),a=new Float32Array(196),o=[];for(let e=0;e<=r;e++){let t=e/r;if(a.set([t,1,t,0],e*4),e<r){let t=2*e;o.push(t,t+1,t+2,t+2,t+1,t+3)}}let s=new wa;this.pos=new fa(i,3),this.theta=new fa(new Float32Array(98),1),this.pos.setUsage(tr),this.theta.setUsage(tr),s.setAttribute(`position`,this.pos),s.setAttribute(`uv`,new fa(a,2)),s.setAttribute(`aTheta`,this.theta),s.setIndex(o);let c=new Ao({vertexShader:xh,fragmentShader:Sh,side:2,uniforms:{uFront:{value:this.texture},uBack:{value:Mp(`page`)},uBackTint:{value:1-e.scene.page.leftPageDarken},uLiftShade:{value:e.page.liftShade}}});this.mesh=new Ja(s,c),this.mesh.renderOrder=wp.sheet,this.mesh.frustumCulled=!1,this.mesh.name=`sheet`,this.setAngle(0,!1)}get scale(){return this.canvas.width/this.size.w}upload(){this.texture.needsUpdate=!0}setAngle(e,t){this.angle=e;let n=_h,r=this.size.w/n,i=this.size.h/2,a=t?hh:0,o=this.curl*Math.sin(e),s=t=>Math.min(Math.PI,Math.max(0,e+o*(2*t-1))),c=0,l=0,u=this.pos.array,d=this.theta.array;for(let e=0;e<=n;e++){this.px[e]=c,this.py[e]=l,u.set([c,l+a,-i,c,l+a,i],e*6);let t=s(e/n);if(d[e*2]=d[e*2+1]=t,e<n){let t=s((e+.5)/n);c+=r*Math.cos(t),l+=r*Math.sin(t)}}this.pos.needsUpdate=!0,this.theta.needsUpdate=!0}heightAt(e){let t=_h,n=Math.min(t,Math.max(0,e/this.size.w*t)),r=Math.min(47,Math.floor(n)),i=n-r;return this.py[r]*(1-i)+this.py[r+1]*i}tip(){return{x:this.px[_h],y:this.py[_h]}}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}},wh=`
varying float vX;
void main() {
  vX = position.x;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Th=`
uniform vec3 uColor;
uniform float uTip;
uniform float uSoft;
uniform float uStrength;
varying float vX;
void main() {
  // The shadow lies on the side of the spine the free edge is over: full under the sheet,
  // fading out beyond its edge.
  float side = uTip >= 0.0 ? 1.0 : -1.0;
  float xs = vX * side;
  if (xs < 0.0) discard;
  float dx = xs - abs(uTip);
  float f = dx <= 0.0 ? 1.0 : max(0.0, 1.0 - dx / uSoft);
  gl_FragColor = vec4(uColor, f * f * uStrength);
}
`,Eh=class{mesh;mat;T;constructor(e){this.T=e;let t=nh(e);this.mat=new Ao({vertexShader:wh,fragmentShader:Th,transparent:!0,depthWrite:!1,depthTest:!0,side:2,uniforms:{uColor:{value:new Oi(cp.navy)},uTip:{value:0},uSoft:{value:1},uStrength:{value:0}}}),this.mesh=new Ja(vh(-t.w,t.w,-t.h/2,t.h/2,gh),this.mat),this.mesh.renderOrder=wp.sheet+1,this.mesh.visible=!1,this.mesh.name=`turn-shadow`}follow(e){if(!e){this.mesh.visible=!1;return}let t=e.tip(),n=this.mat.uniforms;n.uTip.value=t.x,n.uSoft.value=this.T.page.turnShadowSoft*(1+Math.max(0,t.y)),n.uStrength.value=this.T.page.turnShadow*Math.sin(e.angle),this.mesh.visible=!0}},Dh=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Oh=`
uniform sampler2D tFrame;
uniform vec2 uOffA;
uniform vec2 uOffB;
varying vec2 vUv;
void main() {
  float r = texture2D(tFrame, vUv + uOffA).r;
  float g = texture2D(tFrame, vUv).g;
  float b = texture2D(tFrame, vUv + uOffB).b;
  gl_FragColor = vec4(r, g, b, 1.0);
}
`,kh=class{target;scene=new Ai;camera=new cs(-1,1,1,-1,0,1);mat;T;constructor(e){this.T=e,this.target=new Wr(1,1,{samples:e.scene.post.msaaSamples,depthBuffer:!0,colorSpace:``,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),this.mat=new Ao({vertexShader:Dh,fragmentShader:Oh,depthTest:!1,depthWrite:!1,uniforms:{tFrame:{value:this.target.texture},uOffA:{value:new G},uOffB:{value:new G}}});let t=new Ja(new xo(2,2),this.mat);t.frustumCulled=!1,this.scene.add(t)}setSize(e,t){this.target.setSize(Math.max(1,e),Math.max(1,t));let n=this.T.scene.post,r=this.mat.uniforms,i=r=>{let i=r*Math.PI/180;return[n.misregisterPx*Math.cos(i)/Math.max(1,e),n.misregisterPx*Math.sin(i)/Math.max(1,t)]};r.uOffA.value.set(...i(n.misregisterAngleADeg)),r.uOffB.value.set(...i(n.misregisterAngleBDeg))}render(e,t,n){e.setRenderTarget(this.target),e.clear(),e.render(t,n),e.setRenderTarget(null),e.render(this.scene,this.camera)}dispose(){this.target.dispose(),this.mat.dispose()}},Ah=class{frameMs=16.7;ratio;slow=0;last=-1;T;enabled;constructor(e,t,n){this.T=e,this.enabled=n,this.ratio=Math.min(t,e.scene.post.maxPixelRatio)}sample(e){if(this.last<0)return this.last=e,!1;let t=e-this.last;if(this.last=e,t>250)return!1;this.frameMs+=(t-this.frameMs)*.1;let n=this.T.scene.post;return!this.enabled||this.ratio<=1||(this.slow=this.frameMs>n.adaptFrameMs?this.slow+1:0,this.slow<n.adaptFrames)?!1:(this.slow=0,this.ratio=Math.max(1,this.ratio-n.adaptStep),!0)}},jh=.34,Mh=.66,Nh=.8,Ph=1.48,Fh=.26,Ih=.42,Lh=.6,Rh=.95,zh=.95,Bh=1.98,Vh=3.45,Hh=1.9,Uh=5.35,Wh=1.7,Gh=2.5,Kh=1.12,qh=1.3,Jh=.48,Yh=.56,Xh=.3,Zh=.32,Qh=.2,$h=.45,eg=1.15,tg=.2,ng=.62,rg=.62,ig=3.55,ag=.3,og=4.25,sg={rocks:`ROCKS`,mud:`MUD`,holes:`HOLES`,"black-sheep":`BLACK SHEEP`,wolves:`WOLVES`},cg={rocks:`rock-1`,mud:`tile-mud`,holes:`hole`,"black-sheep":`sheep-black-idle`,wolves:`wolf`},lg={".":`grass`,m:`mud`,p:`pen`,o:`hole`,"#":`rock`};function ug(e){let t=e.canvas.width/e.size.w;return{s:t,px:e=>e*t,py:n=>(n+e.size.h/2)*t}}function dg(e){let{ctx:t,canvas:n}=e;t.setTransform(1,0,0,1,0,0),t.globalAlpha=1,t.clearRect(0,0,n.width,n.height),t.drawImage(Sp(`page`),0,0,n.width,n.height)}function fg(e,t,n,r,i,a){e.font=Ap(i);let o=e.measureText(t).width;o>a&&(e.font=Ap(i*a/o)),e.fillStyle=cp.navy,e.textAlign=`center`,e.textBaseline=`alphabetic`,e.fillText(t,n,r)}function pg(e,t,n,r){dg(e);let{ctx:i}=e,{s:a,px:o,py:s}=ug(e),{w:c,h:l}=e.size,u=-l/2,d=(c-2*Lh)*a;fg(i,r?.top??`CHAPTER ${t.chapter}`,o(c/2),s(u+Mh),jh*a,d),fg(i,r?.main??`LEVEL ${t.id}`,o(c/2),s(u+Ph),Nh*a,d);let f=rh(t,n),p=e=>Math.round(o(f.boardX+(e-.5)*f.tile)),m=e=>Math.round(s(f.boardZ+(e-.5)*f.tile));for(let e=0;e<t.height;e++){let r=t.rows[e]??``;for(let a=0;a<t.width;a++){let o=lg[r[a]??`.`]??`grass`,s=p(a),c=p(a+1),l=m(e),u=m(e+1),d=c-s,f=u-l,h=o===`mud`?`tile-mud`:o===`pen`?`tile-pen`:`tile-grass`,g=Math.floor(Wp(t.seed,a,e)*8);i.save(),i.translate(s+d/2,l+f/2),i.rotate(g%4*(Math.PI/2)),g>=4&&i.scale(-1,1),i.drawImage(Sp(h),-d/2-.5,-f/2-.5,d+1,f+1),i.restore(),(a+e)%2==1&&(i.globalAlpha=n.scene.page.checkerTint,i.fillStyle=cp.navy,i.fillRect(s,l,d,f),i.globalAlpha=1),o===`hole`&&i.drawImage(Sp(`hole`),s,l,d,f)}}i.globalAlpha=1,fg(i,r?.folio??`${t.id}`,o(c/2),s(l/2-Ih),Fh*a,d)}function mg(e,t,n,r,i,a,o,s=1.1){e.font=Ap(a);let c=a*s,l=a*.3,u=Math.min(e.measureText(n).width,o-c-l),d=r-(c+l+u)/2;e.drawImage(Sp(t),d,i-a*.86-(c-a)/2,c,c),fg(e,n,d+c+l+u/2,i,a,u)}var hg=.95,gg=.41,_g=1.98,vg=.78,yg=2.78,bg=.3,xg=3,Sg=.27,Cg=.66,wg={size:Cg,dx:.06,dy:.1},Tg=1.04,Eg=.4,Dg=10.6,Og=.46,kg=11.3,Ag=.3,jg=.5,Mg=.95,Ng=.41,Pg=1.98,Fg=.8,Ig=2.72,Lg=.34,Rg=3.55,zg=1.95,Bg=2.55,Vg=1.6,Hg=.26,Ug=.09,Wg=.05,Gg=.45,Kg=4.7,qg=6.5,Jg=-14,Yg=.6,Xg=.12,Zg=.38;function Qg(e,t){dg(e);let{ctx:n}=e,{s:r,px:i,py:a}=ug(e),{w:o,h:s}=e.size,c=-s/2,l=(o-2*Lh)*r,u=o/2;fg(n,t.heading,i(u),a(c+Mg),Ng*r,l),fg(n,t.title,i(u),a(c+Pg),Fg*r,l),fg(n,t.count,i(u),a(c+Ig),Lg*r,l);let d=Vg*r;if(t.slots.forEach((e,t)=>{let o=u+(t%3-1)*Bg,s=c+Rg+Math.floor(t/3)*zg+Vg/2,l=i(o)-d/2,f=a(s)-d/2;e.sticker?(n.save(),n.shadowColor=`rgba(34, 48, 79, ${Gg})`,n.shadowBlur=Ug*r,n.shadowOffsetY=Wg*r,n.drawImage(Sp(e.sticker),l,f,d,d),n.restore()):n.drawImage(Sp(`sticker-slot`),l,f,d,d),fg(n,String(e.level),i(o),a(s+Vg/2+Hg*.9),Hg*r,d)}),t.stamp){let e=Kg*r;n.save(),n.translate(i(u),a(c+qg)),n.rotate(Jg*Math.PI/180),n.drawImage(Sp(`stamp-ring`),-e/2,-e/2,e,e),n.font=Ap(Yg*r),n.fillStyle=cp.coral,n.textAlign=`center`,n.textBaseline=`alphabetic`;let o=e*.62,s=(e,t)=>{n.font=Ap(t);let r=n.measureText(e).width;r>o&&(n.font=Ap(t*o/r))};n.strokeStyle=cp.paper,n.lineJoin=`round`,n.lineWidth=Xg*r;let l=(e,t,r)=>{s(e,t),n.strokeText(e,0,r),n.fillText(e,0,r)};l(t.stamp.line1,Yg*r,-.6*r*.15),l(t.stamp.line2,Zg*r,Yg*r*.85),n.restore()}return fg(n,t.folio,i(u),a(s/2-Ih),Fh*r,l),[]}function $g(e,t){dg(e);let{ctx:n}=e,{s:r,px:i,py:a}=ug(e),{w:o,h:s}=e.size,c=-s/2,l=(o-2*Lh)*r,u=o/2;fg(n,t.heading,i(u),a(c+hg),gg*r,l),fg(n,t.month,i(u),a(c+_g),vg*r,l);let d=(o-2*Lh)/7,f=e=>Lh+d*(e+.5);for(let e=0;e<7;e++)fg(n,t.weekdays[e]??``,i(f(e)),a(c+yg),bg*r,d*r);let p=[];if(t.unavailable!==null)fg(n,t.unavailable,i(u),a(c+xg+3*d),Og*r,l);else{let e=d*r;for(let o of t.days){let s=t.firstColumn+o.day-1,l=s%7,u=Math.floor(s/7),m=f(l),h=c+xg+d*(u+.5);if(n.globalAlpha=o.playable||o.mark!==null?1:Eg,n.drawImage(Sp(`calendar-cell`),i(m)-e/2,a(h)-e/2,e,e),o.mark!==null){let t=Cg*e;n.drawImage(Sp(o.mark===`solved`?`paw-stamp`:`paw-hollow`),i(m)-t/2+e*wg.dx,a(h)-t/2+e*wg.dy,t,t)}if(n.font=Ap(Sg*r),n.fillStyle=cp.navy,n.textAlign=`left`,n.textBaseline=`alphabetic`,n.fillText(String(o.day),i(m)-e*.4,a(h)-e*.17),o.today){let t=Tg*e;n.drawImage(Sp(`stamp-ring`),i(m)-t/2,a(h)-t/2,t,t)}n.globalAlpha=1,o.playable&&p.push({id:o.day,x:m,z:h,r:d/2})}}return mg(n,`icon-flame`,t.streak,i(u),a(c+Dg),Og*r,l),n.globalAlpha=t.freeMissReady?1:jg,mg(n,`paw-hollow`,t.freeMiss,i(u),a(c+kg),Ag*r,l,1.4),n.globalAlpha=1,p}function e_(e,t){dg(e);let{ctx:n}=e,{s:r,px:i,py:a}=ug(e),{w:o,h:s}=e.size,c=-s/2,l=o/2,u=(o-2*Lh)*r,d=t.chapter.element;if(fg(n,`CHAPTER ${t.chapter.id}`,i(l),a(c+Rh),jh*r*1.2,u),fg(n,sg[d],i(l),a(c+Bh),zh*r,u),t.lock){n.globalAlpha=tg;let e=Hh*r;n.drawImage(Sp(cg[d]),i(l)-e/2,a(c+Vh)-e/2,e,e),n.globalAlpha=1;let o=ng*r;n.font=Ap(o);let s=Math.min(n.measureText(t.lock.gate).width,u*.7),f=rg*r,p=f+o*.25+s,m=i(l)-p/2,h=a(c+ig);n.drawImage(Sp(`star-full`),m,h-o*.86,f,f),fg(n,t.lock.gate,m+f+o*.25+s/2,h,o,s),fg(n,t.lock.detail,i(l),a(c+og),ag*r,u)}else{let e=Hh*r;n.drawImage(Sp(cg[d]),i(l)-e/2,a(c+Vh)-e/2,e,e)}let f=[];for(let e of t.levels){let t=e.index-1,o=t%3,s=Math.floor(t/3),u=l+(o-1)*Gh,d=c+Uh+s*Wh,p=e.next?qh:Kh,m=p*r;if(n.globalAlpha=e.locked?$h:1,n.drawImage(Sp(`btn-round`),i(u)-m/2,a(d)-m/2,m,m),e.locked){let e=Yh*r*(p/Kh);n.drawImage(Sp(`icon-lock`),i(u)-e/2,a(d)-e/2,e,e)}else{let t=Jh*r*(p/Kh);n.font=Ap(t),n.fillStyle=cp.navy,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`${e.index}`,i(u),a(d)+t*.06)}let h=Xh*r,g=d+p/2+Qh;for(let t=0;t<3;t++){let r=u+(t-1)*Zh;n.drawImage(Sp(t<e.stars?`star-full`:`star-empty`),i(r)-h/2,a(g)-h/2,h,h)}n.globalAlpha=1,f.push({id:e.id,x:u,z:d,r:p/2*eg})}return fg(n,`${t.chapter.id} / ${t.chapterCount}`,i(l),a(s/2-Ih),Fh*r,u),f}function t_(e,t){let{ctx:n}=e,{s:r,px:i,py:a}=ug(e);n.setTransform(1,0,0,1,0,0),n.globalAlpha=1;for(let e of t){let t=e.w*r,o=e.h*r;n.save(),n.translate(i(e.x),a(e.z)),e.mirrored&&n.scale(-1,1),n.drawImage(Sp(e.asset),-t/2,-o,t,o),n.restore()}}J.enabled=!1;var n_=Math.PI/180,r_=.08,i_=.2;function a_(e,t,n,r){let i=t.scene.camera,a=i.elevationDeg*n_,o=Math.sin(a),s=Math.cos(a),c=Math.tan(i.fovDeg*n_/2),l=c*r,u=n.h/2,d=o/c,f=n.w*i.fitWidthMargin/2,p=f/l,m=p+n.h*s,h=-2*i.verticalBias,g=(u/p-u/m+2*h/d)/(1/m+1/p),_=f,v=`width`,y=d*(u+g)/m,b=-d*(u-g)/p;(y>1||b<-1)&&(p=(n.h*d-n.h*s)/2,m=p+n.h*s,g=m/d-u,_=p*l,v=`height`);let x=p+(u-g)*s;return e.fov=i.fovDeg,e.aspect=r,e.near=Math.max(.5,p*.4),e.far=x*4+n.h*4,e.position.set(_,x*o,g+x*s),e.up.set(0,1,0),e.lookAt(_,0,g),e.updateProjectionMatrix(),e.updateMatrixWorld(!0),{fitted:v}}function o_(e,t){let n=t.tuning,r=t.timeline,i=nh(n),a=typeof location<`u`?new URLSearchParams(location.search):new URLSearchParams,o=new Bu({canvas:e,antialias:!1,alpha:!1,powerPreference:`high-performance`});o.outputColorSpace=Xn,o.setClearColor(new Oi(cp.navy),1),o.info.autoReset=!1;let s=new Ai,c=new ss(n.scene.camera.fovDeg,1,1,1e3),l=new kh(n),u=new Ah(n,window.devicePixelRatio||1,!a.has(`fixedDpr`)),d=bh(n);s.add(d.group);let f=Math.min(8,o.capabilities.getMaxAnisotropy()),p=[new Ch(n,f),new Ch(n,f)];for(let e of p)e.mesh.visible=!1,s.add(e.mesh);let m=p[0],h=e=>e===p[0]?p[1]:p[0],g=new Map,_=new Eh(n);s.add(_.mesh);let v=new Ia({color:new Oi(cp.navy),transparent:!0,opacity:0,depthWrite:!1,depthTest:!0}),y=new Ja(new bo(1,40).rotateX(-Math.PI/2),v);y.position.y=Tp.ink,y.renderOrder=wp.ink,y.visible=!1,s.add(y);let b=null,x=n.scene.page.checkerTint*3,S=null,C=new Set,w=null,T=!1,E=0,D=null,O=Promise.resolve(),k=0,A=1,j=0,M=Up(379422),N=new K,P={resize:ee,frame:V,pick:R,tileToClient:z,stampToClient:Se,stampCircle:B,get board(){return S},onBoard:null,get turning(){return T},showChapter:se,showLevel:ce,refreshChapter:le,turnToChapter:(e,t)=>de({kind:`chapter`,page:e},t),turnToLevel:(e,t,n,r)=>de({kind:`level`,level:e,state:t,heading:r},n),showPage:e=>L({kind:`printed`,page:e}),turnToPage:(e,t)=>de({kind:`printed`,page:e},t),refreshPage:ue,pressStamp:ge,shake:Ce,stats:H,three:{scene:s,camera:c,renderer:o}};function ee(){let t=Math.max(1,e.clientWidth||window.innerWidth),r=Math.max(1,e.clientHeight||window.innerHeight);o.setPixelRatio(u.ratio),o.setSize(t,r,!1);let a=o.getDrawingBufferSize(new G);l.setSize(a.x,a.y),a_(c,n,i,t/r),d.fitDesk(c,i_)}function F(e,t){if(t.kind===`level`)pg(e,t.level,n,t.heading),g.set(e,{kind:`level`,level:t.level});else if(t.kind===`chapter`){let n=e_(e,t.page);g.set(e,{kind:`chapter`,page:t.page,stamps:n})}else{let n=t.page.kind===`calendar`?$g(e,t.page):Qg(e,t.page);g.set(e,{kind:`printed`,page:t.page,stamps:n})}e.upload()}function te(e,n,r){let i=t.makeBoard(e,n);for(let e of i.pieces)e.fold=r;return s.add(i.group),S=i,w=i.layout,P.onBoard?.(i),i}function ne(e){s.remove(e.group),e.dispose(),C.delete(e)}function re(){for(let e of[...C])ne(e);if(S){let e=S;S=null,P.onBoard?.(null),ne(e)}}function ie(e){return new Promise(t=>r.tween({...e,tag:Z.page,done:t}))}function ae(e){let t=[...e.pieces].sort((e,t)=>t.x-e.x||t.y-e.y);return Promise.all(t.map((e,t)=>{let r=e.fold;return ie({delay:t*n.page.foldDownStaggerMs,dur:n.page.foldDownMs,ease:n.page.foldDownEase,update:t=>void(e.fold=r*(1-t))})})).then(()=>void 0)}function oe(e,r){let i=e.level.seed;return Promise.all(e.pieces.map((a,o)=>{a.fold=0;let s=ih(e.layout,a.x);return ie({delay:Math.max(0,r(s)),dur:n.page.foldUpMs,ease:n.page.foldUpEase,update:e=>void(a.fold=e)}).then(()=>{a.kickWobble(n.page.foldUpKickDeg),t.audio.play(`fold-up`,{pitch:.85+.3*Wp(i,o,7)})})})).then(()=>void 0)}function I(){if(!T)return;E++,r.cancel(Z.page);for(let e of p)e.setAngle(0,!1),e.mesh.visible=e===m;_.follow(null),T=!1;let e=D;D=null,e?.()}function L(e){if(I(),re(),he(!0),F(m,e),m.setAngle(0,!1),m.mesh.visible=!0,h(m).mesh.visible=!1,e.kind===`level`){let t=te(e.level,e.state,1);t.group.visible=!0}}function se(e){L({kind:`chapter`,page:e})}function ce(e,t){L({kind:`level`,level:e,state:t})}function le(e){for(let t of[m,h(m)]){if(!t.mesh.visible)continue;let n=g.get(t);n?.kind===`chapter`&&n.page.chapter.id===e.chapter.id&&F(t,{kind:`chapter`,page:e})}}function ue(e){for(let t of[m,h(m)]){if(!t.mesh.visible)continue;let n=g.get(t);n?.kind===`printed`&&n.page.kind===e.kind&&n.page.key===e.key&&F(t,{kind:`printed`,page:e})}}function de(e,t){let n=()=>new Promise(n=>{let r=++E;D=n,T=!0,fe(r,e,t).then(()=>{E===r&&(T=!1,D=null,n())})}),r=T?O.then(n):n();return O=r,r}async function fe(e,a,o){let s=m,c=h(m);he(!0);let l=S;if(l){if(S=null,P.onBoard?.(null),C.add(l),await ae(l),E!==e)return;l.update(0,r.now),t_(s,l.flatSprites()),s.upload(),ne(l)}F(c,a);let u=n.page.turnMs*(t.turnScale?.()??1),d=i.w;if(o===`forward`){c.setAngle(0,!1),c.mesh.visible=!0,s.setAngle(0,!0);let r=null,i=Promise.resolve();a.kind===`level`&&(r=te(a.level,a.state,0),r.group.visible=!1,i=oe(r,e=>u*(n.page.foldUpAt+n.page.foldUpSweep*(1-e/d))));let o=r?r.layout.boardX-r.layout.tile:0;if(t.audio.play(`page-turn`),await ie({dur:u,ease:n.page.turnEase,update:e=>{s.setAngle(e*Math.PI,!0),_.follow(s),r&&!r.group.visible&&(r.group.visible=s.angle>=Math.PI/2||s.heightAt(o)>r_)}}),E!==e)return;r&&(r.group.visible=!0),s.mesh.visible=!1,s.setAngle(0,!1),_.follow(null),m=c,await i}else{if(c.setAngle(Math.PI,!0),c.mesh.visible=!0,t.audio.play(`page-turn`),await ie({dur:u,ease:n.page.turnEase,update:e=>{c.setAngle((1-e)*Math.PI,!0),_.follow(c)}}),E!==e)return;c.setAngle(0,!1),s.mesh.visible=!1,_.follow(null),m=c,a.kind===`level`&&await oe(te(a.level,a.state,0),e=>u*n.page.foldUpSweep*(e/d))}}function pe(e){let t=g.get(m);return t?.kind!==`chapter`&&t?.kind!==`printed`?null:t.stamps.find(t=>t.id===e)??null}let me=null;function he(e){if(me?.cancel(),me=null,e||b===null){b=null,y.visible=!1,v.opacity=0;return}b=null;let t=v.opacity,i=y.scale.x,a=i/n.page.stampPressScale;me=r.tween({dur:n.page.stampPressMs,ease:n.page.stampPressEase,tag:Z.page,update:e=>{v.opacity=t*(1-e);let n=i+(a-i)*e;y.scale.set(n,1,n)},done:()=>void(y.visible=!1)})}function ge(e){if(e===null||T){he(T);return}let t=pe(e);if(!t)return;me?.cancel(),b=e;let i=t.r/1.15;y.position.set(t.x,Tp.ink,t.z),y.visible=!0;let a=v.opacity;me=r.tween({dur:n.page.stampPressMs,ease:`quadOut`,tag:Z.page,update:e=>{v.opacity=a+(x-a)*e;let t=i*(1+(n.page.stampPressScale-1)*e);y.scale.set(t,1,t)}})}let _e=new Es,ve=new Oa(new K(0,1,0),0),ye=new G,be=new K;function R(t,n){let r=e.getBoundingClientRect();if(ye.set((t-r.left)/r.width*2-1,-((n-r.top)/r.height)*2+1),_e.setFromCamera(ye,c),!_e.ray.intersectPlane(ve,be))return{wx:NaN,wz:NaN,onPage:!1,tile:null,stamp:null};let a=be.x,o=be.z,s=a>=0&&a<=i.w&&Math.abs(o)<=i.h/2,l=S&&s?sh(S.layout,a,o):null,u=null,d=g.get(m);if(!T&&s&&(d?.kind===`chapter`||d?.kind===`printed`))for(let e of d.stamps)Math.hypot(a-e.x,o-e.z)<=e.r&&(u=e.id);return{wx:a,wz:o,onPage:s,tile:l,stamp:u}}function xe(t,n,r){let i=e.getBoundingClientRect();return be.set(t,n,r).project(c),{x:i.left+(be.x+1)/2*i.width,y:i.top+(1-be.y)/2*i.height}}function z(e,t,n=0){let r=S?.layout??w;return r?xe(ih(r,e),n*r.tile,ah(r,t)):xe(i.w/2,0,0)}function Se(e){let t=pe(e);return t?xe(t.x,0,t.z):null}function B(e){let t=pe(e);if(!t)return null;let n=xe(t.x,0,t.z),r=xe(t.x+t.r,0,t.z);return{x:n.x,y:n.y,r:Math.hypot(r.x-n.x,r.y-n.y)}}function Ce(e,t){e<(k>0?j*(k/A)**2:0)||(j=e,A=Math.max(1,t),k=A)}function V(e){u.sample(performance.now())&&ee(),o.info.reset();for(let t of C)t.update(e,r.now);S?.update(e,r.now);let t=!1;if(k>0){k=Math.max(0,k-e);let n=j*(k/A)**2,r=M.next()*Math.PI*2;N.copy(c.position),c.position.x+=Math.cos(r)*n,c.position.z+=Math.sin(r)*n,c.updateMatrixWorld(),t=!0}l.render(o,s,c),t&&(c.position.copy(N),c.updateMatrixWorld())}function H(){return{drawCalls:o.info.render.calls,triangles:o.info.render.triangles,pixelRatio:u.ratio,frameMs:u.frameMs}}return ee(),P}var s_={name:`bark-web`,private:!0,version:`0.1.0`,type:`module`,scripts:{dev:`vite`,build:`vite build`,preview:`vite preview`,typecheck:`tsc --noEmit && tsc -p src/core/tsconfig.json --noEmit`,test:`vitest run`,"gen:levels":`tsx tools/generate-levels.ts`,e2e:`playwright test`},dependencies:{three:`^0.187.0`},devDependencies:{"@playwright/test":`^1.65.0`,"@types/node":`^26.6.6`,"@types/three":`^0.187.0`,tsx:`^4.23.15`,typescript:`^7.0.2`,vite:`^8.3.8`,vitest:`^5.1.0`}},c_=864e5,l_=/^(\d{4})-(\d{2})-(\d{2})$/;function u_(e){let t=l_.exec(e);if(!t)return null;let n=Number(t[1]),r=Number(t[2]),i=Number(t[3]),a=new Date(Date.UTC(n,r-1,i));return a.getUTCFullYear()!==n||a.getUTCMonth()!==r-1||a.getUTCDate()!==i?null:{y:n,m:r,d:i}}function d_(e){return typeof e==`string`&&u_(e)!==null}function f_(e){let t=u_(e);if(!t)throw Error(`not a day: ${e}`);return Date.UTC(t.y,t.m-1,t.d)/c_}function p_(e){let t=new Date(e*c_),n=t.getUTCFullYear(),r=t.getUTCMonth()+1,i=t.getUTCDate();return`${String(n).padStart(4,`0`)}-${String(r).padStart(2,`0`)}-${String(i).padStart(2,`0`)}`}function m_(e,t){return f_(t)-f_(e)}function h_(e,t){return p_(f_(e)+t)}function g_(e){return((f_(e)+3)%7+7)%7}function __(e){return p_(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/c_)}function v_(e,t){return(e%t+t)%t}function y_(e){return`${e.slice(0,7)}-01`}function b_(e,t){let n=u_(e);if(!n)throw Error(`not a day: ${e}`);let r=n.y*12+(n.m-1)+t,i=Math.floor(r/12),a=r-i*12+1;return`${String(i).padStart(4,`0`)}-${String(a).padStart(2,`0`)}-01`}function x_(e){let t=u_(e);if(!t)throw Error(`not a day: ${e}`);return new Date(Date.UTC(t.y,t.m,0)).getUTCDate()}function S_(e,t){let n=u_(e),r=u_(t);if(!n||!r)throw Error(`not a day: ${e} or ${t}`);return r.y*12+r.m-(n.y*12+n.m)}var C_={today:()=>__(new Date)};function w_(e){return{today:()=>e}}function T_(e){let t=new URLSearchParams(e),n=t.get(`date`);return t.has(`debug`)&&n!==null&&d_(n)?w_(n):C_}function E_(e){return{chapterGates:e.progress.chapterGates,startTokens:e.economy.startTokens,hintCost:e.economy.hintCost,threeStarTokens:e.economy.threeStarTokens,chapterCompleteTokens:e.economy.chapterCompleteTokens,dailyTokens:e.economy.dailyTokens,milestoneDays:e.economy.streakMilestoneDays,milestoneTokens:e.economy.streakMilestoneTokens,rechargeDays:e.daily.freeMissRechargeDays,dailyEpoch:e.daily.epoch,dailyCycle:e.daily.cycle}}function D_(e,t){return v_(m_(t.dailyEpoch,e),t.dailyCycle)}function O_(e){return{version:2,stars:{},lastPlayed:null,tokens:e.startTokens,stickers:[],chaptersComplete:[],daily:{solved:[],covered:[]},streak:{count:0,best:0,last:null,freeMiss:!0,recharge:0}}}var k_=e=>e===1||e===2||e===3,A_=e=>typeof e==`number`&&Number.isInteger(e)&&e>0,j_=class e{catalogue;rules;data;order;byId=new Map;chapterLevels=new Map;constructor(e,t,n=O_(t)){this.catalogue=e,this.rules=t,this.data=n,this.order=e.levels.map(e=>e.id),e.levels.forEach((e,t)=>{this.byId.set(e.id,{chapter:e.chapter,index:e.index,pos:t});let n=this.chapterLevels.get(e.chapter)??[];n.push(e.id),this.chapterLevels.set(e.chapter,n)})}static load(t,n,r){let i=r&&typeof r==`object`?r:null;return i&&i.version===2?new e(t,n,e.readV2(i,n)):e.migrate(t,n,i)}static readStars(e){let t={};if(e&&typeof e==`object`)for(let[n,r]of Object.entries(e))A_(Number(n))&&k_(r)&&(t[String(Number(n))]=r);return t}static readV2(t,n){let r=O_(n);r.stars=e.readStars(t.stars),r.lastPlayed=A_(t.lastPlayed)?t.lastPlayed:null,typeof t.tokens==`number`&&Number.isInteger(t.tokens)&&t.tokens>=0&&(r.tokens=t.tokens),r.stickers=e.readIds(t.stickers),r.chaptersComplete=e.readIds(t.chaptersComplete);let i=t.daily&&typeof t.daily==`object`?t.daily:{},a=e=>Array.isArray(e)?[...new Set(e.filter(d_))].sort():[];r.daily={solved:a(i.solved),covered:a(i.covered)};let o=t.streak&&typeof t.streak==`object`?t.streak:{},s=e=>typeof e==`number`&&Number.isInteger(e)&&e>=0?e:0;return r.streak={count:s(o.count),best:Math.max(s(o.best),s(o.count)),last:d_(o.last)?o.last:null,freeMiss:typeof o.freeMiss!=`boolean`||o.freeMiss,recharge:s(o.recharge)},r}static readIds(e){return Array.isArray(e)?[...new Set(e.filter(A_))]:[]}static migrate(t,n,r){let i=new e(t,n),a=e.readStars(r?.stars),o=Object.keys(a).map(Number).sort((e,t)=>e-t);for(let e of o)i.win(e,a[String(e)]);return i}starsFor(e){return this.data.stars[String(e)]??0}won(e){return this.starsFor(e)>0}get totalStars(){let e=0;for(let t of Object.values(this.data.stars))e+=t;return e}get anyWon(){return Object.keys(this.data.stars).length>0}gate(e){let t=this.rules.chapterGates;return t[Math.min(e,t.length-1)]??0}chapterOpen(e,t=!1){return t||this.catalogue.chapters.indexOf(e)<=0||(this.chapterLevels.get(e)??[]).some(e=>this.won(e))?!0:this.lockOf(e)===null}chapterLock(e,t=!1){return this.chapterOpen(e,t)?null:this.lockOf(e)}lockOf(e){let t=this.catalogue.chapters.indexOf(e);if(t<=0)return null;let n=this.gate(t),r=this.totalStars,i=this.chapterLevels.get(this.catalogue.chapters[t-1])??[],a=i[i.length-1]??null,o=a===null||this.won(a);return r>=n&&o?null:{chapter:e,need:n,have:r,level:o?null:a}}levelOpen(e,t=!1){if(t||this.won(e))return!0;let n=this.byId.get(e);if(!n||!this.chapterOpen(n.chapter))return!1;if(n.index<=1)return!0;let r=this.order[n.pos-1];return r!==void 0&&this.won(r)}win(e,t){if(!this.byId.has(e))return[];t>this.starsFor(e)&&(this.data.stars[String(e)]=t);let n=[];if(t===3&&!this.data.stickers.includes(e)){this.data.stickers.push(e),this.data.tokens+=this.rules.threeStarTokens,n.push({kind:`three-star`,level:e,tokens:this.rules.threeStarTokens});let t=this.byId.get(e)?.chapter;t!==void 0&&!this.data.chaptersComplete.includes(t)&&this.chapterStickers(t)===this.chapterSize(t)&&(this.data.chaptersComplete.push(t),this.data.tokens+=this.rules.chapterCompleteTokens,n.push({kind:`chapter-complete`,chapter:t,tokens:this.rules.chapterCompleteTokens}))}return n}chapterSize(e){return this.chapterLevels.get(e)?.length??0}chapterStickers(e){return(this.chapterLevels.get(e)??[]).filter(e=>this.data.stickers.includes(e)).length}hasSticker(e){return this.data.stickers.includes(e)}chapterComplete(e){return this.data.chaptersComplete.includes(e)}levelsOf(e){return this.chapterLevels.get(e)??[]}get tokens(){return this.data.tokens}spendHint(){return this.data.tokens<this.rules.hintCost?`ad`:(this.data.tokens-=this.rules.hintCost,`token`)}played(e){this.byId.has(e)&&(this.data.lastPlayed=e)}continueLevel(e=!1){if(!this.anyWon)return null;for(let t of this.order)if(!this.won(t)&&this.levelOpen(t,e))return t;if(this.data.lastPlayed!==null)return this.data.lastPlayed;let t=this.order.filter(e=>this.won(e));return t[t.length-1]??null}get streak(){return this.data.streak}settle(e){let t=this.data.streak;if(t.count===0||t.last===null)return;let n=m_(t.last,e)-1;if(!(n<=0)){if(n===1&&t.freeMiss){let e=h_(t.last,1);t.freeMiss=!1,t.recharge=0,this.data.daily.covered.includes(e)||this.data.daily.covered.push(e),t.last=e}else t.count=0,t.recharge=0,t.freeMiss=!0}}solveDaily(e,t){if(!d_(e)||!d_(t)||m_(t,e)>0)return[];this.settle(t),this.data.daily.solved.includes(e)||(this.data.daily.solved.push(e),this.data.daily.solved.sort());let n=this.data.streak;if(e!==t||n.last===t)return[];n.count=n.count===0?1:n.count+1,n.last=t,n.best=Math.max(n.best,n.count),!n.freeMiss&&++n.recharge>=this.rules.rechargeDays&&(n.freeMiss=!0,n.recharge=0);let r=[{kind:`daily`,day:e,tokens:this.rules.dailyTokens}];this.data.tokens+=this.rules.dailyTokens;let i=this.rules.milestoneDays.indexOf(n.count),a=i>=0?this.rules.milestoneTokens[i]??0:0;return a>0&&(this.data.tokens+=a,r.push({kind:`streak`,days:n.count,tokens:a})),r}dayMark(e){return this.data.daily.solved.includes(e)?`solved`:this.data.daily.covered.includes(e)?`covered`:null}get rechargeLeft(){return this.data.streak.freeMiss?0:this.rules.rechargeDays-this.data.streak.recharge}toJSON(){return this.data}};function M_(e){return{levels:e.levels.map(e=>({id:e.id,chapter:e.chapter,index:e.index})),chapters:e.chapters.map(e=>e.id)}}function N_(e=()=>globalThis.localStorage){let t=new Map,n=null;try{let t=e();if(t){let e=`bark.probe`;t.setItem(e,`1`),t.removeItem(e),n=t}}catch{n=null}return{get persistent(){return n!==null},read(e){let r=null;try{r=n?n.getItem(e):null}catch{n=null}if(r??=t.get(e)??null,r!==null)try{return JSON.parse(r)}catch{return}},write(e,r){let i=JSON.stringify(r);t.set(e,i);try{n?.setItem(e,i)}catch{n=null}}}}function P_(){try{let e=globalThis;return typeof e.matchMedia==`function`&&e.matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}var F_=`bark.progress.v1`,I_=`bark.settings.v1`,L_=class{store;progress;motionChoice=null;settings;constructor(e,t,n){this.store=e;let r=this;this.settings={sound:!0,unlockAll:!1,haptics:!0,get reducedMotion(){return r.motionChoice??P_()}};let i=e.read(F_);this.progress=j_.load(t,n,i),i!==void 0&&i?.version!==2&&this.writeProgress();let a=e.read(I_);if(a&&typeof a==`object`){let e=a;typeof e.sound==`boolean`&&(this.settings.sound=e.sound),typeof e.unlockAll==`boolean`&&(this.settings.unlockAll=e.unlockAll),typeof e.haptics==`boolean`&&(this.settings.haptics=e.haptics),typeof e.reducedMotion==`boolean`&&(this.motionChoice=e.reducedMotion)}}get persistent(){return this.store.persistent}starsFor(e){return this.progress.starsFor(e)}recordWin(e,t){let n=this.progress.win(e,t);return this.writeProgress(),n}recordPlayed(e){this.progress.played(e),this.writeProgress()}isUnlocked(e){return this.progress.levelOpen(e,this.settings.unlockAll)}chapterLock(e){return this.progress.chapterLock(e,this.settings.unlockAll)}get tokens(){return this.progress.tokens}spendHint(){let e=this.progress.spendHint();return e===`token`&&this.writeProgress(),e}settleStreak(e){let t=JSON.stringify(this.progress.streak);return this.progress.settle(e),JSON.stringify(this.progress.streak)!==t&&this.writeProgress(),this.progress.streak}solveDaily(e,t){let n=this.progress.solveDaily(e,t);return this.writeProgress(),n}continueLevel(){return this.progress.continueLevel(this.settings.unlockAll)}setSound(e){this.settings.sound=e,this.writeSettings()}setUnlockAll(e){this.settings.unlockAll=e,this.writeSettings()}setHaptics(e){this.settings.haptics=e,this.writeSettings()}setReducedMotion(e){this.motionChoice=e,this.writeSettings()}writeProgress(){this.store.write(F_,this.progress.toJSON())}writeSettings(){let e={sound:this.settings.sound,unlockAll:this.settings.unlockAll,haptics:this.settings.haptics};this.motionChoice!==null&&(e.reducedMotion=this.motionChoice),this.store.write(I_,e)}},Q={loading:`LOADING`,titleFallback:`BARK!`,continue:`CONTINUE`,levels:`LEVELS`,daily:`DAILY`,dailySolved:`DONE TODAY`,dailyUnavailable:`SOON`,stickers:`STICKERS`,chapterGate:`{n} TO OPEN`,chapterHave:`YOU HAVE {n}`,chapterNeedsLevel:`WIN LEVEL {n} FIRST`,hintBadgeAd:`AD`,rewardHint:`+{n} HINT`,rewardHints:`+{n} HINTS`,rewardThreeStar:`NEW STICKER! +{n} HINT`,rewardChapter:`CHAPTER COMPLETE! +{n} HINTS`,stickersHeading:`STICKER BOOK`,stickersTitle:`CHAPTER {n}`,stickersCount:`{n} / {of}`,stampLine1:`CHAPTER`,stampLine2:`COMPLETE`,dailyHeading:`DAILY PUZZLE`,dailyCaption:`DAILY`,dailyBack:`CALENDAR`,dailyPageTop:`DAILY PUZZLE`,dailyUnavailableLine:`NO PUZZLES YET`,weekdays:`MTWTFSS`,months:`JANUARY FEBRUARY MARCH APRIL MAY JUNE JULY AUGUST SEPTEMBER OCTOBER NOVEMBER DECEMBER`,monthsShort:`JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC`,streakLine:`STREAK {n}   BEST {best}`,freeMissReady:`FREE MISS READY`,freeMissRecharging:`FREE MISS BACK IN {n} DAYS`,freeMissRechargingOne:`FREE MISS BACK IN 1 DAY`,rewardDaily:`DAILY DONE: +{n} HINT`,rewardStreak:`{days} DAY STREAK: +{n} HINTS`,starTargetLead:`3`,starTarget:`IN {n}`,penDouble:`DOUBLE PEN!`,penTriple:`TRIPLE PEN!`,penMany:`MEGA PEN!`,oneBarkShort:`1 BARK SHORT!`,homeWoof:`WOOF!`,settingsTitle:`SETTINGS`,soundOn:`SOUND ON`,soundOff:`SOUND OFF`,hapticsOn:`BUZZ ON`,hapticsOff:`BUZZ OFF`,motionFull:`FULL MOTION`,motionReduced:`LESS MOTION`,unlockAllCaption:`TEST: ALL LEVELS`,unlockAllOn:`OPEN`,unlockAllOff:`LOCKED`,credits:`CREDITS`,done:`DONE`,version:`VERSION {v}`,creditsTitle:`CREDITS`,creditsGame:`BARK! IS A ZWINGS GAME`,creditsFontName:`BOWLBY ONE TYPEFACE`,creditsFontBy:`COPYRIGHT (C) 2011 VERNON ADAMS`,creditsFontLicence:`SIL OPEN FONT LICENSE 1.1`,creditsThreeName:`THREE.JS`,creditsThreeBy:`COPYRIGHT (C) 2010-2026 THREE.JS AUTHORS`,creditsThreeLicence:`MIT LICENSE`,creditsTexts:`FULL LICENCE TEXTS SHIP IN LICENSES/`};function R_(e,t={}){return Q[e].replace(/\{(\w+)\}/g,(e,n)=>String(t[n]??`{${n}}`))}var z_={version:1,about:`Every duration, easing and squash amount of Bark!. Read unchanged by the web prototype and by the Unity port. Durations are milliseconds. Distances are in tiles unless a key says px (CSS pixels at a 390 px wide stage) or page (fraction of the page width). Angles are degrees. An easing is one of: linear, quadIn, quadOut, quadInOut, cubicIn, cubicOut, cubicInOut, quartOut, sineInOut, backIn, backOut, backInOut, elasticOut, bounceOut. A spring is a damped spring integrated at 120 Hz: accel = -stiffness * x - damping * v.`,scene:{camera:{fovDeg:24,elevationDeg:57,fitWidthMargin:1.06,lookAhead:.02,verticalBias:-.035,pressDip:0},page:{widthUnits:9,marginSide:.5,headerUnits:1.75,footerUnits:.95,maxTile:1.6,checkerTint:.07,leftPageDarken:.12,printScale:1.5},book:{pageInsetLeft:.012,pageInsetTop:.045},cutout:{leanBackDeg:16,spriteTiles:1.22,rockTiles:1.05,wolfTiles:1.3,fenceTiles:1,tabDepth:.2,tabWidth:.46,baseOffset:.2,tabHop:.12,tabCrease:.45,squashWidth:.6,alphaTest:.12},shadow:{dirX:.42,dirZ:-.5,strength:.42,blurNear:.012,blurFar:.07,halftone:.75,halftoneScale:.9,hopFade:.45},post:{misregisterPx:1.1,misregisterAngleADeg:25,misregisterAngleBDeg:200,grainOpacity:.5,grainSizePx:260,uiMisregisterPx:1,maxPixelRatio:2,msaaSamples:4,adaptFrameMs:22,adaptFrames:90,adaptStep:.25},idle:{bobHz:.55,bobSquash:.018,swayDeg:1.2,swayHz:.38,wolfScale:.5}},springs:{wobble:{stiffness:420,damping:13},squash:{stiffness:620,damping:19},jostle:{stiffness:520,damping:22}},input:{trembleDeg:3.2,trembleHz:17,trembleLift:.03,dogWindupSquash:-.2,dogWindupMs:70,previewInMs:90,previewRayStepMs:16,previewFlowHz:1.4,previewInEase:`backOut`,previewMarkerTiles:.9,previewBreatheHz:1.3,previewBreatheAmount:.05,previewDotTiles:.26,previewDotsPerTile:2,previewDotTaperTiles:.3,previewStopTiles:.62,illegalMarkTiles:.72,ghostAlpha:.5,illegalShakeMs:220,illegalShakeTiles:.07,queueSpeedup:.6,queueSpeedMax:2.4,swipePx:40},turn:{targetMs:500,inputTailMs:40,undoHop:.22,restartFold:.35},dog:{crouchMs:60,crouchSquash:-.22,leapMs:160,leapEase:`quadInOut`,leapHeightBase:.55,leapHeightPerTile:.14,leapHeightMax:1.5,leapStretch:.2,leapSpinDeg:10,inPlaceHopMs:120,inPlaceHopHeight:.34,landSquash:-.34,landKickDeg:7,barkStretch:.16,barkLungeDeg:9,barkMs:160,idleAfterMs:420},bark:{burstInMs:70,burstInEase:`backOut`,burstHoldMs:190,burstOutMs:160,burstOutEase:`quadIn`,burstScaleTiles:2.3,burstRiseTiles:1.35,burstTiltDeg:9,ringStepMs:22,ringLifeMs:300,ringGrow:.55,ringStartScale:.35,ringsPerRayMax:8,rayFlashMs:240,shakeTiles:.06,shakeMs:150,ringGrowEase:`cubicOut`,ringFadeEase:`quadIn`,dogRingScale:1.8,burstOutScale:.6,burstTextWidth:.66,burstTextMisregister:.022},sheep:{staggerMs:12,startleMs:60,startleHop:.2,startleStretch:.2,stepMs:45,runMaxMs:175,runMinStepMs:24,hopPitchStep:.06,alarmHoldMs:260,hopHeight:.2,runTiltDeg:9,runStretch:.1,landSquash:-.2,overshoot:.13,overshootMs:110,overshootEase:`backOut`,stopKickDeg:11,blockedHop:.16,blockedMs:140,bumpGapMs:18,bumpJostle:.1,bumpKickDeg:8,wolfFearRecoil:.1,wolfFearTrembleMs:420,wolfLungeTiles:.14,wolfLungeMs:180,fearBaaPitch:1.3,mudSquash:-.34,mudSink:.06,mudKickDeg:3,penHop:.42,penStepMs:95,penSquash:-.26,penRelaxMs:420,penRelaxSquash:-.07,penSwayDeg:2.2,penBaaDelayMs:140,fenceFlapMs:130,fenceFlapEase:`backOut`},fall:{teeterMs:150,teeterDeg:16,flutterMs:760,flutterSwayTiles:.26,flutterSwayHz:3.4,flutterSpinDeg:60,flutterEndScale:.16,flutterEase:`quadIn`,othersGaspMs:260,gaspHop:.14,flutterSink:.35,rescueMs:380,rescueHop:.3,panelDelayMs:650},lose:{dogFlopDelayMs:140,dogFlopMs:300,dogFlopEase:`bounceOut`,dogFlopFold:.6,dogFlopTiltDeg:82,baaCount:2,baaStaggerMs:170,baaPitch:.85,panelDelayMs:620},celebrate:{delayMs:130,hopMs:300,hopHeight:.5,hopStaggerMs:70,shakeMs:140,confettiCount:46,confettiSpeed:6.2,confettiSpread:.75,confettiGravity:11,confettiDrag:1.3,confettiLifeMs:1700,confettiSizeTiles:.13,confettiSpinHz:3.2,confettiLiftTiles:.5,confettiStarShare:.15,confettiFadeMs:450,stampDelayMs:260,stampStaggerMs:170,stampMs:150,stampFromScale:2.6,stampEase:`cubicIn`,stampSizePage:.24,stampShakeTiles:.09,stampTiltDeg:11,stampSpacing:1.08,stampRowFrac:.2,stampRingScale:1.25,stampInkInPart:.35,panelDelayMs:950},page:{foldDownMs:150,foldDownStaggerMs:10,foldDownEase:`quadIn`,turnMs:620,turnEase:`sineInOut`,curlRad:.55,liftShade:.3,foldUpAt:.5,foldUpSweep:.28,foldUpMs:260,foldUpEase:`backOut`,foldUpKickDeg:13,restartFlapMs:150,undoMs:130,undoEase:`cubicOut`,stampPressMs:160,stampPressScale:.9,stampPressEase:`backOut`,turnShadow:.32,turnShadowSoft:1.1,reducedTurnScale:.45},ui:{pressMs:70,pressScale:.9,releaseMs:190,releaseEase:`backOut`,panelInMs:320,panelInEase:`backOut`,panelOutMs:150,panelOutEase:`quadIn`,panelStarStaggerMs:150,panelStarMs:200,adMs:1e3,titleTurnMs:620,titleTurnEase:`cubicInOut`,counterPopMs:220,counterPopScale:1.35,hintPulseHz:1.6,hudInMs:260,nudgeMs:420,maxAspect:.62,pressEase:`quadOut`,disabledAlpha:.35,hudInEase:`backOut`,hudInFromScale:.7,hudOutMs:140,hudOutEase:`quadIn`,nudgeDeg:11,nudgeEase:`sineInOut`,adEase:`linear`,counterPopEase:`quadOut`,backdropAlpha:.38,panelInFromScale:.6,panelOutToScale:.86,panelStarEase:`backOut`,titleTurnDeg:100,titlePerspective:2.4,titleTurnShade:.4,playPulseMs:1500,playPulseScale:1.045,playPulseEase:`sineInOut`,homeLogoInMs:520,homeLogoInEase:`backOut`,homeLogoDropPx:70,homeButtonInMs:300,homeButtonInEase:`backOut`,homeButtonStaggerMs:80,homeButtonFromScale:.6,calloutMs:1300,calloutFromScale:.4,pressSquashX:1.06,pressSquashY:.84,tokenTickMs:110,tokenBounceMs:260,tokenBounceScale:1.4,tokenBounceEase:`backOut`,flameFlickerMs:900,flameFlickerScale:.08,flameFlickerDeg:5,flameBurstMs:560,flameBurstScale:1.7,flameBurstEase:`backOut`,pawSlamMs:380,pawSlamFromScale:2.4,pawSlamEase:`quadIn`,stickerPeelMs:560,stickerPeelDeg:40,stickerPeelEase:`backOut`,chapterSlamMs:420,chapterSlamFromScale:3,chapterSlamEase:`quadIn`,chapterShakeMs:360,chapterShakePx:7,lockShakeMs:420,lockShakeDeg:18,todayPulseMs:1400,todayPulseScale:1.35,todayPulseEase:`quadOut`,reducedFadeMs:180},tutorial:{firstDelayMs:[350,900,2600],repeatDelayMs:[700,1600,4200],approachMs:380,pressMs:140,holdMs:820,releaseMs:200,approachEase:`cubicOut`,restOffsetPx:70,pressScale:.86,sizePx:92,pressScaleMs:90,pressScaleEase:`quadOut`},haptics:{preview:6,bark:[0,18],bump:8,pen:[0,12,40,12],stamp:22,fall:[0,30,60,30,60,60],lose:[0,40,80,40],win:[0,14,50,14,50,26],tap:5,deny:[0,10,40,10],toggle:8,poke:6,reward:[0,12,30,18],streak:[0,10,25,10,25,22],page:7,chapter:[0,20,40,20,40,45]},fx:{puffDustCount:6,puffMudCount:5,puffHoleCount:7,puffSizeTiles:.17,puffSpeed:1.8,puffUp:2.4,puffGravity:12,puffLifeMs:380,puffFadeEase:`quadIn`,puffMudSizeTiles:.2,puffMudUp:3.2,puffHoleRise:1.1,puffHoleSwayTiles:.18,puffHoleSwayHz:2.6,puffHoleLifeMs:640,hintTiles:.95,hintPulseAmount:.08,hintPrint:.62},progress:{about:`Chapter gates: a chapter opens when the total stars reach its gate (in book order; the first is 0) and the last level of the chapter before it is won. 36 stars per chapter, 180 in all. A chapter in which a level was won stays open.`,chapterGates:[0,18,42,66,90]},economy:{about:`Hint tokens. The player starts with startTokens; a hint costs hintCost. Earned: threeStarTokens the first time a level is won with 3 stars; dailyTokens for each daily solved on its own day; at a daily streak of streakMilestoneDays[i] days, streakMilestoneTokens[i]; chapterCompleteTokens once when a chapter's sticker page fills. With too few tokens the hint plays the fake ad instead and is given at once.`,startTokens:3,hintCost:1,threeStarTokens:1,dailyTokens:1,streakMilestoneDays:[3,7,14,30],streakMilestoneTokens:[2,3,5,8],chapterCompleteTokens:3},daily:{about:`The daily puzzle. Day d plays levels/daily.json level number mod(daysBetween(epoch, d), cycle); the epoch is a Monday, so index 0, 7, 14 ... are Mondays. The streak counts local calendar days with the daily solved on its own day; one missed day is forgiven by the free miss, which comes back after freeMissRechargeDays solved days in a row. The calendar reaches back calendarMonthsBack months.`,epoch:`2026-01-05`,cycle:364,freeMissRechargeDays:7,calendarMonthsBack:11},home:{about:`The living Home (feature 9). All on the game timeline. Lengths in ArtPx are pixels of the 1080x1920 home-* canvases; fractions are of Home's 9:16 painting box. Pop-up: each figure bobs bobArtPx over bobMs with bobSquash and sways swayDeg over swayMs, out of step; the cloud drifts cloudArtPxPerSec and wraps (it leaves on the right and comes back cloudWrapSpan of the box later, from cloudWrapLeft to the left of where it rests); the sun turns sunDegPerSec. The bark beat comes every beatEveryMs (the first after one wait): the dog stretches beatDogStretch and lunges beatDogLungeDeg over beatDogMs, the WOOF! burst (woofAt, woofWidth of the box) pops at beatWoofAtMs, and the sheep hop beatHopArtPx over beatHopMs, nearest the dog first, from beatStartleDelayMs, beatStaggerMs apart; its sounds play at beatGain. A poke hops a figure pokeHopArtPx over pokeHopMs (hit test on its alpha, above pokeAlpha, on a mask at pokeMaskScale). Passers-by: from passerFirstMs, every passerEveryMs, the butterfly or the bee (sticker-07, sticker-10, passerSize of the box wide) crosses in passerMs between passerSkyTop and passerSkyBottom, fluttering and flapping. The Daily icon stirs stirDeg (stirWiggles wiggles, stirScale) for stirMs every stirEveryMs while today's daily is unsolved. Reduced motion stops all of it.`,bobMs:1820,bobArtPx:10,bobSquash:.018,swayMs:2630,swayDeg:1.2,cloudArtPxPerSec:16,cloudWrapLeft:1,cloudWrapSpan:1.35,sunDegPerSec:5,beatEveryMs:6e3,beatDogMs:320,beatDogStretch:.16,beatDogLungeDeg:9,beatWoofAtMs:120,beatStartleDelayMs:180,beatStaggerMs:90,beatHopMs:340,beatHopArtPx:48,beatHopStretch:.2,beatGain:.55,woofAt:[.47,.36],woofWidth:.3,woofInMs:70,woofInEase:`backOut`,woofHoldMs:190,woofOutMs:160,woofOutEase:`quadIn`,woofOutScale:.6,woofTiltDeg:9,pokeHopMs:380,pokeHopArtPx:70,pokeStretch:.22,pokeGain:.8,pokeAlpha:128,pokeMaskScale:.25,passerFirstMs:3500,passerEveryMs:12e3,passerMs:5600,passerSize:.12,passerSkyTop:.08,passerSkyBottom:.24,passerFlutter:.015,passerFlutterHz:1.3,passerFlapHz:7,passerFlapScale:.22,stirEveryMs:4200,stirMs:800,stirDeg:14,stirWiggles:3,stirScale:.08},splash:{about:`The studio beat before the Bark title. The logo frames and their timeline come from branding/zwings/zwings-logo-anim.json (13 frames, 30 fps, 31 ticks). The beat lasts holdMs in all (the reveal, then the static pose), then fades for fadeMs into the Bark title. A tap skips it once skipAfterMs have passed. Under reduced motion the static pose shows for reducedMs instead, on the same ground. The ground is Bark's navy (the asset contract's palette.navy) with the game's paper grain laid over it exactly as over the game (scene.post.grainSizePx, grainOpacity, overlay blend): the owner chose it over the kit's brand purple, as the white Z needs a dark ground. The grain lies under the logo only, never over it. The logo is logoWidthFraction of the window width, at most logoMaxPx CSS pixels.`,background:`#22304F`,holdMs:1400,fadeMs:250,skipAfterMs:500,reducedMs:1100,logoWidthFraction:.72,logoMaxPx:460,decodeTimeoutMs:3e3,loadingFadeMs:250,loadingStripPx:220}},B_=[`home-sheep-4`,`home-sheep-3`,`home-dog`,`home-sheep-2`,`home-sheep-1`],V_=[`home-sheep-1`,`home-sheep-2`,`home-sheep-3`,`home-sheep-4`],H_=e=>e<=0||e>=1?0:Math.sin(Math.PI*e),U_=(e,t)=>(e%t+t)%t,W_=class{deps;H;t0;pokedAt=new Map;masks=new Map;sheepOrder;resting=!1;lastT=-1;pokes=0;constructor(e){this.deps=e,this.H=e.tuning.home,this.t0=e.timeline.now;let[t,n]=fp(`home-dog`).anchor;this.sheepOrder=[...V_].sort((e,r)=>{let[i,a]=fp(e).anchor,[o,s]=fp(r).anchor;return Math.hypot(i-t,a-n)-Math.hypot(o-t,s-n)||V_.indexOf(e)-V_.indexOf(r)})}restart(){this.t0=this.deps.timeline.now}get time(){return this.deps.timeline.now-this.t0}nextBeatIn(){let e=this.deps.timeline.now-this.t0;return this.H.beatEveryMs-U_(e,this.H.beatEveryMs)}update(){if(!this.deps.active())return;if(this.deps.reducedMotion()){this.rest();return}this.resting=!1;let e=this.H,t=this.deps.timeline.now,n=t-this.t0,r=this.deps.scene.layers,i=n>=e.beatEveryMs?U_(n,e.beatEveryMs):-1,a=i>=0?i/e.beatDogMs:-1;this.beatSounds(n),[`home-dog`,...V_].forEach((o,s)=>{let c=s*2.39996,l=(.5+.5*Math.sin(2*Math.PI*n/e.bobMs+c))*e.bobArtPx,u=Math.sin(2*Math.PI*n/e.swayMs+c)*e.swayDeg,d=l,f=-e.bobSquash*Math.cos(2*Math.PI*n/e.bobMs+c),p=u;if(o===`home-dog`&&a>=0&&a<1){let t=H_(a);f+=e.beatDogStretch*t,p+=e.beatDogLungeDeg*t}if(o!==`home-dog`&&i>=0){let t=this.sheepOrder.indexOf(o),n=(i-e.beatStartleDelayMs-t*e.beatStaggerMs)/e.beatHopMs;n>0&&n<1&&(d+=e.beatHopArtPx*H_(n),f+=e.beatHopStretch*(n<.5?H_(n*2):-.6*H_(n*2-1)))}let m=this.pokedAt.get(o);if(m!==void 0){let n=(t-m)/e.pokeHopMs;n>=1?this.pokedAt.delete(o):n>0&&(d+=e.pokeHopArtPx*H_(n),f+=e.pokeStretch*(n<.5?H_(n*2):-.6*H_(n*2-1)))}this.pose(r.get(o),d,p,f)});let o=U_(n/1e3*e.cloudArtPxPerSec/1080+e.cloudWrapLeft,e.cloudWrapSpan)-e.cloudWrapLeft,s=r.get(`home-cloud`);s&&(s.style.transform=`translateX(${(o*100).toFixed(3)}%)`);let c=r.get(`home-sun`);c&&(c.style.transform=`rotate(${(n/1e3*e.sunDegPerSec%360).toFixed(2)}deg)`),this.poseWoof(i),this.posePassers(n),this.poseStir(n)}beatSounds(e){let t=this.H,n=this.lastT;if(this.lastT=e,n<0||e<=n||e-n>t.beatEveryMs)return;let r=r=>{let i=Math.floor((e-r)/t.beatEveryMs),a=i*t.beatEveryMs+r;return i>=1&&a>n&&a<=e};r(t.beatWoofAtMs)&&this.deps.audio.play(`woof`,{gain:t.beatGain}),this.sheepOrder.forEach((e,n)=>{r(t.beatStartleDelayMs+n*t.beatStaggerMs)&&this.deps.audio.play(`hop`,{gain:t.beatGain,pitch:1+n*this.deps.tuning.sheep.hopPitchStep})})}rest(){if(this.resting)return;this.resting=!0;for(let e of this.deps.scene.layers.values())e.style.transform=``;let{woof:e,passers:t}=this.deps.scene;e.style.visibility=`hidden`;for(let e of t)e.style.visibility=`hidden`;let n=this.deps.dailyIcon();n&&(n.style.transform=``)}poke(e,t){if(!this.deps.active())return null;let n=this.figureAt(e,t);return n?(this.pokes++,this.deps.reducedMotion()||this.pokedAt.set(n,this.deps.timeline.now),this.deps.audio.play(n===`home-dog`?`woof`:`baa`,{gain:this.H.pokeGain}),this.deps.haptics.buzz(`poke`),n):null}figureAt(e,t){let n=this.deps.scene.el.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=(e-n.left)/n.width,i=(t-n.top)/n.height;if(r<0||r>=1||i<0||i>=1)return null;for(let e of B_){let t=this.mask(e);if(!t)continue;let n=Math.min(t.w-1,Math.floor(r*t.w)),a=Math.min(t.h-1,Math.floor(i*t.h));if((t.a[(a*t.w+n)*4+3]??0)>this.H.pokeAlpha)return e}return null}figureClient(e){let t=this.mask(e);if(!t)return null;let n=0,r=0,i=0;for(let e=0;e<t.h;e++)for(let a=0;a<t.w;a++)(t.a[(e*t.w+a)*4+3]??0)>this.H.pokeAlpha&&(n+=a,r+=e,i++);if(i===0)return null;let a=n/i,o=r/i,s={x:a,y:o,d:1/0};for(let e=0;e<t.h;e++)for(let n=0;n<t.w;n++){if((t.a[(e*t.w+n)*4+3]??0)<=this.H.pokeAlpha)continue;let r=(n-a)**2+(e-o)**2;r<s.d&&(s={x:n,y:e,d:r})}let c=this.deps.scene.el.getBoundingClientRect();return{x:c.left+(s.x+.5)/t.w*c.width,y:c.top+(s.y+.5)/t.h*c.height}}mask(e){if(this.masks.has(e))return this.masks.get(e)??null;if(!xp(e))return null;let t=fp(e),n=Math.max(1,Math.round(t.width*this.H.pokeMaskScale)),r=Math.max(1,Math.round(t.height*this.H.pokeMaskScale)),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});if(!a)return null;a.drawImage(Sp(e),0,0,n,r);let o={w:n,h:r,a:a.getImageData(0,0,n,r).data};return this.masks.set(e,o),o}pose(e,t,n,r){if(!e)return;let i=-t/1920*100,a=1+r,o=1-r*.5;e.style.transform=`translateY(${i.toFixed(3)}%) rotate(${n.toFixed(2)}deg) scale(${o.toFixed(4)}, ${a.toFixed(4)})`}poseWoof(e){let t=this.H,n=this.deps.scene.woof,r=e-t.beatWoofAtMs,i=t.woofInMs+t.woofHoldMs+t.woofOutMs;if(e<0||r<0||r>=i){n.style.visibility=`hidden`;return}let a,o=1;if(r<t.woofInMs)a=zp(t.woofInEase)(r/t.woofInMs);else if(r<t.woofInMs+t.woofHoldMs)a=1;else{let e=zp(t.woofOutEase)((r-t.woofInMs-t.woofHoldMs)/t.woofOutMs);a=1+(t.woofOutScale-1)*e,o=1-e}n.style.visibility=`visible`,n.style.opacity=o.toFixed(3),n.style.transform=`translate(-50%, -50%) rotate(${t.woofTiltDeg}deg) scale(${Math.max(0,a).toFixed(4)})`}posePassers(e){let t=this.H,[n,r]=this.deps.scene.passers;if(!n||!r)return;let i=e-t.passerFirstMs,a=Math.floor(i/t.passerEveryMs),o=(i-a*t.passerEveryMs)/t.passerMs,s=i>=0&&o>=0&&o<1?a%2==0?n:r:null;for(let e of[n,r])e!==s&&(e.style.visibility=`hidden`);if(!s)return;let c=t.passerSkyTop+(t.passerSkyBottom-t.passerSkyTop)*U_(a*.618,1),l=-t.passerSize+o*(1+2*t.passerSize),u=o*t.passerMs/1e3,d=Math.sin(2*Math.PI*t.passerFlutterHz*u)*t.passerFlutter,f=1-t.passerFlapScale*Math.abs(Math.sin(2*Math.PI*t.passerFlapHz*u));s.style.visibility=`visible`,s.style.left=`${(l*100).toFixed(3)}%`,s.style.top=`${((c+d)*100).toFixed(3)}%`,s.style.transform=`translate(-50%, -50%) rotate(${(d*120).toFixed(2)}deg) scale(1, ${f.toFixed(4)})`}poseStir(e){let t=this.deps.dailyIcon();if(!t)return;let n=this.H,r=U_(e,n.stirEveryMs)/n.stirMs;if(!this.deps.dailyReady()||e<n.stirEveryMs||r>=1){t.style.transform=``;return}let i=n.stirDeg*Math.sin(2*Math.PI*n.stirWiggles*r)*(1-r);t.style.transform=`rotate(${i.toFixed(2)}deg) scale(${(1+n.stirScale*H_(r)).toFixed(4)})`}};op(7),op(10);function G_(e){return e===`home-dog`||V_.includes(e)}function $(e=``,...t){let n=document.createElement(`div`);e&&(n.className=e);for(let e of t)e&&n.append(e);return n}function K_(e,t){return $(`t ${e}`,t)}function q_(e){return new Promise(t=>setTimeout(t,e))}function J_(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}function Y_(e,t,n){e.style.removeProperty(`--fit`);let r=getComputedStyle(t),i=t.clientWidth-parseFloat(r.paddingLeft)-parseFloat(r.paddingRight);if(n){let n=0;for(let r of t.children)n++,r!==e&&!r.contains(e)&&(i-=r.offsetWidth);i-=(parseFloat(r.columnGap)||0)*(n-1)}let a=e.offsetWidth;a>0&&i>0&&a>i&&e.style.setProperty(`--fit`,(i/a).toFixed(3))}function X_(e){let t=e.tuning.ui.pressMs;return n=>{let r=Cp(n.shape===`round`?`btn-round`:`btn-wide`,`btn-bg fringe`),i=$(`btn-face`),a=null,o=null,s=null;n.icon&&(a=Cp(n.icon,`btn-icon fringe`),i.append(a)),n.label!==void 0&&(o=K_(`btn-label`,n.label),n.caption===void 0?i.append(o):(s=K_(`btn-caption`,n.caption),i.append($(`btn-text`,s,o))));let c=$(`btn-body`,r,i);n.badge&&c.append($(`btn-badge`,Cp(`btn-round`,`btn-bg fringe`),Cp(n.badge,`btn-badge-icon`)));let l=$(`btn btn-${n.shape}`,c);l.dataset.control=n.control,l.style.setProperty(`--w`,`calc(var(--u) * ${n.width})`),l.style.setProperty(`--f`,String(n.font??24));let u=!1,d=null,f=null,p=0,m=0,h=()=>{let e=l.getBoundingClientRect();if(e.width<=0||e.height<=0)return!1;let t=document.elementFromPoint(e.left+e.width/2,e.top+e.height/2);return t!==null&&l.contains(t)},g=e=>f!==null&&e.clientX>=f.left&&e.clientX<=f.right&&e.clientY>=f.top&&e.clientY<=f.bottom,_=e=>{if(clearTimeout(m),e){l.classList.add(`pressed`);return}let n=performance.now()-p;n>=t?l.classList.remove(`pressed`):m=window.setTimeout(()=>l.classList.remove(`pressed`),t-n)},v=()=>{if(d===null)return;let e=d;d=null,f=null;try{l.hasPointerCapture(e)&&l.releasePointerCapture(e)}catch{}_(!1)};l.addEventListener(`pointerdown`,t=>{if(!u&&d===null&&t.isPrimary&&t.button===0){t.preventDefault(),d=t.pointerId,f=l.getBoundingClientRect(),p=performance.now();try{l.setPointerCapture(t.pointerId)}catch{}_(!0),e.audio.unlock(),e.audio.play(`tap`),e.haptics.buzz(`tap`)}}),l.addEventListener(`pointermove`,e=>{if(e.pointerId!==d)return;let t=g(e);t!==l.classList.contains(`pressed`)&&_(t)}),l.addEventListener(`pointerup`,e=>{if(e.pointerId!==d)return;let t=g(e)&&h();v(),t&&n.onFire()}),l.addEventListener(`pointercancel`,e=>{e.pointerId===d&&v()}),l.addEventListener(`pointerleave`,e=>{e.pointerId===d&&!l.hasPointerCapture(e.pointerId)&&v()}),l.addEventListener(`animationend`,e=>{e.target===l&&l.classList.remove(`nudge`)});let y=()=>{o&&Y_(o,i,!0),s&&Y_(s,i,!0)};return{el:l,setIcon(e){if(!a||a.dataset.asset===e)return;let t=Cp(e,`btn-icon fringe`);a.replaceWith(t),a=t},setLabel(e){o&&o.textContent!==e&&(o.textContent=e,y())},setCaption(e){s&&(s.textContent=e,s.classList.toggle(`blank`,e===``),y())},setDisabled(e){u!==e&&(u=e,l.classList.toggle(`disabled`,e),e&&v())},nudge(){J_(l,`nudge`)},fit:y}}}var Z_=[`home-plate`,`home-sun`,`home-cloud`,`home-sheep-1`,`home-sheep-2`,`home-dog`,`home-sheep-3`,`home-sheep-4`];function Q_(e,t=``){let n=new Map,r=$(`home-scene${t?` ${t}`:``}`),i=e.home,a=[7,10].map(e=>{let t=$(`home-passer`,Cp(op(e),`home-passer-art`));return t.style.width=`${i.passerSize*100}%`,t.style.visibility=`hidden`,t});for(let e of Z_){let t=Cp(e,`home-layer home-layer-${e}`),[i,o]=fp(e).anchor;t.style.transformOrigin=`${i*100}% ${o*100}%`,n.set(e,t),r.append(t),e===`home-cloud`&&r.append(...a)}let o=$(`home-woof`,Cp(`woof-burst`,`home-woof-art`),K_(`home-woof-text`,Q.homeWoof));return o.style.left=`${i.woofAt[0]*100}%`,o.style.top=`${i.woofAt[1]*100}%`,o.style.width=`${i.woofWidth*100}%`,o.style.visibility=`hidden`,r.append(o),{el:r,layers:n,woof:o,passers:a}}var $_=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);function ev(e,t,n){for(let[r,i]of Object.entries(n)){let n=`--${t}-${$_(r)}`;typeof i==`string`?r.endsWith(`Ease`)&&e.style.setProperty(n,Bp(i)):typeof i==`number`&&(r.endsWith(`Ms`)?e.style.setProperty(n,`${i}ms`):r.endsWith(`Px`)?e.style.setProperty(n,`calc(var(--u) * ${i})`):e.style.setProperty(n,String(i)))}}var tv=e=>(Math.round(e*1e3)/1e3).toString();function nv(e,t,n){for(let[t,n]of Object.entries(cp))e.style.setProperty(`--${t}`,n);t.style.setProperty(`--font`,`"${Dp}"`),ev(t,`ui`,n.ui),ev(t,`tut`,n.tutorial);let r=n.scene.post,i=r.misregisterAngleADeg*Math.PI/180,a=r.misregisterAngleBDeg*Math.PI/180,o=r.uiMisregisterPx;t.style.setProperty(`--mis-ax`,`calc(var(--u) * ${tv(Math.cos(i)*o)})`),t.style.setProperty(`--mis-ay`,`calc(var(--u) * ${tv(Math.sin(i)*o)})`),t.style.setProperty(`--mis-bx`,`calc(var(--u) * ${tv(Math.cos(a)*o)})`),t.style.setProperty(`--mis-by`,`calc(var(--u) * ${tv(Math.sin(a)*o)})`),t.style.setProperty(`--grain-size`,`calc(var(--u) * ${r.grainSizePx})`),t.style.setProperty(`--grain-opacity`,String(r.grainOpacity))}function rv(e,t){let n=Math.max(1,window.innerWidth),r=Math.max(1,window.innerHeight),i=n,a=r;n/r>t.ui.maxAspect&&(i=Math.round(r*t.ui.maxAspect));let o=i/390;return e.style.width=`${i}px`,e.style.height=`${a}px`,e.style.setProperty(`--u`,`${o}px`),e.style.setProperty(`--stage-w`,`${i}px`),e.style.setProperty(`--stage-h`,`${a}px`),o}function iv(e,t){let{tuning:n,events:r}=t,i=n.ui,a=e.parentElement??e,o=a.parentElement??a,s=a.querySelector(`#grain`),c=X_(t);nv(o,a,n),e.classList.add(`ui-root`);for(let e of[o,a])e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`selectstart`,e=>e.preventDefault());let l=new Map,u=e=>{let t=c(e),n=l.get(e.control)??[];return n.push(t),l.set(e.control,n),t},d=e=>e.getClientRects().length>0;if(s){s.classList.add(`grain`);let e=fp(`paper-grain`);xp(`paper-grain`)&&e.url&&(s.style.backgroundImage=`url("${e.url}")`,s.classList.add(`on`))}let f=$(`hud`),p=u({control:`back`,shape:`round`,width:52,icon:`icon-back`,onFire:()=>r.onBack()}),m=u({control:`settings`,shape:`round`,width:52,icon:`icon-settings`,onFire:()=>r.onSettings()}),h=K_(`counter-caption`,`LEVEL 1`),g=K_(`counter-num`,`0`),_=$(`group counter off`,Cp(`btn-wide`,`plate fringe`),$(`plate-face`,Cp(`icon-bark`,`counter-icon fringe`),g,h)),v=K_(`target-text`,``),y=$(`star-target`,Cp(`btn-wide`,`plate fringe`),$(`plate-face`,K_(`target-text`,Q.starTargetLead),Cp(`star-full`,`target-star fringe`),v));_.append(y);let b=$(`group bar bar-top off`,p.el,$(`counter-pos`,_),m.el),x=u({control:`prev-chapter`,shape:`round`,width:56,icon:`icon-back`,onFire:()=>r.onPrevChapter()}),S=u({control:`next-chapter`,shape:`round`,width:56,icon:`icon-next`,onFire:()=>r.onNextChapter()}),C=K_(`chapter-label`,`1 / 1`),w=$(`chapter`,Cp(`btn-wide`,`plate fringe`),$(`plate-face`,C)),T=$(`group bar bar-bottom bar-select off`,x.el,w,S.el),E=u({control:`undo`,shape:`round`,width:60,icon:`icon-undo`,onFire:()=>r.onUndo()}),D=u({control:`restart`,shape:`round`,width:60,icon:`icon-restart`,onFire:()=>r.onRestart()}),O=u({control:`hint`,shape:`round`,width:60,icon:`icon-hint`,onFire:()=>r.onHint()}),k=K_(`hint-count-num`,`0`),A=$(`hint-count`,Cp(`btn-round`,`btn-bg fringe`),$(`hint-count-face`,k));O.el.querySelector(`.btn-body`)?.append(A);let j=e=>{et(k,e,e=>e>0?String(e):Q.hintBadgeAd),A.classList.toggle(`empty`,e<=0)},M=$(`group bar bar-bottom bar-play off`,E.el,D.el,O.el),N=K_(`notice-title`,`STUCK!`),P=K_(`notice-line`,``),ee=$(`plate-face notice-face`,N,P),F=$(`notice off`,Cp(`btn-wide`,`plate fringe`),ee);F.setAttribute(`role`,`status`);let te=K_(`callout`,``);f.append(b,T,M,$(`notice-pos`,F),$(`callout-pos`,te));let ne={home:[],select:[b,T],play:[b,_,M],daily:[b,T],stickers:[b,T]},re=[b,_,T,M],ie=new Map,ae=e=>{let t=ne[e];for(let e of re){let n=t.includes(e);n!==(!e.classList.contains(`off`)&&!e.classList.contains(`out`))&&(clearTimeout(ie.get(e)),n?(e.classList.remove(`off`,`out`),J_(e,`in`),ie.set(e,window.setTimeout(()=>e.classList.remove(`in`),i.hudInMs))):(e.classList.remove(`in`),e.classList.add(`out`),ie.set(e,window.setTimeout(()=>{e.classList.remove(`out`),e.classList.add(`off`)},i.hudOutMs))))}},oe=xp(`logo`)?Cp(`logo`,`title-logo-art fringe`):K_(`title-logo-text`,Q.titleFallback),I=u({control:`continue`,shape:`wide`,width:252,icon:`icon-continue`,label:Q.continue,font:32,onFire:()=>r.onContinue()}),L=u({control:`levels`,shape:`wide`,width:252,icon:`icon-play`,label:Q.levels,font:32,onFire:()=>r.onLevels()}),se=u({control:`daily`,shape:`wide`,width:172,icon:`icon-daily`,caption:``,label:Q.daily,font:24,onFire:()=>r.onDaily()}),ce=u({control:`stickers`,shape:`wide`,width:172,icon:`icon-stickers`,label:Q.stickers,font:24,onFire:()=>r.onStickers()}),le=u({control:`settings`,shape:`round`,width:52,icon:`icon-settings`,onFire:()=>r.onSettings()}),ue=K_(`home-plate-num`,`0`),de=Cp(`paw-hollow`,`home-free-miss fringe`),fe=$(`home-plate home-streak`,Cp(`btn-wide`,`plate fringe`),$(`plate-face`,Cp(`icon-flame`,`home-plate-icon fringe`),ue,de)),pe=K_(`home-plate-num`,`0`),me=$(`home-plate home-tokens`,Cp(`btn-wide`,`plate fringe`),$(`plate-face`,Cp(`icon-token`,`home-plate-icon fringe`),pe)),he=$(`home-top`,fe,$(`home-top-right`,me,le.el)),ge=$(`home-buttons`,$(`home-slot`,I.el),$(`home-slot`,L.el),$(`home-slot home-row`,se.el,ce.el)),_e=[I,L,se,ce,le],ve=Q_(n),ye=$(`title off`,ve.el,$(`title-logo`,oe),he,ge,$(`title-shade`)),be=$(`title-holder`,ye);ye.addEventListener(`pointerdown`,e=>{e.isPrimary&&!e.target?.closest(`.btn`)&&r.onHomeTap(e.clientX,e.clientY)});let R=()=>{for(let e of _e)e.fit();for(let e of[fe,me]){let t=e.querySelector(`.home-plate-num`),n=e.querySelector(`.plate-face`);t&&n&&Y_(t,n,!0)}},xe=$(`backdrop`),z=$(`card`,Cp(`panel`,`card-art`));z.dataset.control=`panel`;let Se=$(`panels`,xe,z),B=(e,t=``)=>{let n=K_(`heading`,t);return n.style.setProperty(`--f`,String(e)),n},Ce=B(40),V=[0,1,2].map(e=>{let t=$(`star`);return t.style.setProperty(`--i`,String(e)),t}),H=K_(`small`,``),we=$(`rewards`),Te=u({control:`next`,shape:`wide`,width:178,icon:`icon-next`,label:`NEXT`,font:28,onFire:()=>r.onNext()}),Ee=u({control:`retry`,shape:`round`,width:56,icon:`icon-restart`,onFire:()=>r.onRetry()}),De=$(`body body-win`,Ce,$(`stars`,...V),H,we,$(`row`,Ee.el,Te.el)),Oe=B(36),ke=u({control:`retry`,shape:`wide`,width:230,icon:`icon-restart`,label:`AGAIN`,font:32,onFire:()=>r.onRetry()}),Ae=u({control:`extra-bark`,shape:`wide`,width:230,icon:`icon-bark`,label:`+1 BARK`,font:28,badge:`icon-play`,onFire:()=>r.onExtraBark()}),je=K_(`near-miss`,Q.oneBarkShort),Me=$(`body body-lose`,Oe,je,ke.el,Ae.el),Ne=(e,t)=>$(`toggle-cell`,e.el,t),Pe=u({control:`sound`,shape:`round`,width:60,icon:`icon-sound-on`,onFire:()=>r.onSoundToggle()}),Fe=K_(`toggle-caption`,Q.soundOn),Ie=u({control:`haptics`,shape:`round`,width:60,icon:`icon-haptics`,onFire:()=>r.onHapticsToggle()}),Le=K_(`toggle-caption`,Q.hapticsOn),Re=Ne(Ie,Le),ze=u({control:`motion`,shape:`round`,width:60,icon:`icon-motion`,onFire:()=>r.onMotionToggle()}),Be=K_(`toggle-caption`,Q.motionFull),Ve=u({control:`unlock-all`,shape:`wide`,width:226,caption:Q.unlockAllCaption,label:Q.unlockAllOff,font:24,onFire:()=>r.onUnlockAllToggle()}),He=u({control:`credits`,shape:`round`,width:56,icon:`icon-credits`,onFire:()=>r.onCredits()}),Ue=u({control:`done`,shape:`wide`,width:160,label:Q.done,font:30,onFire:()=>{tt===`settings`&&(r.onCloseSettings(),at())}}),We=$(`body body-settings`,B(36,Q.settingsTitle),$(`toggles`,Ne(Pe,Fe),Re,Ne(ze,Be)),Ve.el,$(`row`,He.el,Ue.el),K_(`version`,R_(`version`,{v:t.version}))),Ge=(e,t=!1)=>K_(t?`credit-name`:`credit-line`,Q[e]),Ke=u({control:`credits-back`,shape:`round`,width:56,icon:`icon-back`,onFire:()=>{tt===`credits`&&r.onCloseCredits()}}),qe=$(`body body-credits`,B(34,Q.creditsTitle),Ge(`creditsGame`),$(`credit-block`,Ge(`creditsFontName`,!0),Ge(`creditsFontBy`),Ge(`creditsFontLicence`)),$(`credit-block`,Ge(`creditsThreeName`,!0),Ge(`creditsThreeBy`),Ge(`creditsThreeLicence`)),Ge(`creditsTexts`),Ke.el),Je=K_(`small`,``),Ye=$(`ad-reward-icon`),Xe=$(`ad-fill`),Ze={win:De,lose:Me,settings:We,credits:qe,ad:$(`body body-ad`,B(64,`AD`),K_(`small`,`A WORD FROM NOBODY`),$(`ad-bar`,Xe),$(`row`,Ye,Je))};for(let e of Object.values(Ze))e.classList.add(`off`),z.append(e);let Qe={win:[Te,Ee],lose:[ke,Ae],settings:[Pe,Ie,ze,Ve,He,Ue],credits:[Ke],ad:[]},$e=new WeakMap;function et(e,t,n=String){let r=$e.get(e);r&&clearTimeout(r.timer);let a=r?.value??t,o={value:a,timer:0};if($e.set(e,o),t<=a||gt||!e.isConnected){o.value=t,e.textContent=n(t),t>a&&J_(e,`fade-in`);return}let s=()=>{o.value++,e.textContent=n(o.value),J_(e,`bounce`),o.value<t&&(o.timer=window.setTimeout(s,i.tokenTickMs))};s()}let tt=null,nt=null,rt=0,it=e=>{rt++,nt=null;let t=tt!==null&&!Se.classList.contains(`closing`);tt=e,z.classList.toggle(`tall`,e===`settings`||e===`credits`),z.classList.toggle(`roomy`,e===`win`&&we.childElementCount>0);for(let[t,n]of Object.entries(Ze))n.classList.toggle(`off`,t!==e);t||(Se.classList.remove(`open`,`closing`),Se.classList.add(`shown`),Se.offsetWidth,Se.classList.add(`open`));for(let t of Qe[e])t.fit();for(let t of Ze[e].querySelectorAll(`.heading, .small, .credit-line, .credit-name, .version`))Y_(t,Ze[e],!1);for(let t of Ze[e].querySelectorAll(`.toggle-caption`))Y_(t,t.parentElement,!1)},at=()=>{if(tt===null)return Promise.resolve();if(nt)return nt;let e=++rt;return Se.classList.remove(`open`),Se.classList.add(`closing`),nt=q_(i.panelOutMs).then(()=>{if(e===rt){Se.classList.remove(`shown`,`closing`);for(let e of Object.values(Ze))e.classList.add(`off`);tt=null,nt=null}}),nt},ot=fp(`ghost-finger`),st=$(`finger-scale`,Cp(`ghost-finger`,`finger-art`));st.style.transformOrigin=`${ot.anchor[0]*100}% ${ot.anchor[1]*100}%`;let ct=$(`finger off`,st),lt=$(`fx-pulse off`,Cp(`stamp-ring`,`fx-pulse-art`)),ut=$(`fx-layer`,lt);e.append(f,ut,be,Se,ct);let dt=1,ft=()=>{dt=rv(a,n)},pt=`home`,mt=!0,ht=0,gt=!1,_t=()=>Math.round(i.titleTurnMs*(gt?n.page.reducedTurnScale:1)),vt=async e=>{let t=++ht,n=mt?null:pt;if(mt=!1,pt=e,ae(e),ne[e].includes(T)&&Y_(C,C.parentElement,!1),e===`home`){if(ye.classList.remove(`off`),n===null||n===`home`){ye.classList.add(`instant`),ye.classList.remove(`turned`),ye.offsetWidth,ye.classList.remove(`instant`),R();return}ye.classList.add(`instant`,`turned`),ye.offsetWidth,ye.classList.remove(`instant`,`turned`),R(),await q_(_t())}else!ye.classList.contains(`off`)&&!ye.classList.contains(`turned`)?(ye.classList.add(`turned`),await q_(_t()),t===ht&&pt!==`home`&&ye.classList.add(`off`)):(ye.classList.add(`off`,`turned`),await q_(i.hudInMs))},yt=null,bt=null,xt=null,St={layout:ft,setScreen:vt,get screen(){return pt},setHome(e){I.el.parentElement?.classList.toggle(`off`,!e.canContinue),se.setDisabled(e.daily===`unavailable`),se.el.classList.toggle(`done`,e.daily===`solved`),se.setCaption(e.daily===`unavailable`?Q.dailyUnavailable:e.daily===`solved`?Q.dailySolved:``);let t=fe.querySelector(`.home-plate-icon`);t&&(t.classList.toggle(`lit`,e.streak>0),bt!==null&&e.streak>bt&&J_(t,`burst`)),bt=e.streak,ue.textContent=String(e.streak),de.classList.toggle(`used`,!e.freeMissReady),et(pe,e.tokens),pt===`home`&&R()},async playHomeEntrance(){pt===`home`&&(R(),J_(ye,`enter`),await q_(i.homeLogoInMs*.5+i.homeButtonStaggerMs*3+i.homeButtonInMs),ye.classList.remove(`enter`))},home:{scene:ve,dailyIcon:()=>se.el.querySelector(`.btn-icon`),get shown(){return pt===`home`&&!ye.classList.contains(`off`)&&!ye.classList.contains(`turned`)}},setReducedMotion(e){gt=e,a.classList.toggle(`reduced`,e),a.style.setProperty(`--ui-title-turn-ms`,`${_t()}ms`)},setHud(e){xt!==e.levelId&&(xt=e.levelId,yt=null,h.textContent=e.caption),g.textContent=String(Math.max(0,e.barksLeft)),_.classList.toggle(`low`,e.barksLeft<=1),yt!==null&&yt!==e.barksLeft&&J_(g,`pop`),yt=e.barksLeft,E.el.classList.toggle(`dim`,!e.canUndo),j(e.tokens),v.textContent=R_(`starTarget`,{n:e.starBarks}),y.classList.toggle(`missed`,e.starMissed)},setChapterNav(e){C.textContent=e.label??`${e.chapter} / ${e.chapterCount}`,Y_(C,C.parentElement,!1),x.setDisabled(!e.canPrev),S.setDisabled(!e.canNext)},showWin(e){Ce.textContent=e.stars===3?`PERFECT!`:e.stars===2?`GOOD DOG!`:`PHEW!`,H.textContent=`BARKS ${e.barksUsed}   BEST ${e.minBarks}`,V.forEach((t,n)=>{let r=n<e.stars?`star-full`:`star-empty`;t.replaceChildren(Cp(r,`star-art fringe`)),J_(t,`pop`)}),Te.setLabel(e.nextLabel??(e.lastLevel?`THE END`:`NEXT`)),we.replaceChildren(...e.rewards.map((e,t)=>{let n=$(`reward`,Cp(e.icon,`reward-icon fringe${e.effect?` ${e.effect}`:``}`),K_(`reward-text`,e.text));return n.style.setProperty(`--i`,String(t)),n})),it(`win`);for(let e of we.querySelectorAll(`.reward-text`))Y_(e,e.parentElement,!0);z.classList.remove(`shake`);let t=e.rewards.findIndex(e=>e.effect===`slam`);if(t>=0&&!gt){let e=i.panelStarStaggerMs*(t+4)+i.chapterSlamMs;window.setTimeout(()=>{tt===`win`&&J_(z,`shake`)},e)}},showLose(e){Oe.textContent=e.reason===`lost-fell`?`WHOOPS!`:`OUT OF BARKS!`,Ae.el.classList.toggle(`off`,!e.canExtraBark),je.classList.toggle(`off`,!e.oneBarkShort),it(`lose`)},showSettings(e){if(Pe.setIcon(e.sound?`icon-sound-on`:`icon-sound-off`),Fe.textContent=e.sound?Q.soundOn:Q.soundOff,Re.classList.toggle(`off`,e.haptics===null),Ie.el.classList.toggle(`toggled-off`,e.haptics===!1),Le.textContent=e.haptics===!1?Q.hapticsOff:Q.hapticsOn,ze.el.classList.toggle(`toggled-off`,!e.reducedMotion),Be.textContent=e.reducedMotion?Q.motionReduced:Q.motionFull,Ve.setLabel(e.unlockAll?Q.unlockAllOn:Q.unlockAllOff),tt===`settings`&&!nt){Ve.fit();for(let e of[Fe,Le,Be])Y_(e,e.parentElement,!1)}else it(`settings`)},showCredits(){it(`credits`)},async showAd(e){Je.textContent=e===`hint`?`THEN: HINT`:`THEN: +1 BARK`,Ye.replaceChildren(Cp(e===`hint`?`icon-hint`:`icon-bark`,`fringe`)),Xe.classList.remove(`run`),it(`ad`),Xe.offsetWidth,Xe.classList.add(`run`),await q_(i.adMs),t.audio.play(`ad-reward`),await at()},hidePanel:at,setTokens:j,async slam(e,t,n){let r=$(`fx-slam`,Cp(e,`fx-slam-art fringe`));r.style.left=`${t.x}px`,r.style.top=`${t.y}px`,r.style.width=`${n}px`,ut.append(r),await q_(gt?i.reducedFadeMs:i.pawSlamMs),r.remove()},shakeLock(e){let t=e.r*.87,n=$(`fx-lock`,$(`fx-lock-paper`),Cp(`icon-lock`,`fx-lock-art`));n.style.left=`${e.x}px`,n.style.top=`${e.y}px`,n.style.width=`${t}px`,ut.append(n),window.setTimeout(()=>n.remove(),gt?i.reducedFadeMs:i.lockShakeMs)},setTodayPulse(e){!e||gt?lt.classList.add(`off`):(lt.classList.remove(`off`),lt.style.left=`${e.x}px`,lt.style.top=`${e.y}px`,lt.style.width=`${e.r*2}px`)},callout(e){te.textContent=e,J_(te,`show`)},get panelOpen(){return tt!==null},get panelKind(){return tt},setFinger(e){if(!e){ct.classList.add(`off`);return}let t=n.tutorial.sizePx*dt,r=t*ot.height/ot.width;ct.classList.remove(`off`),ct.classList.toggle(`pressed`,e.pressed),ct.style.opacity=String(e.alpha),ct.style.transform=`translate3d(${e.x-t*ot.anchor[0]}px, ${e.y-r*ot.anchor[1]}px, 0)`},setNotice(e){let t=e!==null&&e.kind!==`savable`;for(let e of[E,D])e.el.classList.toggle(`beckon`,t);if(!e){F.classList.add(`off`),F.classList.remove(`in`),delete F.dataset.notice;return}let n=F.classList.contains(`off`)||F.dataset.notice!==e.kind;if(N.textContent=e.kind===`savable`?`ONE BARK SHORT`:`STUCK!`,N.classList.toggle(`soft`,e.kind===`savable`),P.textContent=e.kind===`dead`?`NO WAY TO WIN FROM HERE`:e.kind===`short`?`TOO FEW BARKS LEFT`:`+1 BARK CAN STILL SAVE IT`,F.dataset.notice=e.kind,F.classList.remove(`off`),n){J_(F,`in`);for(let e of[N,P])Y_(e,ee,!1)}},flashNotice(){F.classList.contains(`off`)||(J_(F,`in`),E.nudge())},nudge(e){for(let t of l.get(e)??[])d(t.el)&&t.nudge()},rectOf(e){if(e===`panel`)return tt!==null&&d(z)?z.getBoundingClientRect():null;for(let t of l.get(e)??[])if(d(t.el))return t.el.getBoundingClientRect();return null}};return ft(),St}var av=class{now=0;scale=1;paused=!1;items=[];seq=0;tick(e){if(this.paused)return 0;let t=Math.min(e,100)*this.scale;return this.advance(t),t}step(e){this.advance(e)}tween(e){let t={t0:this.now+(e.delay??0),dur:Math.max(0,e.dur),ease:typeof e.ease==`string`?zp(e.ease):e.ease??null,tag:e.tag??``,update:e.update,done:e.done??null,dead:!1,seq:this.seq++};return this.items.push(t),{cancel:()=>void(t.dead=!0)}}at(e,t,n=``){let r={t0:this.now+e,dur:0,ease:null,tag:n,update:null,done:t,dead:!1,seq:this.seq++};return this.items.push(r),{cancel:()=>void(r.dead=!0)}}wait(e,t=``){return new Promise(n=>this.at(e,n,t))}cancel(e,t=!1){let n=this.items.filter(t=>!t.dead&&t.tag===e);t&&n.sort((e,t)=>e.t0+e.dur-(t.t0+t.dur)||e.seq-t.seq);for(let e of n)e.dead||(e.dead=!0,t&&(e.update?.(e.ease?e.ease(1):1),e.done?.()))}cancelAll(){for(let e of this.items)e.dead=!0;this.items=[]}busy(e){return this.items.some(t=>!t.dead&&t.tag===e)}advance(e){this.now+=e;for(let e=0;e<this.items.length;e++){let t=this.items[e];if(t.dead||t.t0>this.now)continue;let n=t.dur<=0?1:Math.min(1,(this.now-t.t0)/t.dur);t.update?.(t.ease?t.ease(n):n),n>=1&&!t.dead&&(t.dead=!0,t.done?.())}this.items.some(e=>e.dead)&&(this.items=this.items.filter(e=>!e.dead))}},ov=class{canvas;levels;tuning=z_;timeline=new av;audio=Ie();haptics=Fm(z_,()=>this.save.settings.haptics);save;ui;scene;fx;animator;tutorial;screen=`home`;chapter;session=null;pending=[];transition=!1;unknownEvents=new Set;speed=1;rules;daily;clock;calendarMonth;dailyDay=null;slamDay=null;homeLife;shakes=0;pauses=new Set;press=null;adRunning=!1;lastFrame=0;levelIds;get pressing(){return this.press!==null}get adBusy(){return this.adRunning}constructor(e,t,n,r={}){this.canvas=e,this.levels=n,this.rules=E_(z_),this.save=r.save??new L_(N_(),M_(n),this.rules),this.daily=r.daily??null,this.clock=r.clock??C_,this.calendarMonth=y_(this.clock.today()),this.levelIds=n.levels.map(e=>e.id),this.chapter=this.levelById(this.save.continueLevel()??this.levelIds[0]??1)?.chapter??1,this.audio.setEnabled(this.save.settings.sound),this.ui=iv(t,{tuning:z_,audio:this.audio,haptics:this.haptics,events:this.uiEvents(),version:s_.version}),this.ui.layout(),this.ui.setReducedMotion(this.save.settings.reducedMotion),this.scene=o_(e,{timeline:this.timeline,tuning:z_,audio:this.audio,makeBoard:(e,t)=>dh(e,t,z_),turnScale:()=>this.save.settings.reducedMotion?z_.page.reducedTurnScale:1}),this.fx=Cm({timeline:this.timeline,tuning:z_,camera:this.scene.three.camera}),this.animator=Am({timeline:this.timeline,tuning:z_,fx:this.fx,audio:this.audio,haptics:this.haptics,shake:(e,t)=>{this.save.settings.reducedMotion||(this.shakes++,this.scene.shake(e,t))}}),this.scene.onBoard=e=>{this.fx.setBoard(e),this.animator.setBoard(e)},this.homeLife=new W_({timeline:this.timeline,tuning:z_,audio:this.audio,haptics:this.haptics,scene:this.ui.home.scene,dailyIcon:()=>this.ui.home.dailyIcon(),active:()=>this.screen===`home`&&this.ui.home.shown,reducedMotion:()=>this.save.settings.reducedMotion,dailyReady:()=>{let e=this.clock.today();return this.dailyLevelFor(e)!==null&&this.save.progress.dayMark(e)!==`solved`}}),this.tutorial=new Mm({timeline:this.timeline,tuning:z_,unit:()=>this.unit(),canShow:()=>this.screen===`play`&&this.session?.state.outcome===`playing`&&!this.transition&&!this.scene.turning&&!this.ui.panelOpen&&!this.press&&!this.animator.busy&&this.pending.length===0,hintTile:()=>this.session?.nextWinningTile()??null,tileClient:e=>this.scene.tileToClient(e.x,e.y),undoClient:()=>{let e=this.ui.rectOf(`undo`);return e?{x:e.left+e.width/2,y:e.top+e.height/2}:null},demoPreview:e=>this.showPreview(e),setFinger:e=>this.ui.setFinger(e)})}start(){this.resize(),this.scene.showChapter(this.chapterPage(this.chapter)),this.refreshHome(),this.ui.setScreen(`home`);let e=this.canvas;e.style.touchAction=`none`,e.addEventListener(`pointerdown`,e=>this.onDown(e)),e.addEventListener(`pointermove`,e=>this.onMove(e)),e.addEventListener(`pointerup`,e=>this.onUp(e)),e.addEventListener(`pointercancel`,e=>this.onCancel(e)),e.addEventListener(`lostpointercapture`,e=>this.onCancel(e)),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`pointerdown`,()=>{this.audio.unlock(),this.haptics.unlock()},{capture:!0}),window.addEventListener(`resize`,()=>this.resize()),window.addEventListener(`orientationchange`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>this.onVisibility(document.visibilityState===`hidden`)),window.addEventListener(`keydown`,e=>{e.key!==`Escape`||e.repeat||(e.preventDefault(),this.goBack())}),window.addEventListener(`popstate`,()=>{this.historyGuard=!1,this.goBack(),this.syncHistory()}),this.lastFrame=performance.now();let t=e=>{let n=e-this.lastFrame;this.lastFrame=e,this.updatePause(),this.advance(this.timeline.tick(n*this.speed)),requestAnimationFrame(t)};requestAnimationFrame(t)}revealHome(){return this.homeLife.restart(),this.ui.playHomeEntrance()}setDebugPause(e){e?this.pauses.add(`debug`):this.pauses.delete(`debug`),this.updatePause()}updatePause(){let e=this.ui.panelKind;e===`settings`||e===`credits`?this.pauses.add(`settings`):this.pauses.delete(`settings`),this.timeline.paused=this.pauses.size>0}onVisibility(e){e?(this.pauses.add(`hidden`),this.audio.setEnabled(!1),this.haptics.cancel(),this.press&&this.cancelPress()):(this.pauses.delete(`hidden`),this.audio.setEnabled(this.save.settings.sound),this.lastFrame=performance.now()),this.updatePause()}historyGuard=!1;syncHistory(){if((this.screen!==`home`||this.ui.panelOpen)&&!this.historyGuard)try{history.pushState({bark:`back`},``),this.historyGuard=!0}catch{}}advance(e){this.homeLife.update(),this.tutorial.update(),this.fx.update(e,this.timeline.now),this.scene.frame(e)}resize(){this.ui.layout(),this.scene.resize(),this.updateTodayPulse()}unit(){return this.canvas.clientWidth/390}levelById(e){return this.levels.levels.find(t=>t.id===e)??null}chapterPage(e){let t=this.levels.chapters.find(t=>t.id===e)??this.levels.chapters[0];if(!t)throw Error(`levels.json has no chapters`);let n=this.save.continueLevel()??this.levelIds[0],r=this.save.chapterLock(t.id);return{chapter:t,chapterCount:this.levels.chapters.length,levels:this.levels.levels.filter(e=>e.chapter===t.id).sort((e,t)=>e.index-t.index).map(e=>({id:e.id,index:e.index,stars:this.save.starsFor(e.id),locked:!this.save.isUnlocked(e.id),next:e.id===n})),lock:r?{gate:R_(`chapterGate`,{n:r.need}),detail:r.level===null?R_(`chapterHave`,{n:r.have}):R_(`chapterNeedsLevel`,{n:r.level})}:null}}dailyLevelFor(e){return this.daily?.levels[D_(e,this.rules)]??null}monthName(e,t){let n=u_(e),r=(t?Q.monthsShort:Q.months).split(` `);return n?`${r[n.m-1]??``} ${t?String(n.y).slice(2):n.y}`:``}calendarPage(e=this.calendarMonth){let t=this.clock.today(),n=this.save.settleStreak(t),r=x_(e),i=[];for(let n=1;n<=r;n++){let r=`${e.slice(0,8)}${String(n).padStart(2,`0`)}`;i.push({day:n,mark:r===this.slamDay?null:this.save.progress.dayMark(r),today:r===t,playable:m_(r,t)>=0&&this.dailyLevelFor(r)!==null})}let a=this.save.progress.rechargeLeft;return{kind:`calendar`,key:e.slice(0,7),heading:Q.dailyHeading,month:this.monthName(e,!1),weekdays:Q.weekdays.split(``),firstColumn:g_(e),days:i,streak:R_(`streakLine`,{n:n.count,best:n.best}),freeMiss:n.freeMiss?Q.freeMissReady:a===1?Q.freeMissRechargingOne:R_(`freeMissRecharging`,{n:a}),freeMissReady:n.freeMiss,unavailable:this.daily?null:Q.dailyUnavailableLine}}showMonthNav(){let e=S_(this.calendarMonth,this.clock.today());this.ui.setChapterNav({chapter:0,chapterCount:0,canPrev:e<z_.daily.calendarMonthsBack,canNext:e>0,label:this.monthName(this.calendarMonth,!0)})}async openDaily(){this.screen!==`home`||this.transition||(this.daily?(this.audio.unlock(),this.screen=`daily`,this.calendarMonth=y_(this.clock.today()),this.scene.showPage(this.calendarPage()),this.showMonthNav(),this.syncHistory(),await this.ui.setScreen(`daily`),this.updateTodayPulse()):this.ui.nudge(`daily`))}async turnMonth(e){let t=S_(b_(this.calendarMonth,e),this.clock.today());t<0||t>z_.daily.calendarMonthsBack?(this.ui.nudge(e<0?`prev-chapter`:`next-chapter`),this.haptics.buzz(`deny`)):(this.transition=!0,this.haptics.buzz(`page`),this.ui.setTodayPulse(null),this.calendarMonth=b_(this.calendarMonth,e),this.showMonthNav(),await this.scene.turnToPage(this.calendarPage(),e>0?`forward`:`back`),this.transition=!1,this.updateTodayPulse())}async slamPaw(){let e=this.slamDay;if(e===null||this.screen!==`daily`||y_(e)!==this.calendarMonth){this.slamDay=null;return}let t=this.scene.stampCircle(Number(e.slice(8)));if(t){let e=t.r*2;this.audio.play(`stamp`),await this.ui.slam(`paw-stamp`,{x:t.x+e*wg.dx,y:t.y+e*wg.dy},e*wg.size)}this.slamDay=null,this.screen===`daily`&&this.scene.refreshPage(this.calendarPage())}updateTodayPulse(){let e=this.clock.today(),t=this.screen===`daily`&&!this.transition&&!this.scene.turning&&y_(e)===this.calendarMonth;this.ui.setTodayPulse(t?this.scene.stampCircle(Number(e.slice(8))):null)}tapDay(e){let t=`${this.calendarMonth.slice(0,8)}${String(e).padStart(2,`0`)}`;this.calendarPage().days.find(t=>t.day===e)?.playable?(this.audio.play(`tap`),this.haptics.buzz(`tap`),this.startDaily(t)):(this.audio.play(`cancel`),this.haptics.buzz(`deny`))}async startDaily(e){let t=this.dailyLevelFor(e);if(!t||this.transition)return;let n=u_(e),r={top:Q.dailyPageTop,main:n?`${Q.monthsShort.split(` `)[n.m-1]??``} ${n.d}`:e,folio:String(n?.y??``)};await this.beginLevel(t,e,r)}stickerChapter=1;stickerPage(e=this.stickerChapter){let t=this.save.progress,n=t.levelsOf(e),r=this.levels.chapters.length;return{kind:`stickers`,key:String(e),heading:Q.stickersHeading,title:R_(`stickersTitle`,{n:e}),count:R_(`stickersCount`,{n:t.chapterStickers(e),of:n.length}),slots:n.map(e=>({level:e,sticker:t.hasSticker(e)?op(e):null})),stamp:t.chapterComplete(e)?{line1:Q.stampLine1,line2:Q.stampLine2}:null,folio:`${e} / ${r}`}}showStickerNav(){let e=this.levels.chapters.map(e=>e.id),t=e.indexOf(this.stickerChapter);this.ui.setChapterNav({chapter:this.stickerChapter,chapterCount:e.length,canPrev:t>0,canNext:t>=0&&t<e.length-1})}async openStickers(){this.screen!==`home`||this.transition||(this.audio.unlock(),this.screen=`stickers`,this.stickerChapter=this.chapter,this.scene.showPage(this.stickerPage()),this.showStickerNav(),this.syncHistory(),await this.ui.setScreen(`stickers`))}async turnStickerPage(e){let t=this.levels.chapters.map(e=>e.id),n=t[t.indexOf(this.stickerChapter)+e];n===void 0?(this.ui.nudge(e<0?`prev-chapter`:`next-chapter`),this.haptics.buzz(`deny`)):(this.transition=!0,this.haptics.buzz(`page`),this.stickerChapter=n,this.showStickerNav(),await this.scene.turnToPage(this.stickerPage(),e>0?`forward`:`back`),this.transition=!1)}showChapterNav(){let e=this.levels.chapters.map(e=>e.id),t=e.indexOf(this.chapter);this.ui.setChapterNav({chapter:this.chapter,chapterCount:e.length,canPrev:t>0,canNext:t>=0&&t<e.length-1})}async turnPage(e){this.transition||this.ui.panelOpen||(this.screen===`daily`?await this.turnMonth(e):this.screen===`select`?await this.turnChapter(e):this.screen===`stickers`&&await this.turnStickerPage(e))}get onStampPage(){return this.screen===`select`||this.screen===`daily`||this.screen===`stickers`}async turnChapter(e){if(this.transition||this.screen!==`select`||this.ui.panelOpen)return;let t=this.levels.chapters.map(e=>e.id),n=t[t.indexOf(this.chapter)+e];n===void 0?(this.ui.nudge(e<0?`prev-chapter`:`next-chapter`),this.haptics.buzz(`deny`)):(this.transition=!0,this.haptics.buzz(`page`),this.chapter=n,this.showChapterNav(),await this.scene.turnToChapter(this.chapterPage(n),e>0?`forward`:`back`),this.transition=!1)}async startLevel(e){let t=this.levelById(e);t&&!this.transition&&await this.beginLevel(t,null)}async beginLevel(e,t,n){this.transition=!0,this.haptics.buzz(`page`),this.ui.setTodayPulse(null),this.dropTurns(),this.tutorial.stop(),this.ui.setNotice(null),this.session=new jm(e),this.dailyDay=t,t===null&&(this.chapter=e.chapter,this.save.recordPlayed(e.id)),this.screen=`play`,this.syncHistory(),this.refreshHud(),this.ui.setScreen(`play`),await this.scene.turnToLevel(e,this.session.state,`forward`,n),this.transition=!1,this.tutorial.begin(e.id)}async leaveLevel(e){if(this.transition||!this.session)return;this.transition=!0,this.haptics.buzz(`page`),this.dropTurns(),this.tutorial.stop(),this.ui.setNotice(null),this.animator.cancel(),this.fx.clear();let t=this.dailyDay;this.dailyDay=null,t===null?(this.chapter=e??this.session.level.chapter,this.session=null,this.screen=`select`,this.showChapterNav(),this.ui.setScreen(`select`),await this.scene.turnToChapter(this.chapterPage(this.chapter),`back`),this.transition=!1):(this.session=null,this.screen=`daily`,this.calendarMonth=y_(t),this.showMonthNav(),this.ui.setScreen(`daily`),await this.scene.turnToPage(this.calendarPage(),`back`),this.transition=!1,await this.slamPaw(),this.updateTodayPulse())}onDown(e){if(this.press||this.ui.panelOpen||this.transition||this.scene.turning||this.screen===`home`||e.pointerType===`mouse`&&e.button!==0)return;let t=this.scene.pick(e.clientX,e.clientY);if(this.onStampPage)this.press=this.newPress(e,t.stamp),this.scene.pressStamp(t.stamp);else{if(this.session?.state.outcome!==`playing`)return;this.tutorial.interrupt(),this.press=this.newPress(e,null),this.moveTo(t)}try{this.canvas.setPointerCapture(e.pointerId)}catch{}}newPress(e,t){return{pointerId:e.pointerId,x0:e.clientX,y0:e.clientY,tile:null,legal:!1,wound:!1,stamp:t,swiped:!1}}onMove(e){let t=this.press;t&&e.pointerId===t.pointerId&&(this.onStampPage?!t.swiped&&Math.abs(e.clientX-t.x0)>z_.input.swipePx*this.unit()&&(t.swiped=!0,this.scene.pressStamp(null)):this.moveTo(this.scene.pick(e.clientX,e.clientY)))}onUp(e){let t=this.press;if(!t||e.pointerId!==t.pointerId)return;this.press=null;let n=this.scene.pick(e.clientX,e.clientY);this.onStampPage?(this.scene.pressStamp(null),t.swiped?this.turnPage(e.clientX<t.x0?1:-1):t.stamp!==null&&n.stamp===t.stamp&&(this.screen===`daily`?this.tapDay(t.stamp):this.screen===`select`&&this.tapStamp(t.stamp))):(this.press=t,this.moveTo(n,!0),this.press=null,this.fx.hidePreview(),t.tile&&t.legal?(t.wound||this.animator.setPreview(null),this.commit(t.tile,t.wound)):(this.animator.setPreview(null),this.audio.play(`cancel`),t.tile&&this.haptics.buzz(`deny`)))}onCancel(e){let t=this.press;t&&e.pointerId===t.pointerId&&this.cancelPress()}cancelPress(){this.press=null,this.onStampPage?this.scene.pressStamp(null):this.showPreview(null)}moveTo(e,t=!1){let n=this.press;if(!n||!this.session)return;let r=e.tile;if(r?.x===n.tile?.x&&r?.y===n.tile?.y)return;if(n.tile=r,!r){n.legal=!1,n.wound=!1,this.showPreview(null);return}let i=this.session.preview(r);n.legal=i.legal,this.fx.showPreview(r,i.rays,i.legal);let a=!this.animator.busy&&this.pending.length===0;a&&this.animator.setPreview({target:r,reacting:i.reacting,legal:i.legal}),n.wound=a&&i.legal,t||(this.audio.play(`preview`),this.haptics.buzz(`preview`))}showPreview(e){if(!e||!this.session){this.fx.hidePreview(),this.animator.setPreview(null);return}let t=this.session.preview(e);this.fx.showPreview(e,t.rays,t.legal),this.animator.setPreview({target:e,reacting:t.reacting,legal:t.legal})}tapStamp(e){let t=this.chapterPage(this.chapter).levels.find(t=>t.id===e);if(t){if(t.locked){this.audio.play(`cancel`),this.haptics.buzz(`deny`);let t=this.scene.stampCircle(e);t&&this.ui.shakeLock(t)}else this.audio.play(`tap`),this.haptics.buzz(`tap`),this.startLevel(e)}}commit(e,t=!1){let n=this.session?.state,r=this.session?.commit(e);if(!r)return!1;this.fx.showHint(null);let i=r.state.sheep.filter((e,t)=>e.status===`penned`&&n?.sheep[t]?.status!==`penned`).length;return this.pending.push({result:r,prewound:t,penned:i}),this.pump(),!0}pump(){let e=this.session;if(!e||this.animator.busy)return;let t=this.pending.shift();if(!t){this.timeline.scale=1,this.announce();return}let{result:n,prewound:r,penned:i}=t;this.timeline.scale=Math.min(1+z_.input.queueSpeedup*this.pending.length,z_.input.queueSpeedMax),this.refreshHud(n.state);let a=n.state.outcome===`won`,o=this.animator.playTurn(n,{onInput:()=>{i>=2&&this.session===e&&this.ui.callout(i===2?Q.penDouble:i===3?Q.penTriple:Q.penMany),this.pump()},onOutcome:t=>this.onOutcome(t,e,n.state)},{prewound:r,stars:a?wt(e.level,n.state.barksUsed):void 0});for(let e of o.unknownEvents)this.unknownEvents.add(e)}onOutcome(e,t,n){if(this.session===t&&t.state===n){if(this.tutorial.stop(),this.ui.setNotice(null),e===`won`){let e=t.stars(),r=this.dailyDay;r!==null&&this.save.progress.dayMark(r)!==`solved`&&(this.slamDay=r);let i=r===null?this.save.recordWin(t.level.id,e):this.save.solveDaily(r,this.clock.today());this.ui.setTokens(this.save.tokens),i.some(e=>e.kind===`chapter-complete`)?this.haptics.buzz(`chapter`):i.some(e=>e.kind===`daily`)?this.haptics.buzz(`streak`):i.length>0&&this.haptics.buzz(`reward`),this.ui.showWin({stars:e,barksUsed:n.barksUsed,minBarks:t.level.minBarks,lastLevel:r===null&&this.levelById(t.level.id+1)===null,nextLabel:r===null?void 0:Q.dailyBack,rewards:this.rewardLines(i)})}else this.ui.showLose({reason:e,canExtraBark:t.canExtraBark,oneBarkShort:t.oneBarkShort})}}rewardLines(e){return e.map(e=>{switch(e.kind){case`three-star`:return{icon:op(e.level),text:R_(`rewardThreeStar`,{n:e.tokens}),effect:`peel`};case`chapter-complete`:return{icon:`stamp-ring`,text:R_(`rewardChapter`,{n:e.tokens}),effect:`slam`};case`daily`:return{icon:`icon-token`,text:R_(`rewardDaily`,{n:e.tokens})};case`streak`:return{icon:`icon-flame`,text:R_(`rewardStreak`,{days:e.days,n:e.tokens})}}})}announce(){let e=this.screen===`play`?this.session?.standing()??null:null;this.ui.setNotice(e===`dead`||e===`short`||e===`savable`?{kind:e}:null)}dropTurns(){this.pending.length=0,this.timeline.scale=1,this.press=null}refreshHud(e=this.session?.state??null){let t=this.session;t&&e&&this.ui.setHud({levelId:t.level.id,caption:this.dailyDay===null?`LEVEL ${t.level.id}`:Q.dailyCaption,chapter:t.level.chapter,index:t.level.index,barksLeft:e.barkLimit-e.barksUsed,canUndo:t.canUndo,tokens:this.save.tokens,starBarks:t.level.minBarks,starMissed:e.barksUsed>t.level.minBarks})}uiEvents(){return{onContinue:()=>void this.continueGame(),onLevels:()=>void this.openBook(),onDaily:()=>void this.openDaily(),onStickers:()=>void this.openStickers(),onBack:()=>void this.back(),onPrevChapter:()=>void this.turnPage(-1),onNextChapter:()=>void this.turnPage(1),onUndo:()=>this.undo(),onRestart:()=>this.restart(),onHint:()=>void this.hint(),onSettings:()=>this.showSettings(),onNext:()=>void this.next(),onRetry:()=>this.restart(),onExtraBark:()=>void this.extraBark(),onSoundToggle:()=>{this.haptics.buzz(`toggle`),this.save.setSound(!this.save.settings.sound),this.audio.setEnabled(this.save.settings.sound),this.showSettings()},onHapticsToggle:()=>{this.save.setHaptics(!this.save.settings.haptics),this.showSettings(),this.haptics.buzz(`toggle`)},onMotionToggle:()=>{this.haptics.buzz(`toggle`),this.save.setReducedMotion(!this.save.settings.reducedMotion),this.ui.setReducedMotion(this.save.settings.reducedMotion),this.showSettings()},onUnlockAllToggle:()=>{this.haptics.buzz(`toggle`),this.save.setUnlockAll(!this.save.settings.unlockAll),this.showSettings(),this.refreshHome(),this.screen===`select`&&!this.transition&&this.scene.refreshChapter(this.chapterPage(this.chapter))},onCredits:()=>{this.ui.panelKind===`settings`&&this.ui.showCredits()},onCloseCredits:()=>{this.ui.panelKind===`credits`&&this.showSettings()},onCloseSettings:()=>{this.ui.panelKind===`settings`&&this.ui.hidePanel()},onHomeTap:(e,t)=>{this.ui.panelOpen||this.transition||(this.audio.unlock(),this.homeLife.poke(e,t))}}}showSettings(){let e=this.save.settings;this.ui.showSettings({sound:e.sound,haptics:Nm()?e.haptics:null,reducedMotion:e.reducedMotion,unlockAll:e.unlockAll}),this.syncHistory()}homeInfo(){let e=this.clock.today(),t=this.save.settleStreak(e);return{canContinue:this.save.continueLevel()!==null,daily:this.dailyLevelFor(e)?this.save.progress.dayMark(e)===`solved`?`solved`:`ready`:`unavailable`,tokens:this.save.tokens,streak:t.count,freeMissReady:t.freeMiss}}refreshHome(){this.ui.setHome(this.homeInfo())}async continueGame(){if(this.screen!==`home`||this.transition)return;this.audio.unlock();let e=this.save.continueLevel(),t=e===null?null:this.levelById(e);t&&(this.chapter=t.chapter,this.scene.showChapter(this.chapterPage(this.chapter)),await this.startLevel(t.id))}async openBook(){this.screen!==`home`||this.transition||(this.audio.unlock(),this.screen=`select`,this.scene.refreshChapter(this.chapterPage(this.chapter)),this.showChapterNav(),this.syncHistory(),await this.ui.setScreen(`select`))}async back(){this.transition||this.ui.panelOpen||(this.screen===`play`?await this.leaveLevel():this.screen!==`home`&&await this.goHome())}async goHome(){this.ui.setTodayPulse(null),this.screen=`home`,this.refreshHome(),await this.ui.setScreen(`home`)}goBack(){let e=this.ui.panelKind;if(!(e===`ad`||this.adRunning)){if(e===`credits`)this.showSettings();else if(e===`settings`)this.ui.hidePanel();else if(e===`win`||e===`lose`){if(this.transition||!this.session)return;this.ui.hidePanel().then(()=>this.leaveLevel())}else this.back()}}undo(){let e=this.session;if(!e||this.transition||this.adRunning)return;if(!e.canUndo){this.ui.nudge(`undo`);return}this.dropTurns(),this.tutorial.interrupt();let t=e.standing(),n=t===`dead`||t===`short`?e.rewind()??e.undo():e.undo();n&&(this.ui.setNotice(null),this.audio.play(`undo`),this.fx.showHint(null),this.animator.settle(n,`undo`).then(()=>this.pump()),this.refreshHud())}restart(){let e=this.session;if(!e||this.transition||this.adRunning)return;this.dropTurns(),this.ui.panelOpen&&this.ui.hidePanel(),this.ui.setNotice(null);let t=e.restart();this.audio.play(`undo`),this.fx.showHint(null),this.animator.settle(t,`restart`).then(()=>this.pump()),this.refreshHud(),this.tutorial.begin(e.level.id)}async hint(){let e=this.session;if(!e||this.transition||this.ui.panelOpen||this.adRunning||e.state.outcome!==`playing`)return;let t=e.state,n=e.nextWinningTile();if(!n)this.tutorial.interrupt(),this.announce(),this.ui.flashNotice(),this.audio.play(`cancel`),this.haptics.buzz(`deny`);else{if(this.tutorial.interrupt(),this.hintPaidFor!==t){if(this.save.spendHint()===`ad`&&(this.adRunning=!0,await this.ui.showAd(`hint`),this.adRunning=!1,this.session!==e||e.state!==t))return;this.hintPaidFor=t,this.refreshHud()}this.fx.showHint(n),this.audio.play(`hint`)}}hintPaidFor=null;async extraBark(){let e=this.session;if(!e||!e.canExtraBark||this.adRunning||(this.adRunning=!0,await this.ui.hidePanel(),await this.ui.showAd(`extra-bark`),this.adRunning=!1,this.session!==e))return;let t=e.state.outcome===`lost-fell`,n=e.grantExtraBark();n&&(this.refreshHud(),t?await this.animator.rescue(n):await this.animator.settle(n,`undo`),this.pump())}async next(){let e=this.session;if(!e||this.transition)return;if(this.dailyDay!==null){await this.ui.hidePanel(),await this.leaveLevel();return}let t=this.levelById(e.level.id+1);await this.ui.hidePanel(),t&&this.save.isUnlocked(t.id)?await this.startLevel(t.id):(t&&(this.chapter=t.chapter),await this.leaveLevel(t?.chapter))}};function sv(e,t){let n=$(`ad-fill load-fill`),r=$(`ad-bar load-strip`,n);r.style.width=`calc(var(--u) * ${t.splash.loadingStripPx})`;let i=K_(`small load-caption`,Q.loading),a=pp(`logo`)?Cp(`logo`,`title-logo-art fringe`):K_(`title-logo-text`,Q.titleFallback),o=$(`loading-view`,Q_(t).el,$(`title-logo`,a),$(`title-play load-pos`,$(`load-box`,r,i)));o.style.setProperty(`--load-fade-ms`,`${t.splash.loadingFadeMs}ms`);let s=e.querySelector(`#grain`);return e.insertBefore(o,s),{setProgress(e){n.style.transform=`scaleX(${Math.max(0,Math.min(1,e)).toFixed(3)})`},remove(){o.remove()},async fadeOut(){o.isConnected&&(o.classList.add(`fading`),await new Promise(e=>setTimeout(e,t.splash.loadingFadeMs)),o.remove())}}}var cv=new URL(`zwings-logo-anim-00-XXaBFIsu.webp`,import.meta.url).href,lv=new URL(`zwings-logo-anim-01-DDfDdWeA.webp`,import.meta.url).href,uv=new URL(`zwings-logo-anim-02-wQ8nyVAN.webp`,import.meta.url).href,dv=new URL(`zwings-logo-anim-03-BiSAM9WK.webp`,import.meta.url).href,fv=new URL(`zwings-logo-anim-04-_DrbnwH-.webp`,import.meta.url).href,pv=new URL(`zwings-logo-anim-05-BgOJqOsZ.webp`,import.meta.url).href,mv=new URL(`zwings-logo-anim-06-BI9IQkqH.webp`,import.meta.url).href,hv=new URL(`zwings-logo-anim-07-DquP2xJi.webp`,import.meta.url).href,gv=new URL(`zwings-logo-anim-08-y1Mn-X1d.webp`,import.meta.url).href,_v=new URL(`zwings-logo-anim-09-gTtMOVJV.webp`,import.meta.url).href,vv=new URL(`zwings-logo-anim-10-Dj-v6sVE.webp`,import.meta.url).href,yv=new URL(`zwings-logo-anim-11-BRyrU9pt.webp`,import.meta.url).href,bv=new URL(`zwings-logo-anim-12-BPlU94hE.webp`,import.meta.url).href,xv={fps:30,cell:512,cols:4,rows:4,frameCount:13,durationSeconds:1.033,finalFrame:8,rawCrop:[65,6,1175,1117],timeline:[{frame:0,source:`fr_f01`,ticks:3},{frame:1,source:`fr_f02`,ticks:2},{frame:2,source:`fr_f03`,ticks:2},{frame:3,source:`fr_f04`,ticks:2},{frame:4,source:`fr_f05`,ticks:2},{frame:5,source:`fr_f06`,ticks:3},{frame:6,source:`fr_f07`,ticks:2},{frame:7,source:`fr_f08`,ticks:2},{frame:8,source:`master`,ticks:4},{frame:9,source:`fr_s1`,ticks:2},{frame:10,source:`fr_s2b`,ticks:2},{frame:11,source:`fr_s3b`,ticks:2},{frame:12,source:`fr_s4`,ticks:2},{frame:8,source:`master`,ticks:1}]},Sv=new URL(`zwings-logo-splash-1024-D2r-crBm.webp`,import.meta.url).href,Cv=Object.assign({"../../../branding/zwings/web/frames/zwings-logo-anim-00.webp":cv,"../../../branding/zwings/web/frames/zwings-logo-anim-01.webp":lv,"../../../branding/zwings/web/frames/zwings-logo-anim-02.webp":uv,"../../../branding/zwings/web/frames/zwings-logo-anim-03.webp":dv,"../../../branding/zwings/web/frames/zwings-logo-anim-04.webp":fv,"../../../branding/zwings/web/frames/zwings-logo-anim-05.webp":pv,"../../../branding/zwings/web/frames/zwings-logo-anim-06.webp":mv,"../../../branding/zwings/web/frames/zwings-logo-anim-07.webp":hv,"../../../branding/zwings/web/frames/zwings-logo-anim-08.webp":gv,"../../../branding/zwings/web/frames/zwings-logo-anim-09.webp":_v,"../../../branding/zwings/web/frames/zwings-logo-anim-10.webp":vv,"../../../branding/zwings/web/frames/zwings-logo-anim-11.webp":yv,"../../../branding/zwings/web/frames/zwings-logo-anim-12.webp":bv}),wv=Object.keys(Cv).sort().map(e=>Cv[e]);function Tv(){let e=1e3/xv.fps,t=0;return xv.timeline.map(n=>{let r={frame:n.frame,at:t,ms:n.ticks*e};return t+=r.ms,r})}function Ev(){let e=Tv(),t=e[e.length-1];return t?t.at+t.ms:0}function Dv(e){let t=new Image;return t.decoding=`async`,t.alt=``,t.draggable=!1,t.src=e,t.decode().then(()=>t)}var Ov=()=>new Promise(e=>requestAnimationFrame(e));function kv(e,t){let n=t.tuning.splash;e.classList.add(`splash`),e.style.background=n.background,e.style.setProperty(`--splash-fade-ms`,`${n.fadeMs}ms`),e.style.setProperty(`--splash-logo-w`,`min(${n.logoMaxPx}px, ${n.logoWidthFraction*100}vw, ${n.logoWidthFraction*100}vh)`);let r=fp(`paper-grain`).url,i=t.tuning.scene.post,a=document.createElement(`div`);a.className=`splash-grain`,a.style.setProperty(`--splash-grain-size`,`calc(min(100vw, ${t.tuning.ui.maxAspect*100}vh) / 390 * ${i.grainSizePx})`),a.style.opacity=String(i.grainOpacity);let o=document.createElement(`div`);o.className=`splash-logo`,e.append(a,o),document.documentElement.dataset.splash=`decoding`;let s=`decoding`,c=[{phase:s,t:performance.now()}];window.__barkSplash=c;let l=e=>{s=e,c.push({phase:e,t:performance.now()}),document.documentElement.dataset.splash=e},u=0,d=!1,f=()=>void 0,p=new Promise(e=>{f=e}),m=()=>void 0,h=new Promise(e=>{m=e}),g=()=>{m(),f()},_=()=>{u!==0&&(performance.now()-u<n.skipAfterMs||(d=!0,g()))};return e.addEventListener(`pointerdown`,_),(async()=>{let e=t.reducedMotion?[Sv]:[...wv,Sv],i;try{let t=r?Dv(r).then(()=>!0,()=>!1):Promise.resolve(!1);i=await Promise.race([Promise.all([Promise.all(e.map(Dv)),t]).then(([e,t])=>(t&&r&&(a.style.backgroundImage=`url("${r}")`,a.classList.add(`on`)),e)),new Promise((e,t)=>setTimeout(()=>t(Error(`splash decode timeout`)),n.decodeTimeoutMs))])}catch{g();return}for(let e of i)e.className=`splash-frame`,e.style.visibility=`hidden`,o.append(e);let s=i[i.length-1];if(await Ov(),await Ov(),t.reducedMotion){s.style.visibility=`visible`,u=performance.now(),l(`static`),m(),setTimeout(g,n.reducedMs);return}let c=Tv(),f=Ev();u=performance.now(),l(`reveal`);let p=null,h=e=>{p!==e&&(e.style.visibility=`visible`,p&&(p.style.visibility=`hidden`),p=e)};h(i[c[0]?.frame??0]);let _=()=>{if(d)return;let e=performance.now()-u;if(e>=f){h(s),l(`hold`),m();let t=n.holdMs-e;t>0?setTimeout(g,t):g();return}let t=c[0]?.frame??0;for(let n of c)e>=n.at&&(t=n.frame);h(i[t]),requestAnimationFrame(_)};requestAnimationFrame(_)})(),{beatOver:p,still:h,fade:async()=>{e.removeEventListener(`pointerdown`,_),l(`fading`),e.classList.add(`fading`),await new Promise(e=>setTimeout(e,n.fadeMs)),e.remove(),l(`gone`)},get phase(){return s}}}function Av(e){let t=()=>!e.transition&&!e.scene.turning&&!e.animator.busy&&e.pending.length===0;window.__bark={screen:()=>e.screen,today:()=>e.clock.today(),shakes:()=>e.shakes,buzzes:()=>[...e.haptics.log],homeBeatIn:()=>e.homeLife.nextBeatIn(),homeTime:()=>e.homeLife.time,homePokes:()=>e.homeLife.pokes,homeFigureClient:t=>G_(t)?e.homeLife.figureClient(t):null,homeTransforms:()=>{let t={};for(let[n,r]of e.ui.home.scene.layers)t[n]=r.style.transform;return t},dailyDay:()=>e.dailyDay,levelId:()=>e.session?.level.id??null,outcome:()=>e.session?.state.outcome??null,barksLeft:()=>e.session?.barksLeft??null,idle:t,ready:()=>t()&&!e.pressing&&!e.adBusy&&!e.ui.panelOpen,calm:()=>t()&&!e.timeline.busy(Z.turn)&&!e.timeline.busy(Z.settle),status:()=>({screen:e.screen,levelId:e.session?.level.id??null,outcome:e.session?.state.outcome??null,barksLeft:e.session?.barksLeft??null,transition:e.transition,turning:e.scene.turning,busy:e.animator.busy,pending:e.pending.length,pressing:e.pressing,ad:e.adBusy,panel:e.ui.panelKind,panelClosing:document.querySelector(`.panels`)?.classList.contains(`closing`)??!1,paused:e.timeline.paused,speed:e.timeline.scale*e.speed,moving:e.timeline.busy(Z.turn)||e.timeline.busy(Z.settle)}),state:()=>{let t=e.session?.state;return t?{dog:{x:t.dog.x,y:t.dog.y},sheep:t.sheep.map(e=>({id:e.id,x:e.x,y:e.y,status:e.status})),barksUsed:t.barksUsed,barkLimit:t.barkLimit,outcome:t.outcome}:null},panelOpen:()=>e.ui.panelOpen,hintShown:()=>e.fx.hintShown,tileClient:(t,n)=>e.scene.tileToClient(t,n),pick:(t,n)=>e.scene.pick(t,n).tile,stampClient:t=>e.scene.stampToClient(t),solution:()=>[...e.session?.level.solution??[]],wastefulTile:()=>{let t=e.session;if(!t)return null;let n=bt(t.level,t.state);return n.find(e=>t.preview(e).reacting.length===0)||(n.find(e=>St(t.level,t.state,e).state.outcome!==`lost-fell`)??null)},pause:()=>e.setDebugPause(!0),resume:()=>e.setDebugPause(!1),step:t=>{for(let n=0;n<t;n+=16)e.timeline.step(16),e.advance(16)},setSpeed:t=>void(e.speed=t>0?t:1),solveTimes:()=>{let t={countSolutions:!1,exhaustive:!0,maxStates:0,maxDepth:0};for(let n of e.levels.levels)ht(n,vt(n),t);return e.levels.levels.map(e=>{let n=performance.now(),r=ht(e,vt(e),t);return{id:e.id,size:`${e.width}x${e.height}`,sheep:e.sheep.length,states:r?.states??0,ms:performance.now()-n}})},unknownEvents:()=>[...e.unknownEvents],missingArt:()=>[...mp.missing],wrongSizeArt:()=>[...mp.wrongSize],stats:()=>e.scene.stats(),pieces:()=>{let t=e.scene.board;return t?[t.dog,...t.sheep].map(e=>({kind:e.kind,id:e.id,x:e.x,y:e.y,fold:e.fold,alpha:e.alpha,pose:e.pose})):[]}}}var jv=Object.assign({"../../levels/daily.json":e}),Mv=Object.assign({"../../levels/levels.json":t});async function Nv(){let e=new URLSearchParams(location.search),t=e.has(`debug`),n=document.documentElement,r=Object.values(Mv)[0],i=document.getElementById(`scene`),a=document.getElementById(`ui`),o=a.parentElement,s=o.parentElement,c=document.getElementById(`splash`),l=new L_(N_(),M_(r??{levels:[],chapters:[]}),E_(z_));nv(s,o,z_),rv(o,z_);let u=()=>void rv(o,z_);window.addEventListener(`resize`,u);let d=c&&(!t||e.has(`splash`))?kv(c,{tuning:z_,reducedMotion:l.settings.reducedMotion}):null;d||c?.remove(),n.dataset.boot=d?`splash`:`loading`;let f=sv(o,z_),p=0,m={done:0,total:0},h=()=>f.setProgress((m.done+p)/Math.max(1,m.total+1)),g=Promise.all([kp().then(()=>{p=1,h()}),yp(void 0,(e,t)=>{m={done:e,total:t},h()})]),_=null,v=Promise.all([g,d?.still]).then(()=>{if(mp.missing.length>0&&console.info(`[bark] art not landed yet:`,mp.missing.join(`, `)),mp.wrongSize.length>0&&console.warn(`[bark] art at the wrong size:`,mp.wrongSize),window.removeEventListener(`resize`,u),!r||r.levels.length===0)return f.remove(),a.textContent=`LEVELS HAVE NOT LANDED`,a.className=`boot-error`,null;let n=t&&e.has(`nodaily`)?null:Object.values(jv)[0]??null;return _=new ov(i,a,r,{save:l,daily:n,clock:T_(location.search)}),_.start(),t&&Av(_),d&&d.phase!==`gone`&&d.phase!==`fading`&&f.remove(),_});d&&(await d.beatOver,_||(n.dataset.boot=`loading`),await d.fade());let y=await v;y&&(await f.fadeOut(),n.dataset.boot=`home`,await y.revealHome(),n.dataset.ready=`1`)}Nv();