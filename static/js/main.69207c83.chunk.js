(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=a(1),l=a(2),i=a(4),h=a(3),u=a(5),m=a(6),b="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:f},d=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(m.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"open-search"},o.a.createElement("button",{onClick:function(){return e.props.showSearchPage(!0)}},"Add a book"))}}]),t}(o.a.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={query:""},a.onInputChange=function(e){a.setState({query:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.afterSubmit(a.state.query)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement("button",{className:"close-search",onClick:function(){return e.props.showSearchPage(!1)}},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("div",{className:"search-bar ui segment"},o.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},o.a.createElement("div",{className:"field"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:this.onInputChange})))))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"})))}}]),t}(o.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.Books;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.name),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:t.shelf,onChange:function(a){e.props.changeShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.authors)))}))))}}]),t}(o.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.allBooks,t=e.filter(function(e){return"currentlyReading"===e.shelf}),a=e.filter(function(e){return"wantToRead"===e.shelf}),n=e.filter(function(e){return"read"===e.shelf});return o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(g,{changeShelf:this.props.changeShelf,Books:t,name:"Currently Reading"}),o.a.createElement(g,{changeShelf:this.props.changeShelf,Books:a,name:"Want to Read"}),o.a.createElement(g,{changeShelf:this.props.changeShelf,Books:n,name:"Read"})))}}]),t}(o.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads"))}}]),t}(o.a.Component),j=(a(14),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={showSearchPage:!1,books:[],eachBook:[]},a.showTheSearchPage=function(e){a.setState({showSearchPage:e})},a.changeBookShelf=function(e,t){a.setState({books:a.state.books.map(function(a){return a.id===e.id&&(a.shelf=t),a})})},a.onTermSubmit=function(e){var t=d(e);a.setState({eachBook:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:p}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},this.state.showSearchPage?o.a.createElement("div",null,o.a.createElement(v,{afterSubmit:this.onTermSubmit,showSearchPage:this.showTheSearchPage,eachBook:this.state.eachBook})):o.a.createElement("div",{className:"list-books"},o.a.createElement(S,null),o.a.createElement(E,{allBooks:this.state.books,changeShelf:this.changeBookShelf}),o.a.createElement(k,{showSearchPage:this.showTheSearchPage})))}}]),t}(o.a.Component));a(16);c.a.render(o.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.69207c83.chunk.js.map