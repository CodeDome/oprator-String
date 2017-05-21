/**
 * Created by loki on 2017/5/21.
 */
function MyString(input) {
    //用于记录数组长度
    var index = 0;
    //记录字符串
    this._value = ''+input;
    //用于判断数组是否存在
    while(input[index] !== undefined){
        this[index] = input[index];
        index++;
    }
    //保存数组长度
     this.length = index;
}
MyString.prototype = {
    constructor:MyString,
    valueOf:function valueOf() {
        return this._value;
    },
    toString:function toString() {
        return this._value;
    },
    chartAt:function chartAt(index) {
        return this[parseInt(index,10) || 0];
    },
    concat:function concat() {
        var prim = this.valueOf()+ ' ';
        for(var i =0,len = arguments.length;i<len;i++){
            prim += arguments[i];
        }
        return prim;
    },
    slice:function slice(from,to) {
        var result = '',
            original = this.valueOf();
        if(from === undefined){
            return original;
        }
        if(from < 0){
            from = this.length + from;
        }
        if(from > this.length){
            return '';
        }
        if(to === undefined || to >this.length){
            to = this.length;
        }
        if(to<0){
            to = this.length + to;
        }
        for(var i = from;i<to;i++){
            result += original[i];
        }
        return result;
    },
    split:function split(re) {
        var index = 0,
            result = [],
            orgrinal = this.valueOf(),
            match,
            pattern = '',
            modifiers = 'g';
        if(re instanceof RegExp){
            pattern = re.source;
            modifiers += re.multiline?'m':'';
            modifiers += re.ignoreCase?'i':'';
        }else {
            pattern = re;
        }
       re = RegExp(pattern,modifiers);
        while(match = re.exec(orgrinal)){
            //返回字符位置，它是被搜索字符串中第一个成功匹配的开始位置。只读。
            result.push(this.slice(index,match.index));y7
            index = match.index + new MyString(match[0]).length;
        }
        result.push(this.slice(index));
        return result;
    }
};