# Meta Dates Blocks
WordPress Gutenberg blocks to output the published date and last modified date for your posts, with the option to add a label. Made so that I can figure out how blocks work and so that I could have a last modified date block to use in a FSE theme.

## Modifying

Clone this repo, then run `npm install`.
Make changes.
Run `npm run build`.


## Credits

I used [George Stephanis's Your First Block gist](https://gist.github.com/georgestephanis/f790524891e1a6e1b457b2e91a794589) as a template to get started.

Other resources that I used to figure this out:
- https://github.com/WordPress/gutenberg-examples
- https://developer.wordpress.org/block-editor/reference-guides/data/
- https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
- https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/
- https://wholesomecode.ltd/getpostmeta-wordpress-block-editor-gutenberg-equivalent-is-geteditedpostattributemeta
 - This helped me figure out `getEditedPostAttribute` and that I could dig around in the console in the post editor to see all of the attributes I could access, which is how I found `date` and `modified`

