Package.describe({
  name: 'zurb:foundation-sites',
  summary: 'Foundation 6 - The most advanced responsive front-end framework in the world.',
  version: '6.5.0-rc.3',
  git: 'https://github.com/zurb/foundation-sites.git',
  documentation: 'meteor-README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.imply('fourseven:scss@3.4.1 || 4.0.0');
  api.use(['ecmascript', 'jquery', 'fourseven:scss@3.4.1 || 4.0.0'], 'client');
  api.addFiles('dist/js/foundation.js', 'client');
  api.addFiles([

    'scss/foundation.scss',
    'scss/_global.scss',
    'scss/settings/_settings.scss',
    'scss/vendor/normalize.scss',

    'scss/components/_accordion-menu.scss',
    'scss/components/_accordion.scss',
    'scss/components/_badge.scss',
    'scss/components/_breadcrumbs.scss',
    'scss/components/_button-group.scss',
    'scss/components/_button.scss',
    'scss/components/_callout.scss',
    'scss/components/_card.scss',
    'scss/components/_close-button.scss',
    'scss/components/_drilldown.scss',
    'scss/components/_dropdown-menu.scss',
    'scss/components/_dropdown.scss',
    'scss/components/_flex-video.scss',
    'scss/components/_flex.scss',
    'scss/components/_float.scss',
    'scss/components/_label.scss',
    'scss/components/_media-object.scss',
    'scss/components/_menu-icon.scss',
    'scss/components/_menu.scss',
    'scss/components/_off-canvas.scss',
    'scss/components/_orbit.scss',
    'scss/components/_pagination.scss',
    'scss/components/_progress-bar.scss',
    'scss/components/_responsive-embed.scss',
    'scss/components/_reveal.scss',
    'scss/components/_slider.scss',
    'scss/components/_sticky.scss',
    'scss/components/_switch.scss',
    'scss/components/_table.scss',
    'scss/components/_tabs.scss',
    'scss/components/_thumbnail.scss',
    'scss/components/_title-bar.scss',
    'scss/components/_tooltip.scss',
    'scss/components/_top-bar.scss',
    'scss/components/_visibility.scss',

    'scss/forms/_checkbox.scss',
    'scss/forms/_error.scss',
    'scss/forms/_fieldset.scss',
    'scss/forms/_forms.scss',
    'scss/forms/_help-text.scss',
    'scss/forms/_input-group.scss',
    'scss/forms/_label.scss',
    'scss/forms/_meter.scss',
    'scss/forms/_progress.scss',
    'scss/forms/_range.scss',
    'scss/forms/_select.scss',
    'scss/forms/_text.scss',

    'scss/grid/_classes.scss',
    'scss/grid/_column.scss',
    'scss/grid/_flex-grid.scss',
    'scss/grid/_grid.scss',
    'scss/grid/_gutter.scss',
    'scss/grid/_layout.scss',
    'scss/grid/_position.scss',
    'scss/grid/_row.scss',
    'scss/grid/_size.scss',

    'scss/prototype/_arrow.scss',
    'scss/prototype/_border-box.scss',
    'scss/prototype/_border-none.scss',
    'scss/prototype/_bordered.scss',
    'scss/prototype/_box.scss',
    'scss/prototype/_display.scss',
    'scss/prototype/_font-styling.scss',
    'scss/prototype/_list-style-type.scss',
    'scss/prototype/_overflow.scss',
    'scss/prototype/_position.scss',
    'scss/prototype/_prototype.scss',
    'scss/prototype/_relation.scss',
    'scss/prototype/_rotate.scss',
    'scss/prototype/_rounded.scss',
    'scss/prototype/_separator.scss',
    'scss/prototype/_shadow.scss',
    'scss/prototype/_sizing.scss',
    'scss/prototype/_spacing.scss',
    'scss/prototype/_text-decoration.scss',
    'scss/prototype/_text-transformation.scss',
    'scss/prototype/_text-utilities.scss',

    'scss/typography/_alignment.scss',
    'scss/typography/_base.scss',
    'scss/typography/_helpers.scss',
    'scss/typography/_print.scss',
    'scss/typography/_typography.scss',

    'scss/util/_breakpoint.scss',
    'scss/util/_color.scss',
    'scss/util/_direction.scss',
    'scss/util/_flex.scss',
    'scss/util/_math.scss',
    'scss/util/_mixins.scss',
    'scss/util/_selector.scss',
    'scss/util/_typography.scss',
    'scss/util/_unit.scss',
    'scss/util/_util.scss',
    'scss/util/_value.scss',

    'scss/xy-grid/_cell.scss',
    'scss/xy-grid/_classes.scss',
    'scss/xy-grid/_collapse.scss',
    'scss/xy-grid/_frame.scss',
    'scss/xy-grid/_grid.scss',
    'scss/xy-grid/_gutters.scss',
    'scss/xy-grid/_layout.scss',
    'scss/xy-grid/_position.scss',
    'scss/xy-grid/_xy-grid.scss',

  ], 'client', {isImport: true});
});
