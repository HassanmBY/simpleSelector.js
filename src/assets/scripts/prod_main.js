// µ(() => {

let li = µ().create("li", "item", "Hello World !");
µ("#appendList").append(li);

µ().ajax(
    "https://jsonplaceholder.typicode.com/users", {
        method: "GET",
    },
    res => {
        return res.json();
    },
    data => {
        let array = data;
        console.log(array);
    },
    err => {
        console.log(err);
    }
);

µ("a").css({
    color: "orange",
    fontSize: "48px",
});

µ("h1").css("font-size", "48px");

µ("h2").animate(
    [{
        transform: `scaleY(2)`,
    }, ],
    1,
    "ease-in-out",
    3
);

console.log(µ("a").css("color"));

µ("li").click(() => {
    console.log("clicked on a li");
});

µ("h2").on("dblclick", function() {
    µ(this).addHtml(" .");
});

µ("h1").hover(
    function() {
        µ(this).css("color", "purple");
    },
    function() {
        µ(this).css("color", "white");
    }
);

µ("h1").on("mouseout", function() {});

// µ('#item4').hideShow();
µ("#item5").hideShow();

µ("h1").addClass("title");
µ("h2").toggleClass("sub-title");
µ("p").removeClass("paragraph");
µ("p").toggleClass("paragraph");
console.log(µ("h3").classList());
µ("h3").replaceClass("grey", "orange");
console.log(µ("h3").hasClass("line"));
µ("li").each(function(i) {
    if (i % 2 === 0) {
        µ(this).css("color", "green");
    } else {
        µ(this).css("color", "orange");
    }
});

// })