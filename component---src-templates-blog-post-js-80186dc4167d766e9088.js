(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(38);var n=a(8),r=a.n(n),m=a(0),i=a.n(m),o=a(177),l=a.n(o),c=a(152),s=a(179),u=a.n(s),U=a(239),B=a.n(U),P=a(167),p=a(176),f=a(173),Y=a(154),z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter.title,a=B()(t,u()(this.props,"data.site.siteMetadata.title")),n=e.excerpt,r=u()(this.props,"data.site.siteMetadata.twitterUsername"),m=this.props.pageContext,o=m.previous,s=m.next,U=e.frontmatter.qiitaUrl,z=[{name:"description",content:n},{name:"twitter:card",content:"summary"},{name:"twitter:author",content:r},{name:"twitter:title",content:e.frontmatter.title},{name:"twitter:description",content:n}];return i.a.createElement(p.a,{location:this.props.location,className:"blog-post"},i.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:z,title:a}),i.a.createElement("h1",null,t),i.a.createElement("div",{className:"blog-post-meta",style:Object.assign({display:"flex",justifyContent:"space-between",marginBottom:Object(Y.a)(1),marginTop:Object(Y.a)(-.5)},Object(Y.b)(-.2))},i.a.createElement("span",null,e.frontmatter.date),i.a.createElement(f.a,{url:U})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(Y.a)(1)}}),i.a.createElement(P.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,o&&i.a.createElement(c.Link,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),i.a.createElement("li",null,s&&i.a.createElement(c.Link,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →"))))},t}(i.a.Component);t.default=z;var d="252897650"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return B}),a.d(t,"StaticQuery",function(){return P});var n=a(0),r=a.n(n),m=a(5),i=a.n(m),o=a(151),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var s=a(156),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var U=a(40);a.d(t,"parsePath",function(){return U.a});var B=r.a.createContext({}),P=function(e){return r.a.createElement(B.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}P.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var n=a(188),r=a.n(n),m=a(189),i=a.n(m),o=new r.a(i.a);var l=o.rhythm,c=o.scale},156:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},164:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),m=a(5),i=a.n(m),o=a(56),l=a(1),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},167:function(e,t,a){"use strict";var n=a(8),r=a.n(n),m=a(0),i=a.n(m),o=(a(185),a(186),a(187),a(154)),l=a(168),c=a.n(l),s=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"bio-container",style:{marginBottom:Object(o.a)(2.5)}},i.a.createElement("img",{src:c.a,width:Object(o.a)(2),height:Object(o.a)(2),alt:"Spinning Logo",className:"spinning-logo",style:{width:Object(o.a)(2),height:Object(o.a)(2)}}),i.a.createElement("div",{className:"bio"},i.a.createElement("div",{style:{marginBottom:Object(o.a)(.2)}},"From the Philippines, living in Tokyo, Japan. Makes",i.a.createElement("a",{href:"https://plat.io",target:"_blank"}," ","cool stuff"," ")," ","at",i.a.createElement("a",{href:"https://asteria.com",target:"_blank"}," ","Asteria"," ")," ","as a Software Developer."),i.a.createElement("div",{className:"sns"},i.a.createElement("a",{href:"mailto:hi@nasvillanueva.com",target:"_blank",title:"Email"},i.a.createElement("i",{className:"fa fa-envelope"})),i.a.createElement("a",{href:"https://github.com/nasvillanueva",target:"_blank",title:"GitHub"},i.a.createElement("i",{className:"fa fa-github-square"})),i.a.createElement("a",{href:"https://qiita.com/nasvillanueva",target:"_blank",title:"Qiita"},i.a.createElement("span",{className:"fa-stack sns-qiita"},i.a.createElement("i",{className:"fa fa-square fa-stack-1x"}),i.a.createElement("i",{className:"fa fa-search fa-stack-1x fa-inverse fa-1x"}))),i.a.createElement("a",{href:"https://www.linkedin.com/in/nasvillanueva/",target:"_blank",title:"LinkedIn"},i.a.createElement("i",{className:"fa fa-linkedin-square"})),i.a.createElement("a",{href:"https://fb.com/nasvillanueva",target:"_blank",title:"Facebook"},i.a.createElement("i",{className:"fa fa-facebook-square"})),i.a.createElement("a",{href:"https://twitter.com/nasvillanueva_",target:"_blank",title:"Twitter"},i.a.createElement("i",{className:"fa fa-twitter-square"})),i.a.createElement("a",{href:"https://www.instagram.com/nasvillanueva/",target:"_blank",title:"Instagram"},i.a.createElement("i",{className:"fa fa-instagram"})),i.a.createElement("a",{href:"https://soundcloud.com/nasvillanueva",target:"_blank",title:"Soundcloud"},i.a.createElement("i",{className:"fa fa-soundcloud"})))))},t}(i.a.Component));t.a=s},168:function(e,t){e.exports="data:image/png;base64,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"},169:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(8),r=a.n(n),m=a(0),i=a.n(m),o=a(152),l=a(190),c=a.n(l),s=(a(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.url,a=e.style;return c()(t)?"":i.a.createElement(o.Link,{to:t,className:"qiita-link",style:a},"日本語で (Qiita)")},t}(i.a.Component));t.a=s},174:function(e,t,a){},176:function(e,t,a){"use strict";a(38);var n=a(8),r=a.n(n),m=a(0),i=a.n(m),o=a(152),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("span",{style:{color:"#445263"}},"nandemo",i.a.createElement("span",{style:{color:"#8E443F"}},"nas"))},t}(i.a.Component),c=a(154),s=(a(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.children,n=e.className,r="/"===t.pathname?{type:"h1",style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})}:{type:"h3",style:{marginTop:0,marginBottom:Object(c.a)(-1)}},m=i.a.createElement(r.type,{className:"layout-header",style:r.style},[i.a.createElement(o.Link,{className:"link",to:"/",key:1},i.a.createElement(l,null))]);return i.a.createElement("div",{className:["layout",n].join(" "),style:{maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},m,a)},t}(i.a.Component));t.a=s},239:function(e,t){e.exports=function(e,t){return null==e||e!=e?t:e}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-80186dc4167d766e9088.js.map