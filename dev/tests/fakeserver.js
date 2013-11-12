define(["sinon","jquery","underscore"],function(a,b,c){"use strict";function d(a,b){var c=a.split("?")[1];if(void 0===c)return null;for(var d=c.split("&"),e=0;e<d.length;e+=1){var f=d[e].split("=");if(decodeURIComponent(f[0])===b)return decodeURIComponent(f[1])}return null}function e(a){a||(a=30);for(var b="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=0;a>d;d+=1)b+=c.charAt(Math.floor(Math.random()*c.length));return b}var f=a.fakeServer.create();f.xhr.useFilters=!0;f.xhr.addFilter(function(a,b){return-1!==b.indexOf("tests/json/")||-1!==b.indexOf("ace/lib")||-1!==b.indexOf(".xml")}),f.autoRespond=!0,f.autoRespondAfter=200,f.respondWith("GET",/select2-test\.json/,function(a){var b=[{id:"red",text:"Red"},{id:"green",text:"Green"},{id:"blue",text:"Blue"},{id:"orange",text:"Orange"},{id:"yellow",text:"Yellow"}];a.respond(200,{"Content-Type":"application/json"},JSON.stringify({total:b.length,results:b}))}),f.respondWith("GET",/search\.json/,function(a){var b=[{UID:"123sdfasdf",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"News"},{UID:"fooasdfasdf1123asZ",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"Another Item"},{UID:"fooasdfasdf1231as",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"News"},{UID:"fooasdfasdf12231451",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"Another Item"},{UID:"fooasdfasdf1235dsd",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"News"},{UID:"fooasdfasd345345f",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"Another Item"},{UID:"fooasdfasdf465",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"News"},{UID:"fooaewrwsdfasdf",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"Another Item"},{UID:"fooasdfasd123f",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"News"},{UID:"fooasdfasdas123f",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"Another Item"},{UID:"fooasdfasdfsdf",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"News"},{UID:"fooasdfasdf",getURL:"http://localhost:8081/news/aggregator",Type:"Collection",Description:"Site News",Title:"Another Item"}],c=[],e=JSON.parse(d(a.url,"batch")),f=JSON.parse(d(a.url,"query"));if("none*"===f.criteria[0].v)c=[];else if(e){var g,h;g=(e.page-1)*e.size,h=g+e.size,c=b.slice(g,h)}a.respond(200,{"Content-Type":"application/json"},JSON.stringify({total:c.length,results:c}))});for(var g=[],h=["/","/news/","/projects/","/about/"],i=["Page","News Item","Info","Blog Item"],j=["one","two","three","four"],k=0;k<h.length;k+=1)for(var l=h[k],m=0;1e3>m;m+=1)g.push({UID:e(),Title:i[Math.floor(Math.random()*i.length)]+" "+m,path:l+e(8),Type:"Document"});f.respondWith(/relateditems-test\.json/,function(a){function e(a,b){return k=[],void 0===b?h:(c.each(a,function(a){var c,d=(a.UID+" "+a.Title+" "+a.path+" "+a.Type).toLowerCase();if("object"==typeof b){for(var e=0;e<b.length;e+=1)if(c=b[e].toLowerCase(),d.indexOf(c)>-1){k.push(a);break}}else c=b.toLowerCase().replace("*",""),d.indexOf(c)>-1&&k.push(a)}),void 0)}function f(a,b,d){k=[];var f=d.substring(0,d.length-1),g=f.split("/"),h=[];return c.each(a,function(a){var b=a.path.split("/");0===a.path.indexOf(f)&&b.length-1===g.length&&h.push(a)}),void 0===b?h:(e(h,b),void 0)}var h=[{UID:"jasdlfdlkdkjasdf",Title:"Some Image",path:"/test.png",Type:"Image"},{UID:"asdlfkjasdlfkjasdf",Title:"News",path:"/news",Type:"Folder"},{UID:"124asdfasasdaf34",Title:"About",path:"/about",Type:"Folder"},{UID:"asdf1234",Title:"Projects",path:"/projects",Type:"Folder"},{UID:"asdf1234gsad",Title:"Contact",path:"/contact",Type:"Document"},{UID:"asdv34sdfs",Title:"Privacy Policy",path:"/policy",Type:"Document"},{UID:"asdfasdf234sdf",Title:"Our Process",path:"/our-process",Type:"Folder"},{UID:"asdhsfghyt45",Title:"Donate",path:"/donate-now",Type:"Document"},{UID:"gfn5634f",Title:"About Us",path:"/about/about-us",Type:"Document"},{UID:"45dsfgsdcd",Title:"Philosophy",path:"/about/philosophy",Type:"Document"},{UID:"dfgsdfgj675",Title:"Staff",path:"/about/staff",Type:"Folder"},{UID:"sdfbsfdh345",Title:"Board of Directors",path:"/about/board-of-directors",Type:"Document"},{UID:"asdfasdf9sdf",Title:"Mike",path:"/about/staff/mike",Type:"Document"},{UID:"cvbcvb82345",Title:"Joe",path:"/about/staff/joe",Type:"Document"}];h=h.concat(g);var i=function(a){for(var b=["January 1, 2011","February 10, 2012","March 12, 2013","April 1, 2012","May 20, 2013"],c=0;c<a.length;c+=1){var d=a[c];d.getURL=window.location.origin+d.path,d.review_state=["published","private","review"][Math.floor(3*Math.random())],d.CreationDate=b[Math.floor(Math.random()*b.length)],d.ModificationDate=b[Math.floor(Math.random()*b.length)],d.EffectiveDate=b[Math.floor(Math.random()*b.length)],d.Subject=[j[Math.floor(Math.random()*j.length)],j[Math.floor(Math.random()*j.length)]],d.id=d.Title.replace(" ","-").toLowerCase(),d.is_folderish="Folder"===d.Type?!0:!1}};i(h),h[0].getURL=window.location.origin+"/tests/images/plone.png",h[0].path="/tests/images/plone.png";var k=[],l=d(a.url,"batch"),m=1,n=10;l&&(l=b.parseJSON(l),m=l.page,n=l.size),m-=1;var o=d(a.url,"query"),p=null,q="";if(o){o=b.parseJSON(o);for(var r=0;r<o.criteria.length;r+=1){var s=o.criteria[r];"path"===s.i?p=s.v.split("::")[0]:q=s.v}}p?f(h,q,p):e(h,q),a.respond(200,{"Content-Type":"application/json"},JSON.stringify({total:k.length,results:k.slice(m*n,m*n+(n-1))}))}),f.respondWith("GET",/something\.html/,[200,{"Content-Type":"text/html"},'    <html>     <head></head>    <body>     <div id="content">    <h1>Content from AJAX</h1>    <p>Ah, it is a rock, though. Should beat everything.</p>    </body>     </html>']),f.respondWith("GET",/something-link\.html/,[200,{"Content-Type":"text/html"},'    <html>     <head></head>    <body>     <div id="content">    <h1>Content from AJAX with a link</h1>    <p>Ah, it is a rock, though. Should beat <a href="something-else.html">link</a> everything.</p>    </body>     </html>']),f.respondWith("GET",/something-else\.html/,[200,{"Content-Type":"text/html"},'    <html>     <head></head>    <body>     <div id="content">    <h1>Something else</h1>    <p>We loaded a link.</p>    </body>     </html>']),f.respondWith("GET",/modal-form\.html/,[200,{"Content-Type":"text/html"},'    <html>     <head></head>    <body>     <div id="content">    <h1>Modal with Form</h1>    <p>This modal contains a form.</p>    <form method="POST" action="/modal-submit.html">      <label for="name">Name:</label><input type="text" name="name" />      <div class="formControls">         <input type="submit" class="btn btn-primary" value="Submit" name="submit" />      </div>     </form>    </body>     </html>']),f.respondWith("POST",/modal-submit\.html/,function(a){var b=d("?"+a.requestBody,"name");a.respond(200,{"content-Type":"text/html"},'<html>   <head></head>  <body>     <div id="content">      <h1>Hello, '+c.escape(b)+"</h1>      <p>Thanks!</p>  </body> </html>")}),f.respondWith("POST",/upload/,function(a){a.respond(200,{"content-Type":"application/json"},JSON.stringify({url:"http://localhost:8000/blah.png",uid:"sldlfkjsldkjlskdjf",name:"blah.png",filename:"blah.png",type:"Image",size:239292}))}),f.respondWith("GET",/portal_factory\/@@querybuilder_html_results/,function(a){var c=b("#querystring-example-results").text();a.respond(200,{"content-Type":"text/html"},c)}),f.respondWith("GET",/portal_factory\/@@querybuildernumberofresults/,function(a){var c=b("#querystring-number-results-example-results").text();a.respond(200,{"content-Type":"text/html"},c)});var n=["/moveitem","/copy","/cut","/delete","/workflow","/tags","/properties","/paste","/order","/rename"],o={"/copy":function(a){var b=JSON.parse(d("?"+a.requestBody,"selection"));return{status:"success",msg:b.length+" items copied"}},"/cut":function(a){var b=JSON.parse(d("?"+a.requestBody,"selection"));return{status:"success",msg:b.length+" items cut"}},"/paste":function(a){var b=JSON.parse(d("?"+a.requestBody,"selection"));return{status:"success",msg:"pasted "+b.length+" items"}},"/order":function(){return{status:"success",msg:"Folder ordering set"}},"/tags":function(a){var b=JSON.parse(d("?"+a.requestBody,"selection"));return{status:"success",msg:"Tags updated for "+b.length+" items"}},"/properties":function(a){var b=JSON.parse(d("?"+a.requestBody,"selection"));return{status:"success",msg:"Properties updated for "+b.length+" items"}},"/rename":function(a){var b=JSON.parse(d("?"+a.requestBody,"torename"));return{status:"success",msg:"Renamed "+b.length+" items"}},"/workflow":function(a){var b=JSON.parse(d("?"+a.requestBody,"selection"));if(-1!==a.requestBody.indexOf("transitions")){{JSON.parse(d("?"+a.requestBody,"transitions"))}return{status:"success",transitions:[{id:"publish",title:"Publish"},{id:"retract",title:"Retract"}]}}return{status:"success",msg:"Workflow updated for "+b.length+" items"}},"/delete":function(a){var b=JSON.parse(d("?"+a.requestBody,"selection"));return{status:"success",msg:"Deleted "+b.length+" items"}}};return c.each(n,function(a){f.respondWith("POST",a,function(b){f.autoRespondAfter=200;var c={status:"success"};o[a]&&(c=o[a](b)),b.respond(200,{"Content-Type":"application/json"},JSON.stringify(c))})}),f});