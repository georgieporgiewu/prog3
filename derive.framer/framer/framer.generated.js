// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["derive/layers.json.js"] = [
  {
    "maskFrame" : null,
    "id" : "C924AD6B-D7E5-45D3-9E3D-1C01902BE3E7",
    "visible" : true,
    "children" : [

    ],
    "image" : {
      "path" : "images\/Cover-C924AD6B-D7E5-45D3-9E3D-1C01902BE3E7.png",
      "frame" : {
        "y" : 0,
        "x" : 0,
        "width" : 640,
        "height" : 1136
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : 0,
      "x" : 0,
      "width" : 640,
      "height" : 1136
    },
    "name" : "Cover"
  },
  {
    "maskFrame" : null,
    "id" : "3A36AD71-84DF-4780-B6D0-D0688152057D",
    "visible" : false,
    "children" : [

    ],
    "image" : {
      "path" : "images\/Home-3A36AD71-84DF-4780-B6D0-D0688152057D.png",
      "frame" : {
        "y" : 0,
        "x" : 0,
        "width" : 640,
        "height" : 1136
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : 0,
      "x" : 0,
      "width" : 640,
      "height" : 1136
    },
    "name" : "Home"
  }
]
window.__imported__ = window.__imported__ || {};
window.__imported__["Home/layers.json.js"] = [
  {
    "maskFrame" : null,
    "id" : "BE140F85-D81F-4792-A96A-B7996AB34D46",
    "visible" : true,
    "children" : [
      {
        "maskFrame" : null,
        "id" : "068B014E-53EA-4A1A-9AD2-158ACBC91AB8",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/Button-068B014E-53EA-4A1A-9AD2-158ACBC91AB8.png",
          "frame" : {
            "y" : 939,
            "x" : 132,
            "width" : 377,
            "height" : 68
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 939,
          "x" : 132,
          "width" : 377,
          "height" : 68
        },
        "name" : "Button"
      },
      {
        "maskFrame" : null,
        "id" : "8F03D130-1792-4031-AF68-93685A59FF9F",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D8-8F03D130-1792-4031-AF68-93685A59FF9F.png",
          "frame" : {
            "y" : 712,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 712,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D8"
      },
      {
        "maskFrame" : null,
        "id" : "37CF8835-9888-481D-AC6C-14F238BAD544",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D7-37CF8835-9888-481D-AC6C-14F238BAD544.png",
          "frame" : {
            "y" : 632,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 632,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D7"
      },
      {
        "maskFrame" : null,
        "id" : "EC90A73B-3D9C-40DD-AE8B-C373C8DCECFD",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D6-EC90A73B-3D9C-40DD-AE8B-C373C8DCECFD.png",
          "frame" : {
            "y" : 552,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 552,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D6"
      },
      {
        "maskFrame" : null,
        "id" : "3708B6A8-31F8-4820-9A56-FA416F18F7BB",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D5-3708B6A8-31F8-4820-9A56-FA416F18F7BB.png",
          "frame" : {
            "y" : 472,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 472,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D5"
      },
      {
        "maskFrame" : null,
        "id" : "888440A8-8421-4C1E-AD14-8676511FEA6B",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D4-888440A8-8421-4C1E-AD14-8676511FEA6B.png",
          "frame" : {
            "y" : 392,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 392,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D4"
      },
      {
        "maskFrame" : null,
        "id" : "37B475FF-54EA-4A2F-9093-58D7D3F62D6C",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D3-37B475FF-54EA-4A2F-9093-58D7D3F62D6C.png",
          "frame" : {
            "y" : 312,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 312,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D3"
      },
      {
        "maskFrame" : null,
        "id" : "88E072DE-9499-4927-8BC9-CD87D1F334B3",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D2-88E072DE-9499-4927-8BC9-CD87D1F334B3.png",
          "frame" : {
            "y" : 232,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 232,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D2"
      },
      {
        "maskFrame" : null,
        "id" : "D74BB460-068F-43BD-9043-3682CE1505A6",
        "visible" : true,
        "children" : [

        ],
        "image" : {
          "path" : "images\/D1-D74BB460-068F-43BD-9043-3682CE1505A6.png",
          "frame" : {
            "y" : 152,
            "x" : 53,
            "width" : 532,
            "height" : 82
          }
        },
        "imageType" : "png",
        "layerFrame" : {
          "y" : 152,
          "x" : 53,
          "width" : 532,
          "height" : 82
        },
        "name" : "D1"
      }
    ],
    "image" : {
      "path" : "images\/Home-BE140F85-D81F-4792-A96A-B7996AB34D46.png",
      "frame" : {
        "y" : 0,
        "x" : 0,
        "width" : 640,
        "height" : 1136
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : 0,
      "x" : 0,
      "width" : 640,
      "height" : 1136
    },
    "name" : "Home"
  }
]
window.__imported__ = window.__imported__ || {};
window.__imported__["test_derive/layers.json.js"] = [
  {
    "maskFrame" : null,
    "id" : "517909C0-6FF3-4BA3-AE9B-A26D05FD200B",
    "visible" : true,
    "children" : [

    ],
    "image" : {
      "path" : "images\/Home-517909C0-6FF3-4BA3-AE9B-A26D05FD200B.png",
      "frame" : {
        "y" : 0,
        "x" : 0,
        "width" : 640,
        "height" : 1136
      }
    },
    "imageType" : "png",
    "layerFrame" : {
      "y" : 0,
      "x" : 0,
      "width" : 640,
      "height" : 1136
    },
    "name" : "Home"
  }
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-5s-gold"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Applications\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();