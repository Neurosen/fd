var fd = { //flash detector

    isAvailable : function() {//checking flash for browsers
    
        if ( typeof navigator.plugins['Shockwave Flash'] !== 'undefined' ) { 
            return true;
        }
        
        if (window.ActiveXObject) { //checking flash for ie
            try {
                new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                return true;
            } catch (e) {
                return false;
            }
        }
            
        return false;
    },
    
    getVersion : function() {
        
        var version = false,
            description;
            
        if ( typeof navigator.plugins['Shockwave Flash'] !== 'undefined' ) {
            description = navigator.plugins['Shockwave Flash'].description;
            version = description.substring(16, description.length);
        }
        
        return version;
    }
};