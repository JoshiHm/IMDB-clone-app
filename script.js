!function ($) {
    $(function () {
        var j = false;
        $('#navbar-main li a, .navbar-header a').click(function () {
            var a = $(this);
            if (a.attr('href') == '#top') {
                $('html,body').animate({ 'scrollTop': 0 }, 1000);
            }
            else {
                var b = $(a.attr('href'));
                $('html,body').animate({ 'scrollTop': b.offset().top - 50 }, 1000);
            }
            return false
        });
        $('#t').keyup(function () {
            if (event.keyCode == 13) {
                $('#search-by-title-button').click();
            } else {
                return false
            }
        });
        $('#i').keyup(function () {
            if (event.keyCode == 13) {
                $('#search-by-id-button').click();
            } else {
                return false
            }
        });
        $('#search-by-id-button').click(function () {
            var c = $("#search-by-id-form :input").filter(function (index, element) {
                return $(element).val() != "";
            }).serialize();
            var d = 'http://www.omdbapi.com/?' + c;
            var e = $('#search-by-id-request');
            e.find('a').attr('href', d).html(d);
            e.show('slow');
            var f = $('#search-by-id-progress');
            f.show('slow');
            var g = $('#search-by-id-response');
            var t = $('input:hidden[name=g-recaptcha-response]').val();
            $.ajax({
                type: 'GET',
                dataType: 'text',
                url: 'demo.aspx/?' + c + '&token=' + t,
                statusCode: {
                    403: function () {
                        g.find('pre').html('HTTP 403 Forbidden!')
                    }
                },
                success: function (a) {
                    g.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                },
                complete: function () {
                    f.hide();
                    g.show('slow')
                }
            })
            /* update token after use */
            grecaptcha.execute('6LfWPbsUAAAAALssRfr3Lhv9PdEEOAQXGdZohXbP', { action: 'homepage' }).then(function (token) {
                $('input:hidden[name=g-recaptcha-response]').val(token);
            });
        });
        $('#search-by-id-reset').click(function () {
            var a = $('#search-by-id-request');
            a.hide('slow');
            a.find('a').attr('href', 'javascript:;').html('');
            var b = $('#search-by-id-progress');
            b.hide('slow');
            var c = $('#search-by-id-response');
            c.hide('slow');
            c.find('pre').html('');
        });
        $('#search-by-title-button').click(function () {
            var c = $("#search-by-title-form :input").filter(function (index, element) {
                return $(element).val() != "";
            }).serialize();
            var d = 'http://www.omdbapi.com/?' + c;
            var e = $('#search-by-title-request');
            e.find('a').attr('href', d).html(d);
            e.show('slow');
            var f = $('#search-by-title-progress');
            f.show('slow');
            var g = $('#search-by-title-response');
            var t = $('input:hidden[name=g-recaptcha-response]').val();
            $.ajax({
                type: 'GET',
                dataType: 'text',
                url: 'demo.aspx/?' + c + '&token=' + t,
                statusCode: {
                    403: function () {
                        g.find('pre').html('HTTP 403 Forbidden!')
                    }
                },
                success: function (a) {
                    g.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                },
                complete: function () {
                    f.hide();
                    g.show('slow')
                }
            })
            /* update token after use */
            grecaptcha.execute('6LfWPbsUAAAAALssRfr3Lhv9PdEEOAQXGdZohXbP', { action: 'homepage' }).then(function (token) {
                $('input:hidden[name=g-recaptcha-response]').val(token);
            });
        });
        $('#search-by-title-reset').click(function () {
            var a = $('#search-by-title-request');
            a.hide('slow');
            a.find('a').attr('href', 'javascript:;').html('');
            var b = $('#search-by-title-progress');
            b.hide('slow');
            var c = $('#search-by-title-response');
            c.hide('slow');
            c.find('pre').html('');
        });
    })
} (window.jQuery);