split2obj
=========

A split stream [https://github.com/dominictarr/split] with default matcher that converts a line with whitespace separated words into a js object based on a supplied keys.

Example:

      github.com sydcanem split2obj

      ...
      .pipe(split2obj(['site', 'author', 'repository']))
      .on('data', function (obj) {
        console.dir(obj)
        // result
        // {site: "github.com", author: "sydcanem", repository: "split2obj"}
      })

Note:
Not a node module yet so no `npm install`. Installation is to grab the repo itself and put the split2obj.js on your projects' lib directory.