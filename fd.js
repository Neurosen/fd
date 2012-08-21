(function(pl){//pl = navigator.plugins
        fd = { //flash detector
    
        isAvailable : function() {//checking flash for browsers
        
            if ( typeof pl['Shockwave Flash'] !== 'undefined' ) { 
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
        }
})(navigator.plugins);
