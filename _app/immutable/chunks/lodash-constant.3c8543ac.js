import{S as ls,i as us,s as is,k as p,q as t,a as K,l as c,m as l,r as e,h as n,c as O,n as as,b as i,G as a,K as F}from"./index.06f43c05.js";function rs(ts){let k,C,g,d,es=`<code class="language-javascript"><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> transformedObject <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">chain</span><span class="token punctuation">(</span>arrayOfObjects<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mapValues</span><span class="token punctuation">(</span>
    _<span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">someKey</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>transformedObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Prints out:</span>
<span class="token comment">// &#123;</span>
<span class="token comment">//     a: &#123;</span>
<span class="token comment">//         someKey: null</span>
<span class="token comment">//     &#125;,</span>
<span class="token comment">//     b: &#123;</span>
<span class="token comment">//         someKey: null</span>
<span class="token comment">//     &#125;</span>
<span class="token comment">// &#125;</span></code>`,L,h,y,_,M,N,P,u,R,E,S,D,b,G,q,I,z,H,T,f,os=`<code class="language-javascript">transformedObject<span class="token punctuation">.</span>a<span class="token punctuation">.</span>someKey <span class="token operator">=</span> <span class="token string">'new value'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>transformedObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Prints out:</span>
<span class="token comment">// &#123;</span>
<span class="token comment">//     a: &#123;</span>
<span class="token comment">//         someKey: 'new value'</span>
<span class="token comment">//     &#125;,</span>
<span class="token comment">//     b: &#123;</span>
<span class="token comment">//         someKey: 'new value'</span>
<span class="token comment">//     &#125;</span>
<span class="token comment">// &#125;</span></code>`,x,r,W,w,B,J,j,V,Z;return{c(){k=p("p"),C=t("I was working on something that made me produce something like this:"),g=K(),d=p("pre"),L=K(),h=p("p"),y=p("em"),_=p("strong"),M=t("Note"),N=t(": This is a dumbed out version of the actual code."),P=K(),u=p("p"),R=t("When I tried updating one of the properties’ "),E=p("code"),S=t("someKey"),D=t(" attribute, I expected it to just modify that particular attribute. Instead, it modified all "),b=p("code"),G=t("someKey"),q=t(" attribute of "),I=p("strong"),z=t("all"),H=t(" the properties."),T=K(),f=p("pre"),x=K(),r=p("p"),W=t("It turns out that, Lodash’s "),w=p("code"),B=t("_.constant"),J=t(" is actually "),j=p("em"),V=t("constant"),Z=t(". It returned the same instance of the value passed onto it. It took me about an hour to realize what just happened. 🤦️"),this.h()},l(s){k=c(s,"P",{});var o=l(k);C=e(o,"I was working on something that made me produce something like this:"),o.forEach(n),g=O(s),d=c(s,"PRE",{class:!0});var ps=l(d);ps.forEach(n),L=O(s),h=c(s,"P",{});var Q=l(h);y=c(Q,"EM",{});var A=l(y);_=c(A,"STRONG",{});var U=l(_);M=e(U,"Note"),U.forEach(n),N=e(A,": This is a dumbed out version of the actual code."),A.forEach(n),Q.forEach(n),P=O(s),u=c(s,"P",{});var m=l(u);R=e(m,"When I tried updating one of the properties’ "),E=c(m,"CODE",{});var X=l(E);S=e(X,"someKey"),X.forEach(n),D=e(m," attribute, I expected it to just modify that particular attribute. Instead, it modified all "),b=c(m,"CODE",{});var Y=l(b);G=e(Y,"someKey"),Y.forEach(n),q=e(m," attribute of "),I=c(m,"STRONG",{});var $=l(I);z=e($,"all"),$.forEach(n),H=e(m," the properties."),m.forEach(n),T=O(s),f=c(s,"PRE",{class:!0});var cs=l(f);cs.forEach(n),x=O(s),r=c(s,"P",{});var v=l(r);W=e(v,"It turns out that, Lodash’s "),w=c(v,"CODE",{});var ss=l(w);B=e(ss,"_.constant"),ss.forEach(n),J=e(v," is actually "),j=c(v,"EM",{});var ns=l(j);V=e(ns,"constant"),ns.forEach(n),Z=e(v,". It returned the same instance of the value passed onto it. It took me about an hour to realize what just happened. 🤦️"),v.forEach(n),this.h()},h(){as(d,"class","language-javascript"),as(f,"class","language-javascript")},m(s,o){i(s,k,o),a(k,C),i(s,g,o),i(s,d,o),d.innerHTML=es,i(s,L,o),i(s,h,o),a(h,y),a(y,_),a(_,M),a(y,N),i(s,P,o),i(s,u,o),a(u,R),a(u,E),a(E,S),a(u,D),a(u,b),a(b,G),a(u,q),a(u,I),a(I,z),a(u,H),i(s,T,o),i(s,f,o),f.innerHTML=os,i(s,x,o),i(s,r,o),a(r,W),a(r,w),a(w,B),a(r,J),a(r,j),a(j,V),a(r,Z)},p:F,i:F,o:F,d(s){s&&n(k),s&&n(g),s&&n(d),s&&n(L),s&&n(h),s&&n(P),s&&n(u),s&&n(T),s&&n(f),s&&n(x),s&&n(r)}}}const ms={title:"TIL: Lodash's constant is constant",date:"2019-01-16T03:51:42.660Z",tags:["Javascript","Lodash"]};class ds extends ls{constructor(k){super(),us(this,k,null,rs,is,{})}}export{ds as default,ms as metadata};
