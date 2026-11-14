import{C as Hh,p as Ou,t as zu,H as Pl}from"./app.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="170",Gh=0,ic=1,kh=2,Bu=1,Vu=2,ti=3,wi=0,Ke=1,dn=2,Si=0,Ts=1,$i=2,sc=3,rc=4,Wh=5,Vi=100,Xh=101,qh=102,Yh=103,$h=104,Zh=200,Jh=201,Kh=202,jh=203,Na=204,Fa=205,Qh=206,tf=207,ef=208,nf=209,sf=210,rf=211,of=212,af=213,lf=214,Oa=0,za=1,Ba=2,Ds=3,Va=4,Ha=5,Ga=6,ka=7,Hu=0,cf=1,uf=2,ai=0,hf=1,ff=2,df=3,pf=4,mf=5,gf=6,vf=7,Gu=300,Ls=301,Is=302,Wa=303,Xa=304,Lo=306,pr=1e3,ki=1001,qa=1002,mn=1003,_f=1004,Ar=1005,Wn=1006,Bo=1007,yi=1008,ci=1009,ku=1010,Wu=1011,mr=1012,Ll=1013,Ei=1014,Xn=1015,Zi=1016,Il=1017,Ul=1018,Us=1020,Xu=35902,qu=1021,Yu=1022,On=1023,$u=1024,Zu=1025,As=1026,Ns=1027,Nl=1028,Fl=1029,Ju=1030,Ol=1031,zl=1033,mo=33776,go=33777,vo=33778,_o=33779,Ya=35840,$a=35841,Za=35842,Ja=35843,Ka=36196,ja=37492,Qa=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,ul=37818,hl=37819,fl=37820,dl=37821,xo=36492,pl=36494,ml=36495,Ku=36283,gl=36284,vl=36285,_l=36286,xf=3200,Bl=3201,ju=0,Mf=1,ni="",cn="srgb",Ki="srgb-linear",Io="linear",fe="srgb",es=7680,oc=519,yf=512,Sf=513,bf=514,Qu=515,wf=516,Ef=517,Tf=518,Af=519,ac=35044,lc="300 es",ri=2e3,bo=2001;class Bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vo=Math.PI/180,xl=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function ke(n,t,e){return Math.max(t,Math.min(e,n))}function Rf(n,t){return(n%t+t)%t}function Ho(n,t,e){return(1-e)*n+e*t}function Xs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],x=s[4],v=s[7],D=s[2],E=s[5],R=s[8];return r[0]=o*_+a*S+l*D,r[3]=o*m+a*x+l*E,r[6]=o*p+a*v+l*R,r[1]=c*_+u*S+h*D,r[4]=c*m+u*x+h*E,r[7]=c*p+u*v+h*R,r[2]=f*_+d*S+g*D,r[5]=f*m+d*x+g*E,r[8]=f*p+d*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Go.makeScale(t,e)),this}rotate(t){return this.premultiply(Go.makeRotation(-t)),this}translate(t,e){return this.premultiply(Go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Qt;function th(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cf(){const n=wo("canvas");return n.style.display="block",n}const cc={};function ar(n){n in cc||(cc[n]=!0,console.warn(n))}function Pf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Df(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(n.r=li(n.r),n.g=li(n.g),n.b=li(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(n.r=Rs(n.r),n.g=Rs(n.g),n.b=Rs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ni?Io:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const uc=[.64,.33,.3,.6,.15,.06],hc=[.2126,.7152,.0722],fc=[.3127,.329],dc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Ki]:{primaries:uc,whitePoint:fc,transfer:Io,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:hc,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:uc,whitePoint:fc,transfer:fe,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:hc,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let ns;class If{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=wo("canvas")),ns.width=t.width,ns.height=t.height;const i=ns.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uf=0;class eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ko(s[o].image)):r.push(ko(s[o]))}else r=ko(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?If.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nf=0;class Ye extends Bs{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=ki,s=ki,r=Wn,o=yi,a=On,l=ci,c=Ye.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Vs(),this.name="",this.source=new eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Gu;Ye.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,D=(p+1)/2,E=(u+f)/4,R=(h+_)/4,P=(g+m)/4;return x>v&&x>D?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=E/i,r=R/i):v>D?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=P/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=R/r,s=P/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ff extends Bs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Ff{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class nh extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Of extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),E=Math.atan2(D,p*S);m=Math.sin(m*E)/D,a=Math.sin(a*E)/D}const v=a*S;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new N,mc=new Bn;class ji{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Cr.subVectors(this.max,qs),is.subVectors(t.a,qs),ss.subVectors(t.b,qs),rs.subVectors(t.c,qs),hi.subVectors(ss,is),fi.subVectors(rs,ss),Pi.subVectors(is,rs);let e=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Pi.z,Pi.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Pi.z,0,-Pi.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Pi.y,Pi.x,0];return!Xo(e,is,ss,rs,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,is,ss,rs,Cr))?!1:(Pr.crossVectors(hi,fi),e=[Pr.x,Pr.y,Pr.z],Xo(e,is,ss,rs,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Dn=new N,Rr=new ji,is=new N,ss=new N,rs=new N,hi=new N,fi=new N,Pi=new N,qs=new N,Cr=new N,Pr=new N,Di=new N;function Xo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zf=new ji,Ys=new N,qo=new N;class Hs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(qo)),this.expandByPoint(Ys.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new N,Yo=new N,Dr=new N,di=new N,$o=new N,Lr=new N,Zo=new N;class ih{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Yo.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Dr),a=di.dot(this.direction),l=-di.dot(Dr),c=di.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Yo).addScaledVector(Dr,f),d}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,s,r){$o.subVectors(e,t),Lr.subVectors(i,t),Zo.crossVectors($o,Lr);let o=this.direction.dot(Zo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);const l=a*this.direction.dot(Lr.crossVectors(di,Lr));if(l<0)return null;const c=a*this.direction.dot($o.cross(di));if(c<0||l+c>o)return null;const u=-a*di.dot(Zo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bf,t,Vf)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),pi.crossVectors(i,an),pi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),pi.crossVectors(i,an)),pi.normalize(),Ir.crossVectors(an,pi),s[0]=pi.x,s[4]=Ir.x,s[8]=an.x,s[1]=pi.y,s[5]=Ir.y,s[9]=an.y,s[2]=pi.z,s[6]=Ir.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],x=i[7],v=i[11],D=i[15],E=s[0],R=s[4],P=s[8],y=s[12],M=s[1],I=s[5],V=s[9],z=s[13],k=s[2],K=s[6],q=s[10],lt=s[14],$=s[3],vt=s[7],Mt=s[11],Tt=s[15];return r[0]=o*E+a*M+l*k+c*$,r[4]=o*R+a*I+l*K+c*vt,r[8]=o*P+a*V+l*q+c*Mt,r[12]=o*y+a*z+l*lt+c*Tt,r[1]=u*E+h*M+f*k+d*$,r[5]=u*R+h*I+f*K+d*vt,r[9]=u*P+h*V+f*q+d*Mt,r[13]=u*y+h*z+f*lt+d*Tt,r[2]=g*E+_*M+m*k+p*$,r[6]=g*R+_*I+m*K+p*vt,r[10]=g*P+_*V+m*q+p*Mt,r[14]=g*y+_*z+m*lt+p*Tt,r[3]=S*E+x*M+v*k+D*$,r[7]=S*R+x*I+v*K+D*vt,r[11]=S*P+x*V+v*q+D*Mt,r[15]=S*y+x*z+v*lt+D*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,D=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,E=e*S+i*x+s*v+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=S*R,t[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*R,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*R,t[4]=x*R,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=v*R,t[9]=(g*h*r-u*_*r-g*i*d+e*_*d+u*i*p-e*h*p)*R,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*R,t[12]=D*R,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*R,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=l*c,x=l*u,v=l*h,D=i.x,E=i.y,R=i.z;return s[0]=(1-(_+p))*D,s[1]=(d+v)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+x)*R,s[9]=(m-S)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);const c=1/r,u=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ri){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===ri)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ri){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,_;if(a===ri)g=(o+r)*h,_=-2*h;else if(a===bo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const os=new N,Ln=new ee,Bf=new N(0,0,0),Vf=new N(1,1,1),pi=new N,Ir=new N,an=new N,gc=new ee,vc=new Bn;class zn{constructor(t=0,e=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hf=0;const _c=new N,as=new Bn,Kn=new ee,Ur=new N,$s=new N,Gf=new N,kf=new Bn,xc=new N(1,0,0),Mc=new N(0,1,0),yc=new N(0,0,1),Sc={type:"added"},Wf={type:"removed"},ls={type:"childadded",child:null},Jo={type:"childremoved",child:null};class We extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new N,e=new zn,i=new Bn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Qt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(xc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt($s,Ur,this.up):Kn.lookAt(Ur,$s,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Kn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}We.DEFAULT_UP=new N(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new N,jn=new N,Ko=new N,Qn=new N,cs=new N,us=new N,bc=new N,jo=new N,Qo=new N,ta=new N,ea=new le,na=new le,ia=new le;class Nn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){In.subVectors(s,e),jn.subVectors(i,e),Ko.subVectors(t,e);const o=In.dot(In),a=In.dot(jn),l=In.dot(Ko),c=jn.dot(jn),u=jn.dot(Ko),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,i),ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(t,e,i,s){return In.subVectors(i,e),jn.subVectors(t,e),In.cross(jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),In.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,i),us.subVectors(r,i),jo.subVectors(t,i);const l=cs.dot(jo),c=us.dot(jo);if(l<=0&&c<=0)return e.copy(i);Qo.subVectors(t,s);const u=cs.dot(Qo),h=us.dot(Qo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(cs,o);ta.subVectors(t,r);const d=cs.dot(ta),g=us.dot(ta);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(us,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return bc.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(bc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Rf(t,1),e=ke(e,0,1),i=ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const i=rh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return oe.fromWorkingColorSpace(Ze.copy(this),t),Math.round(ke(Ze.r*255,0,255))*65536+Math.round(ke(Ze.g*255,0,255))*256+Math.round(ke(Ze.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ze.copy(this),e);const i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=cn){oe.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,s=Ze.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Nr);const i=Ho(mi.h,Nr.h,e),s=Ho(mi.s,Nr.s,e),r=Ho(mi.l,Nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Ct;Ct.NAMES=rh;let Xf=0;class Gs extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Vs(),this.name="",this.blending=Ts,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Uo extends Gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new N,Fr=new ut;class Ae{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}}class oh extends Ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ah extends Ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends Ae{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qf=0;const xn=new ee,ra=new We,hs=new N,ln=new ji,Zs=new ji,Be=new N;class ge extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?ah:oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(ln.min,Zs.min),ln.expandByPoint(Be),Be.addVectors(ln.max,Zs.max),ln.expandByPoint(Be)):(ln.expandByPoint(Zs.min),ln.expandByPoint(Zs.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Be.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),Be.add(hs)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,u=new N,h=new N,f=new ut,d=new ut,g=new ut,_=new N,m=new N;function p(P,y,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[P].add(_),a[y].add(_),a[M].add(_),l[P].add(m),l[y].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,y=S.length;P<y;++P){const M=S[P],I=M.start,V=M.count;for(let z=I,k=I+V;z<k;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new N,v=new N,D=new N,E=new N;function R(P){D.fromBufferAttribute(s,P),E.copy(D);const y=a[P];x.copy(y),x.sub(D.multiplyScalar(D.dot(y))).normalize(),v.crossVectors(E,y);const I=v.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,y=S.length;P<y;++P){const M=S[P],I=M.start,V=M.count;for(let z=I,k=I+V;z<k;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ae(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new ee,Li=new ih,Or=new Hs,Ec=new N,zr=new N,Br=new N,Vr=new N,oa=new N,Hr=new N,Tc=new N,Gr=new N;class qt extends We{constructor(t=new ge,e=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(oa.fromBufferAttribute(h,t),o?Hr.addScaledVector(oa,u):Hr.addScaledVector(oa.sub(e),u))}e.add(Hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Or.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Or,Ec)===null||Li.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(wc.copy(r).invert(),Li.copy(t.ray).applyMatrix4(wc),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,D=x;v<D;v+=3){const E=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);s=kr(this,p,t,i,c,u,h,E,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=kr(this,o,t,i,c,u,h,S,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,D=x;v<D;v+=3){const E=v,R=v+1,P=v+2;s=kr(this,p,t,i,c,u,h,E,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;s=kr(this,o,t,i,c,u,h,S,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Yf(n,t,e,i,s,r,o,a){let l;if(t.side===Ke?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===wi,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:n}}function kr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,zr),n.getVertexPosition(l,Br),n.getVertexPosition(c,Vr);const u=Yf(n,t,e,i,zr,Br,Vr,Tc);if(u){const h=new N;Nn.getBarycoord(Tc,zr,Br,Vr,h),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,l,c,h,new ut)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,h,new ut)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};Nn.getNormal(zr,Br,Vr,f.normal),u.face=f,u.barycoord=h}return u}class Ai extends ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function g(_,m,p,S,x,v,D,E,R,P,y){const M=v/R,I=D/P,V=v/2,z=D/2,k=E/2,K=R+1,q=P+1;let lt=0,$=0;const vt=new N;for(let Mt=0;Mt<q;Mt++){const Tt=Mt*I-z;for(let $t=0;$t<K;$t++){const ne=$t*M-V;vt[_]=ne*S,vt[m]=Tt*x,vt[p]=k,c.push(vt.x,vt.y,vt.z),vt[_]=0,vt[m]=0,vt[p]=E>0?1:-1,u.push(vt.x,vt.y,vt.z),h.push($t/R),h.push(1-Mt/P),lt+=1}}for(let Mt=0;Mt<P;Mt++)for(let Tt=0;Tt<R;Tt++){const $t=f+Tt+K*Mt,ne=f+Tt+K*(Mt+1),Q=f+(Tt+1)+K*(Mt+1),ot=f+(Tt+1)+K*Mt;l.push($t,ne,ot),l.push(ne,Q,ot),$+=6}a.addGroup(d,$,y),d+=$,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function tn(n){const t={};for(let e=0;e<n.length;e++){const i=Fs(n[e]);for(const s in i)t[s]=i[s]}return t}function $f(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Zf={clone:Fs,merge:tn};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends Gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=$f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vl extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new N,Ac=new ut,Rc=new ut;class hn extends Vl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Rc),e.subVectors(Rc,Ac)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ds=1;class jf extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(fs,ds,t,e);s.layers=this.layers,this.add(s);const r=new hn(fs,ds,t,e);r.layers=this.layers,this.add(r);const o=new hn(fs,ds,t,e);o.layers=this.layers,this.add(o);const a=new hn(fs,ds,t,e);a.layers=this.layers,this.add(a);const l=new hn(fs,ds,t,e);l.layers=this.layers,this.add(l);const c=new hn(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ch extends Ye{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qf extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ch(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:Si});r.uniforms.tEquirect.value=e;const o=new qt(s,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Wn),new jf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const aa=new N,td=new N,ed=new Qt;class Oi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=aa.subVectors(i,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ed.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Hs,Wr=new N;class Hl{constructor(t=new Oi,e=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,m-d,v-p).normalize(),i[1].setComponents(l+r,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+u,m+g,v+S).normalize(),i[3].setComponents(l-o,f-u,m-g,v-S).normalize(),i[4].setComponents(l-a,f-h,m-_,v-x).normalize(),e===ri)i[5].setComponents(l+a,f+h,m+_,v+x).normalize();else if(e===bo)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function nd(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Os extends ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const x=S+c*p,v=S+c*(p+1),D=S+1+c*(p+1),E=S+1+c*p;d.push(x,v,E),d.push(v,D,E)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.width,t.height,t.widthSegments,t.heightSegments)}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Td=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:od,alphatest_fragment:ad,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:ud,batching_pars_vertex:hd,batching_vertex:fd,begin_vertex:dd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:vd,clipping_planes_fragment:_d,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:yd,color_fragment:Sd,color_pars_fragment:bd,color_pars_vertex:wd,color_vertex:Ed,common:Td,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Pd,emissivemap_fragment:Dd,emissivemap_pars_fragment:Ld,colorspace_fragment:Id,colorspace_pars_fragment:Ud,envmap_fragment:Nd,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Od,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Zd,envmap_vertex:Bd,fog_vertex:Vd,fog_pars_vertex:Hd,fog_fragment:Gd,fog_pars_fragment:kd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:$d,lights_toon_fragment:Jd,lights_toon_pars_fragment:Kd,lights_phong_fragment:jd,lights_phong_pars_fragment:Qd,lights_physical_fragment:t0,lights_physical_pars_fragment:e0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:u0,map_particle_fragment:h0,map_particle_pars_fragment:f0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:v0,morphtarget_pars_vertex:_0,morphtarget_vertex:x0,normal_fragment_begin:M0,normal_fragment_maps:y0,normal_pars_fragment:S0,normal_pars_vertex:b0,normal_vertex:w0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:P0,packing:D0,premultiplied_alpha_fragment:L0,project_vertex:I0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:B0,shadowmap_vertex:V0,shadowmask_pars_fragment:H0,skinbase_vertex:G0,skinning_pars_vertex:k0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:$0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:op,cube_frag:ap,depth_vert:lp,depth_frag:cp,distanceRGBA_vert:up,distanceRGBA_frag:hp,equirect_vert:fp,equirect_frag:dp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:vp,meshlambert_vert:_p,meshlambert_frag:xp,meshmatcap_vert:Mp,meshmatcap_frag:yp,meshnormal_vert:Sp,meshnormal_frag:bp,meshphong_vert:wp,meshphong_frag:Ep,meshphysical_vert:Tp,meshphysical_frag:Ap,meshtoon_vert:Rp,meshtoon_frag:Cp,points_vert:Pp,points_frag:Dp,shadow_vert:Lp,shadow_frag:Ip,sprite_vert:Up,sprite_frag:Np},St={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Gn={basic:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:tn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:tn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:tn([St.points,St.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:tn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:tn([St.common,St.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:tn([St.sprite,St.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:tn([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:tn([St.lights,St.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Gn.physical={uniforms:tn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Xr={r:0,b:0,g:0},Ui=new zn,Fp=new ee;function Op(n,t,e,i,s,r,o){const a=new Ct(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Lo)?(u===void 0&&(u=new qt(new Ai(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Fs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(Ui)),u.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new qt(new Os(2,2),new Ne({name:"BackgroundMaterial",uniforms:Fs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Xr,lh(n)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function zp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,I,V,z,k){let K=!1;const q=h(z,V,I);r!==q&&(r=q,c(r.object)),K=d(M,z,V,k),K&&g(M,z,V,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(M,I,V,z),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,I,V){const z=V.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let K=k[I.id];K===void 0&&(K={},k[I.id]=K);let q=K[z];return q===void 0&&(q=f(l()),K[z]=q),q}function f(M){const I=[],V=[],z=[];for(let k=0;k<e;k++)I[k]=0,V[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,I,V,z){const k=r.attributes,K=I.attributes;let q=0;const lt=V.getAttributes();for(const $ in lt)if(lt[$].location>=0){const Mt=k[$];let Tt=K[$];if(Tt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),Mt===void 0||Mt.attribute!==Tt||Tt&&Mt.data!==Tt.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(M,I,V,z){const k={},K=I.attributes;let q=0;const lt=V.getAttributes();for(const $ in lt)if(lt[$].location>=0){let Mt=K[$];Mt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));const Tt={};Tt.attribute=Mt,Mt&&Mt.data&&(Tt.data=Mt.data),k[$]=Tt,q++}r.attributes=k,r.attributesNum=q,r.index=z}function _(){const M=r.newAttributes;for(let I=0,V=M.length;I<V;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const V=r.newAttributes,z=r.enabledAttributes,k=r.attributeDivisors;V[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),k[M]!==I&&(n.vertexAttribDivisor(M,I),k[M]=I)}function S(){const M=r.newAttributes,I=r.enabledAttributes;for(let V=0,z=I.length;V<z;V++)I[V]!==M[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function x(M,I,V,z,k,K,q){q===!0?n.vertexAttribIPointer(M,I,V,k,K):n.vertexAttribPointer(M,I,V,z,k,K)}function v(M,I,V,z){_();const k=z.attributes,K=V.getAttributes(),q=I.defaultAttributeValues;for(const lt in K){const $=K[lt];if($.location>=0){let vt=k[lt];if(vt===void 0&&(lt==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),lt==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),vt!==void 0){const Mt=vt.normalized,Tt=vt.itemSize,$t=t.get(vt);if($t===void 0)continue;const ne=$t.buffer,Q=$t.type,ot=$t.bytesPerElement,Ut=Q===n.INT||Q===n.UNSIGNED_INT||vt.gpuType===Ll;if(vt.isInterleavedBufferAttribute){const ft=vt.data,Bt=ft.stride,Zt=vt.offset;if(ft.isInstancedInterleavedBuffer){for(let Vt=0;Vt<$.locationSize;Vt++)p($.location+Vt,ft.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Vt=0;Vt<$.locationSize;Vt++)m($.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Vt=0;Vt<$.locationSize;Vt++)x($.location+Vt,Tt/$.locationSize,Q,Mt,Bt*ot,(Zt+Tt/$.locationSize*Vt)*ot,Ut)}else{if(vt.isInstancedBufferAttribute){for(let ft=0;ft<$.locationSize;ft++)p($.location+ft,vt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ft=0;ft<$.locationSize;ft++)m($.location+ft);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let ft=0;ft<$.locationSize;ft++)x($.location+ft,Tt/$.locationSize,Q,Mt,Tt*ot,Tt/$.locationSize*ft*ot,Ut)}}else if(q!==void 0){const Mt=q[lt];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv($.location,Mt);break;case 3:n.vertexAttrib3fv($.location,Mt);break;case 4:n.vertexAttrib4fv($.location,Mt);break;default:n.vertexAttrib1fv($.location,Mt)}}}}S()}function D(){P();for(const M in i){const I=i[M];for(const V in I){const z=I[V];for(const k in z)u(z[k].object),delete z[k];delete I[V]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const V in I){const z=I[V];for(const k in z)u(z[k].object),delete z[k];delete I[V]}delete i[M.id]}function R(M){for(const I in i){const V=i[I];if(V[M.id]===void 0)continue;const z=V[M.id];for(const k in z)u(z[k].object),delete z[k];delete V[M.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Bp(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==On&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ci&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xn&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:D,maxSamples:E}}function Hp(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Oi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,x=S*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,d);for(let D=0;D!==x;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gp(n){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Ls:a===Xa&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qf(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class hh extends Vl{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=4,Cc=[.125,.215,.35,.446,.526,.582],Hi=20,la=new hh,Pc=new Ct;let ca=null,ua=0,ha=0,fa=!1;const zi=(1+Math.sqrt(5))/2,ps=1/zi,Dc=[new N(-zi,ps,0),new N(zi,ps,0),new N(-ps,0,zi),new N(ps,0,zi),new N(0,zi,-ps),new N(0,zi,ps),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ua,ha),this._renderer.xr.enabled=fa,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Zi,format:On,colorSpace:Ki,depthBuffer:!1},s=Lc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(r)),this._blurMaterial=Wp(r,t,e)}return s}_compileMaterial(t){const e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,i,s){const a=new hn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pc),u.toneMapping=ai,u.autoClear=!1;const d=new Uo({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new qt(new Ai,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Pc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;qr(s,S*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,la)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dc[(s-r-1)%Dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let S=0;for(let R=0;R<Hi;++R){const P=R/_,y=Math.exp(-P*P/2);p.push(y),R===0?S+=y:R<m&&(S+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[s],D=3*v*(s>x-xs?s-x+xs:0),E=4*(this._cubeSize-v);qr(e,D,E,3*v,2*v),l.setRenderTarget(e),l.render(h,la)}}function kp(n){const t=[],e=[],i=[];let s=n;const r=n-xs+1+Cc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-xs?l=Cc[o-n+xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,P=E>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(y,_*g*E),x.set(f,m*g*E);const M=[E,E,E,E,E,E];v.set(M,p*g*E)}const D=new ge;D.setAttribute("position",new Ae(S,_)),D.setAttribute("uv",new Ae(x,m)),D.setAttribute("faceIndex",new Ae(v,p)),t.push(D),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Lc(n,t,e){const i=new ui(n,t,e);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wp(n,t,e){const i=new Float32Array(Hi),s=new N(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ic(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Uc(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===Xa,u=l===Ls||l===Is;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ml(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Ml(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yp(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const D=S[x+0],E=S[x+1],R=S[x+2];f.push(D,E,E,R,R,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const D=x+0,E=x+1,R=x+2;f.push(D,E,E,R,R,D)}}else return;const m=new(th(f)?ah:oh)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $p(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Zp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Jp(n,t,e){const i=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*D*4*h),R=new nh(E,v,D,h);R.type=Xn,R.needsUpdate=!0;const P=x*4;for(let M=0;M<h;M++){const I=m[M],V=p[M],z=S[M],k=v*D*4*M;for(let K=0;K<I.count;K++){const q=K*P;d===!0&&(s.fromBufferAttribute(I,K),E[k+q+0]=s.x,E[k+q+1]=s.y,E[k+q+2]=s.z,E[k+q+3]=0),g===!0&&(s.fromBufferAttribute(V,K),E[k+q+4]=s.x,E[k+q+5]=s.y,E[k+q+6]=s.z,E[k+q+7]=0),_===!0&&(s.fromBufferAttribute(z,K),E[k+q+8]=s.x,E[k+q+9]=s.y,E[k+q+10]=s.z,E[k+q+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new ut(v,D)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Kp(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class kl extends Ye{constructor(t,e,i,s,r,o,a,l,c,u=As){if(u!==As&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===As&&(i=Ei),i===void 0&&u===Ns&&(i=Us),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fh=new Ye,Nc=new kl(1,1),dh=new nh,ph=new Of,mh=new ch,Fc=[],Oc=[],zc=new Float32Array(16),Bc=new Float32Array(9),Vc=new Float32Array(4);function ks(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function No(n,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function tm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function nm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Vc.set(i),n.uniformMatrix2fv(this.addr,!1,Vc),Oe(e,i)}}function im(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Bc.set(i),n.uniformMatrix3fv(this.addr,!1,Bc),Oe(e,i)}}function sm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;zc.set(i),n.uniformMatrix4fv(this.addr,!1,zc),Oe(e,i)}}function rm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function cm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function dm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nc.compareFunction=Qu,r=Nc):r=fh,e.setTexture2D(t||r,s)}function pm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ph,s)}function mm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mh,s)}function gm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||dh,s)}function vm(n){switch(n){case 5126:return jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return um;case 36295:return hm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function _m(n,t){n.uniform1fv(this.addr,t)}function xm(n,t){const e=ks(t,this.size,2);n.uniform2fv(this.addr,e)}function Mm(n,t){const e=ks(t,this.size,3);n.uniform3fv(this.addr,e)}function ym(n,t){const e=ks(t,this.size,4);n.uniform4fv(this.addr,e)}function Sm(n,t){const e=ks(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bm(n,t){const e=ks(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function wm(n,t){const e=ks(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Em(n,t){n.uniform1iv(this.addr,t)}function Tm(n,t){n.uniform2iv(this.addr,t)}function Am(n,t){n.uniform3iv(this.addr,t)}function Rm(n,t){n.uniform4iv(this.addr,t)}function Cm(n,t){n.uniform1uiv(this.addr,t)}function Pm(n,t){n.uniform2uiv(this.addr,t)}function Dm(n,t){n.uniform3uiv(this.addr,t)}function Lm(n,t){n.uniform4uiv(this.addr,t)}function Im(n,t,e){const i=this.cache,s=t.length,r=No(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||fh,r[o])}function Um(n,t,e){const i=this.cache,s=t.length,r=No(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ph,r[o])}function Nm(n,t,e){const i=this.cache,s=t.length,r=No(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mh,r[o])}function Fm(n,t,e){const i=this.cache,s=t.length,r=No(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||dh,r[o])}function Om(n){switch(n){case 5126:return _m;case 35664:return xm;case 35665:return Mm;case 35666:return ym;case 35674:return Sm;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Pm;case 36295:return Dm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}class zm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}}class Bm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}}class Vm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Hc(n,t){n.seq.push(t),n.map[t.id]=t}function Hm(n,t,e){const i=n.name,s=i.length;for(da.lastIndex=0;;){const r=da.exec(i),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hc(e,c===void 0?new zm(a,n,t):new Bm(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Vm(a),Hc(e,h)),e=h}}}class Mo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hm(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Gc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Gm=37297;let km=0;function Wm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const kc=new Qt;function Xm(n){oe._getMatrix(kc,oe.workingColorSpace,n);const t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Io:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Wc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wm(n.getShaderSource(t),o)}else return s}function qm(n,t){const e=Xm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ym(n,t){let e;switch(t){case hf:e="Linear";break;case ff:e="Reinhard";break;case df:e="Cineon";break;case pf:e="ACESFilmic";break;case gf:e="AgX";break;case vf:e="Neutral";break;case mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new N;function $m(){oe.getLuminanceCoefficients(Yr);const n=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Jm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Km(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function lr(n){return n!==""}function Xc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(jm,tg)}const Qm=new Map;function tg(n,t){let e=ie[t];if(e===void 0){const i=Qm.get(t);if(i!==void 0)e=ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(n){return n.replace(eg,ng)}function ng(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ig(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case Lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function og(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hu:t="ENVMAP_BLENDING_MULTIPLY";break;case cf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function ag(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function lg(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ig(e),c=sg(e),u=rg(e),h=og(e),f=ag(e),d=Zm(e),g=Jm(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ie.tonemapping_pars_fragment:"",e.toneMapping!==ai?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),o=yl(o),o=Xc(o,e),o=qc(o,e),a=yl(a),a=Xc(a,e),a=qc(a,e),o=Yc(o),a=Yc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,v=S+p+a,D=Gc(s,s.VERTEX_SHADER,x),E=Gc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(E).trim();let K=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,E);else{const lt=Wc(s,D,"vertex"),$=Wc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+lt+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||k==="")&&(q=!1);q&&(I.diagnostics={runnable:K,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(D),s.deleteShader(E),P=new Mo(s,_),y=Km(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Gm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=km++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=E,this}let cg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hg(t),e.set(t,i)),i}}class hg{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}}function fg(n,t,e,i,s,r,o){const a=new sh,l=new ug,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,I,V,z){const k=V.fog,K=z.geometry,q=y.isMeshStandardMaterial?V.environment:null,lt=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),$=lt&&lt.mapping===Lo?lt.image.height:null,vt=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=Mt!==void 0?Mt.length:0;let $t=0;K.morphAttributes.position!==void 0&&($t=1),K.morphAttributes.normal!==void 0&&($t=2),K.morphAttributes.color!==void 0&&($t=3);let ne,Q,ot,Ut;if(vt){const ae=Gn[vt];ne=ae.vertexShader,Q=ae.fragmentShader}else ne=y.vertexShader,Q=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),Ut=l.getFragmentShaderID(y);const ft=n.getRenderTarget(),Bt=n.state.buffers.depth.getReversed(),Zt=z.isInstancedMesh===!0,Vt=z.isBatchedMesh===!0,se=!!y.map,nt=!!y.matcap,ht=!!lt,L=!!y.aoMap,Nt=!!y.lightMap,Y=!!y.bumpMap,At=!!y.normalMap,pt=!!y.displacementMap,Ht=!!y.emissiveMap,Rt=!!y.metalnessMap,A=!!y.roughnessMap,b=y.anisotropy>0,G=y.clearcoat>0,j=y.dispersion>0,it=y.iridescence>0,J=y.sheen>0,Ft=y.transmission>0,at=b&&!!y.anisotropyMap,yt=G&&!!y.clearcoatMap,Ot=G&&!!y.clearcoatNormalMap,ct=G&&!!y.clearcoatRoughnessMap,Pt=it&&!!y.iridescenceMap,gt=it&&!!y.iridescenceThicknessMap,Xt=J&&!!y.sheenColorMap,Lt=J&&!!y.sheenRoughnessMap,Gt=!!y.specularMap,Kt=!!y.specularColorMap,ce=!!y.specularIntensityMap,F=Ft&&!!y.transmissionMap,xt=Ft&&!!y.thicknessMap,Z=!!y.gradientMap,et=!!y.alphaMap,Et=y.alphaTest>0,bt=!!y.alphaHash,Jt=!!y.extensions;let de=ai;y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(de=n.toneMapping);const Re={shaderID:vt,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:Q,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:Ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&z._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&z.instanceColor!==null,instancingMorph:Zt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ki,alphaToCoverage:!!y.alphaToCoverage,map:se,matcap:nt,envMap:ht,envMapMode:ht&&lt.mapping,envMapCubeUVHeight:$,aoMap:L,lightMap:Nt,bumpMap:Y,normalMap:At,displacementMap:f&&pt,emissiveMap:Ht,normalMapObjectSpace:At&&y.normalMapType===Mf,normalMapTangentSpace:At&&y.normalMapType===ju,metalnessMap:Rt,roughnessMap:A,anisotropy:b,anisotropyMap:at,clearcoat:G,clearcoatMap:yt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:ct,dispersion:j,iridescence:it,iridescenceMap:Pt,iridescenceThicknessMap:gt,sheen:J,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:Gt,specularColorMap:Kt,specularIntensityMap:ce,transmission:Ft,transmissionMap:F,thicknessMap:xt,gradientMap:Z,opaque:y.transparent===!1&&y.blending===Ts&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:Et,alphaHash:bt,combine:y.combine,mapUv:se&&_(y.map.channel),aoMapUv:L&&_(y.aoMap.channel),lightMapUv:Nt&&_(y.lightMap.channel),bumpMapUv:Y&&_(y.bumpMap.channel),normalMapUv:At&&_(y.normalMap.channel),displacementMapUv:pt&&_(y.displacementMap.channel),emissiveMapUv:Ht&&_(y.emissiveMap.channel),metalnessMapUv:Rt&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:at&&_(y.anisotropyMap.channel),clearcoatMapUv:yt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(y.sheenRoughnessMap.channel),specularMapUv:Gt&&_(y.specularMap.channel),specularColorMapUv:Kt&&_(y.specularColorMap.channel),specularIntensityMapUv:ce&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:xt&&_(y.thicknessMap.channel),alphaMapUv:et&&_(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(At||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(se||et),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Bt,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:$t,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:se&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:Ht&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dn,flipSided:y.side===Ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Jt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&y.extensions.multiDraw===!0||Vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(S(M,y),x(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let I;if(M){const V=Gn[M];I=Zf.clone(V.uniforms)}else I=y.uniforms;return I}function D(y,M){let I;for(let V=0,z=u.length;V<z;V++){const k=u[V];if(k.cacheKey===M){I=k,++I.usedTimes;break}}return I===void 0&&(I=new lg(n,M,y,r),u.push(I)),I}function E(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:P}}function dg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function pg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Zc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||pg),i.length>1&&i.sort(f||Zc),s.length>1&&s.sort(f||Zc)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function mg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Jc,n.set(i,[o])):s>=r.length?(o=new Jc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function gg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ct};break;case"SpotLight":e={position:new N,direction:new N,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function vg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _g=0;function xg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Mg(n){const t=new gg,e=vg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new ee,o=new ee;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,D=0,E=0,R=0;c.sort(xg);for(let y=0,M=c.length;y<M;y++){const I=c[y],V=I.color,z=I.intensity,k=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*z,h+=V.g*z,f+=V.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],z);R++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const lt=I.shadow,$=e.get(I);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=q,d++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(z),q.distance=k,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[_]=q;const lt=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,lt.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[_]=lt.matrix,I.castShadow){const $=e.get(I);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=K,v++}_++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(V).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const lt=I.shadow,$=e.get(I);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,$.shadowCameraNear=lt.camera.near,$.shadowCameraFar=lt.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=q,g++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+D-E,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=R,i.version=_g++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Kc(n){const t=new Mg(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yg(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Kc(n),t.set(s,[a])):r>=o.length?(a=new Kc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Wl extends Gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sg extends Gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eg(n,t,e){let i=new Hl;const s=new ut,r=new ut,o=new le,a=new Wl({depthPacking:Bl}),l=new Sg,c={},u=e.maxTextureSize,h={[wi]:Ke,[Ke]:wi,[dn]:dn},f=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:bg,fragmentShader:wg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let p=this.type;this.render=function(E,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=p!==ti&&this.type===ti,k=p===ti&&this.type!==ti;for(let K=0,q=E.length;K<q;K++){const lt=E[K],$=lt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const vt=$.getFrameExtents();if(s.multiply(vt),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/vt.x),s.x=r.x*vt.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/vt.y),s.y=r.y*vt.y,$.mapSize.y=r.y)),$.map===null||z===!0||k===!0){const Tt=this.type!==ti?{minFilter:mn,magFilter:mn}:{};$.map!==null&&$.map.dispose(),$.map=new ui(s.x,s.y,Tt),$.map.texture.name=lt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const Mt=$.getViewportCount();for(let Tt=0;Tt<Mt;Tt++){const $t=$.getViewport(Tt);o.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),V.viewport(o),$.updateMatrices(lt,Tt),i=$.getFrustum(),v(R,P,$.camera,lt,this.type)}$.isPointLightShadow!==!0&&this.type===ti&&S($,P),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,I)};function S(E,R){const P=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ui(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,P,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,P,d,_,null)}function x(E,R,P,y){let M=null;const I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=M.uuid,z=R.uuid;let k=c[V];k===void 0&&(k={},c[V]=k);let K=k[z];K===void 0&&(K=M.clone(),k[z]=K,R.addEventListener("dispose",D)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,y===ti?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=n.properties.get(M);V.light=P}return M}function v(E,R,P,y,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ti)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const z=t.update(E),k=E.material;if(Array.isArray(k)){const K=z.groups;for(let q=0,lt=K.length;q<lt;q++){const $=K[q],vt=k[$.materialIndex];if(vt&&vt.visible){const Mt=x(E,vt,y,M);E.onBeforeShadow(n,E,R,P,z,Mt,$),n.renderBufferDirect(P,null,z,Mt,E,$),E.onAfterShadow(n,E,R,P,z,Mt,$)}}}else if(k.visible){const K=x(E,k,y,M);E.onBeforeShadow(n,E,R,P,z,K,null),n.renderBufferDirect(P,null,z,K,E,null),E.onAfterShadow(n,E,R,P,z,K,null)}}const V=E.children;for(let z=0,k=V.length;z<k;z++)v(V[z],R,P,y,M)}function D(E){E.target.removeEventListener("dispose",D);for(const P in c){const y=c[P],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Tg={[Oa]:za,[Ba]:Ga,[Va]:ka,[Ds]:Ha,[za]:Oa,[Ga]:Ba,[ka]:Va,[Ha]:Ds};function Ag(n,t){function e(){let F=!1;const xt=new le;let Z=null;const et=new le(0,0,0,0);return{setMask:function(Et){Z!==Et&&!F&&(n.colorMask(Et,Et,Et,Et),Z=Et)},setLocked:function(Et){F=Et},setClear:function(Et,bt,Jt,de,Re){Re===!0&&(Et*=de,bt*=de,Jt*=de),xt.set(Et,bt,Jt,de),et.equals(xt)===!1&&(n.clearColor(Et,bt,Jt,de),et.copy(xt))},reset:function(){F=!1,Z=null,et.set(-1,0,0,0)}}}function i(){let F=!1,xt=!1,Z=null,et=null,Et=null;return{setReversed:function(bt){if(xt!==bt){const Jt=t.get("EXT_clip_control");xt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const de=Et;Et=null,this.setClear(de)}xt=bt},getReversed:function(){return xt},setTest:function(bt){bt?ft(n.DEPTH_TEST):Bt(n.DEPTH_TEST)},setMask:function(bt){Z!==bt&&!F&&(n.depthMask(bt),Z=bt)},setFunc:function(bt){if(xt&&(bt=Tg[bt]),et!==bt){switch(bt){case Oa:n.depthFunc(n.NEVER);break;case za:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Ga:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=bt}},setLocked:function(bt){F=bt},setClear:function(bt){Et!==bt&&(xt&&(bt=1-bt),n.clearDepth(bt),Et=bt)},reset:function(){F=!1,Z=null,et=null,Et=null,xt=!1}}}function s(){let F=!1,xt=null,Z=null,et=null,Et=null,bt=null,Jt=null,de=null,Re=null;return{setTest:function(ae){F||(ae?ft(n.STENCIL_TEST):Bt(n.STENCIL_TEST))},setMask:function(ae){xt!==ae&&!F&&(n.stencilMask(ae),xt=ae)},setFunc:function(ae,en,gn){(Z!==ae||et!==en||Et!==gn)&&(n.stencilFunc(ae,en,gn),Z=ae,et=en,Et=gn)},setOp:function(ae,en,gn){(bt!==ae||Jt!==en||de!==gn)&&(n.stencilOp(ae,en,gn),bt=ae,Jt=en,de=gn)},setLocked:function(ae){F=ae},setClear:function(ae){Re!==ae&&(n.clearStencil(ae),Re=ae)},reset:function(){F=!1,xt=null,Z=null,et=null,Et=null,bt=null,Jt=null,de=null,Re=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,D=null,E=null,R=new Ct(0,0,0),P=0,y=!1,M=null,I=null,V=null,z=null,k=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,lt=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec($)[1]),q=lt>=1):$.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=lt>=2);let vt=null,Mt={};const Tt=n.getParameter(n.SCISSOR_BOX),$t=n.getParameter(n.VIEWPORT),ne=new le().fromArray(Tt),Q=new le().fromArray($t);function ot(F,xt,Z,et){const Et=new Uint8Array(4),bt=n.createTexture();n.bindTexture(F,bt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<Z;Jt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(xt+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return bt}const Ut={};Ut[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),Ut[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ut[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(n.DEPTH_TEST),o.setFunc(Ds),Y(!1),At(ic),ft(n.CULL_FACE),L(Si);function ft(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Bt(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Zt(F,xt){return h[F]!==xt?(n.bindFramebuffer(F,xt),h[F]=xt,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xt),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function Vt(F,xt){let Z=d,et=!1;if(F){Z=f.get(xt),Z===void 0&&(Z=[],f.set(xt,Z));const Et=F.textures;if(Z.length!==Et.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Jt=Et.length;bt<Jt;bt++)Z[bt]=n.COLOR_ATTACHMENT0+bt;Z.length=Et.length,et=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,et=!0);et&&n.drawBuffers(Z)}function se(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const nt={[Vi]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};nt[Yh]=n.MIN,nt[$h]=n.MAX;const ht={[Zh]:n.ZERO,[Jh]:n.ONE,[Kh]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[sf]:n.SRC_ALPHA_SATURATE,[ef]:n.DST_COLOR,[Qh]:n.DST_ALPHA,[jh]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[nf]:n.ONE_MINUS_DST_COLOR,[tf]:n.ONE_MINUS_DST_ALPHA,[rf]:n.CONSTANT_COLOR,[of]:n.ONE_MINUS_CONSTANT_COLOR,[af]:n.CONSTANT_ALPHA,[lf]:n.ONE_MINUS_CONSTANT_ALPHA};function L(F,xt,Z,et,Et,bt,Jt,de,Re,ae){if(F===Si){_===!0&&(Bt(n.BLEND),_=!1);return}if(_===!1&&(ft(n.BLEND),_=!0),F!==Wh){if(F!==m||ae!==y){if((p!==Vi||v!==Vi)&&(n.blendEquation(n.FUNC_ADD),p=Vi,v=Vi),ae)switch(F){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $i:n.blendFunc(n.ONE,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $i:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,x=null,D=null,E=null,R.set(0,0,0),P=0,m=F,y=ae}return}Et=Et||xt,bt=bt||Z,Jt=Jt||et,(xt!==p||Et!==v)&&(n.blendEquationSeparate(nt[xt],nt[Et]),p=xt,v=Et),(Z!==S||et!==x||bt!==D||Jt!==E)&&(n.blendFuncSeparate(ht[Z],ht[et],ht[bt],ht[Jt]),S=Z,x=et,D=bt,E=Jt),(de.equals(R)===!1||Re!==P)&&(n.blendColor(de.r,de.g,de.b,Re),R.copy(de),P=Re),m=F,y=!1}function Nt(F,xt){F.side===dn?Bt(n.CULL_FACE):ft(n.CULL_FACE);let Z=F.side===Ke;xt&&(Z=!Z),Y(Z),F.blending===Ts&&F.transparent===!1?L(Si):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const et=F.stencilWrite;a.setTest(et),et&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function At(F){F!==Gh?(ft(n.CULL_FACE),F!==I&&(F===ic?n.cullFace(n.BACK):F===kh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Bt(n.CULL_FACE),I=F}function pt(F){F!==V&&(q&&n.lineWidth(F),V=F)}function Ht(F,xt,Z){F?(ft(n.POLYGON_OFFSET_FILL),(z!==xt||k!==Z)&&(n.polygonOffset(xt,Z),z=xt,k=Z)):Bt(n.POLYGON_OFFSET_FILL)}function Rt(F){F?ft(n.SCISSOR_TEST):Bt(n.SCISSOR_TEST)}function A(F){F===void 0&&(F=n.TEXTURE0+K-1),vt!==F&&(n.activeTexture(F),vt=F)}function b(F,xt,Z){Z===void 0&&(vt===null?Z=n.TEXTURE0+K-1:Z=vt);let et=Mt[Z];et===void 0&&(et={type:void 0,texture:void 0},Mt[Z]=et),(et.type!==F||et.texture!==xt)&&(vt!==Z&&(n.activeTexture(Z),vt=Z),n.bindTexture(F,xt||Ut[F]),et.type=F,et.texture=xt)}function G(){const F=Mt[vt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(F){ne.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function Lt(F){Q.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function Gt(F,xt){let Z=c.get(xt);Z===void 0&&(Z=new WeakMap,c.set(xt,Z));let et=Z.get(F);et===void 0&&(et=n.getUniformBlockIndex(xt,F.name),Z.set(F,et))}function Kt(F,xt){const et=c.get(xt).get(F);l.get(xt)!==et&&(n.uniformBlockBinding(xt,et,F.__bindingPointIndex),l.set(xt,et))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},vt=null,Mt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,D=null,E=null,R=new Ct(0,0,0),P=0,y=!1,M=null,I=null,V=null,z=null,k=null,ne.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Bt,bindFramebuffer:Zt,drawBuffers:Vt,useProgram:se,setBlending:L,setMaterial:Nt,setFlipSided:Y,setCullFace:At,setLineWidth:pt,setPolygonOffset:Ht,setScissorTest:Rt,activeTexture:A,bindTexture:b,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:it,texImage2D:Pt,texImage3D:gt,updateUBOMapping:Gt,uniformBlockBinding:Kt,texStorage2D:Ot,texStorage3D:ct,texSubImage2D:J,texSubImage3D:Ft,compressedTexSubImage2D:at,compressedTexSubImage3D:yt,scissor:Xt,viewport:Lt,reset:ce}}function jc(n,t,e,i){const s=Rg(i);switch(e){case qu:return n*t;case $u:return n*t;case Zu:return n*t*2;case Nl:return n*t/s.components*s.byteLength;case Fl:return n*t/s.components*s.byteLength;case Ju:return n*t*2/s.components*s.byteLength;case Ol:return n*t*2/s.components*s.byteLength;case Yu:return n*t*3/s.components*s.byteLength;case On:return n*t*4/s.components*s.byteLength;case zl:return n*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ja:return Math.max(n,16)*Math.max(t,8)/4;case Ya:case Za:return Math.max(n,8)*Math.max(t,8)/2;case Ka:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xo:case pl:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ku:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vl:case _l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(n){switch(n){case ci:case ku:return{byteLength:1,components:1};case mr:case Wu:case Zi:return{byteLength:2,components:1};case Il:case Ul:return{byteLength:2,components:4};case Ei:case Ll:case Xn:return{byteLength:4,components:1};case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Cg(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):wo("canvas")}function _(A,b,G){let j=1;const it=Rt(A);if((it.width>G||it.height>G)&&(j=G/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(j*it.width),Ft=Math.floor(j*it.height);h===void 0&&(h=g(J,Ft));const at=b?g(J,Ft):h;return at.width=J,at.height=Ft,at.getContext("2d").drawImage(A,0,0,J,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+Ft+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,b,G,j,it=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=b;if(b===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),b===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),b===n.RGBA){const Ft=it?Io:oe.getTransfer(j);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Ft===fe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,b){let G;return A?b===null||b===Ei||b===Us?G=n.DEPTH24_STENCIL8:b===Xn?G=n.DEPTH32F_STENCIL8:b===mr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ei||b===Us?G=n.DEPTH_COMPONENT24:b===Xn?G=n.DEPTH_COMPONENT32F:b===mr&&(G=n.DEPTH_COMPONENT16),G}function D(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==mn&&A.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){const b=A.target;b.removeEventListener("dispose",E),P(b),b.isVideoTexture&&u.delete(b)}function R(A){const b=A.target;b.removeEventListener("dispose",R),M(b)}function P(A){const b=i.get(A);if(b.__webglInit===void 0)return;const G=A.source,j=f.get(G);if(j){const it=j[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(A),Object.keys(j).length===0&&f.delete(G)}i.remove(A)}function y(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const G=A.source,j=f.get(G);delete j[b.__cacheKey],o.memory.textures--}function M(A){const b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let it=0;it<b.__webglFramebuffer[j].length;it++)n.deleteFramebuffer(b.__webglFramebuffer[j][it]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let j=0,it=G.length;j<it;j++){const J=i.get(G[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[j])}i.remove(A)}let I=0;function V(){I=0}function z(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function k(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function K(A,b){const G=i.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,A,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function q(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Q(G,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function lt(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Q(G,A,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function $(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ot(G,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const vt={[pr]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},Mt={[mn]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},Tt={[yf]:n.NEVER,[Af]:n.ALWAYS,[Sf]:n.LESS,[Qu]:n.LEQUAL,[bf]:n.EQUAL,[Tf]:n.GEQUAL,[wf]:n.GREATER,[Ef]:n.NOTEQUAL};function $t(A,b){if(b.type===Xn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===Bo||b.magFilter===Ar||b.magFilter===yi||b.minFilter===Wn||b.minFilter===Bo||b.minFilter===Ar||b.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,vt[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,vt[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,vt[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Mt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mn||b.minFilter!==Ar&&b.minFilter!==yi||b.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ne(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));const j=b.source;let it=f.get(j);it===void 0&&(it={},f.set(j,it));const J=k(b);if(J!==A.__cacheKey){it[J]===void 0&&(it[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[J].usedTimes++;const Ft=it[A.__cacheKey];Ft!==void 0&&(it[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&y(b)),A.__cacheKey=J,A.__webglTexture=it[J].texture}return G}function Q(A,b,G){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const it=ne(A,b),J=b.source;e.bindTexture(j,A.__webglTexture,n.TEXTURE0+G);const Ft=i.get(J);if(J.version!==Ft.__version||it===!0){e.activeTexture(n.TEXTURE0+G);const at=oe.getPrimaries(oe.workingColorSpace),yt=b.colorSpace===ni?null:oe.getPrimaries(b.colorSpace),Ot=b.colorSpace===ni||at===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ct=_(b.image,!1,s.maxTextureSize);ct=Ht(b,ct);const Pt=r.convert(b.format,b.colorSpace),gt=r.convert(b.type);let Xt=x(b.internalFormat,Pt,gt,b.colorSpace,b.isVideoTexture);$t(j,b);let Lt;const Gt=b.mipmaps,Kt=b.isVideoTexture!==!0,ce=Ft.__version===void 0||it===!0,F=J.dataReady,xt=D(b,ct);if(b.isDepthTexture)Xt=v(b.format===Ns,b.type),ce&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Xt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Xt,ct.width,ct.height,0,Pt,gt,null));else if(b.isDataTexture)if(Gt.length>0){Kt&&ce&&e.texStorage2D(n.TEXTURE_2D,xt,Xt,Gt[0].width,Gt[0].height);for(let Z=0,et=Gt.length;Z<et;Z++)Lt=Gt[Z],Kt?F&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Pt,gt,Lt.data):e.texImage2D(n.TEXTURE_2D,Z,Xt,Lt.width,Lt.height,0,Pt,gt,Lt.data);b.generateMipmaps=!1}else Kt?(ce&&e.texStorage2D(n.TEXTURE_2D,xt,Xt,ct.width,ct.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,Pt,gt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Xt,ct.width,ct.height,0,Pt,gt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Kt&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Xt,Gt[0].width,Gt[0].height,ct.depth);for(let Z=0,et=Gt.length;Z<et;Z++)if(Lt=Gt[Z],b.format!==On)if(Pt!==null)if(Kt){if(F)if(b.layerUpdates.size>0){const Et=jc(Lt.width,Lt.height,b.format,b.type);for(const bt of b.layerUpdates){const Jt=Lt.data.subarray(bt*Et/Lt.data.BYTES_PER_ELEMENT,(bt+1)*Et/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,bt,Lt.width,Lt.height,1,Pt,Jt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Lt.width,Lt.height,ct.depth,Pt,Lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Xt,Lt.width,Lt.height,ct.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Lt.width,Lt.height,ct.depth,Pt,gt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Xt,Lt.width,Lt.height,ct.depth,0,Pt,gt,Lt.data)}else{Kt&&ce&&e.texStorage2D(n.TEXTURE_2D,xt,Xt,Gt[0].width,Gt[0].height);for(let Z=0,et=Gt.length;Z<et;Z++)Lt=Gt[Z],b.format!==On?Pt!==null?Kt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?F&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Pt,gt,Lt.data):e.texImage2D(n.TEXTURE_2D,Z,Xt,Lt.width,Lt.height,0,Pt,gt,Lt.data)}else if(b.isDataArrayTexture)if(Kt){if(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Xt,ct.width,ct.height,ct.depth),F)if(b.layerUpdates.size>0){const Z=jc(ct.width,ct.height,b.format,b.type);for(const et of b.layerUpdates){const Et=ct.data.subarray(et*Z/ct.data.BYTES_PER_ELEMENT,(et+1)*Z/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,Pt,gt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Pt,gt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Xt,ct.width,ct.height,ct.depth,0,Pt,gt,ct.data);else if(b.isData3DTexture)Kt?(ce&&e.texStorage3D(n.TEXTURE_3D,xt,Xt,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Pt,gt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Xt,ct.width,ct.height,ct.depth,0,Pt,gt,ct.data);else if(b.isFramebufferTexture){if(ce)if(Kt)e.texStorage2D(n.TEXTURE_2D,xt,Xt,ct.width,ct.height);else{let Z=ct.width,et=ct.height;for(let Et=0;Et<xt;Et++)e.texImage2D(n.TEXTURE_2D,Et,Xt,Z,et,0,Pt,gt,null),Z>>=1,et>>=1}}else if(Gt.length>0){if(Kt&&ce){const Z=Rt(Gt[0]);e.texStorage2D(n.TEXTURE_2D,xt,Xt,Z.width,Z.height)}for(let Z=0,et=Gt.length;Z<et;Z++)Lt=Gt[Z],Kt?F&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Pt,gt,Lt):e.texImage2D(n.TEXTURE_2D,Z,Xt,Pt,gt,Lt);b.generateMipmaps=!1}else if(Kt){if(ce){const Z=Rt(ct);e.texStorage2D(n.TEXTURE_2D,xt,Xt,Z.width,Z.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,gt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Xt,Pt,gt,ct);m(b)&&p(j),Ft.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,G){if(b.image.length!==6)return;const j=ne(A,b),it=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const J=i.get(it);if(it.version!==J.__version||j===!0){e.activeTexture(n.TEXTURE0+G);const Ft=oe.getPrimaries(oe.workingColorSpace),at=b.colorSpace===ni?null:oe.getPrimaries(b.colorSpace),yt=b.colorSpace===ni||Ft===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Ot=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let et=0;et<6;et++)!Ot&&!ct?Pt[et]=_(b.image[et],!0,s.maxCubemapSize):Pt[et]=ct?b.image[et].image:b.image[et],Pt[et]=Ht(b,Pt[et]);const gt=Pt[0],Xt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),Gt=x(b.internalFormat,Xt,Lt,b.colorSpace),Kt=b.isVideoTexture!==!0,ce=J.__version===void 0||j===!0,F=it.dataReady;let xt=D(b,gt);$t(n.TEXTURE_CUBE_MAP,b);let Z;if(Ot){Kt&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Gt,gt.width,gt.height);for(let et=0;et<6;et++){Z=Pt[et].mipmaps;for(let Et=0;Et<Z.length;Et++){const bt=Z[Et];b.format!==On?Xt!==null?Kt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,bt.width,bt.height,Xt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Gt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,bt.width,bt.height,Xt,Lt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Gt,bt.width,bt.height,0,Xt,Lt,bt.data)}}}else{if(Z=b.mipmaps,Kt&&ce){Z.length>0&&xt++;const et=Rt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Gt,et.width,et.height)}for(let et=0;et<6;et++)if(ct){Kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Pt[et].width,Pt[et].height,Xt,Lt,Pt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Gt,Pt[et].width,Pt[et].height,0,Xt,Lt,Pt[et].data);for(let Et=0;Et<Z.length;Et++){const Jt=Z[Et].image[et].image;Kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Jt.width,Jt.height,Xt,Lt,Jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Gt,Jt.width,Jt.height,0,Xt,Lt,Jt.data)}}else{Kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Xt,Lt,Pt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Gt,Xt,Lt,Pt[et]);for(let Et=0;Et<Z.length;Et++){const bt=Z[Et];Kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Xt,Lt,bt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Gt,Xt,Lt,bt.image[et])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),J.__version=it.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ut(A,b,G,j,it,J){const Ft=r.convert(G.format,G.colorSpace),at=r.convert(G.type),yt=x(G.internalFormat,Ft,at,G.colorSpace),Ot=i.get(b),ct=i.get(G);if(ct.__renderTarget=b,!Ot.__hasExternalTextures){const Pt=Math.max(1,b.width>>J),gt=Math.max(1,b.height>>J);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,J,yt,Pt,gt,b.depth,0,Ft,at,null):e.texImage2D(it,J,yt,Pt,gt,0,Ft,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),At(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,it,ct.__webglTexture,0,Y(b)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,it,ct.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(A,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const j=b.depthTexture,it=j&&j.isDepthTexture?j.type:null,J=v(b.stencilBuffer,it),Ft=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Y(b);At(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,J,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,J,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,J,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,A)}else{const j=b.textures;for(let it=0;it<j.length;it++){const J=j[it],Ft=r.convert(J.format,J.colorSpace),at=r.convert(J.type),yt=x(J.internalFormat,Ft,at,J.colorSpace),Ot=Y(b);G&&At(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,yt,b.width,b.height):At(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,yt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,yt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const it=j.__webglTexture,J=Y(b);if(b.depthTexture.format===As)At(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(b.depthTexture.format===Ns)At(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Zt(A){const b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=j}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Bt(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),ft(b.__webglDepthbuffer[j],A,!1);else{const it=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ft(b.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(A,b,G){const j=i.get(A);b!==void 0&&Ut(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Zt(A)}function se(A){const b=A.texture,G=i.get(A),j=i.get(b);A.addEventListener("dispose",R);const it=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ft=it.length>1;if(Ft||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let yt=0;yt<b.mipmaps.length;yt++)G.__webglFramebuffer[at][yt]=n.createFramebuffer()}else G.__webglFramebuffer[at]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)G.__webglFramebuffer[at]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let at=0,yt=it.length;at<yt;at++){const Ot=i.get(it[at]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&At(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<it.length;at++){const yt=it[at];G.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const Ot=r.convert(yt.format,yt.colorSpace),ct=r.convert(yt.type),Pt=x(yt.internalFormat,Ot,ct,yt.colorSpace,A.isXRRenderTarget===!0),gt=Y(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,Pt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,G.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),$t(n.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Ut(G.__webglFramebuffer[at][yt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt);else Ut(G.__webglFramebuffer[at],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let at=0,yt=it.length;at<yt;at++){const Ot=it[at],ct=i.get(Ot);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),$t(n.TEXTURE_2D,Ot),Ut(G.__webglFramebuffer,A,Ot,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Ot)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),$t(at,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Ut(G.__webglFramebuffer[yt],A,b,n.COLOR_ATTACHMENT0,at,yt);else Ut(G.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,at,0);m(b)&&p(at),e.unbindTexture()}A.depthBuffer&&Zt(A)}function nt(A){const b=A.textures;for(let G=0,j=b.length;G<j;G++){const it=b[G];if(m(it)){const J=S(A),Ft=i.get(it).__webglTexture;e.bindTexture(J,Ft),p(J),e.unbindTexture()}}}const ht=[],L=[];function Nt(A){if(A.samples>0){if(At(A)===!1){const b=A.textures,G=A.width,j=A.height;let it=n.COLOR_BUFFER_BIT;const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(A),at=b.length>1;if(at)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[yt]);const Ot=i.get(b[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,it,n.NEAREST),l===!0&&(ht.length=0,L.length=0,ht.push(n.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ht.push(J),L.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[yt]);const Ot=i.get(b[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Y(A){return Math.min(s.maxSamples,A.samples)}function At(A){const b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pt(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ht(A,b){const G=A.colorSpace,j=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ki&&G!==ni&&(oe.getTransfer(G)===fe?(j!==On||it!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=lt,this.setTextureCube=$,this.rebindTextures=Vt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=At}function Pg(n,t){function e(i,s=ni){let r;const o=oe.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return n.BYTE;if(i===Wu)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Zi)return n.HALF_FLOAT;if(i===qu)return n.ALPHA;if(i===Yu)return n.RGB;if(i===On)return n.RGBA;if(i===$u)return n.LUMINANCE;if(i===Zu)return n.LUMINANCE_ALPHA;if(i===As)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===Nl)return n.RED;if(i===Fl)return n.RED_INTEGER;if(i===Ju)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===zl)return n.RGBA_INTEGER;if(i===mo||i===go||i===vo||i===_o)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===$a||i===Za||i===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ka||i===ja||i===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ka||i===ja)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===ul||i===hl||i===fl||i===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===el)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xo||i===pl||i===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xo)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ku||i===gl||i===vl||i===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Dg extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lg={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ne({vertexShader:Ig,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends Bs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Ng,m=e.getContextAttributes();let p=null,S=null;const x=[],v=[],D=new ut;let E=null;const R=new hn;R.viewport=new le;const P=new hn;P.viewport=new le;const y=[R,P],M=new Dg;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=x[Q];return ot===void 0&&(ot=new pa,x[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=x[Q];return ot===void 0&&(ot=new pa,x[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=x[Q];return ot===void 0&&(ot=new pa,x[Q]=ot),ot.getHandSpace()};function z(Q){const ot=v.indexOf(Q.inputSource);if(ot===-1)return;const Ut=x[ot];Ut!==void 0&&(Ut.update(Q.inputSource,Q.frame,c||o),Ut.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let Q=0;Q<x.length;Q++){const ot=v[Q];ot!==null&&(v[Q]=null,x[Q].disconnect(ot))}I=null,V=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ui(d.framebufferWidth,d.framebufferHeight,{format:On,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,Ut=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ns:As,Ut=m.stencil?Us:Ei);const Bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new ui(f.textureWidth,f.textureHeight,{format:On,type:ci,depthTexture:new kl(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Q){for(let ot=0;ot<Q.removed.length;ot++){const Ut=Q.removed[ot],ft=v.indexOf(Ut);ft>=0&&(v[ft]=null,x[ft].disconnect(Ut))}for(let ot=0;ot<Q.added.length;ot++){const Ut=Q.added[ot];let ft=v.indexOf(Ut);if(ft===-1){for(let Zt=0;Zt<x.length;Zt++)if(Zt>=v.length){v.push(Ut),ft=Zt;break}else if(v[Zt]===null){v[Zt]=Ut,ft=Zt;break}if(ft===-1)break}const Bt=x[ft];Bt&&Bt.connect(Ut)}}const q=new N,lt=new N;function $(Q,ot,Ut){q.setFromMatrixPosition(ot.matrixWorld),lt.setFromMatrixPosition(Ut.matrixWorld);const ft=q.distanceTo(lt),Bt=ot.projectionMatrix.elements,Zt=Ut.projectionMatrix.elements,Vt=Bt[14]/(Bt[10]-1),se=Bt[14]/(Bt[10]+1),nt=(Bt[9]+1)/Bt[5],ht=(Bt[9]-1)/Bt[5],L=(Bt[8]-1)/Bt[0],Nt=(Zt[8]+1)/Zt[0],Y=Vt*L,At=Vt*Nt,pt=ft/(-L+Nt),Ht=pt*-L;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ht),Q.translateZ(pt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Bt[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Rt=Vt+pt,A=se+pt,b=Y-Ht,G=At+(ft-Ht),j=nt*se/A*Rt,it=ht*se/A*Rt;Q.projectionMatrix.makePerspective(b,G,j,it,Rt,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function vt(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ot=Q.near,Ut=Q.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Ut=_.depthFar)),M.near=P.near=R.near=ot,M.far=P.far=R.far=Ut,(I!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,V=M.far),R.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;const ft=Q.parent,Bt=M.cameras;vt(M,ft);for(let Zt=0;Zt<Bt.length;Zt++)vt(Bt[Zt],ft);Bt.length===2?$(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),Mt(Q,M,ft)};function Mt(Q,ot,Ut){Ut===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(Ut.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=xl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Tt=null;function $t(Q,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){const Ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ft=!1;Ut.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let Zt=0;Zt<Ut.length;Zt++){const Vt=Ut[Zt];let se=null;if(d!==null)se=d.getViewport(Vt);else{const ht=h.getViewSubImage(f,Vt);se=ht.viewport,Zt===0&&(t.setRenderTargetTextures(S,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(S))}let nt=y[Zt];nt===void 0&&(nt=new hn,nt.layers.enable(Zt),nt.viewport=new le,y[Zt]=nt),nt.matrix.fromArray(Vt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Vt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(se.x,se.y,se.width,se.height),Zt===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(nt)}const Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Zt=h.getDepthInformation(Ut[0]);Zt&&Zt.isValid&&Zt.texture&&_.init(t,Zt,s.renderState)}}for(let Ut=0;Ut<x.length;Ut++){const ft=v[Ut],Bt=x[Ut];ft!==null&&Bt!==void 0&&Bt.update(ft,ot,c||o)}Tt&&Tt(Q,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const ne=new uh;ne.setAnimationLoop($t),this.setAnimationLoop=function(Q){Tt=Q},this.dispose=function(){}}}const Ni=new zn,Og=new ee;function zg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,lh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,Ni.copy(v),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bg(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;i.uniformBlockBinding(S,v)}function c(S,x){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const D=x.program;i.updateUBOMapping(S,D);const E=t.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){const x=h();S.__bindingPointIndex=x;const v=n.createBuffer(),D=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,D,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=s[S.id],v=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,R=v.length;E<R;E++){const P=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,M=P.length;y<M;y++){const I=P[y];if(d(I,E,y,D)===!0){const V=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let K=0;K<z.length;K++){const q=z[K],lt=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,V+k,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,k),k+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,x,v,D){const E=S.value,R=x+"_"+v;if(D[R]===void 0)return typeof E=="number"||typeof E=="boolean"?D[R]=E:D[R]=E.clone(),!0;{const P=D[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return D[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(S){const x=S.uniforms;let v=0;const D=16;for(let R=0,P=x.length;R<P;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,I=y.length;M<I;M++){const V=y[M],z=Array.isArray(V.value)?V.value:[V.value];for(let k=0,K=z.length;k<K;k++){const q=z[k],lt=_(q),$=v%D,vt=$%lt.boundary,Mt=$+vt;v+=vt,Mt!==0&&D-Mt<lt.storage&&(v+=D-Mt),V.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=lt.storage}}}const E=v%D;return E>0&&(v+=D-E),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Vg{constructor(t={}){const{canvas:e=Cf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=ai,this.toneMappingExposure=1;const v=this;let D=!1,E=0,R=0,P=null,y=-1,M=null;const I=new le,V=new le;let z=null;const k=new Ct(0);let K=0,q=e.width,lt=e.height,$=1,vt=null,Mt=null;const Tt=new le(0,0,q,lt),$t=new le(0,0,q,lt);let ne=!1;const Q=new Hl;let ot=!1,Ut=!1;const ft=new ee,Bt=new ee,Zt=new N,Vt=new le,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ht(){return P===null?$:1}let L=i;function Nt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",bt,!1),L===null){const O="webgl2";if(L=Nt(O,w),L===null)throw Nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Y,At,pt,Ht,Rt,A,b,G,j,it,J,Ft,at,yt,Ot,ct,Pt,gt,Xt,Lt,Gt,Kt,ce,F;function xt(){Y=new qp(L),Y.init(),Kt=new Pg(L,Y),At=new Vp(L,Y,t,Kt),pt=new Ag(L,Y),At.reverseDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),Ht=new Zp(L),Rt=new dg,A=new Cg(L,Y,pt,Rt,At,Kt,Ht),b=new Gp(v),G=new Xp(v),j=new nd(L),ce=new zp(L,j),it=new Yp(L,j,Ht,ce),J=new Kp(L,it,j,Ht),Xt=new Jp(L,At,A),ct=new Hp(Rt),Ft=new fg(v,b,G,Y,At,ce,ct),at=new zg(v,Rt),yt=new mg,Ot=new yg(Y),gt=new Op(v,b,G,pt,J,d,l),Pt=new Eg(v,J,At),F=new Bg(L,Ht,At,pt),Lt=new Bp(L,Y,Ht),Gt=new $p(L,Y,Ht),Ht.programs=Ft.programs,v.capabilities=At,v.extensions=Y,v.properties=Rt,v.renderLists=yt,v.shadowMap=Pt,v.state=pt,v.info=Ht}xt();const Z=new Fg(v,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Y.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Y.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(q,lt,!1))},this.getSize=function(w){return w.set(q,lt)},this.setSize=function(w,O,T=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,lt=O,e.width=Math.floor(w*$),e.height=Math.floor(O*$),T===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(q*$,lt*$).floor()},this.setDrawingBufferSize=function(w,O,T){q=w,lt=O,$=T,e.width=Math.floor(w*T),e.height=Math.floor(O*T),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Tt)},this.setViewport=function(w,O,T,U){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,O,T,U),pt.viewport(I.copy(Tt).multiplyScalar($).round())},this.getScissor=function(w){return w.copy($t)},this.setScissor=function(w,O,T,U){w.isVector4?$t.set(w.x,w.y,w.z,w.w):$t.set(w,O,T,U),pt.scissor(V.copy($t).multiplyScalar($).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){pt.setScissorTest(ne=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(w=!0,O=!0,T=!0){let U=0;if(w){let C=!1;if(P!==null){const H=P.texture.format;C=H===zl||H===Ol||H===Fl}if(C){const H=P.texture.type,W=H===ci||H===Ei||H===mr||H===Us||H===Il||H===Ul,X=gt.getClearColor(),B=gt.getClearAlpha(),st=X.r,rt=X.g,tt=X.b;W?(g[0]=st,g[1]=rt,g[2]=tt,g[3]=B,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=st,_[1]=rt,_[2]=tt,_[3]=B,L.clearBufferiv(L.COLOR,0,_))}else U|=L.COLOR_BUFFER_BIT}O&&(U|=L.DEPTH_BUFFER_BIT),T&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),yt.dispose(),Ot.dispose(),Rt.dispose(),b.dispose(),G.dispose(),J.dispose(),ce.dispose(),F.dispose(),Ft.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ri),Z.removeEventListener("sessionend",Qi),Vn.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Ht.autoReset,O=Pt.enabled,T=Pt.autoUpdate,U=Pt.needsUpdate,C=Pt.type;xt(),Ht.autoReset=w,Pt.enabled=O,Pt.autoUpdate=T,Pt.needsUpdate=U,Pt.type=C}function bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Jt(w){const O=w.target;O.removeEventListener("dispose",Jt),de(O)}function de(w){Re(w),Rt.remove(w)}function Re(w){const O=Rt.get(w).programs;O!==void 0&&(O.forEach(function(T){Ft.releaseProgram(T)}),w.isShaderMaterial&&Ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,T,U,C,H){O===null&&(O=se);const W=C.isMesh&&C.matrixWorld.determinant()<0,X=we(w,O,T,U,C);pt.setMaterial(U,W);let B=T.index,st=1;if(U.wireframe===!0){if(B=it.getWireframeAttribute(T),B===void 0)return;st=2}const rt=T.drawRange,tt=T.attributes.position;let _t=rt.start*st,It=(rt.start+rt.count)*st;H!==null&&(_t=Math.max(_t,H.start*st),It=Math.min(It,(H.start+H.count)*st)),B!==null?(_t=Math.max(_t,0),It=Math.min(It,B.count)):tt!=null&&(_t=Math.max(_t,0),It=Math.min(It,tt.count));const zt=It-_t;if(zt<0||zt===1/0)return;ce.setup(C,U,X,T,B);let mt,wt=Lt;if(B!==null&&(mt=j.get(B),wt=Gt,wt.setIndex(mt)),C.isMesh)U.wireframe===!0?(pt.setLineWidth(U.wireframeLinewidth*ht()),wt.setMode(L.LINES)):wt.setMode(L.TRIANGLES);else if(C.isLine){let dt=U.linewidth;dt===void 0&&(dt=1),pt.setLineWidth(dt*ht()),C.isLineSegments?wt.setMode(L.LINES):C.isLineLoop?wt.setMode(L.LINE_LOOP):wt.setMode(L.LINE_STRIP)}else C.isPoints?wt.setMode(L.POINTS):C.isSprite&&wt.setMode(L.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)wt.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))wt.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const dt=C._multiDrawStarts,ye=C._multiDrawCounts,kt=C._multiDrawCount,ve=B?j.get(B).bytesPerElement:1,Cn=Rt.get(U).currentProgram.getUniforms();for(let Ce=0;Ce<kt;Ce++)Cn.setValue(L,"_gl_DrawID",Ce),wt.render(dt[Ce]/ve,ye[Ce])}else if(C.isInstancedMesh)wt.renderInstances(_t,zt,C.count);else if(T.isInstancedBufferGeometry){const dt=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,ye=Math.min(T.instanceCount,dt);wt.renderInstances(_t,zt,ye)}else wt.render(_t,zt)};function ae(w,O,T){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=Ke,w.needsUpdate=!0,Ci(w,O,T),w.side=wi,w.needsUpdate=!0,Ci(w,O,T),w.side=dn):Ci(w,O,T)}this.compile=function(w,O,T=null){T===null&&(T=w),p=Ot.get(T),p.init(O),x.push(p),T.traverseVisible(function(C){C.isLight&&C.layers.test(O.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),w!==T&&w.traverseVisible(function(C){C.isLight&&C.layers.test(O.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),p.setupLights();const U=new Set;return w.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const H=C.material;if(H)if(Array.isArray(H))for(let W=0;W<H.length;W++){const X=H[W];ae(X,T,C),U.add(X)}else ae(H,T,C),U.add(H)}),x.pop(),p=null,U},this.compileAsync=function(w,O,T=null){const U=this.compile(w,O,T);return new Promise(C=>{function H(){if(U.forEach(function(W){Rt.get(W).currentProgram.isReady()&&U.delete(W)}),U.size===0){C(w);return}setTimeout(H,10)}Y.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let en=null;function gn(w){en&&en(w)}function Ri(){Vn.stop()}function Qi(){Vn.start()}const Vn=new uh;Vn.setAnimationLoop(gn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(w){en=w,Z.setAnimationLoop(w),w===null?Vn.stop():Vn.start()},Z.addEventListener("sessionstart",Ri),Z.addEventListener("sessionend",Qi),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,P),p=Ot.get(w,x.length),p.init(O),x.push(p),Bt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(Bt),Ut=this.localClippingEnabled,ot=ct.init(this.clippingPlanes,Ut),m=yt.get(w,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){const H=v.xr.getDepthSensingMesh();H!==null&&vn(H,O,-1/0,v.sortObjects)}vn(w,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(vt,Mt),nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,nt&&gt.addToRenderList(m,w),this.info.render.frame++,ot===!0&&ct.beginShadows();const T=p.state.shadowsArray;Pt.render(T,w,O),ot===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=m.opaque,C=m.transmissive;if(p.setupLights(),O.isArrayCamera){const H=O.cameras;if(C.length>0)for(let W=0,X=H.length;W<X;W++){const B=H[W];Ws(U,C,w,B)}nt&&gt.render(w);for(let W=0,X=H.length;W<X;W++){const B=H[W];wr(m,w,B,B.viewport)}}else C.length>0&&Ws(U,C,w,O),nt&&gt.render(w),wr(m,w,O);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,O),ce.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ot===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function vn(w,O,T,U){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)T=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){U&&Vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Bt);const W=J.update(w),X=w.material;X.visible&&m.push(w,W,X,T,Vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const W=J.update(w),X=w.material;if(U&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Vt.copy(w.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),Vt.copy(W.boundingSphere.center)),Vt.applyMatrix4(w.matrixWorld).applyMatrix4(Bt)),Array.isArray(X)){const B=W.groups;for(let st=0,rt=B.length;st<rt;st++){const tt=B[st],_t=X[tt.materialIndex];_t&&_t.visible&&m.push(w,W,_t,T,Vt.z,tt)}}else X.visible&&m.push(w,W,X,T,Vt.z,null)}}const H=w.children;for(let W=0,X=H.length;W<X;W++)vn(H[W],O,T,U)}function wr(w,O,T,U){const C=w.opaque,H=w.transmissive,W=w.transparent;p.setupLightsView(T),ot===!0&&ct.setGlobalState(v.clippingPlanes,T),U&&pt.viewport(I.copy(U)),C.length>0&&ts(C,O,T),H.length>0&&ts(H,O,T),W.length>0&&ts(W,O,T),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ws(w,O,T,U){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new ui(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Zi:ci,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const H=p.state.transmissionRenderTarget[U.id],W=U.viewport||I;H.setSize(W.z,W.w);const X=v.getRenderTarget();v.setRenderTarget(H),v.getClearColor(k),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),nt&&gt.render(T);const B=v.toneMapping;v.toneMapping=ai;const st=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),ot===!0&&ct.setGlobalState(v.clippingPlanes,U),ts(w,T,U),A.updateMultisampleRenderTarget(H),A.updateRenderTargetMipmap(H),Y.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let tt=0,_t=O.length;tt<_t;tt++){const It=O[tt],zt=It.object,mt=It.geometry,wt=It.material,dt=It.group;if(wt.side===dn&&zt.layers.test(U.layers)){const ye=wt.side;wt.side=Ke,wt.needsUpdate=!0,An(zt,T,U,mt,wt,dt),wt.side=ye,wt.needsUpdate=!0,rt=!0}}rt===!0&&(A.updateMultisampleRenderTarget(H),A.updateRenderTargetMipmap(H))}v.setRenderTarget(X),v.setClearColor(k,K),st!==void 0&&(U.viewport=st),v.toneMapping=B}function ts(w,O,T){const U=O.isScene===!0?O.overrideMaterial:null;for(let C=0,H=w.length;C<H;C++){const W=w[C],X=W.object,B=W.geometry,st=U===null?W.material:U,rt=W.group;X.layers.test(T.layers)&&An(X,O,T,B,st,rt)}}function An(w,O,T,U,C,H){w.onBeforeRender(v,O,T,U,C,H),w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),C.onBeforeRender(v,O,T,U,w,H),C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=Ke,C.needsUpdate=!0,v.renderBufferDirect(T,O,U,C,w,H),C.side=wi,C.needsUpdate=!0,v.renderBufferDirect(T,O,U,C,w,H),C.side=dn):v.renderBufferDirect(T,O,U,C,w,H),w.onAfterRender(v,O,T,U,C,H)}function Ci(w,O,T){O.isScene!==!0&&(O=se);const U=Rt.get(w),C=p.state.lights,H=p.state.shadowsArray,W=C.state.version,X=Ft.getParameters(w,C.state,H,O,T),B=Ft.getProgramCacheKey(X);let st=U.programs;U.environment=w.isMeshStandardMaterial?O.environment:null,U.fog=O.fog,U.envMap=(w.isMeshStandardMaterial?G:b).get(w.envMap||U.environment),U.envMapRotation=U.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,st===void 0&&(w.addEventListener("dispose",Jt),st=new Map,U.programs=st);let rt=st.get(B);if(rt!==void 0){if(U.currentProgram===rt&&U.lightsStateVersion===W)return Er(w,X),rt}else X.uniforms=Ft.getUniforms(w),w.onBeforeCompile(X,v),rt=Ft.acquireProgram(X,B),st.set(B,rt),U.uniforms=X.uniforms;const tt=U.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=ct.uniform),Er(w,X),U.needsLights=Tr(w),U.lightsStateVersion=W,U.needsLights&&(tt.ambientLightColor.value=C.state.ambient,tt.lightProbe.value=C.state.probe,tt.directionalLights.value=C.state.directional,tt.directionalLightShadows.value=C.state.directionalShadow,tt.spotLights.value=C.state.spot,tt.spotLightShadows.value=C.state.spotShadow,tt.rectAreaLights.value=C.state.rectArea,tt.ltc_1.value=C.state.rectAreaLTC1,tt.ltc_2.value=C.state.rectAreaLTC2,tt.pointLights.value=C.state.point,tt.pointLightShadows.value=C.state.pointShadow,tt.hemisphereLights.value=C.state.hemi,tt.directionalShadowMap.value=C.state.directionalShadowMap,tt.directionalShadowMatrix.value=C.state.directionalShadowMatrix,tt.spotShadowMap.value=C.state.spotShadowMap,tt.spotLightMatrix.value=C.state.spotLightMatrix,tt.spotLightMap.value=C.state.spotLightMap,tt.pointShadowMap.value=C.state.pointShadowMap,tt.pointShadowMatrix.value=C.state.pointShadowMatrix),U.currentProgram=rt,U.uniformsList=null,rt}function Rn(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Mo.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Er(w,O){const T=Rt.get(w);T.outputColorSpace=O.outputColorSpace,T.batching=O.batching,T.batchingColor=O.batchingColor,T.instancing=O.instancing,T.instancingColor=O.instancingColor,T.instancingMorph=O.instancingMorph,T.skinning=O.skinning,T.morphTargets=O.morphTargets,T.morphNormals=O.morphNormals,T.morphColors=O.morphColors,T.morphTargetsCount=O.morphTargetsCount,T.numClippingPlanes=O.numClippingPlanes,T.numIntersection=O.numClipIntersection,T.vertexAlphas=O.vertexAlphas,T.vertexTangents=O.vertexTangents,T.toneMapping=O.toneMapping}function we(w,O,T,U,C){O.isScene!==!0&&(O=se),A.resetTextureUnits();const H=O.fog,W=U.isMeshStandardMaterial?O.environment:null,X=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ki,B=(U.isMeshStandardMaterial?G:b).get(U.envMap||W),st=U.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,rt=!!T.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),tt=!!T.morphAttributes.position,_t=!!T.morphAttributes.normal,It=!!T.morphAttributes.color;let zt=ai;U.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(zt=v.toneMapping);const mt=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,wt=mt!==void 0?mt.length:0,dt=Rt.get(U),ye=p.state.lights;if(ot===!0&&(Ut===!0||w!==M)){const ze=w===M&&U.id===y;ct.setState(U,w,ze)}let kt=!1;U.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==ye.state.version||dt.outputColorSpace!==X||C.isBatchedMesh&&dt.batching===!1||!C.isBatchedMesh&&dt.batching===!0||C.isBatchedMesh&&dt.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&dt.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&dt.instancing===!1||!C.isInstancedMesh&&dt.instancing===!0||C.isSkinnedMesh&&dt.skinning===!1||!C.isSkinnedMesh&&dt.skinning===!0||C.isInstancedMesh&&dt.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&dt.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&dt.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&dt.instancingMorph===!1&&C.morphTexture!==null||dt.envMap!==B||U.fog===!0&&dt.fog!==H||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==ct.numPlanes||dt.numIntersection!==ct.numIntersection)||dt.vertexAlphas!==st||dt.vertexTangents!==rt||dt.morphTargets!==tt||dt.morphNormals!==_t||dt.morphColors!==It||dt.toneMapping!==zt||dt.morphTargetsCount!==wt)&&(kt=!0):(kt=!0,dt.__version=U.version);let ve=dt.currentProgram;kt===!0&&(ve=Ci(U,O,C));let Cn=!1,Ce=!1,_n=!1;const jt=ve.getUniforms(),Yt=dt.uniforms;if(pt.useProgram(ve.program)&&(Cn=!0,Ce=!0,_n=!0),U.id!==y&&(y=U.id,Ce=!0),Cn||M!==w){pt.buffers.depth.getReversed()?(ft.copy(w.projectionMatrix),Df(ft),Lf(ft),jt.setValue(L,"projectionMatrix",ft)):jt.setValue(L,"projectionMatrix",w.projectionMatrix),jt.setValue(L,"viewMatrix",w.matrixWorldInverse);const nn=jt.map.cameraPosition;nn!==void 0&&nn.setValue(L,Zt.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&jt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&jt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ce=!0,_n=!0)}if(C.isSkinnedMesh){jt.setOptional(L,C,"bindMatrix"),jt.setOptional(L,C,"bindMatrixInverse");const ze=C.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),jt.setValue(L,"boneTexture",ze.boneTexture,A))}C.isBatchedMesh&&(jt.setOptional(L,C,"batchingTexture"),jt.setValue(L,"batchingTexture",C._matricesTexture,A),jt.setOptional(L,C,"batchingIdTexture"),jt.setValue(L,"batchingIdTexture",C._indirectTexture,A),jt.setOptional(L,C,"batchingColorTexture"),C._colorsTexture!==null&&jt.setValue(L,"batchingColorTexture",C._colorsTexture,A));const Pe=T.morphAttributes;if((Pe.position!==void 0||Pe.normal!==void 0||Pe.color!==void 0)&&Xt.update(C,T,ve),(Ce||dt.receiveShadow!==C.receiveShadow)&&(dt.receiveShadow=C.receiveShadow,jt.setValue(L,"receiveShadow",C.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Yt.envMap.value=B,Yt.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&O.environment!==null&&(Yt.envMapIntensity.value=O.environmentIntensity),Ce&&(jt.setValue(L,"toneMappingExposure",v.toneMappingExposure),dt.needsLights&&zo(Yt,_n),H&&U.fog===!0&&at.refreshFogUniforms(Yt,H),at.refreshMaterialUniforms(Yt,U,$,lt,p.state.transmissionRenderTarget[w.id]),Mo.upload(L,Rn(dt),Yt,A)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Mo.upload(L,Rn(dt),Yt,A),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&jt.setValue(L,"center",C.center),jt.setValue(L,"modelViewMatrix",C.modelViewMatrix),jt.setValue(L,"normalMatrix",C.normalMatrix),jt.setValue(L,"modelMatrix",C.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const ze=U.uniformsGroups;for(let nn=0,Pn=ze.length;nn<Pn;nn++){const nc=ze[nn];F.update(nc,ve),F.bind(nc,ve)}}return ve}function zo(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Tr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,T){Rt.get(w.texture).__webglTexture=O,Rt.get(w.depthTexture).__webglTexture=T;const U=Rt.get(w);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=T===void 0,U.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const T=Rt.get(w);T.__webglFramebuffer=O,T.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,T=0){P=w,E=O,R=T;let U=!0,C=null,H=!1,W=!1;if(w){const B=Rt.get(w);if(B.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(L.FRAMEBUFFER,null),U=!1;else if(B.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(B.__hasExternalTextures)A.rebindTextures(w,Rt.get(w.texture).__webglTexture,Rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(B.__boundDepthTexture!==tt){if(tt!==null&&Rt.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const st=w.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(W=!0);const rt=Rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(rt[O])?C=rt[O][T]:C=rt[O],H=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?C=Rt.get(w).__webglMultisampledFramebuffer:Array.isArray(rt)?C=rt[T]:C=rt,I.copy(w.viewport),V.copy(w.scissor),z=w.scissorTest}else I.copy(Tt).multiplyScalar($).floor(),V.copy($t).multiplyScalar($).floor(),z=ne;if(pt.bindFramebuffer(L.FRAMEBUFFER,C)&&U&&pt.drawBuffers(w,C),pt.viewport(I),pt.scissor(V),pt.setScissorTest(z),H){const B=Rt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,B.__webglTexture,T)}else if(W){const B=Rt.get(w.texture),st=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,B.__webglTexture,T||0,st)}y=-1},this.readRenderTargetPixels=function(w,O,T,U,C,H,W){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let X=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&W!==void 0&&(X=X[W]),X){pt.bindFramebuffer(L.FRAMEBUFFER,X);try{const B=w.texture,st=B.format,rt=B.type;if(!At.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-U&&T>=0&&T<=w.height-C&&L.readPixels(O,T,U,C,Kt.convert(st),Kt.convert(rt),H)}finally{const B=P!==null?Rt.get(P).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,B)}}},this.readRenderTargetPixelsAsync=async function(w,O,T,U,C,H,W){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let X=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&W!==void 0&&(X=X[W]),X){const B=w.texture,st=B.format,rt=B.type;if(!At.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-U&&T>=0&&T<=w.height-C){pt.bindFramebuffer(L.FRAMEBUFFER,X);const tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,H.byteLength,L.STREAM_READ),L.readPixels(O,T,U,C,Kt.convert(st),Kt.convert(rt),0);const _t=P!==null?Rt.get(P).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,_t);const It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pf(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,H),L.deleteBuffer(tt),L.deleteSync(It),H}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,T=0){w.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const U=Math.pow(2,-T),C=Math.floor(w.image.width*U),H=Math.floor(w.image.height*U),W=O!==null?O.x:0,X=O!==null?O.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,T,0,0,W,X,C,H),pt.unbindTexture()},this.copyTextureToTexture=function(w,O,T=null,U=null,C=0){w.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1],O=arguments[2],C=arguments[3]||0,T=null);let H,W,X,B,st,rt,tt,_t,It;const zt=w.isCompressedTexture?w.mipmaps[C]:w.image;T!==null?(H=T.max.x-T.min.x,W=T.max.y-T.min.y,X=T.isBox3?T.max.z-T.min.z:1,B=T.min.x,st=T.min.y,rt=T.isBox3?T.min.z:0):(H=zt.width,W=zt.height,X=zt.depth||1,B=0,st=0,rt=0),U!==null?(tt=U.x,_t=U.y,It=U.z):(tt=0,_t=0,It=0);const mt=Kt.convert(O.format),wt=Kt.convert(O.type);let dt;O.isData3DTexture?(A.setTexture3D(O,0),dt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),dt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ye=L.getParameter(L.UNPACK_ROW_LENGTH),kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ve=L.getParameter(L.UNPACK_SKIP_PIXELS),Cn=L.getParameter(L.UNPACK_SKIP_ROWS),Ce=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,zt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,zt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,B),L.pixelStorei(L.UNPACK_SKIP_ROWS,st),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rt);const _n=w.isDataArrayTexture||w.isData3DTexture,jt=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Yt=Rt.get(w),Pe=Rt.get(O),ze=Rt.get(Yt.__renderTarget),nn=Rt.get(Pe.__renderTarget);pt.bindFramebuffer(L.READ_FRAMEBUFFER,ze.__webglFramebuffer),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let Pn=0;Pn<X;Pn++)_n&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(w).__webglTexture,C,rt+Pn),w.isDepthTexture?(jt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(O).__webglTexture,C,It+Pn),L.blitFramebuffer(B,st,H,W,tt,_t,H,W,L.DEPTH_BUFFER_BIT,L.NEAREST)):jt?L.copyTexSubImage3D(dt,C,tt,_t,It+Pn,B,st,H,W):L.copyTexSubImage2D(dt,C,tt,_t,It+Pn,B,st,H,W);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else jt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(dt,C,tt,_t,It,H,W,X,mt,wt,zt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(dt,C,tt,_t,It,H,W,X,mt,zt.data):L.texSubImage3D(dt,C,tt,_t,It,H,W,X,mt,wt,zt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,C,tt,_t,H,W,mt,wt,zt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,C,tt,_t,zt.width,zt.height,mt,zt.data):L.texSubImage2D(L.TEXTURE_2D,C,tt,_t,H,W,mt,wt,zt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Cn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),C===0&&O.generateMipmaps&&L.generateMipmap(dt),pt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,T=null,U=null,C=0){return w.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,U=arguments[1]||null,w=arguments[2],O=arguments[3],C=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,T,U,C)},this.initRenderTarget=function(w){Rt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,pt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Xl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new Xl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qc extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gh extends Ye{constructor(t=null,e=1,i=1,s,r,o,a,l,c=mn,u=mn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl extends Ae{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ms=new ee,tu=new ee,$r=[],eu=new ji,Hg=new ee,Js=new qt,Ks=new Hs;class Fo extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Hg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),eu.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(eu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),Ks.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),tu.multiplyMatrices(i,ms),Js.matrixWorld=tu,Js.raycast(t,$r);for(let o=0,a=$r.length;o<a;o++){const l=$r[o];l.instanceId=r,l.object=this,e.push(l)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gh(new Float32Array(s*this.count),s,this.count,Nl,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Gg extends Gs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nu=new ee,bl=new ih,Zr=new Hs,Jr=new N;class Eo extends We{constructor(t=new ge,e=new Gg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;nu.copy(s).invert(),bl.copy(t.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Jr.fromBufferAttribute(h,m),iu(Jr,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Jr.fromBufferAttribute(h,g),iu(Jr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function iu(n,t,e,i,s,r,o){const a=bl.distanceSqToPoint(n);if(a<e){const l=new N;bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class kg extends Ye{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new N,s=[],r=[],o=[],a=new N,l=new ee;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ke(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ql extends $n{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wg extends ql{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Kr=new N,ma=new Yl,ga=new Yl,va=new Yl;class Xg extends $n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Kr.subVectors(s[0],s[1]).add(s[0]),c=Kr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ma.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),ga.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),va.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ga.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),va.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ma.calc(l),ga.calc(l),va.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function su(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function qg(n,t){const e=1-n;return e*e*t}function Yg(n,t){return 2*(1-n)*n*t}function $g(n,t){return n*n*t}function hr(n,t,e,i){return qg(n,t)+Yg(n,e)+$g(n,i)}function Zg(n,t){const e=1-n;return e*e*e*t}function Jg(n,t){const e=1-n;return 3*e*e*n*t}function Kg(n,t){return 3*(1-n)*n*n*t}function jg(n,t){return n*n*n*t}function fr(n,t,e,i,s){return Zg(n,t)+Jg(n,e)+Kg(n,i)+jg(n,s)}class vh extends $n{constructor(t=new ut,e=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qg extends $n{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y),fr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _h extends $n{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tv extends $n{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends $n{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ev extends $n{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(su(a,l.x,c.x,u.x,h.x),su(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:Wg,CatmullRomCurve3:Xg,CubicBezierCurve:vh,CubicBezierCurve3:Qg,EllipseCurve:ql,LineCurve:_h,LineCurve3:tv,QuadraticBezierCurve:xh,QuadraticBezierCurve3:ev,SplineCurve:Mh});class nv extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new wl[s.type]().fromJSON(s))}return this}}class ru extends nv{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new _h(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new xh(this.currentPoint.clone(),new ut(t,e),new ut(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new vh(this.currentPoint.clone(),new ut(t,e),new ut(i,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Mh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new ql(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sr extends ge{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new N,f=new ut,d=new N,g=new N,_=new N;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){const x=i+S*u*s,v=Math.sin(x),D=Math.cos(x);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*v,h.y=t[E].y,h.z=t[E].x*D,o.push(h.x,h.y,h.z),f.x=S/e,f.y=E/(t.length-1),a.push(f.x,f.y);const R=l[3*E+0]*v,P=l[3*E+1],y=l[3*E+0]*D;c.push(R,P,y)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const v=x+S*t.length,D=v,E=v+t.length,R=v+t.length+1,P=v+1;r.push(D,E,P),r.push(R,P,E)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.points,t.segments,t.phiStart,t.phiLength)}}class $l extends ge{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,u=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rn extends ge{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function S(){const v=new N,D=new N;let E=0;const R=(e-t)/i;for(let P=0;P<=r;P++){const y=[],M=P/r,I=M*(e-t)+t;for(let V=0;V<=s;V++){const z=V/s,k=z*l+a,K=Math.sin(k),q=Math.cos(k);D.x=I*K,D.y=-M*i+m,D.z=I*q,h.push(D.x,D.y,D.z),v.set(K,R,q).normalize(),f.push(v.x,v.y,v.z),d.push(z,1-M),y.push(g++)}_.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const M=_[y][P],I=_[y+1][P],V=_[y+1][P+1],z=_[y][P+1];(t>0||y!==0)&&(u.push(M,I,z),E+=3),(e>0||y!==r-1)&&(u.push(I,V,z),E+=3)}c.addGroup(p,E,0),p+=E}function x(v){const D=g,E=new ut,R=new N;let P=0;const y=v===!0?t:e,M=v===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const I=g;for(let V=0;V<=s;V++){const k=V/s*l+a,K=Math.cos(k),q=Math.sin(k);R.x=y*q,R.y=m*M,R.z=y*K,h.push(R.x,R.y,R.z),f.push(0,M,0),E.x=K*.5+.5,E.y=q*.5*M+.5,d.push(E.x,E.y),g++}for(let V=0;V<s;V++){const z=D+V,k=I+V;v===!0?u.push(k,k+1,z):u.push(k+1,k,z),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bn extends rn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zl extends ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new N,v=new N,D=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],v),d(e[E+2],D),l(x,v,D,S)}function l(S,x,v,D){const E=D+1,R=[];for(let P=0;P<=E;P++){R[P]=[];const y=S.clone().lerp(v,P/E),M=x.clone().lerp(v,P/E),I=E-P;for(let V=0;V<=I;V++)V===0&&P===E?R[P][V]=y:R[P][V]=y.clone().lerp(M,V/I)}for(let P=0;P<E;P++)for(let y=0;y<2*(E-P)-1;y++){const M=Math.floor(y/2);y%2===0?(f(R[P][M+1]),f(R[P+1][M]),f(R[P][M])):(f(R[P][M+1]),f(R[P+1][M+1]),f(R[P+1][M]))}}function c(S){const x=new N;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(S),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const S=new N;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const v=m(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;o.push(v,1-D)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const x=o[S+0],v=o[S+2],D=o[S+4],E=Math.max(x,v,D),R=Math.min(x,v,D);E>.9&&R<.1&&(x<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),D<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const S=new N,x=new N,v=new N,D=new N,E=new ut,R=new ut,P=new ut;for(let y=0,M=0;y<r.length;y+=9,M+=6){S.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),E.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),D.copy(S).add(x).add(v).divideScalar(3);const I=m(D);_(E,M+0,S,I),_(R,M+2,x,I),_(P,M+4,v,I)}}function _(S,x,v,D){D<0&&S.x===1&&(o[x]=S.x-1),v.x===0&&v.z===0&&(o[x]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.vertices,t.indices,t.radius,t.details)}}class yh extends ru{constructor(t){super(t),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ru().fromJSON(s))}return this}}const iv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Sh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=lv(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return gr(r,o,e,a,l,d,0),o}};function Sh(n,t,e,i,s){let r,o;if(s===xv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=ou(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=ou(r,n[r],n[r+1],o);return o&&Oo(o,o.next)&&(_r(o),o=o.next),o}function Ji(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Oo(e,e.next)||xe(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function gr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&dv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?rv(n,i,s,r):sv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),_r(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ov(Ji(n),t,e),gr(n,t,e,i,s,r,2)):o===2&&av(n,t,e,i,s,r):gr(Ji(n),t,e,i,s,r,1);break}}}function sv(n){const t=n.prev,e=n,i=n.next;if(xe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Ms(s,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=El(d,g,t,e,i),S=El(_,m,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ms(a,u,l,h,c,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ms(a,u,l,h,c,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ms(a,u,l,h,c,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ms(a,u,l,h,c,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ov(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Oo(s,r)&&bh(s,i,i.next,r)&&vr(s,r)&&vr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),_r(i),_r(i.next),i=n=r),i=i.next}while(i!==n);return Ji(i)}function av(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gv(o,a)){let l=wh(o,a);o=Ji(o,o.next),l=Ji(l,l.next),gr(o,t,e,i,s,r,0),gr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function lv(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Sh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(mv(c));for(s.sort(cv),r=0;r<s.length;r++)e=uv(s[r],e);return e}function cv(n,t){return n.x-t.x}function uv(n,t){const e=hv(n,t);if(!e)return t;const i=wh(e,n);return Ji(i,i.next),Ji(e,e.next)}function hv(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ms(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),vr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&fv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function fv(n,t){return xe(n.prev,n,t.prev)<0&&xe(t.next,n,n.next)<0}function dv(n,t,e,i){let s=n;do s.z===0&&(s.z=El(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pv(s)}function pv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function El(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function mv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ms(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function gv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!vv(n,t)&&(vr(n,t)&&vr(t,n)&&_v(n,t)&&(xe(n.prev,n,t.prev)||xe(n,t.prev,t))||Oo(n,t)&&xe(n.prev,n,n.next)>0&&xe(t.prev,t,t.next)>0)}function xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Oo(n,t){return n.x===t.x&&n.y===t.y}function bh(n,t,e,i){const s=Qr(xe(n,t,e)),r=Qr(xe(n,t,i)),o=Qr(xe(e,i,n)),a=Qr(xe(e,i,t));return!!(s!==r&&o!==a||s===0&&jr(n,e,t)||r===0&&jr(n,i,t)||o===0&&jr(e,n,i)||a===0&&jr(e,t,i))}function jr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Qr(n){return n>0?1:n<0?-1:0}function vv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&bh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function vr(n,t){return xe(n.prev,n,n.next)<0?xe(n,t,n.next)>=0&&xe(n,n.prev,t)>=0:xe(n,t,n.prev)<0||xe(n,n.next,t)<0}function _v(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wh(n,t){const e=new Tl(n.i,n.x,n.y),i=new Tl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ou(n,t,e,i){const s=new Tl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class dr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return dr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];au(t),lu(i,t);let o=t.length;e.forEach(au);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,lu(i,e[l]);const a=iv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function au(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function lu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Jl extends ge{constructor(t=new yh([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Mv;let x,v=!1,D,E,R,P;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,D=p.computeFrenetFrames(u,!1),E=new N,R=new N,P=new N),f||(m=0,d=0,g=0,_=0);const y=a.extractPoints(c);let M=y.shape;const I=y.holes;if(!dr.isClockWise(M)){M=M.reverse();for(let nt=0,ht=I.length;nt<ht;nt++){const L=I[nt];dr.isClockWise(L)&&(I[nt]=L.reverse())}}const z=dr.triangulateShape(M,I),k=M;for(let nt=0,ht=I.length;nt<ht;nt++){const L=I[nt];M=M.concat(L)}function K(nt,ht,L){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ht,L)}const q=M.length,lt=z.length;function $(nt,ht,L){let Nt,Y,At;const pt=nt.x-ht.x,Ht=nt.y-ht.y,Rt=L.x-nt.x,A=L.y-nt.y,b=pt*pt+Ht*Ht,G=pt*A-Ht*Rt;if(Math.abs(G)>Number.EPSILON){const j=Math.sqrt(b),it=Math.sqrt(Rt*Rt+A*A),J=ht.x-Ht/j,Ft=ht.y+pt/j,at=L.x-A/it,yt=L.y+Rt/it,Ot=((at-J)*A-(yt-Ft)*Rt)/(pt*A-Ht*Rt);Nt=J+pt*Ot-nt.x,Y=Ft+Ht*Ot-nt.y;const ct=Nt*Nt+Y*Y;if(ct<=2)return new ut(Nt,Y);At=Math.sqrt(ct/2)}else{let j=!1;pt>Number.EPSILON?Rt>Number.EPSILON&&(j=!0):pt<-Number.EPSILON?Rt<-Number.EPSILON&&(j=!0):Math.sign(Ht)===Math.sign(A)&&(j=!0),j?(Nt=-Ht,Y=pt,At=Math.sqrt(b)):(Nt=pt,Y=Ht,At=Math.sqrt(b/2))}return new ut(Nt/At,Y/At)}const vt=[];for(let nt=0,ht=k.length,L=ht-1,Nt=nt+1;nt<ht;nt++,L++,Nt++)L===ht&&(L=0),Nt===ht&&(Nt=0),vt[nt]=$(k[nt],k[L],k[Nt]);const Mt=[];let Tt,$t=vt.concat();for(let nt=0,ht=I.length;nt<ht;nt++){const L=I[nt];Tt=[];for(let Nt=0,Y=L.length,At=Y-1,pt=Nt+1;Nt<Y;Nt++,At++,pt++)At===Y&&(At=0),pt===Y&&(pt=0),Tt[Nt]=$(L[Nt],L[At],L[pt]);Mt.push(Tt),$t=$t.concat(Tt)}for(let nt=0;nt<m;nt++){const ht=nt/m,L=d*Math.cos(ht*Math.PI/2),Nt=g*Math.sin(ht*Math.PI/2)+_;for(let Y=0,At=k.length;Y<At;Y++){const pt=K(k[Y],vt[Y],Nt);ft(pt.x,pt.y,-L)}for(let Y=0,At=I.length;Y<At;Y++){const pt=I[Y];Tt=Mt[Y];for(let Ht=0,Rt=pt.length;Ht<Rt;Ht++){const A=K(pt[Ht],Tt[Ht],Nt);ft(A.x,A.y,-L)}}}const ne=g+_;for(let nt=0;nt<q;nt++){const ht=f?K(M[nt],$t[nt],ne):M[nt];v?(R.copy(D.normals[0]).multiplyScalar(ht.x),E.copy(D.binormals[0]).multiplyScalar(ht.y),P.copy(x[0]).add(R).add(E),ft(P.x,P.y,P.z)):ft(ht.x,ht.y,0)}for(let nt=1;nt<=u;nt++)for(let ht=0;ht<q;ht++){const L=f?K(M[ht],$t[ht],ne):M[ht];v?(R.copy(D.normals[nt]).multiplyScalar(L.x),E.copy(D.binormals[nt]).multiplyScalar(L.y),P.copy(x[nt]).add(R).add(E),ft(P.x,P.y,P.z)):ft(L.x,L.y,h/u*nt)}for(let nt=m-1;nt>=0;nt--){const ht=nt/m,L=d*Math.cos(ht*Math.PI/2),Nt=g*Math.sin(ht*Math.PI/2)+_;for(let Y=0,At=k.length;Y<At;Y++){const pt=K(k[Y],vt[Y],Nt);ft(pt.x,pt.y,h+L)}for(let Y=0,At=I.length;Y<At;Y++){const pt=I[Y];Tt=Mt[Y];for(let Ht=0,Rt=pt.length;Ht<Rt;Ht++){const A=K(pt[Ht],Tt[Ht],Nt);v?ft(A.x,A.y+x[u-1].y,x[u-1].x+L):ft(A.x,A.y,h+L)}}}Q(),ot();function Q(){const nt=s.length/3;if(f){let ht=0,L=q*ht;for(let Nt=0;Nt<lt;Nt++){const Y=z[Nt];Bt(Y[2]+L,Y[1]+L,Y[0]+L)}ht=u+m*2,L=q*ht;for(let Nt=0;Nt<lt;Nt++){const Y=z[Nt];Bt(Y[0]+L,Y[1]+L,Y[2]+L)}}else{for(let ht=0;ht<lt;ht++){const L=z[ht];Bt(L[2],L[1],L[0])}for(let ht=0;ht<lt;ht++){const L=z[ht];Bt(L[0]+q*u,L[1]+q*u,L[2]+q*u)}}i.addGroup(nt,s.length/3-nt,0)}function ot(){const nt=s.length/3;let ht=0;Ut(k,ht),ht+=k.length;for(let L=0,Nt=I.length;L<Nt;L++){const Y=I[L];Ut(Y,ht),ht+=Y.length}i.addGroup(nt,s.length/3-nt,1)}function Ut(nt,ht){let L=nt.length;for(;--L>=0;){const Nt=L;let Y=L-1;Y<0&&(Y=nt.length-1);for(let At=0,pt=u+m*2;At<pt;At++){const Ht=q*At,Rt=q*(At+1),A=ht+Nt+Ht,b=ht+Y+Ht,G=ht+Y+Rt,j=ht+Nt+Rt;Zt(A,b,G,j)}}}function ft(nt,ht,L){l.push(nt),l.push(ht),l.push(L)}function Bt(nt,ht,L){Vt(nt),Vt(ht),Vt(L);const Nt=s.length/3,Y=S.generateTopUV(i,s,Nt-3,Nt-2,Nt-1);se(Y[0]),se(Y[1]),se(Y[2])}function Zt(nt,ht,L,Nt){Vt(nt),Vt(ht),Vt(Nt),Vt(ht),Vt(L),Vt(Nt);const Y=s.length/3,At=S.generateSideWallUV(i,s,Y-6,Y-3,Y-2,Y-1);se(At[0]),se(At[1]),se(At[3]),se(At[1]),se(At[2]),se(At[3])}function Vt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function se(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return yv(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wl[s.type]().fromJSON(s)),new Jl(i,t.options)}}const Mv={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-h),new ut(f,1-g),new ut(_,1-p)]:[new ut(a,1-l),new ut(u,1-h),new ut(d,1-g),new ut(m,1-p)]}};function yv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cs extends Zl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cs(t.radius,t.detail)}}class Xe extends ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const E=D/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+v,1-x),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const x=u[p][S+1],v=u[p][S],D=u[p+1][S],E=u[p+1][S+1];(p!==0||o>0)&&d.push(x,v,E),(p!==i-1||l<Math.PI)&&d.push(v,D,E)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xr extends ge{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new N,h=new N,f=new N;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ee extends Gs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sv extends Ee{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const to={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class bv{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const wv=new bv;class Eh{constructor(t){this.manager=t!==void 0?t:wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Eh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Kl extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ev extends Kl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _a=new ee,cu=new N,uu=new N;class Th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(cu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hu=new ee,js=new N,xa=new N;class Tv extends Th{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),js.setFromMatrixPosition(t.matrixWorld),i.position.copy(js),xa.copy(i.position),xa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(xa),i.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),hu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}}class Av extends Kl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Tv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rv extends Th{constructor(){super(new hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cv extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Rv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Pv extends Eh{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=to.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return to.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),to.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});to.add(t,l),r.manager.itemStart(t)}}class Dv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);const Me=100,Qe=new Uint8Array(512);(()=>{let n=1337;const t=()=>(n=n*1664525+1013904223>>>0)/4294967296,e=Array.from({length:256},(i,s)=>s);for(let i=255;i>0;i--){const s=t()*(i+1)|0;[e[i],e[s]]=[e[s],e[i]]}for(let i=0;i<512;i++)Qe[i]=e[i&255]})();const Ma=n=>n*n*n*(n*(n*6-15)+10),vi=(n,t,e,i)=>{const s=n&8?e:t,r=n&4?(n&12)===12?t:i:e;return(n&1?-s:s)+(n&2?-r:r)};function Ah(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=Math.floor(e);n-=i,t-=s,e-=r;const o=i&255,a=s&255,l=r&255,c=Ma(n),u=Ma(t),h=Ma(e),f=Qe[o]+a,d=Qe[f]+l,g=Qe[f+1]+l,_=Qe[o+1]+a,m=Qe[_]+l,p=Qe[_+1]+l,S=(x,v,D)=>x+(v-x)*D;return S(S(S(vi(Qe[d],n,t,e),vi(Qe[m],n-1,t,e),c),S(vi(Qe[g],n,t-1,e),vi(Qe[p],n-1,t-1,e),c),u),S(S(vi(Qe[d+1],n,t,e-1),vi(Qe[m+1],n-1,t,e-1),c),S(vi(Qe[g+1],n,t-1,e-1),vi(Qe[p+1],n-1,t-1,e-1),c),u),h)*.5}function wn(n,t,e,i=5,s=2.03,r=.5){let o=1,a=1,l=0,c=0;for(let u=0;u<i;u++)l+=o*Ah(n*a,t*a,e*a),c+=o,o*=r,a*=s;return l/c}function jl(n,t,e,i=5){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++){const c=1-Math.abs(Ah(n*r,t*r,e*r)*2);o+=s*c*c,a+=s,s*=.5,r*=2.1}return o/a}const Dt=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)},Wt=(n,t,e)=>n+(t-n)*e,_e=(n,t,e)=>Math.min(e,Math.max(t,n));function ii(n){let t=n>>>0;const e=()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,s)=>i+(s-i)*e(),e.pick=i=>i[e()*i.length|0],e}const To=[];function Al(n,t){const e=n*Math.PI/180,i=t*Math.PI/180;return new N(Math.cos(e)*Math.sin(i),Math.sin(e),Math.cos(e)*Math.cos(i))}function Lv({id:n,lat:t,lon:e,radius:i=15,blend:s=12,profile:r,heading:o=0}){const a=Al(t,e);let l=new N(0,1,0).cross(a).normalize(),c=a.clone().cross(l).normalize();if(o){const h=new Bn().setFromAxisAngle(a,o);l.applyQuaternion(h),c.applyQuaternion(h)}const u={id:n,n:a,e:l,f:c.clone().negate(),radius:i,blend:s,profile:r,patchR:i+s*.6};return u.matrix=new ee().makeBasis(u.e,u.n,u.f).setPosition(a.clone().multiplyScalar(Me)),To.push(u),u}const Iv=()=>To;function Uv(n,t,e){const i=n*.2059+t*.1392+e*.9686,s=wn(n*1.25+3.1,t*1.25-1.7,e*1.25+.4,5)+.05+Dt(.35,.9,i)*.24,r=Dt(-.03,.2,s),o=jl(n*3.1+7,t*3.1,e*3.1-2,5),a=Dt(.02,.26,wn(n*2.2-5,t*2.2+2,e*2.2,3)+s*.6),l=wn(n*9,t*9,e*9,4)*1.6,c=wn(n*40,t*40,e*40,3)*.35;return-2.2+r*(2.9+l+c*r+o*a*11)+(1-r)*(s*3)}const eo=new N;function Rh(n,t,e,i,s){const r=t*n.n.x+e*n.n.y+i*n.n.z;if(r<=.2)return null;const o=Me/r;return s.x=(t*n.e.x+e*n.e.y+i*n.e.z)*o,s.z=(t*n.f.x+e*n.f.y+i*n.f.z)*o,s}const Qs={x:0,z:0};function Mr(n,t,e){let i=Uv(n,t,e);for(let s=0;s<To.length;s++){const r=To[s];if(!Rh(r,n,t,e,Qs))continue;const o=Math.hypot(Qs.x,Qs.z);if(o>r.radius+r.blend)continue;const a=1-Dt(r.radius,r.radius+r.blend,o);i=Wt(i,r.profile(Qs.x,Qs.z,o),a)}return i}function Mi(n,t,e){return eo.copy(n.n).multiplyScalar(Me).addScaledVector(n.e,t).addScaledVector(n.f,e).normalize(),Mr(eo.x,eo.y,eo.z)}function ys(n,t,e,i=new N){const s=1/Math.sqrt(n*n+Me*Me+t*t),r=Me+e;return i.set(n*s*r,Me*s*r-Me,t*s*r)}const du=new N,ya=new Bn,pu=new Bn,mu=new N,Nv=new N,gu=new N(0,1,0);function Ao(n,t,e,i=0,s=1,r=0,o=new ee,a){const l=a??Mi(n,t,e);return ys(t,e,l+r,mu),du.set(t,Me,e).normalize(),ya.setFromUnitVectors(gu,du),pu.setFromAxisAngle(gu,i),ya.multiply(pu),o.compose(mu,ya,Nv.set(s,s,s))}const Fv=["rock","ground","dirt","plaster","wood","stone","blocks","slate","thatch","cobble","metal"],un={},Te={low:!1},Ss={uEmN:{value:[]}},bs={uRipC:{value:null},uRip:{value:null}};async function Ov(n,t){const e=new Pv;e.setOptions({imageOrientation:"flipY"});const i=[];for(const r of Fv)for(const o of["diff","nor","arm"])i.push([r,o]);let s=0;await Promise.all(i.map(([r,o])=>new Promise(a=>{e.load(`${n}assets/tex/${r}_${o}.webp`,l=>{const c=new Ye(l);c.wrapS=c.wrapT=pr,c.colorSpace=o==="diff"?cn:ni,c.anisotropy=Te.low?2:8,c.generateMipmaps=!0,c.minFilter=yi,c.needsUpdate=!0,(un[r]||(un[r]={}))[o]=c,t?.(++s/i.length),a()},void 0,()=>{const l=new gh(new Uint8Array(o==="nor"?[128,128,255,255]:[128,128,128,255]),1,1);l.needsUpdate=!0,(un[r]||(un[r]={}))[o]=l,t?.(++s/i.length),a()})})))}const Ch=`
  // Rising from the earth: which place this mesh belongs to is read from where it stands on the planet. Each part
  // comes up whole, in a wave that starts at the heart of the place and runs outward, and goes back down the same way.
  { vec3 emO = normalize(modelMatrix[3].xyz); float emV = 1.0, emB = -2.0;
    for (int i = 0; i < 7; i++) { float d = dot(emO, uEmN[i].xyz); if (d > emB) { emB = d; emV = uEmN[i].w; } }
    vec3 emP = transformed; float emS = 1.0;
    #ifdef USE_INSTANCING
      emP = instanceMatrix[3].xyz; emS = length(instanceMatrix[0].xyz);
#endif
    float emD = length(emP.xz) / 17.0 * 0.72 + fract(sin(dot(floor(emP.xz / 4.0), vec2(12.9898, 78.233))) * 43758.5453) * 0.2;
    float emE = smoothstep(emD, emD + 0.3, emV * 1.24), emQ = 1.0 - emE;
    transformed.y -= emQ * emQ * 15.0 / emS;
    transformed.xz += (transformed.xz - emP.xz) * 0.0 + vec2(sin(emP.z * 3.1), cos(emP.x * 2.7)) * emQ * emE * 0.5 / emS; }
`,zv=`
varying vec3 vTriPos; varying vec3 vTriN; varying mat3 vNM;
#ifdef TRI_MIX
attribute vec3 aMix; varying vec3 vMix;
uniform vec3 uRipC; uniform vec4 uRip;   // centre (unit vector); x = radius, y = height, z = width, w = swell at the centre
#else
uniform vec4 uEmN[7];
#endif
`,Bv=`
vTriPos = position; vTriN = objectNormal;
#ifdef TRI_MIX
  { vec3 ripW = normalize((modelMatrix * vec4(transformed, 1.0)).xyz); float ripD = acos(clamp(dot(ripW, uRipC), -1.0, 1.0)) * 100.0;
    float ripH = uRip.y * exp(-pow((ripD - uRip.x) / uRip.z, 2.0)) + uRip.w * exp(-pow(ripD / 9.0, 2.0));
    transformed += (ripW * mat3(modelMatrix)) * ripH; }
#else
${Ch}
#endif
#ifdef USE_INSTANCING
  vNM = normalMatrix * mat3(instanceMatrix);
#else
  vNM = normalMatrix;
#endif
#ifdef TRI_MIX
  vMix = aMix;
#endif
`,Vv=`
varying vec3 vTriPos; varying vec3 vTriN; varying mat3 vNM;
uniform sampler2D tD0; uniform sampler2D tN0; uniform sampler2D tA0;
uniform float uScale; uniform vec3 uTint; uniform float uNorm;
#ifdef TRI_MIX
varying vec3 vMix;
uniform sampler2D tD1; uniform sampler2D tN1; uniform sampler2D tD2; uniform sampler2D tN2;
uniform vec3 uTint1; uniform vec3 uTint2; uniform float uFar; uniform float uFarScale;
#endif
vec3 triW(vec3 n){ vec3 w = pow(abs(n), vec3(6.0)); return w / (w.x + w.y + w.z); }
vec4 tri(sampler2D t, vec3 p, vec3 w){ return texture2D(t, p.zy) * w.x + texture2D(t, p.xz) * w.y + texture2D(t, p.xy) * w.z; }
vec3 triN(sampler2D t, vec3 p, vec3 w, vec3 n){
  vec3 tx = texture2D(t, p.zy).xyz * 2.0 - 1.0, ty = texture2D(t, p.xz).xyz * 2.0 - 1.0, tz = texture2D(t, p.xy).xyz * 2.0 - 1.0;
  tx = vec3(tx.xy * uNorm + n.zy, abs(tx.z) * n.x); ty = vec3(ty.xy * uNorm + n.xz, abs(ty.z) * n.y); tz = vec3(tz.xy * uNorm + n.xy, abs(tz.z) * n.z);
  return normalize(tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z);
}
vec3 gTriN; float gRough; float gAO;
`,Hv=`
{
  vec3 n0 = normalize(vTriN); vec3 w = triW(n0); vec3 p = vTriPos * uScale;
#ifdef TRI_MIX
  vec3 m = clamp(vMix, 0.0, 1.0);
  float wr = m.x, wd = m.y * (1.0 - m.x), wg = max(0.0, 1.0 - wr - wd);
  vec3 cg = tri(tD0, p, w).rgb * uTint, cr = tri(tD1, p * 0.6, w).rgb * uTint1, cd = tri(tD2, p, w).rgb * uTint2;
  // second, much larger scale breaks up tiling when seen from orbit
  vec3 pf = vTriPos * uFarScale;
  vec3 fg = tri(tD0, pf, w).rgb * uTint, fr = tri(tD1, pf, w).rgb * uTint1;
  cg = mix(cg, fg, uFar); cr = mix(cr, fr, uFar);
  vec3 c = cg * wg + cr * wr + cd * wd;
  c *= mix(vec3(1.0), vColor.rgb, 1.0);
  c = mix(c, c * vec3(0.42, 0.5, 0.44), m.z);          // forest canopy shade / wetness
  diffuseColor.rgb = c;
  #ifndef TRI_LOW
  gTriN = normalize(triN(tN0, p, w, n0) * wg + triN(tN1, p * 0.6, w, n0) * wr + triN(tN2, p, w, n0) * wd);
  gTriN = normalize(mix(gTriN, n0, uFar * 0.6));
  #else
  gTriN = n0;
  #endif
  gRough = mix(0.95, 0.82, wr); gAO = 1.0;
#else
  vec4 d = tri(tD0, p, w); vec3 a = tri(tA0, p, w).rgb;
  diffuseColor.rgb *= d.rgb * uTint;
  #ifdef USE_COLOR
  #endif
  gTriN = triN(tN0, p, w, n0); gRough = a.g; gAO = a.r;
  diffuseColor.rgb *= mix(1.0, gAO, 0.8);
#endif
}
`;function Ge(n,{scale:t=1,tint:e=16777215,norm:i=1,metalness:s=0,roughness:r=1,mix:o=null,color:a=16777215,...l}={}){const c=new Ee({color:a,metalness:s,roughness:r,...l}),u={tD0:{value:un[n].diff},tN0:{value:un[n].nor},tA0:{value:un[n].arm},uScale:{value:t},uTint:{value:new Ct(e)},uNorm:{value:i}};return o||(u.uEmN=Ss.uEmN),o&&Object.assign(u,{tD1:{value:un[o.rock].diff},tN1:{value:un[o.rock].nor},tD2:{value:un[o.dirt].diff},tN2:{value:un[o.dirt].nor},uRipC:bs.uRipC,uRip:bs.uRip,uTint1:{value:new Ct(o.tintRock)},uTint2:{value:new Ct(o.tintDirt)},uFar:{value:0},uFarScale:{value:o.farScale??.03}}),c.userData.U=u,c.defines={...o?{TRI_MIX:1}:{},...Te.low?{TRI_LOW:1}:{}},o&&(c.vertexColors=!0),c.onBeforeCompile=h=>{Object.assign(h.uniforms,u),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+zv).replace("#include <begin_vertex>",`#include <begin_vertex>
`+Bv),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
`+Vv).replace("#include <map_fragment>",Hv).replace("#include <roughnessmap_fragment>","float roughnessFactor = clamp(roughness * gRough, 0.04, 1.0);").replace("#include <normal_fragment_maps>","normal = normalize(vNM * gTriN); if (!gl_FrontFacing) normal = -normal;")},c.customProgramCacheKey=()=>`tri-${n}-${o?"mix":"one"}-${Te.low}`,c}let Sa=null;function Gv(){if(Sa)return Sa;const n=new Wl({depthPacking:Bl});return n.onBeforeCompile=t=>{t.uniforms.uEmN=Ss.uEmN,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uEmN[7];`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+Ch)},n.customProgramCacheKey=()=>"emdepth",Sa=n}let no=null;function Ph(){if(no)return no;const n=(t,e)=>new Ee({color:1182212,emissive:t,emissiveIntensity:e,roughness:.6});return no={plaster:Ge("plaster",{scale:.9,tint:12168084}),plasterDark:Ge("plaster",{scale:.9,tint:8221800}),wood:Ge("wood",{scale:1.6,tint:7034436}),woodDark:Ge("wood",{scale:1.6,tint:3813160}),stone:Ge("stone",{scale:.7,tint:10131087}),stoneDark:Ge("stone",{scale:.7,tint:6118494}),blocks:Ge("blocks",{scale:.55,tint:9276038}),blocksDark:Ge("blocks",{scale:.55,tint:5065292}),slate:Ge("slate",{scale:1.3,tint:7304320}),thatch:Ge("thatch",{scale:1.1,tint:9075288}),cobble:Ge("cobble",{scale:.8,tint:9143932}),iron:Ge("metal",{scale:1.5,tint:3815478,metalness:.7,roughness:.9}),window:n(16754250,2.6),windowDim:n(16747066,.9),windowRed:n(16722458,2.4),windowCold:n(10470655,1.4),holy:n(16767370,1.5),blood:n(16718354,2.4),dark:n(9063935,2.4),black:new Ee({color:328965,roughness:1}),cloth:new Ee({color:4855058,roughness:.95,side:dn}),bone:new Ee({color:12168596,roughness:.8})},no}function Dh(){return Ge("ground",{scale:.42,tint:10725508,norm:1.3,mix:{rock:"rock",dirt:"dirt",tintRock:10987692,tintDirt:9271910,farScale:.045}})}function kn(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ge;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=vu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const g=vu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function vu(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Ae(o,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Se=n=>{const t=n.index?n.toNonIndexed():n;for(const e of Object.keys(t.attributes))e!=="position"&&e!=="normal"&&t.deleteAttribute(e);return t},_i=new ee,io=new ee,so=new zn,ro=new Bn,oo=new N,ao=new N(1,1,1),_u=Se(new Ai(1,1,1)),ba=new Map,kv=(n,t,e)=>{const i=`${n.toFixed(3)}_${t.toFixed(3)}_${e}`;return ba.has(i)||ba.set(i,Se(new rn(n,t,1,e))),ba.get(i)};function Wv(){const n=new yh;n.moveTo(-.5,0),n.lineTo(.5,0),n.lineTo(0,1),n.lineTo(-.5,0);const t=new Jl(n,{depth:1,bevelEnabled:!1});return t.translate(0,0,-.5),Se(t)}const Xv=Wv();class qv{constructor(t,e=1){this.a=t,this.parts=new Map,this.r=ii(e),this.glows=[],this.smokes=[],this.lights=[],this.agents=[],this.inst=new Map,this.base=new ee}at(t,e,i=0,s=1,r=0){return Ao(this.a,t,e,i,s,r,this.base),this.cx=t,this.cz=e,this.cyaw=i,this.cs=s,this}push(t,e,i){const s=e.clone();s.applyMatrix4(i);let r=this.parts.get(t);r||this.parts.set(t,r=[]),r.push(s)}box(t,e,i,s,r=0,o=0,a=0,l=0,c=0,u=0){return _i.compose(oo.set(r,o+(c||u?0:i/2),a),ro.setFromEuler(so.set(c,l,u,"YXZ")),ao.set(e,i,s)),this.push(t,_u,io.multiplyMatrices(this.base,_i)),this}cyl(t,e,i,s,r=0,o=0,a=0,l=10,c=0,u=0){const h=i>0?e/i:0;return _i.compose(oo.set(r,o+(c||u?0:s/2),a),ro.setFromEuler(so.set(c,0,u)),ao.set(i||e,s,i||e)),this.push(t,kv(i>0?h:1,i>0?1:0,l),io.multiplyMatrices(this.base,_i)),this}gable(t,e,i,s,r=0,o=0,a=0,l=0){return _i.compose(oo.set(r,o,a),ro.setFromEuler(so.set(0,l,0)),ao.set(e,i,s)),this.push(t,Xv,io.multiplyMatrices(this.base,_i)),this}pt(t,e,i){return new N(t,e,i).applyMatrix4(this.base)}glow(t,e,i,s=16752704,r=1,o=0){return this.glows.push({p:this.pt(t,e,i),c:new Ct(s),size:r*(this.cs||1),kind:o}),this}smoke(t,e,i,s=1,r=.5){return this.smokes.push({p:this.pt(t,e,i),up:new N(this.cx,Me,this.cz).normalize(),size:s,dark:r}),this}mist(t,e,i=1){return this.at(t,e,0),this.smokes.push({p:this.pt(0,.3*i,0),up:new N(t,Me,e).normalize(),size:i,dark:2}),this}light(t,e,i,s=16748608,r=6,o=7){return this.lights.push({p:this.pt(t,e,i),color:s,intensity:r,dist:o}),this}roof(t,e,i,s,r,o=.14,a=.07){const l=e/2+o,c=Math.hypot(l,s*(l/(e/2))),u=Math.atan2(s,e/2);for(const h of[1,-1])_i.compose(oo.set(h*l/2,r+s*(l/(e/2))/2-o*s/(e/2),0),ro.setFromEuler(so.set(0,0,-h*u)),ao.set(c+.04,a,i+o*2)),this.push(t,_u,io.multiplyMatrices(this.base,_i));return this}house(t,e,i,s={}){const r=this.r,o=s.m||{},a=s.w??r.range(1.5,2.1),l=s.d??r.range(1.9,2.8),c=s.storeys??(r()<.35?2:1),u=.78,h=u*c+.1,f=s.rh??a*r.range(.5,.72),d=o.wall||"plaster",g=o.frame||"woodDark",_=o.roof||"thatch",m=o.plinth||"stone",p=s.lit??.6,S=s.stoneWalls;this.at(t,e,i,s.scale??1),this.box(m,a+.1,.5,l+.1,0,-.34,0),this.box(S?m:d,a,h,l,0,.14,0);const x=.14,v=.075;if(!S){for(const y of[-1,1])for(const M of[-1,1])this.box(g,v,h,v,y*(a/2),x,M*(l/2));for(let y=0;y<=c;y++){const M=x+y*u+(y===c?.04:0);for(const I of[-1,1])this.box(g,a+v,v,v,0,M,I*(l/2));for(const I of[-1,1])this.box(g,v,v,l+v,I*(a/2),M,0)}const R=Math.round(l/.55),P=Math.round(a/.55);for(let y=1;y<R;y++)for(const M of[-1,1])this.box(g,v*.7,h,v*.8,M*(a/2+.005),x,-l/2+y*l/R);for(let y=1;y<P;y++)for(const M of[-1,1])this.box(g,v*.8,h,v*.7,-a/2+y*a/P,x,M*(l/2+.005));for(let y=0;y<c;y++)for(const M of[-1,1])for(const I of[-1,1])this.box(g,v*.6,.62,v*.7,M*(a/2+.008),x+y*u+u/2+.03,I*(l/2-.26),0,I*.72,0)}const D=x+h;if(this.gable(S?m:d,a,f,l,0,D,0),!S)for(const R of[-1,1]){this.box(g,v*.8,f*.92,v*.7,0,D,R*(l/2+.005));for(const P of[-1,1])this.box(g,v*.7,Math.hypot(a/2,f)*.98,v*.7,P*a/4,D+f/2,R*(l/2+.01),0,0,P*Math.atan2(a/2,f))}this.roof(_,a,l,f,D,_==="thatch"?.2:.14,_==="thatch"?.13:.06),this.box(g,.09,.09,l+.42,0,D+f+0,0),this.box("woodDark",.3,.5,.05,s.doorX??0,x,l/2+.02),this.box(g,.38,.05,.07,s.doorX??0,x+.5,l/2+.02);const E=(R,P,y,M)=>{const I=r()<p,V=I?"window":"black";M?(this.box(V,.03,.2,.17,R,P,y),this.box(g,.05,.03,.22,R,P-.03,y),this.box(g,.045,.2,.025,R,P,y)):(this.box(V,.17,.2,.03,R,P,y),this.box(g,.22,.03,.05,R,P-.03,y),this.box(g,.025,.2,.045,R,P,y)),I&&this.glow(R*1.06,P+.1,y*1.06,16751164,.55,1)};for(let R=0;R<c;R++){const P=x+R*u+.32;for(const y of[-1,1])for(let M=0;M<Math.max(1,Math.round(l/1.1));M++)E(y*(a/2+.012),P,(M+.5)*l/Math.max(1,Math.round(l/1.1))-l/2+r.range(-.1,.1),!0);E(R===0?(s.doorX??0)+.48*(a>1.5?1:0):0,P,l/2+.012,!1),E(0,P,-l/2-.012,!1)}if(f>.75&&E(0,D+.12,l/2+.012,!1),s.chimney??r()<.75){const R=a*.22*(r()<.5?1:-1),P=r.range(-l*.3,l*.3),y=f+.42;this.box("stone",.24,y+.5,.24,R,D-.5,P),this.box("stoneDark",.3,.06,.3,R,D+y,P),(s.smoke??r()<.8)&&this.smoke(R,D+y+.1,P,1,.5)}return(s.shed??r()<.3)&&(this.box("woodDark",a*.7,.55,.7,0,x-.1,-l/2-.35),this.box(_,a*.8,.05,.9,0,x+.5,-l/2-.38,0,-.35,0)),{w:a,d:l,h:D+f}}tower(t,e,i={}){const s=i.r??.7,r=i.h??3.2,o=i.mat||"stone",a=i.seg??12;if(this.at(t,e,i.yaw??0,i.scale??1),this.cyl(o,s*.94,s*1.08,r+.6,0,-.6,0,a),this.cyl(o,s*1.12,s*1,.16,0,r-.04,0,a),i.roof)this.cyl(i.roofMat||"slate",.02,s*1.25,i.roof,0,r+.3,0,a),this.cyl(o,s*.98,s*.98,.34,0,r+0,0,a);else for(let c=0;c<a;c+=1){const u=c/a*Math.PI*2;c%2===0&&this.box(o,s*.42,.26,.12,Math.cos(u)*s*1.02,r+.1,Math.sin(u)*s*1.02,-u+Math.PI/2)}const l=Math.max(1,Math.floor(r/1.1));for(let c=0;c<l;c++){const u=(i.yaw??0)+c*2.1+(i.winA??.6),h=.9+c*1.05,f=this.r()<(i.lit??.5);this.box(f?i.winMat||"window":"black",.1,.26,.06,Math.cos(u)*s*.99,h,Math.sin(u)*s*.99,-u+Math.PI/2),f&&this.glow(Math.cos(u)*s*1.05,h+.13,Math.sin(u)*s*1.05,i.glow??16751164,.5,1)}return this}wall(t,e={}){const i=e.h??1.5,s=e.th??.34,r=e.mat||"stone";for(let o=0;o<t.length-1;o++){const[a,l]=t[o],[c,u]=t[o+1],h=Math.hypot(c-a,u-l),f=Math.max(1,Math.round(h/1.1)),d=Math.atan2(-(u-l),c-a);for(let g=0;g<f;g++){const _=(g+.5)/f,m=h/f;if(this.at(Wt(a,c,_),Wt(l,u,_),d),e.ruin&&this.r()<e.ruin){this.box(r,m+.02,i*this.r.range(.2,.7)+.6,s,0,-.6,0);continue}if(this.box(r,m+.02,i+.6,s,0,-.6,0),this.box(r,m+.02,.08,s+.14,0,i,0),!e.plain)for(let p=0;p<3;p++)this.box(r,m/5,.2,.1,(p-1)*m/3,i+.08,s/2+.02)}}return this}palisade(t,e=.75){for(let i=0;i<t.length-1;i++){const[s,r]=t[i],[o,a]=t[i+1],l=Math.hypot(o-s,a-r),c=Math.round(l/.13);for(let u=0;u<c;u++){const h=u/c;this.at(Wt(s,o,h)+this.r.range(-.02,.02),Wt(r,a,h)+this.r.range(-.02,.02),this.r()*3);const f=e*this.r.range(.85,1.12);this.cyl("woodDark",.03,.055,f+.2,0,-.2,0,5),this.cyl("woodDark",0,.03,.1,0,f,0,5)}}return this}fence(t){for(let e=0;e<t.length-1;e++){const[i,s]=t[e],[r,o]=t[e+1],a=Math.hypot(r-i,o-s),l=Math.max(1,Math.round(a/.5)),c=Math.atan2(-(o-s),r-i);for(let u=0;u<=l;u++){const h=u/l;this.at(Wt(i,r,h),Wt(s,o,h),c),this.box("woodDark",.04,.34,.04,0,-.06,0,0,0,this.r.range(-.12,.12)),u<l&&(this.at(Wt(i,r,h+.5/l),Wt(s,o,h+.5/l),c),this.box("wood",a/l,.03,.02,0,.12,0),this.box("wood",a/l,.03,.02,0,.22,0,0,0,this.r.range(-.05,.05)))}}return this}gallows(t,e,i){this.at(t,e,i),this.box("wood",1.5,.08,1.1,0,.42,0);for(const s of[-1,1])for(const r of[-1,1])this.box("woodDark",.08,.6,.08,s*.68,-.14,r*.48);for(let s=0;s<4;s++)this.box("wood",.3,.035,.5,.92+s*.13,.36-s*.1,.2);for(const s of[-1,1])this.box("woodDark",.09,1.25,.09,s*.6,.5,-.35);this.box("woodDark",1.5,.09,.09,0,1.72,-.35);for(const s of[-1,1])this.box("woodDark",.05,.42,.05,s*.47,1.56,-.35,0,0,s*.8);for(const s of[-.26,.22])this.box("black",.012,.34,.012,s,1.38,-.35),this.cyl("black",.045,.045,.012,s,1.3,-.35,8,Math.PI/2);return this}cart(t,e,i){this.at(t,e,i),this.box("wood",.75,.05,.42,0,.2,0);for(const s of[-1,1])this.box("woodDark",.75,.14,.03,0,.24,s*.21);this.box("woodDark",.03,.14,.42,-.37,.24,0);for(const s of[-1,1])this.cyl("woodDark",.15,.15,.04,-.05,.16,s*.26,12,Math.PI/2),this.box("wood",.5,.03,.03,.62,.2,s*.15,0,0,-.18);return this.box("wood",.2,.16,.2,-.15,.25,0),this.cyl("woodDark",.09,.09,.2,.15,.25,.05,8),this}well(t,e){this.at(t,e,this.r()*3),this.cyl("stone",.26,.28,.3,0,-.04,0,12),this.cyl("black",.2,.2,.02,0,.255,0,12);for(const i of[-1,1])this.box("woodDark",.05,.6,.05,i*.24,.2,0);return this.box("woodDark",.6,.04,.04,0,.72,0),this.roof("wood",.5,.42,.18,.78,.06,.03),this}stall(t,e,i,s="cloth"){this.at(t,e,i);for(const r of[-1,1])for(const o of[-1,1])this.box("woodDark",.04,.62,.04,r*.36,0,o*.24);this.box("wood",.8,.04,.5,0,.26,0),this.box(s,.92,.02,.66,0,.64,0,0,.22,0);for(let r=0;r<3;r++)this.box("wood",.12,.1,.12,-.24+r*.22,.3,.05);return this}torch(t,e,i=.55,s=16747056,r=!1){return this.at(t,e,0),this.cyl("woodDark",.018,.024,i,0,0,0,5),this.cyl("iron",.04,.025,.05,0,i,0,6),this.glow(0,i+.09,0,s,.75,2),r&&this.light(0,i+.2,0,s,5,6),this}crate(t,e,i=.2){return this.at(t,e,this.r()*3),this.box("wood",i,i,i,0,0,0),this}barrel(t,e){return this.at(t,e,0),this.cyl("wood",.085,.085,.24,0,0,0,8),this.cyl("iron",.09,.09,.02,0,.17,0,8),this}grave(t,e,i){this.at(t,e,i+this.r.range(-.2,.2));const s=this.r.range(.22,.42);return this.r()<.35?(this.box("blocksDark",.05,s+.2,.04,0,-.1,0,0,0,this.r.range(-.15,.15)),this.box("blocksDark",.2,.05,.04,0,s*.7,0)):this.box("blocksDark",.2,s+.1,.06,0,-.1,0,0,this.r.range(-.12,.12),this.r.range(-.1,.1)),this}column(t,e,i=1.6,s=!1,r="blocks",o=.13){this.at(t,e,this.r()*3),this.box(r,o*3,.12,o*3,0,-.03,0);const a=s?i*this.r.range(.25,.7):i;return this.cyl(r,o*.9,o,a,0,.08,0,10),s||this.box(r,o*3,.1,o*3,0,a+.08,0),this}arch(t,e,i,s=1.2,r=1.5,o="blocks",a=.3,l=0){this.at(t,e,i,1,l);for(const u of[-1,1])this.box(o,a,r+.4,a,u*s/2,-.4,0);const c=7;for(let u=0;u<c;u++){const h=Math.PI*(u+.5)/c;this.box(o,a*.9,s*1.65/c,a,Math.cos(h)*s/2,r+Math.sin(h)*s/2,0,0,0,h-Math.PI/2+Math.PI/2*0)}return this}bridge(t,e,i,s=2.4,r=.7){this.at(t,e,i,1,0);const o=9;for(let a=0;a<o;a++){const l=(a+.5)/o-.5,c=Math.cos(l*Math.PI)*.38;this.box("stone",s/o+.03,.9,r,l*s,c-.82,0);for(const u of[-1,1])this.box("stoneDark",s/o+.03,.14,.07,l*s,c+.06,u*(r/2-.03))}return this}banner(t,e,i,s=1.3,r="cloth"){return this.at(t,e,i),this.cyl("woodDark",.02,.028,s,0,0,0,5),this.box(r,.3,.55,.012,.17,s-.6,0),this}relief(t,e,i,s){this.at(t,e,i);const r={holy:16768922,blood:16722460,dark:10116351}[s];this.box("blocksDark",.5,.74,.07,0,0,0,0,-.14,0),this.box("iron",.56,.05,.1,0,0,0);for(let o=0;o<3;o++)for(let a=0;a<4;a++)this.r()<.8&&this.box(s,this.r.range(.03,.09),.025,.02,-.15+o*.15,.13+a*.14,.045-(.13+a*.14)*.14,0,-.14,this.r.range(-.6,.6));return this.glow(0,.4,.12,r,.8,3),this.light(0,.6,.3,r,6,5.5),this}instance(t,e,i,s=0,r=1,o=0,a){let l=this.inst.get(t);return l||this.inst.set(t,l=[]),xu[t]&&this.blocked(e,i,xu[t]*r)?this:(l.push({m:Ao(this.a,e,i,s,r,o,new ee),color:a}),this)}blocked(t,e,i){for(const s of this.sight||[]){const r=s[2]-s[0],o=s[3]-s[1],a=_e(((t-s[0])*r+(e-s[1])*o)/(r*r+o*o+1e-6),0,1);if(Math.hypot(t-s[0]-r*a,e-s[1]-o*a)<Wt(1.5,.35,a)*i)return!0}return!1}agent(t){return this.agents.push(t),this}bird(t){return(this.birds||(this.birds=[])).push(t),this}build(){const t=new me,e=Ph();for(const[i,s]of this.parts){const r=new qt(kn(s),e[i]),o=!!e[i].emissive&&e[i].emissiveIntensity>.5;r.castShadow=!o,r.receiveShadow=!o,t.add(r);for(const a of s)a.dispose()}for(const[i,s]of this.inst){const r=Yv[i](),o=new Fo(r.geo,r.mat,s.length);s.forEach((a,l)=>{o.setMatrixAt(l,a.m),r.tint&&o.setColorAt(l,a.color||Lh.setHSL(r.tint[0]+this.r.range(-.03,.03),r.tint[1]*this.r.range(.6,1.1),r.tint[2]*this.r.range(.6,1.25)))}),o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,t.add(o)}return t.userData.fx=$v(this.glows,this.smokes),t.userData.fx&&t.add(t.userData.fx.group),t.userData.lights=this.lights,t.userData.agents=s_(this.a,this.agents),t.userData.agents&&t.add(t.userData.agents.mesh),t.userData.birds=r_(this.a,this.birds||[]),t.userData.birds&&t.add(t.userData.birds.mesh),t}}const Lh=new Ct,xu={pine:1,dead:.9,broadleaf:1.1,spire:1.1},Ps={},ei=(n,t)=>()=>Ps[n]||(Ps[n]=t());function gs(n,t,e=0,i=1){const s=n.attributes.position.count,r=new Float32Array(s*3),o=n.attributes.position;for(let a=0;a<s;a++){const l=1+(e?wn(o.getX(a)*3+i,o.getY(a)*3,o.getZ(a)*3,2)*e:0),c=t.shade?_e(.55+o.getY(a)*t.shade,.4,1.25):1;r[a*3]=t.r*l*c,r[a*3+1]=t.g*l*c,r[a*3+2]=t.b*l*c}return n.setAttribute("color",new Ae(r,3)),n}function lo(n,t,e,i,s=1,r=!1){const o=n.attributes.position,a=n.attributes.normal;for(let l=0;l<o.count;l++){const c=o.getX(l),u=o.getY(l),h=o.getZ(l),f=1+wn(c*e+i,u*e,h*e,3)*t;r&&a.setXYZ(l,c,u+.15,h),o.setXYZ(l,c*f,u*f*s,h*f)}return r?n.normalizeNormals():n.computeVertexNormals(),n}const tr=ei("fm",()=>new Ee({vertexColors:!0,roughness:.95,flatShading:!1})),Mu={r:.16,g:.13,b:.11},Yv={pine:ei("pine",()=>{const n=ii(5),t=[],e=Se(new rn(.035,.085,1.2,6));e.translate(0,.6,0),t.push(gs(e,Mu));const i=Te.low?5:9;for(let r=0;r<i;r++){const o=r/(i-1),a=Wt(.7,.1,o)*n.range(.85,1.15),l=Wt(.8,.5,o);let c=Se(new bn(a,l,16,3,!0));const u=c.attributes.position,h=new Float32Array(u.count*3),f=n()*6;for(let d=0;d<u.count;d++){let g=u.getX(d),_=u.getY(d),m=u.getZ(d);const p=Math.atan2(m,g),S=Math.hypot(g,m)/a,x=1+(.34*Math.sin(p*7+f)+wn(g*5+f,_*5,m*5,2)*.9)*S;g*=x,m*=x,_-=S*S*.22*(1+Math.sin(p*7+f)*.5),u.setXYZ(d,g,_,m);const v=.35+S*.75;h[d*3]=.035*v,h[d*3+1]=.06*v,h[d*3+2]=.043*v}c.setAttribute("color",new Ae(h,3)),c.translate(n.range(-.03,.03),.65+o*2.35+l/2-.2,n.range(-.03,.03)),t.push(c)}const s=kn(t);return s.computeVertexNormals(),{geo:s,mat:tr(),tint:[.36,.2,.62]}}),broadleaf:ei("bl",()=>{const n=ii(9),t=[],e=Se(new rn(.05,.1,1,6));e.translate(0,.5,0),t.push(gs(e,Mu));for(let s=0;s<7;s++){let r=new Cs(n.range(.34,.6),3);r=Se(lo(r,.7,2.6,n()*90,.8,!0)),r.translate(n.range(-.5,.5),n.range(1,1.75),n.range(-.5,.5)),t.push(gs(r,{r:.034,g:.045,b:.026,shade:.5},1.8,s*3))}return{geo:kn(t),mat:tr(),tint:[.25,.22,.6]}}),dead:ei("dead",()=>{const n=ii(21),t=[],e=(s,r,o,a,l)=>{const c=Se(new rn(a*.55,a,o,5));c.translate(0,o/2,0);const u=new Bn().setFromUnitVectors(new N(0,1,0),r);if(c.applyQuaternion(u),c.translate(s.x,s.y,s.z),t.push(c),l<=0)return;const h=s.clone().addScaledVector(r,o),f=l>2?3:2;for(let d=0;d<f;d++){const g=r.clone().add(new N(n.range(-1,1),n.range(-.1,.9),n.range(-1,1)).multiplyScalar(.85)).normalize();e(h,g,o*n.range(.55,.8),a*.58,l-1)}};e(new N(0,-.1,0),new N(.08,1,.04).normalize(),.95,.09,4);const i=gs(kn(t),{r:.13,g:.115,b:.11});return i.computeVertexNormals(),{geo:i,mat:tr(),tint:[.07,.1,.5]}}),bush:ei("bush",()=>{let n=new Cs(.3,3);return n=Se(lo(n,.8,3.2,4,.7,!0)),n.translate(0,.12,0),{geo:gs(n,{r:.03,g:.04,b:.024},1.8),mat:tr(),tint:[.24,.2,.6]}}),tuft:ei("tuft",()=>{const n=ii(31),t=[];for(let e=0;e<7;e++){const i=Se(new bn(.012,n.range(.09,.2),3));i.translate(0,.07,0),i.rotateZ(n.range(-.5,.5)),i.rotateX(n.range(-.5,.5)),i.translate(n.range(-.06,.06),0,n.range(-.06,.06)),t.push(i)}return{geo:gs(kn(t),{r:.07,g:.085,b:.045,shade:2.5},.5),mat:tr(),tint:[.2,.3,.55]}}),rock:ei("rock",()=>{let n=new Cs(.4,2);return n=Se(lo(n,.9,1.7,12,.75)),n.translate(0,.08,0),{geo:n,mat:Ge("rock",{scale:.9,tint:9211282})}}),spire:ei("spire",()=>{let n=new bn(.5,2.4,7,6);return n=Se(lo(n,.9,1.5,3)),n.translate(0,.9,0),{geo:n,mat:Ge("rock",{scale:.55,tint:7829630})}}),bones:ei("bones",()=>{const n=ii(3),t=[];for(let e=0;e<9;e++){const i=Se(new rn(.012,.012,n.range(.12,.22),4));i.rotateZ(Math.PI/2+n.range(-.4,.4)),i.rotateY(n()*6),i.translate(n.range(-.15,.15),.02+n()*.05,n.range(-.15,.15)),t.push(i)}for(let e=0;e<3;e++){const i=Se(new Xe(.04,7,5));i.translate(n.range(-.14,.14),.05,n.range(-.14,.14)),t.push(i)}return{geo:kn(t),mat:Ph().bone}})};function $v(n,t){if(!n.length&&!t.length)return null;const e=new me,i={uTime:{value:0},uPx:{value:1},uGain:{value:1}};if(n.length){const s=[],r=[],o=[];for(const u of n)s.push(u.p.x,u.p.y,u.p.z),r.push(u.c.r,u.c.g,u.c.b),o.push(u.size,u.kind,Math.random()*100);const a=new ge;a.setAttribute("position",new te(s,3)),a.setAttribute("color",new te(r,3)),a.setAttribute("aPar",new te(o,3));const l=new Ne({transparent:!0,depthWrite:!1,blending:$i,vertexColors:!0,uniforms:i,vertexShader:`attribute vec3 aPar; uniform float uTime; uniform float uPx; varying vec3 vC; varying float vK; varying float vI;
        void main(){ vC = color; vK = aPar.y; float t = uTime + aPar.z;
          float fl = 0.78 + 0.22 * sin(t * 9.0) * sin(t * 5.3 + 1.7);            // flame flicker
          vI = aPar.y < 1.5 ? (aPar.y < 0.5 ? 1.0 : 0.85 + 0.15 * sin(t * 2.0)) : (aPar.y < 2.5 ? fl : 0.8 + 0.2 * sin(t * 1.3));
          vec3 p = position; if (aPar.y > 3.5) { float l = fract(t * 0.07); p += vec3(sin(t * 0.6 + aPar.z) * 0.25, l * 2.6, cos(t * 0.5 + aPar.z * 1.3) * 0.25); vI *= sin(l * 3.14159); }
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aPar.x * uPx * 300.0 / -mv.z, 0.0, 220.0); }`,fragmentShader:`varying vec3 vC; varying float vK; varying float vI; uniform float uGain;
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float core = smoothstep(0.32, 0.0, d); float halo = pow(max(0.0, 1.0 - d), 2.6);
          float a = vK < 1.5 ? halo * 0.5 + core * 0.4 : (vK > 3.5 ? core * 1.6 : halo * 0.55 + core * 1.3);
          gl_FragColor = vec4(vC * a * vI * uGain, 1.0); }`}),c=new Eo(a,l);c.frustumCulled=!1,e.add(c)}if(t.length){const s=Te.low?5:9,r=[],o=[],a=[];for(const h of t)for(let f=0;f<s;f++)r.push(h.p.x,h.p.y,h.p.z),o.push(h.up.x,h.up.y,h.up.z),a.push(h.size,f/s+Math.random()*.05,h.dark,Math.random()*6.28);const l=new ge;l.setAttribute("position",new te(r,3)),l.setAttribute("aUp",new te(o,3)),l.setAttribute("aPar",new te(a,4));const c=new Ne({transparent:!0,depthWrite:!1,uniforms:{...i,uCol:{value:new Ct(9277334)}},vertexShader:`attribute vec3 aUp; attribute vec4 aPar; uniform float uTime; uniform float uPx; varying float vA; varying float vD;
        void main(){ float l = fract(uTime * 0.085 + aPar.y);
          vec3 side = normalize(cross(aUp, vec3(0.3, 0.1, 0.9)));
          float mist = step(1.5, aPar.z); l = mix(l, fract(uTime * 0.012 + aPar.y), mist); vD = mix(aPar.z, 0.85, mist);
          vec3 p = position + aUp * (l * 2.6 * aPar.x) + side * (l * l * 1.3 + sin(l * 7.0 + aPar.w) * 0.09) * aPar.x;
          p = mix(p, position + side * (l - 0.5) * 5.0 * aPar.x + aUp * sin(aPar.w + l * 6.28) * 0.12, mist);
          vA = mix(smoothstep(0.0, 0.12, l) * (1.0 - l) * 0.5, sin(l * 3.14159) * 0.075, mist);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(mix(0.25 + l * 1.3, 2.6, mist) * aPar.x * uPx * 600.0 / -mv.z, 0.0, 420.0); }`,fragmentShader:`varying float vA; varying float vD; uniform vec3 uCol;
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 1.6) * vA; gl_FragColor = vec4(uCol * vD, a); }`}),u=new Eo(l,c);u.frustumCulled=!1,u.renderOrder=5,e.add(u)}return{group:e,U:i}}const Fi=[.62,.42,.32],yu=[.055,.04,.03],Zv=[.12,.07,.035],Su=[.42,.46,.5],bu=[.2,.12,.065],wu=[.82,.79,.72],Eu=[.42,.31,.09],Rl=.178,wa=.292,Tu=.154,Jv=new N(0,1,0),Kv=new N,vs=new N,Ea=new N,Au=new Bn;function jv(n,t,e=0,i=0,s=Rl){const r=n.attributes.position.count,o=new Float32Array(r*3),a=new Float32Array(r*4);for(let l=0;l<r;l++)o[l*3]=t[0],o[l*3+1]=t[1],o[l*3+2]=t[2],a[l*4]=i,a[l*4+1]=s,a[l*4+2]=e;return n.setAttribute("color",new Ae(o,3)),n.setAttribute("aLimb",new Ae(a,4)),n}function Mn(n,t,e={}){const i=Se(new Sr(n.map(s=>new ut(s[0],s[1])),t,e.p0??0,e.pl??Math.PI*2));return i.scale(e.sx??1,1,e.sz??1),i.translate(0,0,e.z??0),i}function xi(n,t,e,i,s,r={}){vs.set(...n),Ea.set(...t);const o=vs.distanceTo(Ea),a=[new ut(1e-4,-e)];r.round&&a.push(new ut(e*.82,-e*.55)),a.push(new ut(e,0)),r.rm&&a.push(new ut(r.rm,o*(r.at??.5))),a.push(new ut(i,o),new ut(1e-4,o+i));const l=Se(new Sr(a,s));return Au.setFromUnitVectors(Jv,Kv.copy(Ea).sub(vs).normalize()),l.applyQuaternion(Au),l.translate(vs.x,vs.y,vs.z),l}function er(n,t,e,i,s,r,o,a,l,c){const u=Se(new Xe(n,a,l,0,Math.PI*2,0,c??Math.PI));return u.scale(t,e,i),u.translate(s,r,o),u}const Ru=(n,t={})=>Mn(t.pts||[[.058,.283],[.044,.312],[.033,.345],[.016,.37],[.001,.376]],n,{sx:.97,z:-.005,p0:t.open??.62,pl:Math.PI*2-2*(t.open??.62)}),Qv={villagerA:{body:[[.057,.108],[.052,.16],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,hair:!0,hairT:.5,bare:!0,hose:[.3,.27,.22],hoseT:.5,tunicCol:[1,1,1]},villagerB:{body:[[.058,.11],[.053,.165],[.044,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,hood:[.85,.85,.85],bare:!0,hose:[.25,.22,.18],hoseT:.4,tunicCol:[1,1,1]},guard:{body:[[.059,.088],[.054,.14],[.0445,.2],[.052,.255],[.052,.287],[.022,.304]],belt:!0,helm:!0,spear:!0,hose:[.38,.38,.4],hoseT:.2,tunicCol:[1,1,1],sleeve:[.6,.55,.46],sleeveT:.35,sw:1.12},nun:{long:!0,body:[[.058,.003],[.053,.08],[.043,.17],[.042,.21],[.05,.26],[.05,.288],[.03,.3]],fold:!0,nun:!0,tunicCol:[1,1,1]},cult:{long:!0,body:[[.066,.003],[.06,.08],[.047,.17],[.045,.215],[.051,.262],[.051,.288],[.03,.3]],cult:!0,cord:!0,hood:[.8,.8,.8],hoodPeak:!0,faceDark:!0,tunicCol:[1,1,1],sw:1.3,sleeveCuff:!0},hiddenA:{body:[[.056,.112],[.051,.165],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,cloak:[.62,.62,.62],hood:[.62,.62,.62],hose:[.3,.27,.2],hoseT:.3,tunicCol:[1,1,1]},hiddenB:{body:[[.056,.112],[.051,.165],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,cloak:[.7,.7,.7],hair:!0,hairT:.3,bow:!0,hose:[.3,.27,.2],hoseT:.3,tunicCol:[1,1,1]},noble:{long:!1,body:[[.064,.05],[.058,.11],[.0455,.19],[.0445,.205],[.051,.255],[.051,.287],[.021,.304]],sash:!0,cloak:[.8,.8,.8],hair:!0,hairT:.2,cap:!0,hose:[.75,.7,.6],hoseT:.6,tunicCol:[1,1,1],sleeve:[.9,.9,.9],sleeveT:.8}};function t_(n){const t=Qv[n],e=Te.low?4:5,i=Te.low?6:7,s=Te.low?[6,3]:[8,4],r=[],o=(g,_,m=0,p=0,S=Rl)=>r.push(jv(g,_,m,p,S)),a=t.sw??1,l=t.sleeve||t.tunicCol,c=t.sleeveT??1,u={sx:1.12,sz:.78};for(const g of[1,-1]){const _=g>0?1:2,m=g>0?.014:-.01;if(t.long){const p=g>0?.012:-.008;o(xi([g*.026,.0105,p-.004],[g*.029,.0105,p+.02],.0105,.009,4),yu,0,_,.07);continue}o(xi([g*.024,Rl,0],[g*.026,.027,m],.025,.011,e,{rm:.0165,at:.62}),t.hose,t.hoseT,_),o(xi([g*.026,.0105,m-.007],[g*.03,.0105,m+.022],.0105,.009,Math.max(4,e-1)),yu,0,_)}o(Mn(t.body,i,u),t.tunicCol,1),t.belt&&o(Mn([[.0475,.191],[.0475,.211]],i,u),Zv,0),t.sash&&o(Mn([[.0475,.192],[.0475,.212]],i,u),Eu,0),t.cord&&o(Mn([[.0475,.2],[.0475,.212]],i,u),[.5,.42,.28],0),t.trim&&o(Mn([[.0645,.05],[.0625,.066]],i,u),Eu,0);const h=t.nun?t.tunicCol:l,f=t.nun?1:c,d=(g,_,m,p,S,x)=>{o(xi(m,p,.0175*a,.0145*a,e,{round:!0}),h,f,_,wa),o(xi(p,S,.0145*a,(t.cult?.0125:.0105)*a,e),x?Fi:h,x?.1:f,_,wa),o(er(.0105,1,1.05,1,S[0],S[1]-.011,S[2]+.004,5,3),Fi,.1,_,wa)};if(t.nun){for(const g of[1,-1])o(xi([g*.052,.287,0],[g*.012,.222,.046],.0175,.0125,e,{round:!0}),h,1,0);o(er(.011,1.5,1,1,0,.212,.054,5,4),Fi,.1)}else d(1,3,[.052,.287,0],[.062,.234,.005],[.061,.187,.02],t.bare),t.spear?(o(xi([-.052,.287,0],[-.064,.238,.012],.0175*a,.0145*a,e,{round:!0}),h,f,0),o(xi([-.064,.238,.012],[-.063,.205,.036],.0145*a,.0105*a,e),h,f,0),o(er(.0115,1,1,1,-.063,.2,.036,5,4),Fi,.1),o(Se(new rn(.0045,.0045,.5,4,1,!0)).translate(-.063,.25,.036),bu,0),o(Se(new bn(.0105,.055,4)).translate(-.063,.5275,.036),Su,0)):d(-1,4,[-.052,.287,0],[-.06,.236,-.003],[-.062,.19,.012],t.bare);if(o(Se(new rn(.0115,.0125,.03,6,1,!0)).translate(0,.312,.001),Fi,.1),o(er(.0235,.88,1.12,1,0,.338,.002,s[0],s[1]),t.faceDark?[.035,.028,.024]:Fi,t.faceDark?0:.12),t.faceDark||o(Se(new bn(.0042,.0085,3,1,!0)).rotateX(Math.PI/2).translate(0,.336,.026),Fi,.12),t.hair){const g=er(.0255,.9,1.12,1.04,0,0,0,7,3,1.95);g.rotateX(-.38),g.translate(0,.34,-.004),o(g,[.3,.24,.18],.5+(t.hairT||0),0)}if(t.hood&&o(Ru(i,t.hoodPeak?{pts:[[.062,.28],[.048,.312],[.034,.345],[.016,.375],[.0015,.392]],open:.7}:{}),t.hood,1),t.helm&&(o(Mn([[.0455,.325],[.0305,.333],[.0285,.35],[.018,.368],[.001,.374]],i),Su,0),o(Mn([[.0305,.29],[.027,.327]],i,{p0:0,pl:Math.PI*2}),[.3,.32,.34],0)),t.cap&&o(Mn([[.033,.353],[.027,.364],[.001,.368]],i),[1.1,1.1,1.1],.9),t.nun&&(o(Mn([[.052,.268],[.047,.29],[.03,.306],[.028,.318]],i),wu,0),o(Mn([[.0305,.316],[.0295,.34],[.0275,.358]],i,{p0:.75,pl:Math.PI*2-1.5}),wu,0),o(Ru(i,{pts:[[.056,.22],[.048,.29],[.034,.336],[.017,.372],[.001,.379]],open:.9}),t.tunicCol,1)),t.cloak&&o(Mn([[.06,.305],[.067,.18],[.075,.05]],i,{sz:.95,z:-.004,p0:.7,pl:Math.PI*2-1.4}),t.cloak,1),t.bow){const g=Se(new xr(.13,.0028,3,7,1.85));g.rotateZ(-.925),g.rotateY(Math.PI/2),g.translate(0,.23,.072),o(g,bu,0)}return kn(r)}const e_=n=>{var t;return Ps[t="fig_"+n]||(Ps[t]=t_(n))},Cu={villager:[8019004,9075282,5660735,9404520,7094062,7235674],guard:[4872826,6119784,4017516,6712178],nun:[1381658,1907488],cult:[6951952,4853004,1839120,5904916],hidden:[4873788,5922888,6969916,4018742],noble:[6958936,3428490,9071148,8007728]},n_={stand:0,kneel:1,armsUp:2,talk:3},Ih={uFigTime:{value:0}},i_=`
uniform float uFigTime; attribute vec4 aLimb; attribute vec4 aInst;
float figAng(float lb, vec4 I) {
  if (lb < 0.5) return 0.0;
  float s = sin(uFigTime * I.w + I.x), w = I.y, idle = sin(uFigTime * 0.8 + I.x * 1.7) * 0.035, a;
  if (lb < 1.5) a = s * 0.5 * w; else if (lb < 2.5) a = -s * 0.5 * w;
  else if (lb < 3.5) a = -s * 0.42 * w + idle * (1.0 - w); else a = s * 0.42 * w - idle * (1.0 - w);
  if (lb > 2.5 && w < 0.01) { float p = I.z;
    if (p > 0.5 && p < 1.5) a = -0.5 + idle;
    else if (p > 1.5 && p < 2.5) a = -2.75 + idle * 2.0;
    else if (p > 2.5 && p < 3.5) a = lb < 3.5 ? -0.3 + idle : -1.15 + sin(uFigTime * 2.3 + I.x) * 0.3; }
  return a;
}
vec3 figPos(vec3 p, vec4 L, vec4 I) {
  float a = figAng(L.x, I);
  if (L.x > 0.5) { float c = cos(a), s = sin(a), dy = p.y - L.y; p = vec3(p.x, L.y + dy * c - p.z * s, dy * s + p.z * c); }
  if (I.z > 0.5 && I.z < 1.5 && I.y < 0.01) { // kneel: shortened legs, body dropped and leaning
    if (L.x > 0.5 && L.x < 2.5) p.y *= 0.5; else { p.y -= 0.0875; p.z += (p.y - 0.0875) * 0.15; } }
  return p;
}
vec3 figRotN(vec3 n, vec4 L, vec4 I) { float a = figAng(L.x, I), c = cos(a), s = sin(a); return L.x > 0.5 ? vec3(n.x, n.y * c - n.z * s, n.y * s + n.z * c) : n; }`;function Pu(n,t,e){n.uniforms.uFigTime=Ih.uFigTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
`+i_).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed = figPos(transformed, aLimb, aInst);`),t&&(n.vertexShader=n.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 objectNormal = figRotN(objectNormal, aLimb, aInst);`)),e&&(n.vertexShader=n.vertexShader.replace("#include <color_vertex>",`#if defined( USE_COLOR ) && defined( USE_INSTANCING_COLOR )
 vColor = color.rgb * mix( vec3( 1.0 ), instanceColor.rgb, aLimb.z );
 #endif`))}const Du=(n,t,e)=>{const i=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return i-Math.floor(i)};function s_(n,t){if(!t.length)return null;const e={},i={villager:1,guard:2,nun:3,cult:4,hidden:5,noble:6};t.forEach((h,f)=>{const d=i[h.kind]?h.kind:"villager",g=(f+(h.seed||0))%2===1,_=d==="villager"?g?"villagerB":"villagerA":d==="hidden"?g?"hiddenB":"hiddenA":d;(e[_]||(e[_]=[])).push(h),h._fk=d,h._fn=f});const s=new me,r=[],o=new Ee({vertexColors:!0,roughness:.9});o.onBeforeCompile=h=>Pu(h,!0,!0),o.customProgramCacheKey=()=>"figmat";const a=new Wl({depthPacking:Bl});a.onBeforeCompile=h=>Pu(h,!1,!1),a.customProgramCacheKey=()=>"figdepth";for(const[h,f]of Object.entries(e)){const d=e_(h).clone(),g=new Float32Array(f.length*4),_=new Fo(d,o,f.length);_.castShadow=!0,_.frustumCulled=!1,_.customDepthMaterial=a,f.forEach((m,p)=>{const S=Cu[m._fk]||Cu.villager;_.setColorAt(p,Lh.setHex(m.color??S[(p*7+(m.seed||0))%S.length])),m.len=[0];for(let D=1;D<m.path.length;D++)m.len.push(m.len[D-1]+Math.hypot(m.path[D][0]-m.path[D-1][0],m.path[D][1]-m.path[D-1][1]));m.total=m.len[m.len.length-1],m.phase??(m.phase=Math.random()*100),m.speed??(m.speed=.16);const x=Du(m._fn,m.seed||0,i[m._fk]),v=Du(m._fn+3,m.seed||0,5);m.bw=(x<.33?.9:x<.66?1:1.13)+(v-.5)*.06,m.bh=(x<.33?1.05:x<.66?1:.96)+(v-.5)*.05,m.walk=m.total>.01?_e(m.speed/.12,.35,1):0,m.rate=_e(Math.PI*m.speed/(2*Tu*Math.sin(.5*Math.max(m.walk,.35)))*1.25,1.8,8),m.ph=m.phase*2.399%6.2832,g.set([m.ph,m.walk,n_[m.pose]??0,m.rate],p*4)}),d.setAttribute("aInst",new Sl(g,4)),s.add(_),r.push({im:_,arr:f})}const l=new ee,c=new ee,u=h=>{Ih.uFigTime.value=h;for(const{im:f,arr:d}of r)d.forEach((g,_)=>{let m=g.path[0][0],p=g.path[0][1],S=g.yaw??0,x=0;if(g.total>.01){let v=(h*g.speed+g.phase)%(g.loop?g.total:g.total*2),D=1;!g.loop&&v>g.total&&(v=g.total*2-v,D=-1);let E=1;for(;E<g.len.length-1&&g.len[E]<v;)E++;const R=(v-g.len[E-1])/Math.max(1e-5,g.len[E]-g.len[E-1]);m=Wt(g.path[E-1][0],g.path[E][0],R),p=Wt(g.path[E-1][1],g.path[E][1],R),S=Math.atan2((g.path[E][0]-g.path[E-1][0])*D,(g.path[E][1]-g.path[E-1][1])*D),x=-Tu*g.bh*(1-Math.cos(.5*g.walk*Math.sin(h*g.rate+g.ph)))*(g.scale??1)}else S+=Math.sin(h*.7+g.phase)*.25;Ao(n,m,p,S,g.scale??1,x+(g.lift??0),l,g.h),l.multiply(c.makeScale(g.bw,g.bh,g.bw)),f.setMatrixAt(_,l)}),f.instanceMatrix.needsUpdate=!0};return u(0),{mesh:s,update:u}}function he(n,t,e,i,s,r={}){const o=n.r;let a=0,l=0;for(;a<e&&l++<e*12;){const[c,u]=i(o),h=Mi(n.a,c,u);h<(r.minH??.12)||h>(r.maxH??99)||s&&!s(c,u,h)||(n.instance(t,c,u,o()*6.28,o.range(r.s0??.8,r.s1??1.3),r.lift??-.03),a++)}}function r_(n,t){if(!t.length)return null;const e=new ge;e.setAttribute("position",new te([0,0,.05,-.16,.03,-.02,0,0,-.04,0,0,.05,0,0,-.04,.16,.03,-.02],3)),e.computeVertexNormals();const i=new Fo(e,new Uo({color:394758,side:dn}),t.length);i.frustumCulled=!1;const s=new ee,r=new ee,o=a=>{t.forEach((l,c)=>{const u=a*l.speed+l.phase,h=l.x+Math.cos(u)*l.r,f=l.z+Math.sin(u)*l.r*.8;Ao(n,h,f,-u,l.scale??1,0,s,l.h+Math.sin(u*1.7)*.3),r.makeScale(1,1+Math.sin(a*11+l.phase)*2.5,1),s.multiply(r),i.setMatrixAt(c,s)}),i.instanceMatrix.needsUpdate=!0};return o(0),{mesh:i,update:o}}const si=new Ct;function Uh(n,t,e,i,s,r){const o=wn(e*6,i*6,s*6,3),a=_e(Dt(.3,.58,t)+Dt(2.6,5,n+o*2)*.85,0,1),l=Dt(.32,.02,n)*.9,c=Dt(-.05,.25,wn(e*14+9,i*14,s*14,3))*Dt(.3,.7,n)*(1-a),u=Dt(6,9,n);return r.setRGB(1.05+o*.7+u*.7,1.02+o*.5+u*.7,.96+o*.25+u*.8),n<0&&r.multiplyScalar(_e(1+n*.5,.25,1)),[a,l,c]}function o_(){const n=Te.low?128:208,t=[],e=Iv(),i={x:0,z:0},s=[[1,0,0,0,1,0,0,0,1],[-1,0,0,0,1,0,0,0,-1],[0,1,0,0,0,1,1,0,0],[0,-1,0,0,0,-1,1,0,0],[0,0,1,1,0,0,0,1,0],[0,0,-1,-1,0,0,0,1,0]];for(const[l,c,u,h,f,d,g,_,m]of s){const p=new Float32Array((n+1)*(n+1)*3),S=new Float32Array((n+1)*(n+1)*3),x=new Float32Array((n+1)*(n+1)*3),v=new Float32Array((n+1)*(n+1));let D=0;for(let M=0;M<=n;M++)for(let I=0;I<=n;I++,D++){const V=Math.tan((I/n*2-1)*Math.PI/4),z=Math.tan((M/n*2-1)*Math.PI/4);let k=l+h*V+g*z,K=c+f*V+_*z,q=u+d*V+m*z;const lt=1/Math.hypot(k,K,q);k*=lt,K*=lt,q*=lt;let $=Mr(k,K,q);v[D]=$;let vt=0;for(const Tt of e)Rh(Tt,k,K,q,i)&&Math.hypot(i.x,i.z)<Tt.patchR-1.6&&(vt=.7);const Mt=Me+Math.max($,-3)-vt;p[D*3]=k*Mt,p[D*3+1]=K*Mt,p[D*3+2]=q*Mt}const E=new ge;E.setAttribute("position",new Ae(p,3));const R=[],P=h*(_*u-m*c)+f*(m*l-g*u)+d*(g*c-_*l)<0;for(let M=0;M<n;M++)for(let I=0;I<n;I++){const V=M*(n+1)+I,z=V+1,k=V+n+1,K=k+1;P?R.push(V,k,z,z,k,K):R.push(V,z,k,z,K,k)}E.setIndex(R),E.computeVertexNormals();const y=E.attributes.normal.array;for(D=0;D<v.length;D++){const M=p[D*3],I=p[D*3+1],V=p[D*3+2],z=1/Math.hypot(M,I,V),k=1-(y[D*3]*M+y[D*3+1]*I+y[D*3+2]*V)*z,K=Uh(v[D],k*2.2,M*z,I*z,V*z,si);S[D*3]=K[0],S[D*3+1]=K[1],S[D*3+2]=K[2],x[D*3]=si.r,x[D*3+1]=si.g,x[D*3+2]=si.b}E.setAttribute("aMix",new Ae(S,3)),E.setAttribute("color",new Ae(x,3)),t.push(E)}const r=kn(t),o=Dh(),a=new qt(r,o);return a.receiveShadow=!0,a.castShadow=!0,a.userData.mat=o,a}function a_(n,t){const e=n.patchR,i=Te.low?.3:.16,s=Math.ceil(2*e/i),r=[],o=[],a=[],l=[],c=new Int32Array((s+1)*(s+1)).fill(-1),u=new N;for(let m=0;m<=s;m++)for(let p=0;p<=s;p++){const S=-e+p*i,x=-e+m*i,v=Math.hypot(S,x);if(v>e+i)continue;const D=Mi(n,S,x),E=v>e-i?.9:0;ys(S,x,Math.max(D,-3)-E,u),c[m*(s+1)+p]=l.length,l.push(D),r.push(u.x,u.y,u.z)}const h=[];for(let m=0;m<s;m++)for(let p=0;p<s;p++){const S=c[m*(s+1)+p],x=c[m*(s+1)+p+1],v=c[(m+1)*(s+1)+p],D=c[(m+1)*(s+1)+p+1];S<0||x<0||v<0||D<0||h.push(S,v,x,x,v,D)}const f=new ge;f.setAttribute("position",new te(r,3)),f.setIndex(h),f.computeVertexNormals();const d=f.attributes.normal.array;let g=0;for(let m=0;m<=s;m++)for(let p=0;p<=s;p++){if(c[m*(s+1)+p]<0)continue;const S=-e+p*i,x=-e+m*i,v=1/Math.hypot(S,Me,x),D=S*v,E=Me*v,R=x*v,P=1-(d[g*3]*D+d[g*3+1]*E+d[g*3+2]*R);u.copy(n.n).multiplyScalar(Me).addScaledVector(n.e,S).addScaledVector(n.f,x).normalize();const y=Uh(l[g],P*2.2,u.x,u.y,u.z,si);t?.(S,x,l[g],P,y,si),o.push(y[0],y[1],y[2]),a.push(si.r,si.g,si.b),g++}f.setAttribute("aMix",new te(o,3)),f.setAttribute("color",new te(a,3));const _=new qt(f,Dh());return _.receiveShadow=!0,_.castShadow=!0,_}function l_(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),i=e.createImageData(256,256);for(let a=0;a<256;a++)for(let l=0;l<256;l++){const c=(d,g)=>{const _=d/256*Math.PI*2,m=g/256*Math.PI*2;return wn(Math.cos(_)*1.6,Math.sin(_)*1.6+Math.cos(m)*1.6,Math.sin(m)*1.6,4,2.2)},u=c(l+1,a)-c(l-1,a),h=c(l,a+1)-c(l,a-1),f=(a*256+l)*4;i.data[f]=128+u*900,i.data[f+1]=128+h*900,i.data[f+2]=255,i.data[f+3]=255}e.putImageData(i,0,0);const s=new kg(t);s.wrapS=s.wrapT=pr,s.repeat.set(90,45);const r=new Sv({color:399138,roughness:.34,metalness:0,normalMap:s,normalScale:new ut(.35,.35),clearcoat:.2,clearcoatRoughness:.4,envMapIntensity:.9}),o=new qt(new Xe(Me,192,128),r);return o.receiveShadow=!0,o.userData.tick=a=>{s.offset.set(a*.004,a*.0025)},o}function c_(){const n=new Ne({side:Ke,transparent:!0,depthWrite:!1,blending:$i,uniforms:{uColor:{value:new Ct(5210024)},uPower:{value:3.2},uGain:{value:.9}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uColor; uniform float uPower; uniform float uGain; varying vec3 vN; varying vec3 vV;
      void main(){ float f = smoothstep(0.0, 0.42, abs(dot(vN, vV))); f = f * f * f * 0.42; gl_FragColor = vec4(uColor * f * uGain, 1.0); }`});return new qt(new Xe(Me+9,96,64),n)}function u_(){const n=Te.low?1200:2600,t=new Float32Array(n*3),e=new Float32Array(n),i=ii(77);for(let a=0;a<n;a++){const l=i()*2-1,c=i()*Math.PI*2,u=Math.sqrt(1-l*l);t[a*3]=u*Math.cos(c)*2400,t[a*3+1]=l*2400,t[a*3+2]=u*Math.sin(c)*2400,e[a]=Math.pow(i(),6)*2.6+.6}const s=new ge;s.setAttribute("position",new Ae(t,3)),s.setAttribute("aSize",new Ae(e,1));const r=new Ne({transparent:!0,depthWrite:!1,blending:$i,uniforms:{uPx:{value:1},uFade:{value:1}},vertexShader:"attribute float aSize; uniform float uPx; varying float vS; void main(){ vS = aSize; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * uPx; }",fragmentShader:"varying float vS; uniform float uFade; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vec3(0.75,0.82,1.0) * a * (0.25 + vS * 0.22) * uFade, 1.0); }"}),o=new Eo(s,r);return o.frustumCulled=!1,o}function h_(){const n=ii(4242),t=[],e=[],i=[],s=new N,r=new N,o=new N;let a=0,l=0;for(;a<70&&l++<4e3;){const f=n()*2-1,d=n()*Math.PI*2,g=Math.sqrt(1-f*f);s.set(g*Math.cos(d),f,g*Math.sin(d));const _=Mr(s.x,s.y,s.z);if(_<.35||_>3.2)continue;a++;const m=n()<.13;r.set(-s.y,s.x,s.z*.3).cross(s).normalize(),o.copy(s).cross(r);const p=m?3:4+(n()*14|0);for(let S=0;S<p;S++){const x=s.clone().addScaledVector(r,(n()-.5)*.05).addScaledVector(o,(n()-.5)*.05).normalize(),v=Mr(x.x,x.y,x.z);if(!(v<.05))if(x.multiplyScalar(Me+v+.25),t.push(x.x,x.y,x.z),m){const D=n()<.4;e.push(D?.55:1,D?.25:.08,D?1:.05),i.push(2.2)}else e.push(1,.56+n()*.15,.2),i.push(.8+n()*1.2)}}const c=new ge;c.setAttribute("position",new te(t,3)),c.setAttribute("color",new te(e,3)),c.setAttribute("aSize",new te(i,1));const u=new Ne({transparent:!0,depthWrite:!1,blending:$i,vertexColors:!0,uniforms:{uPx:{value:1},uTime:{value:0},uGain:{value:1}},vertexShader:`attribute float aSize; uniform float uPx; uniform float uTime; varying vec3 vC; varying float vF;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * normalize(position));
      vF = smoothstep(-0.05, 0.25, dot(n, normalize(-mv.xyz))) * (0.75 + 0.25 * sin(uTime * 3.0 + position.x * 40.0));
      gl_Position = projectionMatrix * mv; gl_PointSize = clamp(aSize * uPx * 260.0 / -mv.z, 1.5, 34.0); }`,fragmentShader:"varying vec3 vC; varying float vF; uniform float uGain; void main(){ float d = length(gl_PointCoord - 0.5); float a = pow(smoothstep(0.5, 0.0, d), 2.2); gl_FragColor = vec4(vC * a * vF * uGain * 2.2, 1.0); }"}),h=new Eo(c,u);return h.frustumCulled=!1,h}function f_(){const n=new me,t=Ge("metal",{scale:.09,tint:14263642,metalness:1,roughness:.58,norm:.9});t.envMapIntensity=1.8,t.emissive=new Ct(4860940),t.emissiveIntensity=.55;const e=Ge("metal",{scale:.12,tint:7033400,metalness:1,roughness:.72}),i=(h,f,d)=>{const _=[[h+.3,-d],[f-.3,-d],[f,-d+.3],[f,d-.3],[f-.3,d],[h+.3,d],[h,d-.3],[h,-d+.3],[h+.3,-d]].map(([m,p])=>new ut(m,p));return new Sr(_,240)},s=(h,f,d,g)=>{const _=[i(h,f,d)];for(let m=0;m<g;m++){const p=m/g*Math.PI*2,S=m%15===0,x=m%5===0,v=(S?1.7:x?1.1:.6)*d;for(const D of[f+.12,h-.12]){const E=new Ai(.34,v,S?.55:.24);E.translate(D,d-v/2-.25,0),E.rotateY(p),_.push(E)}if(S)for(const D of[1,-1]){const E=new Xe(.62,10,8);E.translate((h+f)/2,D*(d+.2),0),E.rotateY(p+.13),_.push(E)}}return kn(_.map(d_))},r=new qt(s(126,129.4,4.2,180),t),o=new qt(s(131.5,134.2,2.6,120),e);o.quaternion.setFromAxisAngle(new N(.66,0,.75).normalize(),1.52);const a=new me,l=new me;a.add(new qt(new xr(150,.7,10,200),t));const c=new qt(new Xe(3.4,32,20),new Ee({color:2759176,emissive:16758362,emissiveIntensity:3.2,roughness:.4}));c.position.set(150,0,0),a.add(c),l.add(new qt(new xr(144.5,.55,10,200),e));const u=new qt(new Xe(2.6,32,20),Ge("rock",{scale:.5,tint:4869205,roughness:.9}));u.position.set(144.5,0,0),l.add(u),a.rotation.x=Math.PI/2,l.rotation.x=Math.PI/2;for(const h of[r,o])h.castShadow=!0,h.receiveShadow=!0;return n.add(r,o,a,l),n.userData={main:r,inner:o,sunRing:a,moonRing:l,sun:c,moon:u},n}function d_(n){const t=n.index?n.toNonIndexed():n;for(const e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e);return t}function p_(n){const t=ii(909),e=new me,i=new Ee({color:9410726,roughness:1,metalness:0,emissive:1448738,emissiveIntensity:.35,alphaHash:!0});i.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <alphamap_fragment>",`
      float ndv = abs(dot(normalize(vNormal), normalize(vViewPosition)));
      diffuseColor.a *= smoothstep(0.1, 0.9, ndv) * 0.92 * smoothstep(3.0, 20.0, length(vViewPosition));`)};const s=new Cs(1,Te.low?2:3),r=(l,c,u)=>{const h=[],f=4+(t()*6|0);for(let g=0;g<f;g++){const _=s.clone(),m=u*t.range(.45,1),p=t.range(-1.6,1.6)*u,S=t.range(-.9,.9)*u,x=t.range(0,.35)*u,v=_.attributes.position,D=_.attributes.normal,E=t()*100;for(let R=0;R<v.count;R++){let P=v.getX(R),y=v.getY(R),M=v.getZ(R);D.setXYZ(R,P,y*1.4+.25,M);const I=1+wn(P*1.3+E,y*1.3,M*1.3,4)*.9;P*=I*m*1.25,y*=I*m*.62,M*=I*m,y<-.25*m&&(y=-.25*m+(y+.25*m)*.25),v.setXYZ(R,P+p,y+x,M+S)}_.normalizeNormals(),h.push(_)}const d=new qt(kn(h),i);d.position.copy(l).multiplyScalar(Me+c),d.quaternion.setFromUnitVectors(new N(0,1,0),l),d.rotateY(t()*6.28),d.castShadow=!0,d.receiveShadow=!0,e.add(d)},o=new N,a=Te.low?34:70;for(let l=0;l<a;l++){if(l<a*.6){const u=n[l%n.length];o.set(t.range(-1,1),t.range(-1,1),t.range(-1,1)).normalize().multiplyScalar(t.range(.12,.42)).add(u).normalize()}else{const u=t()*2-1,h=t()*6.283,f=Math.sqrt(1-u*u);o.set(f*Math.cos(h),u,f*Math.sin(h))}let c=!0;for(const u of n)o.angleTo(u)<.15&&(c=!1);c&&r(o.clone(),t.range(9,14),t.range(1.3,3.4))}return e}const je=(n,t,e,i=3)=>wn(n*e,.37,t*e,i),bi=(n,t,e)=>{let i=1e9;for(let s=0;s<e.length-1;s++){const[r,o]=e[s],[a,l]=e[s+1],c=a-r,u=l-o,h=_e(((n-r)*c+(t-o)*u)/(c*c+u*u),0,1);i=Math.min(i,Math.hypot(n-r-c*h,t-o-u*h))}return i},Fn=(n,t=0,e=0)=>i=>{const s=i()*6.283,r=Math.sqrt(i())*n;return[t+Math.cos(s)*r,e+Math.sin(s)*r]},qe=(n,t)=>e=>{const i=e()*6.283,s=Math.sqrt(Wt(n*n,t*t,e()));return[Math.cos(i)*s,Math.sin(i)*s]},yr=(n,t,e=1)=>(i,s,r,o,a)=>{const l=bi(i,s,n)+je(i,s,2.5,2)*.25;a[1]=Math.max(a[1],Dt(t,t*.35,l)*e),l<t&&(a[2]*=.3)},Lu=[[0,2.2],[1.4,4],[.6,5.6],[3.5,8.5],[7,11],[12,13]],m_={id:"ossuary",lat:14,lon:-24,radius:12,blend:10,profile(n,t,e){let i=.75+je(n,t,.16)*.9+je(n,t,.9)*.14;i+=2*Dt(7.2,1.9,Math.hypot(n,t*1.15));const s=Dt(2.3,1.5,e);i=Wt(i,2.72,s);const r=Dt(.3,0,Math.max(Math.abs(n-1.3)-1.05,2.55-t,t-5.6));return i=Wt(i,1.5,r),i-=1.9*Dt(4.2,1.2,Math.hypot(n+7,t-5.5)),i},paint(n,t,e,i,s,r){yr(Lu,.42)(n,t,e,i,s);const o=Dt(.5,0,Math.max(Math.abs(n-1.3)-1.2,2.4-t,t-6.2));s[0]=Math.max(s[0],o*.9),o>.5&&(s[2]=0),r.multiplyScalar(.92),s[2]=Math.max(s[2],.25)},build(n){n.house(0,0,.5,{w:2,d:2.9,storeys:2,m:{roof:"slate",wall:"plasterDark"},lit:.22,chimney:!0,smoke:!0,shed:!0,rh:1.3}),n.light(.4,.6,1.9,16751168,2.5,5),n.fence([[-2.2,-1.6],[-2.4,1.2],[-1.4,2.5]]),n.fence([[1.8,-1.9],[2.6,.3],[2.2,1.7]]),n.well(-1.5,1.4),n.cart(1.9,1,2.2),n.torch(.5,2,.55,16747056),n.at(1.3,3.5,0),n.box("blocksDark",2.3,.08,2.1,0,-.05,-.05),n.box("blocksDark",2.3,1.3,.16,0,0,-1.1);for(const t of[-1,1])n.box("blocksDark",.16,1.3,2.1,t*1.15,0,-.05),n.box("blocks",.2,1.36,.2,t*1.15,0,1);n.box("blocksDark",2.46,.14,.9,0,1.3,-.72),n.box("blocks",2.5,.12,.2,0,1.3,1);for(let t=0;t<7;t++)n.cyl("bone",.045,.045,.05,-.95+t*.16,.82,-1,6,Math.PI/2),n.cyl("bone",.045,.045,.05,-.87+t*.16,.95,-1,6,Math.PI/2);n.box("woodDark",.44,.74,.05,-.62,0,-1);for(const t of[.16,.42,.66])n.box("iron",.46,.035,.06,-.62,t,-.99);for(const t of[-1,1])for(const e of[-1,1])n.box("iron",.018,.5,.018,.18+t*.16,.2,-.2+e*.16);for(const t of[-1,0,1])n.box("iron",.014,.5,.014,.18+t*.08,.2,-.04),n.box("iron",.014,.5,.014,.18+t*.08,.2,-.36);n.box("iron",.36,.02,.36,.18,.19,-.2),n.box("iron",.36,.02,.36,.18,.7,-.2),n.box("iron",.014,.6,.014,.18,.72,-.2);for(const t of[-1,1])n.box("wood",.03,1.5,.03,.82+t*.1,0,-.92);for(let t=0;t<9;t++)n.box("wood",.2,.022,.022,.82,.12+t*.16,-.92);n.box("iron",.06,.09,.06,.5,.98,-.98),n.glow(.5,1.02,-.92,16754250,.5,2).light(.3,.9,-.3,16751168,4.5,4),n.glow(.82,1.35,-.92,16760944,.35,0);for(const[t,e]of[[-.8,.3],[.7,.5],[-.2,.7]])n.cyl("bone",.012,.015,.06,t,.03,e,5),n.glow(t,.14,e,16760928,.13,2);n.agent({kind:"villager",path:[[1.12,3.75]],yaw:.9,scale:.42,color:12168596,h:1.5});for(let t=0;t<12;t++)n.instance("bones",1.3+n.r.range(-.9,.9),3.4+n.r.range(-.8,1),n.r()*6,n.r.range(.7,1.2));for(let t=0;t<26;t++){const e=n.r.range(1.9,4.3),i=n.r.range(3,5.6);n.grave(Math.cos(e)*i,Math.sin(e)*i-.5,e)}he(n,"dead",46,qe(2.8,15),(t,e)=>bi(t,e,Lu)>.7&&!(Math.abs(t-1.3)<1.7&&e>2&&e<7.2),{s0:.9,s1:2}),he(n,"pine",70,qe(8,18),null,{s0:.8,s1:1.5}),he(n,"rock",50,qe(2.5,16),null,{s0:.4,s1:1.5}),he(n,"bush",60,qe(2.4,15),null,{s0:.6,s1:1.3}),n.agent({kind:"cult",path:[[-.9,2.3]],yaw:.8,color:5658204});for(let t=0;t<5;t++)n.bird({x:.3,z:.4,r:2.2+t*.5,h:5.2+t*.3,speed:.5-t*.05,phase:t*1.3})}},nr=n=>-6.2+2*Math.sin(n*.24+.6),co=[[-14,1.2],[-6.4,.6],[-2,.2],[2.5,.4],[6,1.5],[14,3]],Ta=[[.6,.3],[.2,-3.5],[1.5,-7],[1,-13]],g_={id:"village",lat:2,lon:0,radius:14,blend:9,profile(n,t,e){let i=.62+je(n,t,.2)*.35+je(n,t,1.1,2)*.05+Dt(5,15,n)*1.3+Dt(4,14,-t)*.8;const s=Dt(3.6,2,Math.hypot(n-1.2,t-2.6));i=Wt(i,.66,s);const r=Math.abs(n-nr(t));i=Wt(-.55,i,Dt(.45,1.9,r));const o=Dt(.9,.4,Math.abs(t-.9))*Dt(2.2,1.2,r);return i=Math.max(i,Wt(i,.5,o*0)),i},paint(n,t,e,i,s){if(yr(co,.5)(n,t,e,i,s),yr(Ta,.36)(n,t,e,i,s),s[1]=Math.max(s[1],Dt(3.4,2.2,Math.hypot(n-1.2,t-2.6))*.95),n>6&&t<-1&&t>-9){const r=Math.sin(n*5.2)*.5+.5;s[1]=Math.max(s[1],r*.7*Dt(6,7,n)*Dt(13,11,n))}},build(n){const t={m:{roof:"thatch"}},e=[[-3.2,-1,.2],[-1.2,-1.3,-.1],[2.6,-1.2,.15,2],[4.8,-.4,.5],[-3,2.2,3],[-1,4.9,2.6],[-4.4,-3.6,.6,2],[7.2,4.9,4.2],[7.6,.2,.7],[-.9,-4.2,1.4],[1.9,-5.2,-1.5,2],[.2,-8.2,1.2],[2.9,-8.8,-1.3],[8.4,3.9,3.9],[-9.4,2.4,2.9],[-10.2,-.8,.3]];for(const[s,r,o,a]of e)n.house(s,r,o,{...t,storeys:a??1,lit:.62});n.house(-2.4,5.9,.2+Math.PI,{w:1.5,d:2.9,storeys:2,stoneWalls:!0,m:{roof:"slate"},lit:.5,chimney:!1,shed:!1,rh:1.3}),n.at(-2.4,5.9,.2+Math.PI),n.box("stone",.75,2.9,.75,0,0,1.5),n.cyl("slate",.02,.62,1.1,0,2.9,1.5,4),n.bridge(nr(.9)+.05,.95,.06,3,.8),n.gallows(1.4,2.7,-.5),n.cart(3.3,1.5,.3),n.well(-.6,1.9),n.stall(3.9,3,1.2),n.stall(-.9,3.5,2.5,"woodDark"),n.torch(.3,3.5,.6,16747056,!0).torch(2.9,3.6,.6,16747056,!0).torch(-1.6,.9,.6).torch(4.4,.9,.6).torch(nr(.9)+1.8,.4,.6).torch(.9,-3.3,.6);for(let s=0;s<9;s++)n.crate(3.6+n.r.range(-.4,.4),2.1+n.r.range(-.3,.3),n.r.range(.14,.22));for(let s=0;s<6;s++)n.barrel(-1.6+n.r.range(-.3,.3),3.2+n.r.range(-.3,.3));n.fence([[6.2,-1.2],[12.6,-1.4],[12.8,-8.6],[6.4,-8.8],[6.2,-1.2]]),n.fence([[-4.4,3.4],[-4.6,7.2],[-1.2,7.6]]);for(let s=0;s<14;s++){const r=-.5+Math.PI+n.r.range(-1.2,1.2),o=n.r.range(.9,1.9),a=1.4+Math.sin(r+2.2)*o+.6,l=2.7+Math.cos(r+2.2)*o+.8;n.agent({kind:"villager",path:[[a,l]],yaw:Math.atan2(1.4-a,2.5-l),seed:s})}n.agent({kind:"guard",path:[[.75,2.2]],yaw:2.2}).agent({kind:"guard",path:[[2.2,3.4]],yaw:2.6}),n.agent({kind:"villager",path:[[1,2.75]],yaw:2.4,lift:.5,color:2762274,pose:"talk"}).agent({kind:"villager",path:[[1.5,2.42]],yaw:2.4,lift:.5,color:9075302}).agent({kind:"villager",path:[[1.78,2.3]],yaw:2.4,lift:.5,color:7300696}),n.agent({kind:"villager",path:[[-4.5,3.3]],yaw:1.3,color:5919048}),n.agent({kind:"villager",path:co.slice(1,5),speed:.2,seed:1}).agent({kind:"villager",path:co.slice(1,5),speed:.17,phase:31,seed:3}).agent({kind:"villager",path:[[.4,-.2],...Ta.slice(1,3)],speed:.15,seed:4}).agent({kind:"villager",path:[[5.4,2.6],[7.8,1],[8.2,-1.6],[9,-5]],speed:.14,seed:2}).agent({kind:"villager",path:[[-9.6,1.4],[-7.6,.9],[-5,.9],[-3.4,.7]],speed:.16,seed:5}).agent({kind:"guard",path:[[-2.4,.5],[3.8,.8],[5,2.4],[1.5,4.3],[-1.8,2.6],[-2.4,.5]],speed:.13,loop:!0});const i=(s,r)=>bi(s,r,co)>1.1&&bi(s,r,Ta)>1&&Math.hypot(s-1.2,r-2.6)>4.2&&!e.some(([o,a])=>Math.hypot(s-o,r-a)<1.9)&&!(s>6&&s<13&&r<-1&&r>-9);he(n,"broadleaf",70,Fn(18),(s,r)=>i(s,r)&&Math.abs(s-nr(r))>1.2,{s0:.9,s1:1.6}),he(n,"pine",110,qe(9.5,20),(s,r)=>i(s,r),{s0:.8,s1:1.5}),he(n,"bush",120,Fn(17),i,{s0:.5,s1:1.2}),he(n,"rock",50,Fn(18),(s,r)=>Math.abs(s-nr(r))<2.2||Math.hypot(s,r)>9,{s0:.3,s1:1,minH:-.2});for(let s=0;s<4;s++)n.bird({x:1.5,z:2.5,r:3+s*.8,h:4.6+s*.4,speed:.42,phase:s*1.9})}},uo=[[-15,6],[-9,4.5],[-5,5.5],[-1.5,3.2],[1.8,.6],[4.6,-2.2]],ir=[5.6,-3.6],v_={id:"forest",lat:26,lon:14,radius:15,blend:10,profile(n,t,e){let i=1.25+je(n,t,.17)*2.6+je(n,t,.7)*.3+jl(n*.08,1,t*.08,3)*1.4*Dt(6,14,e);const s=Dt(4.6,2.6,Math.hypot(n-ir[0],t-ir[1]));i=Wt(i,1.05,s);const r=Dt(1.5,.5,bi(n,t,uo));i=Wt(i,i*.86+.1,r*.5);const o=Math.abs(n+4.5+1.6*Math.sin(t*.3));return i=Wt(-.3,i,Dt(.25,1.5,o)*1+Dt(-2,4,t)*0),i},paint(n,t,e,i,s,r){yr(uo,.3,.8)(n,t,e,i,s),s[2]=Math.max(s[2],.55),s[1]=Math.max(s[1],Dt(3.6,2.4,Math.hypot(n-ir[0],t-ir[1]))*.7),r.multiplyScalar(.9)},build(n){const[t,e]=ir,i=[];for(let o=0;o<=26;o++){const a=o/26*6.283*.9+2.5;i.push([t+Math.cos(a)*3.3,e+Math.sin(a)*2.9])}n.palisade(i,.8);const s=[[-1.4,-1,.8],[.3,-1.6,.1],[1.7,-.5,-.9],[1.2,1.3,2.4],[-.9,1.2,2.9]];for(const[o,a,l]of s)n.house(t+o,e+a,l,{w:1.15,d:1.5,storeys:1,m:{roof:"thatch",wall:"woodDark",frame:"woodDark"},lit:.5,rh:.75,shed:!1});n.at(t-2.4,e+1.9,.6);for(const o of[-1,1])for(const a of[-1,1])n.box("woodDark",.07,1.7,.07,o*.3,0,a*.3);n.box("wood",.8,.06,.8,0,1.4,0),n.roof("thatch",.8,.8,.3,1.95,.1,.06),n.glow(0,1.7,0,16756832,.5,2),n.at(t,e,0),n.cyl("stone",.2,.24,.08,0,0,0,8),n.glow(0,.2,0,16742952,1.1,2).light(0,.5,0,16747064,6,6).smoke(0,.2,0,.7,.6);for(let o=0;o<6;o++){const a=o/6*6.283;n.agent({kind:"hidden",path:[[t+Math.cos(a)*.62,e+Math.sin(a)*.62]],yaw:Math.atan2(-Math.cos(a),-Math.sin(a)),seed:o})}n.agent({kind:"hidden",path:[[t-2.2,e+1],[t-.4,e+2.1],[t+2.2,e+1.4],[t+2.4,e-1.2]],speed:.1}),n.agent({kind:"hidden",path:[[t-2.4,e+1.9]],lift:1.46,yaw:-1.2,color:2764838}),n.agent({kind:"hidden",path:[[i[0][0]+.3,i[0][1]+.1]],yaw:2.2,pose:"armsUp"}),n.at(i[0][0]+.15,i[0][1]-.25,.6),n.box("wood",.9,.07,.07,0,.5,0,0,0,.25);for(let o=0;o<3;o++)n.at(t+1.9+o*.5,e+2-o*.3,.5),n.box("woodDark",.05,.5,.05,0,0,0),n.box("woodDark",.36,.05,.05,0,.36,0),n.cyl("thatch",.09,.11,.24,0,.26,0,7),n.cyl("thatch",.06,.06,.1,0,.5,0,7);n.agent({kind:"hidden",path:[[-1.2,3],[1.8,.6],[3.6,-1.4]],speed:.09,seed:1}),n.wall([[-6.2,6.8],[-4.4,6.9],[-4.3,8.4],[-6.3,8.3],[-6.2,6.8]],{h:.9,th:.2,ruin:.55,plain:!0,mat:"stoneDark"}),n.tower(-1.2,1.4,{r:.6,h:2.3,mat:"stoneDark",lit:0}),n.column(-2,2.2,1,!0,"stoneDark");for(const[o,a]of[[-8.5,-5.5],[-9.6,-6.6],[-3.5,-9.5],[9.5,5.5],[-11.5,.5]])n.at(o,a,n.r()*6),n.glow(-.05,.42,0,16717061,.14,3).glow(.05,.42,0,16717061,.14,3);for(let o=0;o<10;o++)n.instance("bones",-8+n.r.range(-1.6,1.6),-5+n.r.range(-1.4,1.4),n.r()*6,n.r.range(.8,1.5));for(let o=0;o<26;o++)n.glow(...(n.at(n.r.range(-12,12),n.r.range(-12,12),0),[0,n.r.range(.3,1.5),0]),12576922,.09,4);const r=(o,a)=>bi(o,a,uo)>.75&&Math.hypot(o-t,a-e)>3.9&&Math.hypot(o+5.3,a-7.6)>1.6&&Math.hypot(o+1.2,a-1.4)>1;he(n,"pine",760,Fn(22),r,{s0:.9,s1:2.1}),he(n,"dead",120,Fn(20),r,{s0:1,s1:2.2}),he(n,"broadleaf",90,Fn(20),r,{s0:1,s1:1.8}),he(n,"bush",220,Fn(20),(o,a)=>bi(o,a,uo)>.4,{s0:.5,s1:1.3}),he(n,"rock",110,Fn(20),null,{s0:.4,s1:1.6});for(let o=0;o<3;o++)n.bird({x:-3,z:-2,r:4+o,h:6.5,speed:.36,phase:o*2.2})}},ho=[0,-1.5],sr=[.2,4.6];function __(n,t,e,i){n.at(t,e,i),n.box("blocks",1.7,3,5.4,0,-.3,0),n.gable("blocks",1.7,1.3,5.4,0,2.7,0),n.roof("slate",1.7,5.4,1.3,2.7,.1,.07);for(const s of[-1,1]){n.box("blocks",.8,1.6,5.2,s*1.2,-.3,0),n.box("slate",1,.07,5.3,s*1.25,1.5,0,0,0,-s*.5);for(let r=0;r<7;r++){const o=-2.4+r*.8;n.box("blocksDark",.3,2.1,.22,s*1.75,-.3,o),n.box("blocksDark",.7,.14,.18,s*1.42,1.85,o,0,0,-s*.75),n.cyl("blocksDark",0,.1,.42,s*1.75,1.8,o,4),r<6&&(n.box("window",.04,.62,.2,s*1.61,.45,o+.4),n.glow(s*1.72,.76,o+.4,16754250,.7,1),n.box("window",.04,.5,.16,s*.86,2,o+.4))}}n.box("blocks",4.6,2.7,1.3,0,-.3,-1),n.gable("blocks",1.3,1,4.6,0,2.4,-1,Math.PI/2);for(const s of[-1,1])n.cyl("window",.36,.36,.05,s*2.31,1.6,-1,12,0,Math.PI/2),n.glow(s*2.45,1.6,-1,16754250,1.4,1);n.cyl("blocks",.84,.86,3,0,-.3,-2.75,10),n.cyl("slate",.02,.92,.9,0,2.7,-2.75,10),n.cyl("blocksDark",.22,.3,.9,0,3.6,-1,8),n.cyl("slate",0,.34,2.6,0,4.5,-1,8);for(const s of[-1,1]){n.box("blocks",1.05,4.9,1.05,s*.95,-.3,2.9),n.box("blocksDark",1.15,.12,1.15,s*.95,4.6,2.9),n.cyl("slate",0,.74,2.3,s*.95,4.72,2.9,4);for(const r of[[-1,-1],[1,-1],[-1,1],[1,1]])n.cyl("blocksDark",0,.1,.6,s*.95+r[0]*.5,4.7,2.9+r[1]*.5,4);n.box("window",.16,.7,.04,s*.95,3.3,3.44),n.box("black",.2,.55,.04,s*.95,1.6,3.44),n.glow(s*.95,3.65,3.55,16754250,.8,1)}n.cyl("window",.46,.46,.06,0,2.55,2.72,16,Math.PI/2),n.glow(0,2.55,2.9,16754250,2,1),n.box("black",.5,.85,.06,0,0,2.72),n.box("blocksDark",.9,.5,.3,0,1,2.8);for(let s=0;s<4;s++)n.box("blocksDark",1.5-s*.14,.07,.24,0,-.26+s*.07,3.75-s*.2)}const x_={id:"nuns",lat:44,lon:40,radius:13,blend:9,profile(n,t,e){let i=.95+je(n,t,.19)*.9+je(n,t,1,2)*.08+Dt(6,14,-t)*2.2;const s=Dt(7.5,3.9,Math.hypot(n-ho[0],(t-ho[1])*.8));i=Wt(i,2.2,s);const r=Dt(3.2,2.2,Math.hypot(n-sr[0],t-sr[1]));return i=Wt(i,1.5,r),i},paint(n,t,e,i,s,r){yr([[.2,2.2],[.2,7],[1.5,10],[4,14]],.4)(n,t,e,i,s);const o=Dt(3.2,2.2,Math.hypot(n-sr[0],t-sr[1]));s[1]=Math.max(s[1],o*.9),r.multiplyScalar(.85)},build(n){__(n,ho[0],ho[1],0);const[t,e]=sr,i=[];for(let o=0;o<=22;o++){const a=o/22*6.283*.82+.55+Math.PI/2;i.push([t+Math.cos(a)*3.4,e+Math.sin(a)*3.1])}n.palisade(i,.62),n.at(t-.2,e-.3,.3),n.cyl("stone",.3,.36,.5,0,0,0,10),n.cyl("stoneDark",.1,.13,.9,.12,.5,0,6),n.box("black",.2,.2,.06,0,.12,.33),n.glow(0,.24,.4,16742952,.8,2).light(0,.5,.6,16747064,7,6).smoke(.12,1.45,0,.9,.6);for(let o=0;o<3;o++)for(let a=0;a<6-o;a++)n.at(t-1.9+a*.13+o*.065,e-1.5,0),n.cyl("wood",.06,.06,.5,0,.06+o*.11,0,6,Math.PI/2);n.well(t+1.9,e-1.2),n.at(t+.9,e+.5,-.5),n.box("wood",.7,.04,.36,0,.26,0);for(const o of[-1,1])n.box("woodDark",.04,.26,.3,o*.3,0,0);n.box("bone",.2,.03,.26,0,.3,0),n.agent({kind:"nun",path:[[t+1.15,e+.2]],yaw:2.6,pose:"talk"});for(let o=0;o<5;o++)n.agent({kind:"villager",path:[[t+.55-o*.34,e+.95+o*.22]],yaw:-.9,seed:o+2});n.agent({kind:"nun",path:[[t-1.1,e+.7]],yaw:.9}).agent({kind:"villager",path:[[t-.78,e+.95]],yaw:-2.2,pose:"armsUp",color:7035464});for(let o=0;o<3;o++)n.agent({kind:"villager",path:[[t-.5+o*.3,e+.25-o*.1]],yaw:3+o*.3,seed:o});n.agent({kind:"cult",path:[[5.2,2.2],[5.6,5],[4.6,8.6],[5.6,5]],speed:.06,color:1446927,loop:!0}),n.agent({kind:"nun",path:[[.1,2.3],[.2,3.1]],speed:.03});const s={m:{roof:"thatch",wall:"woodDark",frame:"woodDark",plinth:"stoneDark"},storeys:1,lit:.35,shed:!1};for(const[o,a,l]of[[-5.2,3.6,1],[-6.6,6.2,.6],[-4.4,8.2,2],[5,3.2,-.9],[6.3,6,-.5],[4.2,8.6,-2.2],[-7.6,1.4,1.3],[-2.6,9.4,2.7]])n.house(o,a,l,{...s,w:n.r.range(1.2,1.5),d:n.r.range(1.6,2),rh:.7});n.fence([[-6.4,3],[-8.2,4.4],[-8,7.2]]),n.fence([[6.2,2.2],[7.6,3.8],[7.6,7]]);for(let o=0;o<46;o++)n.grave(3.4+o%8*.55+n.r.range(-.1,.1),-3.6+(o/8|0)*.75+n.r.range(-.1,.1),0);n.fence([[3,-4.2],[7.9,-4.3],[8,.8],[3.1,.9]]),n.torch(-.9,2.9,.7,16747056,!0).torch(1.3,2.9,.7,16747056).torch(-2.9,6,.6).torch(5.3,4.2,.6);const r=(o,a)=>Math.hypot(o,(a+1.5)*.75)>4.4&&Math.hypot(o-t,a-e)>3.9&&!(o>2.8&&o<8.2&&a>-4.5&&a<1);he(n,"dead",120,Fn(19),r,{s0:1,s1:2.3}),he(n,"pine",200,qe(8.5,21),r,{s0:.9,s1:1.8}),he(n,"rock",80,Fn(19),r,{s0:.4,s1:1.7}),he(n,"bush",80,Fn(18),r);for(let o=0;o<7;o++)n.bird({x:0,z:.5,r:1.6+o*.5,h:7.4+o*.25,speed:.6-o*.04,phase:o})}},Ve=[.5,-2.5],M_={id:"kingdom",lat:16,lon:44,radius:16,blend:10,profile(n,t,e){let i=.7+je(n,t,.15)*.5;i=Wt(i,1.05,Dt(11.5,9.2,e));const s=Math.hypot(n-Ve[0],t-Ve[1])+je(n,t,.9,2)*.5;i=Wt(i,3.1,Dt(5.6,4.5,s));const r=Math.abs(t-12.4-Math.sin(n*.25)*.9);return i=Wt(-.6,i,Dt(.7,2,r)),i},paint(n,t,e,i,s,r){const o=Math.hypot(n,t),a=Math.min(bi(n,t,[[.3,13],[.3,9.3],[.6,4.6],[3.6,2.6],[5.8,-1.6],[4.5,-5.5]]),Math.abs(o-7.4));o<9.3&&(s[1]=Math.max(s[1],.5+Dt(.6,.2,a)*.5),s[2]=0),Math.hypot(n-Ve[0],t-Ve[1])<4.4&&(s[1]=.4,s[0]=.5)},build(n){const t={m:{roof:"slate",wall:"plaster",frame:"woodDark"}},e=20,i=[];for(let o=0;o<=e;o++){const a=Math.PI/2+.16+o/e*(Math.PI*2-.32);i.push([Math.cos(a)*9.6,Math.sin(a)*9.6])}n.wall(i,{h:1.5,th:.4,mat:"blocks"});for(let o=0;o<=e;o+=2)n.tower(i[o][0],i[o][1],{r:.62,h:2.3,lit:.6,mat:"blocks"});n.at(0,9.55,0),n.box("blocks",3,.9,.9,0,1.3,0);for(const o of[-1,1])n.box("blocks",.2,1.3,.9,o*.6,0,0);n.box("black",1,1.2,.5,0,0,0),n.glow(0,.8,.5,16751168,1.2,0),n.tower(-1.5,9.5,{r:.8,h:3,roof:1.3,mat:"blocks"}).tower(1.5,9.5,{r:.8,h:3,roof:1.3,mat:"blocks"}),n.bridge(.3,12.4,Math.PI/2,4.2,.95),n.banner(-.9,10.3,0,1.6).banner(1.5,10.3,0,1.6),n.torch(-.7,10.6,.7,16747056,!0).torch(1.3,10.6,.7);for(const[o,a]of[[8.2,30],[6.7,24],[5.6,18]])for(let l=0;l<a;l++){const c=l/a*6.283+o,u=Math.cos(c)*o,h=Math.sin(c)*o;Math.abs(u-.3)<.9&&h>4||Math.hypot(u-Ve[0],h-Ve[1])<5.9||Math.hypot(u-3.6,h-5.6)<1.6||n.house(u,h,-c+(o<7?Math.PI/2:-Math.PI/2),{...t,w:n.r.range(1,1.35),d:n.r.range(1.3,1.7),storeys:n.r()<.6?3:2,lit:.55,shed:!1,rh:n.r.range(.7,1)})}n.well(3.6,5.6),n.stall(3,4.8,.4).stall(4.4,5,-.6,"woodDark").stall(4.2,6.4,2.6).stall(2.9,6.3,3.4,"woodDark"),n.torch(3.6,4.9,.6,16747056,!0);for(let o=0;o<6;o++)n.agent({kind:o%3?"villager":"noble",path:[[3.6+Math.cos(o*1.1)*.9,5.6+Math.sin(o*1.1)*.9],[3.6+Math.cos(o*1.1+2)*1,5.6+Math.sin(o*1.1+2)*1]],speed:.06+o*.01,seed:o});const s=[];for(let o=0;o<=14;o++){const a=o/14*6.283;s.push([Ve[0]+Math.cos(a)*4.25,Ve[1]+Math.sin(a)*4.25])}n.wall(s,{h:1.1,th:.3,mat:"blocks"});for(let o=0;o<14;o+=2)n.tower(s[o][0],s[o][1],{r:.45,h:1.9,mat:"blocks",roof:.9,lit:.7});n.at(Ve[0]-.3,Ve[1]-.6,.2),n.box("blocks",2.3,3.6,2.3,0,-.3,0),n.box("blocks",2.5,.14,2.5,0,3.3,0);for(const o of[-1,1])for(const a of[-1,1])n.cyl("blocks",.42,.45,4.6,o*1.15,-.3,a*1.15,10),n.cyl("slate",0,.56,1.4,o*1.15,4.3,a*1.15,10),n.box("window",.1,.24,.06,o*1.15,3.4,a*1.15+a*.44),n.glow(o*1.15,3.5,a*1.65,16752704,.6,1);for(let o=0;o<4;o++)for(let a=0;a<3;a++)n.box("window",.12,.3,.05,-.75+o*.5,.8+a*.9,1.16),(o+a)%2&&n.glow(-.75+o*.5,.95+a*.9,1.3,16752704,.5,1);n.box("blocks",1.2,1.9,1.2,0,3.4,0),n.cyl("slate",0,1,1.8,0,5.3,0,4),n.house(Ve[0]+2.2,Ve[1]+1.4,.9,{stoneWalls:!0,w:1.6,d:3.2,storeys:2,rh:1.3,m:{roof:"slate",plinth:"blocks"},lit:.9,shed:!1}),n.house(Ve[0]-2.4,Ve[1]+1.8,-.7,{stoneWalls:!0,w:1.3,d:2,storeys:2,m:{roof:"slate",plinth:"blocks"},lit:.8,shed:!1}),n.house(Ve[0]+1.6,Ve[1]-2.6,2.2,{stoneWalls:!0,w:1.3,d:2,storeys:2,m:{roof:"slate",plinth:"blocks"},lit:.8,shed:!1}),n.cart(.1,11,1.57).cart(.5,13.6,1.5),n.agent({kind:"guard",path:[[-.5,10.7]],yaw:1.4,pose:"talk"}).agent({kind:"guard",path:[[.9,10.5]],yaw:-1.2}).agent({kind:"villager",path:[[.75,11.3]],yaw:-2,pose:"armsUp"});for(let o=0;o<7;o++)n.agent({kind:"villager",path:[[2.6-o*.3,4.55-o*.12]],yaw:1.2,seed:o+5});for(let o=0;o<4;o++)n.agent({kind:"villager",path:[[5.6,1.5],[6.9,3.2],[6.2,5.6],[4.2,6.9]],speed:.08,phase:o*1.7,seed:o,loop:!1});const r=[[.3,12.8],[.3,9.3],[.6,4.6],[3.6,2.6],[5.6,-.6]];for(let o=0;o<9;o++)n.agent({kind:o===0?"noble":o<3?"guard":"villager",path:r,speed:.11,phase:o*.36,seed:o});for(let o=0;o<8;o++){const a=o/8*6.283,l=[];for(let c=0;c<=5;c++){const u=a+c*.13;l.push([Math.cos(u)*9.6,Math.sin(u)*9.6])}n.agent({kind:"guard",path:l,speed:.1,lift:1.52,phase:o*3})}for(let o=0;o<6;o++)n.torch(Math.cos(o*1.05+.4)*7.45,Math.sin(o*1.05+.4)*7.45,.6,16747056,o<2);he(n,"broadleaf",150,qe(10.6,22),(o,a)=>Math.abs(a-12.4)>1.8||Math.abs(o)>3,{s0:.9,s1:1.6}),he(n,"pine",160,qe(12,23),null,{s0:.8,s1:1.6}),he(n,"bush",120,qe(10.4,21)),he(n,"rock",70,qe(4.3,5.6).bind(null),null,{s0:.5,s1:1.4});for(let o=0;o<6;o++)n.bird({x:Ve[0],z:Ve[1],r:2+o*.7,h:8.3+o*.2,speed:.5,phase:o*1.1})}},y_={id:"arena",lat:-12,lon:34,radius:15,blend:10,profile(n,t,e){let i=1.45+je(n,t,.22)*.9+jl(n*.11,3,t*.11,4)*4.2*Dt(8.5,15,e)+je(n,t,1.3,2)*.1;return i=Wt(i,1.2,Dt(8,5.4,Math.hypot(n,t*1.2))),i=Wt(i,.92,Dt(2.9,2.2,Math.hypot(n,t*1.2))),i},paint(n,t,e,i,s,r){s[0]=Math.max(s[0],.45+je(n,t,.6)*.5),s[2]=0;const o=Math.hypot(n,t*1.2);s[1]=Math.max(s[1],Dt(5.2,4,o)),r.multiplyScalar(.8),o<2.6&&r.multiplyScalar(.55)},build(n){for(let r=0;r<34;r++){const o=r/34*6.283,a=Math.cos(o)*5.6,l=Math.sin(o)*4.6,c=Math.atan2(Math.cos(o)*4.6,Math.sin(o)*5.6)+Math.PI/2+Math.PI/2,u=r>23&&r<27||r===8,h=n.r(),f=.95;if(u){n.r()<.6&&n.column(a,l,1.2,!0,"blocksDark",.16);continue}n.arch(a,l,c,f*.72,1,"blocks",.3),n.at(a,l,c),n.box("blocks",f+.12,.22,.5,0,1.5,0),h>.35&&(n.arch(a,l,c,f*.72,.8,"blocks",.26,1.72),n.at(a,l,c,1,1.72),h>.6&&n.box("blocks",f+.12,.2,.42,0,1.25,0));for(const[d,g]of[[.86,.95],[.74,.62],[.63,.32]])n.at(a*d,l*d,c),n.box("blocksDark",f*d+.1,g+.4,.62,0,-.4,0);r%4===0&&n.torch(a*.55,l*.55,.75,16726548,r%8===0)}n.at(0,0,0),n.cyl("blocksDark",1.7,1.75,.06,0,0,0,24),n.cyl("blood",1.25,1.25,.015,0,.065,0,6),n.cyl("blocksDark",1.1,1.1,.02,0,.07,0,24),n.cyl("blood",.34,.34,.03,0,.08,0,12),n.box("blocksDark",.5,.34,.9,0,.08,0),n.glow(0,.6,0,16716294,3.2,3).light(0,.9,0,16719880,16,10);for(let r=0;r<14;r++)n.glow(n.r.range(-1,1),.2,n.r.range(-1,1),16730650,.15,4);for(const[r,o]of[[1.45,12],[2.1,18],[2.7,22]])for(let a=0;a<o;a++){const l=a/o*6.283+r;n.agent({kind:"cult",path:[[Math.cos(l)*r,Math.sin(l)*r/1.2]],yaw:Math.atan2(-Math.cos(l),-Math.sin(l)),seed:a,pose:r<2.5?"kneel":"stand",color:[5592668,4868944,6316390][a%3]})}n.agent({kind:"cult",path:[[0,.7]],yaw:Math.PI,color:3816e3,scale:1.12,pose:"armsUp"});const s=[[-12,8],[-8.5,4.4],[-6.3,1.9],[-4.4,.4],[-2.9,.2]];for(let r=0;r<9;r++)n.agent({kind:"cult",path:s,speed:.07,phase:r*.4,loop:!1,color:5592668});for(let r=0;r<6;r++){const o=r/6*6.283+.35,a=Math.cos(o)*8.9,l=Math.sin(o)*7.9;n.instance("spire",a,l,o,2.6+n.r()*.7,-.3),n.instance("spire",a+.7,l+.3,o+2,1.5,-.3),n.at(a*.93,l*.93,0),n.glow(0,3.6,0,16718344,1.5,3).glow(.2,3.1,.1,16718344,.4,3).glow(-.2,3.1,-.1,16718344,.4,3);for(let c=0;c<3;c++)n.at(Wt(a,a*.66,c/3+.1),Wt(l,l*.66,c/3+.1),-o+Math.PI/2),n.box("iron",.06,.06,1,0,3.4-c*1.1,0,0,.75,0)}he(n,"spire",70,qe(10.5,22),null,{s0:.6,s1:2.6,lift:-.3}),he(n,"rock",160,qe(6.6,21),null,{s0:.5,s1:2.2}),he(n,"dead",60,qe(7,20),null,{s0:1,s1:2});for(let r=0;r<9;r++)n.bird({x:0,z:0,r:2.5+r*.6,h:6+r*.3,speed:.7-r*.04,phase:r*.7})}},pe={holy:[0,-2.5],blood:[2.25,1.35],dark:[-2.25,1.35]},S_={id:"reliefs",lat:-28,lon:8,radius:12,blend:9,profile(n,t,e){let i=.85+je(n,t,.2)*.8+je(n,t,1.1,2)*.08+Dt(5,13,n)*1.8;return i=Wt(i,1.3,Dt(8.2,6.4,e)),i=Wt(i,-.7,Dt(-8.8,-11,t+Math.sin(n*.4)*.8)),i},paint(n,t,e,i,s,r){Math.hypot(n,t)<6.6&&(s[0]=Math.max(s[0],.5),s[2]=0);const a=h=>Dt(3.4,.8,Math.hypot(n-h[0],t-h[1])),l=a(pe.holy),c=a(pe.blood),u=a(pe.dark);r.r*=1+l*.5+c*.5-u*.55,r.g*=1+l*.42-c*.55-u*.6,r.b*=1+l*.1-c*.6-u*.2,s[1]=Math.max(s[1],c*.8),s[0]=Math.max(s[0],u*.9)},build(n){n.at(0,0,0),n.cyl("blocksDark",6,6.1,.1,0,-.02,0,48),n.cyl("blocks",1,1.05,.14,0,.06,0,16);for(let t=0;t<18;t++){const e=t/18*6.283,i=n.r()<.5;n.column(Math.cos(e)*5.7,Math.sin(e)*5.7,2.4,i,"blocks",.2),!i&&t%3!==2&&(n.at(Math.cos(e+.175)*5.7,Math.sin(e+.175)*5.7,-e-.175,1,2.5),n.box("blocks",.4,.22,2.05,0,0,0))}for(const[t,[e,i]]of Object.entries(pe))n.at(e,i,Math.atan2(-e,-i)),n.cyl("blocksDark",.5,.56,.2,0,0,0,8),n.relief(e*1,i*1,Math.atan2(-e,-i),t);for(let t=0;t<26;t++){const e=n.r()*6.283,i=n.r.range(.7,2.3);n.at(pe.holy[0]+Math.cos(e)*i,pe.holy[1]+Math.sin(e)*i*.8,0),n.cyl("bone",.014,.017,.06+n.r()*.1,0,0,0,5),n.glow(0,.2,0,16767120,.17,2)}for(let t=0;t<16;t++)n.glow(...(n.at(pe.holy[0]+n.r.range(-1.6,1.6),pe.holy[1]+n.r.range(-1.6,1.2),0),[0,.3,0]),16771760,.12,4);n.at(pe.blood[0]+.9,pe.blood[1]+.9,0),n.cyl("blood",.9,.9,.012,0,.012,0,14);for(let t=0;t<5;t++)n.instance("dead",pe.blood[0]+n.r.range(.4,2.6),pe.blood[1]+n.r.range(-.6,2.4),n.r()*6,n.r.range(.7,1.2),-.03,new Ct(4852744));for(let t=0;t<14;t++)n.glow(...(n.at(pe.blood[0]+n.r.range(-1.2,2),pe.blood[1]+n.r.range(-1.2,2),0),[0,.12,0]),16722448,.13,4);for(let t=0;t<9;t++)n.instance("spire",pe.dark[0]+n.r.range(-2.6,.2),pe.dark[1]+n.r.range(-.8,2.6),n.r()*6,n.r.range(.25,.6),-.2,new Ct(1380892));for(let t=0;t<22;t++)n.glow(...(n.at(pe.dark[0]+n.r.range(-2,1.2),pe.dark[1]+n.r.range(-1.4,2),0),[0,n.r.range(.2,1.4),0]),10514687,.13,4);n.agent({kind:"villager",path:[[pe.holy[0]*.55,pe.holy[1]*.55]],yaw:Math.PI,color:12168596}).agent({kind:"cult",path:[[pe.blood[0]*.55,pe.blood[1]*.55]],yaw:-2.1,color:5901578}).agent({kind:"nun",path:[[pe.dark[0]*.55,pe.dark[1]*.55]],yaw:2.1,color:1709094}),he(n,"pine",190,qe(7.6,20),null,{s0:.9,s1:1.8}),he(n,"dead",50,qe(6.8,18),null,{s0:1,s1:1.9}),he(n,"rock",100,qe(6.6,19),null,{s0:.4,s1:1.7}),he(n,"bush",90,qe(6.6,18))}},b_=[m_,g_,v_,x_,M_,y_,S_],Le=b_.map((n,t)=>{const e=Lv(n);return{...n,anchor:e,index:t,group:null,sight:[],construct(){if(this.group)return this.group;const i=new me;i.matrixAutoUpdate=!1,i.matrix.copy(e.matrix),i.matrixWorldNeedsUpdate=!0,i.add(a_(e,n.paint));const s=new qv(e,100+t*17);s.sight=this.sight,n.build(s);for(let o=0;o<(t===4?0:12);o++){const a=s.r()*6.283,l=s.r.range(2.5,n.radius);s.mist(Math.cos(a)*l,Math.sin(a)*l,s.r.range(.9,1.8))}t<4&&he(s,"tuft",1400,o=>{const a=o()*6.283,l=Math.sqrt(o())*12;return[Math.cos(a)*l,Math.sin(a)*l]},null,{s0:.7,s1:1.5,lift:0});const r=s.build();return i.add(r),i.userData=r.userData,this.group=i,i}}}),Hn=[{id:"ossuary",s:0,x:1.3,z:3,th:.7,dist:4.4,az:16,el:7,fov:38,mood:"crypt",ap:1,w:1},{s:0,x:1,z:2.6,th:1,dist:8.5,az:-8,el:20,fov:36,mood:"moor",ap:.9,w:.8},{s:0,x:.2,z:.8,th:1.2,dist:24,az:-34,el:38,fov:34,mood:"moor",ap:.5,w:1},{s:1,x:0,z:1,th:0,dist:56,az:-30,el:50,fov:32,mood:"village",ap:.3,w:.9},{s:1,x:.5,z:1.6,th:.5,dist:21,az:-28,el:27,fov:34,mood:"village",ap:.7,w:1},{id:"village",s:1,x:1.5,z:2.6,th:.75,dist:7.6,az:30,el:15,fov:36,mood:"village",ap:1,w:1.2},{s:1,x:-5.4,z:.9,th:.5,dist:6.4,az:-40,el:10,fov:38,mood:"village",ap:1,w:.9},{s:2,x:-2,z:3,th:0,dist:48,az:-70,el:46,fov:32,mood:"forest",ap:.3,w:.9},{id:"bloodwood",s:2,x:-4.6,z:5.6,th:2.6,dist:8.2,az:-112,el:4,fov:44,mood:"forest",ap:1,w:1.2},{s:6,x:0,z:0,th:0,dist:44,az:-20,el:46,fov:32,mood:"reliefs",ap:.3,w:.9},{id:"reliefs",s:6,x:0,z:-.6,th:.7,dist:8.4,az:4,el:17,fov:38,mood:"reliefs",ap:.9,w:1},{id:"reliefs-holy",s:6,x:0,z:-2,th:.6,dist:5.2,az:4,el:19,fov:36,mood:"reliefs",ap:1,w:.6},{id:"reliefs-blood",s:6,x:1.9,z:1.1,th:.5,dist:4.4,az:122,el:20,fov:36,mood:"reliefs",ap:1,w:.6},{id:"reliefs-dark",s:6,x:-1.9,z:1.1,th:.5,dist:4.4,az:238,el:20,fov:36,mood:"reliefs",ap:1,w:.9},{s:2,x:2,z:-1,th:0,dist:46,az:30,el:44,fov:32,mood:"forest",ap:.3,w:.9},{id:"forest",s:2,x:5.4,z:-3.2,th:3,dist:13.5,az:58,el:8,fov:42,mood:"forest",ap:1,w:1.2},{s:3,x:0,z:1,th:0,dist:52,az:20,el:46,fov:32,mood:"nuns",ap:.3,w:.9},{id:"nuns",s:3,x:0,z:-.5,th:2.8,dist:17,az:8,el:5,fov:40,mood:"nuns",ap:.8,w:1.2},{s:3,x:.2,z:4.4,th:1,dist:6.8,az:-44,el:12,fov:38,mood:"nuns",ap:1,w:.9},{s:5,x:0,z:0,th:0,dist:56,az:-110,el:42,fov:32,mood:"arena",ap:.3,w:.9},{id:"arena",s:5,x:0,z:0,th:2,dist:16,az:-112,el:7,fov:42,mood:"arena",ap:.8,w:1.2},{s:5,x:0,z:0,th:1.3,dist:8.6,az:-84,el:14,fov:40,mood:"arena",ap:1,w:.9},{s:4,x:0,z:2,th:0,dist:68,az:10,el:54,fov:32,mood:"kingdom",ap:.25,w:.9},{s:4,x:.3,z:6,th:1.4,dist:17,az:2,el:9,fov:36,mood:"kingdom",ap:.8,w:1},{id:"kingdom",s:4,x:.4,z:1.6,th:2.4,dist:23,az:22,el:16,fov:36,mood:"kingdom",ap:.85,w:1.2},{id:"solar",s:4,x:.2,z:1,th:10,dist:40,az:52,el:8,fov:44,mood:"kingdom",ap:.45,w:1.2},{s:4,x:0,z:0,th:2,dist:90,az:80,el:50,fov:32,mood:"final",ap:.2,w:1},{s:0,x:1.3,z:3,th:.7,dist:5.6,az:-20,el:9,fov:38,mood:"crypt",ap:1,w:1},{s:0,x:0,z:1,th:0,dist:80,az:-60,el:55,fov:32,mood:"final",ap:.2,w:1},{id:"world",s:-2,dist:560,az:-134,el:-4,fov:30,mood:"final",ap:0,shift:-.22,w:.6},{s:-2,dist:600,az:-130,el:-3,fov:30,mood:"final",ap:0,shift:-.22,w:0}],Aa={orbit:{light:16773598,li:3.1,laz:-62,lel:36,sky:4018800,ground:1840658,ai:.55,fog:659222,fd:0,exp:1.05,bloom:.55,ecl:0,atmo:1,stars:1},crypt:{light:11124991,li:1.5,laz:-30,lel:62,sky:1844792,ground:657414,ai:.34,fog:461328,fd:.05,exp:1,bloom:.9,ecl:0,atmo:.6,stars:.4},moor:{light:11848447,li:2.5,laz:-70,lel:30,sky:3360874,ground:1380621,ai:.62,fog:1581614,fd:.016,exp:1.12,bloom:.7,ecl:0,atmo:.9,stars:1},village:{light:16764834,li:2.7,laz:78,lel:22,sky:4477034,ground:1840400,ai:.6,fog:2828849,fd:.012,exp:1.1,bloom:.75,ecl:0,atmo:.9,stars:.6},forest:{light:11851458,li:2.9,laz:-40,lel:44,sky:3824204,ground:1317396,ai:.85,fog:1846310,fd:.02,exp:1.32,bloom:.7,ecl:0,atmo:.8,stars:.4},nuns:{light:12633304,li:1.9,laz:60,lel:28,sky:3816522,ground:1314834,ai:.62,fog:2763313,fd:.03,exp:1.12,bloom:.85,ecl:0,atmo:.8,stars:.3},kingdom:{light:16766116,li:3.2,laz:100,lel:17,sky:4872312,ground:1971986,ai:.6,fog:3352874,fd:.008,exp:1.05,bloom:.7,ecl:0,atmo:1,stars:.6},arena:{light:16738872,li:2.4,laz:68,lel:16,sky:4198414,ground:1180933,ai:.6,fog:2099207,fd:.016,exp:1.2,bloom:1,ecl:0,atmo:.5,stars:1},reliefs:{light:10138346,li:1.7,laz:-80,lel:34,sky:2897492,ground:1052178,ai:.5,fog:1053470,fd:.012,exp:1.15,bloom:.95,ecl:0,atmo:.9,stars:1},final:{light:13621503,li:3.4,laz:20,lel:26,sky:6713484,ground:1709586,ai:1.5,fog:787976,fd:0,exp:1.1,bloom:.9,ecl:1,atmo:.7,stars:1}},fo={scene:5,az:68,el:13},_s=Math.PI/180,He=()=>new N;async function w_({canvas:n,base:t,onProgress:e,reducedMotion:i}){const s=matchMedia("(max-width: 820px), (pointer: coarse)").matches;Te.low=s||(navigator.hardwareConcurrency||4)<=4;const r=new Vg({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1});if(!r.capabilities.isWebGL2)throw new Error("WebGL2 unavailable");const o=Te.low?1.25:1.75;r.setPixelRatio(Math.min(devicePixelRatio||1,o)),r.shadowMap.enabled=!0,r.shadowMap.type=Vu,r.toneMapping=ai,r.outputColorSpace=Ki,r.info.autoReset=!1,e(.02,"Gathering stone and timber"),await Ov(t,T=>e(.02+T*.3,"Gathering stone and timber"));const a=()=>new Promise(T=>setTimeout(T,0));for(Ss.uEmN.value=Le.map(T=>new le(T.anchor.n.x,T.anchor.n.y,T.anchor.n.z,1));Ss.uEmN.value.length<7;)Ss.uEmN.value.push(new le(0,-1,0,1));bs.uRipC.value=new N(0,1,0),bs.uRip.value=new le(0,0,3,0);const l=new Qc;l.background=new Ct(329482),l.fog=new Xl(659222,0);const c=new Ml(r);{const T=new Qc;T.add(new qt(new Xe(50,32,16),new Ne({side:Ke,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vP; void main(){ float up = vP.y * 0.5 + 0.5; vec3 c = mix(vec3(0.004, 0.005, 0.008), vec3(0.16, 0.2, 0.3), smoothstep(0.35, 1.0, up));
        c += vec3(1.6, 0.95, 0.5) * pow(max(0.0, dot(vP, normalize(vec3(0.7, 0.35, 0.5)))), 6.0); c += vec3(0.25, 0.35, 0.6) * pow(max(0.0, dot(vP, normalize(vec3(-0.8, 0.5, -0.2)))), 4.0); gl_FragColor = vec4(c, 1.0); }`}))),l.environment=c.fromScene(T,.02).texture,l.environmentIntensity=.7}const u=new hn(30,1,.5,6e3),h=new Cv(16777215,3);h.castShadow=!0,h.shadow.mapSize.set(Te.low?1024:2048,Te.low?1024:2048),h.shadow.bias=-4e-4;const f=new Ev(4018800,1840658,.55);l.add(h,h.target,f);const d=Array.from({length:Te.low?3:6},()=>{const T=new Av(16748608,0,8,1.6);return l.add(T),T});e(.34,"Raising the land"),await a();const g=o_();l.add(g),e(.6,"Filling the seas"),await a();const _=l_(),m=c_(),p=u_(),S=h_(),x=f_(),v=p_(Le.map(T=>T.anchor.n));l.add(_,m,p,S,x,v);const D=new Ne({transparent:!0,depthWrite:!1,blending:$i,uniforms:{uE:{value:0},uTime:{value:0},uTint:{value:new Ct(14674175)},uMode:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uE, uTime, uMode; uniform vec3 uTint;
      float h1(float n){ return fract(sin(n * 127.1) * 43758.5453); }
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.1; a *= 0.5; } return s; }
      float ring(float a, float n){ float x = a / 6.2832 * n; float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(h1(mod(i, n)), h1(mod(i + 1.0, n)), f); }  // periodic noise around the disc
      void main(){ vec2 p = vUv * 5.0; float r = length(p), ang = atan(p.y, p.x) + 3.14159; vec3 c = vec3(0.0); float edge = smoothstep(1.0, 0.6, length(vUv));
        if (uMode < 0.5) {
          vec2 mo = vec2((1.0 - uE) * 2.3, (1.0 - uE) * 0.65); float rm = length(p - mo);
          float moon = smoothstep(1.035, 1.0, rm), sun = smoothstep(1.0, 0.96, r);
          vec3 warm = mix(vec3(1.0, 0.9, 0.7), uTint, uE);
          float limb = 0.55 + 0.45 * sqrt(max(0.0, 1.0 - r * r));
          c += vec3(1.0, 0.93, 0.8) * sun * limb * (1.0 - moon) * 2.4;
          // corona: a tight inner glow, long uneven streamers, fine rays
          float st = ring(ang, 7.0) * 0.6 + ring(ang + 1.3, 17.0) * 0.3 + ring(ang + uTime * 0.01, 41.0) * 0.25;
          float reach = 1.4 + st * 3.2; float d = max(r - 1.0, 0.0);
          float cor = exp(-d * 10.0) * 1.3 + pow(max(0.0, 1.0 - d / reach), 3.4) * (0.06 + st * 0.5) + exp(-d * 1.4) * 0.04;
          cor *= step(1.0, r) * (0.3 + uE * 1.25) * (0.9 + 0.1 * fbm(vec2(ang * 30.0, r * 3.0 - uTime * 0.05)));
          c += warm * cor * (1.0 - moon * 0.97) * 0.95;
          // prominences on the limb, and the diamond ring just before and after totality
          float prom = pow(ring(ang + 0.4, 23.0), 9.0) * exp(-d * 16.0) * step(1.0, r);
          c += vec3(1.0, 0.25, 0.3) * prom * uE * 5.0 * (1.0 - moon * 0.5);
          vec2 bead = normalize(-mo + vec2(0.0001)) * 1.0; float tot = smoothstep(0.86, 0.97, uE) * (1.0 - smoothstep(0.985, 1.0, uE));
          c += vec3(1.0, 0.97, 0.9) * exp(-length(p - bead) * 9.0) * tot * 9.0;
          c += warm * pow(max(0.0, 1.0 - abs(rm - 1.0) * 14.0), 2.0) * uE * 1.6 * step(1.0, rm);
          c *= smoothstep(0.0, 0.02, uE + 0.02);
        } else {
          float R = 1.7, rr = r / R; float disc = smoothstep(1.0, 0.985, rr);
          vec2 q = p / R; float z = sqrt(max(0.0, 1.0 - dot(q, q))); vec3 n = vec3(q, z);
          float mare = fbm(q * 2.3 + 4.0), crat = fbm(q * 9.0); float alb = 0.62 + 0.3 * crat - 0.3 * smoothstep(0.45, 0.7, mare);
          float lit = 0.35 + 0.65 * max(0.0, dot(n, normalize(vec3(-0.25, 0.3, 0.9))));
          vec3 bright = vec3(0.92, 0.94, 1.0) * alb * lit * 2.2;
          // the planet's shadow slides across from one side; inside it the moon keeps a dim, coloured glow
          vec2 sc = vec2((1.0 - uE) * 3.9, (1.0 - uE) * 0.9) / R; float sh = smoothstep(1.55, 1.15, length(q - sc));
          vec3 dark = uTint * alb * (0.16 + 0.5 * z) * 1.5;
          c += mix(bright, dark, sh) * disc;
          c += mix(vec3(0.7, 0.8, 1.0), uTint, sh) * exp(-max(rr - 1.0, 0.0) * 5.0) * step(1.0, rr) * mix(0.35, 0.22, sh);
        }
        gl_FragColor = vec4(c * edge, 1.0); }`}),E=new qt(new Os(1,1),D);E.frustumCulled=!1,E.visible=!1,l.add(E);const R=()=>r.getPixelRatio();let P=2,y=2;const M=new kl(2,2);M.type=Ei;const I=new ui(2,2,{type:Zi,depthTexture:M,samples:Te.low?0:4}),V=()=>new ui(2,2,{type:Zi,depthBuffer:!1}),z=V(),k=V(),K=V(),q=V(),lt=V(),$=new ge;$.setAttribute("position",new te([-1,-1,0,3,-1,0,-1,3,0],3));const vt=new Vl,Mt=new qt($,null);Mt.frustumCulled=!1;const Tt="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",$t=Te.low?12:28,ne=new Ne({uniforms:{tColor:{value:null},tDepth:{value:M},uNear:{value:1},uFar:{value:1e3},uFocus:{value:10},uAp:{value:0},uPx:{value:new ut},uMaxR:{value:14},uAoR:{value:100}},vertexShader:Tt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D tColor; uniform sampler2D tDepth; uniform float uNear, uFar, uFocus, uAp, uMaxR, uAoR; uniform vec2 uPx;
      float lin(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      float coc(float d){ if (d > uFar * 0.3) return 0.0; return clamp(abs(d - uFocus) / max(d, 0.001) * uAp * 26.0 - 0.6, 0.0, uMaxR); }
      void main(){ float d0 = lin(texture2D(tDepth, vUv).x); float c0 = coc(d0); vec3 acc = texture2D(tColor, vUv).rgb; float wsum = 1.0;
        if (uAp > 0.01) { for (int i = 1; i <= ${$t}; i++) { float fi = float(i); float rr = sqrt(fi / ${$t}.0); float a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * rr; vec2 uv = vUv + o * uPx * max(c0, 2.0) ; float ds = lin(texture2D(tDepth, uv).x); float cs = coc(ds);
          // a sample contributes if its own blur reaches this pixel; sharp foreground does not bleed
          float w = smoothstep(0.0, 1.0, (ds < d0 ? cs : min(cs, c0)) - rr * max(c0, 2.0) + 1.0); acc += texture2D(tColor, uv).rgb * w; wsum += w; } }
        vec3 col = acc / wsum; float ao = 0.0;
        // contact shading from depth alone: darkens creases (wall meets ground, eaves, between figures), ignores flat slopes
        if (d0 < uFar * 0.2) { float rpx = clamp(uAoR / d0, 2.0, 36.0);
          for (int i = 0; i < 4; i++) { float a = float(i) * 0.785 + 0.4; vec2 o = vec2(cos(a), sin(a)) * uPx * rpx;
            float da = lin(texture2D(tDepth, vUv + o).x), db = lin(texture2D(tDepth, vUv - o).x); ao += clamp((2.0 * d0 - da - db) / (d0 * 0.022), 0.0, 1.0); }
          ao *= 0.25 * smoothstep(uFar * 0.2, uFar * 0.02, d0); }
        gl_FragColor = vec4(col * (1.0 - ao * 0.6), 1.0); }`}),Q=new Ne({uniforms:{t:{value:null}},vertexShader:Tt,depthTest:!1,depthWrite:!1,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){ vec3 c = texture2D(t, vUv).rgb; float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(0.9, 2.2, l), 1.0); }"}),ot=new Ne({uniforms:{t:{value:null},uDir:{value:new ut}},vertexShader:Tt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D t; uniform vec2 uDir; void main(){ vec3 c = texture2D(t, vUv).rgb * 0.227;
      c += (texture2D(t, vUv + uDir * 1.385).rgb + texture2D(t, vUv - uDir * 1.385).rgb) * 0.316; c += (texture2D(t, vUv + uDir * 3.231).rgb + texture2D(t, vUv - uDir * 3.231).rgb) * 0.0703; gl_FragColor = vec4(c, 1.0); }`}),Ut=new Ne({uniforms:{t:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:.6},uExp:{value:1},uTime:{value:0},uVig:{value:1},uTint:{value:new N(1,1,1)},uDim:{value:1}},vertexShader:Tt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D t, tB1, tB2; uniform float uBloom, uExp, uTime, uVig, uDim; uniform vec3 uTint;
      vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
      void main(){ vec3 c = texture2D(t, vUv).rgb; c += (texture2D(tB1, vUv).rgb * 0.6 + texture2D(tB2, vUv).rgb * 0.9) * uBloom;
        c *= uExp * uTint; vec2 q = vUv - 0.5; c *= mix(1.0, smoothstep(0.98, 0.2, length(q * vec2(1.05, 1.25))), 0.74 * uVig);
        c = aces(c); float lum = dot(c, vec3(0.299, 0.587, 0.114)); c = mix(vec3(lum), c, 1.04);
        c *= mix(vec3(0.9, 0.97, 1.08), vec3(1.07, 1.0, 0.9), smoothstep(0.05, 0.6, lum)); c = mix(c, c * c * (3.0 - 2.0 * c), 0.28); c = pow(c, vec3(1.0 / 2.2));
        c += (h(gl_FragCoord.xy) - 0.5) * 0.028; gl_FragColor = vec4(c * uDim, 1.0); }`}),ft=(T,U)=>{Mt.material=T,r.setRenderTarget(U),r.render(Mt,vt)};function Bt(){const T=n.clientWidth||innerWidth,U=n.clientHeight||innerHeight;r.setSize(T,U,!1),P=Math.floor(T*R()),y=Math.floor(U*R()),I.setSize(P,y),z.setSize(P,y),k.setSize(P>>2,y>>2),K.setSize(P>>2,y>>2),q.setSize(P>>3,y>>3),lt.setSize(P>>3,y>>3),u.aspect=T/U,u.updateProjectionMatrix(),ne.uniforms.uPx.value.set(1/P,1/y),ne.uniforms.uMaxR.value=y/62}const Zt=Hn.reduce((T,U)=>T+U.w,0),Vt=[];{let T=0;for(const U of Hn)Vt.push(T/Zt),T+=U.w}const se=Al(6,8),nt=()=>u.aspect<.8,ht=Hn.map(T=>{const U={...T,shift:T.shift??0};if(T.s>=0){const C=Le[T.s].anchor;U.dir=C.n.clone();const H=Mi(C,T.x,T.z);U.target=ys(T.x,T.z,H+T.th).applyMatrix4(C.matrix)}else U.dir=T.s===-2?Le[fo.scene].anchor.n.clone():se.clone(),U.target=He();return T.blend&&U.target.copy(Le[0].anchor.n).multiplyScalar(Me*T.blend),U.ld=Math.log(T.dist),U}),L=(T,U,C,H,W)=>{const X=W*W,B=X*W;return .5*(2*U+(-T+C)*W+(2*T-5*U+4*C-H)*X+(-T+3*U-3*C+H)*B)},Nt={};for(const[T,U]of Object.entries(Aa))Nt[T]={light:new Ct(U.light),sky:new Ct(U.sky),ground:new Ct(U.ground),fog:new Ct(U.fog)};const Y={target:He(),dir:He(),pos:He(),up:He(),light:new Ct,sky:new Ct,ground:new Ct,fog:new Ct},At=He(),pt=He(),Ht=He(),Rt=He(),A=He(),b=new N(0,1,0),G=T=>{At.crossVectors(b,T).normalize(),pt.crossVectors(At,T).normalize()},j=(T,U,C,H)=>{G(T);const W=U*_s,X=C*_s;return Ht.copy(At).multiplyScalar(Math.sin(W)).addScaledVector(pt,Math.cos(W)),H.copy(Ht).multiplyScalar(Math.cos(X)).addScaledVector(T,Math.sin(X)).normalize()};{const T=Al(8,12);G(T);const U=T.clone().multiplyScalar(Math.cos(.76)).addScaledVector(pt,Math.sin(.76)).normalize(),C=At.clone().multiplyScalar(.75).addScaledVector(T,.5).addScaledVector(pt,-.44);C.addScaledVector(U,-C.dot(U)).normalize(),x.quaternion.setFromRotationMatrix(new ee().makeBasis(C,U,C.clone().cross(U)))}const it=j(Le[fo.scene].anchor.n,fo.az,fo.el,He()).clone(),J=x.userData;J.main.visible=!1,J.inner.visible=!1,J.sunRing.visible=!1,J.moonRing.visible=!1,l.add(J.moon),J.moon.scale.setScalar(3.4),J.moon.material.emissive=new Ct(0);const Ft=new N().crossVectors(it,new N(0,1,0)).normalize(),at={x:0,y:0,sx:0,sy:0,yaw:0,syaw:0,nudge:0,snudge:0},yt={day:4,lunar:0,tint:new Ct(16756810)};let Ot=null;const ct={light:new Ct(16771272),sky:new Ct(5661308),fog:new Ct(2763827)},Pt=new Ct,gt={u:0,mood:{},camDist:400,key:0};function Xt(T){let U=0;for(;U<Hn.length-2&&Vt[U+1]<=T;)U++;const C=(Vt[U+1]??1)-Vt[U];let H=C>0?_e((T-Vt[U])/C,0,1):0;const W=ht[Math.max(0,U-1)],X=ht[U],B=ht[Math.min(Hn.length-1,U+1)],st=ht[Math.min(Hn.length-1,U+2)],rt=Yt=>L(W[Yt],X[Yt],B[Yt],st[Yt],H);if(Y.target.set(L(W.target.x,X.target.x,B.target.x,st.target.x,H),L(W.target.y,X.target.y,B.target.y,st.target.y,H),L(W.target.z,X.target.z,B.target.z,st.target.z,H)),Y.dir.set(L(W.dir.x,X.dir.x,B.dir.x,st.dir.x,H),L(W.dir.y,X.dir.y,B.dir.y,st.dir.y,H),L(W.dir.z,X.dir.z,B.dir.z,st.dir.z,H)).normalize(),X.s>=0&&B.s>=0&&X.s!==B.s){const Yt=Y.target.length(),Pe=Wt(X.target.length(),B.target.length(),H);Y.target.multiplyScalar(Pe/Math.max(Yt,.001))}let tt=Math.exp(_e(rt("ld"),Math.min(X.ld,B.ld)-.12,Math.max(X.ld,B.ld)+.25)),_t=rt("az"),It=_e(rt("el"),-30,85);const zt=rt("fov"),mt=H*H*(3-2*H),wt=Wt(X.ap,B.ap,mt),dt=Wt(X.shift,B.shift,mt);nt()&&(tt*=X.s<0||B.s<0?Wt(1.55,1.2,0):1.25),_t+=at.sx*Wt(5,2.5,wt)+at.syaw+at.snudge*Wt(2.2,5,wt),It=_e(It-at.sy*2.2+at.snudge*.8,-30,85),tt*=1-at.snudge*.045,j(Y.dir,_t,It,Rt),Y.pos.copy(Y.target).addScaledVector(Rt,tt),Y.up.copy(Y.dir).multiplyScalar(Math.cos(It*_s)).addScaledVector(Ht,-Math.sin(It*_s)).normalize();const ye=Y.pos.length();A.copy(Y.pos).divideScalar(ye);const kt=Me+Math.max(0,Mr(A.x,A.y,A.z))+.45+(X.s>=0&&B.s>=0&&X.s!==B.s?22*Math.sin(Math.PI*H):0);ye<kt&&Y.pos.copy(A).multiplyScalar(kt);const ve=Aa[X.mood],Cn=Aa[B.mood],Ce=Nt[X.mood],_n=Nt[B.mood],jt=gt.mood;for(const Yt of["li","laz","lel","ai","fd","exp","bloom","ecl","atmo","stars"])jt[Yt]=Wt(ve[Yt],Cn[Yt],mt);if(Y.light.copy(Ce.light).lerp(_n.light,mt),Y.sky.copy(Ce.sky).lerp(_n.sky,mt),Y.ground.copy(Ce.ground).lerp(_n.ground,mt),Y.fog.copy(Ce.fog).lerp(_n.fog,mt),gt.skyW=0,Ot){const Yt=Ot.w!=null?Ot.w:(X.mood==="arena"?1-mt:0)+(B.mood==="arena"?mt:0),Pe=Ot.amt;gt.skyW=Yt,Yt>0&&(Y.light.lerp(Pt.copy(ct.light).lerp(Ot.light,Pe),Yt),Y.sky.lerp(Pt.copy(ct.sky).lerp(Ot.sky,Pe),Yt),Y.fog.lerp(Pt.copy(ct.fog).lerp(Ot.fog,Pe),Yt),jt.li=Wt(jt.li,Wt(3.3,Ot.li,Pe),Yt),jt.ai=Wt(jt.ai,Wt(.8,.55,Pe),Yt),jt.ecl=Ot.w!=null?Math.max(jt.ecl*(1-Yt),Pe*Yt):Wt(jt.ecl,Pe,Yt),jt.exp=Wt(jt.exp,Wt(1,1.22,Pe),Yt),jt.stars=Wt(jt.stars,Pe,Yt))}gt.key=U,gt.t=H,gt.dist=tt,gt.fov=zt,gt.ap=wt,gt.shift=nt()?dt*0:dt}{const T=new ee,U=He(),C=He();for(let H=0;H<=900;H++){if(Xt(H/900),gt.dist>30)continue;let W=null,X=1e9;for(const B of Le){const st=B.anchor.n.distanceToSquared(Y.dir);st<X&&(X=st,W=B)}T.copy(W.anchor.matrix).invert(),U.copy(Y.pos).applyMatrix4(T),C.copy(Y.target).applyMatrix4(T),W.sight.push([U.x,U.z,C.x,C.z])}}e(.72,"Lighting the first hearth"),await a(),Le[0].construct(),l.add(Le[0].group),e(.86,"Lighting the first hearth"),await a(),Le[1].construct(),l.add(Le[1].group);const Lt=new Dv;let Gt=0,Kt=0,ce=!0,F=0,xt=2,Z=0,et=1,Et=1;const bt=He(),Jt=He(),de=He(),Re=He(),ae=Hn.map((T,U)=>{const C=Hn[U+1];return C&&T.s>=0&&C.s>=0&&T.s!==C.s?{A:Le[T.s],B:Le[C.s]}:null});let en=null,gn=0;const Ri={key:"",a:0},Qi=new Ee({color:1907236,roughness:1}),Vn=new Ee({color:12169892,roughness:.9}),vn=(T,U)=>new Ee({color:0,emissive:T,emissiveIntensity:U}),wr=vn(16756832,7),Ws=new bn(.17,.58,10),ts=new Xe(.085,10,8),An=new Xe(1,8,6);function Ci(T,U){const C=new me,H=new qt(Ws,Qi),W=new qt(ts,U?Vn:Qi),X=new qt(Ws,Qi);if(H.position.y=.29,W.position.y=.6,X.position.set(0,.66,-.02),X.scale.set(.62,.3,.62),H.castShadow=X.castShadow=!0,C.add(H,W,X),!U){const B=new qt(An,wr);B.scale.setScalar(.03),B.position.set(0,.4,.17),C.add(B)}return C.scale.setScalar(T/.7),C}const Rn=(T,U,C,H,W=0)=>(U.position.copy(ys(C,H,Mi(T,C,H)+W)),U.userData.y=U.position.y,U),Er=[{key:"nuns",s:3,make(T){const U=new me,C=[];for(let st=0;st<12;st++){const rt=st%2,tt=Math.floor(st/2),_t=Ci(.66+st%3*.04);Rn(T,_t,(rt?1.5:.4)+Math.sin(tt*1.7)*.1,.9+tt*.62),_t.userData.d=tt*.11+rt*.04,C.push(_t),U.add(_t)}const H=Ci(1,!0);Rn(T,H,2.45,2.6),H.userData.d=.1,C.push(H),U.add(H);const W=new qt(new Ai(.2,.03,.15),Vn);W.position.set(0,.42,.2),W.rotation.x=-.5,H.add(W);const X=new qt(An,vn(16756832,9));X.scale.setScalar(.05),X.position.set(.24,.5,.18),H.add(X);const B=new qt(An,vn(9067775,0));return B.scale.setScalar(.5),Rn(T,B,0,-1.2,5.2),U.add(B),{g:U,update(st,rt){for(const _t of C){const It=_e((st-_t.userData.d)/.5,0,1),zt=It*It*(3-2*It);_t.position.y=_t.userData.y-(1-zt)*1.1,_t.visible=It>.01,_t.rotation.z=Math.sin(rt*.7+_t.userData.d*30)*.035*zt}const tt=Math.pow(Math.max(0,Math.sin(rt*1.05)),12);B.material.emissiveIntensity=5*tt*Dt(.6,1,st),B.visible=!1,X.material.emissiveIntensity=9*(.8+.2*Math.sin(rt*11))}}}},{key:"arena",s:5,make(T){const U=new me,C=new Ee({color:1707018,roughness:.85}),H=new Xe(1,18,12),W=new rn(.5,.36,1,10),X=new me,B=(tt,_t,It,zt,mt,wt,dt,ye,kt)=>{const ve=new qt(tt,C);ve.position.set(_t,It,zt),ve.rotation.set(mt,0,wt),ve.scale.set(dt,ye,kt),ve.castShadow=!0,X.add(ve)};B(H,0,2.2,0,.25,0,1,1.15,.8),B(H,0,3.25,.2,.3,0,1.15,.7,.75),B(H,0,3.95,.55,0,0,.42,.42,.48);for(const tt of[-1,1])B(W,tt*1.35,2.5,.3,.2,tt*.35,.5,2.3,.5),B(H,tt*1.75,1.35,.6,0,0,.42,.4,.42),B(W,tt*.5,.75,0,0,0,.62,1.7,.62),B(new bn(.11,.9,8),tt*.34,4.45,.5,-.25,-tt*.55,1,1,1);const st=vn(16726546,0);for(const tt of[-1,1]){const _t=new qt(An,st);_t.scale.setScalar(.06),_t.position.set(tt*.16,4.02,.98),X.add(_t)}const rt=new qt(An,vn(16722440,0));return rt.scale.set(.3,.16,.12),rt.position.set(0,2.6,.78),X.add(rt),Rn(T,X,0,0),X.rotation.y=Math.atan2(-.93,-.37),X.scale.setScalar(.62),U.add(X),{g:U,update(tt,_t){const It=_e((tt-.35)/.65,0,1),zt=It*It*(3-2*It);X.visible=It>.01,X.position.y=X.userData.y-(1-zt)*3.4,X.rotation.z=Math.sin(_t*.5)*.04*zt,X.scale.set(.62,.62*(1+Math.sin(_t*1.3)*.02),.62),st.emissiveIntensity=16*Dt(.6,1,It),rt.material.emissiveIntensity=2.2*Dt(.5,1,It)*(.7+.3*Math.sin(_t*2.2))}}}},{key:"arena",s:5,make(T){const C=new me,H=[];for(let W=0;W<14;W++){const X=W/14*6.283+.2,B=new qt(An,vn(16734748,0));Rn(T,B,Math.cos(X)*6.3,Math.sin(X)*5.6,2.55),B.userData.i=W,H.push(B),C.add(B)}return{g:C,update(W,X){for(const B of H){const st=_e((W*1.25-B.userData.i/14)/.12,0,1),rt=.75+.25*Math.sin(X*13+B.userData.i*2.3);B.visible=st>.01,B.scale.set(.11*st,.2*st*rt,.11*st),B.material.emissiveIntensity=5*st*rt}}}}},{key:"nuns",s:3,make(T){const U=new me,C=new Uo({color:131331}),H=new Xe(1,14,10),W=new me,X=(B,st,rt,tt,_t,It,zt,mt)=>{const wt=new qt(B,C);wt.position.set(st,rt,tt),wt.rotation.z=_t,wt.scale.set(It,zt,mt),W.add(wt)};X(H,0,5.2,0,0,2.3,4.4,1.2),X(H,0,9.6,0,0,3.1,1.5,1.2),X(H,0,11.4,.2,0,.95,1.05,.9);for(const B of[-1,1])X(new bn(.34,3.2,7),B*1.25,13,.2,-B*.5,1,1,1),X(H,B*3.6,7.2,0,B*.25,.75,3.4,.75);return Rn(T,W,-.6,-7.5),U.add(W),{g:U,update(B,st){const rt=_e((B-.8)/.2,0,1),tt=rt*rt*(3-2*rt);W.visible=rt>.01,W.position.y=W.userData.y-(1-tt)*15,W.rotation.z=Math.sin(st*.35)*.02}}}},{key:"kingdom",s:4,make(T){const U=new me,C=new Ee({color:2760728,roughness:.9}),H=new Ee({color:8000528,roughness:.8,side:dn,emissive:2098178}),W=new Ee({color:13214812,roughness:.5,side:dn,emissive:3811850}),X=[];for(let B=0;B<10;B++){const st=Math.floor(B/2),rt=new me,tt=new qt(new rn(.04,.05,5.6,6),C),_t=new qt(new Os(.9,1.9,1,6),H),It=new qt(new $l(.22,16),W);tt.position.y=2.8,_t.position.set(.5,4.55,0),It.position.set(.5,4.75,.014),tt.castShadow=_t.castShadow=!0,rt.add(tt,_t,It),rt.userData.c=_t;{const zt=B/10*6.283+.3;Rn(T,rt,.4+Math.cos(zt)*(3.2+B%3*1.1),1.6+Math.sin(zt)*(3+B%3*1))}rt.rotation.y=.38,rt.userData.d=st*.12,X.push(rt),U.add(rt)}return{g:U,update(B,st){for(const rt of X){const tt=_e((B-rt.userData.d)/.45,0,1),_t=tt*tt*(3-2*tt);rt.visible=tt>.01,rt.position.y=rt.userData.y-(1-_t)*6.2,rt.userData.c.rotation.y=Math.sin(st*1.7+rt.userData.d*20)*.28}}}}},{key:"*",s:0,make(T){const U=new me,C=new Ee({color:1381146,roughness:1}),H=new Ee({color:9274488,roughness:.8}),W=vn(16767392,0),X=new me,B=new qt(new bn(.13,.3,10),C),st=new qt(new Xe(.07,12,10),H),rt=new qt(new rn(.19,.21,.02,14),C),tt=new qt(new bn(.1,.3,10),C);B.position.y=.15,st.position.y=.34,rt.position.y=.39,tt.position.set(0,.54,-.02),tt.rotation.x=-.25,X.add(B,st,rt,tt),B.castShadow=tt.castShadow=rt.castShadow=!0;for(const _t of[-1,1]){const It=new qt(An,W);It.scale.setScalar(.012),It.position.set(_t*.026,.345,.063),X.add(It)}return Rn(T,X,.7,2.75),X.rotation.y=.5,X.scale.setScalar(.85),U.add(X),{g:U,update(_t,It){const zt=_t*_t*(3-2*_t);X.position.y=X.userData.y-(1-zt)*.9,X.rotation.z=Math.sin(It*.5)*.03,W.emissiveIntensity=6*zt*(.75+.25*Math.sin(It*1.3))}}}},{key:"solar",s:4,make(T){const C=new Fo(An,vn(16753226,6),96),H=new ee,W=He();return C.frustumCulled=!1,{g:C,update(X,B){for(let st=0;st<96;st++){const rt=st%4,tt=Math.floor(st/4),_t=(tt*1.5+B*.22)%36/36,It=_e((X*1.3-(1-_t)*.5)/.3,0,1),zt=-21+_t*13+(rt-1.5)*.4+Math.sin(tt*2.1)*.15,mt=-16+_t*10-(rt-1.5)*.36;ys(zt,mt,Mi(T,zt,mt)+.34,W);const wt=.12*It*(.8+.2*Math.sin(B*9+st));H.makeScale(wt,wt,wt).setPosition(W),C.setMatrixAt(st,H)}C.instanceMatrix.needsUpdate=!0}}}}],we={g:null,a:0,target:0,eyes:null};function zo(){const T=new me,U=new Ee({color:460294,roughness:1}),C=(B,st,rt,tt,_t=0,It=0,zt=1,mt=1,wt=1)=>{const dt=new qt(B,U);return dt.position.set(st,rt,tt),dt.rotation.set(_t,0,It),dt.scale.set(zt,mt,wt),dt.castShadow=!0,T.add(dt),dt},H=new Xe(1,16,12),W=new rn(.5,.35,1,8);C(H,0,2.5,0,0,0,.75,.8,1.5),C(H,0,3,1,0,0,.62,.75,.7),C(W,0,3.45,1.75,.9,0,.55,1.2,.55),C(H,0,3.85,2.35,.3,0,.3,.3,.52);for(const[B,st]of[[-.45,.95],[.45,.95],[-.4,-.95],[.4,-.95]])C(W,B,1.05,st,0,B*.12,.3,2.3,.3);for(const B of[-1,1])C(W,B*.45,4.5,2,-.2,-B*.7,.09,1.5,.09),C(W,B*.95,5.05,1.9,.1,-B*.25,.07,.9,.07),C(W,B*.7,4.95,2.35,.7,-B*.5,.06,.7,.06),C(W,B*1.25,5.3,1.75,-.3,-B*1,.05,.6,.05);const X=new Ee({color:0,emissive:16722458,emissiveIntensity:0});we.eyes=X;for(const B of[-1,1]){const st=new qt(new Xe(.055,8,6),X);st.position.set(B*.17,3.93,2.72),T.add(st)}return T}function Tr(T){if(xt>=Le.length||(Z+=1,!T&&Z%20!==0))return;let U=null,C=1e9;for(const H of Le)if(!H.group){const W=H.anchor.n.distanceTo(bt);W<C&&(C=W,U=H)}U&&(U.construct(),l.add(U.group),xt++)}function w(){if(!ce)return;Kt=requestAnimationFrame(w);const T=Math.min(Lt.getDelta(),.1);Gt+=i?T*.25:T;const U=i?1:1-Math.exp(-T*5.5);gt.u+=(F-gt.u)*U,Math.abs(F-gt.u)<1e-5&&(gt.u=F),at.snudge+=(at.nudge-at.snudge)*(1-Math.exp(-T*6)),at.sx+=(at.x-at.sx)*(1-Math.exp(-T*3)),at.sy+=(at.y-at.sy)*(1-Math.exp(-T*3));const C=Dt(.09,0,gt.u)+Dt(.985,1,gt.u);at.syaw+=(at.yaw*C-at.syaw)*(1-Math.exp(-T*4)),Xt(gt.u),u.position.copy(Y.pos),u.up.copy(Y.up),u.lookAt(Y.target);const H=Y.pos.length()-Me;bt.copy(Y.pos).normalize(),u.fov=gt.fov*(nt()?1.25:1),u.near=_e(Math.min(H,gt.dist)*.08,.05,30),u.far=5200,u.filmOffset=-gt.shift*14,u.updateProjectionMatrix(),Tr(!1);const W=gt.mood;yt.lunar>.01&&Y.light.lerp(yt.tint,.45*yt.lunar*(1-gt.skyW)),j(Y.dir,W.laz,W.lel,Jt),h.color.copy(Y.light),h.intensity=W.li,h.target.position.copy(Y.target),h.position.copy(Y.target).addScaledVector(Jt,420);const X=_e(gt.dist*.85,9,190),B=h.shadow.camera;B.left=-X,B.right=X,B.top=X,B.bottom=-X,B.near=60,B.far=800,B.updateProjectionMatrix(),h.shadow.normalBias=X*.004,h.shadow.radius=2.5,f.color.copy(Y.sky),f.groundColor.copy(Y.ground),f.intensity=W.ai,f.position.copy(Y.dir),l.fog.color.copy(Y.fog),l.fog.density=W.fd*Dt(70,16,H),l.background.copy(Y.fog).multiplyScalar(.35*Dt(60,10,H)).add(Rt.set(.012,.016,.024)),m.material.uniforms.uGain.value=W.atmo,m.material.uniforms.uColor.value.copy(Y.sky).multiplyScalar(.8),p.material.uniforms.uFade.value=W.stars,p.material.uniforms.uPx.value=R(),p.position.copy(u.position),S.material.uniforms.uTime.value=Gt,S.material.uniforms.uPx.value=R(),S.material.uniforms.uGain.value=Dt(8,40,H);const st=Dt(22,120,H);g.userData.mat.userData.U.uFar.value=st,_.userData.tick(Gt),v.rotation.y=Gt*.0035;{const mt=yt.day/28*Math.PI*2;J.moon.position.copy(it).multiplyScalar(Math.cos(mt)*185).addScaledVector(Ft,Math.sin(mt)*185),J.moon.position.y+=Math.sin(mt)*24,J.moon.material.emissive.copy(yt.tint).multiplyScalar(yt.lunar*.45),J.moon.rotation.y=Gt*.02,J.moon.visible=!(gt.skyW>.2)}D.uniforms.uMode.value=Ot&&gt.skyW>(Ot.w!=null?.01:.5)?Ot.mode:0,E.visible=W.ecl>.01||gt.skyW>(Ot&&Ot.w!=null?.01:.5),E.visible&&(Ot&&Ot.az!=null&&gt.skyW>.01?j(Y.dir,Ot.az,Ot.el,Re):Re.copy(it),E.position.copy(u.position).addScaledVector(Re,3e3),E.quaternion.copy(u.quaternion),E.scale.setScalar(Ot&&Ot.size?Ot.size:1250),D.uniforms.uE.value=W.ecl,D.uniforms.uTime.value=Gt,Ot&&D.uniforms.uTint.value.copy(Ot.tint));{const mt=ae[gt.key];en=mt?mt.A:null,gn=mt?gt.t:0}let rt=null,tt=1e9;const _t=R()*y/(2*Math.tan(u.fov*_s/2))/300/R();for(const mt of Le){if(!mt.group)continue;const wt=de.copy(mt.anchor.n).multiplyScalar(Me).distanceTo(Y.pos),dt=mt.group.children[1];dt.visible=wt<(Te.low?150:420)&&mt.anchor.n.dot(bt)>.1,mt.group.children[0].material.userData.U.uFar.value=Dt(40,140,wt),wt<tt&&(tt=wt,rt=mt);{const kt=mt.group.userData,ve=i?1:Math.min(Dt(70,26,wt),mt===en?1-Dt(.05,.5,gn):1);if(kt.em==null&&(kt.em=i?1:0,kt.emA=-1),kt.em+=(ve-kt.em)*(i?1:1-Math.exp(-T*2.6)),Ss.uEmN.value[mt.index].w=kt.em,Math.abs(ve-kt.em)<8e-4&&(kt.em=ve),Math.abs(kt.em-kt.emA)>4e-4){kt.emA=kt.em;const Cn=dt.children,Ce=Cn.length,_n=kt.y0??(kt.y0=Mi(mt.anchor,0,0));for(let jt=0;jt<Ce;jt++){const Yt=Cn[jt];if(Yt.material?.userData?.U?.uEmN){Yt.visible=kt.em>.004,Yt.customDepthMaterial||(Yt.customDepthMaterial=Gv());continue}const Pe=!!(Yt.material?.emissive&&Yt.material.emissiveIntensity>.5&&Yt.material.emissive.r+Yt.material.emissive.g>.01)||!Yt.isMesh,ze=_e((kt.em-(Pe?.86:.42))/(Pe?.14:.5),0,1),nn=ze-1,Pn=ze>=1?1:Math.max(1e-4,1+2.3*nn*nn*nn+1.3*nn*nn);Yt.visible=ze>.002,Yt.scale.set(1,Pn,1),Yt.position.y=_n*(1-Pn)-1.2*(1-ze)*(1-ze)}}}const ye=mt.group.userData;ye.fx&&(ye.fx.U.uTime.value=Gt,ye.fx.U.uPx.value=_t*R(),ye.fx.U.uGain.value=Dt(.8,1,ye.em??1)),wt<80&&dt.visible&&(ye.agents?.update(Gt),ye.birds?.update(Gt))}for(const mt of Er){const wt=Le[mt.s];if(!wt.group)continue;mt.inst||(mt.inst=mt.make(wt.anchor),mt.a=0,wt.group.add(mt.inst.g));const dt=mt.key==="*"?Dt(.85,1,wt.group.userData.em??0):Ri.key===mt.key?Ri.a:0;mt.a+=(dt-mt.a)*(i?1:1-Math.exp(-T*1.5)),mt.inst.g.visible=mt.a>.01,mt.inst.g.visible&&mt.inst.update(mt.a,Gt)}{const mt=Le[2];if(mt.group&&!we.g){we.g=zo();const wt=-2,dt=6.7;we.base=ys(wt,dt,Mi(mt.anchor,wt,dt)),we.g.rotation.y=Math.atan2(-.93,-.37),mt.group.add(we.g)}if(we.g){we.a+=(we.target-we.a)*(1-Math.exp(-T*1.6));const wt=we.a,dt=wt*wt*(3-2*wt);we.g.visible=wt>.01,we.g.position.copy(we.base),we.g.position.y+=-5.6*(1-dt)+Math.sin(Gt*.9)*.05*dt,we.g.rotation.z=Math.sin(Gt*.6)*.03*dt,we.g.scale.setScalar(.5),we.eyes.emissiveIntensity=14*Dt(.55,1,wt)*(.8+.2*Math.sin(Gt*3.1))}}if(rt){const mt=rt.group.userData.em??1,wt=Math.sin(Math.PI*_e(mt,0,1));bs.uRipC.value.copy(rt.anchor.n),bs.uRip.value.set(2+mt*44,.75*wt*Dt(90,40,tt),2.6+mt*2.2,-1.1*(1-mt)*Dt(110,60,tt)*(i?0:1))}d.forEach((mt,wt)=>{const dt=rt?.group.userData.lights?.[wt];if(!dt||tt>70){mt.intensity=0;return}mt.position.copy(dt.p).applyMatrix4(rt.anchor.matrix),mt.color.setHex(dt.color),mt.distance=dt.dist,mt.intensity=dt.intensity*Dt(.7,1,rt.group.userData.em??1)*(.85+.15*Math.sin(Gt*9+wt*2.1)*Math.sin(Gt*5.7+wt))*Dt(70,30,tt)}),et+=(Et-et)*(1-Math.exp(-T*6)),r.info.reset(),r.setRenderTarget(I),r.render(l,u);const It=Y.pos.distanceTo(Y.target);Object.assign(ne.uniforms.tColor,{value:I.texture}),ne.uniforms.uNear.value=u.near,ne.uniforms.uFar.value=u.far,ne.uniforms.uFocus.value=It,ne.uniforms.uAp.value=gt.ap,ne.uniforms.uAoR.value=.3*y/(2*Math.tan(u.fov*_s/2)),ft(ne,z),Q.uniforms.t.value=z.texture,ft(Q,k),ot.uniforms.t.value=k.texture,ot.uniforms.uDir.value.set(4/P,0),ft(ot,K),ot.uniforms.t.value=K.texture,ot.uniforms.uDir.value.set(0,4/y),ft(ot,k),ot.uniforms.t.value=k.texture,ot.uniforms.uDir.value.set(8/P,0),ft(ot,q),ot.uniforms.t.value=q.texture,ot.uniforms.uDir.value.set(0,8/y),ft(ot,lt);const zt=Ut.uniforms;zt.t.value=z.texture,zt.tB1.value=k.texture,zt.tB2.value=lt.texture,zt.uBloom.value=W.bloom,zt.uExp.value=W.exp,zt.uTime.value=Gt%10,zt.uDim.value=et*(i?1:Dt(.4,6,Gt)),ft(Ut,null),O.onFrame?.(gt)}const O={renderer:r,scene:l,camera:u,state:gt,keys:Hn,starts:Vt,scenes:Le,setProgress(T,U){F=_e(T,0,1),U&&(gt.u=F)},setPointer(T,U){at.x=T,at.y=U},addYaw(T){at.yaw=_e(at.yaw+T,-70,70)},setDim(T){Et=T},setNudge(T){at.nudge=i?0:T},setLife(T,U){Ri.key=T,Ri.a=U},setBeast(T){we.target=i?T>.5?1:0:T},setHeavens(T){yt.day=T.day,yt.lunar=T.lunar,yt.tint.set(T.tint)},setSky(T){Ot=T?{mode:T.mode??0,amt:T.amt,li:T.li??1.9,light:new Ct(T.light),sky:new Ct(T.sky),fog:new Ct(T.fog),tint:new Ct(T.tint),w:T.w,az:T.az,el:T.el,size:T.size}:null},progressOf(T){const U=Hn.findIndex(C=>C.id===T);return U<0?0:Vt[U]},resize:Bt,start(){ce=!0,Lt.getDelta(),Bt(),w()},stop(){ce=!1,cancelAnimationFrame(Kt)},buildAll(){for(;xt<Le.length;)Tr(!0)},stats:()=>({calls:r.info.render.calls,tris:r.info.render.triangles,built:xt})};return e(1,"The realm wakes"),O}let ue=null,Sn=null,yn=!1,Je=null,Ra={},Bi={key:"",a:0,flight:0,ecl:0,kind:""},po=0,Iu=0;const Wi=()=>ue.currentTime,Gi=(n,t,e=.6)=>{n.cancelScheduledValues(Wi()),n.setTargetAtTime(t,Wi(),e/3)};function E_(n=3){const t=ue.createBuffer(1,ue.sampleRate*n,ue.sampleRate),e=t.getChannelData(0);let i=0;for(let s=0;s<e.length;s++)i=i*.98+(Math.random()*2-1)*.02,e[s]=(Math.random()*2-1)*.5+i*6;return t}function Ca(n,t,e){const i=ue.createBufferSource();i.buffer=Je.nb,i.loop=!0;const s=ue.createBiquadFilter();s.type=n,s.frequency.value=t,s.Q.value=e;const r=ue.createGain();return r.gain.value=0,i.connect(s).connect(r).connect(Sn),i.start(),{g:r,f:s}}function Pa(n,t="sine"){const e=ue.createOscillator();e.type=t,e.frequency.value=n;const i=ue.createGain();return i.gain.value=0,e.connect(i),e.start(),{o:e,g:i}}function T_(){ue=new(window.AudioContext||window.webkitAudioContext),Sn=ue.createGain(),Sn.gain.value=0;const n=ue.createDynamicsCompressor();Sn.connect(n).connect(ue.destination),Je={nb:null},Je.nb=E_();const t=ue.createBiquadFilter();t.type="lowpass",t.frequency.value=170,t.Q.value=.7;const e=ue.createGain();e.gain.value=.11,t.connect(e).connect(Sn);for(const i of[55,55.4,82.6]){const s=Pa(i,"sawtooth");s.g.gain.value=.33,s.g.connect(t)}Je.chord=[0,1,2,3].map(()=>{const i=Pa(220);return i.g.connect(Sn),i}),Je.wind=Ca("bandpass",520,.6),Je.rumble=Ca("lowpass",110,.8),Je.crowd=Ca("bandpass",760,.9),Je.shimmer=Pa(1760),Je.shimmer.g.connect(Sn),setInterval(C_,200)}const Uu={Blood:[110,116.5,165,233],Light:[146.8,220,293.7,440],Dark:[98,138.6,196,277.2],solar:[73.4,110,146.8,220]};function Da(n,t,e=.5,i=.22){const s=ue.createOscillator(),r=ue.createGain();s.frequency.setValueAtTime(n*1.6,t),s.frequency.exponentialRampToValueAtTime(n,t+.08),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(e,t+.012),r.gain.exponentialRampToValueAtTime(1e-4,t+i),s.connect(r).connect(Sn),s.start(t),s.stop(t+i+.05)}function A_(n){for(const[t,e,i]of[[1,.16,4.5],[2.01,.09,3.2],[2.76,.07,2.4],[5.4,.04,1.4],[8.93,.02,.8]]){const s=ue.createOscillator(),r=ue.createGain();s.frequency.value=196*t,r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(e,n+.01),r.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(r).connect(Sn),s.start(n),s.stop(n+i+.1)}}function R_(n){const t=ue.createOscillator(),e=ue.createGain(),i=ue.createBiquadFilter(),s=ue.createOscillator(),r=ue.createGain();t.type="sawtooth",i.type="bandpass",i.frequency.value=620,i.Q.value=3,t.frequency.setValueAtTime(250,n),t.frequency.exponentialRampToValueAtTime(470,n+.9),t.frequency.setValueAtTime(470,n+1.9),t.frequency.exponentialRampToValueAtTime(300,n+3.2),s.frequency.value=5.5,r.gain.value=6,s.connect(r).connect(t.frequency),e.gain.setValueAtTime(1e-4,n),e.gain.exponentialRampToValueAtTime(.09,n+.7),e.gain.setValueAtTime(.09,n+1.9),e.gain.exponentialRampToValueAtTime(1e-4,n+3.4),t.connect(i).connect(e).connect(Sn),t.start(n),s.start(n),t.stop(n+3.5),s.stop(n+3.5)}function La(n,t,e){const i=Wi();(!Ra[n]||i>=Ra[n])&&(Ra[n]=i+t,e(i+.05))}function C_(){if(!yn||!ue)return;po++;const n=Bi.key,t=Bi.a,e=r=>n===r?t:0;Gi(Je.wind.g.gain,.02+Bi.flight*.16),Je.wind.f.frequency.setTargetAtTime(380+Bi.flight*500,Wi(),.4);const i=e("arena");Gi(Je.rumble.g.gain,i*.5+e("solar")*.25),Gi(Je.crowd.g.gain,i*.06*(.7+.3*Math.sin(po*.31))),i>.8&&Iu<=.8&&Da(38,Wi()+.05,.9,1.4),Iu=i,Gi(Je.shimmer.g.gain,e("reliefs")*.012*(.6+.4*Math.sin(po*.9))),Je.shimmer.o.frequency.setTargetAtTime([1760,2093,2637,1568][po%4],Wi(),.05);const s=Uu[Bi.kind]||Uu.solar;Je.chord.forEach((r,o)=>{r.o.frequency.setTargetAtTime(s[o],Wi(),.5),Gi(r.g.gain,Bi.ecl*.035,1.2)}),e("ossuary")>.3&&La("heart",1.15,r=>{Da(52,r,.55),Da(48,r+.28,.4)}),e("bloodwood")>.6&&La("howl",9.5,R_),e("nuns")>.5&&La("bell",4.6,A_)}const ws={get on(){return yn},toggle(){yn=!yn,yn&&!ue&&T_(),ue&&(yn&&ue.resume(),Gi(Sn.gain,yn?.8:0,.5),yn||setTimeout(()=>{yn||ue.suspend()},900));try{localStorage.setItem("er-sound",yn?"on":"off")}catch{}return yn},update(n){Object.assign(Bi,n)},quiet(n){ue&&yn&&Gi(Sn.gain,n?.25:.8,.5)}},Ie=n=>document.querySelector(n),re=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),En=(n,t,e)=>Math.min(e,Math.max(t,n)),Nh="./",Fh=new URLSearchParams(location.search);Fh.get("bare")&&document.body.classList.add("bare");let qn=matchMedia("(prefers-reduced-motion: reduce)").matches;try{localStorage.getItem("er-motion")==="reduce"&&(qn=!0),localStorage.getItem("er-motion")==="full"&&(qn=!1)}catch{}const Ue=Hh,pn=Ue.length,Ql=.44,Tn=()=>Math.round(innerHeight*(innerWidth<640?1.25:1.5)),on=Ie("#journey"),Ro=Ie("#veil");let be=null,oi=Ue.map(()=>0),Xi=!1,rr=scrollY,Oh=1,Co=0,Yi=0,Nu=-1,yo=0,or=0;const br=Ue.map((n,t)=>{const e=document.createElement("article");e.className=`cap ${n.side||"left"}${n.first?" first":""}${n.final?" final":""}${n.school?" "+n.school:""}`,e.id=`stop-${n.slug}`,e.setAttribute("aria-label",n.nav||n.title);const i=[];n.more&&i.push(`<button class="act" data-more="${t}">${re(n.more.label)}</button>`);for(const f of n.links||[])i.push(`<a class="act" href="${f.href}">${re(f.label)}</a>`);const s=Ou(n.key).map(f=>{const d=zu(f.id);return`<button class="enter" data-place="${f.id}">${d?`<img alt="" decoding="async" loading="lazy" src="${d.src}" style="background-image:url(${d.lq})">`:""}<span><small>Enter</small>${re(f.name)}</span></button>`}).join(""),r=Pl,o=n.eclipse,a=o?o.type==="solar"?r.solar:r.lunar[o.aff]:null,l=o?`<p class="ecl" style="--c:${a.css}"><i aria-hidden="true"></i><b>${o.type==="solar"?"Solar eclipse":`${re(a.name)} lunar eclipse`}</b><span>${re(o.line)}</span></p>`:"",c=n.schools?`<div class="sch" role="group" aria-label="School of magic">${n.schools.map((f,d)=>`<button class="chip" data-school="${d}" aria-pressed="${d===0}" style="--c:${{holy:"var(--holy)",blood:"#ff5a48",dark:"#b79cff"}[f.id]}">${re(f.name)}<small>${re(f.moon)}</small></button>`).join("")}</div><h3 class="sch-h">${re(n.schools[0].title)}</h3><p class="sch-p" aria-live="polite">${re(n.schools[0].body)}</p>`:"",u=`<p class="kicker">${n.numeral?`<b>${n.numeral}</b>`:""}${re(n.kicker)}</p>`;e.innerHTML=n.final?`${u}<p class="motto">${re(n.note)}</p><h1>${re(n.title)}</h1><p class="tagline">${re(n.tagline)}</p><p class="body">${re(n.body)}</p><div class="cta-row"><a class="btn" href="#game">Discover the game</a><button class="btn ghost" data-stop="0">Watch it again</button></div>`:`${u}<h2>${re(n.title)}</h2><p class="body">${re(n.body)}</p>${l}${c}${n.note?`<p class="note">${re(n.note)}</p>`:""}${n.first?'<p class="first-h">Eclipsed Realms · The World Remembers<br>A dark fantasy action RPG for one to four players</p><div class="cta-row"><button class="btn" data-stop="1">Begin</button><a class="btn ghost" href="#game">Skip to the game</a></div>':""}${s?`<div class="doors">${s}</div>`:""}${i.length?`<div class="acts">${i.join("")}</div>`:""}`,e.style.setProperty("--poster",`url("${new URL(`${Nh}assets/poster/${n.key}.webp`,location.href).href}")`),Ie("#captions").append(e);const h=document.createElement("i");return h.className="snap",on.append(h),{...n,node:e,snap:h}}),Es=Ie("#rail");Es.innerHTML='<div class="track"><i id="rail-fill"></i></div>'+Ue.map((n,t)=>`<button class="tick${n.nav?"":" minor"}" data-stop="${t}" aria-label="${re(n.nav||n.kicker)}"><span>${re(n.nav||n.kicker)}</span><i></i></button>`).join("");Ie("#realms-list").innerHTML=Ue.map((n,t)=>n.nav?`<li><button data-stop="${t}"><i>${n.numeral||"·"}</i>${re(n.nav)}</button></li>`:"").join("");Ie("#realms-list").insertAdjacentHTML("beforeend",'<li class="all"><button data-atlas><i>✦</i>All places</button></li>');{const n=document.createElement("div");n.id="peek",n.setAttribute("aria-hidden","true"),document.body.append(n);const t=i=>{const s=Ue[+i.dataset.stop],r=Ou(s.key)[0],o=r&&zu(r.id);if(!o)return e();n.innerHTML=`<img alt="" src="${o.src}" style="background-image:url(${o.lq})"><p><small>${re(s.numeral||"")} ${re(r.tag)}</small>${re(s.nav||r.name)}</p>`;const a=i.getBoundingClientRect();n.style.top=`${En(a.top+a.height/2,110,innerHeight-110)}px`,n.classList.add("on")},e=()=>n.classList.remove("on");Es.addEventListener("pointerover",i=>{const s=i.target.closest(".tick");s&&i.pointerType!=="touch"&&t(s)}),Es.addEventListener("pointerleave",e),Es.addEventListener("focusin",i=>{const s=i.target.closest(".tick");s&&t(s)}),Es.addEventListener("focusout",e)}const Ia=Ie("#next");{const n=document.createElement("button");n.id="heavens",n.type="button",n.title="The Heavens: the eclipse cycle. Select to try it at the Crucible.",n.innerHTML='<i aria-hidden="true"></i><b></b><span></span>',n.dataset.fly="arena",document.body.append(n)}const qi=Ie("#drawer");function zh(){const n=Tn();on.style.height=`${(pn-1)*n+innerHeight}px`,br.forEach((t,e)=>{t.snap.style.top=`${e*n}px`})}const Ti=()=>En((scrollY-on.offsetTop)/Tn(),0,pn-1),zs=()=>scrollY<on.offsetTop+(pn-1)*Tn()+innerHeight*.4;function Bh(n){const t=Math.min(pn-2,Math.floor(n)),e=n-t,i=Ql/2,s=e<=i?0:e>=1-i?1:(e-i)/(1-2*i);return oi[t]+(oi[t+1]-oi[t])*(s*s*(3-2*s))}function Po(n,t){n=En(n,0,pn-1),ec();const e=on.offsetTop+n*Tn(),i=Math.abs(n-Ti())>1.6||!zs();if(Yi=performance.now()+1400,!be){br[n].node.scrollIntoView();return}i||t||qn?(Ro.classList.add("on"),setTimeout(()=>{scrollTo(0,e),be.setProgress(oi[n],!0),setTimeout(()=>Ro.classList.remove("on"),160)},320)):scrollTo({top:e,behavior:"smooth"})}function tc(){if(!be||qn||!zs()||performance.now()<Yi)return;const n=Ti(),t=Math.floor(n),e=n-t,i=Ql/2;if(e<.012||e>.988)return;const s=e<=i?t:e>=1-i||Oh>0?t+1:t;Yi=performance.now()+900,scrollTo({top:on.offsetTop+En(s,0,pn-1)*Tn(),behavior:"smooth"}),clearTimeout(Co),Co=setTimeout(tc,1e3)}function P_(n){if(n===Nu)return;Nu=n;const t=Ue[n],e=Ue[n+1];Es.querySelectorAll(".tick").forEach((i,s)=>{i.classList.toggle("on",s===n),i.classList.toggle("done",s<n),s===n?i.setAttribute("aria-current","step"):i.removeAttribute("aria-current")}),Ia.innerHTML=e?`<span>${n===0?"Begin":"Next"}</span>${re(e.nav||e.kicker.split("·").pop().trim())}`:"<span>Continue</span>Before you play",Ia.dataset.stop=e?n+1:"",Ia.dataset.href=e?"":"#game";try{be&&zs()&&history.replaceState(null,"",n?`#${t.slug}`:location.pathname+location.search)}catch{}}function Yn(){const n=scrollY,t=performance.now();if(n!==rr&&(Oh=n>rr?1:-1),t>Yi&&zs()){t-yo>320&&(or=Math.round(En((rr-on.offsetTop)/Tn(),0,pn-1)));const o=(n-on.offsetTop)/Tn();if(o>or+1||o<or-1){const a=on.offsetTop+En(or+Math.sign(o-or),0,pn-1)*Tn();if(Math.abs(a-n)>1&&o<=pn-1+.02){rr=a,yo=t,scrollTo(0,a);return}}}rr=n,yo=t;const e=Ti(),i=zs(),s=Math.max(0,n-on.offsetTop-(pn-1)*Tn())/innerHeight;document.body.classList.toggle("in-codex",!i),i||ws.update({a:0,ecl:0,flight:0}),Ie("#top").classList.toggle("solid",!i);const r=Math.round(e);br.forEach((o,a)=>{const l=En((.36-Math.abs(e-a))/.12,0,1)*(i?1:0);o.node.style.opacity=l,o.node.style.visibility=l>.01?"visible":"hidden",o.node.style.setProperty("--shift",`${(1-l)*16*(e>a?-1:1)}px`),o.node.inert=l<.5}),Ie("#rail-fill").style.height=`${e/(pn-1)*100}%`,P_(r),be&&(qn?(Yn.last!==r&&(Yn.last=r,Ro.classList.add("on"),setTimeout(()=>Ro.classList.remove("on"),240)),be.setProgress(So===r&&cr&&ur?ur[cr]:oi[r],!0)):(be.setProgress(So>=0&&cr&&ur&&Math.abs(e-So)<=Ql/2?ur[cr]:Bh(e)),be.setNudge(Math.sin((e-Math.floor(e))*Math.PI*2))),Do(e),be.setDim(1-Math.min(.74,s*1.1)),s>1.6&&Xi?(be.stop(),Xi=!1):s<=1.6&&!Xi&&(be.start(),Xi=!0),clearTimeout(Co),Co=setTimeout(tc,230))}function D_(n){const t=Ue[n].more;t&&(qi.innerHTML=`<button class="x" data-drawer-close aria-label="Close">Close</button><p class="eyebrow">${re(Ue[n].nav||Ue[n].kicker)}</p><h2>${re(t.title)}</h2>${t.paras.map(e=>`<p>${re(e)}</p>`).join("")}${t.facts?`<dl>${t.facts.map(([e,i])=>`<div><dt>${re(e)}</dt><dd>${re(i)}</dd></div>`).join("")}</dl>`:""}<div class="acts">${(t.links||[]).map(e=>`<a class="act" href="${e.href}" data-drawer-close>${re(e.label)}</a>`).join("")}<button class="act" data-drawer-close>Back to the scene</button></div>`,qi.hidden=!1,requestAnimationFrame(()=>qi.classList.add("open")),qi.querySelector(".x").focus(),document.body.classList.add("drawer-open"))}function ec(){qi.hidden||(qi.classList.remove("open"),document.body.classList.remove("drawer-open"),setTimeout(()=>{qi.hidden=!0},260))}const Ua=Pl.days,fn=Pl,L_=n=>{const t=Math.min(pn-2,Math.floor(n)),e=n-t;return Ua[t]+(Ua[t+1]-Ua[t])*e},Vh=(n,t)=>{const e=((n-t)%28+28)%28;return Math.min(e,28-e)},Fu=(n,t)=>{const e=En(1-Vh(n,t)/1.6,0,1);return e*e*(3-2*e)};let Un={day:0,aff:1,used:!1};const Cl=Ue.map((n,t)=>n.eclipse?{i:t,...n.eclipse,P:n.eclipse.type==="solar"?fn.solar:fn.lunar[n.eclipse.aff]}:null).filter(Boolean);{const n=document.createElement("div");n.id="eclipses",n.setAttribute("aria-label","The four eclipses"),n.innerHTML=Cl.map(t=>`<button data-stop="${t.i}" style="--c:${t.P.css}" title="${t.type==="solar"?"Solar eclipse":t.P.name+" lunar eclipse"}: ${re(Ue[t.i].nav)}"><i></i><span>${t.type==="solar"?"Solar":re(t.P.name)}</span></button>`).join(""),document.body.append(n)}function Do(n,t){const e=Math.round(n),i=Ue[e],s=i?.eclipse,r=Math.abs(n-e),o=L_(n),a=(o%28+28)%28;let l=0,c=0,u=fn.lunar[1],h=fn.solar,f,d=a;if(i?.sky&&(Un.used||t)){u=fn.lunar[Un.aff];const x=Fu(Un.day,0),v=Fu(Un.day,14);d=Un.day,v>x?(l=1,c=v,h=u):c=x}else if(s){const x=En((.6-r)/.4,0,1);c=x*x*(3-2*x),s.type==="lunar"&&(l=1,u=fn.lunar[s.aff],h=u)}i?.sky||(f=Math.min(1,c*2.2));{const x=En((.62-r)/.4,0,1);ws.update({key:i?.key||"",a:x*x*(3-2*x),flight:En((r-.2)/.25,0,1),ecl:c,kind:s?s.type==="solar"?"solar":fn.lunar[s.aff].name:""})}if(be){const x=En((.62-r)/.4,0,1);be.setLife(i?.key||"",x*x*(3-2*x)),be.setBeast(s&&s.type==="lunar"&&s.aff===0?Math.max(0,(c-.45)/.55):0),be.setHeavens({day:a,lunar:l?c:0,tint:u.tint}),be.setSky({mode:l,amt:c,li:h.li,light:h.light,sky:h.sky,fog:h.fog,tint:h.tint,w:f,az:s?.az,el:s?.el,size:s?.size})}const g=l?0:c,_=l?c:0,m=Math.round(d)%28;Cl.find(x=>x.i>n+.3);const p=g>.6?fn.solar.short:_>.6?u.short:c>.05?"The eclipse is beginning":"",S=Ie("#heavens");return S.querySelector("b").textContent=`Day ${m} of 28`,S.querySelector("span").textContent=p,S.style.setProperty("--ph",(a/28).toFixed(3)),S.style.setProperty("--hc",c>.6?h.css:"var(--gold)"),document.querySelectorAll("#eclipses button").forEach((x,v)=>{const D=Cl[v];x.classList.toggle("on",D.i===e&&c>.5&&!(i?.sky&&Un.used)),x.classList.toggle("seen",n>D.i+.3)}),document.body.style.setProperty("--ecl",c.toFixed(3)),document.body.style.setProperty("--eclc",c>.02?h.css:"transparent"),{d,solar:g,lunar:_,L:u,whole:m,line:p}}function I_(){const n=br.find(s=>s.sky);if(!n)return;const t=document.createElement("div");t.className="sky",t.innerHTML=`<p class="sky-h">${re(fn.dialLabel)}</p><label class="sky-range"><span>Day</span><input type="range" min="0" max="27" step="1" value="0" aria-label="Day of the 28-day cycle"><b>0</b></label><div class="sky-chips"><i>Lunar affinity</i>${fn.lunar.map((s,r)=>`<button class="chip" data-aff="${r}" style="--c:${s.css}">${re(s.name)}</button>`).join("")}</div><p class="sky-out" aria-live="polite"></p>`,n.node.querySelector(".acts")?.before(t)||n.node.append(t);const e=t.querySelector("input"),i=s=>{s&&(Un.used=!0),Un.day=+e.value,t.querySelectorAll("[data-aff]").forEach((o,a)=>o.setAttribute("aria-pressed",a===Un.aff)),t.querySelector("b").textContent=e.value;const r=Do(Ue.findIndex(o=>o.sky),!0);t.querySelector(".sky-out").textContent=r.solar>.6?fn.solar.text:r.lunar>.6?r.L.text:r.solar>.05||r.lunar>.05?fn.partial:`${fn.none} ${r.line}.`};t.addEventListener("click",s=>{const r=s.target.closest("[data-aff]");r&&(Un.aff=+r.dataset.aff,Vh(+e.value,14)>1&&(e.value=14),i(s))}),e.addEventListener("input",i),i(),Un.used=!1,Do(Ti())}const So=Ue.findIndex(n=>n.schools);let cr=0,ur=null;function U_(n){const t=br[So],e=t.schools[n];cr=n,ur=be?t.schools.map(i=>be.progressOf(i.key)):null,t.node.querySelectorAll("[data-school]").forEach((i,s)=>i.setAttribute("aria-pressed",s===n)),t.node.querySelector(".sch-h").textContent=e.title,t.node.querySelector(".sch-p").textContent=e.body;for(const i of t.schools)t.node.classList.toggle(i.id,i===e);Yn()}{const n=document.createElement("button");n.id="sound-btn",n.type="button",n.setAttribute("aria-pressed","false"),n.innerHTML='<i aria-hidden="true"></i><span>Sound off</span>';const t=e=>{n.setAttribute("aria-pressed",e),n.querySelector("span").textContent=e?"Sound on":"Sound off"};n.addEventListener("click",()=>{t(ws.toggle()),Do(Ti())}),document.body.append(n),document.addEventListener("er-place",e=>ws.quiet(e.detail.open)),document.addEventListener("visibilitychange",()=>{document.hidden&&ws.on&&t(ws.toggle())})}document.addEventListener("click",n=>{const t=n.target.closest("[data-school],[data-stop],[data-fly],[data-more],[data-drawer-close],#next,#trailer-btn");if(t){if(t.id==="trailer-btn"){Ie("#trailer").showModal();return}if(t.dataset.school){U_(+t.dataset.school);return}if(t.dataset.more){D_(+t.dataset.more);return}if(!(t.hasAttribute("data-drawer-close")&&(ec(),t.tagName!=="A"))){if(t.id==="next"&&t.dataset.href){location.hash=t.dataset.href;return}if(t.dataset.stop!==void 0&&t.dataset.stop!==""){n.preventDefault(),Po(+t.dataset.stop),document.dispatchEvent(new CustomEvent("er-close-menus"));return}if(t.dataset.fly){n.preventDefault();const e=Ue.findIndex(i=>i.key===t.dataset.fly||i.slug===t.dataset.fly);e>=0&&Po(e),document.dispatchEvent(new CustomEvent("er-close-menus"))}}}});addEventListener("keydown",n=>{if(n.key==="Escape"&&ec(),document.body.classList.contains("place-open")||!zs()||n.target.closest("input,textarea,dialog,[contenteditable]")||document.querySelector("dialog[open]")||n.altKey||n.ctrlKey||n.metaKey)return;const t=["ArrowDown","PageDown"," "].includes(n.key),e=["ArrowUp","PageUp"].includes(n.key);if(!(n.key===" "&&n.target.closest("button,a"))){if(t||e){const i=Math.round(Ti())+(t?1:-1);if(t&&i>pn-1)return;n.preventDefault(),Po(i)}n.key==="Home"&&(n.preventDefault(),Po(0))}});Ie("#motion-btn").setAttribute("aria-pressed",qn);Ie("#motion-btn").addEventListener("click",()=>{try{localStorage.setItem("er-motion",qn?"full":"reduce")}catch{}location.reload()});document.addEventListener("er-place",n=>{n.detail.open?be&&Xi&&(be.stop(),Xi=!1):Yn()});setInterval(()=>{!document.hidden&&!document.body.classList.contains("place-open")&&performance.now()-yo>700&&tc()},900);zh();Yn();addEventListener("scroll",Yn,{passive:!0});addEventListener("resize",()=>{zh(),be?.resize(),Yn()});w_({canvas:Ie("#world"),base:Nh,reducedMotion:qn,onProgress:(n,t)=>{Ie("#l-fill").style.width=`${Math.round(n*100)}%`,Ie("#l-msg").textContent=t}}).then(n=>{be=n,oi=Ue.map(s=>n.progressOf(s.key)),window.__world=n,window.__setP=s=>{n.setProgress(s,!0)},window.__stop=s=>{Yi=performance.now()+600,scrollTo(0,on.offsetTop+s*Tn()),n.setProgress(oi[s],!0),Yn()},window.__stops=Ue.map(s=>s.slug),window.__x=s=>{Yi=performance.now()+6e3,scrollTo(0,on.offsetTop+s*Tn()),Yn()},Fh.get("all")&&n.buildAll();let t=null;addEventListener("pointermove",s=>{qn||(n.setPointer(s.clientX/innerWidth*2-1,s.clientY/innerHeight*2-1),t!=null&&(n.addYaw((s.clientX-t)*-.25),t=s.clientX))}),Ie("#world").addEventListener("pointerdown",s=>{t=s.clientX}),addEventListener("pointerup",()=>{t=null}),addEventListener("pointercancel",()=>{t=null}),I_(),Xi=!0,n.start();const e=location.hash.slice(1),i=Ue.findIndex(s=>s.slug===e);i>0&&(Yi=performance.now()+800,scrollTo(0,on.offsetTop+i*Tn()),n.setProgress(oi[i],!0)),Yn(),n.setProgress(qn?oi[Math.round(Ti())]:Bh(Ti()),!0),Ie("#loader").classList.add("done"),document.body.classList.add("ready"),window.__ready=!0}).catch(n=>{console.warn("3D journey unavailable, using the static presentation:",n),document.body.classList.add("static"),on.style.height="",Ie("#loader").classList.add("done"),window.__fail=String(n)});
