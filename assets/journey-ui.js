import{C as af,p as eh,t as nh,H as ql}from"./app.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="170",lf=0,vc=1,cf=2,ih=1,sh=2,oi=3,Ii=0,sn=1,Mn=2,Di=0,Os=1,is=2,xc=3,_c=4,uf=5,$i=100,hf=101,ff=102,df=103,pf=104,mf=200,gf=201,vf=202,xf=203,ja=204,Ja=205,_f=206,Mf=207,yf=208,Sf=209,bf=210,wf=211,Ef=212,Tf=213,Af=214,Qa=0,tl=1,el=2,ks=3,nl=4,il=5,sl=6,rl=7,rh=0,Rf=1,Cf=2,di=0,Pf=1,Df=2,Lf=3,If=4,Uf=5,Nf=6,Ff=7,oh=300,Gs=301,Ws=302,ol=303,al=304,Xo=306,Rr=1e3,Ri=1001,ll=1002,bn=1003,Of=1004,Hr=1005,Hn=1006,ea=1007,Ci=1008,mi=1009,ah=1010,lh=1011,Cr=1012,$l=1013,Ui=1014,Zn=1015,Ni=1016,Zl=1017,Kl=1018,Xs=1020,ch=35902,uh=1021,hh=1022,Vn=1023,fh=1024,dh=1025,zs=1026,qs=1027,qo=1028,jl=1029,ph=1030,Jl=1031,Ql=1033,Ro=33776,Co=33777,Po=33778,Do=33779,cl=35840,ul=35841,hl=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37808,vl=37809,xl=37810,_l=37811,Ml=37812,yl=37813,Sl=37814,bl=37815,wl=37816,El=37817,Tl=37818,Al=37819,Rl=37820,Cl=37821,Lo=36492,Pl=36494,Dl=36495,mh=36283,Ll=36284,Il=36285,Ul=36286,zf=3200,Yo=3201,gh=0,Bf=1,li="",gn="srgb",os="srgb-linear",$o="linear",xe="srgb",hs=7680,Mc=519,Hf=512,Vf=513,kf=514,vh=515,Gf=516,Wf=517,Xf=518,qf=519,yc=35044,Sc="300 es",fi=2e3,No=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Nl=180/Math.PI;function Ks(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ve(n,t,e){return Math.max(t,Math.min(e,n))}function Yf(n,t){return(n%t+t)%t}function ia(n,t,e){return(1-e)*n+e*t}function rr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,i,s,r,o,a,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],_=s[4],v=s[7],C=s[2],E=s[5],A=s[8];return r[0]=o*x+a*S+l*C,r[3]=o*m+a*_+l*E,r[6]=o*p+a*v+l*A,r[1]=c*x+u*S+h*C,r[4]=c*m+u*_+h*E,r[7]=c*p+u*v+h*A,r[2]=f*x+d*S+g*C,r[5]=f*m+d*_+g*E,r[8]=f*p+d*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new ie;function xh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $f(){const n=Fo("canvas");return n.style.display="block",n}const bc={};function yr(n){n in bc||(bc[n]=!0,console.warn(n))}function Zf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Kf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:os,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(n.r=pi(n.r),n.g=pi(n.g),n.b=pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(n.r=Bs(n.r),n.g=Bs(n.g),n.b=Bs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===li?$o:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wc=[.64,.33,.3,.6,.15,.06],Ec=[.2126,.7152,.0722],Tc=[.3127,.329],Ac=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[os]:{primaries:wc,whitePoint:Tc,transfer:$o,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:Ec,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:wc,whitePoint:Tc,transfer:xe,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:Ec,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let fs;class Jf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=Fo("canvas")),fs.width=t.width,fs.height=t.height;const i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qf=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let td=0;class Qe extends Zs{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=Ri,s=Ri,r=Hn,o=Ci,a=Vn,l=mi,c=Qe.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Ks(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=oh;Qe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(d+1)/2,C=(p+1)/2,E=(u+f)/4,A=(h+x)/4,R=(g+m)/4;return _>v&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=A/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=R/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=R/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ed extends Zs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends ed{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mh extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nd extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*x,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),E=Math.atan2(C,p*S);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const v=a*S;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+x*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new L,Cc=new Gn;class as{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),kr.subVectors(this.max,or),ds.subVectors(t.a,or),ps.subVectors(t.b,or),ms.subVectors(t.c,or),_i.subVectors(ps,ds),Mi.subVectors(ms,ps),zi.subVectors(ds,ms);let e=[0,-_i.z,_i.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!aa(e,ds,ps,ms,kr)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,ds,ps,ms,kr))?!1:(Gr.crossVectors(_i,Mi),e=[Gr.x,Gr.y,Gr.z],aa(e,ds,ps,ms,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,Vr=new as,ds=new L,ps=new L,ms=new L,_i=new L,Mi=new L,zi=new L,or=new L,kr=new L,Gr=new L,Bi=new L;function aa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bi.fromArray(n,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const id=new as,ar=new L,la=new L;class js{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):id.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(la)),this.expandByPoint(ar.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new L,ca=new L,Wr=new L,yi=new L,ua=new L,Xr=new L,ha=new L;class yh{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ca.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(ca);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=yi.dot(this.direction),l=-yi.dot(Wr),c=yi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ca).addScaledVector(Wr,f),d}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){ua.subVectors(e,t),Xr.subVectors(i,t),ha.crossVectors(ua,Xr);let o=this.direction.dot(ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);const l=a*this.direction.dot(Xr.crossVectors(yi,Xr));if(l<0)return null;const c=a*this.direction.dot(ua.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(ha);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,x,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,rd)}lookAt(t,e,i){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Si.crossVectors(i,pn),Si.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Si.crossVectors(i,pn)),Si.normalize(),qr.crossVectors(pn,Si),s[0]=Si.x,s[4]=qr.x,s[8]=pn.x,s[1]=Si.y,s[5]=qr.y,s[9]=pn.y,s[2]=Si.z,s[6]=qr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],_=i[7],v=i[11],C=i[15],E=s[0],A=s[4],R=s[8],y=s[12],M=s[1],P=s[5],B=s[9],O=s[13],V=s[2],$=s[6],W=s[10],ct=s[14],q=s[3],Mt=s[7],Et=s[11],Dt=s[15];return r[0]=o*E+a*M+l*V+c*q,r[4]=o*A+a*P+l*$+c*Mt,r[8]=o*R+a*B+l*W+c*Et,r[12]=o*y+a*O+l*ct+c*Dt,r[1]=u*E+h*M+f*V+d*q,r[5]=u*A+h*P+f*$+d*Mt,r[9]=u*R+h*B+f*W+d*Et,r[13]=u*y+h*O+f*ct+d*Dt,r[2]=g*E+x*M+m*V+p*q,r[6]=g*A+x*P+m*$+p*Mt,r[10]=g*R+x*B+m*W+p*Et,r[14]=g*y+x*O+m*ct+p*Dt,r[3]=S*E+_*M+v*V+C*q,r[7]=S*A+_*P+v*$+C*Mt,r[11]=S*R+_*B+v*W+C*Et,r[15]=S*y+_*O+v*ct+C*Dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,_=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,C=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,E=e*S+i*_+s*v+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=S*A,t[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*A,t[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*A,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*A,t[4]=_*A,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*A,t[8]=v*A,t[9]=(g*h*r-u*x*r-g*i*d+e*x*d+u*i*p-e*h*p)*A,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*A,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*A,t[12]=C*A,t[13]=(u*x*s-g*h*s+g*i*f-e*x*f-u*i*m+e*h*m)*A,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*m-e*a*m)*A,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,S=l*c,_=l*u,v=l*h,C=i.x,E=i.y,A=i.z;return s[0]=(1-(x+p))*C,s[1]=(d+v)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+_)*A,s[9]=(m-S)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,e.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===No)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fi){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,x;if(a===fi)g=(o+r)*h,x=-2*h;else if(a===No)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const gs=new L,Nn=new re,sd=new L(0,0,0),rd=new L(1,1,1),Si=new L,qr=new L,pn=new L,Pc=new re,Dc=new Gn;class kn{constructor(t=0,e=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let od=0;const Lc=new L,vs=new Gn,ii=new re,Yr=new L,lr=new L,ad=new L,ld=new Gn,Ic=new L(1,0,0),Uc=new L(0,1,0),Nc=new L(0,0,1),Fc={type:"added"},cd={type:"removed"},xs={type:"childadded",child:null},fa={type:"childremoved",child:null};class Ze extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new L,e=new kn,i=new Gn,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new ie}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yr.copy(t):Yr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(lr,Yr,this.up):ii.lookAt(Yr,lr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ii),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ze.DEFAULT_UP=new L(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new L,si=new L,da=new L,ri=new L,_s=new L,Ms=new L,Oc=new L,pa=new L,ma=new L,ga=new L,va=new fe,xa=new fe,_a=new fe;class zn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),si.subVectors(i,e),da.subVectors(t,e);const o=Fn.dot(Fn),a=Fn.dot(si),l=Fn.dot(da),c=si.dot(si),u=si.dot(da),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return va.setScalar(0),xa.setScalar(0),_a.setScalar(0),va.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,i),_a.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),si.subVectors(t,e),Fn.cross(si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return zn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;_s.subVectors(s,i),Ms.subVectors(r,i),pa.subVectors(t,i);const l=_s.dot(pa),c=Ms.dot(pa);if(l<=0&&c<=0)return e.copy(i);ma.subVectors(t,s);const u=_s.dot(ma),h=Ms.dot(ma);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(_s,o);ga.subVectors(t,r);const d=_s.dot(ga),g=Ms.dot(ga);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ms,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Oc.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Oc,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(_s,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ma(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Yf(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ma(o,r,t+1/3),this.g=Ma(o,r,t),this.b=Ma(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=bh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return he.fromWorkingColorSpace(en.copy(this),t),Math.round(Ve(en.r*255,0,255))*65536+Math.round(Ve(en.g*255,0,255))*256+Math.round(Ve(en.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(en.copy(this),e);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=gn){he.fromWorkingColorSpace(en.copy(this),t);const e=en.r,i=en.g,s=en.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL($r);const i=ia(bi.h,$r.h,e),s=ia(bi.s,$r.s,e),r=ia(bi.l,$r.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Lt;Lt.NAMES=bh;let ud=0;class Js extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ks(),this.name="",this.blending=Os,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ja,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zo extends Js{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ci=hd();function hd(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function fd(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Ve(n,-65504,65504),ci.floatView[0]=n;const t=ci.uint32View[0],e=t>>23&511;return ci.baseTable[e]+((t&8388607)>>ci.shiftTable[e])}function dd(n){const t=n>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[t]+(n&1023)]+ci.exponentTable[t],ci.floatView[0]}const pd={toHalfFloat:fd,fromHalfFloat:dd},Oe=new L,Zr=new ft;class Fe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=rr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class wh extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Eh extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let md=0;const Tn=new re,ya=new Ze,ys=new L,mn=new as,cr=new as,Xe=new L;class Ae extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Eh:wh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(mn.min,cr.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,cr.max),mn.expandByPoint(Xe)):(mn.expandByPoint(cr.min),mn.expandByPoint(cr.max))}mn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xe.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Xe.add(ys)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new L,l[R]=new L;const c=new L,u=new L,h=new L,f=new ft,d=new ft,g=new ft,x=new L,m=new L;function p(R,y,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(x),a[y].add(x),a[M].add(x),l[R].add(m),l[y].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,y=S.length;R<y;++R){const M=S[R],P=M.start,B=M.count;for(let O=P,V=P+B;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const _=new L,v=new L,C=new L,E=new L;function A(R){C.fromBufferAttribute(s,R),E.copy(C);const y=a[R];_.copy(y),_.sub(C.multiplyScalar(C.dot(y))).normalize(),v.crossVectors(E,y);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,y=S.length;R<y;++R){const M=S[R],P=M.start,B=M.count;for(let O=P,V=P+B;O<V;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Fe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new re,Hi=new yh,Kr=new js,Bc=new L,jr=new L,Jr=new L,Qr=new L,Sa=new L,to=new L,Hc=new L,eo=new L;class Kt extends Ze{constructor(t=new Ae,e=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Sa.fromBufferAttribute(h,t),o?to.addScaledVector(Sa,u):to.addScaledVector(Sa.sub(e),u))}e.add(to)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Kr.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Kr,Bc)===null||Hi.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(zc),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,C=_;v<C;v+=3){const E=a.getX(v),A=a.getX(v+1),R=a.getX(v+2);s=no(this,p,t,i,c,u,h,E,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=no(this,o,t,i,c,u,h,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,C=_;v<C;v+=3){const E=v,A=v+1,R=v+2;s=no(this,p,t,i,c,u,h,E,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=m,_=m+1,v=m+2;s=no(this,o,t,i,c,u,h,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function gd(n,t,e,i,s,r,o,a){let l;if(t.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ii,a),l===null)return null;eo.copy(a),eo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:n}}function no(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,jr),n.getVertexPosition(l,Jr),n.getVertexPosition(c,Qr);const u=gd(n,t,e,i,jr,Jr,Qr,Hc);if(u){const h=new L;zn.getBarycoord(Hc,jr,Jr,Qr,h),s&&(u.uv=zn.getInterpolatedAttribute(s,a,l,c,h,new ft)),r&&(u.uv1=zn.getInterpolatedAttribute(r,a,l,c,h,new ft)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};zn.getNormal(jr,Jr,Qr,f.normal),u.face=f,u.barycoord=h}return u}class Fi extends Ae{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2));function g(x,m,p,S,_,v,C,E,A,R,y){const M=v/A,P=C/R,B=v/2,O=C/2,V=E/2,$=A+1,W=R+1;let ct=0,q=0;const Mt=new L;for(let Et=0;Et<W;Et++){const Dt=Et*P-O;for(let Zt=0;Zt<$;Zt++){const ue=Zt*M-B;Mt[x]=ue*S,Mt[m]=Dt*_,Mt[p]=V,c.push(Mt.x,Mt.y,Mt.z),Mt[x]=0,Mt[m]=0,Mt[p]=E>0?1:-1,u.push(Mt.x,Mt.y,Mt.z),h.push(Zt/A),h.push(1-Et/R),ct+=1}}for(let Et=0;Et<R;Et++)for(let Dt=0;Dt<A;Dt++){const Zt=f+Dt+$*Et,ue=f+Dt+$*(Et+1),Z=f+(Dt+1)+$*(Et+1),mt=f+(Dt+1)+$*Et;l.push(Zt,ue,mt),l.push(ue,Z,mt),q+=6}a.addGroup(d,q,y),d+=q,f+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function an(n){const t={};for(let e=0;e<n.length;e++){const i=Ys(n[e]);for(const s in i)t[s]=i[s]}return t}function vd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Th(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const xd={clone:Ys,merge:an};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends Js{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class tc extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new L,Vc=new ft,kc=new ft;class xn extends tc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,kc),e.subVectors(kc,Vc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,bs=1;class yd extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Ss,bs,t,e);s.layers=this.layers,this.add(s);const r=new xn(Ss,bs,t,e);r.layers=this.layers,this.add(r);const o=new xn(Ss,bs,t,e);o.layers=this.layers,this.add(o);const a=new xn(Ss,bs,t,e);a.layers=this.layers,this.add(a);const l=new xn(Ss,bs,t,e);l.layers=this.layers,this.add(l);const c=new xn(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ah extends Qe{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sd extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ah(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Di});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Hn),new yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ba=new L,bd=new L,wd=new ie;class Xi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ba.subVectors(i,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ba),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wd.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new js,io=new L;class ec{constructor(t=new Xi,e=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],_=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,m-d,v-p).normalize(),i[1].setComponents(l+r,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+u,m+g,v+S).normalize(),i[3].setComponents(l-o,f-u,m-g,v-S).normalize(),i[4].setComponents(l-a,f-h,m-x,v-_).normalize(),e===fi)i[5].setComponents(l+a,f+h,m+x,v+_).normalize();else if(e===No)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ed(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class $s extends Ae{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let _=0;_<c;_++){const v=_*h-r;g.push(v,-S,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const _=S+c*p,v=S+c*(p+1),C=S+1+c*(p+1),E=S+1+c*p;d.push(_,v,E),d.push(v,C,E)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,w0=`struct PhysicalMaterial {
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
}`,E0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,kp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Dd,aomap_fragment:Ld,aomap_pars_fragment:Id,batching_pars_vertex:Ud,batching_vertex:Nd,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:zd,iridescence_fragment:Bd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:$d,common:Zd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:jd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Qd,emissivemap_fragment:t0,emissivemap_pars_fragment:e0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:s0,envmap_common_pars_fragment:r0,envmap_pars_fragment:o0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:x0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:u0,fog_fragment:h0,fog_pars_fragment:f0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:v0,lights_toon_fragment:_0,lights_toon_pars_fragment:M0,lights_phong_fragment:y0,lights_phong_pars_fragment:S0,lights_physical_fragment:b0,lights_physical_pars_fragment:w0,lights_fragment_begin:E0,lights_fragment_maps:T0,lights_fragment_end:A0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:D0,map_fragment:L0,map_pars_fragment:I0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:z0,morphcolor_vertex:B0,morphnormal_vertex:H0,morphtarget_pars_vertex:V0,morphtarget_vertex:k0,normal_fragment_begin:G0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:tp,premultiplied_alpha_fragment:ep,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:up,skinbase_vertex:hp,skinning_pars_vertex:fp,skinning_vertex:dp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:vp,tonemapping_pars_fragment:xp,transmission_fragment:_p,transmission_pars_fragment:Mp,uv_pars_fragment:yp,uv_pars_vertex:Sp,uv_vertex:bp,worldpos_vertex:wp,background_vert:Ep,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Dp,depth_frag:Lp,distanceRGBA_vert:Ip,distanceRGBA_frag:Up,equirect_vert:Np,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:zp,meshbasic_vert:Bp,meshbasic_frag:Hp,meshlambert_vert:Vp,meshlambert_frag:kp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:$p,meshphysical_vert:Zp,meshphysical_frag:Kp,meshtoon_vert:jp,meshtoon_frag:Jp,points_vert:Qp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},wt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},qn={basic:{uniforms:an([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:an([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:an([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:an([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:an([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:an([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:an([wt.points,wt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:an([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:an([wt.common,wt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:an([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:an([wt.sprite,wt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:an([wt.common,wt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:an([wt.lights,wt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};qn.physical={uniforms:an([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const so={r:0,b:0,g:0},ki=new kn,rm=new re;function om(n,t,e,i,s,r,o){const a=new Lt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function x(S){let _=!1;const v=g(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,_){const v=g(_);v&&(v.isCubeTexture||v.mapping===Xo)?(u===void 0&&(u=new Kt(new Fi(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Ys(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(ki)),u.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Kt(new $s(2,2),new ke({name:"BackgroundMaterial",uniforms:Ys(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,_){S.getRGB(so,Th(n)),i.buffers.color.setClear(so.r,so.g,so.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:m}}function am(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,P,B,O,V){let $=!1;const W=h(O,B,P);r!==W&&(r=W,c(r.object)),$=d(M,O,B,V),$&&g(M,O,B,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,P,B,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,B){const O=B.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let $=V[P.id];$===void 0&&($={},V[P.id]=$);let W=$[O];return W===void 0&&(W=f(l()),$[O]=W),W}function f(M){const P=[],B=[],O=[];for(let V=0;V<e;V++)P[V]=0,B[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,P,B,O){const V=r.attributes,$=P.attributes;let W=0;const ct=B.getAttributes();for(const q in ct)if(ct[q].location>=0){const Et=V[q];let Dt=$[q];if(Dt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Dt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Dt=M.instanceColor)),Et===void 0||Et.attribute!==Dt||Dt&&Et.data!==Dt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(M,P,B,O){const V={},$=P.attributes;let W=0;const ct=B.getAttributes();for(const q in ct)if(ct[q].location>=0){let Et=$[q];Et===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor));const Dt={};Dt.attribute=Et,Et&&Et.data&&(Dt.data=Et.data),V[q]=Dt,W++}r.attributes=V,r.attributesNum=W,r.index=O}function x(){const M=r.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const B=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;B[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),V[M]!==P&&(n.vertexAttribDivisor(M,P),V[M]=P)}function S(){const M=r.newAttributes,P=r.enabledAttributes;for(let B=0,O=P.length;B<O;B++)P[B]!==M[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function _(M,P,B,O,V,$,W){W===!0?n.vertexAttribIPointer(M,P,B,V,$):n.vertexAttribPointer(M,P,B,O,V,$)}function v(M,P,B,O){x();const V=O.attributes,$=B.getAttributes(),W=P.defaultAttributeValues;for(const ct in $){const q=$[ct];if(q.location>=0){let Mt=V[ct];if(Mt===void 0&&(ct==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),ct==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),Mt!==void 0){const Et=Mt.normalized,Dt=Mt.itemSize,Zt=t.get(Mt);if(Zt===void 0)continue;const ue=Zt.buffer,Z=Zt.type,mt=Zt.bytesPerElement,Tt=Z===n.INT||Z===n.UNSIGNED_INT||Mt.gpuType===$l;if(Mt.isInterleavedBufferAttribute){const vt=Mt.data,Vt=vt.stride,jt=Mt.offset;if(vt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<q.locationSize;Yt++)p(q.location+Yt,vt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Yt=0;Yt<q.locationSize;Yt++)m(q.location+Yt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Yt=0;Yt<q.locationSize;Yt++)_(q.location+Yt,Dt/q.locationSize,Z,Et,Vt*mt,(jt+Dt/q.locationSize*Yt)*mt,Tt)}else{if(Mt.isInstancedBufferAttribute){for(let vt=0;vt<q.locationSize;vt++)p(q.location+vt,Mt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let vt=0;vt<q.locationSize;vt++)_(q.location+vt,Dt/q.locationSize,Z,Et,Dt*mt,Dt/q.locationSize*vt*mt,Tt)}}else if(W!==void 0){const Et=W[ct];if(Et!==void 0)switch(Et.length){case 2:n.vertexAttrib2fv(q.location,Et);break;case 3:n.vertexAttrib3fv(q.location,Et);break;case 4:n.vertexAttrib4fv(q.location,Et);break;default:n.vertexAttrib1fv(q.location,Et)}}}}S()}function C(){R();for(const M in i){const P=i[M];for(const B in P){const O=P[B];for(const V in O)u(O[V].object),delete O[V];delete P[B]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const B in P){const O=P[B];for(const V in O)u(O[V].object),delete O[V];delete P[B]}delete i[M.id]}function A(M){for(const P in i){const B=i[P];if(B[M.id]===void 0)continue;const O=B[M.id];for(const V in O)u(O[V].object),delete O[V];delete B[M.id]}}function R(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function lm(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Vn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:C,maxSamples:E}}function um(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Xi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,_=S*4;let v=p.clippingState||null;l.value=v,v=u(g,f,_,d);for(let C=0;C!==_;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hm(n){let t=new WeakMap;function e(o,a){return a===ol?o.mapping=Gs:a===al&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ch extends tc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,Gc=[.125,.215,.35,.446,.526,.582],Zi=20,wa=new Ch,Wc=new Lt;let Ea=null,Ta=0,Aa=0,Ra=!1;const qi=(1+Math.sqrt(5))/2,ws=1/qi,Xc=[new L(-qi,ws,0),new L(qi,ws,0),new L(-ws,0,qi),new L(ws,0,qi),new L(0,qi,-ws),new L(0,qi,ws),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,Ta,Aa),this._renderer.xr.enabled=Ra,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ni,format:Vn,colorSpace:os,depthBuffer:!1},s=qc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fm(r)),this._blurMaterial=dm(r,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,i,s){const a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wc),u.toneMapping=di,u.autoClear=!1;const d=new Zo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Kt(new Fi,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Wc),x=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;ro(s,S*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Gs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,wa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(s-r-1)%Xc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let S=0;for(let A=0;A<Zi;++A){const R=A/x,y=Math.exp(-R*R/2);p.push(y),A===0?S+=y:A<m&&(S+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const v=this._sizeLods[s],C=3*v*(s>_-Ps?s-_+Ps:0),E=4*(this._cubeSize-v);ro(e,C,E,3*v,2*v),l.setRenderTarget(e),l.render(h,wa)}}function fm(n){const t=[],e=[],i=[];let s=n;const r=n-Ps+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ps?l=Gc[o-n+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,R=E>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];S.set(y,x*g*E),_.set(f,m*g*E);const M=[E,E,E,E,E,E];v.set(M,p*g*E)}const C=new Ae;C.setAttribute("position",new Fe(S,x)),C.setAttribute("uv",new Fe(_,m)),C.setAttribute("faceIndex",new Fe(v,p)),t.push(C),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function qc(n,t,e){const i=new gi(n,t,e);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function dm(n,t,e){const i=new Float32Array(Zi),s=new L(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Yc(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function $c(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function pm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ol||l===al,u=l===Gs||l===Ws;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fl(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Fl(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function mm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&yr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gm(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const S=d.array;x=d.version;for(let _=0,v=S.length;_<v;_+=3){const C=S[_+0],E=S[_+1],A=S[_+2];f.push(C,E,E,A,A,C)}}else if(g!==void 0){const S=g.array;x=g.version;for(let _=0,v=S.length/3-1;_<v;_+=3){const C=_+0,E=_+1,A=_+2;f.push(C,E,E,A,A,C)}}else return;const m=new(xh(f)?Eh:wh)(f,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vm(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function _m(n,t,e){const i=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*C*4*h),A=new Mh(E,v,C,h);A.type=Zn,A.needsUpdate=!0;const R=_*4;for(let M=0;M<h;M++){const P=m[M],B=p[M],O=S[M],V=v*C*4*M;for(let $=0;$<P.count;$++){const W=$*R;d===!0&&(s.fromBufferAttribute(P,$),E[V+W+0]=s.x,E[V+W+1]=s.y,E[V+W+2]=s.z,E[V+W+3]=0),g===!0&&(s.fromBufferAttribute(B,$),E[V+W+4]=s.x,E[V+W+5]=s.y,E[V+W+6]=s.z,E[V+W+7]=0),x===!0&&(s.fromBufferAttribute(O,$),E[V+W+8]=s.x,E[V+W+9]=s.y,E[V+W+10]=s.z,E[V+W+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new ft(v,C)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Mm(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ic extends Qe{constructor(t,e,i,s,r,o,a,l,c,u=zs){if(u!==zs&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zs&&(i=Ui),i===void 0&&u===qs&&(i=Xs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ph=new Qe,Zc=new ic(1,1),Dh=new Mh,Lh=new nd,Ih=new Ah,Kc=[],jc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),tu=new Float32Array(4);function Qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ko(n,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ym(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function Em(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),We(e,i)}}function Tm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;Qc.set(i),n.uniformMatrix3fv(this.addr,!1,Qc),We(e,i)}}function Am(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),We(e,i)}}function Rm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function Pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function Dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function Lm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Im(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function Um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function Nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function Fm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zc.compareFunction=vh,r=Zc):r=Ph,e.setTexture2D(t||r,s)}function Om(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Lh,s)}function zm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ih,s)}function Bm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Dh,s)}function Hm(n){switch(n){case 5126:return ym;case 35664:return Sm;case 35665:return bm;case 35666:return wm;case 35674:return Em;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Lm;case 36294:return Im;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Bm}}function Vm(n,t){n.uniform1fv(this.addr,t)}function km(n,t){const e=Qs(t,this.size,2);n.uniform2fv(this.addr,e)}function Gm(n,t){const e=Qs(t,this.size,3);n.uniform3fv(this.addr,e)}function Wm(n,t){const e=Qs(t,this.size,4);n.uniform4fv(this.addr,e)}function Xm(n,t){const e=Qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qm(n,t){const e=Qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ym(n,t){const e=Qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $m(n,t){n.uniform1iv(this.addr,t)}function Zm(n,t){n.uniform2iv(this.addr,t)}function Km(n,t){n.uniform3iv(this.addr,t)}function jm(n,t){n.uniform4iv(this.addr,t)}function Jm(n,t){n.uniform1uiv(this.addr,t)}function Qm(n,t){n.uniform2uiv(this.addr,t)}function tg(n,t){n.uniform3uiv(this.addr,t)}function eg(n,t){n.uniform4uiv(this.addr,t)}function ng(n,t,e){const i=this.cache,s=t.length,r=Ko(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ph,r[o])}function ig(n,t,e){const i=this.cache,s=t.length,r=Ko(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lh,r[o])}function sg(n,t,e){const i=this.cache,s=t.length,r=Ko(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ih,r[o])}function rg(n,t,e){const i=this.cache,s=t.length,r=Ko(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dh,r[o])}function og(n){switch(n){case 5126:return Vm;case 35664:return km;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Jm;case 36294:return Qm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}class ag{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hm(e.type)}}class lg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function eu(n,t){n.seq.push(t),n.map[t.id]=t}function ug(n,t,e){const i=n.name,s=i.length;for(Ca.lastIndex=0;;){const r=Ca.exec(i),o=Ca.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){eu(e,c===void 0?new ag(a,n,t):new lg(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new cg(a),eu(e,h)),e=h}}}class Io{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ug(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function nu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hg=37297;let fg=0;function dg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const iu=new ie;function pg(n){he._getMatrix(iu,he.workingColorSpace,n);const t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case $o:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function su(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dg(n.getShaderSource(t),o)}else return s}function mg(n,t){const e=pg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gg(n,t){let e;switch(t){case Pf:e="Linear";break;case Df:e="Reinhard";break;case Lf:e="Cineon";break;case If:e="ACESFilmic";break;case Nf:e="AgX";break;case Ff:e="Neutral";break;case Uf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oo=new L;function vg(){he.getLuminanceCoefficients(oo);const n=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function _g(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Mg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Sr(n){return n!==""}function ru(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(n){return n.replace(yg,bg)}const Sg=new Map;function bg(n,t){let e=oe[t];if(e===void 0){const i=Sg.get(t);if(i!==void 0)e=oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(n){return n.replace(wg,Eg)}function Eg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Tg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function Cg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rh:t="ENVMAP_BLENDING_MULTIPLY";break;case Rf:t="ENVMAP_BLENDING_MIX";break;case Cf:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Dg(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Tg(e),c=Ag(e),u=Rg(e),h=Cg(e),f=Pg(e),d=xg(e),g=_g(r),x=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?oe.tonemapping_pars_fragment:"",e.toneMapping!==di?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Ol(o),o=ru(o,e),o=ou(o,e),a=Ol(a),a=ru(a,e),a=ou(a,e),o=au(o),a=au(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+m+o,v=S+p+a,C=nu(s,s.VERTEX_SHADER,_),E=nu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(E).trim();let $=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,C,E);else{const ct=su(s,C,"vertex"),q=su(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+ct+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||V==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(C),s.deleteShader(E),R=new Io(s,x),y=Mg(s,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,hg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}let Lg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ug(t),e.set(t,i)),i}}class Ug{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Ng(n,t,e,i,s,r,o){const a=new Sh,l=new Ig,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,B,O){const V=B.fog,$=O.geometry,W=y.isMeshStandardMaterial?B.environment:null,ct=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),q=ct&&ct.mapping===Xo?ct.image.height:null,Mt=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Dt=Et!==void 0?Et.length:0;let Zt=0;$.morphAttributes.position!==void 0&&(Zt=1),$.morphAttributes.normal!==void 0&&(Zt=2),$.morphAttributes.color!==void 0&&(Zt=3);let ue,Z,mt,Tt;if(Mt){const le=qn[Mt];ue=le.vertexShader,Z=le.fragmentShader}else ue=y.vertexShader,Z=y.fragmentShader,l.update(y),mt=l.getVertexShaderID(y),Tt=l.getFragmentShaderID(y);const vt=n.getRenderTarget(),Vt=n.state.buffers.depth.getReversed(),jt=O.isInstancedMesh===!0,Yt=O.isBatchedMesh===!0,te=!!y.map,rt=!!y.matcap,dt=!!ct,D=!!y.aoMap,Ot=!!y.lightMap,ut=!!y.bumpMap,nt=!!y.normalMap,xt=!!y.displacementMap,Gt=!!y.emissiveMap,Pt=!!y.metalnessMap,T=!!y.roughnessMap,b=y.anisotropy>0,H=y.clearcoat>0,J=y.dispersion>0,ot=y.iridescence>0,Q=y.sheen>0,At=y.transmission>0,St=b&&!!y.anisotropyMap,pt=H&&!!y.clearcoatMap,Qt=H&&!!y.clearcoatNormalMap,tt=H&&!!y.clearcoatRoughnessMap,It=ot&&!!y.iridescenceMap,Xt=ot&&!!y.iridescenceThicknessMap,_t=Q&&!!y.sheenColorMap,Ft=Q&&!!y.sheenRoughnessMap,ae=!!y.specularMap,ne=!!y.specularColorMap,ve=!!y.specularIntensityMap,N=At&&!!y.transmissionMap,bt=At&&!!y.thicknessMap,Y=!!y.gradientMap,it=!!y.alphaMap,Rt=y.alphaTest>0,gt=!!y.alphaHash,ee=!!y.extensions;let _e=di;y.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(_e=n.toneMapping);const ye={shaderID:Mt,shaderType:y.type,shaderName:y.name,vertexShader:ue,fragmentShader:Z,defines:y.defines,customVertexShaderID:mt,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&O._colorsTexture!==null,instancing:jt,instancingColor:jt&&O.instanceColor!==null,instancingMorph:jt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?n.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:os,alphaToCoverage:!!y.alphaToCoverage,map:te,matcap:rt,envMap:dt,envMapMode:dt&&ct.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:Ot,bumpMap:ut,normalMap:nt,displacementMap:f&&xt,emissiveMap:Gt,normalMapObjectSpace:nt&&y.normalMapType===Bf,normalMapTangentSpace:nt&&y.normalMapType===gh,metalnessMap:Pt,roughnessMap:T,anisotropy:b,anisotropyMap:St,clearcoat:H,clearcoatMap:pt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:tt,dispersion:J,iridescence:ot,iridescenceMap:It,iridescenceThicknessMap:Xt,sheen:Q,sheenColorMap:_t,sheenRoughnessMap:Ft,specularMap:ae,specularColorMap:ne,specularIntensityMap:ve,transmission:At,transmissionMap:N,thicknessMap:bt,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Os&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:Rt,alphaHash:gt,combine:y.combine,mapUv:te&&x(y.map.channel),aoMapUv:D&&x(y.aoMap.channel),lightMapUv:Ot&&x(y.lightMap.channel),bumpMapUv:ut&&x(y.bumpMap.channel),normalMapUv:nt&&x(y.normalMap.channel),displacementMapUv:xt&&x(y.displacementMap.channel),emissiveMapUv:Gt&&x(y.emissiveMap.channel),metalnessMapUv:Pt&&x(y.metalnessMap.channel),roughnessMapUv:T&&x(y.roughnessMap.channel),anisotropyMapUv:St&&x(y.anisotropyMap.channel),clearcoatMapUv:pt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&x(y.sheenRoughnessMap.channel),specularMapUv:ae&&x(y.specularMap.channel),specularColorMapUv:ne&&x(y.specularColorMap.channel),specularIntensityMapUv:ve&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:bt&&x(y.thicknessMap.channel),alphaMapUv:it&&x(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(nt||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(te||it),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Vt,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:te&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:Gt&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ee&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&y.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(M,y),_(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let P;if(M){const B=qn[M];P=xd.clone(B.uniforms)}else P=y.uniforms;return P}function C(y,M){let P;for(let B=0,O=u.length;B<O;B++){const V=u[B];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Dg(n,M,y,r),u.push(P)),P}function E(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:R}}function Fg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Og(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,x,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Og),i.length>1&&i.sort(f||cu),s.length>1&&s.sort(f||cu)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function zg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new uu,n.set(i,[o])):s>=r.length?(o=new uu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Bg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Lt};break;case"SpotLight":e={position:new L,direction:new L,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Hg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Vg=0;function kg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Gg(n){const t=new Bg,e=Hg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new re,o=new re;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,_=0,v=0,C=0,E=0,A=0;c.sort(kg);for(let y=0,M=c.length;y<M;y++){const P=c[y],B=P.color,O=P.intensity,V=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*O,h+=B.g*O,f+=B.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],O);A++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ct=P.shadow,q=e.get(P);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=P.shadow.matrix,S++}i.directional[d]=W,d++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(O),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;const ct=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,ct.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[x]=ct.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=$,v++}x++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(B).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const ct=P.shadow,q=e.get(P);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,q.shadowCameraNear=ct.camera.near,q.shadowCameraFar=ct.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==C||R.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=C,R.numLightProbes=A,i.version=Vg++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const _=c[p];if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function hu(n){const t=new Gg(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wg(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new hu(n),t.set(s,[a])):r>=o.length?(a=new hu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class jo extends Js{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xg extends Js{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function $g(n,t,e){let i=new ec;const s=new ft,r=new ft,o=new fe,a=new jo({depthPacking:Yo}),l=new Xg,c={},u=e.maxTextureSize,h={[Ii]:sn,[sn]:Ii,[Mn]:Mn},f=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Di),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==oi&&this.type===oi,V=p===oi&&this.type!==oi;for(let $=0,W=E.length;$<W;$++){const ct=E[$],q=ct.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Mt=q.getFrameExtents();if(s.multiply(Mt),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Mt.x),s.x=r.x*Mt.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Mt.y),s.y=r.y*Mt.y,q.mapSize.y=r.y)),q.map===null||O===!0||V===!0){const Dt=this.type!==oi?{minFilter:bn,magFilter:bn}:{};q.map!==null&&q.map.dispose(),q.map=new gi(s.x,s.y,Dt),q.map.texture.name=ct.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Et=q.getViewportCount();for(let Dt=0;Dt<Et;Dt++){const Zt=q.getViewport(Dt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),B.viewport(o),q.updateMatrices(ct,Dt),i=q.getFrustum(),v(A,R,q.camera,ct,this.type)}q.isPointLightShadow!==!0&&this.type===oi&&S(q,R),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,P)};function S(E,A){const R=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,R,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,R,d,x,null)}function _(E,A,R,y){let M=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=M.uuid,O=A.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let $=V[O];$===void 0&&($=M.clone(),V[O]=$,A.addEventListener("dispose",C)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,y===oi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=R}return M}function v(E,A,R,y,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===oi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=t.update(E),V=E.material;if(Array.isArray(V)){const $=O.groups;for(let W=0,ct=$.length;W<ct;W++){const q=$[W],Mt=V[q.materialIndex];if(Mt&&Mt.visible){const Et=_(E,Mt,y,M);E.onBeforeShadow(n,E,A,R,O,Et,q),n.renderBufferDirect(R,null,O,Et,E,q),E.onAfterShadow(n,E,A,R,O,Et,q)}}}else if(V.visible){const $=_(E,V,y,M);E.onBeforeShadow(n,E,A,R,O,$,null),n.renderBufferDirect(R,null,O,$,E,null),E.onAfterShadow(n,E,A,R,O,$,null)}}const B=E.children;for(let O=0,V=B.length;O<V;O++)v(B[O],A,R,y,M)}function C(E){E.target.removeEventListener("dispose",C);for(const R in c){const y=c[R],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Zg={[Qa]:tl,[el]:sl,[nl]:rl,[ks]:il,[tl]:Qa,[sl]:el,[rl]:nl,[il]:ks};function Kg(n,t){function e(){let N=!1;const bt=new fe;let Y=null;const it=new fe(0,0,0,0);return{setMask:function(Rt){Y!==Rt&&!N&&(n.colorMask(Rt,Rt,Rt,Rt),Y=Rt)},setLocked:function(Rt){N=Rt},setClear:function(Rt,gt,ee,_e,ye){ye===!0&&(Rt*=_e,gt*=_e,ee*=_e),bt.set(Rt,gt,ee,_e),it.equals(bt)===!1&&(n.clearColor(Rt,gt,ee,_e),it.copy(bt))},reset:function(){N=!1,Y=null,it.set(-1,0,0,0)}}}function i(){let N=!1,bt=!1,Y=null,it=null,Rt=null;return{setReversed:function(gt){if(bt!==gt){const ee=t.get("EXT_clip_control");bt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const _e=Rt;Rt=null,this.setClear(_e)}bt=gt},getReversed:function(){return bt},setTest:function(gt){gt?vt(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!N&&(n.depthMask(gt),Y=gt)},setFunc:function(gt){if(bt&&(gt=Zg[gt]),it!==gt){switch(gt){case Qa:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case el:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case il:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=gt}},setLocked:function(gt){N=gt},setClear:function(gt){Rt!==gt&&(bt&&(gt=1-gt),n.clearDepth(gt),Rt=gt)},reset:function(){N=!1,Y=null,it=null,Rt=null,bt=!1}}}function s(){let N=!1,bt=null,Y=null,it=null,Rt=null,gt=null,ee=null,_e=null,ye=null;return{setTest:function(le){N||(le?vt(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(le){bt!==le&&!N&&(n.stencilMask(le),bt=le)},setFunc:function(le,ln,dn){(Y!==le||it!==ln||Rt!==dn)&&(n.stencilFunc(le,ln,dn),Y=le,it=ln,Rt=dn)},setOp:function(le,ln,dn){(gt!==le||ee!==ln||_e!==dn)&&(n.stencilOp(le,ln,dn),gt=le,ee=ln,_e=dn)},setLocked:function(le){N=le},setClear:function(le){ye!==le&&(n.clearStencil(le),ye=le)},reset:function(){N=!1,bt=null,Y=null,it=null,Rt=null,gt=null,ee=null,_e=null,ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,_=null,v=null,C=null,E=null,A=new Lt(0,0,0),R=0,y=!1,M=null,P=null,B=null,O=null,V=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ct=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ct>=1):q.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ct>=2);let Mt=null,Et={};const Dt=n.getParameter(n.SCISSOR_BOX),Zt=n.getParameter(n.VIEWPORT),ue=new fe().fromArray(Dt),Z=new fe().fromArray(Zt);function mt(N,bt,Y,it){const Rt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<Y;ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(bt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return gt}const Tt={};Tt[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(n.DEPTH_TEST),o.setFunc(ks),ut(!1),nt(vc),vt(n.CULL_FACE),D(Di);function vt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Vt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function jt(N,bt){return h[N]!==bt?(n.bindFramebuffer(N,bt),h[N]=bt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=bt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function Yt(N,bt){let Y=d,it=!1;if(N){Y=f.get(bt),Y===void 0&&(Y=[],f.set(bt,Y));const Rt=N.textures;if(Y.length!==Rt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,ee=Rt.length;gt<ee;gt++)Y[gt]=n.COLOR_ATTACHMENT0+gt;Y.length=Rt.length,it=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,it=!0);it&&n.drawBuffers(Y)}function te(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const rt={[$i]:n.FUNC_ADD,[hf]:n.FUNC_SUBTRACT,[ff]:n.FUNC_REVERSE_SUBTRACT};rt[df]=n.MIN,rt[pf]=n.MAX;const dt={[mf]:n.ZERO,[gf]:n.ONE,[vf]:n.SRC_COLOR,[ja]:n.SRC_ALPHA,[bf]:n.SRC_ALPHA_SATURATE,[yf]:n.DST_COLOR,[_f]:n.DST_ALPHA,[xf]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[Sf]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA,[wf]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[Tf]:n.CONSTANT_ALPHA,[Af]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,bt,Y,it,Rt,gt,ee,_e,ye,le){if(N===Di){x===!0&&(Vt(n.BLEND),x=!1);return}if(x===!1&&(vt(n.BLEND),x=!0),N!==uf){if(N!==m||le!==y){if((p!==$i||v!==$i)&&(n.blendEquation(n.FUNC_ADD),p=$i,v=$i),le)switch(N){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,_=null,C=null,E=null,A.set(0,0,0),R=0,m=N,y=le}return}Rt=Rt||bt,gt=gt||Y,ee=ee||it,(bt!==p||Rt!==v)&&(n.blendEquationSeparate(rt[bt],rt[Rt]),p=bt,v=Rt),(Y!==S||it!==_||gt!==C||ee!==E)&&(n.blendFuncSeparate(dt[Y],dt[it],dt[gt],dt[ee]),S=Y,_=it,C=gt,E=ee),(_e.equals(A)===!1||ye!==R)&&(n.blendColor(_e.r,_e.g,_e.b,ye),A.copy(_e),R=ye),m=N,y=!1}function Ot(N,bt){N.side===Mn?Vt(n.CULL_FACE):vt(n.CULL_FACE);let Y=N.side===sn;bt&&(Y=!Y),ut(Y),N.blending===Os&&N.transparent===!1?D(Di):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const it=N.stencilWrite;a.setTest(it),it&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function nt(N){N!==lf?(vt(n.CULL_FACE),N!==P&&(N===vc?n.cullFace(n.BACK):N===cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),P=N}function xt(N){N!==B&&(W&&n.lineWidth(N),B=N)}function Gt(N,bt,Y){N?(vt(n.POLYGON_OFFSET_FILL),(O!==bt||V!==Y)&&(n.polygonOffset(bt,Y),O=bt,V=Y)):Vt(n.POLYGON_OFFSET_FILL)}function Pt(N){N?vt(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function T(N){N===void 0&&(N=n.TEXTURE0+$-1),Mt!==N&&(n.activeTexture(N),Mt=N)}function b(N,bt,Y){Y===void 0&&(Mt===null?Y=n.TEXTURE0+$-1:Y=Mt);let it=Et[Y];it===void 0&&(it={type:void 0,texture:void 0},Et[Y]=it),(it.type!==N||it.texture!==bt)&&(Mt!==Y&&(n.activeTexture(Y),Mt=Y),n.bindTexture(N,bt||Tt[N]),it.type=N,it.texture=bt)}function H(){const N=Et[Mt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(N){ue.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ue.copy(N))}function Ft(N){Z.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function ae(N,bt){let Y=c.get(bt);Y===void 0&&(Y=new WeakMap,c.set(bt,Y));let it=Y.get(N);it===void 0&&(it=n.getUniformBlockIndex(bt,N.name),Y.set(N,it))}function ne(N,bt){const it=c.get(bt).get(N);l.get(bt)!==it&&(n.uniformBlockBinding(bt,it,N.__bindingPointIndex),l.set(bt,it))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Mt=null,Et={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,_=null,v=null,C=null,E=null,A=new Lt(0,0,0),R=0,y=!1,M=null,P=null,B=null,O=null,V=null,ue.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:Vt,bindFramebuffer:jt,drawBuffers:Yt,useProgram:te,setBlending:D,setMaterial:Ot,setFlipSided:ut,setCullFace:nt,setLineWidth:xt,setPolygonOffset:Gt,setScissorTest:Pt,activeTexture:T,bindTexture:b,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:ot,texImage2D:It,texImage3D:Xt,updateUBOMapping:ae,uniformBlockBinding:ne,texStorage2D:Qt,texStorage3D:tt,texSubImage2D:Q,texSubImage3D:At,compressedTexSubImage2D:St,compressedTexSubImage3D:pt,scissor:_t,viewport:Ft,reset:ve}}function fu(n,t,e,i){const s=jg(i);switch(e){case uh:return n*t;case fh:return n*t;case dh:return n*t*2;case qo:return n*t/s.components*s.byteLength;case jl:return n*t/s.components*s.byteLength;case ph:return n*t*2/s.components*s.byteLength;case Jl:return n*t*2/s.components*s.byteLength;case hh:return n*t*3/s.components*s.byteLength;case Vn:return n*t*4/s.components*s.byteLength;case Ql:return n*t*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Po:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:case fl:return Math.max(n,16)*Math.max(t,8)/4;case cl:case hl:return Math.max(n,8)*Math.max(t,8)/2;case dl:case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Pl:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case mh:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Il:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jg(n){switch(n){case mi:case ah:return{byteLength:1,components:1};case Cr:case lh:case Ni:return{byteLength:2,components:1};case Zl:case Kl:return{byteLength:2,components:4};case Ui:case $l:case Zn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Jg(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return d?new OffscreenCanvas(T,b):Fo("canvas")}function x(T,b,H){let J=1;const ot=Pt(T);if((ot.width>H||ot.height>H)&&(J=H/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(J*ot.width),At=Math.floor(J*ot.height);h===void 0&&(h=g(Q,At));const St=b?g(Q,At):h;return St.width=Q,St.height=At,St.getContext("2d").drawImage(T,0,0,Q,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+At+")."),St}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,b,H,J,ot=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=b;if(b===n.RED&&(H===n.FLOAT&&(Q=n.R32F),H===n.HALF_FLOAT&&(Q=n.R16F),H===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.R8UI),H===n.UNSIGNED_SHORT&&(Q=n.R16UI),H===n.UNSIGNED_INT&&(Q=n.R32UI),H===n.BYTE&&(Q=n.R8I),H===n.SHORT&&(Q=n.R16I),H===n.INT&&(Q=n.R32I)),b===n.RG&&(H===n.FLOAT&&(Q=n.RG32F),H===n.HALF_FLOAT&&(Q=n.RG16F),H===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RG8UI),H===n.UNSIGNED_SHORT&&(Q=n.RG16UI),H===n.UNSIGNED_INT&&(Q=n.RG32UI),H===n.BYTE&&(Q=n.RG8I),H===n.SHORT&&(Q=n.RG16I),H===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),H===n.UNSIGNED_INT&&(Q=n.RGB32UI),H===n.BYTE&&(Q=n.RGB8I),H===n.SHORT&&(Q=n.RGB16I),H===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),H===n.UNSIGNED_INT&&(Q=n.RGBA32UI),H===n.BYTE&&(Q=n.RGBA8I),H===n.SHORT&&(Q=n.RGBA16I),H===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),b===n.RGBA){const At=ot?$o:he.getTransfer(J);H===n.FLOAT&&(Q=n.RGBA32F),H===n.HALF_FLOAT&&(Q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Q=At===xe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(T,b){let H;return T?b===null||b===Ui||b===Xs?H=n.DEPTH24_STENCIL8:b===Zn?H=n.DEPTH32F_STENCIL8:b===Cr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ui||b===Xs?H=n.DEPTH_COMPONENT24:b===Zn?H=n.DEPTH_COMPONENT32F:b===Cr&&(H=n.DEPTH_COMPONENT16),H}function C(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==Hn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function E(T){const b=T.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&u.delete(b)}function A(T){const b=T.target;b.removeEventListener("dispose",A),M(b)}function R(T){const b=i.get(T);if(b.__webglInit===void 0)return;const H=T.source,J=f.get(H);if(J){const ot=J[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(T),Object.keys(J).length===0&&f.delete(H)}i.remove(T)}function y(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const H=T.source,J=f.get(H);delete J[b.__cacheKey],o.memory.textures--}function M(T){const b=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ot=0;ot<b.__webglFramebuffer[J].length;ot++)n.deleteFramebuffer(b.__webglFramebuffer[J][ot]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=T.textures;for(let J=0,ot=H.length;J<ot;J++){const Q=i.get(H[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(H[J])}i.remove(T)}let P=0;function B(){P=0}function O(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function V(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function $(T,b){const H=i.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,T,b);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function W(T,b){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Z(H,T,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function ct(T,b){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Z(H,T,b);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function q(T,b){const H=i.get(T);if(T.version>0&&H.__version!==T.version){mt(H,T,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}const Mt={[Rr]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[ll]:n.MIRRORED_REPEAT},Et={[bn]:n.NEAREST,[Of]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Dt={[Hf]:n.NEVER,[qf]:n.ALWAYS,[Vf]:n.LESS,[vh]:n.LEQUAL,[kf]:n.EQUAL,[Xf]:n.GEQUAL,[Gf]:n.GREATER,[Wf]:n.NOTEQUAL};function Zt(T,b){if(b.type===Zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Hn||b.magFilter===ea||b.magFilter===Hr||b.magFilter===Ci||b.minFilter===Hn||b.minFilter===ea||b.minFilter===Hr||b.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Mt[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Mt[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Mt[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Et[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==Hr&&b.minFilter!==Ci||b.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ue(T,b){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",E));const J=b.source;let ot=f.get(J);ot===void 0&&(ot={},f.set(J,ot));const Q=V(b);if(Q!==T.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ot[Q].usedTimes++;const At=ot[T.__cacheKey];At!==void 0&&(ot[T.__cacheKey].usedTimes--,At.usedTimes===0&&y(b)),T.__cacheKey=Q,T.__webglTexture=ot[Q].texture}return H}function Z(T,b,H){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const ot=ue(T,b),Q=b.source;e.bindTexture(J,T.__webglTexture,n.TEXTURE0+H);const At=i.get(Q);if(Q.version!==At.__version||ot===!0){e.activeTexture(n.TEXTURE0+H);const St=he.getPrimaries(he.workingColorSpace),pt=b.colorSpace===li?null:he.getPrimaries(b.colorSpace),Qt=b.colorSpace===li||St===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let tt=x(b.image,!1,s.maxTextureSize);tt=Gt(b,tt);const It=r.convert(b.format,b.colorSpace),Xt=r.convert(b.type);let _t=_(b.internalFormat,It,Xt,b.colorSpace,b.isVideoTexture);Zt(J,b);let Ft;const ae=b.mipmaps,ne=b.isVideoTexture!==!0,ve=At.__version===void 0||ot===!0,N=Q.dataReady,bt=C(b,tt);if(b.isDepthTexture)_t=v(b.format===qs,b.type),ve&&(ne?e.texStorage2D(n.TEXTURE_2D,1,_t,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,_t,tt.width,tt.height,0,It,Xt,null));else if(b.isDataTexture)if(ae.length>0){ne&&ve&&e.texStorage2D(n.TEXTURE_2D,bt,_t,ae[0].width,ae[0].height);for(let Y=0,it=ae.length;Y<it;Y++)Ft=ae[Y],ne?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ft.width,Ft.height,It,Xt,Ft.data):e.texImage2D(n.TEXTURE_2D,Y,_t,Ft.width,Ft.height,0,It,Xt,Ft.data);b.generateMipmaps=!1}else ne?(ve&&e.texStorage2D(n.TEXTURE_2D,bt,_t,tt.width,tt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,It,Xt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,_t,tt.width,tt.height,0,It,Xt,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,_t,ae[0].width,ae[0].height,tt.depth);for(let Y=0,it=ae.length;Y<it;Y++)if(Ft=ae[Y],b.format!==Vn)if(It!==null)if(ne){if(N)if(b.layerUpdates.size>0){const Rt=fu(Ft.width,Ft.height,b.format,b.type);for(const gt of b.layerUpdates){const ee=Ft.data.subarray(gt*Rt/Ft.data.BYTES_PER_ELEMENT,(gt+1)*Rt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,gt,Ft.width,Ft.height,1,It,ee)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ft.width,Ft.height,tt.depth,It,Ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,_t,Ft.width,Ft.height,tt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ft.width,Ft.height,tt.depth,It,Xt,Ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,_t,Ft.width,Ft.height,tt.depth,0,It,Xt,Ft.data)}else{ne&&ve&&e.texStorage2D(n.TEXTURE_2D,bt,_t,ae[0].width,ae[0].height);for(let Y=0,it=ae.length;Y<it;Y++)Ft=ae[Y],b.format!==Vn?It!==null?ne?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Ft.width,Ft.height,It,Ft.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,_t,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ft.width,Ft.height,It,Xt,Ft.data):e.texImage2D(n.TEXTURE_2D,Y,_t,Ft.width,Ft.height,0,It,Xt,Ft.data)}else if(b.isDataArrayTexture)if(ne){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,_t,tt.width,tt.height,tt.depth),N)if(b.layerUpdates.size>0){const Y=fu(tt.width,tt.height,b.format,b.type);for(const it of b.layerUpdates){const Rt=tt.data.subarray(it*Y/tt.data.BYTES_PER_ELEMENT,(it+1)*Y/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,tt.width,tt.height,1,It,Xt,Rt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,It,Xt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,tt.width,tt.height,tt.depth,0,It,Xt,tt.data);else if(b.isData3DTexture)ne?(ve&&e.texStorage3D(n.TEXTURE_3D,bt,_t,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,It,Xt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,_t,tt.width,tt.height,tt.depth,0,It,Xt,tt.data);else if(b.isFramebufferTexture){if(ve)if(ne)e.texStorage2D(n.TEXTURE_2D,bt,_t,tt.width,tt.height);else{let Y=tt.width,it=tt.height;for(let Rt=0;Rt<bt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,_t,Y,it,0,It,Xt,null),Y>>=1,it>>=1}}else if(ae.length>0){if(ne&&ve){const Y=Pt(ae[0]);e.texStorage2D(n.TEXTURE_2D,bt,_t,Y.width,Y.height)}for(let Y=0,it=ae.length;Y<it;Y++)Ft=ae[Y],ne?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,It,Xt,Ft):e.texImage2D(n.TEXTURE_2D,Y,_t,It,Xt,Ft);b.generateMipmaps=!1}else if(ne){if(ve){const Y=Pt(tt);e.texStorage2D(n.TEXTURE_2D,bt,_t,Y.width,Y.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Xt,tt)}else e.texImage2D(n.TEXTURE_2D,0,_t,It,Xt,tt);m(b)&&p(J),At.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function mt(T,b,H){if(b.image.length!==6)return;const J=ue(T,b),ot=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+H);const Q=i.get(ot);if(ot.version!==Q.__version||J===!0){e.activeTexture(n.TEXTURE0+H);const At=he.getPrimaries(he.workingColorSpace),St=b.colorSpace===li?null:he.getPrimaries(b.colorSpace),pt=b.colorSpace===li||At===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let it=0;it<6;it++)!Qt&&!tt?It[it]=x(b.image[it],!0,s.maxCubemapSize):It[it]=tt?b.image[it].image:b.image[it],It[it]=Gt(b,It[it]);const Xt=It[0],_t=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),ae=_(b.internalFormat,_t,Ft,b.colorSpace),ne=b.isVideoTexture!==!0,ve=Q.__version===void 0||J===!0,N=ot.dataReady;let bt=C(b,Xt);Zt(n.TEXTURE_CUBE_MAP,b);let Y;if(Qt){ne&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ae,Xt.width,Xt.height);for(let it=0;it<6;it++){Y=It[it].mipmaps;for(let Rt=0;Rt<Y.length;Rt++){const gt=Y[Rt];b.format!==Vn?_t!==null?ne?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,ae,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,gt.width,gt.height,_t,Ft,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,ae,gt.width,gt.height,0,_t,Ft,gt.data)}}}else{if(Y=b.mipmaps,ne&&ve){Y.length>0&&bt++;const it=Pt(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ae,it.width,it.height)}for(let it=0;it<6;it++)if(tt){ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It[it].width,It[it].height,_t,Ft,It[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ae,It[it].width,It[it].height,0,_t,Ft,It[it].data);for(let Rt=0;Rt<Y.length;Rt++){const ee=Y[Rt].image[it].image;ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,ee.width,ee.height,_t,Ft,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,ae,ee.width,ee.height,0,_t,Ft,ee.data)}}else{ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t,Ft,It[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ae,_t,Ft,It[it]);for(let Rt=0;Rt<Y.length;Rt++){const gt=Y[Rt];ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,_t,Ft,gt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,ae,_t,Ft,gt.image[it])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),Q.__version=ot.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Tt(T,b,H,J,ot,Q){const At=r.convert(H.format,H.colorSpace),St=r.convert(H.type),pt=_(H.internalFormat,At,St,H.colorSpace),Qt=i.get(b),tt=i.get(H);if(tt.__renderTarget=b,!Qt.__hasExternalTextures){const It=Math.max(1,b.width>>Q),Xt=Math.max(1,b.height>>Q);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,pt,It,Xt,b.depth,0,At,St,null):e.texImage2D(ot,Q,pt,It,Xt,0,At,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ot,tt.__webglTexture,0,ut(b)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ot,tt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(T,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer){const J=b.depthTexture,ot=J&&J.isDepthTexture?J.type:null,Q=v(b.stencilBuffer,ot),At=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=ut(b);nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Q,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,T)}else{const J=b.textures;for(let ot=0;ot<J.length;ot++){const Q=J[ot],At=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),pt=_(Q.internalFormat,At,St,Q.colorSpace),Qt=ut(b);H&&nt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,pt,b.width,b.height):nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const ot=J.__webglTexture,Q=ut(b);if(b.depthTexture.format===zs)nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(b.depthTexture.format===qs)nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function jt(T){const b=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",ot)};J.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=J}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Vt(b.__webglFramebuffer,T)}else if(H){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),vt(b.__webglDepthbuffer[J],T,!1);else{const ot=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),vt(b.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(T,b,H){const J=i.get(T);b!==void 0&&Tt(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&jt(T)}function te(T){const b=T.texture,H=i.get(T),J=i.get(b);T.addEventListener("dispose",A);const ot=T.textures,Q=T.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[St]=[];for(let pt=0;pt<b.mipmaps.length;pt++)H.__webglFramebuffer[St][pt]=n.createFramebuffer()}else H.__webglFramebuffer[St]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let St=0;St<b.mipmaps.length;St++)H.__webglFramebuffer[St]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(At)for(let St=0,pt=ot.length;St<pt;St++){const Qt=i.get(ot[St]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&nt(T)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let St=0;St<ot.length;St++){const pt=ot[St];H.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[St]);const Qt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),It=_(pt.internalFormat,Qt,tt,pt.colorSpace,T.isXRRenderTarget===!0),Xt=ut(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,It,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,H.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,b);for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Tt(H.__webglFramebuffer[St][pt],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,pt);else Tt(H.__webglFramebuffer[St],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let St=0,pt=ot.length;St<pt;St++){const Qt=ot[St],tt=i.get(Qt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Zt(n.TEXTURE_2D,Qt),Tt(H.__webglFramebuffer,T,Qt,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),m(Qt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(St=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,J.__webglTexture),Zt(St,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Tt(H.__webglFramebuffer[pt],T,b,n.COLOR_ATTACHMENT0,St,pt);else Tt(H.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,St,0);m(b)&&p(St),e.unbindTexture()}T.depthBuffer&&jt(T)}function rt(T){const b=T.textures;for(let H=0,J=b.length;H<J;H++){const ot=b[H];if(m(ot)){const Q=S(T),At=i.get(ot).__webglTexture;e.bindTexture(Q,At),p(Q),e.unbindTexture()}}}const dt=[],D=[];function Ot(T){if(T.samples>0){if(nt(T)===!1){const b=T.textures,H=T.width,J=T.height;let ot=n.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(T),St=b.length>1;if(St)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[pt]);const Qt=i.get(b[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,ot,n.NEAREST),l===!0&&(dt.length=0,D.length=0,dt.push(n.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(Q),D.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,At.__webglColorRenderbuffer[pt]);const Qt=i.get(b[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const b=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ut(T){return Math.min(s.maxSamples,T.samples)}function nt(T){const b=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xt(T){const b=o.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function Gt(T,b){const H=T.colorSpace,J=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==os&&H!==li&&(he.getTransfer(H)===xe?(J!==Vn||ot!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function Pt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ct,this.setTextureCube=q,this.rebindTextures=Yt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=nt}function Qg(n,t){function e(i,s=li){let r;const o=he.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===Zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ah)return n.BYTE;if(i===lh)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Ni)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===hh)return n.RGB;if(i===Vn)return n.RGBA;if(i===fh)return n.LUMINANCE;if(i===dh)return n.LUMINANCE_ALPHA;if(i===zs)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===qo)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===ph)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===Ro||i===Co||i===Po||i===Do)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cl||i===ul||i===hl||i===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===pl||i===ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dl||i===pl)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ml)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gl||i===vl||i===xl||i===_l||i===Ml||i===yl||i===Sl||i===bl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===El)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lo||i===Pl||i===Dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Lo)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===Ll||i===Il||i===Ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class tv extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ee extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ev={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`;class sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ke({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rv extends Zs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const x=new sv,m=e.getContextAttributes();let p=null,S=null;const _=[],v=[],C=new ft;let E=null;const A=new xn;A.viewport=new fe;const R=new xn;R.viewport=new fe;const y=[A,R],M=new tv;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=_[Z];return mt===void 0&&(mt=new Pa,_[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=_[Z];return mt===void 0&&(mt=new Pa,_[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=_[Z];return mt===void 0&&(mt=new Pa,_[Z]=mt),mt.getHandSpace()};function O(Z){const mt=v.indexOf(Z.inputSource);if(mt===-1)return;const Tt=_[mt];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,c||o),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<_.length;Z++){const mt=v[Z];mt!==null&&(v[Z]=null,_[Z].disconnect(mt))}P=null,B=null,x.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,ue.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new gi(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let mt=null,Tt=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?qs:zs,Tt=m.stencil?Xs:Ui);const Vt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new gi(f.textureWidth,f.textureHeight,{format:Vn,type:mi,depthTexture:new ic(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(Z){for(let mt=0;mt<Z.removed.length;mt++){const Tt=Z.removed[mt],vt=v.indexOf(Tt);vt>=0&&(v[vt]=null,_[vt].disconnect(Tt))}for(let mt=0;mt<Z.added.length;mt++){const Tt=Z.added[mt];let vt=v.indexOf(Tt);if(vt===-1){for(let jt=0;jt<_.length;jt++)if(jt>=v.length){v.push(Tt),vt=jt;break}else if(v[jt]===null){v[jt]=Tt,vt=jt;break}if(vt===-1)break}const Vt=_[vt];Vt&&Vt.connect(Tt)}}const W=new L,ct=new L;function q(Z,mt,Tt){W.setFromMatrixPosition(mt.matrixWorld),ct.setFromMatrixPosition(Tt.matrixWorld);const vt=W.distanceTo(ct),Vt=mt.projectionMatrix.elements,jt=Tt.projectionMatrix.elements,Yt=Vt[14]/(Vt[10]-1),te=Vt[14]/(Vt[10]+1),rt=(Vt[9]+1)/Vt[5],dt=(Vt[9]-1)/Vt[5],D=(Vt[8]-1)/Vt[0],Ot=(jt[8]+1)/jt[0],ut=Yt*D,nt=Yt*Ot,xt=vt/(-D+Ot),Gt=xt*-D;if(mt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Gt),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Vt[10]===-1)Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Pt=Yt+xt,T=te+xt,b=ut-Gt,H=nt+(vt-Gt),J=rt*te/T*Pt,ot=dt*te/T*Pt;Z.projectionMatrix.makePerspective(b,H,J,ot,Pt,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let mt=Z.near,Tt=Z.far;x.texture!==null&&(x.depthNear>0&&(mt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),M.near=R.near=A.near=mt,M.far=R.far=A.far=Tt,(P!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,B=M.far),A.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;const vt=Z.parent,Vt=M.cameras;Mt(M,vt);for(let jt=0;jt<Vt.length;jt++)Mt(Vt[jt],vt);Vt.length===2?q(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),Et(Z,M,vt)};function Et(Z,mt,Tt){Tt===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Dt=null;function Zt(Z,mt){if(u=mt.getViewerPose(c||o),g=mt,u!==null){const Tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let vt=!1;Tt.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let jt=0;jt<Tt.length;jt++){const Yt=Tt[jt];let te=null;if(d!==null)te=d.getViewport(Yt);else{const dt=h.getViewSubImage(f,Yt);te=dt.viewport,jt===0&&(t.setRenderTargetTextures(S,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(S))}let rt=y[jt];rt===void 0&&(rt=new xn,rt.layers.enable(jt),rt.viewport=new fe,y[jt]=rt),rt.matrix.fromArray(Yt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Yt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(te.x,te.y,te.width,te.height),jt===0&&(M.matrix.copy(rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(rt)}const Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){const jt=h.getDepthInformation(Tt[0]);jt&&jt.isValid&&jt.texture&&x.init(t,jt,s.renderState)}}for(let Tt=0;Tt<_.length;Tt++){const vt=v[Tt],Vt=_[Tt];vt!==null&&Vt!==void 0&&Vt.update(vt,mt,c||o)}Dt&&Dt(Z,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}const ue=new Rh;ue.setAnimationLoop(Zt),this.setAnimationLoop=function(Z){Dt=Z},this.dispose=function(){}}}const Gi=new kn,ov=new re;function av(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Th(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),_=S.envMap,v=S.envMapRotation;_&&(m.envMap.value=_,Gi.copy(v),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(Gi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){const v=_.program;i.uniformBlockBinding(S,v)}function c(S,_){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(S,C);const E=t.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){const _=h();S.__bindingPointIndex=_;const v=n.createBuffer(),C=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=s[S.id],v=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,A=v.length;E<A;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,M=R.length;y<M;y++){const P=R[y];if(d(P,E,y,C)===!0){const B=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let $=0;$<O.length;$++){const W=O[$],ct=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,B+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,_,v,C){const E=S.value,A=_+"_"+v;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{const R=C[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(S){const _=S.uniforms;let v=0;const C=16;for(let A=0,R=_.length;A<R;A++){const y=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,P=y.length;M<P;M++){const B=y[M],O=Array.isArray(B.value)?B.value:[B.value];for(let V=0,$=O.length;V<$;V++){const W=O[V],ct=x(W),q=v%C,Mt=q%ct.boundary,Et=q+Mt;v+=Mt,Et!==0&&C-Et<ct.storage&&(v+=C-Et),B.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=ct.storage}}}const E=v%C;return E>0&&(v+=C-E),S.__size=v,S.__cache={},this}function x(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class cv{constructor(t={}){const{canvas:e=$f(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=di,this.toneMappingExposure=1;const v=this;let C=!1,E=0,A=0,R=null,y=-1,M=null;const P=new fe,B=new fe;let O=null;const V=new Lt(0);let $=0,W=e.width,ct=e.height,q=1,Mt=null,Et=null;const Dt=new fe(0,0,W,ct),Zt=new fe(0,0,W,ct);let ue=!1;const Z=new ec;let mt=!1,Tt=!1;const vt=new re,Vt=new re,jt=new L,Yt=new fe,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function dt(){return R===null?q:1}let D=i;function Ot(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){const U="webgl2";if(D=Ot(U,w),D===null)throw Ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,nt,xt,Gt,Pt,T,b,H,J,ot,Q,At,St,pt,Qt,tt,It,Xt,_t,Ft,ae,ne,ve,N;function bt(){ut=new mm(D),ut.init(),ne=new Qg(D,ut),nt=new cm(D,ut,t,ne),xt=new Kg(D,ut),nt.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Gt=new xm(D),Pt=new Fg,T=new Jg(D,ut,xt,Pt,nt,ne,Gt),b=new hm(v),H=new pm(v),J=new Ed(D),ve=new am(D,J),ot=new gm(D,J,Gt,ve),Q=new Mm(D,ot,J,Gt),_t=new _m(D,nt,T),tt=new um(Pt),At=new Ng(v,b,H,ut,nt,ve,tt),St=new av(v,Pt),pt=new zg,Qt=new Wg(ut),Xt=new om(v,b,H,xt,Q,d,l),It=new $g(v,Q,nt),N=new lv(D,Gt,nt,xt),Ft=new lm(D,ut,Gt),ae=new vm(D,ut,Gt),Gt.programs=At.programs,v.capabilities=nt,v.extensions=ut,v.properties=Pt,v.renderLists=pt,v.shadowMap=It,v.state=xt,v.info=Gt}bt();const Y=new rv(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(W,ct,!1))},this.getSize=function(w){return w.set(W,ct)},this.setSize=function(w,U,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,ct=U,e.width=Math.floor(w*q),e.height=Math.floor(U*q),G===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*q,ct*q).floor()},this.setDrawingBufferSize=function(w,U,G){W=w,ct=U,q=G,e.width=Math.floor(w*G),e.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Dt)},this.setViewport=function(w,U,G,k){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,U,G,k),xt.viewport(P.copy(Dt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Zt)},this.setScissor=function(w,U,G,k){w.isVector4?Zt.set(w.x,w.y,w.z,w.w):Zt.set(w,U,G,k),xt.scissor(B.copy(Zt).multiplyScalar(q).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){xt.setScissorTest(ue=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){Et=w},this.getClearColor=function(w){return w.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(w=!0,U=!0,G=!0){let k=0;if(w){let F=!1;if(R!==null){const at=R.texture.format;F=at===Ql||at===Jl||at===jl}if(F){const at=R.texture.type,Ct=at===mi||at===Ui||at===Cr||at===Xs||at===Zl||at===Kl,Bt=Xt.getClearColor(),Ht=Xt.getClearAlpha(),Jt=Bt.r,I=Bt.g,z=Bt.b;Ct?(g[0]=Jt,g[1]=I,g[2]=z,g[3]=Ht,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Jt,x[1]=I,x[2]=z,x[3]=Ht,D.clearBufferiv(D.COLOR,0,x))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),pt.dispose(),Qt.dispose(),Pt.dispose(),b.dispose(),H.dispose(),Q.dispose(),ve.dispose(),N.dispose(),At.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",tr),Y.removeEventListener("sessionend",ls),Wn.stop()};function it(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Gt.autoReset,U=It.enabled,G=It.autoUpdate,k=It.needsUpdate,F=It.type;bt(),Gt.autoReset=w,It.enabled=U,It.autoUpdate=G,It.needsUpdate=k,It.type=F}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ee(w){const U=w.target;U.removeEventListener("dispose",ee),_e(U)}function _e(w){ye(w),Pt.remove(w)}function ye(w){const U=Pt.get(w).programs;U!==void 0&&(U.forEach(function(G){At.releaseProgram(G)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,k,F,at){U===null&&(U=te);const Ct=F.isMesh&&F.matrixWorld.determinant()<0,Bt=Xn(w,U,G,k,F);xt.setMaterial(k,Ct);let Ht=G.index,Jt=1;if(k.wireframe===!0){if(Ht=ot.getWireframeAttribute(G),Ht===void 0)return;Jt=2}const I=G.drawRange,z=G.attributes.position;let K=I.start*Jt,et=(I.start+I.count)*Jt;at!==null&&(K=Math.max(K,at.start*Jt),et=Math.min(et,(at.start+at.count)*Jt)),Ht!==null?(K=Math.max(K,0),et=Math.min(et,Ht.count)):z!=null&&(K=Math.max(K,0),et=Math.min(et,z.count));const lt=et-K;if(lt<0||lt===1/0)return;ve.setup(F,k,Bt,G,Ht);let st,X=Ft;if(Ht!==null&&(st=J.get(Ht),X=ae,X.setIndex(st)),F.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*dt()),X.setMode(D.LINES)):X.setMode(D.TRIANGLES);else if(F.isLine){let j=k.linewidth;j===void 0&&(j=1),xt.setLineWidth(j*dt()),F.isLineSegments?X.setMode(D.LINES):F.isLineLoop?X.setMode(D.LINE_LOOP):X.setMode(D.LINE_STRIP)}else F.isPoints?X.setMode(D.POINTS):F.isSprite&&X.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)X.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))X.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const j=F._multiDrawStarts,Ut=F._multiDrawCounts,yt=F._multiDrawCount,kt=Ht?J.get(Ht).bytesPerElement:1,qt=Pt.get(k).currentProgram.getUniforms();for(let ht=0;ht<yt;ht++)qt.setValue(D,"_gl_DrawID",ht),X.render(j[ht]/kt,Ut[ht])}else if(F.isInstancedMesh)X.renderInstances(K,lt,F.count);else if(G.isInstancedBufferGeometry){const j=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ut=Math.min(G.instanceCount,j);X.renderInstances(K,lt,Ut)}else X.render(K,lt)};function le(w,U,G){w.transparent===!0&&w.side===Mn&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,Qn(w,U,G),w.side=Ii,w.needsUpdate=!0,Qn(w,U,G),w.side=Mn):Qn(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),p=Qt.get(G),p.init(U),_.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let Ct=0;Ct<at.length;Ct++){const Bt=at[Ct];le(Bt,G,F),k.add(Bt)}else le(at,G,F),k.add(at)}),_.pop(),p=null,k},this.compileAsync=function(w,U,G=null){const k=this.compile(w,U,G);return new Promise(F=>{function at(){if(k.forEach(function(Ct){Pt.get(Ct).currentProgram.isReady()&&k.delete(Ct)}),k.size===0){F(w);return}setTimeout(at,10)}ut.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ln=null;function dn(w){ln&&ln(w)}function tr(){Wn.stop()}function ls(){Wn.start()}const Wn=new Rh;Wn.setAnimationLoop(dn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){ln=w,Y.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},Y.addEventListener("sessionstart",tr),Y.addEventListener("sessionend",ls),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,R),p=Qt.get(w,_.length),p.init(U),_.push(p),Vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Vt),Tt=this.localClippingEnabled,mt=tt.init(this.clippingPlanes,Tt),m=pt.get(w,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&er(at,U,-1/0,v.sortObjects)}er(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Mt,Et),rt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,rt&&Xt.addToRenderList(m,w),this.info.render.frame++,mt===!0&&tt.beginShadows();const G=p.state.shadowsArray;It.render(G,w,U),mt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const at=U.cameras;if(F.length>0)for(let Ct=0,Bt=at.length;Ct<Bt;Ct++){const Ht=at[Ct];zr(k,F,w,Ht)}rt&&Xt.render(w);for(let Ct=0,Bt=at.length;Ct<Bt;Ct++){const Ht=at[Ct];cs(m,w,Ht,Ht.viewport)}}else F.length>0&&zr(k,F,w,U),rt&&Xt.render(w),cs(m,w,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,U),ve.resetDefaultState(),y=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],mt===!0&&tt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function er(w,U,G,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){k&&Yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Vt);const Ct=Q.update(w),Bt=w.material;Bt.visible&&m.push(w,Ct,Bt,G,Yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Ct=Q.update(w),Bt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Yt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Yt.copy(Ct.boundingSphere.center)),Yt.applyMatrix4(w.matrixWorld).applyMatrix4(Vt)),Array.isArray(Bt)){const Ht=Ct.groups;for(let Jt=0,I=Ht.length;Jt<I;Jt++){const z=Ht[Jt],K=Bt[z.materialIndex];K&&K.visible&&m.push(w,Ct,K,G,Yt.z,z)}}else Bt.visible&&m.push(w,Ct,Bt,G,Yt.z,null)}}const at=w.children;for(let Ct=0,Bt=at.length;Ct<Bt;Ct++)er(at[Ct],U,G,k)}function cs(w,U,G,k){const F=w.opaque,at=w.transmissive,Ct=w.transparent;p.setupLightsView(G),mt===!0&&tt.setGlobalState(v.clippingPlanes,G),k&&xt.viewport(P.copy(k)),F.length>0&&Oi(F,U,G),at.length>0&&Oi(at,U,G),Ct.length>0&&Oi(Ct,U,G),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function zr(w,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new gi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Ni:mi,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const at=p.state.transmissionRenderTarget[k.id],Ct=k.viewport||P;at.setSize(Ct.z,Ct.w);const Bt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(V),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),rt&&Xt.render(G);const Ht=v.toneMapping;v.toneMapping=di;const Jt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),mt===!0&&tt.setGlobalState(v.clippingPlanes,k),Oi(w,G,k),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),ut.has("WEBGL_multisampled_render_to_texture")===!1){let I=!1;for(let z=0,K=U.length;z<K;z++){const et=U[z],lt=et.object,st=et.geometry,X=et.material,j=et.group;if(X.side===Mn&&lt.layers.test(k.layers)){const Ut=X.side;X.side=sn,X.needsUpdate=!0,nr(lt,G,k,st,X,j),X.side=Ut,X.needsUpdate=!0,I=!0}}I===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}v.setRenderTarget(Bt),v.setClearColor(V,$),Jt!==void 0&&(k.viewport=Jt),v.toneMapping=Ht}function Oi(w,U,G){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,at=w.length;F<at;F++){const Ct=w[F],Bt=Ct.object,Ht=Ct.geometry,Jt=k===null?Ct.material:k,I=Ct.group;Bt.layers.test(G.layers)&&nr(Bt,U,G,Ht,Jt,I)}}function nr(w,U,G,k,F,at){w.onBeforeRender(v,U,G,k,F,at),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,U,G,k,w,at),F.transparent===!0&&F.side===Mn&&F.forceSinglePass===!1?(F.side=sn,F.needsUpdate=!0,v.renderBufferDirect(G,U,k,F,w,at),F.side=Ii,F.needsUpdate=!0,v.renderBufferDirect(G,U,k,F,w,at),F.side=Mn):v.renderBufferDirect(G,U,k,F,w,at),w.onAfterRender(v,U,G,k,F,at)}function Qn(w,U,G){U.isScene!==!0&&(U=te);const k=Pt.get(w),F=p.state.lights,at=p.state.shadowsArray,Ct=F.state.version,Bt=At.getParameters(w,F.state,at,U,G),Ht=At.getProgramCacheKey(Bt);let Jt=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",ee),Jt=new Map,k.programs=Jt);let I=Jt.get(Ht);if(I!==void 0){if(k.currentProgram===I&&k.lightsStateVersion===Ct)return ir(w,Bt),I}else Bt.uniforms=At.getUniforms(w),w.onBeforeCompile(Bt,v),I=At.acquireProgram(Bt,Ht),Jt.set(Ht,I),k.uniforms=Bt.uniforms;const z=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(z.clippingPlanes=tt.uniform),ir(w,Bt),k.needsLights=Br(w),k.lightsStateVersion=Ct,k.needsLights&&(z.ambientLightColor.value=F.state.ambient,z.lightProbe.value=F.state.probe,z.directionalLights.value=F.state.directional,z.directionalLightShadows.value=F.state.directionalShadow,z.spotLights.value=F.state.spot,z.spotLightShadows.value=F.state.spotShadow,z.rectAreaLights.value=F.state.rectArea,z.ltc_1.value=F.state.rectAreaLTC1,z.ltc_2.value=F.state.rectAreaLTC2,z.pointLights.value=F.state.point,z.pointLightShadows.value=F.state.pointShadow,z.hemisphereLights.value=F.state.hemi,z.directionalShadowMap.value=F.state.directionalShadowMap,z.directionalShadowMatrix.value=F.state.directionalShadowMatrix,z.spotShadowMap.value=F.state.spotShadowMap,z.spotLightMatrix.value=F.state.spotLightMatrix,z.spotLightMap.value=F.state.spotLightMap,z.pointShadowMap.value=F.state.pointShadowMap,z.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=I,k.uniformsList=null,I}function us(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Io.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ir(w,U){const G=Pt.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Xn(w,U,G,k,F){U.isScene!==!0&&(U=te),T.resetTextureUnits();const at=U.fog,Ct=k.isMeshStandardMaterial?U.environment:null,Bt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:os,Ht=(k.isMeshStandardMaterial?H:b).get(k.envMap||Ct),Jt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,I=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),z=!!G.morphAttributes.position,K=!!G.morphAttributes.normal,et=!!G.morphAttributes.color;let lt=di;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=v.toneMapping);const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,X=st!==void 0?st.length:0,j=Pt.get(k),Ut=p.state.lights;if(mt===!0&&(Tt===!0||w!==M)){const Ie=w===M&&k.id===y;tt.setState(k,w,Ie)}let yt=!1;k.version===j.__version?(j.needsLights&&j.lightsStateVersion!==Ut.state.version||j.outputColorSpace!==Bt||F.isBatchedMesh&&j.batching===!1||!F.isBatchedMesh&&j.batching===!0||F.isBatchedMesh&&j.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&j.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&j.instancing===!1||!F.isInstancedMesh&&j.instancing===!0||F.isSkinnedMesh&&j.skinning===!1||!F.isSkinnedMesh&&j.skinning===!0||F.isInstancedMesh&&j.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&j.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&j.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&j.instancingMorph===!1&&F.morphTexture!==null||j.envMap!==Ht||k.fog===!0&&j.fog!==at||j.numClippingPlanes!==void 0&&(j.numClippingPlanes!==tt.numPlanes||j.numIntersection!==tt.numIntersection)||j.vertexAlphas!==Jt||j.vertexTangents!==I||j.morphTargets!==z||j.morphNormals!==K||j.morphColors!==et||j.toneMapping!==lt||j.morphTargetsCount!==X)&&(yt=!0):(yt=!0,j.__version=k.version);let kt=j.currentProgram;yt===!0&&(kt=Qn(k,U,F));let qt=!1,ht=!1,Wt=!1;const zt=kt.getUniforms(),de=j.uniforms;if(xt.useProgram(kt.program)&&(qt=!0,ht=!0,Wt=!0),k.id!==y&&(y=k.id,ht=!0),qt||M!==w){xt.buffers.depth.getReversed()?(vt.copy(w.projectionMatrix),Kf(vt),jf(vt),zt.setValue(D,"projectionMatrix",vt)):zt.setValue(D,"projectionMatrix",w.projectionMatrix),zt.setValue(D,"viewMatrix",w.matrixWorldInverse);const He=zt.map.cameraPosition;He!==void 0&&He.setValue(D,jt.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&zt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&zt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ht=!0,Wt=!0)}if(F.isSkinnedMesh){zt.setOptional(D,F,"bindMatrix"),zt.setOptional(D,F,"bindMatrixInverse");const Ie=F.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),zt.setValue(D,"boneTexture",Ie.boneTexture,T))}F.isBatchedMesh&&(zt.setOptional(D,F,"batchingTexture"),zt.setValue(D,"batchingTexture",F._matricesTexture,T),zt.setOptional(D,F,"batchingIdTexture"),zt.setValue(D,"batchingIdTexture",F._indirectTexture,T),zt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&zt.setValue(D,"batchingColorTexture",F._colorsTexture,T));const me=G.morphAttributes;if((me.position!==void 0||me.normal!==void 0||me.color!==void 0)&&_t.update(F,G,kt),(ht||j.receiveShadow!==F.receiveShadow)&&(j.receiveShadow=F.receiveShadow,zt.setValue(D,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(de.envMap.value=Ht,de.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(de.envMapIntensity.value=U.environmentIntensity),ht&&(zt.setValue(D,"toneMappingExposure",v.toneMappingExposure),j.needsLights&&ta(de,Wt),at&&k.fog===!0&&St.refreshFogUniforms(de,at),St.refreshMaterialUniforms(de,k,q,ct,p.state.transmissionRenderTarget[w.id]),Io.upload(D,us(j),de,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Io.upload(D,us(j),de,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&zt.setValue(D,"center",F.center),zt.setValue(D,"modelViewMatrix",F.modelViewMatrix),zt.setValue(D,"normalMatrix",F.normalMatrix),zt.setValue(D,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ie=k.uniformsGroups;for(let He=0,En=Ie.length;He<En;He++){const ti=Ie[He];N.update(ti,kt),N.bind(ti,kt)}}return kt}function ta(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Br(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,G){Pt.get(w.texture).__webglTexture=U,Pt.get(w.depthTexture).__webglTexture=G;const k=Pt.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const G=Pt.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){R=w,E=U,A=G;let k=!0,F=null,at=!1,Ct=!1;if(w){const Ht=Pt.get(w);if(Ht.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(Ht.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ht.__hasExternalTextures)T.rebindTextures(w,Pt.get(w.texture).__webglTexture,Pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const z=w.depthTexture;if(Ht.__boundDepthTexture!==z){if(z!==null&&Pt.has(z)&&(w.width!==z.image.width||w.height!==z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Jt=w.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ct=!0);const I=Pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(I[U])?F=I[U][G]:F=I[U],at=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?F=Pt.get(w).__webglMultisampledFramebuffer:Array.isArray(I)?F=I[G]:F=I,P.copy(w.viewport),B.copy(w.scissor),O=w.scissorTest}else P.copy(Dt).multiplyScalar(q).floor(),B.copy(Zt).multiplyScalar(q).floor(),O=ue;if(xt.bindFramebuffer(D.FRAMEBUFFER,F)&&k&&xt.drawBuffers(w,F),xt.viewport(P),xt.scissor(B),xt.setScissorTest(O),at){const Ht=Pt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ht.__webglTexture,G)}else if(Ct){const Ht=Pt.get(w.texture),Jt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,G||0,Jt)}y=-1},this.readRenderTargetPixels=function(w,U,G,k,F,at,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Bt=Bt[Ct]),Bt){xt.bindFramebuffer(D.FRAMEBUFFER,Bt);try{const Ht=w.texture,Jt=Ht.format,I=Ht.type;if(!nt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(I)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&G>=0&&G<=w.height-F&&D.readPixels(U,G,k,F,ne.convert(Jt),ne.convert(I),at)}finally{const Ht=R!==null?Pt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,k,F,at,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Bt=Bt[Ct]),Bt){const Ht=w.texture,Jt=Ht.format,I=Ht.type;if(!nt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(I))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-k&&G>=0&&G<=w.height-F){xt.bindFramebuffer(D.FRAMEBUFFER,Bt);const z=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,z),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(U,G,k,F,ne.convert(Jt),ne.convert(I),0);const K=R!==null?Pt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,K);const et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zf(D,et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,z),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(z),D.deleteSync(et),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,G=0){w.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-G),F=Math.floor(w.image.width*k),at=Math.floor(w.image.height*k),Ct=U!==null?U.x:0,Bt=U!==null?U.y:0;T.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Ct,Bt,F,at),xt.unbindTexture()},this.copyTextureToTexture=function(w,U,G=null,k=null,F=0){w.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let at,Ct,Bt,Ht,Jt,I,z,K,et;const lt=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(at=G.max.x-G.min.x,Ct=G.max.y-G.min.y,Bt=G.isBox3?G.max.z-G.min.z:1,Ht=G.min.x,Jt=G.min.y,I=G.isBox3?G.min.z:0):(at=lt.width,Ct=lt.height,Bt=lt.depth||1,Ht=0,Jt=0,I=0),k!==null?(z=k.x,K=k.y,et=k.z):(z=0,K=0,et=0);const st=ne.convert(U.format),X=ne.convert(U.type);let j;U.isData3DTexture?(T.setTexture3D(U,0),j=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),j=D.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),j=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kt=D.getParameter(D.UNPACK_SKIP_PIXELS),qt=D.getParameter(D.UNPACK_SKIP_ROWS),ht=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,I);const Wt=w.isDataArrayTexture||w.isData3DTexture,zt=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const de=Pt.get(w),me=Pt.get(U),Ie=Pt.get(de.__renderTarget),He=Pt.get(me.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Ie.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let En=0;En<Bt;En++)Wt&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(w).__webglTexture,F,I+En),w.isDepthTexture?(zt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(U).__webglTexture,F,et+En),D.blitFramebuffer(Ht,Jt,at,Ct,z,K,at,Ct,D.DEPTH_BUFFER_BIT,D.NEAREST)):zt?D.copyTexSubImage3D(j,F,z,K,et+En,Ht,Jt,at,Ct):D.copyTexSubImage2D(j,F,z,K,et+En,Ht,Jt,at,Ct);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else zt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(j,F,z,K,et,at,Ct,Bt,st,X,lt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(j,F,z,K,et,at,Ct,Bt,st,lt.data):D.texSubImage3D(j,F,z,K,et,at,Ct,Bt,st,X,lt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,z,K,at,Ct,st,X,lt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,z,K,lt.width,lt.height,st,lt.data):D.texSubImage2D(D.TEXTURE_2D,F,z,K,at,Ct,st,X,lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ht),F===0&&U.generateMipmaps&&D.generateMipmap(j),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G=null,k=null,F=0){return w.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,G,k,F)},this.initRenderTarget=function(w){Pt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,xt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class du extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rc extends Qe{constructor(t=null,e=1,i=1,s,r,o,a,l,c=bn,u=bn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends Fe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new re,pu=new re,ao=[],mu=new as,uv=new re,ur=new Kt,hr=new js;class Jo extends Kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),mu.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(mu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),hr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),pu.multiplyMatrices(i,Es),ur.matrixWorld=pu,ur.raycast(t,ao);for(let o=0,a=ao.length;o<a;o++){const l=ao[o];l.instanceId=r,l.object=this,e.push(l)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rc(new Float32Array(s*this.count),s,this.count,qo,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hv extends Js{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gu=new re,Bl=new yh,lo=new js,co=new L;class Oo extends Ze{constructor(t=new Ae,e=new hv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;gu.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(gu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=c.getX(g);co.fromBufferAttribute(h,m),vu(co,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)co.fromBufferAttribute(h,g),vu(co,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vu(n,t,e,i,s,r,o){const a=Bl.distanceSqToPoint(n);if(a<e){const l=new L;Bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fv extends Qe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],r=[],o=[],a=new L,l=new re;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ve(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class oc extends Jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dv extends oc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ac(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const uo=new L,Da=new ac,La=new ac,Ia=new ac;class pv extends Jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),c=uo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Da.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),La.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Ia.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),La.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ia.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Da.calc(l),La.calc(l),Ia.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function mv(n,t){const e=1-n;return e*e*t}function gv(n,t){return 2*(1-n)*n*t}function vv(n,t){return n*n*t}function wr(n,t,e,i){return mv(n,t)+gv(n,e)+vv(n,i)}function xv(n,t){const e=1-n;return e*e*e*t}function _v(n,t){const e=1-n;return 3*e*e*n*t}function Mv(n,t){return 3*(1-n)*n*n*t}function yv(n,t){return n*n*n*t}function Er(n,t,e,i,s){return xv(n,t)+_v(n,e)+Mv(n,i)+yv(n,s)}class Uh extends Jn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sv extends Jn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y),Er(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nh extends Jn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bv extends Jn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends Jn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wv extends Jn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y),wr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(xu(a,l.x,c.x,u.x,h.x),xu(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Hl=Object.freeze({__proto__:null,ArcCurve:dv,CatmullRomCurve3:pv,CubicBezierCurve:Uh,CubicBezierCurve3:Sv,EllipseCurve:oc,LineCurve:Nh,LineCurve3:bv,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:wv,SplineCurve:Oh});class Ev extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Hl[s.type]().fromJSON(s))}return this}}class _u extends Ev{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Nh(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Fh(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Uh(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Oh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new oc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fr extends Ae{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new L,f=new ft,d=new L,g=new L,x=new L;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let S=0;S<=e;S++){const _=i+S*u*s,v=Math.sin(_),C=Math.cos(_);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*v,h.y=t[E].y,h.z=t[E].x*C,o.push(h.x,h.y,h.z),f.x=S/e,f.y=E/(t.length-1),a.push(f.x,f.y);const A=l[3*E+0]*v,R=l[3*E+1],y=l[3*E+0]*C;c.push(A,R,y)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){const v=_+S*t.length,C=v,E=v+t.length,A=v+t.length+1,R=v+1;r.push(C,E,R),r.push(A,R,E)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.points,t.segments,t.phiStart,t.phiLength)}}class lc extends Ae{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,u=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class un extends Ae{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=i/2;let p=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function S(){const v=new L,C=new L;let E=0;const A=(e-t)/i;for(let R=0;R<=r;R++){const y=[],M=R/r,P=M*(e-t)+t;for(let B=0;B<=s;B++){const O=B/s,V=O*l+a,$=Math.sin(V),W=Math.cos(V);C.x=P*$,C.y=-M*i+m,C.z=P*W,h.push(C.x,C.y,C.z),v.set($,A,W).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-M),y.push(g++)}x.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){const M=x[y][R],P=x[y+1][R],B=x[y+1][R+1],O=x[y][R+1];(t>0||y!==0)&&(u.push(M,P,O),E+=3),(e>0||y!==r-1)&&(u.push(P,B,O),E+=3)}c.addGroup(p,E,0),p+=E}function _(v){const C=g,E=new ft,A=new L;let R=0;const y=v===!0?t:e,M=v===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let B=0;B<=s;B++){const V=B/s*l+a,$=Math.cos(V),W=Math.sin(V);A.x=y*W,A.y=m*M,A.z=y*$,h.push(A.x,A.y,A.z),f.push(0,M,0),E.x=$*.5+.5,E.y=W*.5*M+.5,d.push(E.x,E.y),g++}for(let B=0;B<s;B++){const O=C+B,V=P+B;v===!0?u.push(V,V+1,O):u.push(V+1,V,O),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends un{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cc extends Ae{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new L,v=new L,C=new L;for(let E=0;E<e.length;E+=3)d(e[E+0],_),d(e[E+1],v),d(e[E+2],C),l(_,v,C,S)}function l(S,_,v,C){const E=C+1,A=[];for(let R=0;R<=E;R++){A[R]=[];const y=S.clone().lerp(v,R/E),M=_.clone().lerp(v,R/E),P=E-R;for(let B=0;B<=P;B++)B===0&&R===E?A[R][B]=y:A[R][B]=y.clone().lerp(M,B/P)}for(let R=0;R<E;R++)for(let y=0;y<2*(E-R)-1;y++){const M=Math.floor(y/2);y%2===0?(f(A[R][M+1]),f(A[R+1][M]),f(A[R][M])):(f(A[R][M+1]),f(A[R+1][M+1]),f(A[R+1][M]))}}function c(S){const _=new L;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(S),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){const S=new L;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];const v=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const _=o[S+0],v=o[S+2],C=o[S+4],E=Math.max(_,v,C),A=Math.min(_,v,C);E>.9&&A<.1&&(_<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,_){const v=S*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const S=new L,_=new L,v=new L,C=new L,E=new ft,A=new ft,R=new ft;for(let y=0,M=0;y<r.length;y+=9,M+=6){S.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),E.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),C.copy(S).add(_).add(v).divideScalar(3);const P=m(C);x(E,M+0,S,P),x(A,M+2,_,P),x(R,M+4,v,P)}}function x(S,_,v,C){C<0&&S.x===1&&(o[_]=S.x-1),v.x===0&&v.z===0&&(o[_]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.vertices,t.indices,t.radius,t.details)}}class zh extends _u{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new _u().fromJSON(s))}return this}}const Tv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Bh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=Dv(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Pr(r,o,e,a,l,d,0),o}};function Bh(n,t,e,i,s){let r,o;if(s===kv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Mu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Mu(r,n[r],n[r+1],o);return o&&Qo(o,o.next)&&(Lr(o),o=o.next),o}function ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Qo(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Pr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Fv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Rv(n,i,s,r):Av(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Lr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Cv(ss(n),t,e),Pr(n,t,e,i,s,r,2)):o===2&&Pv(n,t,e,i,s,r):Pr(ss(n),t,e,i,s,r,1);break}}}function Av(n){const t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Ds(s,a,r,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Vl(d,g,t,e,i),S=Vl(x,m,t,e,i);let _=n.prevZ,v=n.nextZ;for(;_&&_.z>=p&&v&&v.z<=S;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ds(a,u,l,h,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ds(a,u,l,h,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ds(a,u,l,h,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ds(a,u,l,h,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Cv(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Qo(s,r)&&Hh(s,i,i.next,r)&&Dr(s,r)&&Dr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Lr(i),Lr(i.next),i=n=r),i=i.next}while(i!==n);return ss(i)}function Pv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bv(o,a)){let l=Vh(o,a);o=ss(o,o.next),l=ss(l,l.next),Pr(o,t,e,i,s,r,0),Pr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Dv(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Bh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(zv(c));for(s.sort(Lv),r=0;r<s.length;r++)e=Iv(s[r],e);return e}function Lv(n,t){return n.x-t.x}function Iv(n,t){const e=Uv(n,t);if(!e)return t;const i=Vh(e,n);return ss(i,i.next),ss(e,e.next)}function Uv(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ds(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Dr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Nv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Nv(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function Fv(n,t,e,i){let s=n;do s.z===0&&(s.z=Vl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ov(s)}function Ov(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Vl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function zv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ds(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Bv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Hv(n,t)&&(Dr(n,t)&&Dr(t,n)&&Vv(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||Qo(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Qo(n,t){return n.x===t.x&&n.y===t.y}function Hh(n,t,e,i){const s=fo(Pe(n,t,e)),r=fo(Pe(n,t,i)),o=fo(Pe(e,i,n)),a=fo(Pe(e,i,t));return!!(s!==r&&o!==a||s===0&&ho(n,e,t)||r===0&&ho(n,i,t)||o===0&&ho(e,n,i)||a===0&&ho(e,t,i))}function ho(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function fo(n){return n>0?1:n<0?-1:0}function Hv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Hh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Dr(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function Vv(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Vh(n,t){const e=new kl(n.i,n.x,n.y),i=new kl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Mu(n,t,e,i){const s=new kl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Tr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Tr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];yu(t),Su(i,t);let o=t.length;e.forEach(yu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Su(i,e[l]);const a=Tv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Su(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class uc extends Ae{constructor(t=new zh([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Gv;let _,v=!1,C,E,A,R;p&&(_=p.getSpacedPoints(u),v=!0,f=!1,C=p.computeFrenetFrames(u,!1),E=new L,A=new L,R=new L),f||(m=0,d=0,g=0,x=0);const y=a.extractPoints(c);let M=y.shape;const P=y.holes;if(!Tr.isClockWise(M)){M=M.reverse();for(let rt=0,dt=P.length;rt<dt;rt++){const D=P[rt];Tr.isClockWise(D)&&(P[rt]=D.reverse())}}const O=Tr.triangulateShape(M,P),V=M;for(let rt=0,dt=P.length;rt<dt;rt++){const D=P[rt];M=M.concat(D)}function $(rt,dt,D){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(dt,D)}const W=M.length,ct=O.length;function q(rt,dt,D){let Ot,ut,nt;const xt=rt.x-dt.x,Gt=rt.y-dt.y,Pt=D.x-rt.x,T=D.y-rt.y,b=xt*xt+Gt*Gt,H=xt*T-Gt*Pt;if(Math.abs(H)>Number.EPSILON){const J=Math.sqrt(b),ot=Math.sqrt(Pt*Pt+T*T),Q=dt.x-Gt/J,At=dt.y+xt/J,St=D.x-T/ot,pt=D.y+Pt/ot,Qt=((St-Q)*T-(pt-At)*Pt)/(xt*T-Gt*Pt);Ot=Q+xt*Qt-rt.x,ut=At+Gt*Qt-rt.y;const tt=Ot*Ot+ut*ut;if(tt<=2)return new ft(Ot,ut);nt=Math.sqrt(tt/2)}else{let J=!1;xt>Number.EPSILON?Pt>Number.EPSILON&&(J=!0):xt<-Number.EPSILON?Pt<-Number.EPSILON&&(J=!0):Math.sign(Gt)===Math.sign(T)&&(J=!0),J?(Ot=-Gt,ut=xt,nt=Math.sqrt(b)):(Ot=xt,ut=Gt,nt=Math.sqrt(b/2))}return new ft(Ot/nt,ut/nt)}const Mt=[];for(let rt=0,dt=V.length,D=dt-1,Ot=rt+1;rt<dt;rt++,D++,Ot++)D===dt&&(D=0),Ot===dt&&(Ot=0),Mt[rt]=q(V[rt],V[D],V[Ot]);const Et=[];let Dt,Zt=Mt.concat();for(let rt=0,dt=P.length;rt<dt;rt++){const D=P[rt];Dt=[];for(let Ot=0,ut=D.length,nt=ut-1,xt=Ot+1;Ot<ut;Ot++,nt++,xt++)nt===ut&&(nt=0),xt===ut&&(xt=0),Dt[Ot]=q(D[Ot],D[nt],D[xt]);Et.push(Dt),Zt=Zt.concat(Dt)}for(let rt=0;rt<m;rt++){const dt=rt/m,D=d*Math.cos(dt*Math.PI/2),Ot=g*Math.sin(dt*Math.PI/2)+x;for(let ut=0,nt=V.length;ut<nt;ut++){const xt=$(V[ut],Mt[ut],Ot);vt(xt.x,xt.y,-D)}for(let ut=0,nt=P.length;ut<nt;ut++){const xt=P[ut];Dt=Et[ut];for(let Gt=0,Pt=xt.length;Gt<Pt;Gt++){const T=$(xt[Gt],Dt[Gt],Ot);vt(T.x,T.y,-D)}}}const ue=g+x;for(let rt=0;rt<W;rt++){const dt=f?$(M[rt],Zt[rt],ue):M[rt];v?(A.copy(C.normals[0]).multiplyScalar(dt.x),E.copy(C.binormals[0]).multiplyScalar(dt.y),R.copy(_[0]).add(A).add(E),vt(R.x,R.y,R.z)):vt(dt.x,dt.y,0)}for(let rt=1;rt<=u;rt++)for(let dt=0;dt<W;dt++){const D=f?$(M[dt],Zt[dt],ue):M[dt];v?(A.copy(C.normals[rt]).multiplyScalar(D.x),E.copy(C.binormals[rt]).multiplyScalar(D.y),R.copy(_[rt]).add(A).add(E),vt(R.x,R.y,R.z)):vt(D.x,D.y,h/u*rt)}for(let rt=m-1;rt>=0;rt--){const dt=rt/m,D=d*Math.cos(dt*Math.PI/2),Ot=g*Math.sin(dt*Math.PI/2)+x;for(let ut=0,nt=V.length;ut<nt;ut++){const xt=$(V[ut],Mt[ut],Ot);vt(xt.x,xt.y,h+D)}for(let ut=0,nt=P.length;ut<nt;ut++){const xt=P[ut];Dt=Et[ut];for(let Gt=0,Pt=xt.length;Gt<Pt;Gt++){const T=$(xt[Gt],Dt[Gt],Ot);v?vt(T.x,T.y+_[u-1].y,_[u-1].x+D):vt(T.x,T.y,h+D)}}}Z(),mt();function Z(){const rt=s.length/3;if(f){let dt=0,D=W*dt;for(let Ot=0;Ot<ct;Ot++){const ut=O[Ot];Vt(ut[2]+D,ut[1]+D,ut[0]+D)}dt=u+m*2,D=W*dt;for(let Ot=0;Ot<ct;Ot++){const ut=O[Ot];Vt(ut[0]+D,ut[1]+D,ut[2]+D)}}else{for(let dt=0;dt<ct;dt++){const D=O[dt];Vt(D[2],D[1],D[0])}for(let dt=0;dt<ct;dt++){const D=O[dt];Vt(D[0]+W*u,D[1]+W*u,D[2]+W*u)}}i.addGroup(rt,s.length/3-rt,0)}function mt(){const rt=s.length/3;let dt=0;Tt(V,dt),dt+=V.length;for(let D=0,Ot=P.length;D<Ot;D++){const ut=P[D];Tt(ut,dt),dt+=ut.length}i.addGroup(rt,s.length/3-rt,1)}function Tt(rt,dt){let D=rt.length;for(;--D>=0;){const Ot=D;let ut=D-1;ut<0&&(ut=rt.length-1);for(let nt=0,xt=u+m*2;nt<xt;nt++){const Gt=W*nt,Pt=W*(nt+1),T=dt+Ot+Gt,b=dt+ut+Gt,H=dt+ut+Pt,J=dt+Ot+Pt;jt(T,b,H,J)}}}function vt(rt,dt,D){l.push(rt),l.push(dt),l.push(D)}function Vt(rt,dt,D){Yt(rt),Yt(dt),Yt(D);const Ot=s.length/3,ut=S.generateTopUV(i,s,Ot-3,Ot-2,Ot-1);te(ut[0]),te(ut[1]),te(ut[2])}function jt(rt,dt,D,Ot){Yt(rt),Yt(dt),Yt(Ot),Yt(dt),Yt(D),Yt(Ot);const ut=s.length/3,nt=S.generateSideWallUV(i,s,ut-6,ut-3,ut-2,ut-1);te(nt[0]),te(nt[1]),te(nt[3]),te(nt[1]),te(nt[2]),te(nt[3])}function Yt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function te(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Wv(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Hl[s.type]().fromJSON(s)),new uc(i,t.options)}}const Gv={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-h),new ft(f,1-g),new ft(x,1-p)]:[new ft(a,1-l),new ft(u,1-h),new ft(d,1-g),new ft(m,1-p)]}};function Wv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hs extends cc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hs(t.radius,t.detail)}}class je extends Ae{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const S=[],_=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const E=C/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+v,1-_),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const _=u[p][S+1],v=u[p][S],C=u[p+1][S],E=u[p+1][S+1];(p!==0||o>0)&&d.push(_,v,E),(p!==i-1||l<Math.PI)&&d.push(v,C,E)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ir extends Ae{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ue extends Js{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xv extends Ue{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const po={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qv{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Yv=new qv;class kh{constructor(t){this.manager=t!==void 0?t:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}kh.DEFAULT_MATERIAL_NAME="__DEFAULT";class hc extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $v extends hc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ua=new re,bu=new L,wu=new L;class Gh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Eu=new re,fr=new L,Na=new L;class Zv extends Gh{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),i.position.copy(fr),Na.copy(i.position),Na.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Na),i.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Eu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}}class Kv extends hc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jv extends Gh{constructor(){super(new Ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jv extends hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new jv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qv extends kh{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=po.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return po.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),po.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});po.add(t,l),r.manager.itemStart(t)}}class tx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Tu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Tu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);const be=100,on=new Uint8Array(512);(()=>{let n=1337;const t=()=>(n=n*1664525+1013904223>>>0)/4294967296,e=Array.from({length:256},(i,s)=>s);for(let i=255;i>0;i--){const s=t()*(i+1)|0;[e[i],e[s]]=[e[s],e[i]]}for(let i=0;i<512;i++)on[i]=e[i&255]})();const Fa=n=>n*n*n*(n*(n*6-15)+10),Ei=(n,t,e,i)=>{const s=n&8?e:t,r=n&4?(n&12)===12?t:i:e;return(n&1?-s:s)+(n&2?-r:r)};function Wh(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=Math.floor(e);n-=i,t-=s,e-=r;const o=i&255,a=s&255,l=r&255,c=Fa(n),u=Fa(t),h=Fa(e),f=on[o]+a,d=on[f]+l,g=on[f+1]+l,x=on[o+1]+a,m=on[x]+l,p=on[x+1]+l,S=(_,v,C)=>_+(v-_)*C;return S(S(S(Ei(on[d],n,t,e),Ei(on[m],n-1,t,e),c),S(Ei(on[g],n,t-1,e),Ei(on[p],n-1,t-1,e),c),u),S(S(Ei(on[d+1],n,t,e-1),Ei(on[m+1],n-1,t,e-1),c),S(Ei(on[g+1],n,t-1,e-1),Ei(on[p+1],n-1,t-1,e-1),c),u),h)*.5}function Ln(n,t,e,i=5,s=2.03,r=.5){let o=1,a=1,l=0,c=0;for(let u=0;u<i;u++)l+=o*Wh(n*a,t*a,e*a),c+=o,o*=r,a*=s;return l/c}function fc(n,t,e,i=5){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++){const c=1-Math.abs(Wh(n*r,t*r,e*r)*2);o+=s*c*c,a+=s,s*=.5,r*=2.1}return o/a}const Nt=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)},$t=(n,t,e)=>n+(t-n)*e,Ce=(n,t,e)=>Math.min(e,Math.max(t,n));function ui(n){let t=n>>>0;const e=()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,s)=>i+(s-i)*e(),e.pick=i=>i[e()*i.length|0],e}const zo=[];function Gl(n,t){const e=n*Math.PI/180,i=t*Math.PI/180;return new L(Math.cos(e)*Math.sin(i),Math.sin(e),Math.cos(e)*Math.cos(i))}function ex({id:n,lat:t,lon:e,radius:i=15,blend:s=12,profile:r,heading:o=0}){const a=Gl(t,e);let l=new L(0,1,0).cross(a).normalize(),c=a.clone().cross(l).normalize();if(o){const h=new Gn().setFromAxisAngle(a,o);l.applyQuaternion(h),c.applyQuaternion(h)}const u={id:n,n:a,e:l,f:c.clone().negate(),radius:i,blend:s,profile:r,patchR:i+s*.6};return u.matrix=new re().makeBasis(u.e,u.n,u.f).setPosition(a.clone().multiplyScalar(be)),zo.push(u),u}const nx=()=>zo;function ix(n,t,e){const i=n*.2059+t*.1392+e*.9686,s=Ln(n*1.25+3.1,t*1.25-1.7,e*1.25+.4,5)+.05+Nt(.35,.9,i)*.24,r=Nt(-.03,.2,s),o=fc(n*3.1+7,t*3.1,e*3.1-2,5),a=Nt(.02,.26,Ln(n*2.2-5,t*2.2+2,e*2.2,3)+s*.6),l=Ln(n*9,t*9,e*9,4)*1.6,c=Ln(n*40,t*40,e*40,3)*.35;return-2.2+r*(2.9+l+c*r+o*a*11)+(1-r)*(s*3)}const mo=new L;function Xh(n,t,e,i,s){const r=t*n.n.x+e*n.n.y+i*n.n.z;if(r<=.2)return null;const o=be/r;return s.x=(t*n.e.x+e*n.e.y+i*n.e.z)*o,s.z=(t*n.f.x+e*n.f.y+i*n.f.z)*o,s}const dr={x:0,z:0};function Ur(n,t,e){let i=ix(n,t,e);for(let s=0;s<zo.length;s++){const r=zo[s];if(!Xh(r,n,t,e,dr))continue;const o=Math.hypot(dr.x,dr.z);if(o>r.radius+r.blend)continue;const a=1-Nt(r.radius,r.radius+r.blend,o);i=$t(i,r.profile(dr.x,dr.z,o),a)}return i}function Yn(n,t,e){return mo.copy(n.n).multiplyScalar(be).addScaledVector(n.e,t).addScaledVector(n.f,e).normalize(),Ur(mo.x,mo.y,mo.z)}function Ls(n,t,e,i=new L){const s=1/Math.sqrt(n*n+be*be+t*t),r=be+e;return i.set(n*s*r,be*s*r-be,t*s*r)}const Au=new L,Oa=new Gn,Ru=new Gn,Cu=new L,sx=new L,Pu=new L(0,1,0);function Bo(n,t,e,i=0,s=1,r=0,o=new re,a){const l=a??Yn(n,t,e);return Ls(t,e,l+r,Cu),Au.set(t,be,e).normalize(),Oa.setFromUnitVectors(Pu,Au),Ru.setFromAxisAngle(Pu,i),Oa.multiply(Ru),o.compose(Cu,Oa,sx.set(s,s,s))}const rx=["rock","ground","dirt","plaster","wood","stone","blocks","slate","thatch","cobble","metal"],vn={},Ne={low:!1},ji={uEmN:{value:[]}},Is={uRipC:{value:null},uRip:{value:null}};async function ox(n,t){const e=new Qv;e.setOptions({imageOrientation:"flipY"});const i=[];for(const r of rx)for(const o of["diff","nor","arm"])i.push([r,o]);let s=0;await Promise.all(i.map(([r,o])=>new Promise(a=>{e.load(`${n}assets/tex/${r}_${o}.webp`,l=>{const c=new Qe(l);c.wrapS=c.wrapT=Rr,c.colorSpace=o==="diff"?gn:li,c.anisotropy=Ne.low?2:8,c.generateMipmaps=!0,c.minFilter=Ci,c.needsUpdate=!0,(vn[r]||(vn[r]={}))[o]=c,t?.(++s/i.length),a()},void 0,()=>{const l=new rc(new Uint8Array(o==="nor"?[128,128,255,255]:[128,128,128,255]),1,1);l.needsUpdate=!0,(vn[r]||(vn[r]={}))[o]=l,t?.(++s/i.length),a()})})))}const qh=`
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
`,ax=`
varying vec3 vTriPos; varying vec3 vTriN; varying mat3 vNM;
#ifdef TRI_MIX
attribute vec3 aMix; varying vec3 vMix;
uniform vec3 uRipC; uniform vec4 uRip;   // centre (unit vector); x = radius, y = height, z = width, w = swell at the centre
#endif
uniform vec4 uEmN[7];   // how far each place has risen (also read by the forming land in morph.js)
`,lx=`
vTriPos = position; vTriN = objectNormal;
#ifdef TRI_MIX
  { vec3 ripW = normalize((modelMatrix * vec4(transformed, 1.0)).xyz); float ripD = acos(clamp(dot(ripW, uRipC), -1.0, 1.0)) * 100.0;
    float ripH = uRip.y * exp(-pow((ripD - uRip.x) / uRip.z, 2.0)) + uRip.w * exp(-pow(ripD / 9.0, 2.0));
    transformed += (ripW * mat3(modelMatrix)) * ripH; }
#else
${qh}
#endif
#ifdef USE_INSTANCING
  vNM = normalMatrix * mat3(instanceMatrix);
#else
  vNM = normalMatrix;
#endif
#ifdef TRI_MIX
  vMix = aMix;
#endif
`,cx=`
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
`,ux=`
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
`;function $e(n,{scale:t=1,tint:e=16777215,norm:i=1,metalness:s=0,roughness:r=1,mix:o=null,color:a=16777215,...l}={}){const c=new Ue({color:a,metalness:s,roughness:r,...l}),u={tD0:{value:vn[n].diff},tN0:{value:vn[n].nor},tA0:{value:vn[n].arm},uScale:{value:t},uTint:{value:new Lt(e)},uNorm:{value:i}};return u.uEmN=ji.uEmN,o&&Object.assign(u,{tD1:{value:vn[o.rock].diff},tN1:{value:vn[o.rock].nor},tD2:{value:vn[o.dirt].diff},tN2:{value:vn[o.dirt].nor},uRipC:Is.uRipC,uRip:Is.uRip,uTint1:{value:new Lt(o.tintRock)},uTint2:{value:new Lt(o.tintDirt)},uFar:{value:0},uFarScale:{value:o.farScale??.03}}),c.userData.U=u,c.defines={...o?{TRI_MIX:1}:{},...Ne.low?{TRI_LOW:1}:{}},o&&(c.vertexColors=!0),c.onBeforeCompile=h=>{Object.assign(h.uniforms,u),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+ax).replace("#include <begin_vertex>",`#include <begin_vertex>
`+lx),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
`+cx).replace("#include <map_fragment>",ux).replace("#include <roughnessmap_fragment>","float roughnessFactor = clamp(roughness * gRough, 0.04, 1.0);").replace("#include <normal_fragment_maps>","normal = normalize(vNM * gTriN); if (!gl_FrontFacing) normal = -normal;")},c.customProgramCacheKey=()=>`tri-${n}-${o?"mix":"one"}-${Ne.low}`,c}let za=null;function hx(){if(za)return za;const n=new jo({depthPacking:Yo});return n.onBeforeCompile=t=>{t.uniforms.uEmN=ji.uEmN,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uEmN[7];`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+qh)},n.customProgramCacheKey=()=>"emdepth",za=n}let go=null;function Yh(){if(go)return go;const n=(t,e)=>new Ue({color:1182212,emissive:t,emissiveIntensity:e,roughness:.6});return go={plaster:$e("plaster",{scale:.9,tint:12168084}),plasterDark:$e("plaster",{scale:.9,tint:8221800}),wood:$e("wood",{scale:1.6,tint:7034436}),woodDark:$e("wood",{scale:1.6,tint:3813160}),stone:$e("stone",{scale:.7,tint:10131087}),stoneDark:$e("stone",{scale:.7,tint:6118494}),blocks:$e("blocks",{scale:.55,tint:9276038}),blocksDark:$e("blocks",{scale:.55,tint:5065292}),slate:$e("slate",{scale:1.3,tint:7304320}),thatch:$e("thatch",{scale:1.1,tint:9075288}),cobble:$e("cobble",{scale:.8,tint:9143932}),iron:$e("metal",{scale:1.5,tint:3815478,metalness:.7,roughness:.9}),window:n(16754250,2.6),windowDim:n(16747066,.9),windowRed:n(16722458,2.4),windowCold:n(10470655,1.4),holy:n(16767370,1.5),blood:n(16718354,2.4),dark:n(9063935,2.4),black:new Ue({color:328965,roughness:1}),cloth:new Ue({color:4855058,roughness:.95,side:Mn}),bone:new Ue({color:12168596,roughness:.8})},go}function $h(){return $e("ground",{scale:.42,tint:10725508,norm:1.3,mix:{rock:"rock",dirt:"dirt",tintRock:10987692,tintDirt:9271910,farScale:.045}})}function $n(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ae;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Du(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);const g=Du(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Du(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Fe(o,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Le=n=>{const t=n.index?n.toNonIndexed():n;for(const e of Object.keys(t.attributes))e!=="position"&&e!=="normal"&&t.deleteAttribute(e);return t},Ti=new re,vo=new re,xo=new kn,_o=new Gn,Mo=new L,yo=new L(1,1,1),Lu=Le(new Fi(1,1,1)),Ba=new Map,fx=(n,t,e)=>{const i=`${n.toFixed(3)}_${t.toFixed(3)}_${e}`;return Ba.has(i)||Ba.set(i,Le(new un(n,t,1,e))),Ba.get(i)};function dx(){const n=new zh;n.moveTo(-.5,0),n.lineTo(.5,0),n.lineTo(0,1),n.lineTo(-.5,0);const t=new uc(n,{depth:1,bevelEnabled:!1});return t.translate(0,0,-.5),Le(t)}const px=dx();class mx{constructor(t,e=1){this.a=t,this.parts=new Map,this.r=ui(e),this.glows=[],this.smokes=[],this.lights=[],this.agents=[],this.inst=new Map,this.base=new re}at(t,e,i=0,s=1,r=0){return Bo(this.a,t,e,i,s,r,this.base),this.cx=t,this.cz=e,this.cyaw=i,this.cs=s,this}push(t,e,i){const s=e.clone();s.applyMatrix4(i);let r=this.parts.get(t);r||this.parts.set(t,r=[]),r.push(s)}box(t,e,i,s,r=0,o=0,a=0,l=0,c=0,u=0){return Ti.compose(Mo.set(r,o+(c||u?0:i/2),a),_o.setFromEuler(xo.set(c,l,u,"YXZ")),yo.set(e,i,s)),this.push(t,Lu,vo.multiplyMatrices(this.base,Ti)),this}cyl(t,e,i,s,r=0,o=0,a=0,l=10,c=0,u=0){const h=i>0?e/i:0;return Ti.compose(Mo.set(r,o+(c||u?0:s/2),a),_o.setFromEuler(xo.set(c,0,u)),yo.set(i||e,s,i||e)),this.push(t,fx(i>0?h:1,i>0?1:0,l),vo.multiplyMatrices(this.base,Ti)),this}gable(t,e,i,s,r=0,o=0,a=0,l=0){return Ti.compose(Mo.set(r,o,a),_o.setFromEuler(xo.set(0,l,0)),yo.set(e,i,s)),this.push(t,px,vo.multiplyMatrices(this.base,Ti)),this}pt(t,e,i){return new L(t,e,i).applyMatrix4(this.base)}glow(t,e,i,s=16752704,r=1,o=0){return this.glows.push({p:this.pt(t,e,i),c:new Lt(s),size:r*(this.cs||1),kind:o}),this}smoke(t,e,i,s=1,r=.5){return this.smokes.push({p:this.pt(t,e,i),up:new L(this.cx,be,this.cz).normalize(),size:s,dark:r}),this}mist(t,e,i=1){return this.at(t,e,0),this.smokes.push({p:this.pt(0,.3*i,0),up:new L(t,be,e).normalize(),size:i,dark:2}),this}light(t,e,i,s=16748608,r=6,o=7){return this.lights.push({p:this.pt(t,e,i),color:s,intensity:r,dist:o}),this}roof(t,e,i,s,r,o=.14,a=.07){const l=e/2+o,c=Math.hypot(l,s*(l/(e/2))),u=Math.atan2(s,e/2);for(const h of[1,-1])Ti.compose(Mo.set(h*l/2,r+s*(l/(e/2))/2-o*s/(e/2),0),_o.setFromEuler(xo.set(0,0,-h*u)),yo.set(c+.04,a,i+o*2)),this.push(t,Lu,vo.multiplyMatrices(this.base,Ti));return this}house(t,e,i,s={}){const r=this.r,o=s.m||{},a=s.w??r.range(1.5,2.1),l=s.d??r.range(1.9,2.8),c=s.storeys??(r()<.35?2:1),u=.78,h=u*c+.1,f=s.rh??a*r.range(.5,.72),d=o.wall||"plaster",g=o.frame||"woodDark",x=o.roof||"thatch",m=o.plinth||"stone",p=s.lit??.6,S=s.stoneWalls;this.at(t,e,i,s.scale??1),this.box(m,a+.1,.5,l+.1,0,-.34,0),this.box(S?m:d,a,h,l,0,.14,0);const _=.14,v=.075;if(!S){for(const y of[-1,1])for(const M of[-1,1])this.box(g,v,h,v,y*(a/2),_,M*(l/2));for(let y=0;y<=c;y++){const M=_+y*u+(y===c?.04:0);for(const P of[-1,1])this.box(g,a+v,v,v,0,M,P*(l/2));for(const P of[-1,1])this.box(g,v,v,l+v,P*(a/2),M,0)}const A=Math.round(l/.55),R=Math.round(a/.55);for(let y=1;y<A;y++)for(const M of[-1,1])this.box(g,v*.7,h,v*.8,M*(a/2+.005),_,-l/2+y*l/A);for(let y=1;y<R;y++)for(const M of[-1,1])this.box(g,v*.8,h,v*.7,-a/2+y*a/R,_,M*(l/2+.005));for(let y=0;y<c;y++)for(const M of[-1,1])for(const P of[-1,1])this.box(g,v*.6,.62,v*.7,M*(a/2+.008),_+y*u+u/2+.03,P*(l/2-.26),0,P*.72,0)}const C=_+h;if(this.gable(S?m:d,a,f,l,0,C,0),!S)for(const A of[-1,1]){this.box(g,v*.8,f*.92,v*.7,0,C,A*(l/2+.005));for(const R of[-1,1])this.box(g,v*.7,Math.hypot(a/2,f)*.98,v*.7,R*a/4,C+f/2,A*(l/2+.01),0,0,R*Math.atan2(a/2,f))}this.roof(x,a,l,f,C,x==="thatch"?.2:.14,x==="thatch"?.13:.06),this.box(g,.09,.09,l+.42,0,C+f+0,0),this.box("woodDark",.3,.5,.05,s.doorX??0,_,l/2+.02),this.box(g,.38,.05,.07,s.doorX??0,_+.5,l/2+.02);const E=(A,R,y,M)=>{const P=r()<p,B=P?"window":"black";M?(this.box(B,.03,.2,.17,A,R,y),this.box(g,.05,.03,.22,A,R-.03,y),this.box(g,.045,.2,.025,A,R,y)):(this.box(B,.17,.2,.03,A,R,y),this.box(g,.22,.03,.05,A,R-.03,y),this.box(g,.025,.2,.045,A,R,y)),P&&this.glow(A*1.06,R+.1,y*1.06,16751164,.55,1)};for(let A=0;A<c;A++){const R=_+A*u+.32;for(const y of[-1,1])for(let M=0;M<Math.max(1,Math.round(l/1.1));M++)E(y*(a/2+.012),R,(M+.5)*l/Math.max(1,Math.round(l/1.1))-l/2+r.range(-.1,.1),!0);E(A===0?(s.doorX??0)+.48*(a>1.5?1:0):0,R,l/2+.012,!1),E(0,R,-l/2-.012,!1)}if(f>.75&&E(0,C+.12,l/2+.012,!1),s.chimney??r()<.75){const A=a*.22*(r()<.5?1:-1),R=r.range(-l*.3,l*.3),y=f+.42;this.box("stone",.24,y+.5,.24,A,C-.5,R),this.box("stoneDark",.3,.06,.3,A,C+y,R),(s.smoke??r()<.8)&&this.smoke(A,C+y+.1,R,1,.5)}return(s.shed??r()<.3)&&(this.box("woodDark",a*.7,.55,.7,0,_-.1,-l/2-.35),this.box(x,a*.8,.05,.9,0,_+.5,-l/2-.38,0,-.35,0)),{w:a,d:l,h:C+f}}tower(t,e,i={}){const s=i.r??.7,r=i.h??3.2,o=i.mat||"stone",a=i.seg??12;if(this.at(t,e,i.yaw??0,i.scale??1),this.cyl(o,s*.94,s*1.08,r+.6,0,-.6,0,a),this.cyl(o,s*1.12,s*1,.16,0,r-.04,0,a),i.roof)this.cyl(i.roofMat||"slate",.02,s*1.25,i.roof,0,r+.3,0,a),this.cyl(o,s*.98,s*.98,.34,0,r+0,0,a);else for(let c=0;c<a;c+=1){const u=c/a*Math.PI*2;c%2===0&&this.box(o,s*.42,.26,.12,Math.cos(u)*s*1.02,r+.1,Math.sin(u)*s*1.02,-u+Math.PI/2)}const l=Math.max(1,Math.floor(r/1.1));for(let c=0;c<l;c++){const u=(i.yaw??0)+c*2.1+(i.winA??.6),h=.9+c*1.05,f=this.r()<(i.lit??.5);this.box(f?i.winMat||"window":"black",.1,.26,.06,Math.cos(u)*s*.99,h,Math.sin(u)*s*.99,-u+Math.PI/2),f&&this.glow(Math.cos(u)*s*1.05,h+.13,Math.sin(u)*s*1.05,i.glow??16751164,.5,1)}return this}wall(t,e={}){const i=e.h??1.5,s=e.th??.34,r=e.mat||"stone";for(let o=0;o<t.length-1;o++){const[a,l]=t[o],[c,u]=t[o+1],h=Math.hypot(c-a,u-l),f=Math.max(1,Math.round(h/1.1)),d=Math.atan2(-(u-l),c-a);for(let g=0;g<f;g++){const x=(g+.5)/f,m=h/f;if(this.at($t(a,c,x),$t(l,u,x),d),e.ruin&&this.r()<e.ruin){this.box(r,m+.02,i*this.r.range(.2,.7)+.6,s,0,-.6,0);continue}if(this.box(r,m+.02,i+.6,s,0,-.6,0),this.box(r,m+.02,.08,s+.14,0,i,0),!e.plain)for(let p=0;p<3;p++)this.box(r,m/5,.2,.1,(p-1)*m/3,i+.08,s/2+.02)}}return this}palisade(t,e=.75){for(let i=0;i<t.length-1;i++){const[s,r]=t[i],[o,a]=t[i+1],l=Math.hypot(o-s,a-r),c=Math.round(l/.13);for(let u=0;u<c;u++){const h=u/c;this.at($t(s,o,h)+this.r.range(-.02,.02),$t(r,a,h)+this.r.range(-.02,.02),this.r()*3);const f=e*this.r.range(.85,1.12);this.cyl("woodDark",.03,.055,f+.2,0,-.2,0,5),this.cyl("woodDark",0,.03,.1,0,f,0,5)}}return this}fence(t){for(let e=0;e<t.length-1;e++){const[i,s]=t[e],[r,o]=t[e+1],a=Math.hypot(r-i,o-s),l=Math.max(1,Math.round(a/.5)),c=Math.atan2(-(o-s),r-i);for(let u=0;u<=l;u++){const h=u/l;this.at($t(i,r,h),$t(s,o,h),c),this.box("woodDark",.04,.34,.04,0,-.06,0,0,0,this.r.range(-.12,.12)),u<l&&(this.at($t(i,r,h+.5/l),$t(s,o,h+.5/l),c),this.box("wood",a/l,.03,.02,0,.12,0),this.box("wood",a/l,.03,.02,0,.22,0,0,0,this.r.range(-.05,.05)))}}return this}gallows(t,e,i){this.at(t,e,i),this.box("wood",1.5,.08,1.1,0,.42,0);for(const s of[-1,1])for(const r of[-1,1])this.box("woodDark",.08,.6,.08,s*.68,-.14,r*.48);for(let s=0;s<4;s++)this.box("wood",.3,.035,.5,.92+s*.13,.36-s*.1,.2);for(const s of[-1,1])this.box("woodDark",.09,1.25,.09,s*.6,.5,-.35);this.box("woodDark",1.5,.09,.09,0,1.72,-.35);for(const s of[-1,1])this.box("woodDark",.05,.42,.05,s*.47,1.56,-.35,0,0,s*.8);for(const s of[-.26,.22])this.box("black",.012,.34,.012,s,1.38,-.35),this.cyl("black",.045,.045,.012,s,1.3,-.35,8,Math.PI/2);return this}cart(t,e,i){this.at(t,e,i),this.box("wood",.75,.05,.42,0,.2,0);for(const s of[-1,1])this.box("woodDark",.75,.14,.03,0,.24,s*.21);this.box("woodDark",.03,.14,.42,-.37,.24,0);for(const s of[-1,1])this.cyl("woodDark",.15,.15,.04,-.05,.16,s*.26,12,Math.PI/2),this.box("wood",.5,.03,.03,.62,.2,s*.15,0,0,-.18);return this.box("wood",.2,.16,.2,-.15,.25,0),this.cyl("woodDark",.09,.09,.2,.15,.25,.05,8),this}well(t,e){this.at(t,e,this.r()*3),this.cyl("stone",.26,.28,.3,0,-.04,0,12),this.cyl("black",.2,.2,.02,0,.255,0,12);for(const i of[-1,1])this.box("woodDark",.05,.6,.05,i*.24,.2,0);return this.box("woodDark",.6,.04,.04,0,.72,0),this.roof("wood",.5,.42,.18,.78,.06,.03),this}stall(t,e,i,s="cloth"){this.at(t,e,i);for(const r of[-1,1])for(const o of[-1,1])this.box("woodDark",.04,.62,.04,r*.36,0,o*.24);this.box("wood",.8,.04,.5,0,.26,0),this.box(s,.92,.02,.66,0,.64,0,0,.22,0);for(let r=0;r<3;r++)this.box("wood",.12,.1,.12,-.24+r*.22,.3,.05);return this}torch(t,e,i=.55,s=16747056,r=!1){return this.at(t,e,0),this.cyl("woodDark",.018,.024,i,0,0,0,5),this.cyl("iron",.04,.025,.05,0,i,0,6),this.glow(0,i+.09,0,s,.75,2),r&&this.light(0,i+.2,0,s,5,6),this}crate(t,e,i=.2){return this.at(t,e,this.r()*3),this.box("wood",i,i,i,0,0,0),this}barrel(t,e){return this.at(t,e,0),this.cyl("wood",.085,.085,.24,0,0,0,8),this.cyl("iron",.09,.09,.02,0,.17,0,8),this}grave(t,e,i){this.at(t,e,i+this.r.range(-.2,.2));const s=this.r.range(.22,.42);return this.r()<.35?(this.box("blocksDark",.05,s+.2,.04,0,-.1,0,0,0,this.r.range(-.15,.15)),this.box("blocksDark",.2,.05,.04,0,s*.7,0)):this.box("blocksDark",.2,s+.1,.06,0,-.1,0,0,this.r.range(-.12,.12),this.r.range(-.1,.1)),this}column(t,e,i=1.6,s=!1,r="blocks",o=.13){this.at(t,e,this.r()*3),this.box(r,o*3,.12,o*3,0,-.03,0);const a=s?i*this.r.range(.25,.7):i;return this.cyl(r,o*.9,o,a,0,.08,0,10),s||this.box(r,o*3,.1,o*3,0,a+.08,0),this}arch(t,e,i,s=1.2,r=1.5,o="blocks",a=.3,l=0){this.at(t,e,i,1,l);for(const u of[-1,1])this.box(o,a,r+.4,a,u*s/2,-.4,0);const c=7;for(let u=0;u<c;u++){const h=Math.PI*(u+.5)/c;this.box(o,a*.9,s*1.65/c,a,Math.cos(h)*s/2,r+Math.sin(h)*s/2,0,0,0,h-Math.PI/2+Math.PI/2*0)}return this}bridge(t,e,i,s=2.4,r=.7){this.at(t,e,i,1,0);const o=9;for(let a=0;a<o;a++){const l=(a+.5)/o-.5,c=Math.cos(l*Math.PI)*.38;this.box("stone",s/o+.03,.9,r,l*s,c-.82,0);for(const u of[-1,1])this.box("stoneDark",s/o+.03,.14,.07,l*s,c+.06,u*(r/2-.03))}return this}banner(t,e,i,s=1.3,r="cloth"){return this.at(t,e,i),this.cyl("woodDark",.02,.028,s,0,0,0,5),this.box(r,.3,.55,.012,.17,s-.6,0),this}relief(t,e,i,s){this.at(t,e,i);const r={holy:16768922,blood:16722460,dark:10116351}[s];this.box("blocksDark",.5,.74,.07,0,0,0,0,-.14,0),this.box("iron",.56,.05,.1,0,0,0);for(let o=0;o<3;o++)for(let a=0;a<4;a++)this.r()<.8&&this.box(s,this.r.range(.03,.09),.025,.02,-.15+o*.15,.13+a*.14,.045-(.13+a*.14)*.14,0,-.14,this.r.range(-.6,.6));return this.glow(0,.4,.12,r,.8,3),this.light(0,.6,.3,r,6,5.5),this}instance(t,e,i,s=0,r=1,o=0,a){let l=this.inst.get(t);return l||this.inst.set(t,l=[]),Iu[t]&&this.blocked(e,i,Iu[t]*r)?this:(l.push({m:Bo(this.a,e,i,s,r,o,new re),color:a}),this)}blocked(t,e,i){for(const s of this.sight||[]){const r=s[2]-s[0],o=s[3]-s[1],a=Ce(((t-s[0])*r+(e-s[1])*o)/(r*r+o*o+1e-6),0,1);if(Math.hypot(t-s[0]-r*a,e-s[1]-o*a)<$t(1.5,.35,a)*i)return!0}return!1}agent(t){return this.agents.push(t),this}bird(t){return(this.birds||(this.birds=[])).push(t),this}build(){const t=new Ee,e=Yh();for(const[i,s]of this.parts){const r=new Kt($n(s),e[i]),o=!!e[i].emissive&&e[i].emissiveIntensity>.5;r.castShadow=!o,r.receiveShadow=!o,t.add(r);for(const a of s)a.dispose()}for(const[i,s]of this.inst){const r=gx[i](),o=new Jo(r.geo,r.mat,s.length);s.forEach((a,l)=>{o.setMatrixAt(l,a.m),r.tint&&o.setColorAt(l,a.color||Zh.setHSL(r.tint[0]+this.r.range(-.03,.03),r.tint[1]*this.r.range(.6,1.1),r.tint[2]*this.r.range(.6,1.25)))}),o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,t.add(o)}return t.userData.fx=vx(this.glows,this.smokes),t.userData.fx&&t.add(t.userData.fx.group),t.userData.lights=this.lights,t.userData.agents=Ax(this.a,this.agents),t.userData.agents&&t.add(t.userData.agents.mesh),t.userData.birds=Rx(this.a,this.birds||[]),t.userData.birds&&t.add(t.userData.birds.mesh),t}}const Zh=new Lt,Iu={pine:1,dead:.9,broadleaf:1.1,spire:1.1},Vs={},ai=(n,t)=>()=>Vs[n]||(Vs[n]=t());function Ts(n,t,e=0,i=1){const s=n.attributes.position.count,r=new Float32Array(s*3),o=n.attributes.position;for(let a=0;a<s;a++){const l=1+(e?Ln(o.getX(a)*3+i,o.getY(a)*3,o.getZ(a)*3,2)*e:0),c=t.shade?Ce(.55+o.getY(a)*t.shade,.4,1.25):1;r[a*3]=t.r*l*c,r[a*3+1]=t.g*l*c,r[a*3+2]=t.b*l*c}return n.setAttribute("color",new Fe(r,3)),n}function So(n,t,e,i,s=1,r=!1){const o=n.attributes.position,a=n.attributes.normal;for(let l=0;l<o.count;l++){const c=o.getX(l),u=o.getY(l),h=o.getZ(l),f=1+Ln(c*e+i,u*e,h*e,3)*t;r&&a.setXYZ(l,c,u+.15,h),o.setXYZ(l,c*f,u*f*s,h*f)}return r?n.normalizeNormals():n.computeVertexNormals(),n}const pr=ai("fm",()=>new Ue({vertexColors:!0,roughness:.95,flatShading:!1})),Uu={r:.16,g:.13,b:.11},gx={pine:ai("pine",()=>{const n=ui(5),t=[],e=Le(new un(.035,.085,1.2,6));e.translate(0,.6,0),t.push(Ts(e,Uu));const i=Ne.low?5:9;for(let r=0;r<i;r++){const o=r/(i-1),a=$t(.7,.1,o)*n.range(.85,1.15),l=$t(.8,.5,o);let c=Le(new Dn(a,l,16,3,!0));const u=c.attributes.position,h=new Float32Array(u.count*3),f=n()*6;for(let d=0;d<u.count;d++){let g=u.getX(d),x=u.getY(d),m=u.getZ(d);const p=Math.atan2(m,g),S=Math.hypot(g,m)/a,_=1+(.34*Math.sin(p*7+f)+Ln(g*5+f,x*5,m*5,2)*.9)*S;g*=_,m*=_,x-=S*S*.22*(1+Math.sin(p*7+f)*.5),u.setXYZ(d,g,x,m);const v=.35+S*.75;h[d*3]=.035*v,h[d*3+1]=.06*v,h[d*3+2]=.043*v}c.setAttribute("color",new Fe(h,3)),c.translate(n.range(-.03,.03),.65+o*2.35+l/2-.2,n.range(-.03,.03)),t.push(c)}const s=$n(t);return s.computeVertexNormals(),{geo:s,mat:pr(),tint:[.36,.2,.62]}}),broadleaf:ai("bl",()=>{const n=ui(9),t=[],e=Le(new un(.05,.1,1,6));e.translate(0,.5,0),t.push(Ts(e,Uu));for(let s=0;s<7;s++){let r=new Hs(n.range(.34,.6),3);r=Le(So(r,.7,2.6,n()*90,.8,!0)),r.translate(n.range(-.5,.5),n.range(1,1.75),n.range(-.5,.5)),t.push(Ts(r,{r:.034,g:.045,b:.026,shade:.5},1.8,s*3))}return{geo:$n(t),mat:pr(),tint:[.25,.22,.6]}}),dead:ai("dead",()=>{const n=ui(21),t=[],e=(s,r,o,a,l)=>{const c=Le(new un(a*.55,a,o,5));c.translate(0,o/2,0);const u=new Gn().setFromUnitVectors(new L(0,1,0),r);if(c.applyQuaternion(u),c.translate(s.x,s.y,s.z),t.push(c),l<=0)return;const h=s.clone().addScaledVector(r,o),f=l>2?3:2;for(let d=0;d<f;d++){const g=r.clone().add(new L(n.range(-1,1),n.range(-.1,.9),n.range(-1,1)).multiplyScalar(.85)).normalize();e(h,g,o*n.range(.55,.8),a*.58,l-1)}};e(new L(0,-.1,0),new L(.08,1,.04).normalize(),.95,.09,4);const i=Ts($n(t),{r:.13,g:.115,b:.11});return i.computeVertexNormals(),{geo:i,mat:pr(),tint:[.07,.1,.5]}}),bush:ai("bush",()=>{let n=new Hs(.3,3);return n=Le(So(n,.8,3.2,4,.7,!0)),n.translate(0,.12,0),{geo:Ts(n,{r:.03,g:.04,b:.024},1.8),mat:pr(),tint:[.24,.2,.6]}}),tuft:ai("tuft",()=>{const n=ui(31),t=[];for(let e=0;e<7;e++){const i=Le(new Dn(.012,n.range(.09,.2),3));i.translate(0,.07,0),i.rotateZ(n.range(-.5,.5)),i.rotateX(n.range(-.5,.5)),i.translate(n.range(-.06,.06),0,n.range(-.06,.06)),t.push(i)}return{geo:Ts($n(t),{r:.07,g:.085,b:.045,shade:2.5},.5),mat:pr(),tint:[.2,.3,.55]}}),rock:ai("rock",()=>{let n=new Hs(.4,2);return n=Le(So(n,.9,1.7,12,.75)),n.translate(0,.08,0),{geo:n,mat:$e("rock",{scale:.9,tint:9211282})}}),spire:ai("spire",()=>{let n=new Dn(.5,2.4,7,6);return n=Le(So(n,.9,1.5,3)),n.translate(0,.9,0),{geo:n,mat:$e("rock",{scale:.55,tint:7829630})}}),bones:ai("bones",()=>{const n=ui(3),t=[];for(let e=0;e<9;e++){const i=Le(new un(.012,.012,n.range(.12,.22),4));i.rotateZ(Math.PI/2+n.range(-.4,.4)),i.rotateY(n()*6),i.translate(n.range(-.15,.15),.02+n()*.05,n.range(-.15,.15)),t.push(i)}for(let e=0;e<3;e++){const i=Le(new je(.04,7,5));i.translate(n.range(-.14,.14),.05,n.range(-.14,.14)),t.push(i)}return{geo:$n(t),mat:Yh().bone}})};function vx(n,t){if(!n.length&&!t.length)return null;const e=new Ee,i={uTime:{value:0},uPx:{value:1},uGain:{value:1}};if(n.length){const s=[],r=[],o=[];for(const u of n)s.push(u.p.x,u.p.y,u.p.z),r.push(u.c.r,u.c.g,u.c.b),o.push(u.size,u.kind,Math.random()*100);const a=new Ae;a.setAttribute("position",new se(s,3)),a.setAttribute("color",new se(r,3)),a.setAttribute("aPar",new se(o,3));const l=new ke({transparent:!0,depthWrite:!1,blending:is,vertexColors:!0,uniforms:i,vertexShader:`attribute vec3 aPar; uniform float uTime; uniform float uPx; varying vec3 vC; varying float vK; varying float vI;
        void main(){ vC = color; vK = aPar.y; float t = uTime + aPar.z;
          float fl = 0.78 + 0.22 * sin(t * 9.0) * sin(t * 5.3 + 1.7);            // flame flicker
          vI = aPar.y < 1.5 ? (aPar.y < 0.5 ? 1.0 : 0.85 + 0.15 * sin(t * 2.0)) : (aPar.y < 2.5 ? fl : 0.8 + 0.2 * sin(t * 1.3));
          vec3 p = position; if (aPar.y > 3.5) { float l = fract(t * 0.07); p += vec3(sin(t * 0.6 + aPar.z) * 0.25, l * 2.6, cos(t * 0.5 + aPar.z * 1.3) * 0.25); vI *= sin(l * 3.14159); }
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aPar.x * uPx * 300.0 / -mv.z, 0.0, 220.0); }`,fragmentShader:`varying vec3 vC; varying float vK; varying float vI; uniform float uGain;
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float core = smoothstep(0.32, 0.0, d); float halo = pow(max(0.0, 1.0 - d), 2.6);
          float a = vK < 1.5 ? halo * 0.5 + core * 0.4 : (vK > 3.5 ? core * 1.6 : halo * 0.55 + core * 1.3);
          gl_FragColor = vec4(vC * a * vI * uGain, 1.0); }`}),c=new Oo(a,l);c.frustumCulled=!1,e.add(c)}if(t.length){const s=Ne.low?5:9,r=[],o=[],a=[];for(const h of t)for(let f=0;f<s;f++)r.push(h.p.x,h.p.y,h.p.z),o.push(h.up.x,h.up.y,h.up.z),a.push(h.size,f/s+Math.random()*.05,h.dark,Math.random()*6.28);const l=new Ae;l.setAttribute("position",new se(r,3)),l.setAttribute("aUp",new se(o,3)),l.setAttribute("aPar",new se(a,4));const c=new ke({transparent:!0,depthWrite:!1,uniforms:{...i,uCol:{value:new Lt(9277334)}},vertexShader:`attribute vec3 aUp; attribute vec4 aPar; uniform float uTime; uniform float uPx; varying float vA; varying float vD;
        void main(){ float l = fract(uTime * 0.085 + aPar.y);
          vec3 side = normalize(cross(aUp, vec3(0.3, 0.1, 0.9)));
          float mist = step(1.5, aPar.z); l = mix(l, fract(uTime * 0.012 + aPar.y), mist); vD = mix(aPar.z, 0.85, mist);
          vec3 p = position + aUp * (l * 2.6 * aPar.x) + side * (l * l * 1.3 + sin(l * 7.0 + aPar.w) * 0.09) * aPar.x;
          p = mix(p, position + side * (l - 0.5) * 5.0 * aPar.x + aUp * sin(aPar.w + l * 6.28) * 0.12, mist);
          vA = mix(smoothstep(0.0, 0.12, l) * (1.0 - l) * 0.5, sin(l * 3.14159) * 0.075, mist);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(mix(0.25 + l * 1.3, 2.6, mist) * aPar.x * uPx * 600.0 / -mv.z, 0.0, 420.0); }`,fragmentShader:`varying float vA; varying float vD; uniform vec3 uCol;
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 1.6) * vA; gl_FragColor = vec4(uCol * vD, a); }`}),u=new Oo(l,c);u.frustumCulled=!1,u.renderOrder=5,e.add(u)}return{group:e,U:i}}const Wi=[.62,.42,.32],Nu=[.055,.04,.03],xx=[.12,.07,.035],Fu=[.42,.46,.5],Ou=[.2,.12,.065],zu=[.82,.79,.72],Bu=[.42,.31,.09],Wl=.178,Ha=.292,Hu=.154,_x=new L(0,1,0),Mx=new L,As=new L,Va=new L,Vu=new Gn;function yx(n,t,e=0,i=0,s=Wl){const r=n.attributes.position.count,o=new Float32Array(r*3),a=new Float32Array(r*4);for(let l=0;l<r;l++)o[l*3]=t[0],o[l*3+1]=t[1],o[l*3+2]=t[2],a[l*4]=i,a[l*4+1]=s,a[l*4+2]=e;return n.setAttribute("color",new Fe(o,3)),n.setAttribute("aLimb",new Fe(a,4)),n}function An(n,t,e={}){const i=Le(new Fr(n.map(s=>new ft(s[0],s[1])),t,e.p0??0,e.pl??Math.PI*2));return i.scale(e.sx??1,1,e.sz??1),i.translate(0,0,e.z??0),i}function Ai(n,t,e,i,s,r={}){As.set(...n),Va.set(...t);const o=As.distanceTo(Va),a=[new ft(1e-4,-e)];r.round&&a.push(new ft(e*.82,-e*.55)),a.push(new ft(e,0)),r.rm&&a.push(new ft(r.rm,o*(r.at??.5))),a.push(new ft(i,o),new ft(1e-4,o+i));const l=Le(new Fr(a,s));return Vu.setFromUnitVectors(_x,Mx.copy(Va).sub(As).normalize()),l.applyQuaternion(Vu),l.translate(As.x,As.y,As.z),l}function mr(n,t,e,i,s,r,o,a,l,c){const u=Le(new je(n,a,l,0,Math.PI*2,0,c??Math.PI));return u.scale(t,e,i),u.translate(s,r,o),u}const ku=(n,t={})=>An(t.pts||[[.058,.283],[.044,.312],[.033,.345],[.016,.37],[.001,.376]],n,{sx:.97,z:-.005,p0:t.open??.62,pl:Math.PI*2-2*(t.open??.62)}),Sx={villagerA:{body:[[.057,.108],[.052,.16],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,hair:!0,hairT:.5,bare:!0,hose:[.3,.27,.22],hoseT:.5,tunicCol:[1,1,1]},villagerB:{body:[[.058,.11],[.053,.165],[.044,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,hood:[.85,.85,.85],bare:!0,hose:[.25,.22,.18],hoseT:.4,tunicCol:[1,1,1]},guard:{body:[[.059,.088],[.054,.14],[.0445,.2],[.052,.255],[.052,.287],[.022,.304]],belt:!0,helm:!0,spear:!0,hose:[.38,.38,.4],hoseT:.2,tunicCol:[1,1,1],sleeve:[.6,.55,.46],sleeveT:.35,sw:1.12},nun:{long:!0,body:[[.058,.003],[.053,.08],[.043,.17],[.042,.21],[.05,.26],[.05,.288],[.03,.3]],fold:!0,nun:!0,tunicCol:[1,1,1]},cult:{long:!0,body:[[.066,.003],[.06,.08],[.047,.17],[.045,.215],[.051,.262],[.051,.288],[.03,.3]],cult:!0,cord:!0,hood:[.8,.8,.8],hoodPeak:!0,faceDark:!0,tunicCol:[1,1,1],sw:1.3,sleeveCuff:!0},hiddenA:{body:[[.056,.112],[.051,.165],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,cloak:[.62,.62,.62],hood:[.62,.62,.62],hose:[.3,.27,.2],hoseT:.3,tunicCol:[1,1,1]},hiddenB:{body:[[.056,.112],[.051,.165],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,cloak:[.7,.7,.7],hair:!0,hairT:.3,bow:!0,hose:[.3,.27,.2],hoseT:.3,tunicCol:[1,1,1]},noble:{long:!1,body:[[.064,.05],[.058,.11],[.0455,.19],[.0445,.205],[.051,.255],[.051,.287],[.021,.304]],sash:!0,cloak:[.8,.8,.8],hair:!0,hairT:.2,cap:!0,hose:[.75,.7,.6],hoseT:.6,tunicCol:[1,1,1],sleeve:[.9,.9,.9],sleeveT:.8}};function bx(n){const t=Sx[n],e=Ne.low?4:5,i=Ne.low?6:7,s=Ne.low?[6,3]:[8,4],r=[],o=(g,x,m=0,p=0,S=Wl)=>r.push(yx(g,x,m,p,S)),a=t.sw??1,l=t.sleeve||t.tunicCol,c=t.sleeveT??1,u={sx:1.12,sz:.78};for(const g of[1,-1]){const x=g>0?1:2,m=g>0?.014:-.01;if(t.long){const p=g>0?.012:-.008;o(Ai([g*.026,.0105,p-.004],[g*.029,.0105,p+.02],.0105,.009,4),Nu,0,x,.07);continue}o(Ai([g*.024,Wl,0],[g*.026,.027,m],.025,.011,e,{rm:.0165,at:.62}),t.hose,t.hoseT,x),o(Ai([g*.026,.0105,m-.007],[g*.03,.0105,m+.022],.0105,.009,Math.max(4,e-1)),Nu,0,x)}o(An(t.body,i,u),t.tunicCol,1),t.belt&&o(An([[.0475,.191],[.0475,.211]],i,u),xx,0),t.sash&&o(An([[.0475,.192],[.0475,.212]],i,u),Bu,0),t.cord&&o(An([[.0475,.2],[.0475,.212]],i,u),[.5,.42,.28],0),t.trim&&o(An([[.0645,.05],[.0625,.066]],i,u),Bu,0);const h=t.nun?t.tunicCol:l,f=t.nun?1:c,d=(g,x,m,p,S,_)=>{o(Ai(m,p,.0175*a,.0145*a,e,{round:!0}),h,f,x,Ha),o(Ai(p,S,.0145*a,(t.cult?.0125:.0105)*a,e),_?Wi:h,_?.1:f,x,Ha),o(mr(.0105,1,1.05,1,S[0],S[1]-.011,S[2]+.004,5,3),Wi,.1,x,Ha)};if(t.nun){for(const g of[1,-1])o(Ai([g*.052,.287,0],[g*.012,.222,.046],.0175,.0125,e,{round:!0}),h,1,0);o(mr(.011,1.5,1,1,0,.212,.054,5,4),Wi,.1)}else d(1,3,[.052,.287,0],[.062,.234,.005],[.061,.187,.02],t.bare),t.spear?(o(Ai([-.052,.287,0],[-.064,.238,.012],.0175*a,.0145*a,e,{round:!0}),h,f,0),o(Ai([-.064,.238,.012],[-.063,.205,.036],.0145*a,.0105*a,e),h,f,0),o(mr(.0115,1,1,1,-.063,.2,.036,5,4),Wi,.1),o(Le(new un(.0045,.0045,.5,4,1,!0)).translate(-.063,.25,.036),Ou,0),o(Le(new Dn(.0105,.055,4)).translate(-.063,.5275,.036),Fu,0)):d(-1,4,[-.052,.287,0],[-.06,.236,-.003],[-.062,.19,.012],t.bare);if(o(Le(new un(.0115,.0125,.03,6,1,!0)).translate(0,.312,.001),Wi,.1),o(mr(.0235,.88,1.12,1,0,.338,.002,s[0],s[1]),t.faceDark?[.035,.028,.024]:Wi,t.faceDark?0:.12),t.faceDark||o(Le(new Dn(.0042,.0085,3,1,!0)).rotateX(Math.PI/2).translate(0,.336,.026),Wi,.12),t.hair){const g=mr(.0255,.9,1.12,1.04,0,0,0,7,3,1.95);g.rotateX(-.38),g.translate(0,.34,-.004),o(g,[.3,.24,.18],.5+(t.hairT||0),0)}if(t.hood&&o(ku(i,t.hoodPeak?{pts:[[.062,.28],[.048,.312],[.034,.345],[.016,.375],[.0015,.392]],open:.7}:{}),t.hood,1),t.helm&&(o(An([[.0455,.325],[.0305,.333],[.0285,.35],[.018,.368],[.001,.374]],i),Fu,0),o(An([[.0305,.29],[.027,.327]],i,{p0:0,pl:Math.PI*2}),[.3,.32,.34],0)),t.cap&&o(An([[.033,.353],[.027,.364],[.001,.368]],i),[1.1,1.1,1.1],.9),t.nun&&(o(An([[.052,.268],[.047,.29],[.03,.306],[.028,.318]],i),zu,0),o(An([[.0305,.316],[.0295,.34],[.0275,.358]],i,{p0:.75,pl:Math.PI*2-1.5}),zu,0),o(ku(i,{pts:[[.056,.22],[.048,.29],[.034,.336],[.017,.372],[.001,.379]],open:.9}),t.tunicCol,1)),t.cloak&&o(An([[.06,.305],[.067,.18],[.075,.05]],i,{sz:.95,z:-.004,p0:.7,pl:Math.PI*2-1.4}),t.cloak,1),t.bow){const g=Le(new Ir(.13,.0028,3,7,1.85));g.rotateZ(-.925),g.rotateY(Math.PI/2),g.translate(0,.23,.072),o(g,Ou,0)}return $n(r)}const wx=n=>{var t;return Vs[t="fig_"+n]||(Vs[t]=bx(n))},Gu={villager:[8019004,9075282,5660735,9404520,7094062,7235674],guard:[4872826,6119784,4017516,6712178],nun:[1381658,1907488],cult:[6951952,4853004,1839120,5904916],hidden:[4873788,5922888,6969916,4018742],noble:[6958936,3428490,9071148,8007728]},Ex={stand:0,kneel:1,armsUp:2,talk:3},Kh={uFigTime:{value:0}},Tx=`
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
vec3 figRotN(vec3 n, vec4 L, vec4 I) { float a = figAng(L.x, I), c = cos(a), s = sin(a); return L.x > 0.5 ? vec3(n.x, n.y * c - n.z * s, n.y * s + n.z * c) : n; }`;function Wu(n,t,e){n.uniforms.uFigTime=Kh.uFigTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
`+Tx).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed = figPos(transformed, aLimb, aInst);`),t&&(n.vertexShader=n.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 objectNormal = figRotN(objectNormal, aLimb, aInst);`)),e&&(n.vertexShader=n.vertexShader.replace("#include <color_vertex>",`#if defined( USE_COLOR ) && defined( USE_INSTANCING_COLOR )
 vColor = color.rgb * mix( vec3( 1.0 ), instanceColor.rgb, aLimb.z );
 #endif`))}const Xu=(n,t,e)=>{const i=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return i-Math.floor(i)};function Ax(n,t){if(!t.length)return null;const e={},i={villager:1,guard:2,nun:3,cult:4,hidden:5,noble:6};t.forEach((h,f)=>{const d=i[h.kind]?h.kind:"villager",g=(f+(h.seed||0))%2===1,x=d==="villager"?g?"villagerB":"villagerA":d==="hidden"?g?"hiddenB":"hiddenA":d;(e[x]||(e[x]=[])).push(h),h._fk=d,h._fn=f});const s=new Ee,r=[],o=new Ue({vertexColors:!0,roughness:.9});o.onBeforeCompile=h=>Wu(h,!0,!0),o.customProgramCacheKey=()=>"figmat";const a=new jo({depthPacking:Yo});a.onBeforeCompile=h=>Wu(h,!1,!1),a.customProgramCacheKey=()=>"figdepth";for(const[h,f]of Object.entries(e)){const d=wx(h).clone(),g=new Float32Array(f.length*4),x=new Jo(d,o,f.length);x.castShadow=!0,x.frustumCulled=!1,x.customDepthMaterial=a,f.forEach((m,p)=>{const S=Gu[m._fk]||Gu.villager;x.setColorAt(p,Zh.setHex(m.color??S[(p*7+(m.seed||0))%S.length])),m.len=[0];for(let C=1;C<m.path.length;C++)m.len.push(m.len[C-1]+Math.hypot(m.path[C][0]-m.path[C-1][0],m.path[C][1]-m.path[C-1][1]));m.total=m.len[m.len.length-1],m.phase??(m.phase=Math.random()*100),m.speed??(m.speed=.16);const _=Xu(m._fn,m.seed||0,i[m._fk]),v=Xu(m._fn+3,m.seed||0,5);m.bw=(_<.33?.9:_<.66?1:1.13)+(v-.5)*.06,m.bh=(_<.33?1.05:_<.66?1:.96)+(v-.5)*.05,m.walk=m.total>.01?Ce(m.speed/.12,.35,1):0,m.rate=Ce(Math.PI*m.speed/(2*Hu*Math.sin(.5*Math.max(m.walk,.35)))*1.25,1.8,8),m.ph=m.phase*2.399%6.2832,g.set([m.ph,m.walk,Ex[m.pose]??0,m.rate],p*4)}),d.setAttribute("aInst",new zl(g,4)),s.add(x),r.push({im:x,arr:f})}const l=new re,c=new re,u=h=>{Kh.uFigTime.value=h;for(const{im:f,arr:d}of r)d.forEach((g,x)=>{let m=g.path[0][0],p=g.path[0][1],S=g.yaw??0,_=0;if(g.total>.01){let v=(h*g.speed+g.phase)%(g.loop?g.total:g.total*2),C=1;!g.loop&&v>g.total&&(v=g.total*2-v,C=-1);let E=1;for(;E<g.len.length-1&&g.len[E]<v;)E++;const A=(v-g.len[E-1])/Math.max(1e-5,g.len[E]-g.len[E-1]);m=$t(g.path[E-1][0],g.path[E][0],A),p=$t(g.path[E-1][1],g.path[E][1],A),S=Math.atan2((g.path[E][0]-g.path[E-1][0])*C,(g.path[E][1]-g.path[E-1][1])*C),_=-Hu*g.bh*(1-Math.cos(.5*g.walk*Math.sin(h*g.rate+g.ph)))*(g.scale??1)}else S+=Math.sin(h*.7+g.phase)*.25;Bo(n,m,p,S,g.scale??1,_+(g.lift??0),l,g.h),l.multiply(c.makeScale(g.bw,g.bh,g.bw)),f.setMatrixAt(x,l)}),f.instanceMatrix.needsUpdate=!0};return u(0),{mesh:s,update:u}}function ge(n,t,e,i,s,r={}){const o=n.r;let a=0,l=0;for(;a<e&&l++<e*12;){const[c,u]=i(o),h=Yn(n.a,c,u);h<(r.minH??.12)||h>(r.maxH??99)||s&&!s(c,u,h)||(n.instance(t,c,u,o()*6.28,o.range(r.s0??.8,r.s1??1.3),r.lift??-.03),a++)}}function Rx(n,t){if(!t.length)return null;const e=new Ae;e.setAttribute("position",new se([0,0,.05,-.16,.03,-.02,0,0,-.04,0,0,.05,0,0,-.04,.16,.03,-.02],3)),e.computeVertexNormals();const i=new Jo(e,new Zo({color:394758,side:Mn}),t.length);i.frustumCulled=!1;const s=new re,r=new re,o=a=>{t.forEach((l,c)=>{const u=a*l.speed+l.phase,h=l.x+Math.cos(u)*l.r,f=l.z+Math.sin(u)*l.r*.8;Bo(n,h,f,-u,l.scale??1,0,s,l.h+Math.sin(u*1.7)*.3),r.makeScale(1,1+Math.sin(a*11+l.phase)*2.5,1),s.multiply(r),i.setMatrixAt(c,s)}),i.instanceMatrix.needsUpdate=!0};return o(0),{mesh:i,update:o}}const hi=new Lt;function jh(n,t,e,i,s,r){const o=Ln(e*6,i*6,s*6,3),a=Ce(Nt(.3,.58,t)+Nt(2.6,5,n+o*2)*.85,0,1),l=Nt(.32,.02,n)*.9,c=Nt(-.05,.25,Ln(e*14+9,i*14,s*14,3))*Nt(.3,.7,n)*(1-a),u=Nt(6,9,n);return r.setRGB(1.05+o*.7+u*.7,1.02+o*.5+u*.7,.96+o*.25+u*.8),n<0&&r.multiplyScalar(Ce(1+n*.5,.25,1)),[a,l,c]}function Cx(){const n=Ne.low?128:208,t=[],e=nx(),i={x:0,z:0},s=[[1,0,0,0,1,0,0,0,1],[-1,0,0,0,1,0,0,0,-1],[0,1,0,0,0,1,1,0,0],[0,-1,0,0,0,-1,1,0,0],[0,0,1,1,0,0,0,1,0],[0,0,-1,-1,0,0,0,1,0]];for(const[l,c,u,h,f,d,g,x,m]of s){const p=new Float32Array((n+1)*(n+1)*3),S=new Float32Array((n+1)*(n+1)*3),_=new Float32Array((n+1)*(n+1)*3),v=new Float32Array((n+1)*(n+1));let C=0;for(let M=0;M<=n;M++)for(let P=0;P<=n;P++,C++){const B=Math.tan((P/n*2-1)*Math.PI/4),O=Math.tan((M/n*2-1)*Math.PI/4);let V=l+h*B+g*O,$=c+f*B+x*O,W=u+d*B+m*O;const ct=1/Math.hypot(V,$,W);V*=ct,$*=ct,W*=ct;let q=Ur(V,$,W);v[C]=q;let Mt=0;for(const Dt of e)Xh(Dt,V,$,W,i)&&Math.hypot(i.x,i.z)<Dt.patchR-1.6&&(Mt=.7);const Et=be+Math.max(q,-3)-Mt;p[C*3]=V*Et,p[C*3+1]=$*Et,p[C*3+2]=W*Et}const E=new Ae;E.setAttribute("position",new Fe(p,3));const A=[],R=h*(x*u-m*c)+f*(m*l-g*u)+d*(g*c-x*l)<0;for(let M=0;M<n;M++)for(let P=0;P<n;P++){const B=M*(n+1)+P,O=B+1,V=B+n+1,$=V+1;R?A.push(B,V,O,O,V,$):A.push(B,O,V,O,$,V)}E.setIndex(A),E.computeVertexNormals();const y=E.attributes.normal.array;for(C=0;C<v.length;C++){const M=p[C*3],P=p[C*3+1],B=p[C*3+2],O=1/Math.hypot(M,P,B),V=1-(y[C*3]*M+y[C*3+1]*P+y[C*3+2]*B)*O,$=jh(v[C],V*2.2,M*O,P*O,B*O,hi);S[C*3]=$[0],S[C*3+1]=$[1],S[C*3+2]=$[2],_[C*3]=hi.r,_[C*3+1]=hi.g,_[C*3+2]=hi.b}E.setAttribute("aMix",new Fe(S,3)),E.setAttribute("color",new Fe(_,3)),t.push(E)}const r=$n(t),o=$h(),a=new Kt(r,o);return a.receiveShadow=!0,a.castShadow=!0,a.userData.mat=o,a}function Px(n,t){const e=n.patchR,i=Ne.low?.3:.16,s=Math.ceil(2*e/i),r=[],o=[],a=[],l=[],c=new Int32Array((s+1)*(s+1)).fill(-1),u=new L;for(let m=0;m<=s;m++)for(let p=0;p<=s;p++){const S=-e+p*i,_=-e+m*i,v=Math.hypot(S,_);if(v>e+i)continue;const C=Yn(n,S,_),E=v>e-i?.9:0;Ls(S,_,Math.max(C,-3)-E,u),c[m*(s+1)+p]=l.length,l.push(C),r.push(u.x,u.y,u.z)}const h=[];for(let m=0;m<s;m++)for(let p=0;p<s;p++){const S=c[m*(s+1)+p],_=c[m*(s+1)+p+1],v=c[(m+1)*(s+1)+p],C=c[(m+1)*(s+1)+p+1];S<0||_<0||v<0||C<0||h.push(S,v,_,_,v,C)}const f=new Ae;f.setAttribute("position",new se(r,3)),f.setIndex(h),f.computeVertexNormals();const d=f.attributes.normal.array;let g=0;for(let m=0;m<=s;m++)for(let p=0;p<=s;p++){if(c[m*(s+1)+p]<0)continue;const S=-e+p*i,_=-e+m*i,v=1/Math.hypot(S,be,_),C=S*v,E=be*v,A=_*v,R=1-(d[g*3]*C+d[g*3+1]*E+d[g*3+2]*A);u.copy(n.n).multiplyScalar(be).addScaledVector(n.e,S).addScaledVector(n.f,_).normalize();const y=jh(l[g],R*2.2,u.x,u.y,u.z,hi);t?.(S,_,l[g],R,y,hi),o.push(y[0],y[1],y[2]),a.push(hi.r,hi.g,hi.b),g++}f.setAttribute("aMix",new se(o,3)),f.setAttribute("color",new se(a,3));const x=new Kt(f,$h());return x.receiveShadow=!0,x.castShadow=!0,x}function Dx(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),i=e.createImageData(256,256);for(let a=0;a<256;a++)for(let l=0;l<256;l++){const c=(d,g)=>{const x=d/256*Math.PI*2,m=g/256*Math.PI*2;return Ln(Math.cos(x)*1.6,Math.sin(x)*1.6+Math.cos(m)*1.6,Math.sin(m)*1.6,4,2.2)},u=c(l+1,a)-c(l-1,a),h=c(l,a+1)-c(l,a-1),f=(a*256+l)*4;i.data[f]=128+u*900,i.data[f+1]=128+h*900,i.data[f+2]=255,i.data[f+3]=255}e.putImageData(i,0,0);const s=new fv(t);s.wrapS=s.wrapT=Rr,s.repeat.set(90,45);const r=new Xv({color:399138,roughness:.34,metalness:0,normalMap:s,normalScale:new ft(.35,.35),clearcoat:.2,clearcoatRoughness:.4,envMapIntensity:.9}),o=new Kt(new je(be,320,200),r);return o.receiveShadow=!0,o.userData.tick=a=>{s.offset.set(a*.004,a*.0025)},o}function Lx(){const n=new ke({side:sn,transparent:!0,depthWrite:!1,blending:is,uniforms:{uColor:{value:new Lt(5210024)},uPower:{value:3.2},uGain:{value:.9}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uColor; uniform float uPower; uniform float uGain; varying vec3 vN; varying vec3 vV;
      void main(){ float f = smoothstep(0.0, 0.42, abs(dot(vN, vV))); f = f * f * f * 0.42; gl_FragColor = vec4(uColor * f * uGain, 1.0); }`});return new Kt(new je(be+9,96,64),n)}function Ix(){const n=Ne.low?1200:2600,t=new Float32Array(n*3),e=new Float32Array(n),i=ui(77);for(let a=0;a<n;a++){const l=i()*2-1,c=i()*Math.PI*2,u=Math.sqrt(1-l*l);t[a*3]=u*Math.cos(c)*2400,t[a*3+1]=l*2400,t[a*3+2]=u*Math.sin(c)*2400,e[a]=Math.pow(i(),6)*2.6+.6}const s=new Ae;s.setAttribute("position",new Fe(t,3)),s.setAttribute("aSize",new Fe(e,1));const r=new ke({transparent:!0,depthWrite:!1,blending:is,uniforms:{uPx:{value:1},uFade:{value:1}},vertexShader:"attribute float aSize; uniform float uPx; varying float vS; void main(){ vS = aSize; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * uPx; }",fragmentShader:"varying float vS; uniform float uFade; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vec3(0.75,0.82,1.0) * a * (0.25 + vS * 0.22) * uFade, 1.0); }"}),o=new Oo(s,r);return o.frustumCulled=!1,o}function Ux(){const n=ui(4242),t=[],e=[],i=[],s=new L,r=new L,o=new L;let a=0,l=0;for(;a<70&&l++<4e3;){const f=n()*2-1,d=n()*Math.PI*2,g=Math.sqrt(1-f*f);s.set(g*Math.cos(d),f,g*Math.sin(d));const x=Ur(s.x,s.y,s.z);if(x<.35||x>3.2)continue;a++;const m=n()<.13;r.set(-s.y,s.x,s.z*.3).cross(s).normalize(),o.copy(s).cross(r);const p=m?3:4+(n()*14|0);for(let S=0;S<p;S++){const _=s.clone().addScaledVector(r,(n()-.5)*.05).addScaledVector(o,(n()-.5)*.05).normalize(),v=Ur(_.x,_.y,_.z);if(!(v<.05))if(_.multiplyScalar(be+v+.25),t.push(_.x,_.y,_.z),m){const C=n()<.4;e.push(C?.55:1,C?.25:.08,C?1:.05),i.push(2.2)}else e.push(1,.56+n()*.15,.2),i.push(.8+n()*1.2)}}const c=new Ae;c.setAttribute("position",new se(t,3)),c.setAttribute("color",new se(e,3)),c.setAttribute("aSize",new se(i,1));const u=new ke({transparent:!0,depthWrite:!1,blending:is,vertexColors:!0,uniforms:{uPx:{value:1},uTime:{value:0},uGain:{value:1}},vertexShader:`attribute float aSize; uniform float uPx; uniform float uTime; varying vec3 vC; varying float vF;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * normalize(position));
      vF = smoothstep(-0.05, 0.25, dot(n, normalize(-mv.xyz))) * (0.75 + 0.25 * sin(uTime * 3.0 + position.x * 40.0));
      gl_Position = projectionMatrix * mv; gl_PointSize = clamp(aSize * uPx * 260.0 / -mv.z, 1.5, 34.0); }`,fragmentShader:"varying vec3 vC; varying float vF; uniform float uGain; void main(){ float d = length(gl_PointCoord - 0.5); float a = pow(smoothstep(0.5, 0.0, d), 2.2); gl_FragColor = vec4(vC * a * vF * uGain * 2.2, 1.0); }"}),h=new Oo(c,u);return h.frustumCulled=!1,h}function Nx(){const n=new Ee,t=$e("metal",{scale:.09,tint:14263642,metalness:1,roughness:.58,norm:.9});t.envMapIntensity=1.8,t.emissive=new Lt(4860940),t.emissiveIntensity=.55;const e=$e("metal",{scale:.12,tint:7033400,metalness:1,roughness:.72}),i=(h,f,d)=>{const x=[[h+.3,-d],[f-.3,-d],[f,-d+.3],[f,d-.3],[f-.3,d],[h+.3,d],[h,d-.3],[h,-d+.3],[h+.3,-d]].map(([m,p])=>new ft(m,p));return new Fr(x,240)},s=(h,f,d,g)=>{const x=[i(h,f,d)];for(let m=0;m<g;m++){const p=m/g*Math.PI*2,S=m%15===0,_=m%5===0,v=(S?1.7:_?1.1:.6)*d;for(const C of[f+.12,h-.12]){const E=new Fi(.34,v,S?.55:.24);E.translate(C,d-v/2-.25,0),E.rotateY(p),x.push(E)}if(S)for(const C of[1,-1]){const E=new je(.62,10,8);E.translate((h+f)/2,C*(d+.2),0),E.rotateY(p+.13),x.push(E)}}return $n(x.map(Fx))},r=new Kt(s(126,129.4,4.2,180),t),o=new Kt(s(131.5,134.2,2.6,120),e);o.quaternion.setFromAxisAngle(new L(.66,0,.75).normalize(),1.52);const a=new Ee,l=new Ee;a.add(new Kt(new Ir(150,.7,10,200),t));const c=new Kt(new je(3.4,32,20),new Ue({color:2759176,emissive:16758362,emissiveIntensity:3.2,roughness:.4}));c.position.set(150,0,0),a.add(c),l.add(new Kt(new Ir(144.5,.55,10,200),e));const u=new Kt(new je(2.6,32,20),$e("rock",{scale:.5,tint:4869205,roughness:.9}));u.position.set(144.5,0,0),l.add(u),a.rotation.x=Math.PI/2,l.rotation.x=Math.PI/2;for(const h of[r,o])h.castShadow=!0,h.receiveShadow=!0;return n.add(r,o,a,l),n.userData={main:r,inner:o,sunRing:a,moonRing:l,sun:c,moon:u},n}function Fx(n){const t=n.index?n.toNonIndexed():n;for(const e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e);return t}function Ox(n){const t=ui(909),e=new Ee,i=new Ue({color:9410726,roughness:1,metalness:0,emissive:1448738,emissiveIntensity:.35,alphaHash:!0});i.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <alphamap_fragment>",`
      float ndv = abs(dot(normalize(vNormal), normalize(vViewPosition)));
      diffuseColor.a *= smoothstep(0.1, 0.9, ndv) * 0.92 * smoothstep(3.0, 20.0, length(vViewPosition));`)};const s=new Hs(1,Ne.low?2:3),r=(l,c,u)=>{const h=[],f=4+(t()*6|0);for(let g=0;g<f;g++){const x=s.clone(),m=u*t.range(.45,1),p=t.range(-1.6,1.6)*u,S=t.range(-.9,.9)*u,_=t.range(0,.35)*u,v=x.attributes.position,C=x.attributes.normal,E=t()*100;for(let A=0;A<v.count;A++){let R=v.getX(A),y=v.getY(A),M=v.getZ(A);C.setXYZ(A,R,y*1.4+.25,M);const P=1+Ln(R*1.3+E,y*1.3,M*1.3,4)*.9;R*=P*m*1.25,y*=P*m*.62,M*=P*m,y<-.25*m&&(y=-.25*m+(y+.25*m)*.25),v.setXYZ(A,R+p,y+_,M+S)}x.normalizeNormals(),h.push(x)}const d=new Kt($n(h),i);d.position.copy(l).multiplyScalar(be+c),d.quaternion.setFromUnitVectors(new L(0,1,0),l),d.rotateY(t()*6.28),d.castShadow=!0,d.receiveShadow=!0,e.add(d)},o=new L,a=Ne.low?34:70;for(let l=0;l<a;l++){if(l<a*.6){const u=n[l%n.length];o.set(t.range(-1,1),t.range(-1,1),t.range(-1,1)).normalize().multiplyScalar(t.range(.12,.42)).add(u).normalize()}else{const u=t()*2-1,h=t()*6.283,f=Math.sqrt(1-u*u);o.set(f*Math.cos(h),u,f*Math.sin(h))}let c=!0;for(const u of n)o.angleTo(u)<.15&&(c=!1);c&&r(o.clone(),t.range(9,14),t.range(1.3,3.4))}return e}const rn=(n,t,e,i=3)=>Ln(n*e,.37,t*e,i),Li=(n,t,e)=>{let i=1e9;for(let s=0;s<e.length-1;s++){const[r,o]=e[s],[a,l]=e[s+1],c=a-r,u=l-o,h=Ce(((n-r)*c+(t-o)*u)/(c*c+u*u),0,1);i=Math.min(i,Math.hypot(n-r-c*h,t-o-u*h))}return i},Bn=(n,t=0,e=0)=>i=>{const s=i()*6.283,r=Math.sqrt(i())*n;return[t+Math.cos(s)*r,e+Math.sin(s)*r]},Je=(n,t)=>e=>{const i=e()*6.283,s=Math.sqrt($t(n*n,t*t,e()));return[Math.cos(i)*s,Math.sin(i)*s]},Nr=(n,t,e=1)=>(i,s,r,o,a)=>{const l=Li(i,s,n)+rn(i,s,2.5,2)*.25;a[1]=Math.max(a[1],Nt(t,t*.35,l)*e),l<t&&(a[2]*=.3)},qu=[[0,2.2],[1.4,4],[.6,5.6],[3.5,8.5],[7,11],[12,13]],zx={id:"ossuary",lat:14,lon:-24,radius:12,blend:10,profile(n,t,e){let i=.75+rn(n,t,.16)*.9+rn(n,t,.9)*.14;i+=2*Nt(7.2,1.9,Math.hypot(n,t*1.15));const s=Nt(2.3,1.5,e);i=$t(i,2.72,s);const r=Nt(.3,0,Math.max(Math.abs(n-1.3)-1.05,2.55-t,t-5.6));return i=$t(i,1.5,r),i-=1.9*Nt(4.2,1.2,Math.hypot(n+7,t-5.5)),i},paint(n,t,e,i,s,r){Nr(qu,.42)(n,t,e,i,s);const o=Nt(.5,0,Math.max(Math.abs(n-1.3)-1.2,2.4-t,t-6.2));s[0]=Math.max(s[0],o*.9),o>.5&&(s[2]=0),r.multiplyScalar(.92),s[2]=Math.max(s[2],.25)},build(n){n.house(0,0,.5,{w:2,d:2.9,storeys:2,m:{roof:"slate",wall:"plasterDark"},lit:.22,chimney:!0,smoke:!0,shed:!0,rh:1.3}),n.light(.4,.6,1.9,16751168,2.5,5),n.fence([[-2.2,-1.6],[-2.4,1.2],[-1.4,2.5]]),n.fence([[1.8,-1.9],[2.6,.3],[2.2,1.7]]),n.well(-1.5,1.4),n.cart(1.9,1,2.2),n.torch(.5,2,.55,16747056),n.at(1.3,3.5,0),n.box("blocksDark",2.3,.08,2.1,0,-.05,-.05),n.box("blocksDark",2.3,1.3,.16,0,0,-1.1);for(const t of[-1,1])n.box("blocksDark",.16,1.3,2.1,t*1.15,0,-.05),n.box("blocks",.2,1.36,.2,t*1.15,0,1);n.box("blocksDark",2.46,.14,.9,0,1.3,-.72),n.box("blocks",2.5,.12,.2,0,1.3,1);for(let t=0;t<7;t++)n.cyl("bone",.045,.045,.05,-.95+t*.16,.82,-1,6,Math.PI/2),n.cyl("bone",.045,.045,.05,-.87+t*.16,.95,-1,6,Math.PI/2);n.box("woodDark",.44,.74,.05,-.62,0,-1);for(const t of[.16,.42,.66])n.box("iron",.46,.035,.06,-.62,t,-.99);for(const t of[-1,1])for(const e of[-1,1])n.box("iron",.018,.5,.018,.18+t*.16,.2,-.2+e*.16);for(const t of[-1,0,1])n.box("iron",.014,.5,.014,.18+t*.08,.2,-.04),n.box("iron",.014,.5,.014,.18+t*.08,.2,-.36);n.box("iron",.36,.02,.36,.18,.19,-.2),n.box("iron",.36,.02,.36,.18,.7,-.2),n.box("iron",.014,.6,.014,.18,.72,-.2);for(const t of[-1,1])n.box("wood",.03,1.5,.03,.82+t*.1,0,-.92);for(let t=0;t<9;t++)n.box("wood",.2,.022,.022,.82,.12+t*.16,-.92);n.box("iron",.06,.09,.06,.5,.98,-.98),n.glow(.5,1.02,-.92,16754250,.5,2).light(.3,.9,-.3,16751168,4.5,4),n.glow(.82,1.35,-.92,16760944,.35,0);for(const[t,e]of[[-.8,.3],[.7,.5],[-.2,.7]])n.cyl("bone",.012,.015,.06,t,.03,e,5),n.glow(t,.14,e,16760928,.13,2);n.agent({kind:"villager",path:[[1.12,3.75]],yaw:.9,scale:.42,color:12168596,h:1.5});for(let t=0;t<12;t++)n.instance("bones",1.3+n.r.range(-.9,.9),3.4+n.r.range(-.8,1),n.r()*6,n.r.range(.7,1.2));for(let t=0;t<26;t++){const e=n.r.range(1.9,4.3),i=n.r.range(3,5.6);n.grave(Math.cos(e)*i,Math.sin(e)*i-.5,e)}ge(n,"dead",46,Je(2.8,15),(t,e)=>Li(t,e,qu)>.7&&!(Math.abs(t-1.3)<1.7&&e>2&&e<7.2),{s0:.9,s1:2}),ge(n,"pine",70,Je(8,18),null,{s0:.8,s1:1.5}),ge(n,"rock",50,Je(2.5,16),null,{s0:.4,s1:1.5}),ge(n,"bush",60,Je(2.4,15),null,{s0:.6,s1:1.3}),n.agent({kind:"cult",path:[[-.9,2.3]],yaw:.8,color:5658204});for(let t=0;t<5;t++)n.bird({x:.3,z:.4,r:2.2+t*.5,h:5.2+t*.3,speed:.5-t*.05,phase:t*1.3})}},gr=n=>-6.2+2*Math.sin(n*.24+.6),bo=[[-14,1.2],[-6.4,.6],[-2,.2],[2.5,.4],[6,1.5],[14,3]],ka=[[.6,.3],[.2,-3.5],[1.5,-7],[1,-13]],Bx={id:"village",lat:2,lon:0,radius:14,blend:9,profile(n,t,e){let i=.62+rn(n,t,.2)*.35+rn(n,t,1.1,2)*.05+Nt(5,15,n)*1.3+Nt(4,14,-t)*.8;const s=Nt(3.6,2,Math.hypot(n-1.2,t-2.6));i=$t(i,.66,s);const r=Math.abs(n-gr(t));i=$t(-.55,i,Nt(.45,1.9,r));const o=Nt(.9,.4,Math.abs(t-.9))*Nt(2.2,1.2,r);return i=Math.max(i,$t(i,.5,o*0)),i},paint(n,t,e,i,s){if(Nr(bo,.5)(n,t,e,i,s),Nr(ka,.36)(n,t,e,i,s),s[1]=Math.max(s[1],Nt(3.4,2.2,Math.hypot(n-1.2,t-2.6))*.95),n>6&&t<-1&&t>-9){const r=Math.sin(n*5.2)*.5+.5;s[1]=Math.max(s[1],r*.7*Nt(6,7,n)*Nt(13,11,n))}},build(n){const t={m:{roof:"thatch"}},e=[[-3.2,-1,.2],[-1.2,-1.3,-.1],[2.6,-1.2,.15,2],[4.8,-.4,.5],[-3,2.2,3],[-1,4.9,2.6],[-4.4,-3.6,.6,2],[7.2,4.9,4.2],[7.6,.2,.7],[-.9,-4.2,1.4],[1.9,-5.2,-1.5,2],[.2,-8.2,1.2],[2.9,-8.8,-1.3],[8.4,3.9,3.9],[-9.4,2.4,2.9],[-10.2,-.8,.3]];for(const[s,r,o,a]of e)n.house(s,r,o,{...t,storeys:a??1,lit:.62});n.house(-2.4,5.9,.2+Math.PI,{w:1.5,d:2.9,storeys:2,stoneWalls:!0,m:{roof:"slate"},lit:.5,chimney:!1,shed:!1,rh:1.3}),n.at(-2.4,5.9,.2+Math.PI),n.box("stone",.75,2.9,.75,0,0,1.5),n.cyl("slate",.02,.62,1.1,0,2.9,1.5,4),n.bridge(gr(.9)+.05,.95,.06,3,.8),n.gallows(1.4,2.7,-.5),n.cart(3.3,1.5,.3),n.well(-.6,1.9),n.stall(3.9,3,1.2),n.stall(-.9,3.5,2.5,"woodDark"),n.torch(.3,3.5,.6,16747056,!0).torch(2.9,3.6,.6,16747056,!0).torch(-1.6,.9,.6).torch(4.4,.9,.6).torch(gr(.9)+1.8,.4,.6).torch(.9,-3.3,.6);for(let s=0;s<9;s++)n.crate(3.6+n.r.range(-.4,.4),2.1+n.r.range(-.3,.3),n.r.range(.14,.22));for(let s=0;s<6;s++)n.barrel(-1.6+n.r.range(-.3,.3),3.2+n.r.range(-.3,.3));n.fence([[6.2,-1.2],[12.6,-1.4],[12.8,-8.6],[6.4,-8.8],[6.2,-1.2]]),n.fence([[-4.4,3.4],[-4.6,7.2],[-1.2,7.6]]);for(let s=0;s<14;s++){const r=-.5+Math.PI+n.r.range(-1.2,1.2),o=n.r.range(.9,1.9),a=1.4+Math.sin(r+2.2)*o+.6,l=2.7+Math.cos(r+2.2)*o+.8;n.agent({kind:"villager",path:[[a,l]],yaw:Math.atan2(1.4-a,2.5-l),seed:s})}n.agent({kind:"guard",path:[[.75,2.2]],yaw:2.2}).agent({kind:"guard",path:[[2.2,3.4]],yaw:2.6}),n.agent({kind:"villager",path:[[1,2.75]],yaw:2.4,lift:.5,color:2762274,pose:"talk"}).agent({kind:"villager",path:[[1.5,2.42]],yaw:2.4,lift:.5,color:9075302}).agent({kind:"villager",path:[[1.78,2.3]],yaw:2.4,lift:.5,color:7300696}),n.agent({kind:"villager",path:[[-4.5,3.3]],yaw:1.3,color:5919048}),n.agent({kind:"villager",path:bo.slice(1,5),speed:.2,seed:1}).agent({kind:"villager",path:bo.slice(1,5),speed:.17,phase:31,seed:3}).agent({kind:"villager",path:[[.4,-.2],...ka.slice(1,3)],speed:.15,seed:4}).agent({kind:"villager",path:[[5.4,2.6],[7.8,1],[8.2,-1.6],[9,-5]],speed:.14,seed:2}).agent({kind:"villager",path:[[-9.6,1.4],[-7.6,.9],[-5,.9],[-3.4,.7]],speed:.16,seed:5}).agent({kind:"guard",path:[[-2.4,.5],[3.8,.8],[5,2.4],[1.5,4.3],[-1.8,2.6],[-2.4,.5]],speed:.13,loop:!0});const i=(s,r)=>Li(s,r,bo)>1.1&&Li(s,r,ka)>1&&Math.hypot(s-1.2,r-2.6)>4.2&&!e.some(([o,a])=>Math.hypot(s-o,r-a)<1.9)&&!(s>6&&s<13&&r<-1&&r>-9);ge(n,"broadleaf",70,Bn(18),(s,r)=>i(s,r)&&Math.abs(s-gr(r))>1.2,{s0:.9,s1:1.6}),ge(n,"pine",110,Je(9.5,20),(s,r)=>i(s,r),{s0:.8,s1:1.5}),ge(n,"bush",120,Bn(17),i,{s0:.5,s1:1.2}),ge(n,"rock",50,Bn(18),(s,r)=>Math.abs(s-gr(r))<2.2||Math.hypot(s,r)>9,{s0:.3,s1:1,minH:-.2});for(let s=0;s<4;s++)n.bird({x:1.5,z:2.5,r:3+s*.8,h:4.6+s*.4,speed:.42,phase:s*1.9})}},wo=[[-15,6],[-9,4.5],[-5,5.5],[-1.5,3.2],[1.8,.6],[4.6,-2.2]],vr=[5.6,-3.6],Hx={id:"forest",lat:26,lon:14,radius:15,blend:10,profile(n,t,e){let i=1.25+rn(n,t,.17)*2.6+rn(n,t,.7)*.3+fc(n*.08,1,t*.08,3)*1.4*Nt(6,14,e);const s=Nt(4.6,2.6,Math.hypot(n-vr[0],t-vr[1]));i=$t(i,1.05,s);const r=Nt(1.5,.5,Li(n,t,wo));i=$t(i,i*.86+.1,r*.5);const o=Math.abs(n+4.5+1.6*Math.sin(t*.3));return i=$t(-.3,i,Nt(.25,1.5,o)*1+Nt(-2,4,t)*0),i},paint(n,t,e,i,s,r){Nr(wo,.3,.8)(n,t,e,i,s),s[2]=Math.max(s[2],.55),s[1]=Math.max(s[1],Nt(3.6,2.4,Math.hypot(n-vr[0],t-vr[1]))*.7),r.multiplyScalar(.9)},build(n){const[t,e]=vr,i=[];for(let o=0;o<=26;o++){const a=o/26*6.283*.9+2.5;i.push([t+Math.cos(a)*3.3,e+Math.sin(a)*2.9])}n.palisade(i,.8);const s=[[-1.4,-1,.8],[.3,-1.6,.1],[1.7,-.5,-.9],[1.2,1.3,2.4],[-.9,1.2,2.9]];for(const[o,a,l]of s)n.house(t+o,e+a,l,{w:1.15,d:1.5,storeys:1,m:{roof:"thatch",wall:"woodDark",frame:"woodDark"},lit:.5,rh:.75,shed:!1});n.at(t-2.4,e+1.9,.6);for(const o of[-1,1])for(const a of[-1,1])n.box("woodDark",.07,1.7,.07,o*.3,0,a*.3);n.box("wood",.8,.06,.8,0,1.4,0),n.roof("thatch",.8,.8,.3,1.95,.1,.06),n.glow(0,1.7,0,16756832,.5,2),n.at(t,e,0),n.cyl("stone",.2,.24,.08,0,0,0,8),n.glow(0,.2,0,16742952,1.1,2).light(0,.5,0,16747064,6,6).smoke(0,.2,0,.7,.6);for(let o=0;o<6;o++){const a=o/6*6.283;n.agent({kind:"hidden",path:[[t+Math.cos(a)*.62,e+Math.sin(a)*.62]],yaw:Math.atan2(-Math.cos(a),-Math.sin(a)),seed:o})}n.agent({kind:"hidden",path:[[t-2.2,e+1],[t-.4,e+2.1],[t+2.2,e+1.4],[t+2.4,e-1.2]],speed:.1}),n.agent({kind:"hidden",path:[[t-2.4,e+1.9]],lift:1.46,yaw:-1.2,color:2764838}),n.agent({kind:"hidden",path:[[i[0][0]+.3,i[0][1]+.1]],yaw:2.2,pose:"armsUp"}),n.at(i[0][0]+.15,i[0][1]-.25,.6),n.box("wood",.9,.07,.07,0,.5,0,0,0,.25);for(let o=0;o<3;o++)n.at(t+1.9+o*.5,e+2-o*.3,.5),n.box("woodDark",.05,.5,.05,0,0,0),n.box("woodDark",.36,.05,.05,0,.36,0),n.cyl("thatch",.09,.11,.24,0,.26,0,7),n.cyl("thatch",.06,.06,.1,0,.5,0,7);n.agent({kind:"hidden",path:[[-1.2,3],[1.8,.6],[3.6,-1.4]],speed:.09,seed:1}),n.wall([[-6.2,6.8],[-4.4,6.9],[-4.3,8.4],[-6.3,8.3],[-6.2,6.8]],{h:.9,th:.2,ruin:.55,plain:!0,mat:"stoneDark"}),n.tower(-1.2,1.4,{r:.6,h:2.3,mat:"stoneDark",lit:0}),n.column(-2,2.2,1,!0,"stoneDark");for(const[o,a]of[[-8.5,-5.5],[-9.6,-6.6],[-3.5,-9.5],[9.5,5.5],[-11.5,.5]])n.at(o,a,n.r()*6),n.glow(-.05,.42,0,16717061,.14,3).glow(.05,.42,0,16717061,.14,3);for(let o=0;o<10;o++)n.instance("bones",-8+n.r.range(-1.6,1.6),-5+n.r.range(-1.4,1.4),n.r()*6,n.r.range(.8,1.5));for(let o=0;o<26;o++)n.glow(...(n.at(n.r.range(-12,12),n.r.range(-12,12),0),[0,n.r.range(.3,1.5),0]),12576922,.09,4);const r=(o,a)=>Li(o,a,wo)>.75&&Math.hypot(o-t,a-e)>3.9&&Math.hypot(o+5.3,a-7.6)>1.6&&Math.hypot(o+1.2,a-1.4)>1;ge(n,"pine",760,Bn(22),r,{s0:.9,s1:2.1}),ge(n,"dead",120,Bn(20),r,{s0:1,s1:2.2}),ge(n,"broadleaf",90,Bn(20),r,{s0:1,s1:1.8}),ge(n,"bush",220,Bn(20),(o,a)=>Li(o,a,wo)>.4,{s0:.5,s1:1.3}),ge(n,"rock",110,Bn(20),null,{s0:.4,s1:1.6});for(let o=0;o<3;o++)n.bird({x:-3,z:-2,r:4+o,h:6.5,speed:.36,phase:o*2.2})}},Eo=[0,-1.5],xr=[.2,4.6];function Vx(n,t,e,i){n.at(t,e,i),n.box("blocks",1.7,3,5.4,0,-.3,0),n.gable("blocks",1.7,1.3,5.4,0,2.7,0),n.roof("slate",1.7,5.4,1.3,2.7,.1,.07);for(const s of[-1,1]){n.box("blocks",.8,1.6,5.2,s*1.2,-.3,0),n.box("slate",1,.07,5.3,s*1.25,1.5,0,0,0,-s*.5);for(let r=0;r<7;r++){const o=-2.4+r*.8;n.box("blocksDark",.3,2.1,.22,s*1.75,-.3,o),n.box("blocksDark",.7,.14,.18,s*1.42,1.85,o,0,0,-s*.75),n.cyl("blocksDark",0,.1,.42,s*1.75,1.8,o,4),r<6&&(n.box("window",.04,.62,.2,s*1.61,.45,o+.4),n.glow(s*1.72,.76,o+.4,16754250,.7,1),n.box("window",.04,.5,.16,s*.86,2,o+.4))}}n.box("blocks",4.6,2.7,1.3,0,-.3,-1),n.gable("blocks",1.3,1,4.6,0,2.4,-1,Math.PI/2);for(const s of[-1,1])n.cyl("window",.36,.36,.05,s*2.31,1.6,-1,12,0,Math.PI/2),n.glow(s*2.45,1.6,-1,16754250,1.4,1);n.cyl("blocks",.84,.86,3,0,-.3,-2.75,10),n.cyl("slate",.02,.92,.9,0,2.7,-2.75,10),n.cyl("blocksDark",.22,.3,.9,0,3.6,-1,8),n.cyl("slate",0,.34,2.6,0,4.5,-1,8);for(const s of[-1,1]){n.box("blocks",1.05,4.9,1.05,s*.95,-.3,2.9),n.box("blocksDark",1.15,.12,1.15,s*.95,4.6,2.9),n.cyl("slate",0,.74,2.3,s*.95,4.72,2.9,4);for(const r of[[-1,-1],[1,-1],[-1,1],[1,1]])n.cyl("blocksDark",0,.1,.6,s*.95+r[0]*.5,4.7,2.9+r[1]*.5,4);n.box("window",.16,.7,.04,s*.95,3.3,3.44),n.box("black",.2,.55,.04,s*.95,1.6,3.44),n.glow(s*.95,3.65,3.55,16754250,.8,1)}n.cyl("window",.46,.46,.06,0,2.55,2.72,16,Math.PI/2),n.glow(0,2.55,2.9,16754250,2,1),n.box("black",.5,.85,.06,0,0,2.72),n.box("blocksDark",.9,.5,.3,0,1,2.8);for(let s=0;s<4;s++)n.box("blocksDark",1.5-s*.14,.07,.24,0,-.26+s*.07,3.75-s*.2)}const kx={id:"nuns",lat:44,lon:40,radius:13,blend:9,profile(n,t,e){let i=.95+rn(n,t,.19)*.9+rn(n,t,1,2)*.08+Nt(6,14,-t)*2.2;const s=Nt(7.5,3.9,Math.hypot(n-Eo[0],(t-Eo[1])*.8));i=$t(i,2.2,s);const r=Nt(3.2,2.2,Math.hypot(n-xr[0],t-xr[1]));return i=$t(i,1.5,r),i},paint(n,t,e,i,s,r){Nr([[.2,2.2],[.2,7],[1.5,10],[4,14]],.4)(n,t,e,i,s);const o=Nt(3.2,2.2,Math.hypot(n-xr[0],t-xr[1]));s[1]=Math.max(s[1],o*.9),r.multiplyScalar(.85)},build(n){Vx(n,Eo[0],Eo[1],0);const[t,e]=xr,i=[];for(let o=0;o<=22;o++){const a=o/22*6.283*.82+.55+Math.PI/2;i.push([t+Math.cos(a)*3.4,e+Math.sin(a)*3.1])}n.palisade(i,.62),n.at(t-.2,e-.3,.3),n.cyl("stone",.3,.36,.5,0,0,0,10),n.cyl("stoneDark",.1,.13,.9,.12,.5,0,6),n.box("black",.2,.2,.06,0,.12,.33),n.glow(0,.24,.4,16742952,.8,2).light(0,.5,.6,16747064,7,6).smoke(.12,1.45,0,.9,.6);for(let o=0;o<3;o++)for(let a=0;a<6-o;a++)n.at(t-1.9+a*.13+o*.065,e-1.5,0),n.cyl("wood",.06,.06,.5,0,.06+o*.11,0,6,Math.PI/2);n.well(t+1.9,e-1.2),n.at(t+.9,e+.5,-.5),n.box("wood",.7,.04,.36,0,.26,0);for(const o of[-1,1])n.box("woodDark",.04,.26,.3,o*.3,0,0);n.box("bone",.2,.03,.26,0,.3,0),n.agent({kind:"nun",path:[[t+1.15,e+.2]],yaw:2.6,pose:"talk"});for(let o=0;o<5;o++)n.agent({kind:"villager",path:[[t+.55-o*.34,e+.95+o*.22]],yaw:-.9,seed:o+2});n.agent({kind:"nun",path:[[t-1.1,e+.7]],yaw:.9}).agent({kind:"villager",path:[[t-.78,e+.95]],yaw:-2.2,pose:"armsUp",color:7035464});for(let o=0;o<3;o++)n.agent({kind:"villager",path:[[t-.5+o*.3,e+.25-o*.1]],yaw:3+o*.3,seed:o});n.agent({kind:"cult",path:[[5.2,2.2],[5.6,5],[4.6,8.6],[5.6,5]],speed:.06,color:1446927,loop:!0}),n.agent({kind:"nun",path:[[.1,2.3],[.2,3.1]],speed:.03});const s={m:{roof:"thatch",wall:"woodDark",frame:"woodDark",plinth:"stoneDark"},storeys:1,lit:.35,shed:!1};for(const[o,a,l]of[[-5.2,3.6,1],[-6.6,6.2,.6],[-4.4,8.2,2],[5,3.2,-.9],[6.3,6,-.5],[4.2,8.6,-2.2],[-7.6,1.4,1.3],[-2.6,9.4,2.7]])n.house(o,a,l,{...s,w:n.r.range(1.2,1.5),d:n.r.range(1.6,2),rh:.7});n.fence([[-6.4,3],[-8.2,4.4],[-8,7.2]]),n.fence([[6.2,2.2],[7.6,3.8],[7.6,7]]);for(let o=0;o<46;o++)n.grave(3.4+o%8*.55+n.r.range(-.1,.1),-3.6+(o/8|0)*.75+n.r.range(-.1,.1),0);n.fence([[3,-4.2],[7.9,-4.3],[8,.8],[3.1,.9]]),n.torch(-.9,2.9,.7,16747056,!0).torch(1.3,2.9,.7,16747056).torch(-2.9,6,.6).torch(5.3,4.2,.6);const r=(o,a)=>Math.hypot(o,(a+1.5)*.75)>4.4&&Math.hypot(o-t,a-e)>3.9&&!(o>2.8&&o<8.2&&a>-4.5&&a<1);ge(n,"dead",120,Bn(19),r,{s0:1,s1:2.3}),ge(n,"pine",200,Je(8.5,21),r,{s0:.9,s1:1.8}),ge(n,"rock",80,Bn(19),r,{s0:.4,s1:1.7}),ge(n,"bush",80,Bn(18),r);for(let o=0;o<7;o++)n.bird({x:0,z:.5,r:1.6+o*.5,h:7.4+o*.25,speed:.6-o*.04,phase:o})}},qe=[.5,-2.5],Gx={id:"kingdom",lat:16,lon:44,radius:16,blend:10,profile(n,t,e){let i=.7+rn(n,t,.15)*.5;i=$t(i,1.05,Nt(11.5,9.2,e));const s=Math.hypot(n-qe[0],t-qe[1])+rn(n,t,.9,2)*.5;i=$t(i,3.1,Nt(5.6,4.5,s));const r=Math.abs(t-12.4-Math.sin(n*.25)*.9);return i=$t(-.6,i,Nt(.7,2,r)),i},paint(n,t,e,i,s,r){const o=Math.hypot(n,t),a=Math.min(Li(n,t,[[.3,13],[.3,9.3],[.6,4.6],[3.6,2.6],[5.8,-1.6],[4.5,-5.5]]),Math.abs(o-7.4));o<9.3&&(s[1]=Math.max(s[1],.5+Nt(.6,.2,a)*.5),s[2]=0),Math.hypot(n-qe[0],t-qe[1])<4.4&&(s[1]=.4,s[0]=.5)},build(n){const t={m:{roof:"slate",wall:"plaster",frame:"woodDark"}},e=20,i=[];for(let o=0;o<=e;o++){const a=Math.PI/2+.16+o/e*(Math.PI*2-.32);i.push([Math.cos(a)*9.6,Math.sin(a)*9.6])}n.wall(i,{h:1.5,th:.4,mat:"blocks"});for(let o=0;o<=e;o+=2)n.tower(i[o][0],i[o][1],{r:.62,h:2.3,lit:.6,mat:"blocks"});n.at(0,9.55,0),n.box("blocks",3,.9,.9,0,1.3,0);for(const o of[-1,1])n.box("blocks",.2,1.3,.9,o*.6,0,0);n.box("black",1,1.2,.5,0,0,0),n.glow(0,.8,.5,16751168,1.2,0),n.tower(-1.5,9.5,{r:.8,h:3,roof:1.3,mat:"blocks"}).tower(1.5,9.5,{r:.8,h:3,roof:1.3,mat:"blocks"}),n.bridge(.3,12.4,Math.PI/2,4.2,.95),n.banner(-.9,10.3,0,1.6).banner(1.5,10.3,0,1.6),n.torch(-.7,10.6,.7,16747056,!0).torch(1.3,10.6,.7);for(const[o,a]of[[8.2,30],[6.7,24],[5.6,18]])for(let l=0;l<a;l++){const c=l/a*6.283+o,u=Math.cos(c)*o,h=Math.sin(c)*o;Math.abs(u-.3)<.9&&h>4||Math.hypot(u-qe[0],h-qe[1])<5.9||Math.hypot(u-3.6,h-5.6)<1.6||n.house(u,h,-c+(o<7?Math.PI/2:-Math.PI/2),{...t,w:n.r.range(1,1.35),d:n.r.range(1.3,1.7),storeys:n.r()<.6?3:2,lit:.55,shed:!1,rh:n.r.range(.7,1)})}n.well(3.6,5.6),n.stall(3,4.8,.4).stall(4.4,5,-.6,"woodDark").stall(4.2,6.4,2.6).stall(2.9,6.3,3.4,"woodDark"),n.torch(3.6,4.9,.6,16747056,!0);for(let o=0;o<6;o++)n.agent({kind:o%3?"villager":"noble",path:[[3.6+Math.cos(o*1.1)*.9,5.6+Math.sin(o*1.1)*.9],[3.6+Math.cos(o*1.1+2)*1,5.6+Math.sin(o*1.1+2)*1]],speed:.06+o*.01,seed:o});const s=[];for(let o=0;o<=14;o++){const a=o/14*6.283;s.push([qe[0]+Math.cos(a)*4.25,qe[1]+Math.sin(a)*4.25])}n.wall(s,{h:1.1,th:.3,mat:"blocks"});for(let o=0;o<14;o+=2)n.tower(s[o][0],s[o][1],{r:.45,h:1.9,mat:"blocks",roof:.9,lit:.7});n.at(qe[0]-.3,qe[1]-.6,.2),n.box("blocks",2.3,3.6,2.3,0,-.3,0),n.box("blocks",2.5,.14,2.5,0,3.3,0);for(const o of[-1,1])for(const a of[-1,1])n.cyl("blocks",.42,.45,4.6,o*1.15,-.3,a*1.15,10),n.cyl("slate",0,.56,1.4,o*1.15,4.3,a*1.15,10),n.box("window",.1,.24,.06,o*1.15,3.4,a*1.15+a*.44),n.glow(o*1.15,3.5,a*1.65,16752704,.6,1);for(let o=0;o<4;o++)for(let a=0;a<3;a++)n.box("window",.12,.3,.05,-.75+o*.5,.8+a*.9,1.16),(o+a)%2&&n.glow(-.75+o*.5,.95+a*.9,1.3,16752704,.5,1);n.box("blocks",1.2,1.9,1.2,0,3.4,0),n.cyl("slate",0,1,1.8,0,5.3,0,4),n.house(qe[0]+2.2,qe[1]+1.4,.9,{stoneWalls:!0,w:1.6,d:3.2,storeys:2,rh:1.3,m:{roof:"slate",plinth:"blocks"},lit:.9,shed:!1}),n.house(qe[0]-2.4,qe[1]+1.8,-.7,{stoneWalls:!0,w:1.3,d:2,storeys:2,m:{roof:"slate",plinth:"blocks"},lit:.8,shed:!1}),n.house(qe[0]+1.6,qe[1]-2.6,2.2,{stoneWalls:!0,w:1.3,d:2,storeys:2,m:{roof:"slate",plinth:"blocks"},lit:.8,shed:!1}),n.cart(.1,11,1.57).cart(.5,13.6,1.5),n.agent({kind:"guard",path:[[-.5,10.7]],yaw:1.4,pose:"talk"}).agent({kind:"guard",path:[[.9,10.5]],yaw:-1.2}).agent({kind:"villager",path:[[.75,11.3]],yaw:-2,pose:"armsUp"});for(let o=0;o<7;o++)n.agent({kind:"villager",path:[[2.6-o*.3,4.55-o*.12]],yaw:1.2,seed:o+5});for(let o=0;o<4;o++)n.agent({kind:"villager",path:[[5.6,1.5],[6.9,3.2],[6.2,5.6],[4.2,6.9]],speed:.08,phase:o*1.7,seed:o,loop:!1});const r=[[.3,12.8],[.3,9.3],[.6,4.6],[3.6,2.6],[5.6,-.6]];for(let o=0;o<9;o++)n.agent({kind:o===0?"noble":o<3?"guard":"villager",path:r,speed:.11,phase:o*.36,seed:o});for(let o=0;o<8;o++){const a=o/8*6.283,l=[];for(let c=0;c<=5;c++){const u=a+c*.13;l.push([Math.cos(u)*9.6,Math.sin(u)*9.6])}n.agent({kind:"guard",path:l,speed:.1,lift:1.52,phase:o*3})}for(let o=0;o<6;o++)n.torch(Math.cos(o*1.05+.4)*7.45,Math.sin(o*1.05+.4)*7.45,.6,16747056,o<2);ge(n,"broadleaf",150,Je(10.6,22),(o,a)=>Math.abs(a-12.4)>1.8||Math.abs(o)>3,{s0:.9,s1:1.6}),ge(n,"pine",160,Je(12,23),null,{s0:.8,s1:1.6}),ge(n,"bush",120,Je(10.4,21)),ge(n,"rock",70,Je(4.3,5.6).bind(null),null,{s0:.5,s1:1.4});for(let o=0;o<6;o++)n.bird({x:qe[0],z:qe[1],r:2+o*.7,h:8.3+o*.2,speed:.5,phase:o*1.1})}},Wx={id:"arena",lat:-12,lon:34,radius:15,blend:10,profile(n,t,e){let i=1.45+rn(n,t,.22)*.9+fc(n*.11,3,t*.11,4)*4.2*Nt(8.5,15,e)+rn(n,t,1.3,2)*.1;return i=$t(i,1.2,Nt(8,5.4,Math.hypot(n,t*1.2))),i=$t(i,.92,Nt(2.9,2.2,Math.hypot(n,t*1.2))),i},paint(n,t,e,i,s,r){s[0]=Math.max(s[0],.45+rn(n,t,.6)*.5),s[2]=0;const o=Math.hypot(n,t*1.2);s[1]=Math.max(s[1],Nt(5.2,4,o)),r.multiplyScalar(.8),o<2.6&&r.multiplyScalar(.55)},build(n){for(let r=0;r<34;r++){const o=r/34*6.283,a=Math.cos(o)*5.6,l=Math.sin(o)*4.6,c=Math.atan2(Math.cos(o)*4.6,Math.sin(o)*5.6)+Math.PI/2+Math.PI/2,u=r>23&&r<27||r===8,h=n.r(),f=.95;if(u){n.r()<.6&&n.column(a,l,1.2,!0,"blocksDark",.16);continue}n.arch(a,l,c,f*.72,1,"blocks",.3),n.at(a,l,c),n.box("blocks",f+.12,.22,.5,0,1.5,0),h>.35&&(n.arch(a,l,c,f*.72,.8,"blocks",.26,1.72),n.at(a,l,c,1,1.72),h>.6&&n.box("blocks",f+.12,.2,.42,0,1.25,0));for(const[d,g]of[[.86,.95],[.74,.62],[.63,.32]])n.at(a*d,l*d,c),n.box("blocksDark",f*d+.1,g+.4,.62,0,-.4,0);r%4===0&&n.torch(a*.55,l*.55,.75,16726548,r%8===0)}n.at(0,0,0),n.cyl("blocksDark",1.7,1.75,.06,0,0,0,24),n.cyl("blood",1.25,1.25,.015,0,.065,0,6),n.cyl("blocksDark",1.1,1.1,.02,0,.07,0,24),n.cyl("blood",.34,.34,.03,0,.08,0,12),n.box("blocksDark",.5,.34,.9,0,.08,0),n.glow(0,.6,0,16716294,3.2,3).light(0,.9,0,16719880,16,10);for(let r=0;r<14;r++)n.glow(n.r.range(-1,1),.2,n.r.range(-1,1),16730650,.15,4);for(const[r,o]of[[1.45,12],[2.1,18],[2.7,22]])for(let a=0;a<o;a++){const l=a/o*6.283+r;n.agent({kind:"cult",path:[[Math.cos(l)*r,Math.sin(l)*r/1.2]],yaw:Math.atan2(-Math.cos(l),-Math.sin(l)),seed:a,pose:r<2.5?"kneel":"stand",color:[5592668,4868944,6316390][a%3]})}n.agent({kind:"cult",path:[[0,.7]],yaw:Math.PI,color:3816e3,scale:1.12,pose:"armsUp"});const s=[[-12,8],[-8.5,4.4],[-6.3,1.9],[-4.4,.4],[-2.9,.2]];for(let r=0;r<9;r++)n.agent({kind:"cult",path:s,speed:.07,phase:r*.4,loop:!1,color:5592668});for(let r=0;r<6;r++){const o=r/6*6.283+.35,a=Math.cos(o)*8.9,l=Math.sin(o)*7.9;n.instance("spire",a,l,o,2.6+n.r()*.7,-.3),n.instance("spire",a+.7,l+.3,o+2,1.5,-.3),n.at(a*.93,l*.93,0),n.glow(0,3.6,0,16718344,1.5,3).glow(.2,3.1,.1,16718344,.4,3).glow(-.2,3.1,-.1,16718344,.4,3);for(let c=0;c<3;c++)n.at($t(a,a*.66,c/3+.1),$t(l,l*.66,c/3+.1),-o+Math.PI/2),n.box("iron",.06,.06,1,0,3.4-c*1.1,0,0,.75,0)}ge(n,"spire",70,Je(10.5,22),null,{s0:.6,s1:2.6,lift:-.3}),ge(n,"rock",160,Je(6.6,21),null,{s0:.5,s1:2.2}),ge(n,"dead",60,Je(7,20),null,{s0:1,s1:2});for(let r=0;r<9;r++)n.bird({x:0,z:0,r:2.5+r*.6,h:6+r*.3,speed:.7-r*.04,phase:r*.7})}},we={holy:[0,-2.5],blood:[2.25,1.35],dark:[-2.25,1.35]},Xx={id:"reliefs",lat:-28,lon:8,radius:12,blend:9,profile(n,t,e){let i=.85+rn(n,t,.2)*.8+rn(n,t,1.1,2)*.08+Nt(5,13,n)*1.8;return i=$t(i,1.3,Nt(8.2,6.4,e)),i=$t(i,-.7,Nt(-8.8,-11,t+Math.sin(n*.4)*.8)),i},paint(n,t,e,i,s,r){Math.hypot(n,t)<6.6&&(s[0]=Math.max(s[0],.5),s[2]=0);const a=h=>Nt(3.4,.8,Math.hypot(n-h[0],t-h[1])),l=a(we.holy),c=a(we.blood),u=a(we.dark);r.r*=1+l*.5+c*.5-u*.55,r.g*=1+l*.42-c*.55-u*.6,r.b*=1+l*.1-c*.6-u*.2,s[1]=Math.max(s[1],c*.8),s[0]=Math.max(s[0],u*.9)},build(n){n.at(0,0,0),n.cyl("blocksDark",6,6.1,.1,0,-.02,0,48),n.cyl("blocks",1,1.05,.14,0,.06,0,16);for(let t=0;t<18;t++){const e=t/18*6.283,i=n.r()<.5;n.column(Math.cos(e)*5.7,Math.sin(e)*5.7,2.4,i,"blocks",.2),!i&&t%3!==2&&(n.at(Math.cos(e+.175)*5.7,Math.sin(e+.175)*5.7,-e-.175,1,2.5),n.box("blocks",.4,.22,2.05,0,0,0))}for(const[t,[e,i]]of Object.entries(we))n.at(e,i,Math.atan2(-e,-i)),n.cyl("blocksDark",.5,.56,.2,0,0,0,8),n.relief(e*1,i*1,Math.atan2(-e,-i),t);for(let t=0;t<26;t++){const e=n.r()*6.283,i=n.r.range(.7,2.3);n.at(we.holy[0]+Math.cos(e)*i,we.holy[1]+Math.sin(e)*i*.8,0),n.cyl("bone",.014,.017,.06+n.r()*.1,0,0,0,5),n.glow(0,.2,0,16767120,.17,2)}for(let t=0;t<16;t++)n.glow(...(n.at(we.holy[0]+n.r.range(-1.6,1.6),we.holy[1]+n.r.range(-1.6,1.2),0),[0,.3,0]),16771760,.12,4);n.at(we.blood[0]+.9,we.blood[1]+.9,0),n.cyl("blood",.9,.9,.012,0,.012,0,14);for(let t=0;t<5;t++)n.instance("dead",we.blood[0]+n.r.range(.4,2.6),we.blood[1]+n.r.range(-.6,2.4),n.r()*6,n.r.range(.7,1.2),-.03,new Lt(4852744));for(let t=0;t<14;t++)n.glow(...(n.at(we.blood[0]+n.r.range(-1.2,2),we.blood[1]+n.r.range(-1.2,2),0),[0,.12,0]),16722448,.13,4);for(let t=0;t<9;t++)n.instance("spire",we.dark[0]+n.r.range(-2.6,.2),we.dark[1]+n.r.range(-.8,2.6),n.r()*6,n.r.range(.25,.6),-.2,new Lt(1380892));for(let t=0;t<22;t++)n.glow(...(n.at(we.dark[0]+n.r.range(-2,1.2),we.dark[1]+n.r.range(-1.4,2),0),[0,n.r.range(.2,1.4),0]),10514687,.13,4);n.agent({kind:"villager",path:[[we.holy[0]*.55,we.holy[1]*.55]],yaw:Math.PI,color:12168596}).agent({kind:"cult",path:[[we.blood[0]*.55,we.blood[1]*.55]],yaw:-2.1,color:5901578}).agent({kind:"nun",path:[[we.dark[0]*.55,we.dark[1]*.55]],yaw:2.1,color:1709094}),ge(n,"pine",190,Je(7.6,20),null,{s0:.9,s1:1.8}),ge(n,"dead",50,Je(6.8,18),null,{s0:1,s1:1.9}),ge(n,"rock",100,Je(6.6,19),null,{s0:.4,s1:1.7}),ge(n,"bush",90,Je(6.6,18))}},qx=[zx,Bx,Hx,kx,Gx,Wx,Xx],Re=qx.map((n,t)=>{const e=ex(n);return{...n,anchor:e,index:t,group:null,sight:[],construct(){if(this.group)return this.group;const i=new Ee;i.matrixAutoUpdate=!1,i.matrix.copy(e.matrix),i.matrixWorldNeedsUpdate=!0,i.add(Px(e,n.paint));const s=new mx(e,100+t*17);s.sight=this.sight,n.build(s);for(let o=0;o<(t===4?0:12);o++){const a=s.r()*6.283,l=s.r.range(2.5,n.radius);s.mist(Math.cos(a)*l,Math.sin(a)*l,s.r.range(.9,1.8))}t<4&&ge(s,"tuft",1400,o=>{const a=o()*6.283,l=Math.sqrt(o())*12;return[Math.cos(a)*l,Math.sin(a)*l]},null,{s0:.7,s1:1.5,lift:0});const r=s.build();return i.add(r),i.userData=r.userData,this.group=i,i}}}),De=[{id:"ossuary",s:0,x:1.3,z:3,th:.7,dist:4.4,az:16,el:7,fov:38,mood:"crypt",ap:1,w:1},{s:0,x:1,z:2.6,th:1,dist:8.5,az:-8,el:20,fov:36,mood:"moor",ap:.9,w:.8},{s:0,x:.2,z:.8,th:1.2,dist:24,az:-34,el:38,fov:34,mood:"moor",ap:.5,w:1},{s:1,x:0,z:1,th:0,dist:56,az:-30,el:50,fov:32,mood:"village",ap:.3,w:.9},{s:1,x:.5,z:1.6,th:.5,dist:21,az:-28,el:27,fov:34,mood:"village",ap:.7,w:1},{id:"village",s:1,x:1.5,z:2.6,th:.75,dist:7.6,az:30,el:15,fov:36,mood:"village",ap:1,w:1.2},{s:1,x:-5.4,z:.9,th:.5,dist:6.4,az:-40,el:10,fov:38,mood:"village",ap:1,w:.9},{s:2,x:-2,z:3,th:0,dist:48,az:-70,el:46,fov:32,mood:"forest",ap:.3,w:.9},{id:"bloodwood",s:2,x:-4.6,z:5.6,th:2.6,dist:8.2,az:-112,el:4,fov:44,mood:"forest",ap:1,w:1.2},{s:6,x:0,z:0,th:0,dist:44,az:-20,el:46,fov:32,mood:"reliefs",ap:.3,w:.9},{id:"reliefs",s:6,x:0,z:-.6,th:.7,dist:8.4,az:4,el:17,fov:38,mood:"reliefs",ap:.9,w:1},{id:"reliefs-holy",s:6,x:0,z:-2,th:.6,dist:5.2,az:4,el:19,fov:36,mood:"reliefs",ap:1,w:.6},{id:"reliefs-blood",s:6,x:1.9,z:1.1,th:.5,dist:4.4,az:122,el:20,fov:36,mood:"reliefs",ap:1,w:.6},{id:"reliefs-dark",s:6,x:-1.9,z:1.1,th:.5,dist:4.4,az:238,el:20,fov:36,mood:"reliefs",ap:1,w:.9},{s:2,x:2,z:-1,th:0,dist:46,az:30,el:44,fov:32,mood:"forest",ap:.3,w:.9},{id:"forest",s:2,x:5.4,z:-3.2,th:3,dist:13.5,az:58,el:8,fov:42,mood:"forest",ap:1,w:1.2},{s:3,x:0,z:1,th:0,dist:52,az:20,el:46,fov:32,mood:"nuns",ap:.3,w:.9},{id:"nuns",s:3,x:0,z:-.5,th:2.8,dist:17,az:8,el:5,fov:40,mood:"nuns",ap:.8,w:1.2},{s:3,x:.2,z:4.4,th:1,dist:6.8,az:-44,el:12,fov:38,mood:"nuns",ap:1,w:.9},{s:5,x:0,z:0,th:0,dist:56,az:-110,el:42,fov:32,mood:"arena",ap:.3,w:.9},{id:"arena",s:5,x:0,z:0,th:2,dist:16,az:-112,el:7,fov:42,mood:"arena",ap:.8,w:1.2},{s:5,x:0,z:0,th:1.3,dist:8.6,az:-84,el:14,fov:40,mood:"arena",ap:1,w:.9},{s:4,x:0,z:2,th:0,dist:68,az:10,el:54,fov:32,mood:"kingdom",ap:.25,w:.9},{s:4,x:.3,z:6,th:1.4,dist:17,az:2,el:9,fov:36,mood:"kingdom",ap:.8,w:1},{id:"kingdom",s:4,x:.4,z:1.6,th:2.4,dist:23,az:22,el:16,fov:36,mood:"kingdom",ap:.85,w:1.2},{id:"solar",s:4,x:.2,z:1,th:10,dist:40,az:52,el:8,fov:44,mood:"kingdom",ap:.45,w:1.2},{s:4,x:0,z:0,th:2,dist:90,az:80,el:50,fov:32,mood:"final",ap:.2,w:1},{s:0,x:1.3,z:3,th:.7,dist:5.6,az:-20,el:9,fov:38,mood:"crypt",ap:1,w:1},{s:0,x:0,z:1,th:0,dist:80,az:-60,el:55,fov:32,mood:"final",ap:.2,w:1},{id:"world",s:-2,dist:560,az:-134,el:-4,fov:30,mood:"final",ap:0,shift:-.22,w:.6},{s:-2,dist:600,az:-130,el:-3,fov:30,mood:"final",ap:0,shift:-.22,w:0}],Ga={orbit:{light:16773598,li:3.1,laz:-62,lel:36,sky:4018800,ground:1840658,ai:.55,fog:659222,fd:0,exp:1.05,bloom:.55,ecl:0,atmo:1,stars:1},crypt:{light:11124991,li:1.5,laz:-30,lel:62,sky:1844792,ground:657414,ai:.34,fog:461328,fd:.05,exp:1,bloom:.9,ecl:0,atmo:.6,stars:.4},moor:{light:11848447,li:2.5,laz:-70,lel:30,sky:3360874,ground:1380621,ai:.62,fog:1581614,fd:.016,exp:1.12,bloom:.7,ecl:0,atmo:.9,stars:1},village:{light:16764834,li:2.7,laz:78,lel:22,sky:4477034,ground:1840400,ai:.6,fog:2828849,fd:.012,exp:1.1,bloom:.75,ecl:0,atmo:.9,stars:.6},forest:{light:11851458,li:2.9,laz:-40,lel:44,sky:3824204,ground:1317396,ai:.85,fog:1846310,fd:.02,exp:1.32,bloom:.7,ecl:0,atmo:.8,stars:.4},nuns:{light:12633304,li:1.9,laz:60,lel:28,sky:3816522,ground:1314834,ai:.62,fog:2763313,fd:.03,exp:1.12,bloom:.85,ecl:0,atmo:.8,stars:.3},kingdom:{light:16766116,li:3.2,laz:100,lel:17,sky:4872312,ground:1971986,ai:.6,fog:3352874,fd:.008,exp:1.05,bloom:.7,ecl:0,atmo:1,stars:.6},arena:{light:16738872,li:2.4,laz:68,lel:16,sky:4198414,ground:1180933,ai:.6,fog:2099207,fd:.016,exp:1.2,bloom:1,ecl:0,atmo:.5,stars:1},reliefs:{light:10138346,li:1.7,laz:-80,lel:34,sky:2897492,ground:1052178,ai:.5,fog:1053470,fd:.012,exp:1.15,bloom:.95,ecl:0,atmo:.9,stars:1},final:{light:13621503,li:3.4,laz:20,lel:26,sky:6713484,ground:1709586,ai:1.5,fog:787976,fd:0,exp:1.1,bloom:.9,ecl:1,atmo:.7,stars:1}},To={scene:5,az:68,el:13},Cn=96,Kn=7,Pi={tWmH:{value:null},uWmN:{value:Array.from({length:Kn},()=>new fe(0,-1,0,0))},uWmE:{value:Array.from({length:Kn},()=>new fe(1,0,0,0))},uWmF:{value:Array.from({length:Kn},()=>new L(0,0,1))},uWmK:{value:new L(0,0,0)},uWmOn:{value:1}};function Yx(n){const t=new Uint16Array(Cn*Cn*Kn);n.forEach((i,s)=>{const r=i.anchor,o=r.radius+r.blend;for(let a=0;a<Cn;a++)for(let l=0;l<Cn;l++){const c=(l/(Cn-1)*2-1)*o,u=(a/(Cn-1)*2-1)*o;t[(s*Cn+a)*Cn+l]=pd.toHalfFloat(Yn(r,c,u))}Pi.uWmN.value[s].set(r.n.x,r.n.y,r.n.z,o),Pi.uWmE.value[s].set(r.e.x,r.e.y,r.e.z,Yn(r,0,0)),Pi.uWmF.value[s].copy(r.f)});const e=new rc(t,Cn,Cn*Kn,qo,Ni);e.minFilter=e.magFilter=Hn,e.wrapS=e.wrapT=Ri,e.generateMipmaps=!1,e.needsUpdate=!0,Pi.tWmH.value=e}const Yu=`
uniform sampler2D tWmH; uniform vec4 uWmN[${Kn}]; uniform vec4 uWmE[${Kn}]; uniform vec3 uWmF[${Kn}]; uniform vec3 uWmK; uniform float uWmOn;
`,$u=`
// how far the ground in direction d is lifted or lowered from its authored height right now
float wmH(vec3 d) {
  float h = 0.0;
  for (int i = 0; i < ${Kn}; i++) {
    vec4 n = uWmN[i]; float c = dot(d, n.xyz); if (n.w <= 0.0 || c < 0.95) continue;
    float em = clamp(uEmN[i].w, 0.0, 1.0); if (em >= 0.9999) continue;
    // scene-local surface coordinates of this direction
    float lx = ${be.toFixed(1)} * dot(d, uWmE[i].xyz) / c, lz = ${be.toFixed(1)} * dot(d, uWmF[i]) / c;
    float dn = length(vec2(lx, lz)) / n.w; if (dn >= 1.0) continue;
    vec2 uv = vec2(lx, lz) / n.w * 0.5 + 0.5; uv = (uv * ${Cn-1}.0 + 0.5) / ${Cn}.0;
    float ha = texture2D(tWmH, vec2(uv.x, (uv.y + float(i)) / ${Kn}.0)).r, base = uWmE[i].w;
    // the plain the place lies down into: its relief pressed almost flat, a little below the heart; the sea floor is left alone
    float plain = max(base - 0.45, 0.1) + (ha - base) * 0.12; plain = mix(ha, plain, smoothstep(-0.2, 0.25, ha));
    // the forming front runs out from the heart as the place rises (and back in as it sinks), a crest of earth ahead of it
    float front = em * 1.35 - 0.3, s = smoothstep(dn - 0.22, dn + 0.04, front);
    float edge = 1.0 - smoothstep(0.72, 1.0, dn), act = sin(3.14159 * em);
    float crest = 0.85 * exp(-pow((dn - front - 0.06) / 0.07, 2.0)) * act;
    float wrinkle = 0.35 * act * (1.0 - s) * sin(lx * 0.9 + lz * 0.4 + em * 6.0) * sin(lz * 0.8 - lx * 0.3);
    h += ((plain - ha) * (1.0 - s) + crest + wrinkle) * edge;
  }
  return h;
}
vec3 wmLocal(vec3 lp, inout vec3 ln, bool doN) {
  if (uWmOn < 0.5) return vec3(0.0);
  mat4 M = modelMatrix;
#ifdef USE_INSTANCING
  M = M * instanceMatrix;
#endif
  vec3 wp = (M * vec4(lp, 1.0)).xyz; float r = length(wp); vec3 d = wp / r; float h0 = wmH(d);
  if (h0 == 0.0) return vec3(0.0);
  float near = smoothstep(2.0, 9.0, length(wp - uWmK)); mat3 M3 = mat3(M);
  if (doN) {
    vec3 t1 = normalize(cross(d, abs(d.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0))), t2 = cross(d, t1); float e = 0.003;
    vec3 g = near * (t1 * (wmH(normalize(d + t1 * e)) - h0) + t2 * (wmH(normalize(d + t2 * e)) - h0)) / (e * r);
    vec3 nW = normalize(M3 * ln); nW = normalize(nW - g * dot(nW, d)); ln = normalize(transpose(M3) * nW);
  }
  return inverse(M3) * (d * h0 * near);
}
`;function Ar(n){if(!n||n.userData.wm)return n;n.userData.wm=!0;const t={...Pi,uEmN:ji.uEmN};if(n.isShaderMaterial){const r="vec4 mv = modelViewMatrix * vec4(p, 1.0);";return n.vertexShader.includes(r)&&(Object.assign(n.uniforms,t),n.vertexShader=Yu+`uniform vec4 uEmN[7];
`+$u+n.vertexShader.replace(r,`{ vec3 wmN0 = vec3(0.0, 1.0, 0.0); p += wmLocal(p, wmN0, false); }
`+r),n.needsUpdate=!0),n}const e=n.onBeforeCompile,i=n.customProgramCacheKey(),s=!!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)&&!n.flatShading;return n.onBeforeCompile=function(r,o){e.call(this,r,o),Object.assign(r.uniforms,t);const a=/uniform vec4 uEmN\[7\]/.test(r.vertexShader)?"":`uniform vec4 uEmN[7];
`;let l=r.vertexShader.replace("void main() {",Yu+a+$u+`
void main() {`);s?l=l.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 vec3 wmDl = wmLocal(position, objectNormal, true);`).replace("#include <project_vertex>",`transformed += wmDl;
#include <project_vertex>`):l=l.replace("#include <project_vertex>",`{ vec3 wmN0 = vec3(0.0, 1.0, 0.0); transformed += wmLocal(transformed, wmN0, false); }
#include <project_vertex>`),r.vertexShader=l},n.customProgramCacheKey=()=>i+"|wf"+(s?"n":""),n.needsUpdate=!0,n}let Zu=null;const $x=()=>Zu||(Zu=Ar(new jo({depthPacking:Yo})));function Rs(n,t){n.traverse(e=>{if(!e.material)return;const i=Array.isArray(e.material)?e.material:[e.material];i.forEach(Ar),!(!(e.isMesh||e.isInstancedMesh)||!e.castShadow)&&(e.customDepthMaterial?Ar(e.customDepthMaterial):e.customDepthMaterial=i[0]?.userData?.U?.uEmN&&!i[0].defines?.TRI_MIX&&t?Ar(t()):$x())})}const Cs=Math.PI/180,Ye=()=>new L;async function Zx({canvas:n,base:t,onProgress:e,reducedMotion:i}){const s=matchMedia("(max-width: 820px), (pointer: coarse)").matches;Ne.low=s||(navigator.hardwareConcurrency||4)<=4;const r=new cv({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1});if(!r.capabilities.isWebGL2)throw new Error("WebGL2 unavailable");const o=Ne.low?1.25:1.75;r.setPixelRatio(Math.min(devicePixelRatio||1,o)),r.shadowMap.enabled=!0,r.shadowMap.type=sh,r.toneMapping=di,r.outputColorSpace=os,r.info.autoReset=!1,e(.02,"Gathering stone and timber"),await ox(t,I=>e(.02+I*.3,"Gathering stone and timber"));const a=()=>new Promise(I=>setTimeout(I,0));for(ji.uEmN.value=Re.map(I=>new fe(I.anchor.n.x,I.anchor.n.y,I.anchor.n.z,i?1:0));ji.uEmN.value.length<7;)ji.uEmN.value.push(new fe(0,-1,0,1));Is.uRipC.value=new L(0,1,0),Is.uRip.value=new fe(0,0,3,0);const l=new du;l.background=new Lt(329482),l.fog=new sc(659222,0);const c=new Fl(r);{const I=new du;I.add(new Kt(new je(50,32,16),new ke({side:sn,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vP; void main(){ float up = vP.y * 0.5 + 0.5; vec3 c = mix(vec3(0.004, 0.005, 0.008), vec3(0.16, 0.2, 0.3), smoothstep(0.35, 1.0, up));
        c += vec3(1.6, 0.95, 0.5) * pow(max(0.0, dot(vP, normalize(vec3(0.7, 0.35, 0.5)))), 6.0); c += vec3(0.25, 0.35, 0.6) * pow(max(0.0, dot(vP, normalize(vec3(-0.8, 0.5, -0.2)))), 4.0); gl_FragColor = vec4(c, 1.0); }`}))),l.environment=c.fromScene(I,.02).texture,l.environmentIntensity=.7}const u=new xn(30,1,.5,6e3),h=new Jv(16777215,3);h.castShadow=!0,h.shadow.mapSize.set(Ne.low?1024:2048,Ne.low?1024:2048),h.shadow.bias=-4e-4;const f=new $v(4018800,1840658,.55);l.add(h,h.target,f);const d=Array.from({length:Ne.low?3:6},()=>{const I=new Kv(16748608,0,8,1.6);return l.add(I),I});e(.34,"Raising the land"),await a(),Yx(Re),Pi.uWmOn.value=/[?&]nomorph/.test(location.search)?0:1;const g=Cx();l.add(g);const x=()=>Ar(hx());Rs(g,x),e(.6,"Filling the seas"),await a();const m=Dx(),p=Lx(),S=Ix(),_=Ux(),v=Nx(),C=Ox(Re.map(I=>I.anchor.n));l.add(m,p,S,_,v,C);const E=new ke({transparent:!0,depthWrite:!1,blending:is,uniforms:{uE:{value:0},uTime:{value:0},uTint:{value:new Lt(14674175)},uMode:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uE, uTime, uMode; uniform vec3 uTint;
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
        gl_FragColor = vec4(c * edge, 1.0); }`}),A=new Kt(new $s(1,1),E);A.frustumCulled=!1,A.visible=!1,l.add(A);const R=()=>r.getPixelRatio();let y=2,M=2;const P=new ic(2,2);P.type=Ui;const B=new gi(2,2,{type:Ni,depthTexture:P,samples:Ne.low?0:4}),O=()=>new gi(2,2,{type:Ni,depthBuffer:!1}),V=O(),$=O(),W=O(),ct=O(),q=O(),Mt=new Ae;Mt.setAttribute("position",new se([-1,-1,0,3,-1,0,-1,3,0],3));const Et=new tc,Dt=new Kt(Mt,null);Dt.frustumCulled=!1;const Zt="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",ue=Ne.low?12:28,Z=new ke({uniforms:{tColor:{value:null},tDepth:{value:P},uNear:{value:1},uFar:{value:1e3},uFocus:{value:10},uAp:{value:0},uPx:{value:new ft},uMaxR:{value:14},uAoR:{value:100}},vertexShader:Zt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D tColor; uniform sampler2D tDepth; uniform float uNear, uFar, uFocus, uAp, uMaxR, uAoR; uniform vec2 uPx;
      float lin(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      float coc(float d){ if (d > uFar * 0.3) return 0.0; return clamp(abs(d - uFocus) / max(d, 0.001) * uAp * 26.0 - 0.6, 0.0, uMaxR); }
      void main(){ float d0 = lin(texture2D(tDepth, vUv).x); float c0 = coc(d0); vec3 acc = texture2D(tColor, vUv).rgb; float wsum = 1.0;
        if (uAp > 0.01) { for (int i = 1; i <= ${ue}; i++) { float fi = float(i); float rr = sqrt(fi / ${ue}.0); float a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * rr; vec2 uv = vUv + o * uPx * max(c0, 2.0) ; float ds = lin(texture2D(tDepth, uv).x); float cs = coc(ds);
          // a sample contributes if its own blur reaches this pixel; sharp foreground does not bleed
          float w = smoothstep(0.0, 1.0, (ds < d0 ? cs : min(cs, c0)) - rr * max(c0, 2.0) + 1.0); acc += texture2D(tColor, uv).rgb * w; wsum += w; } }
        vec3 col = acc / wsum; float ao = 0.0;
        // contact shading from depth alone: darkens creases (wall meets ground, eaves, between figures), ignores flat slopes
        if (d0 < uFar * 0.2) { float rpx = clamp(uAoR / d0, 2.0, 36.0);
          for (int i = 0; i < 4; i++) { float a = float(i) * 0.785 + 0.4; vec2 o = vec2(cos(a), sin(a)) * uPx * rpx;
            float da = lin(texture2D(tDepth, vUv + o).x), db = lin(texture2D(tDepth, vUv - o).x); ao += clamp((2.0 * d0 - da - db) / (d0 * 0.022), 0.0, 1.0); }
          ao *= 0.25 * smoothstep(uFar * 0.2, uFar * 0.02, d0); }
        gl_FragColor = vec4(col * (1.0 - ao * 0.6), 1.0); }`}),mt=new ke({uniforms:{t:{value:null}},vertexShader:Zt,depthTest:!1,depthWrite:!1,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){ vec3 c = texture2D(t, vUv).rgb; float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(0.9, 2.2, l), 1.0); }"}),Tt=new ke({uniforms:{t:{value:null},uDir:{value:new ft}},vertexShader:Zt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D t; uniform vec2 uDir; void main(){ vec3 c = texture2D(t, vUv).rgb * 0.227;
      c += (texture2D(t, vUv + uDir * 1.385).rgb + texture2D(t, vUv - uDir * 1.385).rgb) * 0.316; c += (texture2D(t, vUv + uDir * 3.231).rgb + texture2D(t, vUv - uDir * 3.231).rgb) * 0.0703; gl_FragColor = vec4(c, 1.0); }`}),vt=new ke({uniforms:{t:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:.6},uExp:{value:1},uTime:{value:0},uVig:{value:1},uTint:{value:new L(1,1,1)},uDim:{value:1}},vertexShader:Zt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D t, tB1, tB2; uniform float uBloom, uExp, uTime, uVig, uDim; uniform vec3 uTint;
      vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
      void main(){ vec3 c = texture2D(t, vUv).rgb; c += (texture2D(tB1, vUv).rgb * 0.6 + texture2D(tB2, vUv).rgb * 0.9) * uBloom;
        c *= uExp * uTint; vec2 q = vUv - 0.5; c *= mix(1.0, smoothstep(0.98, 0.2, length(q * vec2(1.05, 1.25))), 0.74 * uVig);
        c = aces(c); float lum = dot(c, vec3(0.299, 0.587, 0.114)); c = mix(vec3(lum), c, 1.04);
        c *= mix(vec3(0.9, 0.97, 1.08), vec3(1.07, 1.0, 0.9), smoothstep(0.05, 0.6, lum)); c = mix(c, c * c * (3.0 - 2.0 * c), 0.28); c = pow(c, vec3(1.0 / 2.2));
        c += (h(gl_FragCoord.xy) - 0.5) * 0.028; gl_FragColor = vec4(c * uDim, 1.0); }`}),Vt=(I,z)=>{Dt.material=I,r.setRenderTarget(z),r.render(Dt,Et)};function jt(){const I=n.clientWidth||innerWidth,z=n.clientHeight||innerHeight;r.setSize(I,z,!1),y=Math.floor(I*R()),M=Math.floor(z*R()),B.setSize(y,M),V.setSize(y,M),$.setSize(y>>2,M>>2),W.setSize(y>>2,M>>2),ct.setSize(y>>3,M>>3),q.setSize(y>>3,M>>3),u.aspect=I/z,u.updateProjectionMatrix(),Z.uniforms.uPx.value.set(1/y,1/M),Z.uniforms.uMaxR.value=M/62}const Yt=De.reduce((I,z)=>I+z.w,0),te=[];{let I=0;for(const z of De)te.push(I/Yt),I+=z.w}const rt=Gl(6,8),dt=()=>u.aspect<.8,D=De.map(I=>{const z={...I,shift:I.shift??0};if(I.s>=0){const K=Re[I.s].anchor;z.dir=K.n.clone();const et=Yn(K,I.x,I.z);z.target=Ls(I.x,I.z,et+I.th).applyMatrix4(K.matrix)}else z.dir=I.s===-2?Re[To.scene].anchor.n.clone():rt.clone(),z.target=Ye();return I.blend&&z.target.copy(Re[0].anchor.n).multiplyScalar(be*I.blend),z.ld=Math.log(I.dist),z}),Ot=(I,z,K,et,lt)=>{const st=lt*lt,X=st*lt;return .5*(2*z+(-I+K)*lt+(2*I-5*z+4*K-et)*st+(-I+3*z-3*K+et)*X)},ut={};for(const[I,z]of Object.entries(Ga))ut[I]={light:new Lt(z.light),sky:new Lt(z.sky),ground:new Lt(z.ground),fog:new Lt(z.fog)};const nt={target:Ye(),dir:Ye(),pos:Ye(),up:Ye(),light:new Lt,sky:new Lt,ground:new Lt,fog:new Lt},xt=Ye(),Gt=Ye(),Pt=Ye(),T=Ye(),b=Ye(),H=new L(0,1,0),J=I=>{xt.crossVectors(H,I).normalize(),Gt.crossVectors(xt,I).normalize()},ot=(I,z,K,et)=>{J(I);const lt=z*Cs,st=K*Cs;return Pt.copy(xt).multiplyScalar(Math.sin(lt)).addScaledVector(Gt,Math.cos(lt)),et.copy(Pt).multiplyScalar(Math.cos(st)).addScaledVector(I,Math.sin(st)).normalize()};{const I=Gl(8,12);J(I);const z=I.clone().multiplyScalar(Math.cos(.76)).addScaledVector(Gt,Math.sin(.76)).normalize(),K=xt.clone().multiplyScalar(.75).addScaledVector(I,.5).addScaledVector(Gt,-.44);K.addScaledVector(z,-K.dot(z)).normalize(),v.quaternion.setFromRotationMatrix(new re().makeBasis(K,z,K.clone().cross(z)))}const Q=ot(Re[To.scene].anchor.n,To.az,To.el,Ye()).clone(),At=v.userData;At.main.visible=!1,At.inner.visible=!1,At.sunRing.visible=!1,At.moonRing.visible=!1,l.add(At.moon),At.moon.scale.setScalar(3.4),At.moon.material.emissive=new Lt(0);const St=new L().crossVectors(Q,new L(0,1,0)).normalize(),pt={x:0,y:0,sx:0,sy:0,yaw:0,syaw:0,nudge:0,snudge:0},Qt={day:4,lunar:0,tint:new Lt(16756810)};let tt=null;const It={light:new Lt(16771272),sky:new Lt(5661308),fog:new Lt(2763827)},Xt=new Lt,_t={u:0,mood:{},camDist:400,key:0};function Ft(I){let z=0;for(;z<De.length-2&&te[z+1]<=I;)z++;const K=(te[z+1]??1)-te[z];let et=K>0?Ce((I-te[z])/K,0,1):0;const lt=D[Math.max(0,z-1)],st=D[z],X=D[Math.min(De.length-1,z+1)],j=D[Math.min(De.length-1,z+2)],Ut=Me=>Ot(lt[Me],st[Me],X[Me],j[Me],et);if(nt.target.set(Ot(lt.target.x,st.target.x,X.target.x,j.target.x,et),Ot(lt.target.y,st.target.y,X.target.y,j.target.y,et),Ot(lt.target.z,st.target.z,X.target.z,j.target.z,et)),nt.dir.set(Ot(lt.dir.x,st.dir.x,X.dir.x,j.dir.x,et),Ot(lt.dir.y,st.dir.y,X.dir.y,j.dir.y,et),Ot(lt.dir.z,st.dir.z,X.dir.z,j.dir.z,et)).normalize(),st.s>=0&&X.s>=0&&st.s!==X.s){const Me=nt.target.length(),Ke=$t(st.target.length(),X.target.length(),et);nt.target.multiplyScalar(Ke/Math.max(Me,.001))}let yt=Math.exp(Ce(Ut("ld"),Math.min(st.ld,X.ld)-.12,Math.max(st.ld,X.ld)+.25)),kt=Ut("az"),qt=Ce(Ut("el"),-30,85);const ht=Ut("fov"),Wt=et*et*(3-2*et),zt=$t(st.ap,X.ap,Wt),de=$t(st.shift,X.shift,Wt);dt()&&(yt*=st.s<0||X.s<0?$t(1.55,1.2,0):1.25),kt+=pt.sx*$t(5,2.5,zt)+pt.syaw+pt.snudge*$t(2.2,5,zt),qt=Ce(qt-pt.sy*2.2+pt.snudge*.8,-30,85),yt*=1-pt.snudge*.045,ot(nt.dir,kt,qt,T),nt.pos.copy(nt.target).addScaledVector(T,yt),nt.up.copy(nt.dir).multiplyScalar(Math.cos(qt*Cs)).addScaledVector(Pt,-Math.sin(qt*Cs)).normalize();const me=nt.pos.length();b.copy(nt.pos).divideScalar(me);const Ie=be+Math.max(0,Ur(b.x,b.y,b.z))+.45+(st.s>=0&&X.s>=0&&st.s!==X.s?22*Math.sin(Math.PI*et):0);me<Ie&&nt.pos.copy(b).multiplyScalar(Ie);const He=Ga[st.mood],En=Ga[X.mood],ti=ut[st.mood],xi=ut[X.mood],Se=_t.mood;for(const Me of["li","laz","lel","ai","fd","exp","bloom","ecl","atmo","stars"])Se[Me]=$t(He[Me],En[Me],Wt);if(nt.light.copy(ti.light).lerp(xi.light,Wt),nt.sky.copy(ti.sky).lerp(xi.sky,Wt),nt.ground.copy(ti.ground).lerp(xi.ground,Wt),nt.fog.copy(ti.fog).lerp(xi.fog,Wt),_t.skyW=0,tt){const Me=tt.w!=null?tt.w:(st.mood==="arena"?1-Wt:0)+(X.mood==="arena"?Wt:0),Ke=tt.amt;_t.skyW=Me,Me>0&&(nt.light.lerp(Xt.copy(It.light).lerp(tt.light,Ke),Me),nt.sky.lerp(Xt.copy(It.sky).lerp(tt.sky,Ke),Me),nt.fog.lerp(Xt.copy(It.fog).lerp(tt.fog,Ke),Me),Se.li=$t(Se.li,$t(3.3,tt.li,Ke),Me),Se.ai=$t(Se.ai,$t(.8,.55,Ke),Me),Se.ecl=tt.w!=null?Math.max(Se.ecl*(1-Me),Ke*Me):$t(Se.ecl,Ke,Me),Se.exp=$t(Se.exp,$t(1,1.22,Ke),Me),Se.stars=$t(Se.stars,Ke,Me))}_t.key=z,_t.t=et,_t.dist=yt,_t.fov=ht,_t.ap=zt,_t.shift=dt()?de*0:de}{const I=new re,z=Ye(),K=Ye();for(let et=0;et<=900;et++){if(Ft(et/900),_t.dist>30)continue;let lt=null,st=1e9;for(const X of Re){const j=X.anchor.n.distanceToSquared(nt.dir);j<st&&(st=j,lt=X)}I.copy(lt.anchor.matrix).invert(),z.copy(nt.pos).applyMatrix4(I),K.copy(nt.target).applyMatrix4(I),lt.sight.push([z.x,z.z,K.x,K.z])}}e(.72,"Lighting the first hearth"),await a(),Re[0].construct(),Rs(Re[0].group,x),l.add(Re[0].group),e(.86,"Lighting the first hearth"),await a(),Re[1].construct(),Rs(Re[1].group,x),l.add(Re[1].group);const ae=De.map((I,z)=>I.id?te[z]:null).filter(I=>I!=null),ne=(I,z)=>{const K=Math.min(I,z),et=Math.max(I,z),lt=ae.filter(st=>st>K+1e-4&&st<et-1e-4).length;return lt>=1?Math.pow(lt+1,1.4):1},ve=3,N=1.7,bt=3,Y={v:0},it=De.map(()=>1);{const I=K=>De[K+1]&&De[K].s!==De[K+1].s;let z=0;for(let K=1;K<=De.length;K++)if(K===De.length||De[K].id){const et=[];for(let X=z;X<K&&X<De.length-1;X++)et.push(X);const lt=et.reduce((X,j)=>X+(I(j)?bt:1),0),st=et.some(I)?ve:N;et.forEach(X=>{it[X]=st*(I(X)?bt:1)/Math.max(1,lt)}),z=K}}const Rt=new tx;let gt=0,ee=0,_e=!0,ye=0,le=2,ln=0,dn=1,tr=1;const ls=Ye(),Wn=Ye(),er=Ye(),cs=Ye();window.__wm=Pi;const zr=De.map((I,z)=>{const K=De[z+1];return K&&I.s>=0&&K.s>=0&&I.s!==K.s?{A:Re[I.s],B:Re[K.s]}:null});let Oi=null,nr=0;const Qn={key:"",a:0},us=new Ue({color:1907236,roughness:1}),ir=new Ue({color:12169892,roughness:.9}),Xn=(I,z)=>new Ue({color:0,emissive:I,emissiveIntensity:z}),ta=Xn(16756832,7),Br=new Dn(.17,.58,10),w=new je(.085,10,8),U=new je(1,8,6);function G(I,z){const K=new Ee,et=new Kt(Br,us),lt=new Kt(w,z?ir:us),st=new Kt(Br,us);if(et.position.y=.29,lt.position.y=.6,st.position.set(0,.66,-.02),st.scale.set(.62,.3,.62),et.castShadow=st.castShadow=!0,K.add(et,lt,st),!z){const X=new Kt(U,ta);X.scale.setScalar(.03),X.position.set(0,.4,.17),K.add(X)}return K.scale.setScalar(I/.7),K}const k=(I,z,K,et,lt=0)=>(z.position.copy(Ls(K,et,Yn(I,K,et)+lt)),z.userData.y=z.position.y,z),F=[{key:"nuns",s:3,make(I){const z=new Ee,K=[];for(let j=0;j<12;j++){const Ut=j%2,yt=Math.floor(j/2),kt=G(.66+j%3*.04);k(I,kt,(Ut?1.5:.4)+Math.sin(yt*1.7)*.1,.9+yt*.62),kt.userData.d=yt*.11+Ut*.04,K.push(kt),z.add(kt)}const et=G(1,!0);k(I,et,2.45,2.6),et.userData.d=.1,K.push(et),z.add(et);const lt=new Kt(new Fi(.2,.03,.15),ir);lt.position.set(0,.42,.2),lt.rotation.x=-.5,et.add(lt);const st=new Kt(U,Xn(16756832,9));st.scale.setScalar(.05),st.position.set(.24,.5,.18),et.add(st);const X=new Kt(U,Xn(9067775,0));return X.scale.setScalar(.5),k(I,X,0,-1.2,5.2),z.add(X),{g:z,update(j,Ut){for(const kt of K){const qt=Ce((j-kt.userData.d)/.5,0,1),ht=qt*qt*(3-2*qt);kt.position.y=kt.userData.y-(1-ht)*1.1,kt.visible=qt>.01,kt.rotation.z=Math.sin(Ut*.7+kt.userData.d*30)*.035*ht}const yt=Math.pow(Math.max(0,Math.sin(Ut*1.05)),12);X.material.emissiveIntensity=5*yt*Nt(.6,1,j),X.visible=!1,st.material.emissiveIntensity=9*(.8+.2*Math.sin(Ut*11))}}}},{key:"arena",s:5,make(I){const z=new Ee,K=new Ue({color:1707018,roughness:.85}),et=new je(1,18,12),lt=new un(.5,.36,1,10),st=new Ee,X=(yt,kt,qt,ht,Wt,zt,de,me,Ie)=>{const He=new Kt(yt,K);He.position.set(kt,qt,ht),He.rotation.set(Wt,0,zt),He.scale.set(de,me,Ie),He.castShadow=!0,st.add(He)};X(et,0,2.2,0,.25,0,1,1.15,.8),X(et,0,3.25,.2,.3,0,1.15,.7,.75),X(et,0,3.95,.55,0,0,.42,.42,.48);for(const yt of[-1,1])X(lt,yt*1.35,2.5,.3,.2,yt*.35,.5,2.3,.5),X(et,yt*1.75,1.35,.6,0,0,.42,.4,.42),X(lt,yt*.5,.75,0,0,0,.62,1.7,.62),X(new Dn(.11,.9,8),yt*.34,4.45,.5,-.25,-yt*.55,1,1,1);const j=Xn(16726546,0);for(const yt of[-1,1]){const kt=new Kt(U,j);kt.scale.setScalar(.06),kt.position.set(yt*.16,4.02,.98),st.add(kt)}const Ut=new Kt(U,Xn(16722440,0));return Ut.scale.set(.3,.16,.12),Ut.position.set(0,2.6,.78),st.add(Ut),k(I,st,0,0),st.rotation.y=Math.atan2(-.93,-.37),st.scale.setScalar(.62),z.add(st),{g:z,update(yt,kt){const qt=Ce((yt-.35)/.65,0,1),ht=qt*qt*(3-2*qt);st.visible=qt>.01,st.position.y=st.userData.y-(1-ht)*3.4,st.rotation.z=Math.sin(kt*.5)*.04*ht,st.scale.set(.62,.62*(1+Math.sin(kt*1.3)*.02),.62),j.emissiveIntensity=16*Nt(.6,1,qt),Ut.material.emissiveIntensity=2.2*Nt(.5,1,qt)*(.7+.3*Math.sin(kt*2.2))}}}},{key:"arena",s:5,make(I){const K=new Ee,et=[];for(let lt=0;lt<14;lt++){const st=lt/14*6.283+.2,X=new Kt(U,Xn(16734748,0));k(I,X,Math.cos(st)*6.3,Math.sin(st)*5.6,2.55),X.userData.i=lt,et.push(X),K.add(X)}return{g:K,update(lt,st){for(const X of et){const j=Ce((lt*1.25-X.userData.i/14)/.12,0,1),Ut=.75+.25*Math.sin(st*13+X.userData.i*2.3);X.visible=j>.01,X.scale.set(.11*j,.2*j*Ut,.11*j),X.material.emissiveIntensity=5*j*Ut}}}}},{key:"nuns",s:3,make(I){const z=new Ee,K=new Zo({color:131331}),et=new je(1,14,10),lt=new Ee,st=(X,j,Ut,yt,kt,qt,ht,Wt)=>{const zt=new Kt(X,K);zt.position.set(j,Ut,yt),zt.rotation.z=kt,zt.scale.set(qt,ht,Wt),lt.add(zt)};st(et,0,5.2,0,0,2.3,4.4,1.2),st(et,0,9.6,0,0,3.1,1.5,1.2),st(et,0,11.4,.2,0,.95,1.05,.9);for(const X of[-1,1])st(new Dn(.34,3.2,7),X*1.25,13,.2,-X*.5,1,1,1),st(et,X*3.6,7.2,0,X*.25,.75,3.4,.75);return k(I,lt,-.6,-7.5),z.add(lt),{g:z,update(X,j){const Ut=Ce((X-.8)/.2,0,1),yt=Ut*Ut*(3-2*Ut);lt.visible=Ut>.01,lt.position.y=lt.userData.y-(1-yt)*15,lt.rotation.z=Math.sin(j*.35)*.02}}}},{key:"kingdom",s:4,make(I){const z=new Ee,K=new Ue({color:2760728,roughness:.9}),et=new Ue({color:8000528,roughness:.8,side:Mn,emissive:2098178}),lt=new Ue({color:13214812,roughness:.5,side:Mn,emissive:3811850}),st=[];for(let X=0;X<10;X++){const j=Math.floor(X/2),Ut=new Ee,yt=new Kt(new un(.04,.05,5.6,6),K),kt=new Kt(new $s(.9,1.9,1,6),et),qt=new Kt(new lc(.22,16),lt);yt.position.y=2.8,kt.position.set(.5,4.55,0),qt.position.set(.5,4.75,.014),yt.castShadow=kt.castShadow=!0,Ut.add(yt,kt,qt),Ut.userData.c=kt;{const ht=X/10*6.283+.3;k(I,Ut,.4+Math.cos(ht)*(3.2+X%3*1.1),1.6+Math.sin(ht)*(3+X%3*1))}Ut.rotation.y=.38,Ut.userData.d=j*.12,st.push(Ut),z.add(Ut)}return{g:z,update(X,j){for(const Ut of st){const yt=Ce((X-Ut.userData.d)/.45,0,1),kt=yt*yt*(3-2*yt);Ut.visible=yt>.01,Ut.position.y=Ut.userData.y-(1-kt)*6.2,Ut.userData.c.rotation.y=Math.sin(j*1.7+Ut.userData.d*20)*.28}}}}},{key:"*",s:0,make(I){const z=new Ee,K=new Ue({color:1381146,roughness:1}),et=new Ue({color:9274488,roughness:.8}),lt=Xn(16767392,0),st=new Ee,X=new Kt(new Dn(.13,.3,10),K),j=new Kt(new je(.07,12,10),et),Ut=new Kt(new un(.19,.21,.02,14),K),yt=new Kt(new Dn(.1,.3,10),K);X.position.y=.15,j.position.y=.34,Ut.position.y=.39,yt.position.set(0,.54,-.02),yt.rotation.x=-.25,st.add(X,j,Ut,yt),X.castShadow=yt.castShadow=Ut.castShadow=!0;for(const kt of[-1,1]){const qt=new Kt(U,lt);qt.scale.setScalar(.012),qt.position.set(kt*.026,.345,.063),st.add(qt)}return k(I,st,.7,2.75),st.rotation.y=.5,st.scale.setScalar(.85),z.add(st),{g:z,update(kt,qt){const ht=kt*kt*(3-2*kt);st.position.y=st.userData.y-(1-ht)*.9,st.rotation.z=Math.sin(qt*.5)*.03,lt.emissiveIntensity=6*ht*(.75+.25*Math.sin(qt*1.3))}}}},{key:"solar",s:4,make(I){const K=new Jo(U,Xn(16753226,6),96),et=new re,lt=Ye();return K.frustumCulled=!1,{g:K,update(st,X){for(let j=0;j<96;j++){const Ut=j%4,yt=Math.floor(j/4),kt=(yt*1.5+X*.22)%36/36,qt=Ce((st*1.3-(1-kt)*.5)/.3,0,1),ht=-21+kt*13+(Ut-1.5)*.4+Math.sin(yt*2.1)*.15,Wt=-16+kt*10-(Ut-1.5)*.36;Ls(ht,Wt,Yn(I,ht,Wt)+.34,lt);const zt=.12*qt*(.8+.2*Math.sin(X*9+j));et.makeScale(zt,zt,zt).setPosition(lt),K.setMatrixAt(j,et)}K.instanceMatrix.needsUpdate=!0}}}}],at={g:null,a:0,target:0,eyes:null};function Ct(){const I=new Ee,z=new Ue({color:460294,roughness:1}),K=(X,j,Ut,yt,kt=0,qt=0,ht=1,Wt=1,zt=1)=>{const de=new Kt(X,z);return de.position.set(j,Ut,yt),de.rotation.set(kt,0,qt),de.scale.set(ht,Wt,zt),de.castShadow=!0,I.add(de),de},et=new je(1,16,12),lt=new un(.5,.35,1,8);K(et,0,2.5,0,0,0,.75,.8,1.5),K(et,0,3,1,0,0,.62,.75,.7),K(lt,0,3.45,1.75,.9,0,.55,1.2,.55),K(et,0,3.85,2.35,.3,0,.3,.3,.52);for(const[X,j]of[[-.45,.95],[.45,.95],[-.4,-.95],[.4,-.95]])K(lt,X,1.05,j,0,X*.12,.3,2.3,.3);for(const X of[-1,1])K(lt,X*.45,4.5,2,-.2,-X*.7,.09,1.5,.09),K(lt,X*.95,5.05,1.9,.1,-X*.25,.07,.9,.07),K(lt,X*.7,4.95,2.35,.7,-X*.5,.06,.7,.06),K(lt,X*1.25,5.3,1.75,-.3,-X*1,.05,.6,.05);const st=new Ue({color:0,emissive:16722458,emissiveIntensity:0});at.eyes=st;for(const X of[-1,1]){const j=new Kt(new je(.055,8,6),st);j.position.set(X*.17,3.93,2.72),I.add(j)}return I}function Bt(I){if(le>=Re.length||(ln+=1,!I&&ln%20!==0))return;let z=null,K=1e9;for(const et of Re)if(!et.group){const lt=et.anchor.n.distanceTo(ls);lt<K&&(K=lt,z=et)}z&&(z.construct(),Rs(z.group,x),l.add(z.group),le++)}function Ht(){if(!_e)return;ee=requestAnimationFrame(Ht);const I=Math.min(Rt.getDelta(),.1);if(gt+=i?I*.25:I,i)_t.u=ye,Y.v=0;else{const ht=_t.key,Wt=Math.max(1e-4,(te[ht+1]??1)-te[ht]);De[ht],De[Math.min(De.length-1,ht+1)];const zt=ye-_t.u,de=Wt/it[ht]*ne(_t.u,ye),me=Math.sign(zt)*Math.min(Math.abs(zt)*7,de);Y.v+=(me-Y.v)*(1-Math.exp(-I*6)),_t.u+=Y.v*I,(Math.sign(ye-_t.u)!==Math.sign(zt)||Math.abs(ye-_t.u)<1e-5)&&(_t.u=ye,Y.v=0)}pt.snudge+=(pt.nudge-pt.snudge)*(1-Math.exp(-I*6)),pt.sx+=(pt.x-pt.sx)*(1-Math.exp(-I*3)),pt.sy+=(pt.y-pt.sy)*(1-Math.exp(-I*3));const z=Nt(.09,0,_t.u)+Nt(.985,1,_t.u);pt.syaw+=(pt.yaw*z-pt.syaw)*(1-Math.exp(-I*4)),Ft(_t.u),u.position.copy(nt.pos),u.up.copy(nt.up),u.lookAt(nt.target);const K=nt.pos.length()-be;ls.copy(nt.pos).normalize(),u.fov=_t.fov*(dt()?1.25:1),u.near=Ce(Math.min(K,_t.dist)*.08,.05,30),u.far=5200,u.filmOffset=-_t.shift*14,u.updateProjectionMatrix(),Bt(!1);const et=_t.mood;Qt.lunar>.01&&nt.light.lerp(Qt.tint,.45*Qt.lunar*(1-_t.skyW)),ot(nt.dir,et.laz,et.lel,Wn),h.color.copy(nt.light),h.intensity=et.li,h.target.position.copy(nt.target),h.position.copy(nt.target).addScaledVector(Wn,420);const lt=Ce(_t.dist*.85,9,190),st=h.shadow.camera;st.left=-lt,st.right=lt,st.top=lt,st.bottom=-lt,st.near=60,st.far=800,st.updateProjectionMatrix(),h.shadow.normalBias=lt*.004,h.shadow.radius=2.5,f.color.copy(nt.sky),f.groundColor.copy(nt.ground),f.intensity=et.ai,f.position.copy(nt.dir),l.fog.color.copy(nt.fog),l.fog.density=et.fd*Nt(70,16,K),l.background.copy(nt.fog).multiplyScalar(.35*Nt(60,10,K)).add(T.set(.012,.016,.024)),p.material.uniforms.uGain.value=et.atmo,p.material.uniforms.uColor.value.copy(nt.sky).multiplyScalar(.8),S.material.uniforms.uFade.value=et.stars,S.material.uniforms.uPx.value=R(),S.position.copy(u.position),_.material.uniforms.uTime.value=gt,_.material.uniforms.uPx.value=R(),_.material.uniforms.uGain.value=Nt(8,40,K);const X=Nt(22,120,K);g.userData.mat.userData.U.uFar.value=X,m.userData.tick(gt),C.rotation.y=gt*.0035;{const ht=Qt.day/28*Math.PI*2;At.moon.position.copy(Q).multiplyScalar(Math.cos(ht)*185).addScaledVector(St,Math.sin(ht)*185),At.moon.position.y+=Math.sin(ht)*24,At.moon.material.emissive.copy(Qt.tint).multiplyScalar(Qt.lunar*.45),At.moon.rotation.y=gt*.02,At.moon.visible=!(_t.skyW>.2)}E.uniforms.uMode.value=tt&&_t.skyW>(tt.w!=null?.01:.5)?tt.mode:0,A.visible=et.ecl>.01||_t.skyW>(tt&&tt.w!=null?.01:.5),A.visible&&(tt&&tt.az!=null&&_t.skyW>.01?ot(nt.dir,tt.az,tt.el,cs):cs.copy(Q),A.position.copy(u.position).addScaledVector(cs,3e3),A.quaternion.copy(u.quaternion),A.scale.setScalar(tt&&tt.size?tt.size:1250),E.uniforms.uE.value=et.ecl,E.uniforms.uTime.value=gt,tt&&E.uniforms.uTint.value.copy(tt.tint));{const ht=zr[_t.key];Oi=ht?ht.A:null,nr=ht?_t.t:0}let j=null,Ut=1e9;const yt=R()*M/(2*Math.tan(u.fov*Cs/2))/300/R();for(const ht of Re){if(!ht.group)continue;const Wt=er.copy(ht.anchor.n).multiplyScalar(be).distanceTo(nt.pos),zt=ht.group.children[1];zt.visible=Wt<(Ne.low?150:420)&&ht.anchor.n.dot(ls)>.1,ht.group.children[0].material.userData.U.uFar.value=Nt(40,140,Wt),Wt<Ut&&(Ut=Wt,j=ht);{const me=ht.group.userData,Ie=i?1:Math.min(Nt(70,26,Wt),ht===Oi?1-Nt(.05,.5,nr):1);if(me.em==null&&(me.em=i?1:0,me.emA=-1),me.em+=(Ie-me.em)*(i?1:1-Math.exp(-I*2.6)),ji.uEmN.value[ht.index].w=me.em,Math.abs(Ie-me.em)<8e-4&&(me.em=Ie),Math.abs(me.em-me.emA)>4e-4){me.emA=me.em;const He=zt.children,En=He.length,ti=me.y0??(me.y0=Yn(ht.anchor,0,0));for(let xi=0;xi<En;xi++){const Se=He[xi];if(Se.material?.userData?.U?.uEmN){Se.visible=me.em>.004,Se.customDepthMaterial||(Se.customDepthMaterial=x());continue}const Me=!!(Se.material?.emissive&&Se.material.emissiveIntensity>.5&&Se.material.emissive.r+Se.material.emissive.g>.01)||!Se.isMesh,Ke=Ce((me.em-(Me?.86:.42))/(Me?.14:.5),0,1),sr=Ke-1,gc=Ke>=1?1:Math.max(1e-4,1+2.3*sr*sr*sr+1.3*sr*sr);Se.visible=Ke>.002,Se.scale.set(1,gc,1),Se.position.y=ti*(1-gc)-1.2*(1-Ke)*(1-Ke)}}}const de=ht.group.userData;de.fx&&(de.fx.U.uTime.value=gt,de.fx.U.uPx.value=yt*R(),de.fx.U.uGain.value=Nt(.8,1,de.em??1)),Wt<80&&zt.visible&&(de.agents?.update(gt),de.birds?.update(gt))}for(const ht of F){const Wt=Re[ht.s];if(!Wt.group)continue;ht.inst||(ht.inst=ht.make(Wt.anchor),ht.a=0,Rs(ht.inst.g,x),Wt.group.add(ht.inst.g));const zt=ht.key==="*"?Nt(.85,1,Wt.group.userData.em??0):Qn.key===ht.key?Qn.a:0;ht.a+=(zt-ht.a)*(i?1:1-Math.exp(-I*1.5)),ht.inst.g.visible=ht.a>.01,ht.inst.g.visible&&ht.inst.update(ht.a,gt)}{const ht=Re[2];if(ht.group&&!at.g){at.g=Ct();const Wt=-2,zt=6.7;at.base=Ls(Wt,zt,Yn(ht.anchor,Wt,zt)),at.g.rotation.y=Math.atan2(-.93,-.37),Rs(at.g,x),ht.group.add(at.g)}if(at.g){at.a+=(at.target-at.a)*(1-Math.exp(-I*1.6));const Wt=at.a,zt=Wt*Wt*(3-2*Wt);at.g.visible=Wt>.01,at.g.position.copy(at.base),at.g.position.y+=-5.6*(1-zt)+Math.sin(gt*.9)*.05*zt,at.g.rotation.z=Math.sin(gt*.6)*.03*zt,at.g.scale.setScalar(.5),at.eyes.emissiveIntensity=14*Nt(.55,1,Wt)*(.8+.2*Math.sin(gt*3.1))}}if(j){const ht=j.group.userData.em??1,Wt=Math.sin(Math.PI*Ce(ht,0,1));Is.uRipC.value.copy(j.anchor.n),Is.uRip.value.set(2+ht*44,.75*Wt*Nt(90,40,Ut),2.6+ht*2.2,-1.1*(1-ht)*Nt(110,60,Ut)*(i?0:1))}Pi.uWmK.value.copy(nt.pos),d.forEach((ht,Wt)=>{const zt=j?.group.userData.lights?.[Wt];if(!zt||Ut>70){ht.intensity=0;return}ht.position.copy(zt.p).applyMatrix4(j.anchor.matrix),ht.color.setHex(zt.color),ht.distance=zt.dist,ht.intensity=zt.intensity*Nt(.7,1,j.group.userData.em??1)*(.85+.15*Math.sin(gt*9+Wt*2.1)*Math.sin(gt*5.7+Wt))*Nt(70,30,Ut)}),dn+=(tr-dn)*(1-Math.exp(-I*6)),r.info.reset(),r.setRenderTarget(B),r.render(l,u);const kt=nt.pos.distanceTo(nt.target);Object.assign(Z.uniforms.tColor,{value:B.texture}),Z.uniforms.uNear.value=u.near,Z.uniforms.uFar.value=u.far,Z.uniforms.uFocus.value=kt,Z.uniforms.uAp.value=_t.ap,Z.uniforms.uAoR.value=.3*M/(2*Math.tan(u.fov*Cs/2)),Vt(Z,V),mt.uniforms.t.value=V.texture,Vt(mt,$),Tt.uniforms.t.value=$.texture,Tt.uniforms.uDir.value.set(4/y,0),Vt(Tt,W),Tt.uniforms.t.value=W.texture,Tt.uniforms.uDir.value.set(0,4/M),Vt(Tt,$),Tt.uniforms.t.value=$.texture,Tt.uniforms.uDir.value.set(8/y,0),Vt(Tt,ct),Tt.uniforms.t.value=ct.texture,Tt.uniforms.uDir.value.set(0,8/M),Vt(Tt,q);const qt=vt.uniforms;qt.t.value=V.texture,qt.tB1.value=$.texture,qt.tB2.value=q.texture,qt.uBloom.value=et.bloom,qt.uExp.value=et.exp,qt.uTime.value=gt%10,qt.uDim.value=dn*(i?1:Nt(.4,6,gt)),Vt(vt,null),Jt.onFrame?.(_t)}const Jt={renderer:r,scene:l,camera:u,state:_t,keys:De,starts:te,scenes:Re,setProgress(I,z){ye=Ce(I,0,1),z&&(_t.u=ye,Y.v=0)},setPointer(I,z){pt.x=I,pt.y=z},addYaw(I){pt.yaw=Ce(pt.yaw+I,-70,70)},setDim(I){tr=I},setNudge(I){pt.nudge=i?0:I},setLife(I,z){Qn.key=I,Qn.a=z},setBeast(I){at.target=i?I>.5?1:0:I},setHeavens(I){Qt.day=I.day,Qt.lunar=I.lunar,Qt.tint.set(I.tint)},setSky(I){tt=I?{mode:I.mode??0,amt:I.amt,li:I.li??1.9,light:new Lt(I.light),sky:new Lt(I.sky),fog:new Lt(I.fog),tint:new Lt(I.tint),w:I.w,az:I.az,el:I.el,size:I.size}:null},progressOf(I){const z=De.findIndex(K=>K.id===I);return z<0?0:te[z]},resize:jt,start(){_e=!0,Rt.getDelta(),jt(),Ht()},stop(){_e=!1,cancelAnimationFrame(ee)},buildAll(){for(;le<Re.length;)Bt(!0)},stats:()=>({calls:r.info.render.calls,tris:r.info.render.triangles,built:le})};return e(1,"The realm wakes"),Jt}let pe=null,Pn=null,Rn=!1,nn=null,Wa={},Yi={key:"",a:0,flight:0,ecl:0,kind:""},Ao=0,Ku=0;const Ji=()=>pe.currentTime,Ki=(n,t,e=.6)=>{n.cancelScheduledValues(Ji()),n.setTargetAtTime(t,Ji(),e/3)};function Kx(n=3){const t=pe.createBuffer(1,pe.sampleRate*n,pe.sampleRate),e=t.getChannelData(0);let i=0;for(let s=0;s<e.length;s++)i=i*.98+(Math.random()*2-1)*.02,e[s]=(Math.random()*2-1)*.5+i*6;return t}function Xa(n,t,e){const i=pe.createBufferSource();i.buffer=nn.nb,i.loop=!0;const s=pe.createBiquadFilter();s.type=n,s.frequency.value=t,s.Q.value=e;const r=pe.createGain();return r.gain.value=0,i.connect(s).connect(r).connect(Pn),i.start(),{g:r,f:s}}function qa(n,t="sine"){const e=pe.createOscillator();e.type=t,e.frequency.value=n;const i=pe.createGain();return i.gain.value=0,e.connect(i),e.start(),{o:e,g:i}}function jx(){pe=new(window.AudioContext||window.webkitAudioContext),Pn=pe.createGain(),Pn.gain.value=0;const n=pe.createDynamicsCompressor();Pn.connect(n).connect(pe.destination),nn={nb:null},nn.nb=Kx();const t=pe.createBiquadFilter();t.type="lowpass",t.frequency.value=170,t.Q.value=.7;const e=pe.createGain();e.gain.value=.11,t.connect(e).connect(Pn);for(const i of[55,55.4,82.6]){const s=qa(i,"sawtooth");s.g.gain.value=.33,s.g.connect(t)}nn.chord=[0,1,2,3].map(()=>{const i=qa(220);return i.g.connect(Pn),i}),nn.wind=Xa("bandpass",520,.6),nn.rumble=Xa("lowpass",110,.8),nn.crowd=Xa("bandpass",760,.9),nn.shimmer=qa(1760),nn.shimmer.g.connect(Pn),setInterval(t_,200)}const ju={Blood:[110,116.5,165,233],Light:[146.8,220,293.7,440],Dark:[98,138.6,196,277.2],solar:[73.4,110,146.8,220]};function Ya(n,t,e=.5,i=.22){const s=pe.createOscillator(),r=pe.createGain();s.frequency.setValueAtTime(n*1.6,t),s.frequency.exponentialRampToValueAtTime(n,t+.08),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(e,t+.012),r.gain.exponentialRampToValueAtTime(1e-4,t+i),s.connect(r).connect(Pn),s.start(t),s.stop(t+i+.05)}function Jx(n){for(const[t,e,i]of[[1,.16,4.5],[2.01,.09,3.2],[2.76,.07,2.4],[5.4,.04,1.4],[8.93,.02,.8]]){const s=pe.createOscillator(),r=pe.createGain();s.frequency.value=196*t,r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(e,n+.01),r.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(r).connect(Pn),s.start(n),s.stop(n+i+.1)}}function Qx(n){const t=pe.createOscillator(),e=pe.createGain(),i=pe.createBiquadFilter(),s=pe.createOscillator(),r=pe.createGain();t.type="sawtooth",i.type="bandpass",i.frequency.value=620,i.Q.value=3,t.frequency.setValueAtTime(250,n),t.frequency.exponentialRampToValueAtTime(470,n+.9),t.frequency.setValueAtTime(470,n+1.9),t.frequency.exponentialRampToValueAtTime(300,n+3.2),s.frequency.value=5.5,r.gain.value=6,s.connect(r).connect(t.frequency),e.gain.setValueAtTime(1e-4,n),e.gain.exponentialRampToValueAtTime(.09,n+.7),e.gain.setValueAtTime(.09,n+1.9),e.gain.exponentialRampToValueAtTime(1e-4,n+3.4),t.connect(i).connect(e).connect(Pn),t.start(n),s.start(n),t.stop(n+3.5),s.stop(n+3.5)}function $a(n,t,e){const i=Ji();(!Wa[n]||i>=Wa[n])&&(Wa[n]=i+t,e(i+.05))}function t_(){if(!Rn||!pe)return;Ao++;const n=Yi.key,t=Yi.a,e=r=>n===r?t:0;Ki(nn.wind.g.gain,.02+Yi.flight*.16),nn.wind.f.frequency.setTargetAtTime(380+Yi.flight*500,Ji(),.4);const i=e("arena");Ki(nn.rumble.g.gain,i*.5+e("solar")*.25),Ki(nn.crowd.g.gain,i*.06*(.7+.3*Math.sin(Ao*.31))),i>.8&&Ku<=.8&&Ya(38,Ji()+.05,.9,1.4),Ku=i,Ki(nn.shimmer.g.gain,e("reliefs")*.012*(.6+.4*Math.sin(Ao*.9))),nn.shimmer.o.frequency.setTargetAtTime([1760,2093,2637,1568][Ao%4],Ji(),.05);const s=ju[Yi.kind]||ju.solar;nn.chord.forEach((r,o)=>{r.o.frequency.setTargetAtTime(s[o],Ji(),.5),Ki(r.g.gain,Yi.ecl*.035,1.2)}),e("ossuary")>.3&&$a("heart",1.15,r=>{Ya(52,r,.55),Ya(48,r+.28,.4)}),e("bloodwood")>.6&&$a("howl",9.5,Qx),e("nuns")>.5&&$a("bell",4.6,Jx)}const Us={get on(){return Rn},toggle(){Rn=!Rn,Rn&&!pe&&jx(),pe&&(Rn&&pe.resume(),Ki(Pn.gain,Rn?.8:0,.5),Rn||setTimeout(()=>{Rn||pe.suspend()},900));try{localStorage.setItem("er-sound",Rn?"on":"off")}catch{}return Rn},update(n){Object.assign(Yi,n)},quiet(n){pe&&Rn&&Ki(Pn.gain,n?.25:.8,.5)}},ze=n=>document.querySelector(n),ce=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),yn=(n,t,e)=>Math.min(e,Math.max(t,n)),Jh="./",Qh=new URLSearchParams(location.search);Qh.get("bare")&&document.body.classList.add("bare");let wn=matchMedia("(prefers-reduced-motion: reduce)").matches;try{localStorage.getItem("er-motion")==="reduce"&&(wn=!0),localStorage.getItem("er-motion")==="full"&&(wn=!1)}catch{}const Be=af,hn=Be.length,dc=.44,In=()=>Math.round(innerHeight*(innerWidth<640?1.25:1.5)),fn=ze("#journey"),Ho=ze("#veil");let Te=null,Sn=Be.map(()=>0),Qi=!1,_r=scrollY,tf=1,Vo=0,es=0,Ju=-1,Uo=0,Mr=0;const Or=Be.map((n,t)=>{const e=document.createElement("article");e.className=`cap ${n.side||"left"}${n.first?" first":""}${n.final?" final":""}${n.school?" "+n.school:""}`,e.id=`stop-${n.slug}`,e.setAttribute("aria-label",n.nav||n.title);const i=[];n.more&&i.push(`<button class="act" data-more="${t}">${ce(n.more.label)}</button>`);for(const f of n.links||[])i.push(`<a class="act" href="${f.href}">${ce(f.label)}</a>`);const s=eh(n.key).map(f=>{const d=nh(f.id);return`<button class="enter" data-place="${f.id}">${d?`<img alt="" decoding="async" loading="lazy" src="${d.src}" style="background-image:url(${d.lq})">`:""}<span><small>Enter</small>${ce(f.name)}</span></button>`}).join(""),r=ql,o=n.eclipse,a=o?o.type==="solar"?r.solar:r.lunar[o.aff]:null,l=o?`<p class="ecl" style="--c:${a.css}"><i aria-hidden="true"></i><b>${o.type==="solar"?"Solar eclipse":`${ce(a.name)} lunar eclipse`}</b><span>${ce(o.line)}</span></p>`:"",c=n.schools?`<div class="sch" role="group" aria-label="School of magic">${n.schools.map((f,d)=>`<button class="chip" data-school="${d}" aria-pressed="${d===0}" style="--c:${{holy:"var(--holy)",blood:"#ff5a48",dark:"#b79cff"}[f.id]}">${ce(f.name)}<small>${ce(f.moon)}</small></button>`).join("")}</div><h3 class="sch-h">${ce(n.schools[0].title)}</h3><p class="sch-p" aria-live="polite">${ce(n.schools[0].body)}</p>`:"",u=`<p class="kicker">${n.numeral?`<b>${n.numeral}</b>`:""}${ce(n.kicker)}</p>`;e.innerHTML=n.final?`${u}<p class="motto">${ce(n.note)}</p><h1>${ce(n.title)}</h1><p class="tagline">${ce(n.tagline)}</p><p class="body">${ce(n.body)}</p><div class="cta-row"><a class="btn" href="#game">Discover the game</a><button class="btn ghost" data-stop="0">Watch it again</button></div>`:`${u}<h2>${ce(n.title)}</h2><p class="body">${ce(n.body)}</p>${l}${c}${n.note?`<p class="note">${ce(n.note)}</p>`:""}${n.first?'<p class="first-h">Eclipsed Realms · The World Remembers<br>A dark fantasy action RPG for one to four players</p><div class="cta-row"><button class="btn" data-stop="1">Begin</button><a class="btn ghost" href="#game">Skip to the game</a></div>':""}${s?`<div class="doors">${s}</div>`:""}${i.length?`<div class="acts">${i.join("")}</div>`:""}`,e.style.setProperty("--poster",`url("${new URL(`${Jh}assets/poster/${n.key}.webp`,location.href).href}")`),ze("#captions").append(e);const h=document.createElement("i");return h.className="snap",fn.append(h),{...n,node:e,snap:h}}),Ns=ze("#rail");Ns.innerHTML='<div class="track"><i id="rail-fill"></i></div>'+Be.map((n,t)=>`<button class="tick${n.nav?"":" minor"}" data-stop="${t}" aria-label="${ce(n.nav||n.kicker)}"><span>${ce(n.nav||n.kicker)}</span><i></i></button>`).join("");ze("#realms-list").innerHTML=Be.map((n,t)=>n.nav?`<li><button data-stop="${t}"><i>${n.numeral||"·"}</i>${ce(n.nav)}</button></li>`:"").join("");ze("#realms-list").insertAdjacentHTML("beforeend",'<li class="all"><button data-atlas><i>✦</i>All places</button></li>');{const n=document.createElement("div");n.id="peek",n.setAttribute("aria-hidden","true"),document.body.append(n);const t=i=>{const s=Be[+i.dataset.stop],r=eh(s.key)[0],o=r&&nh(r.id);if(!o)return e();n.innerHTML=`<img alt="" src="${o.src}" style="background-image:url(${o.lq})"><p><small>${ce(s.numeral||"")} ${ce(r.tag)}</small>${ce(s.nav||r.name)}</p>`;const a=i.getBoundingClientRect();n.style.top=`${yn(a.top+a.height/2,110,innerHeight-110)}px`,n.classList.add("on")},e=()=>n.classList.remove("on");Ns.addEventListener("pointerover",i=>{const s=i.target.closest(".tick");s&&i.pointerType!=="touch"&&t(s)}),Ns.addEventListener("pointerleave",e),Ns.addEventListener("focusin",i=>{const s=i.target.closest(".tick");s&&t(s)}),Ns.addEventListener("focusout",e)}const Za=ze("#next");{const n=document.createElement("button");n.id="heavens",n.type="button",n.title="The Heavens: the eclipse cycle. Select to try it at the Crucible.",n.innerHTML='<i aria-hidden="true"></i><b></b><span></span>',n.dataset.fly="arena",document.body.append(n)}const ts=ze("#drawer");function ef(){const n=In();fn.style.height=`${(hn-1)*n+innerHeight}px`,Or.forEach((t,e)=>{t.snap.style.top=`${e*n}px`})}const vi=()=>yn((scrollY-fn.offsetTop)/In(),0,hn-1),rs=()=>scrollY<fn.offsetTop+(hn-1)*In()+innerHeight*.4;function nf(n){const t=Math.min(hn-2,Math.floor(n)),e=n-t,i=dc/2,s=e<=i?0:e>=1-i?1:(e-i)/(1-2*i);return Sn[t]+(Sn[t+1]-Sn[t])*(s*s*(3-2*s))}function ko(n,t){n=yn(n,0,hn-1),mc();const e=fn.offsetTop+n*In(),i=Math.abs(n-vi())>1.6||!rs();if(es=performance.now()+1400,!Te){Or[n].node.scrollIntoView();return}i||t||wn?(Ho.classList.add("on"),setTimeout(()=>{scrollTo(0,e),Te.setProgress(Sn[n],!0),setTimeout(()=>Ho.classList.remove("on"),160)},320)):scrollTo({top:e,behavior:"smooth"})}function pc(){if(!Te||wn||!rs()||performance.now()<es)return;const n=vi(),t=Math.floor(n),e=n-t;if(e<.012||e>.988)return;const i=tf>0?e>.05?t+1:t:e<.95?t:t+1;es=performance.now()+900,scrollTo({top:fn.offsetTop+yn(i,0,hn-1)*In(),behavior:"smooth"}),clearTimeout(Vo),Vo=setTimeout(pc,1e3)}function e_(n){if(n===Ju)return;Ju=n;const t=Be[n],e=Be[n+1];Ns.querySelectorAll(".tick").forEach((i,s)=>{i.classList.toggle("on",s===n),i.classList.toggle("done",s<n),s===n?i.setAttribute("aria-current","step"):i.removeAttribute("aria-current")}),Za.innerHTML=e?`<span>${n===0?"Begin":"Next"}</span>${ce(e.nav||e.kicker.split("·").pop().trim())}`:"<span>Continue</span>Before you play",Za.dataset.stop=e?n+1:"",Za.dataset.href=e?"":"#game";try{Te&&rs()&&history.replaceState(null,"",n?`#${t.slug}`:location.pathname+location.search)}catch{}}function jn(){const n=scrollY,t=performance.now();if(n!==_r&&(tf=n>_r?1:-1),t>es&&rs()){t-Uo>320&&(Mr=Math.round(yn((_r-fn.offsetTop)/In(),0,hn-1)));const r=(n-fn.offsetTop)/In();if(r>Mr+1||r<Mr-1){const o=fn.offsetTop+yn(Mr+Math.sign(r-Mr),0,hn-1)*In();if(Math.abs(o-n)>1&&r<=hn-1+.02){_r=o,Uo=t,scrollTo(0,o);return}}}_r=n,Uo=t;const e=vi(),i=rs(),s=Math.max(0,n-fn.offsetTop-(hn-1)*In())/innerHeight;if(document.body.classList.toggle("in-codex",!i),i||Us.update({a:0,ecl:0,flight:0}),ze("#top").classList.toggle("solid",!i),(!Te||wn||i!==sf)&&rf(!Te||wn||Go<0?e:Go,i),!!Te){if(wn){const r=Math.round(e);jn.last!==r&&(jn.last=r,Ho.classList.add("on"),setTimeout(()=>Ho.classList.remove("on"),240)),Te.setProgress(ns===r&&Fs&&br?br[Fs]:Sn[r],!0)}else Te.setProgress(ns>=0&&Fs&&br&&Math.abs(e-ns)<=dc/2?br[Fs]:nf(e)),Te.setNudge(Math.sin((e-Math.floor(e))*Math.PI*2));Te.setDim(1-Math.min(.74,s*1.1)),s>1.6&&Qi?(Te.stop(),Qi=!1):s<=1.6&&!Qi&&(Te.start(),Qi=!0),clearTimeout(Vo),Vo=setTimeout(pc,230)}}let Go=-1,sf=!0;function rf(n,t=rs()){Go=n,sf=t;const e=Math.round(n);Or.forEach((i,s)=>{const r=yn((.36-Math.abs(n-s))/.12,0,1)*(t?1:0);i.node.style.opacity=r,i.node.style.visibility=r>.01?"visible":"hidden",i.node.style.setProperty("--shift",`${(1-r)*16*(n>s?-1:1)}px`),i.node.inert=r<.5}),ze("#rail-fill").style.height=`${n/(hn-1)*100}%`,e_(e),Wo(n)}function Qu(n){let t=0;for(;t<hn-2&&Sn[t+1]<=n;)t++;const e=yn((n-Sn[t])/Math.max(1e-6,Sn[t+1]-Sn[t]),0,1);return t+(e<=0?0:e>=1?1:.5-Math.sin(Math.asin(1-2*e)/3))}function n_(n){if(wn)return;const t=vi(),e=ns>=0&&Fs&&Math.abs(t-ns)<=dc/2&&Math.abs(Qu(n.u)-ns)<.5?t:Qu(n.u);Math.abs(e-Go)>5e-4&&rf(e)}function i_(n){const t=Be[n].more;t&&(ts.innerHTML=`<button class="x" data-drawer-close aria-label="Close">Close</button><p class="eyebrow">${ce(Be[n].nav||Be[n].kicker)}</p><h2>${ce(t.title)}</h2>${t.paras.map(e=>`<p>${ce(e)}</p>`).join("")}${t.facts?`<dl>${t.facts.map(([e,i])=>`<div><dt>${ce(e)}</dt><dd>${ce(i)}</dd></div>`).join("")}</dl>`:""}<div class="acts">${(t.links||[]).map(e=>`<a class="act" href="${e.href}" data-drawer-close>${ce(e.label)}</a>`).join("")}<button class="act" data-drawer-close>Back to the scene</button></div>`,ts.hidden=!1,requestAnimationFrame(()=>ts.classList.add("open")),ts.querySelector(".x").focus(),document.body.classList.add("drawer-open"))}function mc(){ts.hidden||(ts.classList.remove("open"),document.body.classList.remove("drawer-open"),setTimeout(()=>{ts.hidden=!0},260))}const Ka=ql.days,_n=ql,s_=n=>{const t=Math.min(hn-2,Math.floor(n)),e=n-t;return Ka[t]+(Ka[t+1]-Ka[t])*e},of=(n,t)=>{const e=((n-t)%28+28)%28;return Math.min(e,28-e)},th=(n,t)=>{const e=yn(1-of(n,t)/1.6,0,1);return e*e*(3-2*e)};let On={day:0,aff:1,used:!1};const Xl=Be.map((n,t)=>n.eclipse?{i:t,...n.eclipse,P:n.eclipse.type==="solar"?_n.solar:_n.lunar[n.eclipse.aff]}:null).filter(Boolean);{const n=document.createElement("div");n.id="eclipses",n.setAttribute("aria-label","The four eclipses"),n.innerHTML=Xl.map(t=>`<button data-stop="${t.i}" style="--c:${t.P.css}" title="${t.type==="solar"?"Solar eclipse":t.P.name+" lunar eclipse"}: ${ce(Be[t.i].nav)}"><i></i><span>${t.type==="solar"?"Solar":ce(t.P.name)}</span></button>`).join(""),document.body.append(n)}function Wo(n,t){const e=Math.round(n),i=Be[e],s=i?.eclipse,r=Math.abs(n-e),o=s_(n),a=(o%28+28)%28;let l=0,c=0,u=_n.lunar[1],h=_n.solar,f,d=a;if(i?.sky&&(On.used||t)){u=_n.lunar[On.aff];const _=th(On.day,0),v=th(On.day,14);d=On.day,v>_?(l=1,c=v,h=u):c=_}else if(s){const _=yn((.6-r)/.4,0,1);c=_*_*(3-2*_),s.type==="lunar"&&(l=1,u=_n.lunar[s.aff],h=u)}i?.sky||(f=Math.min(1,c*2.2));{const _=yn((.62-r)/.4,0,1);Us.update({key:i?.key||"",a:_*_*(3-2*_),flight:yn((r-.2)/.25,0,1),ecl:c,kind:s?s.type==="solar"?"solar":_n.lunar[s.aff].name:""})}if(Te){const _=yn((.62-r)/.4,0,1);Te.setLife(i?.key||"",_*_*(3-2*_)),Te.setBeast(s&&s.type==="lunar"&&s.aff===0?Math.max(0,(c-.45)/.55):0),Te.setHeavens({day:a,lunar:l?c:0,tint:u.tint}),Te.setSky({mode:l,amt:c,li:h.li,light:h.light,sky:h.sky,fog:h.fog,tint:h.tint,w:f,az:s?.az,el:s?.el,size:s?.size})}const g=l?0:c,x=l?c:0,m=Math.round(d)%28;Xl.find(_=>_.i>n+.3);const p=g>.6?_n.solar.short:x>.6?u.short:c>.05?"The eclipse is beginning":"",S=ze("#heavens");return S.querySelector("b").textContent=`Day ${m} of 28`,S.querySelector("span").textContent=p,S.style.setProperty("--ph",(a/28).toFixed(3)),S.style.setProperty("--hc",c>.6?h.css:"var(--gold)"),document.querySelectorAll("#eclipses button").forEach((_,v)=>{const C=Xl[v];_.classList.toggle("on",C.i===e&&c>.5&&!(i?.sky&&On.used)),_.classList.toggle("seen",n>C.i+.3)}),document.body.style.setProperty("--ecl",c.toFixed(3)),document.body.style.setProperty("--eclc",c>.02?h.css:"transparent"),{d,solar:g,lunar:x,L:u,whole:m,line:p}}function r_(){const n=Or.find(s=>s.sky);if(!n)return;const t=document.createElement("div");t.className="sky",t.innerHTML=`<p class="sky-h">${ce(_n.dialLabel)}</p><label class="sky-range"><span>Day</span><input type="range" min="0" max="27" step="1" value="0" aria-label="Day of the 28-day cycle"><b>0</b></label><div class="sky-chips"><i>Lunar affinity</i>${_n.lunar.map((s,r)=>`<button class="chip" data-aff="${r}" style="--c:${s.css}">${ce(s.name)}</button>`).join("")}</div><p class="sky-out" aria-live="polite"></p>`,n.node.querySelector(".acts")?.before(t)||n.node.append(t);const e=t.querySelector("input"),i=s=>{s&&(On.used=!0),On.day=+e.value,t.querySelectorAll("[data-aff]").forEach((o,a)=>o.setAttribute("aria-pressed",a===On.aff)),t.querySelector("b").textContent=e.value;const r=Wo(Be.findIndex(o=>o.sky),!0);t.querySelector(".sky-out").textContent=r.solar>.6?_n.solar.text:r.lunar>.6?r.L.text:r.solar>.05||r.lunar>.05?_n.partial:`${_n.none} ${r.line}.`};t.addEventListener("click",s=>{const r=s.target.closest("[data-aff]");r&&(On.aff=+r.dataset.aff,of(+e.value,14)>1&&(e.value=14),i(s))}),e.addEventListener("input",i),i(),On.used=!1,Wo(vi())}const ns=Be.findIndex(n=>n.schools);let Fs=0,br=null;function o_(n){const t=Or[ns],e=t.schools[n];Fs=n,br=Te?t.schools.map(i=>Te.progressOf(i.key)):null,t.node.querySelectorAll("[data-school]").forEach((i,s)=>i.setAttribute("aria-pressed",s===n)),t.node.querySelector(".sch-h").textContent=e.title,t.node.querySelector(".sch-p").textContent=e.body;for(const i of t.schools)t.node.classList.toggle(i.id,i===e);jn()}{const n=document.createElement("button");n.id="sound-btn",n.type="button",n.setAttribute("aria-pressed","false"),n.innerHTML='<i aria-hidden="true"></i><span>Sound off</span>';const t=e=>{n.setAttribute("aria-pressed",e),n.querySelector("span").textContent=e?"Sound on":"Sound off"};n.addEventListener("click",()=>{t(Us.toggle()),Wo(vi())}),document.body.append(n),document.addEventListener("er-place",e=>Us.quiet(e.detail.open)),document.addEventListener("visibilitychange",()=>{document.hidden&&Us.on&&t(Us.toggle())})}document.addEventListener("click",n=>{const t=n.target.closest("[data-school],[data-stop],[data-fly],[data-more],[data-drawer-close],#next,#trailer-btn");if(t){if(t.id==="trailer-btn"){ze("#trailer").showModal();return}if(t.dataset.school){o_(+t.dataset.school);return}if(t.dataset.more){i_(+t.dataset.more);return}if(!(t.hasAttribute("data-drawer-close")&&(mc(),t.tagName!=="A"))){if(t.id==="next"&&t.dataset.href){location.hash=t.dataset.href;return}if(t.dataset.stop!==void 0&&t.dataset.stop!==""){n.preventDefault(),ko(+t.dataset.stop),document.dispatchEvent(new CustomEvent("er-close-menus"));return}if(t.dataset.fly){n.preventDefault();const e=Be.findIndex(i=>i.key===t.dataset.fly||i.slug===t.dataset.fly);e>=0&&ko(e),document.dispatchEvent(new CustomEvent("er-close-menus"))}}}});addEventListener("keydown",n=>{if(n.key==="Escape"&&mc(),document.body.classList.contains("place-open")||!rs()||n.target.closest("input,textarea,dialog,[contenteditable]")||document.querySelector("dialog[open]")||n.altKey||n.ctrlKey||n.metaKey)return;const t=["ArrowDown","PageDown"," "].includes(n.key),e=["ArrowUp","PageUp"].includes(n.key);if(!(n.key===" "&&n.target.closest("button,a"))){if(t||e){const i=Math.round(vi())+(t?1:-1);if(t&&i>hn-1)return;n.preventDefault(),ko(i)}n.key==="Home"&&(n.preventDefault(),ko(0))}});ze("#motion-btn").setAttribute("aria-pressed",wn);ze("#motion-btn").addEventListener("click",()=>{try{localStorage.setItem("er-motion",wn?"full":"reduce")}catch{}location.reload()});document.addEventListener("er-place",n=>{n.detail.open?Te&&Qi&&(Te.stop(),Qi=!1):jn()});setInterval(()=>{!document.hidden&&!document.body.classList.contains("place-open")&&performance.now()-Uo>700&&pc()},900);ef();jn();addEventListener("scroll",jn,{passive:!0});addEventListener("resize",()=>{ef(),Te?.resize(),jn()});Zx({canvas:ze("#world"),base:Jh,reducedMotion:wn,onProgress:(n,t)=>{ze("#l-fill").style.width=`${Math.round(n*100)}%`,ze("#l-msg").textContent=t}}).then(n=>{Te=n,Sn=Be.map(s=>n.progressOf(s.key)),window.__world=n,n.onFrame=n_,window.__setP=s=>{n.setProgress(s,!0)},window.__stop=s=>{es=performance.now()+600,scrollTo(0,fn.offsetTop+s*In()),n.setProgress(Sn[s],!0),jn()},window.__stops=Be.map(s=>s.slug),window.__x=s=>{es=performance.now()+6e3,scrollTo(0,fn.offsetTop+s*In()),jn()},Qh.get("all")&&n.buildAll();let t=null;addEventListener("pointermove",s=>{wn||(n.setPointer(s.clientX/innerWidth*2-1,s.clientY/innerHeight*2-1),t!=null&&(n.addYaw((s.clientX-t)*-.25),t=s.clientX))}),ze("#world").addEventListener("pointerdown",s=>{t=s.clientX}),addEventListener("pointerup",()=>{t=null}),addEventListener("pointercancel",()=>{t=null}),r_(),Qi=!0,n.start();const e=location.hash.slice(1),i=Be.findIndex(s=>s.slug===e);i>0&&(es=performance.now()+800,scrollTo(0,fn.offsetTop+i*In()),n.setProgress(Sn[i],!0)),jn(),n.setProgress(wn?Sn[Math.round(vi())]:nf(vi()),!0),ze("#loader").classList.add("done"),document.body.classList.add("ready"),window.__ready=!0}).catch(n=>{console.warn("3D journey unavailable, using the static presentation:",n),document.body.classList.add("static"),fn.style.height="",ze("#loader").classList.add("done"),window.__fail=String(n)});
