jQuery(document).ready(($) => {
	const loginForm = $('input[type="password"]').closest('form');
	if (0 === loginForm.length) {
		return;
	}

	const loginWrap = $('#wptelegram-login-wrap');
	const overflow = $('<div class="wptelegram-login-clear"></div>');

	loginForm.css({ position: 'relative' });
	loginWrap.css('display', 'block');

	loginForm.append(overflow);
	overflow.append($('p.forgetmenot'), $('p.submit'));

	loginForm.append(loginWrap);
});
