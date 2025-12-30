// --------------------------- js 시작 --------------------------- //
(() => {
document.getElementById('passEditor').addEventListener('click', e => {
	e.preventDefault();	
	sessionStorage.removeItem('selectData');
	$("#content").load("/editor.do", function () {
        window.scrollTo(0, 0);
    });
})

document.querySelectorAll('.template').forEach(el => {
    el.addEventListener('click', () => {
		var templateId = el.dataset.id;
		sessionStorage.removeItem('selectData');
        sessionStorage.setItem("selectTemplate", JSON.stringify(templates[templateId]));		
		
		$("#content").load("/editor.do", function () {
	        window.scrollTo(0, 0);
	    });
    });
});

function getSelectData() {
    return JSON.parse(sessionStorage.getItem('selectData')) || {};
}

function setSelectData(data) {
    sessionStorage.setItem('selectData', JSON.stringify(data));
}

// --------------------------- 템플릿 --------------------------- //
var templates = [
	{
	  "version": "5.1.0",
	  "objects": [
	    {
	      "type": "path",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 100.63,
	      "top": 10.56,
	      "width": 80.75,
	      "height": 94.2,
	      "fill": "#4d4c4c",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 6.12,
	      "scaleY": 6.12,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "path": [
	        [
	          "M",
	          40.42,
	          83.77
	        ],
	        [
	          "C",
	          40.09069841246157,
	          83.7705989539841,
	          39.77446257345182,
	          83.64122974711648,
	          39.54,
	          83.41
	        ],
	        [
	          "L",
	          8.47,
	          52.35
	        ],
	        [
	          "C",
	          7.9911532980372115,
	          51.857158544059594,
	          7.9911532980372115,
	          51.072841455940406,
	          8.47,
	          50.58
	        ],
	        [
	          "C",
	          8.704510657525418,
	          50.34489574828091,
	          9.022931847854398,
	          50.21276554078645,
	          9.355,
	          50.21276554078645
	        ],
	        [
	          "C",
	          9.687068152145603,
	          50.21276554078645,
	          10.005489342474583,
	          50.34489574828091,
	          10.24,
	          50.58
	        ],
	        [
	          "L",
	          40.42,
	          80.75
	        ],
	        [
	          "L",
	          80.75,
	          40.42
	        ],
	        [
	          "L",
	          40.33,
	          0
	        ],
	        [
	          "L",
	          0,
	          40.33
	        ],
	        [
	          "L",
	          5,
	          45.33
	        ],
	        [
	          "L",
	          39.5,
	          10.829999999999998
	        ],
	        [
	          "C",
	          39.99695479070186,
	          10.36139921687685,
	          40.77304520929815,
	          10.36139921687685,
	          41.27,
	          10.829999999999998
	        ],
	        [
	          "L",
	          66.09,
	          35.66
	        ],
	        [
	          "C",
	          66.57877200360025,
	          36.14877200360025,
	          66.57877200360026,
	          36.941227996399746,
	          66.09,
	          37.42999999999999
	        ],
	        [
	          "C",
	          65.60122799639976,
	          37.91877200360025,
	          64.80877200360025,
	          37.91877200360025,
	          64.32000000000001,
	          37.43
	        ],
	        [
	          "L",
	          40.32000000000001,
	          13.43
	        ],
	        [
	          "L",
	          0,
	          53.78
	        ],
	        [
	          "L",
	          40.42,
	          94.2
	        ],
	        [
	          "L",
	          80.75,
	          53.86
	        ],
	        [
	          "L",
	          75.75,
	          48.86
	        ],
	        [
	          "L",
	          41.3,
	          83.41
	        ],
	        [
	          "C",
	          41.065537426548175,
	          83.64122974711648,
	          40.749301587538426,
	          83.7705989539841,
	          40.42,
	          83.77
	        ],
	        [
	          "Z"
	        ]
	      ]
	    },
	    {
	      "type": "path",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 321,
	      "top": 123.8,
	      "width": 192,
	      "height": 182.4,
	      "fill": "#ffffff",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 0.3,
	      "scaleY": 0.3,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "path": [
	        [
	          "M",
	          4.4675,
	          79.16554
	        ],
	        [
	          "L",
	          77.8055,
	          79.16554
	        ],
	        [
	          "L",
	          100.46750999999999,
	          9.494749999999996
	        ],
	        [
	          "L",
	          123.12952999999999,
	          79.16554
	        ],
	        [
	          "L",
	          196.46751,
	          79.16554
	        ],
	        [
	          "L",
	          137.13593,
	          122.22395999999999
	        ],
	        [
	          "L",
	          159.79911,
	          191.89475
	        ],
	        [
	          "L",
	          100.46751,
	          148.83515
	        ],
	        [
	          "L",
	          41.135920000000006,
	          191.89475
	        ],
	        [
	          "L",
	          63.79910000000001,
	          122.22395999999999
	        ],
	        [
	          "L",
	          4.467500000000008,
	          79.16554
	        ],
	        [
	          "z"
	        ]
	      ]
	    },
	    {
	      "type": "textbox",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 199,
	      "top": 226,
	      "width": 300,
	      "height": 36.16,
	      "fill": "#ffffff",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 1,
	      "scaleY": 1,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "fontFamily": "NanumGothic",
	      "fontWeight": "normal",
	      "fontSize": 32,
	      "text": "Subtitle",
	      "underline": false,
	      "overline": false,
	      "linethrough": false,
	      "textAlign": "center",
	      "fontStyle": "normal",
	      "lineHeight": 1.16,
	      "textBackgroundColor": "",
	      "charSpacing": 0,
	      "styles": {},
	      "direction": "ltr",
	      "path": null,
	      "pathStartOffset": 0,
	      "pathSide": "left",
	      "pathAlign": "baseline",
	      "minWidth": 20,
	      "splitByGrapheme": false
	    },
	    {
	      "type": "textbox",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 144,
	      "top": 265,
	      "width": 217.95,
	      "height": 36.16,
	      "fill": "#ffffff",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 1.95,
	      "scaleY": 1.95,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "fontFamily": "NanumGothic",
	      "fontWeight": 1000,
	      "fontSize": 32,
	      "text": "YOUR LOGO",
	      "underline": false,
	      "overline": false,
	      "linethrough": false,
	      "textAlign": "center",
	      "fontStyle": "normal",
	      "lineHeight": 1.16,
	      "textBackgroundColor": "",
	      "charSpacing": 0,
	      "styles": {},
	      "direction": "ltr",
	      "path": null,
	      "pathStartOffset": 0,
	      "pathSide": "left",
	      "pathAlign": "baseline",
	      "minWidth": 20,
	      "splitByGrapheme": false
	    }
	  ],
	  "background": "#ffffff"
	},
	{
	  "version": "5.1.0",
	  "objects": [
	    {
	      "type": "group",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 36.17,
	      "top": 212.13,
	      "width": 64.03,
	      "height": 91.34,
	      "fill": "#bdd2b6",
	      "stroke": null,
	      "strokeWidth": 0,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 1.75,
	      "scaleY": 1.75,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "objects": [
	        {
	          "type": "path",
	          "version": "5.1.0",
	          "originX": "left",
	          "originY": "top",
	          "left": -24.17,
	          "top": -36.62,
	          "width": 55.65,
	          "height": 81.7,
	          "fill": "#333135",
	          "stroke": null,
	          "strokeWidth": 1,
	          "strokeDashArray": null,
	          "strokeLineCap": "butt",
	          "strokeDashOffset": 0,
	          "strokeLineJoin": "miter",
	          "strokeUniform": false,
	          "strokeMiterLimit": 4,
	          "scaleX": 1,
	          "scaleY": 1,
	          "angle": 0,
	          "flipX": false,
	          "flipY": false,
	          "opacity": 1,
	          "shadow": null,
	          "visible": true,
	          "backgroundColor": "",
	          "fillRule": "nonzero",
	          "paintFirst": "fill",
	          "globalCompositeOperation": "source-over",
	          "skewX": 0,
	          "skewY": 0,
	          "path": [
	            [
	              "M",
	              59.19,
	              9.55
	            ],
	            [
	              "L",
	              59.19,
	              85
	            ],
	            [
	              "C",
	              59.19,
	              85.69035593728849,
	              58.63035593728849,
	              86.25,
	              57.94,
	              86.25
	            ],
	            [
	              "L",
	              8.35,
	              86.25
	            ],
	            [
	              "L",
	              8.35,
	              91.25
	            ],
	            [
	              "L",
	              64,
	              91.25
	            ],
	            [
	              "L",
	              64,
	              9.55
	            ],
	            [
	              "Z"
	            ]
	          ]
	        },
	        {
	          "type": "path",
	          "version": "5.1.0",
	          "originX": "left",
	          "originY": "top",
	          "left": -32.52,
	          "top": -46.17,
	          "width": 55.69,
	          "height": 81.79,
	          "fill": "#333135",
	          "stroke": null,
	          "strokeWidth": 1,
	          "strokeDashArray": null,
	          "strokeLineCap": "butt",
	          "strokeDashOffset": 0,
	          "strokeLineJoin": "miter",
	          "strokeUniform": false,
	          "strokeMiterLimit": 4,
	          "scaleX": 1,
	          "scaleY": 1,
	          "angle": 0,
	          "flipX": false,
	          "flipY": false,
	          "opacity": 1,
	          "shadow": null,
	          "visible": true,
	          "backgroundColor": "",
	          "fillRule": "nonzero",
	          "paintFirst": "fill",
	          "globalCompositeOperation": "source-over",
	          "skewX": 0,
	          "skewY": 0,
	          "path": [
	            [
	              "M",
	              55.69,
	              7.55
	            ],
	            [
	              "L",
	              7.35,
	              7.55
	            ],
	            [
	              "L",
	              7.35,
	              50.2
	            ],
	            [
	              "L",
	              27.77,
	              50.2
	            ],
	            [
	              "L",
	              27.77,
	              34.67
	            ],
	            [
	              "C",
	              27.77,
	              33.97964406271151,
	              28.32964406271151,
	              33.42,
	              29.02,
	              33.42
	            ],
	            [
	              "C",
	              29.71035593728849,
	              33.42,
	              30.27,
	              33.97964406271151,
	              30.27,
	              34.67
	            ],
	            [
	              "L",
	              30.27,
	              51.45
	            ],
	            [
	              "C",
	              30.27004288472306,
	              51.78501510931044,
	              30.135604952568443,
	              52.10602641292991,
	              29.89684092363621,
	              52.34103037841439
	            ],
	            [
	              "C",
	              29.658076894703974,
	              52.576034343898876,
	              29.33497222733218,
	              52.70536024453769,
	              29,
	              52.7
	            ],
	            [
	              "L",
	              6.1,
	              52.7
	            ],
	            [
	              "C",
	              5.409644062711508,
	              52.7,
	              4.85,
	              52.1403559372885,
	              4.85,
	              51.45
	            ],
	            [
	              "L",
	              4.85,
	              6.3
	            ],
	            [
	              "C",
	              4.85,
	              5.609644062711508,
	              5.409644062711508,
	              5.05,
	              6.1,
	              5.05
	            ],
	            [
	              "L",
	              55.69,
	              5.05
	            ],
	            [
	              "L",
	              55.69,
	              0
	            ],
	            [
	              "L",
	              0,
	              0
	            ],
	            [
	              "L",
	              0,
	              81.79
	            ],
	            [
	              "L",
	              55.69,
	              81.79
	            ],
	            [
	              "Z"
	            ],
	            [
	              "M",
	              29.51,
	              75.3
	            ],
	            [
	              "C",
	              29.51,
	              75.99035593728848,
	              28.950355937288492,
	              76.55,
	              28.26,
	              76.55
	            ],
	            [
	              "C",
	              27.56964406271151,
	              76.55,
	              27.01,
	              75.99035593728848,
	              27.01,
	              75.3
	            ],
	            [
	              "L",
	              27.01,
	              60.45
	            ],
	            [
	              "C",
	              27.01,
	              59.75964406271151,
	              27.56964406271151,
	              59.2,
	              28.26,
	              59.2
	            ],
	            [
	              "C",
	              28.950355937288492,
	              59.2,
	              29.51,
	              59.75964406271151,
	              29.51,
	              60.45
	            ],
	            [
	              "Z"
	            ]
	          ]
	        }
	      ]
	    },
	    {
	      "type": "textbox",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 162,
	      "top": 218.54,
	      "width": 195.25,
	      "height": 36.16,
	      "fill": "#798777",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 2.66,
	      "scaleY": 2.66,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "fontFamily": "NanumGothic",
	      "fontWeight": 1000,
	      "fontSize": 32,
	      "text": "YOUR LOGO",
	      "underline": false,
	      "overline": false,
	      "linethrough": false,
	      "textAlign": "left",
	      "fontStyle": "normal",
	      "lineHeight": 1.16,
	      "textBackgroundColor": "",
	      "charSpacing": 0,
	      "styles": {},
	      "direction": "ltr",
	      "path": null,
	      "pathStartOffset": 0,
	      "pathSide": "left",
	      "pathAlign": "baseline",
	      "minWidth": 20,
	      "splitByGrapheme": false
	    },
	    {
	      "type": "textbox",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 173,
	      "top": 320,
	      "width": 566.8,
	      "height": 36.16,
	      "fill": "#bdd2b6",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 1,
	      "scaleY": 1,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "fontFamily": "NanumGothic",
	      "fontWeight": 163,
	      "fontSize": 32,
	      "text": "any slogans you want to write",
	      "underline": false,
	      "overline": false,
	      "linethrough": false,
	      "textAlign": "left",
	      "fontStyle": "normal",
	      "lineHeight": 1.16,
	      "textBackgroundColor": "",
	      "charSpacing": 0,
	      "styles": {},
	      "direction": "ltr",
	      "path": null,
	      "pathStartOffset": 0,
	      "pathSide": "left",
	      "pathAlign": "baseline",
	      "minWidth": 20,
	      "splitByGrapheme": false
	    }
	  ],
	  "background": "#a2b29f"
	},
	{
	  "version": "5.1.0",
	  "objects": [
	    {
	      "type": "path",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 227.38,
	      "top": 125.05,
	      "width": 91.24,
	      "height": 69.89,
	      "fill": "#5eaaa8",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 2.61,
	      "scaleY": 2.61,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "path": [
	        [
	          "M",
	          91.23,
	          21.16
	        ],
	        [
	          "C",
	          91.21260981308993,
	          21.067507538777008,
	          91.18580361784758,
	          20.977036629834103,
	          91.15,
	          20.89
	        ],
	        [
	          "L",
	          91.09,
	          20.73
	        ],
	        [
	          "C",
	          91.09,
	          20.73,
	          91.09,
	          20.68,
	          91.09,
	          20.66
	        ],
	        [
	          "L",
	          78.24,
	          0.58
	        ],
	        [
	          "C",
	          78.02269007882605,
	          0.23360823097262873,
	          77.64857626142081,
	          0.0166222168775938,
	          77.24,
	          -1.1102230246251565e-16
	        ],
	        [
	          "L",
	          30.68,
	          0
	        ],
	        [
	          "C",
	          30.590354336200967,
	          -0.011294292025120957,
	          30.49964566379903,
	          -0.01129429202512107,
	          30.41,
	          0
	        ],
	        [
	          "L",
	          30.2,
	          0.12
	        ],
	        [
	          "C",
	          30.12728406731005,
	          0.15736619925421325,
	          30.05999852659582,
	          0.20446607775417394,
	          30,
	          0.26000000000000045
	        ],
	        [
	          "C",
	          29.933545089870417,
	          0.29771595489436586,
	          29.872913595698744,
	          0.3448737836945547,
	          29.82,
	          0.40000000000000013
	        ],
	        [
	          "C",
	          29.767976041436203,
	          0.4532177814278671,
	          29.72416269397739,
	          0.5138824163708376,
	          29.69,
	          0.5800000000000002
	        ],
	        [
	          "C",
	          29.635078815543128,
	          0.6495131824451305,
	          29.591228161458044,
	          0.7270951089033568,
	          29.560000000000002,
	          0.8100000000000005
	        ],
	        [
	          "C",
	          29.549518966894887,
	          0.8762547214606023,
	          29.549518966894887,
	          0.9437452785393978,
	          29.560000000000002,
	          1.01
	        ],
	        [
	          "C",
	          29.555299329026752,
	          1.0765838055131711,
	          29.555299329026752,
	          1.1434161944868286,
	          29.560000000000002,
	          1.2099999999999997
	        ],
	        [
	          "C",
	          29.560000000000002,
	          1.21,
	          29.560000000000002,
	          1.21,
	          29.560000000000002,
	          1.26
	        ],
	        [
	          "C",
	          29.56694349760019,
	          1.3482567199567745,
	          29.58371393687441,
	          1.4354630041827265,
	          29.610000000000003,
	          1.52
	        ],
	        [
	          "C",
	          29.62536843373043,
	          1.591241212561897,
	          29.645411803134646,
	          1.6613930054766548,
	          29.67,
	          1.73
	        ],
	        [
	          "C",
	          29.709782418730708,
	          1.798908639791423,
	          29.75317617932382,
	          1.865668271473135,
	          29.8,
	          1.9299999999999993
	        ],
	        [
	          "C",
	          29.844479950501363,
	          1.9943927823649201,
	          29.894683811698684,
	          2.054637415801706,
	          29.95,
	          2.1099999999999994
	        ],
	        [
	          "C",
	          30.005780639917187,
	          2.1588945452890482,
	          30.066047370421014,
	          2.2024205173195908,
	          30.13,
	          2.2399999999999998
	        ],
	        [
	          "C",
	          30.19951318244513,
	          2.2949211844568733,
	          30.277095108903357,
	          2.3387718385419576,
	          30.36,
	          2.369999999999999
	        ],
	        [
	          "L",
	          50,
	          9.09
	        ],
	        [
	          "L",
	          3.74,
	          19.49
	        ],
	        [
	          "L",
	          13.49,
	          2.4899999999999984
	        ],
	        [
	          "L",
	          18.83,
	          2.4899999999999984
	        ],
	        [
	          "C",
	          19.52035593728849,
	          2.4899999999999984,
	          20.08,
	          1.9303559372884902,
	          20.08,
	          1.2399999999999984
	        ],
	        [
	          "C",
	          20.08,
	          0.5496440627115067,
	          19.52035593728849,
	          -0.010000000000001563,
	          18.83,
	          -0.010000000000001563
	        ],
	        [
	          "L",
	          12.77,
	          -0.010000000000001563
	        ],
	        [
	          "C",
	          12.322724655270777,
	          -0.010150308875798505,
	          11.910030600301253,
	          0.2305878898564237,
	          11.69,
	          0.6199999999999993
	        ],
	        [
	          "L",
	          0.16,
	          20.71
	        ],
	        [
	          "L",
	          0.16,
	          20.71
	        ],
	        [
	          "C",
	          0.08728845273654762,
	          20.831179446773902,
	          0.033343749175891224,
	          20.962669661703,
	          -3.608224830031759e-16,
	          21.1
	        ],
	        [
	          "L",
	          0,
	          21.18
	        ],
	        [
	          "C",
	          -0.019796229028510904,
	          21.302538960325734,
	          -0.019796229028510935,
	          21.427461039674267,
	          0,
	          21.55
	        ],
	        [
	          "L",
	          0,
	          21.61
	        ],
	        [
	          "C",
	          0,
	          21.61,
	          0,
	          21.68,
	          0,
	          21.72
	        ],
	        [
	          "L",
	          0.09,
	          21.93
	        ],
	        [
	          "C",
	          0.12085564280447408,
	          21.987103651336092,
	          0.1577321658045095,
	          22.040742230245232,
	          0.2000000000000001,
	          22.09
	        ],
	        [
	          "C",
	          0.2,
	          22.09,
	          0.2,
	          22.16,
	          0.27,
	          22.19
	        ],
	        [
	          "L",
	          44.89,
	          69.48
	        ],
	        [
	          "C",
	          45.125698950088776,
	          69.73240723871696,
	          45.454667606173196,
	          69.87700884578705,
	          45.8,
	          69.88000000000001
	        ],
	        [
	          "L",
	          45.8,
	          69.88000000000001
	        ],
	        [
	          "C",
	          46.14584176264956,
	          69.87940257311213,
	          46.475720262725886,
	          69.73440103461704,
	          46.709999999999994,
	          69.48
	        ],
	        [
	          "L",
	          90.92,
	          22.19
	        ],
	        [
	          "L",
	          90.92,
	          22.14
	        ],
	        [
	          "C",
	          90.96701174838091,
	          22.08137655123765,
	          91.0072658549763,
	          22.017640882461635,
	          91.04,
	          21.95
	        ],
	        [
	          "C",
	          91.07376159232139,
	          21.898871650638178,
	          91.10383772712179,
	          21.845402966548598,
	          91.13000000000001,
	          21.79
	        ],
	        [
	          "L",
	          91.13000000000001,
	          21.73
	        ],
	        [
	          "C",
	          91.13000000000001,
	          21.73,
	          91.13000000000001,
	          21.67,
	          91.13000000000001,
	          21.63
	        ],
	        [
	          "C",
	          91.145085337781,
	          21.530568918539917,
	          91.145085337781,
	          21.42943108146008,
	          91.13000000000001,
	          21.33
	        ],
	        [
	          "C",
	          91.16939391237624,
	          21.27712364169999,
	          91.20292413269179,
	          21.22012226716355,
	          91.23,
	          21.16
	        ],
	        [
	          "Z"
	        ],
	        [
	          "M",
	          38.3,
	          2.5
	        ],
	        [
	          "L",
	          76.51,
	          2.5
	        ],
	        [
	          "L",
	          87,
	          19
	        ],
	        [
	          "Z"
	        ]
	      ]
	    },
	    {
	      "type": "textbox",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 100,
	      "top": 323,
	      "width": 204.51,
	      "height": 36.16,
	      "fill": "#1d726f",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 2.42,
	      "scaleY": 2.42,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "fontFamily": "NanumGothic",
	      "fontWeight": 1000,
	      "fontSize": 32,
	      "text": "YOUR LOGO",
	      "underline": false,
	      "overline": false,
	      "linethrough": false,
	      "textAlign": "center",
	      "fontStyle": "normal",
	      "lineHeight": 1.16,
	      "textBackgroundColor": "",
	      "charSpacing": 0,
	      "styles": {},
	      "direction": "ltr",
	      "path": null,
	      "pathStartOffset": 0,
	      "pathSide": "left",
	      "pathAlign": "baseline",
	      "minWidth": 20,
	      "splitByGrapheme": false
	    },
	    {
	      "type": "textbox",
	      "version": "5.1.0",
	      "originX": "left",
	      "originY": "top",
	      "left": 98,
	      "top": 416,
	      "width": 503.8,
	      "height": 36.16,
	      "fill": "#3f62a6",
	      "stroke": null,
	      "strokeWidth": 1,
	      "strokeDashArray": null,
	      "strokeLineCap": "butt",
	      "strokeDashOffset": 0,
	      "strokeLineJoin": "miter",
	      "strokeUniform": false,
	      "strokeMiterLimit": 4,
	      "scaleX": 1,
	      "scaleY": 1,
	      "angle": 0,
	      "flipX": false,
	      "flipY": false,
	      "opacity": 1,
	      "shadow": null,
	      "visible": true,
	      "backgroundColor": "",
	      "fillRule": "nonzero",
	      "paintFirst": "fill",
	      "globalCompositeOperation": "source-over",
	      "skewX": 0,
	      "skewY": 0,
	      "fontFamily": "NanumGothic",
	      "fontWeight": "normal",
	      "fontSize": 32,
	      "text": "any slogans you want to write",
	      "underline": false,
	      "overline": false,
	      "linethrough": false,
	      "textAlign": "center",
	      "fontStyle": "normal",
	      "lineHeight": 1.16,
	      "textBackgroundColor": "",
	      "charSpacing": 0,
	      "styles": {},
	      "direction": "ltr",
	      "path": null,
	      "pathStartOffset": 0,
	      "pathSide": "left",
	      "pathAlign": "baseline",
	      "minWidth": 20,
	      "splitByGrapheme": false
	    }
	  ],
	  "background": "#a3d2ca"
	}
];

// --------------------------- js 밑단 --------------------------- //
})();