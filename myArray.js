/**
 * Created by loki on 2017/6/3.
 */
function MyArray(length) {
    if(typeof length === 'number' && arguments[1] === undefined){
        this.length = length;
        return this;
    }
    this.length = arguments.length;
    for(var i = 0,len = arguments.length;i<len;i++){
        this[i] = arguments[i];
    }
    return this;
}
MyArray.prototype = {
    constructor:MyArray,
    join:function join(glue) {
        var result = '';
        if(glue === undefined){
            glue = ',';
        }
        for(var i=0;i<this.length-1;i++){
            result += this[i] === undefined ?'':this[i];
            result += glue;
        }
        result += this[i] === undefined?'':this[i];
        return result;
    },
    toString:function toString() {
        return this.join();
    },
    push:function push() {
        for(var i = 0,len = arguments.length;i<len;i++){
            this[this.length+i] = arguments[i];
        }
        this.length += arguments.length;
        return this.length;
    },
    pop:function pop() {
        var poped = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return poped;
    }

};




function myString(input) {
    var index = 0;
    this._value = ''+input;
    while(input[index] !== undefined){
        this[index] = input[index];
        index++;
    }
    this.length = index;
}
MyString.prototype ={
    construvtor:MyString,
    valueOf:function valueOf() {
        return this._value;
    },
    toString:function toString() {
        return this.valueOf();
    },
    charAt:function charAt(index) {
        return this[parseInt(index,10)||0];
    },
    concat:function concat() {
        var prim = this.valueOf();
        for(var i = 0;i<arguments.length;i++){
            prim += arguments[i];
        }
    },
    slice:function slice(from,to) {
        var resualt = '';
        original = this.valueOf();
        if(from === undefined){
            return original;
        }
        if(from > this.length){
            return resualt;
        }
        if(from < 0){
            from = this.length+from;
        }
        if(to === undefined || to > this.length){
            to = this.length;
        }
        if(to < 0){
            to = this.length + to;
        }
        for(var i = from;i<to;i++){
            resualt += original[i];
        }
        return resualt;
    },
    split:function split(re) {
        var index = 0,
        resualt = [],
        original = this.valueOf(),
        match,
        pattern = '',
        modifiers = 'g';
        if(re instanceof RegExp){
            pattern = re.source;
            modifiers += re.multiline ? 'm':'';
            modifiers += re.ignoreCase?'i':'';
        }else {
            pattern =re;
        }
        re = RegExp(pattern,modifiers);
        while(match = re.exec(original)){
            resualt.push(this.slice(index,match.index));
            index = match.index + new MyString(match[0]).length;
        }
        resualt.push(this.slice(index));
        return resualt;
    }
};