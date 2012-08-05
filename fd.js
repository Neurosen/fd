var fd = { //flash detector
    isAvailable : function() {//checking flash for browsers
        if (typeof navigator.plugins['Shockwave Flash'] != 'undefined') { 
            return true;
        } else {
            if (window.ActiveXObject) { //checking flash for ie
                try {
                    new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                    return true;
                } catch (e) {
                    return false;
                };
            } else {
                return false;
            };
        };
    },
    
    getVersion:function(){
        var version=null;
        if (typeof navigator.plugins['Shockwave Flash'] != 'undefined') {
            var description=navigator.plugins['Shockwave Flash'].description;
            version=description.substring(16,description.length);
        }
        return version;
    }
};