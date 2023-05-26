# Renumber Panels

This is a quick and dirty Google Docs script to renumber comics script pages and panels.

To use this, click Extensions > Apps Script on your Google Doc and paste the script in (renumberPanels.gs) into the editor. Then click Run.

It will look for page paragraphs like these:

    Page
    Page 5
    Page 2 (8 Panels)
    
And panel paragraphs like these:

    Panel
    Panel 17

And renumber them automatically. It will also include the Panel Count in the Page heading (you can turn this off by changing the options at the top of the script). It will also set the Heading styles for these lines (defaults to Heading 3 for pages and Heading 4 for panels).
