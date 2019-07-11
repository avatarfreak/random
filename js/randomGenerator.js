const quote = [];
fetch("js/quote.json").then(res => res.json()).then(data => quote.push(data));


$(document).ready(function() {

    $("#new-quote").click(function() {
        console.log()
        let random = Math.floor(Math.random() * quote[0]["quotes"].length);
        let quoteBody = quote[0]["quotes"][random].quote;
        let quoteAuthor = quote[0]["quotes"][random].author;

        $("#quote-text")
            .text(quoteBody)
            .prepend('<i class="fa fa-quote-left"></i> ')
            .append('<i class="fa fa-quote-right"></i >')
            .animate({ opacity: 0 },
                1000,
                function() {
                    $(this).animate({ opacity: 1 }, 1000);

                }
            );
        $("#author").animate({ opacity: 0 }, 1000, function() {
            $(this).animate({ opacity: 1 }, 1000);
            $(this).text(quoteAuthor);
        });
        $("#tweet-quote").attr('href', `https://twitter.com/intent/tweet?text=${quoteBody} ${quoteAuthor}`);
    });



});