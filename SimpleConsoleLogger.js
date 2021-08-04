const Color = {
    red: 'red',
    blue: 'blue',
    yellow: 'yellow',
    green: 'green'
}

class Message {
    #message
    Color = {
        red: 'red',
        blue: 'blue',
        yellow: 'yellow',
        green: 'green'
    }
    constructor() {
        this.#message = '';
    }
    /**
     * 
     * @param {String} text 
     * @param {Color} color 
     * @returns {Message}
     */
    logPart(text, color){
        this.#message += getColorCodedMsg(text, color);
        return this;
    }
    /**
     * Return the combined, color coded message
     * 
     * @returns {string}
     */
    #get(){
        return this.#message;
    }
    /** 
     * Write the combined, color coded message directly to console
     */
    log() {
        console.log(this.#get())
    }
}

/**
 * buils Message object
 * @returns {Message}
 */
let newLine = function(){
    return new Message();
}

function getColorCodedMsg(msg, color) {
    switch ( color ) {
        case Color.red : return '\x1b[31m' + msg + '\x1b[0m';
        case Color.blue : return '\x1b[34m' + msg + '\x1b[0m';
        case Color.yellow : return '\x1b[33m' + msg + '\x1b[0m';
        case Color.green : return '\x1b[32m' + msg + '\x1b[0m';
        default : return msg;
    }
}

/**
 * used with test file
 * @param {object} msg 
 * @returns {String}
 */
function getLog(msg) {
    // All action happens here!
    if ( typeof msg == 'string' ) {
        return msg;
    }
    else if ( typeof msg == 'object' ) {
        let result = '';
        if ( 
                (msg.hasOwnProperty('text') && msg.hasOwnProperty('color')) ||
                msg.hasOwnProperty('text')
            ) {
            result += getColorCodedMsg(msg.text, msg.color); 
        };
        return result;
    }
}


module.exports = {
    newLine,
    Color
}