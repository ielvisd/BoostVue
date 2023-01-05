'use strict';

const runner = require('./shared/ni.a8753743.cjs');
const fs = require('fs');
const require$$0 = require('path');
const os = require('os');
require('readline');
require('events');
require('node:buffer');
require('node:path');
require('node:child_process');
require('node:process');
require('child_process');
require('node:url');
require('node:os');
require('assert');
require('buffer');
require('stream');
require('util');
require('node:fs');
require('tty');

/** @license
 * fzf v0.5.1
 * Copyright (c) 2021-2022 Ajit
 * Licensed under BSD 3-Clause
 */
const t={216:"O",223:"s",248:"o",273:"d",295:"h",305:"i",320:"l",322:"l",359:"t",383:"s",384:"b",385:"B",387:"b",390:"O",392:"c",393:"D",394:"D",396:"d",398:"E",400:"E",402:"f",403:"G",407:"I",409:"k",410:"l",412:"M",413:"N",414:"n",415:"O",421:"p",427:"t",429:"t",430:"T",434:"V",436:"y",438:"z",477:"e",485:"g",544:"N",545:"d",549:"z",564:"l",565:"n",566:"t",567:"j",570:"A",571:"C",572:"c",573:"L",574:"T",575:"s",576:"z",579:"B",580:"U",581:"V",582:"E",583:"e",584:"J",585:"j",586:"Q",587:"q",588:"R",589:"r",590:"Y",591:"y",592:"a",593:"a",595:"b",596:"o",597:"c",598:"d",599:"d",600:"e",603:"e",604:"e",605:"e",606:"e",607:"j",608:"g",609:"g",610:"G",613:"h",614:"h",616:"i",618:"I",619:"l",620:"l",621:"l",623:"m",624:"m",625:"m",626:"n",627:"n",628:"N",629:"o",633:"r",634:"r",635:"r",636:"r",637:"r",638:"r",639:"r",640:"R",641:"R",642:"s",647:"t",648:"t",649:"u",651:"v",652:"v",653:"w",654:"y",655:"Y",656:"z",657:"z",663:"c",665:"B",666:"e",667:"G",668:"H",669:"j",670:"k",671:"L",672:"q",686:"h",867:"a",868:"e",869:"i",870:"o",871:"u",872:"c",873:"d",874:"h",875:"m",876:"r",877:"t",878:"v",879:"x",7424:"A",7427:"B",7428:"C",7429:"D",7431:"E",7432:"e",7433:"i",7434:"J",7435:"K",7436:"L",7437:"M",7438:"N",7439:"O",7440:"O",7441:"o",7442:"o",7443:"o",7446:"o",7447:"o",7448:"P",7449:"R",7450:"R",7451:"T",7452:"U",7453:"u",7454:"u",7455:"m",7456:"V",7457:"W",7458:"Z",7522:"i",7523:"r",7524:"u",7525:"v",7834:"a",7835:"s",8305:"i",8341:"h",8342:"k",8343:"l",8344:"m",8345:"n",8346:"p",8347:"s",8348:"t",8580:"c"};for(let at="̀".codePointAt(0);at<="ͯ".codePointAt(0);++at){const e=String.fromCodePoint(at);for(const n of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"){const r=(n+e).normalize().codePointAt(0);r>126&&(t[r]=n);}}const e={a:[7844,7863],e:[7870,7879],o:[7888,7907],u:[7912,7921]};for(const at of Object.keys(e)){const n=at.toUpperCase();for(let r=e[at][0];r<=e[at][1];++r)t[r]=r%2==0?n:at;}function n(e){if(e<192||e>8580)return e;const n=t[e];return void 0!==n?n.codePointAt(0):e}function r(t,e){return t>e?t:e}const s=t=>t.split("").map((t=>t.codePointAt(0))),i=new Set(" \f\n\r\t\v  \u2028\u2029  　\ufeff".split("").map((t=>t.codePointAt(0))));for(let at=" ".codePointAt(0);at<=" ".codePointAt(0);at++)i.add(at);const u="".codePointAt(0),f="A".codePointAt(0),h="Z".codePointAt(0),d="a".codePointAt(0),g="z".codePointAt(0),m="0".codePointAt(0),p="9".codePointAt(0);function b(t,e,n){return n?t:e-t-1}var y,P;function w(t){return t?new Set:null}function z(t,e,n){if(null!==e&&e.i16.length>t+n){return [t+n,e.i16.subarray(t,t+n)]}return [t,new Int16Array(n)]}function L(t,e,n){if(null!==e&&e.i32.length>t+n){return [t+n,e.i32.subarray(t,t+n)]}return [t,new Int32Array(n)]}function S(t){return t>=d&&t<=g?1:t>=f&&t<=h?2:t>=m&&t<=p?4:0}function A(t){const e=String.fromCodePoint(t);return e!==e.toUpperCase()?1:e!==e.toLowerCase()?2:null!==e.match(/\p{Number}/gu)?4:null!==e.match(/\p{Letter}/gu)?3:0}function C(t){return t<=u?S(t):A(t)}function v(t,e){return 0===t&&0!==e?8:1===t&&2===e||4!==t&&4===e?7:0===e?8:0}function k(t,e,n,r){let s=t.slice(r),o=s.indexOf(n);if(0===o)return r;if(!e&&n>=d&&n<=g){o>0&&(s=s.slice(0,o));const t=s.indexOf(n-32);t>=0&&(o=t);}return o<0?-1:r+o}function x(t){for(const e of t)if(e>=128)return !1;return !0}function E(t,e,n){if(!x(t))return 0;if(!x(e))return -1;let r=0,s=0;for(let o=0;o<e.length;o++){if(s=k(t,n,e[o],s),s<0)return -1;0===o&&s>0&&(r=s-1),s++;}return r}(P=y||(y={}))[P.NonWord=0]="NonWord",P[P.Lower=1]="Lower",P[P.Upper=2]="Upper",P[P.Letter=3]="Letter",P[P.Number=4]="Number";const N=(t,e,s,o,i,l,c)=>{const a=i.length;if(0===a)return [{start:0,end:0,score:0},w(l)];const f=o.length;if(null!==c&&f*a>c.i16.length)return O(t,e,s,o,i,l);const h=E(o,i,t);if(h<0)return [{start:-1,end:-1,score:0},null];let d=0,g=0,m=null,p=null,b=null,y=null;[d,m]=z(d,c,f),[d,p]=z(d,c,f),[d,b]=z(d,c,f),[g,y]=L(g,c,a);const[,P]=L(g,c,f);for(let n=0;n<P.length;n++)P[n]=o[n];let C=0,k=0,x=0,N=0;const F=i[0];let R=i[0],q=0,I=0,W=!1,j=P.subarray(h),M=m.subarray(h).subarray(0,j.length),B=p.subarray(h).subarray(0,j.length),U=b.subarray(h).subarray(0,j.length);for(let[w,z]of j.entries()){let o=null;z<=u?(o=S(z),t||2!==o||(z+=32)):(o=A(z),t||2!==o||(z=String.fromCodePoint(z).toLowerCase().codePointAt(0)),e&&(z=n(z))),j[w]=z;const l=v(I,o);if(U[w]=l,I=o,z===R&&(x<a&&(y[x]=h+w,x++,R=i[Math.min(x,a-1)]),N=h+w),z===F){const t=16+2*l;if(M[w]=t,B[w]=1,1===a&&(s&&t>C||!s&&t>=C)&&(C=t,k=h+w,s&&8===l))break;W=!1;}else M[w]=r(W?q+-1:q+-3,0),B[w]=0,W=!0;q=M[w];}if(x!==a)return [{start:-1,end:-1,score:0},null];if(1===a){const t={start:k,end:k+1,score:C};if(!l)return [t,null];const e=new Set;return e.add(k),[t,e]}const T=y[0],D=N-T+1;let G=null;[d,G]=z(d,c,D*a);{const t=m.subarray(T,N+1);for(const[e,n]of t.entries())G[e]=n;}let[,V]=z(d,c,D*a);{const t=p.subarray(T,N+1);for(const[e,n]of t.entries())V[e]=n;}const J=y.subarray(1),Y=i.slice(1).slice(0,J.length);for(const[n,u]of J.entries()){let t=!1;const e=Y[n],o=n+1,i=o*D,l=P.subarray(u,N+1),c=b.subarray(u).subarray(0,l.length),f=V.subarray(i+u-T).subarray(0,l.length),h=V.subarray(i+u-T-1-D).subarray(0,l.length),d=G.subarray(i+u-T).subarray(0,l.length),g=G.subarray(i+u-T-1-D).subarray(0,l.length),m=G.subarray(i+u-T-1).subarray(0,l.length);m[0]=0;for(const[n,p]of l.entries()){const i=n+u;let l=0,y=0,P=0;if(y=t?m[n]+-1:m[n]+-3,e===p){l=g[n]+16;let t=c[n];P=h[n]+1,8===t?P=1:P>1&&(t=r(t,r(4,b[i-P+1]))),l+t<y?(l+=c[n],P=0):l+=t;}f[n]=P,t=l<y;const w=r(r(l,y),0);o===a-1&&(s&&w>C||!s&&w>=C)&&(C=w,k=i),d[n]=w;}}const Z=w(l);let H=T;if(l&&null!==Z){let t=a-1;H=k;let e=!0;for(;;){const n=t*D,r=H-T,s=G[n+r];let o=0,i=0;if(t>0&&H>=y[t]&&(o=G[n-D+r-1]),H>y[t]&&(i=G[n+r-1]),s>o&&(s>i||s===i&&e)){if(Z.add(H),0===t)break;t--;}e=V[n+r]>1||n+D+r+1<V.length&&V[n+D+r+1]>0,H--;}}return [{start:H,end:k+1,score:C},Z]};function F(t,e,s,o,i,l,c){let a=0,d=0,g=!1,m=0,p=0;const b=w(c);let y=0;i>0&&(y=C(s[i-1]));for(let P=i;P<l;P++){let i=s[P];const l=C(i);if(t||(i>=f&&i<=h?i+=32:i>u&&(i=String.fromCodePoint(i).toLowerCase().codePointAt(0))),e&&(i=n(i)),i===o[a]){c&&null!==b&&b.add(P),d+=16;let t=v(y,l);0===m?p=t:(8===t&&(p=t),t=r(r(t,p),4)),d+=0===a?2*t:t,g=!1,m++,a++;}else d+=g?-1:-3,g=!0,m=0,p=0;y=l;}return [d,b]}const O=(t,e,r,s,o,i,l)=>{if(0===o.length)return [{start:0,end:0,score:0},null];if(E(s,o,t)<0)return [{start:-1,end:-1,score:0},null];let c=0,a=-1,d=-1;const g=s.length,m=o.length;for(let p=0;p<g;p++){let i=s[b(p,g,r)];t||(i>=f&&i<=h?i+=32:i>u&&(i=String.fromCodePoint(i).toLowerCase().codePointAt(0))),e&&(i=n(i));if(i===o[b(c,m,r)]&&(a<0&&(a=p),c++,c===m)){d=p+1;break}}if(a>=0&&d>=0){c--;for(let e=d-1;e>=a;e--){let n=s[b(e,g,r)];t||(n>=f&&n<=h?n+=32:n>u&&(n=String.fromCodePoint(n).toLowerCase().codePointAt(0)));if(n===o[b(c,m,r)]&&(c--,c<0)){a=e;break}}if(!r){const t=a;a=g-d,d=g-t;}const[n,l]=F(t,e,s,o,a,d,i);return [{start:a,end:d,score:n},l]}return [{start:-1,end:-1,score:0},null]},R=(t,e,r,s,o,i,l)=>{if(0===o.length)return [{start:0,end:0,score:0},null];const c=s.length,a=o.length;if(c<a)return [{start:-1,end:-1,score:0},null];if(E(s,o,t)<0)return [{start:-1,end:-1,score:0},null];let d=0,g=-1,m=0,p=-1;for(let w=0;w<c;w++){const i=b(w,c,r);let l=s[i];t||(l>=f&&l<=h?l+=32:l>u&&(l=String.fromCodePoint(l).toLowerCase().codePointAt(0))),e&&(l=n(l));const z=b(d,a,r);if(o[z]===l){if(0===z&&(y=s,m=0===(P=i)?8:v(C(y[P-1]),C(y[P]))),d++,d===a){if(m>p&&(g=w,p=m),8===m)break;w-=d-1,d=0,m=0;}}else w-=d,d=0,m=0;}var y,P;if(g>=0){let n=0,i=0;r?(n=g-a+1,i=g+1):(n=c-(g+1),i=c-(g-a+1));const[l]=F(t,e,s,o,n,i,!1);return [{start:n,end:i,score:l},null]}return [{start:-1,end:-1,score:0},null]};const q=(I=2048,{i16:new Int16Array(102400),i32:new Int32Array(I)});var I,W,j;(j=W||(W={}))[j.Fuzzy=0]="Fuzzy",j[j.Exact=1]="Exact",j[j.Prefix=2]="Prefix",j[j.Suffix=3]="Suffix",j[j.Equal=4]="Equal";const U=(t,e,r)=>{let o=!1;switch(e){case"smart-case":t.toLowerCase()!==t&&(o=!0);break;case"case-sensitive":o=!0;break;case"case-insensitive":t=t.toLowerCase(),o=!1;}let i=s(t);return r&&(i=i.map(n)),{queryRunes:i,caseSensitive:o}};function D(t,e){const n=Object.keys(t).map((t=>parseInt(t,10))).sort(((t,e)=>e-t));let r=[];for(const s of n)if(r=r.concat(t[s]),r.length>=e)break;return r}function G(t,e,n){return r=>{const s=this.runesList[r];if(e.length>s.length)return;let[o,i]=this.algoFn(n,this.opts.normalize,this.opts.forward,s,e,!0,q);if(-1===o.start)return;if(!1===this.opts.fuzzy){i=new Set;for(let t=o.start;t<o.end;++t)i.add(t);}const l=this.opts.sort?o.score:0;void 0===t[l]&&(t[l]=[]),t[l].push({item:this.items[r],...o,positions:null!=i?i:new Set});}}function J(t){const{queryRunes:e,caseSensitive:n}=U(t,this.opts.casing,this.opts.normalize),r={},s=G.bind(this)(r,e,n);for(let o=0,i=this.runesList.length;o<i;++o)s(o);return D(r,this.opts.limit)}const $={limit:1/0,selector:t=>t,casing:"smart-case",normalize:!0,fuzzy:"v2",tiebreakers:[],sort:!0,forward:!0};class X{constructor(t,...e){switch(this.opts={...$,...e[0]},this.items=t,this.runesList=t.map((t=>s(this.opts.selector(t).normalize()))),this.algoFn=R,this.opts.fuzzy){case"v2":this.algoFn=N;break;case"v1":this.algoFn=O;}}}const _={...$,match:J};class tt extends X{constructor(t,...e){super(t,...e),this.opts={..._,...e[0]};}find(t){if(0===t.length||0===this.items.length)return this.items.slice(0,this.opts.limit).map(rt);return t=t.normalize(),st(this.opts.match.bind(this)(t),this.opts)}}const rt=t=>({item:t,start:-1,end:-1,score:0,positions:new Set});function st(t,e){if(e.sort){const{selector:n}=e;t.sort(((t,r)=>{if(t.score===r.score)for(const s of e.tiebreakers){const e=s(t,r,n);if(0!==e)return e}return 0}));}return Number.isFinite(e.limit)&&t.splice(e.limit),t}class lt{constructor(t,...e){this.finder=new tt(t,...e),this.find=this.finder.find.bind(this.finder);}}

let storage;
const storageDir = require$$0.resolve(os.tmpdir(), "antfu-ni");
const storagePath = require$$0.resolve(storageDir, "_storage.json");
async function load(fn) {
  if (!storage) {
    storage = fs.existsSync(storagePath) ? JSON.parse(await fs.promises.readFile(storagePath, "utf-8") || "{}") || {} : {};
  }
  if (fn) {
    if (await fn(storage))
      await dump();
  }
  return storage;
}
async function dump() {
  if (storage) {
    if (!fs.existsSync(storageDir))
      await fs.promises.mkdir(storageDir, { recursive: true });
    await fs.promises.writeFile(storagePath, JSON.stringify(storage), "utf-8");
  }
}

function getPackageJSON(cwd = process.cwd()) {
  const path = require$$0.resolve(cwd, "package.json");
  if (fs.existsSync(path)) {
    try {
      const raw = fs.readFileSync(path, "utf-8");
      const data = JSON.parse(raw);
      return data;
    } catch (e) {
      console.warn("Failed to parse package.json");
      process.exit(0);
    }
  }
}

runner.runCli(async (agent, args, ctx) => {
  const storage = await load();
  if (args[0] === "-") {
    if (!storage.lastRunCommand) {
      console.error("No last command found");
      process.exit(1);
    }
    args[0] = storage.lastRunCommand;
  }
  if (args.length === 0) {
    let limitText = function(text, maxWidth) {
      if (text.length <= maxWidth)
        return text;
      return `${text.slice(0, maxWidth)}${runner.$.dim("\u2026")}`;
    };
    const pkg = getPackageJSON(ctx?.cwd);
    const scripts = pkg.scripts || {};
    const scriptsInfo = pkg["scripts-info"] || {};
    const names = Object.entries(scripts);
    if (!names.length)
      return;
    const raw = names.filter((i) => !i[0].startsWith("?")).map(([key, cmd]) => ({
      key,
      cmd,
      description: scriptsInfo[key] || scripts[`?${key}`] || cmd
    }));
    const terminalColumns = process.stdout?.columns || 80;
    const choices = raw.map(({ key, description }) => ({
      title: key,
      value: key,
      description: limitText(description, terminalColumns - 15)
    }));
    const fzf = new lt(raw, {
      selector: (item) => `${item.key} ${item.description}`,
      casing: "case-insensitive"
    });
    if (storage.lastRunCommand) {
      const last = choices.find((i) => i.value === storage.lastRunCommand);
      if (last)
        choices.unshift(last);
    }
    try {
      const { fn } = await runner.prompts({
        name: "fn",
        message: "script to run",
        type: "autocomplete",
        choices,
        async suggest(input, choices2) {
          const results = fzf.find(input);
          return results.map((r) => choices2.find((c2) => c2.value === r.item.key));
        }
      });
      if (!fn)
        return;
      args.push(fn);
    } catch (e) {
      process.exit(1);
    }
  }
  if (storage.lastRunCommand !== args[0]) {
    storage.lastRunCommand = args[0];
    dump();
  }
  return runner.parseNr(agent, args);
});
