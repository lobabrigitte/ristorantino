/* 
 * More info at: http://phpjs.org
 * 
 * This is version: 2.94
 * php.js is copyright 2009 Kevin van Zonneveld.
 * 
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Ricardo F. Santos, Jack,
 * Jonas Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Ates
 * Goral (http://magnetiq.com), Legaev Andrey, Ratheous, Alex, Martijn
 * Wieringa, Nate, lmeyrick (https://sourceforge.net/projects/bcmath-js/),
 * Philippe Baumann, Enrique Gonzalez, Webtoolkit.info
 * (http://www.webtoolkit.info/), Theriault, Ash Searle
 * (http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek, Carlos
 * R. L. Rodrigues (http://www.jsfromhell.com), stag019, pilus,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * Michael Grier, marrtins, d3x, Andrea Giammarchi
 * (http://webreflection.blogspot.com), GeekFG (http://geekfg.blogspot.com),
 * Erkekjetter, Johnny Mast (http://www.phpvrouwen.nl), T.Wild, majak, David,
 * Oleg Eremeev, mdsjack (http://www.mdsjack.bo.it), Breaking Par Consulting
 * Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Mirek Slugen, Martin (http://www.erlenwiese.de/), Public Domain
 * (http://www.json.org/json2.js), Joris, Steven Levithan
 * (http://blog.stevenlevithan.com), Steve Hilder, KELAN, Arpad Ray
 * (mailto:arpad@php.net), T.J. Leahy, Marc Palau, Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * gettimeofday, AJ, Aman Gupta, Felix Geisendoerfer
 * (http://www.debuggable.com/felix), Sakimori, Lars Fischer, Caio Ariede
 * (http://caioariede.com), Alfonso Jimenez (http://www.alfonsojimenez.com),
 * Pellentesque Malesuada, Tyler Akins (http://rumkin.com), gorthaur,
 * Thunder.m, Karol Kowalski, Kankrelune (http://www.webfaktory.info/), Frank
 * Forte, Subhasis Deb, duncan, Gilbert, class_exists, noname, Marco, madipta,
 * 0m3r, David James, Arno, Nathan, Mateusz "loonquawl" Zalega, ReverseSyntax,
 * Scott Cariss, Slawomir Kaniecki, Denny Wardhana, nobbler, sankai, Sanjoy
 * Roy, Douglas Crockford (http://javascript.crockford.com), mktime, marc
 * andreu, ger, john (http://www.jd-tech.net), Ole Vrijenhoek
 * (http://www.nervous.nl/), Steve Clay, Thiago Mata
 * (http://thiagomata.blog.com), Jon Hohle, Linuxworld, lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/this.), Ozh, nord_ua, Pyerre,
 * Soren Hansen, Peter-Paul Koch (http://www.quirksmode.org/js/beat.html),
 * T0bsn, MeEtc (http://yass.meetcweb.com), Brad Touesnard, David Randall,
 * Bryan Elliott, Tim Wiel, XoraX (http://www.xorax.info), djmix, Paul, J A R,
 * Hyam Singer (http://www.impact-computing.com/), kenneth, T. Wild, Raphael
 * (Ao RUDLER), Marc Jansen, Francesco, Lincoln Ramsay, echo is bad, Der Simon
 * (http://innerdom.sourceforge.net/), Eugene Bulkin (http://doubleaw.com/),
 * LH, JB, Bayron Guevara, Cord, Francois, Kristof Coomans (SCK-CEN Belgian
 * Nucleair Research Centre), Pierre-Luc Paour, Martin Pool, Kirk Strobeck,
 * Saulo Vallory, Christoph, Artur Tchernychev, Wagner B. Soares, Valentina De
 * Rosa, Daniel Esteban, Jason Wong (http://carrot.org/), Rick Waldron,
 * Mick@el, Anton Ongson, Simon Willison (http://simonwillison.net), Gabriel
 * Paderni, Marco van Oort, Blues (http://tech.bluesmoon.info/), Luke Godfrey,
 * rezna, Tomasz Wesolowski, Eric Nagel, Pul, Bobby Drake, uestla, Alan C,
 * Yves Sucaet, sowberry, hitwork, Norman "zEh" Fuchs, Ulrich, johnrembo, Nick
 * Callen, ejsanders, Aidan Lister (http://aidanlister.com/), Brian Tafoya
 * (http://www.premasolutions.com/), Philippe Jausions
 * (http://pear.php.net/user/jausions), Orlando, dptr1988, HKM, metjay,
 * strcasecmp, strcmp, Taras Bogach, ChaosNo1, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), Le Torbi, James, Chris,
 * DxGx, Pedro Tainha (http://www.pedrotainha.com), Philipp Lenssen,
 * penutbutterjelly, Greg Frazier, Tod Gentille, Alexander M Beedie,
 * FremyCompany, baris ozdil, FGFEmperor, Atli Þór, 3D-GRAF, jakes, gabriel
 * paderni, Yannoo, Luis Salazar (http://www.freaky-media.com/), Tim de
 * Koning, stensi, vlado houba, Jalal Berrami, date, Matteo, Victor, taith,
 * Robin, Matt Bradley, fearphage (http://http/my.opera.com/fearphage/),
 * Manish, davook, Benjamin Lupton, Russell Walker (http://www.nbill.co.uk/),
 * Garagoth, Andrej Pavlovic, Dino, Jamie Beck (http://www.terabit.ca/), DtTvB
 * (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Christian
 * Doebler, setcookie, YUI Library:
 * http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Andreas,
 * Blues at http://hacks.bluesmoon.info/strftime/strftime.js, Greenseed,
 * mk.keck, Luke Smith (http://lucassmith.name), Rival, Diogo Resende, Allan
 * Jensen (http://www.winternet.no), Howard Yeend, Kheang Hok Chin
 * (http://www.distantia.ca/), Jay Klehr, Leslie Hoare, Ben Bryan, booeyOH,
 * Amir Habibi (http://www.residence-mixte.com/), Cagri Ekin
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 


// Compression: minified


function abs(mixed_number){return Math.abs(mixed_number)||0;}
function acos(arg){return Math.acos(arg);}
function acosh(arg){return Math.log(arg+Math.sqrt(arg*arg-1));}
function addslashes(str){return(str+'').replace(/([\\"'])/g,"\\$1").replace(/\u0000/g,"\\0");}
function array_change_key_case(array){var case_fn,tmp_ar={},argc=arguments.length,argv=arguments,key;if(array instanceof Array){return array;}
if(array instanceof Object){if(argc===1||argv[1]==='CASE_LOWER'||argv[1]===0){case_fn="toLowerCase";}else{case_fn="toUpperCase";}
for(key in array){tmp_ar[key[case_fn]()]=array[key];}
return tmp_ar;}
return false;}
function array_chunk(input,size){for(var x,i=0,c=-1,l=input.length,n=[];i<l;i++){(x=i%size)?n[c][x]=input[i]:n[++c]=[input[i]];}
return n;}
function array_combine(keys,values){var new_array={},keycount=keys&&keys.length,i=0;if(typeof keys!=='object'||typeof values!=='object'||typeof keycount!=='number'||typeof values.length!=='number'||!keycount){return false;}
if(keycount!=values.length){return false;}
for(i=0;i<keycount;i++){new_array[keys[i]]=values[i];}
return new_array;}
function array_count_values(array){var tmp_arr={},key='',t='';var __getType=function(obj){var t=typeof obj;t=t.toLowerCase();if(t=="object"){t="array";}
return t;};var __countValue=function(value){switch(typeof(value)){case"number":if(Math.floor(value)!=value){return;}
case"string":if(value in this){++this[value];}else{this[value]=1;}}};t=__getType(array);if(t=='array'){for(key in array){__countValue.call(tmp_arr,array[key]);}}
return tmp_arr;}
function array_diff(){var arr1=arguments[0],retArr={};var k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<arguments.length;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_assoc(){var arr1=arguments[0],retArr={};var k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<arguments.length;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_key(){var arr1=arguments[0],retArr={};var k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<arguments.length;i++){arr=arguments[i];for(k in arr){if(k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_ukey(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_fill(start_index,num,mixed_val){var key,tmp_arr={};if(!isNaN(start_index)&&!isNaN(num)){for(key=0;key<num;key++){tmp_arr[(key+start_index)]=mixed_val;}}
return tmp_arr;}
function array_fill_keys(keys,value){var retObj={},key='';for(key in keys){retObj[keys[key]]=value;}
return retObj;}
function array_filter(arr,func){var retObj={},k;for(k in arr){if(func(arr[k])){retObj[k]=arr[k];}}
return retObj;}
function array_flip(trans){var key,tmp_ar={};for(key in trans){tmp_ar[trans[key]]=key;}
return tmp_ar;}
function array_intersect(){var arr1=arguments[0],retArr={};var k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){if(i===arguments.length-1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_assoc(){var arr1=arguments[0],retArr={};var k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){if(i===arguments.length-1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_key(){var arr1=arguments[0],retArr={};var k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length;i++){arr=arguments[i];for(k in arr){if(k===k1){if(i===arguments.length-1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){if(i===arguments.length-2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_ukey(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){if(i===arguments.length-2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_key_exists(key,search){if(!search||(search.constructor!==Array&&search.constructor!==Object)){return false;}
return key in search;}
function array_keys(input,search_value,argStrict){var tmp_arr={},strict=!!argStrict,include=true,cnt=0;var key='';for(key in input){include=true;if(search_value!=undefined){if(strict&&input[key]!==search_value){include=false;}else if(input[key]!=search_value){include=false;}}
if(include){tmp_arr[cnt]=key;cnt++;}}
return tmp_arr;}
function array_map(callback){var argc=arguments.length,argv=arguments;var j=argv[1].length,i=0,k=1,m=0;var tmp=[],tmp_ar=[];while(i<j){while(k<argc){tmp[m++]=argv[k++][i];}
m=0;k=1;if(callback){if(typeof callback==='string'){callback=this.window[callback];}
tmp_ar[i++]=callback.apply(null,tmp);}else{tmp_ar[i++]=tmp;}
tmp=[];}
return tmp_ar;}
function array_merge(){var args=Array.prototype.slice.call(arguments);var retObj={},k,j=0,i=0;var retArr;for(i=0,retArr=true;i<args.length;i++){if(!(args[i]instanceof Array)){retArr=false;break;}}
if(retArr){return args;}
var ct=0;for(i=0,ct=0;i<args.length;i++){if(args[i]instanceof Array){for(j=0;j<args[i].length;j++){retObj[ct++]=args[i][j];}}else{for(k in args[i]){if(this.is_int(k)){retObj[ct++]=args[i][k];}else{retObj[k]=args[i][k];}}}}
return retObj;}
function array_merge_recursive(arr1,arr2){var idx='';if((arr1&&(arr1 instanceof Array))&&(arr2&&(arr2 instanceof Array))){for(idx in arr2){arr1.push(arr2[idx]);}}else if((arr1&&(arr1 instanceof Object))&&(arr2&&(arr2 instanceof Object))){for(idx in arr2){if(idx in arr1){if(typeof arr1[idx]=='object'&&typeof arr2=='object'){arr1[idx]=this.array_merge(arr1[idx],arr2[idx]);}else{arr1[idx]=arr2[idx];}}else{arr1[idx]=arr2[idx];}}}
return arr1;}
function array_pad(input,pad_size,pad_value){var pad=[],newArray=[],newLength,i=0;if(input instanceof Array&&!isNaN(pad_size)){newLength=((pad_size<0)?(pad_size*-1):pad_size);if(newLength>input.length){for(i=0;i<(newLength-input.length);i++){newArray[i]=pad_value;}
pad=((pad_size<0)?newArray.concat(input):input.concat(newArray));}else{pad=input;}}
return pad;}
function array_pop(array){var key='',cnt=0;if(array.hasOwnProperty('length')){if(!array.length){return null;}
return array.pop();}else{for(key in array){cnt++;}
if(cnt){delete(array[key]);return array[key];}else{return null;}}}
function array_product(input){var Index=0,product=1;if(input instanceof Array){while(Index<input.length){product*=(!isNaN(input[Index])?input[Index]:0);Index++;}}else{product=null;}
return product;}
function array_push(array){var i,argv=arguments,argc=argv.length;for(i=1;i<argc;i++){array[array.length++]=argv[i];}
return array.length;}
function array_rand(input,num_req){var indexes=[];var ticks=num_req||1;var checkDuplicate=function(input,value){var exist=false,index=0;while(index<input.length){if(input[index]===value){exist=true;break;}
index++;}
return exist;};if(input instanceof Array&&ticks<=input.length){while(true){var rand=Math.floor((Math.random()*input.length));if(indexes.length===ticks){break;}
if(!checkDuplicate(indexes,rand)){indexes.push(rand);}}}else{indexes=null;}
return((ticks==1)?indexes.join():indexes);}
function array_reduce(a_input,callback){var lon=a_input.length;var res=0,i=0;var tmp=[];for(i=0;i<lon;i+=2){tmp[0]=a_input[i];if(a_input[(i+1)]){tmp[1]=a_input[(i+1)];}else{tmp[1]=0;}
res+=callback.apply(null,tmp);tmp=[];}
return res;}
function array_reverse(array,preserve_keys){var arr_len=array.length,newkey=0,tmp_arr={},key='';preserve_keys=!!preserve_keys;for(key in array){newkey=arr_len-key-1;tmp_arr[preserve_keys?key:newkey]=array[key];}
return tmp_arr;}
function array_search(needle,haystack,argStrict){var strict=!!argStrict;var key='';for(key in haystack){if((strict&&haystack[key]===needle)||(!strict&&haystack[key]==needle)){return key;}}
return false;}
function array_shift(array){if(array.length>0){return array.shift();}
return null;}
function array_slice(arr,offst,lgth,preserve_keys){var key='';if(!(arr instanceof Array)||(preserve_keys&&offst!=0)){var lgt=0,newAssoc={};for(key in arr){lgt+=1;newAssoc[key]=arr[key];}
arr=newAssoc;offst=(offst<0)?lgt+offst:offst;lgth=lgth==undefined?lgt:(lgth<0)?lgt+lgth-offst:lgth;var assoc={};var start=false,it=-1,arrlgth=0,no_pk_idx=0;for(key in arr){++it;if(arrlgth>=lgth){break;}
if(it==offst){start=true;}
if(!start){continue;}
++arrlgth;if(this.is_int(key)&&!preserve_keys){assoc[no_pk_idx++]=arr[key];}else{assoc[key]=arr[key];}}
return assoc;}
if(lgth===undefined){return arr.slice(offst);}else if(lgth>=0){return arr.slice(offst,offst+lgth);}else{return arr.slice(offst,lgth);}}
function array_splice(arr,offst,lgth,replacement){var checkToUpIndices=function(arr,ct,key){if(arr[ct]!==undefined){var tmp=ct;ct+=1;if(ct===key){ct+=1;}
ct=checkToUpIndices(arr,ct,key);arr[ct]=arr[tmp];delete arr[tmp];}
return ct;};if(replacement&&!(typeof replacement==='object')){replacement=[replacement];}
if(lgth===undefined){lgth=offst>=0?arr.length-offst:-offst;}else if(lgth<0){lgth=(offst>=0?arr.length-offst:-offst)+lgth;}
if(!(arr instanceof Array)){var lgt=0,ct=-1,rmvd=[],rmvdObj={},repl_ct=-1,int_ct=-1;var returnArr=true,rmvd_ct=0,rmvd_lgth=0,key='';for(key in arr){lgt+=1;}
offst=(offst>=0)?offst:lgt+offst;for(key in arr){ct+=1;if(ct<offst){if(this.is_int(key)){int_ct+=1;if(parseInt(key,10)===int_ct){continue;}
checkToUpIndices(arr,int_ct,key);arr[int_ct]=arr[key];delete arr[key];}
continue;}
if(returnArr&&this.is_int(key)){rmvd.push(arr[key]);rmvdObj[rmvd_ct++]=arr[key];}else{rmvdObj[key]=arr[key];returnArr=false;}
rmvd_lgth+=1;if(replacement&&replacement[++repl_ct]){arr[key]=replacement[repl_ct];}else{delete arr[key];}}
return returnArr?rmvd:rmvdObj;}
if(replacement){replacement.unshift(offst,lgth);return Array.prototype.splice.apply(arr,replacement);}
return arr.splice(offst,lgth);}
function array_sum(array){var key,sum=0;if(typeof array!=='object'){return null;}
for(key in array){sum+=(array[key]*1);}
return sum;}
function array_udiff(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var arr='',i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_assoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],cb0=arguments[arguments.length-2];var k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(cb0 instanceof Array)?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){for(i=1;i<arguments.length-2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_uintersect(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){if(i===arguments.length-2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_assoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1];var k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length-1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0&&k===k1){if(i===arguments.length-2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],cb0=arguments[arguments.length-2];var k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(cb instanceof Array)?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(cb0 instanceof Array)?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arguments.length-2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){if(i===arguments.length-3){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_unique(array){var key='',tmp_arr1={},tmp_arr2={};var val='';tmp_arr1=array;var __array_search=function(needle,haystack){var fkey='';for(fkey in haystack){if((haystack[fkey]+'')===(needle+'')){return fkey;}}
return false;};for(key in tmp_arr1){val=tmp_arr1[key];if(false===__array_search(val,tmp_arr2)){tmp_arr2[key]=val;}
delete tmp_arr1[key];}
return tmp_arr2;}
function array_unshift(array){var argc=arguments.length,argv=arguments,i;for(i=1;i<argc;i++){array.unshift(argv[i]);}
return(array.length);}
function array_values(input){var tmp_arr=[],cnt=0;var key='';for(key in input){tmp_arr[cnt]=input[key];cnt++;}
return tmp_arr;}
function array_walk(array,funcname,userdata){var key;if(typeof array!='object'){return false;}
for(key in array){if(typeof(userdata)!='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function array_walk_recursive(array,funcname,userdata){var key;if(typeof array!='object'){return false;}
for(key in array){if(typeof array[key]=='object'){return this.array_walk_recursive(array[key],funcname,userdata);}
if(typeof(userdata)!='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function arsort(inputArr,sort_flags){var valArr=[],keyArr=[],k,i,ret,sorter,that=this;switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){if(a>b){return 1;}
if(a<b){return-1;}
return 0;};break;}
var bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--){for(j=0;j<=i;j++){ret=sorter(inputArr[j+1],inputArr[j]);if(ret>0){tempValue=inputArr[j];inputArr[j]=inputArr[j+1];inputArr[j+1]=tempValue;tempKeyVal=keyArr[j];keyArr[j]=keyArr[j+1];keyArr[j+1]=tempKeyVal;}}}};for(k in inputArr){valArr.push(inputArr[k]);keyArr.push(k);delete inputArr[k];}
try{bubbleSort(keyArr,valArr);}catch(e){return false;}
for(i=0;i<valArr.length;i++){inputArr[keyArr[i]]=valArr[i];}
return true;}
function asin(arg){return Math.asin(arg);}
function asinh(arg){return Math.log(arg+Math.sqrt(arg*arg+1));}
function asort(inputArr,sort_flags){var valArr=[],keyArr=[],k,i,ret,sorter,that=this;switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){if(a>b){return 1;}
if(a<b){return-1;}
return 0;};break;}
var bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--){for(j=0;j<=i;j++){ret=sorter(inputArr[j+1],inputArr[j]);if(ret<0){tempValue=inputArr[j];inputArr[j]=inputArr[j+1];inputArr[j+1]=tempValue;tempKeyVal=keyArr[j];keyArr[j]=keyArr[j+1];keyArr[j+1]=tempKeyVal;}}}};for(k in inputArr){valArr.push(inputArr[k]);keyArr.push(k);delete inputArr[k];}
try{bubbleSort(keyArr,valArr);}catch(e){return false;}
for(i=0;i<valArr.length;i++){inputArr[keyArr[i]]=valArr[i];}
return true;}
function atan(arg){return Math.atan(arg);}
function atan2(y,x){return Math.atan2(y,x);}
function atanh(arg){return 0.5*Math.log((1+arg)/(1-arg));}
function base64_decode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!data){return data;}
data+='';do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(o1);}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(o1,o2);}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3);}}while(i<data.length);dec=tmp_arr.join('');dec=this.utf8_decode(dec);return dec;}
function base64_encode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!data){return data;}
data=this.utf8_encode(data+'');do{o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}while(i<data.length);enc=tmp_arr.join('');switch(data.length%3){case 1:enc=enc.slice(0,-2)+'==';break;case 2:enc=enc.slice(0,-1)+'=';break;}
return enc;}
function base_convert(number,frombase,tobase){return parseInt(number+'',frombase+0).toString(tobase+0);}
function bin2hex(s){var i,f=0,a=[];s+='';f=s.length;for(i=0;i<f;i++){a[i]=s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");}
return a.join('');}
function bindec(binary_string){binary_string=(binary_string+'').replace(/[^01]/gi,'');return parseInt(binary_string,2);}
function ceil(value){return Math.ceil(value);}
function checkdate(month,day,year){var myDate=new Date();myDate.setFullYear(year,(month-1),day);return month>=1&&month<=12&&year>=1&&year<=32767&&((myDate.getMonth()+1)==month&&day<32);}
function chop(str,charlist){return this.rtrim(str,charlist);}
function chr(codePt){if(codePt>0xFFFF){codePt-=0x10000;return String.fromCharCode(0xD800+(codePt>>10),0xDC00+(codePt&0x3FF));}
else{return String.fromCharCode(codePt);}}
function chunk_split(body,argChunklen,argEnd){var result='',chunklen=argChunklen||76,end=argEnd||'\r\n';if(chunklen<1){return false;}
while(body.length>chunklen){result+=body.substring(0,chunklen)+end;body=body.substring(chunklen);}
return result+body+end;}
function class_exists(cls){var i='';cls=this.window[cls];if(typeof cls!=='function'){return false;}
for(i in cls.prototype){return true;}
for(i in cls){if(i!=='prototype'){return true;}}
if(cls.toSource&&cls.toSource().match(/this\./)){return true;}
return false;}
function compact(){var matrix={},that=this;var process=function(value){var i=0,l=value.length,key_value='';for(i=0;i<l;i++){key_value=value[i];if(key_value instanceof Array){process(key_value);}else{if(typeof that.window[key_value]!=='undefined'){matrix[key_value]=that.window[key_value];}}}
return true;};process(arguments);return matrix;}
function cos(arg){return Math.cos(arg);}
function cosh(arg){return(Math.exp(arg)+Math.exp(-arg))/2;}
function count(mixed_var,mode){var key,cnt=0;if(mixed_var===null){return 0;}else if(mixed_var.constructor!==Array&&mixed_var.constructor!==Object){return 1;}
if(mode==='COUNT_RECURSIVE'){mode=1;}
if(mode!=1){mode=0;}
for(key in mixed_var){cnt++;if(mode==1&&mixed_var[key]&&(mixed_var[key].constructor===Array||mixed_var[key].constructor===Object)){cnt+=this.count(mixed_var[key],1);}}
return cnt;}
function count_chars(str,mode){var histogram={},tmp_arr=[];var key,i,code,strl=0;var argc=arguments.length;var mode_even=0;if(argc==1){mode=0;}
mode_even=(mode&1)==0;if(mode_even){for(i=1;i<256;++i){histogram[i]=0;}}
str+='';strl=str.length;for(i=0;i<strl;++i){code=str.charCodeAt(i);if(code in histogram){++histogram[code];}else{histogram[code]=1;}}
if(mode>0){for(key in histogram){if(histogram[key]==0!=mode_even){delete histogram[key];}}}
if(mode<3){return histogram;}else{for(key in histogram){tmp_arr.push(String.fromCharCode(key));}
return tmp_arr.join("");}}
function crc32(str){str=this.utf8_encode(str);var table="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";var crc=0;var x=0;var y=0;crc=crc^(-1);for(var i=0,iTop=str.length;i<iTop;i++){y=(crc^str.charCodeAt(i))&0xFF;x="0x"+table.substr(y*9,8);crc=(crc>>>8)^x;}
return crc^(-1);}
function date(format,timestamp){var that=this;var jsdate=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='object')?new Date(timestamp):new Date(timestamp*1000));var pad=function(n,c){if((n=n+"").length<c){return new Array(++c-n.length).join("0")+n;}else{return n;}};var _dst=function(t){var dst=0;var jan1=new Date(t.getFullYear(),0,1,0,0,0,0);var june1=new Date(t.getFullYear(),6,1,0,0,0,0);var temp=jan1.toUTCString();var jan2=new Date(temp.slice(0,temp.lastIndexOf(' ')-1));temp=june1.toUTCString();var june2=new Date(temp.slice(0,temp.lastIndexOf(' ')-1));var std_time_offset=(jan1-jan2)/(1000*60*60);var daylight_time_offset=(june1-june2)/(1000*60*60);if(std_time_offset===daylight_time_offset){dst=0;}else{var hemisphere=std_time_offset-daylight_time_offset;if(hemisphere>=0){std_time_offset=daylight_time_offset;}
dst=1;}
return dst;};var ret='';var txt_weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var txt_ordin={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"};var txt_months=["","January","February","March","April","May","June","July","August","September","October","November","December"];var f={d:function(){return pad(f.j(),2);},D:function(){var t=f.l();return t.substr(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_weekdays[f.w()];},N:function(){return f.w()?f.w():7;},S:function(){return txt_ordin[f.j()]?txt_ordin[f.j()]:'th';},w:function(){return jsdate.getDay();},z:function(){return(jsdate-new Date(jsdate.getFullYear()+"/1/1"))/864e5>>0;},W:function(){var a=f.z(),b=364+f.L()-a;var nd2,nd=(new Date(jsdate.getFullYear()+"/1/1").getDay()||7)-1;if(b<=2&&((jsdate.getDay()||7)-1)<=2-b){return 1;}
if(a<=2&&nd>=4&&a>=(6-nd)){nd2=new Date(jsdate.getFullYear()-1+"/12/31");return that.date("W",Math.round(nd2.getTime()/1000));}
var w=(1+(nd<=3?((a+nd)/7):(a-(7-nd))/7)>>0);return(w?w:53);},F:function(){return txt_months[f.n()];},m:function(){return pad(f.n(),2);},M:function(){var t=f.F();return t.substr(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){var n;if((n=jsdate.getMonth()+1)==2){return 28+f.L();}
if(n&1&&n<8||!(n&1)&&n>7){return 31;}
return 30;},L:function(){var y=f.Y();return(!(y&3)&&(y%1e2||!(y%4e2)))?1:0;},o:function(){if(f.n()===12&&f.W()===1){return jsdate.getFullYear()+1;}
if(f.n()===1&&f.W()>=52){return jsdate.getFullYear()-1;}
return jsdate.getFullYear();},Y:function(){return jsdate.getFullYear();},y:function(){return(jsdate.getFullYear()+"").slice(2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var off=(jsdate.getTimezoneOffset()+60)*60;var theSeconds=(jsdate.getHours()*3600)+
(jsdate.getMinutes()*60)+
jsdate.getSeconds()+off;var beat=Math.floor(theSeconds/86.4);if(beat>1000){beat-=1000;}
if(beat<0){beat+=1000;}
if((String(beat)).length==1){beat="00"+beat;}
if((String(beat)).length==2){beat="0"+beat;}
return beat;},g:function(){return jsdate.getHours()%12||12;},G:function(){return jsdate.getHours();},h:function(){return pad(f.g(),2);},H:function(){return pad(jsdate.getHours(),2);},i:function(){return pad(jsdate.getMinutes(),2);},s:function(){return pad(jsdate.getSeconds(),2);},u:function(){return pad(jsdate.getMilliseconds()*1000,6);},e:function(){return'UTC';},I:function(){return _dst(jsdate);},O:function(){var t=pad(Math.abs(jsdate.getTimezoneOffset()/60*100),4);t=(jsdate.getTimezoneOffset()>0)?"-"+t:"+"+t;return t;},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return f.Y()+"-"+f.m()+"-"+f.d()+"T"+f.h()+":"+f.i()+":"+f.s()+f.P();},r:function(){return f.D()+', '+f.d()+' '+f.M()+' '+f.Y()+' '+f.H()+':'+f.i()+':'+f.s()+' '+f.O();},U:function(){return Math.round(jsdate.getTime()/1000);}};return format.replace(/[\\]?([a-zA-Z])/g,function(t,s){if(t!=s){ret=s;}else if(f[s]){ret=f[s]();}else{ret=s;}
return ret;});}
function decbin(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(2);}
function dechex(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(16);}
function decoct(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(8);}
function deg2rad(angle){return(angle/180)*Math.PI;}
function doubleval(mixed_var){return this.floatval(mixed_var);}
function echo(){var arg='',argc=arguments.length,argv=arguments,i=0;var win=this.window;var d=win.document;var ns_xhtml='http://www.w3.org/1999/xhtml';var ns_xul='http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';var holder;var stringToDOM=function(str,parent,ns,container){var extraNSs='';if(ns===ns_xul){extraNSs=' xmlns:html="'+ns_xhtml+'"';}
var stringContainer='<'+container+' xmlns="'+ns+'"'+extraNSs+'>'+str+'</'+container+'>';if(win.DOMImplementationLS&&win.DOMImplementationLS.createLSInput&&win.DOMImplementationLS.createLSParser){var lsInput=DOMImplementationLS.createLSInput();lsInput.stringData=stringContainer;var lsParser=DOMImplementationLS.createLSParser(1,null);return lsParser.parse(lsInput).firstChild;}
else if(win.DOMParser){return new DOMParser().parseFromString(stringContainer,'text/xml').documentElement.firstChild;}
else if(win.ActiveXObject){var d=new ActiveXObject('MSXML2.DOMDocument');d.loadXML(str);return d.documentElement;}
else{if(d.createElementNS&&d.documentElement.namespaceURI&&(d.documentElement.namespaceURI!==null||d.documentElement.nodeName.toLowerCase()!=='html'||(d.contentType&&d.contentType!=='text/html'))){holder=d.createElementNS(ns,container);}
else{holder=d.createElement(container);}
holder.innerHTML=str;while(holder.firstChild){parent.appendChild(holder.firstChild);}
return false;}};var ieFix=function(node){if(node.nodeType===1){var newNode=d.createElement(node.nodeName);var i,len;if(node.attributes&&node.attributes.length>0){for(i=0,len=node.attributes.length;i<len;i++){newNode.setAttribute(node.attributes[i].nodeName,node.getAttribute(node.attributes[i].nodeName));}}
if(node.childNodes&&node.childNodes.length>0){for(i=0,len=node.childNodes.length;i<len;i++){newNode.appendChild(ieFix(node.childNodes[i]));}}
return newNode;}
else{return d.createTextNode(node.nodeValue);}};for(i=0;i<argc;i++){arg=argv[i];if(this.php_js&&this.php_js.ini&&this.php_js.ini['phpjs.echo_embedded_vars']){arg=arg.replace(/(.?)\{\$(.*?)\}/g,function(s,m1,m2){if(m1!=='\\'){return m1+eval(m2);}
else{return s;}});}
if(d.appendChild){if(d.body){if(win.navigator.appName=='Microsoft Internet Explorer'){d.body.appendChild(ieFix(stringToDOM(arg)));}
else{var unappendedLeft=stringToDOM(arg,d.body,ns_xhtml,'div').cloneNode(true);if(unappendedLeft){d.body.appendChild(unappendedLeft);}}}else{d.documentElement.appendChild(stringToDOM(arg,d.documentElement,ns_xul,'description'));}}else if(d.write){d.write(arg);}}}
function end(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var pointers=this.php_js.pointers;if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(!(arr instanceof Array)){var ct=0;for(var k in arr){ct++;var val=arr[k];}
if(ct===0){return false;}
pointers[arrpos+1]=ct-1;return val;}
if(arr.length===0){return false;}
pointers[arrpos+1]=arr.length-1;return arr[pointers[arrpos+1]];}
function exp(arg){return Math.exp(arg);}
function explode(delimiter,string,limit){var emptyArray={0:''};if(arguments.length<2||typeof arguments[0]=='undefined'||typeof arguments[1]=='undefined')
{return null;}
if(delimiter===''||delimiter===false||delimiter===null)
{return false;}
if(typeof delimiter=='function'||typeof delimiter=='object'||typeof string=='function'||typeof string=='object')
{return emptyArray;}
if(delimiter===true){delimiter='1';}
if(!limit){return string.toString().split(delimiter.toString());}else{var splitted=string.toString().split(delimiter.toString());var partA=splitted.splice(0,limit-1);var partB=splitted.join(delimiter.toString());partA.push(partB);return partA;}}
function expm1(x){var ret=0,n=50;var factorial=function factorial(n){if((n===0)||(n===1)){return 1;}
else{var result=(n*factorial(n-1));return result;}};for(var i=1;i<n;i++){ret+=Math.pow(x,i)/factorial(i);}
return ret;}
function floatval(mixed_var){return(parseFloat(mixed_var)||0);}
function floor(value){return Math.floor(value);}
function fmod(x,y){var tmp,tmp2,p=0,pY=0,l=0.0,l2=0.0;tmp=x.toExponential().match(/^.\.?(.*)e(.+)$/);p=parseInt(tmp[2],10)-(tmp[1]+'').length;tmp=y.toExponential().match(/^.\.?(.*)e(.+)$/);pY=parseInt(tmp[2],10)-(tmp[1]+'').length;if(pY>p){p=pY;}
tmp2=(x%y);if(p<-100||p>20){l=Math.round(Math.log(tmp2)/Math.log(10));l2=Math.pow(10,l);return(tmp2/l2).toFixed(l-p)*l2;}else{return parseFloat(tmp2.toFixed(-p));}}
function get_class(obj){if(obj instanceof Object&&!(obj instanceof Array)&&!(obj instanceof Function)&&obj.constructor&&obj!=this.window){var arr=obj.constructor.toString().match(/function\s*(\w+)/);if(arr&&arr.length==2){return arr[1];}}
return false;}
function get_defined_vars(){var i='',arr=[],already={};for(i in this.window){try{if(typeof this.window[i]==='function'){if(!already[i]){already[i]=1;arr.push(i);}}
else if(typeof this.window[i]==='object'){for(var j in this.window[i]){if(typeof this.window[j]==='function'&&this.window[j]&&!already[j]){already[j]=1;arr.push(j);}}}}
catch(e){}}
return arr;}
function get_headers(url,format){var req=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
var tmp,headers,pair,i,j=0;req.open('HEAD',url,false);req.send(null);if(req.readyState<3){return false;}
tmp=req.getAllResponseHeaders();tmp=tmp.split('\n');tmp=this.array_filter(tmp,function(value){return value.substring(1)!=='';});headers=format?{}:[];for(i in tmp){if(format){pair=tmp[i].split(':');headers[pair.splice(0,1)]=pair.join(':').substring(1);}else{headers[j++]=tmp[i];}}
return headers;}
function get_html_translation_table(table,quote_style){var entities={},hash_map={},decimal=0,symbol='';var constMappingTable={},constMappingQuoteStyle={};var useTable={},useQuoteStyle={};constMappingTable[0]='HTML_SPECIALCHARS';constMappingTable[1]='HTML_ENTITIES';constMappingQuoteStyle[0]='ENT_NOQUOTES';constMappingQuoteStyle[2]='ENT_COMPAT';constMappingQuoteStyle[3]='ENT_QUOTES';useTable=!isNaN(table)?constMappingTable[table]:table?table.toUpperCase():'HTML_SPECIALCHARS';useQuoteStyle=!isNaN(quote_style)?constMappingQuoteStyle[quote_style]:quote_style?quote_style.toUpperCase():'ENT_COMPAT';if(useTable!=='HTML_SPECIALCHARS'&&useTable!=='HTML_ENTITIES'){throw new Error("Table: "+useTable+' not supported');}
entities['38']='&amp;';if(useTable==='HTML_ENTITIES'){entities['160']='&nbsp;';entities['161']='&iexcl;';entities['162']='&cent;';entities['163']='&pound;';entities['164']='&curren;';entities['165']='&yen;';entities['166']='&brvbar;';entities['167']='&sect;';entities['168']='&uml;';entities['169']='&copy;';entities['170']='&ordf;';entities['171']='&laquo;';entities['172']='&not;';entities['173']='&shy;';entities['174']='&reg;';entities['175']='&macr;';entities['176']='&deg;';entities['177']='&plusmn;';entities['178']='&sup2;';entities['179']='&sup3;';entities['180']='&acute;';entities['181']='&micro;';entities['182']='&para;';entities['183']='&middot;';entities['184']='&cedil;';entities['185']='&sup1;';entities['186']='&ordm;';entities['187']='&raquo;';entities['188']='&frac14;';entities['189']='&frac12;';entities['190']='&frac34;';entities['191']='&iquest;';entities['192']='&Agrave;';entities['193']='&Aacute;';entities['194']='&Acirc;';entities['195']='&Atilde;';entities['196']='&Auml;';entities['197']='&Aring;';entities['198']='&AElig;';entities['199']='&Ccedil;';entities['200']='&Egrave;';entities['201']='&Eacute;';entities['202']='&Ecirc;';entities['203']='&Euml;';entities['204']='&Igrave;';entities['205']='&Iacute;';entities['206']='&Icirc;';entities['207']='&Iuml;';entities['208']='&ETH;';entities['209']='&Ntilde;';entities['210']='&Ograve;';entities['211']='&Oacute;';entities['212']='&Ocirc;';entities['213']='&Otilde;';entities['214']='&Ouml;';entities['215']='&times;';entities['216']='&Oslash;';entities['217']='&Ugrave;';entities['218']='&Uacute;';entities['219']='&Ucirc;';entities['220']='&Uuml;';entities['221']='&Yacute;';entities['222']='&THORN;';entities['223']='&szlig;';entities['224']='&agrave;';entities['225']='&aacute;';entities['226']='&acirc;';entities['227']='&atilde;';entities['228']='&auml;';entities['229']='&aring;';entities['230']='&aelig;';entities['231']='&ccedil;';entities['232']='&egrave;';entities['233']='&eacute;';entities['234']='&ecirc;';entities['235']='&euml;';entities['236']='&igrave;';entities['237']='&iacute;';entities['238']='&icirc;';entities['239']='&iuml;';entities['240']='&eth;';entities['241']='&ntilde;';entities['242']='&ograve;';entities['243']='&oacute;';entities['244']='&ocirc;';entities['245']='&otilde;';entities['246']='&ouml;';entities['247']='&divide;';entities['248']='&oslash;';entities['249']='&ugrave;';entities['250']='&uacute;';entities['251']='&ucirc;';entities['252']='&uuml;';entities['253']='&yacute;';entities['254']='&thorn;';entities['255']='&yuml;';}
if(useQuoteStyle!=='ENT_NOQUOTES'){entities['34']='&quot;';}
if(useQuoteStyle==='ENT_QUOTES'){entities['39']='&#39;';}
entities['60']='&lt;';entities['62']='&gt;';for(decimal in entities){symbol=String.fromCharCode(decimal);hash_map[symbol]=entities[decimal];}
return hash_map;}
function getdate(timestamp){var _w=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];var _m=['January','February','March','April','May','June','July','August','September','October','November','December'];var d=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='object')?new Date(timestamp):new Date(timestamp*1000));var w=d.getDay();var m=d.getMonth();var y=d.getFullYear();var r={};r.seconds=d.getSeconds();r.minutes=d.getMinutes();r.hours=d.getHours();r.mday=d.getDate();r.wday=w;r.mon=m+1;r.year=y;r.yday=Math.floor((d-(new Date(y,0,1)))/86400000);r.weekday=_w[w];r.month=_m[m];r['0']=parseInt(d.getTime()/1000,10);return r;}
function getrandmax()
{return 2147483647;}
function hexdec(hex_string){hex_string=(hex_string+'').replace(/[^a-f0-9]/gi,'');return parseInt(hex_string,16);}
function html_entity_decode(string,quote_style){var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style))){return false;}
for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(entity).join(symbol);}
tmp_str=tmp_str.split('&#039;').join("'");return tmp_str;}
function htmlentities(string,quote_style){var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style))){return false;}
hash_map["'"]='&#039;';for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(symbol).join(entity);}
return tmp_str;}
function htmlspecialchars(string,quote_style){var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=this.get_html_translation_table('HTML_SPECIALCHARS',quote_style))){return false;}
hash_map["'"]='&#039;';for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(symbol).join(entity);}
return tmp_str;}
function htmlspecialchars_decode(string,quote_style){var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=this.get_html_translation_table('HTML_SPECIALCHARS',quote_style))){return false;}
for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(entity).join(symbol);}
tmp_str=tmp_str.split('&#039;').join("'");return tmp_str;}
function http_build_query(formdata,numeric_prefix,arg_separator){var value,key,tmp=[];var _http_build_query_helper=function(key,val,arg_separator){var k,tmp=[];if(val===true){val="1";}else if(val===false){val="0";}
if(typeof(val)=="array"||typeof(val)=="object"){for(k in val){if(val[k]!==null){tmp.push(_http_build_query_helper(key+"["+k+"]",val[k],arg_separator));}}
return tmp.join(arg_separator);}else if(typeof(val)!="function"){return this.urlencode(key)+"="+this.urlencode(val);}};if(!arg_separator){arg_separator="&";}
for(key in formdata){value=formdata[key];if(numeric_prefix&&!isNaN(key)){key=String(numeric_prefix)+key;}
tmp.push(_http_build_query_helper(key,value,arg_separator));}
return tmp.join(arg_separator);}
function hypot(x,y){return Math.sqrt(x*x+y*y)||0;}
function implode(glue,pieces){return((pieces instanceof Array)?pieces.join(glue):pieces);}
function in_array(needle,haystack,argStrict){var key='',strict=!!argStrict;if(strict){for(key in haystack){if(haystack[key]===needle){return true;}}}else{if(typeof(needle)=='string'){str=haystack.toString();return(str.search(needle)!==false);}
for(key in haystack){if(haystack[key]==needle){return true;}}}
return false;}
function intval(mixed_var,base){var tmp;var type=typeof(mixed_var);if(type==='boolean'){return(mixed_var)?1:0;}else if(type==='string'){tmp=parseInt(mixed_var,base||10);return(isNaN(tmp)||!isFinite(tmp))?0:tmp;}else if(type==='number'&&isFinite(mixed_var)){return Math.floor(mixed_var);}else{return 0;}}
function ip2long(ip_address){var parts=ip_address.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);return parts?parts[1]*16777216+parts[2]*65536+parts[3]*256+parts[4]*1:false;}
function is_bool(mixed_var)
{return(typeof mixed_var==='boolean');}
function is_double(mixed_var){return this.is_float(mixed_var);}
function is_finite(val){var warningType='';if(val===Infinity||val===-Infinity){return false;}
if(typeof val=='object'){warningType=(val instanceof Array?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_finite() expects parameter 1 to be double, '+warningType+' given');}
return true;}
function is_float(mixed_var){return parseFloat(mixed_var*1)!=parseInt(mixed_var*1,10);}
function is_infinite(val){var warningType='';if(val===Infinity||val===-Infinity){return true;}
if(typeof val=='object'){warningType=(val instanceof Array?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_infinite() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_int(mixed_var){if(typeof mixed_var!=='number'){return false;}
if(parseFloat(mixed_var)!=parseInt(mixed_var,10)){return false;}
return true;}
function is_integer(mixed_var){return this.is_int(mixed_var);}
function is_long(mixed_var){return this.is_float(mixed_var);}
function is_nan(val){var warningType='';if(typeof val=='number'&&isNaN(val)){return true;}
if(typeof val=='object'){warningType=(val instanceof Array?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_nan() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_null(mixed_var){return(mixed_var===null);}
function is_numeric(mixed_var){if(mixed_var===''){return false;}
return!isNaN(mixed_var*1);}
function is_real(mixed_var){return this.is_float(mixed_var);}
function is_scalar(mixed_var){return(/boolean|number|string/).test(typeof mixed_var);}
function is_string(mixed_var){return(typeof(mixed_var)=='string');}
function join(glue,pieces){return this.implode(glue,pieces);}
function json_decode(str_json){var json=this.window.JSON;if(typeof json==='object'&&typeof json.parse==='function'){return json.parse(str_json);}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var j;var text=str_json;cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if((/^[\],:{}\s]*$/).test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return j;}
throw new SyntaxError('json_decode');}
function json_encode(mixed_val){var json=this.window.JSON;if(typeof json==='object'&&typeof json.stringify==='function'){return json.stringify(mixed_val);}
var value=mixed_val;var quote=function(string){var escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';};var str=function(key,holder){var gap='';var indent='    ';var i=0;var k='';var v='';var length=0;var mind=gap;var partial=[];var value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}};return str('',{'':value});}
function krsort(array,sort_flags){var tmp_arr={},keys=[],sorter,i,key,that=this;switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(a,b){if(a<b){return 1;}
if(a>b){return-1;}
return 0;};break;}
for(key in array){keys.push(key);}
keys.sort(sorter);for(i=0;i<keys.length;i++){key=keys[i];tmp_arr[key]=array[key];delete array[key];}
for(i in tmp_arr){array[i]=tmp_arr[i];}
return true;}
function ksort(array,sort_flags){var tmp_arr={},keys=[],sorter,i,key,that=this;switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){if(a>b){return 1;}
if(a<b){return-1;}
return 0;};break;}
for(key in array){keys.push(key);}
keys.sort(sorter);for(i=0;i<keys.length;i++){key=keys[i];tmp_arr[key]=array[key];delete array[key];}
for(i in tmp_arr){array[i]=tmp_arr[i];}
return true;}
function lcfirst(str){str+='';var f=str.charAt(0).toLowerCase();return f+str.substr(1);}
function lcg_value(){return Math.random();}
function levenshtein(s1,s2){if(s1==s2){return 0;}
var s1_len=s1.length;var s2_len=s2.length;if(s1_len===0){return s2_len;}
if(s2_len===0){return s1_len;}
var split=false;try{split=!('0')[0];}catch(e){split=true;}
if(split){s1=s1.split('');s2=s2.split('');}
var v0=new Array(s1_len+1);var v1=new Array(s1_len+1);var s1_idx=0,s2_idx=0,cost=0;for(s1_idx=0;s1_idx<s1_len+1;s1_idx++){v0[s1_idx]=s1_idx;}
var char_s1='',char_s2='';for(s2_idx=1;s2_idx<=s2_len;s2_idx++){v1[0]=s2_idx;char_s2=s2[s2_idx-1];for(s1_idx=0;s1_idx<s1_len;s1_idx++){char_s1=s1[s1_idx];cost=(char_s1==char_s2)?0:1;var m_min=v0[s1_idx+1]+1;var b=v1[s1_idx]+1;var c=v0[s1_idx]+cost;if(b<m_min){m_min=b;}
if(c<m_min){m_min=c;}
v1[s1_idx+1]=m_min;}
var v_tmp=v0;v0=v1;v1=v_tmp;}
return v0[s1_len];}
function log(arg,base){if(base===undefined){return Math.log(arg);}else{return Math.log(arg)/Math.log(base);}}
function log10(arg){return Math.log(arg)/Math.LN10;}
function log1p(x){var ret=0,n=50;if(x<=-1){return'-INF';}
if(x<0||x>1){return Math.log(1+x);}
for(var i=1;i<n;i++){if((i%2)===0){ret-=Math.pow(x,i)/i;}
else{ret+=Math.pow(x,i)/i;}}
return ret;}
function long2ip(proper_address){var output=false;if(!isNaN(proper_address)&&(proper_address>=0||proper_address<=4294967295)){output=Math.floor(proper_address/Math.pow(256,3))+'.'+
Math.floor((proper_address%Math.pow(256,3))/Math.pow(256,2))+'.'+
Math.floor(((proper_address%Math.pow(256,3))%Math.pow(256,2))/Math.pow(256,1))+'.'+
Math.floor((((proper_address%Math.pow(256,3))%Math.pow(256,2))%Math.pow(256,1))/Math.pow(256,0));}
return output;}
function ltrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');var re=new RegExp('^['+charlist+']+','g');return(str+'').replace(re,'');}
function max(){var ar,retVal,i=0,n=0;var argv=arguments,argc=argv.length;var _obj2Array=function(obj){if(obj instanceof Array){return obj;}else{var ar=[];for(var i in obj){ar.push(obj[i]);}
return ar;}};var _compare=function(current,next){var i=0,n=0,tmp=0;var nl=0,cl=0;if(current===next){return 0;}else if(typeof current=='object'){if(typeof next=='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}else if(nl<cl){return-1;}else{for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}else if(tmp==-1){return-1;}}
return 0;}}else{return-1;}}else if(typeof next=='object'){return 1;}else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}else{return(current<0?1:-1);}}else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}else{return(next>0?1:-1);}}else{if(next==current){return 0;}else{return(next>current?1:-1);}}};if(argc===0){throw new Error('At least one value should be passed to max()');}else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}else{throw new Error('Wrong parameter count for max()');}
if(ar.length===0){throw new Error('Array must contain at least one element for max()');}}else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==1){retVal=ar[i];}}
return retVal;}
function md5(str){var xl;var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}};var _F=function(x,y,z){return(x&y)|((~x)&z);};var _G=function(x,y,z){return(x&z)|(y&(~z));};var _H=function(x,y,z){return(x^y^z);};var _I=function(x,y,z){return(y^(x|(~z)));};var _FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var convertToWordArray=function(str){var lWordCount;var lMessageLength=str.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=new Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(str.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};var wordToHex=function(lValue){var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;wordToHexValue_temp="0"+lByte.toString(16);wordToHexValue=wordToHexValue+wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);}
return wordToHexValue;};var x=[],k,AA,BB,CC,DD,a,b,c,d,S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21;str=this.utf8_encode(str);x=convertToWordArray(str);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;xl=x.length;for(k=0;k<xl;k+=16){AA=a;BB=b;CC=c;DD=d;a=_FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=_FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=_FF(c,d,a,b,x[k+2],S13,0x242070DB);b=_FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=_FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=_FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=_FF(c,d,a,b,x[k+6],S13,0xA8304613);b=_FF(b,c,d,a,x[k+7],S14,0xFD469501);a=_FF(a,b,c,d,x[k+8],S11,0x698098D8);d=_FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);a=_GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=_GG(d,a,b,c,x[k+6],S22,0xC040B340);c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=_GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=_GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=_GG(d,a,b,c,x[k+10],S22,0x2441453);c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=_GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=_GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=_GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=_GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=_GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=_GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=_HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=_HH(d,a,b,c,x[k+8],S32,0x8771F681);c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=_HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=_HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=_HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=_HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=_HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=_HH(b,c,d,a,x[k+6],S34,0x4881D05);a=_HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=_HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=_II(a,b,c,d,x[k+0],S41,0xF4292244);d=_II(d,a,b,c,x[k+7],S42,0x432AFF97);c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=_II(b,c,d,a,x[k+5],S44,0xFC93A039);a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);d=_II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=_II(b,c,d,a,x[k+1],S44,0x85845DD1);a=_II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=_II(c,d,a,b,x[k+6],S43,0xA3014314);b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=_II(a,b,c,d,x[k+4],S41,0xF7537E82);d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=_II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=_II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}
var temp=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return temp.toLowerCase();}
function method_exists(obj,method){if(typeof obj==='string'){return this.window[obj]&&typeof this.window[obj][method]==='function';}
return typeof obj[method]==='function';}
function microtime(get_as_float){var now=new Date().getTime()/1000;var s=parseInt(now,10);return(get_as_float)?now:(Math.round((now-s)*1000)/1000)+' '+s;}
function min(){var ar,retVal,i=0,n=0;var argv=arguments,argc=argv.length;var _obj2Array=function(obj){if(obj instanceof Array){return obj;}else{var ar=[];for(var i in obj){ar.push(obj[i]);}
return ar;}};var _compare=function(current,next){var i=0,n=0,tmp=0;var nl=0,cl=0;if(current===next){return 0;}else if(typeof current=='object'){if(typeof next=='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}else if(nl<cl){return-1;}else{for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}else if(tmp==-1){return-1;}}
return 0;}}else{return-1;}}else if(typeof next=='object'){return 1;}else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}else{return(current<0?1:-1);}}else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}else{return(next>0?1:-1);}}else{if(next==current){return 0;}else{return(next>current?1:-1);}}};if(argc===0){throw new Error('At least one value should be passed to min()');}else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}else{throw new Error('Wrong parameter count for min()');}
if(ar.length===0){throw new Error('Array must contain at least one element for min()');}}else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==-1){retVal=ar[i];}}
return retVal;}
function mktime(){var no=0,i=0,ma=0,mb=0,d=new Date(),dn=new Date(),argv=arguments,argc=argv.length;var dateManip={0:function(tt){return d.setHours(tt);},1:function(tt){return d.setMinutes(tt);},2:function(tt){var set=d.setSeconds(tt);mb=d.getDate()-dn.getDate();d.setDate(1);return set;},3:function(tt){var set=d.setMonth(parseInt(tt,10)-1);ma=d.getFullYear()-dn.getFullYear();return set;},4:function(tt){return d.setDate(tt+mb);},5:function(tt){if(tt>=0&&tt<=69){tt+=2000;}
else if(tt>=70&&tt<=100){tt+=1900;}
return d.setFullYear(tt+ma);}};for(i=0;i<argc;i++){no=parseInt(argv[i]*1,10);if(isNaN(no)){return false;}else{if(!dateManip[i](no)){return false;}}}
for(i=argc;i<6;i++){switch(i){case 0:no=dn.getHours();break;case 1:no=dn.getMinutes();break;case 2:no=dn.getSeconds();break;case 3:no=dn.getMonth()+1;break;case 4:no=dn.getDate();break;case 5:no=dn.getFullYear();break;}
dateManip[i](no);}
return Math.floor(d.getTime()/1000);}
function mt_getrandmax()
{return 2147483647;}
function mt_rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function natcasesort(inputArr){var valArr=[],keyArr=[],k,i,ret,that=this;var bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--){for(j=0;j<=i;j++){ret=that.strnatcasecmp(inputArr[j+1],inputArr[j]);if(ret<0){tempValue=inputArr[j];inputArr[j]=inputArr[j+1];inputArr[j+1]=tempValue;tempKeyVal=keyArr[j];keyArr[j]=keyArr[j+1];keyArr[j+1]=tempKeyVal;}}}};for(k in inputArr){valArr.push(inputArr[k]);keyArr.push(k);delete inputArr[k];}
try{bubbleSort(keyArr,valArr);}catch(e){return false;}
for(i=0;i<valArr.length;i++){inputArr[keyArr[i]]=valArr[i];}
return true;}
function natsort(inputArr){var valArr=[],keyArr=[],k,i,ret,that=this;var bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--){for(j=0;j<=i;j++){ret=that.strnatcmp(inputArr[j+1],inputArr[j]);if(ret<0){tempValue=inputArr[j];inputArr[j]=inputArr[j+1];inputArr[j+1]=tempValue;tempKeyVal=keyArr[j];keyArr[j]=keyArr[j+1];keyArr[j+1]=tempKeyVal;}}}};for(k in inputArr){valArr.push(inputArr[k]);keyArr.push(k);delete inputArr[k];}
try{bubbleSort(keyArr,valArr);}catch(e){return false;}
for(i=0;i<valArr.length;i++){inputArr[keyArr[i]]=valArr[i];}
return true;}
function nl2br(str,is_xhtml){var breakTag='';breakTag='<br />';if(typeof is_xhtml!='undefined'&&!is_xhtml){breakTag='<br>';}
return(str+'').replace(/([^>]?)\n/g,'$1'+breakTag+'\n');}
function number_format(number,decimals,dec_point,thousands_sep){var n=number,prec=decimals;var toFixedFix=function(n,prec){var k=Math.pow(10,prec);return(Math.round(n*k)/k).toString();};n=!isFinite(+n)?0:+n;prec=!isFinite(+prec)?0:Math.abs(prec);var sep=(typeof thousands_sep==='undefined')?',':thousands_sep;var dec=(typeof dec_point==='undefined')?'.':dec_point;var s=(prec>0)?toFixedFix(n,prec):toFixedFix(Math.round(n),prec);var abs=toFixedFix(Math.abs(n),prec);var _,i;if(abs>=1000){_=abs.split(/\D/);i=_[0].length%3||3;_[0]=s.slice(0,i+(n<0))+
_[0].slice(i).replace(/(\d{3})/g,sep+'$1');s=_.join(dec);}else{s=s.replace('.',dec);}
var decPos=s.indexOf(dec);if(prec>=1&&decPos!==-1&&(s.length-decPos-1)<prec){s+=new Array(prec-(s.length-decPos-1)).join(0)+'0';}
else if(prec>=1&&decPos===-1){s+=dec+new Array(prec).join(0)+'0';}
return s;}
function octdec(oct_string){oct_string=(oct_string+'').replace(/[^0-7]/gi,'');return parseInt(oct_string,8);}
function ord(string){var str=string+'';var code=str.charCodeAt(0);if(0xD800<=code&&code<=0xDBFF){var hi=code;if(str.length===1){return code;}
var low=str.charCodeAt(1);if(!low){}
return((hi-0xD800)*0x400)+(low-0xDC00)+0x10000;}
if(0xDC00<=code&&code<=0xDFFF){return code;}
return code;}
function parse_str(str,array){var glue1='=',glue2='&',array2=String(str).split(glue2),i,j,chr,tmp,key,value,bracket,keys,evalStr,that=this,fixStr=function(str){return that.urldecode(str).replace(/([\\"'])/g,'\\$1').replace(/\n/g,'\\n').replace(/\r/g,'\\r');};if(!array){array=this.window;}
for(i=0;i<array2.length;i++){tmp=array2[i].split(glue1);if(tmp.length<2){tmp=[tmp,''];}
key=fixStr(tmp[0]);value=fixStr(tmp[1]);while(key.charAt(0)===' '){key=key.substr(1);}
if(key.indexOf('\0')!==-1){key=key.substr(0,key.indexOf('\0'));}
if(key&&key.charAt(0)!=='['){keys=[];bracket=0;for(j=0;j<key.length;j++){if(key.charAt(j)==='['&&!bracket){bracket=j+1;}
else if(key.charAt(j)===']'){if(bracket){if(!keys.length){keys.push(key.substr(0,bracket-1));}
keys.push(key.substr(bracket,j-bracket));bracket=0;if(key.charAt(j+1)!=='['){break;}}}}
if(!keys.length){keys=[key];}
for(j=0;j<keys[0].length;j++){chr=keys[0].charAt(j);if(chr===' '||chr==='.'||chr==='['){keys[0]=keys[0].substr(0,j)+'_'+keys[0].substr(j+1);}
if(chr==='['){break;}}
evalStr='array';for(j=0;j<keys.length;j++){key=keys[j];if((key!==''&&key!==' ')||j===0){key="'"+key+"'";}
else{key=eval(evalStr+'.push([]);')-1;}
evalStr+='['+key+']';if(j!==keys.length-1&&eval('typeof '+evalStr)==='undefined'){eval(evalStr+' = [];');}}
evalStr+=" = '"+value+"';\n";eval(evalStr);}}}
function parse_url(str,component){var o={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var m=o.parser[o.strictMode?"strict":"loose"].exec(str),uri={},i=14;while(i--){uri[o.key[i]]=m[i]||"";}
switch(component){case'PHP_URL_SCHEME':return uri.protocol;case'PHP_URL_HOST':return uri.host;case'PHP_URL_PORT':return uri.port;case'PHP_URL_USER':return uri.user;case'PHP_URL_PASS':return uri.password;case'PHP_URL_PATH':return uri.path;case'PHP_URL_QUERY':return uri.query;case'PHP_URL_FRAGMENT':return uri.anchor;default:var retArr={};if(uri.protocol!==''){retArr.scheme=uri.protocol;}
if(uri.host!==''){retArr.host=uri.host;}
if(uri.port!==''){retArr.port=uri.port;}
if(uri.user!==''){retArr.user=uri.user;}
if(uri.password!==''){retArr.pass=uri.password;}
if(uri.path!==''){retArr.path=uri.path;}
if(uri.query!==''){retArr.query=uri.query;}
if(uri.anchor!==''){retArr.fragment=uri.anchor;}
return retArr;}}
function pi(){return Math.PI;}
function pow(base,exp){return Math.pow(base,exp);}
function preg_grep(pattern,input,flags){var p='',retObj={};var invert=flags==='PREG_GREP_INVERT'?true:false;if(typeof pattern==='string'){pattern=eval(pattern);}
if(invert){for(p in input){if(!pattern.test(input[p])){retObj[p]=input[p];}}}else{for(p in input){if(pattern.test(input[p])){retObj[p]=input[p];}}}
return retObj;}
function preg_quote(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g,"\\$1");}
function print_r(array,return_val){var output="",pad_char=" ",pad_val=4,d=this.window.document;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var repeat_char=function(len,pad_char){var str="";for(var i=0;i<len;i++){str+=pad_char;}
return str;};var formatArray=function(obj,cur_depth,pad_val,pad_char){if(cur_depth>0){cur_depth++;}
var base_pad=repeat_char(pad_val*cur_depth,pad_char);var thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char);var str="";if(typeof obj==='object'&&obj!==null&&obj.constructor&&getFuncName(obj.constructor)!=='PHPJS_Resource'){str+="Array\n"+base_pad+"(\n";for(var key in obj){if(obj[key]instanceof Array){str+=thick_pad+"["+key+"] => "+formatArray(obj[key],cur_depth+1,pad_val,pad_char);}else{str+=thick_pad+"["+key+"] => "+obj[key]+"\n";}}
str+=base_pad+")\n";}else if(obj===null||obj===undefined){str='';}else{str=obj.toString();}
return str;};output=formatArray(array,0,pad_val,pad_char);if(return_val!==true){if(d.body){this.echo(output);}
else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}
catch(e){this.echo(output);}}
return true;}else{return output;}}
function printf(){var body,elmt,d=this.window.document;var ret='';var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,arguments);elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function property_exists(cls,prop){cls=(typeof cls==='string')?this.window[cls]:cls;if(typeof cls==='function'&&cls.toSource&&cls.toSource().match(new RegExp('this\\.'+prop+'\\s'))){return true;}
return(cls[prop]!==undefined&&typeof cls[prop]!=='function')||(cls.prototype!==undefined&&cls.prototype[prop]!==undefined&&typeof cls.prototype[prop]!=='function')||(cls.constructor&&cls.constructor[prop]!==undefined&&typeof cls.constructor[prop]!=='function');}
function quotemeta(str){return(str+'').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g,'\\$1');}
function rad2deg(angle){return(angle/Math.PI)*180;}
function rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function range(low,high,step){var matrix=[];var inival,endval,plus;var walker=step||1;var chars=false;if(!isNaN(low)&&!isNaN(high)){inival=low;endval=high;}else if(isNaN(low)&&isNaN(high)){chars=true;inival=low.charCodeAt(0);endval=high.charCodeAt(0);}else{inival=(isNaN(low)?0:low);endval=(isNaN(high)?0:high);}
plus=((inival>endval)?false:true);if(plus){while(inival<=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival+=walker;}}else{while(inival>=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival-=walker;}}
return matrix;}
function rawurldecode(str){var hash_map={},ret=str.toString(),unicodeStr='',hexEscStr='';var replacer=function(search,replace,str){var tmp_arr=[];tmp_arr=str.split(search);return tmp_arr.join(replace);};hash_map["'"]='%27';hash_map['(']='%28';hash_map[')']='%29';hash_map['*']='%2A';hash_map['~']='%7E';hash_map['!']='%21';for(unicodeStr in hash_map){hexEscStr=hash_map[unicodeStr];ret=replacer(hexEscStr,unicodeStr,ret);}
ret=ret.replace(/%([a-fA-F][0-9a-fA-F])/g,function(all,hex){return String.fromCharCode('0x'+hex);});ret=decodeURIComponent(ret);return ret;}
function rawurlencode(str){var hexStr=function(dec){return'%'+(dec<16?'0':'')+dec.toString(16).toUpperCase();};var ret='',unreserved=/[\w.~-]/;str=(str+'').toString();for(var i=0,dl=str.length;i<dl;i++){var ch=str.charAt(i);if(unreserved.test(ch)){ret+=ch;}
else{var code=str.charCodeAt(i);if(0xD800<=code&&code<=0xDBFF){ret+=((code-0xD800)*0x400)+(str.charCodeAt(i+1)-0xDC00)+0x10000;i++;}
else if(code<128){ret+=hexStr(code);}
else if(code>=128&&code<2048){ret+=hexStr((code>>6)|0xC0);ret+=hexStr((code&0x3F)|0x80);}
else if(code>=2048){ret+=hexStr((code>>12)|0xE0);ret+=hexStr(((code>>6)&0x3F)|0x80);ret+=hexStr((code&0x3F)|0x80);}}}
return ret;}
function reset(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var pointers=this.php_js.pointers;if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(!(arr instanceof Array)){for(var k in arr){if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}else{pointers[arrpos+1]=0;}
return arr[k];}
return false;}
if(arr.length===0){return false;}
pointers[arrpos+1]=0;return arr[pointers[arrpos+1]];}
function round(val,precision,mode){var retVal=0,v='',integer='',decimal='',decp=0,negative=false;var _round_half_oe=function(dtR,dtLa,even){if(even===true){if(dtLa==50){if((dtR%2)===1){if(dtLa>=5){dtR+=1;}else{dtR-=1;}}}else if(dtLa>=5){dtR+=1;}}else{if(dtLa==5){if((dtR%2)===0){if(dtLa>=5){dtR+=1;}else{dtR-=1;}}}else if(dtLa>=5){dtR+=1;}}
return dtR;};var _round_half_ud=function(dtR,dtLa,up){if(up===true){if(dtLa>=5){dtR+=1;}}else{if(dtLa>5){dtR+=1;}}
return dtR;};var _round_half=function(val,decplaces,mode){var v=val.toString(),vlen=0,vlenDif=0;var decp=v.indexOf('.');var digitToRound=0,digitToLookAt=0;var integer='',decimal='';var round=null,bool=false;switch(mode){case'up':bool=true;case'down':round=_round_half_ud;break;case'even':bool=true;case'odd':round=_round_half_oe;break;}
if(decplaces<0){vlen=v.length;decplaces=vlen+decplaces;digitToLookAt=Number(v.charAt(decplaces));digitToRound=Number(v.charAt(decplaces-1));digitToRound=round(digitToRound,digitToLookAt,bool);v=v.slice(0,decplaces-1);vlenDif=vlen-v.length-1;if(digitToRound==10){v=String(Number(v)+1)+"0";}else{v+=digitToRound;}
v=Number(v)*(Math.pow(10,vlenDif));}else if(decplaces>0){integer=v.slice(0,decp);decimal=v.slice(decp+1);digitToLookAt=Number(decimal.charAt(decplaces));digitToRound=Number(decimal.charAt(decplaces-1));digitToRound=round(digitToRound,digitToLookAt,bool);decimal=decimal.slice(0,decplaces-1);if(digitToRound==10){v=Number(integer+'.'+decimal)+(1*(Math.pow(10,(0-decimal.length))));}else{v=Number(integer+'.'+decimal+digitToRound);}}else{integer=v.slice(0,decp);decimal=v.slice(decp+1);digitToLookAt=Number(decimal.charAt(decplaces));digitToRound=Number(integer.charAt(integer.length-1));digitToRound=round(digitToRound,digitToLookAt,bool);decimal='0';integer=integer.slice(0,integer.length-1);if(digitToRound==10){v=Number(integer)+1;}else{v=Number(integer+digitToRound);}}
return v;};if(typeof precision=='undefined'){precision=0;}
if(typeof mode=='undefined'){mode='PHP_ROUND_HALF_UP';}
if(val<0){negative=true;}else{negative=false;}
v=Math.abs(val).toString();decp=v.indexOf('.');if((decp==-1)&&(precision>=0)){return val;}else{if(decp==-1){integer=v;decimal='0';}else{integer=v.slice(0,decp);if(precision>=0){decimal=v.substr(decp+1,precision+1);}else{decimal='0';}}
if((precision>0)&&(precision>=decimal.length)){return val;}else if((precision<0)&&(Math.abs(precision)>=integer.length)){return 0;}
val=Number(integer+'.'+decimal);}
switch(mode){case 0:case'PHP_ROUND_HALF_UP':retVal=_round_half(val,precision,'up');break;case 1:case'PHP_ROUND_HALF_DOWN':retVal=_round_half(val,precision,'down');break;case 2:case'PHP_ROUND_HALF_EVEN':retVal=_round_half(val,precision,'even');break;case 3:case'PHP_ROUND_HALF_ODD':retVal=_round_half(val,precision,'odd');break;}
if(negative){return 0-retVal;}else{return retVal;}}
function rsort(inputArr,sort_flags){var valArr=[],k='',i=0,sorter=false,that=this;for(k in inputArr){valArr.push(inputArr[k]);delete inputArr[k];}
switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(a,b){if(a<b){return 1;}
if(a>b){return-1;}
return 0;};break;}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){inputArr[i]=valArr[i];}
return true;}
function rtrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');var re=new RegExp('['+charlist+']+$','g');return(str+'').replace(re,'');}
function serialize(mixed_value){var _getType=function(inp){var type=typeof inp,match;var key;if(type=='object'&&!inp){return'null';}
if(type=="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(key in types){if(cons==types[key]){type=types[key];break;}}}
return type;};var type=_getType(mixed_value);var val,ktype='';switch(type){case"function":val="";break;case"boolean":val="b:"+(mixed_value?"1":"0");break;case"number":val=(Math.round(mixed_value)==mixed_value?"i":"d")+":"+mixed_value;break;case"string":mixed_value=this.utf8_encode(mixed_value);val="s:"+encodeURIComponent(mixed_value).replace(/%../g,'x').length+":\""+mixed_value+"\"";break;case"array":case"object":val="a";var count=0;var vals="";var okey;var key;for(key in mixed_value){ktype=_getType(mixed_value[key]);if(ktype=="function"){continue;}
okey=(key.match(/^[0-9]+$/)?parseInt(key,10):key);vals+=this.serialize(okey)+
this.serialize(mixed_value[key]);count++;}
val+=":"+count+":{"+vals+"}";break;case"undefined":default:val="N";break;}
if(type!="object"&&type!="array"){val+=";";}
return val;}
function setcookie(name,value,expires,path,domain,secure){return this.setrawcookie(name,encodeURIComponent(value),expires,path,domain,secure);}
function setrawcookie(name,value,expires,path,domain,secure){if(expires instanceof Date){expires=expires.toGMTString();}else if(typeof(expires)=='number'){expires=(new Date(+(new Date())+expires*1e3)).toGMTString();}
var r=[name+"="+value],s={},i='';s={expires:expires,path:path,domain:domain};for(i in s){s[i]&&r.push(i+"="+s[i]);}
return secure&&r.push("secure"),this.window.document.cookie=r.join(";"),true;}
function settype(vr,type){var is_array=function(arr){return typeof arr==='object'&&typeof arr.length==='number'&&!(arr.propertyIsEnumerable('length'))&&typeof arr.splice==='function';};var v,mtch,i,obj;v=this[vr]?this[vr]:vr;try{switch(type){case'boolean':if(is_array(v)&&v.length===0){this[vr]=false;}
else if(v==='0'){this[vr]=false;}
else if(typeof v==='object'&&!is_array(v)){var lgth=false;for(i in v){lgth=true;}
this[vr]=lgth;}
else{this[vr]=!!v;}
break;case'integer':if(typeof v==='number'){this[vr]=parseInt(v,10);}
else if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+)/);if(!mtch){this[vr]=0;}
else{this[vr]=parseInt(v,10);}}
else if(v===true){this[vr]=1;}
else if(v===false||v===null){this[vr]=0;}
else if(is_array(v)&&v.length===0){this[vr]=0;}
else if(typeof v==='object'){this[vr]=1;}
break;case'float':if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/);if(!mtch){this[vr]=0;}
else{this[vr]=parseFloat(v,10);}}
else if(v===true){this[vr]=1;}
else if(v===false||v===null){this[vr]=0;}
else if(is_array(v)&&v.length===0){this[vr]=0;}
else if(typeof v==='object'){this[vr]=1;}
break;case'string':if(v===null||v===false){this[vr]='';}
else if(is_array(v)){this[vr]='Array';}
else if(typeof v==='object'){this[vr]='Object';}
else if(v===true){this[vr]='1';}
else{this[vr]+='';}
break;case'array':if(v===null){this[vr]=[];}
else if(typeof v!=='object'){this[vr]=[v];}
break;case'object':if(v===null){this[vr]={};}
else if(is_array(v)){for(i=0,obj={};i<v.length;i++){obj[i]=v;}
this[vr]=obj;}
else if(typeof v!=='object'){this[vr]={scalar:v};}
break;case'null':delete this[vr];break;}
return true;}catch(e){return false;}}
function sha1(str){var rotate_left=function(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;};var cvt_hex=function(val){var str="";var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);}
return str;};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;str=this.utf8_encode(str);var str_len=str.length;var word_array=[];for(i=0;i<str_len-3;i+=4){j=str.charCodeAt(i)<<24|str.charCodeAt(i+1)<<16|str.charCodeAt(i+2)<<8|str.charCodeAt(i+3);word_array.push(j);}
switch(str_len%4){case 0:i=0x080000000;break;case 1:i=str.charCodeAt(str_len-1)<<24|0x0800000;break;case 2:i=str.charCodeAt(str_len-2)<<24|str.charCodeAt(str_len-1)<<16|0x08000;break;case 3:i=str.charCodeAt(str_len-3)<<24|str.charCodeAt(str_len-2)<<16|str.charCodeAt(str_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length%16)!=14){word_array.push(0);}
word_array.push(str_len>>>29);word_array.push((str_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++){W[i]=word_array[blockstart+i];}
for(i=16;i<=79;i++){W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);}
A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}
function shuffle(inputArr){var valArr=[];var k='',i=0;for(k in inputArr){valArr.push(inputArr[k]);delete inputArr[k];}
valArr.sort(function(){return 0.5-Math.random();});for(i=0;i<valArr.length;i++){inputArr[i]=valArr[i];}
return true;}
function sin(arg){return Math.sin(arg);}
function sinh(arg){return(Math.exp(arg)-Math.exp(-arg))/2;}
function sizeof(mixed_var,mode){return this.count(mixed_var,mode);}
function sort(inputArr,sort_flags){var valArr=[],keyArr=[];var k='',i=0,sorter=false,that=this;for(k in inputArr){valArr.push(inputArr[k]);delete inputArr[k];}
switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){if(a>b){return 1;}
if(a<b){return-1;}
return 0;};break;}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){inputArr[i]=valArr[i];}
return true;}
function soundex(str){var s='';var i,j,l,p=isNaN(p)?4:p>10?10:p<4?4:p;var m={BFPV:1,CGJKQSXZ:2,DT:3,L:4,MN:5,R:6};var r=(s=(str+'').toUpperCase().replace(/[^A-Z]/g,"").split("")).splice(0,1);var sl=0;sl=s.length;for(i=-1,l=sl;++i<l;){for(j in m){if(j.indexOf(s[i])+1&&r[r.length-1]!=m[j]&&r.push(m[j])){break;}}}
return r.length>p&&(r.length=p),r.join("")+(new Array(p-r.length+1)).join("0");}
function split(delimiter,string){return this.explode(delimiter,string);}
function sprintf(){var regex=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;var a=arguments,i=0,format=a[i++];var pad=function(str,len,chr,leftJustify){if(!chr){chr=' ';}
var padding=(str.length>=len)?'':Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str;};var justify=function(value,prefix,leftJustify,minWidth,zeroPad,customPadChar){var diff=minWidth-value.length;if(diff>0){if(leftJustify||!zeroPad){value=pad(value,minWidth,customPadChar,leftJustify);}else{value=value.slice(0,prefix.length)+pad('',diff,'0',true)+value.slice(prefix.length);}}
return value;};var formatBaseX=function(value,base,prefix,leftJustify,minWidth,precision,zeroPad){var number=value>>>0;prefix=prefix&&number&&{'2':'0b','8':'0','16':'0x'}[base]||'';value=prefix+pad(number.toString(base),precision||0,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);};var formatString=function(value,leftJustify,minWidth,precision,zeroPad,customPadChar){if(precision!=null){value=value.slice(0,precision);}
return justify(value,'',leftJustify,minWidth,zeroPad,customPadChar);};var doFormat=function(substring,valueIndex,flags,minWidth,_,precision,type){var number;var prefix;var method;var textTransform;var value;if(substring=='%%'){return'%';}
var leftJustify=false,positivePrefix='',zeroPad=false,prefixBaseX=false,customPadChar=' ';var flagsl=flags.length;for(var j=0;flags&&j<flagsl;j++){switch(flags.charAt(j)){case' ':positivePrefix=' ';break;case'+':positivePrefix='+';break;case'-':leftJustify=true;break;case"'":customPadChar=flags.charAt(j+1);break;case'0':zeroPad=true;break;case'#':prefixBaseX=true;break;}}
if(!minWidth){minWidth=0;}else if(minWidth=='*'){minWidth=+a[i++];}else if(minWidth.charAt(0)=='*'){minWidth=+a[minWidth.slice(1,-1)];}else{minWidth=+minWidth;}
if(minWidth<0){minWidth=-minWidth;leftJustify=true;}
if(!isFinite(minWidth)){throw new Error('sprintf: (minimum-)width must be finite');}
if(!precision){precision='fFeE'.indexOf(type)>-1?6:(type=='d')?0:undefined;}else if(precision=='*'){precision=+a[i++];}else if(precision.charAt(0)=='*'){precision=+a[precision.slice(1,-1)];}else{precision=+precision;}
value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++];switch(type){case's':return formatString(String(value),leftJustify,minWidth,precision,zeroPad,customPadChar);case'c':return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad);case'b':return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'o':return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'x':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'X':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad).toUpperCase();case'u':return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'i':case'd':number=parseInt(+value,10);prefix=number<0?'-':positivePrefix;value=prefix+pad(String(Math.abs(number)),precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);case'e':case'E':case'f':case'F':case'g':case'G':number=+value;prefix=number<0?'-':positivePrefix;method=['toExponential','toFixed','toPrecision']['efg'.indexOf(type.toLowerCase())];textTransform=['toString','toUpperCase']['eEfFgG'.indexOf(type)%2];value=prefix+Math.abs(number)[method](precision);return justify(value,prefix,leftJustify,minWidth,zeroPad)[textTransform]();default:return substring;}};return format.replace(regex,doFormat);}
function sql_regcase(str){this.setlocale('LC_ALL',0);var i=0,upper='',lower='',pos=0,retStr='';upper=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.upper;lower=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lower;for(i=0;i<str.length;i++){if(((pos=upper.indexOf(str.charAt(i)))!==-1)||((pos=lower.indexOf(str.charAt(i)))!==-1)){retStr+='['+upper[pos]+lower[pos]+']';}
else{retStr+=str.charAt(i);}}
return retStr;}
function sqrt(arg){return Math.sqrt(arg);}
function str_getcsv(input,delimiter,enclosure,escape){var output=[];var backwards=function(str){return str.split('').reverse().join('');};var pq=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1");};delimiter=delimiter||',';enclosure=enclosure||'"';escape=escape||'\\';input=input.replace(new RegExp('^\\s*'+pq(enclosure)),'').replace(new RegExp(pq(enclosure)+'\\s*$'),'');input=backwards(input).split(new RegExp(pq(enclosure)+'\\s*'+pq(delimiter)+'\\s*'+pq(enclosure)+'(?!'+pq(escape)+')','g')).reverse();for(var i=0;i<input.length;i++){output.push(backwards(input[i]).replace(new RegExp(pq(escape)+pq(enclosure),'g'),enclosure));}
return output;}
function str_ireplace(search,replace,subject){var i,k='';var searchl=0;var reg;var escapeRegex=function(s){return s.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g,'\\$1');};search+='';searchl=search.length;if(!(replace instanceof Array)){replace=[replace];if(search instanceof Array){while(searchl>replace.length){replace[replace.length]=replace[0];}}}
if(!(search instanceof Array)){search=[search];}
while(search.length>replace.length){replace[replace.length]='';}
if(subject instanceof Array){for(k in subject){if(subject.hasOwnProperty(k)){subject[k]=str_ireplace(search,replace,subject[k]);}}
return subject;}
searchl=search.length;for(i=0;i<searchl;i++){reg=new RegExp(escapeRegex(search[i]),'gi');subject=subject.replace(reg,replace[i]);}
return subject;}
function str_pad(input,pad_length,pad_string,pad_type){var half='',pad_to_go;var str_pad_repeater=function(s,len){var collect='',i;while(collect.length<len){collect+=s;}
collect=collect.substr(0,len);return collect;};input+='';pad_string=pad_string!==undefined?pad_string:' ';if(pad_type!='STR_PAD_LEFT'&&pad_type!='STR_PAD_RIGHT'&&pad_type!='STR_PAD_BOTH'){pad_type='STR_PAD_RIGHT';}
if((pad_to_go=pad_length-input.length)>0){if(pad_type=='STR_PAD_LEFT'){input=str_pad_repeater(pad_string,pad_to_go)+input;}
else if(pad_type=='STR_PAD_RIGHT'){input=input+str_pad_repeater(pad_string,pad_to_go);}
else if(pad_type=='STR_PAD_BOTH'){half=str_pad_repeater(pad_string,Math.ceil(pad_to_go/2));input=half+input+half;input=input.substr(0,pad_length);}}
return input;}
function str_repeat(input,multiplier){return new Array(multiplier+1).join(input);}
function str_replace(search,replace,subject,count){var i=0,j=0,temp='',repl='',sl=0,fl=0,f=[].concat(search),r=[].concat(replace),s=subject,ra=r instanceof Array,sa=s instanceof Array;s=[].concat(s);if(count){this.window[count]=0;}
for(i=0,sl=s.length;i<sl;i++){if(s[i]===''){continue;}
for(j=0,fl=f.length;j<fl;j++){temp=s[i]+'';repl=ra?(r[j]!==undefined?r[j]:''):r[0];s[i]=(temp).split(f[j]).join(repl);if(count&&s[i]!==temp){this.window[count]+=(temp.length-s[i].length)/f[j].length;}}}
return sa?s:s[0];}
function str_rot13(str){return(str+'').replace(/[A-Za-z]/g,function(c){return String.fromCharCode((((c=c.charCodeAt(0))&223)-52)%26+(c&32)+65);});}
function str_shuffle(str){if(str==undefined){throw'Wrong parameter count for str_shuffle()';}
var getRandomInt=function(max){return Math.floor(Math.random()*(max+1));};var newStr='',rand=0;while(str.length){rand=getRandomInt(str.length-1);newStr+=str.charAt(rand);str=str.substring(0,rand)+str.substr(rand+1);}
return newStr;}
function str_split(f_string,f_split_length){f_string+='';if(f_split_length==undefined){f_split_length=1;}
if(f_split_length>0){var result=[];while(f_string.length>f_split_length){result[result.length]=f_string.substring(0,f_split_length);f_string=f_string.substring(f_split_length);}
result[result.length]=f_string;return result;}
return false;}
function str_word_count(str,format,charlist){var l=str.length,tmpStr="";var i=0;var c='';var wArr=[],wC=0;var assArr={},aC=0,reg="";if(charlist){for(i=0;i<=charlist.length-1;i++){if(i!=charlist.length-1){reg=reg+charlist.charCodeAt(i)+"|";}else{reg=reg+charlist.charCodeAt(i);}}
reg=new RegExp(reg);}
for(i=0;i<=l-1;i++){c=str.charCodeAt(i);if((c<91&&c>64)||(c<123&&c>96)||c==45||c==39||(reg&&reg.test(c))){if(tmpStr==""&&format==2){aC=i;}
tmpStr=tmpStr+String.fromCharCode(c);}else if(tmpStr!=""){if(format!=2){wArr[wArr.length]=tmpStr;}else{assArr[aC]=tmpStr;}
tmpStr="";wC++;}}
if(!format){return wC;}else if(format==1){return wArr;}else if(format==2){return assArr;}
throw'You have supplied an incorrect format';}
function strcasecmp(f_string1,f_string2){var string1=(f_string1+'').toLowerCase();var string2=(f_string2+'').toLowerCase();if(string1>string2){return 1;}
else if(string1==string2){return 0;}
return-1;}
function strchr(haystack,needle,bool){return this.strstr(haystack,needle,bool);}
function strcmp(str1,str2){return((str1==str2)?0:((str1>str2)?1:-1));}
function strcspn(str,mask,start,length){start=start?start:0;var count=(length&&((start+length)<str.length))?start+length:str.length;strct:for(var i=start,lgth=0;i<count;i++){for(var j=0;j<mask.length;j++){if(str.charAt(i).indexOf(mask[j])!==-1){continue strct;}}
++lgth;}
return lgth;}
function strip_tags(str,allowed_tags){var key='',allowed=false;var matches=[];var allowed_array=[];var allowed_tag='';var i=0;var k='';var html='';var replacer=function(search,replace,str){return str.split(search).join(replace);};if(allowed_tags){allowed_array=allowed_tags.match(/([a-zA-Z0-9]+)/gi);}
str+='';matches=str.match(/(<\/?[\S][^>]*>)/gi);for(key in matches){if(isNaN(key)){continue;}
html=matches[key].toString();allowed=false;for(k in allowed_array){allowed_tag=allowed_array[k];i=-1;if(i!=0){i=html.toLowerCase().indexOf('<'+allowed_tag+'>');}
if(i!=0){i=html.toLowerCase().indexOf('<'+allowed_tag+' ');}
if(i!=0){i=html.toLowerCase().indexOf('</'+allowed_tag);}
if(i==0){allowed=true;break;}}
if(!allowed){str=replacer(html,"",str);}}
return str;}
function stripos(f_haystack,f_needle,f_offset){var haystack=(f_haystack+'').toLowerCase();var needle=(f_needle+'').toLowerCase();var index=0;if((index=haystack.indexOf(needle,f_offset))!==-1){return index;}
return false;}
function stripslashes(str){return(str+'').replace(/\\(.?)/g,function(s,n1){switch(n1){case'\\':return'\\';case'0':return'\0';case'':return'';default:return n1;}});}
function stristr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.toLowerCase().indexOf((needle+'').toLowerCase());if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strlen(string){var str=string+'';var i=0,chr='',lgth=0;var getWholeChar=function(str,i){var code=str.charCodeAt(i);var next='',prev='';if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}else if(0xDC00<=code&&code<=0xDFFF){if(i===0){throw'Low surrogate without preceding high surrogate';}
prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;}
return str.charAt(i);};for(i=0,lgth=0;i<str.length;i++){if((chr=getWholeChar(str,i))===false){continue;}
lgth++;}
return lgth;}
function strnatcasecmp(str1,str2){var a=(str1+'').toLowerCase();var b=(str2+'').toLowerCase();var isWhitespaceChar=function(a){return a.charCodeAt(0)<=32;};var isDigitChar=function(a){var charCode=a.charCodeAt(0);return(charCode>=48&&charCode<=57);};var compareRight=function(a,b){var bias=0;var ia=0;var ib=0;var ca;var cb;for(;;ia++,ib++){ca=a.charAt(ia);cb=b.charAt(ib);if(!isDigitChar(ca)&&!isDigitChar(cb)){return bias;}else if(!isDigitChar(ca)){return-1;}else if(!isDigitChar(cb)){return+1;}else if(ca<cb){if(bias==0){bias=-1;}}else if(ca>cb){if(bias==0){bias=+1;}}else if(ca==0&&cb==0){return bias;}}};var ia=0,ib=0;var nza=0,nzb=0;var ca,cb;var result;while(true){nza=nzb=0;ca=a.charAt(ia);cb=b.charAt(ib);while(isWhitespaceChar(ca)||ca=='0'){if(ca=='0'){nza++;}else{nza=0;}
ca=a.charAt(++ia);}
while(isWhitespaceChar(cb)||cb=='0'){if(cb=='0'){nzb++;}else{nzb=0;}
cb=b.charAt(++ib);}
if(isDigitChar(ca)&&isDigitChar(cb)){if((result=compareRight(a.substring(ia),b.substring(ib)))!=0){return result;}}
if(ca==0&&cb==0){return nza-nzb;}
if(ca<cb){return-1;}else if(ca>cb){return+1;}
++ia;++ib;}}
function strnatcmp(f_string1,f_string2,f_version){var i=0;if(f_version==undefined){f_version=false;}
var __strnatcmp_split=function(f_string){var result=[];var buffer='';var chr='';var i=0,f_stringl=0;var text=true;f_stringl=f_string.length;for(i=0;i<f_stringl;i++){chr=f_string.substring(i,i+1);if(chr.match(/[0-9]/)){if(text){if(buffer.length>0){result[result.length]=buffer;buffer='';}
text=false;}
buffer+=chr;}else if((text==false)&&(chr=='.')&&(i<(f_string.length-1))&&(f_string.substring(i+1,i+2).match(/[0-9]/))){result[result.length]=buffer;buffer='';}else{if(text==false){if(buffer.length>0){result[result.length]=parseInt(buffer,10);buffer='';}
text=true;}
buffer+=chr;}}
if(buffer.length>0){if(text){result[result.length]=buffer;}else{result[result.length]=parseInt(buffer,10);}}
return result;};var array1=__strnatcmp_split(f_string1+'');var array2=__strnatcmp_split(f_string2+'');var len=array1.length;var text=true;var result=-1;var r=0;if(len>array2.length){len=array2.length;result=1;}
for(i=0;i<len;i++){if(isNaN(array1[i])){if(isNaN(array2[i])){text=true;if((r=this.strcmp(array1[i],array2[i]))!=0){return r;}}else if(text){return 1;}else{return-1;}}else if(isNaN(array2[i])){if(text){return-1;}else{return 1;}}else{if(text||f_version){if((r=(array1[i]-array2[i]))!=0){return r;}}else{if((r=this.strcmp(array1[i].toString(),array2[i].toString()))!=0){return r;}}
text=false;}}
return result;}
function strncasecmp(argStr1,argStr2,len){var diff,i=0;var str1=(argStr1+'').toLowerCase().substr(0,len);var str2=(argStr2+'').toLowerCase().substr(0,len);if(str1.length!==str2.length){if(str1.length<str2.length){len=str1.length;if(str2.substr(0,str1.length)==str1){return str1.length-str2.length;}}else{len=str2.length;if(str1.substr(0,str2.length)==str2){return str1.length-str2.length;}}}else{len=str1.length;}
for(diff=0,i=0;i<len;i++){diff=str1.charCodeAt(i)-str2.charCodeAt(i);if(diff!==0){return diff;}}
return 0;}
function strncmp(str1,str2,lgth){var s1=(str1+'').substr(0,lgth);var s2=(str2+'').substr(0,lgth);return((s1==s2)?0:((s1>s2)?1:-1));}
function strpbrk(haystack,char_list){for(var i=0,len=haystack.length;i<len;++i){if(char_list.indexOf(haystack.charAt(i))>=0)
return haystack.slice(i);}
return false;}
function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset?offset:0));return i===-1?false:i;}
function strrchr(haystack,needle){var pos=0;if(typeof needle!=='string'){needle=String.fromCharCode(parseInt(needle,10));}
needle=needle.charAt(0);pos=haystack.lastIndexOf(needle);if(pos===-1){return false;}
return haystack.substr(pos);}
function strrev(string){var ret='',i=0;string+='';for(i=string.length-1;i>=0;i--){ret+=string.charAt(i);}
return ret;}
function strripos(haystack,needle,offset){var i=(haystack+'').toLowerCase().lastIndexOf((needle+'').toLowerCase(),offset);return i>=0?i:false;}
function strrpos(haystack,needle,offset){var i=(haystack+'').lastIndexOf(needle,offset);return i>=0?i:false;}
function strspn(str1,str2,start,lgth){var found;var stri;var strj;var j=0;var i=0;start=start?(start<0?(str1.length+start):start):0;lgth=lgth?((lgth<0)?(str1.length+lgth-start):lgth):str1.length-start;str1=str1.substr(start,lgth);for(i=0;i<str1.length;i++){found=0;stri=str1.substring(i,i+1);for(j=0;j<=str2.length;j++){strj=str2.substring(j,j+1);if(stri==strj){found=1;break;}}
if(found!=1){return i;}}
return i;}
function strstr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.indexOf(needle);if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strtok(str,tokens){this.php_js=this.php_js||{};if(tokens===undefined){tokens=str;str=this.php_js.strtokleftOver;}
if(str.length===0){return false;}
if(tokens.indexOf(str.charAt(0))!==-1){return this.strtok(str.substr(1),tokens);}
for(var i=0;i<str.length;i++){if(tokens.indexOf(str.charAt(i))!==-1){break;}}
this.php_js.strtokleftOver=str.substr(i+1);return str.substring(0,i);}
function strtolower(str){return(str+'').toLowerCase();}
function strtotime(str,now){var i,match,s,strTmp='',parse='';strTmp=str;strTmp=strTmp.replace(/\s{2,}|^\s|\s$/g,' ');strTmp=strTmp.replace(/[\t\r\n]/g,'');if(strTmp=='now'){return(new Date()).getTime()/1000;}else if(!isNaN(parse=Date.parse(strTmp))){return(parse/1000);}else if(now){now=new Date(now*1000);}else{now=new Date();}
strTmp=strTmp.toLowerCase();var __is={day:{'sun':0,'mon':1,'tue':2,'wed':3,'thu':4,'fri':5,'sat':6},mon:{'jan':0,'feb':1,'mar':2,'apr':3,'may':4,'jun':5,'jul':6,'aug':7,'sep':8,'oct':9,'nov':10,'dec':11}};var process=function(m){var ago=(m[2]&&m[2]=='ago');var num=(num=m[0]=='last'?-1:1)*(ago?-1:1);switch(m[0]){case'last':case'next':switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;default:var day;if(typeof(day=__is.day[m[1].substring(0,3)])!='undefined'){var diff=day-now.getDay();if(diff==0){diff=7*num;}else if(diff>0){if(m[0]=='last'){diff-=7;}}else{if(m[0]=='next'){diff+=7;}}
now.setDate(now.getDate()+diff);}}
break;default:if(/\d+/.test(m[0])){num*=parseInt(m[0],10);switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;}}else{return false;}
break;}
return true;};match=strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);if(match!=null){if(!match[2]){match[2]='00:00:00';}else if(!match[3]){match[2]+=':00';}
s=match[1].split(/-/g);for(i in __is.mon){if(__is.mon[i]==s[1]-1){s[1]=i;}}
s[0]=parseInt(s[0],10);s[0]=(s[0]>=0&&s[0]<=69)?'20'+(s[0]<10?'0'+s[0]:s[0]+''):(s[0]>=70&&s[0]<=99)?'19'+s[0]:s[0]+'';return parseInt(this.strtotime(s[2]+' '+s[1]+' '+s[0]+' '+match[2])+(match[4]?match[4]/1000:''),10);}
var regex='([+-]?\\d+\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\.?|sunday|mon\.?|monday|tue\.?|tuesday|wed\.?|wednesday'+'|thu\.?|thursday|fri\.?|friday|sat\.?|saturday)'+'|(last|next)\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\.?|sunday|mon\.?|monday|tue\.?|tuesday|wed\.?|wednesday'+'|thu\.?|thursday|fri\.?|friday|sat\.?|saturday))'+'(\\sago)?';match=strTmp.match(new RegExp(regex,'g'));if(match==null){return false;}
for(i=0;i<match.length;i++){if(!process(match[i].split(' '))){return false;}}
return(now.getTime()/1000);}
function strtoupper(str){return(str+'').toUpperCase();}
function strtr(str,from,to){var fr='',i=0,j=0,lenStr=0,lenFrom=0;var tmpFrom=[];var tmpTo=[];var ret='';var match=false;if(typeof from==='object'){this.krsort(from);for(fr in from){tmpFrom.push(fr);tmpTo.push(from[fr]);}
from=tmpFrom;to=tmpTo;}
lenStr=str.length;lenFrom=from.length;for(i=0;i<lenStr;i++){match=false;for(j=0;j<lenFrom;j++){if(str.substr(i,from[j].length)==from[j]){match=true;i=(i+from[j].length)-1;break;}}
if(false!==match){ret+=to[j];}else{ret+=str[i];}}
return ret;}
function substr(f_string,f_start,f_length){f_string+='';if(f_start<0){f_start+=f_string.length;}
if(f_length==undefined){f_length=f_string.length;}else if(f_length<0){f_length+=f_string.length;}else{f_length+=f_start;}
if(f_length<f_start){f_length=f_start;}
return f_string.substring(f_start,f_length);}
function substr_compare(main_str,str,offset,length,case_insensitivity){if(!offset&&offset!==0){throw'Missing offset for substr_compare()';}
if(offset<0){offset=main_str.length+offset;}
if(length&&length>(main_str.length-offset)){return false;}
length=length||main_str.length-offset;main_str=main_str.substr(offset,length);str=str.substr(0,length);if(case_insensitivity){main_str=(main_str+'').toLowerCase();str=(str+'').toLowerCase();if(main_str==str){return 0;}
return(main_str>str)?1:-1;}
return((main_str==str)?0:((main_str>str)?1:-1));}
function substr_count(haystack,needle,offset,length){var pos=0,cnt=0;haystack+='';needle+='';if(isNaN(offset)){offset=0;}
if(isNaN(length)){length=0;}
offset--;while((offset=haystack.indexOf(needle,offset+1))!=-1){if(length>0&&(offset+needle.length)>length){return false;}else{cnt++;}}
return cnt;}
function substr_replace(str,replace,start,length){if(start<0){start=start+str.length;}
length=length!==undefined?length:str.length;if(length<0){length=length+str.length-start;}
return str.slice(0,start)+replace.substr(0,length)+replace.slice(length)+str.slice(start+length);}
function tan(arg){return Math.tan(arg);}
function tanh(arg){return(Math.exp(arg)-Math.exp(-arg))/(Math.exp(arg)+Math.exp(-arg));}
function time(){return Math.floor(new Date().getTime()/1000);}
function trim(str,charlist){var whitespace,l=0,i=0;str+='';if(!charlist){whitespace=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";}else{charlist+='';whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');}
l=str.length;for(i=0;i<l;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}
l=str.length;for(i=l-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}
return whitespace.indexOf(str.charAt(0))===-1?str:'';}
function uasort(inputArr,sorter){if(typeof sorter==='string'){sorter=this[sorter];}else if(sorter instanceof Array){sorter=this[sorter[0]][sorter[1]];}
var valArr=[],keyArr=[],tempKeyVal,tempValue,ret;var k='',i=0;var sorterNew=function(keyArr,valArr){for(var i=valArr.length-2;i>=0;i--){for(var j=0;j<=i;j++){ret=sorter(valArr[j+1],valArr[j]);if(ret<0){tempValue=valArr[j];valArr[j]=valArr[j+1];valArr[j+1]=tempValue;tempKeyVal=keyArr[j];keyArr[j]=keyArr[j+1];keyArr[j+1]=tempKeyVal;}}}};for(k in inputArr){valArr.push(inputArr[k]);keyArr.push(k);delete inputArr[k];}
try{sorterNew(keyArr,valArr);}catch(e){return false;}
for(i=0;i<valArr.length;i++){inputArr[keyArr[i]]=valArr[i];}
return true;}
function ucfirst(str){str+='';var f=str.charAt(0).toUpperCase();return f+str.substr(1);}
function ucwords(str){return(str+'').replace(/^(.)|\s(.)/g,function($1){return $1.toUpperCase();});}
function uksort(array,sorter){if(typeof sorter==='string'){sorter=this.window[sorter];}
var tmp_arr={},keys=[],i=0,key='';for(key in array){keys.push(key);}
try{if(sorter){keys.sort(sorter);}else{keys.sort();}}catch(e){return false;}
for(i=0;i<keys.length;i++){key=keys[i];tmp_arr[key]=array[key];delete array[key];}
for(i in tmp_arr){array[i]=tmp_arr[i];}
return true;}
function unserialize(data){var utf8Overhead=function(chr){var code=chr.charCodeAt(0);if(code<0x0080){return 0;}
if(code<0x0800){return 1;}
return 2;};var error=function(type,msg,filename,line){throw new this.window[type](msg,filename,line);};var read_until=function(data,offset,stopchr){var buf=[];var chr=data.slice(offset,offset+1);var i=2;while(chr!=stopchr){if((i+offset)>data.length){error('Error','Invalid');}
buf.push(chr);chr=data.slice(offset+(i-1),offset+i);i+=1;}
return[buf.length,buf.join('')];};var read_chrs=function(data,offset,length){var buf;buf=[];for(var i=0;i<length;i++){var chr=data.slice(offset+(i-1),offset+i);buf.push(chr);length-=utf8Overhead(chr);}
return[buf.length,buf.join('')];};var _unserialize=function(data,offset){var readdata;var readData;var chrs=0;var ccount;var stringlength;var keyandchrs;var keys;if(!offset){offset=0;}
var dtype=(data.slice(offset,offset+1)).toLowerCase();var dataoffset=offset+2;var typeconvert=function(x){return x;};switch(dtype){case'i':typeconvert=function(x){return parseInt(x,10);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'b':typeconvert=function(x){return parseInt(x,10)!==0;};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'd':typeconvert=function(x){return parseFloat(x);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'n':readdata=null;break;case's':ccount=read_until(data,dataoffset,':');chrs=ccount[0];stringlength=ccount[1];dataoffset+=chrs+2;readData=read_chrs(data,dataoffset+1,parseInt(stringlength,10));chrs=readData[0];readdata=readData[1];dataoffset+=chrs+2;if(chrs!=parseInt(stringlength,10)&&chrs!=readdata.length){error('SyntaxError','String length mismatch');}
readdata=this.utf8_decode(readdata);break;case'a':readdata={};keyandchrs=read_until(data,dataoffset,':');chrs=keyandchrs[0];keys=keyandchrs[1];dataoffset+=chrs+2;for(var i=0;i<parseInt(keys,10);i++){var kprops=_unserialize(data,dataoffset);var kchrs=kprops[1];var key=kprops[2];dataoffset+=kchrs;var vprops=_unserialize(data,dataoffset);var vchrs=vprops[1];var value=vprops[2];dataoffset+=vchrs;readdata[key]=value;}
dataoffset+=1;break;default:error('SyntaxError','Unknown / Unhandled data type(s): '+dtype);break;}
return[dtype,dataoffset-offset,typeconvert(readdata)];};return _unserialize((data+''),0)[2];}
function urldecode(str){var hash_map={},ret=str.toString(),unicodeStr='',hexEscStr='';var replacer=function(search,replace,str){var tmp_arr=[];tmp_arr=str.split(search);return tmp_arr.join(replace);};hash_map["'"]='%27';hash_map['(']='%28';hash_map[')']='%29';hash_map['*']='%2A';hash_map['~']='%7E';hash_map['!']='%21';hash_map['%20']='+';hash_map['\u00DC']='%DC';hash_map['\u00FC']='%FC';hash_map['\u00C4']='%D4';hash_map['\u00E4']='%E4';hash_map['\u00D6']='%D6';hash_map['\u00F6']='%F6';hash_map['\u00DF']='%DF';hash_map['\u20AC']='%80';hash_map['\u0081']='%81';hash_map['\u201A']='%82';hash_map['\u0192']='%83';hash_map['\u201E']='%84';hash_map['\u2026']='%85';hash_map['\u2020']='%86';hash_map['\u2021']='%87';hash_map['\u02C6']='%88';hash_map['\u2030']='%89';hash_map['\u0160']='%8A';hash_map['\u2039']='%8B';hash_map['\u0152']='%8C';hash_map['\u008D']='%8D';hash_map['\u017D']='%8E';hash_map['\u008F']='%8F';hash_map['\u0090']='%90';hash_map['\u2018']='%91';hash_map['\u2019']='%92';hash_map['\u201C']='%93';hash_map['\u201D']='%94';hash_map['\u2022']='%95';hash_map['\u2013']='%96';hash_map['\u2014']='%97';hash_map['\u02DC']='%98';hash_map['\u2122']='%99';hash_map['\u0161']='%9A';hash_map['\u203A']='%9B';hash_map['\u0153']='%9C';hash_map['\u009D']='%9D';hash_map['\u017E']='%9E';hash_map['\u0178']='%9F';hash_map['\u00C6']='%C3%86';hash_map['\u00D8']='%C3%98';hash_map['\u00C5']='%C3%85';for(unicodeStr in hash_map){hexEscStr=hash_map[unicodeStr];ret=replacer(hexEscStr,unicodeStr,ret);}
ret=decodeURIComponent(ret);return ret;}
function urlencode(str){var hexStr=function(dec){return'%'+(dec<16?'0':'')+dec.toString(16).toUpperCase();};var ret='',unreserved=/[\w.-]/;str=(str+'').toString();for(var i=0,dl=str.length;i<dl;i++){var ch=str.charAt(i);if(unreserved.test(ch)){ret+=ch;}
else{var code=str.charCodeAt(i);if(0xD800<=code&&code<=0xDBFF){ret+=((code-0xD800)*0x400)+(str.charCodeAt(i+1)-0xDC00)+0x10000;i++;}
else if(code===32){ret+='+';}
else if(code<128){ret+=hexStr(code);}
else if(code>=128&&code<2048){ret+=hexStr((code>>6)|0xC0);ret+=hexStr((code&0x3F)|0x80);}
else if(code>=2048){ret+=hexStr((code>>12)|0xE0);ret+=hexStr(((code>>6)&0x3F)|0x80);ret+=hexStr((code&0x3F)|0x80);}}}
return ret;}
function usort(inputArr,sorter){var valArr=[];var k='',i=0;if(typeof sorter==='string'){sorter=this[sorter];}else if(sorter instanceof Array){sorter=this[sorter[0]][sorter[1]];}
for(k in inputArr){valArr.push(inputArr[k]);delete inputArr[k];}
try{valArr.sort(sorter);}catch(e){return false;}
for(i=0;i<valArr.length;i++){inputArr[i]=valArr[i];}
return true;}
function utf8_decode(str_data){var tmp_arr=[],i=0,ac=0,c1=0,c2=0,c3=0;str_data+='';while(i<str_data.length){c1=str_data.charCodeAt(i);if(c1<128){tmp_arr[ac++]=String.fromCharCode(c1);i++;}else if((c1>191)&&(c1<224)){c2=str_data.charCodeAt(i+1);tmp_arr[ac++]=String.fromCharCode(((c1&31)<<6)|(c2&63));i+=2;}else{c2=str_data.charCodeAt(i+1);c3=str_data.charCodeAt(i+2);tmp_arr[ac++]=String.fromCharCode(((c1&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return tmp_arr.join('');}
function utf8_encode(argString){var string=(argString+'');var utftext="";var start,end;var stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++;}else if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192)+String.fromCharCode((c1&63)|128);}else{enc=String.fromCharCode((c1>>12)|224)+String.fromCharCode(((c1>>6)&63)|128)+String.fromCharCode((c1&63)|128);}
if(enc!==null){if(end>start){utftext+=string.substring(start,end);}
utftext+=enc;start=end=n+1;}}
if(end>start){utftext+=string.substring(start,string.length);}
return utftext;}
function var_dump(){var output="",pad_char=" ",pad_val=4,lgth=0,i=0,d=this.window.document;var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var repeat_char=function(len,pad_char){var str="";for(var i=0;i<len;i++){str+=pad_char;}
return str;};var getScalarVal=function(val){var ret='';if(val===null){ret='NULL';}
else if(typeof val==='boolean'){ret='bool('+val+')';}
else if(typeof val==='string'){ret='string('+val.length+') "'+val+'"';}
else if(typeof val==='number'){if(parseFloat(val)==parseInt(val,10)){ret='int('+val+')';}
else{ret='float('+val+')';}}
else if(val===undefined){ret='UNDEFINED';}
else if(typeof val==='function'){ret='FUNCTION';}
return ret;};var formatArray=function(obj,cur_depth,pad_val,pad_char){var someProp='';if(cur_depth>0){cur_depth++;}
var base_pad=repeat_char(pad_val*(cur_depth-1),pad_char);var thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char);var str="";var val='';if(typeof obj==='object'&&obj!==null){if(obj.constructor&&getFuncName(obj.constructor)==='PHPJS_Resource'){return obj.var_dump();}
lgth=0;for(someProp in obj){lgth++;}
str+="array("+lgth+") {\n";for(var key in obj){if(typeof obj[key]==='object'&&obj[key]!==null){str+=thick_pad+"["+key+"] =>\n"+thick_pad+formatArray(obj[key],cur_depth+1,pad_val,pad_char);}else{val=getScalarVal(obj[key]);str+=thick_pad+"["+key+"] =>\n"+thick_pad+val+"\n";}}
str+=base_pad+"}\n";}else{str=getScalarVal(obj);}
return str;};output=formatArray(arguments[0],0,pad_val,pad_char);for(i=1;i<arguments.length;i++){output+='\n'+formatArray(arguments[i],0,pad_val,pad_char);}
if(d.body){this.echo(output);}
else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}
catch(e){this.echo(output);}}}
function var_export(mixed_expression,bool_return){var retstr='',iret='',cnt=0,x=[],i=0,funcParts=[];var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var __getType=function(inp){var i=0;var match,type=typeof inp;if(type==='object'&&inp.constructor&&getFuncName(inp.constructor)==='PHPJS_Resource'){return'resource';}
if(type==='function'){return'function';}
if(type==='object'&&!inp){return'null';}
if(type==="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(i=0;i<types.length;i++){if(cons===types[i]){type=types[i];break;}}}
return type;};var type=__getType(mixed_expression);if(type===null){retstr="NULL";}else if(type==='array'||type==='object'){for(i in mixed_expression){x[cnt++]=this.var_export(i,true)+" => "+this.var_export(mixed_expression[i],true);}
iret=x.join(',\n  ');retstr="array (\n  "+iret+"\n)";}
else if(type==='function'){funcParts=mixed_expression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/);retstr="create_function ('"+funcParts[1]+"', '"+funcParts[2].replace(new RegExp("'",'g'),"\\'")+"')";}
else if(type==='resource'){retstr='NULL';}else{retstr=(!isNaN(mixed_expression))?mixed_expression:"'"+mixed_expression.replace(/(["'])/g,"\\$1").replace(/\0/g,"\\0")+"'";}
if(bool_return!==true){this.echo(retstr);return null;}else{return retstr;}}
function vprintf(format,args){var body,elmt;var ret='',d=this.window.document;var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,[format].concat(args));elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function vsprintf(format,args){return this.sprintf.apply(this,[format].concat(args));}
function wordwrap(str,int_width,str_break,cut){var m=((arguments.length>=2)?arguments[1]:75);var b=((arguments.length>=3)?arguments[2]:"\n");var c=((arguments.length>=4)?arguments[3]:false);var i,j,l,s,r;str+='';if(m<1){return str;}
for(i=-1,l=(r=str.split(/\r\n|\n|\r/)).length;++i<l;r[i]+=s){for(s=r[i],r[i]="";s.length>m;r[i]+=s.slice(0,j)+((s=s.slice(j)).length?b:"")){j=c==2||(j=s.slice(0,m+1).match(/\S*(\s)?$/))[1]?m:j.input.length-j[0].length||c==1&&m||j.input.length+(j=s.slice(m).match(/^\S*/)).input.length;}}
return r.join("\n");}