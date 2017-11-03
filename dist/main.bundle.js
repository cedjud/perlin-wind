!function(t){function e(i){if(r[i])return r[i].exports;var s=r[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,r){"use strict";function i(){h.fillStyle="rgba(255, 255, 255, 1)",h.fillRect(0,0,o,n),h.beginPath(),h.fillStyle="rgba(0, 0, 0, 0)",h.lineWidth=1,h.moveTo(l,c+s.scaled([l,0]));for(var t=0;t<u;t++)h.lineTo(l+t,c+s.scaled([l+t,0]));h.stroke(),h.fill(),h.closePath(),h.beginPath(),h.arc(p,c+s.scaled([p,0]),4,0,2*Math.PI,!0),h.fillStyle="rgba(0,0,0,1)",h.fill(),h.closePath(),l=(p+=5)-u,p>o+200&&(p=0,c=Math.random()*n),window.requestAnimationFrame(i)}var s=new(function(t){return t&&t.__esModule?t:{default:t}}(r(1)).default)({frequency:.01,max:7,min:-7,octaves:1}),o=500,n=200,a=document.getElementById("canvas"),h=a.getContext("2d");a.width=o,a.height=n;var p=0,c=n/2,u=500,l=p-u;window.requestAnimationFrame(i)},function(t,e,r){"use strict";var i=function(){function t(t){if(void 0===t&&(t={}),t.hasOwnProperty("amplitude")){if("number"!=typeof t.amplitude)throw new Error("options.amplitude must be a number");this.amplitude=t.amplitude}else this.amplitude=1;if(t.hasOwnProperty("frequency")){if("number"!=typeof t.frequency)throw new Error("options.frequency must be a number");this.frequency=t.frequency}else this.frequency=1;if(t.hasOwnProperty("octaves")){if("number"!=typeof t.octaves||!isFinite(t.octaves)||Math.floor(t.octaves)!==t.octaves)throw new Error("options.octaves must be an integer");this.octaves=t.octaves}else this.octaves=1;if(t.hasOwnProperty("persistence")){if("number"!=typeof t.persistence)throw new Error("options.persistence must be a number");this.persistence=t.persistence}else this.persistence=.5;if(t.hasOwnProperty("random")){if("function"!=typeof t.random)throw new Error("options.random must be a function");this.random=t.random}else this.random=Math.random;var e;if(t.hasOwnProperty("min")){if("number"!=typeof t.min)throw new Error("options.min must be a number");e=t.min}else e=-1;var r;if(t.hasOwnProperty("max")){if("number"!=typeof t.max)throw new Error("options.max must be a number");r=t.max}else r=1;if(e>=r)throw new Error("options.min ("+e+") must be less than options.max ("+r+")");this.scale=-1===e&&1===r?function(t){return t}:function(t){return e+(t+1)/2*(r-e)};for(var i=new Uint8Array(256),s=0;s<256;s++)i[s]=s;for(var o,n,s=255;s>0;s--)o=Math.floor((s+1)*this.random()),n=i[s],i[s]=i[o],i[o]=n;this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(s=0;s<512;s++)this.perm[s]=i[255&s],this.permMod12[s]=this.perm[s]%12}return t.prototype.cylindrical=function(t,e){switch(e.length){case 2:return this.cylindrical2D(t,e[0],e[1]);case 3:return this.cylindrical3D(t,e[0],e[1],e[2]);default:return null}},t.prototype.cylindrical2D=function(t,e,r){var i=e/t,s=t/(2*Math.PI),o=2*i*Math.PI,n=s*Math.sin(o),a=s*Math.cos(o);return this.scaled3D(n,a,r)},t.prototype.cylindrical3D=function(t,e,r,i){var s=e/t,o=t/(2*Math.PI),n=2*s*Math.PI,a=o*Math.sin(n),h=o*Math.cos(n);return this.scaled4D(a,h,r,i)},t.prototype.dot=function(t,e){return t.slice(0,Math.min(t.length,e.length)).reduce(function(t,r,i){return t+r*e[i]},0)},t.prototype.raw=function(t){switch(t.length){case 2:return this.raw2D(t[0],t[1]);case 3:return this.raw3D(t[0],t[1],t[2]);case 4:return this.raw4D(t[0],t[1],t[2],t[3]);default:return null}},t.prototype.raw2D=function(e,r){var i=.5*(e+r)*(Math.sqrt(3)-1),s=Math.floor(e+i),o=Math.floor(r+i),n=(s+o)*t.G2,a=e-(s-n),h=r-(o-n),p=a>h?1:0,c=a>h?0:1,u=a-p+t.G2,l=h-c+t.G2,m=a-1+2*t.G2,f=h-1+2*t.G2,d=255&s,M=255&o,w=this.permMod12[d+this.perm[M]],y=this.permMod12[d+p+this.perm[M+c]],D=this.permMod12[d+1+this.perm[M+1]],G=.5-a*a-h*h,v=.5-u*u-l*l,b=.5-m*m-f*f;return 70.14805770653952*((G<0?0:Math.pow(G,4)*this.dot(t.GRAD3D[w],[a,h]))+(v<0?0:Math.pow(v,4)*this.dot(t.GRAD3D[y],[u,l]))+(b<0?0:Math.pow(b,4)*this.dot(t.GRAD3D[D],[m,f])))},t.prototype.raw3D=function(e,r,i){var s,o,n,a,h,p,c=(e+r+i)/3,u=Math.floor(e+c),l=Math.floor(r+c),m=Math.floor(i+c),f=(u+l+m)*t.G3,d=e-(u-f),M=r-(l-f),w=i-(m-f);d>=M?M>=w?(s=a=h=1,o=n=p=0):d>=w?(s=a=p=1,o=n=h=0):(n=a=p=1,s=o=h=0):M<w?(n=h=p=1,s=o=a=0):d<w?(o=h=p=1,s=n=a=0):(o=a=h=1,s=n=p=0);var y=d-s+t.G3,D=M-o+t.G3,G=w-n+t.G3,v=d-a+2*t.G3,b=M-h+2*t.G3,P=w-p+2*t.G3,A=d-1+3*t.G3,g=M-1+3*t.G3,q=w-1+3*t.G3,R=255&u,I=255&l,x=255&m,O=this.permMod12[R+this.perm[I+this.perm[x]]],E=this.permMod12[R+s+this.perm[I+o+this.perm[x+n]]],_=this.permMod12[R+a+this.perm[I+h+this.perm[x+p]]],j=this.permMod12[R+1+this.perm[I+1+this.perm[x+1]]],F=.5-d*d-M*M-w*w,S=.5-y*y-D*D-G*G,U=.5-v*v-b*b-P*P,T=.5-A*A-g*g-q*q;return 94.68493150681972*((F<0?0:Math.pow(F,4)*this.dot(t.GRAD3D[O],[d,M,w]))+(S<0?0:Math.pow(S,4)*this.dot(t.GRAD3D[E],[y,D,G]))+(U<0?0:Math.pow(U,4)*this.dot(t.GRAD3D[_],[v,b,P]))+(T<0?0:Math.pow(T,4)*this.dot(t.GRAD3D[j],[A,g,q])))},t.prototype.raw4D=function(e,r,i,s){var o=(e+r+i+s)*(Math.sqrt(5)-1)/4,n=Math.floor(e+o),a=Math.floor(r+o),h=Math.floor(i+o),p=Math.floor(s+o),c=(n+a+h+p)*t.G4,u=e-(n-c),l=r-(a-c),m=i-(h-c),f=s-(p-c),d=0,M=0,w=0,y=0;u>l?d++:M++,u>m?d++:w++,u>f?d++:y++,l>m?M++:w++,l>f?M++:y++,m>f?w++:y++;var D=d>=3?1:0,G=M>=3?1:0,v=w>=3?1:0,b=y>=3?1:0,P=d>=2?1:0,A=M>=2?1:0,g=w>=2?1:0,q=y>=2?1:0,R=d>=1?1:0,I=M>=1?1:0,x=w>=1?1:0,O=y>=1?1:0,E=u-D+t.G4,_=l-G+t.G4,j=m-v+t.G4,F=f-b+t.G4,S=u-P+2*t.G4,U=l-A+2*t.G4,T=m-g+2*t.G4,k=f-q+2*t.G4,B=u-R+3*t.G4,C=l-I+3*t.G4,W=m-x+3*t.G4,z=f-O+3*t.G4,H=u-1+4*t.G4,J=l-1+4*t.G4,K=m-1+4*t.G4,L=f-1+4*t.G4,N=255&n,Q=255&a,V=255&h,X=255&p,Y=this.perm[N+this.perm[Q+this.perm[V+this.perm[X]]]]%32,Z=this.perm[N+D+this.perm[Q+G+this.perm[V+v+this.perm[X+b]]]]%32,$=this.perm[N+P+this.perm[Q+A+this.perm[V+g+this.perm[X+q]]]]%32,tt=this.perm[N+R+this.perm[Q+I+this.perm[V+x+this.perm[X+O]]]]%32,et=this.perm[N+1+this.perm[Q+1+this.perm[V+1+this.perm[X+1]]]]%32,rt=.5-u*u-l*l-m*m-f*f,it=.5-E*E-_*_-j*j-F*F,st=.5-S*S-U*U-T*T-k*k,ot=.5-B*B-C*C-W*W-z*z,nt=.5-H*H-J*J-K*K-L*L;return 72.37855765153665*((rt<0?0:Math.pow(rt,4)*this.dot(t.GRAD4D[Y],[u,l,m,f]))+(it<0?0:Math.pow(it,4)*this.dot(t.GRAD4D[Z],[E,_,j,F]))+(st<0?0:Math.pow(st,4)*this.dot(t.GRAD4D[$],[S,U,T,k]))+(ot<0?0:Math.pow(ot,4)*this.dot(t.GRAD4D[tt],[B,C,W,z]))+(nt<0?0:Math.pow(nt,4)*this.dot(t.GRAD4D[et],[H,J,K,L])))},t.prototype.scaled=function(t){switch(t.length){case 2:return this.scaled2D(t[0],t[1]);case 3:return this.scaled3D(t[0],t[1],t[2]);case 4:return this.scaled4D(t[0],t[1],t[2],t[3]);default:return null}},t.prototype.scaled2D=function(t,e){for(var r=this.amplitude,i=this.frequency,s=0,o=0,n=0;n<this.octaves;n++)o+=this.raw2D(t*i,e*i)*r,s+=r,r*=this.persistence,i*=2;return this.scale(o/s)},t.prototype.scaled3D=function(t,e,r){for(var i=this.amplitude,s=this.frequency,o=0,n=0,a=0;a<this.octaves;a++)n+=this.raw3D(t*s,e*s,r*s)*i,o+=i,i*=this.persistence,s*=2;return this.scale(n/o)},t.prototype.scaled4D=function(t,e,r,i){for(var s=this.amplitude,o=this.frequency,n=0,a=0,h=0;h<this.octaves;h++)a+=this.raw4D(t*o,e*o,r*o,i*o)*s,n+=s,s*=this.persistence,o*=2;return this.scale(a/n)},t.prototype.spherical=function(t,e){switch(e.length){case 3:return this.spherical3D(t,e[0],e[1],e[2]);case 2:return this.spherical2D(t,e[0],e[1]);default:return null}},t.prototype.spherical2D=function(t,e,r){var i=r/t,s=2*(e/t)*Math.PI,o=i*Math.PI,n=Math.sin(o+Math.PI),a=2*Math.PI,h=a*Math.sin(s)*n,p=a*Math.cos(s)*n,c=a*Math.cos(o);return this.scaled3D(h,p,c)},t.prototype.spherical3D=function(t,e,r,i){var s=r/t,o=2*(e/t)*Math.PI,n=s*Math.PI,a=Math.sin(n+Math.PI),h=2*Math.PI,p=h*Math.sin(o)*a,c=h*Math.cos(o)*a,u=h*Math.cos(n);return this.scaled4D(p,c,u,i)},t.G2=(3-Math.sqrt(3))/6,t.G3=1/6,t.G4=(5-Math.sqrt(5))/20,t.GRAD3D=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,-1],[0,1,-1],[0,-1,-1]],t.GRAD4D=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=i}]);