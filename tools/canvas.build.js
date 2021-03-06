/**
 * usage : node ./r.js -o ./canvas.build.js  
 * @require nodejs
 **/ 
 
 {
    baseUrl: '../client.prod/js/app/',
    paths: {
    	jquery: '../libs/require.jquery/require-jquery',
        underscore: '../libs/mvc/underscore',
	    backbone: '../libs/mvc/backbone',
	    socketio: '../libs/socket.io.min',
	    text: 'text',  
	    domready: '../libs/require.jquery/domready',
	    
	    commonmvc: 'common/mvc',
	    utils: 'common/utils',
	    router: 'modules/canvas/router',
	    
	    /* module [canvas] related */
	    'profile_model': 'modules/canvas/models/profile',
	    'profile_collection': 'modules/canvas/collections/profile',
	    'toolbar_view': 'modules/canvas/views/toolbar',
	    
	    'canvas_model': 'modules/canvas/models/canvas',
	    'canvas_collection': 'modules/canvas/collections/canvas',
	    'canvas_view': 'modules/canvas/views/canvas',
        
        'line_model': 'modules/canvas/models/line',
	    'line_collection': 'modules/canvas/collections/line'
	},
	
	
    
    //If you only intend to optimize a module (and its dependencies), with
    //a single file as the output, you can specify the module options inline,
    //instead of using the 'modules' section above. 'exclude',
    //'excludeShallow', 'include' and 'insertRequire' are all allowed as siblings
    //to name. The name of the optimized file is specified by 'out'.
    name: "router",
    include: [
    	'profile_model',
	    'profile_collection',
	    'toolbar_view',
	    'canvas_model',
	    'canvas_collection',
	    'canvas_view',
        'line_model',
	    'line_collection'
    ],
    exclude:['jquery', 'underscore', 'backbone', 'socketio',  'domready', 'commonmvc', 'utils' ],
    out: "../client.prod/js/app/modules/canvas/router.js"
    
    
    
}