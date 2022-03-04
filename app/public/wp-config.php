<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'qD2omvnQyJQPYLmSBbBLR2FF0/OYYSpR4ylLP2omoHFBnEMfKdU3Z0m+PpYUtoePNwzjXi23uRdgO8Mqae8y3Q==');
define('SECURE_AUTH_KEY',  'SvGRN+4nM2NXlMoWn6VOyeqJVKyFN0UxkZ+t804OFRMOy2FJqNvtBgToCGhZu+KMxP30O6evlu+dX6x/GJu8cg==');
define('LOGGED_IN_KEY',    'H6w1jo8jzpVwhV7iA5S+KBY0BxKvPfiThbEzj59ug7UnjDm052728fgjg0/9DfLmK1dLzg9EJEq4Jty/QCdq0A==');
define('NONCE_KEY',        'a4E9DE92RRoCLwIUM10v1qSlJIpJtrFPPLUmdYufxruk28lizWvDc/89eL3gxaZGEisnMi8dbL2xdJMg7MYjUQ==');
define('AUTH_SALT',        'TpY8a6cdmKKt0FUXFmMe1B0TLlOEzG9c/ciaMm54kOpXJeQRu1/3b8u0mQjcJ8vfrGbUwFBz0IW1qz8JG2XXLw==');
define('SECURE_AUTH_SALT', '0HELmhzOR/dssy9PAyxeCaba/xgb+pdSMk1zVNygVHGAmcm6yH7XPTKHXYGTLO87wMJVa2Sl/Zpx1EPak9XXvQ==');
define('LOGGED_IN_SALT',   '7+1VO45iyb0ECEkUSLdvS6RYF1SF/nBeFjastAG8vo7svVU/9tR4KOQu/Hn2rLzXmPCBrgpH2g03shcijBkLQg==');
define('NONCE_SALT',       '/GR6MLxvVcVUZ34U7WPOU6ucY3LRs45lKWYw4y80wXdrayvVx8Tx5CDLPMNJUx9h2eMfiCFM5u1zn0lB3Gfndg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
