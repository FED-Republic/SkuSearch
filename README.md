# About
This is a Magento 2 - Sku Search module.
Based on RectJs and modified [Yireo_React](https://github.com/yireo-training/Yireo_React) module.

# Installation

## Check visibility

    php bin/magento module:status

## Installation

Copy module folder to App/Code/Demo folder

    php bin/magento module:enable Demo_SkuSearch
    php bin/magento setup:upgrade

- Add/Check the new entry in `app/etc/config.php`, under the 'modules' section:

        'Demo_SkuSearch' => 1,

- Clear cache

# Usage

        http://yourstore/skusearch/

Feel free to contribute, and contact me for any issues.
slivinky@gmail.com
