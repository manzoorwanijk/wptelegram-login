# WP Telegram Login

**Contributors:** [manzoorwanijk](https://github.com/manzoorwanijk)  
**Tags:** telegram, login, register, social, signup  
**Requires at least:** 5.3  
**Tested up to:** 5.7.1  
**Stable tag:** 1.9.9  
**License:** GPLv2 or later  
**License URI:** [http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html)

[![Wordpress plugin](https://img.shields.io/wordpress/plugin/v/wptelegram-login.svg)](https://wordpress.org/plugins/wptelegram-login/)
[![Wordpress](https://img.shields.io/wordpress/plugin/dt/wptelegram-login.svg)](https://wordpress.org/plugins/wptelegram-login/)
[![Wordpress rating](https://img.shields.io/wordpress/plugin/r/wptelegram-login.svg)](https://wordpress.org/plugins/wptelegram-login/)

Complete contributors list found here: [github.com/manzoorwanijk/wptelegram-login/graphs/contributors](https://github.com/manzoorwanijk/wptelegram-login/graphs/contributors)

**[Download plugin on wordpress.org](https://wordpress.org/plugins/wptelegram-login/)**

## Description

Let the users login to your WordPress website with their Telegram and make it simple for them to get connected and let them receive their email notifications on Telegram.

## Why Telegram Login?

- Removes the lengthy registration forms
- Removes the need for captchas
- Removes the need for email verification
- No “forgot password?” stuff
- Provides enough information about the user

## Features:

- Safe, secure and easy login method
- Relies upon SHA-256 hashed data strings
- User data is trustworthy – verified by Telegram
- Users can remotely logout of the websites
- Can be used to prevent spam registrations
- Easy to install and set up for the admin
- Can be used to let new users sign up
- Existing users can connect their Telegram account
- Users can be given any desired role on the website
- Login button can be displayed anywhere
- Can be extended with custom code

## Widget Info

Goto **Appearance** > **Widgets** and click/drag **WP Telegram Login** and place it where you want it to be.

Alternately, you can use the below shortcode.

Inside page or post content:

`[wptelegram-login button_style="large" show_user_photo="1" corner_radius="15" show_if_user_is="logged_in"]`

Inside the theme templates

```php
<?php
if ( function_exists( 'wptelegram_login' ) ) {
    $args = array(
        // 'show_user_photo' => true,
        // 'corner_radius'   => 15,
        // 'button_style'    => 'large',
        // 'show_if_user_is' => 'logged_out',
    );

    wptelegram_login( $args );
}
?>
```

or

```php
<?php echo do_shortcode( '[wptelegram-login button_style="small" show_user_photo="0" show_if_user_is="logged_in"]' ); ?>
```

### Contribution

Development occurs on Github, and all contributions welcome.

## Translation

If you are looking to provide language translation files, Please do so via [WordPress Plugin Translations](https://translate.wordpress.org/projects/wp-plugins/wptelegram-login).

## Installation

1. Upload the `wptelegram-login` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the Plugins menu in WordPress. After activation, you should see the menu of this plugin the the admin
3. Configure the plugin.
