function renumberPanels() {
  /// OPTIONS ///
  // Set to true if you want "Page 2 (8 Panels)" instead of just "Page 2"
  const INCLUDE_PANEL_COUNT_ON_PAGE = true
  // Paragraph styles to use for each heading. Set to null to leave as-is.
  const PAGE_HEADING_STYLE = DocumentApp.ParagraphHeading.HEADING3
  const PANEL_HEADING_STYLE = DocumentApp.ParagraphHeading.HEADING4

  // Matches paragraphs like "Page", "Page 5", or "Page 2 (8 Panels)"
  const PAGE_RE = "^Page( \\d+)?( \\(\\d+ Panels\\))?$";
  // Matches paragraphs like "Panel" or "Panel 17"
  const PANEL_RE = "^Panel( \\d+)?$";

  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paras = body.getParagraphs();
  var pageCount = 0;
  var panelCount = 0;
  var curPage = null;
  for (const p of paras) {
    var text = p.getText();
    if (text.match(PAGE_RE)) {
      pageCount++;
      curPage = p;
      console.log(`Page ${pageCount}`);
      panelCount = 0;
      if (PAGE_HEADING_STYLE) {
        p.setHeading(PAGE_HEADING_STYLE)
      };
    }
    if (text.match(PANEL_RE)) {
      panelCount++;
      curPage.setText(`Page ${pageCount}`);
      if (INCLUDE_PANEL_COUNT_ON_PAGE) {
        curPage.appendText(` (${panelCount} Panels)`)
      };
      p.setText(`Panel ${panelCount}`);
      if (PANEL_HEADING_STYLE) {
        p.setHeading(PANEL_HEADING_STYLE);
      }
      console.log(`Panel ${panelCount}`);
    }
  }
}
