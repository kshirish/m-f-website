Similar to AreaPageTemplate .. let's create a generic SuburbPageTemplate. Move all hard-coded texts specific to each suburb into the `src/constants/common.js` file, and then import and use these constants in the corresponding suburb components.

SydneySuburbPage will not needed now. We get rid of it and use SuburbPageTemplate instead.

Now that you would have updated src/pages/areas/sydney first - index page as well as its suburbs. We can proceed with the other areas.

Let's add the same consistency to the remaining areas and their suburbs.

By consistency: I mean moving all hard-coded texts specific to each area and its suburbs into the `src/constants/common.js` file, and then importing and using these constants in the corresponding area and suburb components. Use AreaPageTemplate for the area pages and SuburbPageTemplate for the suburb pages.
