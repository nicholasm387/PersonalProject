
$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".nav-link").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    });

    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".section");

        tags.each(function() {
            var tag = $(this);

            if (tag.position().top < pageBottom && tag.position().top + tag.height() > pageTop) {
                $(".nav-link[href='#" + tag.attr("id") + "']").addClass("active");
            } else {
                $(".nav-link[href='#" + tag.attr("id") + "']").removeClass("active");
            }
        });
    });
});

