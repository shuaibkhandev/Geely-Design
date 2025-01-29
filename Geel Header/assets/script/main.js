jQuery('body').on('mouseover', '.nav_list', function () {
    jQuery(this).find('.first_layer').css('display', 'block');
} )

jQuery('body').on('mouseout', '.nav_list', function () {
    jQuery(this).find('.first_layer').css('display', 'none');
} )