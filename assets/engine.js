/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="170";const Bn="",on="srgb",gi="srgb-linear",bs="linear",ge="srgb";const ka="300 es";class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ps=Math.PI/180,va=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function jl(n,t){return(n%t+t)%t}function Ds(n,t,e){return(1-e)*n+e*t}function rr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,i,r,s,a,o,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],S=r[1],M=r[4],_=r[7],D=r[2],w=r[5],A=r[8];return s[0]=a*v+o*S+l*D,s[3]=a*m+o*M+l*w,s[6]=a*p+o*_+l*A,s[1]=c*v+u*S+h*D,s[4]=c*m+u*M+h*w,s[7]=c*p+u*_+h*A,s[2]=f*v+d*S+g*D,s[5]=f*m+d*M+g*w,s[8]=f*p+d*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=e*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(r*c-u*i)*v,t[2]=(o*i-r*a)*v,t[3]=f*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new ie;function vl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ql(){const n=xs("canvas");return n.style.display="block",n}const Wa={};function vr(n){n in Wa||(Wa[n]=!0,console.warn(n))}function tc(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function ec(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nc(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=Hn(n.r),n.g=Hn(n.g),n.b=Hn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=ki(n.r),n.g=ki(n.g),n.b=ki(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Bn?bs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Xa=[.64,.33,.3,.6,.15,.06],qa=[.2126,.7152,.0722],Ya=[.3127,.329],Za=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ka=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[gi]:{primaries:Xa,whitePoint:Ya,transfer:bs,toXYZ:Za,fromXYZ:Ka,luminanceCoefficients:qa,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:Xa,whitePoint:Ya,transfer:ge,toXYZ:Za,fromXYZ:Ka,luminanceCoefficients:qa,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let yi;class ic{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=xs("canvas")),yi.width=t.width,yi.height=t.height;const i=yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rc=0;class xl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Is(r[a].image)):s.push(Is(r[a]))}else s=Is(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Is(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ic.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sc=0;class Ze extends Zi{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=Ze.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Ki(),this.name="",this.source=new xl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=300;Ze.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(d+1)/2,D=(p+1)/2,w=(u+f)/4,A=(h+v)/4,R=(g+m)/4;return M>_&&M>D?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=A/i):_>D?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=R/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=A/s,r=R/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ac extends Zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ze(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends ac{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ml extends Ze{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oc extends Ze{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*v,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const D=Math.sqrt(M),w=Math.atan2(D,p*S);m=Math.sin(m*w)/D,o=Math.sin(o*w)/D}const _=o*S;if(l=l*m+f*_,c=c*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new L,$a=new Sn;class _i{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Ur.subVectors(this.max,sr),Si.subVectors(t.a,sr),bi.subVectors(t.b,sr),Ei.subVectors(t.c,sr),Xn.subVectors(bi,Si),qn.subVectors(Ei,bi),ri.subVectors(Si,Ei);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ri.z,ri.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ri.z,0,-ri.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ri.y,ri.x,0];return!Ns(e,Si,bi,Ei,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,Si,bi,Ei,Ur))?!1:(Nr.crossVectors(Xn,qn),e=[Nr.x,Nr.y,Nr.z],Ns(e,Si,bi,Ei,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,Ir=new _i,Si=new L,bi=new L,Ei=new L,Xn=new L,qn=new L,ri=new L,sr=new L,Ur=new L,Nr=new L,si=new L;function Ns(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){si.fromArray(n,s);const o=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),u=i.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const lc=new _i,ar=new L,Fs=new L;class $i{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):lc.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(Fs)),this.expandByPoint(ar.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new L,Os=new L,Fr=new L,Yn=new L,Bs=new L,Or=new L,zs=new L;class yl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Os.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Os);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=Yn.dot(this.direction),l=-Yn.dot(Fr),c=Yn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Os).addScaledVector(Fr,f),d}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,r,s){Bs.subVectors(e,t),Or.subVectors(i,t),zs.crossVectors(Bs,Or);let a=this.direction.dot(zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);const l=o*this.direction.dot(Or.crossVectors(Yn,Or));if(l<0)return null;const c=o*this.direction.dot(Bs.cross(Yn));if(c<0||l+c>a)return null;const u=-o*Yn.dot(zs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,r,s,a,o,l,c,u,h,f,d,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,f,d,g,v,m)}set(t,e,i,r,s,a,o,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f-v*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cc,t,uc)}lookAt(t,e,i){const r=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Zn.crossVectors(i,sn),Zn.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Zn.crossVectors(i,sn)),Zn.normalize(),Br.crossVectors(sn,Zn),r[0]=Zn.x,r[4]=Br.x,r[8]=sn.x,r[1]=Zn.y,r[5]=Br.y,r[9]=sn.y,r[2]=Zn.z,r[6]=Br.z,r[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],M=i[7],_=i[11],D=i[15],w=r[0],A=r[4],R=r[8],y=r[12],x=r[1],C=r[5],z=r[9],O=r[13],V=r[2],Z=r[6],W=r[10],ct=r[14],q=r[3],Mt=r[7],wt=r[11],Dt=r[15];return s[0]=a*w+o*x+l*V+c*q,s[4]=a*A+o*C+l*Z+c*Mt,s[8]=a*R+o*z+l*W+c*wt,s[12]=a*y+o*O+l*ct+c*Dt,s[1]=u*w+h*x+f*V+d*q,s[5]=u*A+h*C+f*Z+d*Mt,s[9]=u*R+h*z+f*W+d*wt,s[13]=u*y+h*O+f*ct+d*Dt,s[2]=g*w+v*x+m*V+p*q,s[6]=g*A+v*C+m*Z+p*Mt,s[10]=g*R+v*z+m*W+p*wt,s[14]=g*y+v*O+m*ct+p*Dt,s[3]=S*w+M*x+_*V+D*q,s[7]=S*A+M*C+_*Z+D*Mt,s[11]=S*R+M*z+_*W+D*wt,s[15]=S*y+M*O+_*ct+D*Dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*d-i*l*d)+v*(+e*l*d-e*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+m*(+e*c*h-e*o*d-s*a*h+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-e*l*h+e*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=h*m*c-v*f*c+v*l*d-o*m*d-h*l*p+o*f*p,M=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,_=u*v*c-g*h*c+g*o*d-a*v*d-u*o*p+a*h*p,D=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,w=e*S+i*M+r*_+s*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=S*A,t[1]=(v*f*s-h*m*s-v*r*d+i*m*d+h*r*p-i*f*p)*A,t[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*A,t[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*d-i*l*d)*A,t[4]=M*A,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*A,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*p-e*l*p)*A,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*d+e*l*d)*A,t[8]=_*A,t[9]=(g*h*s-u*v*s-g*i*d+e*v*d+u*i*p-e*h*p)*A,t[10]=(a*v*s-g*o*s+g*i*c-e*v*c-a*i*p+e*o*p)*A,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*d-e*o*d)*A,t[12]=D*A,t[13]=(u*v*r-g*h*r+g*i*f-e*v*f-u*i*m+e*h*m)*A,t[14]=(g*o*r-a*v*r-g*i*l+e*v*l+a*i*m-e*o*m)*A,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*f+e*o*f)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,v=a*u,m=a*h,p=o*h,S=l*c,M=l*u,_=l*h,D=i.x,w=i.y,A=i.z;return r[0]=(1-(v+p))*D,r[1]=(d+_)*D,r[2]=(g-M)*D,r[3]=0,r[4]=(d-_)*w,r[5]=(1-(f+p))*w,r[6]=(m+S)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(m-S)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],_n.copy(this);const c=1/s,u=1/a,h=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=2e3){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let d,g;if(o===2e3)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===2001)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=2e3){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),f=(e+t)*c,d=(i+r)*u;let g,v;if(o===2e3)g=(a+s)*h,v=-2*h;else if(o===2001)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const wi=new L,_n=new se,cc=new L(0,0,0),uc=new L(1,1,1),Zn=new L,Br=new L,sn=new L,Ja=new se,ja=new Sn;class yn{constructor(t=0,e=0,i=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ja,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ja.setFromEuler(this),this.setFromQuaternion(ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hc=0;const Qa=new L,Ti=new Sn,Un=new se,zr=new L,or=new L,fc=new L,dc=new Sn,to=new L(1,0,0),eo=new L(0,1,0),no=new L(0,0,1),io={type:"added"},pc={type:"removed"},Ai={type:"childadded",child:null},Gs={type:"childremoved",child:null};class We extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new L,e=new yn,i=new Sn,r=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new se},normalMatrix:{value:new ie}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(to,t)}rotateY(t){return this.rotateOnAxis(eo,t)}rotateZ(t){return this.rotateOnAxis(no,t)}translateOnAxis(t,e){return Qa.copy(t).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(to,t)}translateY(t){return this.translateOnAxis(eo,t)}translateZ(t){return this.translateOnAxis(no,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zr.copy(t):zr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(or,zr,this.up):Un.lookAt(zr,or,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(Un),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(io),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pc),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(io),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,dc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}We.DEFAULT_UP=new L(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new L,Nn=new L,Vs=new L,Fn=new L,Ri=new L,Ci=new L,ro=new L,Hs=new L,ks=new L,Ws=new L,Xs=new he,qs=new he,Ys=new he;class xn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),vn.subVectors(t,e),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){vn.subVectors(r,e),Nn.subVectors(i,e),Vs.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(Nn),l=vn.dot(Vs),c=Nn.dot(Nn),u=Nn.dot(Vs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Xs.setScalar(0),qs.setScalar(0),Ys.setScalar(0),Xs.fromBufferAttribute(t,e),qs.fromBufferAttribute(t,i),Ys.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Xs,s.x),a.addScaledVector(qs,s.y),a.addScaledVector(Ys,s.z),a}static isFrontFacing(t,e,i,r){return vn.subVectors(i,e),Nn.subVectors(t,e),vn.cross(Nn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),vn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Ri.subVectors(r,i),Ci.subVectors(s,i),Hs.subVectors(t,i);const l=Ri.dot(Hs),c=Ci.dot(Hs);if(l<=0&&c<=0)return e.copy(i);ks.subVectors(t,r);const u=Ri.dot(ks),h=Ci.dot(ks);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Ri,a);Ws.subVectors(t,s);const d=Ri.dot(Ws),g=Ci.dot(Ws);if(g>=0&&d<=g)return e.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ci,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ro.subVectors(s,r),o=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(ro,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(i).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Zs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ue.workingColorSpace){if(t=jl(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Zs(a,s,t+1/3),this.g=Zs(a,s,t),this.b=Zs(a,s,t-1/3)}return ue.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const i=bl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ue.fromWorkingColorSpace($e.copy(this),t),Math.round(Fe($e.r*255,0,255))*65536+Math.round(Fe($e.g*255,0,255))*256+Math.round(Fe($e.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace($e.copy(this),e);const i=$e.r,r=$e.g,s=$e.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=on){ue.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,i=$e.g,r=$e.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Gr);const i=Ds(Kn.h,Gr.h,e),r=Ds(Kn.s,Gr.s,e),s=Ds(Kn.l,Gr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Lt;Lt.NAMES=bl;let mc=0;class Ji extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Ki(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Es extends Ji{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zn=gc();function gc(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function _c(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Fe(n,-65504,65504),zn.floatView[0]=n;const t=zn.uint32View[0],e=t>>23&511;return zn.baseTable[e]+((t&8388607)>>zn.shiftTable[e])}function vc(n){const t=n>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[t]+(n&1023)]+zn.exponentTable[t],zn.floatView[0]}const xc={toHalfFloat:_c,fromHalfFloat:vc},Ue=new L,Vr=new ft;class Ie{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=rr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class El extends Ie{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wl extends Ie{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class re extends Ie{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Mc=0;const hn=new se,Ks=new We,Pi=new L,an=new _i,lr=new _i,Ge=new L;class Ee extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vl(t)?wl:El)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ie().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(an.min,lr.min),an.expandByPoint(Ge),Ge.addVectors(an.max,lr.max),an.expandByPoint(Ge)):(an.expandByPoint(lr.min),an.expandByPoint(lr.max))}an.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ge.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(t,c),Ge.add(Pi)),r=Math.max(r,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new L,l[R]=new L;const c=new L,u=new L,h=new L,f=new ft,d=new ft,g=new ft,v=new L,m=new L;function p(R,y,x){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[R].add(v),o[y].add(v),o[x].add(v),l[R].add(m),l[y].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,y=S.length;R<y;++R){const x=S[R],C=x.start,z=x.count;for(let O=C,V=C+z;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new L,_=new L,D=new L,w=new L;function A(R){D.fromBufferAttribute(r,R),w.copy(D);const y=o[R];M.copy(y),M.sub(D.multiplyScalar(D.dot(y))).normalize(),_.crossVectors(w,y);const C=_.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,y=S.length;R<y;++R){const x=S[R],C=x.start,z=x.count;for(let O=C,V=C+z;O<V;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ie(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new se,ai=new yl,Hr=new $i,ao=new L,kr=new L,Wr=new L,Xr=new L,$s=new L,qr=new L,oo=new L,Yr=new L;class $t extends We{constructor(t=new Ee,e=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&($s.fromBufferAttribute(h,t),a?qr.addScaledVector($s,u):qr.addScaledVector($s.sub(e),u))}e.add(qr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),ai.copy(t.ray).recast(t.near),!(Hr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Hr,ao)===null||ai.origin.distanceToSquared(ao)>(t.far-t.near)**2))&&(so.copy(s).invert(),ai.copy(t.ray).applyMatrix4(so),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,D=M;_<D;_+=3){const w=o.getX(_),A=o.getX(_+1),R=o.getX(_+2);r=Zr(this,p,t,i,c,u,h,w,A,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);r=Zr(this,a,t,i,c,u,h,S,M,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,D=M;_<D;_+=3){const w=_,A=_+1,R=_+2;r=Zr(this,p,t,i,c,u,h,w,A,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,M=m+1,_=m+2;r=Zr(this,a,t,i,c,u,h,S,M,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function yc(n,t,e,i,r,s,a,o){let l;if(t.side===1?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===0,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:n}}function Zr(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,kr),n.getVertexPosition(l,Wr),n.getVertexPosition(c,Xr);const u=yc(n,t,e,i,kr,Wr,Xr,oo);if(u){const h=new L;xn.getBarycoord(oo,kr,Wr,Xr,h),r&&(u.uv=xn.getInterpolatedAttribute(r,o,l,c,h,new ft)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,l,c,h,new ft)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};xn.getNormal(kr,Wr,Xr,f.normal),u.face=f,u.barycoord=h}return u}class ni extends Ee{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(h,2));function g(v,m,p,S,M,_,D,w,A,R,y){const x=_/A,C=D/R,z=_/2,O=D/2,V=w/2,Z=A+1,W=R+1;let ct=0,q=0;const Mt=new L;for(let wt=0;wt<W;wt++){const Dt=wt*C-O;for(let Kt=0;Kt<Z;Kt++){const ce=Kt*x-z;Mt[v]=ce*S,Mt[m]=Dt*M,Mt[p]=V,c.push(Mt.x,Mt.y,Mt.z),Mt[v]=0,Mt[m]=0,Mt[p]=w>0?1:-1,u.push(Mt.x,Mt.y,Mt.z),h.push(Kt/A),h.push(1-wt/R),ct+=1}}for(let wt=0;wt<R;wt++)for(let Dt=0;Dt<A;Dt++){const Kt=f+Dt+Z*wt,ce=f+Dt+Z*(wt+1),K=f+(Dt+1)+Z*(wt+1),mt=f+(Dt+1)+Z*wt;l.push(Kt,ce,mt),l.push(ce,K,mt),q+=6}o.addGroup(d,q,y),d+=q,f+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Qe(n){const t={};for(let e=0;e<n.length;e++){const i=qi(n[e]);for(const r in i)t[r]=i[r]}return t}function Sc(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Tl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const bc={clone:qi,merge:Qe};var Ec=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends Ji{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ec,this.fragmentShader=wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Sc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ca extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,lo=new ft,co=new ft;class cn extends Ca{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,lo,co),e.subVectors(co,lo)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Li=1;class Tc extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Di,Li,t,e);r.layers=this.layers,this.add(r);const s=new cn(Di,Li,t,e);s.layers=this.layers,this.add(s);const a=new cn(Di,Li,t,e);a.layers=this.layers,this.add(a);const o=new cn(Di,Li,t,e);o.layers=this.layers,this.add(o);const l=new cn(Di,Li,t,e);l.layers=this.layers,this.add(l);const c=new cn(Di,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Al extends Ze{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ac extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Al(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new Oe({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new $t(r,s),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Tc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Js=new L,Rc=new L,Cc=new ie;class hi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Js.subVectors(i,e).cross(Rc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Js),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cc.getNormalMatrix(t),r=this.coplanarPoint(Js).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new $i,Kr=new L;class Pa{constructor(t=new hi,e=new hi,i=new hi,r=new hi,s=new hi,a=new hi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=2e3){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],S=r[13],M=r[14],_=r[15];if(i[0].setComponents(l-s,f-c,m-d,_-p).normalize(),i[1].setComponents(l+s,f+c,m+d,_+p).normalize(),i[2].setComponents(l+a,f+u,m+g,_+S).normalize(),i[3].setComponents(l-a,f-u,m-g,_-S).normalize(),i[4].setComponents(l-o,f-h,m-v,_-M).normalize(),e===2e3)i[5].setComponents(l+o,f+h,m+v,_+M).normalize();else if(e===2001)i[5].setComponents(o,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Kr.x=r.normal.x>0?t.max.x:t.min.x,Kr.y=r.normal.y>0?t.max.y:t.min.y,Kr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rl(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Pc(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Yi extends Ee{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let M=0;M<c;M++){const _=M*h-s;g.push(_,-S,0),v.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const M=S+c*p,_=S+c*(p+1),D=S+1+c*(p+1),w=S+1+c*p;d.push(M,_,w),d.push(_,D,w)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lc=`#ifdef USE_ALPHAHASH
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
#endif`,Ic=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oc=`#ifdef USE_AOMAP
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
#endif`,Bc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zc=`#ifdef USE_BATCHING
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
#endif`,Gc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wc=`#ifdef USE_IRIDESCENCE
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
#endif`,Xc=`#ifdef USE_BUMPMAP
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
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tu=`#define PI 3.141592653589793
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
} // validated`,eu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nu=`vec3 transformedNormal = objectNormal;
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
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",lu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
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
}`,xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Su=`uniform bool receiveShadow;
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
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
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
#endif`,Cu=`struct PhysicalMaterial {
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
}`,Pu=`
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gu=`#if defined( USE_POINTS_UV )
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
#endif`,Vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`#ifdef USE_MORPHTARGETS
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
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qu=`#ifdef USE_NORMALMAP
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
#endif`,th=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ph=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mh=`float getShadowMask() {
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
}`,gh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_h=`#ifdef USE_SKINNING
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
#endif`,vh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xh=`#ifdef USE_SKINNING
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
#endif`,Mh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eh=`#ifdef USE_TRANSMISSION
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
#endif`,wh=`#ifdef USE_TRANSMISSION
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
#endif`,Th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ch=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ph=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dh=`uniform sampler2D t2D;
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
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ih=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`#include <common>
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
}`,Oh=`#if DEPTH_PACKING == 3200
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
}`,Bh=`#define DISTANCE
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
}`,zh=`#define DISTANCE
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
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hh=`uniform float scale;
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
}`,kh=`uniform vec3 diffuse;
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
}`,Wh=`#include <common>
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
}`,Xh=`uniform vec3 diffuse;
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
}`,qh=`#define LAMBERT
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
}`,Yh=`#define LAMBERT
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
}`,Zh=`#define MATCAP
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
}`,Kh=`#define MATCAP
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
}`,$h=`#define NORMAL
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
}`,Jh=`#define NORMAL
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
}`,jh=`#define PHONG
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
}`,Qh=`#define PHONG
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
}`,tf=`#define STANDARD
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
}`,ef=`#define STANDARD
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
}`,nf=`#define TOON
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
}`,rf=`#define TOON
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
}`,sf=`uniform float size;
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
}`,af=`uniform vec3 diffuse;
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
}`,of=`#include <common>
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
}`,lf=`uniform vec3 color;
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
}`,cf=`uniform float rotation;
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
}`,uf=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Dc,alphahash_pars_fragment:Lc,alphamap_fragment:Ic,alphamap_pars_fragment:Uc,alphatest_fragment:Nc,alphatest_pars_fragment:Fc,aomap_fragment:Oc,aomap_pars_fragment:Bc,batching_pars_vertex:zc,batching_vertex:Gc,begin_vertex:Vc,beginnormal_vertex:Hc,bsdfs:kc,iridescence_fragment:Wc,bumpmap_pars_fragment:Xc,clipping_planes_fragment:qc,clipping_planes_pars_fragment:Yc,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:Kc,color_fragment:$c,color_pars_fragment:Jc,color_pars_vertex:jc,color_vertex:Qc,common:tu,cube_uv_reflection_fragment:eu,defaultnormal_vertex:nu,displacementmap_pars_vertex:iu,displacementmap_vertex:ru,emissivemap_fragment:su,emissivemap_pars_fragment:au,colorspace_fragment:ou,colorspace_pars_fragment:lu,envmap_fragment:cu,envmap_common_pars_fragment:uu,envmap_pars_fragment:hu,envmap_pars_vertex:fu,envmap_physical_pars_fragment:bu,envmap_vertex:du,fog_vertex:pu,fog_pars_vertex:mu,fog_fragment:gu,fog_pars_fragment:_u,gradientmap_pars_fragment:vu,lightmap_pars_fragment:xu,lights_lambert_fragment:Mu,lights_lambert_pars_fragment:yu,lights_pars_begin:Su,lights_toon_fragment:Eu,lights_toon_pars_fragment:wu,lights_phong_fragment:Tu,lights_phong_pars_fragment:Au,lights_physical_fragment:Ru,lights_physical_pars_fragment:Cu,lights_fragment_begin:Pu,lights_fragment_maps:Du,lights_fragment_end:Lu,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Uu,logdepthbuf_pars_vertex:Nu,logdepthbuf_vertex:Fu,map_fragment:Ou,map_pars_fragment:Bu,map_particle_fragment:zu,map_particle_pars_fragment:Gu,metalnessmap_fragment:Vu,metalnessmap_pars_fragment:Hu,morphinstance_vertex:ku,morphcolor_vertex:Wu,morphnormal_vertex:Xu,morphtarget_pars_vertex:qu,morphtarget_vertex:Yu,normal_fragment_begin:Zu,normal_fragment_maps:Ku,normal_pars_fragment:$u,normal_pars_vertex:Ju,normal_vertex:ju,normalmap_pars_fragment:Qu,clearcoat_normal_fragment_begin:th,clearcoat_normal_fragment_maps:eh,clearcoat_pars_fragment:nh,iridescence_pars_fragment:ih,opaque_fragment:rh,packing:sh,premultiplied_alpha_fragment:ah,project_vertex:oh,dithering_fragment:lh,dithering_pars_fragment:ch,roughnessmap_fragment:uh,roughnessmap_pars_fragment:hh,shadowmap_pars_fragment:fh,shadowmap_pars_vertex:dh,shadowmap_vertex:ph,shadowmask_pars_fragment:mh,skinbase_vertex:gh,skinning_pars_vertex:_h,skinning_vertex:vh,skinnormal_vertex:xh,specularmap_fragment:Mh,specularmap_pars_fragment:yh,tonemapping_fragment:Sh,tonemapping_pars_fragment:bh,transmission_fragment:Eh,transmission_pars_fragment:wh,uv_pars_fragment:Th,uv_pars_vertex:Ah,uv_vertex:Rh,worldpos_vertex:Ch,background_vert:Ph,background_frag:Dh,backgroundCube_vert:Lh,backgroundCube_frag:Ih,cube_vert:Uh,cube_frag:Nh,depth_vert:Fh,depth_frag:Oh,distanceRGBA_vert:Bh,distanceRGBA_frag:zh,equirect_vert:Gh,equirect_frag:Vh,linedashed_vert:Hh,linedashed_frag:kh,meshbasic_vert:Wh,meshbasic_frag:Xh,meshlambert_vert:qh,meshlambert_frag:Yh,meshmatcap_vert:Zh,meshmatcap_frag:Kh,meshnormal_vert:$h,meshnormal_frag:Jh,meshphong_vert:jh,meshphong_frag:Qh,meshphysical_vert:tf,meshphysical_frag:ef,meshtoon_vert:nf,meshtoon_frag:rf,points_vert:sf,points_frag:af,shadow_vert:of,shadow_frag:lf,sprite_vert:cf,sprite_frag:uf},Et={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},wn={basic:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Qe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Qe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Qe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Qe([Et.points,Et.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Qe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Qe([Et.common,Et.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Qe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Qe([Et.sprite,Et.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Qe([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Qe([Et.lights,Et.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};wn.physical={uniforms:Qe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const $r={r:0,b:0,g:0},li=new yn,hf=new se;function ff(n,t,e,i,r,s,a){const o=new Lt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function v(S){let M=!1;const _=g(S);_===null?p(o,l):_&&_.isColor&&(p(_,1),M=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new $t(new ni(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:qi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hf.makeRotationFromEuler(li)),u.material.toneMapped=ue.getTransfer(_.colorSpace)!==ge,(h!==_||f!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new $t(new Yi(2,2),new Oe({name:"BackgroundMaterial",uniforms:qi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ue.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB($r,Tl(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function df(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(x,C,z,O,V){let Z=!1;const W=h(O,z,C);s!==W&&(s=W,c(s.object)),Z=d(x,O,z,V),Z&&g(x,O,z,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(x,C,z,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,C,z){const O=z.wireframe===!0;let V=i[x.id];V===void 0&&(V={},i[x.id]=V);let Z=V[C.id];Z===void 0&&(Z={},V[C.id]=Z);let W=Z[O];return W===void 0&&(W=f(l()),Z[O]=W),W}function f(x){const C=[],z=[],O=[];for(let V=0;V<e;V++)C[V]=0,z[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,C,z,O){const V=s.attributes,Z=C.attributes;let W=0;const ct=z.getAttributes();for(const q in ct)if(ct[q].location>=0){const wt=V[q];let Dt=Z[q];if(Dt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(Dt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(Dt=x.instanceColor)),wt===void 0||wt.attribute!==Dt||Dt&&wt.data!==Dt.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function g(x,C,z,O){const V={},Z=C.attributes;let W=0;const ct=z.getAttributes();for(const q in ct)if(ct[q].location>=0){let wt=Z[q];wt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(wt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(wt=x.instanceColor));const Dt={};Dt.attribute=wt,wt&&wt.data&&(Dt.data=wt.data),V[q]=Dt,W++}s.attributes=V,s.attributesNum=W,s.index=O}function v(){const x=s.newAttributes;for(let C=0,z=x.length;C<z;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const z=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;z[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),V[x]!==C&&(n.vertexAttribDivisor(x,C),V[x]=C)}function S(){const x=s.newAttributes,C=s.enabledAttributes;for(let z=0,O=C.length;z<O;z++)C[z]!==x[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function M(x,C,z,O,V,Z,W){W===!0?n.vertexAttribIPointer(x,C,z,V,Z):n.vertexAttribPointer(x,C,z,O,V,Z)}function _(x,C,z,O){v();const V=O.attributes,Z=z.getAttributes(),W=C.defaultAttributeValues;for(const ct in Z){const q=Z[ct];if(q.location>=0){let Mt=V[ct];if(Mt===void 0&&(ct==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),ct==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),Mt!==void 0){const wt=Mt.normalized,Dt=Mt.itemSize,Kt=t.get(Mt);if(Kt===void 0)continue;const ce=Kt.buffer,K=Kt.type,mt=Kt.bytesPerElement,Tt=K===n.INT||K===n.UNSIGNED_INT||Mt.gpuType===1013;if(Mt.isInterleavedBufferAttribute){const _t=Mt.data,Vt=_t.stride,Jt=Mt.offset;if(_t.isInstancedInterleavedBuffer){for(let Yt=0;Yt<q.locationSize;Yt++)p(q.location+Yt,_t.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Yt=0;Yt<q.locationSize;Yt++)m(q.location+Yt);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Yt=0;Yt<q.locationSize;Yt++)M(q.location+Yt,Dt/q.locationSize,K,wt,Vt*mt,(Jt+Dt/q.locationSize*Yt)*mt,Tt)}else{if(Mt.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)p(q.location+_t,Mt.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let _t=0;_t<q.locationSize;_t++)m(q.location+_t);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let _t=0;_t<q.locationSize;_t++)M(q.location+_t,Dt/q.locationSize,K,wt,Dt*mt,Dt/q.locationSize*_t*mt,Tt)}}else if(W!==void 0){const wt=W[ct];if(wt!==void 0)switch(wt.length){case 2:n.vertexAttrib2fv(q.location,wt);break;case 3:n.vertexAttrib3fv(q.location,wt);break;case 4:n.vertexAttrib4fv(q.location,wt);break;default:n.vertexAttrib1fv(q.location,wt)}}}}S()}function D(){R();for(const x in i){const C=i[x];for(const z in C){const O=C[z];for(const V in O)u(O[V].object),delete O[V];delete C[z]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const z in C){const O=C[z];for(const V in O)u(O[V].object),delete O[V];delete C[z]}delete i[x.id]}function A(x){for(const C in i){const z=i[C];if(z[x.id]===void 0)continue;const O=z[x.id];for(const V in O)u(O[V].object),delete O[V];delete z[x.id]}}function R(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function pf(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mf(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==1023&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==1009&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==1015&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:D,maxSamples:w}}function gf(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new hi,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,M=S*4;let _=p.clippingState||null;l.value=_,_=u(g,f,M,d);for(let D=0;D!==M;++D)_[D]=e[D];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==v;++M,_+=4)a.copy(h[M]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function _f(n){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ac(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Cl extends Ca{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,uo=[.125,.215,.35,.446,.526,.582],di=20,js=new Cl,ho=new Lt;let Qs=null,ta=0,ea=0,na=!1;const fi=(1+Math.sqrt(5))/2,Ii=1/fi,fo=[new L(-fi,Ii,0),new L(fi,Ii,0),new L(-Ii,0,fi),new L(Ii,0,fi),new L(0,fi,-Ii),new L(0,fi,Ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Qs=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,ta,ea),this._renderer.xr.enabled=na,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:gi,depthBuffer:!1},r=po(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vf(s)),this._blurMaterial=xf(s,t,e)}return r}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,i,r){const o=new cn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ho),u.toneMapping=0,u.autoClear=!1;const d=new Es({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new $t(new ni,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(ho),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Jr(r,S*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,js)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fo[(r-s-1)%fo.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*di-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):di;m>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const p=[];let S=0;for(let A=0;A<di;++A){const R=A/v,y=Math.exp(-R*R/2);p.push(y),A===0?S+=y:A<m&&(S+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const _=this._sizeLods[r],D=3*_*(r>M-zi?r-M+zi:0),w=4*(this._cubeSize-_);Jr(e,D,w,3*_,2*_),l.setRenderTarget(e),l.render(h,js)}}function vf(n){const t=[],e=[],i=[];let r=n;const s=n-zi+1+uo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-zi?l=uo[a-n+zi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),M=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,R=w>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];S.set(y,v*g*w),M.set(f,m*g*w);const x=[w,w,w,w,w,w];_.set(x,p*g*w)}const D=new Ee;D.setAttribute("position",new Ie(S,v)),D.setAttribute("uv",new Ie(M,m)),D.setAttribute("faceIndex",new Ie(_,p)),t.push(D),r>zi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function po(n,t,e){const i=new kn(n,t,e);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function xf(n,t,e){const i=new Float32Array(di),r=new L(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Da(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mo(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function Mf(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new xa(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new xa(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function yf(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sf(n,t,e,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let M=0,_=S.length;M<_;M+=3){const D=S[M+0],w=S[M+1],A=S[M+2];f.push(D,w,w,A,A,D)}}else if(g!==void 0){const S=g.array;v=g.version;for(let M=0,_=S.length/3-1;M<_;M+=3){const D=M+0,w=M+1,A=M+2;f.push(D,w,w,A,A,D)}}else return;const m=new(vl(f)?wl:El)(f,1);m.version=v;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function bf(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*v[S];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ef(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function wf(n,t,e){const i=new WeakMap,r=new he;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let _=o.attributes.position.count*M,D=1;_>t.maxTextureSize&&(D=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const w=new Float32Array(_*D*4*h),A=new Ml(w,_,D,h);A.type=1015,A.needsUpdate=!0;const R=M*4;for(let x=0;x<h;x++){const C=m[x],z=p[x],O=S[x],V=_*D*4*x;for(let Z=0;Z<C.count;Z++){const W=Z*R;d===!0&&(r.fromBufferAttribute(C,Z),w[V+W+0]=r.x,w[V+W+1]=r.y,w[V+W+2]=r.z,w[V+W+3]=0),g===!0&&(r.fromBufferAttribute(z,Z),w[V+W+4]=r.x,w[V+W+5]=r.y,w[V+W+6]=r.z,w[V+W+7]=0),v===!0&&(r.fromBufferAttribute(O,Z),w[V+W+8]=r.x,w[V+W+9]=r.y,w[V+W+10]=r.z,w[V+W+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new ft(_,D)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Tf(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class La extends Ze{constructor(t,e,i,r,s,a,o,l,c,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===1026&&(i=1014),i===void 0&&u===1027&&(i=1020),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pl=new Ze,_o=new La(1,1),Dl=new Ml,Ll=new oc,Il=new Al,vo=[],xo=[],Mo=new Float32Array(16),yo=new Float32Array(9),So=new Float32Array(4);function ji(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=vo[r];if(s===void 0&&(s=new Float32Array(r),vo[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ws(n,t){let e=xo[t];e===void 0&&(e=new Int32Array(t),xo[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Af(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Rf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function Cf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function Pf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function Df(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;So.set(i),n.uniformMatrix2fv(this.addr,!1,So),ze(e,i)}}function Lf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;yo.set(i),n.uniformMatrix3fv(this.addr,!1,yo),ze(e,i)}}function If(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Mo.set(i),n.uniformMatrix4fv(this.addr,!1,Mo),ze(e,i)}}function Uf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Nf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function Ff(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function Of(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function Bf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function Gf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function Vf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function Hf(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(_o.compareFunction=515,s=_o):s=Pl,e.setTexture2D(t||s,r)}function kf(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Ll,r)}function Wf(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Il,r)}function Xf(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Dl,r)}function qf(n){switch(n){case 5126:return Af;case 35664:return Rf;case 35665:return Cf;case 35666:return Pf;case 35674:return Df;case 35675:return Lf;case 35676:return If;case 5124:case 35670:return Uf;case 35667:case 35671:return Nf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return Bf;case 36294:return zf;case 36295:return Gf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}function Yf(n,t){n.uniform1fv(this.addr,t)}function Zf(n,t){const e=ji(t,this.size,2);n.uniform2fv(this.addr,e)}function Kf(n,t){const e=ji(t,this.size,3);n.uniform3fv(this.addr,e)}function $f(n,t){const e=ji(t,this.size,4);n.uniform4fv(this.addr,e)}function Jf(n,t){const e=ji(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jf(n,t){const e=ji(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Qf(n,t){const e=ji(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function td(n,t){n.uniform1iv(this.addr,t)}function ed(n,t){n.uniform2iv(this.addr,t)}function nd(n,t){n.uniform3iv(this.addr,t)}function id(n,t){n.uniform4iv(this.addr,t)}function rd(n,t){n.uniform1uiv(this.addr,t)}function sd(n,t){n.uniform2uiv(this.addr,t)}function ad(n,t){n.uniform3uiv(this.addr,t)}function od(n,t){n.uniform4uiv(this.addr,t)}function ld(n,t,e){const i=this.cache,r=t.length,s=ws(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Pl,s[a])}function cd(n,t,e){const i=this.cache,r=t.length,s=ws(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ll,s[a])}function ud(n,t,e){const i=this.cache,r=t.length,s=ws(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Il,s[a])}function hd(n,t,e){const i=this.cache,r=t.length,s=ws(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Dl,s[a])}function fd(n){switch(n){case 5126:return Yf;case 35664:return Zf;case 35665:return Kf;case 35666:return $f;case 35674:return Jf;case 35675:return jf;case 35676:return Qf;case 5124:case 35670:return td;case 35667:case 35671:return ed;case 35668:case 35672:return nd;case 35669:case 35673:return id;case 5125:return rd;case 36294:return sd;case 36295:return ad;case 36296:return od;case 35678:case 36198:case 36298:case 36306:case 35682:return ld;case 35679:case 36299:case 36307:return cd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return hd}}class dd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qf(e.type)}}class pd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fd(e.type)}}class md{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function bo(n,t){n.seq.push(t),n.map[t.id]=t}function gd(n,t,e){const i=n.name,r=i.length;for(ia.lastIndex=0;;){const s=ia.exec(i),a=ia.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bo(e,c===void 0?new dd(o,n,t):new pd(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new md(o),bo(e,h)),e=h}}}class vs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);gd(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Eo(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const _d=37297;let vd=0;function xd(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const wo=new ie;function Md(n){ue._getMatrix(wo,ue.workingColorSpace,n);const t=`mat3( ${wo.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case bs:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function To(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+xd(n.getShaderSource(t),a)}else return r}function yd(n,t){const e=Md(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sd(n,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new L;function bd(){ue.getLuminanceCoefficients(jr);const n=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ed(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function wd(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Td(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function xr(n){return n!==""}function Ao(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ro(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ad=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(n){return n.replace(Ad,Cd)}const Rd=new Map;function Cd(n,t){let e=ae[t];if(e===void 0){const i=Rd.get(t);if(i!==void 0)e=ae[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const Pd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(n){return n.replace(Pd,Dd)}function Dd(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Po(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ld(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Id(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ud(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Nd(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Fd(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Od(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ld(e),c=Id(e),u=Ud(e),h=Nd(e),f=Fd(e),d=Ed(e),g=wd(s),v=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?ae.tonemapping_pars_fragment:"",e.toneMapping!==0?Sd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,yd("linearToOutputTexel",e.outputColorSpace),bd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=Ma(a),a=Ao(a,e),a=Ro(a,e),o=Ma(o),o=Ao(o,e),o=Ro(o,e),a=Co(a),o=Co(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+a,_=S+p+o,D=Eo(r,r.VERTEX_SHADER,M),w=Eo(r,r.FRAGMENT_SHADER,_);r.attachShader(v,D),r.attachShader(v,w),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(C){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(D).trim(),V=r.getShaderInfoLog(w).trim();let Z=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,w);else{const ct=To(r,D,"vertex"),q=To(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ct+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||V==="")&&(W=!1);W&&(C.diagnostics={runnable:Z,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(D),r.deleteShader(w),R=new vs(r,v),y=Td(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,_d)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vd++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=w,this}let Bd=0;class zd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Gd(t),e.set(t,i)),i}}class Gd{constructor(t){this.id=Bd++,this.code=t,this.usedTimes=0}}function Vd(n,t,e,i,r,s,a){const o=new Sl,l=new zd,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,C,z,O){const V=z.fog,Z=O.geometry,W=y.isMeshStandardMaterial?z.environment:null,ct=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),q=ct&&ct.mapping===306?ct.image.height:null,Mt=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Dt=wt!==void 0?wt.length:0;let Kt=0;Z.morphAttributes.position!==void 0&&(Kt=1),Z.morphAttributes.normal!==void 0&&(Kt=2),Z.morphAttributes.color!==void 0&&(Kt=3);let ce,K,mt,Tt;if(Mt){const le=wn[Mt];ce=le.vertexShader,K=le.fragmentShader}else ce=y.vertexShader,K=y.fragmentShader,l.update(y),mt=l.getVertexShaderID(y),Tt=l.getFragmentShaderID(y);const _t=n.getRenderTarget(),Vt=n.state.buffers.depth.getReversed(),Jt=O.isInstancedMesh===!0,Yt=O.isBatchedMesh===!0,te=!!y.map,st=!!y.matcap,dt=!!ct,P=!!y.aoMap,Ot=!!y.lightMap,ut=!!y.bumpMap,nt=!!y.normalMap,vt=!!y.displacementMap,kt=!!y.emissiveMap,Pt=!!y.metalnessMap,T=!!y.roughnessMap,b=y.anisotropy>0,G=y.clearcoat>0,j=y.dispersion>0,at=y.iridescence>0,Q=y.sheen>0,At=y.transmission>0,St=b&&!!y.anisotropyMap,pt=G&&!!y.clearcoatMap,Qt=G&&!!y.clearcoatNormalMap,tt=G&&!!y.clearcoatRoughnessMap,It=at&&!!y.iridescenceMap,Xt=at&&!!y.iridescenceThicknessMap,xt=Q&&!!y.sheenColorMap,Ft=Q&&!!y.sheenRoughnessMap,oe=!!y.specularMap,ne=!!y.specularColorMap,me=!!y.specularIntensityMap,N=At&&!!y.transmissionMap,bt=At&&!!y.thicknessMap,Y=!!y.gradientMap,it=!!y.alphaMap,Rt=y.alphaTest>0,gt=!!y.alphaHash,ee=!!y.extensions;let _e=0;y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(_e=n.toneMapping);const xe={shaderID:Mt,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:K,defines:y.defines,customVertexShaderID:mt,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&O._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&O.instanceColor!==null,instancingMorph:Jt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:gi,alphaToCoverage:!!y.alphaToCoverage,map:te,matcap:st,envMap:dt,envMapMode:dt&&ct.mapping,envMapCubeUVHeight:q,aoMap:P,lightMap:Ot,bumpMap:ut,normalMap:nt,displacementMap:f&&vt,emissiveMap:kt,normalMapObjectSpace:nt&&y.normalMapType===1,normalMapTangentSpace:nt&&y.normalMapType===0,metalnessMap:Pt,roughnessMap:T,anisotropy:b,anisotropyMap:St,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:at,iridescenceMap:It,iridescenceThicknessMap:Xt,sheen:Q,sheenColorMap:xt,sheenRoughnessMap:Ft,specularMap:oe,specularColorMap:ne,specularIntensityMap:me,transmission:At,transmissionMap:N,thicknessMap:bt,gradientMap:Y,opaque:y.transparent===!1&&y.blending===1&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:Rt,alphaHash:gt,combine:y.combine,mapUv:te&&v(y.map.channel),aoMapUv:P&&v(y.aoMap.channel),lightMapUv:Ot&&v(y.lightMap.channel),bumpMapUv:ut&&v(y.bumpMap.channel),normalMapUv:nt&&v(y.normalMap.channel),displacementMapUv:vt&&v(y.displacementMap.channel),emissiveMapUv:kt&&v(y.emissiveMap.channel),metalnessMapUv:Pt&&v(y.metalnessMap.channel),roughnessMapUv:T&&v(y.roughnessMap.channel),anisotropyMapUv:St&&v(y.anisotropyMap.channel),clearcoatMapUv:pt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(y.sheenRoughnessMap.channel),specularMapUv:oe&&v(y.specularMap.channel),specularColorMapUv:ne&&v(y.specularColorMap.channel),specularIntensityMapUv:me&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:bt&&v(y.thicknessMap.channel),alphaMapUv:it&&v(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(nt||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(te||it),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Vt,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Kt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:te&&y.map.isVideoTexture===!0&&ue.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&ue.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ee&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&y.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(S(x,y),M(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const x=g[y.type];let C;if(x){const z=wn[x];C=bc.clone(z.uniforms)}else C=y.uniforms;return C}function D(y,x){let C;for(let z=0,O=u.length;z<O;z++){const V=u[z];if(V.cacheKey===x){C=V,++C.usedTimes;break}}return C===void 0&&(C=new Od(n,x,y,s),u.push(C)),C}function w(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:R}}function Hd(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function kd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Do(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lo(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,f,d,g,v,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||kd),i.length>1&&i.sort(f||Do),r.length>1&&r.sort(f||Do)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Wd(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Lo,n.set(i,[a])):r>=s.length?(a=new Lo,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Xd(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Lt};break;case"SpotLight":e={position:new L,direction:new L,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function qd(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Yd=0;function Zd(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Kd(n){const t=new Xd,e=qd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new se,a=new se;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,M=0,_=0,D=0,w=0,A=0;c.sort(Zd);for(let y=0,x=c.length;y<x;y++){const C=c[y],z=C.color,O=C.intensity,V=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*O,h+=z.g*O,f+=z.b*O;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],O);A++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ct=C.shadow,q=e.get(C);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=C.shadow.matrix,S++}i.directional[d]=W,d++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(z).multiplyScalar(O),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[v]=W;const ct=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,ct.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[v]=ct.matrix,C.castShadow){const q=e.get(C);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=Z,_++}v++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(z).multiplyScalar(O),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const ct=C.shadow,q=e.get(C);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,q.shadowCameraNear=ct.camera.near,q.shadowCameraFar=ct.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=W,g++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(O),W.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==M||R.numSpotShadows!==_||R.numSpotMaps!==D||R.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+D-w,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=M,R.numSpotShadows=_,R.numSpotMaps=D,R.numLightProbes=A,i.version=Yd++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(M.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Io(n){const t=new Kd(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $d(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Io(n),t.set(r,[o])):s>=a.length?(o=new Io(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Ts extends Ji{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jd extends Ji{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qd=`uniform sampler2D shadow_pass;
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
}`;function t0(n,t,e){let i=new Pa;const r=new ft,s=new ft,a=new he,o=new Ts({depthPacking:3201}),l=new Jd,c={},u=e.maxTextureSize,h={0:1,1:0,2:2},f=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:jd,fragmentShader:Qd}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==3&&this.type===3,V=p===3&&this.type!==3;for(let Z=0,W=w.length;Z<W;Z++){const ct=w[Z],q=ct.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Mt=q.getFrameExtents();if(r.multiply(Mt),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Mt.x),r.x=s.x*Mt.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Mt.y),r.y=s.y*Mt.y,q.mapSize.y=s.y)),q.map===null||O===!0||V===!0){const Dt=this.type!==3?{minFilter:1003,magFilter:1003}:{};q.map!==null&&q.map.dispose(),q.map=new kn(r.x,r.y,Dt),q.map.texture.name=ct.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const wt=q.getViewportCount();for(let Dt=0;Dt<wt;Dt++){const Kt=q.getViewport(Dt);a.set(s.x*Kt.x,s.y*Kt.y,s.x*Kt.z,s.y*Kt.w),z.viewport(a),q.updateMatrices(ct,Dt),i=q.getFrustum(),_(A,R,q.camera,ct,this.type)}q.isPointLightShadow!==!0&&this.type===3&&S(q,R),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,C)};function S(w,A){const R=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,R,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,R,d,v,null)}function M(w,A,R,y){let x=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=R.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,O=A.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let Z=V[O];Z===void 0&&(Z=x.clone(),V[O]=Z,A.addEventListener("dispose",D)),x=Z}if(x.visible=A.visible,x.wireframe=A.wireframe,y===3?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=R}return x}function _(w,A,R,y,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===3)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const O=t.update(w),V=w.material;if(Array.isArray(V)){const Z=O.groups;for(let W=0,ct=Z.length;W<ct;W++){const q=Z[W],Mt=V[q.materialIndex];if(Mt&&Mt.visible){const wt=M(w,Mt,y,x);w.onBeforeShadow(n,w,A,R,O,wt,q),n.renderBufferDirect(R,null,O,wt,w,q),w.onAfterShadow(n,w,A,R,O,wt,q)}}}else if(V.visible){const Z=M(w,V,y,x);w.onBeforeShadow(n,w,A,R,O,Z,null),n.renderBufferDirect(R,null,O,Z,w,null),w.onAfterShadow(n,w,A,R,O,Z,null)}}const z=w.children;for(let O=0,V=z.length;O<V;O++)_(z[O],A,R,y,x)}function D(w){w.target.removeEventListener("dispose",D);for(const R in c){const y=c[R],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const e0={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function n0(n,t){function e(){let N=!1;const bt=new he;let Y=null;const it=new he(0,0,0,0);return{setMask:function(Rt){Y!==Rt&&!N&&(n.colorMask(Rt,Rt,Rt,Rt),Y=Rt)},setLocked:function(Rt){N=Rt},setClear:function(Rt,gt,ee,_e,xe){xe===!0&&(Rt*=_e,gt*=_e,ee*=_e),bt.set(Rt,gt,ee,_e),it.equals(bt)===!1&&(n.clearColor(Rt,gt,ee,_e),it.copy(bt))},reset:function(){N=!1,Y=null,it.set(-1,0,0,0)}}}function i(){let N=!1,bt=!1,Y=null,it=null,Rt=null;return{setReversed:function(gt){if(bt!==gt){const ee=t.get("EXT_clip_control");bt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const _e=Rt;Rt=null,this.setClear(_e)}bt=gt},getReversed:function(){return bt},setTest:function(gt){gt?_t(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!N&&(n.depthMask(gt),Y=gt)},setFunc:function(gt){if(bt&&(gt=e0[gt]),it!==gt){switch(gt){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=gt}},setLocked:function(gt){N=gt},setClear:function(gt){Rt!==gt&&(bt&&(gt=1-gt),n.clearDepth(gt),Rt=gt)},reset:function(){N=!1,Y=null,it=null,Rt=null,bt=!1}}}function r(){let N=!1,bt=null,Y=null,it=null,Rt=null,gt=null,ee=null,_e=null,xe=null;return{setTest:function(le){N||(le?_t(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(le){bt!==le&&!N&&(n.stencilMask(le),bt=le)},setFunc:function(le,tn,rn){(Y!==le||it!==tn||Rt!==rn)&&(n.stencilFunc(le,tn,rn),Y=le,it=tn,Rt=rn)},setOp:function(le,tn,rn){(gt!==le||ee!==tn||_e!==rn)&&(n.stencilOp(le,tn,rn),gt=le,ee=tn,_e=rn)},setLocked:function(le){N=le},setClear:function(le){xe!==le&&(n.clearStencil(le),xe=le)},reset:function(){N=!1,bt=null,Y=null,it=null,Rt=null,gt=null,ee=null,_e=null,xe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,M=null,_=null,D=null,w=null,A=new Lt(0,0,0),R=0,y=!1,x=null,C=null,z=null,O=null,V=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ct=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ct>=1):q.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ct>=2);let Mt=null,wt={};const Dt=n.getParameter(n.SCISSOR_BOX),Kt=n.getParameter(n.VIEWPORT),ce=new he().fromArray(Dt),K=new he().fromArray(Kt);function mt(N,bt,Y,it){const Rt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<Y;ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(bt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return gt}const Tt={};Tt[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),a.setFunc(3),ut(!1),nt(1),_t(n.CULL_FACE),P(0);function _t(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Vt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Jt(N,bt){return h[N]!==bt?(n.bindFramebuffer(N,bt),h[N]=bt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=bt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function Yt(N,bt){let Y=d,it=!1;if(N){Y=f.get(bt),Y===void 0&&(Y=[],f.set(bt,Y));const Rt=N.textures;if(Y.length!==Rt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,ee=Rt.length;gt<ee;gt++)Y[gt]=n.COLOR_ATTACHMENT0+gt;Y.length=Rt.length,it=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,it=!0);it&&n.drawBuffers(Y)}function te(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const st={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};st[103]=n.MIN,st[104]=n.MAX;const dt={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function P(N,bt,Y,it,Rt,gt,ee,_e,xe,le){if(N===0){v===!0&&(Vt(n.BLEND),v=!1);return}if(v===!1&&(_t(n.BLEND),v=!0),N!==5){if(N!==m||le!==y){if((p!==100||_!==100)&&(n.blendEquation(n.FUNC_ADD),p=100,_=100),le)switch(N){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,M=null,D=null,w=null,A.set(0,0,0),R=0,m=N,y=le}return}Rt=Rt||bt,gt=gt||Y,ee=ee||it,(bt!==p||Rt!==_)&&(n.blendEquationSeparate(st[bt],st[Rt]),p=bt,_=Rt),(Y!==S||it!==M||gt!==D||ee!==w)&&(n.blendFuncSeparate(dt[Y],dt[it],dt[gt],dt[ee]),S=Y,M=it,D=gt,w=ee),(_e.equals(A)===!1||xe!==R)&&(n.blendColor(_e.r,_e.g,_e.b,xe),A.copy(_e),R=xe),m=N,y=!1}function Ot(N,bt){N.side===2?Vt(n.CULL_FACE):_t(n.CULL_FACE);let Y=N.side===1;bt&&(Y=!Y),ut(Y),N.blending===1&&N.transparent===!1?P(0):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const it=N.stencilWrite;o.setTest(it),it&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){x!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),x=N)}function nt(N){N!==0?(_t(n.CULL_FACE),N!==C&&(N===1?n.cullFace(n.BACK):N===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),C=N}function vt(N){N!==z&&(W&&n.lineWidth(N),z=N)}function kt(N,bt,Y){N?(_t(n.POLYGON_OFFSET_FILL),(O!==bt||V!==Y)&&(n.polygonOffset(bt,Y),O=bt,V=Y)):Vt(n.POLYGON_OFFSET_FILL)}function Pt(N){N?_t(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function T(N){N===void 0&&(N=n.TEXTURE0+Z-1),Mt!==N&&(n.activeTexture(N),Mt=N)}function b(N,bt,Y){Y===void 0&&(Mt===null?Y=n.TEXTURE0+Z-1:Y=Mt);let it=wt[Y];it===void 0&&(it={type:void 0,texture:void 0},wt[Y]=it),(it.type!==N||it.texture!==bt)&&(Mt!==Y&&(n.activeTexture(Y),Mt=Y),n.bindTexture(N,bt||Tt[N]),it.type=N,it.texture=bt)}function G(){const N=wt[Mt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(N){ce.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function Ft(N){K.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function oe(N,bt){let Y=c.get(bt);Y===void 0&&(Y=new WeakMap,c.set(bt,Y));let it=Y.get(N);it===void 0&&(it=n.getUniformBlockIndex(bt,N.name),Y.set(N,it))}function ne(N,bt){const it=c.get(bt).get(N);l.get(bt)!==it&&(n.uniformBlockBinding(bt,it,N.__bindingPointIndex),l.set(bt,it))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Mt=null,wt={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,M=null,_=null,D=null,w=null,A=new Lt(0,0,0),R=0,y=!1,x=null,C=null,z=null,O=null,V=null,ce.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_t,disable:Vt,bindFramebuffer:Jt,drawBuffers:Yt,useProgram:te,setBlending:P,setMaterial:Ot,setFlipSided:ut,setCullFace:nt,setLineWidth:vt,setPolygonOffset:kt,setScissorTest:Pt,activeTexture:T,bindTexture:b,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:at,texImage2D:It,texImage3D:Xt,updateUBOMapping:oe,uniformBlockBinding:ne,texStorage2D:Qt,texStorage3D:tt,texSubImage2D:Q,texSubImage3D:At,compressedTexSubImage2D:St,compressedTexSubImage3D:pt,scissor:xt,viewport:Ft,reset:me}}function Uo(n,t,e,i){const r=i0(i);switch(e){case 1021:return n*t;case 1024:return n*t;case 1025:return n*t*2;case 1028:return n*t/r.components*r.byteLength;case 1029:return n*t/r.components*r.byteLength;case 1030:return n*t*2/r.components*r.byteLength;case 1031:return n*t*2/r.components*r.byteLength;case 1022:return n*t*3/r.components*r.byteLength;case 1023:return n*t*4/r.components*r.byteLength;case 1033:return n*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i0(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function r0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return d?new OffscreenCanvas(T,b):xs("canvas")}function v(T,b,G){let j=1;const at=Pt(T);if((at.width>G||at.height>G)&&(j=G/Math.max(at.width,at.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(j*at.width),At=Math.floor(j*at.height);h===void 0&&(h=g(Q,At));const St=b?g(Q,At):h;return St.width=Q,St.height=At,St.getContext("2d").drawImage(T,0,0,Q,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Q+"x"+At+")."),St}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,b,G,j,at=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=b;if(b===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),b===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),b===n.RGBA){const At=at?bs:ue.getTransfer(j);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=At===ge?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(T,b){let G;return T?b===null||b===1014||b===1020?G=n.DEPTH24_STENCIL8:b===1015?G=n.DEPTH32F_STENCIL8:b===1012&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===1014||b===1020?G=n.DEPTH_COMPONENT24:b===1015?G=n.DEPTH_COMPONENT32F:b===1012&&(G=n.DEPTH_COMPONENT16),G}function D(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function w(T){const b=T.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&u.delete(b)}function A(T){const b=T.target;b.removeEventListener("dispose",A),x(b)}function R(T){const b=i.get(T);if(b.__webglInit===void 0)return;const G=T.source,j=f.get(G);if(j){const at=j[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&y(T),Object.keys(j).length===0&&f.delete(G)}i.remove(T)}function y(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const G=T.source,j=f.get(G);delete j[b.__cacheKey],a.memory.textures--}function x(T){const b=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let at=0;at<b.__webglFramebuffer[j].length;at++)n.deleteFramebuffer(b.__webglFramebuffer[j][at]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=T.textures;for(let j=0,at=G.length;j<at;j++){const Q=i.get(G[j]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(G[j])}i.remove(T)}let C=0;function z(){C=0}function O(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function V(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function Z(T,b){const G=i.get(T);if(T.isVideoTexture&&vt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,T,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function W(T,b){const G=i.get(T);if(T.version>0&&G.__version!==T.version){K(G,T,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function ct(T,b){const G=i.get(T);if(T.version>0&&G.__version!==T.version){K(G,T,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function q(T,b){const G=i.get(T);if(T.version>0&&G.__version!==T.version){mt(G,T,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const Mt={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},wt={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},Dt={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Kt(T,b){if(b.type===1015&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===1006||b.magFilter===1007||b.magFilter===1005||b.magFilter===1008||b.minFilter===1006||b.minFilter===1007||b.minFilter===1005||b.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Mt[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Mt[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Mt[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,wt[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===1003||b.minFilter!==1005&&b.minFilter!==1008||b.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ce(T,b){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",w));const j=b.source;let at=f.get(j);at===void 0&&(at={},f.set(j,at));const Q=V(b);if(Q!==T.__cacheKey){at[Q]===void 0&&(at[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),at[Q].usedTimes++;const At=at[T.__cacheKey];At!==void 0&&(at[T.__cacheKey].usedTimes--,At.usedTimes===0&&y(b)),T.__cacheKey=Q,T.__webglTexture=at[Q].texture}return G}function K(T,b,G){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const at=ce(T,b),Q=b.source;e.bindTexture(j,T.__webglTexture,n.TEXTURE0+G);const At=i.get(Q);if(Q.version!==At.__version||at===!0){e.activeTexture(n.TEXTURE0+G);const St=ue.getPrimaries(ue.workingColorSpace),pt=b.colorSpace===Bn?null:ue.getPrimaries(b.colorSpace),Qt=b.colorSpace===Bn||St===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let tt=v(b.image,!1,r.maxTextureSize);tt=kt(b,tt);const It=s.convert(b.format,b.colorSpace),Xt=s.convert(b.type);let xt=M(b.internalFormat,It,Xt,b.colorSpace,b.isVideoTexture);Kt(j,b);let Ft;const oe=b.mipmaps,ne=b.isVideoTexture!==!0,me=At.__version===void 0||at===!0,N=Q.dataReady,bt=D(b,tt);if(b.isDepthTexture)xt=_(b.format===1027,b.type),me&&(ne?e.texStorage2D(n.TEXTURE_2D,1,xt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,xt,tt.width,tt.height,0,It,Xt,null));else if(b.isDataTexture)if(oe.length>0){ne&&me&&e.texStorage2D(n.TEXTURE_2D,bt,xt,oe[0].width,oe[0].height);for(let Y=0,it=oe.length;Y<it;Y++)Ft=oe[Y],ne?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ft.width,Ft.height,It,Xt,Ft.data):e.texImage2D(n.TEXTURE_2D,Y,xt,Ft.width,Ft.height,0,It,Xt,Ft.data);b.generateMipmaps=!1}else ne?(me&&e.texStorage2D(n.TEXTURE_2D,bt,xt,tt.width,tt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,It,Xt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,xt,tt.width,tt.height,0,It,Xt,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,xt,oe[0].width,oe[0].height,tt.depth);for(let Y=0,it=oe.length;Y<it;Y++)if(Ft=oe[Y],b.format!==1023)if(It!==null)if(ne){if(N)if(b.layerUpdates.size>0){const Rt=Uo(Ft.width,Ft.height,b.format,b.type);for(const gt of b.layerUpdates){const ee=Ft.data.subarray(gt*Rt/Ft.data.BYTES_PER_ELEMENT,(gt+1)*Rt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,gt,Ft.width,Ft.height,1,It,ee)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ft.width,Ft.height,tt.depth,It,Ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,xt,Ft.width,Ft.height,tt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ft.width,Ft.height,tt.depth,It,Xt,Ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,xt,Ft.width,Ft.height,tt.depth,0,It,Xt,Ft.data)}else{ne&&me&&e.texStorage2D(n.TEXTURE_2D,bt,xt,oe[0].width,oe[0].height);for(let Y=0,it=oe.length;Y<it;Y++)Ft=oe[Y],b.format!==1023?It!==null?ne?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Ft.width,Ft.height,It,Ft.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,xt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ft.width,Ft.height,It,Xt,Ft.data):e.texImage2D(n.TEXTURE_2D,Y,xt,Ft.width,Ft.height,0,It,Xt,Ft.data)}else if(b.isDataArrayTexture)if(ne){if(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,xt,tt.width,tt.height,tt.depth),N)if(b.layerUpdates.size>0){const Y=Uo(tt.width,tt.height,b.format,b.type);for(const it of b.layerUpdates){const Rt=tt.data.subarray(it*Y/tt.data.BYTES_PER_ELEMENT,(it+1)*Y/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,tt.width,tt.height,1,It,Xt,Rt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,It,Xt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,tt.width,tt.height,tt.depth,0,It,Xt,tt.data);else if(b.isData3DTexture)ne?(me&&e.texStorage3D(n.TEXTURE_3D,bt,xt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,It,Xt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,xt,tt.width,tt.height,tt.depth,0,It,Xt,tt.data);else if(b.isFramebufferTexture){if(me)if(ne)e.texStorage2D(n.TEXTURE_2D,bt,xt,tt.width,tt.height);else{let Y=tt.width,it=tt.height;for(let Rt=0;Rt<bt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,xt,Y,it,0,It,Xt,null),Y>>=1,it>>=1}}else if(oe.length>0){if(ne&&me){const Y=Pt(oe[0]);e.texStorage2D(n.TEXTURE_2D,bt,xt,Y.width,Y.height)}for(let Y=0,it=oe.length;Y<it;Y++)Ft=oe[Y],ne?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,It,Xt,Ft):e.texImage2D(n.TEXTURE_2D,Y,xt,It,Xt,Ft);b.generateMipmaps=!1}else if(ne){if(me){const Y=Pt(tt);e.texStorage2D(n.TEXTURE_2D,bt,xt,Y.width,Y.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Xt,tt)}else e.texImage2D(n.TEXTURE_2D,0,xt,It,Xt,tt);m(b)&&p(j),At.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function mt(T,b,G){if(b.image.length!==6)return;const j=ce(T,b),at=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);const Q=i.get(at);if(at.version!==Q.__version||j===!0){e.activeTexture(n.TEXTURE0+G);const At=ue.getPrimaries(ue.workingColorSpace),St=b.colorSpace===Bn?null:ue.getPrimaries(b.colorSpace),pt=b.colorSpace===Bn||At===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let it=0;it<6;it++)!Qt&&!tt?It[it]=v(b.image[it],!0,r.maxCubemapSize):It[it]=tt?b.image[it].image:b.image[it],It[it]=kt(b,It[it]);const Xt=It[0],xt=s.convert(b.format,b.colorSpace),Ft=s.convert(b.type),oe=M(b.internalFormat,xt,Ft,b.colorSpace),ne=b.isVideoTexture!==!0,me=Q.__version===void 0||j===!0,N=at.dataReady;let bt=D(b,Xt);Kt(n.TEXTURE_CUBE_MAP,b);let Y;if(Qt){ne&&me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,oe,Xt.width,Xt.height);for(let it=0;it<6;it++){Y=It[it].mipmaps;for(let Rt=0;Rt<Y.length;Rt++){const gt=Y[Rt];b.format!==1023?xt!==null?ne?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,oe,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,gt.width,gt.height,xt,Ft,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,oe,gt.width,gt.height,0,xt,Ft,gt.data)}}}else{if(Y=b.mipmaps,ne&&me){Y.length>0&&bt++;const it=Pt(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,oe,it.width,it.height)}for(let it=0;it<6;it++)if(tt){ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It[it].width,It[it].height,xt,Ft,It[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,oe,It[it].width,It[it].height,0,xt,Ft,It[it].data);for(let Rt=0;Rt<Y.length;Rt++){const ee=Y[Rt].image[it].image;ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,ee.width,ee.height,xt,Ft,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,oe,ee.width,ee.height,0,xt,Ft,ee.data)}}else{ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,xt,Ft,It[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,oe,xt,Ft,It[it]);for(let Rt=0;Rt<Y.length;Rt++){const gt=Y[Rt];ne?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,xt,Ft,gt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,oe,xt,Ft,gt.image[it])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),Q.__version=at.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Tt(T,b,G,j,at,Q){const At=s.convert(G.format,G.colorSpace),St=s.convert(G.type),pt=M(G.internalFormat,At,St,G.colorSpace),Qt=i.get(b),tt=i.get(G);if(tt.__renderTarget=b,!Qt.__hasExternalTextures){const It=Math.max(1,b.width>>Q),Xt=Math.max(1,b.height>>Q);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,Q,pt,It,Xt,b.depth,0,At,St,null):e.texImage2D(at,Q,pt,It,Xt,0,At,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),nt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,at,tt.__webglTexture,0,ut(b)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,at,tt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(T,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer){const j=b.depthTexture,at=j&&j.isDepthTexture?j.type:null,Q=_(b.stencilBuffer,at),At=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=ut(b);nt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Q,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,T)}else{const j=b.textures;for(let at=0;at<j.length;at++){const Q=j[at],At=s.convert(Q.format,Q.colorSpace),St=s.convert(Q.type),pt=M(Q.internalFormat,At,St,Q.colorSpace),Qt=ut(b);G&&nt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,pt,b.width,b.height):nt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const at=j.__webglTexture,Q=ut(b);if(b.depthTexture.format===1026)nt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(b.depthTexture.format===1027)nt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const b=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",at)};j.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=j}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Vt(b.__webglFramebuffer,T)}else if(G){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),_t(b.__webglDepthbuffer[j],T,!1);else{const at=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),_t(b.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(T,b,G){const j=i.get(T);b!==void 0&&Tt(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Jt(T)}function te(T){const b=T.texture,G=i.get(T),j=i.get(b);T.addEventListener("dispose",A);const at=T.textures,Q=T.isWebGLCubeRenderTarget===!0,At=at.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[St]=[];for(let pt=0;pt<b.mipmaps.length;pt++)G.__webglFramebuffer[St][pt]=n.createFramebuffer()}else G.__webglFramebuffer[St]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let St=0;St<b.mipmaps.length;St++)G.__webglFramebuffer[St]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(At)for(let St=0,pt=at.length;St<pt;St++){const Qt=i.get(at[St]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&nt(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<at.length;St++){const pt=at[St];G.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[St]);const Qt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),It=M(pt.internalFormat,Qt,tt,pt.colorSpace,T.isXRRenderTarget===!0),Xt=ut(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,It,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,G.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,b);for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Tt(G.__webglFramebuffer[St][pt],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,pt);else Tt(G.__webglFramebuffer[St],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let St=0,pt=at.length;St<pt;St++){const Qt=at[St],tt=i.get(Qt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Kt(n.TEXTURE_2D,Qt),Tt(G.__webglFramebuffer,T,Qt,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),m(Qt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(St=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,j.__webglTexture),Kt(St,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Tt(G.__webglFramebuffer[pt],T,b,n.COLOR_ATTACHMENT0,St,pt);else Tt(G.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,St,0);m(b)&&p(St),e.unbindTexture()}T.depthBuffer&&Jt(T)}function st(T){const b=T.textures;for(let G=0,j=b.length;G<j;G++){const at=b[G];if(m(at)){const Q=S(T),At=i.get(at).__webglTexture;e.bindTexture(Q,At),p(Q),e.unbindTexture()}}}const dt=[],P=[];function Ot(T){if(T.samples>0){if(nt(T)===!1){const b=T.textures,G=T.width,j=T.height;let at=n.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(T),St=b.length>1;if(St)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[pt]);const Qt=i.get(b[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,at,n.NEAREST),l===!0&&(dt.length=0,P.length=0,dt.push(n.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(Q),P.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,At.__webglColorRenderbuffer[pt]);const Qt=i.get(b[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const b=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ut(T){return Math.min(r.maxSamples,T.samples)}function nt(T){const b=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function vt(T){const b=a.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function kt(T,b){const G=T.colorSpace,j=T.format,at=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==gi&&G!==Bn&&(ue.getTransfer(G)===ge?(j!==1023||at!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Pt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=ct,this.setTextureCube=q,this.rebindTextures=Yt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=nt}function s0(n,t){function e(i,r=Bn){let s;const a=ue.getTransfer(r);if(i===1009)return n.UNSIGNED_BYTE;if(i===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return n.BYTE;if(i===1011)return n.SHORT;if(i===1012)return n.UNSIGNED_SHORT;if(i===1013)return n.INT;if(i===1014)return n.UNSIGNED_INT;if(i===1015)return n.FLOAT;if(i===1016)return n.HALF_FLOAT;if(i===1021)return n.ALPHA;if(i===1022)return n.RGB;if(i===1023)return n.RGBA;if(i===1024)return n.LUMINANCE;if(i===1025)return n.LUMINANCE_ALPHA;if(i===1026)return n.DEPTH_COMPONENT;if(i===1027)return n.DEPTH_STENCIL;if(i===1028)return n.RED;if(i===1029)return n.RED_INTEGER;if(i===1030)return n.RG;if(i===1031)return n.RG_INTEGER;if(i===1033)return n.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class a0 extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o0={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const l0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c0=`
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

}`;class u0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ze,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Oe({vertexShader:l0,fragmentShader:c0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends Zi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new u0,m=e.getContextAttributes();let p=null,S=null;const M=[],_=[],D=new ft;let w=null;const A=new cn;A.viewport=new he;const R=new cn;R.viewport=new he;const y=[A,R],x=new a0;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=M[K];return mt===void 0&&(mt=new ra,M[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=M[K];return mt===void 0&&(mt=new ra,M[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=M[K];return mt===void 0&&(mt=new ra,M[K]=mt),mt.getHandSpace()};function O(K){const mt=_.indexOf(K.inputSource);if(mt===-1)return;const Tt=M[mt];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,c||a),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Z);for(let K=0;K<M.length;K++){const mt=_[K];mt!==null&&(_[K]=null,M[K].disconnect(mt))}C=null,z=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,r=null,S=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,mt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new kn(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let mt=null,Tt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?1027:1026,Tt=m.stencil?1020:1014);const Vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(Vt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new kn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new La(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(K){for(let mt=0;mt<K.removed.length;mt++){const Tt=K.removed[mt],_t=_.indexOf(Tt);_t>=0&&(_[_t]=null,M[_t].disconnect(Tt))}for(let mt=0;mt<K.added.length;mt++){const Tt=K.added[mt];let _t=_.indexOf(Tt);if(_t===-1){for(let Jt=0;Jt<M.length;Jt++)if(Jt>=_.length){_.push(Tt),_t=Jt;break}else if(_[Jt]===null){_[Jt]=Tt,_t=Jt;break}if(_t===-1)break}const Vt=M[_t];Vt&&Vt.connect(Tt)}}const W=new L,ct=new L;function q(K,mt,Tt){W.setFromMatrixPosition(mt.matrixWorld),ct.setFromMatrixPosition(Tt.matrixWorld);const _t=W.distanceTo(ct),Vt=mt.projectionMatrix.elements,Jt=Tt.projectionMatrix.elements,Yt=Vt[14]/(Vt[10]-1),te=Vt[14]/(Vt[10]+1),st=(Vt[9]+1)/Vt[5],dt=(Vt[9]-1)/Vt[5],P=(Vt[8]-1)/Vt[0],Ot=(Jt[8]+1)/Jt[0],ut=Yt*P,nt=Yt*Ot,vt=_t/(-P+Ot),kt=vt*-P;if(mt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(kt),K.translateZ(vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Vt[10]===-1)K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Pt=Yt+vt,T=te+vt,b=ut-kt,G=nt+(_t-kt),j=st*te/T*Pt,at=dt*te/T*Pt;K.projectionMatrix.makePerspective(b,G,j,at,Pt,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Mt(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let mt=K.near,Tt=K.far;v.texture!==null&&(v.depthNear>0&&(mt=v.depthNear),v.depthFar>0&&(Tt=v.depthFar)),x.near=R.near=A.near=mt,x.far=R.far=A.far=Tt,(C!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,z=x.far),A.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,x.layers.mask=A.layers.mask|R.layers.mask;const _t=K.parent,Vt=x.cameras;Mt(x,_t);for(let Jt=0;Jt<Vt.length;Jt++)Mt(Vt[Jt],_t);Vt.length===2?q(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),wt(K,x,_t)};function wt(K,mt,Tt){Tt===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=va*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Dt=null;function Kt(K,mt){if(u=mt.getViewerPose(c||a),g=mt,u!==null){const Tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let _t=!1;Tt.length!==x.cameras.length&&(x.cameras.length=0,_t=!0);for(let Jt=0;Jt<Tt.length;Jt++){const Yt=Tt[Jt];let te=null;if(d!==null)te=d.getViewport(Yt);else{const dt=h.getViewSubImage(f,Yt);te=dt.viewport,Jt===0&&(t.setRenderTargetTextures(S,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(S))}let st=y[Jt];st===void 0&&(st=new cn,st.layers.enable(Jt),st.viewport=new he,y[Jt]=st),st.matrix.fromArray(Yt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Yt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(te.x,te.y,te.width,te.height),Jt===0&&(x.matrix.copy(st.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_t===!0&&x.cameras.push(st)}const Vt=r.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){const Jt=h.getDepthInformation(Tt[0]);Jt&&Jt.isValid&&Jt.texture&&v.init(t,Jt,r.renderState)}}for(let Tt=0;Tt<M.length;Tt++){const _t=_[Tt],Vt=M[Tt];_t!==null&&Vt!==void 0&&Vt.update(_t,mt,c||a)}Dt&&Dt(K,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}const ce=new Rl;ce.setAnimationLoop(Kt),this.setAnimationLoop=function(K){Dt=K},this.dispose=function(){}}}const ci=new yn,f0=new se;function d0(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Tl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,_=S.envMapRotation;M&&(m.envMap.value=M,ci.copy(_),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function p0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const _=M.program;i.uniformBlockBinding(S,_)}function c(S,M){let _=r[S.id];_===void 0&&(g(S),_=u(S),r[S.id]=_,S.addEventListener("dispose",m));const D=M.program;i.updateUBOMapping(S,D);const w=t.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function u(S){const M=h();S.__bindingPointIndex=M;const _=n.createBuffer(),D=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=r[S.id],_=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,A=_.length;w<A;w++){const R=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,x=R.length;y<x;y++){const C=R[y];if(d(C,w,y,D)===!0){const z=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let Z=0;Z<O.length;Z++){const W=O[Z],ct=v(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+V,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,V),V+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,M,_,D){const w=S.value,A=M+"_"+_;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const R=D[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return D[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(S){const M=S.uniforms;let _=0;const D=16;for(let A=0,R=M.length;A<R;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,C=y.length;x<C;x++){const z=y[x],O=Array.isArray(z.value)?z.value:[z.value];for(let V=0,Z=O.length;V<Z;V++){const W=O[V],ct=v(W),q=_%D,Mt=q%ct.boundary,wt=q+Mt;_+=Mt,wt!==0&&D-wt<ct.storage&&(_+=D-wt),z.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=ct.storage}}}const w=_%D;return w>0&&(_+=D-w),S.__size=_,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class m0{constructor(t={}){const{canvas:e=Ql(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=0,this.toneMappingExposure=1;const _=this;let D=!1,w=0,A=0,R=null,y=-1,x=null;const C=new he,z=new he;let O=null;const V=new Lt(0);let Z=0,W=e.width,ct=e.height,q=1,Mt=null,wt=null;const Dt=new he(0,0,W,ct),Kt=new he(0,0,W,ct);let ce=!1;const K=new Pa;let mt=!1,Tt=!1;const _t=new se,Vt=new se,Jt=new L,Yt=new he,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function dt(){return R===null?q:1}let P=i;function Ot(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),P===null){const U="webgl2";if(P=Ot(U,E),P===null)throw Ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ut,nt,vt,kt,Pt,T,b,G,j,at,Q,At,St,pt,Qt,tt,It,Xt,xt,Ft,oe,ne,me,N;function bt(){ut=new yf(P),ut.init(),ne=new s0(P,ut),nt=new mf(P,ut,t,ne),vt=new n0(P,ut),nt.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),kt=new Ef(P),Pt=new Hd,T=new r0(P,ut,vt,Pt,nt,ne,kt),b=new _f(_),G=new Mf(_),j=new Pc(P),me=new df(P,j),at=new Sf(P,j,kt,me),Q=new Tf(P,at,j,kt),xt=new wf(P,nt,T),tt=new gf(Pt),At=new Vd(_,b,G,ut,nt,me,tt),St=new d0(_,Pt),pt=new Wd,Qt=new $d(ut),Xt=new ff(_,b,G,vt,Q,d,l),It=new t0(_,Q,nt),N=new p0(P,kt,nt,vt),Ft=new pf(P,ut,kt),oe=new bf(P,ut,kt),kt.programs=At.programs,_.capabilities=nt,_.extensions=ut,_.properties=Pt,_.renderLists=pt,_.shadowMap=It,_.state=vt,_.info=kt}bt();const Y=new h0(_,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(W,ct,!1))},this.getSize=function(E){return E.set(W,ct)},this.setSize=function(E,U,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,ct=U,e.width=Math.floor(E*q),e.height=Math.floor(U*q),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*q,ct*q).floor()},this.setDrawingBufferSize=function(E,U,k){W=E,ct=U,q=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Dt)},this.setViewport=function(E,U,k,H){E.isVector4?Dt.set(E.x,E.y,E.z,E.w):Dt.set(E,U,k,H),vt.viewport(C.copy(Dt).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Kt)},this.setScissor=function(E,U,k,H){E.isVector4?Kt.set(E.x,E.y,E.z,E.w):Kt.set(E,U,k,H),vt.scissor(z.copy(Kt).multiplyScalar(q).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){vt.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Mt=E},this.setTransparentSort=function(E){wt=E},this.getClearColor=function(E){return E.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(E=!0,U=!0,k=!0){let H=0;if(E){let F=!1;if(R!==null){const ot=R.texture.format;F=ot===1033||ot===1031||ot===1029}if(F){const ot=R.texture.type,Ct=ot===1009||ot===1014||ot===1012||ot===1020||ot===1017||ot===1018,zt=Xt.getClearColor(),Gt=Xt.getClearAlpha(),jt=zt.r,I=zt.g,B=zt.b;Ct?(g[0]=jt,g[1]=I,g[2]=B,g[3]=Gt,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=jt,v[1]=I,v[2]=B,v[3]=Gt,P.clearBufferiv(P.COLOR,0,v))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),pt.dispose(),Qt.dispose(),Pt.dispose(),b.dispose(),G.dispose(),Q.dispose(),me.dispose(),N.dispose(),At.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Qi),Y.removeEventListener("sessionend",vi),bn.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=kt.autoReset,U=It.enabled,k=It.autoUpdate,H=It.needsUpdate,F=It.type;bt(),kt.autoReset=E,It.enabled=U,It.autoUpdate=k,It.needsUpdate=H,It.type=F}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const U=E.target;U.removeEventListener("dispose",ee),_e(U)}function _e(E){xe(E),Pt.remove(E)}function xe(E){const U=Pt.get(E).programs;U!==void 0&&(U.forEach(function(k){At.releaseProgram(k)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,H,F,ot){U===null&&(U=te);const Ct=F.isMesh&&F.matrixWorld.determinant()<0,zt=En(E,U,k,H,F);vt.setMaterial(H,Ct);let Gt=k.index,jt=1;if(H.wireframe===!0){if(Gt=at.getWireframeAttribute(k),Gt===void 0)return;jt=2}const I=k.drawRange,B=k.attributes.position;let $=I.start*jt,et=(I.start+I.count)*jt;ot!==null&&($=Math.max($,ot.start*jt),et=Math.min(et,(ot.start+ot.count)*jt)),Gt!==null?($=Math.max($,0),et=Math.min(et,Gt.count)):B!=null&&($=Math.max($,0),et=Math.min(et,B.count));const lt=et-$;if(lt<0||lt===1/0)return;me.setup(F,H,zt,k,Gt);let rt,X=Ft;if(Gt!==null&&(rt=j.get(Gt),X=oe,X.setIndex(rt)),F.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*dt()),X.setMode(P.LINES)):X.setMode(P.TRIANGLES);else if(F.isLine){let J=H.linewidth;J===void 0&&(J=1),vt.setLineWidth(J*dt()),F.isLineSegments?X.setMode(P.LINES):F.isLineLoop?X.setMode(P.LINE_LOOP):X.setMode(P.LINE_STRIP)}else F.isPoints?X.setMode(P.POINTS):F.isSprite&&X.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)X.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))X.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const J=F._multiDrawStarts,Ut=F._multiDrawCounts,yt=F._multiDrawCount,Ht=Gt?j.get(Gt).bytesPerElement:1,qt=Pt.get(H).currentProgram.getUniforms();for(let ht=0;ht<yt;ht++)qt.setValue(P,"_gl_DrawID",ht),X.render(J[ht]/Ht,Ut[ht])}else if(F.isInstancedMesh)X.renderInstances($,lt,F.count);else if(k.isInstancedBufferGeometry){const J=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ut=Math.min(k.instanceCount,J);X.renderInstances($,lt,Ut)}else X.render($,lt)};function le(E,U,k){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,Pn(E,U,k),E.side=0,E.needsUpdate=!0,Pn(E,U,k),E.side=2):Pn(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),p=Qt.get(k),p.init(U),M.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==k&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let Ct=0;Ct<ot.length;Ct++){const zt=ot[Ct];le(zt,k,F),H.add(zt)}else le(ot,k,F),H.add(ot)}),M.pop(),p=null,H},this.compileAsync=function(E,U,k=null){const H=this.compile(E,U,k);return new Promise(F=>{function ot(){if(H.forEach(function(Ct){Pt.get(Ct).currentProgram.isReady()&&H.delete(Ct)}),H.size===0){F(E);return}setTimeout(ot,10)}ut.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let tn=null;function rn(E){tn&&tn(E)}function Qi(){bn.stop()}function vi(){bn.start()}const bn=new Rl;bn.setAnimationLoop(rn),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(E){tn=E,Y.setAnimationLoop(E),E===null?bn.stop():bn.start()},Y.addEventListener("sessionstart",Qi),Y.addEventListener("sessionend",vi),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,R),p=Qt.get(E,M.length),p.init(U),M.push(p),Vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Vt),Tt=this.localClippingEnabled,mt=tt.init(this.clippingPlanes,Tt),m=pt.get(E,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&tr(ot,U,-1/0,_.sortObjects)}tr(E,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Mt,wt),st=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,st&&Xt.addToRenderList(m,E),this.info.render.frame++,mt===!0&&tt.beginShadows();const k=p.state.shadowsArray;It.render(k,E,U),mt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(F.length>0)for(let Ct=0,zt=ot.length;Ct<zt;Ct++){const Gt=ot[Ct];Dr(H,F,E,Gt)}st&&Xt.render(E);for(let Ct=0,zt=ot.length;Ct<zt;Ct++){const Gt=ot[Ct];xi(m,E,Gt,Gt.viewport)}}else F.length>0&&Dr(H,F,E,U),st&&Xt.render(E),xi(m,E,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(_,E,U),me.resetDefaultState(),y=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],mt===!0&&tt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function tr(E,U,k,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){H&&Yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Vt);const Ct=Q.update(E),zt=E.material;zt.visible&&m.push(E,Ct,zt,k,Yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){const Ct=Q.update(E),zt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Yt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Yt.copy(Ct.boundingSphere.center)),Yt.applyMatrix4(E.matrixWorld).applyMatrix4(Vt)),Array.isArray(zt)){const Gt=Ct.groups;for(let jt=0,I=Gt.length;jt<I;jt++){const B=Gt[jt],$=zt[B.materialIndex];$&&$.visible&&m.push(E,Ct,$,k,Yt.z,B)}}else zt.visible&&m.push(E,Ct,zt,k,Yt.z,null)}}const ot=E.children;for(let Ct=0,zt=ot.length;Ct<zt;Ct++)tr(ot[Ct],U,k,H)}function xi(E,U,k,H){const F=E.opaque,ot=E.transmissive,Ct=E.transparent;p.setupLightsView(k),mt===!0&&tt.setGlobalState(_.clippingPlanes,k),H&&vt.viewport(C.copy(H)),F.length>0&&ii(F,U,k),ot.length>0&&ii(ot,U,k),Ct.length>0&&ii(Ct,U,k),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Dr(E,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new kn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ot=p.state.transmissionRenderTarget[H.id],Ct=H.viewport||C;ot.setSize(Ct.z,Ct.w);const zt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(V),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),st&&Xt.render(k);const Gt=_.toneMapping;_.toneMapping=0;const jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),mt===!0&&tt.setGlobalState(_.clippingPlanes,H),ii(E,k,H),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),ut.has("WEBGL_multisampled_render_to_texture")===!1){let I=!1;for(let B=0,$=U.length;B<$;B++){const et=U[B],lt=et.object,rt=et.geometry,X=et.material,J=et.group;if(X.side===2&&lt.layers.test(H.layers)){const Ut=X.side;X.side=1,X.needsUpdate=!0,er(lt,k,H,rt,X,J),X.side=Ut,X.needsUpdate=!0,I=!0}}I===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}_.setRenderTarget(zt),_.setClearColor(V,Z),jt!==void 0&&(H.viewport=jt),_.toneMapping=Gt}function ii(E,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ot=E.length;F<ot;F++){const Ct=E[F],zt=Ct.object,Gt=Ct.geometry,jt=H===null?Ct.material:H,I=Ct.group;zt.layers.test(k.layers)&&er(zt,U,k,Gt,jt,I)}}function er(E,U,k,H,F,ot){E.onBeforeRender(_,U,k,H,F,ot),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,U,k,H,E,ot),F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,E,ot),F.side=0,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,E,ot),F.side=2):_.renderBufferDirect(k,U,H,F,E,ot),E.onAfterRender(_,U,k,H,F,ot)}function Pn(E,U,k){U.isScene!==!0&&(U=te);const H=Pt.get(E),F=p.state.lights,ot=p.state.shadowsArray,Ct=F.state.version,zt=At.getParameters(E,F.state,ot,U,k),Gt=At.getProgramCacheKey(zt);let jt=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,jt===void 0&&(E.addEventListener("dispose",ee),jt=new Map,H.programs=jt);let I=jt.get(Gt);if(I!==void 0){if(H.currentProgram===I&&H.lightsStateVersion===Ct)return nr(E,zt),I}else zt.uniforms=At.getUniforms(E),E.onBeforeCompile(zt,_),I=At.acquireProgram(zt,Gt),jt.set(Gt,I),H.uniforms=zt.uniforms;const B=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(B.clippingPlanes=tt.uniform),nr(E,zt),H.needsLights=Lr(E),H.lightsStateVersion=Ct,H.needsLights&&(B.ambientLightColor.value=F.state.ambient,B.lightProbe.value=F.state.probe,B.directionalLights.value=F.state.directional,B.directionalLightShadows.value=F.state.directionalShadow,B.spotLights.value=F.state.spot,B.spotLightShadows.value=F.state.spotShadow,B.rectAreaLights.value=F.state.rectArea,B.ltc_1.value=F.state.rectAreaLTC1,B.ltc_2.value=F.state.rectAreaLTC2,B.pointLights.value=F.state.point,B.pointLightShadows.value=F.state.pointShadow,B.hemisphereLights.value=F.state.hemi,B.directionalShadowMap.value=F.state.directionalShadowMap,B.directionalShadowMatrix.value=F.state.directionalShadowMatrix,B.spotShadowMap.value=F.state.spotShadowMap,B.spotLightMatrix.value=F.state.spotLightMatrix,B.spotLightMap.value=F.state.spotLightMap,B.pointShadowMap.value=F.state.pointShadowMap,B.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=I,H.uniformsList=null,I}function Mi(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=vs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function nr(E,U){const k=Pt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function En(E,U,k,H,F){U.isScene!==!0&&(U=te),T.resetTextureUnits();const ot=U.fog,Ct=H.isMeshStandardMaterial?U.environment:null,zt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gi,Gt=(H.isMeshStandardMaterial?G:b).get(H.envMap||Ct),jt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,I=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),B=!!k.morphAttributes.position,$=!!k.morphAttributes.normal,et=!!k.morphAttributes.color;let lt=0;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=_.toneMapping);const rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,X=rt!==void 0?rt.length:0,J=Pt.get(H),Ut=p.state.lights;if(mt===!0&&(Tt===!0||E!==x)){const Pe=E===x&&H.id===y;tt.setState(H,E,Pe)}let yt=!1;H.version===J.__version?(J.needsLights&&J.lightsStateVersion!==Ut.state.version||J.outputColorSpace!==zt||F.isBatchedMesh&&J.batching===!1||!F.isBatchedMesh&&J.batching===!0||F.isBatchedMesh&&J.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&J.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&J.instancing===!1||!F.isInstancedMesh&&J.instancing===!0||F.isSkinnedMesh&&J.skinning===!1||!F.isSkinnedMesh&&J.skinning===!0||F.isInstancedMesh&&J.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&J.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&J.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&J.instancingMorph===!1&&F.morphTexture!==null||J.envMap!==Gt||H.fog===!0&&J.fog!==ot||J.numClippingPlanes!==void 0&&(J.numClippingPlanes!==tt.numPlanes||J.numIntersection!==tt.numIntersection)||J.vertexAlphas!==jt||J.vertexTangents!==I||J.morphTargets!==B||J.morphNormals!==$||J.morphColors!==et||J.toneMapping!==lt||J.morphTargetsCount!==X)&&(yt=!0):(yt=!0,J.__version=H.version);let Ht=J.currentProgram;yt===!0&&(Ht=Pn(H,U,F));let qt=!1,ht=!1,Wt=!1;const Bt=Ht.getUniforms(),fe=J.uniforms;if(vt.useProgram(Ht.program)&&(qt=!0,ht=!0,Wt=!0),H.id!==y&&(y=H.id,ht=!0),qt||x!==E){vt.buffers.depth.getReversed()?(_t.copy(E.projectionMatrix),ec(_t),nc(_t),Bt.setValue(P,"projectionMatrix",_t)):Bt.setValue(P,"projectionMatrix",E.projectionMatrix),Bt.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ne=Bt.map.cameraPosition;Ne!==void 0&&Ne.setValue(P,Jt.setFromMatrixPosition(E.matrixWorld)),nt.logarithmicDepthBuffer&&Bt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Bt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,ht=!0,Wt=!0)}if(F.isSkinnedMesh){Bt.setOptional(P,F,"bindMatrix"),Bt.setOptional(P,F,"bindMatrixInverse");const Pe=F.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Bt.setValue(P,"boneTexture",Pe.boneTexture,T))}F.isBatchedMesh&&(Bt.setOptional(P,F,"batchingTexture"),Bt.setValue(P,"batchingTexture",F._matricesTexture,T),Bt.setOptional(P,F,"batchingIdTexture"),Bt.setValue(P,"batchingIdTexture",F._indirectTexture,T),Bt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Bt.setValue(P,"batchingColorTexture",F._colorsTexture,T));const de=k.morphAttributes;if((de.position!==void 0||de.normal!==void 0||de.color!==void 0)&&xt.update(F,k,Ht),(ht||J.receiveShadow!==F.receiveShadow)&&(J.receiveShadow=F.receiveShadow,Bt.setValue(P,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fe.envMap.value=Gt,fe.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(fe.envMapIntensity.value=U.environmentIntensity),ht&&(Bt.setValue(P,"toneMappingExposure",_.toneMappingExposure),J.needsLights&&Cs(fe,Wt),ot&&H.fog===!0&&St.refreshFogUniforms(fe,ot),St.refreshMaterialUniforms(fe,H,q,ct,p.state.transmissionRenderTarget[E.id]),vs.upload(P,Mi(J),fe,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vs.upload(P,Mi(J),fe,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Bt.setValue(P,"center",F.center),Bt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Bt.setValue(P,"normalMatrix",F.normalMatrix),Bt.setValue(P,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pe=H.uniformsGroups;for(let Ne=0,un=Pe.length;Ne<un;Ne++){const Dn=Pe[Ne];N.update(Dn,Ht),N.bind(Dn,Ht)}}return Ht}function Cs(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Lr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,k){Pt.get(E.texture).__webglTexture=U,Pt.get(E.depthTexture).__webglTexture=k;const H=Pt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=Pt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){R=E,w=U,A=k;let H=!0,F=null,ot=!1,Ct=!1;if(E){const Gt=Pt.get(E);if(Gt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Gt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Gt.__hasExternalTextures)T.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const B=E.depthTexture;if(Gt.__boundDepthTexture!==B){if(B!==null&&Pt.has(B)&&(E.width!==B.image.width||E.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const jt=E.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ct=!0);const I=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(I[U])?F=I[U][k]:F=I[U],ot=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?F=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(I)?F=I[k]:F=I,C.copy(E.viewport),z.copy(E.scissor),O=E.scissorTest}else C.copy(Dt).multiplyScalar(q).floor(),z.copy(Kt).multiplyScalar(q).floor(),O=ce;if(vt.bindFramebuffer(P.FRAMEBUFFER,F)&&H&&vt.drawBuffers(E,F),vt.viewport(C),vt.scissor(z),vt.setScissorTest(O),ot){const Gt=Pt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Gt.__webglTexture,k)}else if(Ct){const Gt=Pt.get(E.texture),jt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.__webglTexture,k||0,jt)}y=-1},this.readRenderTargetPixels=function(E,U,k,H,F,ot,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){vt.bindFramebuffer(P.FRAMEBUFFER,zt);try{const Gt=E.texture,jt=Gt.format,I=Gt.type;if(!nt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(I)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&k>=0&&k<=E.height-F&&P.readPixels(U,k,H,F,ne.convert(jt),ne.convert(I),ot)}finally{const Gt=R!==null?Pt.get(R).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,H,F,ot,Ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){const Gt=E.texture,jt=Gt.format,I=Gt.type;if(!nt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(I))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&k>=0&&k<=E.height-F){vt.bindFramebuffer(P.FRAMEBUFFER,zt);const B=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,B),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(U,k,H,F,ne.convert(jt),ne.convert(I),0);const $=R!==null?Pt.get(R).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,$);const et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await tc(P,et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,B),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(B),P.deleteSync(et),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(E.image.width*H),ot=Math.floor(E.image.height*H),Ct=U!==null?U.x:0,zt=U!==null?U.y:0;T.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,Ct,zt,F,ot),vt.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,H=null,F=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let ot,Ct,zt,Gt,jt,I,B,$,et;const lt=E.isCompressedTexture?E.mipmaps[F]:E.image;k!==null?(ot=k.max.x-k.min.x,Ct=k.max.y-k.min.y,zt=k.isBox3?k.max.z-k.min.z:1,Gt=k.min.x,jt=k.min.y,I=k.isBox3?k.min.z:0):(ot=lt.width,Ct=lt.height,zt=lt.depth||1,Gt=0,jt=0,I=0),H!==null?(B=H.x,$=H.y,et=H.z):(B=0,$=0,et=0);const rt=ne.convert(U.format),X=ne.convert(U.type);let J;U.isData3DTexture?(T.setTexture3D(U,0),J=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),J=P.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),J=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=P.getParameter(P.UNPACK_ROW_LENGTH),yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ht=P.getParameter(P.UNPACK_SKIP_PIXELS),qt=P.getParameter(P.UNPACK_SKIP_ROWS),ht=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,I);const Wt=E.isDataArrayTexture||E.isData3DTexture,Bt=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const fe=Pt.get(E),de=Pt.get(U),Pe=Pt.get(fe.__renderTarget),Ne=Pt.get(de.__renderTarget);vt.bindFramebuffer(P.READ_FRAMEBUFFER,Pe.__webglFramebuffer),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let un=0;un<zt;un++)Wt&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.get(E).__webglTexture,F,I+un),E.isDepthTexture?(Bt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.get(U).__webglTexture,F,et+un),P.blitFramebuffer(Gt,jt,ot,Ct,B,$,ot,Ct,P.DEPTH_BUFFER_BIT,P.NEAREST)):Bt?P.copyTexSubImage3D(J,F,B,$,et+un,Gt,jt,ot,Ct):P.copyTexSubImage2D(J,F,B,$,et+un,Gt,jt,ot,Ct);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Bt?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(J,F,B,$,et,ot,Ct,zt,rt,X,lt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(J,F,B,$,et,ot,Ct,zt,rt,lt.data):P.texSubImage3D(J,F,B,$,et,ot,Ct,zt,rt,X,lt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,B,$,ot,Ct,rt,X,lt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,B,$,lt.width,lt.height,rt,lt.data):P.texSubImage2D(P.TEXTURE_2D,F,B,$,ot,Ct,rt,X,lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ht),F===0&&U.generateMipmaps&&P.generateMipmap(J),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,H=null,F=0){return E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,H,F)},this.initRenderTarget=function(E){Pt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,vt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class Ia{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new Ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class No extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ua extends Ze{constructor(t=null,e=1,i=1,r,s,a,o,l,c=1003,u=1003,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya extends Ie{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ui=new se,Fo=new se,Qr=[],Oo=new _i,g0=new se,cr=new $t,ur=new $i;class As extends $t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ya(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,g0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ui),Oo.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Oo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ui),ur.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),t.ray.intersectsSphere(ur)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ui),Fo.multiplyMatrices(i,Ui),cr.matrixWorld=Fo,cr.raycast(t,Qr);for(let a=0,o=Qr.length;a<o;a++){const l=Qr[a];l.instanceId=s,l.object=this,e.push(l)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _0 extends Ji{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bo=new se,Sa=new yl,ts=new $i,es=new L;class Ms extends We{constructor(t=new Ee,e=new _0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(r),ts.radius+=s,t.ray.intersectsSphere(ts)===!1)return;Bo.copy(r).invert(),Sa.copy(t.ray).applyMatrix4(Bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);es.fromBufferAttribute(h,m),zo(es,m,l,r,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++)es.fromBufferAttribute(h,g),zo(es,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zo(n,t,e,i,r,s,a){const o=Sa.distanceSqToPoint(n);if(o<e){const l=new L;Sa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class v0 extends Ze{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ft:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,r=[],s=[],a=[],o=new L,l=new se;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Fe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Fe(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Na extends Cn{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class x0 extends Na{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fa(){let n=0,t=0,e=0,i=0;function r(s,a,o,l){n=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const ns=new L,sa=new Fa,aa=new Fa,oa=new Fa;class M0 extends Cn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new L){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(ns.subVectors(r[0],r[1]).add(r[0]),c=ns);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ns.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),sa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),aa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),oa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(sa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),aa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),oa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(sa.calc(l),aa.calc(l),oa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Go(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*n+e}function y0(n,t){const e=1-n;return e*e*t}function S0(n,t){return 2*(1-n)*n*t}function b0(n,t){return n*n*t}function Mr(n,t,e,i){return y0(n,t)+S0(n,e)+b0(n,i)}function E0(n,t){const e=1-n;return e*e*e*t}function w0(n,t){const e=1-n;return 3*e*e*n*t}function T0(n,t){return 3*(1-n)*n*n*t}function A0(n,t){return n*n*n*t}function yr(n,t,e,i,r){return E0(n,t)+w0(n,e)+T0(n,i)+A0(n,r)}class Ul extends Cn{constructor(t=new ft,e=new ft,i=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ft){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(yr(t,r.x,s.x,a.x,o.x),yr(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class R0 extends Cn{constructor(t=new L,e=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(yr(t,r.x,s.x,a.x,o.x),yr(t,r.y,s.y,a.y,o.y),yr(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nl extends Cn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends Cn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fl extends Cn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Mr(t,r.x,s.x,a.x),Mr(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P0 extends Cn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Mr(t,r.x,s.x,a.x),Mr(t,r.y,s.y,a.y),Mr(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ol extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Go(o,l.x,c.x,u.x,h.x),Go(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new ft().fromArray(r))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:x0,CatmullRomCurve3:M0,CubicBezierCurve:Ul,CubicBezierCurve3:R0,EllipseCurve:Na,LineCurve:Nl,LineCurve3:C0,QuadraticBezierCurve:Fl,QuadraticBezierCurve3:P0,SplineCurve:Ol});class D0 extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new ba[r.type]().fromJSON(r))}return this}}class Vo extends D0{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Nl(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Fl(this.currentPoint.clone(),new ft(t,e),new ft(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new Ul(this.currentPoint.clone(),new ft(t,e),new ft(i,r),new ft(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ol(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,a,o,l),this}absellipse(t,e,i,r,s,a,o,l){const c=new Na(t,e,i,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pr extends Ee{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=Fe(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/e,h=new L,f=new ft,d=new L,g=new L,v=new L;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=e;S++){const M=i+S*u*r,_=Math.sin(M),D=Math.cos(M);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*_,h.y=t[w].y,h.z=t[w].x*D,a.push(h.x,h.y,h.z),f.x=S/e,f.y=w/(t.length-1),o.push(f.x,f.y);const A=l[3*w+0]*_,R=l[3*w+1],y=l[3*w+0]*D;c.push(A,R,y)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const _=M+S*t.length,D=_,w=_+t.length,A=_+t.length+1,R=_+1;s.push(D,w,R),s.push(A,R,w)}this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.points,t.segments,t.phiStart,t.phiLength)}}class Oa extends Ee{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new L,u=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class nn extends Ee{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;S(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function S(){const _=new L,D=new L;let w=0;const A=(e-t)/i;for(let R=0;R<=s;R++){const y=[],x=R/s,C=x*(e-t)+t;for(let z=0;z<=r;z++){const O=z/r,V=O*l+o,Z=Math.sin(V),W=Math.cos(V);D.x=C*Z,D.y=-x*i+m,D.z=C*W,h.push(D.x,D.y,D.z),_.set(Z,A,W).normalize(),f.push(_.x,_.y,_.z),d.push(O,1-x),y.push(g++)}v.push(y)}for(let R=0;R<r;R++)for(let y=0;y<s;y++){const x=v[y][R],C=v[y+1][R],z=v[y+1][R+1],O=v[y][R+1];(t>0||y!==0)&&(u.push(x,C,O),w+=3),(e>0||y!==s-1)&&(u.push(C,z,O),w+=3)}c.addGroup(p,w,0),p+=w}function M(_){const D=g,w=new ft,A=new L;let R=0;const y=_===!0?t:e,x=_===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const C=g;for(let z=0;z<=r;z++){const V=z/r*l+o,Z=Math.cos(V),W=Math.sin(V);A.x=y*W,A.y=m*x,A.z=y*Z,h.push(A.x,A.y,A.z),f.push(0,x,0),w.x=Z*.5+.5,w.y=W*.5*x+.5,d.push(w.x,w.y),g++}for(let z=0;z<r;z++){const O=D+z,V=C+z;_===!0?u.push(V,V+1,O):u.push(V+1,V,O),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pn extends nn{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ba extends Ee{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const M=new L,_=new L,D=new L;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],_),d(e[w+2],D),l(M,_,D,S)}function l(S,M,_,D){const w=D+1,A=[];for(let R=0;R<=w;R++){A[R]=[];const y=S.clone().lerp(_,R/w),x=M.clone().lerp(_,R/w),C=w-R;for(let z=0;z<=C;z++)z===0&&R===w?A[R][z]=y:A[R][z]=y.clone().lerp(x,z/C)}for(let R=0;R<w;R++)for(let y=0;y<2*(w-R)-1;y++){const x=Math.floor(y/2);y%2===0?(f(A[R][x+1]),f(A[R+1][x]),f(A[R][x])):(f(A[R][x+1]),f(A[R+1][x+1]),f(A[R+1][x]))}}function c(S){const M=new L;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(S),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function u(){const S=new L;for(let M=0;M<s.length;M+=3){S.x=s[M+0],S.y=s[M+1],S.z=s[M+2];const _=m(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;a.push(_,1-D)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const M=a[S+0],_=a[S+2],D=a[S+4],w=Math.max(M,_,D),A=Math.min(M,_,D);w>.9&&A<.1&&(M<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,M){const _=S*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const S=new L,M=new L,_=new L,D=new L,w=new ft,A=new ft,R=new ft;for(let y=0,x=0;y<s.length;y+=9,x+=6){S.set(s[y+0],s[y+1],s[y+2]),M.set(s[y+3],s[y+4],s[y+5]),_.set(s[y+6],s[y+7],s[y+8]),w.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),D.copy(S).add(M).add(_).divideScalar(3);const C=m(D);v(w,x+0,S,C),v(A,x+2,M,C),v(R,x+4,_,C)}}function v(S,M,_,D){D<0&&S.x===1&&(a[M]=S.x-1),_.x===0&&_.z===0&&(a[M]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.vertices,t.indices,t.radius,t.details)}}class Bl extends Vo{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Vo().fromJSON(r))}return this}}const L0={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=zl(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(i&&(s=O0(n,t,s,e)),n.length>80*e){o=c=n[0],l=u=n[1];for(let g=e;g<r;g+=e)h=n[g],f=n[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Er(s,a,e,o,l,d,0),a}};function zl(n,t,e,i,r){let s,a;if(r===Z0(n,t,e,i)>0)for(s=t;s<e;s+=i)a=Ho(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=Ho(s,n[s],n[s+1],a);return a&&Rs(a,a.next)&&(Tr(a),a=a.next),a}function mi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Rs(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Er(n,t,e,i,r,s,a){if(!n)return;!a&&s&&H0(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?U0(n,i,r,s):I0(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Tr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=N0(mi(n),t,e),Er(n,t,e,i,r,s,2)):a===2&&F0(n,t,e,i,r,s):Er(mi(n),t,e,i,r,s,1);break}}}function I0(n){const t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Gi(r,o,s,l,a,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function U0(n,t,e,i){const r=n.prev,s=n,a=n.next;if(Ae(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,v=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Ea(d,g,t,e,i),S=Ea(v,m,t,e,i);let M=n.prevZ,_=n.nextZ;for(;M&&M.z>=p&&_&&_.z<=S;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Gi(o,u,l,h,c,f,M.x,M.y)&&Ae(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Gi(o,u,l,h,c,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Gi(o,u,l,h,c,f,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Gi(o,u,l,h,c,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function N0(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!Rs(r,s)&&Gl(r,i,i.next,s)&&wr(r,s)&&wr(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Tr(i),Tr(i.next),i=n=s),i=i.next}while(i!==n);return mi(i)}function F0(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&X0(a,o)){let l=Vl(a,o);a=mi(a,a.next),l=mi(l,l.next),Er(a,t,e,i,r,s,0),Er(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function O0(n,t,e,i){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=zl(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(W0(c));for(r.sort(B0),s=0;s<r.length;s++)e=z0(r[s],e);return e}function B0(n,t){return n.x-t.x}function z0(n,t){const e=G0(n,t);if(!e)return t;const i=Vl(e,n);return mi(i,i.next),mi(e,e.next)}function G0(n,t){let e=t,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Gi(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),wr(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&V0(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function V0(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function H0(n,t,e,i){let r=n;do r.z===0&&(r.z=Ea(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,k0(r)}function k0(n){let t,e,i,r,s,a,o,l,c=1;do{for(e=n,n=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(a>1);return n}function Ea(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function W0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Gi(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function X0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!q0(n,t)&&(wr(n,t)&&wr(t,n)&&Y0(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||Rs(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Rs(n,t){return n.x===t.x&&n.y===t.y}function Gl(n,t,e,i){const r=rs(Ae(n,t,e)),s=rs(Ae(n,t,i)),a=rs(Ae(e,i,n)),o=rs(Ae(e,i,t));return!!(r!==s&&a!==o||r===0&&is(n,e,t)||s===0&&is(n,i,t)||a===0&&is(e,n,i)||o===0&&is(e,t,i))}function is(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function rs(n){return n>0?1:n<0?-1:0}function q0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Gl(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function wr(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function Y0(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Vl(n,t){const e=new wa(n.i,n.x,n.y),i=new wa(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Ho(n,t,e,i){const r=new wa(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Tr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wa(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z0(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Sr{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Sr.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];ko(t),Wo(i,t);let a=t.length;e.forEach(ko);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Wo(i,e[l]);const o=L0.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ko(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Wo(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class za extends Ee{constructor(t=new Bl([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:K0;let M,_=!1,D,w,A,R;p&&(M=p.getSpacedPoints(u),_=!0,f=!1,D=p.computeFrenetFrames(u,!1),w=new L,A=new L,R=new L),f||(m=0,d=0,g=0,v=0);const y=o.extractPoints(c);let x=y.shape;const C=y.holes;if(!Sr.isClockWise(x)){x=x.reverse();for(let st=0,dt=C.length;st<dt;st++){const P=C[st];Sr.isClockWise(P)&&(C[st]=P.reverse())}}const O=Sr.triangulateShape(x,C),V=x;for(let st=0,dt=C.length;st<dt;st++){const P=C[st];x=x.concat(P)}function Z(st,dt,P){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(dt,P)}const W=x.length,ct=O.length;function q(st,dt,P){let Ot,ut,nt;const vt=st.x-dt.x,kt=st.y-dt.y,Pt=P.x-st.x,T=P.y-st.y,b=vt*vt+kt*kt,G=vt*T-kt*Pt;if(Math.abs(G)>Number.EPSILON){const j=Math.sqrt(b),at=Math.sqrt(Pt*Pt+T*T),Q=dt.x-kt/j,At=dt.y+vt/j,St=P.x-T/at,pt=P.y+Pt/at,Qt=((St-Q)*T-(pt-At)*Pt)/(vt*T-kt*Pt);Ot=Q+vt*Qt-st.x,ut=At+kt*Qt-st.y;const tt=Ot*Ot+ut*ut;if(tt<=2)return new ft(Ot,ut);nt=Math.sqrt(tt/2)}else{let j=!1;vt>Number.EPSILON?Pt>Number.EPSILON&&(j=!0):vt<-Number.EPSILON?Pt<-Number.EPSILON&&(j=!0):Math.sign(kt)===Math.sign(T)&&(j=!0),j?(Ot=-kt,ut=vt,nt=Math.sqrt(b)):(Ot=vt,ut=kt,nt=Math.sqrt(b/2))}return new ft(Ot/nt,ut/nt)}const Mt=[];for(let st=0,dt=V.length,P=dt-1,Ot=st+1;st<dt;st++,P++,Ot++)P===dt&&(P=0),Ot===dt&&(Ot=0),Mt[st]=q(V[st],V[P],V[Ot]);const wt=[];let Dt,Kt=Mt.concat();for(let st=0,dt=C.length;st<dt;st++){const P=C[st];Dt=[];for(let Ot=0,ut=P.length,nt=ut-1,vt=Ot+1;Ot<ut;Ot++,nt++,vt++)nt===ut&&(nt=0),vt===ut&&(vt=0),Dt[Ot]=q(P[Ot],P[nt],P[vt]);wt.push(Dt),Kt=Kt.concat(Dt)}for(let st=0;st<m;st++){const dt=st/m,P=d*Math.cos(dt*Math.PI/2),Ot=g*Math.sin(dt*Math.PI/2)+v;for(let ut=0,nt=V.length;ut<nt;ut++){const vt=Z(V[ut],Mt[ut],Ot);_t(vt.x,vt.y,-P)}for(let ut=0,nt=C.length;ut<nt;ut++){const vt=C[ut];Dt=wt[ut];for(let kt=0,Pt=vt.length;kt<Pt;kt++){const T=Z(vt[kt],Dt[kt],Ot);_t(T.x,T.y,-P)}}}const ce=g+v;for(let st=0;st<W;st++){const dt=f?Z(x[st],Kt[st],ce):x[st];_?(A.copy(D.normals[0]).multiplyScalar(dt.x),w.copy(D.binormals[0]).multiplyScalar(dt.y),R.copy(M[0]).add(A).add(w),_t(R.x,R.y,R.z)):_t(dt.x,dt.y,0)}for(let st=1;st<=u;st++)for(let dt=0;dt<W;dt++){const P=f?Z(x[dt],Kt[dt],ce):x[dt];_?(A.copy(D.normals[st]).multiplyScalar(P.x),w.copy(D.binormals[st]).multiplyScalar(P.y),R.copy(M[st]).add(A).add(w),_t(R.x,R.y,R.z)):_t(P.x,P.y,h/u*st)}for(let st=m-1;st>=0;st--){const dt=st/m,P=d*Math.cos(dt*Math.PI/2),Ot=g*Math.sin(dt*Math.PI/2)+v;for(let ut=0,nt=V.length;ut<nt;ut++){const vt=Z(V[ut],Mt[ut],Ot);_t(vt.x,vt.y,h+P)}for(let ut=0,nt=C.length;ut<nt;ut++){const vt=C[ut];Dt=wt[ut];for(let kt=0,Pt=vt.length;kt<Pt;kt++){const T=Z(vt[kt],Dt[kt],Ot);_?_t(T.x,T.y+M[u-1].y,M[u-1].x+P):_t(T.x,T.y,h+P)}}}K(),mt();function K(){const st=r.length/3;if(f){let dt=0,P=W*dt;for(let Ot=0;Ot<ct;Ot++){const ut=O[Ot];Vt(ut[2]+P,ut[1]+P,ut[0]+P)}dt=u+m*2,P=W*dt;for(let Ot=0;Ot<ct;Ot++){const ut=O[Ot];Vt(ut[0]+P,ut[1]+P,ut[2]+P)}}else{for(let dt=0;dt<ct;dt++){const P=O[dt];Vt(P[2],P[1],P[0])}for(let dt=0;dt<ct;dt++){const P=O[dt];Vt(P[0]+W*u,P[1]+W*u,P[2]+W*u)}}i.addGroup(st,r.length/3-st,0)}function mt(){const st=r.length/3;let dt=0;Tt(V,dt),dt+=V.length;for(let P=0,Ot=C.length;P<Ot;P++){const ut=C[P];Tt(ut,dt),dt+=ut.length}i.addGroup(st,r.length/3-st,1)}function Tt(st,dt){let P=st.length;for(;--P>=0;){const Ot=P;let ut=P-1;ut<0&&(ut=st.length-1);for(let nt=0,vt=u+m*2;nt<vt;nt++){const kt=W*nt,Pt=W*(nt+1),T=dt+Ot+kt,b=dt+ut+kt,G=dt+ut+Pt,j=dt+Ot+Pt;Jt(T,b,G,j)}}}function _t(st,dt,P){l.push(st),l.push(dt),l.push(P)}function Vt(st,dt,P){Yt(st),Yt(dt),Yt(P);const Ot=r.length/3,ut=S.generateTopUV(i,r,Ot-3,Ot-2,Ot-1);te(ut[0]),te(ut[1]),te(ut[2])}function Jt(st,dt,P,Ot){Yt(st),Yt(dt),Yt(Ot),Yt(dt),Yt(P),Yt(Ot);const ut=r.length/3,nt=S.generateSideWallUV(i,r,ut-6,ut-3,ut-2,ut-1);te(nt[0]),te(nt[1]),te(nt[3]),te(nt[1]),te(nt[2]),te(nt[3])}function Yt(st){r.push(l[st*3+0]),r.push(l[st*3+1]),r.push(l[st*3+2])}function te(st){s.push(st.x),s.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return $0(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ba[r.type]().fromJSON(r)),new za(i,t.options)}}const K0={generateTopUV:function(n,t,e,i,r){const s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new ft(s,a),new ft(o,l),new ft(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ft(a,1-l),new ft(c,1-h),new ft(f,1-g),new ft(v,1-p)]:[new ft(o,1-l),new ft(u,1-h),new ft(d,1-g),new ft(m,1-p)]}};function $0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wi extends Ba{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wi(t.radius,t.detail)}}class qe extends Ee{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,f=new L,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],M=p/i;let _=0;p===0&&a===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){const w=D/e;h.x=-t*Math.cos(r+w*s)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(r+w*s)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(w+_,1-M),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const M=u[p][S+1],_=u[p][S],D=u[p+1][S],w=u[p+1][S+1];(p!==0||a>0)&&d.push(M,_,w),(p!==i-1||l<Math.PI)&&d.push(_,D,w)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ar extends Ee{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const v=g/r*s,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class De extends Ji{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class J0 extends De{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const ss={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class j0{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Q0=new j0;class Hl{constructor(t){this.manager=t!==void 0?t:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ga extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tp extends Ga{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const la=new se,Xo=new L,qo=new L;class kl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xo),qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qo),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yo=new se,hr=new L,ca=new L;class ep extends kl{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),i.position.copy(hr),ca.copy(i.position),ca.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ca),i.updateMatrixWorld(),r.makeTranslation(-hr.x,-hr.y,-hr.z),Yo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class np extends Ga{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ep}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ip extends kl{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rp extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new ip}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sp extends Hl{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ss.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ss.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){r&&r(c),ss.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});ss.add(t,l),s.manager.itemStart(t)}}class ap{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);const ye=100,je=new Uint8Array(512);(()=>{let n=1337;const t=()=>(n=n*1664525+1013904223>>>0)/4294967296,e=Array.from({length:256},(i,r)=>r);for(let i=255;i>0;i--){const r=t()*(i+1)|0;[e[i],e[r]]=[e[r],e[i]]}for(let i=0;i<512;i++)je[i]=e[i&255]})();const ua=n=>n*n*n*(n*(n*6-15)+10),Jn=(n,t,e,i)=>{const r=n&8?e:t,s=n&4?(n&12)===12?t:i:e;return(n&1?-r:r)+(n&2?-s:s)};function Wl(n,t,e){const i=Math.floor(n),r=Math.floor(t),s=Math.floor(e);n-=i,t-=r,e-=s;const a=i&255,o=r&255,l=s&255,c=ua(n),u=ua(t),h=ua(e),f=je[a]+o,d=je[f]+l,g=je[f+1]+l,v=je[a+1]+o,m=je[v]+l,p=je[v+1]+l,S=(M,_,D)=>M+(_-M)*D;return S(S(S(Jn(je[d],n,t,e),Jn(je[m],n-1,t,e),c),S(Jn(je[g],n,t-1,e),Jn(je[p],n-1,t-1,e),c),u),S(S(Jn(je[d+1],n,t,e-1),Jn(je[m+1],n-1,t,e-1),c),S(Jn(je[g+1],n,t-1,e-1),Jn(je[p+1],n-1,t-1,e-1),c),u),h)*.5}function mn(n,t,e,i=5,r=2.03,s=.5){let a=1,o=1,l=0,c=0;for(let u=0;u<i;u++)l+=a*Wl(n*o,t*o,e*o),c+=a,a*=s,o*=r;return l/c}function Va(n,t,e,i=5){let r=1,s=1,a=0,o=0;for(let l=0;l<i;l++){const c=1-Math.abs(Wl(n*s,t*s,e*s)*2);a+=r*c*c,o+=r,r*=.5,s*=2.1}return a/o}const Nt=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)},Zt=(n,t,e)=>n+(t-n)*e,Te=(n,t,e)=>Math.min(e,Math.max(t,n));function Gn(n){let t=n>>>0;const e=()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,r)=>i+(r-i)*e(),e.pick=i=>i[e()*i.length|0],e}const ys=[];function Ta(n,t){const e=n*Math.PI/180,i=t*Math.PI/180;return new L(Math.cos(e)*Math.sin(i),Math.sin(e),Math.cos(e)*Math.cos(i))}function op({id:n,lat:t,lon:e,radius:i=15,blend:r=12,profile:s,heading:a=0}){const o=Ta(t,e);let l=new L(0,1,0).cross(o).normalize(),c=o.clone().cross(l).normalize();if(a){const h=new Sn().setFromAxisAngle(o,a);l.applyQuaternion(h),c.applyQuaternion(h)}const u={id:n,n:o,e:l,f:c.clone().negate(),radius:i,blend:r,profile:s,patchR:i+r*.6};return u.matrix=new se().makeBasis(u.e,u.n,u.f).setPosition(o.clone().multiplyScalar(ye)),ys.push(u),u}const lp=()=>ys;function cp(n,t,e){const i=n*.2059+t*.1392+e*.9686,r=mn(n*1.25+3.1,t*1.25-1.7,e*1.25+.4,5)+.05+Nt(.35,.9,i)*.24,s=Nt(-.03,.2,r),a=Va(n*3.1+7,t*3.1,e*3.1-2,5),o=Nt(.02,.26,mn(n*2.2-5,t*2.2+2,e*2.2,3)+r*.6),l=mn(n*9,t*9,e*9,4)*1.6,c=mn(n*40,t*40,e*40,3)*.35;return-2.2+s*(2.9+l+c*s+a*o*11)+(1-s)*(r*3)}const as=new L;function Xl(n,t,e,i,r){const s=t*n.n.x+e*n.n.y+i*n.n.z;if(s<=.2)return null;const a=ye/s;return r.x=(t*n.e.x+e*n.e.y+i*n.e.z)*a,r.z=(t*n.f.x+e*n.f.y+i*n.f.z)*a,r}const fr={x:0,z:0};function Rr(n,t,e){let i=cp(n,t,e);for(let r=0;r<ys.length;r++){const s=ys[r];if(!Xl(s,n,t,e,fr))continue;const a=Math.hypot(fr.x,fr.z);if(a>s.radius+s.blend)continue;const o=1-Nt(s.radius,s.radius+s.blend,a);i=Zt(i,s.profile(fr.x,fr.z,a),o)}return i}function Tn(n,t,e){return as.copy(n.n).multiplyScalar(ye).addScaledVector(n.e,t).addScaledVector(n.f,e).normalize(),Rr(as.x,as.y,as.z)}function Vi(n,t,e,i=new L){const r=1/Math.sqrt(n*n+ye*ye+t*t),s=ye+e;return i.set(n*r*s,ye*r*s-ye,t*r*s)}const Ko=new L,ha=new Sn,$o=new Sn,Jo=new L,up=new L,jo=new L(0,1,0);function Ss(n,t,e,i=0,r=1,s=0,a=new se,o){const l=o??Tn(n,t,e);return Vi(t,e,l+s,Jo),Ko.set(t,ye,e).normalize(),ha.setFromUnitVectors(jo,Ko),$o.setFromAxisAngle(jo,i),ha.multiply($o),a.compose(Jo,ha,up.set(r,r,r))}const hp=["rock","ground","dirt","plaster","wood","stone","blocks","slate","thatch","cobble","metal"],ln={},Le={low:!1},pi={uEmN:{value:[]}},Hi={uRipC:{value:null},uRip:{value:null}};async function fp(n,t){const e=new sp;e.setOptions({imageOrientation:"flipY"});const i=[];for(const s of hp)for(const a of["diff","nor","arm"])i.push([s,a]);let r=0;await Promise.all(i.map(([s,a])=>new Promise(o=>{e.load(`${n}assets/tex/${s}_${a}.webp`,l=>{const c=new Ze(l);c.wrapS=c.wrapT=1e3,c.colorSpace=a==="diff"?on:Bn,c.anisotropy=Le.low?2:8,c.generateMipmaps=!0,c.minFilter=1008,c.needsUpdate=!0,(ln[s]||(ln[s]={}))[a]=c,t?.(++r/i.length),o()},void 0,()=>{const l=new Ua(new Uint8Array(a==="nor"?[128,128,255,255]:[128,128,128,255]),1,1);l.needsUpdate=!0,(ln[s]||(ln[s]={}))[a]=l,t?.(++r/i.length),o()})})))}const ql=`
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
`,dp=`
varying vec3 vTriPos; varying vec3 vTriN; varying mat3 vNM;
#ifdef TRI_MIX
attribute vec3 aMix; varying vec3 vMix;
uniform vec3 uRipC; uniform vec4 uRip;   // centre (unit vector); x = radius, y = height, z = width, w = swell at the centre
#endif
uniform vec4 uEmN[7];   // how far each place has risen (also read by the forming land in morph.js)
`,pp=`
vTriPos = position; vTriN = objectNormal;
#ifdef TRI_MIX
  { vec3 ripW = normalize((modelMatrix * vec4(transformed, 1.0)).xyz); float ripD = acos(clamp(dot(ripW, uRipC), -1.0, 1.0)) * 100.0;
    float ripH = uRip.y * exp(-pow((ripD - uRip.x) / uRip.z, 2.0)) + uRip.w * exp(-pow(ripD / 9.0, 2.0));
    transformed += (ripW * mat3(modelMatrix)) * ripH; }
#else
${ql}
#endif
#ifdef USE_INSTANCING
  vNM = normalMatrix * mat3(instanceMatrix);
#else
  vNM = normalMatrix;
#endif
#ifdef TRI_MIX
  vMix = aMix;
#endif
`,mp=`
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
`,gp=`
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
`;function ke(n,{scale:t=1,tint:e=16777215,norm:i=1,metalness:r=0,roughness:s=1,mix:a=null,color:o=16777215,...l}={}){const c=new De({color:o,metalness:r,roughness:s,...l}),u={tD0:{value:ln[n].diff},tN0:{value:ln[n].nor},tA0:{value:ln[n].arm},uScale:{value:t},uTint:{value:new Lt(e)},uNorm:{value:i}};return u.uEmN=pi.uEmN,a&&Object.assign(u,{tD1:{value:ln[a.rock].diff},tN1:{value:ln[a.rock].nor},tD2:{value:ln[a.dirt].diff},tN2:{value:ln[a.dirt].nor},uRipC:Hi.uRipC,uRip:Hi.uRip,uTint1:{value:new Lt(a.tintRock)},uTint2:{value:new Lt(a.tintDirt)},uFar:{value:0},uFarScale:{value:a.farScale??.03}}),c.userData.U=u,c.defines={...a?{TRI_MIX:1}:{},...Le.low?{TRI_LOW:1}:{}},a&&(c.vertexColors=!0),c.onBeforeCompile=h=>{Object.assign(h.uniforms,u),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+dp).replace("#include <begin_vertex>",`#include <begin_vertex>
`+pp),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
`+mp).replace("#include <map_fragment>",gp).replace("#include <roughnessmap_fragment>","float roughnessFactor = clamp(roughness * gRough, 0.04, 1.0);").replace("#include <normal_fragment_maps>","normal = normalize(vNM * gTriN); if (!gl_FrontFacing) normal = -normal;")},c.customProgramCacheKey=()=>`tri-${n}-${a?"mix":"one"}-${Le.low}`,c}let fa=null;function _p(){if(fa)return fa;const n=new Ts({depthPacking:3201});return n.onBeforeCompile=t=>{t.uniforms.uEmN=pi.uEmN,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uEmN[7];`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+ql)},n.customProgramCacheKey=()=>"emdepth",fa=n}let os=null;function Yl(){if(os)return os;const n=(t,e)=>new De({color:1182212,emissive:t,emissiveIntensity:e,roughness:.6});return os={plaster:ke("plaster",{scale:.9,tint:12168084}),plasterDark:ke("plaster",{scale:.9,tint:8221800}),wood:ke("wood",{scale:1.6,tint:7034436}),woodDark:ke("wood",{scale:1.6,tint:3813160}),stone:ke("stone",{scale:.7,tint:10131087}),stoneDark:ke("stone",{scale:.7,tint:6118494}),blocks:ke("blocks",{scale:.55,tint:9276038}),blocksDark:ke("blocks",{scale:.55,tint:5065292}),slate:ke("slate",{scale:1.3,tint:7304320}),thatch:ke("thatch",{scale:1.1,tint:9075288}),cobble:ke("cobble",{scale:.8,tint:9143932}),iron:ke("metal",{scale:1.5,tint:3815478,metalness:.7,roughness:.9}),window:n(16754250,2.6),windowDim:n(16747066,.9),windowRed:n(16722458,2.4),windowCold:n(10470655,1.4),holy:n(16767370,1.5),blood:n(16718354,2.4),dark:n(9063935,2.4),black:new De({color:328965,roughness:1}),cloth:new De({color:4855058,roughness:.95,side:2}),bone:new De({color:12168596,roughness:.8})},os}function Zl(){return ke("ground",{scale:.42,tint:10725508,norm:1.3,mix:{rock:"rock",dirt:"dirt",tintRock:10987692,tintDirt:9271910,farScale:.045}})}function An(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Ee;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Qo(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][f]);const g=Qo(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Qo(n){let t,e,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Ie(a,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const v=u.getComponent(f,g);o.setComponent(f+h,g,v)}}else a.set(u.array,l);l+=u.count*e}return r!==void 0&&(o.gpuType=r),o}const Ce=n=>{const t=n.index?n.toNonIndexed():n;for(const e of Object.keys(t.attributes))e!=="position"&&e!=="normal"&&t.deleteAttribute(e);return t},jn=new se,ls=new se,cs=new yn,us=new Sn,hs=new L,fs=new L(1,1,1),tl=Ce(new ni(1,1,1)),da=new Map,vp=(n,t,e)=>{const i=`${n.toFixed(3)}_${t.toFixed(3)}_${e}`;return da.has(i)||da.set(i,Ce(new nn(n,t,1,e))),da.get(i)};function xp(){const n=new Bl;n.moveTo(-.5,0),n.lineTo(.5,0),n.lineTo(0,1),n.lineTo(-.5,0);const t=new za(n,{depth:1,bevelEnabled:!1});return t.translate(0,0,-.5),Ce(t)}const Mp=xp();class yp{constructor(t,e=1){this.a=t,this.parts=new Map,this.r=Gn(e),this.glows=[],this.smokes=[],this.lights=[],this.agents=[],this.inst=new Map,this.base=new se}at(t,e,i=0,r=1,s=0){return Ss(this.a,t,e,i,r,s,this.base),this.cx=t,this.cz=e,this.cyaw=i,this.cs=r,this}push(t,e,i){const r=e.clone();r.applyMatrix4(i);let s=this.parts.get(t);s||this.parts.set(t,s=[]),s.push(r)}box(t,e,i,r,s=0,a=0,o=0,l=0,c=0,u=0){return jn.compose(hs.set(s,a+(c||u?0:i/2),o),us.setFromEuler(cs.set(c,l,u,"YXZ")),fs.set(e,i,r)),this.push(t,tl,ls.multiplyMatrices(this.base,jn)),this}cyl(t,e,i,r,s=0,a=0,o=0,l=10,c=0,u=0){const h=i>0?e/i:0;return jn.compose(hs.set(s,a+(c||u?0:r/2),o),us.setFromEuler(cs.set(c,0,u)),fs.set(i||e,r,i||e)),this.push(t,vp(i>0?h:1,i>0?1:0,l),ls.multiplyMatrices(this.base,jn)),this}gable(t,e,i,r,s=0,a=0,o=0,l=0){return jn.compose(hs.set(s,a,o),us.setFromEuler(cs.set(0,l,0)),fs.set(e,i,r)),this.push(t,Mp,ls.multiplyMatrices(this.base,jn)),this}pt(t,e,i){return new L(t,e,i).applyMatrix4(this.base)}glow(t,e,i,r=16752704,s=1,a=0){return this.glows.push({p:this.pt(t,e,i),c:new Lt(r),size:s*(this.cs||1),kind:a}),this}smoke(t,e,i,r=1,s=.5){return this.smokes.push({p:this.pt(t,e,i),up:new L(this.cx,ye,this.cz).normalize(),size:r,dark:s}),this}mist(t,e,i=1){return this.at(t,e,0),this.smokes.push({p:this.pt(0,.3*i,0),up:new L(t,ye,e).normalize(),size:i,dark:2}),this}light(t,e,i,r=16748608,s=6,a=7){return this.lights.push({p:this.pt(t,e,i),color:r,intensity:s,dist:a}),this}roof(t,e,i,r,s,a=.14,o=.07){const l=e/2+a,c=Math.hypot(l,r*(l/(e/2))),u=Math.atan2(r,e/2);for(const h of[1,-1])jn.compose(hs.set(h*l/2,s+r*(l/(e/2))/2-a*r/(e/2),0),us.setFromEuler(cs.set(0,0,-h*u)),fs.set(c+.04,o,i+a*2)),this.push(t,tl,ls.multiplyMatrices(this.base,jn));return this}house(t,e,i,r={}){const s=this.r,a=r.m||{},o=r.w??s.range(1.5,2.1),l=r.d??s.range(1.9,2.8),c=r.storeys??(s()<.35?2:1),u=.78,h=u*c+.1,f=r.rh??o*s.range(.5,.72),d=a.wall||"plaster",g=a.frame||"woodDark",v=a.roof||"thatch",m=a.plinth||"stone",p=r.lit??.6,S=r.stoneWalls;this.at(t,e,i,r.scale??1),this.box(m,o+.1,.5,l+.1,0,-.34,0),this.box(S?m:d,o,h,l,0,.14,0);const M=.14,_=.075;if(!S){for(const y of[-1,1])for(const x of[-1,1])this.box(g,_,h,_,y*(o/2),M,x*(l/2));for(let y=0;y<=c;y++){const x=M+y*u+(y===c?.04:0);for(const C of[-1,1])this.box(g,o+_,_,_,0,x,C*(l/2));for(const C of[-1,1])this.box(g,_,_,l+_,C*(o/2),x,0)}const A=Math.round(l/.55),R=Math.round(o/.55);for(let y=1;y<A;y++)for(const x of[-1,1])this.box(g,_*.7,h,_*.8,x*(o/2+.005),M,-l/2+y*l/A);for(let y=1;y<R;y++)for(const x of[-1,1])this.box(g,_*.8,h,_*.7,-o/2+y*o/R,M,x*(l/2+.005));for(let y=0;y<c;y++)for(const x of[-1,1])for(const C of[-1,1])this.box(g,_*.6,.62,_*.7,x*(o/2+.008),M+y*u+u/2+.03,C*(l/2-.26),0,C*.72,0)}const D=M+h;if(this.gable(S?m:d,o,f,l,0,D,0),!S)for(const A of[-1,1]){this.box(g,_*.8,f*.92,_*.7,0,D,A*(l/2+.005));for(const R of[-1,1])this.box(g,_*.7,Math.hypot(o/2,f)*.98,_*.7,R*o/4,D+f/2,A*(l/2+.01),0,0,R*Math.atan2(o/2,f))}this.roof(v,o,l,f,D,v==="thatch"?.2:.14,v==="thatch"?.13:.06),this.box(g,.09,.09,l+.42,0,D+f+0,0),this.box("woodDark",.3,.5,.05,r.doorX??0,M,l/2+.02),this.box(g,.38,.05,.07,r.doorX??0,M+.5,l/2+.02);const w=(A,R,y,x)=>{const C=s()<p,z=C?"window":"black";x?(this.box(z,.03,.2,.17,A,R,y),this.box(g,.05,.03,.22,A,R-.03,y),this.box(g,.045,.2,.025,A,R,y)):(this.box(z,.17,.2,.03,A,R,y),this.box(g,.22,.03,.05,A,R-.03,y),this.box(g,.025,.2,.045,A,R,y)),C&&this.glow(A*1.06,R+.1,y*1.06,16751164,.55,1)};for(let A=0;A<c;A++){const R=M+A*u+.32;for(const y of[-1,1])for(let x=0;x<Math.max(1,Math.round(l/1.1));x++)w(y*(o/2+.012),R,(x+.5)*l/Math.max(1,Math.round(l/1.1))-l/2+s.range(-.1,.1),!0);w(A===0?(r.doorX??0)+.48*(o>1.5?1:0):0,R,l/2+.012,!1),w(0,R,-l/2-.012,!1)}if(f>.75&&w(0,D+.12,l/2+.012,!1),r.chimney??s()<.75){const A=o*.22*(s()<.5?1:-1),R=s.range(-l*.3,l*.3),y=f+.42;this.box("stone",.24,y+.5,.24,A,D-.5,R),this.box("stoneDark",.3,.06,.3,A,D+y,R),(r.smoke??s()<.8)&&this.smoke(A,D+y+.1,R,1,.5)}return(r.shed??s()<.3)&&(this.box("woodDark",o*.7,.55,.7,0,M-.1,-l/2-.35),this.box(v,o*.8,.05,.9,0,M+.5,-l/2-.38,0,-.35,0)),{w:o,d:l,h:D+f}}tower(t,e,i={}){const r=i.r??.7,s=i.h??3.2,a=i.mat||"stone",o=i.seg??12;if(this.at(t,e,i.yaw??0,i.scale??1),this.cyl(a,r*.94,r*1.08,s+.6,0,-.6,0,o),this.cyl(a,r*1.12,r*1,.16,0,s-.04,0,o),i.roof)this.cyl(i.roofMat||"slate",.02,r*1.25,i.roof,0,s+.3,0,o),this.cyl(a,r*.98,r*.98,.34,0,s+0,0,o);else for(let c=0;c<o;c+=1){const u=c/o*Math.PI*2;c%2===0&&this.box(a,r*.42,.26,.12,Math.cos(u)*r*1.02,s+.1,Math.sin(u)*r*1.02,-u+Math.PI/2)}const l=Math.max(1,Math.floor(s/1.1));for(let c=0;c<l;c++){const u=(i.yaw??0)+c*2.1+(i.winA??.6),h=.9+c*1.05,f=this.r()<(i.lit??.5);this.box(f?i.winMat||"window":"black",.1,.26,.06,Math.cos(u)*r*.99,h,Math.sin(u)*r*.99,-u+Math.PI/2),f&&this.glow(Math.cos(u)*r*1.05,h+.13,Math.sin(u)*r*1.05,i.glow??16751164,.5,1)}return this}wall(t,e={}){const i=e.h??1.5,r=e.th??.34,s=e.mat||"stone";for(let a=0;a<t.length-1;a++){const[o,l]=t[a],[c,u]=t[a+1],h=Math.hypot(c-o,u-l),f=Math.max(1,Math.round(h/1.1)),d=Math.atan2(-(u-l),c-o);for(let g=0;g<f;g++){const v=(g+.5)/f,m=h/f;if(this.at(Zt(o,c,v),Zt(l,u,v),d),e.ruin&&this.r()<e.ruin){this.box(s,m+.02,i*this.r.range(.2,.7)+.6,r,0,-.6,0);continue}if(this.box(s,m+.02,i+.6,r,0,-.6,0),this.box(s,m+.02,.08,r+.14,0,i,0),!e.plain)for(let p=0;p<3;p++)this.box(s,m/5,.2,.1,(p-1)*m/3,i+.08,r/2+.02)}}return this}palisade(t,e=.75){for(let i=0;i<t.length-1;i++){const[r,s]=t[i],[a,o]=t[i+1],l=Math.hypot(a-r,o-s),c=Math.round(l/.13);for(let u=0;u<c;u++){const h=u/c;this.at(Zt(r,a,h)+this.r.range(-.02,.02),Zt(s,o,h)+this.r.range(-.02,.02),this.r()*3);const f=e*this.r.range(.85,1.12);this.cyl("woodDark",.03,.055,f+.2,0,-.2,0,5),this.cyl("woodDark",0,.03,.1,0,f,0,5)}}return this}fence(t){for(let e=0;e<t.length-1;e++){const[i,r]=t[e],[s,a]=t[e+1],o=Math.hypot(s-i,a-r),l=Math.max(1,Math.round(o/.5)),c=Math.atan2(-(a-r),s-i);for(let u=0;u<=l;u++){const h=u/l;this.at(Zt(i,s,h),Zt(r,a,h),c),this.box("woodDark",.04,.34,.04,0,-.06,0,0,0,this.r.range(-.12,.12)),u<l&&(this.at(Zt(i,s,h+.5/l),Zt(r,a,h+.5/l),c),this.box("wood",o/l,.03,.02,0,.12,0),this.box("wood",o/l,.03,.02,0,.22,0,0,0,this.r.range(-.05,.05)))}}return this}gallows(t,e,i){this.at(t,e,i),this.box("wood",1.5,.08,1.1,0,.42,0);for(const r of[-1,1])for(const s of[-1,1])this.box("woodDark",.08,.6,.08,r*.68,-.14,s*.48);for(let r=0;r<4;r++)this.box("wood",.3,.035,.5,.92+r*.13,.36-r*.1,.2);for(const r of[-1,1])this.box("woodDark",.09,1.25,.09,r*.6,.5,-.35);this.box("woodDark",1.5,.09,.09,0,1.72,-.35);for(const r of[-1,1])this.box("woodDark",.05,.42,.05,r*.47,1.56,-.35,0,0,r*.8);for(const r of[-.26,.22])this.box("black",.012,.34,.012,r,1.38,-.35),this.cyl("black",.045,.045,.012,r,1.3,-.35,8,Math.PI/2);return this}cart(t,e,i){this.at(t,e,i),this.box("wood",.75,.05,.42,0,.2,0);for(const r of[-1,1])this.box("woodDark",.75,.14,.03,0,.24,r*.21);this.box("woodDark",.03,.14,.42,-.37,.24,0);for(const r of[-1,1])this.cyl("woodDark",.15,.15,.04,-.05,.16,r*.26,12,Math.PI/2),this.box("wood",.5,.03,.03,.62,.2,r*.15,0,0,-.18);return this.box("wood",.2,.16,.2,-.15,.25,0),this.cyl("woodDark",.09,.09,.2,.15,.25,.05,8),this}well(t,e){this.at(t,e,this.r()*3),this.cyl("stone",.26,.28,.3,0,-.04,0,12),this.cyl("black",.2,.2,.02,0,.255,0,12);for(const i of[-1,1])this.box("woodDark",.05,.6,.05,i*.24,.2,0);return this.box("woodDark",.6,.04,.04,0,.72,0),this.roof("wood",.5,.42,.18,.78,.06,.03),this}stall(t,e,i,r="cloth"){this.at(t,e,i);for(const s of[-1,1])for(const a of[-1,1])this.box("woodDark",.04,.62,.04,s*.36,0,a*.24);this.box("wood",.8,.04,.5,0,.26,0),this.box(r,.92,.02,.66,0,.64,0,0,.22,0);for(let s=0;s<3;s++)this.box("wood",.12,.1,.12,-.24+s*.22,.3,.05);return this}torch(t,e,i=.55,r=16747056,s=!1){return this.at(t,e,0),this.cyl("woodDark",.018,.024,i,0,0,0,5),this.cyl("iron",.04,.025,.05,0,i,0,6),this.glow(0,i+.09,0,r,.75,2),s&&this.light(0,i+.2,0,r,5,6),this}crate(t,e,i=.2){return this.at(t,e,this.r()*3),this.box("wood",i,i,i,0,0,0),this}barrel(t,e){return this.at(t,e,0),this.cyl("wood",.085,.085,.24,0,0,0,8),this.cyl("iron",.09,.09,.02,0,.17,0,8),this}grave(t,e,i){this.at(t,e,i+this.r.range(-.2,.2));const r=this.r.range(.22,.42);return this.r()<.35?(this.box("blocksDark",.05,r+.2,.04,0,-.1,0,0,0,this.r.range(-.15,.15)),this.box("blocksDark",.2,.05,.04,0,r*.7,0)):this.box("blocksDark",.2,r+.1,.06,0,-.1,0,0,this.r.range(-.12,.12),this.r.range(-.1,.1)),this}column(t,e,i=1.6,r=!1,s="blocks",a=.13){this.at(t,e,this.r()*3),this.box(s,a*3,.12,a*3,0,-.03,0);const o=r?i*this.r.range(.25,.7):i;return this.cyl(s,a*.9,a,o,0,.08,0,10),r||this.box(s,a*3,.1,a*3,0,o+.08,0),this}arch(t,e,i,r=1.2,s=1.5,a="blocks",o=.3,l=0){this.at(t,e,i,1,l);for(const u of[-1,1])this.box(a,o,s+.4,o,u*r/2,-.4,0);const c=7;for(let u=0;u<c;u++){const h=Math.PI*(u+.5)/c;this.box(a,o*.9,r*1.65/c,o,Math.cos(h)*r/2,s+Math.sin(h)*r/2,0,0,0,h-Math.PI/2+Math.PI/2*0)}return this}bridge(t,e,i,r=2.4,s=.7){this.at(t,e,i,1,0);const a=9;for(let o=0;o<a;o++){const l=(o+.5)/a-.5,c=Math.cos(l*Math.PI)*.38;this.box("stone",r/a+.03,.9,s,l*r,c-.82,0);for(const u of[-1,1])this.box("stoneDark",r/a+.03,.14,.07,l*r,c+.06,u*(s/2-.03))}return this}banner(t,e,i,r=1.3,s="cloth"){return this.at(t,e,i),this.cyl("woodDark",.02,.028,r,0,0,0,5),this.box(s,.3,.55,.012,.17,r-.6,0),this}relief(t,e,i,r){this.at(t,e,i);const s={holy:16768922,blood:16722460,dark:10116351}[r];this.box("blocksDark",.5,.74,.07,0,0,0,0,-.14,0),this.box("iron",.56,.05,.1,0,0,0);for(let a=0;a<3;a++)for(let o=0;o<4;o++)this.r()<.8&&this.box(r,this.r.range(.03,.09),.025,.02,-.15+a*.15,.13+o*.14,.045-(.13+o*.14)*.14,0,-.14,this.r.range(-.6,.6));return this.glow(0,.4,.12,s,.8,3),this.light(0,.6,.3,s,6,5.5),this}instance(t,e,i,r=0,s=1,a=0,o){let l=this.inst.get(t);return l||this.inst.set(t,l=[]),el[t]&&this.blocked(e,i,el[t]*s)?this:(l.push({m:Ss(this.a,e,i,r,s,a,new se),color:o}),this)}blocked(t,e,i){for(const r of this.sight||[]){const s=r[2]-r[0],a=r[3]-r[1],o=Te(((t-r[0])*s+(e-r[1])*a)/(s*s+a*a+1e-6),0,1);if(Math.hypot(t-r[0]-s*o,e-r[1]-a*o)<Zt(1.5,.35,o)*i)return!0}return!1}agent(t){return this.agents.push(t),this}bird(t){return(this.birds||(this.birds=[])).push(t),this}build(){const t=new be,e=Yl();for(const[i,r]of this.parts){const s=new $t(An(r),e[i]),a=!!e[i].emissive&&e[i].emissiveIntensity>.5;s.castShadow=!a,s.receiveShadow=!a,t.add(s);for(const o of r)o.dispose()}for(const[i,r]of this.inst){const s=Sp[i](),a=new As(s.geo,s.mat,r.length);r.forEach((o,l)=>{a.setMatrixAt(l,o.m),s.tint&&a.setColorAt(l,o.color||Kl.setHSL(s.tint[0]+this.r.range(-.03,.03),s.tint[1]*this.r.range(.6,1.1),s.tint[2]*this.r.range(.6,1.25)))}),a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,t.add(a)}return t.userData.fx=bp(this.glows,this.smokes),t.userData.fx&&t.add(t.userData.fx.group),t.userData.lights=this.lights,t.userData.agents=Ip(this.a,this.agents),t.userData.agents&&t.add(t.userData.agents.mesh),t.userData.birds=Up(this.a,this.birds||[]),t.userData.birds&&t.add(t.userData.birds.mesh),t}}const Kl=new Lt,el={pine:1,dead:.9,broadleaf:1.1,spire:1.1},Xi={},On=(n,t)=>()=>Xi[n]||(Xi[n]=t());function Ni(n,t,e=0,i=1){const r=n.attributes.position.count,s=new Float32Array(r*3),a=n.attributes.position;for(let o=0;o<r;o++){const l=1+(e?mn(a.getX(o)*3+i,a.getY(o)*3,a.getZ(o)*3,2)*e:0),c=t.shade?Te(.55+a.getY(o)*t.shade,.4,1.25):1;s[o*3]=t.r*l*c,s[o*3+1]=t.g*l*c,s[o*3+2]=t.b*l*c}return n.setAttribute("color",new Ie(s,3)),n}function ds(n,t,e,i,r=1,s=!1){const a=n.attributes.position,o=n.attributes.normal;for(let l=0;l<a.count;l++){const c=a.getX(l),u=a.getY(l),h=a.getZ(l),f=1+mn(c*e+i,u*e,h*e,3)*t;s&&o.setXYZ(l,c,u+.15,h),a.setXYZ(l,c*f,u*f*r,h*f)}return s?n.normalizeNormals():n.computeVertexNormals(),n}const dr=On("fm",()=>new De({vertexColors:!0,roughness:.95,flatShading:!1})),nl={r:.16,g:.13,b:.11},Sp={pine:On("pine",()=>{const n=Gn(5),t=[],e=Ce(new nn(.035,.085,1.2,6));e.translate(0,.6,0),t.push(Ni(e,nl));const i=Le.low?5:9;for(let s=0;s<i;s++){const a=s/(i-1),o=Zt(.7,.1,a)*n.range(.85,1.15),l=Zt(.8,.5,a);let c=Ce(new pn(o,l,16,3,!0));const u=c.attributes.position,h=new Float32Array(u.count*3),f=n()*6;for(let d=0;d<u.count;d++){let g=u.getX(d),v=u.getY(d),m=u.getZ(d);const p=Math.atan2(m,g),S=Math.hypot(g,m)/o,M=1+(.34*Math.sin(p*7+f)+mn(g*5+f,v*5,m*5,2)*.9)*S;g*=M,m*=M,v-=S*S*.22*(1+Math.sin(p*7+f)*.5),u.setXYZ(d,g,v,m);const _=.35+S*.75;h[d*3]=.035*_,h[d*3+1]=.06*_,h[d*3+2]=.043*_}c.setAttribute("color",new Ie(h,3)),c.translate(n.range(-.03,.03),.65+a*2.35+l/2-.2,n.range(-.03,.03)),t.push(c)}const r=An(t);return r.computeVertexNormals(),{geo:r,mat:dr(),tint:[.36,.2,.62]}}),broadleaf:On("bl",()=>{const n=Gn(9),t=[],e=Ce(new nn(.05,.1,1,6));e.translate(0,.5,0),t.push(Ni(e,nl));for(let r=0;r<7;r++){let s=new Wi(n.range(.34,.6),3);s=Ce(ds(s,.7,2.6,n()*90,.8,!0)),s.translate(n.range(-.5,.5),n.range(1,1.75),n.range(-.5,.5)),t.push(Ni(s,{r:.034,g:.045,b:.026,shade:.5},1.8,r*3))}return{geo:An(t),mat:dr(),tint:[.25,.22,.6]}}),dead:On("dead",()=>{const n=Gn(21),t=[],e=(r,s,a,o,l)=>{const c=Ce(new nn(o*.55,o,a,5));c.translate(0,a/2,0);const u=new Sn().setFromUnitVectors(new L(0,1,0),s);if(c.applyQuaternion(u),c.translate(r.x,r.y,r.z),t.push(c),l<=0)return;const h=r.clone().addScaledVector(s,a),f=l>2?3:2;for(let d=0;d<f;d++){const g=s.clone().add(new L(n.range(-1,1),n.range(-.1,.9),n.range(-1,1)).multiplyScalar(.85)).normalize();e(h,g,a*n.range(.55,.8),o*.58,l-1)}};e(new L(0,-.1,0),new L(.08,1,.04).normalize(),.95,.09,4);const i=Ni(An(t),{r:.13,g:.115,b:.11});return i.computeVertexNormals(),{geo:i,mat:dr(),tint:[.07,.1,.5]}}),bush:On("bush",()=>{let n=new Wi(.3,3);return n=Ce(ds(n,.8,3.2,4,.7,!0)),n.translate(0,.12,0),{geo:Ni(n,{r:.03,g:.04,b:.024},1.8),mat:dr(),tint:[.24,.2,.6]}}),tuft:On("tuft",()=>{const n=Gn(31),t=[];for(let e=0;e<7;e++){const i=Ce(new pn(.012,n.range(.09,.2),3));i.translate(0,.07,0),i.rotateZ(n.range(-.5,.5)),i.rotateX(n.range(-.5,.5)),i.translate(n.range(-.06,.06),0,n.range(-.06,.06)),t.push(i)}return{geo:Ni(An(t),{r:.07,g:.085,b:.045,shade:2.5},.5),mat:dr(),tint:[.2,.3,.55]}}),rock:On("rock",()=>{let n=new Wi(.4,2);return n=Ce(ds(n,.9,1.7,12,.75)),n.translate(0,.08,0),{geo:n,mat:ke("rock",{scale:.9,tint:9211282})}}),spire:On("spire",()=>{let n=new pn(.5,2.4,7,6);return n=Ce(ds(n,.9,1.5,3)),n.translate(0,.9,0),{geo:n,mat:ke("rock",{scale:.55,tint:7829630})}}),bones:On("bones",()=>{const n=Gn(3),t=[];for(let e=0;e<9;e++){const i=Ce(new nn(.012,.012,n.range(.12,.22),4));i.rotateZ(Math.PI/2+n.range(-.4,.4)),i.rotateY(n()*6),i.translate(n.range(-.15,.15),.02+n()*.05,n.range(-.15,.15)),t.push(i)}for(let e=0;e<3;e++){const i=Ce(new qe(.04,7,5));i.translate(n.range(-.14,.14),.05,n.range(-.14,.14)),t.push(i)}return{geo:An(t),mat:Yl().bone}})};function bp(n,t){if(!n.length&&!t.length)return null;const e=new be,i={uTime:{value:0},uPx:{value:1},uGain:{value:1}};if(n.length){const r=[],s=[],a=[];for(const u of n)r.push(u.p.x,u.p.y,u.p.z),s.push(u.c.r,u.c.g,u.c.b),a.push(u.size,u.kind,Math.random()*100);const o=new Ee;o.setAttribute("position",new re(r,3)),o.setAttribute("color",new re(s,3)),o.setAttribute("aPar",new re(a,3));const l=new Oe({transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,uniforms:i,vertexShader:`attribute vec3 aPar; uniform float uTime; uniform float uPx; varying vec3 vC; varying float vK; varying float vI;
        void main(){ vC = color; vK = aPar.y; float t = uTime + aPar.z;
          float fl = 0.78 + 0.22 * sin(t * 9.0) * sin(t * 5.3 + 1.7);            // flame flicker
          vI = aPar.y < 1.5 ? (aPar.y < 0.5 ? 1.0 : 0.85 + 0.15 * sin(t * 2.0)) : (aPar.y < 2.5 ? fl : 0.8 + 0.2 * sin(t * 1.3));
          vec3 p = position; if (aPar.y > 3.5) { float l = fract(t * 0.07); p += vec3(sin(t * 0.6 + aPar.z) * 0.25, l * 2.6, cos(t * 0.5 + aPar.z * 1.3) * 0.25); vI *= sin(l * 3.14159); }
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aPar.x * uPx * 300.0 / -mv.z, 0.0, 220.0); }`,fragmentShader:`varying vec3 vC; varying float vK; varying float vI; uniform float uGain;
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float core = smoothstep(0.32, 0.0, d); float halo = pow(max(0.0, 1.0 - d), 2.6);
          float a = vK < 1.5 ? halo * 0.5 + core * 0.4 : (vK > 3.5 ? core * 1.6 : halo * 0.55 + core * 1.3);
          gl_FragColor = vec4(vC * a * vI * uGain, 1.0); }`}),c=new Ms(o,l);c.frustumCulled=!1,e.add(c)}if(t.length){const r=Le.low?5:9,s=[],a=[],o=[];for(const h of t)for(let f=0;f<r;f++)s.push(h.p.x,h.p.y,h.p.z),a.push(h.up.x,h.up.y,h.up.z),o.push(h.size,f/r+Math.random()*.05,h.dark,Math.random()*6.28);const l=new Ee;l.setAttribute("position",new re(s,3)),l.setAttribute("aUp",new re(a,3)),l.setAttribute("aPar",new re(o,4));const c=new Oe({transparent:!0,depthWrite:!1,uniforms:{...i,uCol:{value:new Lt(9277334)}},vertexShader:`attribute vec3 aUp; attribute vec4 aPar; uniform float uTime; uniform float uPx; varying float vA; varying float vD;
        void main(){ float l = fract(uTime * 0.085 + aPar.y);
          vec3 side = normalize(cross(aUp, vec3(0.3, 0.1, 0.9)));
          float mist = step(1.5, aPar.z); l = mix(l, fract(uTime * 0.012 + aPar.y), mist); vD = mix(aPar.z, 0.85, mist);
          vec3 p = position + aUp * (l * 2.6 * aPar.x) + side * (l * l * 1.3 + sin(l * 7.0 + aPar.w) * 0.09) * aPar.x;
          p = mix(p, position + side * (l - 0.5) * 5.0 * aPar.x + aUp * sin(aPar.w + l * 6.28) * 0.12, mist);
          vA = mix(smoothstep(0.0, 0.12, l) * (1.0 - l) * 0.5, sin(l * 3.14159) * 0.075, mist);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(mix(0.25 + l * 1.3, 2.6, mist) * aPar.x * uPx * 600.0 / -mv.z, 0.0, 420.0); }`,fragmentShader:`varying float vA; varying float vD; uniform vec3 uCol;
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 1.6) * vA; gl_FragColor = vec4(uCol * vD, a); }`}),u=new Ms(l,c);u.frustumCulled=!1,u.renderOrder=5,e.add(u)}return{group:e,U:i}}const ui=[.62,.42,.32],il=[.055,.04,.03],Ep=[.12,.07,.035],rl=[.42,.46,.5],sl=[.2,.12,.065],al=[.82,.79,.72],ol=[.42,.31,.09],Aa=.178,pa=.292,ll=.154,wp=new L(0,1,0),Tp=new L,Fi=new L,ma=new L,cl=new Sn;function Ap(n,t,e=0,i=0,r=Aa){const s=n.attributes.position.count,a=new Float32Array(s*3),o=new Float32Array(s*4);for(let l=0;l<s;l++)a[l*3]=t[0],a[l*3+1]=t[1],a[l*3+2]=t[2],o[l*4]=i,o[l*4+1]=r,o[l*4+2]=e;return n.setAttribute("color",new Ie(a,3)),n.setAttribute("aLimb",new Ie(o,4)),n}function fn(n,t,e={}){const i=Ce(new Pr(n.map(r=>new ft(r[0],r[1])),t,e.p0??0,e.pl??Math.PI*2));return i.scale(e.sx??1,1,e.sz??1),i.translate(0,0,e.z??0),i}function Qn(n,t,e,i,r,s={}){Fi.set(...n),ma.set(...t);const a=Fi.distanceTo(ma),o=[new ft(1e-4,-e)];s.round&&o.push(new ft(e*.82,-e*.55)),o.push(new ft(e,0)),s.rm&&o.push(new ft(s.rm,a*(s.at??.5))),o.push(new ft(i,a),new ft(1e-4,a+i));const l=Ce(new Pr(o,r));return cl.setFromUnitVectors(wp,Tp.copy(ma).sub(Fi).normalize()),l.applyQuaternion(cl),l.translate(Fi.x,Fi.y,Fi.z),l}function pr(n,t,e,i,r,s,a,o,l,c){const u=Ce(new qe(n,o,l,0,Math.PI*2,0,c??Math.PI));return u.scale(t,e,i),u.translate(r,s,a),u}const ul=(n,t={})=>fn(t.pts||[[.058,.283],[.044,.312],[.033,.345],[.016,.37],[.001,.376]],n,{sx:.97,z:-.005,p0:t.open??.62,pl:Math.PI*2-2*(t.open??.62)}),Rp={villagerA:{body:[[.057,.108],[.052,.16],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,hair:!0,hairT:.5,bare:!0,hose:[.3,.27,.22],hoseT:.5,tunicCol:[1,1,1]},villagerB:{body:[[.058,.11],[.053,.165],[.044,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,hood:[.85,.85,.85],bare:!0,hose:[.25,.22,.18],hoseT:.4,tunicCol:[1,1,1]},guard:{body:[[.059,.088],[.054,.14],[.0445,.2],[.052,.255],[.052,.287],[.022,.304]],belt:!0,helm:!0,spear:!0,hose:[.38,.38,.4],hoseT:.2,tunicCol:[1,1,1],sleeve:[.6,.55,.46],sleeveT:.35,sw:1.12},nun:{long:!0,body:[[.058,.003],[.053,.08],[.043,.17],[.042,.21],[.05,.26],[.05,.288],[.03,.3]],fold:!0,nun:!0,tunicCol:[1,1,1]},cult:{long:!0,body:[[.066,.003],[.06,.08],[.047,.17],[.045,.215],[.051,.262],[.051,.288],[.03,.3]],cult:!0,cord:!0,hood:[.8,.8,.8],hoodPeak:!0,faceDark:!0,tunicCol:[1,1,1],sw:1.3,sleeveCuff:!0},hiddenA:{body:[[.056,.112],[.051,.165],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,cloak:[.62,.62,.62],hood:[.62,.62,.62],hose:[.3,.27,.2],hoseT:.3,tunicCol:[1,1,1]},hiddenB:{body:[[.056,.112],[.051,.165],[.0435,.205],[.049,.255],[.049,.287],[.02,.304]],belt:!0,cloak:[.7,.7,.7],hair:!0,hairT:.3,bow:!0,hose:[.3,.27,.2],hoseT:.3,tunicCol:[1,1,1]},noble:{long:!1,body:[[.064,.05],[.058,.11],[.0455,.19],[.0445,.205],[.051,.255],[.051,.287],[.021,.304]],sash:!0,cloak:[.8,.8,.8],hair:!0,hairT:.2,cap:!0,hose:[.75,.7,.6],hoseT:.6,tunicCol:[1,1,1],sleeve:[.9,.9,.9],sleeveT:.8}};function Cp(n){const t=Rp[n],e=Le.low?4:5,i=Le.low?6:7,r=Le.low?[6,3]:[8,4],s=[],a=(g,v,m=0,p=0,S=Aa)=>s.push(Ap(g,v,m,p,S)),o=t.sw??1,l=t.sleeve||t.tunicCol,c=t.sleeveT??1,u={sx:1.12,sz:.78};for(const g of[1,-1]){const v=g>0?1:2,m=g>0?.014:-.01;if(t.long){const p=g>0?.012:-.008;a(Qn([g*.026,.0105,p-.004],[g*.029,.0105,p+.02],.0105,.009,4),il,0,v,.07);continue}a(Qn([g*.024,Aa,0],[g*.026,.027,m],.025,.011,e,{rm:.0165,at:.62}),t.hose,t.hoseT,v),a(Qn([g*.026,.0105,m-.007],[g*.03,.0105,m+.022],.0105,.009,Math.max(4,e-1)),il,0,v)}a(fn(t.body,i,u),t.tunicCol,1),t.belt&&a(fn([[.0475,.191],[.0475,.211]],i,u),Ep,0),t.sash&&a(fn([[.0475,.192],[.0475,.212]],i,u),ol,0),t.cord&&a(fn([[.0475,.2],[.0475,.212]],i,u),[.5,.42,.28],0),t.trim&&a(fn([[.0645,.05],[.0625,.066]],i,u),ol,0);const h=t.nun?t.tunicCol:l,f=t.nun?1:c,d=(g,v,m,p,S,M)=>{a(Qn(m,p,.0175*o,.0145*o,e,{round:!0}),h,f,v,pa),a(Qn(p,S,.0145*o,(t.cult?.0125:.0105)*o,e),M?ui:h,M?.1:f,v,pa),a(pr(.0105,1,1.05,1,S[0],S[1]-.011,S[2]+.004,5,3),ui,.1,v,pa)};if(t.nun){for(const g of[1,-1])a(Qn([g*.052,.287,0],[g*.012,.222,.046],.0175,.0125,e,{round:!0}),h,1,0);a(pr(.011,1.5,1,1,0,.212,.054,5,4),ui,.1)}else d(1,3,[.052,.287,0],[.062,.234,.005],[.061,.187,.02],t.bare),t.spear?(a(Qn([-.052,.287,0],[-.064,.238,.012],.0175*o,.0145*o,e,{round:!0}),h,f,0),a(Qn([-.064,.238,.012],[-.063,.205,.036],.0145*o,.0105*o,e),h,f,0),a(pr(.0115,1,1,1,-.063,.2,.036,5,4),ui,.1),a(Ce(new nn(.0045,.0045,.5,4,1,!0)).translate(-.063,.25,.036),sl,0),a(Ce(new pn(.0105,.055,4)).translate(-.063,.5275,.036),rl,0)):d(-1,4,[-.052,.287,0],[-.06,.236,-.003],[-.062,.19,.012],t.bare);if(a(Ce(new nn(.0115,.0125,.03,6,1,!0)).translate(0,.312,.001),ui,.1),a(pr(.0235,.88,1.12,1,0,.338,.002,r[0],r[1]),t.faceDark?[.035,.028,.024]:ui,t.faceDark?0:.12),t.faceDark||a(Ce(new pn(.0042,.0085,3,1,!0)).rotateX(Math.PI/2).translate(0,.336,.026),ui,.12),t.hair){const g=pr(.0255,.9,1.12,1.04,0,0,0,7,3,1.95);g.rotateX(-.38),g.translate(0,.34,-.004),a(g,[.3,.24,.18],.5+(t.hairT||0),0)}if(t.hood&&a(ul(i,t.hoodPeak?{pts:[[.062,.28],[.048,.312],[.034,.345],[.016,.375],[.0015,.392]],open:.7}:{}),t.hood,1),t.helm&&(a(fn([[.0455,.325],[.0305,.333],[.0285,.35],[.018,.368],[.001,.374]],i),rl,0),a(fn([[.0305,.29],[.027,.327]],i,{p0:0,pl:Math.PI*2}),[.3,.32,.34],0)),t.cap&&a(fn([[.033,.353],[.027,.364],[.001,.368]],i),[1.1,1.1,1.1],.9),t.nun&&(a(fn([[.052,.268],[.047,.29],[.03,.306],[.028,.318]],i),al,0),a(fn([[.0305,.316],[.0295,.34],[.0275,.358]],i,{p0:.75,pl:Math.PI*2-1.5}),al,0),a(ul(i,{pts:[[.056,.22],[.048,.29],[.034,.336],[.017,.372],[.001,.379]],open:.9}),t.tunicCol,1)),t.cloak&&a(fn([[.06,.305],[.067,.18],[.075,.05]],i,{sz:.95,z:-.004,p0:.7,pl:Math.PI*2-1.4}),t.cloak,1),t.bow){const g=Ce(new Ar(.13,.0028,3,7,1.85));g.rotateZ(-.925),g.rotateY(Math.PI/2),g.translate(0,.23,.072),a(g,sl,0)}return An(s)}const Pp=n=>{var t;return Xi[t="fig_"+n]||(Xi[t]=Cp(n))},hl={villager:[8019004,9075282,5660735,9404520,7094062,7235674],guard:[4872826,6119784,4017516,6712178],nun:[1381658,1907488],cult:[6951952,4853004,1839120,5904916],hidden:[4873788,5922888,6969916,4018742],noble:[6958936,3428490,9071148,8007728]},Dp={stand:0,kneel:1,armsUp:2,talk:3},$l={uFigTime:{value:0}},Lp=`
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
vec3 figRotN(vec3 n, vec4 L, vec4 I) { float a = figAng(L.x, I), c = cos(a), s = sin(a); return L.x > 0.5 ? vec3(n.x, n.y * c - n.z * s, n.y * s + n.z * c) : n; }`;function fl(n,t,e){n.uniforms.uFigTime=$l.uFigTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
`+Lp).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed = figPos(transformed, aLimb, aInst);`),t&&(n.vertexShader=n.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 objectNormal = figRotN(objectNormal, aLimb, aInst);`)),e&&(n.vertexShader=n.vertexShader.replace("#include <color_vertex>",`#if defined( USE_COLOR ) && defined( USE_INSTANCING_COLOR )
 vColor = color.rgb * mix( vec3( 1.0 ), instanceColor.rgb, aLimb.z );
 #endif`))}const dl=(n,t,e)=>{const i=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return i-Math.floor(i)};function Ip(n,t){if(!t.length)return null;const e={},i={villager:1,guard:2,nun:3,cult:4,hidden:5,noble:6};t.forEach((h,f)=>{const d=i[h.kind]?h.kind:"villager",g=(f+(h.seed||0))%2===1,v=d==="villager"?g?"villagerB":"villagerA":d==="hidden"?g?"hiddenB":"hiddenA":d;(e[v]||(e[v]=[])).push(h),h._fk=d,h._fn=f});const r=new be,s=[],a=new De({vertexColors:!0,roughness:.9});a.onBeforeCompile=h=>fl(h,!0,!0),a.customProgramCacheKey=()=>"figmat";const o=new Ts({depthPacking:3201});o.onBeforeCompile=h=>fl(h,!1,!1),o.customProgramCacheKey=()=>"figdepth";for(const[h,f]of Object.entries(e)){const d=Pp(h).clone(),g=new Float32Array(f.length*4),v=new As(d,a,f.length);v.castShadow=!0,v.frustumCulled=!1,v.customDepthMaterial=o,f.forEach((m,p)=>{const S=hl[m._fk]||hl.villager;v.setColorAt(p,Kl.setHex(m.color??S[(p*7+(m.seed||0))%S.length])),m.len=[0];for(let D=1;D<m.path.length;D++)m.len.push(m.len[D-1]+Math.hypot(m.path[D][0]-m.path[D-1][0],m.path[D][1]-m.path[D-1][1]));m.total=m.len[m.len.length-1],m.phase??(m.phase=Math.random()*100),m.speed??(m.speed=.16);const M=dl(m._fn,m.seed||0,i[m._fk]),_=dl(m._fn+3,m.seed||0,5);m.bw=(M<.33?.9:M<.66?1:1.13)+(_-.5)*.06,m.bh=(M<.33?1.05:M<.66?1:.96)+(_-.5)*.05,m.walk=m.total>.01?Te(m.speed/.12,.35,1):0,m.rate=Te(Math.PI*m.speed/(2*ll*Math.sin(.5*Math.max(m.walk,.35)))*1.25,1.8,8),m.ph=m.phase*2.399%6.2832,g.set([m.ph,m.walk,Dp[m.pose]??0,m.rate],p*4)}),d.setAttribute("aInst",new ya(g,4)),r.add(v),s.push({im:v,arr:f})}const l=new se,c=new se,u=h=>{$l.uFigTime.value=h;for(const{im:f,arr:d}of s)d.forEach((g,v)=>{let m=g.path[0][0],p=g.path[0][1],S=g.yaw??0,M=0;if(g.total>.01){let _=(h*g.speed+g.phase)%(g.loop?g.total:g.total*2),D=1;!g.loop&&_>g.total&&(_=g.total*2-_,D=-1);let w=1;for(;w<g.len.length-1&&g.len[w]<_;)w++;const A=(_-g.len[w-1])/Math.max(1e-5,g.len[w]-g.len[w-1]);m=Zt(g.path[w-1][0],g.path[w][0],A),p=Zt(g.path[w-1][1],g.path[w][1],A),S=Math.atan2((g.path[w][0]-g.path[w-1][0])*D,(g.path[w][1]-g.path[w-1][1])*D),M=-ll*g.bh*(1-Math.cos(.5*g.walk*Math.sin(h*g.rate+g.ph)))*(g.scale??1)}else S+=Math.sin(h*.7+g.phase)*.25;Ss(n,m,p,S,g.scale??1,M+(g.lift??0),l,g.h),l.multiply(c.makeScale(g.bw,g.bh,g.bw)),f.setMatrixAt(v,l)}),f.instanceMatrix.needsUpdate=!0};return u(0),{mesh:r,update:u}}function pe(n,t,e,i,r,s={}){const a=n.r;let o=0,l=0;for(;o<e&&l++<e*12;){const[c,u]=i(a),h=Tn(n.a,c,u);h<(s.minH??.12)||h>(s.maxH??99)||r&&!r(c,u,h)||(n.instance(t,c,u,a()*6.28,a.range(s.s0??.8,s.s1??1.3),s.lift??-.03),o++)}}function Up(n,t){if(!t.length)return null;const e=new Ee;e.setAttribute("position",new re([0,0,.05,-.16,.03,-.02,0,0,-.04,0,0,.05,0,0,-.04,.16,.03,-.02],3)),e.computeVertexNormals();const i=new As(e,new Es({color:394758,side:2}),t.length);i.frustumCulled=!1;const r=new se,s=new se,a=o=>{t.forEach((l,c)=>{const u=o*l.speed+l.phase,h=l.x+Math.cos(u)*l.r,f=l.z+Math.sin(u)*l.r*.8;Ss(n,h,f,-u,l.scale??1,0,r,l.h+Math.sin(u*1.7)*.3),s.makeScale(1,1+Math.sin(o*11+l.phase)*2.5,1),r.multiply(s),i.setMatrixAt(c,r)}),i.instanceMatrix.needsUpdate=!0};return a(0),{mesh:i,update:a}}const Vn=new Lt;function Jl(n,t,e,i,r,s){const a=mn(e*6,i*6,r*6,3),o=Te(Nt(.3,.58,t)+Nt(2.6,5,n+a*2)*.85,0,1),l=Nt(.32,.02,n)*.9,c=Nt(-.05,.25,mn(e*14+9,i*14,r*14,3))*Nt(.3,.7,n)*(1-o),u=Nt(6,9,n);return s.setRGB(1.05+a*.7+u*.7,1.02+a*.5+u*.7,.96+a*.25+u*.8),n<0&&s.multiplyScalar(Te(1+n*.5,.25,1)),[o,l,c]}function Np(){const n=Le.low?128:208,t=[],e=lp(),i={x:0,z:0},r=[[1,0,0,0,1,0,0,0,1],[-1,0,0,0,1,0,0,0,-1],[0,1,0,0,0,1,1,0,0],[0,-1,0,0,0,-1,1,0,0],[0,0,1,1,0,0,0,1,0],[0,0,-1,-1,0,0,0,1,0]];for(const[l,c,u,h,f,d,g,v,m]of r){const p=new Float32Array((n+1)*(n+1)*3),S=new Float32Array((n+1)*(n+1)*3),M=new Float32Array((n+1)*(n+1)*3),_=new Float32Array((n+1)*(n+1));let D=0;for(let x=0;x<=n;x++)for(let C=0;C<=n;C++,D++){const z=Math.tan((C/n*2-1)*Math.PI/4),O=Math.tan((x/n*2-1)*Math.PI/4);let V=l+h*z+g*O,Z=c+f*z+v*O,W=u+d*z+m*O;const ct=1/Math.hypot(V,Z,W);V*=ct,Z*=ct,W*=ct;let q=Rr(V,Z,W);_[D]=q;let Mt=0;for(const Dt of e)Xl(Dt,V,Z,W,i)&&Math.hypot(i.x,i.z)<Dt.patchR-1.6&&(Mt=.7);const wt=ye+Math.max(q,-3)-Mt;p[D*3]=V*wt,p[D*3+1]=Z*wt,p[D*3+2]=W*wt}const w=new Ee;w.setAttribute("position",new Ie(p,3));const A=[],R=h*(v*u-m*c)+f*(m*l-g*u)+d*(g*c-v*l)<0;for(let x=0;x<n;x++)for(let C=0;C<n;C++){const z=x*(n+1)+C,O=z+1,V=z+n+1,Z=V+1;R?A.push(z,V,O,O,V,Z):A.push(z,O,V,O,Z,V)}w.setIndex(A),w.computeVertexNormals();const y=w.attributes.normal.array;for(D=0;D<_.length;D++){const x=p[D*3],C=p[D*3+1],z=p[D*3+2],O=1/Math.hypot(x,C,z),V=1-(y[D*3]*x+y[D*3+1]*C+y[D*3+2]*z)*O,Z=Jl(_[D],V*2.2,x*O,C*O,z*O,Vn);S[D*3]=Z[0],S[D*3+1]=Z[1],S[D*3+2]=Z[2],M[D*3]=Vn.r,M[D*3+1]=Vn.g,M[D*3+2]=Vn.b}w.setAttribute("aMix",new Ie(S,3)),w.setAttribute("color",new Ie(M,3)),t.push(w)}const s=An(t),a=Zl(),o=new $t(s,a);return o.receiveShadow=!0,o.castShadow=!0,o.userData.mat=a,o}function Fp(n,t){const e=n.patchR,i=Le.low?.3:.16,r=Math.ceil(2*e/i),s=[],a=[],o=[],l=[],c=new Int32Array((r+1)*(r+1)).fill(-1),u=new L;for(let m=0;m<=r;m++)for(let p=0;p<=r;p++){const S=-e+p*i,M=-e+m*i,_=Math.hypot(S,M);if(_>e+i)continue;const D=Tn(n,S,M),w=_>e-i?.9:0;Vi(S,M,Math.max(D,-3)-w,u),c[m*(r+1)+p]=l.length,l.push(D),s.push(u.x,u.y,u.z)}const h=[];for(let m=0;m<r;m++)for(let p=0;p<r;p++){const S=c[m*(r+1)+p],M=c[m*(r+1)+p+1],_=c[(m+1)*(r+1)+p],D=c[(m+1)*(r+1)+p+1];S<0||M<0||_<0||D<0||h.push(S,_,M,M,_,D)}const f=new Ee;f.setAttribute("position",new re(s,3)),f.setIndex(h),f.computeVertexNormals();const d=f.attributes.normal.array;let g=0;for(let m=0;m<=r;m++)for(let p=0;p<=r;p++){if(c[m*(r+1)+p]<0)continue;const S=-e+p*i,M=-e+m*i,_=1/Math.hypot(S,ye,M),D=S*_,w=ye*_,A=M*_,R=1-(d[g*3]*D+d[g*3+1]*w+d[g*3+2]*A);u.copy(n.n).multiplyScalar(ye).addScaledVector(n.e,S).addScaledVector(n.f,M).normalize();const y=Jl(l[g],R*2.2,u.x,u.y,u.z,Vn);t?.(S,M,l[g],R,y,Vn),a.push(y[0],y[1],y[2]),o.push(Vn.r,Vn.g,Vn.b),g++}f.setAttribute("aMix",new re(a,3)),f.setAttribute("color",new re(o,3));const v=new $t(f,Zl());return v.receiveShadow=!0,v.castShadow=!0,v}function Op(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),i=e.createImageData(256,256);for(let o=0;o<256;o++)for(let l=0;l<256;l++){const c=(d,g)=>{const v=d/256*Math.PI*2,m=g/256*Math.PI*2;return mn(Math.cos(v)*1.6,Math.sin(v)*1.6+Math.cos(m)*1.6,Math.sin(m)*1.6,4,2.2)},u=c(l+1,o)-c(l-1,o),h=c(l,o+1)-c(l,o-1),f=(o*256+l)*4;i.data[f]=128+u*900,i.data[f+1]=128+h*900,i.data[f+2]=255,i.data[f+3]=255}e.putImageData(i,0,0);const r=new v0(t);r.wrapS=r.wrapT=1e3,r.repeat.set(90,45);const s=new J0({color:399138,roughness:.34,metalness:0,normalMap:r,normalScale:new ft(.35,.35),clearcoat:.2,clearcoatRoughness:.4,envMapIntensity:.9}),a=new $t(new qe(ye,320,200),s);return a.receiveShadow=!0,a.userData.tick=o=>{r.offset.set(o*.004,o*.0025)},a}function Bp(){const n=new Oe({side:1,transparent:!0,depthWrite:!1,blending:2,uniforms:{uColor:{value:new Lt(5210024)},uPower:{value:3.2},uGain:{value:.9}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uColor; uniform float uPower; uniform float uGain; varying vec3 vN; varying vec3 vV;
      void main(){ float f = smoothstep(0.0, 0.42, abs(dot(vN, vV))); f = f * f * f * 0.42; gl_FragColor = vec4(uColor * f * uGain, 1.0); }`});return new $t(new qe(ye+9,96,64),n)}function zp(){const n=Le.low?1200:2600,t=new Float32Array(n*3),e=new Float32Array(n),i=Gn(77);for(let o=0;o<n;o++){const l=i()*2-1,c=i()*Math.PI*2,u=Math.sqrt(1-l*l);t[o*3]=u*Math.cos(c)*2400,t[o*3+1]=l*2400,t[o*3+2]=u*Math.sin(c)*2400,e[o]=Math.pow(i(),6)*2.6+.6}const r=new Ee;r.setAttribute("position",new Ie(t,3)),r.setAttribute("aSize",new Ie(e,1));const s=new Oe({transparent:!0,depthWrite:!1,blending:2,uniforms:{uPx:{value:1},uFade:{value:1}},vertexShader:"attribute float aSize; uniform float uPx; varying float vS; void main(){ vS = aSize; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * uPx; }",fragmentShader:"varying float vS; uniform float uFade; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vec3(0.75,0.82,1.0) * a * (0.25 + vS * 0.22) * uFade, 1.0); }"}),a=new Ms(r,s);return a.frustumCulled=!1,a}function Gp(){const n=Gn(4242),t=[],e=[],i=[],r=new L,s=new L,a=new L;let o=0,l=0;for(;o<70&&l++<4e3;){const f=n()*2-1,d=n()*Math.PI*2,g=Math.sqrt(1-f*f);r.set(g*Math.cos(d),f,g*Math.sin(d));const v=Rr(r.x,r.y,r.z);if(v<.35||v>3.2)continue;o++;const m=n()<.13;s.set(-r.y,r.x,r.z*.3).cross(r).normalize(),a.copy(r).cross(s);const p=m?3:4+(n()*14|0);for(let S=0;S<p;S++){const M=r.clone().addScaledVector(s,(n()-.5)*.05).addScaledVector(a,(n()-.5)*.05).normalize(),_=Rr(M.x,M.y,M.z);if(!(_<.05))if(M.multiplyScalar(ye+_+.25),t.push(M.x,M.y,M.z),m){const D=n()<.4;e.push(D?.55:1,D?.25:.08,D?1:.05),i.push(2.2)}else e.push(1,.56+n()*.15,.2),i.push(.8+n()*1.2)}}const c=new Ee;c.setAttribute("position",new re(t,3)),c.setAttribute("color",new re(e,3)),c.setAttribute("aSize",new re(i,1));const u=new Oe({transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,uniforms:{uPx:{value:1},uTime:{value:0},uGain:{value:1}},vertexShader:`attribute float aSize; uniform float uPx; uniform float uTime; varying vec3 vC; varying float vF;
      void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * normalize(position));
      vF = smoothstep(-0.05, 0.25, dot(n, normalize(-mv.xyz))) * (0.75 + 0.25 * sin(uTime * 3.0 + position.x * 40.0));
      gl_Position = projectionMatrix * mv; gl_PointSize = clamp(aSize * uPx * 260.0 / -mv.z, 1.5, 34.0); }`,fragmentShader:"varying vec3 vC; varying float vF; uniform float uGain; void main(){ float d = length(gl_PointCoord - 0.5); float a = pow(smoothstep(0.5, 0.0, d), 2.2); gl_FragColor = vec4(vC * a * vF * uGain * 2.2, 1.0); }"}),h=new Ms(c,u);return h.frustumCulled=!1,h}function Vp(){const n=new be,t=ke("metal",{scale:.09,tint:14263642,metalness:1,roughness:.58,norm:.9});t.envMapIntensity=1.8,t.emissive=new Lt(4860940),t.emissiveIntensity=.55;const e=ke("metal",{scale:.12,tint:7033400,metalness:1,roughness:.72}),i=(h,f,d)=>{const v=[[h+.3,-d],[f-.3,-d],[f,-d+.3],[f,d-.3],[f-.3,d],[h+.3,d],[h,d-.3],[h,-d+.3],[h+.3,-d]].map(([m,p])=>new ft(m,p));return new Pr(v,240)},r=(h,f,d,g)=>{const v=[i(h,f,d)];for(let m=0;m<g;m++){const p=m/g*Math.PI*2,S=m%15===0,M=m%5===0,_=(S?1.7:M?1.1:.6)*d;for(const D of[f+.12,h-.12]){const w=new ni(.34,_,S?.55:.24);w.translate(D,d-_/2-.25,0),w.rotateY(p),v.push(w)}if(S)for(const D of[1,-1]){const w=new qe(.62,10,8);w.translate((h+f)/2,D*(d+.2),0),w.rotateY(p+.13),v.push(w)}}return An(v.map(Hp))},s=new $t(r(126,129.4,4.2,180),t),a=new $t(r(131.5,134.2,2.6,120),e);a.quaternion.setFromAxisAngle(new L(.66,0,.75).normalize(),1.52);const o=new be,l=new be;o.add(new $t(new Ar(150,.7,10,200),t));const c=new $t(new qe(3.4,32,20),new De({color:2759176,emissive:16758362,emissiveIntensity:3.2,roughness:.4}));c.position.set(150,0,0),o.add(c),l.add(new $t(new Ar(144.5,.55,10,200),e));const u=new $t(new qe(2.6,32,20),ke("rock",{scale:.5,tint:4869205,roughness:.9}));u.position.set(144.5,0,0),l.add(u),o.rotation.x=Math.PI/2,l.rotation.x=Math.PI/2;for(const h of[s,a])h.castShadow=!0,h.receiveShadow=!0;return n.add(s,a,o,l),n.userData={main:s,inner:a,sunRing:o,moonRing:l,sun:c,moon:u},n}function Hp(n){const t=n.index?n.toNonIndexed():n;for(const e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e);return t}function kp(n){const t=Gn(909),e=new be,i=new De({color:9410726,roughness:1,metalness:0,emissive:1448738,emissiveIntensity:.35,alphaHash:!0});i.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <alphamap_fragment>",`
      float ndv = abs(dot(normalize(vNormal), normalize(vViewPosition)));
      diffuseColor.a *= smoothstep(0.1, 0.9, ndv) * 0.92 * smoothstep(3.0, 20.0, length(vViewPosition));`)};const r=new Wi(1,Le.low?2:3),s=(l,c,u)=>{const h=[],f=4+(t()*6|0);for(let g=0;g<f;g++){const v=r.clone(),m=u*t.range(.45,1),p=t.range(-1.6,1.6)*u,S=t.range(-.9,.9)*u,M=t.range(0,.35)*u,_=v.attributes.position,D=v.attributes.normal,w=t()*100;for(let A=0;A<_.count;A++){let R=_.getX(A),y=_.getY(A),x=_.getZ(A);D.setXYZ(A,R,y*1.4+.25,x);const C=1+mn(R*1.3+w,y*1.3,x*1.3,4)*.9;R*=C*m*1.25,y*=C*m*.62,x*=C*m,y<-.25*m&&(y=-.25*m+(y+.25*m)*.25),_.setXYZ(A,R+p,y+M,x+S)}v.normalizeNormals(),h.push(v)}const d=new $t(An(h),i);d.position.copy(l).multiplyScalar(ye+c),d.quaternion.setFromUnitVectors(new L(0,1,0),l),d.rotateY(t()*6.28),d.castShadow=!0,d.receiveShadow=!0,e.add(d)},a=new L,o=Le.low?34:70;for(let l=0;l<o;l++){if(l<o*.6){const u=n[l%n.length];a.set(t.range(-1,1),t.range(-1,1),t.range(-1,1)).normalize().multiplyScalar(t.range(.12,.42)).add(u).normalize()}else{const u=t()*2-1,h=t()*6.283,f=Math.sqrt(1-u*u);a.set(f*Math.cos(h),u,f*Math.sin(h))}let c=!0;for(const u of n)a.angleTo(u)<.15&&(c=!1);c&&s(a.clone(),t.range(9,14),t.range(1.3,3.4))}return e}const Je=(n,t,e,i=3)=>mn(n*e,.37,t*e,i),ei=(n,t,e)=>{let i=1e9;for(let r=0;r<e.length-1;r++){const[s,a]=e[r],[o,l]=e[r+1],c=o-s,u=l-a,h=Te(((n-s)*c+(t-a)*u)/(c*c+u*u),0,1);i=Math.min(i,Math.hypot(n-s-c*h,t-a-u*h))}return i},Mn=(n,t=0,e=0)=>i=>{const r=i()*6.283,s=Math.sqrt(i())*n;return[t+Math.cos(r)*s,e+Math.sin(r)*s]},Ye=(n,t)=>e=>{const i=e()*6.283,r=Math.sqrt(Zt(n*n,t*t,e()));return[Math.cos(i)*r,Math.sin(i)*r]},Cr=(n,t,e=1)=>(i,r,s,a,o)=>{const l=ei(i,r,n)+Je(i,r,2.5,2)*.25;o[1]=Math.max(o[1],Nt(t,t*.35,l)*e),l<t&&(o[2]*=.3)},pl=[[0,2.2],[1.4,4],[.6,5.6],[3.5,8.5],[7,11],[12,13]],Wp={id:"ossuary",lat:14,lon:-24,radius:12,blend:10,profile(n,t,e){let i=.75+Je(n,t,.16)*.9+Je(n,t,.9)*.14;i+=2*Nt(7.2,1.9,Math.hypot(n,t*1.15));const r=Nt(2.3,1.5,e);i=Zt(i,2.72,r);const s=Nt(.3,0,Math.max(Math.abs(n-1.3)-1.05,2.55-t,t-5.6));return i=Zt(i,1.5,s),i-=1.9*Nt(4.2,1.2,Math.hypot(n+7,t-5.5)),i},paint(n,t,e,i,r,s){Cr(pl,.42)(n,t,e,i,r);const a=Nt(.5,0,Math.max(Math.abs(n-1.3)-1.2,2.4-t,t-6.2));r[0]=Math.max(r[0],a*.9),a>.5&&(r[2]=0),s.multiplyScalar(.92),r[2]=Math.max(r[2],.25)},build(n){n.house(0,0,.5,{w:2,d:2.9,storeys:2,m:{roof:"slate",wall:"plasterDark"},lit:.22,chimney:!0,smoke:!0,shed:!0,rh:1.3}),n.light(.4,.6,1.9,16751168,2.5,5),n.fence([[-2.2,-1.6],[-2.4,1.2],[-1.4,2.5]]),n.fence([[1.8,-1.9],[2.6,.3],[2.2,1.7]]),n.well(-1.5,1.4),n.cart(1.9,1,2.2),n.torch(.5,2,.55,16747056),n.at(1.3,3.5,0),n.box("blocksDark",2.3,.08,2.1,0,-.05,-.05),n.box("blocksDark",2.3,1.3,.16,0,0,-1.1);for(const t of[-1,1])n.box("blocksDark",.16,1.3,2.1,t*1.15,0,-.05),n.box("blocks",.2,1.36,.2,t*1.15,0,1);n.box("blocksDark",2.46,.14,.9,0,1.3,-.72),n.box("blocks",2.5,.12,.2,0,1.3,1);for(let t=0;t<7;t++)n.cyl("bone",.045,.045,.05,-.95+t*.16,.82,-1,6,Math.PI/2),n.cyl("bone",.045,.045,.05,-.87+t*.16,.95,-1,6,Math.PI/2);n.box("woodDark",.44,.74,.05,-.62,0,-1);for(const t of[.16,.42,.66])n.box("iron",.46,.035,.06,-.62,t,-.99);for(const t of[-1,1])for(const e of[-1,1])n.box("iron",.018,.5,.018,.18+t*.16,.2,-.2+e*.16);for(const t of[-1,0,1])n.box("iron",.014,.5,.014,.18+t*.08,.2,-.04),n.box("iron",.014,.5,.014,.18+t*.08,.2,-.36);n.box("iron",.36,.02,.36,.18,.19,-.2),n.box("iron",.36,.02,.36,.18,.7,-.2),n.box("iron",.014,.6,.014,.18,.72,-.2);for(const t of[-1,1])n.box("wood",.03,1.5,.03,.82+t*.1,0,-.92);for(let t=0;t<9;t++)n.box("wood",.2,.022,.022,.82,.12+t*.16,-.92);n.box("iron",.06,.09,.06,.5,.98,-.98),n.glow(.5,1.02,-.92,16754250,.5,2).light(.3,.9,-.3,16751168,4.5,4),n.glow(.82,1.35,-.92,16760944,.35,0);for(const[t,e]of[[-.8,.3],[.7,.5],[-.2,.7]])n.cyl("bone",.012,.015,.06,t,.03,e,5),n.glow(t,.14,e,16760928,.13,2);n.agent({kind:"villager",path:[[1.12,3.75]],yaw:.9,scale:.42,color:12168596,h:1.5});for(let t=0;t<12;t++)n.instance("bones",1.3+n.r.range(-.9,.9),3.4+n.r.range(-.8,1),n.r()*6,n.r.range(.7,1.2));for(let t=0;t<26;t++){const e=n.r.range(1.9,4.3),i=n.r.range(3,5.6);n.grave(Math.cos(e)*i,Math.sin(e)*i-.5,e)}pe(n,"dead",46,Ye(2.8,15),(t,e)=>ei(t,e,pl)>.7&&!(Math.abs(t-1.3)<1.7&&e>2&&e<7.2),{s0:.9,s1:2}),pe(n,"pine",70,Ye(8,18),null,{s0:.8,s1:1.5}),pe(n,"rock",50,Ye(2.5,16),null,{s0:.4,s1:1.5}),pe(n,"bush",60,Ye(2.4,15),null,{s0:.6,s1:1.3}),n.agent({kind:"cult",path:[[-.9,2.3]],yaw:.8,color:5658204});for(let t=0;t<5;t++)n.bird({x:.3,z:.4,r:2.2+t*.5,h:5.2+t*.3,speed:.5-t*.05,phase:t*1.3})}},mr=n=>-6.2+2*Math.sin(n*.24+.6),ps=[[-14,1.2],[-6.4,.6],[-2,.2],[2.5,.4],[6,1.5],[14,3]],ga=[[.6,.3],[.2,-3.5],[1.5,-7],[1,-13]],Xp={id:"village",lat:2,lon:0,radius:14,blend:9,profile(n,t,e){let i=.62+Je(n,t,.2)*.35+Je(n,t,1.1,2)*.05+Nt(5,15,n)*1.3+Nt(4,14,-t)*.8;const r=Nt(3.6,2,Math.hypot(n-1.2,t-2.6));i=Zt(i,.66,r);const s=Math.abs(n-mr(t));i=Zt(-.55,i,Nt(.45,1.9,s));const a=Nt(.9,.4,Math.abs(t-.9))*Nt(2.2,1.2,s);return i=Math.max(i,Zt(i,.5,a*0)),i},paint(n,t,e,i,r){if(Cr(ps,.5)(n,t,e,i,r),Cr(ga,.36)(n,t,e,i,r),r[1]=Math.max(r[1],Nt(3.4,2.2,Math.hypot(n-1.2,t-2.6))*.95),n>6&&t<-1&&t>-9){const s=Math.sin(n*5.2)*.5+.5;r[1]=Math.max(r[1],s*.7*Nt(6,7,n)*Nt(13,11,n))}},build(n){const t={m:{roof:"thatch"}},e=[[-3.2,-1,.2],[-1.2,-1.3,-.1],[2.6,-1.2,.15,2],[4.8,-.4,.5],[-3,2.2,3],[-1,4.9,2.6],[-4.4,-3.6,.6,2],[7.2,4.9,4.2],[7.6,.2,.7],[-.9,-4.2,1.4],[1.9,-5.2,-1.5,2],[.2,-8.2,1.2],[2.9,-8.8,-1.3],[8.4,3.9,3.9],[-9.4,2.4,2.9],[-10.2,-.8,.3]];for(const[r,s,a,o]of e)n.house(r,s,a,{...t,storeys:o??1,lit:.62});n.house(-2.4,5.9,.2+Math.PI,{w:1.5,d:2.9,storeys:2,stoneWalls:!0,m:{roof:"slate"},lit:.5,chimney:!1,shed:!1,rh:1.3}),n.at(-2.4,5.9,.2+Math.PI),n.box("stone",.75,2.9,.75,0,0,1.5),n.cyl("slate",.02,.62,1.1,0,2.9,1.5,4),n.bridge(mr(.9)+.05,.95,.06,3,.8),n.gallows(1.4,2.7,-.5),n.cart(3.3,1.5,.3),n.well(-.6,1.9),n.stall(3.9,3,1.2),n.stall(-.9,3.5,2.5,"woodDark"),n.torch(.3,3.5,.6,16747056,!0).torch(2.9,3.6,.6,16747056,!0).torch(-1.6,.9,.6).torch(4.4,.9,.6).torch(mr(.9)+1.8,.4,.6).torch(.9,-3.3,.6);for(let r=0;r<9;r++)n.crate(3.6+n.r.range(-.4,.4),2.1+n.r.range(-.3,.3),n.r.range(.14,.22));for(let r=0;r<6;r++)n.barrel(-1.6+n.r.range(-.3,.3),3.2+n.r.range(-.3,.3));n.fence([[6.2,-1.2],[12.6,-1.4],[12.8,-8.6],[6.4,-8.8],[6.2,-1.2]]),n.fence([[-4.4,3.4],[-4.6,7.2],[-1.2,7.6]]);for(let r=0;r<14;r++){const s=-.5+Math.PI+n.r.range(-1.2,1.2),a=n.r.range(.9,1.9),o=1.4+Math.sin(s+2.2)*a+.6,l=2.7+Math.cos(s+2.2)*a+.8;n.agent({kind:"villager",path:[[o,l]],yaw:Math.atan2(1.4-o,2.5-l),seed:r})}n.agent({kind:"guard",path:[[.75,2.2]],yaw:2.2}).agent({kind:"guard",path:[[2.2,3.4]],yaw:2.6}),n.agent({kind:"villager",path:[[1,2.75]],yaw:2.4,lift:.5,color:2762274,pose:"talk"}).agent({kind:"villager",path:[[1.5,2.42]],yaw:2.4,lift:.5,color:9075302}).agent({kind:"villager",path:[[1.78,2.3]],yaw:2.4,lift:.5,color:7300696}),n.agent({kind:"villager",path:[[-4.5,3.3]],yaw:1.3,color:5919048}),n.agent({kind:"villager",path:ps.slice(1,5),speed:.2,seed:1}).agent({kind:"villager",path:ps.slice(1,5),speed:.17,phase:31,seed:3}).agent({kind:"villager",path:[[.4,-.2],...ga.slice(1,3)],speed:.15,seed:4}).agent({kind:"villager",path:[[5.4,2.6],[7.8,1],[8.2,-1.6],[9,-5]],speed:.14,seed:2}).agent({kind:"villager",path:[[-9.6,1.4],[-7.6,.9],[-5,.9],[-3.4,.7]],speed:.16,seed:5}).agent({kind:"guard",path:[[-2.4,.5],[3.8,.8],[5,2.4],[1.5,4.3],[-1.8,2.6],[-2.4,.5]],speed:.13,loop:!0});const i=(r,s)=>ei(r,s,ps)>1.1&&ei(r,s,ga)>1&&Math.hypot(r-1.2,s-2.6)>4.2&&!e.some(([a,o])=>Math.hypot(r-a,s-o)<1.9)&&!(r>6&&r<13&&s<-1&&s>-9);pe(n,"broadleaf",70,Mn(18),(r,s)=>i(r,s)&&Math.abs(r-mr(s))>1.2,{s0:.9,s1:1.6}),pe(n,"pine",110,Ye(9.5,20),(r,s)=>i(r,s),{s0:.8,s1:1.5}),pe(n,"bush",120,Mn(17),i,{s0:.5,s1:1.2}),pe(n,"rock",50,Mn(18),(r,s)=>Math.abs(r-mr(s))<2.2||Math.hypot(r,s)>9,{s0:.3,s1:1,minH:-.2});for(let r=0;r<4;r++)n.bird({x:1.5,z:2.5,r:3+r*.8,h:4.6+r*.4,speed:.42,phase:r*1.9})}},ms=[[-15,6],[-9,4.5],[-5,5.5],[-1.5,3.2],[1.8,.6],[4.6,-2.2]],gr=[5.6,-3.6],qp={id:"forest",lat:26,lon:14,radius:15,blend:10,profile(n,t,e){let i=1.25+Je(n,t,.17)*2.6+Je(n,t,.7)*.3+Va(n*.08,1,t*.08,3)*1.4*Nt(6,14,e);const r=Nt(4.6,2.6,Math.hypot(n-gr[0],t-gr[1]));i=Zt(i,1.05,r);const s=Nt(1.5,.5,ei(n,t,ms));i=Zt(i,i*.86+.1,s*.5);const a=Math.abs(n+4.5+1.6*Math.sin(t*.3));return i=Zt(-.3,i,Nt(.25,1.5,a)*1+Nt(-2,4,t)*0),i},paint(n,t,e,i,r,s){Cr(ms,.3,.8)(n,t,e,i,r),r[2]=Math.max(r[2],.55),r[1]=Math.max(r[1],Nt(3.6,2.4,Math.hypot(n-gr[0],t-gr[1]))*.7),s.multiplyScalar(.9)},build(n){const[t,e]=gr,i=[];for(let a=0;a<=26;a++){const o=a/26*6.283*.9+2.5;i.push([t+Math.cos(o)*3.3,e+Math.sin(o)*2.9])}n.palisade(i,.8);const r=[[-1.4,-1,.8],[.3,-1.6,.1],[1.7,-.5,-.9],[1.2,1.3,2.4],[-.9,1.2,2.9]];for(const[a,o,l]of r)n.house(t+a,e+o,l,{w:1.15,d:1.5,storeys:1,m:{roof:"thatch",wall:"woodDark",frame:"woodDark"},lit:.5,rh:.75,shed:!1});n.at(t-2.4,e+1.9,.6);for(const a of[-1,1])for(const o of[-1,1])n.box("woodDark",.07,1.7,.07,a*.3,0,o*.3);n.box("wood",.8,.06,.8,0,1.4,0),n.roof("thatch",.8,.8,.3,1.95,.1,.06),n.glow(0,1.7,0,16756832,.5,2),n.at(t,e,0),n.cyl("stone",.2,.24,.08,0,0,0,8),n.glow(0,.2,0,16742952,1.1,2).light(0,.5,0,16747064,6,6).smoke(0,.2,0,.7,.6);for(let a=0;a<6;a++){const o=a/6*6.283;n.agent({kind:"hidden",path:[[t+Math.cos(o)*.62,e+Math.sin(o)*.62]],yaw:Math.atan2(-Math.cos(o),-Math.sin(o)),seed:a})}n.agent({kind:"hidden",path:[[t-2.2,e+1],[t-.4,e+2.1],[t+2.2,e+1.4],[t+2.4,e-1.2]],speed:.1}),n.agent({kind:"hidden",path:[[t-2.4,e+1.9]],lift:1.46,yaw:-1.2,color:2764838}),n.agent({kind:"hidden",path:[[i[0][0]+.3,i[0][1]+.1]],yaw:2.2,pose:"armsUp"}),n.at(i[0][0]+.15,i[0][1]-.25,.6),n.box("wood",.9,.07,.07,0,.5,0,0,0,.25);for(let a=0;a<3;a++)n.at(t+1.9+a*.5,e+2-a*.3,.5),n.box("woodDark",.05,.5,.05,0,0,0),n.box("woodDark",.36,.05,.05,0,.36,0),n.cyl("thatch",.09,.11,.24,0,.26,0,7),n.cyl("thatch",.06,.06,.1,0,.5,0,7);n.agent({kind:"hidden",path:[[-1.2,3],[1.8,.6],[3.6,-1.4]],speed:.09,seed:1}),n.wall([[-6.2,6.8],[-4.4,6.9],[-4.3,8.4],[-6.3,8.3],[-6.2,6.8]],{h:.9,th:.2,ruin:.55,plain:!0,mat:"stoneDark"}),n.tower(-1.2,1.4,{r:.6,h:2.3,mat:"stoneDark",lit:0}),n.column(-2,2.2,1,!0,"stoneDark");for(const[a,o]of[[-8.5,-5.5],[-9.6,-6.6],[-3.5,-9.5],[9.5,5.5],[-11.5,.5]])n.at(a,o,n.r()*6),n.glow(-.05,.42,0,16717061,.14,3).glow(.05,.42,0,16717061,.14,3);for(let a=0;a<10;a++)n.instance("bones",-8+n.r.range(-1.6,1.6),-5+n.r.range(-1.4,1.4),n.r()*6,n.r.range(.8,1.5));for(let a=0;a<26;a++)n.glow(...(n.at(n.r.range(-12,12),n.r.range(-12,12),0),[0,n.r.range(.3,1.5),0]),12576922,.09,4);const s=(a,o)=>ei(a,o,ms)>.75&&Math.hypot(a-t,o-e)>3.9&&Math.hypot(a+5.3,o-7.6)>1.6&&Math.hypot(a+1.2,o-1.4)>1;pe(n,"pine",760,Mn(22),s,{s0:.9,s1:2.1}),pe(n,"dead",120,Mn(20),s,{s0:1,s1:2.2}),pe(n,"broadleaf",90,Mn(20),s,{s0:1,s1:1.8}),pe(n,"bush",220,Mn(20),(a,o)=>ei(a,o,ms)>.4,{s0:.5,s1:1.3}),pe(n,"rock",110,Mn(20),null,{s0:.4,s1:1.6});for(let a=0;a<3;a++)n.bird({x:-3,z:-2,r:4+a,h:6.5,speed:.36,phase:a*2.2})}},gs=[0,-1.5],_r=[.2,4.6];function Yp(n,t,e,i){n.at(t,e,i),n.box("blocks",1.7,3,5.4,0,-.3,0),n.gable("blocks",1.7,1.3,5.4,0,2.7,0),n.roof("slate",1.7,5.4,1.3,2.7,.1,.07);for(const r of[-1,1]){n.box("blocks",.8,1.6,5.2,r*1.2,-.3,0),n.box("slate",1,.07,5.3,r*1.25,1.5,0,0,0,-r*.5);for(let s=0;s<7;s++){const a=-2.4+s*.8;n.box("blocksDark",.3,2.1,.22,r*1.75,-.3,a),n.box("blocksDark",.7,.14,.18,r*1.42,1.85,a,0,0,-r*.75),n.cyl("blocksDark",0,.1,.42,r*1.75,1.8,a,4),s<6&&(n.box("window",.04,.62,.2,r*1.61,.45,a+.4),n.glow(r*1.72,.76,a+.4,16754250,.7,1),n.box("window",.04,.5,.16,r*.86,2,a+.4))}}n.box("blocks",4.6,2.7,1.3,0,-.3,-1),n.gable("blocks",1.3,1,4.6,0,2.4,-1,Math.PI/2);for(const r of[-1,1])n.cyl("window",.36,.36,.05,r*2.31,1.6,-1,12,0,Math.PI/2),n.glow(r*2.45,1.6,-1,16754250,1.4,1);n.cyl("blocks",.84,.86,3,0,-.3,-2.75,10),n.cyl("slate",.02,.92,.9,0,2.7,-2.75,10),n.cyl("blocksDark",.22,.3,.9,0,3.6,-1,8),n.cyl("slate",0,.34,2.6,0,4.5,-1,8);for(const r of[-1,1]){n.box("blocks",1.05,4.9,1.05,r*.95,-.3,2.9),n.box("blocksDark",1.15,.12,1.15,r*.95,4.6,2.9),n.cyl("slate",0,.74,2.3,r*.95,4.72,2.9,4);for(const s of[[-1,-1],[1,-1],[-1,1],[1,1]])n.cyl("blocksDark",0,.1,.6,r*.95+s[0]*.5,4.7,2.9+s[1]*.5,4);n.box("window",.16,.7,.04,r*.95,3.3,3.44),n.box("black",.2,.55,.04,r*.95,1.6,3.44),n.glow(r*.95,3.65,3.55,16754250,.8,1)}n.cyl("window",.46,.46,.06,0,2.55,2.72,16,Math.PI/2),n.glow(0,2.55,2.9,16754250,2,1),n.box("black",.5,.85,.06,0,0,2.72),n.box("blocksDark",.9,.5,.3,0,1,2.8);for(let r=0;r<4;r++)n.box("blocksDark",1.5-r*.14,.07,.24,0,-.26+r*.07,3.75-r*.2)}const Zp={id:"nuns",lat:44,lon:40,radius:13,blend:9,profile(n,t,e){let i=.95+Je(n,t,.19)*.9+Je(n,t,1,2)*.08+Nt(6,14,-t)*2.2;const r=Nt(7.5,3.9,Math.hypot(n-gs[0],(t-gs[1])*.8));i=Zt(i,2.2,r);const s=Nt(3.2,2.2,Math.hypot(n-_r[0],t-_r[1]));return i=Zt(i,1.5,s),i},paint(n,t,e,i,r,s){Cr([[.2,2.2],[.2,7],[1.5,10],[4,14]],.4)(n,t,e,i,r);const a=Nt(3.2,2.2,Math.hypot(n-_r[0],t-_r[1]));r[1]=Math.max(r[1],a*.9),s.multiplyScalar(.85)},build(n){Yp(n,gs[0],gs[1],0);const[t,e]=_r,i=[];for(let a=0;a<=22;a++){const o=a/22*6.283*.82+.55+Math.PI/2;i.push([t+Math.cos(o)*3.4,e+Math.sin(o)*3.1])}n.palisade(i,.62),n.at(t-.2,e-.3,.3),n.cyl("stone",.3,.36,.5,0,0,0,10),n.cyl("stoneDark",.1,.13,.9,.12,.5,0,6),n.box("black",.2,.2,.06,0,.12,.33),n.glow(0,.24,.4,16742952,.8,2).light(0,.5,.6,16747064,7,6).smoke(.12,1.45,0,.9,.6);for(let a=0;a<3;a++)for(let o=0;o<6-a;o++)n.at(t-1.9+o*.13+a*.065,e-1.5,0),n.cyl("wood",.06,.06,.5,0,.06+a*.11,0,6,Math.PI/2);n.well(t+1.9,e-1.2),n.at(t+.9,e+.5,-.5),n.box("wood",.7,.04,.36,0,.26,0);for(const a of[-1,1])n.box("woodDark",.04,.26,.3,a*.3,0,0);n.box("bone",.2,.03,.26,0,.3,0),n.agent({kind:"nun",path:[[t+1.15,e+.2]],yaw:2.6,pose:"talk"});for(let a=0;a<5;a++)n.agent({kind:"villager",path:[[t+.55-a*.34,e+.95+a*.22]],yaw:-.9,seed:a+2});n.agent({kind:"nun",path:[[t-1.1,e+.7]],yaw:.9}).agent({kind:"villager",path:[[t-.78,e+.95]],yaw:-2.2,pose:"armsUp",color:7035464});for(let a=0;a<3;a++)n.agent({kind:"villager",path:[[t-.5+a*.3,e+.25-a*.1]],yaw:3+a*.3,seed:a});n.agent({kind:"cult",path:[[5.2,2.2],[5.6,5],[4.6,8.6],[5.6,5]],speed:.06,color:1446927,loop:!0}),n.agent({kind:"nun",path:[[.1,2.3],[.2,3.1]],speed:.03});const r={m:{roof:"thatch",wall:"woodDark",frame:"woodDark",plinth:"stoneDark"},storeys:1,lit:.35,shed:!1};for(const[a,o,l]of[[-5.2,3.6,1],[-6.6,6.2,.6],[-4.4,8.2,2],[5,3.2,-.9],[6.3,6,-.5],[4.2,8.6,-2.2],[-7.6,1.4,1.3],[-2.6,9.4,2.7]])n.house(a,o,l,{...r,w:n.r.range(1.2,1.5),d:n.r.range(1.6,2),rh:.7});n.fence([[-6.4,3],[-8.2,4.4],[-8,7.2]]),n.fence([[6.2,2.2],[7.6,3.8],[7.6,7]]);for(let a=0;a<46;a++)n.grave(3.4+a%8*.55+n.r.range(-.1,.1),-3.6+(a/8|0)*.75+n.r.range(-.1,.1),0);n.fence([[3,-4.2],[7.9,-4.3],[8,.8],[3.1,.9]]),n.torch(-.9,2.9,.7,16747056,!0).torch(1.3,2.9,.7,16747056).torch(-2.9,6,.6).torch(5.3,4.2,.6);const s=(a,o)=>Math.hypot(a,(o+1.5)*.75)>4.4&&Math.hypot(a-t,o-e)>3.9&&!(a>2.8&&a<8.2&&o>-4.5&&o<1);pe(n,"dead",120,Mn(19),s,{s0:1,s1:2.3}),pe(n,"pine",200,Ye(8.5,21),s,{s0:.9,s1:1.8}),pe(n,"rock",80,Mn(19),s,{s0:.4,s1:1.7}),pe(n,"bush",80,Mn(18),s);for(let a=0;a<7;a++)n.bird({x:0,z:.5,r:1.6+a*.5,h:7.4+a*.25,speed:.6-a*.04,phase:a})}},Ve=[.5,-2.5],Kp={id:"kingdom",lat:16,lon:44,radius:16,blend:10,profile(n,t,e){let i=.7+Je(n,t,.15)*.5;i=Zt(i,1.05,Nt(11.5,9.2,e));const r=Math.hypot(n-Ve[0],t-Ve[1])+Je(n,t,.9,2)*.5;i=Zt(i,3.1,Nt(5.6,4.5,r));const s=Math.abs(t-12.4-Math.sin(n*.25)*.9);return i=Zt(-.6,i,Nt(.7,2,s)),i},paint(n,t,e,i,r,s){const a=Math.hypot(n,t),o=Math.min(ei(n,t,[[.3,13],[.3,9.3],[.6,4.6],[3.6,2.6],[5.8,-1.6],[4.5,-5.5]]),Math.abs(a-7.4));a<9.3&&(r[1]=Math.max(r[1],.5+Nt(.6,.2,o)*.5),r[2]=0),Math.hypot(n-Ve[0],t-Ve[1])<4.4&&(r[1]=.4,r[0]=.5)},build(n){const t={m:{roof:"slate",wall:"plaster",frame:"woodDark"}},e=20,i=[];for(let a=0;a<=e;a++){const o=Math.PI/2+.16+a/e*(Math.PI*2-.32);i.push([Math.cos(o)*9.6,Math.sin(o)*9.6])}n.wall(i,{h:1.5,th:.4,mat:"blocks"});for(let a=0;a<=e;a+=2)n.tower(i[a][0],i[a][1],{r:.62,h:2.3,lit:.6,mat:"blocks"});n.at(0,9.55,0),n.box("blocks",3,.9,.9,0,1.3,0);for(const a of[-1,1])n.box("blocks",.2,1.3,.9,a*.6,0,0);n.box("black",1,1.2,.5,0,0,0),n.glow(0,.8,.5,16751168,1.2,0),n.tower(-1.5,9.5,{r:.8,h:3,roof:1.3,mat:"blocks"}).tower(1.5,9.5,{r:.8,h:3,roof:1.3,mat:"blocks"}),n.bridge(.3,12.4,Math.PI/2,4.2,.95),n.banner(-.9,10.3,0,1.6).banner(1.5,10.3,0,1.6),n.torch(-.7,10.6,.7,16747056,!0).torch(1.3,10.6,.7);for(const[a,o]of[[8.2,30],[6.7,24],[5.6,18]])for(let l=0;l<o;l++){const c=l/o*6.283+a,u=Math.cos(c)*a,h=Math.sin(c)*a;Math.abs(u-.3)<.9&&h>4||Math.hypot(u-Ve[0],h-Ve[1])<5.9||Math.hypot(u-3.6,h-5.6)<1.6||n.house(u,h,-c+(a<7?Math.PI/2:-Math.PI/2),{...t,w:n.r.range(1,1.35),d:n.r.range(1.3,1.7),storeys:n.r()<.6?3:2,lit:.55,shed:!1,rh:n.r.range(.7,1)})}n.well(3.6,5.6),n.stall(3,4.8,.4).stall(4.4,5,-.6,"woodDark").stall(4.2,6.4,2.6).stall(2.9,6.3,3.4,"woodDark"),n.torch(3.6,4.9,.6,16747056,!0);for(let a=0;a<6;a++)n.agent({kind:a%3?"villager":"noble",path:[[3.6+Math.cos(a*1.1)*.9,5.6+Math.sin(a*1.1)*.9],[3.6+Math.cos(a*1.1+2)*1,5.6+Math.sin(a*1.1+2)*1]],speed:.06+a*.01,seed:a});const r=[];for(let a=0;a<=14;a++){const o=a/14*6.283;r.push([Ve[0]+Math.cos(o)*4.25,Ve[1]+Math.sin(o)*4.25])}n.wall(r,{h:1.1,th:.3,mat:"blocks"});for(let a=0;a<14;a+=2)n.tower(r[a][0],r[a][1],{r:.45,h:1.9,mat:"blocks",roof:.9,lit:.7});n.at(Ve[0]-.3,Ve[1]-.6,.2),n.box("blocks",2.3,3.6,2.3,0,-.3,0),n.box("blocks",2.5,.14,2.5,0,3.3,0);for(const a of[-1,1])for(const o of[-1,1])n.cyl("blocks",.42,.45,4.6,a*1.15,-.3,o*1.15,10),n.cyl("slate",0,.56,1.4,a*1.15,4.3,o*1.15,10),n.box("window",.1,.24,.06,a*1.15,3.4,o*1.15+o*.44),n.glow(a*1.15,3.5,o*1.65,16752704,.6,1);for(let a=0;a<4;a++)for(let o=0;o<3;o++)n.box("window",.12,.3,.05,-.75+a*.5,.8+o*.9,1.16),(a+o)%2&&n.glow(-.75+a*.5,.95+o*.9,1.3,16752704,.5,1);n.box("blocks",1.2,1.9,1.2,0,3.4,0),n.cyl("slate",0,1,1.8,0,5.3,0,4),n.house(Ve[0]+2.2,Ve[1]+1.4,.9,{stoneWalls:!0,w:1.6,d:3.2,storeys:2,rh:1.3,m:{roof:"slate",plinth:"blocks"},lit:.9,shed:!1}),n.house(Ve[0]-2.4,Ve[1]+1.8,-.7,{stoneWalls:!0,w:1.3,d:2,storeys:2,m:{roof:"slate",plinth:"blocks"},lit:.8,shed:!1}),n.house(Ve[0]+1.6,Ve[1]-2.6,2.2,{stoneWalls:!0,w:1.3,d:2,storeys:2,m:{roof:"slate",plinth:"blocks"},lit:.8,shed:!1}),n.cart(.1,11,1.57).cart(.5,13.6,1.5),n.agent({kind:"guard",path:[[-.5,10.7]],yaw:1.4,pose:"talk"}).agent({kind:"guard",path:[[.9,10.5]],yaw:-1.2}).agent({kind:"villager",path:[[.75,11.3]],yaw:-2,pose:"armsUp"});for(let a=0;a<7;a++)n.agent({kind:"villager",path:[[2.6-a*.3,4.55-a*.12]],yaw:1.2,seed:a+5});for(let a=0;a<4;a++)n.agent({kind:"villager",path:[[5.6,1.5],[6.9,3.2],[6.2,5.6],[4.2,6.9]],speed:.08,phase:a*1.7,seed:a,loop:!1});const s=[[.3,12.8],[.3,9.3],[.6,4.6],[3.6,2.6],[5.6,-.6]];for(let a=0;a<9;a++)n.agent({kind:a===0?"noble":a<3?"guard":"villager",path:s,speed:.11,phase:a*.36,seed:a});for(let a=0;a<8;a++){const o=a/8*6.283,l=[];for(let c=0;c<=5;c++){const u=o+c*.13;l.push([Math.cos(u)*9.6,Math.sin(u)*9.6])}n.agent({kind:"guard",path:l,speed:.1,lift:1.52,phase:a*3})}for(let a=0;a<6;a++)n.torch(Math.cos(a*1.05+.4)*7.45,Math.sin(a*1.05+.4)*7.45,.6,16747056,a<2);pe(n,"broadleaf",150,Ye(10.6,22),(a,o)=>Math.abs(o-12.4)>1.8||Math.abs(a)>3,{s0:.9,s1:1.6}),pe(n,"pine",160,Ye(12,23),null,{s0:.8,s1:1.6}),pe(n,"bush",120,Ye(10.4,21)),pe(n,"rock",70,Ye(4.3,5.6).bind(null),null,{s0:.5,s1:1.4});for(let a=0;a<6;a++)n.bird({x:Ve[0],z:Ve[1],r:2+a*.7,h:8.3+a*.2,speed:.5,phase:a*1.1})}},$p={id:"arena",lat:-12,lon:34,radius:15,blend:10,profile(n,t,e){let i=1.45+Je(n,t,.22)*.9+Va(n*.11,3,t*.11,4)*4.2*Nt(8.5,15,e)+Je(n,t,1.3,2)*.1;return i=Zt(i,1.2,Nt(8,5.4,Math.hypot(n,t*1.2))),i=Zt(i,.92,Nt(2.9,2.2,Math.hypot(n,t*1.2))),i},paint(n,t,e,i,r,s){r[0]=Math.max(r[0],.45+Je(n,t,.6)*.5),r[2]=0;const a=Math.hypot(n,t*1.2);r[1]=Math.max(r[1],Nt(5.2,4,a)),s.multiplyScalar(.8),a<2.6&&s.multiplyScalar(.55)},build(n){for(let s=0;s<34;s++){const a=s/34*6.283,o=Math.cos(a)*5.6,l=Math.sin(a)*4.6,c=Math.atan2(Math.cos(a)*4.6,Math.sin(a)*5.6)+Math.PI/2+Math.PI/2,u=s>23&&s<27||s===8,h=n.r(),f=.95;if(u){n.r()<.6&&n.column(o,l,1.2,!0,"blocksDark",.16);continue}n.arch(o,l,c,f*.72,1,"blocks",.3),n.at(o,l,c),n.box("blocks",f+.12,.22,.5,0,1.5,0),h>.35&&(n.arch(o,l,c,f*.72,.8,"blocks",.26,1.72),n.at(o,l,c,1,1.72),h>.6&&n.box("blocks",f+.12,.2,.42,0,1.25,0));for(const[d,g]of[[.86,.95],[.74,.62],[.63,.32]])n.at(o*d,l*d,c),n.box("blocksDark",f*d+.1,g+.4,.62,0,-.4,0);s%4===0&&n.torch(o*.55,l*.55,.75,16726548,s%8===0)}n.at(0,0,0),n.cyl("blocksDark",1.7,1.75,.06,0,0,0,24),n.cyl("blood",1.25,1.25,.015,0,.065,0,6),n.cyl("blocksDark",1.1,1.1,.02,0,.07,0,24),n.cyl("blood",.34,.34,.03,0,.08,0,12),n.box("blocksDark",.5,.34,.9,0,.08,0),n.glow(0,.6,0,16716294,3.2,3).light(0,.9,0,16719880,16,10);for(let s=0;s<14;s++)n.glow(n.r.range(-1,1),.2,n.r.range(-1,1),16730650,.15,4);for(const[s,a]of[[1.45,12],[2.1,18],[2.7,22]])for(let o=0;o<a;o++){const l=o/a*6.283+s;n.agent({kind:"cult",path:[[Math.cos(l)*s,Math.sin(l)*s/1.2]],yaw:Math.atan2(-Math.cos(l),-Math.sin(l)),seed:o,pose:s<2.5?"kneel":"stand",color:[5592668,4868944,6316390][o%3]})}n.agent({kind:"cult",path:[[0,.7]],yaw:Math.PI,color:3816e3,scale:1.12,pose:"armsUp"});const r=[[-12,8],[-8.5,4.4],[-6.3,1.9],[-4.4,.4],[-2.9,.2]];for(let s=0;s<9;s++)n.agent({kind:"cult",path:r,speed:.07,phase:s*.4,loop:!1,color:5592668});for(let s=0;s<6;s++){const a=s/6*6.283+.35,o=Math.cos(a)*8.9,l=Math.sin(a)*7.9;n.instance("spire",o,l,a,2.6+n.r()*.7,-.3),n.instance("spire",o+.7,l+.3,a+2,1.5,-.3),n.at(o*.93,l*.93,0),n.glow(0,3.6,0,16718344,1.5,3).glow(.2,3.1,.1,16718344,.4,3).glow(-.2,3.1,-.1,16718344,.4,3);for(let c=0;c<3;c++)n.at(Zt(o,o*.66,c/3+.1),Zt(l,l*.66,c/3+.1),-a+Math.PI/2),n.box("iron",.06,.06,1,0,3.4-c*1.1,0,0,.75,0)}pe(n,"spire",70,Ye(10.5,22),null,{s0:.6,s1:2.6,lift:-.3}),pe(n,"rock",160,Ye(6.6,21),null,{s0:.5,s1:2.2}),pe(n,"dead",60,Ye(7,20),null,{s0:1,s1:2});for(let s=0;s<9;s++)n.bird({x:0,z:0,r:2.5+s*.6,h:6+s*.3,speed:.7-s*.04,phase:s*.7})}},Se={holy:[0,-2.5],blood:[2.25,1.35],dark:[-2.25,1.35]},Jp={id:"reliefs",lat:-28,lon:8,radius:12,blend:9,profile(n,t,e){let i=.85+Je(n,t,.2)*.8+Je(n,t,1.1,2)*.08+Nt(5,13,n)*1.8;return i=Zt(i,1.3,Nt(8.2,6.4,e)),i=Zt(i,-.7,Nt(-8.8,-11,t+Math.sin(n*.4)*.8)),i},paint(n,t,e,i,r,s){Math.hypot(n,t)<6.6&&(r[0]=Math.max(r[0],.5),r[2]=0);const o=h=>Nt(3.4,.8,Math.hypot(n-h[0],t-h[1])),l=o(Se.holy),c=o(Se.blood),u=o(Se.dark);s.r*=1+l*.5+c*.5-u*.55,s.g*=1+l*.42-c*.55-u*.6,s.b*=1+l*.1-c*.6-u*.2,r[1]=Math.max(r[1],c*.8),r[0]=Math.max(r[0],u*.9)},build(n){n.at(0,0,0),n.cyl("blocksDark",6,6.1,.1,0,-.02,0,48),n.cyl("blocks",1,1.05,.14,0,.06,0,16);for(let t=0;t<18;t++){const e=t/18*6.283,i=n.r()<.5;n.column(Math.cos(e)*5.7,Math.sin(e)*5.7,2.4,i,"blocks",.2),!i&&t%3!==2&&(n.at(Math.cos(e+.175)*5.7,Math.sin(e+.175)*5.7,-e-.175,1,2.5),n.box("blocks",.4,.22,2.05,0,0,0))}for(const[t,[e,i]]of Object.entries(Se))n.at(e,i,Math.atan2(-e,-i)),n.cyl("blocksDark",.5,.56,.2,0,0,0,8),n.relief(e*1,i*1,Math.atan2(-e,-i),t);for(let t=0;t<26;t++){const e=n.r()*6.283,i=n.r.range(.7,2.3);n.at(Se.holy[0]+Math.cos(e)*i,Se.holy[1]+Math.sin(e)*i*.8,0),n.cyl("bone",.014,.017,.06+n.r()*.1,0,0,0,5),n.glow(0,.2,0,16767120,.17,2)}for(let t=0;t<16;t++)n.glow(...(n.at(Se.holy[0]+n.r.range(-1.6,1.6),Se.holy[1]+n.r.range(-1.6,1.2),0),[0,.3,0]),16771760,.12,4);n.at(Se.blood[0]+.9,Se.blood[1]+.9,0),n.cyl("blood",.9,.9,.012,0,.012,0,14);for(let t=0;t<5;t++)n.instance("dead",Se.blood[0]+n.r.range(.4,2.6),Se.blood[1]+n.r.range(-.6,2.4),n.r()*6,n.r.range(.7,1.2),-.03,new Lt(4852744));for(let t=0;t<14;t++)n.glow(...(n.at(Se.blood[0]+n.r.range(-1.2,2),Se.blood[1]+n.r.range(-1.2,2),0),[0,.12,0]),16722448,.13,4);for(let t=0;t<9;t++)n.instance("spire",Se.dark[0]+n.r.range(-2.6,.2),Se.dark[1]+n.r.range(-.8,2.6),n.r()*6,n.r.range(.25,.6),-.2,new Lt(1380892));for(let t=0;t<22;t++)n.glow(...(n.at(Se.dark[0]+n.r.range(-2,1.2),Se.dark[1]+n.r.range(-1.4,2),0),[0,n.r.range(.2,1.4),0]),10514687,.13,4);n.agent({kind:"villager",path:[[Se.holy[0]*.55,Se.holy[1]*.55]],yaw:Math.PI,color:12168596}).agent({kind:"cult",path:[[Se.blood[0]*.55,Se.blood[1]*.55]],yaw:-2.1,color:5901578}).agent({kind:"nun",path:[[Se.dark[0]*.55,Se.dark[1]*.55]],yaw:2.1,color:1709094}),pe(n,"pine",190,Ye(7.6,20),null,{s0:.9,s1:1.8}),pe(n,"dead",50,Ye(6.8,18),null,{s0:1,s1:1.9}),pe(n,"rock",100,Ye(6.6,19),null,{s0:.4,s1:1.7}),pe(n,"bush",90,Ye(6.6,18))}},jp=[Wp,Xp,qp,Zp,Kp,$p,Jp],we=jp.map((n,t)=>{const e=op(n);return{...n,anchor:e,index:t,group:null,sight:[],construct(){if(this.group)return this.group;const i=new be;i.matrixAutoUpdate=!1,i.matrix.copy(e.matrix),i.matrixWorldNeedsUpdate=!0,i.add(Fp(e,n.paint));const r=new yp(e,100+t*17);r.sight=this.sight,n.build(r);for(let a=0;a<(t===4?0:12);a++){const o=r.r()*6.283,l=r.r.range(2.5,n.radius);r.mist(Math.cos(o)*l,Math.sin(o)*l,r.r.range(.9,1.8))}t<4&&pe(r,"tuft",1400,a=>{const o=a()*6.283,l=Math.sqrt(a())*12;return[Math.cos(o)*l,Math.sin(o)*l]},null,{s0:.7,s1:1.5,lift:0});const s=r.build();return i.add(s),i.userData=s.userData,this.group=i,i}}}),Re=[{id:"ossuary",s:0,x:1.3,z:3,th:.7,dist:4.4,az:16,el:7,fov:38,mood:"crypt",ap:1,w:1},{s:0,x:1,z:2.6,th:1,dist:8.5,az:-8,el:20,fov:36,mood:"moor",ap:.9,w:.8},{s:0,x:.2,z:.8,th:1.2,dist:24,az:-34,el:38,fov:34,mood:"moor",ap:.5,w:1},{s:1,x:0,z:1,th:0,dist:56,az:-30,el:50,fov:32,mood:"village",ap:.3,w:.9},{s:1,x:.5,z:1.6,th:.5,dist:21,az:-28,el:27,fov:34,mood:"village",ap:.7,w:1},{id:"village",s:1,x:1.5,z:2.6,th:.75,dist:7.6,az:30,el:15,fov:36,mood:"village",ap:1,w:1.2},{s:1,x:-5.4,z:.9,th:.5,dist:6.4,az:-40,el:10,fov:38,mood:"village",ap:1,w:.9},{s:2,x:-2,z:3,th:0,dist:48,az:-70,el:46,fov:32,mood:"forest",ap:.3,w:.9},{id:"bloodwood",s:2,x:-4.6,z:5.6,th:2.6,dist:8.2,az:-112,el:4,fov:44,mood:"forest",ap:1,w:1.2},{s:6,x:0,z:0,th:0,dist:44,az:-20,el:46,fov:32,mood:"reliefs",ap:.3,w:.9},{id:"reliefs",s:6,x:0,z:-.6,th:.7,dist:8.4,az:4,el:17,fov:38,mood:"reliefs",ap:.9,w:1},{id:"reliefs-holy",s:6,x:0,z:-2,th:.6,dist:5.2,az:4,el:19,fov:36,mood:"reliefs",ap:1,w:.6},{id:"reliefs-blood",s:6,x:1.9,z:1.1,th:.5,dist:4.4,az:122,el:20,fov:36,mood:"reliefs",ap:1,w:.6},{id:"reliefs-dark",s:6,x:-1.9,z:1.1,th:.5,dist:4.4,az:238,el:20,fov:36,mood:"reliefs",ap:1,w:.9},{s:2,x:2,z:-1,th:0,dist:46,az:30,el:44,fov:32,mood:"forest",ap:.3,w:.9},{id:"forest",s:2,x:5.4,z:-3.2,th:3,dist:13.5,az:58,el:8,fov:42,mood:"forest",ap:1,w:1.2},{s:3,x:0,z:1,th:0,dist:52,az:20,el:46,fov:32,mood:"nuns",ap:.3,w:.9},{id:"nuns",s:3,x:0,z:-.5,th:2.8,dist:17,az:8,el:5,fov:40,mood:"nuns",ap:.8,w:1.2},{s:3,x:.2,z:4.4,th:1,dist:6.8,az:-44,el:12,fov:38,mood:"nuns",ap:1,w:.9},{s:5,x:0,z:0,th:0,dist:56,az:-110,el:42,fov:32,mood:"arena",ap:.3,w:.9},{id:"arena",s:5,x:0,z:0,th:2,dist:16,az:-112,el:7,fov:42,mood:"arena",ap:.8,w:1.2},{s:5,x:0,z:0,th:1.3,dist:8.6,az:-84,el:14,fov:40,mood:"arena",ap:1,w:.9},{s:4,x:0,z:2,th:0,dist:68,az:10,el:54,fov:32,mood:"kingdom",ap:.25,w:.9},{s:4,x:.3,z:6,th:1.4,dist:17,az:2,el:9,fov:36,mood:"kingdom",ap:.8,w:1},{id:"kingdom",s:4,x:.4,z:1.6,th:2.4,dist:23,az:22,el:16,fov:36,mood:"kingdom",ap:.85,w:1.2},{id:"solar",s:4,x:.2,z:1,th:10,dist:40,az:52,el:8,fov:44,mood:"kingdom",ap:.45,w:1.2},{s:4,x:0,z:0,th:2,dist:90,az:80,el:50,fov:32,mood:"final",ap:.2,w:1},{s:0,x:1.3,z:3,th:.7,dist:5.6,az:-20,el:9,fov:38,mood:"crypt",ap:1,w:1},{s:0,x:0,z:1,th:0,dist:80,az:-60,el:55,fov:32,mood:"final",ap:.2,w:1},{id:"world",s:-2,dist:560,az:-134,el:-4,fov:30,mood:"final",ap:0,shift:-.22,w:.6},{s:-2,dist:600,az:-130,el:-3,fov:30,mood:"final",ap:0,shift:-.22,w:0}],_a={orbit:{light:16773598,li:3.1,laz:-62,lel:36,sky:4018800,ground:1840658,ai:.55,fog:659222,fd:0,exp:1.05,bloom:.55,ecl:0,atmo:1,stars:1},crypt:{light:11124991,li:1.5,laz:-30,lel:62,sky:1844792,ground:657414,ai:.34,fog:461328,fd:.05,exp:1,bloom:.9,ecl:0,atmo:.6,stars:.4},moor:{light:11848447,li:2.5,laz:-70,lel:30,sky:3360874,ground:1380621,ai:.62,fog:1581614,fd:.016,exp:1.12,bloom:.7,ecl:0,atmo:.9,stars:1},village:{light:16764834,li:2.7,laz:78,lel:22,sky:4477034,ground:1840400,ai:.6,fog:2828849,fd:.012,exp:1.1,bloom:.75,ecl:0,atmo:.9,stars:.6},forest:{light:11851458,li:2.9,laz:-40,lel:44,sky:3824204,ground:1317396,ai:.85,fog:1846310,fd:.02,exp:1.32,bloom:.7,ecl:0,atmo:.8,stars:.4},nuns:{light:12633304,li:1.9,laz:60,lel:28,sky:3816522,ground:1314834,ai:.62,fog:2763313,fd:.03,exp:1.12,bloom:.85,ecl:0,atmo:.8,stars:.3},kingdom:{light:16766116,li:3.2,laz:100,lel:17,sky:4872312,ground:1971986,ai:.6,fog:3352874,fd:.008,exp:1.05,bloom:.7,ecl:0,atmo:1,stars:.6},arena:{light:16738872,li:2.4,laz:68,lel:16,sky:4198414,ground:1180933,ai:.6,fog:2099207,fd:.016,exp:1.2,bloom:1,ecl:0,atmo:.5,stars:1},reliefs:{light:10138346,li:1.7,laz:-80,lel:34,sky:2897492,ground:1052178,ai:.5,fog:1053470,fd:.012,exp:1.15,bloom:.95,ecl:0,atmo:.9,stars:1},final:{light:13621503,li:3.4,laz:20,lel:26,sky:6713484,ground:1709586,ai:1.5,fog:787976,fd:0,exp:1.1,bloom:.9,ecl:1,atmo:.7,stars:1}},_s={scene:5,az:68,el:13},dn=96,Rn=7,ti={tWmH:{value:null},uWmN:{value:Array.from({length:Rn},()=>new he(0,-1,0,0))},uWmE:{value:Array.from({length:Rn},()=>new he(1,0,0,0))},uWmF:{value:Array.from({length:Rn},()=>new L(0,0,1))},uWmK:{value:new L(0,0,0)},uWmOn:{value:1}};function Qp(n){const t=new Uint16Array(dn*dn*Rn);n.forEach((i,r)=>{const s=i.anchor,a=s.radius+s.blend;for(let o=0;o<dn;o++)for(let l=0;l<dn;l++){const c=(l/(dn-1)*2-1)*a,u=(o/(dn-1)*2-1)*a;t[(r*dn+o)*dn+l]=xc.toHalfFloat(Tn(s,c,u))}ti.uWmN.value[r].set(s.n.x,s.n.y,s.n.z,a),ti.uWmE.value[r].set(s.e.x,s.e.y,s.e.z,Tn(s,0,0)),ti.uWmF.value[r].copy(s.f)});const e=new Ua(t,dn,dn*Rn,1028,1016);e.minFilter=e.magFilter=1006,e.wrapS=e.wrapT=1001,e.generateMipmaps=!1,e.needsUpdate=!0,ti.tWmH.value=e}const ml=`
uniform sampler2D tWmH; uniform vec4 uWmN[${Rn}]; uniform vec4 uWmE[${Rn}]; uniform vec3 uWmF[${Rn}]; uniform vec3 uWmK; uniform float uWmOn;
`,gl=`
// how far the ground in direction d is lifted or lowered from its authored height right now
float wmH(vec3 d) {
  float h = 0.0;
  for (int i = 0; i < ${Rn}; i++) {
    vec4 n = uWmN[i]; float c = dot(d, n.xyz); if (n.w <= 0.0 || c < 0.95) continue;
    float em = clamp(uEmN[i].w, 0.0, 1.0); if (em >= 0.9999) continue;
    // scene-local surface coordinates of this direction
    float lx = ${ye.toFixed(1)} * dot(d, uWmE[i].xyz) / c, lz = ${ye.toFixed(1)} * dot(d, uWmF[i]) / c;
    float dn = length(vec2(lx, lz)) / n.w; if (dn >= 1.0) continue;
    vec2 uv = vec2(lx, lz) / n.w * 0.5 + 0.5; uv = (uv * ${dn-1}.0 + 0.5) / ${dn}.0;
    float ha = texture2D(tWmH, vec2(uv.x, (uv.y + float(i)) / ${Rn}.0)).r, base = uWmE[i].w;
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
`;function br(n){if(!n||n.userData.wm)return n;n.userData.wm=!0;const t={...ti,uEmN:pi.uEmN};if(n.isShaderMaterial){const s="vec4 mv = modelViewMatrix * vec4(p, 1.0);";return n.vertexShader.includes(s)&&(Object.assign(n.uniforms,t),n.vertexShader=ml+`uniform vec4 uEmN[7];
`+gl+n.vertexShader.replace(s,`{ vec3 wmN0 = vec3(0.0, 1.0, 0.0); p += wmLocal(p, wmN0, false); }
`+s),n.needsUpdate=!0),n}const e=n.onBeforeCompile,i=n.customProgramCacheKey(),r=!!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)&&!n.flatShading;return n.onBeforeCompile=function(s,a){e.call(this,s,a),Object.assign(s.uniforms,t);const o=/uniform vec4 uEmN\[7\]/.test(s.vertexShader)?"":`uniform vec4 uEmN[7];
`;let l=s.vertexShader.replace("void main() {",ml+o+gl+`
void main() {`);r?l=l.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 vec3 wmDl = wmLocal(position, objectNormal, true);`).replace("#include <project_vertex>",`transformed += wmDl;
#include <project_vertex>`):l=l.replace("#include <project_vertex>",`{ vec3 wmN0 = vec3(0.0, 1.0, 0.0); transformed += wmLocal(transformed, wmN0, false); }
#include <project_vertex>`),s.vertexShader=l},n.customProgramCacheKey=()=>i+"|wf"+(r?"n":""),n.needsUpdate=!0,n}let _l=null;const tm=()=>_l||(_l=br(new Ts({depthPacking:3201})));function Oi(n,t){n.traverse(e=>{if(!e.material)return;const i=Array.isArray(e.material)?e.material:[e.material];i.forEach(br),!(!(e.isMesh||e.isInstancedMesh)||!e.castShadow)&&(e.customDepthMaterial?br(e.customDepthMaterial):e.customDepthMaterial=i[0]?.userData?.U?.uEmN&&!i[0].defines?.TRI_MIX&&t?br(t()):tm())})}const Bi=Math.PI/180,He=()=>new L;async function em({canvas:n,base:t,onProgress:e,reducedMotion:i}){const r=matchMedia("(max-width: 820px), (pointer: coarse)").matches;Le.low=r||(navigator.hardwareConcurrency||4)<=4;const s=new m0({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1});if(!s.capabilities.isWebGL2)throw new Error("WebGL2 unavailable");const a=Le.low?1.25:1.75;s.setPixelRatio(Math.min(devicePixelRatio||1,a)),s.shadowMap.enabled=!0,s.shadowMap.type=2,s.toneMapping=0,s.outputColorSpace=gi,s.info.autoReset=!1,e(.02,"Gathering stone and timber"),await fp(t,I=>e(.02+I*.3,"Gathering stone and timber"));const o=()=>new Promise(I=>setTimeout(I,0));for(pi.uEmN.value=we.map(I=>new he(I.anchor.n.x,I.anchor.n.y,I.anchor.n.z,i?1:0));pi.uEmN.value.length<7;)pi.uEmN.value.push(new he(0,-1,0,1));Hi.uRipC.value=new L(0,1,0),Hi.uRip.value=new he(0,0,3,0);const l=new No;l.background=new Lt(329482),l.fog=new Ia(659222,0);const c=new xa(s);{const I=new No;I.add(new $t(new qe(50,32,16),new Oe({side:1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vP; void main(){ float up = vP.y * 0.5 + 0.5; vec3 c = mix(vec3(0.004, 0.005, 0.008), vec3(0.16, 0.2, 0.3), smoothstep(0.35, 1.0, up));
        c += vec3(1.6, 0.95, 0.5) * pow(max(0.0, dot(vP, normalize(vec3(0.7, 0.35, 0.5)))), 6.0); c += vec3(0.25, 0.35, 0.6) * pow(max(0.0, dot(vP, normalize(vec3(-0.8, 0.5, -0.2)))), 4.0); gl_FragColor = vec4(c, 1.0); }`}))),l.environment=c.fromScene(I,.02).texture,l.environmentIntensity=.7}const u=new cn(30,1,.5,6e3),h=new rp(16777215,3);h.castShadow=!0,h.shadow.mapSize.set(Le.low?1024:2048,Le.low?1024:2048),h.shadow.bias=-4e-4;const f=new tp(4018800,1840658,.55);l.add(h,h.target,f);const d=Array.from({length:Le.low?3:6},()=>{const I=new np(16748608,0,8,1.6);return l.add(I),I});e(.34,"Raising the land"),await o(),Qp(we),ti.uWmOn.value=/[?&]nomorph/.test(location.search)?0:1;const g=Np();l.add(g);const v=()=>br(_p());Oi(g,v),e(.6,"Filling the seas"),await o();const m=Op(),p=Bp(),S=zp(),M=Gp(),_=Vp(),D=kp(we.map(I=>I.anchor.n));l.add(m,p,S,M,_,D);const w=new Oe({transparent:!0,depthWrite:!1,blending:2,uniforms:{uE:{value:0},uTime:{value:0},uTint:{value:new Lt(14674175)},uMode:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uE, uTime, uMode; uniform vec3 uTint;
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
        gl_FragColor = vec4(c * edge, 1.0); }`}),A=new $t(new Yi(1,1),w);A.frustumCulled=!1,A.visible=!1,l.add(A);const R=()=>s.getPixelRatio();let y=2,x=2;const C=new La(2,2);C.type=1014;const z=new kn(2,2,{type:1016,depthTexture:C,samples:Le.low?0:4}),O=()=>new kn(2,2,{type:1016,depthBuffer:!1}),V=O(),Z=O(),W=O(),ct=O(),q=O(),Mt=new Ee;Mt.setAttribute("position",new re([-1,-1,0,3,-1,0,-1,3,0],3));const wt=new Ca,Dt=new $t(Mt,null);Dt.frustumCulled=!1;const Kt="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",ce=Le.low?12:28,K=new Oe({uniforms:{tColor:{value:null},tDepth:{value:C},uNear:{value:1},uFar:{value:1e3},uFocus:{value:10},uAp:{value:0},uPx:{value:new ft},uMaxR:{value:14},uAoR:{value:100}},vertexShader:Kt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D tColor; uniform sampler2D tDepth; uniform float uNear, uFar, uFocus, uAp, uMaxR, uAoR; uniform vec2 uPx;
      float lin(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      float coc(float d){ if (d > uFar * 0.3) return 0.0; return clamp(abs(d - uFocus) / max(d, 0.001) * uAp * 26.0 - 0.6, 0.0, uMaxR); }
      void main(){ float d0 = lin(texture2D(tDepth, vUv).x); float c0 = coc(d0); vec3 acc = texture2D(tColor, vUv).rgb; float wsum = 1.0;
        if (uAp > 0.01) { for (int i = 1; i <= ${ce}; i++) { float fi = float(i); float rr = sqrt(fi / ${ce}.0); float a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * rr; vec2 uv = vUv + o * uPx * max(c0, 2.0) ; float ds = lin(texture2D(tDepth, uv).x); float cs = coc(ds);
          // a sample contributes if its own blur reaches this pixel; sharp foreground does not bleed
          float w = smoothstep(0.0, 1.0, (ds < d0 ? cs : min(cs, c0)) - rr * max(c0, 2.0) + 1.0); acc += texture2D(tColor, uv).rgb * w; wsum += w; } }
        vec3 col = acc / wsum; float ao = 0.0;
        // contact shading from depth alone: darkens creases (wall meets ground, eaves, between figures), ignores flat slopes
        if (d0 < uFar * 0.2) { float rpx = clamp(uAoR / d0, 2.0, 36.0);
          for (int i = 0; i < 4; i++) { float a = float(i) * 0.785 + 0.4; vec2 o = vec2(cos(a), sin(a)) * uPx * rpx;
            float da = lin(texture2D(tDepth, vUv + o).x), db = lin(texture2D(tDepth, vUv - o).x); ao += clamp((2.0 * d0 - da - db) / (d0 * 0.022), 0.0, 1.0); }
          ao *= 0.25 * smoothstep(uFar * 0.2, uFar * 0.02, d0); }
        gl_FragColor = vec4(col * (1.0 - ao * 0.6), 1.0); }`}),mt=new Oe({uniforms:{t:{value:null}},vertexShader:Kt,depthTest:!1,depthWrite:!1,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){ vec3 c = texture2D(t, vUv).rgb; float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(0.9, 2.2, l), 1.0); }"}),Tt=new Oe({uniforms:{t:{value:null},uDir:{value:new ft}},vertexShader:Kt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D t; uniform vec2 uDir; void main(){ vec3 c = texture2D(t, vUv).rgb * 0.227;
      c += (texture2D(t, vUv + uDir * 1.385).rgb + texture2D(t, vUv - uDir * 1.385).rgb) * 0.316; c += (texture2D(t, vUv + uDir * 3.231).rgb + texture2D(t, vUv - uDir * 3.231).rgb) * 0.0703; gl_FragColor = vec4(c, 1.0); }`}),_t=new Oe({uniforms:{t:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:.6},uExp:{value:1},uTime:{value:0},uVig:{value:1},uTint:{value:new L(1,1,1)},uDim:{value:1}},vertexShader:Kt,depthTest:!1,depthWrite:!1,fragmentShader:`varying vec2 vUv; uniform sampler2D t, tB1, tB2; uniform float uBloom, uExp, uTime, uVig, uDim; uniform vec3 uTint;
      vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
      void main(){ vec3 c = texture2D(t, vUv).rgb; c += (texture2D(tB1, vUv).rgb * 0.6 + texture2D(tB2, vUv).rgb * 0.9) * uBloom;
        c *= uExp * uTint; vec2 q = vUv - 0.5; c *= mix(1.0, smoothstep(0.98, 0.2, length(q * vec2(1.05, 1.25))), 0.74 * uVig);
        c = aces(c); float lum = dot(c, vec3(0.299, 0.587, 0.114)); c = mix(vec3(lum), c, 1.04);
        c *= mix(vec3(0.9, 0.97, 1.08), vec3(1.07, 1.0, 0.9), smoothstep(0.05, 0.6, lum)); c = mix(c, c * c * (3.0 - 2.0 * c), 0.28); c = pow(c, vec3(1.0 / 2.2));
        c += (h(gl_FragCoord.xy) - 0.5) * 0.028; gl_FragColor = vec4(c * uDim, 1.0); }`}),Vt=(I,B)=>{Dt.material=I,s.setRenderTarget(B),s.render(Dt,wt)};function Jt(){const I=n.clientWidth||innerWidth,B=n.clientHeight||innerHeight;s.setSize(I,B,!1),y=Math.floor(I*R()),x=Math.floor(B*R()),z.setSize(y,x),V.setSize(y,x),Z.setSize(y>>2,x>>2),W.setSize(y>>2,x>>2),ct.setSize(y>>3,x>>3),q.setSize(y>>3,x>>3),u.aspect=I/B,u.updateProjectionMatrix(),K.uniforms.uPx.value.set(1/y,1/x),K.uniforms.uMaxR.value=x/62}const Yt=Re.reduce((I,B)=>I+B.w,0),te=[];{let I=0;for(const B of Re)te.push(I/Yt),I+=B.w}const st=Ta(6,8),dt=()=>u.aspect<.8,P=Re.map(I=>{const B={...I,shift:I.shift??0};if(I.s>=0){const $=we[I.s].anchor;B.dir=$.n.clone();const et=Tn($,I.x,I.z);B.target=Vi(I.x,I.z,et+I.th).applyMatrix4($.matrix)}else B.dir=I.s===-2?we[_s.scene].anchor.n.clone():st.clone(),B.target=He();return I.blend&&B.target.copy(we[0].anchor.n).multiplyScalar(ye*I.blend),B.ld=Math.log(I.dist),B}),Ot=(I,B,$,et,lt)=>{const rt=lt*lt,X=rt*lt;return .5*(2*B+(-I+$)*lt+(2*I-5*B+4*$-et)*rt+(-I+3*B-3*$+et)*X)},ut={};for(const[I,B]of Object.entries(_a))ut[I]={light:new Lt(B.light),sky:new Lt(B.sky),ground:new Lt(B.ground),fog:new Lt(B.fog)};const nt={target:He(),dir:He(),pos:He(),up:He(),light:new Lt,sky:new Lt,ground:new Lt,fog:new Lt},vt=He(),kt=He(),Pt=He(),T=He(),b=He(),G=new L(0,1,0),j=I=>{vt.crossVectors(G,I).normalize(),kt.crossVectors(vt,I).normalize()},at=(I,B,$,et)=>{j(I);const lt=B*Bi,rt=$*Bi;return Pt.copy(vt).multiplyScalar(Math.sin(lt)).addScaledVector(kt,Math.cos(lt)),et.copy(Pt).multiplyScalar(Math.cos(rt)).addScaledVector(I,Math.sin(rt)).normalize()};{const I=Ta(8,12);j(I);const B=I.clone().multiplyScalar(Math.cos(.76)).addScaledVector(kt,Math.sin(.76)).normalize(),$=vt.clone().multiplyScalar(.75).addScaledVector(I,.5).addScaledVector(kt,-.44);$.addScaledVector(B,-$.dot(B)).normalize(),_.quaternion.setFromRotationMatrix(new se().makeBasis($,B,$.clone().cross(B)))}const Q=at(we[_s.scene].anchor.n,_s.az,_s.el,He()).clone(),At=_.userData;At.main.visible=!1,At.inner.visible=!1,At.sunRing.visible=!1,At.moonRing.visible=!1,l.add(At.moon),At.moon.scale.setScalar(3.4),At.moon.material.emissive=new Lt(0);const St=new L().crossVectors(Q,new L(0,1,0)).normalize(),pt={x:0,y:0,sx:0,sy:0,yaw:0,syaw:0,nudge:0,snudge:0},Qt={day:4,lunar:0,tint:new Lt(16756810)};let tt=null;const It={light:new Lt(16771272),sky:new Lt(5661308),fog:new Lt(2763827)},Xt=new Lt,xt={u:0,mood:{},camDist:400,key:0};function Ft(I){let B=0;for(;B<Re.length-2&&te[B+1]<=I;)B++;const $=(te[B+1]??1)-te[B];let et=$>0?Te((I-te[B])/$,0,1):0;const lt=P[Math.max(0,B-1)],rt=P[B],X=P[Math.min(Re.length-1,B+1)],J=P[Math.min(Re.length-1,B+2)],Ut=ve=>Ot(lt[ve],rt[ve],X[ve],J[ve],et);if(nt.target.set(Ot(lt.target.x,rt.target.x,X.target.x,J.target.x,et),Ot(lt.target.y,rt.target.y,X.target.y,J.target.y,et),Ot(lt.target.z,rt.target.z,X.target.z,J.target.z,et)),nt.dir.set(Ot(lt.dir.x,rt.dir.x,X.dir.x,J.dir.x,et),Ot(lt.dir.y,rt.dir.y,X.dir.y,J.dir.y,et),Ot(lt.dir.z,rt.dir.z,X.dir.z,J.dir.z,et)).normalize(),rt.s>=0&&X.s>=0&&rt.s!==X.s){const ve=nt.target.length(),Xe=Zt(rt.target.length(),X.target.length(),et);nt.target.multiplyScalar(Xe/Math.max(ve,.001))}let yt=Math.exp(Te(Ut("ld"),Math.min(rt.ld,X.ld)-.12,Math.max(rt.ld,X.ld)+.25)),Ht=Ut("az"),qt=Te(Ut("el"),-30,85);const ht=Ut("fov"),Wt=et*et*(3-2*et),Bt=Zt(rt.ap,X.ap,Wt),fe=Zt(rt.shift,X.shift,Wt);dt()&&(yt*=rt.s<0||X.s<0?Zt(1.55,1.2,0):1.25),Ht+=pt.sx*Zt(5,2.5,Bt)+pt.syaw+pt.snudge*Zt(2.2,5,Bt),qt=Te(qt-pt.sy*2.2+pt.snudge*.8,-30,85),yt*=1-pt.snudge*.045,at(nt.dir,Ht,qt,T),nt.pos.copy(nt.target).addScaledVector(T,yt),nt.up.copy(nt.dir).multiplyScalar(Math.cos(qt*Bi)).addScaledVector(Pt,-Math.sin(qt*Bi)).normalize();const de=nt.pos.length();b.copy(nt.pos).divideScalar(de);const Pe=ye+Math.max(0,Rr(b.x,b.y,b.z))+.45+(rt.s>=0&&X.s>=0&&rt.s!==X.s?22*Math.sin(Math.PI*et):0);de<Pe&&nt.pos.copy(b).multiplyScalar(Pe);const Ne=_a[rt.mood],un=_a[X.mood],Dn=ut[rt.mood],Wn=ut[X.mood],Me=xt.mood;for(const ve of["li","laz","lel","ai","fd","exp","bloom","ecl","atmo","stars"])Me[ve]=Zt(Ne[ve],un[ve],Wt);if(nt.light.copy(Dn.light).lerp(Wn.light,Wt),nt.sky.copy(Dn.sky).lerp(Wn.sky,Wt),nt.ground.copy(Dn.ground).lerp(Wn.ground,Wt),nt.fog.copy(Dn.fog).lerp(Wn.fog,Wt),xt.skyW=0,tt){const ve=tt.w!=null?tt.w:(rt.mood==="arena"?1-Wt:0)+(X.mood==="arena"?Wt:0),Xe=tt.amt;xt.skyW=ve,ve>0&&(nt.light.lerp(Xt.copy(It.light).lerp(tt.light,Xe),ve),nt.sky.lerp(Xt.copy(It.sky).lerp(tt.sky,Xe),ve),nt.fog.lerp(Xt.copy(It.fog).lerp(tt.fog,Xe),ve),Me.li=Zt(Me.li,Zt(3.3,tt.li,Xe),ve),Me.ai=Zt(Me.ai,Zt(.8,.55,Xe),ve),Me.ecl=tt.w!=null?Math.max(Me.ecl*(1-ve),Xe*ve):Zt(Me.ecl,Xe,ve),Me.exp=Zt(Me.exp,Zt(1,1.22,Xe),ve),Me.stars=Zt(Me.stars,Xe,ve))}xt.key=B,xt.t=et,xt.dist=yt,xt.fov=ht,xt.ap=Bt,xt.shift=dt()?fe*0:fe}{const I=new se,B=He(),$=He();for(let et=0;et<=900;et++){if(Ft(et/900),xt.dist>30)continue;let lt=null,rt=1e9;for(const X of we){const J=X.anchor.n.distanceToSquared(nt.dir);J<rt&&(rt=J,lt=X)}I.copy(lt.anchor.matrix).invert(),B.copy(nt.pos).applyMatrix4(I),$.copy(nt.target).applyMatrix4(I),lt.sight.push([B.x,B.z,$.x,$.z])}}e(.72,"Lighting the first hearth"),await o(),we[0].construct(),Oi(we[0].group,v),l.add(we[0].group),e(.86,"Lighting the first hearth"),await o(),we[1].construct(),Oi(we[1].group,v),l.add(we[1].group);const oe=Re.map((I,B)=>I.id?te[B]:null).filter(I=>I!=null),ne=(I,B)=>{const $=Math.min(I,B),et=Math.max(I,B),lt=oe.filter(rt=>rt>$+1e-4&&rt<et-1e-4).length;return lt>=1?Math.pow(lt+1,1.4):1},me=3,N=1.7,bt=3,Y={v:0},it=Re.map(()=>1);{const I=$=>Re[$+1]&&Re[$].s!==Re[$+1].s;let B=0;for(let $=1;$<=Re.length;$++)if($===Re.length||Re[$].id){const et=[];for(let X=B;X<$&&X<Re.length-1;X++)et.push(X);const lt=et.reduce((X,J)=>X+(I(J)?bt:1),0),rt=et.some(I)?me:N;et.forEach(X=>{it[X]=rt*(I(X)?bt:1)/Math.max(1,lt)}),B=$}}const Rt=new ap;let gt=0,ee=0,_e=!0,xe=0,le=2,tn=0,rn=1,Qi=1;const vi=He(),bn=He(),tr=He(),xi=He();(new URLSearchParams(location.search).has("qa")||navigator.webdriver===!0)&&(window.__wm=ti);const Dr=Re.map((I,B)=>{const $=Re[B+1];return $&&I.s>=0&&$.s>=0&&I.s!==$.s?{A:we[I.s],B:we[$.s]}:null});let ii=null,er=0;const Pn={key:"",a:0},Mi=new De({color:1907236,roughness:1}),nr=new De({color:12169892,roughness:.9}),En=(I,B)=>new De({color:0,emissive:I,emissiveIntensity:B}),Cs=En(16756832,7),Lr=new pn(.17,.58,10),E=new qe(.085,10,8),U=new qe(1,8,6);function k(I,B){const $=new be,et=new $t(Lr,Mi),lt=new $t(E,B?nr:Mi),rt=new $t(Lr,Mi);if(et.position.y=.29,lt.position.y=.6,rt.position.set(0,.66,-.02),rt.scale.set(.62,.3,.62),et.castShadow=rt.castShadow=!0,$.add(et,lt,rt),!B){const X=new $t(U,Cs);X.scale.setScalar(.03),X.position.set(0,.4,.17),$.add(X)}return $.scale.setScalar(I/.7),$}const H=(I,B,$,et,lt=0)=>(B.position.copy(Vi($,et,Tn(I,$,et)+lt)),B.userData.y=B.position.y,B),F=[{key:"nuns",s:3,make(I){const B=new be,$=[];for(let J=0;J<12;J++){const Ut=J%2,yt=Math.floor(J/2),Ht=k(.66+J%3*.04);H(I,Ht,(Ut?1.5:.4)+Math.sin(yt*1.7)*.1,.9+yt*.62),Ht.userData.d=yt*.11+Ut*.04,$.push(Ht),B.add(Ht)}const et=k(1,!0);H(I,et,2.45,2.6),et.userData.d=.1,$.push(et),B.add(et);const lt=new $t(new ni(.2,.03,.15),nr);lt.position.set(0,.42,.2),lt.rotation.x=-.5,et.add(lt);const rt=new $t(U,En(16756832,9));rt.scale.setScalar(.05),rt.position.set(.24,.5,.18),et.add(rt);const X=new $t(U,En(9067775,0));return X.scale.setScalar(.5),H(I,X,0,-1.2,5.2),B.add(X),{g:B,update(J,Ut){for(const Ht of $){const qt=Te((J-Ht.userData.d)/.5,0,1),ht=qt*qt*(3-2*qt);Ht.position.y=Ht.userData.y-(1-ht)*1.1,Ht.visible=qt>.01,Ht.rotation.z=Math.sin(Ut*.7+Ht.userData.d*30)*.035*ht}const yt=Math.pow(Math.max(0,Math.sin(Ut*1.05)),12);X.material.emissiveIntensity=5*yt*Nt(.6,1,J),X.visible=!1,rt.material.emissiveIntensity=9*(.8+.2*Math.sin(Ut*11))}}}},{key:"arena",s:5,make(I){const B=new be,$=new De({color:1707018,roughness:.85}),et=new qe(1,18,12),lt=new nn(.5,.36,1,10),rt=new be,X=(yt,Ht,qt,ht,Wt,Bt,fe,de,Pe)=>{const Ne=new $t(yt,$);Ne.position.set(Ht,qt,ht),Ne.rotation.set(Wt,0,Bt),Ne.scale.set(fe,de,Pe),Ne.castShadow=!0,rt.add(Ne)};X(et,0,2.2,0,.25,0,1,1.15,.8),X(et,0,3.25,.2,.3,0,1.15,.7,.75),X(et,0,3.95,.55,0,0,.42,.42,.48);for(const yt of[-1,1])X(lt,yt*1.35,2.5,.3,.2,yt*.35,.5,2.3,.5),X(et,yt*1.75,1.35,.6,0,0,.42,.4,.42),X(lt,yt*.5,.75,0,0,0,.62,1.7,.62),X(new pn(.11,.9,8),yt*.34,4.45,.5,-.25,-yt*.55,1,1,1);const J=En(16726546,0);for(const yt of[-1,1]){const Ht=new $t(U,J);Ht.scale.setScalar(.06),Ht.position.set(yt*.16,4.02,.98),rt.add(Ht)}const Ut=new $t(U,En(16722440,0));return Ut.scale.set(.3,.16,.12),Ut.position.set(0,2.6,.78),rt.add(Ut),H(I,rt,0,0),rt.rotation.y=Math.atan2(-.93,-.37),rt.scale.setScalar(.62),B.add(rt),{g:B,update(yt,Ht){const qt=Te((yt-.35)/.65,0,1),ht=qt*qt*(3-2*qt);rt.visible=qt>.01,rt.position.y=rt.userData.y-(1-ht)*3.4,rt.rotation.z=Math.sin(Ht*.5)*.04*ht,rt.scale.set(.62,.62*(1+Math.sin(Ht*1.3)*.02),.62),J.emissiveIntensity=16*Nt(.6,1,qt),Ut.material.emissiveIntensity=2.2*Nt(.5,1,qt)*(.7+.3*Math.sin(Ht*2.2))}}}},{key:"arena",s:5,make(I){const $=new be,et=[];for(let lt=0;lt<14;lt++){const rt=lt/14*6.283+.2,X=new $t(U,En(16734748,0));H(I,X,Math.cos(rt)*6.3,Math.sin(rt)*5.6,2.55),X.userData.i=lt,et.push(X),$.add(X)}return{g:$,update(lt,rt){for(const X of et){const J=Te((lt*1.25-X.userData.i/14)/.12,0,1),Ut=.75+.25*Math.sin(rt*13+X.userData.i*2.3);X.visible=J>.01,X.scale.set(.11*J,.2*J*Ut,.11*J),X.material.emissiveIntensity=5*J*Ut}}}}},{key:"nuns",s:3,make(I){const B=new be,$=new Es({color:131331}),et=new qe(1,14,10),lt=new be,rt=(X,J,Ut,yt,Ht,qt,ht,Wt)=>{const Bt=new $t(X,$);Bt.position.set(J,Ut,yt),Bt.rotation.z=Ht,Bt.scale.set(qt,ht,Wt),lt.add(Bt)};rt(et,0,5.2,0,0,2.3,4.4,1.2),rt(et,0,9.6,0,0,3.1,1.5,1.2),rt(et,0,11.4,.2,0,.95,1.05,.9);for(const X of[-1,1])rt(new pn(.34,3.2,7),X*1.25,13,.2,-X*.5,1,1,1),rt(et,X*3.6,7.2,0,X*.25,.75,3.4,.75);return H(I,lt,-.6,-7.5),B.add(lt),{g:B,update(X,J){const Ut=Te((X-.8)/.2,0,1),yt=Ut*Ut*(3-2*Ut);lt.visible=Ut>.01,lt.position.y=lt.userData.y-(1-yt)*15,lt.rotation.z=Math.sin(J*.35)*.02}}}},{key:"kingdom",s:4,make(I){const B=new be,$=new De({color:2760728,roughness:.9}),et=new De({color:8000528,roughness:.8,side:2,emissive:2098178}),lt=new De({color:13214812,roughness:.5,side:2,emissive:3811850}),rt=[];for(let X=0;X<10;X++){const J=Math.floor(X/2),Ut=new be,yt=new $t(new nn(.04,.05,5.6,6),$),Ht=new $t(new Yi(.9,1.9,1,6),et),qt=new $t(new Oa(.22,16),lt);yt.position.y=2.8,Ht.position.set(.5,4.55,0),qt.position.set(.5,4.75,.014),yt.castShadow=Ht.castShadow=!0,Ut.add(yt,Ht,qt),Ut.userData.c=Ht;{const ht=X/10*6.283+.3;H(I,Ut,.4+Math.cos(ht)*(3.2+X%3*1.1),1.6+Math.sin(ht)*(3+X%3*1))}Ut.rotation.y=.38,Ut.userData.d=J*.12,rt.push(Ut),B.add(Ut)}return{g:B,update(X,J){for(const Ut of rt){const yt=Te((X-Ut.userData.d)/.45,0,1),Ht=yt*yt*(3-2*yt);Ut.visible=yt>.01,Ut.position.y=Ut.userData.y-(1-Ht)*6.2,Ut.userData.c.rotation.y=Math.sin(J*1.7+Ut.userData.d*20)*.28}}}}},{key:"*",s:0,make(I){const B=new be,$=new De({color:1381146,roughness:1}),et=new De({color:9274488,roughness:.8}),lt=En(16767392,0),rt=new be,X=new $t(new pn(.13,.3,10),$),J=new $t(new qe(.07,12,10),et),Ut=new $t(new nn(.19,.21,.02,14),$),yt=new $t(new pn(.1,.3,10),$);X.position.y=.15,J.position.y=.34,Ut.position.y=.39,yt.position.set(0,.54,-.02),yt.rotation.x=-.25,rt.add(X,J,Ut,yt),X.castShadow=yt.castShadow=Ut.castShadow=!0;for(const Ht of[-1,1]){const qt=new $t(U,lt);qt.scale.setScalar(.012),qt.position.set(Ht*.026,.345,.063),rt.add(qt)}return H(I,rt,.7,2.75),rt.rotation.y=.5,rt.scale.setScalar(.85),B.add(rt),{g:B,update(Ht,qt){const ht=Ht*Ht*(3-2*Ht);rt.position.y=rt.userData.y-(1-ht)*.9,rt.rotation.z=Math.sin(qt*.5)*.03,lt.emissiveIntensity=6*ht*(.75+.25*Math.sin(qt*1.3))}}}},{key:"solar",s:4,make(I){const $=new As(U,En(16753226,6),96),et=new se,lt=He();return $.frustumCulled=!1,{g:$,update(rt,X){for(let J=0;J<96;J++){const Ut=J%4,yt=Math.floor(J/4),Ht=(yt*1.5+X*.22)%36/36,qt=Te((rt*1.3-(1-Ht)*.5)/.3,0,1),ht=-21+Ht*13+(Ut-1.5)*.4+Math.sin(yt*2.1)*.15,Wt=-16+Ht*10-(Ut-1.5)*.36;Vi(ht,Wt,Tn(I,ht,Wt)+.34,lt);const Bt=.12*qt*(.8+.2*Math.sin(X*9+J));et.makeScale(Bt,Bt,Bt).setPosition(lt),$.setMatrixAt(J,et)}$.instanceMatrix.needsUpdate=!0}}}}],ot={g:null,a:0,target:0,eyes:null};function Ct(){const I=new be,B=new De({color:460294,roughness:1}),$=(X,J,Ut,yt,Ht=0,qt=0,ht=1,Wt=1,Bt=1)=>{const fe=new $t(X,B);return fe.position.set(J,Ut,yt),fe.rotation.set(Ht,0,qt),fe.scale.set(ht,Wt,Bt),fe.castShadow=!0,I.add(fe),fe},et=new qe(1,16,12),lt=new nn(.5,.35,1,8);$(et,0,2.5,0,0,0,.75,.8,1.5),$(et,0,3,1,0,0,.62,.75,.7),$(lt,0,3.45,1.75,.9,0,.55,1.2,.55),$(et,0,3.85,2.35,.3,0,.3,.3,.52);for(const[X,J]of[[-.45,.95],[.45,.95],[-.4,-.95],[.4,-.95]])$(lt,X,1.05,J,0,X*.12,.3,2.3,.3);for(const X of[-1,1])$(lt,X*.45,4.5,2,-.2,-X*.7,.09,1.5,.09),$(lt,X*.95,5.05,1.9,.1,-X*.25,.07,.9,.07),$(lt,X*.7,4.95,2.35,.7,-X*.5,.06,.7,.06),$(lt,X*1.25,5.3,1.75,-.3,-X*1,.05,.6,.05);const rt=new De({color:0,emissive:16722458,emissiveIntensity:0});ot.eyes=rt;for(const X of[-1,1]){const J=new $t(new qe(.055,8,6),rt);J.position.set(X*.17,3.93,2.72),I.add(J)}return I}function zt(I){if(le>=we.length||(tn+=1,!I&&tn%20!==0))return;let B=null,$=1e9;for(const et of we)if(!et.group){const lt=et.anchor.n.distanceTo(vi);lt<$&&($=lt,B=et)}B&&(B.construct(),Oi(B.group,v),l.add(B.group),le++)}function Gt(){if(!_e)return;ee=requestAnimationFrame(Gt);const I=Math.min(Rt.getDelta(),.1);if(gt+=i?I*.25:I,i)xt.u=xe,Y.v=0;else{const ht=xt.key,Wt=Math.max(1e-4,(te[ht+1]??1)-te[ht]);Re[ht],Re[Math.min(Re.length-1,ht+1)];const Bt=xe-xt.u,fe=Wt/it[ht]*ne(xt.u,xe),de=Math.sign(Bt)*Math.min(Math.abs(Bt)*7,fe);Y.v+=(de-Y.v)*(1-Math.exp(-I*6)),xt.u+=Y.v*I,(Math.sign(xe-xt.u)!==Math.sign(Bt)||Math.abs(xe-xt.u)<1e-5)&&(xt.u=xe,Y.v=0)}pt.snudge+=(pt.nudge-pt.snudge)*(1-Math.exp(-I*6)),pt.sx+=(pt.x-pt.sx)*(1-Math.exp(-I*3)),pt.sy+=(pt.y-pt.sy)*(1-Math.exp(-I*3));const B=Nt(.09,0,xt.u)+Nt(.985,1,xt.u);pt.syaw+=(pt.yaw*B-pt.syaw)*(1-Math.exp(-I*4)),Ft(xt.u),u.position.copy(nt.pos),u.up.copy(nt.up),u.lookAt(nt.target);const $=nt.pos.length()-ye;vi.copy(nt.pos).normalize(),u.fov=xt.fov*(dt()?1.25:1),u.near=Te(Math.min($,xt.dist)*.08,.05,30),u.far=5200,u.filmOffset=-xt.shift*14,u.updateProjectionMatrix(),zt(!1);const et=xt.mood;Qt.lunar>.01&&nt.light.lerp(Qt.tint,.45*Qt.lunar*(1-xt.skyW)),at(nt.dir,et.laz,et.lel,bn),h.color.copy(nt.light),h.intensity=et.li,h.target.position.copy(nt.target),h.position.copy(nt.target).addScaledVector(bn,420);const lt=Te(xt.dist*.85,9,190),rt=h.shadow.camera;rt.left=-lt,rt.right=lt,rt.top=lt,rt.bottom=-lt,rt.near=60,rt.far=800,rt.updateProjectionMatrix(),h.shadow.normalBias=lt*.004,h.shadow.radius=2.5,f.color.copy(nt.sky),f.groundColor.copy(nt.ground),f.intensity=et.ai,f.position.copy(nt.dir),l.fog.color.copy(nt.fog),l.fog.density=et.fd*Nt(70,16,$),l.background.copy(nt.fog).multiplyScalar(.35*Nt(60,10,$)).add(T.set(.012,.016,.024)),p.material.uniforms.uGain.value=et.atmo,p.material.uniforms.uColor.value.copy(nt.sky).multiplyScalar(.8),S.material.uniforms.uFade.value=et.stars,S.material.uniforms.uPx.value=R(),S.position.copy(u.position),M.material.uniforms.uTime.value=gt,M.material.uniforms.uPx.value=R(),M.material.uniforms.uGain.value=Nt(8,40,$);const X=Nt(22,120,$);g.userData.mat.userData.U.uFar.value=X,m.userData.tick(gt),D.rotation.y=gt*.0035;{const ht=Qt.day/28*Math.PI*2;At.moon.position.copy(Q).multiplyScalar(Math.cos(ht)*185).addScaledVector(St,Math.sin(ht)*185),At.moon.position.y+=Math.sin(ht)*24,At.moon.material.emissive.copy(Qt.tint).multiplyScalar(Qt.lunar*.45),At.moon.rotation.y=gt*.02,At.moon.visible=!(xt.skyW>.2)}w.uniforms.uMode.value=tt&&xt.skyW>(tt.w!=null?.01:.5)?tt.mode:0,A.visible=et.ecl>.01||xt.skyW>(tt&&tt.w!=null?.01:.5),A.visible&&(tt&&tt.az!=null&&xt.skyW>.01?at(nt.dir,tt.az,tt.el,xi):xi.copy(Q),A.position.copy(u.position).addScaledVector(xi,3e3),A.quaternion.copy(u.quaternion),A.scale.setScalar(tt&&tt.size?tt.size:1250),w.uniforms.uE.value=et.ecl,w.uniforms.uTime.value=gt,tt&&w.uniforms.uTint.value.copy(tt.tint));{const ht=Dr[xt.key];ii=ht?ht.A:null,er=ht?xt.t:0}let J=null,Ut=1e9;const yt=R()*x/(2*Math.tan(u.fov*Bi/2))/300/R();for(const ht of we){if(!ht.group)continue;const Wt=tr.copy(ht.anchor.n).multiplyScalar(ye).distanceTo(nt.pos),Bt=ht.group.children[1];Bt.visible=Wt<(Le.low?150:420)&&ht.anchor.n.dot(vi)>.1,ht.group.children[0].material.userData.U.uFar.value=Nt(40,140,Wt),Wt<Ut&&(Ut=Wt,J=ht);{const de=ht.group.userData,Pe=i?1:Math.min(Nt(70,26,Wt),ht===ii?1-Nt(.05,.5,er):1);if(de.em==null&&(de.em=i?1:0,de.emA=-1),de.em+=(Pe-de.em)*(i?1:1-Math.exp(-I*2.6)),pi.uEmN.value[ht.index].w=de.em,Math.abs(Pe-de.em)<8e-4&&(de.em=Pe),Math.abs(de.em-de.emA)>4e-4){de.emA=de.em;const Ne=Bt.children,un=Ne.length,Dn=de.y0??(de.y0=Tn(ht.anchor,0,0));for(let Wn=0;Wn<un;Wn++){const Me=Ne[Wn];if(Me.material?.userData?.U?.uEmN){Me.visible=de.em>.004,Me.customDepthMaterial||(Me.customDepthMaterial=v());continue}const ve=!!(Me.material?.emissive&&Me.material.emissiveIntensity>.5&&Me.material.emissive.r+Me.material.emissive.g>.01)||!Me.isMesh,Xe=Te((de.em-(ve?.86:.42))/(ve?.14:.5),0,1),ir=Xe-1,Ha=Xe>=1?1:Math.max(1e-4,1+2.3*ir*ir*ir+1.3*ir*ir);Me.visible=Xe>.002,Me.scale.set(1,Ha,1),Me.position.y=Dn*(1-Ha)-1.2*(1-Xe)*(1-Xe)}}}const fe=ht.group.userData;fe.fx&&(fe.fx.U.uTime.value=gt,fe.fx.U.uPx.value=yt*R(),fe.fx.U.uGain.value=Nt(.8,1,fe.em??1)),Wt<80&&Bt.visible&&(fe.agents?.update(gt),fe.birds?.update(gt))}for(const ht of F){const Wt=we[ht.s];if(!Wt.group)continue;ht.inst||(ht.inst=ht.make(Wt.anchor),ht.a=0,Oi(ht.inst.g,v),Wt.group.add(ht.inst.g));const Bt=ht.key==="*"?Nt(.85,1,Wt.group.userData.em??0):Pn.key===ht.key?Pn.a:0;ht.a+=(Bt-ht.a)*(i?1:1-Math.exp(-I*1.5)),ht.inst.g.visible=ht.a>.01,ht.inst.g.visible&&ht.inst.update(ht.a,gt)}{const ht=we[2];if(ht.group&&!ot.g){ot.g=Ct();const Wt=-2,Bt=6.7;ot.base=Vi(Wt,Bt,Tn(ht.anchor,Wt,Bt)),ot.g.rotation.y=Math.atan2(-.93,-.37),Oi(ot.g,v),ht.group.add(ot.g)}if(ot.g){ot.a+=(ot.target-ot.a)*(1-Math.exp(-I*1.6));const Wt=ot.a,Bt=Wt*Wt*(3-2*Wt);ot.g.visible=Wt>.01,ot.g.position.copy(ot.base),ot.g.position.y+=-5.6*(1-Bt)+Math.sin(gt*.9)*.05*Bt,ot.g.rotation.z=Math.sin(gt*.6)*.03*Bt,ot.g.scale.setScalar(.5),ot.eyes.emissiveIntensity=14*Nt(.55,1,Wt)*(.8+.2*Math.sin(gt*3.1))}}if(J){const ht=J.group.userData.em??1,Wt=Math.sin(Math.PI*Te(ht,0,1));Hi.uRipC.value.copy(J.anchor.n),Hi.uRip.value.set(2+ht*44,.75*Wt*Nt(90,40,Ut),2.6+ht*2.2,-1.1*(1-ht)*Nt(110,60,Ut)*(i?0:1))}ti.uWmK.value.copy(nt.pos),d.forEach((ht,Wt)=>{const Bt=J?.group.userData.lights?.[Wt];if(!Bt||Ut>70){ht.intensity=0;return}ht.position.copy(Bt.p).applyMatrix4(J.anchor.matrix),ht.color.setHex(Bt.color),ht.distance=Bt.dist,ht.intensity=Bt.intensity*Nt(.7,1,J.group.userData.em??1)*(.85+.15*Math.sin(gt*9+Wt*2.1)*Math.sin(gt*5.7+Wt))*Nt(70,30,Ut)}),rn+=(Qi-rn)*(1-Math.exp(-I*6)),s.info.reset(),s.setRenderTarget(z),s.render(l,u);const Ht=nt.pos.distanceTo(nt.target);Object.assign(K.uniforms.tColor,{value:z.texture}),K.uniforms.uNear.value=u.near,K.uniforms.uFar.value=u.far,K.uniforms.uFocus.value=Ht,K.uniforms.uAp.value=xt.ap,K.uniforms.uAoR.value=.3*x/(2*Math.tan(u.fov*Bi/2)),Vt(K,V),mt.uniforms.t.value=V.texture,Vt(mt,Z),Tt.uniforms.t.value=Z.texture,Tt.uniforms.uDir.value.set(4/y,0),Vt(Tt,W),Tt.uniforms.t.value=W.texture,Tt.uniforms.uDir.value.set(0,4/x),Vt(Tt,Z),Tt.uniforms.t.value=Z.texture,Tt.uniforms.uDir.value.set(8/y,0),Vt(Tt,ct),Tt.uniforms.t.value=ct.texture,Tt.uniforms.uDir.value.set(0,8/x),Vt(Tt,q);const qt=_t.uniforms;qt.t.value=V.texture,qt.tB1.value=Z.texture,qt.tB2.value=q.texture,qt.uBloom.value=et.bloom,qt.uExp.value=et.exp,qt.uTime.value=gt%10,qt.uDim.value=rn*(i?1:Nt(.4,6,gt)),Vt(_t,null),jt.onFrame?.(xt)}const jt={renderer:s,scene:l,camera:u,state:xt,keys:Re,starts:te,scenes:we,setProgress(I,B){xe=Te(I,0,1),B&&(xt.u=xe,Y.v=0)},setPointer(I,B){pt.x=I,pt.y=B},addYaw(I){pt.yaw=Te(pt.yaw+I,-70,70)},setDim(I){Qi=I},setNudge(I){pt.nudge=i?0:I},setLife(I,B){Pn.key=I,Pn.a=B},setBeast(I){ot.target=i?I>.5?1:0:I},setHeavens(I){Qt.day=I.day,Qt.lunar=I.lunar,Qt.tint.set(I.tint)},setSky(I){tt=I?{mode:I.mode??0,amt:I.amt,li:I.li??1.9,light:new Lt(I.light),sky:new Lt(I.sky),fog:new Lt(I.fog),tint:new Lt(I.tint),w:I.w,az:I.az,el:I.el,size:I.size}:null},progressOf(I){const B=Re.findIndex($=>$.id===I);return B<0?0:te[B]},resize:Jt,start(){_e=!0,Rt.getDelta(),Jt(),Gt()},stop(){_e=!1,cancelAnimationFrame(ee)},buildAll(){for(;le<we.length;)zt(!0)},stats:()=>({calls:s.info.render.calls,tris:s.info.render.triangles,built:le})};return e(1,"The realm wakes"),jt}export{em as createWorld};
