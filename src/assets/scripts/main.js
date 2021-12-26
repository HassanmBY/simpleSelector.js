$('document').ready(() => {

    let li = $().create('li', 'item', 'Hello World !');
    console.log(li);
    $('#appendList').append(li)

    /*        
        $().ajax("https://jsonplaceholder.typicode.com/users", {
                method: 'GET'
            },
            res => { return res.json(); },
            data => {
                let array = data;
                console.log(array);
            },
            err => { console.log(err); }
        );
    */

    $('a').css({
        color: 'orange',
        fontSize: '48px',
    });

    // console.log($('a').css('color'));

    $('li').click(() => {
        console.log('clicked on li');
    })

    $('#item4').hideShow();
    $('#item5').hideShow();

    $('h1').addClass('title');
    $('h2').toggleClass('sub-title');
    $('p').removeClass('paragraph');
    $('p').toggleClass('paragraph');
    // console.log($('h3').classList());
    $('h3').replaceClass('grey', 'orange');
    // console.log($('h3').hasClass('line'));


})