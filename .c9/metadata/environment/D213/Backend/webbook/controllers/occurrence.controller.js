{"filter":false,"title":"occurrence.controller.js","tooltip":"/D213/Backend/webbook/controllers/occurrence.controller.js","undoManager":{"mark":15,"position":15,"stack":[[{"start":{"row":487,"column":27},"end":{"row":488,"column":0},"action":"remove","lines":["",""],"id":96}],[{"start":{"row":511,"column":61},"end":{"row":512,"column":0},"action":"insert","lines":["",""],"id":97},{"start":{"row":512,"column":0},"end":{"row":512,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":512,"column":4},"end":{"row":513,"column":27},"action":"insert","lines":[" const errors = validationResult(req);","    if (errors.isEmpty()) {"],"id":98}],[{"start":{"row":529,"column":7},"end":{"row":530,"column":0},"action":"insert","lines":["",""],"id":99},{"start":{"row":530,"column":0},"end":{"row":530,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":530,"column":4},"end":{"row":533,"column":5},"action":"insert","lines":[" }","    else {","        return res.status(400).json({ errors: errors.array() });","    }"],"id":100},{"start":{"row":530,"column":0},"end":{"row":530,"column":5},"action":"remove","lines":["     "]},{"start":{"row":530,"column":0},"end":{"row":530,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":512,"column":4},"end":{"row":512,"column":5},"action":"remove","lines":[" "],"id":101},{"start":{"row":514,"column":4},"end":{"row":514,"column":8},"action":"insert","lines":["    "]},{"start":{"row":515,"column":0},"end":{"row":515,"column":4},"action":"insert","lines":["    "]},{"start":{"row":516,"column":4},"end":{"row":516,"column":8},"action":"insert","lines":["    "]},{"start":{"row":517,"column":0},"end":{"row":517,"column":4},"action":"insert","lines":["    "]},{"start":{"row":518,"column":4},"end":{"row":518,"column":8},"action":"insert","lines":["    "]},{"start":{"row":519,"column":8},"end":{"row":519,"column":12},"action":"insert","lines":["    "]},{"start":{"row":520,"column":0},"end":{"row":520,"column":4},"action":"insert","lines":["    "]},{"start":{"row":521,"column":0},"end":{"row":521,"column":4},"action":"insert","lines":["    "]},{"start":{"row":522,"column":12},"end":{"row":522,"column":16},"action":"insert","lines":["    "]},{"start":{"row":523,"column":0},"end":{"row":523,"column":4},"action":"insert","lines":["    "]},{"start":{"row":524,"column":8},"end":{"row":524,"column":12},"action":"insert","lines":["    "]},{"start":{"row":525,"column":0},"end":{"row":525,"column":4},"action":"insert","lines":["    "]},{"start":{"row":526,"column":12},"end":{"row":526,"column":16},"action":"insert","lines":["    "]},{"start":{"row":527,"column":0},"end":{"row":527,"column":4},"action":"insert","lines":["    "]},{"start":{"row":528,"column":8},"end":{"row":528,"column":12},"action":"insert","lines":["    "]},{"start":{"row":529,"column":0},"end":{"row":529,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":248,"column":56},"end":{"row":249,"column":0},"action":"insert","lines":["",""],"id":102},{"start":{"row":249,"column":0},"end":{"row":249,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":249,"column":4},"end":{"row":250,"column":27},"action":"insert","lines":["const errors = validationResult(req);","    if (errors.isEmpty()) {"],"id":103}],[{"start":{"row":266,"column":7},"end":{"row":267,"column":0},"action":"insert","lines":["",""],"id":104},{"start":{"row":267,"column":0},"end":{"row":267,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":267,"column":4},"end":{"row":270,"column":5},"action":"insert","lines":["}","    else {","        return res.status(400).json({ errors: errors.array() });","    }"],"id":105}],[{"start":{"row":251,"column":4},"end":{"row":251,"column":8},"action":"insert","lines":["    "],"id":106},{"start":{"row":252,"column":0},"end":{"row":252,"column":4},"action":"insert","lines":["    "]},{"start":{"row":253,"column":4},"end":{"row":253,"column":8},"action":"insert","lines":["    "]},{"start":{"row":254,"column":0},"end":{"row":254,"column":4},"action":"insert","lines":["    "]},{"start":{"row":255,"column":4},"end":{"row":255,"column":8},"action":"insert","lines":["    "]},{"start":{"row":256,"column":8},"end":{"row":256,"column":12},"action":"insert","lines":["    "]},{"start":{"row":257,"column":0},"end":{"row":257,"column":4},"action":"insert","lines":["    "]},{"start":{"row":258,"column":0},"end":{"row":258,"column":4},"action":"insert","lines":["    "]},{"start":{"row":259,"column":12},"end":{"row":259,"column":16},"action":"insert","lines":["    "]},{"start":{"row":260,"column":0},"end":{"row":260,"column":4},"action":"insert","lines":["    "]},{"start":{"row":261,"column":8},"end":{"row":261,"column":12},"action":"insert","lines":["    "]},{"start":{"row":262,"column":0},"end":{"row":262,"column":4},"action":"insert","lines":["    "]},{"start":{"row":263,"column":12},"end":{"row":263,"column":16},"action":"insert","lines":["    "]},{"start":{"row":264,"column":0},"end":{"row":264,"column":4},"action":"insert","lines":["    "]},{"start":{"row":265,"column":8},"end":{"row":265,"column":12},"action":"insert","lines":["    "]},{"start":{"row":266,"column":0},"end":{"row":266,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":210,"column":57},"end":{"row":211,"column":0},"action":"insert","lines":["",""],"id":107},{"start":{"row":211,"column":0},"end":{"row":211,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":211,"column":4},"end":{"row":212,"column":27},"action":"insert","lines":[" const errors = validationResult(req);","    if (errors.isEmpty()) {"],"id":108}],[{"start":{"row":228,"column":7},"end":{"row":229,"column":0},"action":"insert","lines":["",""],"id":109},{"start":{"row":229,"column":0},"end":{"row":229,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":229,"column":4},"end":{"row":232,"column":5},"action":"insert","lines":["}","    else {","        return res.status(400).json({ errors: errors.array() });","    }"],"id":110}],[{"start":{"row":211,"column":4},"end":{"row":211,"column":5},"action":"remove","lines":[" "],"id":111},{"start":{"row":213,"column":4},"end":{"row":213,"column":8},"action":"insert","lines":["    "]},{"start":{"row":214,"column":0},"end":{"row":214,"column":4},"action":"insert","lines":["    "]},{"start":{"row":215,"column":4},"end":{"row":215,"column":8},"action":"insert","lines":["    "]},{"start":{"row":216,"column":0},"end":{"row":216,"column":4},"action":"insert","lines":["    "]},{"start":{"row":217,"column":4},"end":{"row":217,"column":8},"action":"insert","lines":["    "]},{"start":{"row":218,"column":8},"end":{"row":218,"column":12},"action":"insert","lines":["    "]},{"start":{"row":219,"column":0},"end":{"row":219,"column":4},"action":"insert","lines":["    "]},{"start":{"row":220,"column":0},"end":{"row":220,"column":4},"action":"insert","lines":["    "]},{"start":{"row":221,"column":12},"end":{"row":221,"column":16},"action":"insert","lines":["    "]},{"start":{"row":222,"column":0},"end":{"row":222,"column":4},"action":"insert","lines":["    "]},{"start":{"row":223,"column":8},"end":{"row":223,"column":12},"action":"insert","lines":["    "]},{"start":{"row":224,"column":0},"end":{"row":224,"column":4},"action":"insert","lines":["    "]},{"start":{"row":225,"column":12},"end":{"row":225,"column":16},"action":"insert","lines":["    "]},{"start":{"row":226,"column":0},"end":{"row":226,"column":4},"action":"insert","lines":["    "]},{"start":{"row":227,"column":8},"end":{"row":227,"column":12},"action":"insert","lines":["    "]},{"start":{"row":228,"column":0},"end":{"row":228,"column":4},"action":"insert","lines":["    "]}]]},"ace":{"folds":[],"scrolltop":4325.5,"scrollleft":0,"selection":{"start":{"row":235,"column":9},"end":{"row":235,"column":42},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1609706822324,"hash":"57ad3fb2d4d9481830cb9f82b789abeaf7a2f1af"}